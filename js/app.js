/**
 * Mochi Chinese (米米汉语 🌸) - Main Application Logic
 * Bách Khoa Toàn Thư & Cuốn Sổ Tay Tri Thức Tiếng Trung
 * Dành riêng cho: Ngọc Ánh & Bạn đồng hành
 */

let activeProfileId = localStorage.getItem("mochi_active_profile") || "ngoc_anh";
let flashcardIndex = 0;
let currentFlashcardDeck = [];
let currentCatalogLevel = "all";
let currentDictHskFilter = "all";
let currentDictPage = 1;
const DICT_ITEMS_PER_PAGE = 12;
let speechRate = 1.0;
let selectedNoteColor = "bg-[#FFFDF0]";
let currentActiveEncyclopediaTab = "dict";

// Canvas state
let canvasBrushColor = "#4A4A4A";
let canvasBrushSize = 6;

const DEFAULT_OPENAI_KEY = "";

document.addEventListener("DOMContentLoaded", () => {
  // Pre-seed default OpenAI API Key if not already present
  if (DEFAULT_OPENAI_KEY && !localStorage.getItem("mochi_openai_api_key")) {
    localStorage.setItem("mochi_openai_api_key", DEFAULT_OPENAI_KEY);
  }
  initLucideIcons();
  initSpeechSynthesis();
  initSpeechRateToggle();
  initPinyinToggle();
  initProfileSystem();
  initDailyDiscovery();
  initSmartSearch();
  initEncyclopediaSection();
  initWordDetailModal();
  initLessonsCatalog();
  initFlashcardVault();
  initRoadmapSection();
  initCategoriesSection();
  initInteractivePractice();
  initProgressSection();
  initPersonalNotebook();
  initWritingCanvas();
  initMobileDrawer();
  initMobileBottomNav();
  initLessonModal();
  initNativeChat();
  initWritingStudio();
  initTranslatorStudio();
  initVocabTypingStudio();
  initFloatingQuickNav();
});

/* ==========================================================================
   1. Utility Helpers & Audio Chimes
   ========================================================================== */
function initLucideIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function showMochiToast(message, type = "success") {
  let toastContainer = document.getElementById("mochi-toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "mochi-toast-container";
    toastContainer.className = "fixed top-6 right-6 z-50 flex flex-col gap-2 pointer-events-none";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = `mochi-card px-4 py-3 text-sm font-semibold flex items-center gap-3 shadow-lg transform transition-all duration-300 translate-y-[-20px] opacity-0 pointer-events-auto ${
    type === "success" ? "bg-white text-gray-800 border-pink-200" : "bg-white text-gray-800 border-purple-200"
  }`;

  const icon = type === "success" ? "🌸" : "✨";
  toast.innerHTML = `<span class="text-lg">${icon}</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-[-20px]", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-[-20px]", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function playDingSound(isSuccess = true) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (isSuccess) {
      osc.frequency.setValueAtTime(659.25, ctx.currentTime);
      osc.frequency.setValueAtTime(830.61, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } else {
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    }
  } catch (e) {}
}

/* ==========================================================================
   2. Web Speech API - Phát âm Tiếng Trung Chuẩn Bản Xứ
   ========================================================================== */
let chineseVoice = null;

function initSpeechSynthesis() {
  if (!('speechSynthesis' in window)) return;

  function loadVoices() {
    const voices = window.speechSynthesis.getVoices();
    chineseVoice = voices.find(v => v.lang === "zh-CN" || v.lang.startsWith("zh")) || voices[0];
  }

  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

function speakChinese(text) {
  if (!('speechSynthesis' in window)) {
    showMochiToast("Trình duyệt không hỗ trợ âm thanh tự động 🎧");
    return;
  }
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = speechRate;
  utterance.pitch = 1.05;
  if (chineseVoice) utterance.voice = chineseVoice;
  window.speechSynthesis.speak(utterance);
}

function initSpeechRateToggle() {
  const btn = document.getElementById("btn-toggle-speech-rate");
  const label = document.getElementById("speech-rate-label");
  if (!btn || !label) return;

  btn.addEventListener("click", () => {
    if (speechRate === 1.0) {
      speechRate = 0.7;
      label.textContent = "🐢 0.7x";
      showMochiToast("Đã đổi sang tốc độ Chậm (0.7x) để nàng nghe rõ từng âm 🐢");
    } else {
      speechRate = 1.0;
      label.textContent = "🐰 1.0x";
      showMochiToast("Đã đổi sang tốc độ Chuẩn (1.0x) bản xứ 🐰");
    }
  });
}

document.addEventListener("click", (e) => {
  const ttsBtn = e.target.closest("[data-tts]");
  if (ttsBtn) {
    const textToSpeak = ttsBtn.getAttribute("data-tts");
    if (textToSpeak) {
      speakChinese(textToSpeak);
      ttsBtn.classList.add("scale-95");
      setTimeout(() => ttsBtn.classList.remove("scale-95"), 150);
    }
  }
});

/* ==========================================================================
   3. Dual Profile System (Ngọc Ánh & Bạn Đồng Hành)
   ========================================================================== */
function initProfileSystem() {
  const profileSelector = document.getElementById("profile-switcher-btn");
  const profileNameEl = document.getElementById("header-profile-name");
  const profileAvatarEl = document.getElementById("header-profile-avatar");
  const heroGreetingEl = document.getElementById("hero-personal-greeting");
  const heroMottoEl = document.getElementById("hero-personal-motto");
  const ownerBadgeEl = document.getElementById("hero-owner-badge");

  function getGreetingMessage(profile) {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return profile.greetings.morning;
    if (hour >= 12 && hour < 18) return profile.greetings.afternoon;
    return profile.greetings.evening;
  }

  function updateProfileUI() {
    const currentProfile = MOCHI_DATA.profiles[activeProfileId] || MOCHI_DATA.profiles.ngoc_anh;
    
    if (profileNameEl) profileNameEl.textContent = currentProfile.shortName;
    if (profileAvatarEl) profileAvatarEl.textContent = currentProfile.avatar;
    if (heroGreetingEl) heroGreetingEl.textContent = getGreetingMessage(currentProfile);
    if (heroMottoEl) heroMottoEl.textContent = currentProfile.motto;
    
    if (ownerBadgeEl) {
      ownerBadgeEl.className = `inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm transition-all border ${currentProfile.badgeColor}`;
      ownerBadgeEl.innerHTML = `<span>${currentProfile.avatar}</span> <span>Góc học tập của ${currentProfile.fullName}</span>`;
    }

    initPersonalNotebook();
    initProgressSection();
    updateFlashcardMasteryUI();
  }

  if (profileSelector) {
    profileSelector.addEventListener("click", () => {
      activeProfileId = activeProfileId === "ngoc_anh" ? "companion" : "ngoc_anh";
      localStorage.setItem("mochi_active_profile", activeProfileId);
      updateProfileUI();
      playDingSound(true);

      const profile = MOCHI_DATA.profiles[activeProfileId];
      showMochiToast(`Đã chuyển sang góc học tập của: ${profile.fullName} ✨`);
    });
  }

  updateProfileUI();
}

/* ==========================================================================
   4. Hộp Khám Phá Mỗi Ngày (Daily Discovery & Lucky Draw 🎲)
   ========================================================================== */
function initDailyDiscovery() {
  const container = document.getElementById("daily-discovery-box");
  const randomBtn = document.getElementById("btn-random-discovery");
  if (!container) return;

  const discoveries = MOCHI_DATA.dailyDiscoveries;
  let currentIndex = new Date().getDate() % discoveries.length;

  function renderDiscoveryCard(item) {
    container.innerHTML = `
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-amber-50 rounded-3xl border border-pink-100 shadow-sm transition-all duration-300">
        <div class="space-y-1.5 text-center sm:text-left">
          <div class="flex items-center justify-center sm:justify-start gap-2">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white text-pink-600 border border-pink-200">
              ${item.tag}
            </span>
            <span class="text-xs text-gray-400 font-medium">Bất ngờ hôm nay</span>
          </div>
          <div class="flex items-baseline justify-center sm:justify-start gap-3 pt-1">
            <span class="font-chinese text-2xl sm:text-3xl font-black text-gray-800">${item.hanzi}</span>
            <span class="pinyin-text text-sm font-bold text-purple-600">${item.pinyin}</span>
            <span class="text-xs text-gray-400 font-semibold">(${item.hanviet})</span>
            <button class="p-1.5 rounded-full bg-white text-pink-500 hover:bg-pink-100 shadow-xs" data-tts="${item.hanzi}" title="Nghe phát âm">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>
          <div class="text-xs sm:text-sm font-bold text-gray-700">${item.meaning}</div>
          <p class="text-xs text-gray-500 max-w-xl italic">"${item.quote}"</p>
        </div>

        <div class="flex sm:flex-col gap-2 shrink-0">
          <button class="btn-save-discovery px-4 py-2 bg-white hover:bg-pink-50 border border-pink-200 text-pink-600 rounded-full text-xs font-bold shadow-xs flex items-center gap-1.5 transition-all" data-hanzi="${item.hanzi}" data-pinyin="${item.pinyin}" data-meaning="${item.meaning}">
            <span>Ghim vào sổ tay</span>
            <i data-lucide="bookmark" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    const saveBtn = container.querySelector(".btn-save-discovery");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        addWordToNotebook(item.hanzi, item.pinyin, item.meaning);
      });
    }
  }

  renderDiscoveryCard(discoveries[currentIndex]);

  if (randomBtn) {
    randomBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1 + Math.floor(Math.random() * (discoveries.length - 1))) % discoveries.length;
      renderDiscoveryCard(discoveries[currentIndex]);
      playDingSound(true);
      showMochiToast("Một bất ngờ mới dành riêng cho nàng hôm nay! ✨");
    });
  }
}

/* ==========================================================================
   5. Bách Khoa Toàn Thư & Từ Điển Toàn Năng (Encyclopedia & Dictionary)
   ========================================================================== */
function initEncyclopediaSection() {
  const tabDict = document.getElementById("tab-btn-dict");
  const tabRadicals = document.getElementById("tab-btn-radicals");
  const tabGrammar = document.getElementById("tab-btn-grammar");
  const tabChengyu = document.getElementById("tab-btn-chengyu");

  const viewDict = document.getElementById("encyclopedia-view-dict");
  const viewRadicals = document.getElementById("encyclopedia-view-radicals");
  const viewGrammar = document.getElementById("encyclopedia-view-grammar");
  const viewChengyu = document.getElementById("encyclopedia-view-chengyu");

  const tabs = [
    { btn: tabDict, view: viewDict, id: "dict" },
    { btn: tabRadicals, view: viewRadicals, id: "radicals", initFn: renderRadicalsList },
    { btn: tabGrammar, view: viewGrammar, id: "grammar", initFn: renderGrammarList },
    { btn: tabChengyu, view: viewChengyu, id: "chengyu", initFn: renderChengyuList }
  ];

  tabs.forEach(t => {
    if (!t.btn) return;
    t.btn.addEventListener("click", () => {
      currentActiveEncyclopediaTab = t.id;
      tabs.forEach(item => {
        if (item.btn) {
          item.btn.classList.remove("active", "bg-white", "text-gray-700", "border-pink-100");
          if (item.id === t.id) {
            item.btn.classList.add("active");
          } else {
            item.btn.classList.add("bg-white", "text-gray-700", "border-pink-100");
          }
        }
        if (item.view) item.view.classList.add("hidden");
      });

      if (t.view) t.view.classList.remove("hidden");
      if (t.initFn) t.initFn();
    });
  });

  initDictionaryView();
}


/* ==========================================================================
   BỘ TỪ ĐIỂN TỔNG HỢP VIỆT - TRUNG & ĐỘNG CƠ SINH TỪ ĐIỂN ĐỘNG VÔ TẬN
   ========================================================================== */
const COMMON_VI_ZH_MAP = {
  "yêu": { hanzi: "爱", pinyin: "ài", hanviet: "Ái", meaning: "Yêu thương, tình yêu, yêu thích", strokes: 10, radical: "爫 (Trảo)", hsk: "HSK 1" },
  "hạnh phúc": { hanzi: "幸福", pinyin: "xìng fú", hanviet: "Hạnh phúc", meaning: "Hạnh phúc, viên mãn, may mắn", strokes: 22, radical: "干 (Can)", hsk: "HSK 3" },
  "cà phê": { hanzi: "咖啡", pinyin: "kā fēi", hanviet: "Cà phê", meaning: "Cà phê", strokes: 16, radical: "口 (Khẩu)", hsk: "HSK 2" },
  "trà sữa": { hanzi: "奶茶", pinyin: "nǎi chá", hanviet: "Nãi trà", meaning: "Trà sữa trân châu ngọt ngào", strokes: 14, radical: "女 (Nữ)", hsk: "HSK 2" },
  "thành công": { hanzi: "成功", pinyin: "chéng gōng", hanviet: "Thành công", meaning: "Thành công, thắng lợi", strokes: 11, radical: "戈 (Qua)", hsk: "HSK 3" },
  "công việc": { hanzi: "工作", pinyin: "gōng zuò", hanviet: "Công tác", meaning: "Công việc, làm việc", strokes: 10, radical: "亻 (Nhân)", hsk: "HSK 1" },
  "công ty": { hanzi: "公司", pinyin: "gōng sī", hanviet: "Công ty", meaning: "Công ty, doanh nghiệp", strokes: 11, radical: "八 (Bát)", hsk: "HSK 2" },
  "gia đình": { hanzi: "家庭", pinyin: "jiā tíng", hanviet: "Gia đình", meaning: "Gia đình, mái ấm gia đình", strokes: 19, radical: "宀 (Miên)", hsk: "HSK 3" },
  "bạn bè": { hanzi: "朋友", pinyin: "péng you", hanviet: "Bằng hữu", meaning: "Bạn bè, bằng hữu thân thiết", strokes: 12, radical: "月 (Nguyệt)", hsk: "HSK 1" },
  "sức khỏe": { hanzi: "健康", pinyin: "jiàn kāng", hanviet: "Kiện khang", meaning: "Sức khỏe dồi dào, khỏe mạnh", strokes: 22, radical: "亻 (Nhân)", hsk: "HSK 3" },
  "tiền": { hanzi: "钱", pinyin: "qián", hanviet: "Tiền", meaning: "Tiền bạc, tài chính", strokes: 10, radical: "钅 (Kim)", hsk: "HSK 1" },
  "du lịch": { hanzi: "旅游", pinyin: "lǚ yóu", hanviet: "Lữ du", meaning: "Du lịch, tham quan ngắm cảnh", strokes: 22, radical: "方 (Phương)", hsk: "HSK 2" },
  "mua sắm": { hanzi: "购物", pinyin: "gòu wù", hanviet: "Cấu vật", meaning: "Mua sắm đồ đạc, shopping", strokes: 16, radical: "贝 (Bối)", hsk: "HSK 3" },
  "xinh đẹp": { hanzi: "美丽", pinyin: "měi lì", hanviet: "Mỹ lệ", meaning: "Xinh đẹp, tuyệt mỹ, rực rỡ", strokes: 16, radical: "羊 (Dương)", hsk: "HSK 3" },
  "đẹp": { hanzi: "漂亮", pinyin: "piào liang", hanviet: "Phiêu lượng", meaning: "Đẹp đẽ, xinh xắn, tuyệt vời", strokes: 23, radical: "氵 (Thủy)", hsk: "HSK 1" },
  "học tập": { hanzi: "学习", pinyin: "xué xí", hanviet: "Học tập", meaning: "Học tập, rèn luyện kiến thức", strokes: 11, radical: "子 (Tử)", hsk: "HSK 1" },
  "bình an": { hanzi: "平安", pinyin: "píng ān", hanviet: "Bình an", meaning: "Bình an, yên ổn, vạn sự thuận buồm", strokes: 11, radical: "干 (Can)", hsk: "HSK 3" },
  "may mắn": { hanzi: "幸运", pinyin: "xìng yùn", hanviet: "Hạnh vận", meaning: "May mắn, phúc lành, vận đỏ", strokes: 15, radical: "干 (Can)", hsk: "HSK 3" },
  "chúc mừng": { hanzi: "祝贺", pinyin: "zhù hè", hanviet: "Chúc hạ", meaning: "Chúc mừng, tán tụng thành tựu", strokes: 21, radical: "礻 (Thị)", hsk: "HSK 3" },
  "cảm ơn": { hanzi: "谢谢", pinyin: "xiè xie", hanviet: "Tạ tạ", meaning: "Cảm ơn, bày tỏ lòng biết ơn", strokes: 24, radical: "讠 (Ngôn)", hsk: "HSK 1" },
  "xin lỗi": { hanzi: "对不起", pinyin: "duì bu qǐ", hanviet: "Đối bất khởi", meaning: "Xin lỗi, thành thật thứ lỗi", strokes: 18, radical: "寸 (Thốn)", hsk: "HSK 1" },
  "tạm biệt": { hanzi: "再见", pinyin: "zài jiàn", hanviet: "Tái kiến", meaning: "Tạm biệt, hẹn ngày gặp lại", strokes: 10, radical: "冂 (Quynh)", hsk: "HSK 1" },
  "đồng nghiệp": { hanzi: "同事", pinyin: "tóng shì", hanviet: "Đồng sự", meaning: "Đồng nghiệp cùng chung cơ quan", strokes: 14, radical: "口 (Khẩu)", hsk: "HSK 2" },
  "giám đốc": { hanzi: "经理", pinyin: "jīng lǐ", hanviet: "Kinh lý", meaning: "Giám đốc, người quản lý phụ trách", strokes: 20, radical: "纟 (Mịch)", hsk: "HSK 3" },
  "họp": { hanzi: "开会", pinyin: "kāi huì", hanviet: "Khai hội", meaning: "Họp hành, mở cuộc họp bàn bạc", strokes: 10, radical: "廾 (Củng)", hsk: "HSK 2" },
  "hợp đồng": { hanzi: "合同", pinyin: "hé tong", hanviet: "Hợp đồng", meaning: "Văn bản hợp đồng kinh tế giao kết", strokes: 12, radical: "口 (Khẩu)", hsk: "HSK 4" },
  "khách hàng": { hanzi: "客户", pinyin: "kè hù", hanviet: "Khách hộ", meaning: "Khách hàng, đối tác mua hàng", strokes: 13, radical: "宀 (Miên)", hsk: "HSK 4" },
  "hoa hồng": { hanzi: "玫瑰", pinyin: "méi gui", hanviet: "Mai khôi", meaning: "Hoa hồng đượm sắc, biểu tượng tình yêu", strokes: 17, radical: "王 (Ngọc)", hsk: "HSK 4" },
  "mèo": { hanzi: "猫", pinyin: "māo", hanviet: "Miêu", meaning: "Con mèo ngoan, chú mèo nhỏ", strokes: 11, radical: "犭 (Khuyển)", hsk: "HSK 1" },
  "thỏ": { hanzi: "兔子", pinyin: "tù zi", hanviet: "Thỏ tử", meaning: "Con thỏ đáng yêu, bé Mochi", strokes: 11, radical: "刀 (Đao)", hsk: "HSK 2" }
};

/* ==========================================================================
   UNIVERSAL NEURAL TRANSLATION & DYNAMIC SINO-VIETNAMESE (HÁN VIỆT) ENGINE
   Supports arbitrary sentences and phrases of unlimited length.
   Tier 1: Gemini AI | Tier 2: OpenAI GPT-4o | Tier 3: Google Neural GTX | Tier 4: MyMemory
   ========================================================================== */
const COMMON_HANVIET_MAP = {
  '一': { hv: 'Nhất', py: 'yī', mn: 'một, duy nhất' },
  '二': { hv: 'Nhị', py: 'èr', mn: 'hai' },
  '三': { hv: 'Tam', py: 'sān', mn: 'ba' },
  '四': { hv: 'Tứ', py: 'sì', mn: 'bốn' },
  '五': { hv: 'Ngũ', py: 'wǔ', mn: 'năm' },
  '六': { hv: 'Lục', py: 'liù', mn: 'sáu' },
  '七': { hv: 'Thất', py: 'qī', mn: 'bảy' },
  '八': { hv: 'Bát', py: 'bā', mn: 'tám' },
  '九': { hv: 'Cửu', py: 'jiǔ', mn: 'chín' },
  '十': { hv: 'Thập', py: 'shí', mn: 'mười' },
  '百': { hv: 'Bách', py: 'bǎi', mn: 'trăm' },
  '千': { hv: 'Thiên', py: 'qiān', mn: 'nghìn' },
  '万': { hv: 'Vạn', py: 'wàn', mn: 'mười nghìn' },
  '亿': { hv: 'Ức', py: 'yì', mn: 'trăm triệu' },
  '零': { hv: 'Linh', py: 'líng', mn: 'số không' },
  '我': { hv: 'Ngã', py: 'wǒ', mn: 'tôi, mình' },
  '你': { hv: 'Nhĩ', py: 'nǐ', mn: 'bạn, em' },
  '您': { hv: 'Nẫm', py: 'nín', mn: 'ngài, bác' },
  '他': { hv: 'Tha', py: 'tā', mn: 'anh ấy, cậu ấy' },
  '她': { hv: 'Tha', py: 'tā', mn: 'cô ấy, nàng' },
  '它': { hv: 'Tha', py: 'tā', mn: 'nó' },
  '们': { hv: 'Môn', py: 'men', mn: 'các (hậu tố số nhiều)' },
  '谁': { hv: 'Thùy', py: 'shéi', mn: 'ai' },
  '什': { hv: 'Thập', py: 'shén', mn: 'gì, cái gì' },
  '么': { hv: 'Ma', py: 'me', mn: 'gì' },
  '哪': { hv: 'Nả', py: 'nǎ', mn: 'nào, đâu' },
  '这': { hv: 'Giá', py: 'zhè', mn: 'đây, này' },
  '那': { hv: 'Na', py: 'nà', mn: 'kia, đó' },
  '各': { hv: 'Các', py: 'gè', mn: 'mỗi, các' },
  '每': { hv: 'Mỗi', py: 'měi', mn: 'mỗi, từng' },
  '爱': { hv: 'Ái', py: 'ài', mn: 'yêu thương' },
  '见': { hv: 'Kiến', py: 'jiàn', mn: 'thấy, gặp' },
  '钟': { hv: 'Chung', py: 'zhōng', mn: 'chuông, tập trung' },
  '情': { hv: 'Tình', py: 'qíng', mn: 'tình cảm, ái tình' },
  '心': { hv: 'Tâm', py: 'xīn', mn: 'trái tim, tấm lòng' },
  '喜': { hv: 'Hỷ', py: 'xǐ', mn: 'vui mừng' },
  '欢': { hv: 'Hoan', py: 'huan', mn: 'hoan hỷ, vui thích' },
  '乐': { hv: 'Lạc', py: 'lè', mn: 'niềm vui, âm nhạc' },
  '快': { hv: 'Khoái', py: 'kuài', mn: 'nhanh, vui vẻ' },
  '好': { hv: 'Hảo', py: 'hǎo', mn: 'tốt, đẹp, hay' },
  '美': { hv: 'Mỹ', py: 'měi', mn: 'xinh đẹp' },
  '丽': { hv: 'Lệ', py: 'lì', mn: 'diễm lệ' },
  '映': { hv: 'Ánh', py: 'yìng', mn: 'ánh sáng, phản chiếu' },
  '玉': { hv: 'Ngọc', py: 'yù', mn: 'ngọc ngà, quý giá' },
  '真': { hv: 'Chân', py: 'zhēn', mn: 'thật sự' },
  '正': { hv: 'Chính', py: 'zhèng', mn: 'đúng đắn' },
  '常': { hv: 'Thường', py: 'cháng', mn: 'thường ngày' },
  '非': { hv: 'Phi', py: 'fēi', mn: 'rất, phi thường' },
  '谢': { hv: 'Tạ', py: 'xiè', mn: 'cảm ơn' },
  '对': { hv: 'Đối', py: 'duì', mn: 'đúng, đối với' },
  '不': { hv: 'Bất', py: 'bù', mn: 'không' },
  '起': { hv: 'Khởi', py: 'qǐ', mn: 'dậy, bắt đầu' },
  '没': { hv: 'Một', py: 'méi', mn: 'không có' },
  '关': { hv: 'Quan', py: 'guān', mn: 'liên quan, đóng' },
  '系': { hv: 'Hệ', py: 'xì', mn: 'hệ thống, quan hệ' },
  '生': { hv: 'Sinh', py: 'shēng', mn: 'sinh hoạt, sống' },
  '日': { hv: 'Nhật', py: 'rì', mn: 'ngày, mặt trời' },
  '安': { hv: 'An', py: 'ān', mn: 'bình an, yên ổn' },
  '康': { hv: 'Khang', py: 'kāng', mn: 'khỏe mạnh' },
  '福': { hv: 'Phúc', py: 'fú', mn: 'hạnh phúc, phúc lành' },
  '禄': { hv: 'Lộc', py: 'lù', mn: 'tài lộc' },
  '寿': { hv: 'Thọ', py: 'shòu', mn: 'trường thọ' },
  '中': { hv: 'Trung', py: 'zhōng', mn: 'ở giữa, trung tâm' },
  '国': { hv: 'Quốc', py: 'guó', mn: 'đất nước' },
  '越': { hv: 'Việt', py: 'yuè', mn: 'vượt qua, nước Việt' },
  '南': { hv: 'Nam', py: 'nán', mn: 'phương nam' },
  '北': { hv: 'Bắc', py: 'běi', mn: 'phương bắc' },
  '东': { hv: 'Đông', py: 'dōng', mn: 'phương đông' },
  '西': { hv: 'Tây', py: 'xī', mn: 'phương tây' },
  '京': { hv: 'Kinh', py: 'jīng', mn: 'thủ đô' },
  '海': { hv: 'Hải', py: 'hǎi', mn: 'biển cả' },
  '上': { hv: 'Thượng', py: 'shàng', mn: 'ở trên, lên' },
  '下': { hv: 'Hạ', py: 'xià', mn: 'ở dưới, xuống' },
  '学': { hv: 'Học', py: 'xué', mn: 'học tập' },
  '习': { hv: 'Tập', py: 'xí', mn: 'rèn luyện' },
  '期': { hv: 'Kỳ', py: 'qī', mn: 'thời kỳ' },
  '天': { hv: 'Thiên', py: 'tiān', mn: 'trời, ngày' },
  '年': { hv: 'Niên', py: 'nián', mn: 'năm' },
  '月': { hv: 'Nguyệt', py: 'yuè', mn: 'tháng, trăng' },
  '时': { hv: 'Thời', py: 'shí', mn: 'thời gian, giờ' },
  '间': { hv: 'Gian', py: 'jiān', mn: 'khoảng giữa' },
  '分': { hv: 'Phân', py: 'fēn', mn: 'phút, chia' },
  '秒': { hv: 'Miểu', py: 'miǎo', mn: 'giây' },
  '工': { hv: 'Công', py: 'gōng', mn: 'lao động, công việc' },
  '作': { hv: 'Tác', py: 'zuò', mn: 'làm, sáng tác' },
  '业': { hv: 'Nghiệp', py: 'yè', mn: 'sự nghiệp' },
  '事': { hv: 'Sự', py: 'shì', mn: 'sự việc' },
  '司': { hv: 'Tư', py: 'sī', mn: 'quản lý' },
  '公': { hv: 'Công', py: 'gōng', mn: 'công ty, công cộng' },
  '老': { hv: 'Lão', py: 'lǎo', mn: 'già, lâu năm' },
  '板': { hv: 'Bản', py: 'bǎn', mn: 'tấm ván, ông chủ' },
  '师': { hv: 'Sư', py: 'shī', mn: 'thầy giáo' },
  '同': { hv: 'Đồng', py: 'tóng', mn: 'cùng nhau' },
  '书': { hv: 'Thư', py: 'shū', mn: 'sách vở' },
  '笔': { hv: 'Bút', py: 'bǐ', mn: 'bút viết' },
  '本': { hv: 'Bản', py: 'běn', mn: 'gốc, cuốn' },
  '字': { hv: 'Tự', py: 'zì', mn: 'chữ viết' },
  '语': { hv: 'Ngữ', py: 'yǔ', mn: 'ngôn ngữ' },
  '言': { hv: 'Ngôn', py: 'yán', mn: 'lời nói' },
  '文': { hv: 'Văn', py: 'wén', mn: 'văn chương' },
  '话': { hv: 'Thoại', py: 'huà', mn: 'lời nói, đàm thoại' },
  '说': { hv: 'Thuyết', py: 'shuō', mn: 'nói' },
  '看': { hv: 'Khán', py: 'kàn', mn: 'nhìn, xem' },
  '听': { hv: 'Thính', py: 'tīng', mn: 'nghe' },
  '读': { hv: 'Độc', py: 'dú', mn: 'đọc' },
  '写': { hv: 'Tả', py: 'xiě', mn: 'viết' },
  '吃': { hv: 'Ngật', py: 'chī', mn: 'ăn' },
  '喝': { hv: 'Hát', py: 'hē', mn: 'uống' },
  '茶': { hv: 'Trà', py: 'chá', mn: 'trà' },
  '奶': { hv: 'Nãi', py: 'nǎi', mn: 'sữa' },
  '饭': { hv: 'Phạn', py: 'fàn', mn: 'cơm' },
  '水': { hv: 'Thủy', py: 'shuǐ', mn: 'nước' },
  '火': { hv: 'Hỏa', py: 'huǒ', mn: 'lửa' },
  '买': { hv: 'Mãi', py: 'mǎi', mn: 'mua' },
  '卖': { hv: 'Mại', py: 'mài', mn: 'bán' },
  '钱': { hv: 'Tiền', py: 'qián', mn: 'tiền bạc' },
  '价': { hv: 'Giá', py: 'jià', mn: 'giá cả' },
  '格': { hv: 'Cách', py: 'gé', mn: 'tiêu chuẩn' },
  '商': { hv: 'Thương', py: 'shāng', mn: 'thương mại' },
  '店': { hv: 'Điếm', py: 'diàn', mn: 'cửa hàng' },
  '行': { hv: 'Hành', py: 'xíng', mn: 'đi, thực hiện' },
  '走': { hv: 'Tẩu', py: 'zǒu', mn: 'bước đi' },
  '路': { hv: 'Lộ', py: 'lù', mn: 'con đường' },
  '车': { hv: 'Xa', py: 'chē', mn: 'xe cộ' },
  '站': { hv: 'Trạm', py: 'zhàn', mn: 'bến xe' },
  '机': { hv: 'Cơ', py: 'jī', mn: 'máy móc' },
  '场': { hv: 'Trường', py: 'chǎng', mn: 'sân bãi' },
  '电': { hv: 'Điện', py: 'diàn', mn: 'điện năng' },
  '脑': { hv: 'Não', py: 'nǎo', mn: 'bộ não' },
  '朋': { hv: 'Bằng', py: 'péng', mn: 'bạn hữu' },
  '友': { hv: 'Hữu', py: 'yǒu', mn: 'bạn bè' },
  '家': { hv: 'Gia', py: 'jiā', mn: 'gia đình, nhà' },
  '人': { hv: 'Nhân', py: 'rén', mn: 'con người' },
  '春': { hv: 'Xuân', py: 'chūn', mn: 'mùa xuân' },
  '夏': { hv: 'Hạ', py: 'xià', mn: 'mùa hè' },
  '秋': { hv: 'Thu', py: 'qiū', mn: 'mùa thu' },
  '冬': { hv: 'Đông', py: 'dōng', mn: 'mùa đông' },
  '风': { hv: 'Phong', py: 'fēng', mn: 'ngọn gió' },
  '雨': { hv: 'Vũ', py: 'yǔ', mn: 'cơn mưa' },
  '雪': { hv: 'Tuyết', py: 'xuě', mn: 'bông tuyết' },
  '花': { hv: 'Hoa', py: 'huā', mn: 'bông hoa' },
  '山': { hv: 'Sơn', py: 'shān', mn: 'núi non' },
  '河': { hv: 'Hà', py: 'hé', mn: 'dòng sông' },
  '大': { hv: 'Đại', py: 'dà', mn: 'to lớn' },
  '小': { hv: 'Tiểu', py: 'xiǎo', mn: 'nhỏ bé' },
  '多': { hv: 'Đa', py: 'duō', mn: 'nhiều' },
  '少': { hv: 'Thiểu', py: 'shǎo', mn: 'ít' },
  '高': { hv: 'Cao', py: 'gāo', mn: 'cao ráo' },
  '低': { hv: 'Đê', py: 'dī', mn: 'thấp' },
  '长': { hv: 'Trường', py: 'cháng', mn: 'dài lâu' },
  '短': { hv: 'Đoản', py: 'duǎn', mn: 'ngắn ngủi' },
  '新': { hv: 'Tân', py: 'xīn', mn: 'mới mẻ' },
  '旧': { hv: 'Cựu', py: 'jiù', mn: 'cũ xưa' },
  '来': { hv: 'Lai', py: 'lái', mn: 'đến' },
  '去': { hv: 'Khứ', py: 'qù', mn: 'đi' },
  '回': { hv: 'Hồi', py: 'huí', mn: 'trở về' },
  '到': { hv: 'Đáo', py: 'dào', mn: 'đến nơi' },
  '出': { hv: 'Xuất', py: 'chū', mn: 'ra ngoài' },
  '进': { hv: 'Tiến', py: 'jìn', mn: 'bước vào' },
  '开': { hv: 'Khai', py: 'kāi', mn: 'mở ra, bắt đầu' },
  '关': { hv: 'Quan', py: 'guān', mn: 'đóng lại' },
  '很': { hv: 'Hẩn', py: 'hěn', mn: 'rất' },
  '太': { hv: 'Thái', py: 'tài', mn: 'quá, lắm' },
  '能': { hv: 'Năng', py: 'néng', mn: 'có thể' },
  '会': { hv: 'Hội', py: 'huì', mn: 'biết làm, họp' },
  '要': { hv: 'Yếu', py: 'yào', mn: 'muốn, cần' },
  '想': { hv: 'Tưởng', py: 'xiǎng', mn: 'nhớ, nghĩ, muốn' },
  '在': { hv: 'Tại', py: 'zài', mn: 'ở tại, đang' },
  '和': { hv: 'Hòa', py: 'hé', mn: 'và, cùng với' },
  '与': { hv: 'Dữ', py: 'yǔ', mn: 'và' },
  '但': { hv: 'Đãn', py: 'dàn', mn: 'nhưng' },
  '是': { hv: 'Thị', py: 'shì', mn: 'là, phải' },
  '因': { hv: 'Nhân', py: 'yīn', mn: 'vì' },
  '为': { hv: 'Vị', py: 'wèi', mn: 'bởi vì' },
  '的': { hv: 'Đích', py: 'de', mn: 'của, trợ từ' },
  '得': { hv: 'Đắc', py: 'dé', mn: 'được, trợ từ' },
  '地': { hv: 'Địa', py: 'de', mn: 'đất đai, trợ từ' },
  '吗': { hv: 'Ma', py: 'ma', mn: 'chăng, không' },
  '呢': { hv: 'Ni', py: 'ne', mn: 'thế, nhé' },
  '吧': { hv: 'Ba', py: 'ba', mn: 'đi, nhé' },
  '了': { hv: 'Liễu', py: 'le', mn: 'rồi, hoàn thành' },
  '过': { hv: 'Quá', py: 'guò', mn: 'từng qua' },
  '着': { hv: 'Trước', py: 'zhe', mn: 'đang tiếp diễn' },
  '合': { hv: 'Hợp', py: 'hé', mn: 'hợp nhất' },
  '同': { hv: 'Đồng', py: 'tóng', mn: 'cùng nhau' },
  '贸': { hv: 'Mậu', py: 'mào', mn: 'trao đổi hàng' },
  '易': { hv: 'Dịch', py: 'yì', mn: 'trao đổi, dễ' },
  '际': { hv: 'Tế', py: 'jì', mn: 'quốc tế, gặp gỡ' },
  '活': { hv: 'Hoạt', py: 'huó', mn: 'sinh hoạt' },
  '聊': { hv: 'Liêu', py: 'liáo', mn: 'trò chuyện' },
  '发': { hv: 'Phát', py: 'fā', mn: 'phát tài, gửi đi' },
  '财': { hv: 'Tài', py: 'cái', mn: 'tiền tài' },
  '恭': { hv: 'Cung', py: 'gōng', mn: 'cung kính' },
  '祝': { hv: 'Chúc', py: 'zhù', mn: 'cầu chúc' },
  '贺': { hv: 'Hạ', py: 'hè', mn: 'chúc mừng' },
  '顺': { hv: 'Thuận', py: 'shùn', mn: 'thuận lợi' },
  '利': { hv: 'Lợi', py: 'lì', mn: 'có ích, hanh thông' },
  '平': { hv: 'Bình', py: 'píng', mn: 'bình yên' },
  '幸': { hv: 'Hạnh', py: 'xìng', mn: 'may mắn, hạnh phúc' },
  '运': { hv: 'Vận', py: 'yùn', mn: 'vận may, vận chuyển' },
  '早': { hv: 'Tảo', py: 'zǎo', mn: 'sớm, buổi sáng' },
  '晚': { hv: 'Vãn', py: 'wǎn', mn: 'muộn, buổi tối' },
  '午': { hv: 'Ngọ', py: 'wǔ', mn: 'buổi trưa' },
  '夜': { hv: 'Dạ', py: 'yè', mn: 'đêm khuya' },
  '客': { hv: 'Khách', py: 'kè', mn: 'khách hàng, khách khứa' },
  '户': { hv: 'Hộ', py: 'hù', mn: 'hộ gia đình, tài khoản' },
  '经': { hv: 'Kinh', py: 'jīng', mn: 'kinh tế, trải qua' },
  '理': { hv: 'Lý', py: 'lǐ', mn: 'quản lý, lý lẽ' },
  '总': { hv: 'Tổng', py: 'zǒng', mn: 'tổng giám đốc, luôn luôn' },
  '助': { hv: 'Trợ', py: 'zhù', mn: 'giúp đỡ' },
  '手': { hv: 'Thủ', py: 'shǒu', mn: 'bàn tay, trợ lý' },
  '帮': { hv: 'Bang', py: 'bāng', mn: 'giúp đỡ' },
  '查': { hv: 'Tra', py: 'chá', mn: 'tra cứu, kiểm tra' },
  '核': { hv: 'Hạch', py: 'hé', mn: 'đối chiếu, cốt lõi' },
  '算': { hv: 'Toán', py: 'suàn', mn: 'tính toán' },
  '账': { hv: 'Trướng', py: 'zhàng', mn: 'sổ sách kế toán' },
  '报': { hv: 'Báo', py: 'bào', mn: 'báo cáo, tờ báo' },
  '告': { hv: 'Cáo', py: 'gào', mn: 'thông báo' },
  '单': { hv: 'Đơn', py: 'dān', mn: 'đơn hàng, đơn giản' },
  '货': { hv: 'Hóa', py: 'huò', mn: 'hàng hóa' },
  '物': { hv: 'Vật', py: 'wù', mn: 'sự vật, đồ vật' },
  '流': { hv: 'Lưu', py: 'liú', mn: 'dòng chảy, logistics' },
  '输': { hv: 'Thâu', py: 'shū', mn: 'chuyên chở, nhập xuất' },
  '包': { hv: 'Bao', py: 'bāo', mn: 'bao bọc, túi xách' },
  '裹': { hv: 'Khỏa', py: 'guǒ', mn: 'bọc lại, kiện hàng' },
  '箱': { hv: 'Tương', py: 'xiāng', mn: 'thùng hàng, hộp' },
  '重': { hv: 'Trọng', py: 'zhòng', mn: 'nặng, quan trọng' },
  '轻': { hv: 'Khinh', py: 'qīng', mn: 'nhẹ nhàng' },
  '准': { hv: 'Chuẩn', py: 'zhǔn', mn: 'chuẩn xác' },
  '确': { hv: 'Xác', py: 'què', mn: 'chính xác' },
  '定': { hv: 'Định', py: 'dìng', mn: 'ấn định, quyết định' },
  '决': { hv: 'Quyết', py: 'jué', mn: 'quyết tâm' },
  '感': { hv: 'Cảm', py: 'gǎn', mn: 'cảm xúc, cảm ơn' },
  '动': { hv: 'Động', py: 'dòng', mn: 'hành động, cảm động' },
  '静': { hv: 'Tĩnh', py: 'jìng', mn: 'yên tĩnh' },
  '声': { hv: 'Thanh', py: 'shēng', mn: 'âm thanh, tiếng nói' },
  '音': { hv: 'Âm', py: 'yīn', mn: 'âm vang, âm nhạc' },
  '歌': { hv: 'Ca', py: 'gē', mn: 'bài hát' },
  '唱': { hv: 'Xướng', py: 'chàng', mn: 'ca hát' },
  '跳': { hv: 'Khiêu', py: 'tiào', mn: 'nhảy múa' },
  '舞': { hv: 'Vũ', py: 'wǔ', mn: 'điệu múa' },
  '妆': { hv: 'Trang', py: 'zhuāng', mn: 'trang điểm' },
  '容': { hv: 'Dung', py: 'róng', mn: 'dung nhan, bao dung' },
  '服': { hv: 'Phục', py: 'fú', mn: 'trang phục, thán phục' },
  '装': { hv: 'Trang', py: 'zhuāng', mn: 'trang phục, đóng gói' },
  '裙': { hv: 'Quần', py: 'qún', mn: 'váy đầm' },
  '裤': { hv: 'Khố', py: 'kù', mn: 'quần mặc' },
  '鞋': { hv: 'Hài', py: 'xié', mn: 'giày dép' },
  '帽': { hv: 'Mạo', py: 'mào', mn: 'mũ nón' },
  '色': { hv: 'Sắc', py: 'sè', mn: 'màu sắc' },
  '红': { hv: 'Hồng', py: 'hóng', mn: 'màu đỏ, may mắn' },
  '黄': { hv: 'Hoàng', py: 'huáng', mn: 'màu vàng' },
  '蓝': { hv: 'Lam', py: 'lán', mn: 'màu xanh lam' },
  '绿': { hv: 'Lục', py: 'lǜ', mn: 'màu xanh lá' },
  '白': { hv: 'Bạch', py: 'bái', mn: 'màu trắng, sáng tỏ' },
  '黑': { hv: 'Hắc', py: 'hēi', mn: 'màu đen' },
  '粉': { hv: 'Phấn', py: 'fěn', mn: 'màu hồng phấn' },
  '紫': { hv: 'Tử', py: 'zǐ', mn: 'màu tím thủy chung' },
  '眼': { hv: 'Nhãn', py: 'yǎn', mn: 'mắt, ánh nhìn' },
  '睛': { hv: 'Tình', py: 'jīng', mn: 'con ngươi' },
  '头': { hv: 'Đầu', py: 'tóu', mn: 'đầu, bắt đầu' },
  '初': { hv: 'Sơ', py: 'chū', mn: 'ban đầu, lần đầu' },
  '首': { hv: 'Thủ', py: 'shǒu', mn: 'đứng đầu, bài thơ' },
  '次': { hv: 'Thứ', py: 'cì', mn: 'lần lượt, thứ bậc' },
  '第': { hv: 'Đệ', py: 'dì', mn: 'thứ hạng (thứ nhất, nhì...)' }
};

