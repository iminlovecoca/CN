// Vercel Serverless Function: Secure Server-Side AI Gateway
// Allows any client (phone, laptop) to chat & grade essays with Gemini / OpenAI
// without exposing API keys to GitHub or client-side code.

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, text, persona, promptData } = req.body || {};
  const geminiKey = process.env.GEMINI_API_KEY;
  const openAiKey = process.env.OPENAI_API_KEY;

  if (!geminiKey && !openAiKey) {
    return res.status(200).json({ success: false, reason: 'no_server_keys' });
  }

  // ACTION 1: CHAT WITH NATIVE PERSONA
  if (action === 'chat' && text && persona) {
    const chatPrompt = `Bạn đang nhập vai nhân vật người Trung Quốc: ${persona.name} (${persona.role}).
Bối cảnh tính cách: ${persona.systemPrompt || persona.desc || ''}.
Người đang trò chuyện với bạn là Ngọc Ánh (玉映), một bạn nữ học tiếng Trung rất chăm chỉ và đáng yêu.
Tin nhắn vừa nhận được từ Ngọc Ánh: "${text}".

Hãy trả lời bằng tiếng Trung tự nhiên, giàu cảm xúc, đúng phong thái vai diễn (nếu là Sếp thì lịch thiệp chuyên nghiệp, nếu là bạn thân hoặc Tiểu Mẫn thì dí dỏm dùng từ lóng, nếu là Dì Trần thì ấm áp tình thân).

BẮT BUỘC TRẢ VỀ ĐÚNG ĐỊNH DẠNG JSON SAU (không kèm giải thích nào khác ngoài JSON):
{
  "hanzi": "câu trả lời tiếng Trung tự nhiên của bạn",
  "pinyin": "phiên âm pinyin chuẩn có dấu thanh điệu",
  "vi": "bản dịch tiếng Việt ấm áp gần gũi",
  "nextReplies": [
    { "text": "câu gợi ý phản hồi tiếng Trung 1 cho Ngọc Ánh", "label": "nhãn 1" },
    { "text": "câu gợi ý phản hồi tiếng Trung 2 cho Ngọc Ánh", "label": "nhãn 2" }
  ]
}`;

    // Try Gemini first
    if (geminiKey) {
      try {
        const gRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: chatPrompt }] }],
            generationConfig: { temperature: 0.8, responseMimeType: 'application/json' }
          })
        });
        if (gRes.ok) {
          const gData = await gRes.json();
          const cand = gData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (cand) {
            const parsed = JSON.parse(cand);
            return res.status(200).json({ success: true, data: parsed, engine: 'Gemini AI' });
          }
        }
      } catch (err) {
        console.warn('Gemini chat error on server:', err.message);
      }
    }

    // Try OpenAI fallback
    if (openAiKey) {
      try {
        const oRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: 'You are a native Chinese tutor communicating in valid JSON.' },
              { role: 'user', content: chatPrompt }
            ],
            response_format: { type: 'json_object' },
            temperature: 0.8
          })
        });
        if (oRes.ok) {
          const oData = await oRes.json();
          const cand = oData.choices?.[0]?.message?.content;
          if (cand) {
            const parsed = JSON.parse(cand);
            return res.status(200).json({ success: true, data: parsed, engine: 'OpenAI GPT-4o' });
          }
        }
      } catch (err) {
        console.warn('OpenAI chat error on server:', err.message);
      }
    }
  }

  // ACTION 2: ESSAY GRADING
  if (action === 'grade' && text && promptData) {
    const gradePrompt = `Bạn là một giảng viên tiếng Trung cao cấp và biên tập viên Hán ngữ bản xứ chuyên nghiệp.
Hãy chấm bài viết sau của học viên Ngọc Ánh (rất chăm chỉ, đáng yêu).
Chủ đề: "${promptData.title}". Mô tả: "${promptData.desc}".
Yêu cầu đề bài: ${(promptData.requirements || []).join('; ')}.
Bài viết của học viên:
"${text}"

Hãy chấm điểm công tâm, chỉ ra luận điểm đúng, điểm hay, điểm yếu ngữ pháp hoặc dùng từ gượng gạo, và gợi ý câu sửa chuẩn mực.
BẮT BUỘC TRẢ VỀ JSON HỢP LỆ VỚI CẤU TRÚC:
{
  "score": 90,
  "verdict": "Lời nhận xét tổng quan ấm áp, khích lệ",
  "strengths": ["Ưu điểm 1", "Ưu điểm 2"],
  "weaknesses": ["Điểm cần lưu ý 1", "Điểm cần lưu ý 2"],
  "corrections": [
    { "original": "câu gốc học viên viết", "improved": "câu sửa tự nhiên hơn", "explanation": "giải thích chi tiết tại sao sửa" }
  ],
  "hskLevel": "HSK 2 - 3",
  "encouragement": "Lời chúc ngọt ngào động viên nàng"
}`;

    if (geminiKey) {
      try {
        const gRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: gradePrompt }] }],
            generationConfig: { temperature: 0.4, responseMimeType: 'application/json' }
          })
        });
        if (gRes.ok) {
          const gData = await gRes.json();
          const cand = gData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (cand) {
            const parsed = JSON.parse(cand);
            return res.status(200).json({ success: true, data: parsed, engine: 'Gemini AI' });
          }
        }
      } catch (err) {
        console.warn('Gemini grade error on server:', err.message);
      }
    }

    if (openAiKey) {
      try {
        const oRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: 'You are a professional Chinese teacher responding in valid JSON.' },
              { role: 'user', content: gradePrompt }
            ],
            response_format: { type: 'json_object' },
            temperature: 0.4
          })
        });
        if (oRes.ok) {
          const oData = await oRes.json();
          const cand = oData.choices?.[0]?.message?.content;
          if (cand) {
            const parsed = JSON.parse(cand);
            return res.status(200).json({ success: true, data: parsed, engine: 'OpenAI GPT-4o' });
          }
        }
      } catch (err) {
        console.warn('OpenAI grade error on server:', err.message);
      }
    }
  }

  return res.status(200).json({ success: false, reason: 'all_engines_failed' });
};
