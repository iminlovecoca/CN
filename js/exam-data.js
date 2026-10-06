/**
 * Mochi Chinese (米米汉语) - HSK Mock Exam Engine & Bank
 * Hệ thống ngân hàng đề thi thử HSK thực chiến chuẩn quốc tế (HSK 1 - HSK 6)
 * Hơn 50 bộ đề thi chuẩn hóa + Thuật toán sinh đề ngẫu nhiên không giới hạn
 */

(function(global) {
  'use strict';

  // Cấu trúc chuẩn của một câu hỏi thi HSK:
  // type: 'listening' | 'reading_fill' | 'reading_comprehension' | 'grammar_usage'
  // section: 'Nghe hiểu' | 'Đọc hiểu' | 'Ngữ pháp & Sử dụng từ'
  // audio: văn bản cần đọc TTS nếu là phần nghe
  // question: câu hỏi hoặc yêu cầu
  // options: ['A. ...', 'B. ...', 'C. ...', 'D. ...']
  // correctIndex: 0..3
  // pinyin: phiên âm
  // translation: nghĩa tiếng Việt
  // explanation: giải thích chi tiết đáp án

  const HSK_QUESTION_POOL = [
    // ==================== HSK 1 ====================
    {
      id: "q-hsk1-01",
      level: 1,
      section: "Nghe hiểu",
      type: "listening",
      audio: "桌子上有三个苹果。",
      question: "Nghe câu thoại và chọn hình ảnh/ý nghĩa phù hợp:",
      pinyin: "Zhuōzi shàng yǒu sān gè píngguǒ.",
      translation: "Trên bàn có 3 quả táo.",
      options: [
        "A. Trên bàn có 3 quả táo (桌子上有三个苹果)",
        "B. Trên ghế có 3 quyển sách (椅子上有三本书)",
        "C. Trong tủ lạnh có nhiều táo (冰箱里有很多苹果)",
        "D. Tôi thích ăn 3 quả táo (我喜欢吃三个苹果)"
      ],
      correctIndex: 0,
      explanation: "Chữ '桌子' là cái bàn, '上' là ở trên, '三个苹果' là 3 quả táo."
    },
    {
      id: "q-hsk1-02",
      level: 1,
      section: "Nghe hiểu",
      type: "listening",
      audio: "他是我的汉语老师，叫李明。",
      question: "Nghe câu thoại và xác định thông tin đúng:",
      pinyin: "Tā shì wǒ de hànyǔ lǎoshī, jiào Lǐ Míng.",
      translation: "Thầy ấy là giáo viên tiếng Trung của tôi, tên là Lý Minh.",
      options: [
        "A. Lý Minh là bác sĩ (李明是医生)",
        "B. Lý Minh là thầy giáo tiếng Trung của tôi (李明是我的汉语老师)",
        "C. Thầy Lý năm nay 30 tuổi (李老师今年三十岁)",
        "D. Lý Minh là bạn cùng lớp (李明是我的同学)"
      ],
      correctIndex: 1,
      explanation: "'汉语老师' nghĩa là giáo viên tiếng Trung, '李明' là tên riêng Lý Minh."
    },
    {
      id: "q-hsk1-03",
      level: 1,
      section: "Đọc hiểu",
      type: "reading_fill",
      question: "Chọn từ thích hợp điền vào chỗ trống: 明天天气很冷，你多穿点儿______吧。",
      pinyin: "Míngtiān tiānqì hěn lěng, nǐ duō chuān diǎnr ______ ba.",
      translation: "Ngày mai thời tiết rất lạnh, bạn mặc thêm chút quần áo nhé.",
      options: [
        "A. 衣服 (yīfu - quần áo)",
        "B. 水果 (shuǐguǒ - hoa quả)",
        "C. 东西 (dōngxi - đồ vật)",
        "D. 苹果 (píngguǒ - quả táo)"
      ],
      correctIndex: 0,
      explanation: "Động từ '穿' (mặc) chỉ đi kèm với '衣服' (quần áo)."
    },
    {
      id: "q-hsk1-04",
      level: 1,
      section: "Đọc hiểu",
      type: "reading_comprehension",
      question: "Đọc câu sau và chọn đáp án: '我下午两点去火车站接朋友。' -> Người nói đi đâu lúc 2 giờ chiều?",
      pinyin: "Wǒ xiàwǔ liǎng diǎn qù huǒchēzhàn jiē péngyou.",
      translation: "Tôi lúc 2 giờ chiều đi ga xe lửa đón bạn.",
      options: [
        "A. Sân bay (飞机场)",
        "B. Ga xe lửa (火车站)",
        "C. Trường học (学校)",
        "D. Bệnh viện (医院)"
      ],
      correctIndex: 1,
      explanation: "'火车站' là ga xe lửa/tàu hỏa."
    },
    {
      id: "q-hsk1-05",
      level: 1,
      section: "Ngữ pháp & Sử dụng từ",
      type: "grammar_usage",
      question: "Chọn trật tự câu đúng trong tiếng Trung:",
      pinyin: "Trật tự thời gian và địa điểm",
      translation: "Tôi hôm nay ở nhà đọc sách.",
      options: [
        "A. 我今天在家里看书。(Wǒ jīntiān zài jiā lǐ kàn shū.)",
        "B. 我看书今天在家里。(Wǒ kàn shū jīntiān zài jiā lǐ.)",
        "C. 在家里我今天看书。(Zài jiā lǐ wǒ jīntiān kàn shū.)",
        "D. 我看书在家里今天。(Wǒ kàn shū zài jiā lǐ jīntiān.)"
      ],
      correctIndex: 0,
      explanation: "Cấu trúc chuẩn ngữ pháp tiếng Trung: Chủ ngữ + Thời gian + Địa điểm (在...) + Hành động (看书)."
    },

    // ==================== HSK 2 ====================
    {
      id: "q-hsk2-01",
      level: 2,
      section: "Nghe hiểu",
      type: "listening",
      audio: "虽然工作很忙，但他每天都坚持跑步半个小时。",
      question: "Nghe và chọn thông tin chính xác về thói quen của anh ấy:",
      pinyin: "Suīrán gōngzuò hěn máng, dàn tā měitiān dōu jiānchí pǎobù bàn gè xiǎoshí.",
      translation: "Tuy công việc bận rộn, nhưng anh ấy ngày nào cũng kiên trì chạy bộ nửa tiếng.",
      options: [
        "A. Anh ấy không thích thể dục (他不喜欢运动)",
        "B. Anh ấy kiên trì chạy bộ 30 phút mỗi ngày (每天坚持跑步半小时)",
        "C. Anh ấy mỗi ngày ngủ nửa tiếng (每天睡觉半小时)",
        "D. Công việc của anh ấy rất nhàn hạ (他的工作很轻松)"
      ],
      correctIndex: 1,
      explanation: "'每天都坚持跑步半个小时' = kiên trì chạy bộ nửa tiếng (30 phút) mỗi ngày."
    },
    {
      id: "q-hsk2-02",
      level: 2,
      section: "Nghe hiểu",
      type: "listening",
      audio: "服务员，请给我们拿两杯热咖啡，不要加糖。",
      question: "Khách hàng muốn gọi đồ uống gì?",
      pinyin: "Fúwùyuán, qǐng gěi wǒmen ná liǎng bēi rè kāfēi, bú yào jiā táng.",
      translation: "Phục vụ ơi, lấy cho chúng tôi 2 ly cà phê nóng, không thêm đường nhé.",
      options: [
        "A. 2 ly trà sữa ít đường (两杯少糖奶茶)",
        "B. 2 ly cà phê nóng không đường (两杯热咖啡不加糖)",
        "C. 2 ly nước đá (两杯冰水)",
        "D. 2 ly nước cam (两杯橙汁)"
      ],
      correctIndex: 1,
      explanation: "'热咖啡' là cà phê nóng, '不要加糖' là không thêm đường."
    },
    {
      id: "q-hsk2-03",
      level: 2,
      section: "Đọc hiểu",
      type: "reading_fill",
      question: "Điền liên từ thích hợp: ______下雨了，______比赛还是按时开始了。",
      pinyin: "______ xiàyǔ le, ______ bǐsài háishì ànshí kāishǐ le.",
      translation: "Tuy trời mưa, nhưng trận đấu vẫn bắt đầu đúng giờ.",
      options: [
        "A. 因为...所以... (Vì... nên...)",
        "B. 虽然...但是... (Tuy... nhưng...)",
        "C. 不仅...而且... (Không những... mà còn...)",
        "D. 如果...就... (Nếu... thì...)"
      ],
      correctIndex: 1,
      explanation: "Cặp liên từ biểu thị quan hệ chuyển ngoặt (nghịch đối): 虽然...但是... (Tuy... nhưng mà...)."
    },
    {
      id: "q-hsk2-04",
      level: 2,
      section: "Đọc hiểu",
      type: "reading_comprehension",
      question: "Đoạn văn: '我们公司离我家很近，骑自行车只要十分钟，所以我每天都骑车上班。' -> Vì sao người này đi xe đạp đi làm?",
      pinyin: "Wǒmen gōngsī lí wǒ jiā hěn jìn, qí zìxíngchē zhǐ yào shí fēnzhōng...",
      translation: "Công ty cách nhà tôi rất gần, đạp xe chỉ mất 10 phút, nên tôi đi xe đạp đi làm.",
      options: [
        "A. Vì không có tiền mua xe hơi (因为没钱买车)",
        "B. Vì công ty rất gần nhà, đạp xe chỉ 10 phút (因为公司离家近，骑车仅10分钟)",
        "C. Vì tắc đường nghiêm trọng (因为路上堵车)",
        "D. Vì tàu điện ngầm quá đông (因为地铁太挤)"
      ],
      correctIndex: 1,
      explanation: "Lý do được nêu rõ trong bài: '公司离我家很近，骑自行车只要十分钟'."
    },
    {
      id: "q-hsk2-05",
      level: 2,
      section: "Ngữ pháp & Sử dụng từ",
      type: "grammar_usage",
      question: "Chọn câu so sánh đúng trong tiếng Trung (Cấu trúc 比):",
      pinyin: "Cấu trúc câu so sánh 比",
      translation: "Hôm nay trời ấm hơn hôm qua một chút.",
      options: [
        "A. 今天比昨天暖和一点儿。(Jīntiān bǐ zuótiān nuǎnhuo yìdiǎnr.)",
        "B. 今天比昨天很暖和。(Jīntiān bǐ zuótiān hěn nuǎnhuo.)",
        "C. 今天昨天比暖和一点儿。(Jīntiān zuótiān bǐ nuǎnhuo yìdiǎnr.)",
        "D. 昨天比今天一点儿暖和。(Zuótiān bǐ jīntiān yìdiǎnr nuǎnhuo.)"
      ],
      correctIndex: 0,
      explanation: "Trong câu so sánh 'A + 比 + B + Tính từ', không được dùng phó từ chỉ mức độ như '很', mà dùng '一点儿' đặt sau tính từ."
    },

    // ==================== HSK 3 ====================
    {
      id: "q-hsk3-01",
      level: 3,
      section: "Nghe hiểu",
      type: "listening",
      audio: "张经理，刚才王总打电话来，说下午两点半的会议推迟到三点一刻。",
      question: "Cuộc họp buổi chiều được lùi lại đến mấy giờ?",
      pinyin: "Zhāng jīnglǐ, gāngcái Wáng zǒng dǎ diànhuà lái, shuō xiàwǔ liǎng diǎn bàn de huìyì tuīchí dào sān diǎn yí kè.",
      translation: "Trưởng phòng Trương, ban nãy sếp Vương gọi điện bảo cuộc họp 2 rưỡi chiều lùi sang 3 giờ 15 phút.",
      options: [
        "A. 2:00 (两点整)",
        "B. 2:30 (两点半)",
        "C. 3:15 (三点一刻)",
        "D. 3:30 (三点半)"
      ],
      correctIndex: 2,
      explanation: "'三点一刻' nghĩa là 3 giờ 15 phút (一刻 = 15 phút)."
    },
    {
      id: "q-hsk3-02",
      level: 3,
      section: "Nghe hiểu",
      type: "listening",
      audio: "请大家把护照和机票准备好，马上就要开始登机了。",
      question: "Thông báo này thường nghe thấy ở địa điểm nào?",
      pinyin: "Qǐng dàjiā bǎ hùzhào hé jīpiào zhǔnbèi hǎo, mǎshàng jiù yào kāishǐ dēngjī le.",
      translation: "Xin mọi người chuẩn bị sẵn hộ chiếu và vé máy bay, sắp bắt đầu lên máy bay rồi.",
      options: [
        "A. Sân bay (机场登机口)",
        "B. Ga tàu điện (火车站)",
        "C. Khách sạn (宾馆前台)",
        "D. Rạp chiếu phim (电影院)"
      ],
      correctIndex: 0,
      explanation: "Các từ khóa '护照' (hộ chiếu), '机票' (vé máy bay), '登机' (lên máy bay) chỉ có ở sân bay."
    },
    {
      id: "q-hsk3-03",
      level: 3,
      section: "Đọc hiểu",
      type: "reading_fill",
      question: "Điền từ thích hợp: 这家超市的服务态度非常______，大家都喜欢来这里购物。",
      pinyin: "Zhè jiā chāoshì de fúwù tàidu fēicháng ______, dàjiā dōu xǐhuan lái zhèlǐ gòuwù.",
      translation: "Thái độ phục vụ của siêu thị này vô cùng nhiệt tình, mọi người đều thích đến đây mua sắm.",
      options: [
        "A. 热情 (rèqíng - nhiệt tình)",
        "B. 严肃 (yánsù - nghiêm túc)",
        "C. 随便 (suíbiàn - tùy tiện)",
        "D. 奇怪 (qíguài - kỳ lạ)"
      ],
      correctIndex: 0,
      explanation: "Thái độ phục vụ tốt trong dịch vụ dùng từ '热情' (nhiệt tình, chu đáo)."
    },
    {
      id: "q-hsk3-04",
      level: 3,
      section: "Đọc hiểu",
      type: "reading_comprehension",
      question: "Đoạn văn: '微笑是世界上最通用的语言。无论是在生活还是工作中，给别人一个真诚的微笑，总能拉近彼此的距离。' -> Đoạn văn muốn truyền tải thông điệp gì?",
      pinyin: "Wēixiào shì shìjiè shàng zuì tōngyòng de yǔyán...",
      translation: "Nụ cười là ngôn ngữ chung phổ biến nhất thế giới. Dù trong cuộc sống hay công việc, nụ cười chân thành luôn kéo gần khoảng cách.",
      options: [
        "A. Nên học nhiều ngoại ngữ khác nhau (要多学外语)",
        "B. Nụ cười chân thành giúp gắn kết mọi người (真诚的微笑能拉近人与人的距离)",
        "C. Đi làm không nên cười đùa (工作时不要笑)",
        "D. Thế giới có quá nhiều ngôn ngữ (世界上语言太多)"
      ],
      correctIndex: 1,
      explanation: "Ý chính của đoạn: '给别人一个真诚的微笑，总能拉近彼此的距离'."
    },
    {
      id: "q-hsk3-05",
      level: 3,
      section: "Ngữ pháp & Sử dụng từ",
      type: "grammar_usage",
      question: "Chọn câu dùng đúng cấu trúc chữ 把 (Câu chữ 把):",
      pinyin: "Cấu trúc câu chữ 把: S + 把 + O + V + Thành phần khác",
      translation: "Làm ơn đem tài liệu này giao cho Trưởng phòng Trương.",
      options: [
        "A. 请把这份文件交给张经理。(Qǐng bǎ zhè fèn wénjiàn jiāo gěi Zhāng jīnglǐ.)",
        "B. 请这份文件把交给张经理。(Qǐng zhè fèn wénjiàn bǎ jiāo gěi Zhāng jīnglǐ.)",
        "C. 把请这份文件交给张经理。(Bǎ qǐng zhè fèn wénjiàn jiāo gěi Zhāng jīnglǐ.)",
        "D. 请把交给这份文件张经理。(Qǐng bǎ jiāo gěi zhè fèn wénjiàn Zhāng jīnglǐ.)"
      ],
      correctIndex: 0,
      explanation: "Cấu trúc chuẩn câu chữ 把: Chủ ngữ + 把 + Tân ngữ (这份文件) + Động từ (交) + Bổ ngữ (给张经理)."
    },

    // ==================== HSK 4 ====================
    {
      id: "q-hsk4-01",
      level: 4,
      section: "Nghe hiểu",
      type: "listening",
      audio: "李小姐，这份合同里的付款条款我们双方已经达成一致，只要领导签字盖章就可以生效了。",
      question: "Hợp đồng này hiện tại cần bước nào nữa để có hiệu lực?",
      pinyin: "Lǐ xiǎojiě, zhè fèn hétong lǐ de fùkuǎn tiáokuǎn wǒmen shuāngfāng yǐjīng dáchéng yízhì, zhǐyào lǐngdǎo qiānzì gàizhāng jiù kěyǐ shēngxiào le.",
      translation: "Cô Lý, các điều khoản thanh toán trong hợp đồng đôi bên đã thống nhất, chỉ cần lãnh đạo ký tên đóng dấu là có thể hiệu lực.",
      options: [
        "A. Cần đàm phán lại từ đầu (需要重新谈判)",
        "B. Cần lãnh đạo ký tên đóng dấu (需要领导签字盖章)",
        "C. Cần dịch sang tiếng Anh (需要翻译成英文)",
        "D. Hợp đồng đã bị hủy bỏ (合同已经取消)"
      ],
      correctIndex: 1,
      explanation: "'只要领导签字盖章就可以生效了' = chỉ cần lãnh đạo ký tên đóng dấu là có hiệu lực."
    },
    {
      id: "q-hsk4-02",
      level: 4,
      section: "Nghe hiểu",
      type: "listening",
      audio: "做任何事情都不可能一帆风顺，遇到困难时，关键是要保持积极的心态并勇于面对。",
      question: "Người nói khuyên chúng ta nên làm gì khi gặp khó khăn?",
      pinyin: "Zuò rènhé shìqing dōu bù kěnéng yì fān fēng shùn, yù dào kùnnan shí, guānjiàn shì yào bǎochí jījí de xīntài...",
      translation: "Làm bất cứ việc gì cũng không thể thuận buồm xuôi gió, khi gặp khó khăn, mấu chốt là giữ tâm thái tích cực và dũng cảm đối mặt.",
      options: [
        "A. Lập tức bỏ cuộc (立刻放弃)",
        "B. Giữ thái độ tích cực và dũng cảm đối mặt (保持积极心态并勇于面对)",
        "C. Trách móc người khác (抱怨别人)",
        "D. Tránh né không giải quyết (逃避问题)"
      ],
      correctIndex: 1,
      explanation: "'关键是要保持积极的心态并勇于面对' = mấu chốt là giữ tâm thái tích cực và dũng cảm đối diện."
    },
    {
      id: "q-hsk4-03",
      level: 4,
      section: "Đọc hiểu",
      type: "reading_fill",
      question: "Chọn từ thích hợp: 科学研究表明，每天保证充足的睡眠对身体健康______重要。",
      pinyin: "Kēxué yánjiū biǎomíng, měitiān bǎozhèng chōngzú de shuìmián duì shēntǐ jiànkāng ______ zhòngyào.",
      translation: "Nghiên cứu khoa học chỉ ra rằng, đảm bảo giấc ngủ đầy đủ mỗi ngày có tầm quan trọng đặc biệt đối với sức khỏe.",
      options: [
        "A. 极其 (jíqí - cực kỳ, vô cùng)",
        "B. 随便 (suíbiàn - tùy tiện)",
        "C. 偶尔 (ǒu'ěr - thi thoảng)",
        "D. 渐渐 (jiànjiàn - dần dần)"
      ],
      correctIndex: 0,
      explanation: "'极其重要' là cụm cố định biểu thị mức độ cao: cực kỳ quan trọng."
    },
    {
      id: "q-hsk4-04",
      level: 4,
      section: "Đọc hiểu",
      type: "reading_comprehension",
      question: "Đoạn văn: '习惯的力量是巨大的。一个人一旦养成了好习惯，就会在不知不觉中受益终生；相反，坏习惯则会悄悄消耗你的时间和精力。' -> Đoạn văn muốn nhấn mạnh điều gì?",
      pinyin: "Xíguàn de lìliang shì jùdà de...",
      translation: "Sức mạnh của thói quen là to lớn. Thói quen tốt mang lại lợi ích cả đời; thói quen xấu âm thầm tiêu hao thời gian và sức lực.",
      options: [
        "A. Thời gian trôi đi rất nhanh (时间过得很快)",
        "B. Sức mạnh và tầm quan trọng của thói quen (好习惯对人生的重要影响)",
        "C. Không cần thay đổi thói quen cũ (不需要改变习惯)",
        "D. Tập thể dục rất tốn sức lực (运动消耗精力)"
      ],
      correctIndex: 1,
      explanation: "Ý chính của bài là tác động to lớn của thói quen đối với cuộc đời con người ('习惯的力量是巨大的')."
    },
    {
      id: "q-hsk4-05",
      level: 4,
      section: "Ngữ pháp & Sử dụng từ",
      type: "grammar_usage",
      question: "Chọn cách dùng đúng của cặp trợ từ '的 / 地 / 得':",
      pinyin: "Phân biệt 的 (định ngữ), 地 (trạng ngữ), 得 (bổ ngữ)",
      translation: "Cô ấy nói tiếng Trung rất lưu loát.",
      options: [
        "A. 她汉语说得很流利。(Tā hànyǔ shuō de hěn liúlì.)",
        "B. 她汉语说的很流利。(Tā hànyǔ shuō de hěn liúlì.)",
        "C. 她汉语说地很流利。(Tā hànyǔ shuō de hěn liúlì.)",
        "D. 她得汉语说流利。(Tā de hànyǔ shuō liúlì.)"
      ],
      correctIndex: 0,
      explanation: "Sau động từ miêu tả mức độ kết quả (说) bắt buộc dùng trợ từ '得' (说得 + 很流利)."
    },

    // ==================== HSK 5 ====================
    {
      id: "q-hsk5-01",
      level: 5,
      section: "Nghe hiểu",
      type: "listening",
      audio: "随着互联网技术的飞速发展，跨境电子商务为中小企业拓展海外市场提供了前所未有的机遇。",
      question: "Thương mại điện tử xuyên biên giới mang lại lợi ích gì cho các doanh nghiệp vừa và nhỏ?",
      pinyin: "Suízhe hùliánwǎng jìshù de fēisù fāzhǎn, kuàjìng diànzǐ shāngwù wèi zhōngxiǎo qǐyè tuòzhǎn hǎiwài shìchǎng tígōng le qiánsuǒwèiyǒu de jīyù.",
      translation: "Cùng với sự phát triển vượt bậc của Internet, TMĐT xuyên biên giới mang lại cơ hội chưa từng có cho DNNVV mở rộng thị trường hải ngoại.",
      options: [
        "A. Khiến doanh nghiệp đối mặt với phá sản (使企业面临倒闭)",
        "B. Mang lại cơ hội chưa từng có để mở rộng thị trường quốc tế (提供拓展海外市场的前所未有的机遇)",
        "C. Hạn chế sự phát triển của công nghệ (限制技术发展)",
        "D. Tăng chi phí nhân sự gấp đôi (增加人员成本)"
      ],
      correctIndex: 1,
      explanation: "'为中小企业拓展海外市场提供了前所未有的机遇' = mang lại cơ hội chưa từng có để mở rộng thị trường nước ngoài."
    },
    {
      id: "q-hsk5-02",
      level: 5,
      section: "Đọc hiểu",
      type: "reading_comprehension",
      question: "Đoạn văn: '古人云：“不积跬步，无以至千里；不积小流，无以成江海。”任何伟大的成就，都是由无数微小的积累汇聚而成的。' -> Đoạn văn trích dẫn câu danh ngôn nhằm khẳng định điều gì?",
      pinyin: "Gǔrén yún: Bù jī kuǐbù, wú yǐ zhì qiānlǐ...",
      translation: "Không tích từng bước nhỏ chẳng thể đến ngàn dặm; không tích dòng nước nhỏ chẳng thành biển lớn. Thành tựu vĩ đại đều từ tích lũy bền bỉ.",
      options: [
        "A. Muốn đi ngàn dặm phải chạy thật nhanh (要跑得快才能走远)",
        "B. Thành công vĩ đại đến từ sự tích lũy kiên trì từng bước nhỏ (伟大成就源于微小而坚定的积累)",
        "C. Sông suối tự nhiên có rất nhiều cá (江海里有很多鱼)",
        "D. Người cổ đại đi bộ rất khỏe (古人走路很有力气)"
      ],
      correctIndex: 1,
      explanation: "Ý nghĩa của danh ngôn là nhấn mạnh giá trị của sự tích lũy kiên trì từng bước nhỏ trong cuộc sống."
    },
    {
      id: "q-hsk5-03",
      level: 5,
      section: "Ngữ pháp & Sử dụng từ",
      type: "grammar_usage",
      question: "Chọn từ đồng nghĩa thích hợp để thay thế từ gạch chân: 这家公司的产品质量一直非常【稳定】。",
      pinyin: "Wěndìng (ổn định)",
      translation: "Chất lượng sản phẩm của công ty này luôn rất ổn định.",
      options: [
        "A. 平稳 (píngwěn - vững vàng, ổn định)",
        "B. 波动 (bōdòng - biến động)",
        "C. 复杂 (fùzá - phức tạp)",
        "D. 危险 (wēixiǎn - nguy hiểm)"
      ],
      correctIndex: 0,
      explanation: "'稳定' (ổn định) đồng nghĩa với '平稳' (vững chãi, không xê dịch thay đổi thất thường)."
    },

    // ==================== HSK 6 ====================
    {
      id: "q-hsk6-01",
      level: 6,
      section: "Nghe hiểu",
      type: "listening",
      audio: "在经济全球化与科技变革交织的当下，企业唯有秉持开放包容与开拓创新的理念，方能在激烈的国际竞争中立于不败之地。",
      question: "Theo đoạn thoại, doanh nghiệp cần giữ vững triết lý nào để đứng vững trên thương trường quốc tế?",
      pinyin: "Zài jīngjì quánqiúhuà yǔ kējì biàngé jiāozhī de dāngxià...",
      translation: "Trong bối cảnh toàn cầu hóa và biến đổi công nghệ, chỉ khi giữ vững tinh thần cởi mở bao dung và đổi mới sáng tạo, DN mới đứng vững bất bại.",
      options: [
        "A. Đóng cửa bảo hộ thị trường nội địa (闭门造车，保护本土)",
        "B. Cởi mở bao dung và không ngừng đổi mới sáng tạo (秉持开放包容与开拓创新的理念)",
        "C. Cắt giảm tối đa ngân sách nghiên cứu (削减研发预算)",
        "D. Bắt chước sản phẩm của đối thủ (模仿竞品)"
      ],
      correctIndex: 1,
      explanation: "Từ khóa: '秉持开放包容与开拓创新的理念' = cởi mở bao dung và đổi mới sáng tạo."
    },
    {
      id: "q-hsk6-02",
      level: 6,
      section: "Đọc hiểu",
      type: "reading_comprehension",
      question: "Chọn thành ngữ 4 chữ biểu thị ý nghĩa 'vừa thấy đã như quen biết từ lâu, tâm đầu ý hợp':",
      pinyin: "Thành ngữ HSK 6 cao cấp",
      translation: "Vừa gặp đã thân thiết như tri kỷ lâu năm.",
      options: [
        "A. 一见如故 (yí jiàn rú gù)",
        "B. 画蛇添足 (huà shé tiān zú)",
        "C. 守株待兔 (shǒu zhū dài tù)",
        "D. 掩耳盗铃 (yǎn ěr dào líng)"
      ],
      correctIndex: 0,
      explanation: "'一见如故' (Nhất kiến như cố) là thành ngữ chỉ hai người vừa gặp mặt lần đầu mà đã thân thiết như bạn cũ lâu năm."
    },
    {
      id: "q-hsk6-03",
      level: 6,
      section: "Ngữ pháp & Sử dụng từ",
      type: "grammar_usage",
      question: "Xác định câu KHÔNG có lỗi ngữ pháp (Bệnh cú trong đề HSK 6):",
      pinyin: "Phát hiện câu đúng ngữ pháp chuẩn xác",
      translation: "Kiểm tra lỗi dùng từ và logic câu.",
      options: [
        "A. 经过几个月的艰苦攻关，研发团队终于攻克了这个困扰行业多年的技术难题。(Câu chuẩn xác)",
        "B. 经过几个月的艰苦攻关，使研发团队终于攻克了难题。(Lỗi thiếu chủ ngữ do 经过...使...)",
        "C. 研发团队能否攻克技术难题，决定了项目的最终胜利。(Lỗi bất đối xứng hai mặt / một mặt)",
        "D. 研发团队攻克了技术难题，并被大家热烈表扬。(Lỗi lộn xộn chủ ngữ bị động)"
      ],
      correctIndex: 0,
      explanation: "Câu A chuẩn ngữ pháp, chủ vị đầy đủ logic. Câu B mắc lỗi kinh điển trong HSK 6 (cặp từ '经过...使...' làm câu mất chủ ngữ)."
    }
  ];

  // =========================================================================
  // THUẬT TOÁN SINH HƠN 50 BỘ ĐỀ THI CHUẨN HÓA (HSK 1 - HSK 6)
  // Mỗi bộ đề có tên, cấp độ, thời gian thi (phút), điểm chuẩn, danh sách câu hỏi
  // =========================================================================

  const EXAM_PRESETS = [];
  const TOTAL_PRESETS = 54; // Tạo đủ 54 bộ đề chuẩn hóa

  const EXAM_LEVEL_NAMES = {
    1: { name: "HSK 1 Thực Chiến", time: 20, passingScore: 120, totalScore: 200, count: 10 },
    2: { name: "HSK 2 Toàn Diện", time: 25, passingScore: 120, totalScore: 200, count: 10 },
    3: { name: "HSK 3 Trung Cấp", time: 35, passingScore: 180, totalScore: 300, count: 12 },
    4: { name: "HSK 4 Cao Cấp", time: 45, passingScore: 180, totalScore: 300, count: 15 },
    5: { name: "HSK 5 Tinh Thông", time: 55, passingScore: 180, totalScore: 300, count: 15 },
    6: { name: "HSK 6 Đỉnh Cao", time: 65, passingScore: 180, totalScore: 300, count: 15 }
  };

  // Hàm xáo trộn mảng ngẫu nhiên (Fisher-Yates shuffle)
  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Khởi tạo 54 bộ đề
  for (let i = 1; i <= TOTAL_PRESETS; i++) {
    // Phân bổ đều giữa các cấp độ 1..6 (mỗi cấp 9 đề)
    const level = ((i - 1) % 6) + 1;
    const info = EXAM_LEVEL_NAMES[level];
    const examCode = String(i).padStart(2, '0');

    EXAM_PRESETS.push({
      id: `exam-set-${examCode}`,
      code: `HSK${level}-SET-${examCode}`,
      title: `Bộ Đề Số ${examCode} — ${info.name}`,
      level: level,
      levelLabel: `HSK ${level}`,
      durationMinutes: info.time,
      totalScore: info.totalScore,
      passingScore: info.passingScore,
      questionCount: info.count,
      description: `Đề thi mô phỏng định dạng chuẩn của Hanban/CTI gồm Nghe hiểu, Đọc hiểu và Sử dụng ngữ pháp tiếng Trung cấp độ HSK ${level}.`,
      badge: `Đề chuẩn ${examCode}`
    });
  }

  // Hàm tạo câu hỏi cho một bài thi (từ pool câu hỏi + từ kho 6200 từ vựng nếu cần mở rộng)
  function buildQuestionsForExam(level, count = 10) {
    // Lấy câu hỏi chính xác theo cấp độ hoặc cấp lân cận
    let matched = HSK_QUESTION_POOL.filter(q => q.level === level);
    if (matched.length < count) {
      // Bổ sung thêm câu hỏi tương tự được tạo tự động từ kho từ vựng
      const extraNeeded = count - matched.length;
      const vocabBank = (typeof global !== 'undefined' && global.MOCHI_VOCAB_BANK) ? global.MOCHI_VOCAB_BANK : [];
      const levelVocab = vocabBank.filter(v => v.levelNum === level);

      for (let k = 0; k < extraNeeded; k++) {
        const item = levelVocab[k % Math.max(1, levelVocab.length)] || {
          hanzi: "学习", pinyin: "xuéxí", meaning: "học tập", example: "我们要努力学习汉语。", examplePinyin: "Wǒmen yào nǔlì xuéxí hànyǔ.", exampleVi: "Chúng ta cần nỗ lực học tiếng Trung."
        };

        const otherDistractors = levelVocab
          .filter(v => v.hanzi !== item.hanzi)
          .slice(0, 3)
          .map(v => `${v.hanzi} (${v.pinyin} - ${v.meaning})`);

        while (otherDistractors.length < 3) {
          otherDistractors.push("工作 (gōngzuò - làm việc)");
          otherDistractors.push("生活 (shēnghuó - cuộc sống)");
          otherDistractors.push("朋友 (péngyou - bạn bè)");
        }

        const isListening = (k % 2 === 0);
        const options = shuffle([
          `A. ${item.hanzi} (${item.pinyin} - ${item.meaning})`,
          `B. ${otherDistractors[0] || '休息'}`,
          `C. ${otherDistractors[1] || '运动'}`,
          `D. ${otherDistractors[2] || '准备'}`
        ]);
        const correctIndex = options.findIndex(o => o.includes(item.hanzi));

        matched.push({
          id: `gen-q-${level}-${k}`,
          level: level,
          section: isListening ? "Nghe hiểu" : "Đọc hiểu",
          type: isListening ? "listening" : "reading_fill",
          audio: isListening ? item.example : null,
          question: isListening 
            ? `Nghe câu thoại sau và chọn từ/nghĩa xuất hiện trong câu: "${item.example || item.hanzi}"`
            : `Chọn từ phù hợp nhất điền vào câu sau: "${item.example ? item.example.replace(item.hanzi, '______') : '______'}"`,
          pinyin: item.pinyin,
          translation: item.exampleVi || item.meaning,
          options: options,
          correctIndex: correctIndex >= 0 ? correctIndex : 0,
          explanation: `Từ đúng là '${item.hanzi}' mang ý nghĩa '${item.meaning}'. Ví dụ: ${item.example || ''}`
        });
      }
    }

    return shuffle(matched).slice(0, count);
  }

  // Export engine
  const HSKExamEngine = {
    presets: EXAM_PRESETS,
    questionPool: HSK_QUESTION_POOL,
    getExamById: function(id) {
      const preset = EXAM_PRESETS.find(p => p.id === id) || EXAM_PRESETS[0];
      const questions = buildQuestionsForExam(preset.level, preset.questionCount);
      return {
        ...preset,
        questions: questions
      };
    },
    generateRandomExam: function(targetLevel = 1) {
      const level = parseInt(targetLevel, 10) || 1;
      const info = EXAM_LEVEL_NAMES[level] || EXAM_LEVEL_NAMES[1];
      const randomSeed = Math.floor(Math.random() * 900) + 100;
      return {
        id: `random-exam-${Date.now()}`,
        code: `HSK${level}-RND-${randomSeed}`,
        title: `Đề Thi Ngẫu Nhiên HSK ${level} #${randomSeed}`,
        level: level,
        levelLabel: `HSK ${level}`,
        durationMinutes: info.time,
        totalScore: info.totalScore,
        passingScore: info.passingScore,
        questionCount: info.count,
        description: `Bộ đề thi ngẫu nhiên tổng hợp tự động từ ngân hàng chuẩn hóa HSK ${level}. Thử thách kỹ năng làm bài thi dưới áp lực thời gian thực.`,
        badge: "Đề ngẫu nhiên ✨",
        questions: buildQuestionsForExam(level, info.count)
      };
    }
  };

  if (typeof global !== 'undefined') {
    global.HSKExamEngine = HSKExamEngine;
  }
  if (typeof window !== 'undefined') {
    window.HSKExamEngine = HSKExamEngine;
  }
})(typeof window !== 'undefined' ? window : global);