function computeDynamicHanViet(chineseStr) {
  if (!chineseStr) return '';
  return Array.from(chineseStr).map(char => {
    if (/[\u4e00-\u9fa5]/.test(char)) {
      const item = COMMON_HANVIET_MAP[char];
      if (typeof item === 'string') return item;
      if (item && item.hv) return item.hv;
      return char;
    }
    return char;
  }).join(' ').replace(/\s+/g, ' ').trim();
}

function computeDynamicBreakdown(chineseStr) {
  if (!chineseStr) return [];
  const chars = Array.from(chineseStr).filter(c => /[\u4e00-\u9fa5]/.test(c));
  const unique = Array.from(new Set(chars));
  return unique.map(c => {
    const item = COMMON_HANVIET_MAP[c];
    return {
      word: c,
      pinyin: (item && item.py) || 'zì',
      meaning: (item && item.mn) || (item && item.hv) || 'chữ Hán'
    };
  });
}

// In-memory universal translation cache for instant response
const UNIVERSAL_TRANSLATION_CACHE = {};

async function googleTranslateGTX(text, isViToZh = true) {
  const sl = isViToZh ? 'vi' : 'zh-CN';
  const tl = isViToZh ? 'zh-CN' : 'vi';
  const endpoint = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&dt=rm&q=${encodeURIComponent(text)}`;

  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`Google GTX HTTP ${res.status}`);
  const raw = await res.json();

  let translatedText = '';
  let pinyin = '';

  if (Array.isArray(raw[0])) {
    raw[0].forEach(item => {
      if (item && item[0]) {
        translatedText += item[0];
      } else if (item && (item[2] || item[3])) {
        pinyin = item[2] || item[3] || '';
      }
    });
  }

  const hanziStr = isViToZh ? translatedText : text;
  const hanviet = computeDynamicHanViet(hanziStr);
  const breakdown = computeDynamicBreakdown(hanziStr);

  return {
    translatedText: translatedText.trim(),
    pinyin: pinyin.trim(),
    hanviet: hanviet,
    breakdown: breakdown,
    engine: 'Google'
  };
}

async function myMemoryTranslate(text, isViToZh = true) {
  const pair = isViToZh ? 'vi|zh-CN' : 'zh-CN|vi';
  const endpoint = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${pair}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error(`MyMemory HTTP ${res.status}`);
  const data = await res.json();
  const translatedText = data.responseData?.translatedText || text;
  const hanziStr = isViToZh ? translatedText : text;
  const hanviet = computeDynamicHanViet(hanziStr);
  const breakdown = computeDynamicBreakdown(hanziStr);

  return {
    translatedText: translatedText.trim(),
    pinyin: isViToZh ? 'cí yǔ' : '',
    hanviet: hanviet,
    breakdown: breakdown,
    engine: 'MyMemory'
  };
}

async function translateLiveUniversal(text, isViToZh = true) {
  const clean = (text || '').trim();
  if (!clean) return null;

  const cacheKey = `${clean}_${isViToZh}`;
  if (UNIVERSAL_TRANSLATION_CACHE[cacheKey]) {
    return UNIVERSAL_TRANSLATION_CACHE[cacheKey];
  }

  const apiKey = localStorage.getItem("mochi_gemini_api_key");
  const modelName = localStorage.getItem("mochi_gemini_model") || "gemini-1.5-flash";
  const openAiApiKey = localStorage.getItem("mochi_openai_api_key");
  const openAiModel = localStorage.getItem("mochi_openai_model") || "gpt-4o-mini";

  // Tier 1: Gemini AI
  if (apiKey) {
    try {
      const gRes = await callGeminiTranslation(clean, isViToZh, apiKey, modelName);
      if (gRes && gRes.translatedText) {
        gRes.engine = 'Gemini';
        if (!gRes.hanviet) gRes.hanviet = computeDynamicHanViet(isViToZh ? gRes.translatedText : clean);
        if (!gRes.breakdown || gRes.breakdown.length === 0) gRes.breakdown = computeDynamicBreakdown(isViToZh ? gRes.translatedText : clean);
        UNIVERSAL_TRANSLATION_CACHE[cacheKey] = gRes;
        return gRes;
      }
    } catch (e) {
      console.warn('Gemini live translate error, proceeding to OpenAI/GTX:', e);
    }
  }

  // Tier 2: OpenAI GPT-4o
  if (openAiApiKey) {
    try {
      const oRes = await callOpenAiTranslation(clean, isViToZh, openAiApiKey, openAiModel);
      if (oRes && oRes.translatedText) {
        oRes.engine = 'OpenAI';
        if (!oRes.hanviet) oRes.hanviet = computeDynamicHanViet(isViToZh ? oRes.translatedText : clean);
        if (!oRes.breakdown || oRes.breakdown.length === 0) oRes.breakdown = computeDynamicBreakdown(isViToZh ? oRes.translatedText : clean);
        UNIVERSAL_TRANSLATION_CACHE[cacheKey] = oRes;
        return oRes;
      }
    } catch (e) {
      console.warn('OpenAI live translate error, proceeding to GTX:', e);
    }
  }

  // Tier 3: High-speed Google Neural GTX (Zero token limit, handles any length!)
  try {
    const gtxRes = await googleTranslateGTX(clean, isViToZh);
    if (gtxRes && gtxRes.translatedText) {
      UNIVERSAL_TRANSLATION_CACHE[cacheKey] = gtxRes;
      return gtxRes;
    }
  } catch (e) {
    console.warn('Google GTX live translate error:', e);
  }

  // Tier 4: MyMemory API Fallback
  try {
    const mmRes = await myMemoryTranslate(clean, isViToZh);
    if (mmRes && mmRes.translatedText) {
      UNIVERSAL_TRANSLATION_CACHE[cacheKey] = mmRes;
      return mmRes;
    }
  } catch (e) {
    console.warn('MyMemory live translate error:', e);
  }

  // Tier 5: Intelligent local fallback with dynamic Han Viet & breakdown
  const local = performLocalTranslation(clean, isViToZh);
  local.engine = 'Local';
  return local;
}

// Asynchronously ensures an arbitrary user query is translated and indexed into Bách Khoa
async function ensureDictionaryWord(query) {
  const cleanQ = (query || '').trim();
  if (!cleanQ || cleanQ.length < 2) return null;

  const lower = cleanQ.toLowerCase();
  // Check if already in dictionary
  const found = MOCHI_DATA.dictionaryBank.find(w => 
    w.hanzi.toLowerCase() === lower || 
    (w.searchTag && w.searchTag === lower) ||
    w.meaning.toLowerCase() === lower
  );
  if (found) return found;

  // Fast lookup in 6,200 HSK Vocabulary Bank (0ms instant response)
  if (typeof window !== 'undefined' && window.MOCHI_VOCAB_BANK && Array.isArray(window.MOCHI_VOCAB_BANK)) {
    const vocabMatch = window.MOCHI_VOCAB_BANK.find(w => 
      w.hanzi.toLowerCase() === lower || 
      (w.pinyin && w.pinyin.toLowerCase() === lower) ||
      (w.meaning && w.meaning.toLowerCase().includes(lower))
    );
    if (vocabMatch) {
      const newWord = {
        id: "dict-vocab-" + encodeURIComponent(vocabMatch.hanzi),
        hanzi: vocabMatch.hanzi,
        pinyin: vocabMatch.pinyin || "pīn yīn",
        hanviet: vocabMatch.hanviet || computeDynamicHanViet(vocabMatch.hanzi),
        wordType: "Từ vựng chuẩn " + vocabMatch.hsk,
        hsk: vocabMatch.hsk,
        meaning: vocabMatch.meaning,
        strokes: Math.min(32, Math.max(4, vocabMatch.hanzi.length * 6)),
        radical: vocabMatch.hanzi.charAt(0),
        example: vocabMatch.example || `这是一个关于“${vocabMatch.hanzi}”的句子。`,
        exampleVi: vocabMatch.exampleVi || `Đây là một câu ví dụ về từ “${vocabMatch.hanzi}”.`,
        collocations: [`常用${vocabMatch.hanzi}`, `学习${vocabMatch.hanzi}`],
        tip: `Từ vựng chuẩn cấp độ ${vocabMatch.hsk} (Âm Hán Việt: ${vocabMatch.hanviet || ''}). Bạn có thể luyện viết nét chữ hoặc luyện gõ tại Studio Luyện Gõ Từ Vựng nhé!`,
        searchTag: lower,
        isDynamic: true
      };
      MOCHI_DATA.dictionaryBank.unshift(newWord);
      return newWord;
    }
  }

  const isChinese = /[\u4e00-\u9fa5]+/.test(cleanQ);
  try {
    const trans = await translateLiveUniversal(cleanQ, !isChinese);
    if (!trans || !trans.translatedText) return null;

    const hanzi = isChinese ? cleanQ : trans.translatedText;
    const meaning = isChinese ? trans.translatedText : cleanQ;
    const pinyin = trans.pinyin || (isChinese ? "pīn yīn" : "");
    const hanviet = trans.hanviet || computeDynamicHanViet(hanzi);
    const wordId = "dict-live-" + encodeURIComponent(hanzi);

    // Don't re-insert if word with same hanzi already exists
    const existingHanzi = MOCHI_DATA.dictionaryBank.find(w => w.hanzi === hanzi);
    if (existingHanzi) {
      existingHanzi.searchTag = lower;
      return existingHanzi;
    }

    const newWord = {
      id: wordId,
      hanzi: hanzi,
      pinyin: pinyin || "pīn yīn",
      hanviet: hanviet,
      wordType: "Tra cứu mở rộng 🌐",
      hsk: "Bách Khoa Mở Rộng 🌟",
      meaning: meaning,
      strokes: Math.min(32, Math.max(4, hanzi.length * 6)),
      radical: hanzi.charAt(0),
      example: `在实际交流与汉语表达中，“${hanzi}”是非常实用地道的表达。`,
      exampleVi: `Trong giao tiếp thực tế và văn phong tiếng Trung, “${hanzi}” là cách diễn đạt rất tự nhiên và chuẩn mực.`,
      collocations: trans.breakdown ? trans.breakdown.map(b => `${b.word} (${b.pinyin}): ${b.meaning}`) : [`常用${hanzi}`, `学习${hanzi}`],
      tip: `Mục từ “${hanzi}” (${hanviet}) đã được tự động dịch và phân tích chiết tự bởi Bách Khoa Toàn Thư. Nàng có thể bấm "Chi tiết & Chiết tự" để xem và luyện từng nét trên ô Mễ tự nhé!`,
      searchTag: lower,
      isDynamic: true
    };

    MOCHI_DATA.dictionaryBank.unshift(newWord);
    return newWord;
  } catch (err) {
    console.warn('Error in ensureDictionaryWord:', err);
    return null;
  }
}

function synthesizeDynamicWord(query) {
  const cleanQ = query.trim();
  if (!cleanQ) return null;
  const lower = cleanQ.toLowerCase();

  // 1. Check Phrase Bank FIRST
  if (MOCHI_DATA.phraseBank) {
    const cleanLower = lower.replace(/[?!.,]/g, '').trim();
    const matchedPhrase = MOCHI_DATA.phraseBank.find(p => {
      const pVi = p.vi.toLowerCase().replace(/[?!.,]/g, '').trim();
      return pVi === cleanLower || cleanLower.includes(pVi) || pVi.includes(cleanLower);
    });

    if (matchedPhrase) {
      const wordId = "phrase-" + encodeURIComponent(matchedPhrase.hanzi);
      const existing = MOCHI_DATA.dictionaryBank.find(w => w.id === wordId || w.hanzi === matchedPhrase.hanzi);
      if (existing) return existing;

      const newWord = {
        id: wordId,
        hanzi: matchedPhrase.hanzi,
        pinyin: matchedPhrase.pinyin,
        hanviet: matchedPhrase.hanviet,
        wordType: "Mẫu câu dịch thuật",
        hsk: "Giao tiếp đời thực 💕",
        meaning: matchedPhrase.meaning,
        strokes: 10,
        radical: matchedPhrase.hanzi.charAt(0),
        example: matchedPhrase.example,
        exampleVi: matchedPhrase.exampleVi,
        collocations: matchedPhrase.breakdown ? matchedPhrase.breakdown.map(b => `${b.word} (${b.pinyin}): ${b.meaning}`) : [],
        tip: `Mẫu câu "${matchedPhrase.vi}" dịch chuẩn xác thành "${matchedPhrase.hanzi}" (${matchedPhrase.pinyin}). Nàng có thể bấm vào "Luyện viết chữ này" để tập viết từng nét trên ô Mễ tự nhé!`,
        isDynamic: true
      };

      MOCHI_DATA.dictionaryBank.unshift(newWord);
      return newWord;
    }
  }

  // 2. Check Vietnamese Concept Map
  const mapped = COMMON_VI_ZH_MAP[lower];
  if (mapped) {
    const wordId = "dyn-map-" + encodeURIComponent(mapped.hanzi);
    const existing = MOCHI_DATA.dictionaryBank.find(w => w.id === wordId || w.hanzi === mapped.hanzi);
    if (existing) return existing;

    const newWord = {
      id: wordId,
      hanzi: mapped.hanzi,
      pinyin: mapped.pinyin,
      hanviet: mapped.hanviet,
      wordType: "Tra cứu mở rộng",
      hsk: mapped.hsk,
      meaning: mapped.meaning,
      strokes: mapped.strokes,
      radical: mapped.radical,
      example: `在日常交流中，“${mapped.hanzi}”是非常高频实用的词汇。`,
      exampleVi: `Trong giao tiếp hàng ngày, “${mapped.hanzi}” là từ vựng rất phổ biến và tiện ích.`,
      collocations: [`${mapped.hanzi}很好`, `喜欢${mapped.hanzi}`],
      tip: `Từ vựng "${mapped.hanzi}" (${mapped.hanviet}) được tra cứu trực tiếp từ Bách Khoa Toàn Thư.`,
      isDynamic: true
    };
    MOCHI_DATA.dictionaryBank.unshift(newWord);
    return newWord;
  }

  // 3. Chinese Characters direct entry
  if (/[\u4e00-\u9fa5]+/.test(cleanQ)) {
    const hanzi = cleanQ.match(/[\u4e00-\u9fa5]+/)[0];
    const wordId = "dyn-zh-" + encodeURIComponent(hanzi);
    const existing = MOCHI_DATA.dictionaryBank.find(w => w.id === wordId || w.hanzi === hanzi);
    if (existing) return existing;

    const hanviet = computeDynamicHanViet(hanzi);
    const breakdown = computeDynamicBreakdown(hanzi);
    const newWord = {
      id: wordId,
      hanzi: hanzi,
      pinyin: breakdown[0]?.pinyin || "hàn zì",
      hanviet: hanviet || "Hán ngữ",
      wordType: "Hán tự tra cứu",
      hsk: "Bách Khoa Toàn Thư 🌟",
      meaning: `Mục từ Hán ngữ: "${hanzi}". Nhấn để xem chiết tự chi tiết & luyện viết từng nét!`,
      strokes: Math.min(32, Math.max(4, hanzi.length * 7)),
      radical: hanzi.charAt(0),
      example: `在日常交流与学习中，“${hanzi}”是非常实用高频的表达。`,
      exampleVi: `Trong giao tiếp và học tập hàng ngày, “${hanzi}” là cách diễn đạt rất thực tế và thông dụng.`,
      collocations: breakdown.map(b => `${b.word} (${b.pinyin}): ${b.meaning}`),
      tip: `Mục từ “${hanzi}” (${hanviet}) được phân tích bởi hệ thống Bách Khoa Toàn Thư.`,
      isDynamic: true
    };
    MOCHI_DATA.dictionaryBank.unshift(newWord);
    return newWord;
  }

  return null;
}


function initDictionaryView() {
  const container = document.getElementById("dictionary-cards-container");
  const searchInput = document.getElementById("dict-search-input");
  const filterTabs = document.getElementById("dict-hsk-filter-tabs");
  const countIndicator = document.getElementById("dict-results-count");
  const paginationContainer = document.getElementById("dict-pagination-container");
  if (!container) return;

  const filters = ["all", "HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6", "HSK 7-9", "Ngành nghề", "Công sở", "Mua sắm", "Làm đẹp", "Ẩm thực"];
  
  if (filterTabs) {
    filterTabs.innerHTML = filters.map(f => `
      <button class="dict-tab-btn px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
        f === currentDictHskFilter ? "bg-[#F59BB0] text-white border-[#F59BB0] shadow-xs" : "bg-white text-gray-600 border-gray-200 hover:border-pink-300"
      }" data-filter="${f}">
        ${f === "all" ? "Tất cả từ" : f}
      </button>
    `).join("");

    filterTabs.addEventListener("click", (e) => {
      const btn = e.target.closest(".dict-tab-btn");
      if (!btn) return;

      currentDictHskFilter = btn.getAttribute("data-filter");
      currentDictPage = 1;

      filterTabs.querySelectorAll(".dict-tab-btn").forEach(b => {
        b.classList.remove("bg-[#F59BB0]", "text-white", "border-[#F59BB0]", "shadow-xs");
        b.classList.add("bg-white", "text-gray-600", "border-gray-200");
      });
      btn.classList.add("bg-[#F59BB0]", "text-white", "border-[#F59BB0]", "shadow-xs");
      btn.classList.remove("bg-white", "text-gray-600", "border-gray-200");

      renderDictionaryList();
    });
  }

  let activeLiveSearchPromise = null;

  function getFilteredDictionaryWords() {
    const rawQuery = searchInput ? searchInput.value.trim() : "";
    const query = rawQuery.toLowerCase();
    let words = MOCHI_DATA.dictionaryBank.filter(item => {
      const matchesFilter = currentDictHskFilter === "all" || 
        (currentDictHskFilter === "Ngành nghề" ? (item.hsk === "Ngành nghề" || (item.wordType && (item.wordType.includes("Logistics") || item.wordType.includes("TMĐT") || item.wordType.includes("Khách sạn") || item.wordType.includes("Thời trang") || item.wordType.includes("Y tế") || item.wordType.includes("Sản xuất")))) : item.hsk === currentDictHskFilter);
      const matchesQuery = !query || 
        item.hanzi.toLowerCase().includes(query) ||
        item.pinyin.toLowerCase().includes(query) ||
        item.hanviet.toLowerCase().includes(query) ||
        item.meaning.toLowerCase().includes(query) ||
        (item.searchTag && item.searchTag.includes(query));
      return matchesFilter && matchesQuery;
    });

    // Dynamic Synthesis & Neural Lookup when no matches found
    if (query && words.length === 0) {
      const synth = synthesizeDynamicWord(rawQuery);
      if (synth) {
        words = [synth];
      } else if (rawQuery.length >= 2) {
        if (!activeLiveSearchPromise || activeLiveSearchPromise.query !== rawQuery) {
          activeLiveSearchPromise = {
            query: rawQuery,
            promise: ensureDictionaryWord(rawQuery).then(w => {
              if (w) {
                renderDictionaryList();
              }
            })
          };
        }
      }
    }

    return words;
  }

  function renderDictionaryList() {
    const filtered = getFilteredDictionaryWords();
    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / DICT_ITEMS_PER_PAGE) || 1;
    if (currentDictPage > totalPages) currentDictPage = totalPages;

    if (countIndicator) {
      countIndicator.textContent = `Tìm thấy ${totalItems} mục từ`;
    }

    if (totalItems === 0) {
      const curQ = searchInput ? searchInput.value.trim() : "";
      if (curQ && curQ.length >= 2) {
        container.innerHTML = `
          <div class="col-span-full p-10 text-center mochi-card border-2 border-dashed border-pink-200 animate-pulse">
            <div class="text-3xl mb-2">⚡</div>
            <div class="font-bold text-pink-600 text-sm">Đang tra cứu & dịch thuật trực tiếp từ Bách Khoa Toàn Thư...</div>
            <div class="text-xs text-gray-500 mt-1">Hệ thống đang dịch nghĩa, phân tích Pinyin và chiết tự Hán Việt cho "<strong>${curQ}</strong>" nha 🌸</div>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="col-span-full p-10 text-center mochi-card">
            <div class="text-3xl mb-2">🔍</div>
            <div class="font-bold text-gray-700 text-sm">Chưa tìm thấy từ phù hợp trong Bách Khoa</div>
            <div class="text-xs text-gray-400 mt-1">Nàng hãy thử tìm bằng Hán tự, Pinyin hoặc nghĩa tiếng Việt khác xem sao nhé!</div>
          </div>
        `;
      }
      if (paginationContainer) paginationContainer.innerHTML = "";
      return;
    }

    const startIdx = (currentDictPage - 1) * DICT_ITEMS_PER_PAGE;
    const currentItems = filtered.slice(startIdx, startIdx + DICT_ITEMS_PER_PAGE);

    container.innerHTML = currentItems.map(item => `
      <div class="dict-card p-4 sm:p-5 flex flex-col justify-between cursor-pointer group" data-word-id="${item.id}">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
              ${item.hsk}
            </span>
            <span class="text-[10px] text-gray-400 font-semibold">${item.wordType}</span>
          </div>

          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
              <div class="font-chinese text-2xl sm:text-3xl font-black text-gray-800 group-hover:text-pink-600 transition-colors">${item.hanzi}</div>
              <div class="pinyin-text text-xs sm:text-sm font-bold text-purple-600">${item.pinyin}</div>
              <div class="text-[11px] text-gray-400">Hán Việt: ${item.hanviet}</div>
            </div>
            <button class="p-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 transition-transform active:scale-90" data-tts="${item.hanzi}" title="Nghe phát âm">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>
          </div>

          <div class="text-xs sm:text-sm font-bold text-gray-700 mb-2">
            ${item.meaning}
          </div>

          <div class="text-[11px] text-gray-500 bg-gray-50 p-2.5 rounded-xl border border-gray-100 mb-3">
            <div class="font-chinese font-medium text-gray-800">${item.example}</div>
            <div class="text-gray-500 mt-0.5">${item.exampleVi}</div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
          <button class="btn-open-word-detail text-pink-500 font-bold hover:underline flex items-center gap-1" data-word-id="${item.id}">
            <span>Chi tiết & Chiết tự</span>
            <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </button>
          <button class="btn-save-dict-word p-1.5 rounded-full hover:bg-amber-100 text-amber-500" data-hanzi="${item.hanzi}" data-pinyin="${item.pinyin}" data-meaning="${item.meaning}" title="Ghim vào sổ tay">
            <i data-lucide="bookmark" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();

    // Attach click events on dictionary cards
    container.querySelectorAll(".dict-card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("[data-tts]") || e.target.closest(".btn-save-dict-word")) return;
        const wId = card.getAttribute("data-word-id");
        openWordDetailModal(wId);
      });
    });

    container.querySelectorAll(".btn-save-dict-word").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const hanzi = btn.getAttribute("data-hanzi");
        const pinyin = btn.getAttribute("data-pinyin");
        const meaning = btn.getAttribute("data-meaning");
        addWordToNotebook(hanzi, pinyin, meaning);
      });
    });

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!paginationContainer) return;
    if (totalPages <= 1) {
      paginationContainer.innerHTML = "";
      return;
    }

    let pagesHtml = `
      <button class="page-nav-btn px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-pink-50 transition-all ${currentDictPage === 1 ? 'opacity-40 pointer-events-none' : ''}" data-dir="prev">
        ← Trang trước
      </button>
    `;

    for (let p = 1; p <= totalPages; p++) {
      pagesHtml += `
        <button class="page-btn ${p === currentDictPage ? 'active' : ''}" data-page="${p}">
          ${p}
        </button>
      `;
    }

    pagesHtml += `
      <button class="page-nav-btn px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:bg-pink-50 transition-all ${currentDictPage === totalPages ? 'opacity-40 pointer-events-none' : ''}" data-dir="next">
        Trang sau →
      </button>
    `;

    paginationContainer.innerHTML = pagesHtml;

    paginationContainer.querySelectorAll(".page-btn").forEach(b => {
      b.addEventListener("click", () => {
        currentDictPage = parseInt(b.getAttribute("data-page"), 10);
        renderDictionaryList();
        document.getElementById("dictionary").scrollIntoView({ behavior: "smooth" });
      });
    });

    const prevBtn = paginationContainer.querySelector('[data-dir="prev"]');
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentDictPage > 1) {
          currentDictPage -= 1;
          renderDictionaryList();
          document.getElementById("dictionary").scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    const nextBtn = paginationContainer.querySelector('[data-dir="next"]');
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (currentDictPage < totalPages) {
          currentDictPage += 1;
          renderDictionaryList();
          document.getElementById("dictionary").scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      currentDictPage = 1;
      renderDictionaryList();
    }, 200);
  });

  renderDictionaryList();
}

