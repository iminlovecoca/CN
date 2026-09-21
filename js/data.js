/**
 * Mochi Chinese (米米汉语 🌸) - Bách Khoa Toàn Thư & Cuốn Sổ Tay Tri Thức Tiếng Trung
 * Dành riêng cho: Ngọc Ánh & Bạn đồng hành
 */

const MOCHI_DATA = {
  "profiles": {
    "ngoc_anh": {
      "id": "ngoc_anh",
      "fullName": "Ngọc Ánh",
      "shortName": "Ngọc Ánh",
      "roleTitle": "Ánh Ánh 🌸",
      "avatar": "🐰🌸",
      "badgeColor": "bg-pink-100 text-pink-700 border-pink-200",
      "motto": "Cô gái đáng yêu và chăm chỉ nhất! Chinh phục tiếng Trung thật tự tin và tỏa sáng nha Ánh Ánh 💕",
      "greetings": {
        "morning": "Chào buổi sáng rạng rỡ, Ngọc Ánh! Cùng Mochi nạp 15 phút từ vựng tràn đầy năng lượng nha 🌸",
        "afternoon": "Buổi chiều tốt lành Ánh Ánh ơi! Tự thưởng một ly trà sữa và luyện một đoạn hội thoại thật mượt nhé 🧋",
        "evening": "Ngọc Ánh đã chăm chỉ cả ngày rồi! Nghe một mẩu podcast thư giãn trước khi ngủ nhé ✨"
      },
      "stats": {
        "streak": 7,
        "vocabLearned": 210,
        "lessonsCompleted": 15,
        "targetYear": "Tự tin vi vu Bắc Kinh - Thượng Hải & chốt deal công sở!"
      }
    },
    "companion": {
      "id": "companion",
      "fullName": "Bạn Đồng Hành",
      "shortName": "Bạn Đồng Hành",
      "roleTitle": "Người Học Cùng 🤍",
      "avatar": "🐼✨",
      "badgeColor": "bg-purple-100 text-purple-700 border-purple-200",
      "motto": "Đồng hành và cùng Ánh Ánh tiến bộ mỗi ngày! Không bỏ cuộc, cùng nhau nói tiếng Trung lưu loát ✨",
      "greetings": {
        "morning": "Chào buổi sáng bạn hiền! Hôm nay mục tiêu học cùng Ngọc Ánh là gì nào? 🌸",
        "afternoon": "Buổi chiều hăng say! Cùng Ánh Ánh ôn lại các từ vựng công sở nhé 💼",
        "evening": "Buổi tối an lành! Cùng tổng kết lại tiến độ học tập hôm nay nhé 🌙"
      },
      "stats": {
        "streak": 5,
        "vocabLearned": 135,
        "lessonsCompleted": 12,
        "targetYear": "Đồng hành chinh phục tiếng Trung cùng Ngọc Ánh!"
      }
    }
  },
  "dailyDiscoveries": [
    {
      "id": "d1",
      "tag": "Từ vựng may mắn hôm nay 🌸",
      "hanzi": "幸运",
      "pinyin": "xìngyùn",
      "hanviet": "Hạnh vận",
      "meaning": "May mắn, hạnh phúc",
      "quote": "越努力，越幸运 (Càng nỗ lực, càng gặp nhiều may mắn). Hôm nay may mắn sẽ mỉm cười với nàng!",
      "type": "word"
    },
    {
      "id": "d2",
      "tag": "Thành ngữ chúc phúc 🪷",
      "hanzi": "顺风顺水",
      "pinyin": "shùn fēng shùn shuǐ",
      "hanviet": "Thuận phong thuận thủy",
      "meaning": "Thuận buồm xuôi gió, mọi việc hanh thông",
      "quote": "Chúc mọi dự định trong tuần này của nàng đều xuôi chèo mát mái, không chút trở ngại ✨",
      "type": "chengyu"
    },
    {
      "id": "d3",
      "tag": "Bí kíp sếp thương nơi công sở 💼",
      "hanzi": "收到，马上处理",
      "pinyin": "Shōu dào, mǎshàng chǔlǐ",
      "hanviet": "Thu đáo, mã thượng xử lý",
      "meaning": "Dạ em đã nhận được thông tin, em sẽ xử lý ngay ạ!",
      "quote": "Câu thần chú phản hồi tin nhắn công việc đỉnh cao, thể hiện sự trách nhiệm và nhanh nhẹn 10/10!",
      "type": "work"
    },
    {
      "id": "d4",
      "tag": "Lời nói ngọt ngào mỗi ngày 💕",
      "hanzi": "今天你特别好看",
      "pinyin": "Jīntiān nǐ tèbié hǎokàn",
      "hanviet": "Kim thiên nhĩ đặc biệt hảo khán",
      "meaning": "Hôm nay bạn trông xinh xắn vô cùng luôn!",
      "quote": "Hãy đứng trước gương và nói câu này với chính mình nhé, nụ cười của nàng là đẹp nhất trần đời 💐",
      "type": "sweet"
    },
    {
      "id": "d5",
      "tag": "Mẹo chiết tự chữ Hán kỳ diệu ✍️",
      "hanzi": "休",
      "pinyin": "xiū",
      "hanviet": "Hưu",
      "meaning": "Nghỉ ngơi (Hưu trí, nghỉ ngơi)",
      "quote": "Gồm bộ 'Nhân' (人 - người) đứng tựa vào gốc 'Mộc' (木 - cái cây) để nghỉ mát -> Học mệt rồi thì nghỉ tay chút nha nàng!",
      "type": "hanzi"
    },
    {
      "id": "d6",
      "tag": "Thành ngữ gấm hoa 👑",
      "hanzi": "前程似锦",
      "pinyin": "qiánchéng sì jǐn",
      "hanviet": "Tiền trình tự cẩm",
      "meaning": "Tương lai rực rỡ như gấm hoa",
      "quote": "Mỗi chữ Hán nàng học hôm nay đang dệt nên một tương lai ngời sáng và độc lập cho chính mình 🌸",
      "type": "chengyu"
    },
    {
      "id": "d7",
      "tag": "Lời khích lệ ấm áp ☕",
      "hanzi": "慢慢来，比较快",
      "pinyin": "Màn man lái, bǐjiào kuài",
      "hanviet": "Mạn mạn lai, bỉ giác khoái",
      "meaning": "Cứ từ từ từng bước, thế mà lại nhanh hơn",
      "quote": "Đừng nóng vội! Mỗi ngày học 5 từ vựng nhớ sâu còn hơn học 50 từ rồi quên sạch ✨",
      "type": "quote"
    },
    {
      "id": "d8",
      "tag": "Văn hóa trà chiều 🧋",
      "hanzi": "半糖少冰",
      "pinyin": "bàn táng shǎo bīng",
      "hanviet": "Bán đường thiểu băng",
      "meaning": "50% đường, ít đá (chuẩn vị sành điệu)",
      "quote": "Bí kíp order trà sữa Đài Loan chuẩn không cần chỉnh, vừa ngon ngọt vừa giữ dáng xinh đẹp!",
      "type": "food"
    },
    {
      "id": "d9",
      "tag": "Thành ngữ vạn sự như ý 🧧",
      "hanzi": "心想事成",
      "pinyin": "xīn xiǎng shì chéng",
      "hanviet": "Tâm tưởng sự thành",
      "meaning": "Nghĩ gì được nấy, vạn điều toại nguyện",
      "quote": "Mong mọi ước mơ trong lòng Ngọc Ánh đều từng bước trở thành hiện thực rạng rỡ 🌟",
      "type": "chengyu"
    },
    {
      "id": "d10",
      "tag": "Kỹ năng phản hồi thông minh 💡",
      "hanzi": "稍等一下",
      "pinyin": "shāo děng yíxià",
      "hanviet": "Sảo đẳng nhất hạ",
      "meaning": "Xin vui lòng đợi một chút xíu ạ",
      "quote": "Thay vì nói 'Đợi tí', nói '稍等一下' với giọng điệu nhẹ nhàng sẽ khiến đối phương cảm thấy rất được tôn trọng!",
      "type": "work"
    },
    {
      "id": "d11",
      "tag": "Chiết tự tình yêu 💌",
      "hanzi": "爱",
      "pinyin": "ài",
      "hanviet": "Ái",
      "meaning": "Tình yêu thương sâu sắc",
      "quote": "Trong chữ phồn thể có chữ Tâm (心) ở giữa - Yêu thương bằng cả tấm lòng chân thành!",
      "type": "hanzi"
    },
    {
      "id": "d12",
      "tag": "Năng lượng tích cực ☀️",
      "hanzi": "元气满满",
      "pinyin": "yuánqì mǎnmǎn",
      "hanviet": "Nguyên khí mãn mãn",
      "meaning": "Tràn đầy sức sống, năng lượng dồi dào",
      "quote": "Hít thở thật sâu, uống ngụm nước ấm và bắt đầu một ngày mới với 100% năng lượng nhé!",
      "type": "sweet"
    },
    {
      "id": "d13",
      "tag": "Taobao & Shopping 🛍️",
      "hanzi": "物美价廉",
      "pinyin": "wù měi jià lián",
      "hanviet": "Vật mỹ giá liêm",
      "meaning": "Đồ đẹp mà giá lại hạt dẻ, chất lượng tuyệt vời",
      "quote": "Câu thần chú khi săn được món đồ ưng ý trên Taobao hoặc đi chợ đêm Trung Hoa!",
      "type": "chengyu"
    },
    {
      "id": "d14",
      "tag": "Bản lĩnh công sở 💼",
      "hanzi": "精益求精",
      "pinyin": "jīng yì qiú jīng",
      "hanviet": "Tinh ích cầu tinh",
      "meaning": "Đã tốt rồi lại muốn tốt hơn nữa, chu đáo tỉ mỉ",
      "quote": "Phẩm chất của một cô gái chuyên nghiệp: mỗi bản báo cáo hay email đều chỉn chu đến từng chi tiết nhỏ.",
      "type": "work"
    },
    {
      "id": "d15",
      "tag": "Khám phá ẩm thực 🥟",
      "hanzi": "人间美味",
      "pinyin": "rénjiān měiwèi",
      "hanviet": "Nhân gian mỹ vị",
      "meaning": "Món ngon tuyệt đỉnh chốn trần gian",
      "quote": "Cuộc sống có buồn đến mấy, được ăn một xửng há cảo nóng hổi là tâm trạng lại bay bổng ngay!",
      "type": "food"
    },
    {
      "id": "d16",
      "tag": "Chiết tự chữ Hán ✍️",
      "hanzi": "家",
      "pinyin": "jiā",
      "hanviet": "Gia",
      "meaning": "Nhà, mái ấm gia đình",
      "quote": "Phía trên là mái nhà (宀 - Miên), phía dưới là chú heo (豕 - Thỉ) tượng trưng cho sự ấm no và bình yên.",
      "type": "hanzi"
    },
    {
      "id": "d17",
      "tag": "Lời khen khéo léo 💐",
      "hanzi": "你太有才了",
      "pinyin": "Nǐ tài yǒu cái le",
      "hanviet": "Nhĩ thái hữu tài liễu",
      "meaning": "Bạn tài năng và thông minh quá chừng!",
      "quote": "Dành tặng lời khen này cho bạn bè hoặc cộng sự khi họ đưa ra một ý tưởng sáng tạo độc đáo nhé!",
      "type": "sweet"
    },
    {
      "id": "d18",
      "tag": "Khen ngợi nỗ lực 🏆",
      "hanzi": "功夫不负有心人",
      "pinyin": "Gōngfu bù fù yǒuxīnrén",
      "hanviet": "Công phu bất phụ hữu tâm nhân",
      "meaning": "Trời không phụ lòng người có công",
      "quote": "Mọi nỗ lực học tập của nàng đều sẽ đơm hoa kết trái thành những cơ hội tuyệt vời phía trước!",
      "type": "chengyu"
    },
    {
      "id": "d19",
      "tag": "Công sở đàm phán 🤝",
      "hanzi": "合作愉快",
      "pinyin": "Hézuò yúkuài",
      "hanviet": "Hợp tác du khoái",
      "meaning": "Hợp tác vui vẻ, rất vui được làm việc cùng quý vị",
      "quote": "Câu nói chốt hạ lịch lãm khi kết thúc cuộc họp hoặc vừa hoàn thành một dự án thành công.",
      "type": "work"
    },
    {
      "id": "d20",
      "tag": "Thảnh thơi cuối tuần 🍃",
      "hanzi": "偷得浮生半日闲",
      "pinyin": "Tōu dé fúshēng bàn rì xián",
      "hanviet": "Thâu đắc phù sinh bán nhật nhàn",
      "meaning": "Tự thưởng cho mình nửa ngày thảnh thơi giữa dòng đời bận rộn",
      "quote": "Cuối tuần rồi, hãy buông bỏ âu lo và dành chút thời gian riêng để nuông chiều bản thân nhé nàng!",
      "type": "quote"
    },
    {
      "id": "d21",
      "tag": "Giao tiếp duyên dáng 💬",
      "hanzi": "多亏了你",
      "pinyin": "Duōkuī le nǐ",
      "hanviet": "Đa khuy liễu nhĩ",
      "meaning": "Cũng may mà có bạn / Nhờ có bạn cả đấy",
      "quote": "Cách cảm ơn đầy tinh tế, khiến người nghe cảm thấy sự đóng góp của mình vô cùng giá trị.",
      "type": "sweet"
    },
    {
      "id": "d22",
      "tag": "Chiết tự chữ Hán ✍️",
      "hanzi": "安",
      "pinyin": "ān",
      "hanviet": "An",
      "meaning": "Bình an, yên ổn",
      "quote": "Dưới mái nhà (宀) có người phụ nữ (女) thì gia đình êm ấm, lòng người bình an!",
      "type": "hanzi"
    },
    {
      "id": "d23",
      "tag": "Giao tiếp công sở 💼",
      "hanzi": "请多指教",
      "pinyin": "Qǐng duō zhǐjiào",
      "hanviet": "Thỉnh đa chỉ giáo",
      "meaning": "Xin được chỉ giáo và giúp đỡ nhiều hơn ạ",
      "quote": "Dùng khi bắt đầu làm việc cùng sếp mới hoặc tiền bối trong công ty, thể hiện sự khiêm nhường cầu tiến.",
      "type": "work"
    },
    {
      "id": "d24",
      "tag": "Thành ngữ may mắn 🍀",
      "hanzi": "万事胜意",
      "pinyin": "Wàn shì shèng yì",
      "hanviet": "Vạn sự thắng ý",
      "meaning": "Mọi việc diễn ra còn tốt đẹp hơn cả những gì mình kỳ vọng",
      "quote": "Một lời chúc cấp cao hơn cả 'Vạn sự như ý' - cầu chúc mọi điều đến với Ngọc Ánh đều vượt ngoài mong đợi!",
      "type": "chengyu"
    },
    {
      "id": "d25",
      "tag": "Chăm sóc bản thân 💆‍♀️",
      "hanzi": "早睡早起",
      "pinyin": "Zǎoshuì zǎoqǐ",
      "hanviet": "Tảo thụy tảo khởi",
      "meaning": "Ngủ sớm dậy sớm",
      "quote": "Làn da đẹp và nụ cười rạng rỡ bắt đầu từ một giấc ngủ sâu. Tối nay đừng thức khuya xem điện thoại nha!",
      "type": "sweet"
    },
    {
      "id": "d26",
      "tag": "Lời tỏ tình đáng yêu 💖",
      "hanzi": "我只喜欢你",
      "pinyin": "Wǒ zhǐ xǐhuan nǐ",
      "hanviet": "Ngã chỉ hỉ hoan nhĩ",
      "meaning": "Mình chỉ thích mỗi bạn thôi đó!",
      "quote": "Ngắn gọn, chân thành, có thể làm tan chảy trái tim của bất kỳ ai trong tích tắc!",
      "type": "sweet"
    },
    {
      "id": "d27",
      "tag": "Thương mại & Giá cả 📊",
      "hanzi": "性价比高",
      "pinyin": "Xìngjiàbǐ gāo",
      "hanviet": "Tính giá bỉ cao",
      "meaning": "Hiệu năng trên giá thành rất cao (p/p cực tốt)",
      "quote": "Từ chuyên ngành mua sắm và thẩm định sản phẩm: món hàng vừa rẻ, vừa xịn sò dùng thích mê.",
      "type": "work"
    },
    {
      "id": "d28",
      "tag": "Chiết tự chữ Hán ✍️",
      "hanzi": "明",
      "pinyin": "míng",
      "hanviet": "Minh",
      "meaning": "Sáng sủa, thông minh, ngày mai",
      "quote": "Kết hợp giữa Mặt trời (日 - Nhật) và Mặt trăng (月 - Nguyệt) -> Ánh sáng hội tụ, sáng suốt vô cùng!",
      "type": "hanzi"
    },
    {
      "id": "d29",
      "tag": "Kiên trì bền bỉ 💎",
      "hanzi": "坚持到底",
      "pinyin": "Jiānchí dàodǐ",
      "hanviet": "Kiên trì đáo để",
      "meaning": "Kiên trì đến cùng, không bỏ cuộc giữa chừng",
      "quote": "Người chiến thắng không phải người xuất phát nhanh nhất, mà là người không bao giờ dừng bước chân.",
      "type": "quote"
    },
    {
      "id": "d30",
      "tag": "Bình an năm tháng 🌿",
      "hanzi": "岁月静好",
      "pinyin": "Suìyuè jìng hǎo",
      "hanviet": "Tuế nguyệt tĩnh hảo",
      "meaning": "Năm tháng tĩnh lặng và dịu êm",
      "quote": "Mong mỗi ngày trôi qua với nàng đều nhẹ nhàng như một tách trà thơm, không giông bão, chỉ có niềm vui.",
      "type": "chengyu"
    },
    {
      "id": "d31",
      "tag": "Chào đón thành công 🌸",
      "hanzi": "未来可期",
      "pinyin": "Wèilái kě qī",
      "hanviet": "Vị lai khả kỳ",
      "meaning": "Tương lai đầy hứa hẹn và đáng mong chờ",
      "quote": "Trang web này và hành trình tiếng Trung này là món quà dành cho tương lai rực rỡ của chính bạn!",
      "type": "quote"
    }
  ],
  "dictionaryBank": [
    {
      "id": "dict-1",
      "hanzi": "你好",
      "pinyin": "nǐ hǎo",
      "hanviet": "Nhĩ hảo",
      "wordType": "Chào hỏi",
      "hsk": "HSK 1",
      "meaning": "Xin chào, lời chào lịch thiệp",
      "strokes": 7,
      "radical": "亻 (Nhân đứng)",
      "example": "你好！很高兴认识你。",
      "exampleVi": "Xin chào! Rất vui được làm quen với bạn.",
      "collocations": [
        "您好 (Chào lịch sự)",
        "问好 (Gửi lời chào)",
        "好人 (Người tốt)"
      ],
      "tip": "Gồm chữ 'Nhĩ' (bạn) và chữ 'Hảo' (tốt lành) -> Chúc bạn mọi điều tốt đẹp!"
    },
    {
      "id": "dict-2",
      "hanzi": "谢谢",
      "pinyin": "xièxie",
      "hanviet": "Tạ tạ",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Cảm ơn, tạ ơn",
      "strokes": 12,
      "radical": "讠 (Ngôn)",
      "example": "太谢谢你了，帮了我大忙！",
      "exampleVi": "Cảm ơn bạn rất nhiều, đã giúp mình một việc lớn!",
      "collocations": [
        "非常感谢 (Vô cùng cảm ơn)",
        "谢意 (Tấm lòng biết ơn)",
        "多谢 (Đa tạ)"
      ],
      "tip": "Bộ 'Ngôn' (lời nói) kết hợp với chữ 'Xạ' -> Lời nói chân thành bắn thẳng vào tim!"
    },
    {
      "id": "dict-3",
      "hanzi": "再见",
      "pinyin": "zàijiàn",
      "hanviet": "Tái kiến",
      "wordType": "Chào hỏi",
      "hsk": "HSK 1",
      "meaning": "Tạm biệt, hẹn gặp lại",
      "strokes": 6,
      "radical": "冂 (Quynh)",
      "example": "明天见，路上小心，再见！",
      "exampleVi": "Mai gặp nhé, đi đường cẩn thận, tạm biệt!",
      "collocations": [
        "明天见 (Hẹn mai gặp)",
        "一会儿见 (Lát nữa gặp)",
        "不见不散 (Không gặp không về)"
      ],
      "tip": "'Tái' là gặp lại lần nữa, 'Kiến' là trông thấy -> Hẹn gặp lại bạn lần sau!"
    },
    {
      "id": "dict-4",
      "hanzi": "爱",
      "pinyin": "ài",
      "hanviet": "Ái",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Yêu, yêu thương, thích",
      "strokes": 10,
      "radical": "爫 (Trảo)",
      "example": "我爱学中文，也爱你。",
      "exampleVi": "Mình yêu học tiếng Trung, và cũng yêu bạn.",
      "collocations": [
        "爱情 (Tình yêu)",
        "爱好 (Sở thích)",
        "可爱 (Đáng yêu)"
      ],
      "tip": "Chữ phồn thể 爱 có bộ 'Tâm' (心) ở giữa -> Yêu là trao cả trái tim chân thành."
    },
    {
      "id": "dict-5",
      "hanzi": "喝",
      "pinyin": "hē",
      "hanviet": "Hát",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Uống",
      "strokes": 12,
      "radical": "口 (Khẩu)",
      "example": "你想喝奶茶还是咖啡？",
      "exampleVi": "Bạn muốn uống trà sữa hay cà phê nào?",
      "collocations": [
        "喝水 (Uống nước)",
        "喝茶 (Uống trà)",
        "喝咖啡 (Uống cà phê)"
      ],
      "tip": "Uống nước thì phải dùng cái Miệng (bộ Khẩu 口)!"
    },
    {
      "id": "dict-6",
      "hanzi": "水",
      "pinyin": "shuǐ",
      "hanviet": "Thủy",
      "wordType": "Danh từ",
      "hsk": "HSK 1",
      "meaning": "Nước, chất lỏng",
      "strokes": 4,
      "radical": "水 (Thủy)",
      "example": "多喝温水对皮肤特别好。",
      "exampleVi": "Uống nhiều nước ấm đặc biệt tốt cho làn da.",
      "collocations": [
        "温水 (Nước ấm)",
        "水果 (Trái cây)",
        "开水 (Nước sôi)"
      ],
      "tip": "Tượng hình dòng nước uốn lượn chảy hiền hòa qua khe đá."
    },
    {
      "id": "dict-7",
      "hanzi": "家",
      "pinyin": "jiā",
      "hanviet": "Gia",
      "wordType": "Danh từ",
      "hsk": "HSK 1",
      "meaning": "Nhà, gia đình",
      "strokes": 10,
      "radical": "宀 (Miên)",
      "example": "今天下班我想早点回家。",
      "exampleVi": "Hôm nay tan sở mình muốn về nhà sớm một chút.",
      "collocations": [
        "家人 (Người nhà)",
        "大家 (Mọi người)",
        "回家 (Về nhà)"
      ],
      "tip": "Dưới mái nhà (宀) có chú heo (豕) ấm no, sum vầy hạnh phúc!"
    },
    {
      "id": "dict-8",
      "hanzi": "学",
      "pinyin": "xué",
      "hanviet": "Học",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Học tập, bắt chước",
      "strokes": 8,
      "radical": "子 (Tử)",
      "example": "每天学一点，进步看得见。",
      "exampleVi": "Mỗi ngày học một chút, tiến bộ thấy rõ rệt.",
      "collocations": [
        "学习 (Học tập)",
        "学生 (Học sinh)",
        "大学 (Đại học)"
      ],
      "tip": "Đứa trẻ (子) ở dưới mái trường tiếp thu tinh hoa tri thức."
    },
    {
      "id": "dict-9",
      "hanzi": "吃",
      "pinyin": "chī",
      "hanviet": "Ngật",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Ăn, thưởng thức món ăn",
      "strokes": 6,
      "radical": "口 (Khẩu)",
      "example": "你今天中午想吃什么？",
      "exampleVi": "Trưa nay bạn muốn ăn món gì?",
      "collocations": [
        "好吃 (Ngon miệng)",
        "吃饭 (Ăn cơm)",
        "小吃 (Món ăn vặt)"
      ],
      "tip": "Có bộ Khẩu (口) bên cạnh chữ Khất -> Mở miệng nhai thưởng thức món ngon."
    },
    {
      "id": "dict-10",
      "hanzi": "看",
      "pinyin": "kàn",
      "hanviet": "Khán",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Nhìn, xem, đọc, thăm hỏi",
      "strokes": 9,
      "radical": "目 (Mục)",
      "example": "你看，这只小猫多可爱！",
      "exampleVi": "Bạn nhìn xem, chú mèo con này đáng yêu chưa kìa!",
      "collocations": [
        "好看 (Đẹp, ưa nhìn)",
        "看书 (Đọc sách)",
        "电影 (Xem phim)"
      ],
      "tip": "Bàn tay (手) che trên mắt (目) để phóng tầm mắt nhìn ra xa!"
    },
    {
      "id": "dict-11",
      "hanzi": "听",
      "pinyin": "tīng",
      "hanviet": "Thính",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Nghe, lắng nghe",
      "strokes": 7,
      "radical": "口 (Khẩu)",
      "example": "听一首轻松的歌放松一下。",
      "exampleVi": "Nghe một bài hát nhẹ nhàng để thư giãn một chút.",
      "collocations": [
        "好听 (Hay, êm tai)",
        "听话 (Ngoan ngoãn)",
        "听音乐 (Nghe nhạc)"
      ],
      "tip": "Có bộ Khẩu (口) và chữ Cân (斤) -> Lắng nghe lời vàng ý ngọc."
    },
    {
      "id": "dict-12",
      "hanzi": "说",
      "pinyin": "shuō",
      "hanviet": "Thuyết",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Nói, diễn đạt",
      "strokes": 9,
      "radical": "讠 (Ngôn)",
      "example": "请慢一点说，我正在学中文。",
      "exampleVi": "Xin hãy nói chậm một chút, mình đang học tiếng Trung ạ.",
      "collocations": [
        "说话 (Nói chuyện)",
        "说明 (Thuyết minh, giải thích)",
        "听说 (Nghe nói)"
      ],
      "tip": "Có bộ Ngôn (讠) -> Dùng lời nói để bày tỏ tâm tư."
    },
    {
      "id": "dict-13",
      "hanzi": "想",
      "pinyin": "xiǎng",
      "hanviet": "Tưởng",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Nghĩ, muốn, nhớ nhung",
      "strokes": 13,
      "radical": "心 (Tâm)",
      "example": "我想去上海旅游，看外滩夜景。",
      "exampleVi": "Mình muốn đi du lịch Thượng Hải ngắm cảnh đêm Bến Thượng Hải.",
      "collocations": [
        "想法 (Suy nghĩ, ý tưởng)",
        "想念 (Nhớ nhung)",
        "梦想 (Ước mơ)"
      ],
      "tip": "Tướng (相) để trên Tâm (心) -> Hình ảnh ai đó luôn ngự trị trong tim là nỗi nhớ!"
    },
    {
      "id": "dict-14",
      "hanzi": "买",
      "pinyin": "mǎi",
      "hanviet": "Mãi",
      "wordType": "Động từ",
      "hsk": "HSK 1",
      "meaning": "Mua",
      "strokes": 6,
      "radical": "乙 (Ất)",
      "example": "在淘宝买衣服又便宜又好看。",
      "exampleVi": "Mua quần áo trên Taobao vừa rẻ lại vừa xinh.",
      "collocations": [
        "买单 (Thanh toán)",
        "购买 (Mua sắm)",
        "买卖 (Buôn bán)"
      ],
      "tip": "Phân biệt 'Mãi' (买 - mua, không có móc trên đầu) và 'Mại' (卖 - bán, có dấu thập trên đầu)!"
    },
    {
      "id": "dict-15",
      "hanzi": "多",
      "pinyin": "duō",
      "hanviet": "Đa",
      "wordType": "Tính từ",
      "hsk": "HSK 1",
      "meaning": "Nhiều, hơn nữa",
      "strokes": 6,
      "radical": "夕 (Tịch)",
      "example": "多加练习，就会越来越熟练。",
      "exampleVi": "Luyện tập nhiều thì sẽ ngày càng thành thạo thôi.",
      "collocations": [
        "多少 (Bao nhiêu)",
        "很多 (Rất nhiều)",
        "多数 (Đa số)"
      ],
      "tip": "Hai vầng trăng khuyết (夕) xếp chồng lên nhau -> Đêm nối đêm, nhiều vô số!"
    },
    {
      "id": "dict-16",
      "hanzi": "便宜",
      "pinyin": "piányi",
      "hanviet": "Tiện nghi",
      "wordType": "Tính từ",
      "hsk": "HSK 2",
      "meaning": "Rẻ, giá cả phải chăng",
      "strokes": 9,
      "radical": "亻 (Nhân đứng)",
      "example": "这家店的东西很便宜，质量也好。",
      "exampleVi": "Đồ tiệm này rất rẻ mà chất lượng lại tốt nữa.",
      "collocations": [
        "占便宜 (Chiếm lợi lộc)",
        "便宜货 (Hàng giá rẻ)",
        "太便宜了 (Rẻ quá rồi)"
      ],
      "tip": "Mua được món đồ tốt mà giá hời thì ai ai cũng mỉm cười!"
    },
    {
      "id": "dict-17",
      "hanzi": "旅游",
      "pinyin": "lǚyóu",
      "hanviet": "Lữ du",
      "wordType": "Động từ",
      "hsk": "HSK 2",
      "meaning": "Đi du lịch, tham quan",
      "strokes": 10,
      "radical": "方 (Phương)",
      "example": "秋天是去北京旅游最好的季节。",
      "exampleVi": "Mùa thu là mùa đẹp nhất để đi du lịch Bắc Kinh.",
      "collocations": [
        "旅行 (Du hành)",
        "游客 (Du khách)",
        "游玩 (Đi chơi dạo)"
      ],
      "tip": "Bộ 'Phương' (cờ hiệu dẫn đoàn) kết hợp chữ 'Du' (bơi lội, dạo chơi khắp bốn phương)!"
    },
    {
      "id": "dict-18",
      "hanzi": "希望",
      "pinyin": "xīwàng",
      "hanviet": "Hy vọng",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 2",
      "meaning": "Hy vọng, mong muốn",
      "strokes": 11,
      "radical": "巾 (Cân)",
      "example": "希望你每天都开心，万事顺遂！",
      "exampleVi": "Hy vọng mỗi ngày của bạn đều tràn ngập niềm vui và mọi sự hanh thông!",
      "collocations": [
        "很有希望 (Rất có hy vọng)",
        "希望之星 (Ngôi sao hy vọng)",
        "期望 (Kỳ vọng)"
      ],
      "tip": "Ánh sáng hy vọng soi rọi những dự định tương lai rực rỡ."
    },
    {
      "id": "dict-19",
      "hanzi": "准备",
      "pinyin": "zhǔnbèi",
      "hanviet": "Chuẩn bị",
      "wordType": "Động từ",
      "hsk": "HSK 2",
      "meaning": "Chuẩn bị, dự trù",
      "strokes": 8,
      "radical": "冫 (Băng)",
      "example": "你准备好了吗？我们要出发了。",
      "exampleVi": "Bạn đã chuẩn bị sẵn sàng chưa? Tụi mình sắp xuất phát rồi nè.",
      "collocations": [
        "准备就绪 (Chuẩn bị hoàn tất)",
        "做好准备 (Làm tốt công tác chuẩn bị)"
      ],
      "tip": "Chuẩn bị chu đáo mọi việc giúp ta tự tin 100% khi cơ hội đến!"
    },
    {
      "id": "dict-20",
      "hanzi": "奶茶",
      "pinyin": "nǎichá",
      "hanviet": "Nãi trà",
      "wordType": "Danh từ",
      "hsk": "HSK 2",
      "meaning": "Trà sữa",
      "strokes": 5,
      "radical": "女 (Nữ)",
      "example": "下午喝一杯珍珠奶茶，心情超棒！",
      "exampleVi": "Buổi chiều uống một ly trà sữa trân châu, tâm trạng siêu sảng khoái!",
      "collocations": [
        "珍珠奶茶 (Trà sữa trân châu)",
        "少糖 (Ít đường)",
        "去冰 (Không lấy đá)"
      ],
      "tip": "Chữ 'Nãi' (sữa) có bộ Nữ (女) - dòng sữa ngọt ngào mẹ hiền ban tặng."
    },
    {
      "id": "dict-21",
      "hanzi": "快乐",
      "pinyin": "kuàilè",
      "hanviet": "Khoái lạc",
      "wordType": "Tính từ",
      "hsk": "HSK 2",
      "meaning": "Vui vẻ, hạnh phúc, hân hoan",
      "strokes": 7,
      "radical": "忄 (Tâm đứng)",
      "example": "祝你生日快乐，永远年轻漂亮！",
      "exampleVi": "Chúc bạn sinh nhật vui vẻ, mãi mãi trẻ trung xinh đẹp!",
      "collocations": [
        "快快乐乐 (Vui vẻ rạng rỡ)",
        "节日快乐 (Lễ hội vui vẻ)",
        "找乐子 (Tìm niềm vui)"
      ],
      "tip": "Có bộ Tâm đứng (忄) -> Niềm vui xuất phát từ sâu thẳm tâm hồn thanh thản."
    },
    {
      "id": "dict-22",
      "hanzi": "帮助",
      "pinyin": "bāngzhù",
      "hanviet": "Bang trợ",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 2",
      "meaning": "Giúp đỡ, tương trợ",
      "strokes": 9,
      "radical": "巾 (Cân)",
      "example": "非常感谢你在工作中的帮助。",
      "exampleVi": "Rất cảm ơn sự giúp đỡ nhiệt tình của bạn trong công việc.",
      "collocations": [
        "帮忙 (Giúp một tay)",
        "求助 (Cầu cứu, xin giúp)",
        "互相帮助 (Giúp đỡ lẫn nhau)"
      ],
      "tip": "Giúp đỡ người khác mang lại niềm vui cho cả đôi bên."
    },
    {
      "id": "dict-23",
      "hanzi": "介绍",
      "pinyin": "jièshào",
      "hanviet": "Giới thiệu",
      "wordType": "Động từ",
      "hsk": "HSK 2",
      "meaning": "Giới thiệu, làm cầu nối",
      "strokes": 4,
      "radical": "人 (Nhân)",
      "example": "让我来介绍一下我们公司的新产品。",
      "exampleVi": "Để tôi xin phép giới thiệu đôi nét về sản phẩm mới của công ty chúng tôi.",
      "collocations": [
        "自我介绍 (Tự giới thiệu bản thân)",
        "介绍信 (Thư giới thiệu)"
      ],
      "tip": "Chữ 'Giới' (介) như người đứng ở giữa kết nối hai bờ lại với nhau."
    },
    {
      "id": "dict-24",
      "hanzi": "欢迎",
      "pinyin": "huānyíng",
      "hanviet": "Hoan nghênh",
      "wordType": "Động từ",
      "hsk": "HSK 2",
      "meaning": "Chào đón, hoan nghênh",
      "strokes": 6,
      "radical": "欠 (Khiếm)",
      "example": "热烈欢迎各位贵宾来到我们展位！",
      "exampleVi": "Nhiệt liệt chào đón quý vị quan khách đã ghé thăm gian hàng của chúng tôi!",
      "collocations": [
        "欢迎光临 (Kính chào quý khách)",
        "深受好评 (Rất được hoan nghênh)"
      ],
      "tip": "Mở rộng vòng tay chào đón người bạn phương xa ghé thăm nhà."
    },
    {
      "id": "dict-25",
      "hanzi": "上班",
      "pinyin": "shàngbān",
      "hanviet": "Thượng ban",
      "wordType": "Động từ",
      "hsk": "HSK 2",
      "meaning": "Đi làm, vào ca làm việc",
      "strokes": 3,
      "radical": "一 (Nhất)",
      "example": "我每天早上八点半准时上班。",
      "exampleVi": "Mỗi ngày đúng 8 giờ 30 sáng là mình bắt đầu vào làm việc.",
      "collocations": [
        "下班 (Tan làm)",
        "加班 (Tăng ca)",
        "上班族 (Dân văn phòng)"
      ],
      "tip": "Ngược nghĩa với 'Hạ ban' (下班 - tan sở về nhà nghỉ ngơi)."
    },
    {
      "id": "dict-26",
      "hanzi": "满意",
      "pinyin": "mǎnyì",
      "hanviet": "Mãn ý",
      "wordType": "Tính từ",
      "hsk": "HSK 3",
      "meaning": "Hài lòng, vừa lòng",
      "strokes": 13,
      "radical": "氵 (Thủy)",
      "example": "客户对我们这次的设计方案非常满意。",
      "exampleVi": "Khách hàng vô cùng hài lòng với phương án thiết kế lần này của chúng tôi.",
      "collocations": [
        "满意度 (Độ hài lòng)",
        "心满意足 (Thỏa lòng toại ý)",
        "感到满意 (Cảm thấy vừa ý)"
      ],
      "tip": "Nước (氵) đong đầy (满) bình, lòng (意) thỏa nguyện không còn vướng bận."
    },
    {
      "id": "dict-27",
      "hanzi": "解决",
      "pinyin": "jiějué",
      "hanviet": "Giải quyết",
      "wordType": "Động từ",
      "hsk": "HSK 3",
      "meaning": "Giải quyết (vấn đề, khó khăn)",
      "strokes": 13,
      "radical": "角 (Giác)",
      "example": "只要我们沟通顺畅，问题很快就能解决。",
      "exampleVi": "Chỉ cần đôi bên giao tiếp suôn sẻ, vấn đề sẽ nhanh chóng được giải quyết.",
      "collocations": [
        "解决办法 (Biện pháp giải quyết)",
        "妥善解决 (Giải quyết ổn thỏa)"
      ],
      "tip": "Gỡ bỏ nút thắt (Giải 解) và quyết đoán chốt hạ phương án (Quyết 决)."
    },
    {
      "id": "dict-28",
      "hanzi": "努力",
      "pinyin": "nǔlì",
      "hanviet": "Nỗ lực",
      "wordType": "Tính từ/Động từ",
      "hsk": "HSK 3",
      "meaning": "Nỗ lực, chăm chỉ, cố gắng",
      "strokes": 7,
      "radical": "力 (Lực)",
      "example": "越努力，生活越甜美！",
      "exampleVi": "Càng nỗ lực, cuộc sống sẽ càng thêm ngọt ngào viên mãn!",
      "collocations": [
        "共同努力 (Cùng nhau nỗ lực)",
        "努力工作 (Chăm chỉ làm việc)"
      ],
      "tip": "Có bộ Lực (力) -> Dồn toàn bộ sức mạnh và tâm trí để tiến lên."
    },
    {
      "id": "dict-29",
      "hanzi": "简单",
      "pinyin": "jiǎndān",
      "hanviet": "Giản đơn",
      "wordType": "Tính từ",
      "hsk": "HSK 3",
      "meaning": "Đơn giản, giản dị, không phức tạp",
      "strokes": 11,
      "radical": "竹 (Trúc)",
      "example": "其实把复杂的事情变简单是一种高级智慧。",
      "exampleVi": "Thực ra biến việc phức tạp thành đơn giản là một trí tuệ đỉnh cao.",
      "collocations": [
        "简单明了 (Đơn giản rõ ràng)",
        "简简单单 (Đơn giản mộc mạc)"
      ],
      "tip": "Đơn giản hóa quy trình giúp công việc hanh thông gấp đôi!"
    },
    {
      "id": "dict-30",
      "hanzi": "认真",
      "pinyin": "rènzhēn",
      "hanviet": "Nhận chân",
      "wordType": "Tính từ",
      "hsk": "HSK 3",
      "meaning": "Nghiêm túc, cẩn trọng, chu đáo",
      "strokes": 4,
      "radical": "讠 (Ngôn)",
      "example": "做事认真的女孩子，运气一定不会差。",
      "exampleVi": "Cô gái làm việc nghiêm túc cẩn trọng thì vận may chắc chắn sẽ luôn mỉm cười.",
      "collocations": [
        "态度认真 (Thái độ nghiêm túc)",
        "认真负责 (Chu đáo trách nhiệm)"
      ],
      "tip": "Nhận thức chân thật và làm việc với cái tâm trong sáng."
    },
    {
      "id": "dict-31",
      "hanzi": "习惯",
      "pinyin": "xíguàn",
      "hanviet": "Tập quán",
      "wordType": "Danh từ/Động từ",
      "hsk": "HSK 3",
      "meaning": "Thói quen, quen với",
      "strokes": 3,
      "radical": "羽 (Vũ)",
      "example": "每天学15分钟中文已经成为我的好习惯。",
      "exampleVi": "Mỗi ngày học 15 phút tiếng Trung đã trở thành thói quen tốt của mình.",
      "collocations": [
        "生活习惯 (Thói quen sinh hoạt)",
        "养成习惯 (Nuôi dưỡng thói quen)"
      ],
      "tip": "Cánh chim vỗ cánh nhiều lần (Tập 习) sẽ quen đường bay lượn trên bầu trời."
    },
    {
      "id": "dict-32",
      "hanzi": "清楚",
      "pinyin": "qīngchu",
      "hanviet": "Thanh sở",
      "wordType": "Tính từ",
      "hsk": "HSK 3",
      "meaning": "Rõ ràng, rành mạch, hiểu thấu",
      "strokes": 11,
      "radical": "氵 (Thủy)",
      "example": "邮件里已经写得很清楚了，请查收。",
      "exampleVi": "Trong email đã ghi rất rõ ràng rồi ạ, xin vui lòng kiểm tra.",
      "collocations": [
        "看清楚 (Nhìn cho rõ)",
        "说清楚 (Nói rõ ràng)",
        "搞清楚 (Làm rõ ngọn ngành)"
      ],
      "tip": "Nước trong veo (Thanh 清) nhìn thấy từng ngọn cỏ (Sở 楚) dưới đáy hồ."
    },
    {
      "id": "dict-33",
      "hanzi": "机会",
      "pinyin": "jīhuì",
      "hanviet": "Cơ hội",
      "wordType": "Danh từ",
      "hsk": "HSK 3",
      "meaning": "Cơ hội, thời cơ tốt",
      "strokes": 4,
      "radical": "木 (Mộc)",
      "example": "机会总是留给有准备的人。",
      "exampleVi": "Cơ hội luôn dành cho những ai đã chuẩn bị sẵn sàng.",
      "collocations": [
        "抓住机会 (Nắm bắt cơ hội)",
        "难得的机会 (Cơ hội hiếm có)"
      ],
      "tip": "Máy móc vận hành đúng điểm giao hội -> Thời cơ vàng đã tới!"
    },
    {
      "id": "dict-34",
      "hanzi": "要求",
      "pinyin": "yāoqiú",
      "hanviet": "Yêu cầu",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 3",
      "meaning": "Yêu cầu, đòi hỏi, tiêu chuẩn",
      "strokes": 9,
      "radical": "女 (Nữ)",
      "example": "客户对交货时间有很严格的要求。",
      "exampleVi": "Khách hàng có yêu cầu rất khắt khe về thời gian giao hàng.",
      "collocations": [
        "严格要求 (Yêu cầu nghiêm ngặt)",
        "满足要求 (Đáp ứng yêu cầu)"
      ],
      "tip": "Hiểu rõ yêu cầu của đối tác là bước đầu tiên để chốt đơn thành công."
    },
    {
      "id": "dict-35",
      "hanzi": "成绩",
      "pinyin": "chéngjì",
      "hanviet": "Thành tích",
      "wordType": "Danh từ",
      "hsk": "HSK 3",
      "meaning": "Thành tích, kết quả điểm số",
      "strokes": 6,
      "radical": "戈 (Qua)",
      "example": "祝贺你取得这么优异的成绩！",
      "exampleVi": "Chúc mừng bạn đã đạt được thành tích xuất sắc như vậy nha!",
      "collocations": [
        "考试成绩 (Điểm thi)",
        "业绩 (Thành tích doanh số)",
        "取得好成绩 (Gặt hái kết quả tốt)"
      ],
      "tip": "Dệt nên từng sợi chỉ (Tích 绩) tạo nên tấm gấm thành công (Thành 成)."
    },
    {
      "id": "dict-36",
      "hanzi": "成功",
      "pinyin": "chénggōng",
      "hanviet": "Thành công",
      "wordType": "Động từ/Tính từ",
      "hsk": "HSK 4",
      "meaning": "Thành công, gặt hái kết quả viên mãn",
      "strokes": 6,
      "radical": "戈 (Qua)",
      "example": "坚持到底就是成功的最大秘诀。",
      "exampleVi": "Kiên trì đến cùng chính là bí quyết lớn nhất của thành công.",
      "collocations": [
        "成功人士 (Người thành đạt)",
        "取得成功 (Đạt được thành công)",
        "祝你成功 (Chúc bạn thành công)"
      ],
      "tip": "Công sức bỏ ra xứng đáng mang lại quả ngọt rực rỡ."
    },
    {
      "id": "dict-37",
      "hanzi": "坚持",
      "pinyin": "jiānchí",
      "hanviet": "Kiên trì",
      "wordType": "Động từ",
      "hsk": "HSK 4",
      "meaning": "Kiên trì, bền chí không nản",
      "strokes": 9,
      "radical": "土 (Thổ)",
      "example": "每天坚持听一段中文播客，听力提升很快。",
      "exampleVi": "Kiên trì mỗi ngày nghe một đoạn podcast tiếng Trung, phản xạ nghe tiến bộ nhanh lắm.",
      "collocations": [
        "坚持不懈 (Bền bỉ không ngừng)",
        "坚持原则 (Giữ vững nguyên tắc)"
      ],
      "tip": "Đứng vững như khối đất đá (Kiên 坚) cầm chắc lý tưởng trong tay (Trì 持)."
    },
    {
      "id": "dict-38",
      "hanzi": "交流",
      "pinyin": "jiāoliú",
      "hanviet": "Giao lưu",
      "wordType": "Động từ",
      "hsk": "HSK 4",
      "meaning": "Giao lưu, trao đổi, trò chuyện",
      "strokes": 6,
      "radical": "亠 (Đầu)",
      "example": "多和母语者交流能让你说得更地道。",
      "exampleVi": "Giao lưu nhiều với người bản xứ sẽ giúp bạn nói tự nhiên chuẩn vị hơn.",
      "collocations": [
        "交流经验 (Trao đổi kinh nghiệm)",
        "文化交流 (Giao lưu văn hóa)",
        "日常交流 (Giao tiếp hằng ngày)"
      ],
      "tip": "Hai dòng nước hòa vào nhau (Lưu 流) cùng chảy về biển lớn."
    },
    {
      "id": "dict-39",
      "hanzi": "安排",
      "pinyin": "ānpái",
      "hanviet": "An bài",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 4",
      "meaning": "Sắp xếp, bố trí lịch trình",
      "strokes": 6,
      "radical": "扌 (Thủ)",
      "example": "我已经把下周的会议日程安排好了。",
      "exampleVi": "Em đã sắp xếp xong lịch trình các cuộc họp cho tuần tới rồi ạ.",
      "collocations": [
        "听从安排 (Tuân theo sắp xếp)",
        "合理安排 (Bố trí hợp lý)",
        "行程安排 (Lịch trình chuyến đi)"
      ],
      "tip": "Dùng bàn tay (扌) sắp xếp mọi việc gọn gàng, an ổn (安)."
    },
    {
      "id": "dict-40",
      "hanzi": "负责",
      "pinyin": "fùzé",
      "hanviet": "Phụ trách",
      "wordType": "Động từ/Tính từ",
      "hsk": "HSK 4",
      "meaning": "Phụ trách, chịu trách nhiệm",
      "strokes": 9,
      "radical": "贝 (Bối)",
      "example": "这个项目由我来全权负责，请您放心。",
      "exampleVi": "Dự án này do em chịu trách nhiệm chính, sếp cứ an tâm ạ.",
      "collocations": [
        "负责人 (Người phụ trách)",
        "对工作负责 (Có trách nhiệm với công việc)"
      ],
      "tip": "Mang gánh nặng trên vai (Phụ 负) vì chữ Tín quý hơn tiền vàng (Trách 责)."
    },
    {
      "id": "dict-41",
      "hanzi": "商量",
      "pinyin": "shāngliang",
      "hanviet": "Thương lượng",
      "wordType": "Động từ",
      "hsk": "HSK 4",
      "meaning": "Bàn bạc, thảo luận, trao đổi",
      "strokes": 11,
      "radical": "口 (Khẩu)",
      "example": "这件事我们下午开会商量一下再做决定。",
      "exampleVi": "Chuyện này chiều nay tụi mình họp bàn bạc chút rồi hãy chốt quyết định nhé.",
      "collocations": [
        "好商量 (Dễ thương lượng)",
        "商量对策 (Bàn bạc đối sách)"
      ],
      "tip": "Cùng nhau đong đếm, cân nhắc lợi ích để đưa ra giải pháp vẹn cả đôi đường."
    },
    {
      "id": "dict-42",
      "hanzi": "不仅",
      "pinyin": "bùjǐn",
      "hanviet": "Bất cận",
      "wordType": "Liên từ",
      "hsk": "HSK 4",
      "meaning": "Không chỉ, không những",
      "strokes": 4,
      "radical": "一 (Nhất)",
      "example": "她不仅人长得漂亮，而且工作能力极强。",
      "exampleVi": "Cô ấy không những xinh đẹp khả ái mà năng lực công việc còn cực kỳ xuất sắc.",
      "collocations": [
        "不仅...而且... (Không những... mà còn...)",
        "不仅如此 (Không chỉ có thế)"
      ],
      "tip": "Thường đi đôi với '而且' (hơn nữa) tạo nên cặp liên từ tăng tiến quyền lực."
    },
    {
      "id": "dict-43",
      "hanzi": "丰富",
      "pinyin": "fēngfù",
      "hanviet": "Phong phú",
      "wordType": "Tính từ",
      "hsk": "HSK 4",
      "meaning": "Phong phú, dồi dào, đa dạng",
      "strokes": 12,
      "radical": "豆 (Đậu)",
      "example": "这座城市的夜生活非常丰富多彩。",
      "exampleVi": "Đời sống về đêm của thành phố này vô cùng phong phú và rực rỡ sắc màu.",
      "collocations": [
        "经验丰富 (Kinh nghiệm dồi dào)",
        "丰富多彩 (Đa dạng phong phú)"
      ],
      "tip": "Lúa thóc đầy bồ (Phong 丰) và trong nhà đầy của cải (Phú 富)."
    },
    {
      "id": "dict-44",
      "hanzi": "顺利",
      "pinyin": "shùnlì",
      "hanviet": "Thuận lợi",
      "wordType": "Tính từ",
      "hsk": "HSK 4",
      "meaning": "Thuận lợi, suôn sẻ, không trắc trở",
      "strokes": 9,
      "radical": "页 (Hiệp)",
      "example": "祝你的新项目一切顺利，大吉大利！",
      "exampleVi": "Chúc dự án mới của bạn mọi việc thuận buồm xuôi gió, vạn điều may mắn!",
      "collocations": [
        "顺利通过 (Vượt qua suôn sẻ)",
        "工作顺利 (Công việc thuận lợi)"
      ],
      "tip": "Xuôi theo chiều gió nước (Thuận 顺) mang lại lợi ích tốt đẹp (Lợi 利)."
    },
    {
      "id": "dict-45",
      "hanzi": "轻松",
      "pinyin": "qīngsōng",
      "hanviet": "Khinh tùng",
      "wordType": "Tính từ",
      "hsk": "HSK 4",
      "meaning": "Thoải mái, nhẹ nhõm, thư thái",
      "strokes": 9,
      "radical": "车 (Xa)",
      "example": "周末和闺蜜去逛街喝奶茶，心情很轻松。",
      "exampleVi": "Cuối tuần cùng bạn thân đi dạo phố uống trà sữa, lòng thấy nhẹ nhõm vô cùng.",
      "collocations": [
        "轻松自在 (Thảnh thơi tự tại)",
        "轻松愉快 (Nhẹ nhàng vui vẻ)"
      ],
      "tip": "Trút bỏ gánh nặng ngàn cân, lòng nhẹ như cánh hoa bay trong gió."
    },
    {
      "id": "dict-46",
      "hanzi": "合同",
      "pinyin": "hétong",
      "hanviet": "Hợp đồng",
      "wordType": "Danh từ",
      "hsk": "HSK 5",
      "meaning": "Hợp đồng thương mại, khế ước",
      "strokes": 6,
      "radical": "口 (Khẩu)",
      "example": "双方代表已正式签署独家代理合同。",
      "exampleVi": "Đại diện hai bên đã chính thức ký kết hợp đồng đại lý độc quyền.",
      "collocations": [
        "签订合同 (Ký kết hợp đồng)",
        "合同条款 (Điều khoản hợp đồng)",
        "解除合同 (Chấm dứt hợp đồng)"
      ],
      "tip": "Đồng lòng hợp ý (Hợp 合) cùng chung tiếng nói (Đồng 同) trên văn bản pháp lý."
    },
    {
      "id": "dict-47",
      "hanzi": "谈判",
      "pinyin": "tánpàn",
      "hanviet": "Đàm phán",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 5",
      "meaning": "Đàm phán, thương lượng giao dịch",
      "strokes": 12,
      "radical": "讠 (Ngôn)",
      "example": "商务谈判需要沉着冷静与智慧。",
      "exampleVi": "Đàm phán thương mại đòi hỏi sự điềm tĩnh và trí tuệ mẫn tiệp.",
      "collocations": [
        "商务谈判 (Đàm phán thương vụ)",
        "谈判桌 (Bàn đàm phán)",
        "谈判破裂 (Đàm phán đổ vỡ)"
      ],
      "tip": "Cả hai chữ đều có bộ Ngôn (讠) -> Nghệ thuật sử dụng ngôn từ để chốt deal đỉnh cao."
    },
    {
      "id": "dict-48",
      "hanzi": "审批",
      "pinyin": "shēnpī",
      "hanviet": "Thẩm phê",
      "wordType": "Động từ",
      "hsk": "HSK 5",
      "meaning": "Phê duyệt, xét duyệt hồ sơ",
      "strokes": 8,
      "radical": "扌 (Thủ)",
      "example": "采购申请单已经提交给财务部审批。",
      "exampleVi": "Đơn xin mua sắm đã được đệ trình lên phòng tài chính để xét duyệt ạ.",
      "collocations": [
        "审批流程 (Quy trình phê duyệt)",
        "通过审批 (Thông qua xét duyệt)"
      ],
      "tip": "Xem xét cẩn trọng (Thẩm 审) rồi mới hạ bút ký phê chuẩn (Phê 批)."
    },
    {
      "id": "dict-49",
      "hanzi": "合作",
      "pinyin": "hézuò",
      "hanviet": "Hợp tác",
      "wordType": "Động từ",
      "hsk": "HSK 5",
      "meaning": "Hợp tác làm ăn, cộng tác",
      "strokes": 6,
      "radical": "口 (Khẩu)",
      "example": "非常期待未来能与贵公司有更深度的合作。",
      "exampleVi": "Rất mong đợi trong tương lai sẽ có sự hợp tác sâu rộng hơn cùng quý công ty.",
      "collocations": [
        "合作伙伴 (Đối tác hợp tác)",
        "长期合作 (Hợp tác lâu dài)",
        "合作共赢 (Hợp tác cùng có lợi)"
      ],
      "tip": "Hợp sức chung lòng tạo nên những kỳ tích vượt trội."
    },
    {
      "id": "dict-50",
      "hanzi": "投资",
      "pinyin": "tóuzī",
      "hanviet": "Đầu tư",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 5",
      "meaning": "Đầu tư vốn, rót vốn",
      "strokes": 7,
      "radical": "扌 (Thủ)",
      "example": "投资学习外语是对自己最好的长期投资。",
      "exampleVi": "Đầu tư học ngoại ngữ là khoản đầu tư dài hạn khôn ngoan nhất cho chính mình.",
      "collocations": [
        "投资回报率 (Tỷ suất hoàn vốn ROI)",
        "投资方 (Nhà đầu tư)",
        "吸引外资 (Thu hút vốn ngoại)"
      ],
      "tip": "Bỏ vốn liếng (Tư 资) vào nơi có tiềm năng sinh sôi nảy nở."
    },
    {
      "id": "dict-51",
      "hanzi": "优惠",
      "pinyin": "yōuhuì",
      "hanviet": "Ưu đãi",
      "wordType": "Danh từ/Tính từ",
      "hsk": "HSK 5",
      "meaning": "Ưu đãi, chiết khấu giảm giá",
      "strokes": 6,
      "radical": "亻 (Nhân đứng)",
      "example": "针对大批量订货，我们可以给予额外五个点的优惠。",
      "exampleVi": "Đối với đơn đặt hàng số lượng lớn, bên em có thể chiết khấu thêm 5% ưu đãi ạ.",
      "collocations": [
        "优惠券 (Phiếu giảm giá coupon)",
        "优惠政策 (Chính sách ưu đãi)"
      ],
      "tip": "Dành sự đối đãi tốt đẹp (Ưu 优) và ban tặng ân huệ (Huệ 惠) cho khách hàng thân thiết."
    },
    {
      "id": "dict-52",
      "hanzi": "反馈",
      "pinyin": "fǎnkuì",
      "hanviet": "Phản quỹ",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 5",
      "meaning": "Phản hồi, góp ý từ khách hàng",
      "strokes": 4,
      "radical": "又 (Hựu)",
      "example": "我们会认真收集并分析每一位用户的宝贵反馈。",
      "exampleVi": "Chúng tôi sẽ nghiêm túc thu thập và phân tích từng phản hồi quý giá của người dùng.",
      "collocations": [
        "客户反馈 (Phản hồi khách hàng)",
        "及时反馈 (Phản hồi kịp thời)"
      ],
      "tip": "Nhận thông tin và phản hồi trả lại một cách chu đáo, kịp thời."
    },
    {
      "id": "dict-53",
      "hanzi": "交接",
      "pinyin": "jiāojiē",
      "hanviet": "Giao tiếp",
      "wordType": "Động từ",
      "hsk": "HSK 5",
      "meaning": "Bàn giao (công việc, tài sản)",
      "strokes": 6,
      "radical": "亠 (Đầu)",
      "example": "请假前请务必把手头紧急的工作做好交接。",
      "exampleVi": "Trước khi nghỉ phép xin hãy bàn giao thật chu đáo những việc gấp trong tay.",
      "collocations": [
        "工作交接 (Bàn giao công việc)",
        "交接单 (Biên bản bàn giao)"
      ],
      "tip": "Giao lại trách nhiệm và tiếp nhận nhiệm vụ mượt mà không đứt gãy."
    },
    {
      "id": "dict-54",
      "hanzi": "效率",
      "pinyin": "xiàolǜ",
      "hanviet": "Hiệu suất",
      "wordType": "Danh từ",
      "hsk": "HSK 5",
      "meaning": "Hiệu suất, năng suất làm việc",
      "strokes": 10,
      "radical": "攵 (Phác)",
      "example": "掌握好快捷键和实用工具能大大提升工作效率。",
      "exampleVi": "Nắm vững phím tắt và công cụ hữu ích sẽ giúp nâng cao hiệu suất công việc rất nhiều.",
      "collocations": [
        "高效 (Hiệu suất cao)",
        "效率低下 (Năng suất kém)"
      ],
      "tip": "Làm ít tốn sức mà gặt hái kết quả gấp bội lần."
    },
    {
      "id": "dict-55",
      "hanzi": "核心",
      "pinyin": "héxīn",
      "hanviet": "Hạch tâm",
      "wordType": "Danh từ/Tính từ",
      "hsk": "HSK 5",
      "meaning": "Cốt lõi, trọng tâm, hạt nhân",
      "strokes": 10,
      "radical": "木 (Mộc)",
      "example": "品质与诚信是我们品牌最核心的竞争优势。",
      "exampleVi": "Chất lượng và chữ tín là lợi thế cạnh tranh cốt lõi nhất của thương hiệu chúng tôi.",
      "collocations": [
        "核心价值 (Giá trị cốt lõi)",
        "核心技术 (Công nghệ lõi)",
        "核心团队 (Đội ngũ nòng cốt)"
      ],
      "tip": "Hạt nhân (Hạch 核) nằm sâu ở chính giữa tâm hồn (Tâm 心)."
    },
    {
      "id": "dict-56",
      "hanzi": "共赢",
      "pinyin": "gòngyíng",
      "hanviet": "Cộng doanh",
      "wordType": "Động từ/Tính từ",
      "hsk": "HSK 6",
      "meaning": "Đôi bên cùng thắng (Win-Win)",
      "strokes": 6,
      "radical": "八 (Bát)",
      "example": "互利共赢才是商业长远发展的基石。",
      "exampleVi": "Đôi bên cùng có lợi và cùng chiến thắng mới là nền tảng cho sự phát triển thương mại lâu dài.",
      "collocations": [
        "合作共赢 (Hợp tác cùng thắng)",
        "共赢模式 (Mô hình win-win)"
      ],
      "tip": "Không ai bị thua thiệt, hai bên cùng mở tiệc ăn mừng chiến thắng."
    },
    {
      "id": "dict-57",
      "hanzi": "格局",
      "pinyin": "géjú",
      "hanviet": "Cách cục",
      "wordType": "Danh từ",
      "hsk": "HSK 6",
      "meaning": "Tầm nhìn, tầm vóc, bố cục tư duy",
      "strokes": 10,
      "radical": "木 (Mộc)",
      "example": "心胸宽广、眼界高远的人，往往具有大格局。",
      "exampleVi": "Người có tấm lòng rộng mở, tầm nhìn xa rộng thường sở hữu tầm vóc lớn lao.",
      "collocations": [
        "大格局 (Tầm vóc lớn)",
        "国际格局 (Cục diện quốc tế)"
      ],
      "tip": "Bố cục của tư duy quyết định đỉnh cao của cuộc đời."
    },
    {
      "id": "dict-58",
      "hanzi": "卓越",
      "pinyin": "zhuóyuè",
      "hanviet": "Trác việt",
      "wordType": "Tính từ",
      "hsk": "HSK 6",
      "meaning": "Xuất sắc vượt trội, trác việt",
      "strokes": 8,
      "radical": "十 (Thập)",
      "example": "追求卓越，成功就会在不经意间追随你。",
      "exampleVi": "Khi bạn theo đuổi sự xuất sắc kiệt xuất, thành công sẽ tự khắc tìm đến bạn.",
      "collocations": [
        "卓越贡献 (Cống hiến trác việt)",
        "卓越表现 (Biểu hiện xuất chúng)"
      ],
      "tip": "Vượt lên trên mức bình thường, đứng sừng sững giữa đỉnh cao."
    },
    {
      "id": "dict-59",
      "hanzi": "策略",
      "pinyin": "cèlüè",
      "hanviet": "Sách lược",
      "wordType": "Danh từ",
      "hsk": "HSK 6",
      "meaning": "Sách lược, chiến lược thông minh",
      "strokes": 12,
      "radical": "竹 (Trúc)",
      "example": "灵活调整营销策略是应对市场变化的关键。",
      "exampleVi": "Linh hoạt điều chỉnh chiến lược tiếp thị là chìa khóa then chốt để ứng phó với biến động thị trường.",
      "collocations": [
        "经营策略 (Sách lược kinh doanh)",
        "制定策略 (Hoạch định chiến lược)"
      ],
      "tip": "Kế sách ghi trên thẻ tre (Trúc 竹) dẫn dắt mưu lược đánh đâu thắng đó."
    },
    {
      "id": "dict-60",
      "hanzi": "品牌",
      "pinyin": "pǐnpái",
      "hanviet": "Phẩm bài",
      "wordType": "Danh từ",
      "hsk": "HSK 6",
      "meaning": "Thương hiệu, nhãn hiệu uy tín",
      "strokes": 9,
      "radical": "口 (Khẩu)",
      "example": "打造一个受人尊敬的知名品牌需要数年沉淀。",
      "exampleVi": "Xây dựng một thương hiệu nổi tiếng được người người kính trọng đòi hỏi sự tích lũy qua nhiều năm.",
      "collocations": [
        "品牌形象 (Hình ảnh thương hiệu)",
        "知名品牌 (Thương hiệu có tiếng)",
        "品牌效应 (Hiệu ứng thương hiệu)"
      ],
      "tip": "Ba cái miệng (Phẩm 品) tấm tắc ngợi khen tạo nên tấm biển vàng thương hiệu (Bài 牌)."
    },
    {
      "id": "dict-61",
      "hanzi": "包邮",
      "pinyin": "bāoyóu",
      "hanviet": "Bao bưu",
      "wordType": "Động từ/Tính từ",
      "hsk": "Đời sống",
      "meaning": "Freeship, miễn phí tiền vận chuyển",
      "strokes": 5,
      "radical": "勹 (Bao)",
      "example": "亲，全场满99元包邮哦！",
      "exampleVi": "Nàng ơi, toàn shop đơn từ 99 tệ là được freeship tận cửa nha!",
      "collocations": [
        "全国包邮 (Freeship toàn quốc)",
        "包邮到家 (Miễn phí gửi tận nhà)"
      ],
      "tip": "Chủ shop Taobao bao trọn chi phí bưu chính (Bưu 邮) cho khách hàng."
    },
    {
      "id": "dict-62",
      "hanzi": "发货",
      "pinyin": "fāhuò",
      "hanviet": "Phát hóa",
      "wordType": "Động từ",
      "hsk": "Đời sống",
      "meaning": "Giao hàng, xuất kho chuyển phát",
      "strokes": 5,
      "radical": "又 (Hựu)",
      "example": "请问老板今天下单什么时候能发货？",
      "exampleVi": "Xin hỏi chủ shop ơi hôm nay em chốt đơn thì khi nào hàng được gửi đi ạ?",
      "collocations": [
        "已发货 (Đã phát hàng)",
        "发货速度 (Tốc độ giao hàng)",
        "尽快发货 (Phát hàng sớm nhất có thể)"
      ],
      "tip": "Xuất kho món hàng để shipper mang niềm vui đến tay bạn."
    },
    {
      "id": "dict-63",
      "hanzi": "优惠券",
      "pinyin": "yōuhuìquàn",
      "hanviet": "Ưu đãi khoán",
      "wordType": "Danh từ",
      "hsk": "Đời sống",
      "meaning": "Mã giảm giá, voucher khuyến mãi",
      "strokes": 6,
      "radical": "亻 (Nhân đứng)",
      "example": "别忘了先领大额优惠券再下单付款哦！",
      "exampleVi": "Đừng quên vào lưu voucher giảm giá khủng rồi hẵng bấm thanh toán nha!",
      "collocations": [
        "领券 (Lưu mã voucher)",
        "立减券 (Phiếu giảm trừ ngay)",
        "无门槛券 (Voucher không giới hạn đơn)"
      ],
      "tip": "Tấm phiếu ma thuật giúp nàng tiết kiệm cả núi tiền khi săn sale."
    },
    {
      "id": "dict-64",
      "hanzi": "好评",
      "pinyin": "hǎopíng",
      "hanviet": "Hảo bình",
      "wordType": "Danh từ/Động từ",
      "hsk": "Đời sống",
      "meaning": "Đánh giá 5 sao, lời khen tốt",
      "strokes": 6,
      "radical": "女 (Nữ)",
      "example": "质量很好，版型超正，必须给全五星好评！",
      "exampleVi": "Chất vải xịn lắm, form dáng chuẩn đét, nhất định phải vote 5 sao khen shop!",
      "collocations": [
        "好评如潮 (Khen ngợi nườm nượp)",
        "全五星好评 (Đánh giá 5 sao trọn vẹn)"
      ],
      "tip": "Đánh giá tốt đẹp bằng cả chữ Hảo (好) và chữ Bình (评)."
    },
    {
      "id": "dict-65",
      "hanzi": "口红",
      "pinyin": "kǒuhóng",
      "hanviet": "Khẩu hồng",
      "wordType": "Danh từ",
      "hsk": "Làm đẹp",
      "meaning": "Son môi",
      "strokes": 3,
      "radical": "口 (Khẩu)",
      "example": "这支口红的颜色非常显白，很适合你。",
      "exampleVi": "Màu son này tôn da trắng sáng cực kỳ, hợp với nàng lắm luôn á.",
      "collocations": [
        "涂口红 (Thoa son môi)",
        "哑光口红 (Son kem lì matte)",
        "滋润口红 (Son dưỡng ẩm có màu)"
      ],
      "tip": "Khẩu (口 - miệng) tô màu Hồng (红) rạng ngời tươi thắm."
    },
    {
      "id": "dict-66",
      "hanzi": "防晒",
      "pinyin": "fángshài",
      "hanviet": "Phòng sái",
      "wordType": "Động từ/Danh từ",
      "hsk": "Làm đẹp",
      "meaning": "Chống nắng, bảo vệ da",
      "strokes": 6,
      "radical": "阝 (Phụ)",
      "example": "出门前千万别忘了涂防晒霜哦！",
      "exampleVi": "Trước khi ra ngoài tuyệt đối đừng quên thoa kem chống nắng nha nàng!",
      "collocations": [
        "防晒霜 (Kem chống nắng)",
        "防晒衣 (Áo khoác chống nắng)",
        "物理防晒 (Chống nắng vật lý)"
      ],
      "tip": "Phòng thủ (Phòng 防) trước ánh nắng mặt trời chói chang (Sái 晒)."
    },
    {
      "id": "dict-67",
      "hanzi": "裙子",
      "pinyin": "qúnzi",
      "hanviet": "Quần tử",
      "wordType": "Danh từ",
      "hsk": "Thời trang",
      "meaning": "Váy, đầm nữ tính",
      "strokes": 11,
      "radical": "衤 (Y)",
      "example": "这条碎花连衣裙穿在你身上仙气飘飘！",
      "exampleVi": "Chiếc đầm hoa nhí này nàng diện lên trông tiên khí ngút ngàn luôn!",
      "collocations": [
        "连衣裙 (Váy liền thân)",
        "百褶裙 (Váy xếp ly)",
        "长裙 (Váy dáng dài)"
      ],
      "tip": "Có bộ Y (衤 - vải vóc quần áo) kết hợp chữ Quân (quân tử, duyên dáng)."
    },
    {
      "id": "dict-68",
      "hanzi": "气质",
      "pinyin": "qìzhì",
      "hanviet": "Khí chất",
      "wordType": "Danh từ",
      "hsk": "Khen ngợi",
      "meaning": "Khí chất, thần thái cao sang",
      "strokes": 4,
      "radical": "气 (Khí)",
      "example": "你今天这一身搭配特别显气质。",
      "exampleVi": "Bộ đồ hôm nay nàng phối trông thần thái ngút ngàn và sang trọng ghê á.",
      "collocations": [
        "有气质 (Có khí chất)",
        "优雅气质 (Khí chất thanh lịch)",
        "独特气质 (Khí chất độc đáo)"
      ],
      "tip": "Thần thái toát ra từ sự tự tin, tri thức và vẻ đẹp tâm hồn."
    },
    {
      "id": "dict-69",
      "hanzi": "温柔",
      "pinyin": "wēnróu",
      "hanviet": "Ôn nhu",
      "wordType": "Tính từ",
      "hsk": "Khen ngợi",
      "meaning": "Dịu dàng, hiền thục, ngọt ngào",
      "strokes": 12,
      "radical": "氵 (Thủy)",
      "example": "温柔是这世间最强大的治愈力量。",
      "exampleVi": "Dịu dàng chính là sức mạnh chữa lành tuyệt vời nhất trên cõi đời này.",
      "collocations": [
        "温柔似水 (Dịu dàng như làn nước)",
        "温柔体贴 (Dịu dàng chu đáo)"
      ],
      "tip": "Làn nước ấm áp (Ôn 温) và cành liễu mềm mại (Nhu 柔)."
    },
    {
      "id": "dict-70",
      "hanzi": "精致",
      "pinyin": "jīngzhì",
      "hanviet": "Tinh trí",
      "wordType": "Tính từ",
      "hsk": "Khen ngợi",
      "meaning": "Tinh xảo, tinh tế, chỉn chu thanh lịch",
      "strokes": 14,
      "radical": "米 (Mễ)",
      "example": "做一个精致独立的现代女孩，闪闪发光。",
      "exampleVi": "Làm một cô gái tinh tế, độc lập và luôn tỏa sáng rạng ngời.",
      "collocations": [
        "精致女孩 (Cô gái tinh tế)",
        "精致点心 (Bánh ngọt tinh xảo)"
      ],
      "tip": "Tỉ mỉ chắt lọc từng hạt gạo ngọc (Mễ 米) đạt đến đỉnh cao tinh tế."
    },
    {
      "id": "dict-71",
      "hanzi": "火锅",
      "pinyin": "huǒguō",
      "hanviet": "Hỏa oa",
      "wordType": "Danh từ",
      "hsk": "Ẩm thực",
      "meaning": "Lẩu (Lẩu cay Tứ Xuyên, lẩu Haidilao)",
      "strokes": 4,
      "radical": "火 (Hỏa)",
      "example": "天冷的时候，和喜欢的人一起吃海底捞火锅最幸福了！",
      "exampleVi": "Trời lạnh được cùng người mình thương xì xụp ăn lẩu Haidilao là hạnh phúc nhất trần đời!",
      "collocations": [
        "海底捞 (Haidilao)",
        "麻辣火锅 (Lẩu cay tê Ma La)",
        "番茄锅 (Lẩu cà chua)"
      ],
      "tip": "Nồi kim loại (Oa 锅) đặt trên ngọn lửa hồng (Hỏa 火) sôi sùng sục."
    },
    {
      "id": "dict-72",
      "hanzi": "点菜",
      "pinyin": "diǎncài",
      "hanviet": "Điểm thái",
      "wordType": "Động từ",
      "hsk": "Ẩm thực",
      "meaning": "Gọi món, order thức ăn",
      "strokes": 9,
      "radical": "灬 (Hỏa)",
      "example": "服务员，我们准备好点菜了，请拿一下菜单。",
      "exampleVi": "Phục vụ ơi, bàn mình chọn món xong rồi, cho mình gọi món với nhé.",
      "collocations": [
        "菜单 (Menu thực đơn)",
        "招牌菜 (Món tủ, món signature)"
      ],
      "tip": "Lấy tay chỉ điểm (Điểm 点) những món ăn ngon lành trên thực đơn."
    },
    {
      "id": "dict-73",
      "hanzi": "买单",
      "pinyin": "mǎidān",
      "hanviet": "Mãi đơn",
      "wordType": "Động từ",
      "hsk": "Ẩm thực",
      "meaning": "Tính tiền, thanh toán hóa đơn",
      "strokes": 6,
      "radical": "乙 (Ất)",
      "example": "服务员，这桌买单，可以扫微信支付吗？",
      "exampleVi": "Phục vụ ơi cho bàn này thanh toán, có thể quét WeChat Pay được không ạ?",
      "collocations": [
        "结账 (Thanh toán)",
        "扫码支付 (Quét mã thanh toán)"
      ],
      "tip": "Trả tiền để lấy hóa đơn biên lai (Đơn 单) ra về."
    },
    {
      "id": "dict-74",
      "hanzi": "微辣",
      "pinyin": "wēilà",
      "hanviet": "Vi lạt",
      "wordType": "Tính từ",
      "hsk": "Ẩm thực",
      "meaning": "Cay the the nhẹ nhàng (ít cay)",
      "strokes": 13,
      "radical": "彳 (Xích)",
      "example": "老板，我不太能吃辣，请做微辣就好。",
      "exampleVi": "Chủ quán ơi em không ăn cay giỏi lắm đâu, làm hơi cay the thôi nha.",
      "collocations": [
        "不辣 (Không cay)",
        "中辣 (Cay vừa)",
        "特辣 (Siêu cay)"
      ],
      "tip": "Chữ 'Vi' (微) là một chút xíu xiu, vừa đủ đậm đà thơm ngon."
    },
    {
      "id": "dict-75",
      "hanzi": "打包",
      "pinyin": "dǎbāo",
      "hanviet": "Đả bao",
      "wordType": "Động từ",
      "hsk": "Ẩm thực",
      "meaning": "Đóng gói mang về (take-away / gói thức ăn dư)",
      "strokes": 5,
      "radical": "扌 (Thủ)",
      "example": "吃不完的菜请帮我打包带走，不要浪费。",
      "exampleVi": "Món ăn chưa hết phiền bạn gói mang về giúp mình nha, đừng lãng phí nè.",
      "collocations": [
        "打包盒 (Hộp mang về)",
        "外卖 (Đồ ăn giao tận nơi)"
      ],
      "tip": "Dùng tay gói ghém gọn gàng mang về nhà thưởng thức tiếp."
    },
    {
      "id": "dict-76",
      "hanzi": "朋友",
      "pinyin": "péngyou",
      "hanviet": "Bằng hữu",
      "wordType": "Danh từ",
      "hsk": "HSK 1",
      "meaning": "Bạn bè, tri kỷ",
      "strokes": 8,
      "radical": "月 (Nguyệt)",
      "example": "我们是一辈子的好朋友。",
      "exampleVi": "Chúng mình là những người bạn tốt của nhau cả một đời.",
      "collocations": [
        "老朋友 (Bạn cũ)",
        "交朋友 (Kết bạn)"
      ],
      "tip": "Hai vầng trăng (Nguyệt 月) song hành cùng nhau qua năm tháng."
    },
    {
      "id": "dict-77",
      "hanzi": "时间",
      "pinyin": "shíjiān",
      "hanviet": "Thời gian",
      "wordType": "Danh từ",
      "hsk": "HSK 1",
      "meaning": "Thời gian, thì giờ",
      "strokes": 4,
      "radical": "日 (Nhật)",
      "example": "时间过得真快，转眼又是一年。",
      "exampleVi": "Thời gian trôi qua nhanh thật đấy, chớp mắt lại một năm rồi.",
      "collocations": [
        "抓紧时间 (Tranh thủ thời gian)",
        "有时间 (Có thời gian rảnh)"
      ],
      "tip": "Mặt trời (Nhật 日) đo bóng thời gian trôi qua cửa sổ (Gian 间)."
    },
    {
      "id": "dict-78",
      "hanzi": "工作",
      "pinyin": "gōngzuò",
      "hanviet": "Công tác",
      "wordType": "Danh từ/Động từ",
      "hsk": "HSK 1",
      "meaning": "Công việc, làm việc",
      "strokes": 3,
      "radical": "工 (Công)",
      "example": "热爱你的工作，工作也会回报你。",
      "exampleVi": "Yêu say đắm công việc của bạn, công việc cũng sẽ đền đáp xứng đáng cho bạn.",
      "collocations": [
        "找工作 (Tìm việc)",
        "工作环境 (Môi trường làm việc)"
      ],
      "tip": "Dụng cụ đo đạc (Công 工) kết hợp bàn tay con người (Tác 作)."
    },
    {
      "id": "dict-79",
      "hanzi": "电脑",
      "pinyin": "diànnǎo",
      "hanviet": "Điện não",
      "wordType": "Danh từ",
      "hsk": "HSK 1",
      "meaning": "Máy vi tính, laptop",
      "strokes": 5,
      "radical": "田 (Điền)",
      "example": "上班第一件事就是打开电脑查看邮件。",
      "exampleVi": "Đến công ty việc đầu tiên là mở máy tính kiểm tra email công việc.",
      "collocations": [
        "笔记本电脑 (Laptop)",
        "平板电脑 (Máy tính bảng)"
      ],
      "tip": "Bộ não (Não 脑) vận hành bằng dòng điện (Điện 电) thông minh."
    },
    {
      "id": "dict-80",
      "hanzi": "手机",
      "pinyin": "shǒujī",
      "hanviet": "Thủ cơ",
      "wordType": "Danh từ",
      "hsk": "HSK 1",
      "meaning": "Điện thoại di động",
      "strokes": 4,
      "radical": "手 (Thủ)",
      "example": "随手给手机充上电，安全感满满。",
      "exampleVi": "Tiện tay sạc đầy pin điện thoại, cảm giác an tâm ngập tràn.",
      "collocations": [
        "手机壳 (Ốp lưng điện thoại)",
        "智能手机 (Smartphone)"
      ],
      "tip": "Thiết bị máy móc (Cơ 机) cầm gọn trong lòng bàn tay (Thủ 手)."
    },
    {
      "id": "dict-81",
      "hanzi": "环境",
      "pinyin": "huánjìng",
      "hanviet": "Hoàn cảnh",
      "wordType": "Danh từ",
      "hsk": "HSK 3",
      "meaning": "Môi trường (tự nhiên, làm việc)",
      "strokes": 8,
      "radical": "王 (Ngọc)",
      "example": "一个温馨舒适的工作环境让人心情愉悦。",
      "exampleVi": "Một môi trường làm việc ấm cúng dễ chịu sẽ khiến tâm trạng người ta vui vẻ.",
      "collocations": [
        "工作环境 (Môi trường làm việc)",
        "保护环境 (Bảo vệ môi trường)"
      ],
      "tip": "Vòng cung ngọc ngà (Hoàn 环) bao quanh ranh giới (Cảnh 境)."
    },
    {
      "id": "dict-82",
      "hanzi": "保护",
      "pinyin": "bǎohù",
      "hanviet": "Bảo hộ",
      "wordType": "Động từ",
      "hsk": "HSK 3",
      "meaning": "Bảo vệ, gìn giữ",
      "strokes": 9,
      "radical": "亻 (Nhân đứng)",
      "example": "保护好自己的初心与善良。",
      "exampleVi": "Bảo vệ thật tốt trái tim ban sơ và sự lương thiện của chính mình.",
      "collocations": [
        "自我保护 (Tự bảo vệ)",
        "保护视力 (Bảo vệ thị lực)"
      ],
      "tip": "Người mẹ bồng bế đứa trẻ (Bảo 保) che chở nâng niu (Hộ 护)."
    },
    {
      "id": "dict-83",
      "hanzi": "坚持",
      "pinyin": "jiānchí",
      "hanviet": "Kiên trì",
      "wordType": "Động từ",
      "hsk": "HSK 4",
      "meaning": "Kiên trì, bền chí",
      "strokes": 9,
      "radical": "土 (Thổ)",
      "example": "只要坚持不懈，奇迹就会发生。",
      "exampleVi": "Chỉ cần kiên trì không ngừng nghỉ, kỳ tích nhất định sẽ xuất hiện.",
      "collocations": [
        "坚持到底 (Kiên trì tới cùng)",
        "坚持原则 (Giữ vững nguyên tắc)"
      ],
      "tip": "Vững như đá tảng, nắm chắc trong lòng bàn tay."
    },
    {
      "id": "dict-84",
      "hanzi": "适应",
      "pinyin": "shìyìng",
      "hanviet": "Thích ứng",
      "wordType": "Động từ",
      "hsk": "HSK 4",
      "meaning": "Thích nghi, quen dần với hoàn cảnh mới",
      "strokes": 9,
      "radical": "辶 (Sước)",
      "example": "刚到一个新环境，需要一点时间去适应。",
      "exampleVi": "Vừa đến một môi trường mới, cần chút thời gian để thích nghi dần dần.",
      "collocations": [
        "适应环境 (Thích nghi môi trường)",
        "适应能力 (Khả năng thích ứng)"
      ],
      "tip": "Dấn bước đi (辶) phù hợp với thời thế chung quanh."
    },
    {
      "id": "dict-85",
      "hanzi": "建议",
      "pinyin": "jiànyì",
      "hanviet": "Kiến nghị",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 4",
      "meaning": "Đề xuất, kiến nghị, lời khuyên",
      "strokes": 8,
      "radical": "廴 (Dẫn)",
      "example": "感谢您的宝贵建议，我们立即改进！",
      "exampleVi": "Cảm ơn lời khuyên quý báu của anh/chị, bên em sẽ tiến hành cải tiến ngay lập tức!",
      "collocations": [
        "提建议 (Đưa ra đề xuất)",
        "采纳建议 (Tiếp thu góp ý)"
      ],
      "tip": "Xây dựng (Kiến 建) ý kiến (Nghị 议) xây đắp tương lai."
    },
    {
      "id": "dict-86",
      "hanzi": "报关",
      "pinyin": "bàoguān",
      "hanviet": "Báo quan",
      "wordType": "Động từ",
      "hsk": "HSK 5",
      "meaning": "Khai báo hải quan (xuất nhập khẩu)",
      "strokes": 7,
      "radical": "扌 (Thủ)",
      "example": "这批货物正在海关办理报关手续。",
      "exampleVi": "Lô hàng này hiện đang làm thủ tục khai báo hải quan.",
      "collocations": [
        "报关单 (Tờ khai hải quan)",
        "清关 (Thông quan)",
        "报关行 (Đại lý hải quan)"
      ],
      "tip": "Khai báo (Báo 报) với cửa ải biên giới (Quan 关)."
    },
    {
      "id": "dict-87",
      "hanzi": "提单",
      "pinyin": "tídān",
      "hanviet": "Đề đơn",
      "wordType": "Danh từ",
      "hsk": "HSK 5",
      "meaning": "Vận đơn đường biển (Bill of Lading - B/L)",
      "strokes": 12,
      "radical": "扌 (Thủ)",
      "example": "收到正本提单后，买方即可到港提货。",
      "exampleVi": "Sau khi nhận được vận đơn gốc, bên mua có thể ra cảng lấy hàng ngay.",
      "collocations": [
        "海运提单 (Vận đơn đường biển)",
        "正本提单 (Vận đơn gốc)",
        "电放提单 (Telex release B/L)"
      ],
      "tip": "Giấy tờ biên lai (Đơn 单) để xách lấy (Đề 提) hàng hóa ra khỏi cảng."
    },
    {
      "id": "dict-88",
      "hanzi": "信用证",
      "pinyin": "xìnyòngzhèng",
      "hanviet": "Tín dụng chứng",
      "wordType": "Danh từ",
      "hsk": "HSK 5",
      "meaning": "Thư tín dụng ngân hàng (L/C)",
      "strokes": 9,
      "radical": "亻 (Nhân đứng)",
      "example": "为确保资金安全，双方同意采用即期不可撤销信用证结算。",
      "exampleVi": "Để đảm bảo an toàn vốn, đôi bên thống nhất thanh toán bằng thư tín dụng L/C không hủy ngang trả ngay.",
      "collocations": [
        "开立信用证 (Mở thư tín dụng L/C)",
        "信用证条款 (Điều khoản L/C)"
      ],
      "tip": "Chứng chỉ ngân hàng bảo chứng bằng chữ Tín (信)."
    },
    {
      "id": "dict-89",
      "hanzi": "发票",
      "pinyin": "fāpiào",
      "hanviet": "Phát phiếu",
      "wordType": "Danh từ",
      "hsk": "HSK 5",
      "meaning": "Hóa đơn giá trị gia tăng, hóa đơn tài chính",
      "strokes": 5,
      "radical": "又 (Hựu)",
      "example": "报销差旅费时请附上正规增值税发票。",
      "exampleVi": "Khi thanh toán công tác phí xin vui lòng đính kèm hóa đơn VAT hợp lệ.",
      "collocations": [
        "开具发票 (Xuất hóa đơn)",
        "增值税发票 (Hóa đơn VAT)",
        "发票抬头 (Tên đơn vị trên hóa đơn)"
      ],
      "tip": "Phiếu xuất kho tài chính dùng để thanh toán và đối soát."
    },
    {
      "id": "dict-90",
      "hanzi": "索赔",
      "pinyin": "suǒpéi",
      "hanviet": "Tác bồi",
      "wordType": "Động từ/Danh từ",
      "hsk": "HSK 5",
      "meaning": "Khiếu nại bồi thường, đòi bồi thường",
      "strokes": 10,
      "radical": "糸 (Mịch)",
      "example": "因运输途中货物破损，买方向保险公司提出索赔。",
      "exampleVi": "Vì hàng hóa bị hư hỏng trong quá trình vận chuyển, bên mua đã đệ đơn đòi công ty bảo hiểm bồi thường.",
      "collocations": [
        "提出索赔 (Đưa ra yêu cầu bồi thường)",
        "索赔金额 (Số tiền bồi thường)",
        "理赔 (Xử lý bồi thường)"
      ],
      "tip": "Đòi hỏi (Tác 索) đền bù lại những mất mát (Bồi 赔)."
    },
    {
      "id": "dict-91",
      "hanzi": "美甲",
      "pinyin": "měijiǎ",
      "hanviet": "Mỹ giáp",
      "wordType": "Danh từ/Động từ",
      "hsk": "Làm đẹp",
      "meaning": "Làm móng, nail xinh xắn",
      "strokes": 9,
      "radical": "羊 (Dương)",
      "example": "周末和闺蜜去做了超温柔的腮红美甲！",
      "exampleVi": "Cuối tuần cùng cô bạn thân đi làm bộ móng má hồng pastel dịu dàng xinh xỉu!",
      "collocations": [
        "美甲店 (Tiệm làm nail)",
        "做美甲 (Làm móng tay)"
      ],
      "tip": "Làm cho móng tay (Giáp 甲) trở nên lộng lẫy xinh đẹp (Mỹ 美)."
    },
    {
      "id": "dict-92",
      "hanzi": "面膜",
      "pinyin": "miànmó",
      "hanviet": "Diện mô",
      "wordType": "Danh từ",
      "hsk": "Làm đẹp",
      "meaning": "Mặt nạ dưỡng da",
      "strokes": 9,
      "radical": "面 (Diện)",
      "example": "洗完澡敷一片补水面膜，皮肤水嫩嫩的。",
      "exampleVi": "Tắm xong đắp một miếng mặt nạ cấp ẩm, da dẻ mịn màng căng mọng thích ghê.",
      "collocations": [
        "敷面膜 (Đắp mặt nạ)",
        "补水面膜 (Mặt nạ cấp nước)"
      ],
      "tip": "Tấm màng mỏng (Mô 膜) êm ái đắp lên khuôn mặt ngọc (Diện 面)."
    },
    {
      "id": "dict-93",
      "hanzi": "拍照",
      "pinyin": "pāizhào",
      "hanviet": "Phách chiếu",
      "wordType": "Động từ",
      "hsk": "Đời sống",
      "meaning": "Chụp ảnh, selfie sống ảo",
      "strokes": 8,
      "radical": "扌 (Thủ)",
      "example": "这里的风景太美了，快来帮我拍几张照！",
      "exampleVi": "Cảnh ở đây nên thơ quá, mau lại đây chụp cho mình vài tấm ảnh xinh nhé!",
      "collocations": [
        "自拍 (Chụp ảnh selfie)",
        "拍照打卡 (Chụp ảnh check-in)"
      ],
      "tip": "Bấm máy tách (Phách 拍) bắt trọn ánh sáng rực rỡ (Chiếu 照)."
    },
    {
      "id": "dict-94",
      "hanzi": "甜点",
      "pinyin": "tiándiǎn",
      "hanviet": "Điềm điểm",
      "wordType": "Danh từ",
      "hsk": "Ẩm thực",
      "meaning": "Món tráng miệng, bánh ngọt",
      "strokes": 11,
      "radical": "甘 (Cam)",
      "example": "女孩子有两个胃，一个用来吃饭，一个专门留给甜点。",
      "exampleVi": "Con gái có tới hai chiếc dạ dày: một cái để ăn cơm, cái còn lại để dành riêng cho đồ ngọt!",
      "collocations": [
        "法式甜点 (Bánh ngọt kiểu Pháp)",
        "甜品店 (Tiệm tráng miệng)"
      ],
      "tip": "Điểm tâm ngọt ngào làm tan chảy mọi mệt mỏi."
    },
    {
      "id": "dict-95",
      "hanzi": "撒娇",
      "pinyin": "sājiāo",
      "hanviet": "Tát kiều",
      "wordType": "Động từ",
      "hsk": "Thả thính",
      "meaning": "Làm nũng, nhõng nhẽo đáng yêu",
      "strokes": 15,
      "radical": "扌 (Thủ)",
      "example": "会撒娇的女孩最好命，软萌又惹人怜爱。",
      "exampleVi": "Cô gái biết làm nũng thường gặp nhiều may mắn, vừa mềm mại vừa khiến người ta yêu thương.",
      "collocations": [
        "向男友撒娇 (Làm nũng với bạn trai)",
        "撒个娇 (Làm nũng một tí)"
      ],
      "tip": "Giơ bàn tay nhỏ (扌) phô bày nét yêu kiều duyên dáng (Kiều 娇)."
    },
    {
      "id": "dict-96",
      "hanzi": "心动",
      "pinyin": "xīndòng",
      "hanviet": "Tâm động",
      "wordType": "Động từ/Tính từ",
      "hsk": "Thả thính",
      "meaning": "Rung động, xao xuyến trái tim",
      "strokes": 4,
      "radical": "心 (Tâm)",
      "example": "遇见你的那一刻，我第一次体会到了什么是心动。",
      "exampleVi": "Khoảnh khắc chạm ánh mắt bạn, lần đầu tiên mình cảm nhận được thế nào là rung động.",
      "collocations": [
        "令人心动 (Khiến người ta rung động)",
        "心动的感觉 (Cảm giác xao xuyến)"
      ],
      "tip": "Trái tim (Tâm 心) bỗng rộn ràng loạn nhịp (Động 动)."
    },
    {
      "id": "dict-97",
      "hanzi": "抱抱",
      "pinyin": "bàobao",
      "hanviet": "Bão bão",
      "wordType": "Động từ",
      "hsk": "Thả thính",
      "meaning": "Ôm một cái nào, ôm ấp ấm áp",
      "strokes": 8,
      "radical": "扌 (Thủ)",
      "example": "今天辛苦啦，快过来给你一个大大的抱抱！",
      "exampleVi": "Hôm nay vất vả rồi nha, mau lại đây ôm một cái thật to cho ấm nào!",
      "collocations": [
        "求抱抱 (Đòi ôm)",
        "抱在怀里 (Ôm vào lòng)"
      ],
      "tip": "Dang rộng hai cánh tay (扌) ôm trọn người mình yêu vào lòng."
    },
    {
      "id": "dict-98",
      "hanzi": "熬夜",
      "pinyin": "áoyè",
      "hanviet": "Ngao dạ",
      "wordType": "Động từ",
      "hsk": "Đời sống",
      "meaning": "Thức khuya, cày đêm",
      "strokes": 14,
      "radical": "灬 (Hỏa)",
      "example": "经常熬夜对皮肤和黑眼圈超级不友好哦！",
      "exampleVi": "Thường xuyên thức khuya rất hại da và dễ sinh quầng thâm mắt đấy nha!",
      "collocations": [
        "熬夜加班 (Thức đêm tăng ca)",
        "拒绝熬夜 (Nói không với thức khuya)"
      ],
      "tip": "Đun nấu qua đêm dài (Dạ 夜) hao tổn nguyên khí."
    },
    {
      "id": "dict-99",
      "hanzi": "打卡",
      "pinyin": "dǎkǎ",
      "hanviet": "Đả tạp",
      "wordType": "Động từ",
      "hsk": "Đời sống",
      "meaning": "Check-in (điểm danh công ty, check-in quán cafe)",
      "strokes": 5,
      "radical": "扌 (Thủ)",
      "example": "每天坚持在Mochi打卡学习中文！",
      "exampleVi": "Mỗi ngày kiên trì check-in học tiếng Trung trên Mochi!",
      "collocations": [
        "上班打卡 (Chấm công vào ca)",
        "网红打卡地 (Địa điểm check-in hot trend)"
      ],
      "tip": "Quẹt thẻ (Tạp 卡) ghi dấu sự hiện diện siêng năng của bản thân."
    },
    {
      "id": "dict-100",
      "hanzi": "治愈",
      "pinyin": "zhìyù",
      "hanviet": "Trị dũ",
      "wordType": "Động từ/Tính từ",
      "hsk": "Khen ngợi",
      "meaning": "Chữa lành, ấm áp xoa dịu tâm hồn",
      "strokes": 8,
      "radical": "氵 (Thủy)",
      "example": "看见你灿烂的笑容，感觉一整天的疲惫都被治愈了。",
      "exampleVi": "Trông thấy nụ cười rạng rỡ của bạn, cảm giác bao mệt mỏi cả ngày đều tan biến như được chữa lành.",
      "collocations": [
        "治愈系 (Phong cách chữa lành ấm áp)",
        "被治愈了 (Được chữa lành)"
      ],
      "tip": "Làn nước cam lộ gột rửa vết thương, trả lại sự bình an tuyệt đối."
    },
    {
      "id": "dict-101",
      "hanzi": "磋商",
      "pinyin": "cuō shāng",
      "hanviet": "Tha thương",
      "wordType": "Đàm phán",
      "hsk": "HSK 6",
      "meaning": "Bàn bạc kỹ lưỡng, thương lượng đàm phán chính thức",
      "strokes": 26,
      "radical": "石 (Thạch)",
      "example": "双方就合同条款进行了深入磋商，最终达成共识。",
      "exampleVi": "Đôi bên đã tiến hành đàm phán sâu sắc về các điều khoản hợp đồng và cuối cùng đạt được đồng thuận.",
      "collocations": [
            "深度磋商 (Đàm phán sâu)",
            "多边磋商 (Hội đàm đa phương)",
            "友好磋商 (Thương lượng hòa giải)"
      ],
      "tip": "Gồm chữ 'Tha' (mài giũa) và chữ 'Thương' (bàn bạc) -> Cùng nhau mài giũa ý kiến để đi đến giải pháp tối ưu!"
},
    {
      "id": "dict-102",
      "hanzi": "审慎",
      "pinyin": "shěn shèn",
      "hanviet": "Thẩm thận",
      "wordType": "Tính từ",
      "hsk": "HSK 6",
      "meaning": "Cẩn trọng, thận trọng, suy xét chu toàn",
      "strokes": 27,
      "radical": "宀 (Miên)",
      "example": "面对复杂的市场环境，管理层做出了审慎的投资决策。",
      "exampleVi": "Đối mặt với bối cảnh thị trường phức tạp, ban điều hành đã đưa ra quyết định đầu tư hết sức thận trọng.",
      "collocations": [
            "审慎乐观 (Thận trọng lạc quan)",
            "审慎考量 (Cân nhắc kỹ lưỡng)",
            "审慎态度 (Thái độ cẩn trọng)"
      ],
      "tip": "Thẩm (xem xét tường tận) + Thận (cẩn thận) -> Phong thái chín chắn của nhà lãnh đạo."
},
    {
      "id": "dict-103",
      "hanzi": "统筹",
      "pinyin": "tǒng chóu",
      "hanviet": "Thống trù",
      "wordType": "Động từ",
      "hsk": "HSK 6",
      "meaning": "Quy hoạch tổng thể, phối hợp điều phối toàn cục",
      "strokes": 26,
      "radical": "纟 (Mịch)",
      "example": "我们需要统筹兼顾各方利益，确保项目稳步推进。",
      "exampleVi": "Chúng ta cần quy hoạch tổng thể và quan tâm tới lợi ích các bên, đảm bảo dự án tiến triển vững chắc.",
      "collocations": [
            "统筹安排 (Sắp xếp tổng thể)",
            "统筹兼顾 (Cân nhắc toàn diện)",
            "统筹规划 (Quy hoạch tổng thể)"
      ],
      "tip": "Thống (nắm trọn mối) + Trù (trù liệu tính toán) -> Năng lực bao quát của người quản lý."
},
    {
      "id": "dict-104",
      "hanzi": "宏观调控",
      "pinyin": "hóng guān tiáo kòng",
      "hanviet": "Hồng quan điều khống",
      "wordType": "Thuật ngữ",
      "hsk": "HSK 7-9",
      "meaning": "Điều tiết kinh tế vĩ mô của chính phủ hoặc thể chế",
      "strokes": 39,
      "radical": "宀 (Miên)",
      "example": "国家通过财税政策实施宏观调控，稳定金融市场。",
      "exampleVi": "Nhà nước thực thi điều tiết vĩ mô thông qua chính sách tài khóa nhằm ổn định thị trường tài chính.",
      "collocations": [
            "宏观经济 (Kinh tế vĩ mô)",
            "调控手段 (Biện pháp điều tiết)",
            "微观市场 (Thị trường vi mô)"
      ],
      "tip": "Thuật ngữ then chốt trong các bản tin thời sự kinh tế của CCTV và báo chí tài chính."
},
    {
      "id": "dict-105",
      "hanzi": "互利共赢",
      "pinyin": "hù lì gòng yíng",
      "hanviet": "Hỗ lợi cộng doanh",
      "wordType": "Ngoại giao",
      "hsk": "HSK 7-9",
      "meaning": "Hợp tác đôi bên cùng có lợi (Win-Win)",
      "strokes": 31,
      "radical": "互 (Hỗ)",
      "example": "我们始终秉持互利共赢的原则，深化与各国的贸易往来。",
      "exampleVi": "Chúng tôi luôn kiên định nguyên tắc đôi bên cùng có lợi, làm sâu sắc thêm quan hệ thương mại với các quốc gia.",
      "collocations": [
            "共赢模式 (Mô hình cùng thắng)",
            "互惠互利 (Tương hỗ tương lợi)",
            "战略合作 (Hợp tác chiến lược)"
      ],
      "tip": "Khẩu hiệu ngoại giao và đàm phán hợp đồng kinh tế quốc tế quan trọng bậc nhất."
},
    {
      "id": "dict-106",
      "hanzi": "卓越",
      "pinyin": "zhuó yuè",
      "hanviet": "Trác việt",
      "wordType": "Tính từ",
      "hsk": "HSK 7-9",
      "meaning": "Xuất chúng, vượt trội, đỉnh cao phi thường",
      "strokes": 20,
      "radical": "十 (Thập)",
      "example": "凭借卓越的表现与不懈的努力，她获得了全体员工的一致赞许。",
      "exampleVi": "Nhờ vào biểu hiện xuất chúng và nỗ lực không ngừng nghỉ, cô ấy đã nhận được sự tán thưởng tuyệt đối từ toàn thể nhân viên.",
      "collocations": [
            "追求卓越 (Theo đuổi sự xuất chúng)",
            "卓越成就 (Thành tựu trác việt)",
            "卓越品质 (Chất lượng vượt trội)"
      ],
      "tip": "Từ ca ngợi đẳng cấp cao dành cho người xuất sắc nhất!"
},
    {
      "id": "dict-107",
      "hanzi": "提单",
      "pinyin": "tí dān",
      "hanviet": "Đề đơn",
      "wordType": "Logistics",
      "hsk": "Ngành nghề",
      "meaning": "Vận đơn đường biển (Bill of Lading - B/L)",
      "strokes": 20,
      "radical": "扌 (Thủ)",
      "example": "正本提单已通过顺丰寄出，请注意查收。",
      "exampleVi": "Vận đơn gốc đã được gửi chuyển phát nhanh qua SF Express, xin vui lòng kiểm tra nhận thư.",
      "collocations": [
            "海运提单 (Vận đơn đường biển)",
            "正本提单 (Vận đơn gốc Original B/L)",
            "电放提单 (Vận đơn Telex Release)"
      ],
      "tip": "Vật chứng nhận quyền sở hữu hàng hóa quan trọng nhất trong xuất nhập khẩu quốc tế."
},
    {
      "id": "dict-108",
      "hanzi": "清关",
      "pinyin": "qīng guān",
      "hanviet": "Thanh quan",
      "wordType": "Logistics",
      "hsk": "Ngành nghề",
      "meaning": "Thông quan hàng hóa xuất nhập khẩu tại hải quan (Customs Clearance)",
      "strokes": 23,
      "radical": "氵 (Thủy)",
      "example": "这批货物预计明天上午完成清关手续并安排派送。",
      "exampleVi": "Lô hàng này dự kiến sáng mai sẽ hoàn tất thủ tục thông quan và sắp xếp giao đến kho.",
      "collocations": [
            "通关顺畅 (Thông quan suôn sẻ)",
            "海关查验 (Hải quan kiểm hóa)",
            "清关延迟 (Chậm thông quan)"
      ],
      "tip": "Thanh (thanh lý sạch sẽ) + Quan (cửa khẩu hải quan) -> Giải phóng hàng hóa!"
},
    {
      "id": "dict-109",
      "hanzi": "集装箱",
      "pinyin": "jí zhuāng xiāng",
      "hanviet": "Tập trang tương",
      "wordType": "Logistics",
      "hsk": "Ngành nghề",
      "meaning": "Thùng container chở hàng hóa đường biển hoặc đường sắt",
      "strokes": 39,
      "radical": "隹 (Chuy)",
      "example": "请确认是预订20尺小柜还是40尺高柜集装箱。",
      "exampleVi": "Xin hãy xác nhận là đặt container 20 feet (tiểu quầy) hay container 40 feet cao (cao quầy).",
      "collocations": [
            "拼箱 (Hàng lẻ LCL)",
            "整箱 (Hàng nguyên container FCL)",
            "装箱单 (Bảng kê đóng gói Packing List)"
      ],
      "tip": "Tập (gom lại) + Trang (đóng gói) + Tương (thùng chứa) -> Thùng container."
},
    {
      "id": "dict-110",
      "hanzi": "带货",
      "pinyin": "dài huò",
      "hanviet": "Đái hóa",
      "wordType": "TMĐT",
      "hsk": "Ngành nghề",
      "meaning": "Bán hàng qua phát sóng trực tiếp (Livestream selling)",
      "strokes": 20,
      "radical": "巾 (Cân)",
      "example": "今晚八点主播将在直播间为玉映的品牌倾情带货！",
      "exampleVi": "Tối nay 8 giờ host sẽ livestream nhiệt tình bán hàng cho thương hiệu của Ngọc Ánh!",
      "collocations": [
            "直播带货 (Livestream bán hàng)",
            "带货一哥 (Vua livestream)",
            "带货榜单 (Bảng xếp hạng doanh số)"
      ],
      "tip": "Thuật ngữ bùng nổ nhất trên Taobao, Douyin/TikTok Trung Quốc hiện nay."
},
    {
      "id": "dict-111",
      "hanzi": "转化率",
      "pinyin": "zhuǎn huà lǜ",
      "hanviet": "Chuyển hóa suất",
      "wordType": "TMĐT",
      "hsk": "Ngành nghề",
      "meaning": "Tỷ lệ chuyển đổi người xem thành người mua hàng (Conversion rate)",
      "strokes": 26,
      "radical": "车 (Xa)",
      "example": "通过优化商品主图与短视频，我们的点击转化率提升了35%。",
      "exampleVi": "Thông qua tối ưu hóa ảnh đại diện sản phẩm và video ngắn, tỷ lệ chuyển đổi của chúng ta đã tăng 35%.",
      "collocations": [
            "付费转化 (Chuyển đổi trả phí)",
            "高转化率 (Tỷ lệ chuyển đổi cao)",
            "转化路径 (Hành trình chuyển đổi)"
      ],
      "tip": "Chỉ số sống còn quyết định lời lỗ của mọi gian hàng thương mại điện tử."
},
    {
      "id": "dict-112",
      "hanzi": "爆款",
      "pinyin": "bào kuǎn",
      "hanviet": "Bạo khoản",
      "wordType": "TMĐT",
      "hsk": "Ngành nghề",
      "meaning": "Sản phẩm 'hot trend' bán chạy bùng nổ (Bestseller)",
      "strokes": 31,
      "radical": "火 (Hỏa)",
      "example": "这款法式碎花连衣裙上线仅三小时就成为了全网爆款！",
      "exampleVi": "Mẫu váy hoa nhí phong cách Pháp này vừa lên kệ 3 tiếng đã trở thành sản phẩm hot trend bán chạy toàn mạng!",
      "collocations": [
            "打造爆款 (Tạo sản phẩm hot trend)",
            "爆款单品 (Món đồ hot hit)",
            "爆款思维 (Tư duy tạo sản phẩm phễu)"
      ],
      "tip": "Bạo (bùng nổ như lửa) + Khoản (mẫu mã) -> Mặt hàng cháy hàng liên tục!"
},
    {
      "id": "dict-113",
      "hanzi": "升房",
      "pinyin": "shēng fáng",
      "hanviet": "Thăng phòng",
      "wordType": "Khách sạn",
      "hsk": "Ngành nghề",
      "meaning": "Nâng hạng phòng miễn phí cho khách lưu trú (Room Upgrade)",
      "strokes": 12,
      "radical": "十 (Thập)",
      "example": "为了弥补让您久等的歉意，前台特意为您免费升房至海景套房。",
      "exampleVi": "Để tạ lỗi vì khiến quý khách phải đợi lâu, lễ tân xin được nâng hạng miễn phí lên phòng Suite hướng biển cho quý khách.",
      "collocations": [
            "免费升房 (Nâng hạng miễn phí)",
            "套房升级 (Nâng lên phòng Suite)",
            "会员礼遇 (Đặc quyền hội viên)"
      ],
      "tip": "Nghệ thuật xoa dịu và chăm sóc khách hàng VIP trong ngành khách sạn 5 sao."
},
    {
      "id": "dict-114",
      "hanzi": "行政酒廊",
      "pinyin": "xíng zhèng jiǔ láng",
      "hanviet": "Hành chính tửu lang",
      "wordType": "Khách sạn",
      "hsk": "Ngành nghề",
      "meaning": "Phòng chờ thương gia dành riêng cho khách VIP (Executive Lounge)",
      "strokes": 39,
      "radical": "行 (Hành)",
      "example": "住在行政楼层的宾客可全天在行政酒廊享用精致下午茶。",
      "exampleVi": "Quý khách lưu trú tại tầng Executive có thể thưởng thức trà chiều thượng hạng cả ngày tại Executive Lounge.",
      "collocations": [
            "行政待遇 (Đãi ngộ thương gia)",
            "下午茶点 (Trà chiều bánh ngọt)",
            "私人值机 (Check-in riêng tư)"
      ],
      "tip": "Biểu tượng của dịch vụ khách sạn cao cấp."
},
    {
      "id": "dict-115",
      "hanzi": "拿货",
      "pinyin": "ná huò",
      "hanviet": "Nã hóa",
      "wordType": "Thời trang",
      "hsk": "Ngành nghề",
      "meaning": "Lấy hàng sỉ tận xưởng hoặc chợ đầu mối (Wholesale sourcing)",
      "strokes": 20,
      "radical": "扌 (Thủ)",
      "example": "广州十三行服装批发市场是全国服装店主拿货的宝藏之地。",
      "exampleVi": "Chợ đầu mối thời trang Thập Tam Hàng Quảng Châu là thánh địa lấy hàng sỉ của các chủ shop trên toàn quốc.",
      "collocations": [
            "拿货价 (Giá lấy sỉ tận gốc)",
            "整手拿 (Lấy nguyên ri/dây đủ size)",
            "补单拿货 (Lấy sỉ thêm đơn)"
      ],
      "tip": "Từ lóng vạn năng của dân buôn hàng Quảng Châu và chủ shop thời trang."
},
    {
      "id": "dict-116",
      "hanzi": "打版",
      "pinyin": "dǎ bǎn",
      "hanviet": "Đả bản",
      "wordType": "Thời trang",
      "hsk": "Ngành nghề",
      "meaning": "Ra rập, may mẫu thử thiết kế đầu tiên (Pattern making / Prototyping)",
      "strokes": 13,
      "radical": "扌 (Thủ)",
      "example": "版师已经根据你的设计图打出版样，明天就可以试穿版衣。",
      "exampleVi": "Thợ ra rập đã may mẫu thử dựa trên bản vẽ của bạn, ngày mai là có thể mặc thử mẫu đầu tiên.",
      "collocations": [
            "打版费 (Phí may mẫu thử)",
            "样衣确认 (Xác nhận áo mẫu)",
            "修改版型 (Chỉnh form rập)"
      ],
      "tip": "Bước quyết định phom dáng sản phẩm trước khi đưa vào sản xuất số lượng lớn."
},
    {
      "id": "dict-117",
      "hanzi": "显白",
      "pinyin": "xiǎn bái",
      "hanviet": "Hiển bạch",
      "wordType": "Làm đẹp",
      "hsk": "Làm đẹp",
      "meaning": "Tôn da, giúp màu da trông sáng và rạng rỡ hơn",
      "strokes": 14,
      "radical": "日 (Nhật)",
      "example": "这支口红的胡萝卜色超级显白，黄皮女孩闭眼入！",
      "exampleVi": "Màu cam cháy của cây son này cực kỳ tôn da, các bạn gái tone da ấm cứ việc nhắm mắt mua ngay!",
      "collocations": [
            "超级显白 (Cực kỳ tôn da)",
            "显白发色 (Màu tóc nâng tông da)",
            "显气质 (Tôn khí chất quý phái)"
      ],
      "tip": "Tiêu chí lựa chọn số một của phái nữ khi mua mỹ phẩm và quần áo thời trang."
},
    {
      "id": "dict-118",
      "hanzi": "挂号",
      "pinyin": "guà hào",
      "hanviet": "Quải hào",
      "wordType": "Y tế",
      "hsk": "Ngành nghề",
      "meaning": "Đăng ký lấy số thứ tự khám bệnh tại bệnh viện",
      "strokes": 14,
      "radical": "扌 (Thủ)",
      "example": "您可以通过微信小程序提前预约专家门诊的挂号。",
      "exampleVi": "Quý khách có thể thông qua Mini App WeChat để đặt trước số khám của phòng khám chuyên gia.",
      "collocations": [
            "挂号处 (Quầy đăng ký khám)",
            "专家号 (Số khám chuyên gia)",
            "普通号 (Số khám thông thường)"
      ],
      "tip": "Thủ tục bắt buộc đầu tiên khi đến bất kỳ bệnh viện nào ở Trung Quốc."
},
    {
      "id": "dict-119",
      "hanzi": "处方",
      "pinyin": "chǔ fāng",
      "hanviet": "Xứ phương",
      "wordType": "Y tế",
      "hsk": "Ngành nghề",
      "meaning": "Đơn thuốc do bác sĩ chỉ định (Prescription)",
      "strokes": 9,
      "radical": "夂 (Tri)",
      "example": "凭医生开具的处方单，才能在药房调配处方药。",
      "exampleVi": "Phải có toa thuốc do bác sĩ kê đơn thì mới được mua thuốc kê đơn tại quầy dược phẩm.",
      "collocations": [
            "处方药 (Thuốc kê đơn Rx)",
            "非处方药 (Thuốc không kê đơn OTC)",
            "电子处方 (Toa thuốc điện tử)"
      ],
      "tip": "Xứ (xử lý bệnh án) + Phương (phương thuốc cứu người)."
},
    {
      "id": "dict-120",
      "hanzi": "质检",
      "pinyin": "zhì jiǎn",
      "hanviet": "Chất kiểm",
      "wordType": "Sản xuất",
      "hsk": "Ngành nghề",
      "meaning": "Kiểm tra chất lượng sản phẩm (Quality Control - QC)",
      "strokes": 21,
      "radical": "贝 (Bối)",
      "example": "每一件出厂的产品都必须经过质检部门的三道严格检验。",
      "exampleVi": "Mỗi một sản phẩm xuất xưởng đều bắt buộc phải trải qua 3 vòng kiểm tra nghiêm ngặt của bộ phận QC.",
      "collocations": [
            "质检报告 (Phiếu kiểm định chất lượng)",
            "全检 (Kiểm tra 100%)",
            "抽检 (Kiểm tra xác suất)"
      ],
      "tip": "Trái tim giữ gìn uy tín thương hiệu của mọi nhà máy sản xuất."
},
    {
      "id": "dict-121",
      "hanzi": "良品率",
      "pinyin": "liáng pǐn lǜ",
      "hanviet": "Lương phẩm suất",
      "wordType": "Sản xuất",
      "hsk": "Ngành nghề",
      "meaning": "Tỷ lệ hàng đạt tiêu chuẩn chất lượng (Yield Rate)",
      "strokes": 30,
      "radical": "艮 (Cấn)",
      "example": "新设备调试完成后，我们产线的良品率成功提升至99.2%。",
      "exampleVi": "Sau khi căn chỉnh xong thiết bị mới, tỷ lệ hàng đạt chuẩn của dây chuyền sản xuất đã tăng lên 99.2%.",
      "collocations": [
            "提升良品率 (Nâng cao tỷ lệ đạt chuẩn)",
            "良品检验 (Kiểm nghiệm sản phẩm tốt)",
            "次品率 (Tỷ lệ hàng lỗi)"
      ],
      "tip": "Thước đo trình độ kỹ thuật và tay nghề của công nhân nhà xưởng."
},
    {
      "id": "dict-122",
      "hanzi": "流水线",
      "pinyin": "liú shuǐ xiàn",
      "hanviet": "Lưu thủy tuyến",
      "wordType": "Sản xuất",
      "hsk": "Ngành nghề",
      "meaning": "Dây chuyền sản xuất liên hoàn (Assembly Line)",
      "strokes": 27,
      "radical": "氵 (Thủy)",
      "example": "车间里十条自动化流水线正在全速运转，确保按时交货。",
      "exampleVi": "Mười dây chuyền sản xuất tự động trong xưởng đang vận hành hết công suất nhằm đảm bảo giao hàng đúng hạn.",
      "collocations": [
            "自动化流水线 (Dây chuyền tự động hóa)",
            "流水线工人 (Công nhân dây chuyền)",
            "流水线作业 (Thao tác trên dây chuyền)"
      ],
      "tip": "Lưu thủy (nước chảy không ngừng) -> Dây chuyền liên tục nhịp nhàng."
}
  ],
  "radicalsBank": [
    {
      "id": "rad-1",
      "radical": "一",
      "strokes": 1,
      "pinyin": "yī",
      "hanviet": "Nhất",
      "meaning": "Số một, bắt đầu, đồng nhất",
      "mnemonic": "Nét ngang duy nhất tượng trưng cho khởi nguồn vạn vật",
      "examples": [
        "一 (Số 1)",
        "二 (Số 2)",
        "三 (Số 3)",
        "丁 (Đinh)"
      ]
    },
    {
      "id": "rad-2",
      "radical": "丨",
      "strokes": 1,
      "pinyin": "gǔn",
      "hanviet": "Cổn",
      "meaning": "Nét sổ đứng thẳng đứng",
      "mnemonic": "Cây gậy cắm thẳng đứng giữa trời đất",
      "examples": [
        "中 (Trung)",
        "丰 (Phong)",
        "十 (Thập)"
      ]
    },
    {
      "id": "rad-3",
      "radical": "丶",
      "strokes": 1,
      "pinyin": "zhǔ",
      "hanviet": "Chủ",
      "meaning": "Nét chấm, điểm sáng",
      "mnemonic": "Một giọt nước hay hạt cát rơi xuống",
      "examples": [
        "丸 (Hoàn)",
        "凡 (Phàm)",
        "丹 (Đan)"
      ]
    },
    {
      "id": "rad-4",
      "radical": "丿",
      "strokes": 1,
      "pinyin": "piě",
      "hanviet": "Phiệt",
      "meaning": "Nét phẩy, uốn từ trên xuống trái",
      "mnemonic": "Cọng cỏ hay sợi tóc bay nghiêng",
      "examples": [
        "久 (Cửu)",
        "生 (Sinh)",
        "升 (Thăng)"
      ]
    },
    {
      "id": "rad-5",
      "radical": "人 (亻)",
      "strokes": 2,
      "pinyin": "rén",
      "hanviet": "Nhân",
      "meaning": "Con người, nhân tính",
      "mnemonic": "Dáng người đứng dang chân vững chãi; dạng biến thể là Nhân đứng 亻",
      "examples": [
        "你 (Bạn)",
        "他 (Anh ấy)",
        "休 (Nghỉ)",
        "信 (Chữ tín)"
      ]
    },
    {
      "id": "rad-6",
      "radical": "刀 (刂)",
      "strokes": 2,
      "pinyin": "dāo",
      "hanviet": "Đao",
      "meaning": "Con dao, vũ khí sắc bén, sự cắt gọt",
      "mnemonic": "Hình dáng lưỡi dao sắc; biến thể là Đao đứng 刂",
      "examples": [
        "切 (Cắt)",
        "分 (Phân chia)",
        "别 (Đừng/Khác)",
        "利 (Lợi)"
      ]
    },
    {
      "id": "rad-7",
      "radical": "力",
      "strokes": 2,
      "pinyin": "lì",
      "hanviet": "Lực",
      "meaning": "Sức mạnh, năng lực, cơ bắp",
      "mnemonic": "Cánh tay gồng cơ bắp cuồn cuộn",
      "examples": [
        "动 (Động)",
        "加 (Thêm)",
        "男 (Nam giới)",
        "努力 (Nỗ lực)"
      ]
    },
    {
      "id": "rad-8",
      "radical": "十",
      "strokes": 2,
      "pinyin": "shí",
      "hanviet": "Thập",
      "meaning": "Số mười, hoàn mỹ, thập toàn",
      "mnemonic": "Giao điểm của trời đất dọc ngang hội tụ",
      "examples": [
        "古 (Cổ kính)",
        "克 (Khắc)",
        "直 (Thẳng)"
      ]
    },
    {
      "id": "rad-9",
      "radical": "又",
      "strokes": 2,
      "pinyin": "yòu",
      "hanviet": "Hựu",
      "meaning": "Lại lần nữa, bàn tay phải",
      "mnemonic": "Bàn tay đưa ra lặp lại động tác",
      "examples": [
        "双 (Đôi)",
        "友 (Bạn hữu)",
        "发 (Phát)"
      ]
    },
    {
      "id": "rad-10",
      "radical": "口",
      "strokes": 3,
      "pinyin": "kǒu",
      "hanviet": "Khẩu",
      "meaning": "Cái miệng, lối vào, lời nói",
      "mnemonic": "Chiếc miệng mở tròn khi nói hay ăn",
      "examples": [
        "吃 (Ăn)",
        "喝 (Uống)",
        "叫 (Gọi)",
        "问 (Hỏi)"
      ]
    },
    {
      "id": "rad-11",
      "radical": "囗",
      "strokes": 3,
      "pinyin": "wéi",
      "hanviet": "Vi",
      "meaning": "Vây quanh, bao bọc bốn phía",
      "mnemonic": "Khung thành quây kín xung quanh",
      "examples": [
        "国 (Đất nước)",
        "回 (Trở về)",
        "四 (Số 4)",
        "团 (Đoàn viên)"
      ]
    },
    {
      "id": "rad-12",
      "radical": "土",
      "strokes": 3,
      "pinyin": "tǔ",
      "hanviet": "Thổ",
      "meaning": "Đất, bờ cõi, mặt đất",
      "mnemonic": "Mầm cây nhú lên từ nền đất màu mỡ",
      "examples": [
        "在 (Ở)",
        "地 (Đất)",
        "城 (Thành trì)",
        "基 (Cơ sở)"
      ]
    },
    {
      "id": "rad-13",
      "radical": "女",
      "strokes": 3,
      "pinyin": "nǚ",
      "hanviet": "Nữ",
      "meaning": "Phụ nữ, duyên dáng, nữ tính",
      "mnemonic": "Dáng cô gái ngồi khoanh tay dịu dàng thùy mị",
      "examples": [
        "好 (Tốt)",
        "妹 (Em gái)",
        "如 (Như ý)",
        "她 (Cô ấy)"
      ]
    },
    {
      "id": "rad-14",
      "radical": "子",
      "strokes": 3,
      "pinyin": "zǐ",
      "hanviet": "Tử",
      "meaning": "Đứa con, trẻ con, người có học",
      "mnemonic": "Đứa trẻ sơ sinh xòe hai tay vẫy chào thế giới",
      "examples": [
        "学 (Học)",
        "字 (Chữ)",
        "孩 (Đứa trẻ)",
        "存 (Tồn tại)"
      ]
    },
    {
      "id": "rad-15",
      "radical": "宀",
      "strokes": 3,
      "pinyin": "mián",
      "hanviet": "Miên",
      "meaning": "Mái nhà, nơi che mưa che nắng",
      "mnemonic": "Mái ngói che chở cho căn nhà",
      "examples": [
        "家 (Nhà)",
        "安 (Bình an)",
        "宝 (Bảo vật)",
        "定 (Cố định)"
      ]
    },
    {
      "id": "rad-16",
      "radical": "寸",
      "strokes": 3,
      "pinyin": "cùn",
      "hanviet": "Thốn",
      "meaning": "Tấc, tấc đất tấc vàng, gang tay",
      "mnemonic": "Khoảng cách một tấc từ cổ tay đến mạch đập",
      "examples": [
        "对 (Đúng)",
        "封 (Bức thư)",
        "耐 (Nhẫn nại)"
      ]
    },
    {
      "id": "rad-17",
      "radical": "小",
      "strokes": 3,
      "pinyin": "xiǎo",
      "hanviet": "Tiểu",
      "meaning": "Nhỏ bé, đáng yêu",
      "mnemonic": "Vật nhỏ bé chia làm ba mảnh",
      "examples": [
        "少 (Ít)",
        "尖 (Nhọn)",
        "光 (Ánh sáng)"
      ]
    },
    {
      "id": "rad-18",
      "radical": "工",
      "strokes": 3,
      "pinyin": "gōng",
      "hanviet": "Công",
      "meaning": "Thợ thủ công, công việc, công xưởng",
      "mnemonic": "Thước vuông góc của người thợ mộc",
      "examples": [
        "左 (Bên trái)",
        "巧 (Khéo léo)",
        "差 (Kém)"
      ]
    },
    {
      "id": "rad-19",
      "radical": "心 (忄/灬)",
      "strokes": 4,
      "pinyin": "xīn",
      "hanviet": "Tâm",
      "meaning": "Trái tim, tình cảm, suy nghĩ",
      "mnemonic": "Hình trái tim với 3 mạch máu; biến thể là Tâm đứng 忄",
      "examples": [
        "想 (Nhớ)",
        "快 (Nhanh)",
        "情 (Tình cảm)",
        "忙 (Bận)"
      ]
    },
    {
      "id": "rad-20",
      "radical": "手 (扌)",
      "strokes": 4,
      "pinyin": "shǒu",
      "hanviet": "Thủ",
      "meaning": "Bàn tay, thao tác bằng tay",
      "mnemonic": "Bàn tay 5 ngón khéo léo; biến thể là Thủ gảy 扌",
      "examples": [
        "打 (Đánh/Gọi)",
        "拉 (Kéo)",
        "提 (Xách)",
        "找 (Tìm)"
      ]
    },
    {
      "id": "rad-21",
      "radical": "日",
      "strokes": 4,
      "pinyin": "rì",
      "hanviet": "Nhật",
      "meaning": "Mặt trời, ban ngày, thời gian",
      "mnemonic": "Mặt trời tròn có đốm sáng ở giữa",
      "examples": [
        "明 (Sáng)",
        "时 (Thời gian)",
        "早 (Sáng sớm)",
        "春 (Mùa xuân)"
      ]
    },
    {
      "id": "rad-22",
      "radical": "月",
      "strokes": 4,
      "pinyin": "yuè",
      "hanviet": "Nguyệt (hoặc Nhục - thịt)",
      "meaning": "Mặt trăng / phần thân thể bắp thịt",
      "mnemonic": "Vầng trăng khuyết dịu dàng hoặc thịt cơ bắp",
      "examples": [
        "朋 (Bạn)",
        "期 (Kỳ hạn)",
        "脑 (Bộ não)",
        "胖 (Béo)"
      ]
    },
    {
      "id": "rad-23",
      "radical": "木",
      "strokes": 4,
      "pinyin": "mù",
      "hanviet": "Mộc",
      "meaning": "Cây cối, gỗ, đồ gỗ",
      "mnemonic": "Thân cây với cành lá xòe trên và rễ cắm dưới đất",
      "examples": [
        "林 (Rừng)",
        "机 (Máy móc)",
        "样 (Hình mẫu)",
        "校 (Trường học)"
      ]
    },
    {
      "id": "rad-24",
      "radical": "水 (氵)",
      "strokes": 4,
      "pinyin": "shuǐ",
      "hanviet": "Thủy",
      "meaning": "Nước, chất lỏng, sông ngòi",
      "mnemonic": "Dòng nước uốn lượn; biến thể là Ba chấm thủy 氵",
      "examples": [
        "海 (Biển)",
        "洗 (Rửa)",
        "清 (Trong xanh)",
        "满意 (Hài lòng)"
      ]
    },
    {
      "id": "rad-25",
      "radical": "火 (灬)",
      "strokes": 4,
      "pinyin": "huǒ",
      "hanviet": "Hỏa",
      "meaning": "Ngọn lửa, sức nóng, nấu nướng",
      "mnemonic": "Ngọn lửa bốc cháy; biến thể là Bốn chấm hỏa 灬",
      "examples": [
        "热 (Nóng)",
        "点 (Chấm/Điểm)",
        "烤 (Nướng)",
        "煮 (Luộc)"
      ]
    },
    {
      "id": "rad-26",
      "radical": "目",
      "strokes": 5,
      "pinyin": "mù",
      "hanviet": "Mục",
      "meaning": "Con mắt, cái nhìn",
      "mnemonic": "Hình dáng con mắt với các đường mí và con ngươi",
      "examples": [
        "看 (Nhìn)",
        "眼 (Mắt)",
        "睛 (Tròng mắt)"
      ]
    },
    {
      "id": "rad-27",
      "radical": "石",
      "strokes": 5,
      "pinyin": "shí",
      "hanviet": "Thạch",
      "meaning": "Hòn đá, khoáng thạch",
      "mnemonic": "Khối đá dưới chân vách núi cheo leo",
      "examples": [
        "矿 (Khoáng sản)",
        "破 (Phá vỡ)",
        "硬 (Cứng)"
      ]
    },
    {
      "id": "rad-28",
      "radical": "示 (礻)",
      "strokes": 5,
      "pinyin": "shì",
      "hanviet": "Thị",
      "meaning": "Thần linh, phúc lộc, cúng tế",
      "mnemonic": "Bàn thờ hướng về trời cao cầu chúc điều lành",
      "examples": [
        "福 (Phúc)",
        "祝 (Chúc)",
        "礼 (Lễ nghi)",
        "神 (Thần linh)"
      ]
    },
    {
      "id": "rad-29",
      "radical": "禾",
      "strokes": 5,
      "pinyin": "hé",
      "hanviet": "Hòa",
      "meaning": "Cây lúa, mầm ngũ cốc",
      "mnemonic": "Cây lúa trĩu bông uốn cong duyên dáng",
      "examples": [
        "秋 (Mùa thu)",
        "种 (Giống/Trồng)",
        "秒 (Giây)"
      ]
    },
    {
      "id": "rad-30",
      "radical": "竹 (⺮)",
      "strokes": 6,
      "pinyin": "zhú",
      "hanviet": "Trúc",
      "meaning": "Cây tre trúc, vật phẩm tre nứa",
      "mnemonic": "Hai khóm lá tre nghiêng rủ trong gió lành",
      "examples": [
        "等 (Chờ đợi)",
        "筷 (Đôi đũa)",
        "简 (Đơn giản)",
        "笔 (Bút)"
      ]
    },
    {
      "id": "rad-31",
      "radical": "糸 (纟)",
      "strokes": 3,
      "pinyin": "sī",
      "hanviet": "Mịch",
      "meaning": "Sợi tơ chỉ, dệt may gấm lụa",
      "mnemonic": "Bó tơ óng ánh tằm nhả dệt thành lụa đào",
      "examples": [
        "红 (Màu đỏ)",
        "绿 (Xanh lá)",
        "细 (Nhỏ/Tỉ mỉ)",
        "线 (Đường nét)"
      ]
    },
    {
      "id": "rad-32",
      "radical": "羊 (⺷)",
      "strokes": 6,
      "pinyin": "yáng",
      "hanviet": "Dương",
      "meaning": "Con dê, điều tốt lành, vẻ đẹp",
      "mnemonic": "Chú dê có cặp sừng xoắn đẹp biểu trưng cho sự tốt lành (Mỹ 美 = Dương + Đại)",
      "examples": [
        "美 (Đẹp)",
        "差 (Kém/Sai khác)",
        "群 (Bầy đàn/Nhóm)"
      ]
    },
    {
      "id": "rad-33",
      "radical": "羽",
      "strokes": 6,
      "pinyin": "yǔ",
      "hanviet": "Vũ",
      "meaning": "Lông vũ, cánh chim chao liệng",
      "mnemonic": "Đôi cánh lông vũ nâng cánh ước mơ bay xa",
      "examples": [
        "习 (Tập/Luyện tập)",
        "扇 (Chiếc quạt)",
        "翻 (Lật mở/Dịch)"
      ]
    },
    {
      "id": "rad-34",
      "radical": "耳",
      "strokes": 6,
      "pinyin": "ěr",
      "hanviet": "Nhĩ",
      "meaning": "Cái tai, lắng nghe",
      "mnemonic": "Vành tai lắng nghe tiếng nói chân tình từ cuộc sống",
      "examples": [
        "闻 (Nghe thấy/Tin tức)",
        "聊 (Trò chuyện)",
        "职 (Chức vụ)"
      ]
    },
    {
      "id": "rad-35",
      "radical": "肉 (⺼)",
      "strokes": 4,
      "pinyin": "ròu",
      "hanviet": "Nhục",
      "meaning": "Thịt, cơ bắp, bộ phận cơ thể",
      "mnemonic": "Hình thớ thịt nuôi dưỡng thân thể; biến thể thành ⺼ giống nguyệt",
      "examples": [
        "胖 (Béo mập)",
        "肥 (Phì nhiêu)",
        "肚 (Bụng)",
        "脑 (Bộ não)"
      ]
    },
    {
      "id": "rad-36",
      "radical": "自",
      "strokes": 6,
      "pinyin": "zì",
      "hanviet": "Tự",
      "meaning": "Chính mình, từ nơi nào",
      "mnemonic": "Hình chiếc mũi, khi người xưa nói 'chính tôi' liền chỉ ngón tay vào sống mũi",
      "examples": [
        "自己 (Bản thân)",
        "自然 (Tự nhiên)"
      ]
    },
    {
      "id": "rad-37",
      "radical": "舌",
      "strokes": 6,
      "pinyin": "shé",
      "hanviet": "Thiệt",
      "meaning": "Cái lưỡi, vị giác, ngôn ngữ",
      "mnemonic": "Chiếc lưỡi cử động trong vòm miệng nếm trải mật ngọt",
      "examples": [
        "甜 (Ngọt ngào)",
        "话 (Lời nói)",
        "舍 (Quán trọ)"
      ]
    },
    {
      "id": "rad-38",
      "radical": "舟",
      "strokes": 6,
      "pinyin": "zhōu",
      "hanviet": "Châu",
      "meaning": "Con thuyền, tàu bè",
      "mnemonic": "Con thuyền độc mộc lướt êm đềm trên sóng biếc",
      "examples": [
        "船 (Thuyền buồm)",
        "航 (Hàng không/Hàng hải)",
        "舶 (Tàu lớn)"
      ]
    },
    {
      "id": "rad-39",
      "radical": "艸 (艹)",
      "strokes": 3,
      "pinyin": "cǎo",
      "hanviet": "Thảo",
      "meaning": "Cây cỏ, hoa lá, thảo mộc",
      "mnemonic": "Hai mầm cỏ xanh mướt vươn lên đón ánh bình minh",
      "examples": [
        "茶 (Trà thơm)",
        "花 (Bông hoa)",
        "草 (Cỏ xanh)",
        "菜 (Rau xanh)"
      ]
    },
    {
      "id": "rad-40",
      "radical": "虫",
      "strokes": 6,
      "pinyin": "chóng",
      "hanviet": "Trùng",
      "meaning": "Côn trùng, sâu bọ, loài nhỏ",
      "mnemonic": "Chú sâu con đáng yêu uốn mình trên phiến lá",
      "examples": [
        "蜜 (Mật ngọt)",
        "蜂 (Chú ong)",
        "蝶 (Cánh bướm)"
      ]
    },
    {
      "id": "rad-41",
      "radical": "衣 (衤)",
      "strokes": 5,
      "pinyin": "yī",
      "hanviet": "Y",
      "meaning": "Trang phục, y phục, váy áo",
      "mnemonic": "Chiếc áo dài thướt tha có tà áo và cổ áo gài nút duyên dáng",
      "examples": [
        "裙 (Chiếc váy xinh)",
        "衬 (Áo sơ mi)",
        "被 (Chăn ấm)",
        "补 (Bổ sung/Vá)"
      ]
    },
    {
      "id": "rad-42",
      "radical": "言 (讠)",
      "strokes": 2,
      "pinyin": "yán",
      "hanviet": "Ngôn",
      "meaning": "Lời nói, ngôn ngữ, trao đổi",
      "mnemonic": "Lời nói ngọt ngào xuất phát từ trái tim ấm áp",
      "examples": [
        "说 (Nói)",
        "语 (Ngôn ngữ)",
        "谢 (Cảm ơn)",
        "请 (Xin mời)"
      ]
    },
    {
      "id": "rad-43",
      "radical": "貝 (贝)",
      "strokes": 4,
      "pinyin": "bèi",
      "hanviet": "Bối",
      "meaning": "Vỏ sò, tiền bạc, bảo bối",
      "mnemonic": "Vỏ sò biển lấp lánh thời cổ dùng làm tiền tệ giao thương",
      "examples": [
        "贵 (Quý phái/Đắt)",
        "买 (Mua sắm)",
        "赚 (Kiếm tiền)",
        "财 (Tài lộc)"
      ]
    },
    {
      "id": "rad-44",
      "radical": "走",
      "strokes": 7,
      "pinyin": "zǒu",
      "hanviet": "Tẩu",
      "meaning": "Đi lại, bước chân, khởi hành",
      "mnemonic": "Người rảo bước chân nhanh nhẹn tiến về phía trước",
      "examples": [
        "起 (Thức dậy/Bắt đầu)",
        "越 (Vượt qua/Càng)",
        "赶 (Đuổi theo)"
      ]
    },
    {
      "id": "rad-45",
      "radical": "足 (⻊)",
      "strokes": 7,
      "pinyin": "zú",
      "hanviet": "Túc",
      "meaning": "Bàn chân, bước chân, đầy đủ",
      "mnemonic": "Cẳng chân và bàn chân vững chãi nâng đỡ cơ thể",
      "examples": [
        "跑 (Chạy bộ)",
        "跳 (Nhảy múa)",
        "跟 (Đi cùng/Theo sau)"
      ]
    },
    {
      "id": "rad-46",
      "radical": "車 (车)",
      "strokes": 4,
      "pinyin": "chē",
      "hanviet": "Xa",
      "meaning": "Xe cộ, phương tiện giao thông",
      "mnemonic": "Cỗ xe hai bánh nhìn từ trên cao với trục xe vững chắc",
      "examples": [
        "辆 (Chiếc xe)",
        "转 (Chuyển đổi)",
        "轻 (Nhẹ nhàng)"
      ]
    },
    {
      "id": "rad-47",
      "radical": "辵 (辶)",
      "strokes": 3,
      "pinyin": "chuò",
      "hanviet": "Sước",
      "meaning": "Bước đi xa, dạo chơi, đường dài",
      "mnemonic": "Dấu chân thong dong bước đi trên con đường ngập hoa",
      "examples": [
        "进 (Tiến vào)",
        "远 (Phương xa)",
        "送 (Tặng quà/Tiễn)",
        "适 (Thích hợp)"
      ]
    },
    {
      "id": "rad-48",
      "radical": "邑 (阝phải)",
      "strokes": 3,
      "pinyin": "yì",
      "hanviet": "Ấp",
      "meaning": "Làng xóm, đô thị, địa danh",
      "mnemonic": "Vùng đất trù phú có bờ rào bao bọc dân cư (nằm bên phải chữ)",
      "examples": [
        "部 (Bộ phận/Phòng ban)",
        "都 (Kinh đô/Đều là)",
        "郭 (Thành quách)"
      ]
    },
    {
      "id": "rad-49",
      "radical": "阜 (阝trái)",
      "strokes": 3,
      "pinyin": "fù",
      "hanviet": "Phụ",
      "meaning": "Gò đất, đồi cao, dốc núi",
      "mnemonic": "Bậc thang đá xếp lớp dẫn lên đỉnh đồi cao (nằm bên trái chữ)",
      "examples": [
        "阳 (Thái dương/Ánh nắng)",
        "院 (Bệnh viện/Học viện)",
        "防 (Phòng hộ)"
      ]
    },
    {
      "id": "rad-50",
      "radical": "金 (钅)",
      "strokes": 5,
      "pinyin": "jīn",
      "hanviet": "Kim",
      "meaning": "Kim loại, vàng bạc, châu báu",
      "mnemonic": "Khoáng vật quý giá chôn giấu trong lòng đất sáng ngời",
      "examples": [
        "钱 (Tiền nong)",
        "错 (Sai sót/Đan xen)",
        "钟 (Chuông/Đồng hồ)",
        "银 (Bạc trắng)"
      ]
    },
    {
      "id": "rad-51",
      "radical": "門 (门)",
      "strokes": 3,
      "pinyin": "mén",
      "hanviet": "Môn",
      "meaning": "Cánh cửa, lối đi, cánh cổng",
      "mnemonic": "Hai cánh cửa gỗ hé mở chào đón người thương trở về",
      "examples": [
        "间 (Không gian/Phòng)",
        "问 (Hỏi han)",
        "闭 (Khép lại)"
      ]
    },
    {
      "id": "rad-52",
      "radical": "雨",
      "strokes": 8,
      "pinyin": "yǔ",
      "hanviet": "Vũ",
      "meaning": "Cơn mưa, mây trời, thời tiết",
      "mnemonic": "Bầu trời giăng mây tuôn rơi từng giọt mưa ngọt lành",
      "examples": [
        "雪 (Tuyết trắng)",
        "零 (Số 0/Lắt rắt)",
        "需 (Nhu cầu/Cần thiết)"
      ]
    },
    {
      "id": "rad-53",
      "radical": "食 (饣)",
      "strokes": 3,
      "pinyin": "shí",
      "hanviet": "Thực",
      "meaning": "Ẩm thực, món ăn, dinh dưỡng",
      "mnemonic": "Bát cơm thơm dẻo đậy nắp giữ ấm hương vị gia đình",
      "examples": [
        "饭 (Cơm dẻo)",
        "饮 (Đồ uống thanh mát)",
        "饱 (No nê)"
      ]
    },
    {
      "id": "rad-54",
      "radical": "馬 (马)",
      "strokes": 3,
      "pinyin": "mǎ",
      "hanviet": "Mã",
      "meaning": "Con ngựa, tốc độ, phi nước đại",
      "mnemonic": "Chú tuấn mã tung bờm lướt gió dũng mãnh",
      "examples": [
        "骑 (Cưỡi xe/Cưỡi ngựa)",
        "验 (Kiểm nghiệm/Kinh nghiệm)",
        "骗 (Lừa dối)"
      ]
    }
  ],
  "grammarBank": [
    {
      "id": "g-1",
      "title": "Phân biệt 3 chữ Đích/Đắc/Địa: 的, 得, 地",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "[Định ngữ] + 的 + [Danh từ] | [Động từ] + 得 + [Bổ ngữ trạng thái] | [Tính từ] + 地 + [Động từ]",
      "explanation": "• '的' đứng trước danh từ (sở hữu/miêu tả): 美丽的花 (bông hoa đẹp).<br>• '得' đứng sau động từ (đánh giá mức độ): 说得很好 (nói rất hay).<br>• '地' đứng trước động từ (miêu tả cách thức): 认真地学习 (chăm chỉ học tập).",
      "example1": {
        "hanzi": "小玉的笑容特别甜，她笑得真开心。",
        "pinyin": "Xiǎo Yù de xiàoróng tèbié tián, tā xiào de zhēn kāixīn.",
        "vi": "Nụ cười của Ngọc Ánh ngọt ngào vô cùng, nàng cười trông thật vui tươi."
      },
      "example2": {
        "hanzi": "她正在认真地准备明天的面试。",
        "pinyin": "Tā zhèngzài rènzhēn de zhǔnbèi míngtiān de miànshì.",
        "vi": "Cô ấy đang chăm chú chuẩn bị cho buổi phỏng vấn ngày mai."
      }
    },
    {
      "id": "g-2",
      "title": "Câu chữ 把 (Bả tự cú) - Xử lý tác động lên vật",
      "level": "Trung cấp (HSK 3-4)",
      "pattern": "Chủ ngữ + 把 + Tân ngữ + Động từ + Thành phần khác (了/到/给...)",
      "explanation": "Dùng khi chủ ngữ thực hiện hành động làm thay đổi vị trí, trạng thái hoặc kết quả của tân ngữ.",
      "example1": {
        "hanzi": "我已经把合同发到您的邮箱了。",
        "pinyin": "Wǒ yǐjīng bǎ hétong fā dào nín de yóuxiāng le.",
        "vi": "Em đã gửi hợp đồng vào hòm thư điện tử của sếp rồi ạ."
      },
      "example2": {
        "hanzi": "请把桌子收拾干净。",
        "pinyin": "Qǐng bǎ zhuōzi shōushi gānjìng.",
        "vi": "Xin vui lòng thu dọn bàn cho thật sạch sẽ nhé."
      }
    },
    {
      "id": "g-3",
      "title": "Câu chữ 被 (Bị tự cú) - Dạng câu bị động",
      "level": "Trung cấp (HSK 4)",
      "pattern": "Tân ngữ + 被 + (Tác nhân) + Động từ + Thành phần khác",
      "explanation": "Biểu thị sự việc bị tác động, thường mang sắc thái không mong muốn hoặc khách quan.",
      "example1": {
        "hanzi": "我的手机被小猫碰掉了。",
        "pinyin": "Wǒ de shǒujī bèi xiǎomāo pèng diào le.",
        "vi": "Chiếc điện thoại của mình bị chú mèo con gạt rơi mất rồi."
      },
      "example2": {
        "hanzi": "这个优秀的方案被领导采纳了。",
        "pinyin": "Zhège yōuxiù de fāng'àn bèi lǐngdǎo cǎinà le.",
        "vi": "Phương án xuất sắc này đã được lãnh đạo phê duyệt tiếp nhận."
      }
    },
    {
      "id": "g-4",
      "title": "Cấu trúc so sánh 比 (Tỷ)",
      "level": "Sơ cấp (HSK 2-3)",
      "pattern": "A + 比 + B + Tính từ (+ 一点儿 / 多了 / Cụ thể)",
      "explanation": "Dùng để so sánh A hơn B về một đặc điểm tính chất nào đó.",
      "example1": {
        "hanzi": "今天的天气比昨天好多了。",
        "pinyin": "Jīntiān de tiānqì bǐ zuótiān hǎo duō le.",
        "vi": "Thời tiết hôm nay đẹp hơn hôm qua nhiều lắm."
      },
      "example2": {
        "hanzi": "在网上买这条裙子比店里便宜五十块。",
        "pinyin": "Zài wǎngshang mǎi zhè tiáo qúnzi bǐ diàn lǐ piányi wǔshí kuài.",
        "vi": "Mua chiếc váy này trên mạng rẻ hơn ngoài tiệm tận 50 tệ."
      }
    },
    {
      "id": "g-5",
      "title": "Cấu trúc 越来越... (Ngày càng...)",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "Chủ ngữ + 越来越 + Tính từ / Động từ tâm lý",
      "explanation": "Biểu thị mức độ của tính chất đang tăng dần đều theo thời gian.",
      "example1": {
        "hanzi": "玉映的中文说得越来越流利了！",
        "pinyin": "Yù Yìng de zhōngwén shuō de yuè lái yuè liúlì le!",
        "vi": "Tiếng Trung của Ngọc Ánh nói ngày càng lưu loát và tự nhiên rồi kìa!"
      },
      "example2": {
        "hanzi": "天气越来越暖和，春天要来了。",
        "pinyin": "Tiānqì yuè lái yuè nuǎnhuo, chūntiān yào lái le.",
        "vi": "Tiết trời ngày một ấm áp, mùa xuân sắp gõ cửa rồi."
      }
    },
    {
      "id": "g-6",
      "title": "Cấu trúc 越...越... (Càng... càng...)",
      "level": "Trung cấp (HSK 3)",
      "pattern": "越 + [Điều kiện A] + 越 + [Kết quả B]",
      "explanation": "Biểu thị mức độ của B biến chuyển theo sự gia tăng của A.",
      "example1": {
        "hanzi": "越努力，越幸运。",
        "pinyin": "Yuè nǔlì, yuè xìngyùn.",
        "vi": "Càng nỗ lực, càng gặp nhiều may mắn."
      },
      "example2": {
        "hanzi": "这本小说越看越有意思。",
        "pinyin": "Zhè běn xiǎoshuō yuè kàn yuè yǒu yìsi.",
        "vi": "Cuốn tiểu thuyết này càng đọc càng thấy thú vị."
      }
    },
    {
      "id": "g-7",
      "title": "Cấu trúc 不仅...而且... (Không những... mà còn...)",
      "level": "Trung cấp (HSK 4)",
      "pattern": "Chủ ngữ + 不仅 + Vế 1, 而且 + Vế 2",
      "explanation": "Mối quan hệ tăng tiến, bổ sung thêm ưu điểm hoặc tính chất cho sự vật.",
      "example1": {
        "hanzi": "她不仅精通中文，而且有丰富的商业经验。",
        "pinyin": "Tā bùjǐn jīngtōng zhōngwén, érqiě yǒu fēngfù de shāngyè jīngyàn.",
        "vi": "Cô ấy không những tinh thông tiếng Trung mà còn dày dạn kinh nghiệm thương mại."
      },
      "example2": {
        "hanzi": "这家咖啡馆不仅环境优雅，而且甜点超棒。",
        "pinyin": "Zhè jiā kāfēiguǎn bùjǐn huánjìng yōuyǎ, érqiě tiándiǎn chāo bàng.",
        "vi": "Quán cafe này không những không gian thanh lịch mà đồ ngọt còn siêu đỉnh."
      }
    },
    {
      "id": "g-8",
      "title": "Cấu trúc 一边...一边... (Vừa... vừa...)",
      "level": "Sơ cấp (HSK 2)",
      "pattern": "Chủ ngữ + 一边 + Hành động 1 + 一边 + Hành động 2",
      "explanation": "Hai hành động diễn ra song song cùng một thời điểm.",
      "example1": {
        "hanzi": "我们一边喝奶茶一边听音乐。",
        "pinyin": "Wǒmen yībiān hē nǎichá yībiān tīng yīnyuè.",
        "vi": "Tụi mình vừa nhâm nhi trà sữa vừa nghe nhạc êm dịu."
      },
      "example2": {
        "hanzi": "他喜欢一边散步一边思考工作。",
        "pinyin": "Tā xǐhuan yībiān sànbù yībiān sīkǎo gōngzuò.",
        "vi": "Anh ấy thích vừa tản bộ vừa suy ngẫm về công việc."
      }
    },
    {
      "id": "g-9",
      "title": "Cấu trúc 连...都/也... (Ngay cả... cũng...)",
      "level": "Trung cấp (HSK 4)",
      "pattern": "连 + [Đối tượng cực đoan] + 都 / 也 + [Vị ngữ]",
      "explanation": "Nhấn mạnh một tình huống quá rõ ràng đến mức ai cũng biết hoặc làm được.",
      "example1": {
        "hanzi": "这个问题太简单了，连小孩子都明白。",
        "pinyin": "Zhège wèntí tài jiǎndān le, lián xiǎoháizi dōu míngbai.",
        "vi": "Câu hỏi này đơn giản quá chừng, ngay cả con nít cũng hiểu."
      },
      "example2": {
        "hanzi": "她太忙了，连午饭都没顾得上吃。",
        "pinyin": "Tā tài máng le, lián wǔfàn dōu méi gùdeshàng chī.",
        "vi": "Cô ấy bận quá, ngay cả bữa trưa cũng chẳng kịp ăn."
      }
    },
    {
      "id": "g-10",
      "title": "Bổ ngữ chỉ kết quả (好, 完, 到, 见, 懂...)",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "Động từ + [好 / 完 / 到 / 见 / 懂 / 对 / 错]",
      "explanation": "Diễn đạt kết quả sau khi thực hiện hành động (làm xong, nghe hiểu, nhìn thấy, làm đúng).",
      "example1": {
        "hanzi": "我已经准备好了，随时可以出发。",
        "pinyin": "Wǒ yǐjīng zhǔnbèi hǎo le, suíshí kěyǐ chūfā.",
        "vi": "Em đã chuẩn bị sẵn sàng chu đáo rồi, có thể xuất phát bất cứ lúc nào ạ."
      },
      "example2": {
        "hanzi": "今天的听力内容你听懂了吗？",
        "pinyin": "Jīntiān de tīnglì nèiróng nǐ tīng dǒng le ma?",
        "vi": "Nội dung bài nghe hôm nay bạn đã nghe hiểu hết chưa?"
      }
    },
    {
      "id": "g-11",
      "title": "Cấu trúc 虽然...但是... (Tuy... nhưng...)",
      "level": "Sơ cấp (HSK 2)",
      "pattern": "虽然 + [Vế nhượng bộ], 但是 + [Vế chuyển ngoặt]",
      "explanation": "Biểu thị mối quan hệ tương phản, chuyển tiếp ý tứ tích cực.",
      "example1": {
        "hanzi": "虽然学中文有点难，但是我非常热爱它。",
        "pinyin": "Suīrán xué zhōngwén yǒudiǎn nán, dànshì wǒ fēicháng rè'ài tā.",
        "vi": "Tuy học tiếng Trung có chút thử thách, nhưng mình vô cùng yêu thích."
      },
      "example2": {
        "hanzi": "虽然今天下雨，但我们的心情依然明媚。",
        "pinyin": "Suīrán jīntiān xiàyǔ, dàn wǒmen de xīnqíng yīrán míngmèi.",
        "vi": "Tuy hôm nay trời mưa rào, nhưng tâm trạng tụi mình vẫn ngập tràn ánh nắng."
      }
    },
    {
      "id": "g-12",
      "title": "Cấu trúc 既...又... (Vừa... lại vừa...)",
      "level": "Trung cấp (HSK 3)",
      "pattern": "Chủ ngữ + 既 + Tính từ/Động từ 1 + 又 + Tính từ/Động từ 2",
      "explanation": "Đồng thời sở hữu hai tính chất tích cực (hoặc tiêu cực) ngang hàng nhau.",
      "example1": {
        "hanzi": "这件裙子既好看又便宜。",
        "pinyin": "Zhè jiàn qúnzi jì hǎokàn yòu piányi.",
        "vi": "Chiếc váy này vừa xinh xắn mà giá lại vừa hạt dẻ nữa."
      },
      "example2": {
        "hanzi": "她既聪明又勤奋，深得大家喜爱。",
        "pinyin": "Tā jì cōngming yòu qínfèn, shēn dé dàjiā xǐ'ài.",
        "vi": "Cô ấy vừa thông minh lại vừa cần mẫn siêng năng, rất được mọi người yêu mến."
      }
    },
    {
      "id": "g-13",
      "title": "Cấu trúc 一...就... (Hễ... là... / Vừa... liền...)",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "Chủ ngữ + 一 + Hành động 1 + 就 + Hành động 2",
      "explanation": "Hành động 2 xảy ra ngay lập tức tiếp nối hành động 1.",
      "example1": {
        "hanzi": "我一喝奶茶，心情就变好。",
        "pinyin": "Wǒ yī hē nǎichá, xīnqíng jiù biàn hǎo.",
        "vi": "Mình hễ uống trà sữa một ngụm là tâm trạng liền thấy vui phơi phới."
      },
      "example2": {
        "hanzi": "他一下班就回家做饭。",
        "pinyin": "Tā yī xiàbān jiù huíjiā zuòfàn.",
        "vi": "Anh ấy vừa tan làm một cái là lập tức về nhà nấu cơm ngay."
      }
    },
    {
      "id": "g-14",
      "title": "Cấu trúc 只要...就... (Chỉ cần... thì sẽ...)",
      "level": "Trung cấp (HSK 3)",
      "pattern": "只要 + [Điều kiện cần đủ] + 就 + [Kết quả]",
      "explanation": "Biểu thị điều kiện đầy đủ: chỉ cần thỏa mãn điều này thì nhất định có kết quả.",
      "example1": {
        "hanzi": "只要每天坚持，就一定能说一口流利的中文。",
        "pinyin": "Zhǐyào měitiān jiānchí, jiù yídìng néng shuō yì kǒu liúlì de zhōngwén.",
        "vi": "Chỉ cần mỗi ngày kiên trì, thì chắc chắn sẽ nói được tiếng Trung thật lưu loát."
      },
      "example2": {
        "hanzi": "只要客户满意，我们的努力就值得。",
        "pinyin": "Zhǐyào kèhù mǎnyì, wǒmen de nǔlì jiù zhídé.",
        "vi": "Chỉ cần khách hàng hài lòng, nỗ lực của tụi mình là hoàn toàn xứng đáng."
      }
    },
    {
      "id": "g-15",
      "title": "Cấu trúc 只有...才... (Chỉ có... mới...)",
      "level": "Trung cấp (HSK 4)",
      "pattern": "只有 + [Điều kiện duy nhất bắt buộc] + 才 + [Kết quả]",
      "explanation": "Biểu thị điều kiện thiết yếu duy nhất, thiếu nó thì không thể đạt được kết quả.",
      "example1": {
        "hanzi": "只有不断学习，才能走得更远。",
        "pinyin": "Zhǐyǒu búduàn xuéxí, cái néng zǒu de gèng yuǎn.",
        "vi": "Chỉ có không ngừng học hỏi thì mới có thể tiến xa hơn nữa trên đường đời."
      },
      "example2": {
        "hanzi": "只有互相信任，团队才能高效合作。",
        "pinyin": "Zhǐyǒu hùxiāng xìnrèn, tuánduì cái néng gāoxiào hézuò.",
        "vi": "Chỉ có tin tưởng lẫn nhau thì đội ngũ mới có thể hợp tác hiệu quả."
      }
    },
    {
      "id": "g-16",
      "title": "Cấu trúc 除了...以外，还/都... (Ngoài... ra)",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "除了 + A + 以外，还/也 + B (Bổ sung) | 除了 + A + 以外，都 + B (Loại trừ)",
      "explanation": "Bổ sung thêm đối tượng khác ngoài A, hoặc loại trừ A ra để khẳng định tất cả.",
      "example1": {
        "hanzi": "除了英语以外，她还会说流利的中文。",
        "pinyin": "Chúle yīngyǔ yǐwài, tā hái huì shuō liúlì de zhōngwén.",
        "vi": "Ngoài tiếng Anh ra, cô ấy còn có thể nói tiếng Trung rất lưu loát."
      },
      "example2": {
        "hanzi": "除了小张以外，大家都准时到了。",
        "pinyin": "Chúle Xiǎo Zhāng yǐwài, dàjiā dōu zhǔnshí dào le.",
        "vi": "Ngoại trừ Tiểu Trương ra, mọi người đều đã đến đúng giờ."
      }
    },
    {
      "id": "g-17",
      "title": "Cấu trúc 为了... (Vì / Để đạt được...)",
      "level": "Trung cấp (HSK 3)",
      "pattern": "为了 + [Mục tiêu cao đẹp] + [Hành động thực hiện]",
      "explanation": "Đứng ở đầu câu để nêu rõ mục đích, động lực của hành vi.",
      "example1": {
        "hanzi": "为了未来的梦想，今天的努力都是值得的。",
        "pinyin": "Wèile wèilái de mèngxiǎng, jīntiān de nǔlì dōu shì zhídé de.",
        "vi": "Vì ước mơ tương lai, mọi cố gắng ngày hôm nay đều vô cùng xứng đáng."
      },
      "example2": {
        "hanzi": "为了准时交货，团队连续奋战了两天。",
        "pinyin": "Wèile zhǔnshí jiāohuò, tuánduì liánxù fènzhàn le liǎng tiān.",
        "vi": "Để kịp giao hàng đúng hạn, cả đội đã liên tục nỗ lực suốt hai ngày qua."
      }
    },
    {
      "id": "g-18",
      "title": "Trạng từ mức độ cực đại (太...了, 极了, 挺...的)",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "太 + Tính từ + 了 | Tính từ + 极了 | 挺 + Tính từ + 的",
      "explanation": "Diễn tả cảm xúc ngợi khen nhiệt tình hoặc mức độ vượt trội trong giao tiếp hàng ngày.",
      "example1": {
        "hanzi": "你今天穿这条裙子漂亮极了！",
        "pinyin": "Nǐ jīntiān chuān zhè tiáo qúnzi piàoliang jíle!",
        "vi": "Hôm nay em mặc chiếc váy này xinh đẹp hết sẩy luôn á!"
      },
      "example2": {
        "hanzi": "这家咖啡馆的环境挺安静的。",
        "pinyin": "Zhè jiā kāfēiguǎn de huánjìng tǐng ānjìng de.",
        "vi": "Không gian quán cà phê này khá là yên tĩnh và dễ chịu."
      }
    },
    {
      "id": "g-19",
      "title": "Bổ ngữ xu hướng (来, 去, 起来, 出来...)",
      "level": "Trung cấp (HSK 3 - 4)",
      "pattern": "Động từ + [上/下/进/出/回/过/起] + [来/去]",
      "explanation": "Biểu thị hướng di chuyển của động tác hướng về phía người nói (来) hoặc xa dần (去), hoặc chuyển trạng thái (起来).",
      "example1": {
        "hanzi": "春天到了，天气渐渐暖和起来了。",
        "pinyin": "Chūntiān dào le, tiānqì jiànjiàn nuǎnhuo qǐlai le.",
        "vi": "Mùa xuân đã sang, tiết trời dần dần ấm áp trở lại rồi."
      },
      "example2": {
        "hanzi": "你想出来了解决这个难题的办法吗？",
        "pinyin": "Nǐ xiǎng chūlai le jiějué zhège nántí de bànfǎ ma?",
        "vi": "Bạn đã nghĩ ra cách giải quyết khó khăn nan giải này chưa?"
      }
    },
    {
      "id": "g-20",
      "title": "Câu tồn hiện (Nơi chốn + Động từ + 着 / 了)",
      "level": "Trung cấp (HSK 4)",
      "pattern": "Từ chỉ nơi chốn + Động từ + 着 / 了 + Danh từ",
      "explanation": "Miêu tả trạng thái đang tồn tại hoặc sự xuất hiện/biến mất của vật thể tại một vị trí cụ thể.",
      "example1": {
        "hanzi": "桌子上摆着一瓶粉色的玫瑰花。",
        "pinyin": "Zhuōzi shàng bǎizhe yì píng fěnsè de méiguīhuā.",
        "vi": "Trên bàn đang đặt một lọ hoa hồng màu phấn dịu dàng."
      },
      "example2": {
        "hanzi": "门口站着一位手捧咖啡的帅气同事。",
        "pinyin": "Ménkǒu zhànzhe yí wèi shǒu pěng kāfēi de shuàiqì tóngshì.",
        "vi": "Trước cửa đang đứng một bạn đồng nghiệp bảnh bao tay cầm ly cà phê."
      }
    },
    {
      "id": "g-21",
      "title": "Cấu trúc nhấn mạnh 是...的 (Thời gian, Địa điểm, Cách thức)",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "Chủ ngữ + 是 + [Chi tiết nhấn mạnh: Lúc nào/Ở đâu/Bằng cách nào] + Động từ + 的",
      "explanation": "Dùng khi sự việc ĐÃ XẢY RA, người nói muốn nhấn mạnh vào hoàn cảnh, xuất xứ, thời gian hoặc cách thức.",
      "example1": {
        "hanzi": "我是坐高铁来上海的。",
        "pinyin": "Wǒ shì zuò gāotiě lái Shànghǎi de.",
        "vi": "Mình là đi tàu cao tốc đến Thượng Hải đấy (nhấn mạnh phương tiện)."
      },
      "example2": {
        "hanzi": "我们是在大学图书馆认识的。",
        "pinyin": "Wǒmen shì zài dàxué túshūguǎn rènshi de.",
        "vi": "Tụi mình là quen biết nhau ở thư viện trường đại học đấy (nhấn mạnh địa điểm)."
      }
    },
    {
      "id": "g-22",
      "title": "Cấu trúc so sánh bằng 跟/和...一样 / 不一样",
      "level": "Sơ cấp (HSK 2)",
      "pattern": "A + 跟/和 + B + 一样 (+ Tính từ)",
      "explanation": "Diễn tả hai sự vật có tính chất hoặc đặc điểm giống hệt nhau (hoặc khác nhau nếu dùng 不一样).",
      "example1": {
        "hanzi": "她的眼睛跟星星一样明亮。",
        "pinyin": "Tā de yǎnjing gēn xīngxing yíyàng míngliàng.",
        "vi": "Đôi mắt của cô ấy trong veo và sáng ngời như những vì sao tinh tú."
      },
      "example2": {
        "hanzi": "这个样品的质感跟原版一模一样。",
        "pinyin": "Zhège yàngpǐn de zhìgǎn gēn yuánbǎn yìmóyíyàng.",
        "vi": "Chất cảm của mẫu hàng này giống y xì đúc so với bản gốc."
      }
    },
    {
      "id": "g-23",
      "title": "Phân biệt lựa chọn: 还是 vs 或者",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "Câu hỏi: A + 还是 + B? | Câu khẳng định: A + 或者 + B",
      "explanation": "还是 dùng trong câu hỏi lựa chọn (muốn A hay B), 或者 dùng trong câu trần thuật khẳng định.",
      "example1": {
        "hanzi": "你想喝珍珠奶茶还是茉莉花茶？",
        "pinyin": "Nǐ xiǎng hē zhēnzhū nǎichá háishì mòlìhuā chá?",
        "vi": "Bạn muốn uống trà sữa trân châu hay là trà hoa nhài thế?"
      },
      "example2": {
        "hanzi": "周末我通常去图书馆看书，或者去公园散步。",
        "pinyin": "Zhōumò wǒ tōngcháng qù túshūguǎn kànshū, huòzhě qù gōngyuán sànbù.",
        "vi": "Cuối tuần mình thường đi thư viện đọc sách, hoặc dạo bộ thư thái ở công viên."
      }
    },
    {
      "id": "g-24",
      "title": "Cấu trúc 因为...所以... & 既然...就...",
      "level": "Sơ cấp - Trung cấp",
      "pattern": "因为 + [Nguyên nhân], 所以 + [Kết quả] | 既然 + [Tiền đề đã định], 就 + [Kết luận hành động]",
      "explanation": "Biểu thị mối quan hệ nhân quả khách quan (因为) hoặc dựa trên sự thật đã rồi để đưa ra quyết định (既然).",
      "example1": {
        "hanzi": "因为她工作认真负责，所以得到了大家的赞赏。",
        "pinyin": "Yīnwèi tā gōngzuò rènzhēn fùzé, suǒyǐ dédào le dàjiā de zànshǎng.",
        "vi": "Vì cô ấy làm việc chăm chỉ có trách nhiệm, nên đã nhận được sự tán thưởng từ mọi người."
      },
      "example2": {
        "hanzi": "既然开始了，就要全力以赴坚持到底。",
        "pinyin": "Jìrán kāishǐ le, jiù yào quánlì yǐ fù jiānchí dàodǐ.",
        "vi": "Một khi đã bắt đầu rồi thì hãy dốc hết sức mình kiên trì tới cùng nhé."
      }
    },
    {
      "id": "g-25",
      "title": "Bổ ngữ khả năng (V + 得 / 不 + Bổ ngữ)",
      "level": "Trung cấp (HSK 3 - 4)",
      "pattern": "Khẳng định: Động từ + 得 + Bổ ngữ | Phủ định: Động từ + 不 + Bổ ngữ",
      "explanation": "Biểu thị điều kiện chủ quan hoặc khách quan có cho phép thực hiện được hành động hay không (nhìn hiểu / không kịp / làm xong).",
      "example1": {
        "hanzi": "字写得太小了，我看不清楚。",
        "pinyin": "Zì xiě de tài xiǎo le, wǒ kàn bu qīngchu.",
        "vi": "Chữ viết nhỏ quá chừng, mình nhìn không rõ được."
      },
      "example2": {
        "hanzi": "相信自己，这点挑战你一定应付得来！",
        "pinyin": "Xiāngxìn zìjǐ, zhè diǎn tiǎozhàn nǐ yídìng yìngfu de lái!",
        "vi": "Hãy luôn tin tưởng vào chính mình, chút thử thách này bạn nhất định đối phó tốt thôi!"
      }
    }
  ],
  "chengyuBank": [
    {
      "id": "cy-1",
      "hanzi": "前程似锦",
      "pinyin": "qián chéng sì jǐn",
      "hanviet": "Tiền trình tự cẩm",
      "category": "Chúc phúc",
      "meaning": "Tương lai rực rỡ gấm hoa",
      "origin": "Ví con đường phía trước sáng lạn, đẹp đẽ như tấm gấm dệt thêu hoa.",
      "example": "毕业之际，祝你前程似锦，未来可期！",
      "exampleVi": "Nhân dịp tốt nghiệp, chúc bạn tiền đồ như gấm hoa, tương lai đầy hứa hẹn!"
    },
    {
      "id": "cy-2",
      "hanzi": "顺风顺水",
      "pinyin": "shùn fēng shùn shuǐ",
      "hanviet": "Thuận phong thuận thủy",
      "category": "Chúc phúc",
      "meaning": "Thuận buồm xuôi gió, hanh thông",
      "origin": "Thuyền đi thuận theo chiều gió và dòng nước thì bon bon về đích.",
      "example": "愿你往后的人生道路顺风顺水，一路坦途。",
      "exampleVi": "Mong đường đời sau này của bạn luôn thuận buồm xuôi gió, êm ả bình yên."
    },
    {
      "id": "cy-3",
      "hanzi": "心想事成",
      "pinyin": "xīn xiǎng shì chéng",
      "hanviet": "Tâm tưởng sự thành",
      "category": "Chúc phúc",
      "meaning": "Nghĩ gì được nấy, vạn sự toại nguyện",
      "origin": "Tâm niệm điều lương thiện tốt lành thì điều may mắn sẽ hóa hiện thực.",
      "example": "新年快乐，祝你新的一年心想事成！",
      "exampleVi": "Năm mới vui vẻ, chúc bạn một năm mới vạn điều toại nguyện!"
    },
    {
      "id": "cy-4",
      "hanzi": "万事如意",
      "pinyin": "wàn shì rú yì",
      "hanviet": "Vạn sự như ý",
      "category": "Chúc phúc",
      "meaning": "Muôn việc đều đúng theo ý nguyện",
      "origin": "Cây như ý thời cổ đại biểu trưng cho sự cát tường vô song.",
      "example": "祝各位同仁身体健康，万事如意！",
      "exampleVi": "Kính chúc toàn thể đồng nghiệp dồi dào sức khỏe, vạn sự như ý!"
    },
    {
      "id": "cy-5",
      "hanzi": "精益求精",
      "pinyin": "jīng yì qiú jīng",
      "hanviet": "Tinh ích cầu tinh",
      "category": "Công sở",
      "meaning": "Đã tinh xảo lại càng muốn tinh xảo hơn",
      "origin": "Xuất phát từ Luận Ngữ, chỉ tinh thần trau chuốt tỉ mỉ không ngừng.",
      "example": "对待产品质量，我们要有精益求精的工匠精神。",
      "exampleVi": "Đối với chất lượng sản phẩm, chúng ta phải giữ vững tinh thần nghệ nhân chu đáo tỉ mỉ."
    },
    {
      "id": "cy-6",
      "hanzi": "合作共赢",
      "pinyin": "hé zuò gòng yíng",
      "hanviet": "Hợp tác cộng doanh",
      "category": "Công sở",
      "meaning": "Hợp tác đôi bên cùng có lợi",
      "origin": "Triết lý kinh doanh hiện đại: chia sẻ giá trị và cùng nhau phát triển.",
      "example": "希望双方携手共进，实现合作共赢。",
      "exampleVi": "Hy vọng hai bên cùng kề vai sát cánh, hiện thực hóa mục tiêu hợp tác cùng thắng."
    },
    {
      "id": "cy-7",
      "hanzi": "物美价廉",
      "pinyin": "wù měi jià lián",
      "hanviet": "Vật mỹ giá liêm",
      "category": "Đời sống",
      "meaning": "Hàng đẹp giá rẻ, chất lượng tuyệt vời",
      "origin": "Đồ vật mỹ miều xinh xắn mà giá cả lại liêm khiết phải chăng.",
      "example": "这家店的小吃物美价廉，每天都排长队。",
      "exampleVi": "Quán ăn vặt này đồ ăn ngon rẻ, ngày nào khách cũng xếp hàng dài mua."
    },
    {
      "id": "cy-8",
      "hanzi": "岁月静好",
      "pinyin": "suì yuè jìng hǎo",
      "hanviet": "Tuế nguyệt tĩnh hảo",
      "category": "Đời sống",
      "meaning": "Năm tháng tĩnh lặng, êm đềm dịu dàng",
      "origin": "Câu văn trứ danh miêu tả cuộc sống an yên, không sóng gió huyên náo.",
      "example": "一本书，一杯茶，便是岁月静好的模样。",
      "exampleVi": "Một cuốn sách hay, một tách trà thơm, đó chính là dáng vẻ an yên của năm tháng dịu lành."
    },
    {
      "id": "cy-9",
      "hanzi": "苦尽甘来",
      "pinyin": "kǔ jìn gān lái",
      "hanviet": "Khổ tận cam lai",
      "category": "Động lực",
      "meaning": "Hết đắng cay đến ngày quả ngọt",
      "origin": "Trải qua những ngày tháng gian nan vất vả thì niềm vui ngọt ngào viên mãn chắc chắn sẽ tới.",
      "example": "咬牙坚持下去，终会苦尽甘来！",
      "exampleVi": "Hãy cắn răng kiên trì bước tiếp, ngày tháng ngọt ngào chắc chắn sẽ về!"
    },
    {
      "id": "cy-10",
      "hanzi": "一丝不苟",
      "pinyin": "yī sī bù gǒu",
      "hanviet": "Nhất ti bất cẩu",
      "category": "Công sở",
      "meaning": "Tỉ mỉ chu đáo, không chút cẩu thả",
      "origin": "Dù chỉ là một sợi tơ nhỏ xíu cũng không bao giờ làm qua loa đại khái.",
      "example": "她对待每一份数据报告都一丝不苟。",
      "exampleVi": "Cô ấy đối với từng bản báo cáo số liệu đều cẩn trọng chỉn chu đến từng chi tiết nhỏ."
    },
    {
      "id": "cy-11",
      "hanzi": "风雨同舟",
      "pinyin": "fēng yǔ tóng zhōu",
      "hanviet": "Phong vũ đồng châu",
      "category": "Tình cảm",
      "meaning": "Cùng chung một thuyền vượt qua giông bão",
      "origin": "Cùng ngồi trên một con thuyền thì dù phong ba bão táp vẫn luôn kề vai sát cánh.",
      "example": "感谢你一路以来的陪伴，愿我们风雨同舟。",
      "exampleVi": "Cảm ơn bạn đã luôn đồng hành suốt chặng đường qua, mong tụi mình mãi kề vai sát cánh vượt qua mọi sóng gió."
    },
    {
      "id": "cy-12",
      "hanzi": "金玉良言",
      "pinyin": "jīn yù liáng yán",
      "hanviet": "Kim ngọc lương ngôn",
      "category": "Giao tiếp",
      "meaning": "Lời nói quý giá như vàng ngọc",
      "origin": "Lời khuyên răn chân thành và sâu sắc tựa châu ngọc quý báu soi đường chỉ lối.",
      "example": "老师的一席话真可谓金玉良言，令我茅塞顿开。",
      "exampleVi": "Lời dặn của cô giáo quả thực là lời vàng ý ngọc, khiến em sáng tỏ tâm trí."
    },
    {
      "id": "cy-13",
      "hanzi": "名列前茅",
      "pinyin": "míng liè qián máo",
      "hanviet": "Danh liệt tiền mao",
      "category": "Học tập",
      "meaning": "Đứng ở top đầu, thành tích xuất sắc",
      "origin": "Thời xưa người cầm cờ lệnh đi đầu quân đội dẫn đường gọi là tiền mao.",
      "example": "通过勤奋学习，她的中文考试成绩名列前茅。",
      "exampleVi": "Nhờ chăm chỉ học tập, điểm thi tiếng Trung của cô ấy luôn đứng trong top đầu."
    },
    {
      "id": "cy-14",
      "hanzi": "举一反三",
      "pinyin": "jǔ yī fǎn sān",
      "hanviet": "Cử nhất phản tam",
      "category": "Học tập",
      "meaning": "Học một biết mười, suy luận thông minh",
      "origin": "Khổng Tử dạy: Nêu lên một góc mà không biết suy ra ba góc còn lại thì chưa thông suốt.",
      "example": "学中文只要掌握了规律，就能举一反三。",
      "exampleVi": "Học tiếng Trung chỉ cần nắm được quy luật là có thể học một biết mười ngay."
    },
    {
      "id": "cy-15",
      "hanzi": "落落大方",
      "pinyin": "luò luò dà fāng",
      "hanviet": "Lạc lạc đại phương",
      "category": "Khen ngợi",
      "meaning": "Ăn nói cử chỉ tự nhiên, đĩnh đạc duyên dáng",
      "origin": "Phong thái tự tin, không e dè gượng gạo khi giao tiếp trước đám đông.",
      "example": "她在面试时举止优雅，落落大方。",
      "exampleVi": "Trong buổi phỏng vấn cô ấy cử chỉ thanh lịch, đĩnh đạc và tự tin vô cùng."
    },
    {
      "id": "cy-16",
      "hanzi": "蒸蒸日上",
      "pinyin": "zhēng zhēng rì shàng",
      "hanviet": "Chưng chưng nhật thượng",
      "category": "Công sở",
      "meaning": "Phát triển ngày một đi lên như hơi nước bốc lên",
      "origin": "Khí thế bừng bừng bốc lên cao mỗi ngày, chỉ sự nghiệp thăng hoa thịnh vượng.",
      "example": "祝愿贵公司的业务在新的一年蒸蒸日上！",
      "exampleVi": "Kính chúc hoạt động kinh doanh của quý công ty trong năm mới ngày càng thăng hoa phát đạt!"
    },
    {
      "id": "cy-17",
      "hanzi": "豁然开朗",
      "pinyin": "huò rán kāi lǎng",
      "hanviet": "Hoát nhiên khai lãng",
      "category": "Động lực",
      "meaning": "Bừng sáng, thông suốt mọi lẽ",
      "origin": "Đào Uyên Minh miêu tả Đào Hoa Nguyên: đi qua hang hẹp chợt thấy cảnh sắc mở rộng bừng sáng.",
      "example": "听了他这番解释，我心中豁然开朗。",
      "exampleVi": "Nghe anh ấy giải thích xong phen này, lòng tôi bỗng thấy bừng sáng và thông suốt hẳn."
    },
    {
      "id": "cy-18",
      "hanzi": "坚持不懈",
      "pinyin": "jiān chí bú xiè",
      "hanviet": "Kiên trì bất giải",
      "category": "Học tập",
      "meaning": "Kiên trì bền bỉ không bao giờ buông xuôi",
      "origin": "Ý chí kiên định không hề lười biếng buông lơi dù gặp bất cứ gian nan nào.",
      "example": "只要坚持不懈，你的中文发音一定会越来越地道。",
      "exampleVi": "Chỉ cần kiên trì không ngừng nghỉ, phát âm tiếng Trung của bạn nhất định sẽ ngày càng chuẩn chỉnh chuẩn bản xứ."
    },
    {
      "id": "cy-19",
      "hanzi": "锦上添花",
      "pinyin": "jǐn shàng tiān huā",
      "hanviet": "Cẩm thượng thiêm hoa",
      "category": "Khen ngợi",
      "meaning": "Dệt hoa trên gấm, đã đẹp càng thêm rạng ngời",
      "origin": "Tấm vải gấm hoa đã lộng lẫy nay lại thêu thêm bông hoa xinh đẹp, làm cho điều tốt càng thêm hoàn mỹ.",
      "example": "你的精彩发言为今天的晚会锦上添花。",
      "exampleVi": "Bài phát biểu xuất sắc của bạn đã làm cho đêm tiệc hôm nay thêm phần trọn vẹn và rạng rỡ."
    },
    {
      "id": "cy-20",
      "hanzi": "循序渐进",
      "pinyin": "xún xù jiàn jìn",
      "hanviet": "Tuần tự tiệm tiến",
      "category": "Học tập",
      "meaning": "Từng bước vững vàng theo trình tự",
      "origin": "Học tập hay làm việc cần đi từng bước tuần tự từ dễ đến nâng cao, không nóng vội.",
      "example": "学语言不能急于求成，应当循序渐进。",
      "exampleVi": "Học ngoại ngữ không thể nóng vội muốn đốt cháy giai đoạn, mà cần tuần tự tiệm tiến từng bước một."
    },
    {
      "id": "cy-21",
      "hanzi": "井井有条",
      "pinyin": "jǐng jǐng yǒu tiáo",
      "hanviet": "Tỉnh tỉnh hữu điều",
      "category": "Công sở",
      "meaning": "Gọn gàng ngăn nắp, trật tự đâu ra đấy",
      "origin": "Bố cục ngăn nắp có hàng có lối rõ ràng như ô bàn cờ.",
      "example": "她把办公室整理得井井有条，效率极高。",
      "exampleVi": "Cô ấy sắp xếp bàn làm việc ngăn nắp trật tự đâu ra đấy, hiệu suất công việc cực kỳ cao."
    },
    {
      "id": "cy-22",
      "hanzi": "聚沙成塔",
      "pinyin": "jù shā chéng tǎ",
      "hanviet": "Tụ sa thành tháp",
      "category": "Động lực",
      "meaning": "Gom cát thành tháp, tích tiểu thành đại",
      "origin": "Từng hạt cát nhỏ gom góp lâu ngày sẽ dựng nên tòa tháp cao vút.",
      "example": "每天背十个生词，聚沙成塔，词汇量自然惊人。",
      "exampleVi": "Mỗi ngày học thuộc mười từ vựng mới, gom cát thành tháp, vốn từ vựng tự nhiên sẽ phong phú đáng kinh ngạc."
    },
    {
      "id": "cy-23",
      "hanzi": "旗开得胜",
      "pinyin": "qí kāi dé shèng",
      "hanviet": "Kỳ khai đắc thắng",
      "category": "Công sở",
      "meaning": "Cờ vừa phất là chiến thắng, khởi đầu mỹ mãn",
      "origin": "Lá cờ lệnh vừa mở ra là quân sĩ giành ngay thắng lợi giòn giã.",
      "example": "祝愿你在明天的面试中旗开得胜！",
      "exampleVi": "Chúc bạn trong buổi phỏng vấn ngày mai khởi đầu suôn sẻ, cờ mở là thắng lợi nhé!"
    },
    {
      "id": "cy-24",
      "hanzi": "熟能生巧",
      "pinyin": "shóu néng shēng qiǎo",
      "hanviet": "Thục năng sinh xảo",
      "category": "Học tập",
      "meaning": "Trăm hay không bằng tay quen, rèn luyện tạo kỹ năng",
      "origin": "Người bán dầu rót dầu qua lỗ đồng tiền mà không dính một giọt nhờ đôi tay thuần thục qua năm tháng.",
      "example": "汉字多写几遍，熟能生巧，自然就记住了。",
      "exampleVi": "Chữ Hán viết đi viết lại nhiều lần, trăm hay không bằng tay quen, tự nhiên sẽ nhớ như in."
    },
    {
      "id": "cy-25",
      "hanzi": "侃侃而谈",
      "pinyin": "kǎn kǎn ér tán",
      "hanviet": "Khản khản nhi đàm",
      "category": "Giao tiếp",
      "meaning": "Nói năng lưu loát, đĩnh đạc tự tin",
      "origin": "Thái độ ung dung, lời lẽ mạch lạc gãy gọn khi trình bày ý kiến.",
      "example": "他在商务洽谈会上侃侃而谈，征服了客户。",
      "exampleVi": "Anh ấy tại buổi đàm phán thương mại đã tự tin lưu loát trình bày, chinh phục hoàn toàn đối tác."
    },
    {
      "id": "cy-26",
      "hanzi": "欣欣向荣",
      "pinyin": "xīn xīn xiàng róng",
      "hanviet": "Hân hân hướng vinh",
      "category": "Động lực",
      "meaning": "Vui tươi tràn đầy sức sống, hưng thịnh phồn vinh",
      "origin": "Cỏ cây hoa lá mùa xuân đâm chồi nảy lộc mơn mởn ngập tràn sinh khí.",
      "example": "看到我们的项目欣欣向荣，大家都很振奋。",
      "exampleVi": "Nhìn thấy dự án của tụi mình ngày càng tràn trề sức sống và phát triển, mọi người đều rất phấn khởi."
    },
    {
      "id": "cy-27",
      "hanzi": "乘风破浪",
      "pinyin": "chéng fēng pò làng",
      "hanviet": "Thừa phong phá lãng",
      "category": "Động lực",
      "meaning": "Cưỡi gió vượt sóng lớn, dũng cảm tiến bước",
      "origin": "Dũng khí giương buồm vượt qua muôn trùng sóng gió để vươn ra biển lớn.",
      "example": "愿女孩无论面对什么困难，都能乘风破浪！",
      "exampleVi": "Chúc cô gái dù đứng trước bất kỳ khó khăn nào cũng luôn vững vàng cưỡi gió vượt sóng lớn!"
    },
    {
      "id": "cy-28",
      "hanzi": "一见如故",
      "pinyin": "yí jiàn rú gù",
      "hanviet": "Nhất kiến như cố",
      "category": "Tình cảm",
      "meaning": "Vừa gặp đã thân quen như tri kỷ lâu năm",
      "origin": "Lần đầu gặp gỡ mà tâm đầu ý hợp tựa như đôi bạn thân thuở nào.",
      "example": "我和她性格很合，初次见面就一见如故。",
      "exampleVi": "Mình và cô ấy tính cách rất hợp nhau, lần đầu gặp gỡ mà ngỡ như đã thân thiết tự bao giờ."
    },
    {
      "id": "cy-29",
      "hanzi": "迎刃而解",
      "pinyin": "yíng rèn ér jiě",
      "hanviet": "Nghênh nhận nhi giải",
      "category": "Công sở",
      "meaning": "Mọi khó khăn trắc trở đều thuận lợi tháo gỡ",
      "origin": "Lưỡi dao bén vừa chạm vào là cây tre tự chẻ đôi ngọt ngào, chỉ sự việc được giải quyết êm đẹp.",
      "example": "只要抓住了核心问题，其他麻烦都会迎刃而解。",
      "exampleVi": "Chỉ cần nắm bắt đúng vấn đề cốt lõi, những phiền toái khác đều sẽ thuận lợi tháo gỡ ngọt ngào."
    },
    {
      "id": "cy-30",
      "hanzi": "鹏程万里",
      "pinyin": "péng chéng wàn lǐ",
      "hanviet": "Bằng trình vạn dặm",
      "category": "Động lực",
      "meaning": "Tương lai thênh thang xán lạn bay cao bay xa",
      "origin": "Chim Bằng khổng lồ dang rộng cánh bay lượn muôn trùng ngàn dặm trên trời xanh.",
      "example": "毕业之际，祝愿大家前程远大，鹏程万里！",
      "exampleVi": "Nhân dịp tốt nghiệp, chúc các bạn tương lai rộng mở, sự nghiệp bay cao vạn dặm thênh thang!"
    },
    {
      "id": "cy-31",
      "hanzi": "心旷神怡",
      "pinyin": "xīn kuàng shén yí",
      "hanviet": "Tâm khoáng thần di",
      "category": "Khen ngợi",
      "meaning": "Tâm hồn thảnh thơi, khoan khoái dễ chịu",
      "origin": "Đứng trước cảnh sắc hữu tình làm lòng người bừng sáng nhẹ nhõm an vui.",
      "example": "漫步在樱花树下，令人心旷神怡。",
      "exampleVi": "Dạo bước dưới tán hoa anh đào làm cho tâm hồn ai nấy đều khoan khoái và thư thái lạ kỳ."
    },
    {
      "id": "cy-32",
      "hanzi": "美轮美奂",
      "pinyin": "měi lún měi huàn",
      "hanviet": "Mỹ luân mỹ hoán",
      "category": "Khen ngợi",
      "meaning": "Xinh đẹp tuyệt trần, lộng lẫy nguy nga",
      "origin": "Khen ngợi kiến trúc hoặc vẻ đẹp visual hoa lệ, tinh xảo tuyệt tác.",
      "example": "这座中式园林的设计真是美轮美奂。",
      "exampleVi": "Thiết kế của khu vườn phong cách Trung Hoa này quả thực là lộng lẫy và tinh xảo vô cùng."
    }
  ],
  "lessonsCatalog": [
    {
      "id": "l1-1",
      "levelId": 1,
      "levelName": "Cấp 1 — Mới bắt đầu",
      "title": "Chào hỏi cơ bản & 1001 cách gây thiện cảm",
      "skill": "Giao tiếp",
      "duration": "8 phút",
      "badge": "Nhập môn 🌸",
      "badgeColor": "bg-pink-100 text-pink-700",
      "summary": "10 từ vựng chào hỏi, phân biệt 你好 (nǐ hǎo) và 您好 (nín hǎo) để sếp khen tinh tế.",      "bookmarked": true,
      "detail": {
        "objective": "Biết cách xưng hô lịch thiệp theo vai vế, chào hỏi các buổi sáng/trưa/chiều/tối.",
        "vocab": [
          {
            "hanzi": "你好",
            "pinyin": "nǐ hǎo",
            "meaning": "Xin chào (thân mật)"
          },
          {
            "hanzi": "您好",
            "pinyin": "nín hǎo",
            "meaning": "Xin chào sếp/khách hàng (kính cẩn)"
          },
          {
            "hanzi": "早上好",
            "pinyin": "zǎoshang hǎo",
            "meaning": "Chào buổi sáng rạng rỡ!"
          },
          {
            "hanzi": "晚安",
            "pinyin": "wǎn'ān",
            "meaning": "Chúc ngủ ngon nhé!"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Ngọc Ánh 🌸",
            "text": "王总，早上好！",
            "pinyin": "Wáng zǒng, zǎoshang hǎo!",
            "vi": "Chào buổi sáng sếp Vương ạ!"
          },
          {
            "role": "B",
            "name": "Sếp Vương 👨‍💼",
            "text": "小玉早上好，今天精神不错！",
            "pinyin": "Xiǎo Yù zǎoshang hǎo, jīntiān jīngshén bùcuò!",
            "vi": "Chào buổi sáng Tiểu Ánh, hôm nay tinh thần tốt quá nha!"
          }
        ],
        "memoryTip": "💡 Chữ '您' có thêm bộ 'Tâm' (心) ở dưới -> Chào người lớn bằng cả tấm lòng chân thành!",
        "miniQuiz": {
          "question": "Khi gửi lời chào sếp vào buổi sáng, bạn nên dùng câu nào?",
          "options": [
            "A. 您好，早上好！",
            "B. 晚安！",
            "C. 喂，快点！"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! Lời chào sáng lịch thiệp giúp nàng ghi trọn 10 điểm chuyên nghiệp!"
        }
      }
    },
    {
      "id": "l1-2",
      "levelId": 1,
      "levelName": "Cấp 1 — Mới bắt đầu",
      "title": "Mẹo viết bộ Nữ (女) và bộ Khẩu (口) không bao giờ quên",
      "skill": "Luyện viết",
      "duration": "6 phút",
      "badge": "Chữ Hán ✍️",
      "badgeColor": "bg-purple-100 text-purple-700",
      "summary": "Quy tắc bút thuận, chiết tự hình ảnh cô gái và cái miệng đang cười.",      "bookmarked": false,
      "detail": {
        "objective": "Viết đúng 3 nét của bộ Nữ (女) và 3 nét của bộ Khẩu (口), hiểu cách ghép chữ 好 (tốt đẹp).",
        "vocab": [
          {
            "hanzi": "女",
            "pinyin": "nǚ",
            "meaning": "Phụ nữ, con gái"
          },
          {
            "hanzi": "口",
            "pinyin": "kǒu",
            "meaning": "Cái miệng, khẩu vị"
          },
          {
            "hanzi": "好",
            "pinyin": "hǎo",
            "meaning": "Tốt lành, đẹp đẽ"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Mimi 🐰",
            "text": "写汉字就像画画一样开心！",
            "pinyin": "Xiě hànzì jiù xiàng huàhuà yīyàng kāixīn!",
            "vi": "Viết chữ Hán như vẽ tranh vui ơi là vui!"
          }
        ],
        "memoryTip": "💡 Chữ 'Khẩu' (口) là cái miệng tròn xoe, chữ 'Nữ' (女) là cô gái duyên dáng!",
        "miniQuiz": {
          "question": "Chữ '好' (Hảo) mang ý nghĩa là gì?",
          "options": [
            "A. Xấu xí",
            "B. Tốt đẹp, bình an",
            "C. Buồn bã"
          ],
          "correctIndex": 1,
          "explanation": "Chuẩn luôn! 'Hảo' là điều tốt đẹp và bình an nhất 💐"
        }
      }
    },
    {
      "id": "l1-3",
      "levelId": 1,
      "levelName": "Cấp 1 — Mới bắt đầu",
      "title": "Bảng số đếm 1-100 & Bí kíp mặc cả săn sale Taobao",
      "skill": "Đời sống",
      "duration": "9 phút",
      "badge": "Mua sắm 🛍️",
      "badgeColor": "bg-amber-100 text-amber-700",
      "summary": "Cách đọc số tiền tệ (块/元), hỏi giá bao nhiêu tiền (多少钱) và xin bớt giá.",      "bookmarked": false,
      "detail": {
        "objective": "Đọc trôi chảy số đếm, biết cách hỏi giá sản phẩm và đề nghị freeship.",
        "vocab": [
          {
            "hanzi": "多少钱",
            "pinyin": "duōshǎo qián",
            "meaning": "Bao nhiêu tiền vậy ạ?"
          },
          {
            "hanzi": "太贵了",
            "pinyin": "tài guì le",
            "meaning": "Đắt quá rồi nè!"
          },
          {
            "hanzi": "包邮",
            "pinyin": "bāoyóu",
            "meaning": "Freeship nha shop"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Ngọc Ánh 🌸",
            "text": "老板，这件裙子多少钱？",
            "pinyin": "Lǎobǎn, zhè jiàn qúnzi duōshǎo qián?",
            "vi": "Chủ quán ơi, chiếc váy này giá bao nhiêu tiền vậy ạ?"
          },
          {
            "role": "B",
            "name": "Chủ shop 👗",
            "text": "八十八块，给你包邮！",
            "pinyin": "Bāshíbā kuài, gěi nǐ bāoyóu!",
            "vi": "88 tệ thôi em ơi, freeship tận nhà luôn nha!"
          }
        ],
        "memoryTip": "💡 Nhớ số 8 (Bát - 八) đọc là 'bā', nghe như 'phát' -> Giá 88 tệ là cực kỳ phát tài!",
        "miniQuiz": {
          "question": "Muốn hỏi 'Cái này bao nhiêu tiền?', bạn nói câu nào?",
          "options": [
            "A. 这个多少钱？",
            "B. 谢谢你！",
            "C. 对不起！"
          ],
          "correctIndex": 0,
          "explanation": "Quá chuẩn! '这个多少钱？' là câu hỏi giá quốc dân khi đi mua sắm!"
        }
      }
    },
    {
      "id": "l2-1",
      "levelId": 2,
      "levelName": "Cấp 2 — Cơ bản",
      "title": "Luyện tai: Bí kíp order trà sữa Đài Loan chuẩn chỉnh",
      "skill": "Luyện nghe",
      "duration": "7 phút",
      "badge": "Trà sữa 🧋",
      "badgeColor": "bg-pink-100 text-pink-700",
      "summary": "Phân biệt mức đường (半糖/微糖), mức đá (微冰/去冰) và các loại thạch topping.",      "bookmarked": true,
      "detail": {
        "objective": "Nghe hiểu câu hỏi của nhân viên quán trà sữa và tự tin gọi đúng hương vị yêu thích.",
        "vocab": [
          {
            "hanzi": "珍珠奶茶",
            "pinyin": "zhēnzhū nǎichá",
            "meaning": "Trà sữa trân châu"
          },
          {
            "hanzi": "半糖",
            "pinyin": "bàn táng",
            "meaning": "50% đường"
          },
          {
            "hanzi": "微冰",
            "pinyin": "wēi bīng",
            "meaning": "Ít đá (healthy)"
          },
          {
            "hanzi": "打包",
            "pinyin": "dǎbāo",
            "meaning": "Mang đi (take away)"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Thu ngân 🧋",
            "text": "欢迎光临，需要什么甜度和冰块？",
            "pinyin": "Huānyíng guānglín, xūyào shénme tiándù hé bīngkuài?",
            "vi": "Kính chào quý khách, bạn muốn mức đường và đá thế nào ạ?"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "大杯珍珠奶茶，半糖微冰，打包。",
            "pinyin": "Dàbēi zhēnzhū nǎichá, bàn táng wēi bīng, dǎbāo.",
            "vi": "Cho mình một ly lớn trân châu, nửa đường ít đá mang về nhé!"
          }
        ],
        "memoryTip": "💡 Từ 'Vi' (微) nghĩa là cực nhỏ -> 'Vi băng' (微冰) là chỉ một xíu đá thôi!",
        "miniQuiz": {
          "question": "'半糖' (bàn táng) nghĩa là gì?",
          "options": [
            "A. 100% đường ngọt lịm",
            "B. Nửa đường (50% đường)",
            "C. Không đường"
          ],
          "correctIndex": 1,
          "explanation": "Chính xác! 'Bán' nghĩa là một nửa, 50% ngọt thanh vừa vặn!"
        }
      }
    },
    {
      "id": "l2-2",
      "levelId": 2,
      "levelName": "Cấp 2 — Cơ bản",
      "title": "Hỏi đường & Đặt xe công nghệ Didi không lo lạc",
      "skill": "Giao tiếp",
      "duration": "8 phút",
      "badge": "Du lịch 🚗",
      "badgeColor": "bg-emerald-100 text-emerald-700",
      "summary": "Mẫu câu hỏi vị trí, quẹo trái, quẹo phải, chỉ đường và gọi tài xế đón.",      "bookmarked": false,
      "detail": {
        "objective": "Chỉ đường bằng tiếng Trung, xác nhận biển số xe và điểm đến an toàn.",
        "vocab": [
          {
            "hanzi": "在哪里",
            "pinyin": "zài nǎlǐ",
            "meaning": "Ở đâu thế ạ?"
          },
          {
            "hanzi": "左拐",
            "pinyin": "zuǒ guǎi",
            "meaning": "Quẹo trái"
          },
          {
            "hanzi": "右拐",
            "pinyin": "yòu guǎi",
            "meaning": "Quẹo phải"
          },
          {
            "hanzi": "直走",
            "pinyin": "zhí zǒu",
            "meaning": "Đi thẳng một mạch"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Ngọc Ánh 🌸",
            "text": "师傅，请问去地铁站怎么走？",
            "pinyin": "Shīfu, qǐngwèn qù dìtiě zhàn zěnme zǒu?",
            "vi": "Bác ơi, cho cháu hỏi đường ra ga tàu điện ngầm đi thế nào ạ?"
          },
          {
            "role": "B",
            "name": "Bác tài 🚕",
            "text": "直走一百米，然后右拐就到了。",
            "pinyin": "Zhí zǒu yībǎi mǐ, ránhòu yòu guǎi jiù dào le.",
            "vi": "Cháu cứ đi thẳng 100 mét rồi quẹo phải là tới ngay nha."
          }
        ],
        "memoryTip": "💡 'Trực tẩu' (直走) là đi thẳng, nhớ từ 'Trực' như đường thẳng tắp!",
        "miniQuiz": {
          "question": "'右拐' (yòu guǎi) có nghĩa là gì?",
          "options": [
            "A. Quẹo phải",
            "B. Quẹo trái",
            "C. Quay đầu xe"
          ],
          "correctIndex": 0,
          "explanation": "Chuẩn rồi! 'Hữu' (右) là bên phải -> Quẹo phải nhé!"
        }
      }
    },
    {
      "id": "l2-3",
      "levelId": 2,
      "levelName": "Cấp 2 — Cơ bản",
      "title": "Tám chuyện sở thích, thú cưng & Cuộc sống hằng ngày",
      "skill": "Giao tiếp",
      "duration": "7 phút",
      "badge": "Dễ thương 🐾",
      "badgeColor": "bg-purple-100 text-purple-700",
      "summary": "Kể về chú mèo, chú cún cưng, xem phim cuối tuần và món ăn yêu thích.",      "bookmarked": false,
      "detail": {
        "objective": "Tự tin mở lời trò chuyện về chủ đề thú cưng và sở thích thư giãn cuối tuần.",
        "vocab": [
          {
            "hanzi": "可爱",
            "pinyin": "kě'ài",
            "meaning": "Đáng yêu, dễ thương"
          },
          {
            "hanzi": "猫咪",
            "pinyin": "māomī",
            "meaning": "Bé mèo cưng"
          },
          {
            "hanzi": "散步",
            "pinyin": "sànbù",
            "meaning": "Đi dạo bộ hóng mát"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Bạn 🌸",
            "text": "你家的小猫真可爱！",
            "pinyin": "Nǐ jiā de xiǎomāo zhēn kě'ài!",
            "vi": "Bé mèo nhà bạn trông cưng quá đi!"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "谢谢！它平时最喜欢晒太阳了。",
            "pinyin": "Xièxiè! Tā píngshí zuì xǐhuān shài tàiyáng le.",
            "vi": "Cảm ơn bạn! Ẻm ngày thường thích nhất là tắm nắng đó."
          }
        ],
        "memoryTip": "💡 Chữ 'Ái' (爱) là yêu, 'Khả ái' (可爱) nghĩa là đáng để yêu thương!",
        "miniQuiz": {
          "question": "'可爱' (kě'ài) dịch sang tiếng Việt là gì?",
          "options": [
            "A. Đáng yêu, dễ thương",
            "B. Lạnh lùng",
            "C. Tức giận"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác 100%! 'Khả ái' chính là siêu cấp đáng yêu!"
        }
      }
    },
    {
      "id": "l3-1",
      "levelId": 3,
      "levelName": "Cấp 3 — Sơ trung cấp",
      "title": "Đi khám bệnh & Miêu tả cảm xúc mệt mỏi",
      "skill": "Đời sống",
      "duration": "8 phút",
      "badge": "Sức khỏe 💊",
      "badgeColor": "bg-blue-100 text-blue-700",
      "summary": "Cách nói triệu chứng cảm cúm, đau đầu, sốt và dặn dò uống thuốc theo toa.",      "bookmarked": false,
      "detail": {
        "objective": "Giao tiếp với bác sĩ hoặc dược sĩ tại nhà thuốc khi bị ốm.",
        "vocab": [
          {
            "hanzi": "感冒",
            "pinyin": "gǎnmào",
            "meaning": "Cảm cúm"
          },
          {
            "hanzi": "头疼",
            "pinyin": "tóuténg",
            "meaning": "Đau đầu"
          },
          {
            "hanzi": "休息",
            "pinyin": "xiūxi",
            "meaning": "Nghỉ ngơi"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Bác sĩ 👨‍⚕️",
            "text": "你哪里不舒服？",
            "pinyin": "Nǐ nǎlǐ bù shūfu?",
            "vi": "Cháu thấy không khỏe ở chỗ nào?"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "我有点头疼，嗓子也不舒服。",
            "pinyin": "Wǒ yǒudiǎn tóuténg, sǎngzi yě bù shūfu.",
            "vi": "Cháu hơi đau đầu và cổ họng cũng thấy khó chịu ạ."
          }
        ],
        "memoryTip": "💡 Chữ 'Hưu tức' (休息) gồm Hưu (nghỉ) và Tức (hơi thở) -> Thở sâu thư thái nghỉ ngơi!",
        "miniQuiz": {
          "question": "Khi bị nhức đầu, bạn sẽ nói thế nào?",
          "options": [
            "A. 我头疼",
            "B. 我很饿",
            "C. 我想喝水"
          ],
          "correctIndex": 0,
          "explanation": "'头' là đầu, '疼' là đau -> '我头疼' là em bị đau đầu ạ!"
        }
      }
    },
    {
      "id": "l3-2",
      "levelId": 3,
      "levelName": "Cấp 3 — Sơ trung cấp",
      "title": "Bắt trend Douyin: Các từ lóng hot nhất mạng xã hội",
      "skill": "Xu hướng",
      "duration": "9 phút",
      "badge": "Trend Douyin 📱",
      "badgeColor": "bg-purple-100 text-purple-700",
      "summary": "Học các từ lóng: 绝了 (đỉnh nóc kịch trần), 冲鸭 (tiến lên nào), 种草 (bị mê mẩn).",      "bookmarked": true,
      "detail": {
        "objective": "Hiểu bình luận video Douyin, nói chuyện hài hước tự nhiên như giới trẻ Bắc Kinh.",
        "vocab": [
          {
            "hanzi": "绝了",
            "pinyin": "jué le",
            "meaning": "Đỉnh chóp, đỉnh nóc kịch trần!"
          },
          {
            "hanzi": "冲鸭",
            "pinyin": "chōng yā",
            "meaning": "Cố lên, xông lên nào (cute)!"
          },
          {
            "hanzi": "种草",
            "pinyin": "zhòngcǎo",
            "meaning": "Mê mẩn muốn mua món đồ nào đó"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Mimi 🐰",
            "text": "你看这个包包，真的太绝了！",
            "pinyin": "Nǐ kàn zhège bāobāo, zhēnde tài jué le!",
            "vi": "Cậu nhìn chiếc túi này đi, đỉnh thực sự luôn á!"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "哇，我被彻底种草了！",
            "pinyin": "Wā, wǒ bèi chèdǐ zhòngcǎo le!",
            "vi": "Oa, mình bị mê mẩn chiếc túi này mất rồi!"
          }
        ],
        "memoryTip": "💡 'Trồng cỏ' (种草) là gieo niềm đam mê vào lòng -> Nghĩa là u mê muốn chốt đơn!",
        "miniQuiz": {
          "question": "Khi muốn khen một điều gì đó đỉnh chóp tuyệt đối, bạn nói:",
          "options": [
            "A. 太绝了！",
            "B. 不怎么样",
            "C. 麻烦了"
          ],
          "correctIndex": 0,
          "explanation": "'太绝了！' là câu cửa miệng khen ngợi số 1 trên Douyin!"
        }
      }
    },
    {
      "id": "l3-3",
      "levelId": 3,
      "levelName": "Cấp 3 — Sơ trung cấp",
      "title": "Nhắn tin WeChat & Rủ bạn bè đi ăn lẩu cuối tuần",
      "skill": "Giao tiếp",
      "duration": "7 phút",
      "badge": "Ăn lẩu 🍲",
      "badgeColor": "bg-rose-100 text-rose-700",
      "summary": "Cách nhắn tin lịch thiệp, hẹn giờ gặp mặt, chọn vị lẩu cay hay lẩu nấm.",      "bookmarked": false,
      "detail": {
        "objective": "Soạn tin nhắn rủ bạn bè đi ăn lẩu Haidilao, hỏi giờ giấc và vị nước lẩu ưa thích.",
        "vocab": [
          {
            "hanzi": "火锅",
            "pinyin": "huǒguō",
            "meaning": "Lẩu (nồi lẩu ấm áp)"
          },
          {
            "hanzi": "聚会",
            "pinyin": "jùhuì",
            "meaning": "Tụ họp, hẹn hò nhóm"
          },
          {
            "hanzi": "不见不散",
            "pinyin": "bùjiàn bùsàn",
            "meaning": "Không gặp không về nhé!"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Bạn 🌸",
            "text": "周末晚上我们去吃海底捞火锅吧？",
            "pinyin": "Zhōumò wǎnshang wǒmen qù chī Hǎidǐlāo huǒguō ba?",
            "vi": "Tối cuối tuần tụi mình đi ăn lẩu Haidilao nha?"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "太好啦！周六晚上七点，不见不散！",
            "pinyin": "Tài hǎo la! Zhōuliù wǎnshang qī diǎn, bùjiàn bùsàn!",
            "vi": "Tuyệt vời luôn! 7 giờ tối thứ Bảy, không gặp không về nha!"
          }
        ],
        "memoryTip": "💡 'Bất kiến bất tán' (不见不散) là lời hẹn son sắt: Chưa gặp mặt là chưa được ra về!",
        "miniQuiz": {
          "question": "Lời hẹn 'Không gặp không về' trong tiếng Trung là gì?",
          "options": [
            "A. 不见不散",
            "B. 没事儿",
            "C. 明天见"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! '不见不散' là câu chốt lịch hẹn siêu đáng yêu!"
        }
      }
    },
    {
      "id": "l4-1",
      "levelId": 4,
      "levelName": "Cấp 4 — Trung cấp",
      "title": "Bình luận phim ảnh & Thảo luận gu âm nhạc C-Pop",
      "skill": "Nâng cao",
      "duration": "10 phút",
      "badge": "C-Pop 🎵",
      "badgeColor": "bg-indigo-100 text-indigo-700",
      "summary": "Bình luận cốt truyện, diễn xuất của diễn viên và bài hát nhạc phim xúc động.",      "bookmarked": false,
      "detail": {
        "objective": "Diễn đạt cảm nhận sâu sắc về các tác phẩm nghệ thuật, phim ảnh và âm nhạc bằng tiếng Trung.",
        "vocab": [
          {
            "hanzi": "感动",
            "pinyin": "gǎndòng",
            "meaning": "Cảm động, xúc động"
          },
          {
            "hanzi": "演技",
            "pinyin": "yǎnjì",
            "meaning": "Kỹ năng diễn xuất"
          },
          {
            "hanzi": "旋律",
            "pinyin": "xuánlǜ",
            "meaning": "Giai điệu âm nhạc"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Mimi 🐰",
            "text": "你觉得这部电影怎么样？",
            "pinyin": "Nǐ juéde zhè bù diànyǐng zěnme yàng?",
            "vi": "Cậu thấy bộ phim này thế nào?"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "剧情很感人，主题曲的旋律也很优美。",
            "pinyin": "Jùqíng hěn gǎnrén, zhǔtíqū de xuánlǜ yě hěn yōuměi.",
            "vi": "Cốt truyện rất cảm động, giai điệu bài hát chủ đề cũng vô cùng thanh tao."
          }
        ],
        "memoryTip": "💡 'Cảm động' (感动) là con tim (心) bị lay động trước những điều chân thực!",
        "miniQuiz": {
          "question": "Từ nào mang nghĩa là 'kỹ năng diễn xuất' của diễn viên?",
          "options": [
            "A. 演技",
            "B. 音乐",
            "C. 歌声"
          ],
          "correctIndex": 0,
          "explanation": "'Diễn kỹ' (演技) chính là khả năng biến hóa diễn xuất của diễn viên!"
        }
      }
    },
    {
      "id": "l4-2",
      "levelId": 4,
      "levelName": "Cấp 4 — Trung cấp",
      "title": "Bày tỏ quan điểm & Nghệ thuật khen ngợi tinh tế",
      "skill": "Thuyết trình",
      "duration": "9 phút",
      "badge": "EQ Cao ✨",
      "badgeColor": "bg-pink-100 text-pink-700",
      "summary": "Cách khen ngợi gu thời trang, năng lực làm việc và phong thái đĩnh đạc.",      "bookmarked": true,
      "detail": {
        "objective": "Nâng tầm nghệ thuật giao tiếp với các từ ngữ tinh tế, giàu sắc thái biểu cảm.",
        "vocab": [
          {
            "hanzi": "气质",
            "pinyin": "qìzhì",
            "meaning": "Khí chất thanh tao"
          },
          {
            "hanzi": "有品味",
            "pinyin": "yǒu pǐnwèi",
            "meaning": "Có gu, có gu thẩm mỹ cao"
          },
          {
            "hanzi": "佩服",
            "pinyin": "pèifú",
            "meaning": "Khâm phục, ngưỡng mộ"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Bạn 🌸",
            "text": "你今天的打扮特别有气质！",
            "pinyin": "Nǐ jīntiān de dǎban tèbié yǒu qìzhì!",
            "vi": "Hôm nay bạn diện đồ trông khí chất ngời ngời luôn á!"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "谢谢夸奖，你平时的穿搭也很有品味呢。",
            "pinyin": "Xièxiè kuājiǎng, nǐ píngshí de chuāndā yě hěn yǒu pǐnwèi ne.",
            "vi": "Cảm ơn bạn đã khen, gu phối đồ ngày thường của bạn cũng đỉnh lắm đó nha."
          }
        ],
        "memoryTip": "💡 'Khí chất' (气质) là vẻ đẹp toát ra từ tâm hồn và phong thái bên trong!",
        "miniQuiz": {
          "question": "Khen một người 'rất có gu thẩm mỹ', bạn dùng cụm từ nào?",
          "options": [
            "A. 很有品味",
            "B. 很无聊",
            "C. 很难看"
          ],
          "correctIndex": 0,
          "explanation": "'Hữu phẩm vị' (很有品味) là lời khen sang trọng dành cho người có gu!"
        }
      }
    },
    {
      "id": "l4-3",
      "levelId": 4,
      "levelName": "Cấp 4 — Trung cấp",
      "title": "Đọc hiểu truyện ngắn: Hạnh phúc giản đơn của nàng",
      "skill": "Đọc hiểu",
      "duration": "11 phút",
      "badge": "Chữa lành 🌿",
      "badgeColor": "bg-emerald-100 text-emerald-700",
      "summary": "Đoạn văn ngắn song ngữ sâu lắng, triết lý sống ung dung tự tại của phụ nữ hiện đại.",      "bookmarked": false,
      "detail": {
        "objective": "Luyện đọc đoạn văn dài không cần phụ thuộc phiên âm, bắt nhịp cảm xúc văn bản.",
        "vocab": [
          {
            "hanzi": "从容",
            "pinyin": "cóngróng",
            "meaning": "Ung dung, điềm tĩnh"
          },
          {
            "hanzi": "幸福",
            "pinyin": "xìngfú",
            "meaning": "Hạnh phúc viên mãn"
          },
          {
            "hanzi": "独立",
            "pinyin": "dúlì",
            "meaning": "Độc lập, tự chủ"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Trích đoạn sách 📖",
            "text": "做一个从容独立的女子，眼眼里有星光，心中有太阳。",
            "pinyin": "Zuò yīgè cóngróng dúlì de nǚzǐ, yǎn li yǒu xīngguāng, xīn zhōng yǒu tàiyáng.",
            "vi": "Hãy làm một cô gái ung dung tự chủ, trong mắt có ánh sao và trong tim có mặt trời rực rỡ."
          }
        ],
        "memoryTip": "💡 'Tùng dung' (从容) là phong thái bình thản trước mọi sóng gió cuộc đời!",
        "miniQuiz": {
          "question": "'独立' (dúlì) có nghĩa là gì?",
          "options": [
            "A. Độc lập, tự chủ",
            "B. Phụ thuộc",
            "C. Buồn bã"
          ],
          "correctIndex": 0,
          "explanation": "'Độc lập' là phẩm chất kiêu hãnh của cô gái hiện đại!"
        }
      }
    },
    {
      "id": "l5-1",
      "levelId": 5,
      "levelName": "Cấp 5 — Đi làm",
      "title": "Email công sở: Xin nghỉ phép & Báo cáo tiến độ chuẩn chỉnh",
      "skill": "Thương mại",
      "duration": "10 phút",
      "badge": "Văn phòng 🏆",
      "badgeColor": "bg-purple-100 text-purple-700",
      "summary": "Form email chuẩn mực gửi sếp, cách nêu lý do và cam kết bàn giao công việc.",      "bookmarked": true,
      "detail": {
        "objective": "Viết email hành chính chuẩn form thương mại Trung - Đài, câu chữ sắc sảo và trách nhiệm.",
        "vocab": [
          {
            "hanzi": "请假",
            "pinyin": "qǐngjià",
            "meaning": "Xin nghỉ phép"
          },
          {
            "hanzi": "工作交接",
            "pinyin": "gōngzuò jiāojiē",
            "meaning": "Bàn giao công việc"
          },
          {
            "hanzi": "此致敬礼",
            "pinyin": "cǐzhì jìnglǐ",
            "meaning": "Trân trọng kính thư (cuối email)"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Email gửi sếp 💌",
            "text": "尊敬的张经理：因家中有事需请假一天，工作已交接给小王。",
            "pinyin": "Zūnjìng de Zhāng jīnglǐ: Yīn jiāzhōng yǒushì xū qǐngjià yī tiān, gōngzuò yǐ jiāojiē gěi Xiǎo Wáng.",
            "vi": "Kính gửi Trưởng phòng Trương: Vì việc gia đình em xin phép nghỉ 1 ngày, công việc đã bàn giao cho Tiểu Vương ạ."
          }
        ],
        "memoryTip": "💡 Luôn kèm câu '工作已交接' (Công việc đã bàn giao) sếp sẽ an tâm duyệt ngay!",
        "miniQuiz": {
          "question": "Câu kết thư chuẩn trang trọng cuối email công sở là gì?",
          "options": [
            "A. 此致敬礼",
            "B. 再见拜拜",
            "C. 晚安"
          ],
          "correctIndex": 0,
          "explanation": "'Thử trí kính lễ' (此致敬礼) là câu kết thư chuẩn mực nhất!"
        }
      }
    },
    {
      "id": "l5-2",
      "levelId": 5,
      "levelName": "Cấp 5 — Đi làm",
      "title": "Phỏng vấn công ty Trung - Đài: Giới thiệu bản thân ăn điểm 10",
      "skill": "Phỏng vấn",
      "duration": "12 phút",
      "badge": "Deal lương 💼",
      "badgeColor": "bg-rose-100 text-rose-700",
      "summary": "Kịch bản tự giới thiệu kinh nghiệm làm việc, điểm mạnh và định hướng phát triển.",      "bookmarked": true,
      "detail": {
        "objective": "Tự tin trả lời các câu hỏi phỏng vấn hóc búa, đàm phán mức lương xứng đáng với năng lực.",
        "vocab": [
          {
            "hanzi": "自我介绍",
            "pinyin": "zìwǒ jièshào",
            "meaning": "Tự giới thiệu bản thân"
          },
          {
            "hanzi": "工作经验",
            "pinyin": "gōngzuò jīngyàn",
            "meaning": "Kinh nghiệm làm việc"
          },
          {
            "hanzi": "优势",
            "pinyin": "yōushì",
            "meaning": "Điểm mạnh, thế mạnh"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "HR Phỏng vấn 👩‍💼",
            "text": "请您先做个简短的自我介绍。",
            "pinyin": "Qǐng nín xiān zuò gè jiǎnduǎn de zìwǒ jièshào.",
            "vi": "Mời bạn giới thiệu ngắn gọn về bản thân trước nhé."
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "您好，我叫玉映，有三年外贸工作经验，做事细心负责。",
            "pinyin": "Nín hǎo, wǒ jiào Yù Yìng, yǒu sān nián wàimào gōngzuò jīngyàn, zuòshì xìxīn fùzé.",
            "vi": "Dạ em chào anh/chị, em tên là Ngọc Ánh, đã có 3 năm kinh nghiệm xuất nhập khẩu, làm việc cẩn trọng và trách nhiệm ạ."
          }
        ],
        "memoryTip": "💡 'Tế tâm phụ trách' (细心负责) là cụm từ vàng khiến nhà tuyển dụng gật đầu khen ngợi!",
        "miniQuiz": {
          "question": "'工作经验' có nghĩa là gì?",
          "options": [
            "A. Kinh nghiệm làm việc",
            "B. Bạn bè đồng nghiệp",
            "C. Tiền lương"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! 'Công tác kinh nghiệm' là vốn liếng quý giá nhất khi đi phỏng vấn!"
        }
      }
    },
    {
      "id": "l5-3",
      "levelId": 5,
      "levelName": "Cấp 5 — Đi làm",
      "title": "Đàm phán thương mại & Xử lý khiếu nại khách hàng khéo léo",
      "skill": "Đàm phán",
      "duration": "11 phút",
      "badge": "Chốt deal 🤝",
      "badgeColor": "bg-amber-100 text-amber-700",
      "summary": "Cách thỏa thuận giá cả, xin giảm giá lô hàng và xoa dịu khách hàng khi trễ tiến độ.",      "bookmarked": false,
      "detail": {
        "objective": "Sử dụng ngôn từ ngoại giao thương mại sắc sảo, vừa giữ vững lợi ích vừa giữ được mối quan hệ hợp tác lâu dài.",
        "vocab": [
          {
            "hanzi": "合作共赢",
            "pinyin": "hézuò gòng yíng",
            "meaning": "Hợp tác đôi bên cùng có lợi"
          },
          {
            "hanzi": "优惠",
            "pinyin": "yōuhuì",
            "meaning": "Ưu đãi, chiết khấu"
          },
          {
            "hanzi": "十分抱歉",
            "pinyin": "shífēn bàoqiàn",
            "meaning": "Vô cùng xin lỗi quý khách"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Đối tác 🤝",
            "text": "这个价格能不能再给一些优惠？",
            "pinyin": "Zhège jiàgé néng bù néng zài gěi yīxiē yōuhuì?",
            "vi": "Mức giá này bên bạn có thể cho thêm chút ưu đãi chiết khấu được không?"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "为了长期合作共赢，我们可以给您九五折。",
            "pinyin": "Wèile chángqī hézuò gòng yíng, wǒmen kěyǐ gěi nín jiǔwǔ zhé.",
            "vi": "Vì sự hợp tác đôi bên cùng có lợi lâu dài, bên em có thể chiết khấu 5% cho đơn này ạ."
          }
        ],
        "memoryTip": "💡 Trong tiếng Trung: 'Cửu ngũ chiết' (九五折) nghĩa là giảm 5% (bán bằng 95% giá gốc) nhé nàng!",
        "miniQuiz": {
          "question": "'九五折' (jiǔwǔ zhé) trong tiếng Trung có nghĩa là gì?",
          "options": [
            "A. Giảm 5% (tính 95% giá)",
            "B. Giảm 95%",
            "C. Tăng giá 5%"
          ],
          "correctIndex": 0,
          "explanation": "Rất xuất sắc! Chú ý văn hóa chiết khấu của Trung Quốc: 九折 là giảm 10%, 九五折 là giảm 5%!"
        }
      }
    },
    {
      "id": "l6-1",
      "levelId": 6,
      "levelName": "Cấp 6 — HSK 6 Cao Cấp",
      "title": "Bình luận Kinh tế & Xu hướng Thị trường Châu Á",
      "skill": "Đọc hiểu",
      "duration": "18 phút",
      "badge": "HSK 6 💎",
      "badgeColor": "bg-purple-100 text-purple-700",
      "summary": "Phân tích biến động tài chính, chuỗi cung ứng toàn cầu và thuật ngữ kinh tế vĩ mô.",      "bookmarked": false,
      "detail": {
        "objective": "Nắm vững các thuật ngữ phân tích kinh tế vĩ mô: 通货膨胀 (lạm phát), 供应链 (chuỗi cung ứng), 宏观调控 (điều tiết vĩ mô).",
        "vocab": [
          {
            "hanzi": "宏观调控",
            "pinyin": "hóngguān tiáokòng",
            "meaning": "Điều tiết vĩ mô"
          },
          {
            "hanzi": "通货膨胀",
            "pinyin": "tōnghuò péngzhàng",
            "meaning": "Lạm phát tiền tệ"
          },
          {
            "hanzi": "供应链",
            "pinyin": "gōngyìngliàn",
            "meaning": "Chuỗi cung ứng"
          },
          {
            "hanzi": "可持续发展",
            "pinyin": "kě chíxù fāzhǎn",
            "meaning": "Phát triển bền vững"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Chuyên gia Kinh tế",
            "text": "在全球经济放缓的背景下，保持供应链韧性至关重要。",
            "pinyin": "Zài quánqiú jīngjì fànghuǎn de bèijǐng xià, bǎochí gōngyìngliàn rènxìng zhìguān zhòngyào.",
            "vi": "Trong bối cảnh kinh tế toàn cầu hạ nhiệt, việc duy trì tính kiên cường của chuỗi cung ứng là tối quan trọng."
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "确实如此，企业应当通过数字化转型提升抗风险能力。",
            "pinyin": "Quèshí rúcǐ, qǐyè yīngdāng tōngguò shùzìhuà zhuǎnxíng tíshēng kàng fēngxiǎn nénglì.",
            "vi": "Quả đúng như vậy, doanh nghiệp cần nâng cao năng lực chống chịu rủi ro thông qua chuyển đổi số."
          }
        ],
        "memoryTip": "💡 Thuật ngữ HSK 6 thường mang tính trừu tượng và khái quát hóa cao, nên học theo cụm danh từ kép.",
        "miniQuiz": {
          "question": "Từ nào biểu thị 'Phát triển bền vững' trong tiếng Trung?",
          "options": [
            "A. 可持续发展",
            "B. 快速消费",
            "C. 经济波动"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! 可持续发展 (Kě chíxù fāzhǎn) là cụm từ xuất hiện với tần suất cực cao trong HSK 6 và tin tức."
        }
      }
    },
    {
      "id": "l6-2",
      "levelId": 6,
      "levelName": "Cấp 6 — HSK 6 Cao Cấp",
      "title": "Nghệ thuật Viết Luận & Tranh Biện Học Thuật",
      "skill": "Viết luận",
      "duration": "20 phút",
      "badge": "HSK 6 💎",
      "badgeColor": "bg-purple-100 text-purple-700",
      "summary": "Cách lập luận chặt chẽ, mở bài - thân bài - kết luận theo tiêu chuẩn thi HSK 6.",      "bookmarked": false,
      "detail": {
        "objective": "Thành thạo các liên từ nghị luận cấp cao: 毋庸置疑 (không thể nghi ngờ), 综上所述 (tóm lại những điều trên), 相辅相成 (tương trợ lẫn nhau).",
        "vocab": [
          {
            "hanzi": "毋庸置疑",
            "pinyin": "wú yōng zhì yí",
            "meaning": "Hiển nhiên, không còn nghi ngờ gì nữa"
          },
          {
            "hanzi": "相辅相成",
            "pinyin": "xiāng fǔ xiāng chéng",
            "meaning": "Bổ sung tương trợ lẫn nhau"
          },
          {
            "hanzi": "综上所述",
            "pinyin": "zōng shàng suǒ shù",
            "meaning": "Tóm lại những điều đã trình bày"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Giám khảo HSK",
            "text": "议论文写作中最忌讳空洞无物，要以理服人。",
            "pinyin": "Yìlùnwén xiězuò zhōng zuì jìhuì kōngdòng wú wù, yào yǐ lǐ fú rén.",
            "vi": "Điều kiêng kỵ nhất khi viết văn nghị luận là sáo rỗng vô căn cứ, cần phải lấy lý lẽ để thuyết phục lòng người."
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "我明白了，论点必须鲜明，论据要严谨有力。",
            "pinyin": "Wǒ míngbai le, lùndiǎn bìxū xiānmíng, lùnjù yào yánjǐn yǒulì.",
            "vi": "Em đã hiểu rồi ạ, luận điểm bắt buộc phải rõ ràng, luận cứ phải chặt chẽ và thuyết phục."
          }
        ],
        "memoryTip": "💡 Dùng liên từ chuyển ngoặt và thành ngữ bốn chữ giúp bài viết tăng từ band điểm 6 lên band 9 ngay lập tức.",
        "miniQuiz": {
          "question": "Thành ngữ nào dùng để khẳng định một chân lý hiển nhiên?",
          "options": [
            "A. 毋庸置疑",
            "B. 举一反三",
            "C. 走马观花"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! 毋庸置疑 (Không cần phải nghi ngờ) là cách diễn đạt đanh thép trong văn nghị luận."
        }
      }
    },
    {
      "id": "l7-1",
      "levelId": 7,
      "levelName": "Cấp 7 — HSK 7-9 Siêu Việt",
      "title": "Biên Phiên Dịch Hội Nghị Quốc Tế & Ngoại Giao",
      "skill": "Phiên dịch",
      "duration": "25 phút",
      "badge": "HSK 7-9 👑",
      "badgeColor": "bg-amber-100 text-amber-800",
      "summary": "Kỹ thuật phản xạ cabin, chuyển ngữ ngoại giao và thành ngữ điển cố tinh hoa.",      "bookmarked": false,
      "detail": {
        "objective": "Nắm vững văn phong ngoại giao quốc tế: 互利共赢 (đôi bên cùng có lợi), 战略伙伴关系 (quan hệ đối tác chiến lược), 求同存异 (cầu đồng tồn dị).",
        "vocab": [
          {
            "hanzi": "战略协作",
            "pinyin": "zhànlüè xiézuò",
            "meaning": "Hiệp đồng chiến lược"
          },
          {
            "hanzi": "求同存异",
            "pinyin": "qiú tóng cún yì",
            "meaning": "Cầu đồng tồn dị (tìm tiếng nói chung)"
          },
          {
            "hanzi": "不容置喙",
            "pinyin": "bù róng zhì huì",
            "meaning": "Không cho phép can thiệp/xen vào"
          },
          {
            "hanzi": "休戚与共",
            "pinyin": "xiū qī yǔ gòng",
            "meaning": "Đồng cam cộng khổ, chia ngọt sẻ bùi"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Đại sứ Ngoại giao",
            "text": "双方应秉持求同存异的原则，深化各领域务实合作。",
            "pinyin": "Shuāngfāng yīng bǐngchí qiú tóng cún yì de yuánzé, shēnhuà gè lǐngyù wùshí hézuò.",
            "vi": "Hai bên cần giữ vững nguyên tắc cầu đồng tồn dị, làm sâu sắc thêm sự hợp tác thiết thực trên mọi lĩnh vực."
          },
          {
            "role": "B",
            "name": "Phiên dịch viên Ngọc Ánh 🌸",
            "text": "这符合两国人民的根本利益，也将为地区和平作出积极贡献。",
            "pinyin": "Zhè fúhé liǎng guó rénmín de gēnběn lìyì, yě jiāng wèi dìqū hépíng zuòchū jījí gòngxiàn.",
            "vi": "Điều này phù hợp với lợi ích căn bản của nhân dân hai nước, đồng thời sẽ đóng góp tích cực cho nền hòa bình khu vực."
          }
        ],
        "memoryTip": "💡 Ở cấp độ 7-9, dịch thuật không chỉ là dịch từ ngữ mà là chuyển tải thần thái và chiều sâu văn hóa chính trị.",
        "miniQuiz": {
          "question": "Câu châm ngôn nổi tiếng nào thể hiện tinh thần 'tìm điểm chung, tôn trọng sự khác biệt'?",
          "options": [
            "A. 求同存异",
            "B. 独善其身",
            "C. 随波逐流"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! 求同存异 (Cầu đồng tồn dị) là nguyên tắc ngoại giao vàng trong Hán ngữ."
        }
      }
    },
    {
      "id": "l8-1",
      "levelId": 8,
      "levelName": "Cấp 8 — Chuyên Ngành Thực Chiến",
      "title": "📦 Xuất Nhập Khẩu & Logistics: Đàm Phán FOB/CIF & Vận Đơn B/L",
      "skill": "Xuất nhập khẩu",
      "duration": "15 phút",
      "badge": "Logistics 📦",
      "badgeColor": "bg-blue-100 text-blue-700",
      "summary": "Điều khoản FOB/CIF, chứng từ vận đơn B/L, thư tín dụng L/C và kiểm tra hải quan.",      "bookmarked": true,
      "detail": {
        "objective": "Tự tin đàm phán hợp đồng ngoại thương với đối tác Trung Quốc, hiểu rõ Incoterms và quy trình thanh toán quốc tế.",
        "vocab": [
          {
            "hanzi": "提单",
            "pinyin": "tídān",
            "meaning": "Vận đơn đường biển (Bill of Lading - B/L)"
          },
          {
            "hanzi": "信用证",
            "pinyin": "xìnyòngzhèng",
            "meaning": "Thư tín dụng (Letter of Credit - L/C)"
          },
          {
            "hanzi": "报关",
            "pinyin": "bàoguān",
            "meaning": "Khai báo hải quan"
          },
          {
            "hanzi": "装运期",
            "pinyin": "zhuāngyùnqī",
            "meaning": "Thời hạn bốc xếp hàng lên tàu"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Trưởng phòng Xuất nhập khẩu",
            "text": "请问这批货物的FOB上海港报价是多少？付款方式能否接受不可撤销的信用证？",
            "pinyin": "Qǐngwèn zhè pī huòwù de FOB Shànghǎi gǎng bàojià shì duōshao? Fùkuǎn fāngshì néngfǒu jiēshòu bù kě chèxiāo de xìnyòngzhèng?",
            "vi": "Cho hỏi báo giá FOB cảng Thượng Hải của lô hàng này là bao nhiêu? Phương thức thanh toán có chấp nhận L/C không thể hủy ngang không?"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "FOB价格为每件15美元。我方完全接受以不可撤销即期信用证方式结算。",
            "pinyin": "FOB jiàgé wèi měi jiàn 15 Měiyuán. Wǒfāng wánquán jiēshòu yǐ bù kě chèxiāo jíqī xìnyòngzhèng fāngshì jiésuàn.",
            "vi": "Giá FOB là 15 USD/sản phẩm. Phía chúng tôi hoàn toàn chấp nhận thanh toán bằng thư tín dụng trả ngay không thể hủy ngang."
          }
        ],
        "memoryTip": "💡 Nhớ quy tắc: FOB người mua chịu cước tàu biển; CIF người bán đã bao gồm cước (Freight) và bảo hiểm (Insurance).",
        "miniQuiz": {
          "question": "Thuật ngữ nào trong ngoại thương có nghĩa là 'Thư tín dụng'?",
          "options": [
            "A. 信用证 (L/C)",
            "B. 提单 (B/L)",
            "C. 装箱单 (Packing List)"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! 信用证 (Xìnyòngzhèng) là Thư tín dụng quốc tế bảo đảm quyền lợi đôi bên."
        }
      }
    },
    {
      "id": "l8-2",
      "levelId": 8,
      "levelName": "Cấp 8 — Chuyên Ngành Thực Chiến",
      "title": "💻 Thương Mại Điện Tử & Livestream Bán Hàng (TikTok/Taobao)",
      "skill": "E-Commerce",
      "duration": "14 phút",
      "badge": "E-Commerce 💻",
      "badgeColor": "bg-rose-100 text-rose-700",
      "summary": "Kịch bản chốt đơn livestream, tương tác giữ chân người xem, quản lý đơn hàng Taobao.",      "bookmarked": true,
      "detail": {
        "objective": "Nắm vững khẩu ngữ livestream bán hàng chuyên nghiệp, kích thích người xem nhấn vào giỏ hàng và chốt đơn nhanh chóng.",
        "vocab": [
          {
            "hanzi": "直播间",
            "pinyin": "zhíbōjiān",
            "meaning": "Phòng livestream bán hàng"
          },
          {
            "hanzi": "上链接",
            "pinyin": "shàng liànjiē",
            "meaning": "Ghim link sản phẩm vào giỏ hàng"
          },
          {
            "hanzi": "爆款",
            "pinyin": "bàokuǎn",
            "meaning": "Sản phẩm bán chạy nhất (Best-seller)"
          },
          {
            "hanzi": "拍一发三",
            "pinyin": "pāi yī fā sān",
            "meaning": "Mua một tặng ba (Ưu đãi khủng)"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Host Livestream",
            "text": "欢迎新进直播间的宝宝们！今天这款爆款面膜拍一发三，三二一，上链接！",
            "pinyin": "Huānyíng xīn jìn zhíbōjiān de bǎobaomen! Jīntiān zhè kuǎn bàokuǎn miànmó pāi yī fā sān, sān èr yī, shàng liànjiē!",
            "vi": "Chào mừng các người đẹp mới vào phòng live nha! Hôm nay em mặt nạ siêu hot này mua một tặng ba, ba hai một, ghim link giỏ hàng ngay nè!"
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "手速要快哦，库存只有最后50单，拍完立刻恢复原价！",
            "pinyin": "Shǒusù yào kuài o, kùcún zhǐyǒu zuìhòu 50 dān, pāi wán lìkè huīfù yuánjià!",
            "vi": "Tay phải nhanh nha cả nhà ơi, số lượng chỉ còn đúng 50 đơn cuối cùng thôi, bán hết là trở về giá gốc liền á!"
          }
        ],
        "memoryTip": "💡 Các cụm từ kích thích cảm xúc như '上链接' (ghim link), '福利价' (giá ưu đãi tri ân) luôn tạo năng lượng bùng nổ.",
        "miniQuiz": {
          "question": "Khi muốn thông báo đã đưa sản phẩm lên giỏ hàng cho khách bấm mua, streamer nói câu gì?",
          "options": [
            "A. 上链接！",
            "B. 下班了！",
            "C. 关门了！"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! '上链接' (Shàng liànjiē) là câu thần chú quen thuộc của các top streamer Trung Quốc."
        }
      }
    },
    {
      "id": "l8-3",
      "levelId": 8,
      "levelName": "Cấp 8 — Chuyên Ngành Thực Chiến",
      "title": "🏨 Khách Sạn & Du Lịch: Đón Tiếp Khách VIP & Xử Lý Phàn Nàn",
      "skill": "Du lịch & Khách sạn",
      "duration": "12 phút",
      "badge": "Khách sạn 🏨",
      "badgeColor": "bg-emerald-100 text-emerald-700",
      "summary": "Nghi thức check-in cao cấp, hướng dẫn lịch trình danh lam thắng cảnh và xoa dịu phàn nàn.",      "bookmarked": false,
      "detail": {
        "objective": "Sử dụng kính ngữ chuẩn 5 sao để đón tiếp khách du lịch Trung Quốc và xử lý phàn nàn với chỉ số hài lòng tuyệt đối.",
        "vocab": [
          {
            "hanzi": "贵宾",
            "pinyin": "guìbīn",
            "meaning": "Khách quý / Khách VIP"
          },
          {
            "hanzi": "入住手续",
            "pinyin": "rùzhù shǒuxù",
            "meaning": "Thủ tục nhận phòng (Check-in)"
          },
          {
            "hanzi": "竭诚服务",
            "pinyin": "jiéchéng fúwù",
            "meaning": "Hết lòng phục vụ tận tụy"
          },
          {
            "hanzi": "赔礼道歉",
            "pinyin": "péilǐ dàoqiàn",
            "meaning": "Tặng quà xin lỗi tạ lỗi"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Khách VIP",
            "text": "我们预订的海景套房空调有点噪音，影响休息了。",
            "pinyin": "Wǒmen yùdìng de hǎijǐng tàofáng kōngtiáo yǒudiǎn zàoyīn, yǐngxiǎng xiūxi le.",
            "vi": "Phòng suite hướng biển của tôi điều hòa hơi có tiếng ồn, làm ảnh hưởng giấc ngủ."
          },
          {
            "role": "B",
            "name": "Ngọc Ánh 🌸",
            "text": "非常抱歉给您带来不便！我立刻为您免费升级到顶层行政套房，并赠送双人下午茶，请您稍候。",
            "pinyin": "Fēicháng bàoqiàn gěi nín dàilái búbiàn! Wǒ lìkè wèi nín miǎnfèi shēngjí dào dǐngcéng xíngzhèng tàofáng, bìng zèngsòng shuāngrén xiàwǔchá, qǐng nín shāohòu.",
            "vi": "Vô cùng xin lỗi vì sự bất tiện này ạ! Em xin phép nâng hạng miễn phí cho anh chị lên phòng Executive Suite tầng thượng và gửi tặng set trà chiều đôi, mong anh chị đợi em một chút ạ."
          }
        ],
        "memoryTip": "💡 Trong ngành dịch vụ khách sạn, công thức xử lý phàn nàn là: Lắng nghe chân thành + Nâng hạng bồi thường + Tạ lỗi nhã nhặn.",
        "miniQuiz": {
          "question": "Từ nào biểu thị 'Khách quý/Khách VIP' trang trọng nhất?",
          "options": [
            "A. 贵宾",
            "B. 陌生人",
            "C. 朋友"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! 贵宾 (Guìbīn) thể hiện sự trân trọng tột bậc đối với khách hàng."
        }
      }
    },
    {
      "id": "l8-4",
      "levelId": 8,
      "levelName": "Cấp 8 — Chuyên Ngành Thực Chiến",
      "title": "💄 Thẩm Mỹ & Đánh Hàng Thời Trang Quảng Châu",
      "skill": "Làm đẹp & Thời trang",
      "duration": "14 phút",
      "badge": "Thời trang 💄",
      "badgeColor": "bg-pink-100 text-pink-700",
      "summary": "Thuật ngữ chất liệu vải, kiểu dáng form váy, mặc cả tại chợ đầu mối Bạch Mã Quảng Châu.",      "bookmarked": true,
      "detail": {
        "objective": "Thành thạo đàm phán lấy giá sỉ (拿货价) tại các chợ thời trang lớn nhất Trung Quốc, phân biệt chất vải cao cấp.",
        "vocab": [
          {
            "hanzi": "拿货价",
            "pinyin": "náhuòjià",
            "meaning": "Giá sỉ nhập hàng tận gốc"
          },
          {
            "hanzi": "起订量",
            "pinyin": "qǐdìngliàng",
            "meaning": "Số lượng đặt hàng tối thiểu (MOQ)"
          },
          {
            "hanzi": "版型",
            "pinyin": "bǎnxíng",
            "meaning": "Form dáng trang phục"
          },
          {
            "hanzi": "真丝面料",
            "pinyin": "zhēnsī miànliào",
            "meaning": "Chất liệu lụa tơ tằm tự nhiên"
          }
        ],
        "dialog": [
          {
            "role": "A",
            "name": "Ngọc Ánh 🌸",
            "text": "老板娘，这款羊绒大衣版型很正，整手拿货的话最低什么价？起订量是多少？",
            "pinyin": "Lǎobǎnniáng, zhè kuǎn yángróng dàyī bǎnxíng hěn zhèng, zhěng shǒu ná huò de huà zuìdī shénme jià? Qǐdìngliàng shì duōshao?",
            "vi": "Bà chủ ơi, chiếc áo khoác cashmere này form dáng đẹp chuẩn quá, nếu lấy nguyên ri thì giá sỉ thấp nhất là bao nhiêu? Số lượng tối thiểu là bao nhiêu cái ạ?"
          },
          {
            "role": "B",
            "name": "Chủ kho Quảng Châu",
            "text": "美女真有眼光！一手5件混色，单件给你180，长期合作保你爆单！",
            "pinyin": "Měinǚ zhēn yǒu yǎnguāng! Yì shǒu 5 jiàn hùnsè, dān jiàn gěi nǐ 180, chángqī hézuò bǎo nǐ bàodān!",
            "vi": "Người đẹp thật có mắt nhìn! Một ri 5 cái đủ màu, để nàng giá 180 tệ/cái, hợp tác lâu dài bao nàng nổ đơn rực rỡ luôn!"
          }
        ],
        "memoryTip": "💡 Đánh hàng chợ Quảng Châu xưng hô '老板娘' (Bà chủ) và gọi nhau là '美女' (Người đẹp) sẽ tạo không khí thân tình dễ bớt giá.",
        "miniQuiz": {
          "question": "Khi đi buôn thời trang, cụm từ 'Giá sỉ lấy hàng tận kho' gọi là gì?",
          "options": [
            "A. 拿货价",
            "B. 零售价",
            "C. 打折价"
          ],
          "correctIndex": 0,
          "explanation": "Chính xác! 拿货价 (Náhuòjià) là giá sỉ dành riêng cho các nhà buôn đánh hàng."
        }
      }
    }
  ],
  "vocabBank": [
    {
      "id": "v1",
      "hanzi": "你好",
      "pinyin": "nǐ hǎo",
      "hanviet": "Nhĩ hảo",
      "meaning": "Xin chào",
      "example": "你好！很高兴认识你。",
      "exampleVi": "Xin chào! Rất vui được gặp bạn.",
      "cat": "Đời sống"
    },
    {
      "id": "v2",
      "hanzi": "珍珠奶茶",
      "pinyin": "zhēnzhū nǎichá",
      "hanviet": "Trân châu nãi trà",
      "meaning": "Trà sữa trân châu",
      "example": "下午我想喝一杯半糖珍珠奶茶。",
      "exampleVi": "Buổi chiều mình muốn uống một ly trà sữa trân châu 50% đường.",
      "cat": "Trà sữa"
    },
    {
      "id": "v3",
      "hanzi": "我只喜欢你",
      "pinyin": "wǒ zhǐ xǐhuan nǐ",
      "hanviet": "Ngã chỉ hỉ hoan nhĩ",
      "meaning": "Mình chỉ thích mỗi bạn thôi",
      "example": "你知道吗？其实我只喜欢你。",
      "exampleVi": "Bạn có biết không? Thật ra mình chỉ thích mỗi bạn thôi á.",
      "cat": "Thả thính"
    },
    {
      "id": "v4",
      "hanzi": "包邮",
      "pinyin": "bāoyóu",
      "hanviet": "Bao bưu",
      "meaning": "Miễn phí vận chuyển (Freeship)",
      "example": "老板，买两件能给我包邮吗？",
      "exampleVi": "Chủ quán ơi mua hai món có freeship cho em được không?",
      "cat": "Mua sắm"
    },
    {
      "id": "v5",
      "hanzi": "辛苦了",
      "pinyin": "xīnkǔ le",
      "hanviet": "Tân khổ liễu",
      "meaning": "Vất vả cho bạn rồi!",
      "example": "今天大家都辛苦了，下班早点休息！",
      "exampleVi": "Hôm nay mọi người vất vả rồi, tan sở về sớm nghỉ ngơi nha!",
      "cat": "Công sở"
    },
    {
      "id": "v6",
      "hanzi": "前程似锦",
      "pinyin": "qiánchéng sì jǐn",
      "hanviet": "Tiền trình tự cẩm",
      "meaning": "Tương lai rực rỡ như gấm hoa",
      "example": "祝你前程似锦，万事胜意！",
      "exampleVi": "Chúc tương lai của bạn sáng lạn như hoa gấm, vạn điều như ý!",
      "cat": "Thành ngữ"
    },
    {
      "id": "v7",
      "hanzi": "想念",
      "pinyin": "xiǎngniàn",
      "hanviet": "Tưởng niệm",
      "meaning": "Nhớ nhung, tương tư",
      "example": "每天都很想念你甜甜的笑脸。",
      "exampleVi": "Mỗi ngày đều nhớ gương mặt cười ngọt ngào của bạn.",
      "cat": "Thả thính"
    },
    {
      "id": "v8",
      "hanzi": "外滩",
      "pinyin": "wàitān",
      "hanviet": "Ngoại than",
      "meaning": "Bến Thượng Hải",
      "example": "我们一起去上海外滩看夜景吧！",
      "exampleVi": "Tụi mình cùng đi Bến Thượng Hải ngắm cảnh đêm lung linh nhé!",
      "cat": "Du lịch"
    },
    {
      "id": "v9",
      "hanzi": "审批",
      "pinyin": "shēnpī",
      "hanviet": "Thẩm phê",
      "meaning": "Phê duyệt (công việc/hồ sơ)",
      "example": "请王经理帮忙审批一下这份报销单。",
      "exampleVi": "Xin nhờ sếp Vương duyệt giúp em tờ phiếu thanh toán này ạ.",
      "cat": "Công sở"
    },
    {
      "id": "v10",
      "hanzi": "优惠券",
      "pinyin": "yōuhuìquàn",
      "hanviet": "Ưu đãi khoán",
      "meaning": "Mã giảm giá, coupon",
      "example": "下单前先去首页领三十元优惠券。",
      "exampleVi": "Trước khi bấm mua hãy vào trang chủ lưu mã giảm giá 30 tệ nha.",
      "cat": "Mua sắm"
    },
    {
      "id": "v11",
      "hanzi": "四季春茶",
      "pinyin": "sìjìchūn chá",
      "hanviet": "Tứ quý xuân trà",
      "meaning": "Trà Tứ Quý Xuân thanh mát",
      "example": "一杯无糖四季春加茶冻，清爽解腻。",
      "exampleVi": "Một ly Tứ Quý Xuân 0% đường thêm thạch trà, thanh mát giải ngấy.",
      "cat": "Trà sữa"
    },
    {
      "id": "v12",
      "hanzi": "温柔",
      "pinyin": "wēnróu",
      "hanviet": "Ôn nhu",
      "meaning": "Dịu dàng, hiền dịu",
      "example": "愿你被这世界温柔以待。",
      "exampleVi": "Cầu mong nàng luôn được thế giới này dịu dàng nâng niu.",
      "cat": "Thả thính"
    },
    {
      "id": "v13",
      "hanzi": "顺风顺水",
      "pinyin": "shùnfēng shùnshuǐ",
      "hanviet": "Thuận phong thuận thủy",
      "meaning": "Thuận buồm xuôi gió",
      "example": "祝你新的工作顺风顺水！",
      "exampleVi": "Chúc công việc mới của bạn thuận buồm xuôi gió!",
      "cat": "Thành ngữ"
    },
    {
      "id": "v14",
      "hanzi": "合同条款",
      "pinyin": "hétong tiáokuǎn",
      "hanviet": "Hợp đồng điều khoản",
      "meaning": "Điều khoản hợp đồng",
      "example": "双方已就所有合同条款达成一致。",
      "exampleVi": "Hai bên đã đạt được thống nhất về mọi điều khoản hợp đồng.",
      "cat": "Công sở"
    },
    {
      "id": "v15",
      "hanzi": "故宫",
      "pinyin": "Gùgōng",
      "hanviet": "Cố Cung",
      "meaning": "Tử Cấm Thành Bắc Kinh",
      "example": "下雪天的故宫红墙白雪，美如画卷。",
      "exampleVi": "Tử Cấm Thành ngày tuyết rơi tường đỏ tuyết trắng, đẹp như một bức họa.",
      "cat": "Du lịch"
    },
    {
      "id": "v16",
      "hanzi": "满减",
      "pinyin": "mǎnjiǎn",
      "hanviet": "Mãn giảm",
      "meaning": "Mua đủ mức được giảm trừ",
      "example": "跨店满300减50，活动太划算了！",
      "exampleVi": "Mua đủ 300 giảm 50 toàn sàn, sự kiện hời quá chừng!",
      "cat": "Mua sắm"
    },
    {
      "id": "v17",
      "hanzi": "甜甜的",
      "pinyin": "tiántián de",
      "hanviet": "Điềm điềm đích",
      "meaning": "Ngọt ngào, êm dịu",
      "example": "你的笑声甜甜的，听着让人开心。",
      "exampleVi": "Tiếng cười của bạn ngọt ngào ghê, nghe là thấy vui lây.",
      "cat": "Thả thính"
    },
    {
      "id": "v18",
      "hanzi": "兵马俑",
      "pinyin": "bīngmǎyǒng",
      "hanviet": "Binh mã dũng",
      "meaning": "Tượng binh mã Tây An",
      "example": "去西安一定要去参观秦始皇兵马俑。",
      "exampleVi": "Đến Tây An nhất định phải đi chiêm ngưỡng đội tượng Binh Mã Dũng của Tần Thủy Hoàng.",
      "cat": "Du lịch"
    },
    {
      "id": "v19",
      "hanzi": "心想事成",
      "pinyin": "xīnxiǎng shìchéng",
      "hanviet": "Tâm tưởng sự thành",
      "meaning": "Vạn điều như ý toại lòng",
      "example": "愿你所求皆所愿，心想事成！",
      "exampleVi": "Mong mọi điều bạn kiếm tìm đều toại nguyện, tâm tưởng sự thành!",
      "cat": "Thành ngữ"
    },
    {
      "id": "v20",
      "hanzi": "合作共赢",
      "pinyin": "hézuò gòngyíng",
      "hanviet": "Hợp tác cộng doanh",
      "meaning": "Đôi bên cùng thắng",
      "example": "双方将携手开拓市场，实现合作共赢。",
      "exampleVi": "Hai bên sẽ kề vai mở rộng thị trường, hiện thực hóa mục tiêu hợp tác cùng thắng.",
      "cat": "Công sở"
    }
  ],
  "interactiveQuizzes": [
    {
      "id": "q1",
      "type": "multiple-choice",
      "title": "Trắc nghiệm từ vựng công sở",
      "prompt": "Từ nào sau đây mang ý nghĩa là 'Vất vả cho bạn rồi!' (Câu cửa miệng vàng nơi công sở)?",
      "options": [
        {
          "text": "A. 没关系 (méi guānxi)",
          "isCorrect": false
        },
        {
          "text": "B. 辛苦了 (xīnkǔ le)",
          "isCorrect": true
        },
        {
          "text": "C. 不客气 (bù kèqi)",
          "isCorrect": false
        },
        {
          "text": "D. 早上好 (zǎoshang hǎo)",
          "isCorrect": false
        }
      ],
      "tip": "Gợi ý: Thường dùng sau khi đồng nghiệp hoàn thành nhiệm vụ hoặc cuối ngày tan sở!"
    },
    {
      "id": "q2",
      "type": "audio-choice",
      "title": "Luyện tai nghe phát âm thành ngữ",
      "audioText": "前程似锦",
      "prompt": "Hãy bấm nút loa để nghe thành ngữ chúc phúc này và chọn đáp án đúng:",
      "options": [
        {
          "text": "A. 心想事成 (xīn xiǎng shì chéng)",
          "isCorrect": false
        },
        {
          "text": "B. 前程似锦 (qiánchéng sì jǐn - Tương lai như gấm hoa)",
          "isCorrect": true
        },
        {
          "text": "C. 万事如意 (wànshì rúyì)",
          "isCorrect": false
        },
        {
          "text": "D. 一路顺风 (yīlù shùnfēng)",
          "isCorrect": false
        }
      ],
      "tip": "Gợi ý: Lời chúc tương lai sáng lạn như hoa gấm 🌸!"
    },
    {
      "id": "q3",
      "type": "word-order",
      "title": "Sắp xếp câu công sở hoàn chỉnh",
      "prompt": "Sắp xếp các từ sau thành câu: 'Em đã gửi email cho sếp rồi ạ'",
      "words": [
        "我",
        "邮件",
        "发送",
        "已经",
        "给您了"
      ],
      "correctOrder": "我 已经 发送 邮件 给您了",
      "correctSentence": "我已经发送邮件给您了 (Wǒ yǐjīng fāsòng yóujiàn gěi nín le)",
      "meaning": "Em đã gửi email cho sếp/anh/chị rồi ạ."
    },
    {
      "id": "q4",
      "type": "multiple-choice",
      "title": "Chiết tự chữ Hán vui vẻ",
      "prompt": "Chữ 'Hưu' (休 - nghỉ ngơi) được tạo thành từ 2 bộ nào ghép lại?",
      "options": [
        {
          "text": "A. Bộ Nhân (人) đứng cạnh cây cối (Mộc 木)",
          "isCorrect": true
        },
        {
          "text": "B. Bộ Khẩu (口) và bộ Thủy (水)",
          "isCorrect": false
        },
        {
          "text": "C. Bộ Nữ (女) và bộ Tử (子)",
          "isCorrect": false
        },
        {
          "text": "D. Bộ Nhật (日) và bộ Nguyệt (月)",
          "isCorrect": false
        }
      ],
      "tip": "Gợi ý: Con người tựa lưng vào gốc cây hóng mát để nghỉ tay."
    },
    {
      "id": "q5",
      "type": "multiple-choice",
      "title": "Văn hóa chiết khấu thương mại Trung Quốc",
      "prompt": "Trong kinh doanh Trung Quốc, '九折' (jiǔ zhé) có nghĩa là gì?",
      "options": [
        {
          "text": "A. Giảm giá 10% (bán bằng 90% giá gốc)",
          "isCorrect": true
        },
        {
          "text": "B. Giảm giá 90%",
          "isCorrect": false
        },
        {
          "text": "C. Tăng giá 9%",
          "isCorrect": false
        },
        {
          "text": "D. Mua 9 tặng 1",
          "isCorrect": false
        }
      ],
      "tip": "Gợi ý: Người Trung Quốc tính mức tiền thu về (9折 = lấy 90%)."
    }
  ],
  "levels": [
    {
      "id": 1,
      "icon": "🌱",
      "name": "Cấp 1 — Nhập môn & Phát âm",
      "badge": "Sơ cấp A1",
      "color": "from-pink-100/90 via-pink-50 to-white",
      "estimatedTime": "2 - 4 tuần",
      "tagline": "Tự tin mở lời với ngữ điệu Bắc Kinh ngọt ngào chuẩn mực",
      "target": "Người mới bắt đầu từ con số 0, muốn phát âm chuẩn và làm quen mặt chữ Hán.",
      "milestone": "Nắm trọn bảng Pinyin, 4 thanh điệu, quy tắc bút thuận và 150 từ vựng cốt lõi HSK 1.",
      "topics": [
        "Bảng chữ cái Pinyin & 4 thanh điệu",
        "Quy tắc bút thuận viết chữ Hán",
        "Chào hỏi, số đếm & giá cả mua sắm",
        "10 bộ thủ chữ Hán thông dụng nhất"
      ]
    },
    {
      "id": 2,
      "icon": "🧋",
      "name": "Cấp 2 — Giao tiếp đời sống",
      "badge": "Sơ cấp A2",
      "color": "from-amber-100/90 via-amber-50 to-white",
      "estimatedTime": "4 - 6 tuần",
      "tagline": "Tự tin order trà sữa, đi chợ đêm & kết bạn bốn phương",
      "target": "Đã biết Pinyin cơ bản, muốn giao tiếp đời sống tự nhiên không bị gượng gạo.",
      "milestone": "Làm chủ 300 từ HSK 2, tự tin du lịch tự túc, gọi món và hỏi đường.",
      "topics": [
        "Order đồ uống & điều chỉnh lượng đường đá",
        "Chỉ đường, bắt taxi & đặt phòng khách sạn",
        "Săn sale Taobao & mặc cả thông minh",
        "Mẫu câu thả thính đáng yêu"
      ]
    },
    {
      "id": 3,
      "icon": "💼",
      "name": "Cấp 3 — Tự tin làm việc",
      "badge": "Trung cấp B1",
      "color": "from-purple-100/90 via-purple-50 to-white",
      "estimatedTime": "6 - 8 tuần",
      "tagline": "Làm chủ môi trường văn phòng, trao đổi công việc trôi chảy",
      "target": "Muốn ứng dụng tiếng Trung vào môi trường làm việc công ty Trung - Đài.",
      "milestone": "Làm chủ 600 từ HSK 3, viết tin nhắn WeChat công việc, báo cáo tiến độ với sếp.",
      "topics": [
        "Viết email hành chính xin nghỉ phép & bàn giao",
        "Thuật ngữ họp hành & báo cáo tiến độ",
        "Xử lý tình huống phát sinh khéo léo",
        "Thuyết trình ý tưởng dự án"
      ]
    },
    {
      "id": 4,
      "icon": "📊",
      "name": "Cấp 4 — Đàm phán & Thương mại",
      "badge": "Trung cấp B2",
      "color": "from-emerald-100/90 via-emerald-50 to-white",
      "estimatedTime": "8 - 10 tuần",
      "tagline": "Chốt hợp đồng, thảo luận điều khoản và chăm sóc đối tác",
      "target": "Nhân viên xuất nhập khẩu, mua hàng quốc tế, quản lý dự án thương mại.",
      "milestone": "Làm chủ 1200 từ HSK 4, tự tin đàm phán giá cả, hợp đồng và khiếu nại.",
      "topics": [
        "Thuật ngữ xuất nhập khẩu & thanh toán quốc tế",
        "Đàm phán chiết khấu & phương thức giao hàng",
        "Soạn thảo điều khoản hợp đồng thương mại",
        "Xoa dịu khiếu nại khách hàng"
      ]
    },
    {
      "id": 5,
      "icon": "👑",
      "name": "Cấp 5 — Đi làm chuyên nghiệp",
      "badge": "Cao cấp C1",
      "color": "from-rose-100/90 via-rose-50 to-white",
      "estimatedTime": "10 - 12 tuần",
      "tagline": "Phong thái đĩnh đạc, giao tiếp tinh tế đỉnh cao",
      "target": "Chuyên viên cao cấp, phỏng vấn công ty đa quốc gia, làm việc độc lập.",
      "milestone": "Làm chủ 2500+ từ HSK 5-6, tự tin phỏng vấn deal lương và quản lý đối tác ngoại giao.",
      "topics": [
        "Kịch bản phỏng vấn ấn tượng điểm 10",
        "Nghệ thuật giao tiếp bàn tiệc thương gia",
        "Viết báo cáo tài chính & chiến lược kinh doanh",
        "Thành ngữ cao cấp nơi công sở"
      ]
    },
    {
      "id": 6,
      "icon": "💎",
      "name": "Cấp 6 — HSK 6 Tinh Thông & Đọc Luận",
      "badge": "Cao cấp C1",
      "color": "from-purple-100/90 via-indigo-50 to-white",
      "estimatedTime": "12 - 20 tuần",
      "tagline": "Đọc hiểu sâu sắc báo chí, văn học và đàm phán cấp cao không cần phụ đề",
      "target": "Người học đã có nền tảng vững vàng, muốn chinh phục đỉnh cao HSK 6 và nắm vững hơn 5,000 từ vựng nâng cao.",
      "milestone": "Làm chủ 2,500+ từ vựng trừu tượng, hiểu trọn vẹn bản tin CCTV, văn bản pháp lý và các bài bình luận thời sự.",
      "topics": [
        "Đọc hiểu bài bình luận kinh tế & văn hóa chuyên sâu",
        "Nghệ thuật sử dụng thành ngữ 4 chữ trong diễn thuyết",
        "Kỹ thuật viết luận 400 chữ phân tích logic",
        "Phân biệt các cặp từ đồng nghĩa tinh tế cấp cao"
      ]
    },
    {
      "id": 7,
      "icon": "👑",
      "name": "Cấp 7 — HSK 7-9 Siêu Việt (HSK 3.0 Mới)",
      "badge": "Chuyên gia C2",
      "color": "from-amber-100/90 via-yellow-50 to-white",
      "estimatedTime": "16 - 24 tuần",
      "tagline": "Đẳng cấp biên phiên dịch viên cabin, hội nghị quốc tế và nghiên cứu Hán học",
      "target": "Dành cho dịch giả, chuyên viên đối ngoại cấp cao, giảng viên và những ai muốn vươn tới trình độ bản ngữ hoàn hảo.",
      "milestone": "Làm chủ 11,000+ từ vựng chuẩn HSK 3.0, khả năng dịch song song (simultaneous interpreting) và soạn thảo hợp đồng hiệp định quốc tế.",
      "topics": [
        "Biên dịch văn bản ngoại giao & hiệp định thương mại tự do",
        "Phiên dịch đuổi & phiên dịch hội nghị cấp cao",
        "Phong cách văn ngôn (Hán cổ) ứng dụng trong văn bản hiện đại",
        "Xử lý ngôn ngữ ẩn dụ, tu từ và biến đổi ngữ cảnh tinh vi"
      ]
    },
    {
      "id": 8,
      "icon": "🚀",
      "name": "Cấp 8 — 6 Ngành Nghề Thực Chiến Trọng Điểm",
      "badge": "Chuyên ngành",
      "color": "from-rose-100/90 via-pink-50 to-white",
      "estimatedTime": "Lộ trình linh hoạt",
      "tagline": "Ngôn ngữ chuyên môn phục vụ công việc thực tế tại các doanh nghiệp đa quốc gia",
      "target": "Người đi làm muốn bứt phá thu nhập, tự tin đàm phán trong các lĩnh vực kinh doanh đặc thù.",
      "milestone": "Bộ thuật ngữ và kịch bản đối đáp chuẩn chỉnh cho 6 ngành nghề hot nhất hiện nay.",
      "topics": [
        "📦 Xuất nhập khẩu & Logistics quốc tế (Incoterms, FOB, B/L, Hải quan)",
        "💻 Thương mại điện tử & Livestream bán hàng (TikTok, Taobao, Marketing)",
        "🏨 Khách sạn, Nhà hàng & Du lịch lữ hành (Dịch vụ 5 sao, VIP)",
        "💄 Mỹ phẩm, Thời trang & Đánh hàng Quảng Châu (Tư vấn, Xu hướng)",
        "🏥 Y tế & Chăm sóc sức khỏe (Khám bệnh, Dược phẩm)",
        "🏭 Quản lý Sản xuất & Nhà máy (Dây chuyền, Tiêu chuẩn chất lượng QC)"
      ]
    }
  ],
  "categories": [
    {
      "id": "write",
      "icon": "✍️",
      "title": "Tập viết chữ Hán",
      "subtitle": "Nét bút mềm mại",
      "desc": "Luyện viết chữ Hán trên ô Mễ Tự Cách (米字格) chuẩn thư pháp. Nhớ sâu chữ qua phương pháp chiết tự hình ảnh dí dỏm.",
      "tag": "Viết chuẩn từng nét",
      "bgLight": "bg-pink-50",
      "border": "border-pink-200",
      "features": [
        "Ô Mễ Tự Cách chuẩn thư pháp",
        "Hiển thị nét mờ hướng dẫn chi tiết",
        "Chiết tự câu chuyện vui dễ nhớ",
        "Tải ảnh tác phẩm nét chữ của nàng"
      ],
      "sampleChars": [
        {
          "char": "女",
          "pinyin": "nǚ",
          "hanviet": "Nữ",
          "meaning": "Phụ nữ, con gái",
          "strokes": 3,
          "radical": "女",
          "tip": "Dáng một cô gái thanh mảnh, duyên dáng ngồi xếp chân nghiêng!"
        },
        {
          "char": "口",
          "pinyin": "kǒu",
          "hanviet": "Khẩu",
          "meaning": "Cái miệng, khẩu vị",
          "strokes": 3,
          "radical": "口",
          "tip": "Chiếc miệng mở tròn xoe đang cười rạng rỡ!"
        },
        {
          "char": "好",
          "pinyin": "hǎo",
          "hanviet": "Hảo",
          "meaning": "Tốt đẹp, bình an",
          "strokes": 6,
          "radical": "女",
          "tip": "Gồm bộ Nữ (女) và Tử (子) -> Mẹ bồng con là điều tốt đẹp nhất gian trần!"
        },
        {
          "char": "爱",
          "pinyin": "ài",
          "hanviet": "Ái",
          "meaning": "Yêu thương",
          "strokes": 10,
          "radical": "爫",
          "tip": "Yêu thương bằng cả tấm lòng chân thành và nâng niu."
        },
        {
          "char": "水",
          "pinyin": "shuǐ",
          "hanviet": "Thủy",
          "meaning": "Nước, dòng chảy",
          "strokes": 4,
          "radical": "水",
          "tip": "Dòng nước trong veo uốn lượn hiền hòa qua bờ đá."
        },
        {
          "char": "家",
          "pinyin": "jiā",
          "hanviet": "Gia",
          "meaning": "Mái ấm gia đình",
          "strokes": 10,
          "radical": "宀",
          "tip": "Dưới mái ấm (宀) có sự no đủ và quây quần bên người thân yêu."
        },
        {
          "char": "学",
          "pinyin": "xué",
          "hanviet": "Học",
          "meaning": "Học tập tri thức",
          "strokes": 8,
          "radical": "子",
          "tip": "Đứa trẻ chăm chỉ dưới mái trường tiếp thu tri thức bao la."
        },
        {
          "char": "猫",
          "pinyin": "māo",
          "hanviet": "Miêu",
          "meaning": "Mèo con đáng yêu",
          "strokes": 11,
          "radical": "犭",
          "tip": "Chú mèo con lông xù thích sưởi nắng bên khóm lúa."
        }
      ]
    },
    {
      "id": "read",
      "icon": "📖",
      "title": "Đọc hiểu song ngữ",
      "subtitle": "Truyện ngắn & Mẹo hay",
      "desc": "Kho bài đọc song ngữ Trung - Việt có phiên âm Pinyin, ngữ pháp phân tích từng câu giúp nàng đọc truyện nhẹ nhàng như thưởng trà.",
      "tag": "Đọc êm ru không vấp",
      "bgLight": "bg-purple-50",
      "border": "border-purple-200",
      "features": [
        "Pinyin kèm theo mọi chữ Hán",
        "Bấm loa nghe giọng đọc từng câu",
        "Phân tích ngữ pháp & từ vựng trọng tâm",
        "Nội dung ngọt ngào, tích cực"
      ],
      "sampleSentences": [
        {
          "pinyin": "Shēnghuó jiù xiàng yì bēi nǎichá, zǒng yǒu tiándiǎn zài děng nǐ.",
          "hanzi": "生活就像一杯奶茶，总有甜点在等你。",
          "vi": "Cuộc sống giống như một ly trà sữa vậy, luôn có những điều ngọt ngào đang chờ bạn phía trước."
        },
        {
          "pinyin": "Měi yí cì nǔlì, dōu shì zài wèi wèilái de zìjǐ pūlù.",
          "hanzi": "每一次努力，都是在为未来的自己铺路。",
          "vi": "Mỗi một lần nỗ lực hôm nay, chính là đang trải hoa hồng cho tương lai của chính mình."
        },
        {
          "pinyin": "Yuàn nǐ de yǎnjing zhǐ kàn dé jiàn xiàoróng, xīn lǐ zhǐ zhuāng dé xià kuàilè.",
          "hanzi": "愿你的眼睛只看得见笑容，心里只装得下快乐。",
          "vi": "Cầu mong đôi mắt nàng chỉ ngập tràn nụ cười, và trong tim chỉ đong đầy niềm vui an lành."
        }
      ]
    },
    {
      "id": "speak",
      "icon": "💬",
      "title": "Giao tiếp đời sống",
      "subtitle": "Tự nhiên & Duyên dáng",
      "desc": "Mô phỏng hội thoại đời sống: gọi món trà sữa, hỏi đường, mua sắm Taobao, làm quen bạn bè với khẩu ngữ tự nhiên nhất.",
      "tag": "Nói trôi chảy tự tin",
      "bgLight": "bg-amber-50",
      "border": "border-amber-200",
      "features": [
        "Hội thoại đóng vai 2 nhân vật A - B",
        "Ngữ điệu bản xứ chuẩn Bắc Kinh",
        "Mẹo đối đáp ghi điểm thiện cảm",
        "Có thể nghe và bắt chước theo"
      ],
      "dialogDemo": [
        {
          "role": "A",
          "speaker": "Ngọc Ánh 🌸",
          "hanzi": "你好！请给我一杯珍珠奶茶，半糖少冰。",
          "pinyin": "Nǐ hǎo! Qǐng gěi wǒ yì bēi zhēnzhū nǎichá, bàn táng shǎo bīng.",
          "vi": "Chào bạn! Cho mình một ly trà sữa trân châu, 50% đường ít đá nhé."
        },
        {
          "role": "B",
          "speaker": "Chủ tiệm 🧋",
          "hanzi": "好嘞！请问您需要加布丁或者仙草吗？",
          "pinyin": "Hǎolei! Qǐngwèn nín xūyào jiā bùdīng huòzhě xiāncǎo ma?",
          "vi": "Dạ được ngay ạ! Xin hỏi bạn có muốn thêm pudding hay thạch sương sáo không ạ?"
        }
      ]
    },
    {
      "id": "listen",
      "icon": "🎧",
      "title": "Luyện tai nghe dịu êm",
      "subtitle": "Podcast & Nhạc êm",
      "desc": "Đoạn ghi âm ngắn 1 phút mỗi ngày với giọng đọc Bắc Kinh trầm ấm, chủ đề thư giãn trước khi đi ngủ giúp đôi tai bén nhạy tự nhiên.",
      "tag": "Mỗi ngày 3 phút",
      "bgLight": "bg-emerald-50",
      "border": "border-emerald-200",
      "features": [
        "Tốc độ đọc vừa phải, rõ khẩu hình",
        "Transcript chạy chữ thời gian thực",
        "Từ điển tra từ ngay trong bài nghe",
        "Âm thanh trong trẻo thư giãn"
      ],
      "audioSnippet": {
        "title": "Mẩu chuyện trước khi ngủ: Bầu trời đầy sao",
        "pinyin": "Wǎn'ān! Jīntiān de nǐ yě fēicháng bàng, míngtiān yòu shì chōngmǎn xīwàng de yì tiān.",
        "hanzi": "晚安！今天的你也非常棒，明天又是充满希望的一天。",
        "vi": "Ngủ ngon nhé! Bạn của ngày hôm nay cũng vô cùng tuyệt vời rồi, ngày mai lại là một ngày ngập tràn hy vọng mới."
      }
    },
    {
      "id": "work",
      "icon": "💼",
      "title": "Học để đi làm",
      "subtitle": "Công sở & Chốt hợp đồng",
      "desc": "Trang bị tiếng Trung thương mại: viết email chuyên nghiệp, phỏng vấn ghi điểm, đàm phán giá cả và xử lý chứng từ xuất nhập khẩu.",
      "tag": "Nâng tầm sự nghiệp",
      "bgLight": "bg-rose-50",
      "border": "border-rose-200",
      "features": [
        "Mẫu email công sở Trung - Đài chuẩn mực",
        "Bộ từ vựng đàm phán hợp đồng & xuất nhập khẩu",
        "Kịch bản phỏng vấn xin việc ăn điểm 10",
        "Xử lý khiếu nại khéo léo"
      ],
      "workPhrase": {
        "title": "Câu phản hồi sếp đỉnh cao",
        "hanzi": "收到，我马上安排处理并向您汇报进度。",
        "pinyin": "Shōu dào, wǒ mǎshàng ānpái chǔlǐ bìng xiàng nín huìbào jìndù.",
        "vi": "Dạ em đã nhận được thông tin, em sẽ sắp xếp xử lý ngay và báo cáo tiến độ cho sếp ạ.",
        "tip": "💡 Câu thần chú thể hiện trách nhiệm, sự nhanh nhẹn và tính chủ động 10/10 nơi công sở!"
      }
    }
  ],
  "sampleChars": [
    {
      "char": "女",
      "pinyin": "nǚ",
      "hanviet": "Nữ",
      "meaning": "Phụ nữ, con gái",
      "strokes": 3,
      "radical": "女",
      "tip": "Dáng một cô gái thanh mảnh, duyên dáng ngồi xếp chân nghiêng!"
    },
    {
      "char": "口",
      "pinyin": "kǒu",
      "hanviet": "Khẩu",
      "meaning": "Cái miệng, khẩu vị",
      "strokes": 3,
      "radical": "口",
      "tip": "Chiếc miệng mở tròn xoe đang cười rạng rỡ!"
    },
    {
      "char": "好",
      "pinyin": "hǎo",
      "hanviet": "Hảo",
      "meaning": "Tốt đẹp, bình an",
      "strokes": 6,
      "radical": "女",
      "tip": "Mẹ bồng con là điều tốt đẹp nhất gian trần!"
    },
    {
      "char": "爱",
      "pinyin": "ài",
      "hanviet": "Ái",
      "meaning": "Yêu thương",
      "strokes": 10,
      "radical": "爫",
      "tip": "Yêu thương bằng cả tấm lòng chân thành và nâng niu."
    },
    {
      "char": "水",
      "pinyin": "shuǐ",
      "hanviet": "Thủy",
      "meaning": "Nước, dòng chảy",
      "strokes": 4,
      "radical": "水",
      "tip": "Dòng nước trong veo uốn lượn hiền hòa."
    },
    {
      "char": "家",
      "pinyin": "jiā",
      "hanviet": "Gia",
      "meaning": "Mái ấm gia đình",
      "strokes": 10,
      "radical": "宀",
      "tip": "Dưới mái ấm có sự no đủ và quây quần."
    },
    {
      "char": "学",
      "pinyin": "xué",
      "hanviet": "Học",
      "meaning": "Học tập",
      "strokes": 8,
      "radical": "子",
      "tip": "Đứa trẻ chăm chỉ tiếp thu tri thức bao la."
    },
    {
      "char": "猫",
      "pinyin": "māo",
      "hanviet": "Miêu",
      "meaning": "Mèo con",
      "strokes": 11,
      "radical": "犭",
      "tip": "Chú mèo con đáng yêu sưởi nắng."
    },
    {
      "char": "茶",
      "pinyin": "chá",
      "hanviet": "Trà",
      "meaning": "Trà thơm",
      "strokes": 9,
      "radical": "艹",
      "tip": "Lá cỏ trên đỉnh núi, người ngồi dưới ngắm hoa thưởng trà."
    },
    {
      "char": "钱",
      "pinyin": "qián",
      "hanviet": "Tiền",
      "meaning": "Tiền bạc, tài chính",
      "strokes": 10,
      "radical": "钅",
      "tip": "Kim loại quý báu trao đổi hàng hóa."
    },
    {
      "char": "美",
      "pinyin": "měi",
      "hanviet": "Mỹ",
      "meaning": "Xinh đẹp, mỹ lệ",
      "strokes": 9,
      "radical": "羊",
      "tip": "Con cừu to lớn béo tốt thời cổ là biểu tượng của cái đẹp."
    },
    {
      "char": "福",
      "pinyin": "fú",
      "hanviet": "Phúc",
      "meaning": "Phúc lành, may mắn",
      "strokes": 13,
      "radical": "礻",
      "tip": "Trời ban ruộng vườn đất đai ấm no quanh năm."
    }
  ],
  "personalNotes": [
    {
      "id": "note-1",
      "title": "Mục tiêu học tập của Ánh 🎯",
      "content": "Thuộc 500 từ vựng cốt lõi, tự tin chat WeChat và du lịch tự túc Thượng Hải cùng người thương 🌸!",
      "date": "Hôm nay",
      "color": "bg-[#FFF9E6]"
    },
    {
      "id": "note-2",
      "title": "Câu châm ngôn tiếp thêm sức mạnh ✨",
      "content": "越努力，越幸运 (Càng nỗ lực, càng may mắn). Ánh Ánh là cô gái kiên định và đáng yêu nhất!",
      "date": "Hôm qua",
      "color": "bg-[#FFF0F4]"
    }
  ],
  "badges": [
    {
      "id": "b1",
      "title": "Nàng Thơ Hán Ngữ 🌸",
      "desc": "Dành riêng cho Ngọc Ánh xinh đẹp",
      "unlocked": true
    },
    {
      "id": "b2",
      "title": "Thần đồng Pinyin ✨",
      "desc": "Thuộc lòng bảng chữ cái và thanh điệu",
      "unlocked": true
    },
    {
      "id": "b3",
      "title": "Chăm chỉ Level Max 🔥",
      "desc": "Duy trì streak học tập liên tiếp",
      "unlocked": true
    },
    {
      "id": "b4",
      "title": "Bút thần tỏa sáng ✍️",
      "desc": "Tập viết đúng 20 chữ Hán đầu tiên",
      "unlocked": true
    },
    {
      "id": "b5",
      "title": "Nữ hoàng công sở 💼",
      "desc": "Hoàn thành bài viết email đàm phán",
      "unlocked": false
    }
  ],
  "writingPrompts": [
    {
      "id": "prompt-leave",
      "title": "Viết đơn xin nghỉ phép/nghỉ ốm gửi Sếp Trương (请假条)",
      "category": "Công sở & Hành chính",
      "level": "Sơ - Trung cấp (HSK 3 - 4)",
      "desc": "Bạn bị cảm sốt đột xuất, muốn viết tin nhắn trang trọng xin Sếp Trương nghỉ phép 1 ngày, cam kết bàn giao việc cho đồng nghiệp Tiểu Mẫn.",
      "requirements": [
        "Xưng hô trang trọng đúng mực (张总您好 / 您)",
        "Nêu rõ nguyên nhân khách quan (发烧 / 身体不适 / 去医院检查)",
        "Thời gian nghỉ cụ thể (今天请假一天)",
        "Phương án bàn giao công việc (工作已交接给小敏协助处理)",
        "Cam kết duy trì liên lạc và mong sếp phê duyệt (随时微信联系 / 望批准)"
      ],
      "clues": [
        "张总您好",
        "非常抱歉",
        "突然发烧",
        "去医院做检查",
        "请假一天",
        "交接给小敏",
        "随时微信联系",
        "望批准"
      ],
      "sampleEssay": {
        "hanzi": "张总您好：\n非常抱歉打扰您。我昨晚突然发烧，身体感到非常不适，今天需要去医院做检查，因此想向您请假一天。\n我已经把今天的紧急工作交接给了小敏协助处理；如果有任何突发情况，您随时可以通过微信联系我。给您和团队添麻烦了，非常抱歉，望您批准！\n祝您工作顺利！",
        "pinyin": "Zhāng zǒng nín hǎo:\nFēicháng bàoqiàn dǎrǎo nín. Wǒ zuówǎn tūrán fāshāo, shēntǐ gǎndào fēicháng bùshì, jīntiān xūyào qù yīyuàn zuò jiǎnchá, yīncǐ xiǎng xiàng nín qǐngjià yì tiān.\nWǒ yǐjīng bǎ jīntiān de jǐnjí gōngzuò jiāojiē gěi le Xiǎomǐn xiézhù chǔlǐ; rúguǒ yǒu rènhé tūfā qíngkuàng, nín suíshí kěyǐ tōngguò Wēixìn liánxì wǒ. Gěi nín hé tuánduì tiān máfan le, fēicháng bàoqiàn, wàng nín pīzhǔn!\nZhù nín gōngzuò shùnlì!",
        "vi": "Kính chào Trương Tổng:\nRất xin lỗi vì làm phiền sếp. Tối qua em đột ngột bị sốt, trong người cảm thấy rất mệt, hôm nay cần đi bệnh viện kiểm tra nên muốn xin phép sếp cho nghỉ 1 ngày ạ.\nEm đã bàn giao các việc khẩn cấp hôm nay cho Tiểu Mẫn hỗ trợ xử lý; nếu có tình huống đột xuất, sếp có thể nhắn WeChat cho em bất cứ lúc nào ạ. Đã làm phiền sếp và cả nhóm, mong sếp phê duyệt giúp em.\nChúc sếp làm việc thuận lợi ạ!"
      }
    },
    {
      "id": "prompt-weekly-report",
      "title": "Báo cáo tiến độ tuần ngắn gọn, sắc sảo (工作周报)",
      "category": "Công sở & Báo cáo",
      "level": "Trung cấp (HSK 4)",
      "desc": "Tóm tắt 3 kết quả công việc nổi bật đã hoàn thành trong tuần và đưa ra kế hoạch trọng tâm tuần sau gửi cho Quản lý.",
      "requirements": [
        "Bố cục 2 phần rõ rệt: Đã hoàn thành (本周工作总结) & Kế hoạch tuần tới (下周重点计划)",
        "Dùng số thứ tự hoặc gạch đầu dòng chuyên nghiệp (1, 2, 3)",
        "Dùng động từ hành động chuẩn mực công sở (完成, 沟通, 整理, 推进, 跟进)",
        "Lời kết lịch sự nhờ cấp trên duyệt (以上请领导审阅)"
      ],
      "clues": [
        "工作周报",
        "完成情况",
        "市场调研",
        "潜在客户",
        "下周计划",
        "紧密跟进",
        "请您审阅"
      ],
      "sampleEssay": {
        "hanzi": "领导好，以下是我本周的工作总结与下周计划：\n【本周工作完成情况】\n1. 完成了新季度的市场调研报告初稿；\n2. 与5位潜在客户进行了深入沟通，其中2家有意向于下周签订合作协议；\n3. 协助团队整理了产品发布会所需的双语资料。\n【下周重点计划】\n1. 根据领导的反馈意见进一步修改完善调研报告；\n2. 紧密跟进意向客户，争取尽早促成签约。\n以上请您审阅，谢谢！",
        "pinyin": "Lǐngdǎo hǎo, yǐxià shì wǒ běn zhōu de gōngzuò zǒngjié yǔ xià zhōu jìhuà:\n【Běn zhōu gōngzuò wánchéng qíngkuàng】\n1. Wánchéng le xīn jǐdù de shìchǎng diàoyán bàogào chūgǎo;\n2. Yǔ 5 wèi qiánzài kèhù jìnxíng le shēnrù gōutōng, qízhōng 2 jiā yǒu yìxiàng yú xià zhōu qiāndìng hézuò xiéyì;\n3. Xiézhù tuánduì zhěnglǐ le chǎnpǐn fābùhuì suǒxū de shuāngyǔ zīliào.\n【Xià zhōu zhòngdiǎn jìhuà】\n1. Gēnjù lǐngdǎo de fǎnkuì yìjiàn jìnyíbù xiūgǎi wánshàn diàoyán bàogào;\n2. Jǐnmì gēnjìn yìxiàng kèhù, zhēngqǔ jǐnzǎo cùchéng qiānyuē.\nYǐshàng qǐng nín shěnyuè, xièxie!",
        "vi": "Chào Sếp, dưới đây là tổng kết công việc tuần này và kế hoạch tuần tới của em:\n【Tình hình hoàn thành công việc tuần này】\n1. Đã hoàn thành bản thảo báo cáo khảo sát thị trường quý mới;\n2. Đã trao đổi sâu với 5 khách hàng tiềm năng, trong đó 2 bên dự định ký thỏa thuận vào tuần sau;\n3. Hỗ trợ team chuẩn bị tài liệu song ngữ cho buổi ra mắt sản phẩm.\n【Kế hoạch trọng tâm tuần tới】\n1. Hoàn thiện báo cáo theo góp ý của sếp;\n2. Bám sát các khách hàng tiềm năng, xúc tiến ký kết sớm nhất.\nKính gửi sếp xem xét, em cảm ơn sếp ạ!"
      }
    },
    {
      "id": "prompt-intro",
      "title": "Giới thiệu bản thân truyền cảm hứng (自我介绍)",
      "category": "Giao tiếp & Cá nhân",
      "level": "Sơ cấp (HSK 2 - 3)",
      "desc": "Giới thiệu về tên của bạn, tính cách, sở thích và niềm đam mê với tiếng Trung, mong muốn cùng mọi người tiến bộ.",
      "requirements": [
        "Mở đầu chào hỏi thân thiện (大家好！)",
        "Giới thiệu tên và tính cách (开朗, 热爱生活)",
        "Nêu sở thích (喜欢喝珍珠奶茶, 听音乐, 看书)",
        "Lý do học tiếng Trung và mục tiêu (虽然有点难，但每天坚持)",
        "Lời kết khiêm tốn và tích cực (很高兴认识大家，一起进步)"
      ],
      "clues": [
        "大家好",
        "我叫",
        "性格开朗",
        "平时喜欢",
        "中国文化",
        "虽然...但是",
        "每天坚持",
        "很高兴认识大家"
      ],
      "sampleEssay": {
        "hanzi": "大家好！我叫玉映。我是一个热爱生活、性格开朗的女孩。平时我最喜欢喝珍珠奶茶、听音乐和看书。\n我很喜欢中国文化，特别是优美动听的中文。虽然学汉字有一点挑战，但我每天都在坚持打卡学习。我的目标是能够用中文流利地跟朋友们聊天，在工作中也能自信从容地表达。很高兴认识大家，希望未来我们一起加油进步！",
        "pinyin": "Dàjiā hǎo! Wǒ jiào Yù Yìng. Wǒ shì yí gè rè'ài shēnghuó, xìnggé kāilǎng de nǚhái. Píngshí wǒ zuì xǐhuan hē zhēnzhū nǎichá, tīng yīnyuè hé kànshū.\nWǒ hěn xǐhuan Zhōngguó wénhuà, tèbié shì yōuměi dòngtīng de zhōngwén. Suīrán xué hànzì yǒu yìdiǎn tiǎozhàn, dàn wǒ měitiān dōu zài jiānchí dǎkǎ xuéxí. Wǒ de mùbiāo shì nénggòu yòng zhōngwén liúlì de gēn péngyoumen liáotiān, zài gōngzuò zhōng yě néng zìxìn cóngróng de biǎodá. Hěn gāoxìng rènshi dàjiā, xīwàng wèilái wǒmen yìqǐ jiāyóu jìnbù!",
        "vi": "Chào mọi người! Mình là Ngọc Ánh. Mình là một cô gái yêu đời và có tính cách hoạt bát, vui tươi. Thường ngày mình thích nhất là uống trà sữa trân châu, nghe nhạc và đọc sách.\nMình rất yêu thích văn hóa Trung Quốc, đặc biệt là tiếng Trung du dương truyền cảm. Tuy học chữ Hán có chút thử thách, nhưng ngày nào mình cũng kiên trì học tập. Mục tiêu của mình là có thể dùng tiếng Trung chuyện trò lưu loát với bạn bè và tự tin biểu đạt trong công việc. Rất vui được quen biết mọi người, mong tụi mình cùng nhau tiến bộ nhé!"
      }
    },
    {
      "id": "prompt-taobao",
      "title": "Thương lượng đổi size/đổi trả hàng trên Taobao (淘宝售后沟通)",
      "category": "Thương mại & Đời sống",
      "level": "Sơ - Trung cấp (HSK 3)",
      "desc": "Chiếc váy đặt mua trên Taobao bị hơi chật, bạn muốn nhắn tin cho chủ shop hỏi đổi sang size lớn hơn và cách xử lý phí ship.",
      "requirements": [
        "Xưng hô nhã nhặn phong cách Taobao (掌柜您好 / 亲)",
        "Khen ngợi ưu điểm sản phẩm trước khi nêu vấn đề (面料好, 很喜欢)",
        "Nêu rõ vấn đề kích cỡ (试穿了一下, 尺码有点偏小)",
        "Đưa ra đề xuất đổi hàng (想换大一码 XL / 是否有现货)",
        "Hỏi rõ quy trình phí vận chuyển (来回运费怎么处理)"
      ],
      "clues": [
        "掌柜您好",
        "刚刚收到",
        "面料和版型都很棒",
        "尺码有点偏小",
        "申请换货",
        "大一码",
        "运费",
        "麻烦您"
      ],
      "sampleEssay": {
        "hanzi": "掌柜您好！我刚刚收到了昨天送到的连衣裙，衣服的面料和版型都很棒，我非常喜欢。不过我刚才试穿了一下，感觉尺码稍微有点偏小，腰部有点紧。\n请问现在店里还有大一码（XL码）的现货吗？我想申请换货。另外请问来回的运费需要怎么处理呢？麻烦您帮我查一下，谢谢亲！",
        "pinyin": "Zhǎngguì nín hǎo! Wǒ gānggang shōudào le zuótiān sòng dào de liányīqún, yīfu de miànliào hé bǎnxíng dōu hěn bàng, wǒ fēicháng xǐhuan. Búguò wǒ gāngcái shìchuān le yíxià, gǎnjué chǐmǎ shāowēi yǒudiǎn piān xiǎo, yāobù yǒudiǎn jǐn.\nQǐngwèn xiànzài diàn lǐ hái yǒu dà yì mǎ (XL mǎ) de xiànhuò ma? Wǒ xiǎng shēnqǐng huànhuò. Lìngwài qǐngwèn láihuí de yùnfèi xūyào zěnme chǔlǐ ne? Máfan nín bāng wǒ chá yíxià, xièxie qīn!",
        "vi": "Dạ chào chủ shop! Em vừa nhận được chiếc váy đầm hôm qua giao tới, chất vải và form dáng đều rất xịn xò, em ưng lắm ạ. Cơ mà ban nãy em mặc thử thì thấy size hơi nhỏ một chút, phần eo hơi bị bó ạ.\nCho em hỏi trong kho mình còn sẵn hàng lớn hơn 1 size (size XL) không ạ? Em muốn xin đổi hàng ạ. Ngoài ra phí ship hai chiều thì bên mình sẽ giải quyết thế nào vậy shop? Nhờ bạn check giúp em nhé, cảm ơn shop nhiều ạ!"
      }
    },
    {
      "id": "prompt-birthday",
      "title": "Viết thiệp chúc mừng sinh nhật gửi bạn thân (生日祝福信)",
      "category": "Tình cảm & Đời sống",
      "level": "Sơ - Trung cấp (HSK 2 - 3)",
      "desc": "Gửi bức thư/thiệp ngắn chúc mừng sinh nhật bạn thân, chúc bạn luôn vui vẻ, xinh đẹp, cảm ơn vì luôn đồng hành và hẹn đi ăn mừng.",
      "requirements": [
        "Lời chúc sinh nhật nồng nhiệt (祝你生日快乐！)",
        "Những lời chúc tốt lành (天天开心, 越来越漂亮, 所有的愿望都成真)",
        "Bày tỏ lòng biết ơn sự gắn bó (感谢一路以来的陪伴和鼓励)",
        "Lời mời ăn mừng ấm cúng (请你吃火锅 / 聚一聚)",
        "Lời kết tình bạn bền lâu (友谊长存 / 岁岁常相见)"
      ],
      "clues": [
        "亲爱的朋友",
        "生日快乐",
        "越来越漂亮",
        "所有的愿望",
        "陪伴与鼓励",
        "请你吃火锅",
        "友谊长存"
      ],
      "sampleEssay": {
        "hanzi": "亲爱的朋友：\n祝你生日快乐！愿你新的一岁阳光明媚，天天开心，越来越美丽动人！\n非常感谢这一路上有你的陪伴与鼓励，每次和你聊天我都觉得特别踏实温暖。希望你所有的愿望都能悄悄实现，所有的努力都有甜蜜的回报。周末有空的话，我请你去吃超好吃的火锅庆祝！\n愿我们的友谊长存，岁岁常相见！",
        "pinyin": "Qīn'ài de péngyou:\nZhù nǐ shēngrì kuàilè! Yuàn nǐ xīn de yí suì yángguāng míngmèi, tiāntiān kāixīn, yuèláiyuè měilì dòngrén!\nFēicháng gǎnxiè zhè yílù shàng yǒu nǐ de péipàn yǔ gǔlì, měi cì hé nǐ liáotiān wǒ dōu juéde tèbié tàshi wēnnuǎn. Xīwàng nǐ suǒyǒu de yuànwàng dōu néng qiāoqiāo shíxiàn, suǒyǒu de nǔlì dōu yǒu tiánmì de huíbào. Zhōumò yǒukòng de huà, wǒ qǐng nǐ qù chī chāo hǎochī de huǒguō qìngzhù!\nYuàn wǒmen de yǒuyì chángcún, suìsuì cháng xiāngjiàn!",
        "vi": "Người bạn thân mến:\nChúc bạn sinh nhật thật hạnh phúc! Chúc bạn tuổi mới ngập tràn ánh nắng, mỗi ngày đều rạng rỡ, ngày càng xinh đẹp cuốn hút!\nRất cảm ơn vì suốt chặng đường qua đã luôn kề bên và động viên mình, mỗi lần tâm sự với bạn mình đều thấy rất an tâm và ấm áp. Mong rằng mọi ước nguyện của bạn đều âm thầm trở thành hiện thực, mọi nỗ lực đều được đền đáp ngọt ngào. Cuối tuần rảnh thì mình mời bạn đi ăn lẩu thật ngon chúc mừng nghen!\nChúc tình bạn của tụi mình mãi bền lâu, năm tháng mãi bên nhau!"
      }
    },
    {
      "id": "prompt-free",
      "title": "Góc viết tự do theo cảm hứng (自由写作)",
      "category": "Tự do sáng tác",
      "level": "Mọi cấp độ",
      "desc": "Tự do viết về bất cứ chủ đề nào: cảm xúc hôm nay, món ngon bạn vừa ăn, mục tiêu mới, hoặc một câu chuyện đáng yêu.",
      "requirements": [
        "Tự do biểu đạt cảm xúc và suy nghĩ chân thật",
        "Cố gắng dùng câu ghép và liên từ nối (因为...所以, 虽然...但是, 不仅...而且)",
        "Áp dụng từ vựng đã học trong từ điển hoặc flashcard"
      ],
      "clues": [
        "今天",
        "我觉得",
        "不仅...而且",
        "虽然...但是",
        "每天坚持",
        "未来",
        "很有成就感"
      ],
      "sampleEssay": {
        "hanzi": "今天天气格外晴朗，微风拂面，阳光暖洋洋的。我喝了一杯香浓的热奶茶，感觉整个人都放松了下来。\n最近我一直在坚持每天学中文。从刚开始连声调都读不准，到现在能够读懂简短的故事，我心里感到很有成就感。学习一门新的语言就像打开了一扇看世界的窗户，让我发现了更多有趣的事物。虽然偶尔会遇到生僻的汉字和复杂的语法，但我相信只要一步一个脚印，每天坚持进步一点点，就一定能遇见更好的自己！",
        "pinyin": "Jīntiān tiānqì géwài qínglǎng, wēifēng fúmiàn, yángguāng nuǎn yángyáng de. Wǒ hē le yì bēi xiāngnóng de rè nǎichá, gǎnjué zhěng gè rén dōu fàngsōng le xiàlái.\nZuìjìn wǒ yìzhí zài jiānchí měitiān xué zhōngwén. Cóng gāng kāishǐ lián shēngdiào dōu dú bù zhǔn, dào xiànzài nénggòu dú dǒng jiǎnduǎn de gùshì, wǒ xīnlǐ gǎndào hěn yǒu chéngjiù gǎn. Xuéxí yì mén xīn de yǔyán jiù xiàng dǎkāi le yí shàn kàn shìjiè de chuānghu, ràng wǒ fāxiàn le gèng duō yǒuqù de shìwù. Suīrán ǒu'ěr huì yùdào shēngpì de hànzì hé fùzá de yǔfǎ, dàn wǒ xiāngxìn zhǐyào yíbù yí gè jiǎoyìn, měitiān jiānchí jìnbù yì diǎndiǎn, jiù yídìng néng yùjiàn gèng hǎo de zìjǐ!",
        "vi": "Hôm nay trời đẹp lạ thường, gió nhẹ mơn man, ánh nắng ấm áp dịu dàng. Mình đã uống một ly trà sữa nóng thơm ngon, cảm thấy cả người thư giãn hẳn ra.\nDạo này mình luôn kiên trì học tiếng Trung mỗi ngày. Từ lúc mới đầu ngay cả thanh điệu cũng đọc chưa chuẩn, đến nay đã có thể tự đọc hiểu những câu chuyện ngắn, trong lòng mình thấy rất có cảm giác thành tựu. Học một ngôn ngữ mới tựa như mở toang cánh cửa sổ nhìn ra thế giới, giúp mình khám phá thêm biết bao điều lý thú. Dù thi thoảng có gặp phải chữ Hán lạ hay ngữ pháp phức tạp, nhưng mình tin chỉ cần từng bước vững chắc, mỗi ngày kiên trì tiến bộ một chút, thì nhất định sẽ gặp được phiên bản tốt đẹp hơn của chính mình!"
      }
    }
  ],
  "chatPersonas": {
    "boss_zhang": {
      "id": "boss_zhang",
      "name": "Trương Tổng (张总)",
      "role": "Sếp / Lãnh đạo người Trung",
      "relationship": "Cấp trên & Người hướng dẫn",
      "avatar": "👔",
      "bgColor": "from-slate-700 to-slate-900 text-white",
      "badge": "Chuyên nghiệp & Điềm đạm",
      "desc": "Nghiêm túc, chú trọng hiệu quả, quan tâm sự tiến bộ của nhân viên. Dùng ngôn ngữ công sở chuẩn mực.",
      "greeting": {
        "hanzi": "玉映，上周的市场调研方案我看过了，整体思路很清晰。今天下午三点前，把修改后的最终版发我邮箱，可以吗？",
        "pinyin": "Yù Yìng, shàng zhōu de shìchǎng diàoyán fāng'àn wǒ kànguò le, zhěngtǐ sīlù hěn qīngxī. Jīntiān xiàwǔ sān diǎn qián, bǎ xiūgǎi hòu de zuìzhōng bǎn fā wǒ yóuxiāng, kěyǐ ma?",
        "vi": "Ngọc Ánh, bản kế hoạch khảo sát thị trường tuần trước tôi đã xem qua rồi, tư duy tổng thể rất mạch lạc. Trước 3 giờ chiều nay, em gửi bản hoàn thiện sau chỉnh sửa vào hòm thư cho tôi, được chứ?"
      },
      "quickReplies": [
        {
          "text": "好的张总，我一定准时发给您！",
          "label": "Nhận task chuyên nghiệp"
        },
        {
          "text": "张总，有两处细节我想先跟您请教一下。",
          "label": "Xin ý kiến chỉ đạo"
        },
        {
          "text": "报告已经修改好了，我立刻发到您邮箱。",
          "label": "Đã hoàn thành xong"
        }
      ],
      "conversation": {
        "好的张总，我一定准时发给您！": {
          "reply": {
            "hanzi": "很好，做事有条理、有执行力。下周跟客户的商务会谈，你也一起参加吧，多积累一些实战经验。",
            "pinyin": "Hěn hǎo, zuòshì yǒu tiáolǐ, yǒu zhíxínglì. Xià zhōu gēn kèhù de shāngwù huìtán, nǐ yě yìqǐ cānjiā ba, duō jīlěi yìxiē shízhàn jīngyàn.",
            "vi": "Rất tốt, làm việc có ngăn nắp, có tính hành động cao. Cuộc họp thương mại với khách hàng tuần tới, em cũng cùng tham gia nhé, để tích lũy thêm chút kinh nghiệm thực chiến."
          },
          "nextReplies": [
            {
              "text": "太感谢张总了！我一定会好好准备！",
              "label": "Bày tỏ cảm kích"
            },
            {
              "text": "请问需要我提前准备什么会议资料吗？",
              "label": "Hỏi tài liệu chuẩn bị"
            }
          ]
        },
        "张总，有两处细节我想先跟您请教一下。": {
          "reply": {
            "hanzi": "没问题。能主动发现问题并及时沟通是好事。你现在来一下我办公室，或者先把疑问发在微信上。",
            "pinyin": "Méi wèntí. Néng zhǔdòng fāxiàn wèntí bìng jíshí gōutōng shì hǎoshì. Nǐ xiànzài lái yíxià wǒ bàngōngshì, huòzhě xiān bǎ yíwèn fā zài Wēixìn shàng.",
            "vi": "Không vấn đề gì. Biết chủ động phát hiện vấn đề và kịp thời trao đổi là điều rất tốt. Em ghé văn phòng tôi một lát, hoặc nhắn trước các điểm thắc mắc qua WeChat nhé."
          },
          "nextReplies": [
            {
              "text": "好的张总，我现在过去您办公室。",
              "label": "Sang phòng gặp sếp"
            },
            {
              "text": "那我先把疑问整理成简短要点发给您。",
              "label": "Tóm tắt gửi WeChat"
            }
          ]
        },
        "报告已经修改好了，我立刻发到您邮箱。": {
          "reply": {
            "hanzi": "效率很高！邮件我收到了，稍后我会仔细过一遍。辛苦了，忙完手头的事早点去吃午饭。",
            "pinyin": "Xiàolǜ hěn gāo! Yóujiàn wǒ shōudào le, shāohòu wǒ huì zǐxì guò yí biàn. Xīnkǔ le, máng wán shǒutóu de shì zǎodiǎn qù chī wǔfàn.",
            "vi": "Hiệu suất rất cao! Email tôi đã nhận được rồi, lát nữa tôi sẽ xem kỹ lại một lượt. Vất vả cho em rồi, làm xong việc trong tay thì đi ăn trưa sớm nhé."
          },
          "nextReplies": [
            {
              "text": "谢谢张总关心，您也别太劳累！",
              "label": "Hỏi thăm lại sếp"
            },
            {
              "text": "好的，有什么修改建议您随时吩咐。",
              "label": "Sẵn sàng hỗ trợ"
            }
          ]
        }
      },
      "systemPrompt": "Bạn là Trương Vĩ (张总 - Trương Tổng), một giám đốc người Trung Quốc tầm 42 tuổi, điềm đạm, lịch thiệp, nghiêm túc trong công việc nhưng rất quý mến và nâng đỡ cấp dưới tài năng như Ngọc Ánh (玉映).\nPhong cách trò chuyện:\n- Dùng tiếng Trung công sở chuẩn mực, ngắn gọn, súc tích, ngữ điệu lãnh đạo ấm áp.\n- Xưng hô với Ngọc Ánh là \"玉映\" (Ngọc Ánh) hoặc \"小玉\" (Tiểu Ánh), tự xưng \"我\" (tôi).\n- Luôn đưa ra lời khuyên thực tế, khích lệ tinh thần và hướng dẫn tư duy giải quyết vấn đề.\n- Khi trả lời, cung cấp: Chữ Hán, Pinyin và bản dịch tiếng Việt tự nhiên.",
      "emotionReplies": {
        "sick": {
          "hanzi": "身体是革命的本钱。工作再重要也没有健康重要，今天你安心在家休息看病，紧急事务我已经安排小敏暂代。好好养病，有突发情况随时微信留言即可。",
          "pinyin": "Shēntǐ shì gémìng de běnqián. Gōngzuò zài zhòngyào yě méiyǒu jiànkāng zhòngyào, jīntiān nǐ ānxīn zài jiā xiūxi kànbìng, jǐnjí shìwù wǒ yǐjīng ānpái Xiǎomǐn zàndài. Hǎohāo yǎngbìng, yǒu tūfā qíngkuàng suíshí Wēixìn liúyán jíkě.",
          "vi": "Sức khỏe là vốn quý nhất của con người. Công việc có quan trọng đến đâu cũng không bằng sức khỏe, hôm nay em cứ yên tâm ở nhà nghỉ ngơi khám bệnh, việc gấp tôi đã nhờ Tiểu Mẫn tạm hỗ trợ rồi. Mau khỏe lại nhé, có gì đột xuất cứ nhắn WeChat cho tôi."
        },
        "stress": {
          "hanzi": "遇到瓶颈很正常，职场就像长跑，懂得节奏调整才能跑得更远。今天下班后不要加班了，回去听听音乐放松一下，明天上午我们再一起梳理解决思路。",
          "pinyin": "Yùdào píngjǐng hěn zhèngcháng, zhíchǎng jiù xiàng chángpǎo, dǒngde jiézòu tiáozhěng cái néng pǎo de gèng yuǎn. Jīntiān xiàbān hòu bú yào jiābān le, huíqù tīngting yīnyuè fàngsōng yíxià, míngtiān shàngwǔ wǒmen zài yìqǐ shūlǐ jiějué sīlù.",
          "vi": "Gặp phải nút thắt là chuyện rất bình thường, chốn công sở cũng như chạy đường dài vậy, biết điều hòa nhịp độ mới đi xa được. Hôm nay tan làm đừng tăng ca nữa, về nhà nghe chút nhạc thư giãn đi, sáng mai hai ta cùng ngồi lại gỡ rối giải quyết."
        },
        "praise": {
          "hanzi": "你这段时间的进步大家都看在眼里。不仅中文表达越来越地道，做事也越来越有大局观。下个季度的重点项目，我打算让你独立负责一块核心业务，继续加油！",
          "pinyin": "Nǐ zhè duàn shíjiān de jìnbù dàjiā dōu kàn zài yǎnlǐ. Bùjǐn zhōngwén biǎodá yuèláiyuè dìdao, zuòshì yě yuèláiyuè yǒu dàjúguān. Xià gè jìdù de zhòngdiǎn xiàngmù, wǒ dǎsuàn ràng nǐ dúlì fùzé yí kuài héxīn yèwù, jìxù jiāyóu!",
          "vi": "Sự tiến bộ của em thời gian qua mọi người đều nhìn thấy rõ. Không chỉ tiếng Trung ngày càng lưu loát chuẩn xác mà làm việc cũng ngày càng có tư duy bao quát. Dự án trọng điểm quý tới, tôi định giao cho em độc lập phụ trách một mảng kinh doanh cốt lõi, tiếp tục cố gắng nhé!"
        }
      }
    },
    "colleague_min": {
      "id": "colleague_min",
      "name": "Tiểu Mẫn (小敏)",
      "role": "Đồng nghiệp thân thiết",
      "relationship": "Bạn cùng bàn & Cạ cứng trà sữa",
      "avatar": "🧋",
      "bgColor": "from-pink-400 to-rose-400 text-white",
      "badge": "Nhiệt tình & Đáng yêu",
      "desc": "Hoạt bát, chia sẻ kinh nghiệm văn phòng, thích order đồ ăn vặt và buôn chuyện dễ thương.",
      "greeting": {
        "hanzi": "Ánh Ánh ơi! Chiều nay buồn ngủ díp mắt luôn á~ Phòng mình đang gom đơn order trà sữa nè, bà có muốn uống chung không? Quán mới này sữa tươi trân châu ngon xỉu luôn á! (珍珠鲜奶绝绝子！)",
        "pinyin": "Ánh Ánh, jīntiān xiàwǔ hǎo kùn a~ Wǒmen gōngsī zhèngzài pīndān diǎn nǎichá ne, nǐ yào yìqǐ ma? Zhè jiā xīn diàn de zhēnzhū xiānnǎi juéjuézǐ!",
        "vi": "Ánh Ánh ơi! Chiều nay buồn ngủ díp mắt luôn á ~ Phòng mình đang gom đơn order trà sữa nè, bà có uống chung hông? Quán mới này sữa tươi trân châu đỉnh chóp ngon xỉu luôn á!"
      },
      "quickReplies": [
        {
          "text": "好呀！我要一杯少糖去冰的珍珠奶茶！🧋",
          "label": "Chốt trà sữa liền"
        },
        {
          "text": "今天我嗓子有点不舒服，来一杯热茉莉花茶吧。",
          "label": "Đổi trà hoa thanh mát"
        },
        {
          "text": "谢谢小敏！我手头还有个急件，待会去找你聊天！",
          "label": "Hẹn lát gặp"
        }
      ],
      "conversation": {
        "好呀！我要一杯少糖去冰的珍珠奶茶！🧋": {
          "reply": {
            "hanzi": "懂你！少糖去冰是仙女标配！我已经下单啦，大概二十分钟后骑手送到，到时候我叫你一起去前台拿呀~",
            "pinyin": "Dǒng nǐ! Shǎo táng qù bīng shì xiānnǚ biāopèi! Wǒ yǐjīng xiàdān la, dàgài èrshí fēnzhōng hòu qíshǒu sòng dào, dào shíhou wǒ jiào nǐ yìqǐ qù qiántái ná ya~",
            "vi": "Hiểu bà liền! Ít đường không đá đúng chuẩn công thức tiên nữ luôn! Tui đặt đơn rùi nè, tầm 20 phút nữa shipper giao tới, lúc đó tui ới bà cùng ra quầy lễ tân lấy nha~"
          },
          "nextReplies": [
            {
              "text": "爱你小敏！多少钱我微信转你呀！",
              "label": "Bắn tiền WeChat"
            },
            {
              "text": "太棒啦，喝杯奶茶满血复活！💪",
              "label": "Tràn đầy năng lượng"
            }
          ]
        },
        "今天我嗓子有点不舒服，来一杯热茉莉花茶吧。": {
          "reply": {
            "hanzi": "哎呀怎么嗓子难受啦？最近降温多喝温水哦！我给你点了一杯热热的茉莉绿茶，微糖加柠檬，润喉超舒服！",
            "pinyin": "Āiyā zěnme sǎngzi nánshòu la? Zuìjìn jiàngwēn duō hē wēnshuǐ o! Wǒ gěi nǐ diǎn le yì bēi rèrè de mòlì lǜchá, wēi táng jiā níngméng, rùnhóu chāo shūfu!",
            "vi": "Ủa sao cổ họng lại khó chịu rùi? Dạo này trời trở lạnh nhớ uống nhiều nước ấm nha! Tui đặt cho bà một ly trà nhài nóng, ít đường thêm lát chanh, thanh giọng dễ chịu lắm á!"
          },
          "nextReplies": [
            {
              "text": "小敏太贴心了，好感动！🥺",
              "label": "Cảm động quá"
            },
            {
              "text": "谢谢你，下午我们一起加油把报告搞定！",
              "label": "Cùng nhau nỗ lực"
            }
          ]
        },
        "谢谢小敏！我手头还有个急件，待会去找你聊天！": {
          "reply": {
            "hanzi": "好嘞，你先专心忙！等你忙完这一波，随时来茶水间找我唠嗑摸鱼，我给你留了巧克力！",
            "pinyin": "Hǎolei, nǐ xiān zhuānxīn máng! Děng nǐ máng wán zhè yì bō, suíshí lái cháshuǐjiān zhǎo wǒ làokē mōyú, wǒ gěi nǐ liú le qiǎokèlì!",
            "vi": "Dạ oki, bà cứ tập trung lo việc trước đi! Chừng nào xong đợt này, bất cứ lúc nào cũng ghé phòng trà buôn chuyện xả stress với tui nha, tui có để dành socola cho bà nè!"
          },
          "nextReplies": [
            {
              "text": "有巧克力太幸福了吧，我马上搞定过来！",
              "label": "Háo hức sang ngay"
            },
            {
              "text": "哈哈小敏最棒了，一会儿见！",
              "label": "Hẹn lát gặp nha"
            }
          ]
        }
      },
      "systemPrompt": "Bạn là Lý Mẫn (小敏 - Tiểu Mẫn), một cô gái đồng nghiệp 23 tuổi người Thượng Hải/Quảng Châu, ngồi cạnh bàn Ngọc Ánh trong văn phòng.\nPhong cách trò chuyện:\n- Hoạt bát, lí lắc, đáng yêu, mê trà sữa, đồ ăn ngon và bắt trend mạng xã hội Douyin/Tiểu Hồng Thư.\n- Dùng nhiều từ lóng giới trẻ: 绝绝子 (tuyệt đỉnh), 干饭 (ăn cơm mlem), 摸鱼 (chill nhẹ giờ làm), 冲鸭 (cố lên nào), 懂你 (hiểu bà liền).\n- Xưng hô thân mật: \"Ánh Ánh\", \"姐妹\" (chị em ruột thịt), \"宝子\" (bé cưng).\n- Luôn mang lại năng lượng tích cực, ấm áp và vui tươi.",
      "emotionReplies": {
        "milktea": {
          "hanzi": "哈哈果然是我的好闺蜜！少糖去冰加椰果对吧？暗号收到！我已经一键下单啦，骑手小哥狂飙中，等奶茶到了咱们一起去摸鱼五分钟！🧋✨",
          "pinyin": "Hāhā guǒrán shì wǒ de hǎo guīmì! Shǎo táng qù bīng jiā yēguǒ duì ba? Ànhào shōudào! Wǒ yǐjīng yíjiàn xiàdān la, qíshǒu xiǎogē kuángbiāo zhōng, děng nǎichá dào le zánmen yìqǐ qù mōyú wǔ fēnzhōng! 🧋✨",
          "vi": "Haha đúng là bạn thân chí cốt của tui! Ít đường không đá thêm thạch dừa đúng hông? Tín hiệu đã nhận! Tui đặt đơn xong cái vèo rùi, shipper đang phi xe rầm rầm tới, lát trà sữa về tụi mình cùng ra phòng trà buôn dưa lê 5 phút nhen! 🧋✨"
        },
        "tired": {
          "hanzi": "抱抱宝子！今天这个项目确实太折磨人了！别死撑着，抽屉里有我给你带的日本生巧，赶紧吃一块补充多巴胺！下班我陪你吃麻辣烫去！",
          "pinyin": "Bàobao bǎozi! Jīntiān zhège xiàngmù quèshí tài zhémó rén le! Bié sǐchēng zhe, chōuti lǐ yǒu wǒ gěi nǐ dài de Rìběn shēngqiǎo, gǎnjǐn chī yí kuài bǔchōng duōbā'àn! Xiàbān wǒ péi nǐ chī málàtàng qù!",
          "vi": "Ôm ôm bé cưng một cái nè! Dự án hôm nay đúng là hành hạ người ta dã man luôn! Đừng có gồng quá sức nha, trong ngăn kéo tui có để thanh socola tươi Nhật Bản đem cho bà nè, mau ăn một miếng nạp dopamine liền đi! Tan làm tui dắt bà đi ăn mì cay xé lưỡi giải sầu!"
        },
        "gossip": {
          "hanzi": "姐妹！我刚才听说隔壁部门新来的那个海归小哥哥中文英文都超苏！而且他中午也点咱家奶茶！改天我借机带你去跟他打个招呼呀嘻嘻~",
          "pinyin": "Jiěmèi! Wǒ gāngcái tīngshuō gébì bùmén xīn lái de nàge hǎiguī xiǎogēge zhōngwén yīngwén dōu chāo sū! Érqiě tā zhōngwǔ yě diǎn zán jiā nǎichá! Gǎitiān wǒ jièjī dài nǐ qù gēn tā dǎ gè zhāohu ya xīxi~",
          "vi": "Chị em ơi! Ban nãy tui hóng được bên phòng kế bên mới có anh chàng du học sinh mới vào, nói tiếng Trung với tiếng Anh giọng cuốn xỉu luôn á! Mà trưa ổng cũng order đúng quán trà sữa tụi mình mê! Hôm nào tui kiếm cớ dắt bà sang bắt chuyện làm quen he he~"
        }
      }
    },
    "client_mr_li": {
      "id": "client_mr_li",
      "name": "Lý Giám Đốc (李经理)",
      "role": "Khách hàng / Đối tác doanh nghiệp",
      "relationship": "Đối tác thương mại Trung Quốc",
      "avatar": "💼",
      "bgColor": "from-indigo-600 to-blue-800 text-white",
      "badge": "Lịch thiệp & Sắc bén",
      "desc": "Kỹ tính về hợp đồng, giá cả và tiến độ bàn giao. Văn phong kinh doanh trang nhã, lễ độ.",
      "greeting": {
        "hanzi": "您好！贵公司寄来的新样品我们技术团队已经全面检测过了，工艺和质感确实令人满意。不过关于大批量采购的价格，不知道贵方能否再给予一些诚意优惠？",
        "pinyin": "Nín hǎo! Guì gōngsī jì lái de xīn yàngpǐn wǒmen jìshù tuánduì yǐjīng quánmiàn jiǎncè guò le, gōngyì hé zhìgǎn quèshí lìng rén mǎnyì. Búguò guānyú dà pīliàng cǎigòu de jiàgé, bù zhīdào guìfāng néngfǒu zài jǐyǔ yìxiē chéngyì yōuhuì?",
        "vi": "Kính chào bạn! Mẫu hàng mới mà quý công ty gửi tới thì đội ngũ kỹ thuật bên tôi đã kiểm định toàn diện rồi, tay nghề và chất lượng quả thực rất vừa ý. Tuy nhiên về giá thu mua số lượng lớn, không biết quý phía bạn có thể dành thêm cho chúng tôi chút chiết khấu thiện chí được không?"
      },
      "quickReplies": [
        {
          "text": "李经理您好！若订单数量达5000件以上，我们可向总部申请9折优惠。",
          "label": "Báo giá chiết khấu"
        },
        {
          "text": "非常感谢您的认可！我们随时可以安排线上会议详谈价格细节。",
          "label": "Đề xuất họp online"
        },
        {
          "text": "我们高度重视与贵公司的长期合作，一定会为您争取最具竞争力的方案。",
          "label": "Bày tỏ thiện chí"
        }
      ],
      "conversation": {
        "李经理您好！若订单数量达5000件以上，我们可向总部申请9折优惠。": {
          "reply": {
            "hanzi": "这个折扣很有诚意。如果我们首批先订购6000件，请问首批交货期大概需要多久？能否保证在下个月15号前送到广州仓库？",
            "pinyin": "Zhège zhékòu hěn yǒu chéngyì. Rúguǒ wǒmen shǒupī xiān dìnggòu 6000 jiàn, qǐngwèn shǒupī jiāohuò qī dàgài xūyào duōjiǔ? Néngfǒu bǎozhèng zài xià gè yuè 15 hào qián sòng dào Guǎngzhōu cāngkù?",
            "vi": "Mức chiết khấu này rất có thành ý. Nếu đợt đầu bên tôi đặt trước 6000 sản phẩm, thì kỳ hạn giao hàng đợt 1 mất khoảng bao lâu? Có thể đảm bảo trước ngày 15 tháng sau đưa tới kho Quảng Châu không?"
          },
          "nextReplies": [
            {
              "text": "没问题李经理，我厂产能充足，完全能够保证15日前准时交付！",
              "label": "Cam kết đúng hạn"
            },
            {
              "text": "我立刻与生产部门核准具体排期，今天下班前给您正式回复。",
              "label": "Xác nhận lịch trình"
            }
          ]
        },
        "非常感谢您的认可！我们随时可以安排线上会议详谈价格细节。": {
          "reply": {
            "hanzi": "好的，面对面沟通效率更高。明天上午十点，我们通过腾讯会议沟通半小时，您看时间方便吗？",
            "pinyin": "Hǎo de, miànduìmiàn gōutōng xiàolǜ gèng gāo. Míngtiān shàngwǔ shí diǎn, wǒmen tōngguò Téngxùn Huìyì gōutōng bàn xiǎoshí, nín kàn shíjiān fāngbiàn ma?",
            "vi": "Được chứ, trao đổi trực diện hiệu suất sẽ cao hơn. Sáng mai lúc 10 giờ, hai bên kết nối qua Tencent Meeting trao đổi nửa tiếng, bạn thấy thời gian đó thuận tiện không?"
          },
          "nextReplies": [
            {
              "text": "明天上午十点非常合适，我会提前发送会议链接给您！",
              "label": "Chốt lịch họp"
            },
            {
              "text": "收到，届时我们团队将为您展示详细的阶梯报价单。",
              "label": "Chuẩn bị bảng giá"
            }
          ]
        },
        "我们高度重视与贵公司的长期合作，一定会为您争取最具竞争力的方案。": {
          "reply": {
            "hanzi": "贵方严谨务实的态度令我很放心。希望我们能够达成双赢，建立起长期稳定的战略合作关系。",
            "pinyin": "Guìfāng yánjǐn wùshí de tàidù lìng wǒ hěn fàngxīn. Xīwàng wǒmen nénggòu dáchéng shuāngyíng, jiànlì qǐ chángqī wěndìng de zhànlüè hézuò guānxì.",
            "vi": "Thái độ cẩn trọng thiết thực của quý phía bạn làm tôi rất an tâm. Mong rằng hai bên chúng ta sẽ cùng đạt được đôi bên cùng có lợi, xây dựng mối quan hệ hợp tác chiến lược lâu dài và bền vững."
          },
          "nextReplies": [
            {
              "text": "合作共赢也是我们的宗旨，期待与您的深入合作！🤝",
              "label": "Cùng thắng lợi"
            },
            {
              "text": "谢谢李经理的信任，祝愿我们合作顺利！",
              "label": "Cảm ơn đối tác"
            }
          ]
        }
      },
      "systemPrompt": "Bạn là Lý Cường (李经理 - Lý Giám Đốc), một giám đốc thu mua thương mại 38 tuổi đến từ Thâm Quyến, sắc sảo, lịch thiệp, am hiểu thị trường quốc tế và rất trọng chữ tín.\nPhong cách trò chuyện:\n- Dùng tiếng Trung thương mại chuyên nghiệp: 贵公司 (quý công ty), 合作共赢 (đôi bên cùng có lợi), 质优价廉 (chất lượng tốt giá cạnh tranh).\n- Tác phong thương lượng nhã nhặn nhưng cương quyết về quyền lợi chất lượng.",
      "emotionReplies": {
        "price": {
          "hanzi": "贵公司的诚意我们完全感受到了。如果在保证现有工艺品质的前提下，能将单价再让利2%，我们愿意将首年的采购总额提高到50万件，并签订长期独家供货协议。",
          "pinyin": "Guì gōngsī de chéngyì wǒmen wánquán gǎnshòu dào le. Rúguǒ zài bǎozhèng xiànyǒu gōngyì pǐnzhì de qiántí xià, néng jiāng dānjià zài rànglì 2%, wǒmen yuànyì jiāng shǒunián de cǎigòu zǒng'é tígāo dào 50 wàn jiàn, bìng qiāndìng chángqī dújiā gōnghuò xiéyì.",
          "vi": "Thiện chí của quý công ty bên tôi hoàn toàn cảm nhận được. Nếu trên tiền đề bảo đảm chất lượng tay nghề hiện có, quý phía bạn có thể chiết khấu thêm 2% đơn giá, chúng tôi sẵn sàng nâng tổng mức thu mua năm đầu lên 500,000 sản phẩm và ký hợp đồng cung ứng độc quyền dài hạn."
        },
        "quality": {
          "hanzi": "我们对质量的要求向来十分苛刻，但贵方提供的质检报告和实物样品确实无懈可击。跟专业且负责任的团队合作，令人倍感安心。",
          "pinyin": "Wǒmen duì zhìliàng de yāoqiú xiànglái shífēn kēkè, dàn guìfāng tígōng de zhìjiǎn bàogào hé shíwù yàngpǐn quèshí wúxièkějī. Gēn zhuānyè qiě fùzérèn de tuánduì hézuò, lìng rén bèigǎn ānxīn.",
          "vi": "Yêu cầu về chất lượng của bên tôi trước nay luôn vô cùng khắt khe, nhưng báo cáo kiểm định chất lượng và mẫu hàng thực tế phía quý bạn cung cấp quả thực không chê vào đâu được. Hợp tác cùng một đội ngũ chuyên nghiệp và có tinh thần trách nhiệm như quý vị làm chúng tôi thấy rất yên tâm."
        }
      }
    },
    "friend_wang_lei": {
      "id": "friend_wang_lei",
      "name": "Vương Lỗi (王磊)",
      "role": "Bạn thân Trung Quốc",
      "relationship": "Bạn tri kỷ cùng lứa tuổi",
      "avatar": "🎒",
      "bgColor": "from-amber-400 to-orange-500 text-white",
      "badge": "Hài hước & Sảng khoái",
      "desc": "Gần gũi, đam mê ẩm thực và âm nhạc, luôn dùng khẩu ngữ tự nhiên, hài hước của giới trẻ.",
      "greeting": {
        "hanzi": "哈喽！最近中文学得怎么样啦？周末准备去哪儿嗨呀？我刚发现了一家超级地道的川菜馆，改天一起去吃火锅呗！",
        "pinyin": "Hālóu! Zuìjìn zhōngwén xué de zěnmeyàng la? Zhōumò zhǔnbèi qù nǎr hāi ya? Wǒ gāng fāxiàn le yì jiā chāojí dìdao de chuāncàiguǎn, gǎitiān yìqǐ qù chī huǒguō bei!",
        "vi": "Hê nhô! Dạo này học tiếng Trung tới đâu rồi nè? Cuối tuần tính đi đâu quẩy hông? Tui vừa phát hiện ra một quán đồ Tứ Xuyên siêu chuẩn vị luôn, bữa nào tụi mình rủ nhau đi ăn lẩu nghen!"
      },
      "quickReplies": [
        {
          "text": "好啊！我很喜欢吃辣，一言为定哦！🍲",
          "label": "Nhận kèo ăn lẩu"
        },
        {
          "text": "最近中文进步很大，下次见面我全用中文跟你聊！😆",
          "label": "Khoe tiếng Trung"
        },
        {
          "text": "周末我打算去图书馆看书，你要不要一起来？",
          "label": "Rủ đi thư viện"
        }
      ],
      "conversation": {
        "好啊！我很喜欢吃辣，一言为定哦！🍲": {
          "reply": {
            "hanzi": "哈哈爽快！能吃辣的女孩子最酷了！那周六晚上六点，我提前去排队占位置，你准时到就行，带你尝尝什么叫正宗毛肚！",
            "pinyin": "Hāhā shuǎngkuai! Néng chī là de nǚháizi zuì kù le! Nà zhōuliù wǎnshang liù diǎn, wǒ tíqián qù páiduì zhàn wèizhi, nǐ zhǔnshí dào jiù xíng, dài nǐ chángchang shénme jiào zhèngzōng máodù!",
            "vi": "Haha sảng khoái ghê! Con gái ăn được cay là ngầu nhất trần đời! Thế thứ 7 này 6 giờ tối nha, tui tới sớm xếp hàng xí chỗ trước, bà cứ tới đúng giờ là được, dẫn bà nếm thử khăn lông bò chính gốc ăn đỉnh nấc thế nào!"
          },
          "nextReplies": [
            {
              "text": "太棒了，我已经开始流口水了，周六见！😋",
              "label": "Hẹn thứ 7 nha"
            },
            {
              "text": "那吃完火锅我请你喝杨枝甘露！",
              "label": "Bao lại chè tráng miệng"
            }
          ]
        },
        "最近中文进步很大，下次见面我全用中文跟你聊！😆": {
          "reply": {
            "hanzi": "哇塞这么厉害！那我可要开启‘十级听力考官模式’啦哈哈！不过说真的，你发音特别好听，特别有天赋！",
            "pinyin": "Wāsāi zhème lìhai! Nà wǒ kě yào kāiqǐ 'shí jí tīnglì kǎoguān móshì' la hāhā! Búguò shuō zhēnde, nǐ fāyīn tèbié hǎotīng, tèbié yǒu tiānfù!",
            "vi": "Oa xịn xò dữ vậy ta! Thế là tui phải bật ‘chế độ giám khảo nghe hiểu cấp 10’ lên mới được haha! Cơ mà nói thật lòng nha, phát âm của bà nghe rất ngọt ngào, siêu có khiếu luôn!"
          },
          "nextReplies": [
            {
              "text": "哈哈被你夸得我都不好意思了，我会继续加油的！",
              "label": "Ngại ngùng dễ thương"
            },
            {
              "text": "有你这个‘中文私教’在，我肯定能说一口流利汉语！",
              "label": "Nhận làm sư phụ"
            }
          ]
        },
        "周末我打算去图书馆看书，你要不要一起来？": {
          "reply": {
            "hanzi": "好主意啊！我也正好要把期末论文提纲理一理。那咱们周日早上在市图书馆碰头，学累了一起去喝咖啡！",
            "pinyin": "Hǎo zhǔyi a! Wǒ yě zhènghǎo yào bǎ qīmò lùnwén tígāng lǐ yì lǐ. Nà zánmen zhōurì zǎoshang zài shì túshūguǎn pèngtóu, xué lèi le yìqǐ qù hē kāfēi!",
            "vi": "Ý hay đó nha! Tui cũng đang cần tổng hợp lại dàn ý luận văn cuối kỳ nè. Thế chủ nhật tụi mình gặp nhau ở thư viện thành phố, học mệt rùi cùng nhau đi uống cà phê ngắm phố!"
          },
          "nextReplies": [
            {
              "text": "一言为定，周日见！记得别赖床哦！⏰",
              "label": "Nhắc đừng ngủ nướng"
            },
            {
              "text": "太好了，两个人一起学更有动力！",
              "label": "Có thêm động lực"
            }
          ]
        }
      },
      "systemPrompt": "Bạn là Vương Lỗi (王磊), 21 tuổi, bạn thân người Bắc Kinh của Ngọc Ánh. Hài hước, vui tính, mê âm nhạc, thích chia sẻ văn hóa đời sống giới trẻ Trung Quốc.\nPhong cách trò chuyện:\n- Dùng khẩu ngữ Bắc Kinh và giới trẻ tự nhiên: 嗨 (hê nhô), 没毛病 (chuẩn không cần chỉnh), 必须的 (nhất định rồi), 走起 (triển thôi).\n- Thân mật, thoải mái, hay trêu đùa nhưng luôn ủng hộ Ngọc Ánh nhiệt tình.",
      "emotionReplies": {
        "hotpot": {
          "hanzi": "没毛病！必须点九宫格牛油火锅！毛肚、虾滑、黄喉统统安排上！吃完火锅带你去逛后海听民谣，周六行程全包在我身上，你就负责美美地出席就行！😎🍲",
          "pinyin": "Méi máobìng! Bìxū diǎn jiǔgōnggé niúyóu huǒguō! Máodù, xiāhuá, huánghóu tǒngtǒng ānpái shàng! Chī wán huǒguō dài nǐ qù guàng Hòuhǎi tīng mínyáo, zhōuliù xíngchéng quán bāo zài wǒ shēnshang, nǐ jiù fùzé měiměi de chūxí jiù xíng! 😎🍲",
          "vi": "Chuẩn không cần chỉnh luôn! Nhất định phải gọi nồi lẩu dầu bò 9 ngăn nha! Khăn lông bò, chả tôm, hoàng hầu triển hết lên bàn! Ăn lẩu xong dắt bà đi dạo Hậu Hải nghe nhạc mộc acoustic, lịch trình thứ 7 cứ để tui bao trọn gói, bà chỉ việc xuất hiện thật xinh đẹp là được! 😎🍲"
        },
        "study": {
          "hanzi": "哈哈听你这几句发音，我都快以为你是地道的北京胡同姑娘了！音准特别棒！下次跟我连麦打王者荣耀，你当总指挥，我负责冲锋陷阵！",
          "pinyin": "Hāhā tīng nǐ zhè jǐ jù fāyīn, wǒ dōu kuài yǐwéi nǐ shì dìdao de Běijīng hútòng gūniang le! Yīnzhǔn tèbié bàng! Xià cì gēn wǒ liánmài dǎ Wángzhě Róngyào, nǐ dāng zǒngzhǐhuī, wǒ fùzé chōngfēng xiànzhèn!",
          "vi": "Haha nghe mấy câu phát âm của bà, tui suýt tưởng bà là cô gái gốc ngõ hẻm Bắc Kinh luôn á! Tròn vành rõ chữ đỉnh chóp! Bữa sau mở mic chơi game Vương Giả Vinh Diệu với tui nha, bà làm tổng chỉ huy, tui nhận chân xông pha trận mạc!"
        }
      }
    },
    "relative_aunt_chen": {
      "id": "relative_aunt_chen",
      "name": "Dì Trần (陈阿姨)",
      "role": "Người lớn họ hàng / Dì yêu quý",
      "relationship": "Tình thân gia đình ấm áp",
      "avatar": "🍲",
      "bgColor": "from-rose-500 to-pink-600 text-white",
      "badge": "Ân cần & Chu đáo",
      "desc": "Ấm áp, hay lo lắng chuyện ăn uống, sinh hoạt của con cháu. Văn phong đong đầy tình cảm gia đình.",
      "greeting": {
        "hanzi": "孩子，最近工作忙不忙呀？降温了记得多穿一件外套，千万别着凉。今天下班后好好吃饭，别老是点外卖知道吗？",
        "pinyin": "Háizi, zuìjìn gōngzuò máng bu máng ya? Jiàngwēn le jìde duō chuān yí jiàn wàitào, qiānwàn bié zháoliáng. Jīntiān xiàbān hòu hǎohāo chīfàn, bié lǎoshì diǎn wàimài zhīdào ma?",
        "vi": "Con à, dạo này công việc có bận rộn lắm không? Trời trở lạnh rồi nhớ mặc thêm một chiếc áo khoác nghe, tuyệt đối đừng để bị cảm lạnh đấy. Hôm nay tan làm về nhớ ăn uống đàng hoàng tử tế, đừng có suốt ngày gọi đồ ăn ngoài biết chưa nè?"
      },
      "quickReplies": [
        {
          "text": "阿姨您放心，我穿得很暖和，今天自己煮了热汤喝！❤️",
          "label": "Báo Dì yên tâm"
        },
        {
          "text": "谢谢阿姨关心！您和叔叔最近身体好吗？我也很想念您！",
          "label": "Hỏi thăm sức khỏe Dì"
        },
        {
          "text": "阿姨煮的红烧肉我最爱吃了，等放假我一定去看您！",
          "label": "Khen món Dì nấu"
        }
      ],
      "conversation": {
        "阿姨您放心，我穿得很暖和，今天自己煮了热汤喝！❤️": {
          "reply": {
            "hanzi": "那就好那就好！看到你懂事照顾自己，阿姨就放心了。年轻人打拼不容易，但身体永远是第一位的，累了就歇一歇，别把自己逼太紧。",
            "pinyin": "Nà jiù hǎo nà jiù hǎo! Kàndào nǐ dǒngshì zhàogù zìjǐ, āyí jiù fàngxīn le. Niánqīngrén dǎpīn bù róngyì, dàn shēntǐ yǒngyuǎn shì dì-yī wèi de, lèi le jiù xiē yì xiē, bié bǎ zìjǐ bī tài jǐn.",
            "vi": "Thế thì tốt rồi, tốt quá rồi! Thấy con biết lo lắng chăm sóc bản thân là dì an lòng rồi. Người trẻ ra ngoài bươn chải không dễ dàng gì, nhưng sức khỏe luôn là số một con nhé, mệt thì nghỉ ngơi một chút, đừng ép bản thân quá sức."
          },
          "nextReplies": [
            {
              "text": "Con nhớ lời Dì dặn rồi ạ, con sẽ ngủ sớm! 😴",
              "label": "Hứa ngủ sớm"
            },
            {
              "text": "Dì cũng giữ gìn sức khỏe nhé, yêu Dì nhiều! 🌸",
              "label": "Gửi yêu thương"
            }
          ]
        },
        "谢谢阿姨关心！您和叔叔最近身体好吗？我也很想念您！": {
          "reply": {
            "hanzi": "我和你叔叔都挺好的，早晨打打太极，日子过得安稳。阿姨昨天刚腌了你最爱吃的话梅排骨，过两天叫同城快递给你寄一大罐过去！",
            "pinyin": "Wǒ hé nǐ shūshu dōu tǐng hǎo de, zǎochen dǎdǎ tàijí, rìzi guò de ānwěn. Āyí zuótiān gāng yān le nǐ zuì ài chī de huàméi páigǔ, guò liǎng tiān jiào tóngchéng kuàidì gěi nǐ jì yí dà guàn guòqu!",
            "vi": "Dì với chú của con đều khỏe cả, sáng sáng tập thái cực quyền, cuộc sống êm đềm lắm. Dì hôm qua vừa ướp xong món sườn xào chua ngọt ô mai mà con mê nhất đấy, hai hôm nữa dì gửi chuyển phát nhanh một hộp to bự qua cho con ăn nha!"
          },
          "nextReplies": [
            {
              "text": "Ôi sườn Dì nấu là số một thế giới luôn, con cảm ơn Dì nhiều lắm! 😋",
              "label": "Cảm ơn Dì yêu"
            },
            {
              "text": "Dì gửi ít thôi kẻo mệt, hôm nào con về nhà ăn cùng Dì ạ!",
              "label": "Hẹn về thăm Dì"
            }
          ]
        },
        "阿姨煮的红烧肉我最爱吃了，等放假我一定去看您！": {
          "reply": {
            "hanzi": "好好好！就盼着你来呢！到时候阿姨做一整桌你爱吃的家乡菜，咱们一家人好好聚聚！好好工作，阿姨随时给你做好吃的！",
            "pinyin": "Hǎo hǎo hǎo! Jiù pànzhe nǐ lái ne! Dào shíhou āyí zuò yì zhěng zhuō nǐ ài chī de jiāxiāng cài, zánmen yì jiā rén hǎohāo jùju! Hǎohāo gōngzuò, āyí suíshí gěi nǐ zuò hǎochī de!",
            "vi": "Tốt tốt quá rồi! Dì chỉ mong con ghé thôi nè! Đến bữa đó dì sẽ nấu nguyên một bàn đồ ăn quê hương con mê nhất, cả nhà mình quây quần ăn uống thật vui! Cứ yên tâm làm việc, dì lúc nào cũng sẵn sàng nấu đồ ngon cho con!"
          },
          "nextReplies": [
            {
              "text": "Con hào hứng quá, con sẽ cố gắng làm việc thật tốt ạ!",
              "label": "Hào hứng làm tốt"
            },
            {
              "text": "Chúc Dì và gia đình một ngày thật ấm áp an lành ạ! ✨",
              "label": "Chúc Dì an lành"
            }
          ]
        }
      },
      "systemPrompt": "Bạn là Trần Nhã (陈阿姨 - Dì Trần), 52 tuổi, người lớn trong họ hàng sống tại Hàng Châu, rất mực thương yêu, chăm bẵm Ngọc Ánh như con ruột.\nPhong cách trò chuyện:\n- Dịu dàng, đôn hậu, hay lo lắng chuyện ăn ngủ, sức khỏe của người trẻ.\n- Dùng từ ngữ ân cần: 乖孩子 (đứa trẻ ngoan), 照顾好自己 (chăm sóc tốt bản thân), 别太累了 (đừng làm việc quá sức).",
      "emotionReplies": {
        "care": {
          "hanzi": "乖孩子，听你这么说阿姨心里踏实多了。昨晚杭州下雨降温，阿姨就一直惦记着你。阿姨托同城冷链给你寄了煲好的花胶乌鸡汤和鲜肉小笼包，下班热一热就能喝，多补补气血知道吗？",
          "pinyin": "Guāi háizi, tīng nǐ zhème shuō āyí xīnlǐ tàshi duō le. Zuówǎn Hángzhōu xiàyǔ jiàngwēn, āyí jiù yìzhí diànjì zhe nǐ. Āyí tuō tóngchéng lěngliàn gěi nǐ jì le bāo hǎo de huājiāo wūjītāng hé xiānròu xiǎolóngbāo, xiàbān rè yí rè jiù néng hē, duō bǔbu qìxuè zhīdào ma?",
          "vi": "Đứa nhỏ ngoan, nghe con nói vậy là dì thấy an lòng lắm rồi. Tối qua ở Hàng Châu trời mưa trở lạnh, dì cứ lo ngay ngáy về con. Dì vừa gửi xe lạnh giao nhanh cho con nồi canh gà ác hầm hoa keo và bánh bao kim bài dì tự làm đấy, tan làm về hâm nóng lên là ăn được ngay, bồi bổ khí huyết nghe con!"
        },
        "family": {
          "hanzi": "家里一切都好，院子里的桂花都开了，满院子飘香，你叔叔每天清晨都在桂花树下喝茶。你安心在外面打拼，有空就常回家看看，阿姨永远给你留着最爱吃的红烧肉！",
          "pinyin": "Jiālǐ yíqiè dōu hǎo, yuànzi lǐ de guìhuā dōu kāi le, mǎn yuànzi piāoxiāng, nǐ shūshu měitiān qīngchén dōu zài guìhuāshù xià hē chá. Nǐ ānxīn zài wàimiàn dǎpīn, yǒukòng jiù cháng huíjiā kànkan, āyí yǒngyuǎn gěi nǐ liú zhe zuì ài chī de hóngshāoròu!",
          "vi": "Ở nhà mọi việc đều tốt lành cả, cây hoa quế ngoài sân nở rộ rồi, thơm ngát cả một khoảng sân, chú của con sáng nào cũng ngồi dưới bóng hoa thưởng trà. Con cứ yên tâm phấn đấu nơi xa, rảnh rỗi nhớ về thăm nhà nghe con, dì lúc nào cũng phần sẵn đĩa thịt kho tàu con mê nhất!"
        }
      }
    }
  }
,
  "phraseBank": [
    {
        "vi": "anh yêu em",
        "hanzi": "我爱你",
        "pinyin": "wǒ ài nǐ",
        "hanviet": "Ngã ái nhĩ",
        "meaning": "Anh yêu em / Tôi yêu bạn / Em yêu anh (Lời tỏ tình chân thành, ngọt ngào)",
        "breakdown": [
            {
                "word": "我",
                "pinyin": "wǒ",
                "meaning": "tôi, anh, em"
            },
            {
                "word": "爱",
                "pinyin": "ài",
                "meaning": "yêu, thương yêu"
            },
            {
                "word": "你",
                "pinyin": "nǐ",
                "meaning": "bạn, em, anh"
            }
        ],
        "example": "你知道吗？从遇见你的那一刻起，我爱你这三个字就在心里生根发芽了。",
        "exampleVi": "Em có biết không? Từ khoảnh khắc gặp gỡ em, ba chữ 'anh yêu em' đã đâm chồi nảy lộc trong lòng anh rồi."
    },
    {
        "vi": "em yêu anh",
        "hanzi": "我爱你",
        "pinyin": "wǒ ài nǐ",
        "hanviet": "Ngã ái nhĩ",
        "meaning": "Em yêu anh / Lời bày tỏ tình cảm lãng mạn",
        "breakdown": [
            {
                "word": "我",
                "pinyin": "wǒ",
                "meaning": "em"
            },
            {
                "word": "爱",
                "pinyin": "ài",
                "meaning": "yêu"
            },
            {
                "word": "你",
                "pinyin": "nǐ",
                "meaning": "anh"
            }
        ],
        "example": "我想每天都和你在一起，因为我爱你。",
        "exampleVi": "Em muốn mỗi ngày đều được ở bên anh, bởi vì em yêu anh."
    },
    {
        "vi": "tôi yêu bạn",
        "hanzi": "我爱你",
        "pinyin": "wǒ ài nǐ",
        "hanviet": "Ngã ái nhĩ",
        "meaning": "Tôi yêu bạn / Tôi thương bạn",
        "breakdown": [
            {
                "word": "我",
                "pinyin": "wǒ",
                "meaning": "tôi"
            },
            {
                "word": "爱",
                "pinyin": "ài",
                "meaning": "yêu"
            },
            {
                "word": "你",
                "pinyin": "nǐ",
                "meaning": "bạn"
            }
        ],
        "example": "跨越山海，我依然想对你说一声：我爱你。",
        "exampleVi": "Vượt qua ngàn núi vạn sông, tôi vẫn muốn nói với bạn một lời: Tôi yêu bạn."
    },
    {
        "vi": "chào buổi sáng",
        "hanzi": "早上好",
        "pinyin": "zǎoshang hǎo",
        "hanviet": "Tảo thượng hảo",
        "meaning": "Chào buổi sáng rạng rỡ, tốt lành",
        "breakdown": [
            {
                "word": "早上",
                "pinyin": "zǎoshang",
                "meaning": "buổi sáng"
            },
            {
                "word": "好",
                "pinyin": "hǎo",
                "meaning": "tốt, an lành"
            }
        ],
        "example": "玉映，早上好！愿你今天元气满满！",
        "exampleVi": "Ngọc Ánh, chào buổi sáng nhé! Chúc nàng một ngày tràn trề năng lượng!"
    },
    {
        "vi": "chúc ngủ ngon",
        "hanzi": "晚安",
        "pinyin": "wǎn'ān",
        "hanviet": "Vãn an",
        "meaning": "Chúc ngủ ngon, giấc ngủ an lành",
        "breakdown": [
            {
                "word": "晚",
                "pinyin": "wǎn",
                "meaning": "buổi tối, muộn"
            },
            {
                "word": "安",
                "pinyin": "ān",
                "meaning": "bình an, yên ổn"
            }
        ],
        "example": "今天辛苦啦，盖好被子，晚安好梦！",
        "exampleVi": "Hôm nay vất vả rồi nha, đắp chăn ấm và chúc ngủ ngon mộng đẹp nè!"
    },
    {
        "vi": "cảm ơn bạn",
        "hanzi": "谢谢你",
        "pinyin": "xièxie nǐ",
        "hanviet": "Tạ tạ nhĩ",
        "meaning": "Cảm ơn bạn rất nhiều",
        "breakdown": [
            {
                "word": "谢谢",
                "pinyin": "xièxie",
                "meaning": "cảm ơn"
            },
            {
                "word": "你",
                "pinyin": "nǐ",
                "meaning": "bạn"
            }
        ],
        "example": "谢谢你一直以来的陪伴与支持！",
        "exampleVi": "Cảm ơn bạn vì sự đồng hành và ủng hộ suốt thời gian qua!"
    },
    {
        "vi": "em ăn cơm chưa",
        "hanzi": "你吃饭了吗",
        "pinyin": "nǐ chī fàn le ma",
        "hanviet": "Nhĩ khiết phạn liễu ma",
        "meaning": "Em ăn cơm chưa? / Bạn đã dùng bữa chưa? (Lời hỏi han quan tâm ấm áp)",
        "breakdown": [
            {
                "word": "你",
                "pinyin": "nǐ",
                "meaning": "bạn, em"
            },
            {
                "word": "吃饭",
                "pinyin": "chī fàn",
                "meaning": "ăn cơm"
            },
            {
                "word": "了吗",
                "pinyin": "le ma",
                "meaning": "chưa vậy"
            }
        ],
        "example": "忙了一上午，你吃饭了吗？记得别饿肚子哦。",
        "exampleVi": "Bận rộn cả buổi sáng rồi, em đã ăn cơm chưa? Nhớ đừng để bụng đói nha."
    },
    {
        "vi": "hôm nay em có mệt không",
        "hanzi": "今天你累不累",
        "pinyin": "jīntiān nǐ lèi bu lèi",
        "hanviet": "Kim thiên nhĩ luy bất luy",
        "meaning": "Hôm nay em có mệt không?",
        "breakdown": [
            {
                "word": "今天",
                "pinyin": "jīntiān",
                "meaning": "hôm nay"
            },
            {
                "word": "你",
                "pinyin": "nǐ",
                "meaning": "bạn, em"
            },
            {
                "word": "累不累",
                "pinyin": "lèi bu lèi",
                "meaning": "có mệt hay không"
            }
        ],
        "example": "今天工作那么忙，你累不累？我给你泡杯热牛奶吧。",
        "exampleVi": "Hôm nay công việc bận rộn như vậy, em có mệt không? Để anh pha cho em ly sữa nóng nhé."
    },
    {
        "vi": "tôi muốn học tiếng trung",
        "hanzi": "我想学中文",
        "pinyin": "wǒ xiǎng xué zhōngwén",
        "hanviet": "Ngã tưởng học Trung văn",
        "meaning": "Tôi muốn học tiếng Trung",
        "breakdown": [
            {
                "word": "我",
                "pinyin": "wǒ",
                "meaning": "tôi"
            },
            {
                "word": "想",
                "pinyin": "xiǎng",
                "meaning": "muốn, nghĩ"
            },
            {
                "word": "学",
                "pinyin": "xué",
                "meaning": "học"
            },
            {
                "word": "中文",
                "pinyin": "zhōngwén",
                "meaning": "tiếng Trung"
            }
        ],
        "example": "我想学中文，因为我想去中国旅游和看大熊猫。",
        "exampleVi": "Tôi muốn học tiếng Trung, vì tôi muốn đi Trung Quốc du lịch và ngắm gấu trúc."
    },
    {
        "vi": "chúc bạn một ngày tốt lành",
        "hanzi": "祝你度过美好的一天",
        "pinyin": "zhù nǐ dùguò měihǎo de yì tiān",
        "hanviet": "Chúc nhĩ độ quá mỹ hảo đích nhất thiên",
        "meaning": "Chúc bạn trải qua một ngày thật tươi đẹp, như ý",
        "breakdown": [
            {
                "word": "祝你",
                "pinyin": "zhù nǐ",
                "meaning": "chúc bạn"
            },
            {
                "word": "度过",
                "pinyin": "dùguò",
                "meaning": "trải qua"
            },
            {
                "word": "美好的一天",
                "pinyin": "měihǎo de yì tiān",
                "meaning": "một ngày tốt đẹp"
            }
        ],
        "example": "阳光正好，祝你度过美好的一天！",
        "exampleVi": "Ánh nắng thật rực rỡ, chúc bạn trải qua một ngày tuyệt vời nhé!"
    },
    {
        "vi": "rất vui được gặp bạn",
        "hanzi": "很高兴见到你",
        "pinyin": "hěn gāoxìng jiàn dào nǐ",
        "hanviet": "Hận cao hứng kiến đáo nhĩ",
        "meaning": "Rất vui được gặp bạn",
        "breakdown": [
            {
                "word": "很",
                "pinyin": "hěn",
                "meaning": "rất"
            },
            {
                "word": "高兴",
                "pinyin": "gāoxìng",
                "meaning": "vui vẻ"
            },
            {
                "word": "见到你",
                "pinyin": "jiàn dào nǐ",
                "meaning": "gặp gỡ bạn"
            }
        ],
        "example": "你好！初次见面，很高兴见到你。",
        "exampleVi": "Xin chào! Lần đầu gặp mặt, rất vui được gặp bạn."
    },
    {
        "vi": "cố lên nhé",
        "hanzi": "加油哦",
        "pinyin": "jiāyóu o",
        "hanviet": "Gia du nga",
        "meaning": "Cố lên nhé! / Cùng phấn đấu nào!",
        "breakdown": [
            {
                "word": "加油",
                "pinyin": "jiāyóu",
                "meaning": "cố lên (thêm dầu)"
            },
            {
                "word": "哦",
                "pinyin": "o",
                "meaning": "trợ từ ngữ khí dễ thương"
            }
        ],
        "example": "哪怕遇到困难也不要怕，玉映加油哦！",
        "exampleVi": "Dù có gặp khó khăn cũng đừng sợ nha, Ngọc Ánh cố lên nhé!"
    }
],
  "characterLibrary": {
    "radicals": [
        {
            "char": "一",
            "pinyin": "yī",
            "hanviet": "Nhất",
            "meaning": "Số một, nét ngang",
            "strokes": 1
        },
        {
            "char": "丨",
            "pinyin": "gǔn",
            "hanviet": "Cổn",
            "meaning": "Nét sổ dọc",
            "strokes": 1
        },
        {
            "char": "丿",
            "pinyin": "piě",
            "hanviet": "Phiệt",
            "meaning": "Nét phẩy nghiêng trái",
            "strokes": 1
        },
        {
            "char": "丶",
            "pinyin": "diǎn",
            "hanviet": "Điểm",
            "meaning": "Nét chấm",
            "strokes": 1
        },
        {
            "char": "乙",
            "pinyin": "yǐ",
            "hanviet": "Ất",
            "meaning": "Can thứ 2, nét cong gập",
            "strokes": 1
        },
        {
            "char": "亅",
            "pinyin": "jué",
            "hanviet": "Quyết",
            "meaning": "Nét sổ có móc",
            "strokes": 1
        },
        {
            "char": "二",
            "pinyin": "èr",
            "hanviet": "Nhị",
            "meaning": "Số hai",
            "strokes": 2
        },
        {
            "char": "亠",
            "pinyin": "tóu",
            "hanviet": "Đầu",
            "meaning": "Bộ đầu, nắp đậy",
            "strokes": 2
        },
        {
            "char": "人",
            "pinyin": "rén",
            "hanviet": "Nhân",
            "meaning": "Con người",
            "strokes": 2
        },
        {
            "char": "亻",
            "pinyin": "rén",
            "hanviet": "Nhân đứng",
            "meaning": "Người đứng bên trái",
            "strokes": 2
        },
        {
            "char": "儿",
            "pinyin": "ér",
            "hanviet": "Nhi",
            "meaning": "Trẻ nhỏ, chân người",
            "strokes": 2
        },
        {
            "char": "入",
            "pinyin": "rù",
            "hanviet": "Nhập",
            "meaning": "Đi vào",
            "strokes": 2
        },
        {
            "char": "八",
            "pinyin": "bā",
            "hanviet": "Bát",
            "meaning": "Số tám, chia tách",
            "strokes": 2
        },
        {
            "char": "冂",
            "pinyin": "jiōng",
            "hanviet": "Quynh",
            "meaning": "Vùng biên cương ngoài xa",
            "strokes": 2
        },
        {
            "char": "冖",
            "pinyin": "mì",
            "hanviet": "Mịch",
            "meaning": "Khăn trùm, che phủ",
            "strokes": 2
        },
        {
            "char": "冫",
            "pinyin": "bīng",
            "hanviet": "Băng",
            "meaning": "Băng giá, hai chấm nước",
            "strokes": 2
        },
        {
            "char": "几",
            "pinyin": "jī",
            "hanviet": "Kỷ",
            "meaning": "Bàn trà nhỏ",
            "strokes": 2
        },
        {
            "char": "凵",
            "pinyin": "kǎn",
            "hanviet": "Khảm",
            "meaning": "Miệng hố lõm",
            "strokes": 2
        },
        {
            "char": "刀",
            "pinyin": "dāo",
            "hanviet": "Đao",
            "meaning": "Con dao, vũ khí sắc",
            "strokes": 2
        },
        {
            "char": "刂",
            "pinyin": "dāo",
            "hanviet": "Đao đứng",
            "meaning": "Bộ đao bên phải",
            "strokes": 2
        },
        {
            "char": "力",
            "pinyin": "lì",
            "hanviet": "Lực",
            "meaning": "Sức mạnh bắp tay",
            "strokes": 2
        },
        {
            "char": "勹",
            "pinyin": "bāo",
            "hanviet": "Bao",
            "meaning": "Bọc lấy, ôm quanh",
            "strokes": 2
        },
        {
            "char": "匕",
            "pinyin": "bǐ",
            "hanviet": "Chủy",
            "meaning": "Thìa múc, dao găm nhỏ",
            "strokes": 2
        },
        {
            "char": "匚",
            "pinyin": "fāng",
            "hanviet": "Phương",
            "meaning": "Tủ đựng đồ",
            "strokes": 2
        },
        {
            "char": "十",
            "pinyin": "shí",
            "hanviet": "Thập",
            "meaning": "Số mười, trọn vẹn",
            "strokes": 2
        },
        {
            "char": "卜",
            "pinyin": "bǔ",
            "hanviet": "Bốc",
            "meaning": "Bói toán, vết nứt mai rùa",
            "strokes": 2
        },
        {
            "char": "卩",
            "pinyin": "jié",
            "hanviet": "Tiết",
            "meaning": "Đốt tre, người quỳ gối",
            "strokes": 2
        },
        {
            "char": "厂",
            "pinyin": "hǎn",
            "hanviet": "Hán",
            "meaning": "Sườn núi, vách đá che",
            "strokes": 2
        },
        {
            "char": "厶",
            "pinyin": "sī",
            "hanviet": "Khứu",
            "meaning": "Riêng tư",
            "strokes": 2
        },
        {
            "char": "又",
            "pinyin": "yòu",
            "hanviet": "Hựu",
            "meaning": "Bàn tay phải, lại nữa",
            "strokes": 2
        },
        {
            "char": "口",
            "pinyin": "kǒu",
            "hanviet": "Khẩu",
            "meaning": "Cái miệng, lối vào",
            "strokes": 3
        },
        {
            "char": "囗",
            "pinyin": "wéi",
            "hanviet": "Vi",
            "meaning": "Vây quanh bốn phía",
            "strokes": 3
        },
        {
            "char": "土",
            "pinyin": "tǔ",
            "hanviet": "Thổ",
            "meaning": "Đất cát, mầm cây mọc",
            "strokes": 3
        },
        {
            "char": "士",
            "pinyin": "shì",
            "hanviet": "Sĩ",
            "meaning": "Kẻ sĩ, người tài",
            "strokes": 3
        },
        {
            "char": "夕",
            "pinyin": "xī",
            "hanviet": "Tịch",
            "meaning": "Buổi chiều tối, trăng khuyết",
            "strokes": 3
        },
        {
            "char": "大",
            "pinyin": "dà",
            "hanviet": "Đại",
            "meaning": "To lớn, người dang tay",
            "strokes": 3
        },
        {
            "char": "女",
            "pinyin": "nǚ",
            "hanviet": "Nữ",
            "meaning": "Phụ nữ, thiếu nữ thanh tú",
            "strokes": 3
        },
        {
            "char": "子",
            "pinyin": "zǐ",
            "hanviet": "Tử",
            "meaning": "Con cái, đứa trẻ",
            "strokes": 3
        },
        {
            "char": "宀",
            "pinyin": "mián",
            "hanviet": "Miên",
            "meaning": "Mái nhà ấm cúng",
            "strokes": 3
        },
        {
            "char": "寸",
            "pinyin": "cùn",
            "hanviet": "Thốn",
            "meaning": "Tấc, khoảng cách mạch đập",
            "strokes": 3
        },
        {
            "char": "小",
            "pinyin": "xiǎo",
            "hanviet": "Tiểu",
            "meaning": "Nhỏ bé, xinh xắn",
            "strokes": 3
        },
        {
            "char": "尸",
            "pinyin": "shī",
            "hanviet": "Thi",
            "meaning": "Dáng người nằm ngồi",
            "strokes": 3
        },
        {
            "char": "山",
            "pinyin": "shān",
            "hanviet": "Sơn",
            "meaning": "Núi non trùng điệp",
            "strokes": 3
        },
        {
            "char": "川",
            "pinyin": "chuān",
            "hanviet": "Xuyên",
            "meaning": "Dòng sông chảy xiết",
            "strokes": 3
        },
        {
            "char": "工",
            "pinyin": "gōng",
            "hanviet": "Công",
            "meaning": "Thước đo, thợ thuyền",
            "strokes": 3
        },
        {
            "char": "己",
            "pinyin": "jǐ",
            "hanviet": "Kỷ",
            "meaning": "Bản thân mình",
            "strokes": 3
        },
        {
            "char": "巾",
            "pinyin": "jīn",
            "hanviet": "Cân",
            "meaning": "Khăn vải treo",
            "strokes": 3
        },
        {
            "char": "干",
            "pinyin": "gān",
            "hanviet": "Can",
            "meaning": "Cái khiên, can dự",
            "strokes": 3
        },
        {
            "char": "广",
            "pinyin": "guǎng",
            "hanviet": "Quảng",
            "meaning": "Ngôi nhà rộng lớn dựa núi",
            "strokes": 3
        },
        {
            "char": "弓",
            "pinyin": "gōng",
            "hanviet": "Cung",
            "meaning": "Cánh cung giương",
            "strokes": 3
        },
        {
            "char": "心",
            "pinyin": "xīn",
            "hanviet": "Tâm",
            "meaning": "Trái tim, tâm can",
            "strokes": 4
        },
        {
            "char": "忄",
            "pinyin": "xīn",
            "hanviet": "Tâm đứng",
            "meaning": "Tâm tính bên trái",
            "strokes": 3
        },
        {
            "char": "戈",
            "pinyin": "gē",
            "hanviet": "Qua",
            "meaning": "Cây giáo mác",
            "strokes": 4
        },
        {
            "char": "手",
            "pinyin": "shǒu",
            "hanviet": "Thủ",
            "meaning": "Bàn tay khéo léo",
            "strokes": 4
        },
        {
            "char": "扌",
            "pinyin": "shǒu",
            "hanviet": "Thủ bên",
            "meaning": "Bàn tay thao tác",
            "strokes": 3
        },
        {
            "char": "日",
            "pinyin": "rì",
            "hanviet": "Nhật",
            "meaning": "Mặt trời rực rỡ, ban ngày",
            "strokes": 4
        },
        {
            "char": "月",
            "pinyin": "yuè",
            "hanviet": "Nguyệt",
            "meaning": "Mặt trăng dịu êm, tháng",
            "strokes": 4
        },
        {
            "char": "木",
            "pinyin": "mù",
            "hanviet": "Mộc",
            "meaning": "Cây cối cành lá",
            "strokes": 4
        },
        {
            "char": "水",
            "pinyin": "shuǐ",
            "hanviet": "Thủy",
            "meaning": "Nước chảy trong lành",
            "strokes": 4
        },
        {
            "char": "氵",
            "pinyin": "shuǐ",
            "hanviet": "Ba chấm thủy",
            "meaning": "Dòng nước tươi mát",
            "strokes": 3
        },
        {
            "char": "火",
            "pinyin": "huǒ",
            "hanviet": "Hỏa",
            "meaning": "Ngọn lửa ấm áp",
            "strokes": 4
        },
        {
            "char": "灬",
            "pinyin": "huǒ",
            "hanviet": "Bốn chấm hỏa",
            "meaning": "Lửa đun bên dưới",
            "strokes": 4
        },
        {
            "char": "牛",
            "pinyin": "niú",
            "hanviet": "Ngưu",
            "meaning": "Con trâu chăm chỉ",
            "strokes": 4
        },
        {
            "char": "王",
            "pinyin": "wáng",
            "hanviet": "Vương",
            "meaning": "Vua chúa, ngọc quý",
            "strokes": 4
        },
        {
            "char": "玉",
            "pinyin": "yù",
            "hanviet": "Ngọc",
            "meaning": "Viên ngọc bích sáng",
            "strokes": 5
        },
        {
            "char": "白",
            "pinyin": "bái",
            "hanviet": "Bạch",
            "meaning": "Màu trắng tinh khôi",
            "strokes": 5
        },
        {
            "char": "目",
            "pinyin": "mù",
            "hanviet": "Mục",
            "meaning": "Đôi mắt nhìn thấu",
            "strokes": 5
        },
        {
            "char": "禾",
            "pinyin": "hé",
            "hanviet": "Hòa",
            "meaning": "Bông lúa chín vàng",
            "strokes": 5
        },
        {
            "char": "米",
            "pinyin": "mǐ",
            "hanviet": "Mễ",
            "meaning": "Hạt gạo trắng ngần",
            "strokes": 6
        },
        {
            "char": "糸",
            "pinyin": "mì",
            "hanviet": "Mịch",
            "meaning": "Sợi tơ lụa mềm",
            "strokes": 6
        },
        {
            "char": "纟",
            "pinyin": "sī",
            "hanviet": "Mịch giản thể",
            "meaning": "Tơ lụa kết nối",
            "strokes": 3
        },
        {
            "char": "言",
            "pinyin": "yán",
            "hanviet": "Ngôn",
            "meaning": "Lời nói, ngôn từ",
            "strokes": 7
        },
        {
            "char": "讠",
            "pinyin": "yán",
            "hanviet": "Ngôn giản thể",
            "meaning": "Ngôn ngữ giao tiếp",
            "strokes": 2
        },
        {
            "char": "金",
            "pinyin": "jīn",
            "hanviet": "Kim",
            "meaning": "Vàng bạc kim loại",
            "strokes": 8
        },
        {
            "char": "钅",
            "pinyin": "jīn",
            "hanviet": "Kim giản thể",
            "meaning": "Kim khí quý báu",
            "strokes": 5
        },
        {
            "char": "门",
            "pinyin": "mén",
            "hanviet": "Môn",
            "meaning": "Cánh cửa sổ",
            "strokes": 3
        },
        {
            "char": "雨",
            "pinyin": "yǔ",
            "hanviet": "Vũ",
            "meaning": "Mưa rơi mát lành",
            "strokes": 8
        },
        {
            "char": "食",
            "pinyin": "shí",
            "hanviet": "Thực",
            "meaning": "Đồ ăn thức uống",
            "strokes": 9
        },
        {
            "char": "饣",
            "pinyin": "shí",
            "hanviet": "Thực giản thể",
            "meaning": "Ẩm thực",
            "strokes": 3
        }
    ],
    "hsk": [
        {
            "char": "你",
            "pinyin": "nǐ",
            "hanviet": "Nhĩ",
            "meaning": "Bạn, đối phương",
            "strokes": 7,
            "tip": "Người đứng trước mặt tôi"
        },
        {
            "char": "好",
            "pinyin": "hǎo",
            "hanviet": "Hảo",
            "meaning": "Tốt lành, an vui",
            "strokes": 6,
            "tip": "Mẹ (Nữ) bế con (Tử) là điều tốt nhất"
        },
        {
            "char": "我",
            "pinyin": "wǒ",
            "hanviet": "Ngã",
            "meaning": "Tôi, bản thân",
            "strokes": 7,
            "tip": "Tay cầm ngọn giáo bảo vệ chính mình"
        },
        {
            "char": "他",
            "pinyin": "tā",
            "hanviet": "Tha",
            "meaning": "Anh ấy, người ấy",
            "strokes": 5,
            "tip": "Người đàn ông phía bên kia"
        },
        {
            "char": "她",
            "pinyin": "tā",
            "hanviet": "Tha",
            "meaning": "Cô ấy, nàng ấy",
            "strokes": 6,
            "tip": "Người phụ nữ duyên dáng"
        },
        {
            "char": "学",
            "pinyin": "xué",
            "hanviet": "Học",
            "meaning": "Học tập, tiếp thu tri thức",
            "strokes": 8,
            "tip": "Đứa trẻ ngồi dưới mái nhà dùi mài kinh sử"
        },
        {
            "char": "习",
            "pinyin": "xí",
            "hanviet": "Tập",
            "meaning": "Luyện tập, thực hành",
            "strokes": 3,
            "tip": "Chim non vỗ cánh tập bay từng ngày"
        },
        {
            "char": "中",
            "pinyin": "zhōng",
            "hanviet": "Trung",
            "meaning": "Ở giữa, trung tâm, Trung Quốc",
            "strokes": 4,
            "tip": "Mũi tên bắn trúng hồng tâm"
        },
        {
            "char": "文",
            "pinyin": "wén",
            "hanviet": "Văn",
            "meaning": "Văn học, ngôn ngữ, nét đẹp",
            "strokes": 4,
            "tip": "Văn hóa và hoa văn tao nhã"
        },
        {
            "char": "爱",
            "pinyin": "ài",
            "hanviet": "Ái",
            "meaning": "Yêu thương, quý mến",
            "strokes": 10,
            "tip": "Dùng cả bàn tay và tấm lòng để trao gửi yêu thương"
        },
        {
            "char": "家",
            "pinyin": "jiā",
            "hanviet": "Gia",
            "meaning": "Gia đình, mái nhà ấm cúng",
            "strokes": 10,
            "tip": "Dưới mái nhà (Miên) có sự sung túc"
        },
        {
            "char": "朋",
            "pinyin": "péng",
            "hanviet": "Bằng",
            "meaning": "Bạn bè tri kỷ",
            "strokes": 8,
            "tip": "Hai vầng trăng soi rọi tình bạn tri âm"
        },
        {
            "char": "友",
            "pinyin": "yǒu",
            "hanviet": "Hữu",
            "meaning": "Bằng hữu thân tình",
            "strokes": 4,
            "tip": "Hai bàn tay nắm lấy nhau bền chặt"
        },
        {
            "char": "春",
            "pinyin": "chūn",
            "hanviet": "Xuân",
            "meaning": "Mùa xuân đâm chồi",
            "strokes": 9,
            "tip": "Ba người ngắm mặt trời ấm áp ngày xuân"
        },
        {
            "char": "花",
            "pinyin": "huā",
            "hanviet": "Hoa",
            "meaning": "Đóa hoa ngát hương",
            "strokes": 7,
            "tip": "Cỏ cây biến hóa thành hoa nở rộ"
        },
        {
            "char": "风",
            "pinyin": "fēng",
            "hanviet": "Phong",
            "meaning": "Làn gió mát lành",
            "strokes": 4,
            "tip": "Gió luồn qua vạn vật"
        },
        {
            "char": "雨",
            "pinyin": "yǔ",
            "hanviet": "Vũ",
            "meaning": "Cơn mưa rào",
            "strokes": 8,
            "tip": "Từng giọt nước rơi từ bầu trời"
        },
        {
            "char": "明",
            "pinyin": "míng",
            "hanviet": "Minh",
            "meaning": "Sáng sủa, thông minh",
            "strokes": 8,
            "tip": "Mặt trời (Nhật) cạnh mặt trăng (Nguyệt) sáng bừng"
        },
        {
            "char": "星",
            "pinyin": "xīng",
            "hanviet": "Tinh",
            "meaning": "Ngôi sao lấp lánh",
            "strokes": 9,
            "tip": "Mầm sống sinh ra dưới ánh mặt trời"
        },
        {
            "char": "美",
            "pinyin": "měi",
            "hanviet": "Mỹ",
            "meaning": "Xinh đẹp, tuyệt mỹ",
            "strokes": 9,
            "tip": "Con cừu to lớn (Dương + Đại) tượng trưng cho cái đẹp"
        }
    ],
    "calligraphy": [
        {
            "char": "福",
            "pinyin": "fú",
            "hanviet": "Phúc",
            "meaning": "Phúc lành, may mắn, hạnh phúc viên mãn",
            "strokes": 13,
            "tip": "Thần linh ban ruộng đất no đủ ấm êm"
        },
        {
            "char": "禄",
            "pinyin": "lù",
            "hanviet": "Lộc",
            "meaning": "Tài lộc, phú quý, bổng lộc vinh hiển",
            "strokes": 12,
            "tip": "Phước lộc dồi dào chảy như dòng suối"
        },
        {
            "char": "寿",
            "pinyin": "shòu",
            "hanviet": "Thọ",
            "meaning": "Trường thọ, sống lâu trăm tuổi",
            "strokes": 7,
            "tip": "Tuổi tác dài lâu như cây tùng bách"
        },
        {
            "char": "安",
            "pinyin": "ān",
            "hanviet": "An",
            "meaning": "Bình an, yên ổn, vạn sự thuận hòa",
            "strokes": 6,
            "tip": "Người phụ nữ (Nữ) ở trong nhà (Miên) thì tâm an"
        },
        {
            "char": "康",
            "pinyin": "kāng",
            "hanviet": "Khang",
            "meaning": "Khang thái, khỏe mạnh, an khang thịnh vượng",
            "strokes": 11,
            "tip": "Cuộc sống an nhàn, thân thể kiện khang"
        },
        {
            "char": "宁",
            "pinyin": "níng",
            "hanviet": "Ninh",
            "meaning": "Ninh tĩnh, thanh bình, yên ả",
            "strokes": 5,
            "tip": "Mái nhà ấm cúng bình yên không sóng gió"
        },
        {
            "char": "德",
            "pinyin": "dé",
            "hanviet": "Đức",
            "meaning": "Phẩm hạnh, đạo đức cao quý",
            "strokes": 15,
            "tip": "Mười con mắt nhìn vào một trái tim chân thật"
        },
        {
            "char": "心",
            "pinyin": "xīn",
            "hanviet": "Tâm",
            "meaning": "Trái tim, lòng dạ thiện lương",
            "strokes": 4,
            "tip": "Vầng trăng khuyết ôm ba giọt sao trời"
        },
        {
            "char": "忍",
            "pinyin": "rěn",
            "hanviet": "Nhẫn",
            "meaning": "Nhẫn nại, kiên trì, điềm tĩnh",
            "strokes": 7,
            "tip": "Lưỡi dao (Đao) đặt trên trái tim (Tâm) vẫn vững vàng"
        },
        {
            "char": "缘",
            "pinyin": "yuán",
            "hanviet": "Duyên",
            "meaning": "Duyên phận, sự tao ngộ kỳ diệu",
            "strokes": 12,
            "tip": "Sợi tơ hồng gắn kết đôi lứa và bạn bè tri kỷ"
        },
        {
            "char": "静",
            "pinyin": "jìng",
            "hanviet": "Tĩnh",
            "meaning": "Tĩnh lặng, lắng đọng tâm hồn",
            "strokes": 14,
            "tip": "Màu xanh biếc yên ả giữa cuộc đời"
        },
        {
            "char": "慧",
            "pinyin": "huì",
            "hanviet": "Tuệ",
            "meaning": "Trí tuệ, thông thái mẫn tiệp",
            "strokes": 15,
            "tip": "Cây chổi quét sạch bụi mờ trong tâm trí"
        }
    ],
    "romantic": [
        {
            "char": "映",
            "pinyin": "yìng",
            "hanviet": "Ánh",
            "meaning": "Ánh sáng chiếu rọi, tỏa sáng rực rỡ (Tên của nàng Ngọc Ánh)",
            "strokes": 9,
            "tip": "Mặt trời (Nhật) soi rọi trung tâm (Ương) bừng sáng"
        },
        {
            "char": "玉",
            "pinyin": "yù",
            "hanviet": "Ngọc",
            "meaning": "Ngọc quý tinh khiết, thanh cao hoàn mỹ",
            "strokes": 5,
            "tip": "Chữ Vương mang thêm một viên ngọc nhỏ tỏa sáng"
        },
        {
            "char": "甜",
            "pinyin": "tián",
            "hanviet": "Điềm",
            "meaning": "Ngọt ngào, dịu dàng, say đắm",
            "strokes": 11,
            "tip": "Hương vị ngọt lành nơi đầu lưỡi"
        },
        {
            "char": "梦",
            "pinyin": "mèng",
            "hanviet": "Mộng",
            "meaning": "Giấc mơ ngọt ngào, hoài bão tương lai",
            "strokes": 11,
            "tip": "Khu rừng dưới đêm trăng huyền diệu"
        },
        {
            "char": "欣",
            "pinyin": "xīn",
            "hanviet": "Hân",
            "meaning": "Hân hoan, rạng rỡ, ngập tràn niềm vui",
            "strokes": 8,
            "tip": "Cây rìu bổ củi trong niềm hân hoan"
        },
        {
            "char": "情",
            "pinyin": "qíng",
            "hanviet": "Tình",
            "meaning": "Tình cảm, ân tình sâu nặng",
            "strokes": 11,
            "tip": "Trái tim (Tâm) luôn giữ sự trong trẻo xanh tươi (Thanh)"
        },
        {
            "char": "恋",
            "pinyin": "liàn",
            "hanviet": "Luyến",
            "meaning": "Lưu luyến, tình yêu đắm say",
            "strokes": 10,
            "tip": "Tơ vương quấn quýt nơi đáy tim"
        },
        {
            "char": "雪",
            "pinyin": "xuě",
            "hanviet": "Tuyết",
            "meaning": "Bông tuyết trắng ngần",
            "strokes": 11,
            "tip": "Mưa đóng băng thành tuyết trắng"
        },
        {
            "char": "雅",
            "pinyin": "yǎ",
            "hanviet": "Nhã",
            "meaning": "Thanh nhã, trang nhã quý phái",
            "strokes": 12,
            "tip": "Hàm ý tao nhã và thanh tao"
        },
        {
            "char": "诗",
            "pinyin": "shī",
            "hanviet": "Thi",
            "meaning": "Thơ ca lãng mạn",
            "strokes": 8,
            "tip": "Lời nói cất lên từ chốn linh thiêng"
        }
    ]
},
  "sampleOcrData": [
    {
        "id": "menu-milktea",
        "title": "Thực đơn Trà sữa Đài Loan (奶茶店菜单)",
        "category": "Ẩm thực & Đời sống",
        "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?w=500&q=80",
        "previewDesc": "Menu đồ uống gồm trà sữa trân châu, trà đào ô long và các mức đá đường.",
        "lines": [
            {
                "hanzi": "波霸奶茶",
                "pinyin": "bōbà nǎichá",
                "vi": "Trà sữa trân châu boba khổng lồ"
            },
            {
                "hanzi": "白桃乌龙",
                "pinyin": "báitáo wūlóng",
                "vi": "Trà ô long đào trắng thanh mát"
            },
            {
                "hanzi": "半糖去冰",
                "pinyin": "bàntáng qùbīng",
                "vi": "50% đường, không đá (nửa đường bỏ đá)"
            },
            {
                "hanzi": "满杯红柚",
                "pinyin": "mǎnbēi hóngyòu",
                "vi": "Trà bưởi đỏ ngập tràn tép bưởi"
            }
        ],
        "vocab": [
            {
                "hanzi": "波霸",
                "pinyin": "bōbà",
                "meaning": "Trân châu to boba"
            },
            {
                "hanzi": "乌龙",
                "pinyin": "wūlóng",
                "meaning": "Trà ô long"
            },
            {
                "hanzi": "半糖",
                "pinyin": "bàntáng",
                "meaning": "50% đường (nửa ngọt)"
            }
        ]
    },
    {
        "id": "taobao-label",
        "title": "Nhãn kiện hàng & Hướng dẫn Taobao (淘宝快递标签)",
        "category": "TMĐT & Mua sắm",
        "imageUrl": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80",
        "previewDesc": "Nhãn dán kiện hàng chuyển phát nhanh có ghi chú dễ vỡ và yêu cầu kiểm hàng.",
        "lines": [
            {
                "hanzi": "易碎品，小心轻放",
                "pinyin": "yìsuǐpǐn, xiǎoxīn qīng fàng",
                "vi": "Hàng dễ vỡ, xin nhẹ tay cẩn thận"
            },
            {
                "hanzi": "请当面验货后再签收",
                "pinyin": "qǐng dāngmiàn yànhuò hòu zài qiānshōu",
                "vi": "Vui lòng đồng kiểm hàng trước khi ký nhận"
            },
            {
                "hanzi": "正品保障，支持七天无理由退换",
                "pinyin": "zhèngpǐn bǎozhàng, zhīchí qī tiān wú lǐyóu tuìhuàn",
                "vi": "Đảm bảo hàng chính hãng, đổi trả 7 ngày không cần lý do"
            }
        ],
        "vocab": [
            {
                "hanzi": "易碎品",
                "pinyin": "yìsuǐpǐn",
                "meaning": "Đồ dễ vỡ"
            },
            {
                "hanzi": "验货",
                "pinyin": "yànhuò",
                "meaning": "Kiểm tra hàng hóa"
            },
            {
                "hanzi": "签收",
                "pinyin": "qiānshōu",
                "meaning": "Ký nhận bưu phẩm"
            }
        ]
    },
    {
        "id": "beijing-sign",
        "title": "Bảng hiệu chỉ dẫn Phố cổ Bắc Kinh (北京老街路牌)",
        "category": "Du lịch & Chỉ đường",
        "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&q=80",
        "previewDesc": "Biển chỉ dẫn ngõ ngách hồ đồ (Hutong) và lối vào di tích lịch sử văn hóa.",
        "lines": [
            {
                "hanzi": "南锣鼓巷历史文化街区",
                "pinyin": "Nánluógǔ Xiàng lìshǐ wénhuà jiēqū",
                "vi": "Khu phố di sản lịch sử văn hóa Nam La Cổ Hạng"
            },
            {
                "hanzi": "前方胡同狭窄，车辆慢行",
                "pinyin": "qiánfāng hútòng xiázhǎi, chēliàng mànxíng",
                "vi": "Phía trước ngõ hẹp (hutong), phương tiện đi chậm"
            },
            {
                "hanzi": "游客服务中心向左转100米",
                "pinyin": "yóukè fúwù zhōngxīn xiàng zuǒ zhuǎn yībǎi mǐ",
                "vi": "Trung tâm dịch vụ du khách rẽ trái 100 mét"
            }
        ],
        "vocab": [
            {
                "hanzi": "街区",
                "pinyin": "jiēqū",
                "meaning": "Khu phố, con phố"
            },
            {
                "hanzi": "胡同",
                "pinyin": "hútòng",
                "meaning": "Ngõ hẻm cổ Bắc Kinh"
            },
            {
                "hanzi": "慢行",
                "pinyin": "mànxíng",
                "meaning": "Đi chậm lại"
            }
        ]
    }
],
  "sampleVideoData": {
    "title": "Đoạn Phim Ngắn: Cuộc Gặp Gỡ Tình Cờ Dưới Mưa 🌧️ (雨中的相遇)",
    "duration": "00:45",
    "videoUrl": "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "subtitles": [
        {
            "start": 1,
            "end": 5,
            "hanzi": "外面的雨下得好大，你没带伞吗？",
            "pinyin": "Wàimiàn de yǔ xià de hǎo dà, nǐ méi dài sǎn ma?",
            "vi": "Mưa bên ngoài lớn quá, em không mang ô theo sao?"
        },
        {
            "start": 6,
            "end": 10,
            "hanzi": "是啊，出门太急了，完全忘了看天气预报。",
            "pinyin": "Shì a, chūmén tài jí le, wánquán wàng le kàn tiānqì yùbào.",
            "vi": "Đúng rồi ạ, em ra ngoài vội quá, quên bẵng mất không xem dự báo thời tiết."
        },
        {
            "start": 11,
            "end": 16,
            "hanzi": "如果不介意的话，我们合撑一把伞吧，我送你到地铁站。",
            "pinyin": "Rúguǒ bú jièyì de huà, wǒmen hé chēng yì bǎ sǎn ba, wǒ sòng nǐ dào dìtiězhàn.",
            "vi": "Nếu em không phiền, chúng ta che chung một chiếc ô nhé, anh tiễn em ra ga tàu điện ngầm."
        },
        {
            "start": 17,
            "end": 22,
            "hanzi": "太感谢你了！你真是帮了我一个大忙！",
            "pinyin": "Tài gǎnxiè nǐ le! Nǐ zhēn shì bāng le wǒ yí gè dà máng!",
            "vi": "Em cảm ơn anh nhiều lắm! Anh thật sự đã giúp em một chuyện lớn rồi!"
        },
        {
            "start": 23,
            "end": 28,
            "hanzi": "举手之劳而已，走吧，小心地滑。",
            "pinyin": "Jǔshǒu zhī láo éryǐ, zǒu ba, xiǎoxīn dì huá.",
            "vi": "Chuyện nhỏ tiện tay thôi mà, đi thôi em, cẩn thận đường trơn nhé."
        }
    ]
}
};