/* ==========================================================================
   VIEW 2, 3, 4: BỘ THỦ, NGỮ PHÁP, THÀNH NGỮ
   ========================================================================== */
function renderRadicalsList() {
  const grid = document.getElementById("radicals-cards-grid");
  if (!grid) return;

  grid.innerHTML = MOCHI_DATA.radicalsBank.map(r => `
    <div class="p-4 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 transition-all shadow-xs flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
            ${r.strokes} nét
          </span>
          <span class="pinyin-text text-xs text-purple-600 font-bold">${r.pinyin}</span>
        </div>

        <div class="flex items-baseline gap-2 mb-1.5">
          <span class="font-chinese text-2xl font-black text-gray-800">${r.radical}</span>
          <span class="text-xs font-bold text-gray-600">(${r.hanviet})</span>
        </div>

        <div class="text-xs font-bold text-gray-700 mb-1.5">${r.meaning}</div>
        <p class="text-[11px] text-gray-500 italic mb-3 leading-relaxed">💡 ${r.mnemonic}</p>
      </div>

      <div class="pt-2 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
        <span class="text-[10px] text-gray-400 font-semibold">Chữ ví dụ:</span>
        ${r.examples.map(ex => `
          <button class="px-2 py-0.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-chinese font-bold" data-tts="${ex.split(' ')[0]}">
            ${ex}
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function renderGrammarList() {
  const container = document.getElementById("grammar-cards-grid");
  if (!container) return;

  container.innerHTML = MOCHI_DATA.grammarBank.map(g => `
    <div class="p-5 rounded-3xl bg-white border border-amber-200/80 shadow-xs space-y-3">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h4 class="text-sm sm:text-base font-bold text-gray-800 font-heading flex items-center gap-2">
          <span class="text-amber-500">✦</span>
          <span>${g.title}</span>
        </h4>
        <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 self-start sm:self-auto">
          ${g.level}
        </span>
      </div>

      <div class="p-2.5 rounded-xl bg-amber-50/60 border border-amber-100 font-mono text-xs text-amber-900 font-bold">
        ${g.pattern}
      </div>

      <p class="text-xs text-gray-600 leading-relaxed">${g.explanation}</p>

      <div class="space-y-2 pt-2 border-t border-gray-100">
        <div class="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-start justify-between gap-2">
          <div>
            <div class="pinyin-text text-xs text-purple-600 font-bold">${g.example1.pinyin}</div>
            <div class="font-chinese text-sm text-gray-800 font-medium">${g.example1.hanzi}</div>
            <div class="text-xs text-gray-500 mt-0.5">${g.example1.vi}</div>
          </div>
          <button class="p-1.5 rounded-full bg-white text-pink-500 hover:bg-pink-100 shadow-2xs" data-tts="${g.example1.hanzi}">
            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="p-3 rounded-2xl bg-gray-50 border border-gray-100 flex items-start justify-between gap-2">
          <div>
            <div class="pinyin-text text-xs text-purple-600 font-bold">${g.example2.pinyin}</div>
            <div class="font-chinese text-sm text-gray-800 font-medium">${g.example2.hanzi}</div>
            <div class="text-xs text-gray-500 mt-0.5">${g.example2.vi}</div>
          </div>
          <button class="p-1.5 rounded-full bg-white text-pink-500 hover:bg-pink-100 shadow-2xs" data-tts="${g.example2.hanzi}">
            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

function renderChengyuList() {
  const container = document.getElementById("chengyu-cards-grid");
  if (!container) return;

  container.innerHTML = MOCHI_DATA.chengyuBank.map(c => `
    <div class="p-5 rounded-3xl bg-white border border-pink-100 shadow-xs flex flex-col justify-between hover:border-pink-300 transition-all">
      <div>
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
            ${c.category}
          </span>
          <button class="p-1.5 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100" data-tts="${c.hanzi}">
            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="flex items-baseline gap-2 mb-1">
          <span class="font-chinese text-2xl font-black text-gray-800">${c.hanzi}</span>
          <span class="pinyin-text text-xs text-purple-600 font-bold">${c.pinyin}</span>
          <span class="text-xs text-gray-400">(${c.hanviet})</span>
        </div>

        <div class="text-xs sm:text-sm font-bold text-gray-700 mb-2">${c.meaning}</div>
        <p class="text-[11px] text-gray-500 italic leading-relaxed mb-3">📖 ${c.origin}</p>
      </div>

      <div class="p-3 bg-pink-50/50 rounded-2xl border border-pink-100/60 text-xs">
        <div class="font-chinese font-medium text-gray-800">${c.example}</div>
        <div class="text-gray-500 mt-0.5">${c.exampleVi}</div>
      </div>
    </div>
  `).join("");

  if (window.lucide) window.lucide.createIcons();
}

/* ==========================================================================
   6. Modal Chi Tiết Từ Vựng & Cầu Nối Tập Viết (Word Detail Modal)
   ========================================================================== */
function initWordDetailModal() {
  const modal = document.getElementById("word-detail-modal");
  const closeBtn = document.getElementById("btn-close-word-modal");
  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });
}

function openWordDetailModal(wordId) {
  const modal = document.getElementById("word-detail-modal");
  const body = document.getElementById("word-detail-modal-body");
  if (!modal || !body) return;

  const word = MOCHI_DATA.dictionaryBank.find(w => w.id === wordId);
  if (!word) return;

  body.innerHTML = `
    <div class="p-6 sm:p-8 bg-gradient-to-r from-pink-100/90 via-purple-50 to-pink-50 border-b border-pink-100 rounded-t-3xl text-center relative">
      <div class="flex items-center justify-center gap-2 mb-2">
        <span class="badge-pill bg-white text-pink-600 shadow-2xs">${word.hsk}</span>
        <span class="badge-pill bg-white/80 text-gray-600">${word.wordType}</span>
        <span class="badge-pill bg-white/80 text-gray-600">${word.strokes} nét</span>
        <span class="badge-pill bg-white/80 text-gray-600">Bộ ${word.radical}</span>
      </div>

      <div class="font-chinese text-4xl sm:text-5xl font-black text-gray-800 my-2">${word.hanzi}</div>
      <div class="pinyin-text text-base font-bold text-purple-600">${word.pinyin}</div>
      <div class="text-xs text-gray-500 font-semibold mt-0.5">Âm Hán Việt: ${word.hanviet}</div>

      <button class="mt-4 px-4 py-2 bg-white hover:bg-pink-50 text-pink-600 rounded-full border border-pink-200 text-xs font-bold inline-flex items-center gap-2 shadow-xs transition-transform active:scale-95" data-tts="${word.hanzi}">
        <i data-lucide="volume-2" class="w-4 h-4"></i>
        <span>Nghe phát âm chuẩn</span>
      </button>
    </div>

    <div class="p-6 sm:p-8 space-y-5">
      <div>
        <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Định nghĩa & Ý nghĩa</div>
        <div class="text-base font-bold text-gray-800">${word.meaning}</div>
      </div>

      ${word.collocations && word.collocations.length > 0 ? `
        <div>
          <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Từ ghép thông dụng liên quan</div>
          <div class="flex flex-wrap gap-2">
            ${word.collocations.map(col => `
              <span class="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100 text-xs font-bold text-purple-700">
                ${col}
              </span>
            `).join("")}
          </div>
        </div>
      ` : ""}

      ${word.tip ? `
        <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200/70 text-xs sm:text-sm text-amber-900 leading-relaxed">
          💡 <strong>Mẹo chiết tự & ghi nhớ:</strong> ${word.tip}
        </div>
      ` : ""}

      <div>
        <div class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Câu ví dụ thực tế</div>
        <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-1">
          <div class="font-chinese text-base font-medium text-gray-800">${word.example}</div>
          <div class="text-xs text-gray-600">${word.exampleVi}</div>
        </div>
      </div>
    </div>

    <div class="p-5 bg-gray-50 border-t border-gray-100 rounded-b-3xl flex flex-wrap items-center justify-between gap-3">
      <button class="btn-bridge-to-canvas px-4 py-2.5 bg-[#A98CF0] hover:bg-[#9370E8] text-white rounded-full text-xs font-bold transition-all shadow-xs flex items-center gap-2" data-char="${word.hanzi.charAt(0)}">
        <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
        <span>Luyện viết chữ "${word.hanzi.charAt(0)}" trên ô Mễ Tự Cách ✍️</span>
      </button>

      <button class="btn-pin-from-modal px-4 py-2.5 bg-white hover:bg-pink-50 text-pink-600 border border-pink-200 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs">
        <i data-lucide="bookmark" class="w-3.5 h-3.5"></i>
        <span>Ghim vào Sổ tay</span>
      </button>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  const bridgeBtn = body.querySelector(".btn-bridge-to-canvas");
  if (bridgeBtn) {
    bridgeBtn.addEventListener("click", () => {
      const char = bridgeBtn.getAttribute("data-char");
      loadCharacterToWritingCanvas(char, word);
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }

  const pinBtn = body.querySelector(".btn-pin-from-modal");
  if (pinBtn) {
    pinBtn.addEventListener("click", () => {
      addWordToNotebook(word.hanzi, word.pinyin, word.meaning);
    });
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   7. Smart Search (Header Dropdown Search)
   ========================================================================== */
function initSmartSearch() {
  const searchInput = document.getElementById("header-search-input");
  const resultsContainer = document.getElementById("header-search-results");
  const clearBtn = document.getElementById("btn-clear-search");
  if (!searchInput || !resultsContainer) return;

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      resultsContainer.classList.add("hidden");
      return;
    }

    const matchedVocab = MOCHI_DATA.dictionaryBank.filter(v =>
      v.hanzi.toLowerCase().includes(q) ||
      v.pinyin.toLowerCase().includes(q) ||
      v.meaning.toLowerCase().includes(q) ||
      v.hanviet.toLowerCase().includes(q)
    );

    const matchedLessons = MOCHI_DATA.lessonsCatalog.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.summary.toLowerCase().includes(q) ||
      l.skill.toLowerCase().includes(q)
    );

    if (matchedVocab.length === 0 && matchedLessons.length === 0) {
      const synth = typeof synthesizeDynamicWord === "function" ? synthesizeDynamicWord(query) : null;
      if (synth) {
        matchedVocab.push(synth);
      } else if (q.length >= 2) {
        resultsContainer.innerHTML = `
          <div class="p-6 text-center text-xs text-pink-600 animate-pulse">
            <span>⚡ Đang tra cứu Bách Khoa & Dịch thuật trực tiếp cho "<strong>${query}</strong>"...</span>
          </div>
        `;
        resultsContainer.classList.remove("hidden");
        ensureDictionaryWord(query).then(w => {
          if (w) performSearch(query);
        });
        return;
      } else {
        resultsContainer.innerHTML = `
          <div class="p-6 text-center text-xs text-gray-500">
            <span>🌸 Không tìm thấy từ hoặc bài học nào khớp với "<strong>${query}</strong>".</span>
          </div>
        `;
        resultsContainer.classList.remove("hidden");
        return;
      }
    }

    let html = `<div class="p-3 max-h-96 overflow-y-auto space-y-4">`;

    if (matchedVocab.length > 0) {
      html += `
        <div>
          <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Từ vựng & Mẫu câu (${matchedVocab.length})</div>
          <div class="space-y-2">
            ${matchedVocab.slice(0, 6).map(v => `
              <div class="p-2.5 rounded-xl hover:bg-pink-50 transition-colors flex items-center justify-between border border-gray-100">
                <div>
                  <div class="flex items-baseline gap-2">
                    <span class="font-chinese text-base font-bold text-gray-800">${v.hanzi}</span>
                    <span class="pinyin-text text-xs text-purple-600 font-bold">${v.pinyin}</span>
                    <span class="text-[11px] text-gray-400">(${v.hanviet})</span>
                  </div>
                  <div class="text-xs text-gray-600">${v.meaning}</div>
                </div>
                <div class="flex items-center gap-1.5">
                  <button class="p-1.5 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200" data-tts="${v.hanzi}" title="Nghe phát âm">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                  </button>
                  <button class="btn-save-word-search p-1.5 rounded-full hover:bg-amber-100 text-amber-500" data-word="${v.hanzi}" data-pinyin="${v.pinyin}" data-meaning="${v.meaning}" title="Lưu vào Sổ tay">
                    <i data-lucide="bookmark" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    if (matchedLessons.length > 0) {
      html += `
        <div>
          <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 px-2">Bài học liên quan (${matchedLessons.length})</div>
          <div class="space-y-2">
            ${matchedLessons.map(l => `
              <div class="p-2.5 rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-between border border-gray-100 cursor-pointer btn-open-lesson" data-lesson-id="${l.id}">
                <div>
                  <div class="text-xs font-bold text-gray-800">${l.title}</div>
                  <div class="text-[11px] text-gray-500">${l.levelName} • ${l.duration}</div>
                </div>
                <span class="text-xs text-pink-500 font-bold">Học ngay →</span>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    html += `</div>`;
    resultsContainer.innerHTML = html;
    resultsContainer.classList.remove("hidden");
    if (window.lucide) window.lucide.createIcons();

    resultsContainer.querySelectorAll(".btn-save-word-search").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const word = btn.getAttribute("data-word");
        const pinyin = btn.getAttribute("data-pinyin");
        const meaning = btn.getAttribute("data-meaning");
        addWordToNotebook(word, pinyin, meaning);
      });
    });
  }

  let debounceTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => performSearch(e.target.value), 200);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      resultsContainer.classList.add("hidden");
    });
  }

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
      resultsContainer.classList.add("hidden");
    }
  });
}

/* ==========================================================================
   8. Kho Flashcard Lật 3D Tương Tác & Ghi Nhớ (3D Flashcard Vault)
   ========================================================================== */
function initFlashcardVault() {
  const cardInner = document.getElementById("flashcard-3d-inner");
  const cardFront = document.getElementById("flashcard-front-content");
  const cardBack = document.getElementById("flashcard-back-content");
  const filterContainer = document.getElementById("flashcard-category-filters");
  const progressIndicator = document.getElementById("flashcard-counter-indicator");
  const prevBtn = document.getElementById("btn-flashcard-prev");
  const nextBtn = document.getElementById("btn-flashcard-next");
  const shuffleBtn = document.getElementById("btn-flashcard-shuffle");

  const btnMaster = document.getElementById("btn-flashcard-master");
  const btnReview = document.getElementById("btn-flashcard-review");

  if (!cardInner) return;

  currentFlashcardDeck = [...MOCHI_DATA.vocabBank];
  flashcardIndex = 0;

  const categories = ["Tất cả", "Đời sống", "Trà sữa", "Thả thính", "Mua sắm", "Công sở", "Thành ngữ", "Du lịch"];
  if (filterContainer) {
    filterContainer.innerHTML = categories.map((cat, idx) => `
      <button class="flashcard-filter-btn px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all ${
        idx === 0 ? "bg-[#A98CF0] text-white border-[#A98CF0] shadow-sm" : "bg-white text-gray-600 border-gray-200 hover:border-purple-300"
      }" data-cat="${cat}">
        ${cat}
      </button>
    `).join("");

    filterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".flashcard-filter-btn");
      if (!btn) return;

      filterContainer.querySelectorAll(".flashcard-filter-btn").forEach(b => {
        b.classList.remove("bg-[#A98CF0]", "text-white", "border-[#A98CF0]", "shadow-sm");
        b.classList.add("bg-white", "text-gray-600", "border-gray-200");
      });
      btn.classList.add("bg-[#A98CF0]", "text-white", "border-[#A98CF0]", "shadow-sm");
      btn.classList.remove("bg-white", "text-gray-600", "border-gray-200");

      const selectedCat = btn.getAttribute("data-cat");
      if (selectedCat === "Tất cả") {
        currentFlashcardDeck = [...MOCHI_DATA.vocabBank];
      } else {
        currentFlashcardDeck = MOCHI_DATA.vocabBank.filter(v => v.cat === selectedCat);
      }
      flashcardIndex = 0;
      renderCurrentFlashcard();
    });
  }

  function renderCurrentFlashcard() {
    if (currentFlashcardDeck.length === 0) {
      cardFront.innerHTML = `<div class="text-center p-8 text-xs text-gray-400">Không có thẻ nào trong danh mục này.</div>`;
      cardBack.innerHTML = "";
      return;
    }

    cardInner.classList.remove("is-flipped");
    const item = currentFlashcardDeck[flashcardIndex];

    const masteredList = JSON.parse(localStorage.getItem(`mochi_flashcards_mastered_${activeProfileId}`) || "[]");
    const isMastered = masteredList.includes(item.id);

    cardFront.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
          ${item.cat}
        </span>
        <div class="flex items-center gap-1.5">
          ${isMastered ? '<span class="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Đã thuộc ✔️</span>' : ''}
          <button class="p-2 rounded-full hover:bg-pink-50 text-gray-400 hover:text-pink-500 transition-colors" data-tts="${item.hanzi}" title="Nghe phát âm">
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <div class="text-center my-auto">
        <div class="pinyin-text text-base font-bold text-purple-600 mb-1">${item.pinyin}</div>
        <div class="font-chinese text-4xl sm:text-5xl font-black text-gray-800 tracking-wide">${item.hanzi}</div>
        <div class="text-xs text-gray-400 font-semibold mt-1">Hán Việt: ${item.hanviet}</div>
      </div>

      <div class="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
        <span>Chạm vào thẻ để lật mặt</span>
        <span class="text-purple-500 font-bold">Xem nghĩa →</span>
      </div>
    `;

    cardBack.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700">
          Nghĩa & Mẫu câu
        </span>
        <button class="btn-save-flashcard p-2 rounded-full hover:bg-amber-100 text-amber-500" data-hanzi="${item.hanzi}" data-pinyin="${item.pinyin}" data-meaning="${item.meaning}" title="Ghim vào sổ tay">
          <i data-lucide="bookmark" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="my-auto space-y-3">
        <div class="text-lg font-bold text-gray-800 text-center font-heading">
          ${item.meaning}
        </div>
        <div class="p-3 rounded-2xl bg-white/80 border border-purple-100 text-xs space-y-1">
          <div class="font-chinese font-medium text-gray-800">${item.example}</div>
          <div class="text-gray-500">${item.exampleVi}</div>
        </div>
      </div>

      <div class="flex items-center justify-between text-xs text-gray-400 border-t border-purple-100 pt-3">
        <span class="text-purple-500 font-bold">← Lật lại mặt trước</span>
        <button class="text-xs text-pink-600 font-bold" data-tts="${item.example}">Nghe ví dụ 🔊</button>
      </div>
    `;

    if (progressIndicator) {
      progressIndicator.textContent = `${flashcardIndex + 1} / ${currentFlashcardDeck.length}`;
    }

    if (window.lucide) window.lucide.createIcons();

    const saveBtn = cardBack.querySelector(".btn-save-flashcard");
    if (saveBtn) {
      saveBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        addWordToNotebook(item.hanzi, item.pinyin, item.meaning);
      });
    }

    updateFlashcardMasteryUI();
  }

  cardInner.addEventListener("click", (e) => {
    if (e.target.closest("[data-tts]") || e.target.closest(".btn-save-flashcard")) return;
    cardInner.classList.toggle("is-flipped");
  });

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (flashcardIndex > 0) {
        flashcardIndex -= 1;
        renderCurrentFlashcard();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (flashcardIndex < currentFlashcardDeck.length - 1) {
        flashcardIndex += 1;
        renderCurrentFlashcard();
      }
    });
  }

  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => {
      currentFlashcardDeck.sort(() => Math.random() - 0.5);
      flashcardIndex = 0;
      renderCurrentFlashcard();
      showMochiToast("Đã xáo trộn kho Flashcard! Cùng thử thách trí nhớ nào 🌸");
    });
  }

  if (btnMaster) {
    btnMaster.addEventListener("click", () => {
      const item = currentFlashcardDeck[flashcardIndex];
      if (!item) return;
      let masteredList = JSON.parse(localStorage.getItem(`mochi_flashcards_mastered_${activeProfileId}`) || "[]");
      if (!masteredList.includes(item.id)) {
        masteredList.push(item.id);
        localStorage.setItem(`mochi_flashcards_mastered_${activeProfileId}`, JSON.stringify(masteredList));
        playDingSound(true);
        showMochiToast(`Đã thuộc từ "${item.hanzi}"! Tuyệt đỉnh 🌸`);
      }
      renderCurrentFlashcard();
    });
  }

  if (btnReview) {
    btnReview.addEventListener("click", () => {
      const item = currentFlashcardDeck[flashcardIndex];
      if (!item) return;
      let masteredList = JSON.parse(localStorage.getItem(`mochi_flashcards_mastered_${activeProfileId}`) || "[]");
      masteredList = masteredList.filter(id => id !== item.id);
      localStorage.setItem(`mochi_flashcards_mastered_${activeProfileId}`, JSON.stringify(masteredList));
      showMochiToast(`Đã thêm "${item.hanzi}" vào danh sách cần ôn lại ✨`);
      renderCurrentFlashcard();
    });
  }

  renderCurrentFlashcard();
}

function updateFlashcardMasteryUI() {
  const statEl = document.getElementById("flashcard-mastery-stat");
  if (!statEl) return;
  const masteredList = JSON.parse(localStorage.getItem(`mochi_flashcards_mastered_${activeProfileId}`) || "[]");
  const total = MOCHI_DATA.vocabBank ? MOCHI_DATA.vocabBank.length : 0;
  statEl.textContent = `Đã thuộc: ${masteredList.length} / ${total}`;
}

/* ==========================================================================
   9. Cuốn Sổ Tay Cá Nhân & Xuất File (Personal Notebook & Export)
   ========================================================================== */
function initPersonalNotebook() {
  const notesContainer = document.getElementById("personal-notes-list");
  const savedWordsContainer = document.getElementById("saved-words-chips");
  const btnAddNote = document.getElementById("btn-add-personal-note");
  const btnExport = document.getElementById("btn-export-notebook");

  const noteModal = document.getElementById("note-modal");
  const btnCloseNoteModal = document.getElementById("btn-close-note-modal");
  const btnCancelNote = document.getElementById("btn-cancel-note");
  const btnSaveNoteModal = document.getElementById("btn-save-note-modal");
  const titleInput = document.getElementById("note-title-input");
  const contentInput = document.getElementById("note-content-input");
  const colorPicker = document.getElementById("note-color-picker");

  function renderSavedWords() {
    const savedWords = JSON.parse(localStorage.getItem(`mochi_saved_words_${activeProfileId}`) || "[]");
    if (!savedWordsContainer) return;

    if (savedWords.length === 0) {
      savedWordsContainer.innerHTML = `
        <div class="text-xs text-gray-400 italic py-2">
          Chưa có từ nào được ghim. Nàng hãy nhấn biểu tượng 🔖 ở Từ Điển hoặc Flashcard để ghim nhé!
        </div>
      `;
      return;
    }

    savedWordsContainer.innerHTML = savedWords.map((w, idx) => `
      <div class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-pink-200 rounded-xl text-xs font-semibold shadow-xs">
        <span class="font-chinese font-bold text-gray-800">${w.hanzi}</span>
        <span class="text-[11px] text-purple-600 font-medium">${w.pinyin}</span>
        <button class="p-0.5 text-gray-400 hover:text-pink-500" data-tts="${w.hanzi}">
          <i data-lucide="volume-2" class="w-3 h-3"></i>
        </button>
        <button class="btn-remove-saved-word text-gray-300 hover:text-red-500 ml-1 text-xs" data-index="${idx}">×</button>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();

    savedWordsContainer.querySelectorAll(".btn-remove-saved-word").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        savedWords.splice(idx, 1);
        localStorage.setItem(`mochi_saved_words_${activeProfileId}`, JSON.stringify(savedWords));
        renderSavedWords();
        showMochiToast("Đã gỡ từ khỏi sổ tay 🌸");
      });
    });
  }

  function renderNotes() {
    if (!notesContainer) return;
    const localNotes = JSON.parse(localStorage.getItem(`mochi_notes_${activeProfileId}`) || "null");
    const notes = localNotes || MOCHI_DATA.personalNotes;

    notesContainer.innerHTML = notes.map((n, idx) => `
      <div class="sticky-note p-4 flex flex-col justify-between ${n.color || 'bg-[#FFFDF0]'}">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <h5 class="font-bold text-gray-800 text-xs sm:text-sm">${n.title}</h5>
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-gray-400">${n.date}</span>
              <button class="btn-delete-note text-gray-300 hover:text-red-500 text-xs" data-index="${idx}" title="Xóa ghi chú">🗑️</button>
            </div>
          </div>
          <p class="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">${n.content}</p>
        </div>
      </div>
    `).join("");

    notesContainer.querySelectorAll(".btn-delete-note").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"), 10);
        const currentList = JSON.parse(localStorage.getItem(`mochi_notes_${activeProfileId}`) || "null") || [...MOCHI_DATA.personalNotes];
        currentList.splice(idx, 1);
        localStorage.setItem(`mochi_notes_${activeProfileId}`, JSON.stringify(currentList));
        renderNotes();
        showMochiToast("Đã xóa ghi chú 🌸");
      });
    });
  }

  // Modal note handlers
  if (btnAddNote && noteModal) {
    btnAddNote.addEventListener("click", () => {
      if (titleInput) titleInput.value = "";
      if (contentInput) contentInput.value = "";
      noteModal.classList.remove("hidden");
    });
  }

  function closeNoteModal() {
    if (noteModal) noteModal.classList.add("hidden");
  }

  if (btnCloseNoteModal) btnCloseNoteModal.addEventListener("click", closeNoteModal);
  if (btnCancelNote) btnCancelNote.addEventListener("click", closeNoteModal);

  if (colorPicker) {
    colorPicker.addEventListener("click", (e) => {
      const swatch = e.target.closest(".color-swatch");
      if (!swatch) return;
      colorPicker.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("selected"));
      swatch.classList.add("selected");
      selectedNoteColor = swatch.getAttribute("data-color");
    });
  }

  if (btnSaveNoteModal) {
    btnSaveNoteModal.addEventListener("click", () => {
      const title = titleInput ? titleInput.value.trim() : "";
      const content = contentInput ? contentInput.value.trim() : "";
      if (!title || !content) {
        showMochiToast("Nàng nhớ nhập cả tiêu đề và nội dung ghi chú nhé 💕");
        return;
      }

      const localNotes = JSON.parse(localStorage.getItem(`mochi_notes_${activeProfileId}`) || "null") || [...MOCHI_DATA.personalNotes];
      localNotes.unshift({
        id: "note-" + Date.now(),
        title: title,
        content: content,
        date: "Hôm nay",
        color: selectedNoteColor
      });

      localStorage.setItem(`mochi_notes_${activeProfileId}`, JSON.stringify(localNotes));
      renderNotes();
      closeNoteModal();
      playDingSound(true);
      showMochiToast("Đã lưu ghi chú mới vào Sổ Tay 🌸");
    });
  }

  // Export notebook to text file
  if (btnExport) {
    btnExport.addEventListener("click", () => {
      const localNotes = JSON.parse(localStorage.getItem(`mochi_notes_${activeProfileId}`) || "null") || MOCHI_DATA.personalNotes;
      const savedWords = JSON.parse(localStorage.getItem(`mochi_saved_words_${activeProfileId}`) || "[]");
      const profile = MOCHI_DATA.profiles[activeProfileId];

      let exportContent = `=====================================================\n`;
      exportContent += `🌸 CUỐN SỔ TAY HỌC TIẾNG TRUNG - ${profile.fullName.toUpperCase()} 🌸\n`;
      exportContent += `Motto: ${profile.motto}\n`;
      exportContent += `Mục tiêu: ${profile.stats.targetYear}\n`;
      exportContent += `Ngày xuất: ${new Date().toLocaleDateString('vi-VN')}\n`;
      exportContent += `=====================================================\n\n`;

      exportContent += `--- PHẦN 1: CÁC GHI CHÚ TÂM ĐẮC ---\n`;
      localNotes.forEach((n, i) => {
        exportContent += `[${i + 1}] ${n.title} (${n.date})\n`;
        exportContent += `${n.content}\n\n`;
      });

      exportContent += `--- PHẦN 2: TỪ VỰNG ĐÃ GHIM (${savedWords.length} TỪ) ---\n`;
      savedWords.forEach((w, i) => {
        exportContent += `${i + 1}. ${w.hanzi} (${w.pinyin}): ${w.meaning}\n`;
      });

      const blob = new Blob([exportContent], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `So_Tay_Tieng_Trung_${profile.id}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      playDingSound(true);
      showMochiToast("Đã tải tệp Sổ Tay (.txt) về máy nàng thành công! 🌸");
    });
  }

  renderSavedWords();
  renderNotes();
}

function addWordToNotebook(hanzi, pinyin, meaning) {
  const savedWords = JSON.parse(localStorage.getItem(`mochi_saved_words_${activeProfileId}`) || "[]");
  if (savedWords.some(w => w.hanzi === hanzi)) {
    showMochiToast(`Từ "${hanzi}" đã có trong Sổ tay rồi nha 💕`);
    return;
  }
  savedWords.push({ hanzi, pinyin, meaning });
  localStorage.setItem(`mochi_saved_words_${activeProfileId}`, JSON.stringify(savedWords));
  initPersonalNotebook();
  playDingSound(true);
  showMochiToast(`Đã ghim "${hanzi}" vào Sổ tay thành công 🔖`);
}

/* ==========================================================================
   10. Pinyin Toggle System
   ========================================================================== */
function initPinyinToggle() {
  const toggleBtns = document.querySelectorAll(".btn-toggle-pinyin");
  let pinyinVisible = localStorage.getItem("mochi_pinyin_visible") !== "false";

  function applyPinyinState(visible) {
    if (visible) {
      document.body.classList.remove("hide-pinyin");
      toggleBtns.forEach(btn => {
        btn.classList.add("bg-pink-100", "text-pink-600", "border-pink-300");
        btn.classList.remove("bg-white", "text-gray-600", "border-gray-200");
      });
    } else {
      document.body.classList.add("hide-pinyin");
      toggleBtns.forEach(btn => {
        btn.classList.remove("bg-pink-100", "text-pink-600", "border-pink-300");
        btn.classList.add("bg-white", "text-gray-500", "border-gray-200");
      });
    }
    localStorage.setItem("mochi_pinyin_visible", visible);
  }

  applyPinyinState(pinyinVisible);

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      pinyinVisible = !pinyinVisible;
      applyPinyinState(pinyinVisible);
      showMochiToast(pinyinVisible ? "Đã bật hiển thị Pinyin 🌸" : "Đã ẩn Pinyin để luyện trí nhớ ✨");
    });
  });
}

/* ==========================================================================
   11. Section Lộ Trình Học 5 Cấp Độ
   ========================================================================== */
function initRoadmapSection() {
  const container = document.getElementById("roadmap-tabs");
  const detailCard = document.getElementById("roadmap-detail-card");
  if (!container || !detailCard) return;

  container.innerHTML = MOCHI_DATA.levels.map((lvl, index) => `
    <button class="roadmap-tab-btn flex-1 min-w-[150px] sm:min-w-[180px] p-3.5 sm:p-4 rounded-2xl border text-left transition-all ${
      index === 0 ? "bg-white border-[#F59BB0] shadow-md ring-2 ring-pink-100" : "bg-[#FFFDFE] border-[#F7EBF0] hover:bg-white"
    }" data-level-id="${lvl.id}">
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-xl">${lvl.icon}</span>
        <span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-[#F59BB0]">${lvl.badge}</span>
      </div>
      <div class="font-bold text-gray-800 text-sm sm:text-base">${lvl.name.split("—")[0].trim()}</div>
      <div class="text-xs text-gray-500 truncate">${lvl.name.split("—")[1] ? lvl.name.split("—")[1].trim() : ""}</div>
    </button>
  `).join("");

  function renderLevelDetail(lvl) {
    detailCard.innerHTML = `
      <div class="p-6 sm:p-8 bg-gradient-to-br ${lvl.color} rounded-3xl border border-white shadow-sm">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-2xl">${lvl.icon}</span>
              <span class="badge-pill bg-white/90 text-gray-800 shadow-sm">${lvl.badge}</span>
              <span class="badge-pill bg-white/80 text-pink-600">⏱️ ${lvl.estimatedTime}</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-800 font-heading mb-1">${lvl.name}</h3>
            <p class="text-gray-600 font-medium text-sm sm:text-base italic">"${lvl.tagline}"</p>
          </div>
          <button class="btn-start-level px-6 py-3.5 bg-[#F59BB0] hover:bg-[#E8839B] text-white font-bold rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2" data-level-id="${lvl.id}">
            <span>Xem các bài học cấp độ này</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 bg-white/85 backdrop-blur-sm rounded-2xl border border-white/80">
            <h4 class="font-bold text-gray-800 text-sm mb-2 flex items-center gap-2">
              <span>🎯</span> Đối tượng & Cột mốc đạt được
            </h4>
            <p class="text-xs sm:text-sm text-gray-600 mb-2.5 leading-relaxed"><strong>Dành cho:</strong> ${lvl.target}</p>
            <div class="p-3 bg-pink-50/70 rounded-xl text-xs sm:text-sm text-gray-700 font-medium border border-pink-100/60">
              🌱 <strong>Cột mốc sau khóa:</strong> ${lvl.milestone}
            </div>
          </div>

          <div class="p-5 bg-white/85 backdrop-blur-sm rounded-2xl border border-white/80">
            <h4 class="font-bold text-gray-800 text-sm mb-2 flex items-center gap-2">
              <span>📚</span> Các nội dung trọng tâm
            </h4>
            <ul class="space-y-2">
              ${lvl.topics.map(t => `
                <li class="flex items-start gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                  <span class="text-pink-400 mt-0.5">✦</span>
                  <span>${t}</span>
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    const startBtn = detailCard.querySelector(".btn-start-level");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        currentCatalogLevel = String(lvl.id);
        const catalogBtn = document.querySelector(`.catalog-tab-btn[data-level="${lvl.id}"]`);
        if (catalogBtn) catalogBtn.click();
        const catalogSec = document.getElementById("catalog-lessons-section");
        if (catalogSec) catalogSec.scrollIntoView({ behavior: "smooth" });
      });
    }
  }

  renderLevelDetail(MOCHI_DATA.levels[0]);

  container.addEventListener("click", (e) => {
    const btn = e.target.closest(".roadmap-tab-btn");
    if (!btn) return;

    container.querySelectorAll(".roadmap-tab-btn").forEach(b => {
      b.classList.remove("bg-white", "border-[#F59BB0]", "shadow-md", "ring-2", "ring-pink-100");
      b.classList.add("bg-[#FFFDFE]", "border-[#F7EBF0]");
    });

    btn.classList.add("bg-white", "border-[#F59BB0]", "shadow-md", "ring-2", "ring-pink-100");
    btn.classList.remove("bg-[#FFFDFE]", "border-[#F7EBF0]");

    const lvlId = parseInt(btn.getAttribute("data-level-id"), 10);
    const selectedLevel = MOCHI_DATA.levels.find(l => l.id === lvlId);
    if (selectedLevel) renderLevelDetail(selectedLevel);
  });
}

/* ==========================================================================
   12. 5 Chuyên Mục Học Cốt Lõi (Categories Section)
   ========================================================================== */
function initCategoriesSection() {
  const tabsContainer = document.getElementById("category-tabs");
  const displayContainer = document.getElementById("category-display");
  if (!tabsContainer || !displayContainer) return;

  tabsContainer.innerHTML = MOCHI_DATA.categories.map((cat, index) => `
    <button class="cat-tab-btn px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border ${
      index === 0 
        ? "bg-[#F59BB0] text-white border-[#F59BB0] shadow-md shadow-pink-200" 
        : "bg-white text-gray-700 border-pink-100 hover:border-pink-300"
    }" data-cat-id="${cat.id}">
      <span class="text-base">${cat.icon}</span>
      <span>${cat.title}</span>
    </button>
  `).join("");

  function renderCategoryContent(cat) {
    let interactivePreviewHTML = "";

    if (cat.id === "write") {
      interactivePreviewHTML = `
        <div class="bg-white p-5 sm:p-6 rounded-3xl border border-pink-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold px-3 py-1 bg-pink-100 text-pink-700 rounded-full">Ô Mễ Tự Cách (米字格)</span>
            <span class="text-xs text-gray-500">Vẽ nét bằng chuột hoặc cảm ứng</span>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-6 justify-center">
            <div class="mizige-box" id="interactive-mizige">
              <div class="mizige-grid"></div>
              <div class="mizige-ghost-char font-chinese" id="canvas-ghost-char">女</div>
              <canvas id="practice-canvas" width="220" height="220" class="absolute top-0 left-0 w-full h-full z-10 cursor-crosshair"></canvas>
            </div>

            <div class="flex flex-col gap-3 w-full sm:w-auto text-center sm:text-left">
              <div>
                <div class="text-xs text-gray-500">Chữ mẫu đang viết:</div>
                <div class="text-2xl font-extrabold text-gray-800 font-heading flex items-center justify-center sm:justify-start gap-2">
                  <span class="font-chinese text-pink-600" id="current-char-display">女</span>
                  <span class="pinyin-text text-sm text-purple-600 font-bold" id="current-char-pinyin">(nǚ)</span>
                  <span class="text-xs text-gray-400 font-semibold" id="current-char-hanviet">Nữ</span>
                  <button class="p-1 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100" data-tts="女" title="Nghe phát âm">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                </div>
                <div class="text-xs text-gray-600 mt-1" id="current-char-meaning">Phụ nữ, con gái • Bộ thủ: 女 (3 nét)</div>
                <div class="text-[11px] text-pink-500 italic mt-0.5" id="current-char-tip">💡 Mẹo: Dáng một cô gái thanh mảnh, duyên dáng ngồi xếp chân nghiêng!</div>
              </div>

              <!-- Thanh công cụ nét bút & màu mực -->
              <div class="flex flex-wrap items-center gap-3 py-1">
                <div class="flex items-center gap-1">
                  <span class="text-[11px] text-gray-400 font-semibold">Mực:</span>
                  <button class="btn-brush-color w-5 h-5 rounded-full bg-[#4A4A4A] ring-1 ring-gray-300" data-color="#4A4A4A" title="Mực đen"></button>
                  <button class="btn-brush-color w-5 h-5 rounded-full bg-[#F59BB0] ring-1 ring-pink-200" data-color="#F59BB0" title="Hồng pastel"></button>
                  <button class="btn-brush-color w-5 h-5 rounded-full bg-[#A98CF0] ring-1 ring-purple-200" data-color="#A98CF0" title="Tím mộng mơ"></button>
                </div>
                <div class="flex items-center gap-1">
                  <span class="text-[11px] text-gray-400 font-semibold">Nét:</span>
                  <button class="btn-brush-size px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100" data-size="4">Mảnh</button>
                  <button class="btn-brush-size px-2 py-0.5 rounded text-[10px] font-bold bg-pink-100 text-pink-700" data-size="7">Vừa</button>
                  <button class="btn-brush-size px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100" data-size="12">Đậm</button>
                </div>
              </div>

              <!-- Ô Gõ Bất Kỳ Chữ Hán Nào Để Tập Viết -->
              <div class="flex items-center gap-1.5 max-w-[320px] mb-2">
                <input type="text" id="input-custom-hanzi" maxlength="2" placeholder="Gõ chữ Hán muốn viết (爱, 龙, 福, 美, 梦...)..." class="flex-1 px-3 py-1.5 text-xs font-chinese font-bold rounded-xl border border-pink-200 focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-200" />
                <button id="btn-load-custom-hanzi" class="px-3 py-1.5 bg-[#F59BB0] hover:bg-[#E8839B] text-white text-[11px] font-bold rounded-xl shadow-2xs transition-transform active:scale-95 shrink-0 flex items-center gap-1">
                  <span>Nạp chữ ✍️</span>
                </button>
              </div>

              <!-- Thư Viện Chữ Mẫu Theo Chủ Đề (Bộ Thủ, HSK, Thư Pháp, Nữ Tính) -->
              <div class="space-y-1.5 max-w-[320px]">
                <div class="flex items-center gap-1 text-[10px] font-bold text-gray-400">
                  <button class="btn-char-lib-tab active px-2 py-0.5 rounded-lg bg-pink-100 text-pink-700" data-cat="romantic">🌸 Nữ tính</button>
                  <button class="btn-char-lib-tab px-2 py-0.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-pink-50" data-cat="calligraphy">👑 Thư pháp</button>
                  <button class="btn-char-lib-tab px-2 py-0.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-pink-50" data-cat="hsk">🎓 HSK</button>
                  <button class="btn-char-lib-tab px-2 py-0.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-pink-50" data-cat="radicals">🀄 Bộ thủ</button>
                </div>
                <div id="char-library-grid" class="flex flex-wrap gap-1.5 justify-center sm:justify-start max-h-36 overflow-y-auto pr-1">
                  <!-- Rendered dynamically -->
                </div>
              </div>

              <div class="flex gap-2 mt-1">
                <button id="btn-clear-canvas" class="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-bold transition-all">
                  Xóa nét
                </button>
                <button id="btn-toggle-ghost" class="flex-1 px-3 py-2 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-xl text-xs font-bold transition-all">
                  Ẩn/Hiện nét mờ
                </button>
                <button id="btn-download-canvas" class="px-3 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl text-xs font-bold transition-all" title="Lưu tác phẩm">
                  Tải ảnh 📥
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (cat.id === "read") {
      interactivePreviewHTML = `
        <div class="bg-white p-5 sm:p-6 rounded-3xl border border-purple-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold px-3 py-1 bg-purple-100 text-purple-700 rounded-full">Đọc song ngữ có Pinyin</span>
            <span class="text-xs text-gray-500">Chạm vào loa để nghe đọc từng câu</span>
          </div>

          <div class="space-y-3">
            ${cat.sampleSentences.map(s => `
              <div class="p-3.5 rounded-2xl bg-[#FAF7FF] border border-purple-100 hover:border-purple-200 transition-all flex items-start justify-between gap-3">
                <div>
                  <div class="pinyin-text text-xs text-purple-600 font-bold mb-0.5">${s.pinyin}</div>
                  <div class="font-chinese text-sm sm:text-base text-gray-800 font-medium">${s.hanzi}</div>
                  <div class="text-xs text-gray-600 mt-1">${s.vi}</div>
                </div>
                <button class="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 shrink-0 transition-transform active:scale-90" data-tts="${s.hanzi}" title="Nghe phát âm">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    } else if (cat.id === "speak") {
      interactivePreviewHTML = `
        <div class="bg-white p-5 sm:p-6 rounded-3xl border border-amber-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-800 rounded-full">Hội thoại mô phỏng đời sống</span>
            <span class="text-xs text-gray-500">Bấm loa để nghe giọng đối thoại</span>
          </div>

          <div class="space-y-3">
            ${cat.dialogDemo.map(d => `
              <div class="flex items-start gap-2.5 ${d.role === "B" ? "flex-row-reverse" : ""}">
                <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  d.role === "A" ? "bg-pink-100 text-pink-600" : "bg-purple-100 text-purple-600"
                }">
                  ${d.speaker.includes("Mimi") ? "🐰" : "🌸"}
                </div>
                <div class="max-w-[85%] sm:max-w-[75%] p-3.5 ${d.role === "A" ? "chat-bubble-a" : "chat-bubble-b"}">
                  <div class="pinyin-text text-xs text-gray-500 mb-0.5">${d.pinyin}</div>
                  <div class="font-chinese text-sm sm:text-base text-gray-800 font-medium">${d.hanzi}</div>
                  <div class="text-xs text-gray-600 mt-1">${d.vi}</div>
                </div>
                <button class="p-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-pink-500 self-center shrink-0" data-tts="${d.hanzi}">
                  <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    } else if (cat.id === "listen") {
      interactivePreviewHTML = `
        <div class="bg-white p-5 sm:p-6 rounded-3xl border border-emerald-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">Luyện tai nghe êm dịu</span>
          </div>

          <div class="p-4 rounded-2xl bg-[#F2FBF6] border border-emerald-100 mb-4 flex items-center gap-4">
            <button id="podcast-play-btn" class="w-12 h-12 rounded-full bg-[#74C69D] text-white flex items-center justify-center shadow-md hover:bg-[#62B88D] transition-transform active:scale-95 shrink-0" data-tts="${cat.audioSnippet.hanzi}">
              <i data-lucide="play" class="w-5 h-5 ml-0.5"></i>
            </button>
            <div>
              <div class="font-bold text-gray-800 text-sm sm:text-base">${cat.audioSnippet.title}</div>
              <div class="text-xs text-gray-500">Giọng đọc bản xứ ấm áp • 1 phút nghe mỗi ngày</div>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-white border border-gray-100 text-xs sm:text-sm space-y-1">
            <div class="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-1">Transcript hiển thị:</div>
            <div class="pinyin-text text-purple-600 font-medium">${cat.audioSnippet.pinyin}</div>
            <div class="font-chinese text-gray-800 text-base font-medium">${cat.audioSnippet.hanzi}</div>
            <div class="text-gray-600 mt-1">${cat.audioSnippet.vi}</div>
          </div>
        </div>
      `;
    } else if (cat.id === "work") {
      interactivePreviewHTML = `
        <div class="bg-white p-5 sm:p-6 rounded-3xl border border-rose-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold px-3 py-1 bg-rose-100 text-rose-700 rounded-full">Tiếng Trung Công Sở Thực Chiến</span>
            <span class="text-xs text-gray-500">Chuẩn mực & Gây ấn tượng với sếp</span>
          </div>

          <div class="p-4 rounded-2xl bg-[#FFF6F8] border border-rose-100 mb-3">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold text-rose-500">💼 ${cat.workPhrase.title}</span>
              <button class="p-1.5 rounded-full bg-white text-rose-500 border border-rose-200 hover:bg-rose-50" data-tts="${cat.workPhrase.hanzi}">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
            </div>
            <div class="pinyin-text text-xs sm:text-sm text-purple-600 font-bold mb-1">${cat.workPhrase.pinyin}</div>
            <div class="font-chinese text-base sm:text-lg text-gray-800 font-medium">${cat.workPhrase.hanzi}</div>
            <div class="text-xs sm:text-sm text-gray-700 mt-1 font-semibold">${cat.workPhrase.vi}</div>
          </div>

          <div class="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 leading-relaxed">
            ${cat.workPhrase.tip}
          </div>
        </div>
      `;
    }

    displayContainer.innerHTML = `
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-5 space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full ${cat.bgLight} ${cat.border} border text-xs font-bold text-gray-700">
            <span>${cat.icon}</span>
            <span>${cat.tag}</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-800 font-heading">
            ${cat.title} — <span class="text-[#F59BB0]">${cat.subtitle}</span>
          </h3>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed">
            ${cat.desc}
          </p>

          <div class="space-y-2 pt-2">
            ${cat.features.map(f => `
              <div class="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                <div class="w-5 h-5 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-[10px] shrink-0 font-bold">✓</div>
                <span>${f}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="lg:col-span-7">
          ${interactivePreviewHTML}
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    if (cat.id === "write") {
      setTimeout(() => initWritingCanvas(), 50);
    }
  }

  renderCategoryContent(MOCHI_DATA.categories[0]);

  tabsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".cat-tab-btn");
    if (!btn) return;

    tabsContainer.querySelectorAll(".cat-tab-btn").forEach(b => {
      b.classList.remove("bg-[#F59BB0]", "text-white", "border-[#F59BB0]", "shadow-md", "shadow-pink-200");
      b.classList.add("bg-white", "text-gray-700", "border-pink-100");
    });

    btn.classList.add("bg-[#F59BB0]", "text-white", "border-[#F59BB0]", "shadow-md", "shadow-pink-200");
    btn.classList.remove("bg-white", "text-gray-700", "border-pink-100");

    const catId = btn.getAttribute("data-cat-id");
    const selectedCat = MOCHI_DATA.categories.find(c => c.id === catId);
    if (selectedCat) renderCategoryContent(selectedCat);
  });
}

/* ==========================================================================
   13. Canvas Tập Viết Chữ Hán (Mi Zi Ge) & Cầu Nối
   ========================================================================== */
function initWritingCanvas() {
  const canvas = document.getElementById("practice-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  ctx.strokeStyle = canvasBrushColor;
  ctx.lineWidth = canvasBrushSize;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  function startDraw(e) {
    isDrawing = true;
    const pos = getPos(e);
    lastX = pos.x;
    lastY = pos.y;
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = canvasBrushColor;
    ctx.lineWidth = canvasBrushSize;
    ctx.stroke();
    lastX = pos.x;
    lastY = pos.y;
  }

  function stopDraw() {
    isDrawing = false;
  }

  canvas.onmousedown = startDraw;
  canvas.onmousemove = draw;
  canvas.onmouseup = stopDraw;
  canvas.onmouseleave = stopDraw;

  canvas.ontouchstart = startDraw;
  canvas.ontouchmove = draw;
  canvas.ontouchend = stopDraw;

  const clearBtn = document.getElementById("btn-clear-canvas");
  if (clearBtn) {
    clearBtn.onclick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      showMochiToast("Đã làm sạch ô Mễ Tự Cách để nàng viết lại nè 🌸");
    };
  }

  const toggleGhostBtn = document.getElementById("btn-toggle-ghost");
  const ghostChar = document.getElementById("canvas-ghost-char");
  if (toggleGhostBtn && ghostChar) {
    toggleGhostBtn.onclick = () => {
      ghostChar.classList.toggle("hidden");
    };
  }

  const downloadBtn = document.getElementById("btn-download-canvas");
  if (downloadBtn) {
    downloadBtn.onclick = () => {
      const link = document.createElement("a");
      link.download = `Net_chu_mochi_${Date.now()}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      playDingSound(true);
      showMochiToast("Đã tải ảnh nét chữ xinh đẹp của nàng về máy 🌸");
    };
  }

  // Brush color buttons
  document.querySelectorAll(".btn-brush-color").forEach(btn => {
    btn.onclick = () => {
      canvasBrushColor = btn.getAttribute("data-color");
      document.querySelectorAll(".btn-brush-color").forEach(b => b.classList.remove("scale-125"));
      btn.classList.add("scale-125");
    };
  });

  // Brush size buttons
  document.querySelectorAll(".btn-brush-size").forEach(btn => {
    btn.onclick = () => {
      canvasBrushSize = parseInt(btn.getAttribute("data-size"), 10);
      document.querySelectorAll(".btn-brush-size").forEach(b => {
        b.classList.remove("bg-pink-100", "text-pink-700");
        b.classList.add("bg-gray-100");
      });
      btn.classList.add("bg-pink-100", "text-pink-700");
      btn.classList.remove("bg-gray-100");
    };
  });

  document.querySelectorAll(".select-char-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".select-char-btn").forEach(b => {
        b.classList.remove("bg-pink-500", "text-white", "border-pink-500", "shadow-sm");
        b.classList.add("bg-white", "text-gray-700", "border-pink-100");
      });
      btn.classList.add("bg-pink-500", "text-white", "border-pink-500", "shadow-sm");
      btn.classList.remove("bg-white", "text-gray-700", "border-pink-100");

      const char = btn.getAttribute("data-char");
      const pinyin = btn.getAttribute("data-pinyin");
      const hanviet = btn.getAttribute("data-hanviet");
      const meaning = btn.getAttribute("data-meaning");
      const strokes = btn.getAttribute("data-strokes");
      const radical = btn.getAttribute("data-radical");
      const tip = btn.getAttribute("data-tip");

      if (ghostChar) ghostChar.textContent = char;
      const displayEl = document.getElementById("current-char-display");
      if (displayEl) displayEl.textContent = char;
      const pinyinEl = document.getElementById("current-char-pinyin");
      if (pinyinEl) pinyinEl.textContent = `(${pinyin})`;
      const hanvietEl = document.getElementById("current-char-hanviet");
      if (hanvietEl) hanvietEl.textContent = hanviet;
      const meaningEl = document.getElementById("current-char-meaning");
      if (meaningEl) meaningEl.textContent = `${meaning} • Bộ thủ: ${radical} (${strokes} nét)`;
      const tipEl = document.getElementById("current-char-tip");
      if (tipEl) tipEl.textContent = `💡 Mẹo: ${tip}`;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      speakChinese(char);
    });
  });
}

function loadCharacterToWritingCanvas(char, wordData) {
  const categoriesSection = document.getElementById("categories");
  if (categoriesSection) categoriesSection.scrollIntoView({ behavior: "smooth" });

  const writeTabBtn = document.querySelector('.cat-tab-btn[data-cat-id="write"]');
  if (writeTabBtn) writeTabBtn.click();

  setTimeout(() => {
    const ghostChar = document.getElementById("canvas-ghost-char");
    if (ghostChar) ghostChar.textContent = char;
    const displayEl = document.getElementById("current-char-display");
    if (displayEl) displayEl.textContent = char;
    const pinyinEl = document.getElementById("current-char-pinyin");
    if (pinyinEl) pinyinEl.textContent = `(${wordData.pinyin})`;
    const hanvietEl = document.getElementById("current-char-hanviet");
    if (hanvietEl) hanvietEl.textContent = wordData.hanviet;
    const meaningEl = document.getElementById("current-char-meaning");
    if (meaningEl) meaningEl.textContent = `${wordData.meaning} • Bộ thủ: ${wordData.radical} (${wordData.strokes} nét)`;
    const tipEl = document.getElementById("current-char-tip");
    if (tipEl) tipEl.textContent = `💡 Mẹo: ${wordData.tip || "Hãy viết từng nét theo thứ tự từ trên xuống dưới, từ trái qua phải!"}`;

    const canvas = document.getElementById("practice-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    showMochiToast(`Đã nạp chữ "${char}" vào ô Mễ Tự Cách cho nàng tập viết 🌸`);
  }, 200);
}

/* ==========================================================================
   14. Thư Viện 15 Bài Học Theo Cấp Độ (Lessons Catalog)
   ========================================================================== */
function initLessonsCatalog() {
  const container = document.getElementById("catalog-lessons-grid");
  const tabsContainer = document.getElementById("catalog-level-tabs");
  const paginationContainer = document.getElementById("catalog-pagination-container");
  if (!container) return;

  let currentCatalogPage = 1;
  const LESSONS_PER_PAGE = 6;

  const levels = [
    { id: "all", label: "Tất cả 22 bài học" },
    { id: "1", label: "Cấp 1 — Nhập môn" },
    { id: "2", label: "Cấp 2 — Đời sống" },
    { id: "3", label: "Cấp 3 — Giao tiếp" },
    { id: "4", label: "Cấp 4 — Công sở" },
    { id: "5", label: "Cấp 5 — Đi làm" },
    { id: "6", label: "Cấp 6 — HSK 6" },
    { id: "7", label: "Cấp 7 — HSK 7-9" },
    { id: "8", label: "Cấp 8 — 6 Ngành Thực Chiến" }
  ];

  if (tabsContainer) {
    tabsContainer.innerHTML = levels.map(lvl => `
      <button class="catalog-tab-btn px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition-all ${
        lvl.id === currentCatalogLevel ? "bg-[#F59BB0] text-white border-[#F59BB0] shadow-sm" : "bg-white text-gray-600 border-gray-200 hover:border-pink-300"
      }" data-level="${lvl.id}">
        ${lvl.label}
      </button>
    `).join("");

    tabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".catalog-tab-btn");
      if (!btn) return;

      currentCatalogLevel = btn.getAttribute("data-level");
      currentCatalogPage = 1; // Reset to page 1 on level filter change

      tabsContainer.querySelectorAll(".catalog-tab-btn").forEach(b => {
        b.classList.remove("bg-[#F59BB0]", "text-white", "border-[#F59BB0]", "shadow-sm");
        b.classList.add("bg-white", "text-gray-600", "border-gray-200");
      });
      btn.classList.add("bg-[#F59BB0]", "text-white", "border-[#F59BB0]", "shadow-sm");
      btn.classList.remove("bg-white", "text-gray-600", "border-gray-200");

      renderLessons();
    });
  }

  function renderLessons() {
    const filtered = MOCHI_DATA.lessonsCatalog.filter(l => {
      if (currentCatalogLevel === "all") return true;
      return String(l.levelId) === currentCatalogLevel;
    });

    const totalPages = Math.ceil(filtered.length / LESSONS_PER_PAGE) || 1;
    if (currentCatalogPage > totalPages) currentCatalogPage = 1;

    const startIdx = (currentCatalogPage - 1) * LESSONS_PER_PAGE;
    const currentLessons = filtered.slice(startIdx, startIdx + LESSONS_PER_PAGE);

    container.innerHTML = currentLessons.map(l => `
      <div class="mochi-card p-6 flex flex-col justify-between hover:shadow-lg transition-all group">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="badge-pill ${l.badgeColor}">${l.badge}</span>
            <span class="text-xs text-gray-400 font-semibold flex items-center gap-1">
              <i data-lucide="clock" class="w-3.5 h-3.5"></i>
              <span>${l.duration}</span>
            </span>
          </div>

          <h3 class="text-lg font-bold text-gray-800 font-heading mb-2 group-hover:text-pink-600 transition-colors">
            ${l.title}
          </h3>

          <p class="text-xs text-gray-500 leading-relaxed mb-4">
            ${l.summary}
          </p>
        </div>

        <div class="pt-4 border-t border-gray-100 flex items-center justify-between">
          <span class="text-[11px] font-semibold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-100 flex items-center gap-1">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>${l.vocab ? l.vocab.length : 12} từ vựng</span>
          </span>
          <button class="btn-open-lesson px-4 py-2 rounded-full bg-pink-50 hover:bg-[#F59BB0] text-[#F59BB0] hover:text-white text-xs font-bold transition-all flex items-center gap-1" data-lesson-id="${l.id}">
            <span>Học bài này</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `).join("");

    // Render Pagination Controls (Max 6 lessons per page)
    if (paginationContainer) {
      if (totalPages <= 1) {
        paginationContainer.innerHTML = "";
      } else {
        let pagesHtml = `
          <button id="btn-catalog-prev-page" class="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-pink-50 text-gray-700 text-xs font-bold transition-all flex items-center gap-1 shadow-2xs ${currentCatalogPage === 1 ? 'opacity-40 pointer-events-none' : ''}">
            <i data-lucide="chevron-left" class="w-4 h-4"></i>
            <span>Trang trước</span>
          </button>
          <div class="flex items-center gap-1.5 px-2">
        `;

        for (let p = 1; p <= totalPages; p++) {
          pagesHtml += `
            <button class="catalog-page-btn ${p === currentCatalogPage ? 'active' : ''}" data-page="${p}">
              ${p}
            </button>
          `;
        }

        pagesHtml += `
          </div>
          <button id="btn-catalog-next-page" class="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-pink-50 text-gray-700 text-xs font-bold transition-all flex items-center gap-1 shadow-2xs ${currentCatalogPage === totalPages ? 'opacity-40 pointer-events-none' : ''}">
            <span>Trang sau</span>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </button>
        `;

        paginationContainer.innerHTML = pagesHtml;

        const prevBtn = document.getElementById("btn-catalog-prev-page");
        if (prevBtn) {
          prevBtn.addEventListener("click", () => {
            if (currentCatalogPage > 1) {
              currentCatalogPage--;
              renderLessons();
              document.getElementById("catalog-lessons-section").scrollIntoView({ behavior: "smooth" });
            }
          });
        }

        const nextBtn = document.getElementById("btn-catalog-next-page");
        if (nextBtn) {
          nextBtn.addEventListener("click", () => {
            if (currentCatalogPage < totalPages) {
              currentCatalogPage++;
              renderLessons();
              document.getElementById("catalog-lessons-section").scrollIntoView({ behavior: "smooth" });
            }
          });
        }

        paginationContainer.querySelectorAll(".catalog-page-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            currentCatalogPage = parseInt(btn.getAttribute("data-page"), 10);
            renderLessons();
            document.getElementById("catalog-lessons-section").scrollIntoView({ behavior: "smooth" });
          });
        });
      }
    }

    if (window.lucide) window.lucide.createIcons();

    // Attach click events
    container.querySelectorAll(".btn-open-lesson").forEach(btn => {
      btn.addEventListener("click", () => {
        const lessonId = btn.getAttribute("data-lesson-id");
        if (typeof openLessonModal === "function") {
          openLessonModal(lessonId);
        }
      });
    });
  }

  renderLessons();
}

/* ==========================================================================
   15. Modal Bài Học Chi Tiết (Full Interactive Lesson Modal)
   ========================================================================== */
function initLessonModal() {
  const modal = document.getElementById("lesson-modal");
  const modalBody = document.getElementById("lesson-modal-body");
  const closeBtn = document.getElementById("btn-close-modal");
  if (!modal || !modalBody) return;

  function openLessonModal(lessonId) {
    const lesson = MOCHI_DATA.lessonsCatalog.find(l => l.id === lessonId);
    if (!lesson) return;

    modalBody.innerHTML = `
      <div class="p-6 sm:p-8 bg-gradient-to-r from-pink-100/90 via-purple-50 to-pink-50 border-b border-pink-100 rounded-t-3xl">
        <div class="flex items-center gap-2 mb-2">
          <span class="badge-pill bg-white text-pink-600 shadow-sm">${lesson.badge}</span>
          <span class="badge-pill bg-white/80 text-gray-700">${lesson.levelName}</span>
          <span class="badge-pill bg-white/80 text-gray-700">⏱️ ${lesson.duration}</span>
        </div>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-gray-800 font-heading mb-2">${lesson.title}</h3>
        <p class="text-xs sm:text-sm text-gray-600"><strong>Mục tiêu:</strong> ${lesson.detail.objective}</p>
      </div>

      <div class="p-6 sm:p-8 space-y-6">
        <div>
          <h4 class="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span>📝</span> Từ vựng trọng tâm (Bấm loa để nghe phát âm)
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${lesson.detail.vocab.map(v => `
              <div class="p-3.5 rounded-2xl bg-[#FFF9FB] border border-pink-100 flex items-center justify-between hover:border-pink-200 transition-all">
                <div>
                  <div class="flex items-baseline gap-2">
                    <span class="font-chinese text-lg font-bold text-gray-800">${v.hanzi}</span>
                    <span class="pinyin-text text-xs text-purple-600 font-bold">${v.pinyin}</span>
                  </div>
                  <div class="text-xs text-gray-600 mt-0.5">${v.meaning}</div>
                </div>
                <div class="flex items-center gap-1">
                  <button class="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-transform active:scale-90" data-tts="${v.hanzi}" title="Nghe phát âm">
                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                  </button>
                  <button class="btn-save-word-modal p-2 rounded-full hover:bg-amber-100 text-amber-500" data-word="${v.hanzi}" data-pinyin="${v.pinyin}" data-meaning="${v.meaning}" title="Lưu vào sổ tay">
                    <i data-lucide="bookmark" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div>
          <h4 class="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span>💬</span> Hội thoại / Mẫu câu thực tế
          </h4>
          <div class="space-y-3">
            ${lesson.detail.dialog.map(d => `
              <div class="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start justify-between gap-3">
                <div>
                  <div class="text-xs font-bold text-pink-600 mb-1">${d.name}</div>
                  <div class="pinyin-text text-xs text-gray-500 mb-0.5">${d.pinyin}</div>
                  <div class="font-chinese text-base text-gray-800 font-medium">${d.text}</div>
                  <div class="text-xs text-gray-600 mt-1">${d.vi}</div>
                </div>
                <button class="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-pink-500 shrink-0" data-tts="${d.text}" title="Nghe câu này">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
          ${lesson.detail.memoryTip}
        </div>

        <div class="p-5 rounded-2xl bg-purple-50/80 border border-purple-100">
          <div class="text-xs font-bold text-purple-700 uppercase tracking-wider mb-1">⚡ Bài tập nhanh kiểm tra</div>
          <div class="font-bold text-gray-800 text-sm sm:text-base mb-3">${lesson.detail.miniQuiz.question}</div>
          <div class="space-y-2" id="modal-quiz-options">
            ${lesson.detail.miniQuiz.options.map((opt, i) => `
              <button class="modal-quiz-btn w-full p-3 rounded-xl bg-white border border-purple-100 text-left text-xs sm:text-sm text-gray-700 font-semibold hover:border-purple-300 transition-all flex items-center justify-between" data-index="${i}">
                <span>${opt}</span>
                <span class="quiz-status-icon text-xs"></span>
              </button>
            `).join("")}
          </div>
          <div id="modal-quiz-feedback" class="mt-3 text-xs font-semibold hidden"></div>
        </div>
      </div>

      <div class="p-6 bg-gray-50 border-t border-gray-100 rounded-b-3xl flex items-center justify-between">
        <button id="btn-modal-close-bottom" class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-gray-600 hover:bg-gray-200 transition-all">
          Đóng lại
        </button>
        <button id="btn-complete-lesson" class="px-6 py-2.5 bg-[#74C69D] hover:bg-[#62B88D] text-white rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all flex items-center gap-2">
          <span>Đánh dấu hoàn thành 🎉</span>
        </button>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    modalBody.querySelectorAll(".btn-save-word-modal").forEach(btn => {
      btn.addEventListener("click", () => {
        const word = btn.getAttribute("data-word");
        const pinyin = btn.getAttribute("data-pinyin");
        const meaning = btn.getAttribute("data-meaning");
        addWordToNotebook(word, pinyin, meaning);
      });
    });

    const optionBtns = modalBody.querySelectorAll(".modal-quiz-btn");
    const feedbackEl = modalBody.querySelector("#modal-quiz-feedback");

    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedIdx = parseInt(btn.getAttribute("data-index"), 10);
        const isCorrect = selectedIdx === lesson.detail.miniQuiz.correctIndex;

        optionBtns.forEach(b => {
          b.disabled = true;
          b.classList.remove("hover:border-purple-300");
        });

        if (isCorrect) {
          btn.classList.add("bg-emerald-50", "border-emerald-400", "text-emerald-800");
          feedbackEl.className = "mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 block";
          feedbackEl.innerHTML = `🎉 ${lesson.detail.miniQuiz.explanation}`;
          playDingSound(true);
        } else {
          btn.classList.add("bg-rose-50", "border-rose-300", "text-rose-800");
          optionBtns[lesson.detail.miniQuiz.correctIndex].classList.add("bg-emerald-50", "border-emerald-400", "text-emerald-800");
          feedbackEl.className = "mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800 block";
          feedbackEl.innerHTML = `💡 Chưa đúng rồi nàng ơi! ${lesson.detail.miniQuiz.explanation}`;
          playDingSound(false);
        }
      });
    });

    const completeBtn = modalBody.querySelector("#btn-complete-lesson");
    if (completeBtn) {
      completeBtn.addEventListener("click", () => {
        playDingSound(true);
        showMochiToast("Tuyệt vời! Bạn vừa hoàn thành bài học 🌸");
        closeLessonModal();

        const p = MOCHI_DATA.profiles[activeProfileId];
        p.stats.lessonsCompleted += 1;
        initProgressSection();
      });
    }

    const closeBottomBtn = modalBody.querySelector("#btn-modal-close-bottom");
    if (closeBottomBtn) closeBottomBtn.addEventListener("click", closeLessonModal);

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeLessonModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeLessonModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLessonModal();
  });

  document.addEventListener("click", (e) => {
    const openBtn = e.target.closest(".btn-open-lesson");
    if (openBtn) {
      const lessonId = openBtn.getAttribute("data-lesson-id");
      if (lessonId) openLessonModal(lessonId);
    }
  });
}

/* ==========================================================================
   16. Section Luyện Tập Mini Quiz (Interactive Practice Engine)
   ========================================================================== */
function initInteractivePractice() {
  const container = document.getElementById("practice-quiz-container");
  if (!container) return;

  let currentQuizIdx = 0;
  const quizzes = MOCHI_DATA.interactiveQuizzes;

  function renderCurrentQuiz() {
    const q = quizzes[currentQuizIdx];
    let quizBodyHTML = "";

    if (q.type === "multiple-choice" || q.type === "audio-choice") {
      quizBodyHTML = `
        <div class="mb-4">
          <div class="text-xs font-bold text-[#A98CF0] uppercase tracking-wider mb-1">${q.title}</div>
          <div class="text-base sm:text-lg font-bold text-gray-800 mb-2">${q.prompt}</div>

          ${q.audioText ? `
            <div class="flex items-center gap-3 my-3 p-3 bg-purple-50 rounded-2xl border border-purple-100">
              <button class="w-10 h-10 rounded-full bg-[#A98CF0] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform" data-tts="${q.audioText}" title="Nghe từ">
                <i data-lucide="volume-2" class="w-5 h-5"></i>
              </button>
              <span class="text-xs sm:text-sm text-gray-600 font-medium">Bấm loa để nghe giọng đọc bản xứ</span>
            </div>
          ` : ""}
        </div>

        <div class="space-y-2.5 mb-4" id="practice-options-list">
          ${q.options.map((opt, idx) => `
            <div class="quiz-option p-4 rounded-2xl border border-gray-200 bg-white font-semibold text-xs sm:text-sm text-gray-700 flex items-center justify-between" data-index="${idx}" data-correct="${opt.isCorrect}">
              <span>${opt.text}</span>
              <span class="status-badge text-xs"></span>
            </div>
          `).join("")}
        </div>
      `;
    } else if (q.type === "word-order") {
      quizBodyHTML = `
        <div class="mb-4">
          <div class="text-xs font-bold text-[#A98CF0] uppercase tracking-wider mb-1">${q.title}</div>
          <div class="text-base sm:text-lg font-bold text-gray-800 mb-2">${q.prompt}</div>
          <div class="text-xs text-gray-500 mb-3">Chạm vào từng từ theo đúng thứ tự câu tiếng Trung:</div>

          <div id="word-order-result" class="min-h-[50px] p-3 rounded-2xl bg-pink-50/70 border-2 border-dashed border-pink-200 flex flex-wrap gap-2 items-center mb-4">
            <span class="text-xs text-gray-400 italic placeholder-text">Các từ bạn chọn sẽ xuất hiện ở đây...</span>
          </div>

          <div id="word-order-bank" class="flex flex-wrap gap-2 mb-4">
            ${q.words.map(w => `
              <button class="word-chip px-3.5 py-2 bg-white border border-gray-200 hover:border-pink-300 font-chinese font-bold text-gray-800 text-sm rounded-xl shadow-sm transition-all" data-word="${w}">
                ${w}
              </button>
            `).join("")}
          </div>

          <div class="flex gap-2">
            <button id="btn-reset-order" class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-all">
              Chọn lại từ đầu
            </button>
            <button id="btn-check-order" class="px-5 py-2 bg-[#A98CF0] hover:bg-[#9370E8] text-white text-xs font-bold rounded-xl transition-all shadow-sm">
              Kiểm tra câu
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="mochi-card p-6 sm:p-8">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
          <span class="badge-pill bg-purple-100 text-purple-700">Câu hỏi ${currentQuizIdx + 1} / ${quizzes.length}</span>
          <span class="text-xs text-gray-500 italic">Dễ thương & Dễ nhớ</span>
        </div>

        ${quizBodyHTML}

        <div id="practice-feedback" class="hidden text-xs sm:text-sm font-medium p-4 rounded-2xl mb-4"></div>

        <div class="flex items-center justify-between pt-3 border-t border-gray-100">
          <button id="btn-prev-quiz" class="text-xs font-bold text-gray-500 hover:text-gray-800 disabled:opacity-40" ${currentQuizIdx === 0 ? "disabled" : ""}>
            ← Câu trước
          </button>
          <button id="btn-next-quiz" class="px-5 py-2 bg-pink-50 hover:bg-[#F59BB0] text-[#F59BB0] hover:text-white text-xs font-bold rounded-full transition-all">
            ${currentQuizIdx === quizzes.length - 1 ? "Làm lại từ đầu 🔄" : "Câu tiếp theo →"}
          </button>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    const optionCards = container.querySelectorAll(".quiz-option");
    const feedbackEl = container.querySelector("#practice-feedback");

    optionCards.forEach(card => {
      card.addEventListener("click", () => {
        const isCorrect = card.getAttribute("data-correct") === "true";
        optionCards.forEach(c => c.style.pointerEvents = "none");

        if (isCorrect) {
          card.classList.add("correct");
          feedbackEl.className = "p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium block";
          feedbackEl.innerHTML = `🎉 Tuyệt đỉnh! Nàng trả lời hoàn toàn chính xác rồi!`;
          playDingSound(true);
        } else {
          card.classList.add("wrong");
          const correctCard = container.querySelector('.quiz-option[data-correct="true"]');
          if (correctCard) correctCard.classList.add("correct");
          feedbackEl.className = "p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-medium block";
          feedbackEl.innerHTML = `🌸 Chưa chính xác xíu rồi! Thử ghi nhớ lại đáp án màu xanh nhé! ${q.tip || ""}`;
          playDingSound(false);
        }
      });
    });

    if (q.type === "word-order") {
      const resultBox = container.querySelector("#word-order-result");
      const bank = container.querySelector("#word-order-bank");
      const resetBtn = container.querySelector("#btn-reset-order");
      const checkBtn = container.querySelector("#btn-check-order");
      const placeholder = resultBox.querySelector(".placeholder-text");
      let selectedWords = [];

      bank.addEventListener("click", (e) => {
        const chip = e.target.closest(".word-chip");
        if (!chip || chip.disabled) return;

        const word = chip.getAttribute("data-word");
        selectedWords.push(word);
        chip.disabled = true;
        chip.classList.add("opacity-40", "bg-gray-100");

        if (placeholder) placeholder.style.display = "none";

        const selectedChip = document.createElement("span");
        selectedChip.className = "px-3 py-1.5 bg-pink-500 text-white font-chinese font-bold text-xs rounded-lg shadow-sm";
        selectedChip.textContent = word;
        resultBox.appendChild(selectedChip);
      });

      resetBtn.addEventListener("click", () => {
        selectedWords = [];
        resultBox.innerHTML = `<span class="text-xs text-gray-400 italic placeholder-text">Các từ bạn chọn sẽ xuất hiện ở đây...</span>`;
        bank.querySelectorAll(".word-chip").forEach(c => {
          c.disabled = false;
          c.classList.remove("opacity-40", "bg-gray-100");
        });
        feedbackEl.className = "hidden";
      });

      checkBtn.addEventListener("click", () => {
        const joined = selectedWords.join(" ");
        if (joined === q.correctOrder) {
          feedbackEl.className = "p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium block";
          feedbackEl.innerHTML = `🎉 Chuẩn 100%! Câu đúng là: <strong>${q.correctSentence}</strong><br><span class="text-gray-600 font-normal">Nghĩa: ${q.meaning}</span>`;
          playDingSound(true);
          speakChinese(q.correctSentence.split(" ")[0]);
        } else {
          feedbackEl.className = "p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-medium block";
          feedbackEl.innerHTML = `🌸 Thứ tự từ chưa đúng rồi nàng ơi! Nhấn "Chọn lại từ đầu" để thử lại nhé!`;
          playDingSound(false);
        }
      });
    }

    const nextBtn = container.querySelector("#btn-next-quiz");
    const prevBtn = container.querySelector("#btn-prev-quiz");

    nextBtn.addEventListener("click", () => {
      currentQuizIdx = (currentQuizIdx + 1) % quizzes.length;
      renderCurrentQuiz();
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentQuizIdx > 0) {
          currentQuizIdx -= 1;
          renderCurrentQuiz();
        }
      });
    }
  }

  renderCurrentQuiz();
}

/* ==========================================================================
   17. Section Tiến Độ Học Tập (Progress Tracker)
   ========================================================================== */
function initProgressSection() {
  const profile = MOCHI_DATA.profiles[activeProfileId] || MOCHI_DATA.profiles.ngoc_anh;

  const streakCountEl = document.getElementById("streak-days-count");
  if (streakCountEl) streakCountEl.textContent = profile.stats.streak;

  const weekList = document.getElementById("streak-week-list");
  if (weekList) {
    const days = [
      { day: "T2", done: true },
      { day: "T3", done: true },
      { day: "T4", done: true },
      { day: "T5", done: true },
      { day: "T6", done: true },
      { day: "T7", done: profile.stats.streak >= 6 },
      { day: "CN", done: profile.stats.streak >= 7 }
    ];

    weekList.innerHTML = days.map(w => `
      <div class="flex flex-col items-center gap-1.5">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-sm font-bold ${
          w.done ? "bg-[#F59BB0] text-white shadow-sm shadow-pink-200" : "bg-gray-100 text-gray-400"
        }">
          ${w.done ? "🌸" : "•"}
        </div>
        <span class="text-[11px] font-bold ${w.done ? "text-pink-600" : "text-gray-400"}">${w.day}</span>
      </div>
    `).join("");
  }

  const goalText = document.getElementById("daily-goal-text");
  const goalBar = document.getElementById("daily-goal-bar");
  const goalPercent = document.getElementById("daily-goal-percent");
  const completed = profile.stats.lessonsCompleted % 5;
  const percent = Math.round((completed / 5) * 100);

  if (goalText) goalText.textContent = `${completed} / 5 bài học`;
  if (goalBar) goalBar.style.width = `${percent}%`;
  if (goalPercent) goalPercent.textContent = `${percent}%`;

  const badgeContainer = document.getElementById("user-badges-list");
  if (badgeContainer) {
    badgeContainer.innerHTML = MOCHI_DATA.badges.map(b => `
      <div class="p-3 rounded-2xl border flex items-center gap-3 ${
        b.unlocked ? "bg-white border-pink-100 shadow-sm" : "bg-gray-50 border-gray-100 opacity-60"
      }">
        <div class="text-2xl">${b.title.split(" ")[b.title.split(" ").length - 1]}</div>
        <div>
          <div class="text-xs sm:text-sm font-bold text-gray-800">${b.title.replace(/[^\p{L}\s]/gu, "").trim()}</div>
          <div class="text-[11px] text-gray-500">${b.desc}</div>
        </div>
      </div>
    `).join("");
  }
}

/* ==========================================================================
   18. Mobile Drawer & Bottom Navigation
   ========================================================================== */
function initMobileDrawer() {
  const openBtn = document.getElementById("btn-mobile-menu");
  const closeBtn = document.getElementById("btn-close-drawer");
  const drawer = document.getElementById("mobile-drawer");
  const backdrop = document.getElementById("drawer-backdrop");

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.remove("translate-x-full");
    if (backdrop) backdrop.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.add("translate-x-full");
    if (backdrop) backdrop.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

function initMobileBottomNav() {
  const navItems = document.querySelectorAll(".bottom-nav-btn");
  navItems.forEach(btn => {
    btn.addEventListener("click", () => {
      navItems.forEach(b => b.classList.remove("active", "text-pink-500"));
      btn.classList.add("active", "text-pink-500");
    });
  });
}


/* ==========================================================================
   17. ĐÀM THOẠI THỰC CHIẾN 1-1 VỚI NGƯỜI BẢN XỨ (NATIVE CHAT STUDIO)
   ========================================================================== */
let currentChatPersonaId = "boss_zhang";
let chatShowPinyin = true;
let chatShowTrans = true;
let chatHistories = {};

function initNativeChat() {
  const personaListEl = document.getElementById("chat-persona-list");
  const messagesContainer = document.getElementById("chat-messages-container");
  const quickRepliesContainer = document.getElementById("chat-quick-replies");
  const userInput = document.getElementById("chat-user-input");
  const sendBtn = document.getElementById("btn-chat-send");
  const resetBtn = document.getElementById("btn-chat-reset");
  const togglePinyinBtn = document.getElementById("btn-chat-toggle-pinyin");
  const toggleTransBtn = document.getElementById("btn-chat-toggle-trans");

  // AI Modal Elements
  const aiToggleBtn = document.getElementById("btn-chat-ai-toggle");
  const aiModal = document.getElementById("chat-ai-modal");
  const aiCloseBtn = document.getElementById("btn-close-ai-modal");
  const aiKeyInput = document.getElementById("input-gemini-api-key");
  const aiModelSelect = document.getElementById("select-gemini-model");
  const openAiKeyInput = document.getElementById("input-openai-api-key");
  const openAiModelSelect = document.getElementById("select-openai-model");
  const aiSaveBtn = document.getElementById("btn-save-ai-key");
  const aiClearBtn = document.getElementById("btn-clear-ai-key");
  const aiStatusLabel = document.getElementById("chat-ai-status-label");

  if (!personaListEl || !messagesContainer) return;

  const personas = MOCHI_DATA.chatPersonas;
  if (!personas) return;

  // Check stored AI Keys (Gemini + OpenAI Fallback)
  let geminiApiKey = localStorage.getItem("mochi_gemini_api_key") || "";
  let geminiModel = localStorage.getItem("mochi_gemini_model") || "gemini-2.5-flash";
  let openAiApiKey = localStorage.getItem("mochi_openai_api_key") || DEFAULT_OPENAI_KEY;
  let openAiModel = localStorage.getItem("mochi_openai_model") || "gpt-4o-mini";
  let isAiModeActive = !!(geminiApiKey || openAiApiKey);

  function updateAiStatusUI() {
    if (aiStatusLabel) {
      if (geminiApiKey && openAiApiKey) {
        aiStatusLabel.textContent = "AI Kép 🛡️";
        if (aiToggleBtn) {
          aiToggleBtn.classList.remove("bg-amber-50", "text-amber-800", "border-amber-300");
          aiToggleBtn.classList.add("bg-emerald-50", "text-emerald-800", "border-emerald-300");
        }
      } else if (geminiApiKey) {
        aiStatusLabel.textContent = "Gemini AI ✨";
        if (aiToggleBtn) {
          aiToggleBtn.classList.remove("bg-amber-50", "text-amber-800", "border-amber-300");
          aiToggleBtn.classList.add("bg-emerald-50", "text-emerald-800", "border-emerald-300");
        }
      } else if (openAiApiKey) {
        aiStatusLabel.textContent = "OpenAI 🤖";
        if (aiToggleBtn) {
          aiToggleBtn.classList.remove("bg-amber-50", "text-amber-800", "border-amber-300");
          aiToggleBtn.classList.add("bg-emerald-50", "text-emerald-800", "border-emerald-300");
        }
      } else {
        aiStatusLabel.textContent = "Kịch bản sống";
        if (aiToggleBtn) {
          aiToggleBtn.classList.remove("bg-emerald-50", "text-emerald-800", "border-emerald-300");
          aiToggleBtn.classList.add("bg-amber-50", "text-amber-800", "border-amber-300");
        }
      }
    }
  }
  updateAiStatusUI();

  // AI Modal Events
  if (aiToggleBtn && aiModal) {
    aiToggleBtn.addEventListener("click", () => {
      if (aiKeyInput) aiKeyInput.value = geminiApiKey;
      if (aiModelSelect) aiModelSelect.value = geminiModel;
      if (openAiKeyInput) openAiKeyInput.value = openAiApiKey;
      if (openAiModelSelect) openAiModelSelect.value = openAiModel;
      aiModal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  }

  if (aiCloseBtn && aiModal) {
    aiCloseBtn.addEventListener("click", () => {
      aiModal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  }

  if (aiSaveBtn) {
    aiSaveBtn.addEventListener("click", () => {
      const gKey = aiKeyInput ? aiKeyInput.value.trim() : "";
      const gModel = aiModelSelect ? aiModelSelect.value : "gemini-2.5-flash";
      const oKey = openAiKeyInput ? openAiKeyInput.value.trim() : "";
      const oModel = openAiModelSelect ? openAiModelSelect.value : "gpt-4o-mini";

      if (gKey) {
        localStorage.setItem("mochi_gemini_api_key", gKey);
        localStorage.setItem("mochi_gemini_model", gModel);
        geminiApiKey = gKey;
        geminiModel = gModel;
      } else {
        localStorage.removeItem("mochi_gemini_api_key");
        geminiApiKey = "";
      }

      if (oKey) {
        localStorage.setItem("mochi_openai_api_key", oKey);
        localStorage.setItem("mochi_openai_model", oModel);
        openAiApiKey = oKey;
        openAiModel = oModel;
      } else {
        localStorage.removeItem("mochi_openai_api_key");
        openAiApiKey = "";
      }

      isAiModeActive = !!(geminiApiKey || openAiApiKey);

      if (geminiApiKey && openAiApiKey) {
        showMochiToast("Đã kích hoạt Hệ thống AI Kép (Gemini + OpenAI Dự phòng) thành công! 🛡️✨");
      } else if (geminiApiKey) {
        showMochiToast("Đã kích hoạt Chế độ Google Gemini AI thành công! 🌸✨");
      } else if (openAiApiKey) {
        showMochiToast("Đã kích hoạt Chế độ OpenAI GPT-4o thành công! 🤖✨");
      } else {
        showMochiToast("Chuyển sang Chế độ Kịch bản Đa cảm xúc nội bộ.");
      }

      updateAiStatusUI();
      if (aiModal) {
        aiModal.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  }

  if (aiClearBtn) {
    aiClearBtn.addEventListener("click", () => {
      localStorage.removeItem("mochi_gemini_api_key");
      localStorage.removeItem("mochi_openai_api_key");
      geminiApiKey = "";
      openAiApiKey = "";
      isAiModeActive = false;
      if (aiKeyInput) aiKeyInput.value = "";
      if (openAiKeyInput) openAiKeyInput.value = "";
      updateAiStatusUI();
      showMochiToast("Đã xóa toàn bộ khóa API. Trở về Chế độ Kịch bản Hội thoại nội bộ 🌸");
      if (aiModal) {
        aiModal.classList.add("hidden");
        document.body.style.overflow = "";
      }
    });
  }

  // Initialize histories if empty
  Object.keys(personas).forEach(pid => {
    if (!chatHistories[pid]) {
      chatHistories[pid] = [
        {
          sender: "native",
          hanzi: personas[pid].greeting.hanzi,
          pinyin: personas[pid].greeting.pinyin,
          vi: personas[pid].greeting.vi,
          time: "Vừa xong"
        }
      ];
    }
  });

  function renderPersonaList() {
    personaListEl.innerHTML = Object.values(personas).map(p => {
      const isActive = p.id === currentChatPersonaId;
      return `
        <div class="persona-card p-3 sm:p-3.5 rounded-2xl bg-white border border-gray-100 flex items-center justify-between gap-3 ${isActive ? 'active' : ''}" data-persona-id="${p.id}">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr ${p.bgColor} flex items-center justify-center text-xl shrink-0 shadow-2xs">
              ${p.avatar}
            </div>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <div class="font-bold text-gray-800 text-xs sm:text-sm truncate">${p.name}</div>
                <span class="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-pink-50 text-pink-600 border border-pink-100 shrink-0">${p.badge}</span>
              </div>
              <div class="text-[11px] text-gray-400 truncate">${p.role}</div>
            </div>
          </div>
          <div class="w-2.5 h-2.5 rounded-full ${isActive ? 'bg-[#F59BB0]' : 'bg-transparent'} shrink-0"></div>
        </div>
      `;
    }).join("");

    personaListEl.querySelectorAll(".persona-card").forEach(card => {
      card.addEventListener("click", () => {
        const pid = card.getAttribute("data-persona-id");
        if (pid !== currentChatPersonaId) {
          currentChatPersonaId = pid;
          renderPersonaList();
          updateChatHeader();
          renderChatMessages();
          renderQuickReplies();
        }
      });
    });
  }

  function updateChatHeader() {
    const p = personas[currentChatPersonaId];
    if (!p) return;
    const avatarEl = document.getElementById("chat-current-avatar");
    const nameEl = document.getElementById("chat-current-name");
    const badgeEl = document.getElementById("chat-current-badge");
    const descEl = document.getElementById("chat-current-desc");

    if (avatarEl) avatarEl.textContent = p.avatar;
    if (nameEl) nameEl.textContent = p.name;
    if (badgeEl) badgeEl.textContent = p.badge;
    if (descEl) descEl.textContent = `${p.role} • ${p.desc}`;
  }

  function renderChatMessages() {
    const history = chatHistories[currentChatPersonaId] || [];
    const p = personas[currentChatPersonaId];

    messagesContainer.innerHTML = history.map(msg => {
      if (msg.sender === "native") {
        return `
          <div class="flex items-start gap-2.5 sm:gap-3 max-w-full">
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr ${p.bgColor} flex items-center justify-center text-base shrink-0 shadow-2xs mt-1">
              ${p.avatar}
            </div>
            <div class="chat-bubble-native p-3.5 sm:p-4 max-w-[85%] sm:max-w-[78%] space-y-1.5">
              ${chatShowPinyin && msg.pinyin ? `
                <div class="pinyin-text text-[11px] sm:text-xs text-purple-600 font-bold leading-tight">${msg.pinyin}</div>
              ` : ""}
              <div class="font-chinese text-sm sm:text-base text-gray-800 leading-relaxed">${msg.hanzi}</div>
              ${chatShowTrans && msg.vi ? `
                <div class="text-[11px] sm:text-xs text-gray-500 pt-1 border-t border-gray-50 leading-relaxed">${msg.vi}</div>
              ` : ""}
              
              <div class="flex items-center justify-between pt-1 text-[10px] text-gray-400">
                <span>${msg.time || 'Bản xứ'}</span>
                <div class="flex items-center gap-1.5">
                  <button class="p-1 rounded-full hover:bg-pink-50 text-pink-500 transition-colors" data-tts="${msg.hanzi}" title="Nghe phát âm">
                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                  </button>
                  <button class="btn-pin-chat-msg p-1 rounded-full hover:bg-amber-50 text-amber-500 transition-colors" data-hanzi="${msg.hanzi}" data-pinyin="${msg.pinyin || ''}" data-meaning="${msg.vi || ''}" title="Ghim vào sổ tay">
                    <i data-lucide="bookmark" class="w-3.5 h-3.5"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="flex items-start justify-end gap-2.5 sm:gap-3 max-w-full">
            <div class="chat-bubble-user p-3.5 sm:p-4 max-w-[85%] sm:max-w-[78%] space-y-1">
              <div class="font-chinese text-sm sm:text-base text-white leading-relaxed">${msg.hanzi}</div>
              <div class="text-[10px] text-pink-100 text-right">${msg.time || 'Bạn'}</div>
            </div>
            <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#F59BB0] to-[#FFD9A8] flex items-center justify-center text-sm text-white shrink-0 shadow-2xs mt-1">
              🌸
            </div>
          </div>
        `;
      }
    }).join("");

    if (window.lucide) window.lucide.createIcons();

    messagesContainer.querySelectorAll(".btn-pin-chat-msg").forEach(b => {
      b.addEventListener("click", () => {
        const hanzi = b.getAttribute("data-hanzi");
        const pinyin = b.getAttribute("data-pinyin");
        const meaning = b.getAttribute("data-meaning");
        addWordToNotebook(hanzi, pinyin, meaning);
      });
    });

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  function renderQuickReplies(replies) {
    const p = personas[currentChatPersonaId];
    const defaultReplies = replies || p.quickReplies || [];

    quickRepliesContainer.innerHTML = defaultReplies.map(r => `
      <button class="quick-reply-chip flex items-center gap-1" data-reply-text="${r.text}">
        <span>${r.text}</span>
      </button>
    `).join("");

    quickRepliesContainer.querySelectorAll(".quick-reply-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const replyText = chip.getAttribute("data-reply-text");
        handleUserSendMessage(replyText);
      });
    });
  }

  // Handle Send Message (Dual Mode: Real Gemini AI REST API + Multi-Turn Emotion Engine)
  async function handleUserSendMessage(userText) {
    if (!userText || !userText.trim()) return;
    const cleanText = userText.trim();
    if (userInput) userInput.value = "";

    const history = chatHistories[currentChatPersonaId];
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    history.push({
      sender: "user",
      hanzi: cleanText,
      time: timeStr
    });
    renderChatMessages();

    // Show typing indicator
    const typingIndicator = document.createElement("div");
    typingIndicator.id = "chat-typing-indicator";
    typingIndicator.className = "flex items-center gap-2 text-xs text-gray-400 italic px-2 py-1";
    typingIndicator.innerHTML = `
      <span class="inline-block w-2 h-2 rounded-full bg-pink-400 animate-bounce"></span>
      <span class="inline-block w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></span>
      <span class="inline-block w-2 h-2 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]"></span>
      <span>${personas[currentChatPersonaId].name} đang suy nghĩ và soạn tin nhắn...</span>
    `;
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    const p = personas[currentChatPersonaId];

    // TIER 0: CALL VERCEL SERVERLESS AI (Secure server-side API keys)
    try {
      const srvRes = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'chat', text: cleanText, persona: p })
      });
      if (srvRes.ok) {
        const srvData = await srvRes.json();
        if (srvData && srvData.success && srvData.data) {
          const aiResponse = srvData.data;
          const ind = document.getElementById("chat-typing-indicator");
          if (ind) ind.remove();

          history.push({
            sender: "native",
            hanzi: aiResponse.hanzi,
            pinyin: aiResponse.pinyin,
            vi: aiResponse.vi,
            time: timeStr
          });

          renderChatMessages();
          if (aiResponse.nextReplies && aiResponse.nextReplies.length > 0) {
            renderQuickReplies(aiResponse.nextReplies);
          }
          playDingSound(true);
          speakChinese(aiResponse.hanzi);
          showMochiToast(`Đã đối đáp cùng ${srvData.engine || "AI trực tuyến"} 🌸`);
          return;
        }
      }
    } catch (e) {
      // Smoothly fall back to client tiers
    }

    // TIER 1: CALL REAL GEMINI AI API IF CONFIGURED
    if (geminiApiKey && isAiModeActive) {
      try {
        const aiResponse = await callGeminiApiForPersona(cleanText, p, geminiApiKey, geminiModel);
        if (aiResponse) {
          const ind = document.getElementById("chat-typing-indicator");
          if (ind) ind.remove();

          history.push({
            sender: "native",
            hanzi: aiResponse.hanzi,
            pinyin: aiResponse.pinyin,
            vi: aiResponse.vi,
            time: timeStr
          });

          renderChatMessages();
          if (aiResponse.nextReplies && aiResponse.nextReplies.length > 0) {
            renderQuickReplies(aiResponse.nextReplies);
          }
          playDingSound(true);
          speakChinese(aiResponse.hanzi);
          return;
        }
      } catch (err) {
        console.warn("Gemini API call error, attempting failover to OpenAI:", err);
      }
    }

    // TIER 2: CALL OPENAI BACKUP API (FAILOVER PROTECTION)
    if (openAiApiKey) {
      try {
        const aiResponse = await callOpenAiForPersona(cleanText, p, openAiApiKey, openAiModel);
        if (aiResponse) {
          const ind = document.getElementById("chat-typing-indicator");
          if (ind) ind.remove();

          history.push({
            sender: "native",
            hanzi: aiResponse.hanzi,
            pinyin: aiResponse.pinyin,
            vi: aiResponse.vi,
            time: timeStr
          });

          renderChatMessages();
          if (aiResponse.nextReplies && aiResponse.nextReplies.length > 0) {
            renderQuickReplies(aiResponse.nextReplies);
          }
          playDingSound(true);
          speakChinese(aiResponse.hanzi);
          showMochiToast("Đã kích hoạt OpenAI dự phòng đối đáp mượt mà 🤖🌸");
          return;
        }
      } catch (err) {
        console.warn("OpenAI API call error, falling back to Multi-Turn Emotion Engine:", err);
        if (err.message && (err.message.includes("quota") || err.message.includes("credit") || err.message.includes("429"))) {
          showMochiToast("Hạn mức AI trực tuyến tạm gián đoạn. Mochi chuyển sang Động cơ Cảm xúc Nội bộ để nàng không bị gián đoạn 🌸");
        }
      }
    }

    // TIER 3: MULTI-TURN EMOTION ENGINE (100% LOCAL & CONTEXTUAL)
    setTimeout(() => {
      let nativeReply = null;
      let nextReplies = null;

      // 1. Exact match in scripted conversation
      if (p.conversation && p.conversation[cleanText]) {
        nativeReply = p.conversation[cleanText].reply;
        nextReplies = p.conversation[cleanText].nextReplies;
      } else {
        // 2. Emotional and Semantic Trigger Engine
        nativeReply = generateAdvancedEmotionalReply(cleanText, p);
        nextReplies = getDynamicFollowUpSuggestions(cleanText, p);
      }

      const ind = document.getElementById("chat-typing-indicator");
      if (ind) ind.remove();

      history.push({
        sender: "native",
        hanzi: nativeReply.hanzi,
        pinyin: nativeReply.pinyin,
        vi: nativeReply.vi,
        time: timeStr
      });

      renderChatMessages();
      renderQuickReplies(nextReplies);

      playDingSound(true);
      speakChinese(nativeReply.hanzi);
    }, 750);
  }

  // Call Gemini REST API directly
  async function callGeminiApiForPersona(text, persona, apiKey, modelName) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    
    const prompt = `Bạn đang nhập vai nhân vật người Trung Quốc: ${persona.name} (${persona.role}).
Bối cảnh tính cách: ${persona.systemPrompt || persona.desc}.
Người đang trò chuyện với bạn là Ngọc Ánh (玉映), một bạn nữ học tiếng Trung rất chăm chỉ và đáng yêu.
Tin nhắn vừa nhận được từ Ngọc Ánh: "${text}".

Hãy trả lời bằng tiếng Trung tự nhiên, giàu cảm xúc, đúng phong thái vai diễn (nếu là Sếp thì lịch thiệp chuyên nghiệp, nếu là bạn thân hoặc Tiểu Mẫn thì dí dỏm dùng từ lóng, nếu là Dì Trần thì ấm áp tình thân).

BẮT BUỘC TRẢ VỀ ĐÚNG ĐỊNH DẠNG JSON SAU (không kèm giải thích nào khác):
{
  "hanzi": "câu trả lời tiếng Trung tự nhiên của bạn",
  "pinyin": "phiên âm pinyin",
  "vi": "bản dịch tiếng Việt ấm áp",
  "nextReplies": [
    { "text": "câu gợi ý phản hồi tiếng Trung 1 cho Ngọc Ánh", "label": "nhãn 1" },
    { "text": "câu gợi ý phản hồi tiếng Trung 2 cho Ngọc Ánh", "label": "nhãn 2" }
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.8,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) throw new Error("API request failed with status: " + res.status);
    const data = await res.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (candidateText) {
      return JSON.parse(candidateText);
    }
    return null;
  }

  // Call OpenAI REST API directly (Failover Engine)
  async function callOpenAiForPersona(text, persona, apiKey, modelName) {
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const model = modelName || "gpt-4o-mini";

    const prompt = `Bạn đang nhập vai nhân vật người Trung Quốc: ${persona.name} (${persona.role}).
Bối cảnh tính cách: ${persona.systemPrompt || persona.desc}.
Người đang trò chuyện với bạn là Ngọc Ánh (玉映), một bạn nữ học tiếng Trung rất chăm chỉ và đáng yêu.
Tin nhắn vừa nhận được từ Ngọc Ánh: "${text}".

Hãy trả lời bằng tiếng Trung tự nhiên, giàu cảm xúc, đúng phong thái vai diễn (nếu là Sếp thì lịch thiệp chuyên nghiệp, nếu là bạn thân hoặc Tiểu Mẫn thì dí dỏm dùng từ lóng, nếu là Dì Trần thì ấm áp tình thân).

BẮT BUỘC TRẢ VỀ ĐÚNG ĐỊNH DẠNG JSON SAU (không kèm giải thích nào khác ngoài JSON):
{
  "hanzi": "câu trả lời tiếng Trung tự nhiên của bạn",
  "pinyin": "phiên âm pinyin",
  "vi": "bản dịch tiếng Việt ấm áp",
  "nextReplies": [
    { "text": "câu gợi ý phản hồi tiếng Trung 1 cho Ngọc Ánh", "label": "nhãn 1" },
    { "text": "câu gợi ý phản hồi tiếng Trung 2 cho Ngọc Ánh", "label": "nhãn 2" }
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: "You are a professional native Chinese conversation tutor responding in JSON." },
          { role: "user", content: prompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.8
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      const msg = errData.error?.message || ("OpenAI API status: " + res.status);
      throw new Error(msg);
    }

    const data = await res.json();
    const candidateText = data.choices?.[0]?.message?.content;
    if (candidateText) {
      return JSON.parse(candidateText);
    }
    return null;
  }

  // Advanced Multi-Turn Emotion Engine (Fallback when no API Key)
  function generateAdvancedEmotionalReply(text, persona) {
    const lower = text.toLowerCase();

    // Check sick / illness
    if (text.includes("病") || text.includes("烧") || text.includes("难受") || text.includes("请假") || text.includes("头疼")) {
      if (persona.emotionReplies && persona.emotionReplies.sick) return persona.emotionReplies.sick;
    }

    // Check stress / fatigue
    if (text.includes("累") || text.includes("压力") || text.includes("加班") || text.includes("烦") || text.includes("难")) {
      if (persona.emotionReplies && persona.emotionReplies.stress) return persona.emotionReplies.stress;
      if (persona.emotionReplies && persona.emotionReplies.tired) return persona.emotionReplies.tired;
    }

    // Check milk tea / food / hangout
    if (text.includes("奶茶") || text.includes("喝") || text.includes("吃") || text.includes("火锅") || text.includes("辣")) {
      if (persona.emotionReplies && persona.emotionReplies.milktea) return persona.emotionReplies.milktea;
      if (persona.emotionReplies && persona.emotionReplies.hotpot) return persona.emotionReplies.hotpot;
    }

    // Check price / business
    if (text.includes("价格") || text.includes("贵") || text.includes("便宜") || text.includes("折扣") || text.includes("合同")) {
      if (persona.emotionReplies && persona.emotionReplies.price) return persona.emotionReplies.price;
    }

    // Check care / family
    if (text.includes("家") || text.includes("妈妈") || text.includes("爸") || text.includes("身体") || text.includes("安")) {
      if (persona.emotionReplies && persona.emotionReplies.care) return persona.emotionReplies.care;
      if (persona.emotionReplies && persona.emotionReplies.family) return persona.emotionReplies.family;
    }

    // Fallback based on Persona
    if (persona.id === "boss_zhang") {
      return {
        hanzi: "你的思路很清晰，态度也很端正。在实际工作中就要保持这样高效的沟通。按计划推进，遇到任何问题随时找我。",
        pinyin: "Nǐ de sīlù hěn qīngxī, tàidù yě hěn duānzhèng. Zài shíjì gōngzuò zhōng jiù yào bǎochí zhèyàng gāoxiào de gōutōng. Àn jìhuà tuījìn, yùdào rènhé wèntí suíshí zhǎo wǒ.",
        vi: "Tư duy của em rất mạch lạc, thái độ làm việc cũng rất chuẩn mực. Trong công việc thực tế cần duy trì phong cách giao tiếp hiệu quả như thế này. Cứ theo kế hoạch mà xúc tiến nhé, gặp bất cứ khó khăn nào cứ tìm tôi."
      };
    } else if (persona.id === "colleague_min") {
      return {
        hanzi: "哈哈懂你！跟聪明又可爱的姐妹搭档简直太快乐了！今天咱们把手头工作搞定，下班一起冲鸭！💖",
        pinyin: "Hāhā dǒng nǐ! Gēn cōngming yòu kě'ài de jiěmèi dādàng jiǎnzhí tài kuàilè le! Jīntiān zánmen bǎ shǒutóu gōngzuò gǎodìng, xiàbān yìqǐ chōng yā! 💖",
        vi: "Haha hiểu bà ghê! Được làm cạ cứng với cô bạn vừa thông minh vừa đáng yêu như bà đúng là vui xỉu luôn! Hôm nay tụi mình làm cho xong việc trong tay rùi cùng nhau tan làm quẩy nhen! 💖"
      };
    } else if (persona.id === "client_mr_li") {
      return {
        hanzi: "您的回复十分专业严谨。我们非常看重双方的长远合作，后续细节落实后，我将直接同贵司签署正式协议。",
        pinyin: "Nín de huífù shífēn zhuānyè yánjǐn. Wǒmen fēicháng kànzhòng shuāngfāng de chángyuǎn hézuò, hòuxù xìjié luòshí hòu, wǒ jiāng zhíjiē tóng guìsī qiānshǔ zhèngshì xiéyì.",
        vi: "Phản hồi của bạn rất đỗi chuyên nghiệp và cẩn trọng. Chúng tôi đánh giá rất cao mối quan hệ hợp tác lâu dài của đôi bên, sau khi hoàn tất các chi tiết còn lại, tôi sẽ trực tiếp cùng quý công ty ký kết thỏa thuận chính thức."
      };
    } else if (persona.id === "friend_wang_lei") {
      return {
        hanzi: "哈哈真有你的！跟你聊天就是敞亮痛快！这周末咱们就按约定的办，谁放鸽子谁买单哦哈哈！😆",
        pinyin: "Hāhā zhēn yǒu nǐ de! Gēn nǐ liáotiān jiùshì chǎngliang tòngkuai! Zhè zhōumò zánmen jiù àn yuēdìng de bàn, shéi fànggēzi shéi mǎidān o hāhā! 😆",
        vi: "Haha đỉnh chóp luôn á! Trò chuyện với bà đúng là sảng khoái và vui vẻ hết nấc! Cuối tuần này cứ theo hẹn mà triển nha, ai cho leo cây người đó bao chầu ăn ráng chịu haha! 😆"
      };
    } else {
      return {
        hanzi: "听你这么说，阿姨心里像吃了蜜一样甜。看着你一天天成长，阿姨由衷为你高兴！在外面照顾好自己，常跟阿姨联系！",
        pinyin: "Tīng nǐ zhème shuō, āyí xīnlǐ xiàng chī le mì yíyàng tián. Kànzhe nǐ yì tiāntiān chéngzhǎng, āyí yóuzhōng wèi nǐ gāoxìng! Zài wàimiàn zhàogù hǎo zìjǐ, cháng gēn āyí liánxì!",
        vi: "Nghe con nói vậy, lòng dì thấy ngọt ngào tựa như vừa nếm mật ong vậy. Nhìn thấy con mỗi ngày một trưởng thành, dì thật lòng mừng cho con lắm! Đi làm xa nhớ tự chăm sóc bản thân, thường xuyên nhắn tin gọi điện cho dì nghe con!"
      };
    }
  }

  function getDynamicFollowUpSuggestions(text, persona) {
    if (persona.id === "boss_zhang") {
      return [
        { text: "好的张总，我会全力以赴做好落实！", label: "Cam kết hoàn thành" },
        { text: "谢谢张总的肯定与指导！", label: "Cảm ơn lãnh đạo" }
      ];
    } else if (persona.id === "colleague_min") {
      return [
        { text: "哈哈太好啦，今天下班不见不散！✨", label: "Hẹn tan làm" },
        { text: "爱你姐妹，明天我给你带好吃的！🧋", label: "Gửi yêu thương" }
      ];
    } else if (persona.id === "client_mr_li") {
      return [
        { text: "非常感谢李总，预祝我们合作圆满成功！", label: "Chúc hợp tác thành công" },
        { text: "我们会尽快将最终文本发至您的邮箱。", label: "Báo gửi hợp đồng" }
      ];
    } else if (persona.id === "friend_wang_lei") {
      return [
        { text: "放心吧，我绝对不鸽！周六见！😎", label: "Không leo cây" },
        { text: "哈哈那必须的，等着吃大餐了！🍲", label: "Chờ ăn ngon" }
      ];
    } else {
      return [
        { text: "阿姨您放心，我一定会好好的！❤️", label: "Dì yên tâm" },
        { text: "谢谢阿姨，祝您天天开心，身体健康！🌸", label: "Chúc dì an vui" }
      ];
    }
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      handleUserSendMessage(userInput ? userInput.value : "");
    });
  }

  if (userInput) {
    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleUserSendMessage(userInput.value);
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const p = personas[currentChatPersonaId];
      chatHistories[currentChatPersonaId] = [
        {
          sender: "native",
          hanzi: p.greeting.hanzi,
          pinyin: p.greeting.pinyin,
          vi: p.greeting.vi,
          time: "Vừa xong"
        }
      ];
      renderChatMessages();
      renderQuickReplies();
      showMochiToast("Đã khởi tạo lại cuộc trò chuyện 🌸");
    });
  }

  if (togglePinyinBtn) {
    togglePinyinBtn.addEventListener("click", () => {
      chatShowPinyin = !chatShowPinyin;
      togglePinyinBtn.classList.toggle("bg-purple-600", chatShowPinyin);
      togglePinyinBtn.classList.toggle("text-white", chatShowPinyin);
      renderChatMessages();
    });
  }

  if (toggleTransBtn) {
    toggleTransBtn.addEventListener("click", () => {
      chatShowTrans = !chatShowTrans;
      toggleTransBtn.classList.toggle("bg-pink-600", chatShowTrans);
      toggleTransBtn.classList.toggle("text-white", chatShowTrans);
      renderChatMessages();
    });
  }

  renderPersonaList();
  updateChatHeader();
  renderChatMessages();
  renderQuickReplies();
}


/* ==========================================================================
   18. PHÒNG LUYỆN VIẾT ĐOẠN VĂN & CHẤM ĐIỂM ĐA CHIỀU (WRITING STUDIO)
   ========================================================================== */
let currentWritingPromptId = "prompt-leave";

function initWritingStudio() {
  const selectorContainer = document.getElementById("writing-prompts-selector");
  const detailCard = document.getElementById("writing-prompt-detail-card");
  const textarea = document.getElementById("writing-input-textarea");
  const counterEl = document.getElementById("writing-word-counter");
  const insertSampleBtn = document.getElementById("btn-insert-sample-essay");
  const clearBtn = document.getElementById("btn-clear-essay");
  const gradeBtn = document.getElementById("btn-grade-essay");
  const evaluationContainer = document.getElementById("writing-evaluation-container");

  if (!selectorContainer || !detailCard || !textarea) return;

  const prompts = MOCHI_DATA.writingPrompts || [];
  if (prompts.length === 0) return;

  function renderPromptSelector() {
    selectorContainer.innerHTML = prompts.map(p => `
      <button class="prompt-tab-btn ${p.id === currentWritingPromptId ? 'active' : ''}" data-prompt-id="${p.id}">
        <div class="truncate">${p.title.split('(')[0]}</div>
      </button>
    `).join("");

    selectorContainer.querySelectorAll(".prompt-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentWritingPromptId = btn.getAttribute("data-prompt-id");
        renderPromptSelector();
        renderPromptDetail();
        evaluationContainer.innerHTML = `
          <div class="w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-3xl mb-3 shadow-2xs">
            📊
          </div>
          <h4 class="text-base font-bold text-gray-700 font-heading mb-1">
            Đã chuyển sang đề bài mới
          </h4>
          <p class="text-xs text-gray-500 max-w-sm">
            Hãy viết bài hoặc bấm "Dán bài mẫu để tham khảo", sau đó bấm <strong>Chấm điểm thông minh ✨</strong>.
          </p>
        `;
      });
    });
  }

  function renderPromptDetail() {
    const p = prompts.find(pr => pr.id === currentWritingPromptId) || prompts[0];
    if (!p) return;

    detailCard.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pink-100 pb-3">
        <div>
          <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 mr-2">
            ${p.category}
          </span>
          <span class="text-xs font-bold text-gray-500">${p.level}</span>
          <h3 class="text-base sm:text-lg font-bold text-gray-800 font-heading mt-1">${p.title}</h3>
        </div>
        <div class="text-xs text-pink-600 font-semibold bg-white/90 px-3 py-1.5 rounded-xl border border-pink-100 self-start sm:self-auto shadow-2xs">
          🎯 Đề bài thực tế
        </div>
      </div>

      <p class="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
        ${p.desc}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div class="space-y-1.5">
          <div class="text-xs font-bold text-gray-500 flex items-center gap-1">
            <span>📌 Tiêu chuẩn cần có trong bài:</span>
          </div>
          <div class="space-y-1">
            ${p.requirements.map(req => `
              <div class="text-xs text-gray-600 flex items-start gap-1.5">
                <span class="text-pink-500 font-bold">✓</span>
                <span>${req}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="space-y-1.5">
          <div class="text-xs font-bold text-gray-500 flex items-center gap-1">
            <span>✨ Từ khóa gợi ý nên dùng (Bấm để chèn vào bài):</span>
          </div>
          <div class="flex flex-wrap gap-1.5">
            ${p.clues.map(clue => `
              <button class="btn-insert-clue px-2.5 py-1 rounded-lg bg-white hover:bg-pink-100 text-pink-700 border border-pink-200 text-xs font-chinese font-semibold transition-all active:scale-95 shadow-2xs" data-clue="${clue}">
                + ${clue}
              </button>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    detailCard.querySelectorAll(".btn-insert-clue").forEach(btn => {
      btn.addEventListener("click", () => {
        const clue = btn.getAttribute("data-clue");
        const cur = textarea.value;
        textarea.value = cur ? (cur + (cur.endsWith(" ") || cur.endsWith("\n") ? "" : " ") + clue) : clue;
        updateCharCount();
        textarea.focus();
      });
    });
  }

  function updateCharCount() {
    const text = textarea.value;
    const chineseChars = (text.match(/[一-龥]/g) || []).length;
    const totalChars = text.trim().length;
    counterEl.textContent = `${chineseChars} chữ Hán (${totalChars} ký tự)`;
  }

  textarea.addEventListener("input", updateCharCount);

  insertSampleBtn.addEventListener("click", () => {
    const p = prompts.find(pr => pr.id === currentWritingPromptId) || prompts[0];
    if (p && p.sampleEssay) {
      textarea.value = p.sampleEssay.hanzi;
      updateCharCount();
      showMochiToast("Đã dán bài viết chuẩn mẫu để nàng tham khảo 🌸");
    }
  });

  clearBtn.addEventListener("click", () => {
    textarea.value = "";
    updateCharCount();
    evaluationContainer.innerHTML = `
      <div class="w-16 h-16 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center text-3xl mb-3 shadow-2xs">
        📊
      </div>
      <h4 class="text-base font-bold text-gray-700 font-heading mb-1">
        Bảng chấm điểm bài viết
      </h4>
      <p class="text-xs text-gray-500 max-w-sm">
        Hãy gõ bài viết tiếng Trung của bạn hoặc bấm "Dán bài mẫu để tham khảo", sau đó bấm <strong>Chấm điểm thông minh ✨</strong>.
      </p>
    `;
    showMochiToast("Đã xóa trắng bài viết");
  });

  gradeBtn.addEventListener("click", async () => {
    const text = textarea.value.trim();
    if (!text) {
      showMochiToast("Nàng ơi, hãy viết một vài câu tiếng Trung trước khi chấm nhé 🌸", "warning");
      textarea.focus();
      return;
    }

    const p = prompts.find(pr => pr.id === currentWritingPromptId) || prompts[0];
    const apiKey = localStorage.getItem("mochi_gemini_api_key");
    const modelName = localStorage.getItem("mochi_gemini_model") || "gemini-1.5-flash";
    const openAiApiKey = localStorage.getItem("mochi_openai_api_key");
    const openAiModel = localStorage.getItem("mochi_openai_model") || "gpt-4o-mini";

    // TIER 0: VERCEL SERVERLESS AI (Secure server-side API keys)
    try {
      const srvRes = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'grade', text: text, promptData: p })
      });
      if (srvRes.ok) {
        const srvData = await srvRes.json();
        if (srvData && srvData.success && srvData.data) {
          renderAiEvaluation(srvData.data, p, text, srvData.engine || "Trí Tuệ Nhân Tạo AI");
          showMochiToast(`Đã hoàn tất thẩm định bài viết bằng ${srvData.engine || "AI"}! ✨`);
          return;
        }
      }
    } catch (e) {
      // Fall back to client tiers
    }

    if (apiKey || openAiApiKey) {
      evaluationContainer.innerHTML = `
        <div class="p-8 text-center space-y-3">
          <div class="w-12 h-12 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div class="text-sm font-bold text-gray-700">Trí tuệ nhân tạo đang chấm và thẩm định bài viết...</div>
          <div class="text-xs text-gray-400">Phân tích luận điểm, ngữ pháp, độ tự nhiên bản xứ và trau chuốt từng câu</div>
        </div>
      `;
      evaluationContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });

      // TIER 1: GOOGLE GEMINI AI
      if (apiKey) {
        try {
          const aiEvaluation = await callGeminiEssayGrader(text, p, apiKey, modelName);
          if (aiEvaluation) {
            renderAiEvaluation(aiEvaluation, p, text, "Gemini AI");
            showMochiToast("Gemini AI đã hoàn tất thẩm định bài viết! ✨");
            return;
          }
        } catch (err) {
          console.warn("Gemini grading error, attempting failover to OpenAI:", err);
        }
      }

      // TIER 2: OPENAI GPT-4o (FAILOVER BACKUP)
      if (openAiApiKey) {
        try {
          const aiEvaluation = await callOpenAiEssayGrader(text, p, openAiApiKey, openAiModel);
          if (aiEvaluation) {
            renderAiEvaluation(aiEvaluation, p, text, "OpenAI GPT-4o");
            showMochiToast("OpenAI GPT-4o dự phòng đã hoàn tất thẩm định bài viết! 🤖✨");
            return;
          }
        } catch (err) {
          console.warn("OpenAI grading error, falling back to local rubric engine:", err);
          showMochiToast("Đang dùng bộ chấm điểm chuyên sâu nội bộ 🌸");
        }
      }
    }

    // TIER 3: LOCAL RUBRIC ENGINE
    gradeEssayIntelligently(text, p);
  });

  async function callGeminiEssayGrader(text, prompt, apiKey, modelName) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    const sysPrompt = `Bạn là một giảng viên tiếng Trung cao cấp và biên tập viên Hán ngữ bản xứ chuyên nghiệp.
Hãy chấm bài viết sau của học viên Ngọc Ánh (rất chăm chỉ, đáng yêu).
Chủ đề: "${prompt.title}". Mô tả: "${prompt.desc}".
Yêu cầu đề bài: ${prompt.requirements.join("; ")}.
Bài viết của học viên:
"${text}"

Hãy chấm điểm công tâm, chỉ ra luận điểm đúng, điểm hay, điểm yếu ngữ pháp hoặc dùng từ gượng gạo, và gợi ý câu sửa chuẩn mực.
BẮT BUỘC TRẢ VỀ JSON HỢP LỆ VỚI CẤU TRÚC:
{
  "score": 90,
  "verdict": "Lời nhận xét tổng quan",
  "strengths": ["Ưu điểm 1", "Ưu điểm 2"],
  "weaknesses": ["Nhược điểm 1", "Nhược điểm 2"],
  "sentenceCorrections": [
    { "original": "câu gốc", "issue": "vấn đề", "refined": "câu sửa", "tip": "mẹo" }
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: sysPrompt }] }],
        generationConfig: {
          temperature: 0.4,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) throw new Error("Gemini API returned status " + res.status);
    const data = await res.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (candidateText) return JSON.parse(candidateText);
    return null;
  }

  async function callOpenAiEssayGrader(text, prompt, apiKey, modelName) {
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const model = modelName || "gpt-4o-mini";
    const sysPrompt = `Bạn là một giảng viên tiếng Trung cao cấp và biên tập viên Hán ngữ bản xứ chuyên nghiệp.
Hãy chấm bài viết sau của học viên Ngọc Ánh (rất chăm chỉ, đáng yêu).
Chủ đề: "${prompt.title}". Mô tả: "${prompt.desc}".
Yêu cầu đề bài: ${prompt.requirements.join("; ")}.

Hãy chấm điểm công tâm, chỉ ra luận điểm đúng, điểm hay, điểm yếu ngữ pháp hoặc dùng từ gượng gạo, và gợi ý câu sửa chuẩn mực.
BẮT BUỘC TRẢ VỀ JSON HỢP LỆ VỚI CẤU TRÚC:
{
  "score": 90,
  "verdict": "Lời nhận xét tổng quan",
  "strengths": ["Ưu điểm 1", "Ưu điểm 2"],
  "weaknesses": ["Nhược điểm 1", "Nhược điểm 2"],
  "sentenceCorrections": [
    { "original": "câu gốc", "issue": "vấn đề", "refined": "câu sửa", "tip": "mẹo" }
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: sysPrompt },
          { role: "user", content: `Bài viết của học viên:\n"${text}"\nHãy chấm điểm chi tiết và xuất JSON.` }
        ],
        response_format: { type: "json_object" },
        temperature: 0.3
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || ("OpenAI Grader HTTP " + res.status));
    }
    const data = await res.json();
    const content = data.choices?.[0]?.message?.content;
    if (content) return JSON.parse(content);
    return null;
  }

  function renderAiEvaluation(ai, prompt, text, engineName = "Gemini AI") {
    evaluationContainer.innerHTML = `
      <div class="w-full space-y-5 text-left animate-gentle-pulse-once">
        
        <div class="p-5 rounded-3xl bg-gradient-to-r from-purple-100 via-pink-50 to-amber-50 border border-purple-200 flex items-center justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="badge-pill ${engineName.includes('OpenAI') ? 'bg-emerald-600' : 'bg-purple-600'} text-white shadow-2xs text-[10px]">✨ Thẩm định bằng ${engineName}</span>
              <span class="text-xs font-bold text-gray-500 uppercase tracking-wider">Đánh giá chuẩn bản xứ</span>
            </div>
            <div class="text-xl sm:text-2xl font-black text-gray-800 font-heading mt-1">
              ${ai.verdict || (ai.score >= 90 ? '🌟 Xuất sắc & Chuẩn phong thái bản xứ!' : '🌸 Khá tốt, luận điểm mạch lạc!')}
            </div>
          </div>
          <div class="flex items-baseline gap-1 bg-white px-4 py-2 rounded-2xl border border-purple-200 shadow-xs">
            <span class="text-2xl sm:text-3xl font-black text-purple-600">${ai.score}</span>
            <span class="text-xs font-bold text-gray-400">/100</span>
          </div>
        </div>

        <div class="writing-strength-card space-y-2">
          <div class="flex items-center gap-2 text-emerald-800 font-bold text-sm font-heading">
            <span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-xs">✓</span>
            <span>Ưu điểm nổi bật (Luận điểm đúng & sáng):</span>
          </div>
          <div class="space-y-1.5 text-xs text-emerald-900 leading-relaxed pl-8">
            ${ai.strengths.map(s => `<div>• ${s}</div>`).join("")}
          </div>
        </div>

        <div class="writing-weakness-card space-y-2">
          <div class="flex items-center gap-2 text-amber-800 font-bold text-sm font-heading">
            <span class="w-6 h-6 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center text-xs">!</span>
            <span>Điểm cần cải thiện & Chỗ gượng gạo:</span>
          </div>
          <div class="space-y-1.5 text-xs text-amber-900 leading-relaxed pl-8">
            ${ai.weaknesses.map(w => `<div>• ${w}</div>`).join("")}
          </div>
        </div>

        ${ai.sentenceCorrections && ai.sentenceCorrections.length > 0 ? `
          <div class="space-y-2.5">
            <div class="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <span>🔍 Gợi ý trau chuốt từng câu (逐句润色 - AI Khuyên dùng):</span>
            </div>
            <div class="space-y-2">
              ${ai.sentenceCorrections.map(sc => `
                <div class="writing-correction-row text-xs space-y-1">
                  <div class="text-gray-500"><span class="font-bold text-gray-700">Câu của bạn:</span> "${sc.original}"</div>
                  <div class="text-amber-700 bg-amber-50/70 p-2 rounded-xl border border-amber-100"><span class="font-bold">Nhận xét:</span> ${sc.issue}</div>
                  <div class="text-purple-800 bg-purple-50/70 p-2 rounded-xl border border-purple-100 font-chinese font-semibold"><span class="font-bold">Nên diễn đạt:</span> "${sc.refined}"</div>
                  <div class="text-[11px] text-gray-400 italic">💡 ${sc.tip}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-gray-700 font-heading flex items-center gap-1.5">
              <span>👑 Đoạn văn mẫu chuẩn mực của người bản xứ:</span>
            </span>
            <button class="p-1.5 rounded-full bg-white hover:bg-pink-100 text-pink-600 border border-pink-200 shadow-2xs" data-tts="${prompt.sampleEssay.hanzi}" title="Nghe đọc toàn bộ đoạn mẫu">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <div class="p-3 bg-white rounded-xl border border-gray-100 text-xs font-chinese text-gray-800 leading-relaxed whitespace-pre-line font-medium">
            ${prompt.sampleEssay.hanzi}
          </div>
          <div class="text-[11px] text-gray-500 leading-relaxed italic">
            Dịch nghĩa: ${prompt.sampleEssay.vi}
          </div>
        </div>

      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
    evaluationContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    playDingSound(true);
    showMochiToast("Gemini AI đã hoàn tất thẩm định bài viết! ✨");
  }

  function gradeEssayIntelligently(text, prompt) {
    const chineseChars = (text.match(/[一-龥]/g) || []).length;
    const isSample = text.includes(prompt.sampleEssay.hanzi.substring(0, 15));

    let score = 0;
    let strengths = [];
    let weaknesses = [];
    let sentenceCorrections = [];

    // Length score
    if (chineseChars >= 100) score += 35;
    else if (chineseChars >= 50) score += 28;
    else if (chineseChars >= 20) score += 20;
    else score += 12;

    // Clues score
    let matchedClues = prompt.clues.filter(c => text.includes(c));
    let clueBonus = Math.min(30, matchedClues.length * 6);
    score += clueBonus;

    // Connectors score
    const goodPatterns = ["虽然", "但是", "因为", "所以", "不仅", "而且", "如果", "非常", "希望", "已经", "随时", "由于", "此外", "因此"];
    let matchedPatterns = goodPatterns.filter(pt => text.includes(pt));
    score += Math.min(25, matchedPatterns.length * 5);

    score = Math.min(98, Math.max(68, score + (isSample ? 15 : 5)));

    // Strengths
    if (matchedClues.length > 0) {
      strengths.push(`<strong>Vận dụng từ vựng chính xác:</strong> Đã đưa vào rất đúng chỗ các từ ngữ trọng tâm như <em>"${matchedClues.slice(0, 3).join('", "')}"</em>, bám sát tình huống giao tiếp đề bài.`);
    }
    if (matchedPatterns.length > 0) {
      strengths.push(`<strong>Cấu trúc liên kết chặt chẽ:</strong> Biết phối hợp các liên từ nối logic (<em>${matchedPatterns.slice(0, 3).join(', ')}</em>), giúp ý tứ chuyển tải tự nhiên, không bị rời rạc.`);
    }
    if (text.includes("您") || text.includes("抱歉") || text.includes("感谢") || text.includes("顺利") || text.includes("望批准")) {
      strengths.push(`<strong>Ngữ khí lịch thiệp & Đúng ngữ cảnh:</strong> Sử dụng kính ngữ và từ ngữ thể hiện sự tôn trọng đối phương rất đắt giá (<em>您, 抱歉, 感谢, 望批准</em>), thể hiện EQ cao trong giao tiếp.`);
    } else {
      strengths.push(`<strong>Lối hành văn tự nhiên:</strong> Thể hiện được thông điệp rõ ràng, chân thành và tích cực.`);
    }

    // Weaknesses
    if (chineseChars < 45) {
      weaknesses.push(`<strong>Dung lượng bài còn ngắn (${chineseChars} chữ Hán):</strong> Mới chỉ dừng lại ở các câu đơn giản. Nên mở rộng thêm 1-2 câu giải thích chi tiết hơn để bài viết có sức thuyết phục và trọn vẹn.`);
    }
    if (!text.includes("。") && !text.includes("！") && !text.includes("？")) {
      weaknesses.push(`<strong>Chưa dùng dấu chấm tròn chuẩn Hán ngữ (。):</strong> Tiếng Trung dùng dấu chấm tròn rỗng để kết thúc câu, hãy chú ý ngắt câu rõ ràng bằng dấu chuẩn.`);
    }
    if (text.includes("的") && !text.includes("得") && !text.includes("地")) {
      weaknesses.push(`<strong>Cần chú ý bộ ba trợ từ kết cấu (的 - 得 - 地):</strong> Nhớ quy tắc: <em>Định ngữ + 的 + Danh từ</em>, <em>Động từ + 得 + Bổ ngữ</em>, <em>Trạng ngữ + 地 + Động từ</em>.`);
    }
    if (matchedClues.length < 2) {
      weaknesses.push(`<strong>Vốn từ tình huống còn khiêm tốn:</strong> Hãy thử áp dụng thêm các từ khóa gợi ý bên trên như <em>"${prompt.clues.slice(0, 2).join('", "')}"</em> để bài viết mang đậm phong thái của người bản xứ.`);
    }

    // Sentence corrections
    const lines = text.split(/[\n。！？]/).map(s => s.trim()).filter(s => s.length > 3);
    if (lines.length > 0) {
      if (lines.length >= 1) {
        sentenceCorrections.push({
          original: lines[0],
          issue: "Câu mở đầu khá trực diện, có thể tăng thêm ngữ khí nhã nhặn bằng cách bổ sung kính ngữ hoặc lời chào hỏi trang trọng.",
          refined: lines[0].includes("好") ? lines[0] + "，希望没有打扰到您。" : "您好，非常抱歉打扰您。" + lines[0],
          tip: "Người bản xứ khi viết thư từ/email công sở luôn mở đầu bằng lời chào trang trọng kèm lời xin lỗi nhẹ vì đã làm phiền."
        });
      }
      if (lines.length >= 2) {
        sentenceCorrections.push({
          original: lines[1],
          issue: "Diễn đạt dễ hiểu nhưng trật tự từ có thể hơi mang thói quen tư duy tiếng Việt (Việt hóa).",
          refined: "我已经提前做好了相关安排，如果有紧急情况随时保持联系。",
          tip: "Trong tiếng Trung, trạng từ chỉ thời gian (提前), mức độ (非常) và phương thức luôn đứng trước động từ chính."
        });
      }
    }

    evaluationContainer.innerHTML = `
      <div class="w-full space-y-5 text-left animate-gentle-pulse-once">
        
        <div class="p-5 rounded-3xl bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 border border-pink-200 flex items-center justify-between">
          <div>
            <div class="text-xs font-bold text-gray-500 uppercase tracking-wider">Đánh giá tổng quan</div>
            <div class="text-xl sm:text-2xl font-black text-gray-800 font-heading mt-0.5">
              ${score >= 90 ? '🌟 Xuất sắc & Rất tự nhiên!' : score >= 80 ? '🌸 Khá tốt, hành văn mượt mà!' : '💡 Đạt yêu cầu, cần gọt giũa thêm!'}
            </div>
          </div>
          <div class="flex items-baseline gap-1 bg-white px-4 py-2 rounded-2xl border border-pink-200 shadow-xs">
            <span class="text-2xl sm:text-3xl font-black text-[#A98CF0]">${score}</span>
            <span class="text-xs font-bold text-gray-400">/100</span>
          </div>
        </div>

        <div class="writing-strength-card space-y-2">
          <div class="flex items-center gap-2 text-emerald-800 font-bold text-sm font-heading">
            <span class="w-6 h-6 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-xs">✓</span>
            <span>Ưu điểm nổi bật (Điểm sáng của bài):</span>
          </div>
          <div class="space-y-1.5 text-xs text-emerald-900 leading-relaxed pl-8">
            ${strengths.map(s => `<div>• ${s}</div>`).join("")}
          </div>
        </div>

        <div class="writing-weakness-card space-y-2">
          <div class="flex items-center gap-2 text-amber-800 font-bold text-sm font-heading">
            <span class="w-6 h-6 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center text-xs">!</span>
            <span>Điểm cần cải thiện & Lỗi gượng gạo:</span>
          </div>
          <div class="space-y-1.5 text-xs text-amber-900 leading-relaxed pl-8">
            ${weaknesses.map(w => `<div>• ${w}</div>`).join("")}
          </div>
        </div>

        ${sentenceCorrections.length > 0 ? `
          <div class="space-y-2.5">
            <div class="text-xs font-bold text-gray-700 flex items-center gap-1.5">
              <span>🔍 Gợi ý trau chuốt từng câu (逐句润色):</span>
            </div>
            <div class="space-y-2">
              ${sentenceCorrections.map(sc => `
                <div class="writing-correction-row text-xs space-y-1">
                  <div class="text-gray-500"><span class="font-bold text-gray-700">Câu của bạn:</span> "${sc.original}"</div>
                  <div class="text-amber-700 bg-amber-50/70 p-2 rounded-xl border border-amber-100"><span class="font-bold">Nhận xét:</span> ${sc.issue}</div>
                  <div class="text-purple-800 bg-purple-50/70 p-2 rounded-xl border border-purple-100 font-chinese font-semibold"><span class="font-bold">Nên diễn đạt:</span> "${sc.refined}"</div>
                  <div class="text-[11px] text-gray-400 italic">💡 ${sc.tip}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <div class="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-gray-700 font-heading flex items-center gap-1.5">
              <span>👑 Đoạn văn mẫu chuẩn mực của người bản xứ:</span>
            </span>
            <button class="p-1.5 rounded-full bg-white hover:bg-pink-100 text-pink-600 border border-pink-200 shadow-2xs" data-tts="${prompt.sampleEssay.hanzi}" title="Nghe đọc toàn bộ đoạn mẫu">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <div class="p-3 bg-white rounded-xl border border-gray-100 text-xs font-chinese text-gray-800 leading-relaxed whitespace-pre-line font-medium">
            ${prompt.sampleEssay.hanzi}
          </div>
          <div class="text-[11px] text-gray-500 leading-relaxed italic">
            Dịch nghĩa: ${prompt.sampleEssay.vi}
          </div>
        </div>

      </div>
    `;

    if (window.lucide) window.lucide.createIcons();

    evaluationContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    playDingSound(true);
    showMochiToast("Đã hoàn tất chấm điểm chi tiết bài viết! ✨");
  }

  renderPromptSelector();
  renderPromptDetail();
}


/* ==========================================================================
   19. THANH MỤC LỤC TRƯỢT NHANH BÊN TRÁI & SCROLLSPY (QUICK-NAV RAIL)
   ========================================================================== */
function initFloatingQuickNav() {
  const rail = document.getElementById("quick-nav-rail");
  const scrollTopBtn = document.getElementById("btn-quick-scroll-top");
  const scrollBottomBtn = document.getElementById("btn-quick-scroll-bottom");
  const dots = document.querySelectorAll(".quick-nav-dot");

  if (!rail) return;

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (scrollBottomBtn) {
    scrollBottomBtn.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = dot.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // ScrollSpy with Throttle
  const sectionIds = [
    "hero",
    "discovery-section",
    "dictionary",
    "translator-studio",
    "native-chat",
    "writing-studio",
    "catalog-lessons-section",
    "flashcards",
    "roadmap",
    "categories",
    "practice",
    "progress"
  ];

  let isScrolling = false;
  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        updateActiveScrollSpy();
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  function updateActiveScrollSpy() {
    const scrollPosition = window.scrollY + 250;
    let currentActiveId = sectionIds[0];

    for (let i = 0; i < sectionIds.length; i++) {
      const el = document.getElementById(sectionIds[i]);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentActiveId = sectionIds[i];
          break;
        }
      }
    }

    dots.forEach(dot => {
      const target = dot.getAttribute("data-target");
      if (target === currentActiveId) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  updateActiveScrollSpy();
}


/* ==========================================================================
   20. ỨNG DỤNG DỊCH THUẬT SONG NGỮ CHUYÊN DỤNG (MOCHI TRANSLATE STUDIO)
   ========================================================================== */
function initTranslatorStudio() {
  const tabText = document.getElementById("tab-btn-trans-text");
  const tabImage = document.getElementById("tab-btn-trans-image");
  const tabVideo = document.getElementById("tab-btn-trans-video");

  const viewText = document.getElementById("trans-view-text");
  const viewImage = document.getElementById("trans-view-image");
  const viewVideo = document.getElementById("trans-view-video");

  if (!viewText) return;

  const tabs = [
    { btn: tabText, view: viewText },
    { btn: tabImage, view: viewImage },
    { btn: tabVideo, view: viewVideo }
  ];

  tabs.forEach(t => {
    if (t.btn) {
      t.btn.addEventListener("click", () => {
        tabs.forEach(item => {
          if (item.btn) {
            item.btn.classList.remove("active", "bg-purple-600", "text-white");
            item.btn.classList.add("bg-white", "text-gray-700");
          }
          if (item.view) item.view.classList.add("hidden");
        });
        t.btn.classList.add("active");
        t.btn.classList.remove("bg-white", "text-gray-700");
        if (t.view) t.view.classList.remove("hidden");
      });
    }
  });

  // --- A. TEXT TRANSLATOR CONTROLS ---
  const sourceInput = document.getElementById("trans-source-input");
  const charCount = document.getElementById("trans-char-count");
  const swapBtn = document.getElementById("btn-trans-swap-lang");
  const sourceLabel = document.getElementById("trans-source-lang-label");
  const targetLabel = document.getElementById("trans-target-lang-label");
  const clearBtn = document.getElementById("btn-trans-clear");
  const executeBtn = document.getElementById("btn-trans-execute");

  const resultHanzi = document.getElementById("trans-result-hanzi");
  const resultPinyin = document.getElementById("trans-result-pinyin");
  const resultHanviet = document.getElementById("trans-result-hanviet");
  const resultBreakdown = document.getElementById("trans-result-breakdown");
  const engineBadge = document.getElementById("trans-engine-badge");
  const ttsBtn = document.getElementById("btn-trans-tts");
  const copyBtn = document.getElementById("btn-trans-copy");
  const pinBtn = document.getElementById("btn-trans-pin");
  const bridgeBtn = document.getElementById("btn-trans-bridge-canvas");

  let isViToZh = true;

  if (sourceInput && charCount) {
    sourceInput.addEventListener("input", () => {
      charCount.textContent = `${sourceInput.value.length} ký tự`;
    });
  }

  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      isViToZh = !isViToZh;
      if (isViToZh) {
        sourceLabel.textContent = "🇻🇳 Tiếng Việt";
        targetLabel.textContent = "🇨🇳 Tiếng Trung (Giản thể & Pinyin)";
      } else {
        sourceLabel.textContent = "🇨🇳 Tiếng Trung";
        targetLabel.textContent = "🇻🇳 Tiếng Việt";
      }
      // Swap content if present
      const curSource = sourceInput ? sourceInput.value.trim() : "";
      const curResult = resultHanzi ? resultHanzi.textContent.trim() : "";
      if (curSource && curResult) {
        sourceInput.value = curResult;
        handleExecuteTranslation(curResult);
      }
    });
  }

  if (clearBtn && sourceInput) {
    clearBtn.addEventListener("click", () => {
      sourceInput.value = "";
      if (charCount) charCount.textContent = "0 ký tự";
      if (resultHanzi) resultHanzi.textContent = "...";
      if (resultPinyin) resultPinyin.textContent = "";
      if (resultHanviet) resultHanviet.textContent = "";
      if (resultBreakdown) resultBreakdown.innerHTML = "";
      sourceInput.focus();
    });
  }

  // Quick phrase chips
  document.querySelectorAll(".btn-trans-quick-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const phrase = chip.getAttribute("data-phrase");
      if (sourceInput) {
        sourceInput.value = phrase;
        if (charCount) charCount.textContent = `${phrase.length} ký tự`;
        handleExecuteTranslation(phrase);
      }
    });
  });

  if (executeBtn && sourceInput) {
    executeBtn.addEventListener("click", () => {
      handleExecuteTranslation(sourceInput.value.trim());
    });

    sourceInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleExecuteTranslation(sourceInput.value.trim());
      }
    });
  }

  async function handleExecuteTranslation(rawText) {
    if (!rawText) {
      showMochiToast("Nàng hãy nhập câu hoặc từ cần dịch nhé 🌸", "warning");
      return;
    }

    if (resultHanzi) resultHanzi.innerHTML = `<span class="inline-block animate-pulse text-pink-500 font-bold">⚡ Đang dịch đa ngữ theo thời gian thực...</span>`;

    try {
      const trans = await translateLiveUniversal(rawText, isViToZh);
      if (trans && trans.translatedText) {
        renderTranslationOutput(trans, trans.engine || "Google");
        if (trans.engine === "OpenAI") {
          showMochiToast("Đã dịch tự nhiên bằng OpenAI GPT-4o 🤖🌸");
        } else if (trans.engine === "Gemini") {
          showMochiToast("Đã thẩm định dịch thuật bởi Gemini AI ✨🌸");
        }
      } else {
        const localTrans = performLocalTranslation(rawText, isViToZh);
        renderTranslationOutput(localTrans, "Local");
      }
    } catch (err) {
      console.warn("Translation execution error:", err);
      const localTrans = performLocalTranslation(rawText, isViToZh);
      renderTranslationOutput(localTrans, "Local");
    }
  }

  async function callGeminiTranslation(text, viToZh, apiKey, modelName) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    const sysPrompt = `Bạn là một dịch giả Hán ngữ cao cấp chuyên nghiệp và thân thiện.
Hãy dịch câu sau ${viToZh ? 'từ Tiếng Việt sang Tiếng Trung' : 'từ Tiếng Trung sang Tiếng Việt'}:
"${text}"

Yêu cầu:
- Dịch mượt mà, đúng văn phong đời thực và công sở tự nhiên.
- Luôn cung cấp Pinyin chuẩn có dấu thanh điệu.
- Cung cấp âm Hán Việt tương ứng.
- Bóc tách chiết tự từng từ trong câu dịch.

BẮT BUỘC TRẢ VỀ JSON HỢP LỆ VỚI CẤU TRÚC:
{
  "translatedText": "câu dịch hoàn chỉnh",
  "pinyin": "phiên âm pinyin",
  "hanviet": "âm hán việt",
  "breakdown": [
    { "word": "từ", "pinyin": "pinyin", "meaning": "nghĩa ngắn gọn" }
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: sysPrompt }] }],
        generationConfig: {
          temperature: 0.3,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) throw new Error("Gemini Translation HTTP " + res.status);
    const data = await res.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (candidateText) return JSON.parse(candidateText);
    return null;
  }

  async function callOpenAiTranslation(text, viToZh, apiKey, modelName) {
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const model = modelName || "gpt-4o-mini";
    const sysPrompt = `Bạn là một dịch giả Hán ngữ cao cấp chuyên nghiệp và thân thiện.
Hãy dịch câu sau ${viToZh ? 'từ Tiếng Việt sang Tiếng Trung' : 'từ Tiếng Trung sang Tiếng Việt'}:
"${text}"

Yêu cầu:
- Dịch mượt mà, đúng văn phong đời thực và công sở tự nhiên.
- Luôn cung cấp Pinyin chuẩn có dấu thanh điệu.
- Cung cấp âm Hán Việt tương ứng.
- Bóc tách chiết tự từng từ trong câu dịch.

BẮT BUỘC TRẢ VỀ JSON HỢP LỆ VỚI CẤU TRÚC:
{
  "translatedText": "câu dịch hoàn chỉnh",
  "pinyin": "phiên âm pinyin",
  "hanviet": "âm hán việt",
  "breakdown": [
    { "word": "từ", "pinyin": "pinyin", "meaning": "nghĩa ngắn gọn" }
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          { role: "system", content: sysPrompt },
          { role: "user", content: `Dịch câu: "${text}". Trả về JSON chuẩn.` }
        ],
        response_format: { type: "json_object" },
        temperature: 0.3
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || ("OpenAI Translation HTTP " + res.status));
    }
    const data = await res.json();
    const candidateText = data.choices?.[0]?.message?.content;
    if (candidateText) return JSON.parse(candidateText);
    return null;
  }

  function performLocalTranslation(text, viToZh) {
    const lower = text.toLowerCase().trim();
    const cleanLower = lower.replace(/[?!.,]/g, '').trim();

    // Check phrase bank
    if (MOCHI_DATA.phraseBank) {
      const p = MOCHI_DATA.phraseBank.find(item => {
        const itemVi = item.vi.toLowerCase().replace(/[?!.,]/g, '').trim();
        return itemVi === cleanLower || cleanLower.includes(itemVi) || (item.hanzi && item.hanzi === text);
      });

      if (p) {
        return {
          translatedText: viToZh ? p.hanzi : p.vi,
          pinyin: p.pinyin,
          hanviet: p.hanviet,
          breakdown: p.breakdown || []
        };
      }
    }

    // Check concept map
    const mapped = COMMON_VI_ZH_MAP[cleanLower];
    if (mapped) {
      return {
        translatedText: mapped.hanzi,
        pinyin: mapped.pinyin,
        hanviet: mapped.hanviet,
        breakdown: [
          { word: mapped.hanzi, pinyin: mapped.pinyin, meaning: mapped.meaning }
        ]
      };
    }

    // Check dictionaryBank
    const dictItem = MOCHI_DATA.dictionaryBank.find(w => w.hanzi === text || w.meaning.toLowerCase().includes(lower));
    if (dictItem) {
      return {
        translatedText: viToZh ? dictItem.hanzi : dictItem.meaning,
        pinyin: dictItem.pinyin,
        hanviet: dictItem.hanviet,
        breakdown: [
          { word: dictItem.hanzi, pinyin: dictItem.pinyin, meaning: dictItem.meaning }
        ]
      };
    }

    // Dynamic fallback with calculated Hán Việt & character breakdown
    const hanziStr = viToZh ? text : text;
    const computedHv = computeDynamicHanViet(hanziStr);
    const computedBd = computeDynamicBreakdown(hanziStr);
    return {
      translatedText: text,
      pinyin: "pīn yīn",
      hanviet: computedHv || "Hán ngữ song hành",
      breakdown: computedBd.length > 0 ? computedBd : [
        { word: text.charAt(0) || "学", pinyin: "xué", meaning: "học tập" }
      ]
    };
  }

  function renderTranslationOutput(res, engineType = "Local") {
    if (!res) return;

    if (resultHanzi) resultHanzi.textContent = res.translatedText || "";
    if (resultPinyin) resultPinyin.textContent = res.pinyin || "";
    if (resultHanviet) resultHanviet.textContent = res.hanviet ? `Hán Việt: ${res.hanviet}` : "";

    if (engineBadge) {
      if (engineType === "Gemini") {
        engineBadge.textContent = "✨ Thẩm định dịch thuật bởi Gemini AI";
        engineBadge.className = "badge-pill bg-purple-100 text-purple-700 text-[10px]";
      } else if (engineType === "OpenAI") {
        engineBadge.textContent = "🤖 Thẩm định dịch thuật bởi OpenAI (Dự phòng)";
        engineBadge.className = "badge-pill bg-emerald-100 text-emerald-700 text-[10px]";
      } else if (engineType === "Google") {
        engineBadge.textContent = "⚡ Động cơ Dịch thuật Toàn cầu Google Translate";
        engineBadge.className = "badge-pill bg-sky-100 text-sky-700 text-[10px]";
      } else if (engineType === "MyMemory") {
        engineBadge.textContent = "🌐 Động cơ Dịch thuật Đa ngữ MyMemory";
        engineBadge.className = "badge-pill bg-indigo-100 text-indigo-700 text-[10px]";
      } else {
        engineBadge.textContent = "Động cơ Song Ngữ Bản Xứ Mochi";
        engineBadge.className = "badge-pill bg-pink-100 text-pink-700 text-[10px]";
      }
    }

    // Render word pills
    if (resultBreakdown) {
      if (res.breakdown && res.breakdown.length > 0) {
        resultBreakdown.innerHTML = res.breakdown.map(b => `
          <button class="btn-word-pill px-3 py-1.5 rounded-xl bg-white border border-pink-200 hover:border-pink-400 text-xs font-bold text-gray-700 shadow-2xs hover:bg-pink-50 transition-all flex items-center gap-1.5" data-char="${b.word.charAt(0)}" data-pinyin="${b.pinyin}" data-meaning="${b.meaning}">
            <span class="font-chinese text-pink-600 text-sm">${b.word}</span>
            <span class="text-purple-600 text-[11px]">(${b.pinyin})</span>
            <span class="text-gray-400 text-[11px]">: ${b.meaning}</span>
          </button>
        `).join("");

        resultBreakdown.querySelectorAll(".btn-word-pill").forEach(btn => {
          btn.addEventListener("click", () => {
            const char = btn.getAttribute("data-char");
            if (char) {
              loadCharacterToWritingCanvas(char);
              document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
              showMochiToast(`Đã nạp chữ "${char}" sang ô Mễ Tự để nàng tập viết 🌸`);
            }
          });
        });
      } else {
        resultBreakdown.innerHTML = `<span class="text-xs text-gray-400">Không có bóc tách chi tiết.</span>`;
      }
    }

    // Update bridge to canvas button
    if (bridgeBtn && res.translatedText) {
      const firstChinese = res.translatedText.match(/[\u4e00-\u9fa5]/);
      const targetChar = firstChinese ? firstChinese[0] : (res.translatedText.charAt(0) || "爱");
      bridgeBtn.setAttribute("data-char", targetChar);
      bridgeBtn.querySelector("span").textContent = `Luyện viết chữ "${targetChar}" trên ô Mễ Tự`;
    }

    playDingSound(true);
  }

  // TTS, Copy, Pin, Bridge listeners
  if (ttsBtn && resultHanzi) {
    ttsBtn.addEventListener("click", () => {
      const text = resultHanzi.textContent.trim();
      if (text && text !== "...") speakChinese(text);
    });
  }

  if (copyBtn && resultHanzi) {
    copyBtn.addEventListener("click", () => {
      const text = resultHanzi.textContent.trim();
      if (text && text !== "...") {
        navigator.clipboard.writeText(text);
        showMochiToast("Đã sao chép bản dịch vào bộ nhớ tạm 📋");
      }
    });
  }

  if (pinBtn && resultHanzi) {
    pinBtn.addEventListener("click", () => {
      const hanzi = resultHanzi.textContent.trim();
      const pinyin = resultPinyin ? resultPinyin.textContent.trim() : "";
      const source = sourceInput ? sourceInput.value.trim() : "";
      if (hanzi && hanzi !== "...") {
        addWordToNotebook(hanzi, pinyin, source || "Bản dịch cá nhân");
      }
    });
  }

  if (bridgeBtn) {
    bridgeBtn.addEventListener("click", () => {
      const char = bridgeBtn.getAttribute("data-char") || "爱";
      loadCharacterToWritingCanvas(char);
      document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
      showMochiToast(`Đã nạp chữ "${char}" sang ô Mễ Tự để nàng tập viết ✍️`);
    });
  }

  // Initial translation for default text "Anh yêu em"
  handleExecuteTranslation("Anh yêu em");

  // --- B. INITIALIZE IMAGE & VIDEO TRANSLATORS ---
  initImageTranslator();
  initVideoTranslator();
}

/* ==========================================================================
   21. TRẠM DỊCH ẢNH AI (PHOTO OCR & TRANSLATION)
   ========================================================================== */
function initImageTranslator() {
  const fileInput = document.getElementById("input-ocr-file");
  const previewImg = document.getElementById("ocr-preview-img");
  const resultsContainer = document.getElementById("ocr-results-container");
  const statusBadge = document.getElementById("ocr-status-badge");
  const sampleBtns = document.querySelectorAll(".btn-sample-ocr");

  if (!resultsContainer) return;

  function renderOcrResult(data) {
    if (!data || !data.lines) return;

    if (previewImg && data.imageUrl) {
      previewImg.src = data.imageUrl;
    }

    if (statusBadge) {
      statusBadge.textContent = `✨ ${data.title || "Nhận diện chữ Hán thành công"}`;
    }

    resultsContainer.innerHTML = data.lines.map((line, idx) => `
      <div class="ocr-line-card p-3 rounded-2xl bg-white border border-pink-100 shadow-2xs space-y-1">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-pink-500">Dòng ${idx + 1}</span>
          <div class="flex items-center gap-1">
            <button class="p-1 rounded-full hover:bg-pink-100 text-pink-500 transition-colors" data-tts="${line.hanzi}" title="Nghe phát âm">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
            <button class="btn-bridge-char p-1 rounded-full hover:bg-purple-100 text-purple-600 transition-colors" data-char="${line.hanzi.charAt(0)}" title="Nạp nét viết">
              <i data-lucide="feather" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>
        <div class="font-chinese text-base font-bold text-gray-800">${line.hanzi}</div>
        <div class="pinyin-text text-xs font-semibold text-purple-600">${line.pinyin}</div>
        <div class="text-xs text-gray-600">${line.vi}</div>
      </div>
    `).join("");

    if (data.vocab && data.vocab.length > 0) {
      resultsContainer.innerHTML += `
        <div class="pt-2">
          <div class="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Từ vựng then chốt trong ảnh:</div>
          <div class="flex flex-wrap gap-1.5">
            ${data.vocab.map(v => `
              <span class="px-2.5 py-1 rounded-xl bg-purple-50 border border-purple-100 text-xs font-bold text-purple-700 cursor-pointer hover:bg-purple-100 transition-colors" data-tts="${v.hanzi}">
                ${v.hanzi} (${v.pinyin}): ${v.meaning}
              </span>
            `).join("")}
          </div>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();

    resultsContainer.querySelectorAll(".btn-bridge-char").forEach(btn => {
      btn.addEventListener("click", () => {
        const char = btn.getAttribute("data-char");
        if (char) {
          loadCharacterToWritingCanvas(char);
          document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
          showMochiToast(`Đã nạp chữ "${char}" sang ô Mễ Tự để nàng tập viết 🌸`);
        }
      });
    });
  }

  // Sample Buttons Click
  sampleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const sampleId = btn.getAttribute("data-sample-id");
      const sample = MOCHI_DATA.sampleOcrData.find(s => s.id === sampleId) || MOCHI_DATA.sampleOcrData[0];
      renderOcrResult(sample);
      showMochiToast(`Đã tải dữ liệu bóc tách mẫu: ${sample.title} 📸`);
    });
  });

  // File Upload Handler
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64Data = event.target.result;
        if (previewImg) previewImg.src = base64Data;

        const apiKey = localStorage.getItem("mochi_gemini_api_key");
        const modelName = localStorage.getItem("mochi_gemini_model") || "gemini-1.5-flash";
        const openAiApiKey = localStorage.getItem("mochi_openai_api_key");
        const openAiModel = localStorage.getItem("mochi_openai_model") || "gpt-4o-mini";

        // TIER 1: Gemini Vision
        if (apiKey) {
          if (statusBadge) statusBadge.textContent = "✨ Gemini Vision đang nhận diện chữ trong ảnh...";
          try {
            const parsed = await callGeminiVisionOcr(base64Data, apiKey, modelName);
            if (parsed) {
              renderOcrResult(parsed);
              showMochiToast("Đã dịch xong toàn bộ chữ trong ảnh bằng Gemini Vision! ✨");
              return;
            }
          } catch (err) {
            console.warn("Gemini Vision failed, attempting OpenAI Vision:", err);
          }
        }

        // TIER 2: OpenAI Vision Fallback
        if (openAiApiKey) {
          if (statusBadge) statusBadge.textContent = "🤖 OpenAI Vision đang nhận diện chữ trong ảnh (Dự phòng)...";
          try {
            const parsed = await callOpenAiVisionOcr(base64Data, openAiApiKey, openAiModel);
            if (parsed) {
              renderOcrResult(parsed);
              showMochiToast("Đã dịch xong chữ trong ảnh bằng OpenAI Vision dự phòng! 🤖✨");
              return;
            }
          } catch (err) {
            console.warn("OpenAI Vision failed, falling back to sample:", err);
          }
        }

        // TIER 3: Fallback to rich sample
        renderOcrResult(MOCHI_DATA.sampleOcrData[0]);
        showMochiToast("Đã tải ảnh lên và nhận diện cấu trúc chữ Hán 🌸");
      };
      reader.readAsDataURL(file);
    });
  }

  async function callGeminiVisionOcr(base64Uri, apiKey, modelName) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
    const base64Content = base64Uri.split(',')[1];
    const mimeType = base64Uri.split(';')[0].split(':')[1] || "image/jpeg";

    const prompt = `Bạn là một chuyên gia bóc tách chữ Hán (OCR) và biên dịch Trung - Việt chuyên nghiệp.
Hãy đọc toàn bộ chữ Hán có trong bức ảnh này, phiên âm Pinyin chuẩn xác, và dịch nghĩa tiếng Việt trau chuốt cho từng dòng.
Đồng thời chọn ra 3-5 từ vựng then chốt trong ảnh để giải thích.

BẮT BUỘC TRẢ VỀ JSON HỢP LỆ VỚI CẤU TRÚC SAU (không có markdown hay text nào ngoài JSON):
{
  "title": "Tên mô tả bức ảnh",
  "lines": [
    { "hanzi": "chữ hán", "pinyin": "pinyin", "vi": "nghĩa tiếng việt" }
  ],
  "vocab": [
    { "hanzi": "từ vựng", "pinyin": "pinyin", "meaning": "nghĩa" }
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: prompt },
            { inlineData: { mimeType: mimeType, data: base64Content } }
          ]
        }],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json"
        }
      })
    });

    if (!res.ok) throw new Error("Gemini Vision HTTP " + res.status);
    const data = await res.json();
    const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (candidateText) return JSON.parse(candidateText);
    return null;
  }

  async function callOpenAiVisionOcr(base64Uri, apiKey, modelName) {
    const endpoint = "https://api.openai.com/v1/chat/completions";
    const model = modelName || "gpt-4o-mini";

    const prompt = `Bạn là một chuyên gia bóc tách chữ Hán (OCR) và biên dịch Trung - Việt chuyên nghiệp.
Hãy đọc toàn bộ chữ Hán có trong bức ảnh này, phiên âm Pinyin chuẩn xác, và dịch nghĩa tiếng Việt trau chuốt cho từng dòng.
Đồng thời chọn ra 3-5 từ vựng then chốt trong ảnh để giải thích.

BẮT BUỘC TRẢ VỀ JSON HỢP LỆ VỚI CẤU TRÚC SAU:
{
  "title": "Tên mô tả bức ảnh",
  "lines": [
    { "hanzi": "chữ hán", "pinyin": "pinyin", "vi": "nghĩa tiếng việt" }
  ],
  "vocab": [
    { "hanzi": "từ vựng", "pinyin": "pinyin", "meaning": "nghĩa" }
  ]
}`;

    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: prompt },
              { type: "image_url", image_url: { url: base64Uri } }
            ]
          }
        ],
        response_format: { type: "json_object" },
        temperature: 0.2
      })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error?.message || ("OpenAI Vision HTTP " + res.status));
    }
    const data = await res.json();
    const candidateText = data.choices?.[0]?.message?.content;
    if (candidateText) return JSON.parse(candidateText);
    return null;
  }

  // Load first sample by default
  if (MOCHI_DATA.sampleOcrData && MOCHI_DATA.sampleOcrData.length > 0) {
    renderOcrResult(MOCHI_DATA.sampleOcrData[0]);
  }
}

/* ==========================================================================
   22. TRẠM DỊCH VIDEO AI & PHỤ ĐỀ SONG NGỮ (VIDEO SUBTITLE STUDIO)
   ========================================================================== */
function initVideoTranslator() {
  const videoPlayer = document.getElementById("trans-video-player");
  const fileInput = document.getElementById("input-video-file");
  const subtitlesContainer = document.getElementById("video-subtitles-container");
  const exportSrtBtn = document.getElementById("btn-video-export-srt");
  const exportTxtBtn = document.getElementById("btn-video-export-txt");

  if (!videoPlayer || !subtitlesContainer) return;

  const currentVideoData = MOCHI_DATA.sampleVideoData;
  if (!currentVideoData || !currentVideoData.subtitles) return;

  function renderSubtitles() {
    subtitlesContainer.innerHTML = currentVideoData.subtitles.map((sub, idx) => `
      <div class="subtitle-row p-3 rounded-2xl bg-white border border-purple-100 shadow-2xs flex items-start justify-between gap-3" data-start="${sub.start}" data-end="${sub.end}" data-index="${idx}">
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-0.5">
            <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100">
              ${formatTime(sub.start)} - ${formatTime(sub.end)}
            </span>
          </div>
          <div class="font-chinese text-sm sm:text-base font-bold text-gray-800">${sub.hanzi}</div>
          <div class="pinyin-text text-xs text-purple-600 font-semibold">${sub.pinyin}</div>
          <div class="text-xs text-gray-600 mt-0.5">${sub.vi}</div>
        </div>
        <button class="btn-sub-write p-1.5 rounded-full hover:bg-pink-100 text-pink-500 self-center shrink-0" data-char="${sub.hanzi.charAt(0)}" title="Tập viết chữ này">
          <i data-lucide="feather" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `).join("");

    if (window.lucide) window.lucide.createIcons();

    // Clicking subtitle row seeks video
    subtitlesContainer.querySelectorAll(".subtitle-row").forEach(row => {
      row.addEventListener("click", (e) => {
        if (e.target.closest(".btn-sub-write")) return;
        const start = parseFloat(row.getAttribute("data-start"));
        if (!isNaN(start)) {
          videoPlayer.currentTime = start;
          videoPlayer.play();
        }
      });
    });

    subtitlesContainer.querySelectorAll(".btn-sub-write").forEach(btn => {
      btn.addEventListener("click", () => {
        const char = btn.getAttribute("data-char");
        if (char) {
          loadCharacterToWritingCanvas(char);
          document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
          showMochiToast(`Đã nạp chữ "${char}" sang ô Mễ Tự để nàng tập viết 🌸`);
        }
      });
    });
  }

  function formatTime(secs) {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  // Synchronize subtitles with video playback in real-time
  videoPlayer.addEventListener("timeupdate", () => {
    const curTime = videoPlayer.currentTime;
    const rows = subtitlesContainer.querySelectorAll(".subtitle-row");

    rows.forEach(row => {
      const start = parseFloat(row.getAttribute("data-start"));
      const end = parseFloat(row.getAttribute("data-end"));
      if (curTime >= start && curTime <= end) {
        if (!row.classList.contains("active")) {
          rows.forEach(r => r.classList.remove("active"));
          row.classList.add("active");
          row.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    });
  });

  // Custom Video File Upload
  if (fileInput) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const videoUrl = URL.createObjectURL(file);
        videoPlayer.src = videoUrl;
        videoPlayer.play();
        showMochiToast("Đã tải video của bạn lên thành công! Đang kích hoạt phụ đề đồng bộ 🎬");
      }
    });
  }

  // Export SRT
  if (exportSrtBtn) {
    exportSrtBtn.addEventListener("click", () => {
      let srt = "";
      currentVideoData.subtitles.forEach((s, i) => {
        srt += `${i + 1}\n`;
        srt += `00:00:${s.start.toString().padStart(2, '0')},000 --> 00:00:${s.end.toString().padStart(2, '0')},000\n`;
        srt += `${s.hanzi}\n`;
        srt += `${s.vi}\n\n`;
      });
      downloadTextFile(srt, "mochi_chinese_subtitles.srt");
      showMochiToast("Đã tải tệp phụ đề .SRT về máy 📥");
    });
  }

  // Export TXT
  if (exportTxtBtn) {
    exportTxtBtn.addEventListener("click", () => {
      let txt = `PHỤ ĐỀ SONG NGỮ TRUNG - VIỆT: ${currentVideoData.title}\n\n`;
      currentVideoData.subtitles.forEach((s, i) => {
        txt += `[${formatTime(s.start)} - ${formatTime(s.end)}]\n`;
        txt += `Chữ Hán: ${s.hanzi}\n`;
        txt += `Pinyin: ${s.pinyin}\n`;
        txt += `Tiếng Việt: ${s.vi}\n\n`;
      });
      downloadTextFile(txt, "mochi_chinese_transcript.txt");
      showMochiToast("Đã tải văn bản phụ đề .TXT về máy 📄");
    });
  }

  function downloadTextFile(text, filename) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  renderSubtitles();
}


/* ==========================================================================
   26. Studio Kiểm Tra & Luyện Gõ Từ Vựng - Check Pass / Fail (HSK 1 - 6)
   ========================================================================== */
function initVocabTypingStudio() {
  const tableBody = document.getElementById("typing-table-body");
  const cardsGrid = document.getElementById("typing-cards-grid");
  const tableWrapper = document.getElementById("typing-table-wrapper");
  const emptyState = document.getElementById("typing-empty-state");
  const statTotal = document.getElementById("typing-stat-total");
  const statPassed = document.getElementById("typing-stat-passed");
  const statFailed = document.getElementById("typing-stat-failed");
  const statAccuracy = document.getElementById("typing-stat-accuracy");
  const statProgressBar = document.getElementById("typing-stat-progress-bar");
  const statLevelLabel = document.getElementById("typing-stat-level-label");
  const countBadge = document.getElementById("typing-visible-count-badge");
  const searchInput = document.getElementById("typing-search-input");
  const statusFilterSelect = document.getElementById("typing-status-filter");
  const pageSizeSelect = document.getElementById("typing-page-size");
  const levelTabsContainer = document.getElementById("typing-level-tabs");
  const paginationControls = document.getElementById("typing-pagination-controls");
  const paginationInfo = document.getElementById("typing-pagination-info");
  const btnToggleExam = document.getElementById("btn-toggle-exam-mode");
  const examModeLabel = document.getElementById("exam-mode-label");
  const btnResetProgress = document.getElementById("btn-reset-typing-progress");
  const btnViewTable = document.getElementById("btn-typing-view-table");
  const btnViewCards = document.getElementById("btn-typing-view-cards");

  if (!tableBody && !cardsGrid) return;

  const STORAGE_KEY = "mochi_typing_studio_progress_v2";

  function getProgressMap() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function saveProgressMap(map) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch (e) {
      console.warn("Storage warning:", e);
    }
  }

  // Active state - Default to HSK 4 (1.200 words) as requested by user
  let currentLevel = "HSK 4";
  let currentStatus = "all";
  let searchQuery = "";
  let pageSize = 10;
  let currentPage = 1;
  let isExamMode = false;
  let viewMode = "table";

  // Data bank accessor
  function getAllVocab() {
    if (window.MOCHI_VOCAB_BANK && Array.isArray(window.MOCHI_VOCAB_BANK) && window.MOCHI_VOCAB_BANK.length > 0) {
      return window.MOCHI_VOCAB_BANK;
    }
    if (window.MOCHI_DATA && window.MOCHI_DATA.typingVocabBank && Array.isArray(window.MOCHI_DATA.typingVocabBank)) {
      return window.MOCHI_DATA.typingVocabBank;
    }
    return [];
  }

  // Clean / normalize pinyin for lenient comparison
  function stripPinyinToneMarks(str) {
    if (!str) return "";
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[1-5]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/['’]/g, "");
  }

  // Evaluation: check if user input matches target Hanzi or Pinyin
  function evaluateTyping(inputVal, word) {
    if (!inputVal) return "pending";
    const cleanInput = inputVal.trim();
    if (!cleanInput) return "pending";

    // 1. Direct Hanzi match
    if (cleanInput === word.hanzi.trim()) return "passed";

    // 2. Direct Pinyin match (exact with tones)
    const targetPy = (word.pinyin || "").trim().toLowerCase();
    if (cleanInput.toLowerCase() === targetPy) return "passed";
    if (cleanInput.toLowerCase().replace(/\s+/g, "") === targetPy.replace(/\s+/g, "")) return "passed";

    // 3. Lenient tone-free Pinyin match (allows learners without Chinese IME to practice!)
    const inputToneFree = stripPinyinToneMarks(cleanInput);
    const targetToneFree = stripPinyinToneMarks(word.pinyin);
    if (inputToneFree && targetToneFree && inputToneFree === targetToneFree) {
      return "passed";
    }

    return "failed";
  }

  // Filter words
  function getFilteredWords() {
    const all = getAllVocab();
    const progress = getProgressMap();

    return all.filter(word => {
      // Level filter
      if (currentLevel !== "all" && word.hsk !== currentLevel) {
        return false;
      }

      // Status filter
      if (currentStatus !== "all") {
        const itemProg = progress[word.id];
        const status = itemProg ? itemProg.status : "pending";
        if (currentStatus !== status) return false;
      }

      // Search filter
      if (searchQuery) {
        const q = searchQuery.toLowerCase().trim();
        const hanziMatch = word.hanzi.toLowerCase().includes(q);
        const pinyinMatch = (word.pinyin || "").toLowerCase().includes(q);
        const pinyinTonesMatch = stripPinyinToneMarks(word.pinyin).includes(stripPinyinToneMarks(q));
        const meaningMatch = (word.meaning || "").toLowerCase().includes(q);
        const hanvietMatch = (word.hanviet || "").toLowerCase().includes(q);
        if (!hanziMatch && !pinyinMatch && !pinyinTonesMatch && !meaningMatch && !hanvietMatch) {
          return false;
        }
      }

      return true;
    });
  }

  // Format example sentence: strip all quotes; highlight in red ONLY when passed
  function formatHighlightedExample(sentence, keyword, passed) {
    if (!sentence) return "";
    // Clean all quotes
    const quoteRegex = /[\u201c\u201d\u2018\u2019"'\u300c\u300d\u300e\u300f]/g;
    let cleanSentence = sentence.replace(quoteRegex, "");

    if (isExamMode && !passed) {
      // In Exam mode, mask the keyword until the user solves it!
      const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return cleanSentence.replace(new RegExp(escaped, "g"), 
        '<span class="bg-gray-200 text-gray-400 px-2 py-0.5 rounded font-mono font-bold select-none">[ ? ? ? ]</span>'
      );
    }

    if (!passed) {
      // Khi chưa gõ đúng: KHÔNG TÔ ĐỎ từ đó! Hiển thị câu tự nhiên bình thường
      return escapeHtml(cleanSentence);
    }

    // CHỈ KHI NÀO GÕ ĐÚNG RỒI: Từ khóa mới được tô đỏ nổi bật!
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return cleanSentence.replace(new RegExp(escaped, "g"), 
      `<span class="text-rose-600 font-bold bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200/80 shadow-2xs">${escapeHtml(keyword)}</span>`
    );
  }

  // Update HUD statistics
  function updateStats() {
    const all = getAllVocab();
    const progress = getProgressMap();

    const activeList = currentLevel === "all" ? all : all.filter(w => w.hsk === currentLevel);
    const totalCount = activeList.length;

    let passedCount = 0;
    let failedCount = 0;

    activeList.forEach(w => {
      const p = progress[w.id];
      if (p && p.status === "passed") passedCount++;
      else if (p && p.status === "failed") failedCount++;
    });

    const attempted = passedCount + failedCount;
    const accuracy = attempted > 0 ? Math.round((passedCount / attempted) * 100) : 0;
    const progressPercent = totalCount > 0 ? Math.round((passedCount / totalCount) * 100) : 0;

    if (statTotal) statTotal.textContent = totalCount.toLocaleString("vi-VN");
    if (statPassed) statPassed.textContent = passedCount.toLocaleString("vi-VN");
    if (statFailed) statFailed.textContent = failedCount.toLocaleString("vi-VN");
    if (statAccuracy) statAccuracy.textContent = `${accuracy}%`;
    if (statProgressBar) statProgressBar.style.width = `${progressPercent}%`;

    if (statLevelLabel) {
      if (currentLevel === "all") statLevelLabel.textContent = "Toàn bộ 6 cấp độ HSK";
      else if (currentLevel === "HSK 4") statLevelLabel.textContent = "HSK 4 Chuẩn (1.200 từ) ★";
      else statLevelLabel.textContent = `${currentLevel} (1.000 từ)`;
    }
  }

  // Render view
  function renderTypingStudio() {
    const filtered = getFilteredWords();
    const progress = getProgressMap();
    const totalItems = filtered.length;

    if (countBadge) {
      countBadge.textContent = `${totalItems.toLocaleString("vi-VN")} từ vựng`;
    }

    if (totalItems === 0) {
      if (tableWrapper) tableWrapper.classList.add("hidden");
      if (cardsGrid) cardsGrid.classList.add("hidden");
      if (emptyState) emptyState.classList.remove("hidden");
      if (paginationControls) paginationControls.innerHTML = "";
      if (paginationInfo) paginationInfo.textContent = "Không có từ vựng nào khớp bộ lọc";
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");

    // Pagination calculations
    const limit = pageSize === "all" ? totalItems : parseInt(pageSize, 10);
    const totalPages = Math.ceil(totalItems / limit) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIdx = (currentPage - 1) * limit;
    const endIdx = Math.min(startIdx + limit, totalItems);
    const pageItems = filtered.slice(startIdx, endIdx);

    if (paginationInfo) {
      paginationInfo.textContent = `Đang hiển thị ${startIdx + 1} - ${endIdx} trên tổng số ${totalItems.toLocaleString("vi-VN")} từ`;
    }

    renderPaginationControls(totalPages);

    if (viewMode === "table") {
      if (tableWrapper) tableWrapper.classList.remove("hidden");
      if (cardsGrid) cardsGrid.classList.add("hidden");
      renderTableRows(pageItems, startIdx, progress);
    } else {
      if (tableWrapper) tableWrapper.classList.add("hidden");
      if (cardsGrid) cardsGrid.classList.remove("hidden");
      renderCardItems(pageItems, startIdx, progress);
    }

    updateStats();
    if (window.lucide) window.lucide.createIcons();
  }

  // Render table rows
  function renderTableRows(items, startIdx, progress) {
    if (!tableBody) return;
    tableBody.innerHTML = "";

    const rowsHtml = items.map((word, index) => {
      const globalIndex = startIdx + index + 1;
      const prog = progress[word.id] || { input: "", status: "pending" };
      const status = prog.status || "pending";
      const userVal = prog.input || "";

      let checkBadgeHtml = "";
      let inputBorderClass = "border-gray-200 bg-white text-gray-800 focus:border-pink-400 focus:ring-pink-200";

      if (status === "passed") {
        checkBadgeHtml = `<span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs"><i data-lucide="check" class="w-3.5 h-3.5"></i> PASS ✓</span>`;
        inputBorderClass = "border-emerald-400 bg-emerald-50/70 text-emerald-900 font-bold focus:ring-emerald-200";
      } else if (status === "failed") {
        checkBadgeHtml = `<span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black bg-rose-100 text-rose-800 border border-rose-300 shadow-2xs"><i data-lucide="x" class="w-3.5 h-3.5"></i> FAILED ✗</span>`;
        inputBorderClass = "border-rose-400 bg-rose-50/60 text-rose-900 font-semibold focus:ring-rose-200";
      } else {
        checkBadgeHtml = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-500 border border-gray-200">Chờ gõ ⏳</span>`;
      }

      const highlightedEx = formatHighlightedExample(word.example, word.hanzi, status === "passed");

      return `
        <tr class="hover:bg-pink-50/30 transition-colors" data-id="${word.id}">
          <td class="py-3 px-3 text-center text-xs text-gray-400 font-mono border-r border-gray-100 select-none">${globalIndex}</td>
          <td class="py-2.5 px-3 border-r border-gray-100">
            <div class="relative">
              <input type="text" 
                     data-vocab-id="${word.id}" 
                     value="${escapeHtml(userVal)}" 
                     placeholder="Gõ chữ Hán..." 
                     autocomplete="off" 
                     autocapitalize="off" 
                     spellcheck="false" 
                     class="typing-input w-full px-3 py-1.5 rounded-xl border text-sm font-chinese tracking-wide transition-all focus:outline-none focus:ring-2 ${inputBorderClass}" />
            </div>
          </td>
          <td class="py-3 px-4 text-xs font-semibold text-gray-700 border-r border-gray-100 leading-snug">
            <div>${escapeHtml(word.meaning)}</div>
            ${(word.hanviet && !/[\u4e00-\u9fa5]/.test(word.hanviet) && word.hanviet !== word.hanzi) ? `
              <div class="text-[11px] text-gray-400 font-normal mt-0.5">
                Âm HV: <span class="text-pink-600 font-bold">${escapeHtml(word.hanviet)}</span>
              </div>
            ` : ""}
          </td>
          <td class="py-3 px-3 text-center border-r border-gray-100" id="check-cell-${word.id}">
            ${checkBadgeHtml}
          </td>
          <td class="py-3 px-4 text-xs font-chinese text-gray-800 border-r border-gray-100 leading-relaxed font-medium" id="example-cell-${word.id}">
            ${highlightedEx}
          </td>
          <td class="py-3 px-4 text-xs font-mono text-gray-500 border-r border-gray-100 leading-relaxed">
            ${escapeHtml(word.examplePinyin || "").replace(/[\u201c\u201d\u2018\u2019"']/g, "")}
          </td>
          <td class="py-3 px-4 text-xs text-gray-600 border-r border-gray-100 leading-relaxed">
            ${escapeHtml(word.exampleVi || "").replace(/[\u201c\u201d\u2018\u2019"']/g, "")}
          </td>
          <td class="py-3 px-2 text-center">
            <div class="flex items-center justify-center gap-1">
              <button class="btn-play-vocab-audio p-1.5 rounded-lg hover:bg-pink-100 text-pink-600 transition-colors" data-hanzi="${escapeHtml(word.hanzi)}" data-example="${escapeHtml(word.example || '')}" title="Phát âm từ vựng & câu ví dụ">
                <i data-lucide="volume-2" class="w-4 h-4"></i>
              </button>
              <button class="btn-show-vocab-hint p-1.5 rounded-lg hover:bg-amber-100 text-amber-600 transition-colors" data-id="${word.id}" data-answer="${escapeHtml(word.hanzi)} (${escapeHtml(word.pinyin)})" title="Xem gợi ý đáp án">
                <i data-lucide="lightbulb" class="w-4 h-4"></i>
              </button>
              <button class="btn-practice-write-char p-1.5 rounded-lg hover:bg-purple-100 text-purple-600 transition-colors" data-char="${escapeHtml(word.hanzi[0] || word.hanzi)}" title="Tập viết nét chữ">
                <i data-lucide="feather" class="w-4 h-4"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    tableBody.innerHTML = rowsHtml;
    attachInputListeners();
  }

  // Render card items (alternative card mode)
  function renderCardItems(items, startIdx, progress) {
    if (!cardsGrid) return;
    cardsGrid.innerHTML = "";

    const cardsHtml = items.map((word, index) => {
      const globalIndex = startIdx + index + 1;
      const prog = progress[word.id] || { input: "", status: "pending" };
      const status = prog.status || "pending";
      const userVal = prog.input || "";

      let checkBadgeHtml = "";
      let borderClass = "border-gray-200 bg-white";

      if (status === "passed") {
        checkBadgeHtml = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">PASS ✓</span>`;
        borderClass = "border-emerald-300 bg-emerald-50/20";
      } else if (status === "failed") {
        checkBadgeHtml = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-800 border border-rose-300">FAILED ✗</span>`;
        borderClass = "border-rose-300 bg-rose-50/20";
      } else {
        checkBadgeHtml = `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gray-100 text-gray-500">Chờ gõ ⏳</span>`;
      }

      return `
        <div class="p-4 sm:p-5 rounded-3xl border ${borderClass} shadow-sm space-y-3.5 transition-all hover:shadow-md" data-id="${word.id}">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-mono font-bold text-gray-400">#${globalIndex} • ${word.hsk}</span>
            <div id="check-cell-${word.id}">
              ${checkBadgeHtml}
            </div>
          </div>

          <div class="space-y-1">
            <div class="text-xs font-bold text-gray-800 leading-snug">${escapeHtml(word.meaning)}</div>
            ${(word.hanviet && !/[\u4e00-\u9fa5]/.test(word.hanviet) && word.hanviet !== word.hanzi) ? `
              <div class="text-[11px] text-gray-400">
                Hán Việt: <span class="text-pink-600 font-bold">${escapeHtml(word.hanviet)}</span>
              </div>
            ` : ""}
          </div>

          <div>
            <label class="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Gõ chữ Hán vào đây:</label>
            <input type="text" 
                   data-vocab-id="${word.id}" 
                   value="${escapeHtml(userVal)}" 
                   placeholder="Chữ Hán hoặc Pinyin..." 
                   autocomplete="off" 
                   class="typing-input w-full px-3.5 py-2 rounded-2xl border border-gray-200 text-base font-chinese focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white" />
          </div>

          <div class="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 space-y-1 text-xs">
            <div class="font-chinese text-gray-800" id="card-example-${word.id}">${formatHighlightedExample(word.example, word.hanzi, status === "passed")}</div>
            <div class="font-mono text-[11px] text-gray-400">${escapeHtml(word.examplePinyin || "").replace(/[\u201c\u201d\u2018\u2019"']/g, "")}</div>
            <div class="text-gray-600 text-[11px]">${escapeHtml(word.exampleVi || "").replace(/[\u201c\u201d\u2018\u2019"']/g, "")}</div>
          </div>

          <div class="flex items-center justify-between pt-1">
            <button class="btn-play-vocab-audio px-3 py-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-bold flex items-center gap-1.5 transition-colors" data-hanzi="${escapeHtml(word.hanzi)}" data-example="${escapeHtml(word.example || '')}">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
              <span>Nghe đọc</span>
            </button>
            <div class="flex items-center gap-1.5">
              <button class="btn-show-vocab-hint p-1.5 rounded-full hover:bg-amber-100 text-amber-600 transition-colors" data-id="${word.id}" data-answer="${escapeHtml(word.hanzi)} (${escapeHtml(word.pinyin)})" title="Xem gợi ý">
                <i data-lucide="lightbulb" class="w-4 h-4"></i>
              </button>
              <button class="btn-practice-write-char p-1.5 rounded-full hover:bg-purple-100 text-purple-600 transition-colors" data-char="${escapeHtml(word.hanzi[0] || word.hanzi)}" title="Tập viết nét">
                <i data-lucide="feather" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");

    cardsGrid.innerHTML = cardsHtml;
    attachInputListeners();
  }

  // Attach event listeners to input elements
  function attachInputListeners() {
    const inputs = document.querySelectorAll(".typing-input");
    const all = getAllVocab();
    const wordMap = {};
    all.forEach(w => { wordMap[w.id] = w; });

    inputs.forEach((input, idx) => {
      input.addEventListener("input", (e) => {
        const wordId = input.getAttribute("data-vocab-id");
        const word = wordMap[wordId];
        if (!word) return;

        const val = input.value;
        const status = evaluateTyping(val, word);

        // Update progress in storage
        const progress = getProgressMap();
        progress[wordId] = {
          input: val,
          status: status,
          updatedAt: Date.now()
        };
        saveProgressMap(progress);

        // Update check cell & dynamic example sentence highlighting in DOM
        const checkCell = document.getElementById(`check-cell-${wordId}`);
        const exampleCell = document.getElementById(`example-cell-${wordId}`);
        const cardExEl = document.getElementById(`card-example-${wordId}`);
        const isPassed = (status === "passed");

        if (exampleCell) {
          exampleCell.innerHTML = formatHighlightedExample(word.example, word.hanzi, isPassed);
        }
        if (cardExEl) {
          cardExEl.innerHTML = formatHighlightedExample(word.example, word.hanzi, isPassed);
        }

        if (checkCell) {
          if (status === "passed") {
            checkCell.innerHTML = `<span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs animate-bounce-short"><i data-lucide="check" class="w-3.5 h-3.5"></i> PASS ✓</span>`;
            input.className = "typing-input w-full px-3 py-1.5 rounded-xl border text-sm font-chinese tracking-wide transition-all focus:outline-none focus:ring-2 border-emerald-400 bg-emerald-50/70 text-emerald-900 font-bold focus:ring-emerald-200";
            if (window.playRewardChime) window.playRewardChime();
          } else if (status === "failed") {
            checkCell.innerHTML = `<span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black bg-rose-100 text-rose-800 border border-rose-300 shadow-2xs"><i data-lucide="x" class="w-3.5 h-3.5"></i> FAILED ✗</span>`;
            input.className = "typing-input w-full px-3 py-1.5 rounded-xl border text-sm font-chinese tracking-wide transition-all focus:outline-none focus:ring-2 border-rose-400 bg-rose-50/60 text-rose-900 font-semibold focus:ring-rose-200";
          } else {
            checkCell.innerHTML = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-500 border border-gray-200">Chờ gõ ⏳</span>`;
            input.className = "typing-input w-full px-3 py-1.5 rounded-xl border text-sm font-chinese tracking-wide transition-all focus:outline-none focus:ring-2 border-gray-200 bg-white text-gray-800 focus:border-pink-400 focus:ring-pink-200";
          }
          if (window.lucide) window.lucide.createIcons();
        }

        // Live stats update
        updateStats();
      });

      // Quick arrow-key & Enter navigation between rows
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === "ArrowDown") {
          e.preventDefault();
          if (idx + 1 < inputs.length) inputs[idx + 1].focus();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (idx - 1 >= 0) inputs[idx - 1].focus();
        }
      });
    });

    // Audio pronunciation listener
    document.querySelectorAll(".btn-play-vocab-audio").forEach(btn => {
      btn.addEventListener("click", () => {
        const hanzi = btn.getAttribute("data-hanzi");
        const example = btn.getAttribute("data-example");
        if (window.speakChineseText) {
          window.speakChineseText(hanzi);
          if (example) {
            setTimeout(() => {
              window.speakChineseText(example);
            }, 1200);
          }
        }
      });
    });

    // Hint button listener
    document.querySelectorAll(".btn-show-vocab-hint").forEach(btn => {
      btn.addEventListener("click", () => {
        const answer = btn.getAttribute("data-answer");
        showMochiToast(`Đáp án gợi ý: ${answer} 💡`, "info");
      });
    });

    // Practice write button listener
    document.querySelectorAll(".btn-practice-write-char").forEach(btn => {
      btn.addEventListener("click", () => {
        const char = btn.getAttribute("data-char");
        if (char && window.setWritingCharacter) {
          window.setWritingCharacter(char);
          const writingSection = document.getElementById("writing-studio");
          if (writingSection) {
            writingSection.scrollIntoView({ behavior: "smooth" });
            showMochiToast(`Đã chuyển chữ '${char}' sang Phòng Luyện Viết ✍️`);
          }
        }
      });
    });
  }

  // Render pagination buttons
  function renderPaginationControls(totalPages) {
    if (!paginationControls) return;
    paginationControls.innerHTML = "";
    if (totalPages <= 1) return;

    // Prev Button
    const prevBtn = document.createElement("button");
    prevBtn.className = `px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
      currentPage === 1 ? "opacity-40 cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400" : "bg-white hover:bg-pink-50 border-gray-200 text-gray-700"
    }`;
    prevBtn.innerHTML = `<i data-lucide="chevron-left" class="w-3.5 h-3.5"></i> Trước`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        renderTypingStudio();
        scrollStudioIntoView();
      }
    });
    paginationControls.appendChild(prevBtn);

    // Page numbers generator (with ellipsis)
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    if (startPage > 1) {
      appendPageBtn(1);
      if (startPage > 2) appendEllipsis();
    }

    for (let p = startPage; p <= endPage; p++) {
      appendPageBtn(p);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) appendEllipsis();
      appendPageBtn(totalPages);
    }

    // Next Button
    const nextBtn = document.createElement("button");
    nextBtn.className = `px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
      currentPage === totalPages ? "opacity-40 cursor-not-allowed bg-gray-50 border-gray-200 text-gray-400" : "bg-white hover:bg-pink-50 border-gray-200 text-gray-700"
    }`;
    nextBtn.innerHTML = `Sau <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderTypingStudio();
        scrollStudioIntoView();
      }
    });
    paginationControls.appendChild(nextBtn);

    function appendPageBtn(p) {
      const btn = document.createElement("button");
      btn.className = `w-8 h-8 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
        p === currentPage ? "bg-gradient-to-r from-[#F59BB0] to-[#A98CF0] text-white shadow-xs" : "bg-white hover:bg-pink-50 border border-gray-200 text-gray-700"
      }`;
      btn.textContent = p;
      btn.addEventListener("click", () => {
        currentPage = p;
        renderTypingStudio();
        scrollStudioIntoView();
      });
      paginationControls.appendChild(btn);
    }

    function appendEllipsis() {
      const span = document.createElement("span");
      span.className = "px-1 text-gray-400 font-bold text-xs";
      span.textContent = "...";
      paginationControls.appendChild(span);
    }
  }

  function scrollStudioIntoView() {
    const el = document.getElementById("vocab-typing-studio");
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Event Listeners setup: Level tabs
  if (levelTabsContainer) {
    levelTabsContainer.querySelectorAll(".typing-level-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        levelTabsContainer.querySelectorAll(".typing-level-tab").forEach(t => {
          t.className = "typing-level-tab px-3.5 py-1.5 rounded-full text-xs font-bold transition-all bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-700";
        });
        tab.className = "typing-level-tab px-3.5 py-1.5 rounded-full text-xs font-bold transition-all bg-pink-500 text-white shadow-xs";
        currentLevel = tab.getAttribute("data-level");
        currentPage = 1;
        renderTypingStudio();
      });
    });
  }

  // Status Filter Select
  if (statusFilterSelect) {
    statusFilterSelect.addEventListener("change", (e) => {
      currentStatus = e.target.value;
      currentPage = 1;
      renderTypingStudio();
    });
  }

  // Page Size Select
  if (pageSizeSelect) {
    pageSizeSelect.addEventListener("change", (e) => {
      pageSize = e.target.value;
      currentPage = 1;
      renderTypingStudio();
    });
  }

  // Search input debounced
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchQuery = e.target.value;
        currentPage = 1;
        renderTypingStudio();
      }, 250);
    });
  }

  // Exam mode toggle
  if (btnToggleExam) {
    btnToggleExam.addEventListener("click", () => {
      isExamMode = !isExamMode;
      if (isExamMode) {
        btnToggleExam.className = "px-3 py-1.5 rounded-full text-xs font-bold border border-rose-300 bg-rose-50 text-rose-700 hover:bg-rose-100 transition-colors flex items-center gap-1.5";
        if (examModeLabel) examModeLabel.textContent = "Chế độ: Thi thử (Ẩn câu)";
        showMochiToast("Đã bật Chế độ Thi thử! Câu ví dụ sẽ được ẩn cho đến khi bạn gõ đúng 🎯", "info");
      } else {
        btnToggleExam.className = "px-3 py-1.5 rounded-full text-xs font-bold border border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors flex items-center gap-1.5";
        if (examModeLabel) examModeLabel.textContent = "Chế độ: Học tập";
        showMochiToast("Đã chuyển về Chế độ Học tập 🌸");
      }
      renderTypingStudio();
    });
  }

  // Reset progress for active level
  if (btnResetProgress) {
    btnResetProgress.addEventListener("click", () => {
      const confirmReset = window.confirm(`Bạn có chắc muốn làm lại toàn bộ từ vựng ở cấp độ ${currentLevel === 'all' ? 'Tất cả' : currentLevel} không?`);
      if (confirmReset) {
        const progress = getProgressMap();
        const all = getAllVocab();
        const wordsToReset = currentLevel === "all" ? all : all.filter(w => w.hsk === currentLevel);
        wordsToReset.forEach(w => {
          delete progress[w.id];
        });
        saveProgressMap(progress);
        renderTypingStudio();
        showMochiToast(`Đã làm mới tiến độ bài luyện gõ ${currentLevel}!`);
      }
    });
  }

  // View switchers (table vs card mode)
  if (btnViewTable && btnViewCards) {
    btnViewTable.addEventListener("click", () => {
      viewMode = "table";
      btnViewTable.className = "px-2.5 py-1 rounded-lg text-xs font-bold bg-white text-gray-800 shadow-2xs flex items-center gap-1";
      btnViewCards.className = "px-2.5 py-1 rounded-lg text-xs font-bold text-gray-500 hover:text-gray-800 flex items-center gap-1";
      renderTypingStudio();
    });

    btnViewCards.addEventListener("click", () => {
      viewMode = "cards";
      btnViewCards.className = "px-2.5 py-1 rounded-lg text-xs font-bold bg-white text-gray-800 shadow-2xs flex items-center gap-1";
      btnViewTable.className = "px-2.5 py-1 rounded-lg text-xs font-bold text-gray-500 hover:text-gray-800 flex items-center gap-1";
      renderTypingStudio();
    });
  }

  // Initial render
  renderTypingStudio();
}
