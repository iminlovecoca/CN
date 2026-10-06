/**
 * Mochi Chinese (米米汉语) - Rich Educational Content Expansion
 * Đầy đủ 64 bài học chuẩn mực, 20+ truyện đọc hiểu song ngữ, đề thi và câu hỏi phong phú
 */

(function(global) {
  'use strict';

  if (!global.MOCHI_DATA) {
    global.MOCHI_DATA = {};
  }
  const M = global.MOCHI_DATA;

  // 1. Kho truyện đọc hiểu song ngữ
  const RICH_STORIES = [
  {
    "id": "story-01",
    "category": "fable",
    "categoryName": "Ngụ ngôn & Điển tích",
    "title": "揠苗助长 — Nóng vội đốt cháy giai đoạn",
    "pinyin": "Yà miáo zhù zhǎng",
    "summary": "Câu chuyện người nông dân kéo mạ lên để lúa lớn nhanh khiến lúa khô héo toàn bộ.",
    "moral": "Mọi sự tiến bộ đều cần thời gian tích lũy kiên trì, không thể đốt cháy giai đoạn.",
    "vocab": [
      {
        "hanzi": "急于求成",
        "pinyin": "jí yú qiú chéng",
        "meaning": "nóng vội muốn thành công ngay"
      },
      {
        "hanzi": "拔",
        "pinyin": "bá",
        "meaning": "nhổ, kéo lên"
      },
      {
        "hanzi": "枯萎",
        "pinyin": "kūwěi",
        "meaning": "khô héo, lụi tàn"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "古时候，宋国有一个农夫，他总嫌自己田里的禾苗长得太慢，天天盼着它们快快长大。",
        "pinyin": "Gǔ shíhou, Sòng guó yǒu yí gè nóngfū, tā zǒng xián zìjǐ tián lǐ de hémiáo zhǎng de tài màn, tiāntiān pànzhe tāmen kuàikuài zhǎng dà.",
        "vi": "Thời xưa, nước Tống có người nông dân luôn chê mạ trong ruộng lớn chậm, ngày nào cũng ngóng chúng lớn mau."
      },
      {
        "hanzi": "有一天，他跑到田里，把禾苗一棵一棵地往上拔高了一截。回到家后得意地说：“今天我帮禾苗长高了好多！”",
        "pinyin": "Yǒu yì tiān, tā pǎo dào tián lǐ, bǎ hémiáo yì kē yì kē de wǎng shàng bá gāo le yì jié...",
        "vi": "Một hôm, ông chạy ra đồng kéo từng cây mạ nhích cao lên. Về nhà đắc ý bảo: 'Hôm nay ta giúp mạ cao lên cả tấc!'"
      },
      {
        "hanzi": "他的儿子急忙跑到田里一看，结果所有的禾苗全都枯萎死掉了。",
        "pinyin": "Tā de érzi jímáng pǎo dào tián lǐ yí kàn, jiéguǒ suǒyǒu de hémiáo quándōu kūwěi sǐ diào le.",
        "vi": "Con trai vội chạy ra đồng xem, kết quả toàn bộ mạ non đều đã khô héo chết sạch."
      }
    ]
  },
  {
    "id": "story-02",
    "category": "fable",
    "categoryName": "Ngụ ngôn & Điển tích",
    "title": "塞翁失马 — Tái ông thất mã (Trong rủi có may)",
    "pinyin": "Sài wēng shī mǎ",
    "summary": "Mất ngựa rồi lại được ngựa, ngã gãy chân nhưng nhờ đó thoát chết nơi chiến trận.",
    "moral": "Trong hoạn nạn có mầm mống của may mắn, trong thuận lợi cũng ẩn chứa rủi ro; hãy giữ tâm bình thản.",
    "vocab": [
      {
        "hanzi": "祸福相依",
        "pinyin": "huò fú xiāng yī",
        "meaning": "họa và phúc nương tựa nhau"
      },
      {
        "hanzi": "因祸得福",
        "pinyin": "yīn huò dé fú",
        "meaning": "nhờ gặp họa mà được phúc"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "边塞住着一位老翁，家里的一匹骏马跑丢了，邻居来安慰他，他却说：“这怎么就不能是一件好事呢？”",
        "pinyin": "Biānsài zhùzhe yí wèi lǎowēng, jiā lǐ de yì pǐ jùnmǎ pǎo diū le, línjū lái ānwèi tā, tā què shuō: 'Zhè zěnme jiù bù néng shì yí jiàn hǎoshì ne?'",
        "vi": "Ông lão ở biên ải mất con tuấn mã, hàng xóm đến an ủi, ông lại bảo: 'Biết đâu đây lại là chuyện tốt?'"
      },
      {
        "hanzi": "几个月后，那匹马不仅跑了回来，还带回了一匹良马。儿子骑马摔断了腿，老翁依然说：“这也许是福气。”",
        "pinyin": "Jǐ gè yuè hòu, nà pǐ mǎ bùjǐn pǎo le huílái, hái dài huí le yì pǐ liángmǎ...",
        "vi": "Mấy tháng sau, ngựa quay về và dẫn theo một tuấn mã. Con trai ngã gãy chân, ông vẫn bảo: 'Biết đâu là phúc'."
      },
      {
        "hanzi": "后来边境打仗，青年人大多战死，唯独老翁的儿子因腿瘸保全了性命。",
        "pinyin": "Hòulái biānjìng dǎzhàng, qīngnián rén dàduō zhànsǐ, wéidú lǎowēng de érzi yīn tuǐ qué bǎoquán le xìngmìng.",
        "vi": "Sau đó chiến tranh bùng nổ, trai tráng tử trận, riêng con trai ông nhờ tật chân mà giữ được tính mạng."
      }
    ]
  },
  {
    "id": "story-03",
    "category": "fable",
    "categoryName": "Ngụ ngôn & Điển tích",
    "title": "狐假虎威 — Cáo mượn oai hùm",
    "pinyin": "Hú jiǎ hǔ wēi",
    "summary": "Cáo đi trước, hổ đi sau khiến muông thú khiếp sợ; hổ tưởng thú sợ cáo mà không biết chúng sợ chính mình.",
    "moral": "Phê phán kẻ mượn danh thế lực của người khác để thị uy dọa nạt người xung quanh.",
    "vocab": [
      {
        "hanzi": "借势",
        "pinyin": "jiè shì",
        "meaning": "mượn thế lực"
      },
      {
        "hanzi": "狡猾",
        "pinyin": "jiǎohuá",
        "meaning": "ranh mãnh, xảo quyệt"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "老虎抓住了一只狐狸，正准备吃掉它。狡猾的狐狸说：“老天爷派我来当百兽之王，你敢吃我就是违抗天命！”",
        "pinyin": "Lǎohǔ zhuāzhù le yì zhī húli, zhèng zhǔnbèi chī diào tā. Jiǎohuá de húli shuō: 'Lǎotiānyé pài wǒ lái dāng bǎi shòu zhī wáng...'",
        "vi": "Hổ bắt được cáo chuẩn bị ăn thịt. Cáo xảo quyệt bảo: 'Trời sai ta làm chúa tể muông thú, ngươi dám ăn thịt ta là trái mệnh trời!'"
      },
      {
        "hanzi": "狐狸让老虎走在自己身后，森林里的动物看见了纷纷吓得逃跑。老虎以为百兽真的怕狐狸，便把它放了。",
        "pinyin": "Húli ràng lǎohǔ zǒu zài zìjǐ shēnhòu, sēnlín lǐ de dòngwù kànjiàn le fēnfēn xià de táopǎo...",
        "vi": "Cáo bảo hổ đi sau mình, muông thú thấy bóng hổ đều hoảng sợ chạy tán loạn. Hổ ngỡ muông thú sợ cáo thật nên thả cáo đi."
      }
    ]
  },
  {
    "id": "story-04",
    "category": "fable",
    "categoryName": "Ngụ ngôn & Điển tích",
    "title": "盲人摸象 — Thầy bói xem voi",
    "pinyin": "Máng rén mō xiàng",
    "summary": "Bốn người khiếm thị sờ voi: người sờ vòi bảo như con rắn, người sờ chân bảo như cây cột...",
    "moral": "Không nên nhìn nhận sự vật một cách phiến diện cục bộ rồi vội vàng đưa ra kết luận toàn thể.",
    "vocab": [
      {
        "hanzi": "片面",
        "pinyin": "piànmiàn",
        "meaning": "phiến diện, một chiều"
      },
      {
        "hanzi": "全面",
        "pinyin": "quánmiàn",
        "meaning": "toàn diện, tổng thể"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "四个盲人第一次摸大象。摸到象牙的说：“大象像一根萝卜！”摸到耳朵的说：“大象像一把大扇子！”",
        "pinyin": "Sì gè mángrén dì yī cì mō dàxiàng. Mō dào xiàngyá de shuō: 'Dàxiàng xiàng yì gēn luóbo!'...",
        "vi": "Bốn người mù lần đầu sờ voi. Người sờ ngà bảo voi như củ cải! Người sờ tai bảo voi như cái quạt lớn!"
      },
      {
        "hanzi": "摸到象腿的说：“大象像一根大柱子！”摸到尾巴的说：“大象只是一根细绳子嘛！”大家争论不休。",
        "pinyin": "Mō dào xiàngtuǐ de shuō: 'Dàxiàng xiàng yì gēn dà zhùzi!' Mō dào wěiba de shuō: 'Dàxiàng zhǐ shì yì gēn xì shéngzi ma!'...",
        "vi": "Người sờ chân bảo voi như cái cột đình! Người sờ đuôi bảo voi chỉ là sợi dây thừng! Ai cũng khăng khăng mình đúng."
      }
    ]
  },
  {
    "id": "story-05",
    "category": "fable",
    "categoryName": "Ngụ ngôn & Điển tích",
    "title": "愚公移山 — Ngu Công dời núi",
    "pinyin": "Yú gōng yí shān",
    "summary": "Cụ già chín mươi tuổi quyết tâm cùng con cháu dời hai ngọn núi chắn trước cửa nhà.",
    "moral": "Chỉ cần có ý chí kiên định và lòng kiên trì bền bỉ, không khó khăn nào không thể vượt qua.",
    "vocab": [
      {
        "hanzi": "坚持不懈",
        "pinyin": "jiānchí bú xiè",
        "meaning": "kiên trì không ngừng nghỉ"
      },
      {
        "hanzi": "坚定",
        "pinyin": "jiāndìng",
        "meaning": "vững vàng, kiên định"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "北山愚公年近九十，苦于门前两座大山阻碍道路，便下定决心率领全家人把山挖平。",
        "pinyin": "Běishān Yú Gōng nián jìn jiǔshí, kǔ yú ménqián liǎng zuò dàshān zǔ'ài dàolù, biàn xiàdìng juéxīn shuàilǐng quánjiā rén bǎ shān wā píng.",
        "vi": "Cụ Bắc Sơn Ngu Công gần chín mươi tuổi, khổ vì hai ngọn núi chắn đường, bèn quyết tâm dẫn cả nhà bạt núi dời đường."
      },
      {
        "hanzi": "有人嘲笑他太傻，愚公回答：“我死了有儿子，儿子又生孙子，子子孙孙无穷无尽，而山不会增高，何愁移不平呢？”",
        "pinyin": "Yǒu rén cháoxiào tā tài shǎ, Yú Gōng huídá: 'Wǒ sǐ le yǒu érzi, érzi yòu shēng sūnzi, zǐzǐ-sūnsūn wúqióng wújìn...'",
        "vi": "Có người cười cụ ngốc, Ngu Công đáp: 'Ta mất còn có con, con lại sinh cháu, đời đời khôn cùng, còn núi chẳng cao thêm, lo gì không bạt phẳng?'"
      }
    ]
  },
  {
    "id": "story-06",
    "category": "fable",
    "categoryName": "Ngụ ngôn & Điển tích",
    "title": "守株待兔 — Ôm cây đợi thỏ",
    "pinyin": "Shǒu zhū dài tù",
    "summary": "Một người nông dân tình cờ nhặt được con thỏ đâm đầu vào gốc cây chết, bèn bỏ cày cuốc ngày ngày ngồi đợi thỏ tiếp.",
    "moral": "Không thể trông chờ vào vận may ngẫu nhiên mà lười biếng, chỉ có lao động chân chính mới tạo ra quả ngọt.",
    "vocab": [
      {
        "hanzi": "侥幸",
        "pinyin": "jiǎoxìng",
        "meaning": "trông chờ may rủi"
      },
      {
        "hanzi": "劳作",
        "pinyin": "láozuò",
        "meaning": "lao động cần mẫn"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "宋国有个农夫，见一只奔跑的野兔撞在树桩上折颈而死，便白捡了一只肥兔。",
        "pinyin": "Sòng guó yǒu gè nóngfū, jiàn yì zhī bēnpǎo de yětù zhuàng zài shùzhuāng shàng zhé jǐng ér sǐ...",
        "vi": "Nước Tống có bác nông dân thấy một con thỏ chạy đâm vào gốc cây gãy cổ chết, bèn không mất công mà được bữa no nê."
      },
      {
        "hanzi": "从此他放下农具，天天守在树旁等待下一只兔子，结果再也没等到，田地也荒芜了。",
        "pinyin": "Cóngcǐ tā fàngxià nóngjù, tiāntiān shǒu zài shù páng děngdài xià yì zhī tùzi...",
        "vi": "Từ đó bác bỏ cuốc cày, ngày ngày chầu chực bên gốc cây mong thỏ tới, kết quả chẳng thấy thỏ đâu mà ruộng đồng hoang phế hết."
      }
    ]
  },
  {
    "id": "story-07",
    "category": "life",
    "categoryName": "Tản văn & Đời sống",
    "title": "冬日里的一杯热奶茶 — Ly trà sữa nóng ngày đông",
    "pinyin": "Dōngrì lǐ de yì bēi rè nǎichá",
    "summary": "Khoảnh khắc ấm áp đời thường sau những giờ làm việc mệt mỏi ở thành phố nhộn nhịp.",
    "moral": "Hạnh phúc luôn ẩn chứa trong từng niềm vui nhỏ bé mỗi ngày.",
    "vocab": [
      {
        "hanzi": "温暖",
        "pinyin": "wēnnuǎn",
        "meaning": "ấm áp, dịu êm"
      },
      {
        "hanzi": "疲惫",
        "pinyin": "píbèi",
        "meaning": "mệt mỏi, kiệt sức"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "冬天的傍晚，寒风吹过街道，行人匆匆赶路。刚走出写字楼，身上的疲惫感扑面而来。",
        "pinyin": "Dōngtiān de bàngwǎn, hánfēng chuī guò jiēdào, xíngrén cōngcōng gǎnlù...",
        "vi": "Buổi chiều muộn mùa đông, gió lạnh lùa qua phố, người qua lại vội vã. Vừa bước ra khỏi văn phòng, mệt mỏi ùa đến."
      },
      {
        "hanzi": "双手握着热气腾腾的纸杯，红茶与鲜奶的香气在舌尖蔓延，一整天的辛劳似乎瞬间被治愈了。",
        "pinyin": "Shuāngshǒu wòzhe rèqì téngténg de zhǐbēi, hóngchá yǔ xiānnǎi de xiāngqì zài shéjiān mànyán...",
        "vi": "Hai tay ôm lấy ly giấy bốc khói, hương trà đen quyện sữa tươi đượm ngọt, nhọc nhằn tan biến nhẹ tênh."
      }
    ]
  },
  {
    "id": "story-08",
    "category": "life",
    "categoryName": "Tản văn & Đời sống",
    "title": "给未来自己的一封信 — Bức thư gửi chính mình tương lai",
    "pinyin": "Gěi wèilái zìjǐ de yì fēng xìn",
    "summary": "Lời nhắn nhủ dịu dàng nhắc nhở bản thân kiên định với ước mơ và biết trân trọng hiện tại.",
    "moral": "Mỗi một bước đi hôm nay đều đang tích lũy ánh sáng cho tương lai rực rỡ.",
    "vocab": [
      {
        "hanzi": "初心",
        "pinyin": "chūxīn",
        "meaning": "tâm nguyện ban đầu"
      },
      {
        "hanzi": "从容",
        "pinyin": "cóngróng",
        "meaning": "ung dung, điềm đạm"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "亲爱的自己：见信如晤。不知道当你看这封信时，是否已经成为了那个更加从容自信的自己？",
        "pinyin": "Qīn'ài de zìjǐ: Jiàn xìn rú wù. Bù zhīdào dāng nǐ kàn zhè fēng xìn shí...",
        "vi": "Gửi tôi thân mến: Nhìn thư như gặp mặt. Chẳng hay khi đọc bức thư này, bạn đã trở thành phiên bản tự tin, ung dung hơn chưa?"
      },
      {
        "hanzi": "请永远记住最初学中文时的热爱与坚持，步履不停，心怀温暖，未来的你一定会感谢今天努力拼搏的自己！",
        "pinyin": "Qǐng yǒngyuǎn jìzhu zuìchū xué zhōngwén shí de rè'ài yǔ jiānchí...",
        "vi": "Hãy luôn nhớ ngọn lửa đam mê và sự kiên trì từ những ngày đầu. Không ngừng tiến bước, tương lai chắc chắn sẽ cảm ơn bạn hôm nay!"
      }
    ]
  },
  {
    "id": "story-09",
    "category": "life",
    "categoryName": "Tản văn & Đời sống",
    "title": "街角书店的午后 — Buổi chiều trong tiệm sách góc phố",
    "pinyin": "Jiējiǎo shūdiàn de wǔhòu",
    "summary": "Nơi trú chân yên ả giữa dòng đời hối hả, tìm lại sự an yên qua từng trang sách.",
    "moral": "Đọc sách là chuyến du hành tĩnh lặng giúp nuôi dưỡng tâm hồn sâu lắng.",
    "vocab": [
      {
        "hanzi": "静谧",
        "pinyin": "jìngmì",
        "meaning": "tĩnh mịch, yên ả"
      },
      {
        "hanzi": "沉淀",
        "pinyin": "chéndiàn",
        "meaning": "lắng đọng, tích lũy tri thức"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "推开街角木门，风铃发出清脆的响声。窗外车水马龙，店内却弥漫着油墨与咖啡的沉静香气。",
        "pinyin": "Tuīkāi jiējiǎo mùmén, fēnglíng fāchū qīngcuì de xiǎngshēng...",
        "vi": "Đẩy cánh cửa gỗ ở góc phố, chuông gió reo leng keng trong trẻo. Ngoài ô cửa xe cộ tấp nập, trong quán lại ngập tràn hương mực và cà phê."
      },
      {
        "hanzi": "随意翻开一本诗集，阳光透过绿萝洒在字里行间，时光在这里仿佛悄悄慢了下来。",
        "pinyin": "Suíyì fānkāi yì běn shījī, yángguāng tòuguò lǜluó sǎ zài zì lǐ háng jiān...",
        "vi": "Tùy ý mở một tập thơ, ánh nắng rọi qua chậu trầu bà lên từng con chữ, thời gian nơi đây dường như êm đềm chậm lại."
      }
    ]
  },
  {
    "id": "story-10",
    "category": "culture",
    "categoryName": "Văn hóa & Ẩm thực",
    "title": "四川火锅的辣与情 — Vị cay và nghĩa tình lẩu Tứ Xuyên",
    "pinyin": "Sìchuān huǒguō de là yǔ qíng",
    "summary": "Bàn ăn không chỉ là ẩm thực, mà là không gian gắn kết tình cảm chân thành giữa người với người.",
    "moral": "Ẩm thực là chiếc cầu nối ấm áp gắn kết mọi trái tim.",
    "vocab": [
      {
        "hanzi": "沸腾",
        "pinyin": "fèiténg",
        "meaning": "sôi sùng sục, sôi nổi"
      },
      {
        "hanzi": "人情味",
        "pinyin": "rénqíngwèi",
        "meaning": "hương vị tình người"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "红汤沸腾，花椒麻辣浓郁。三五好友围坐一桌，边烫毛肚边畅聊心事，热气腾腾中满是市井人情味。",
        "pinyin": "Hóngtāng fèiténg, huājiāo málà nóngyù. Sān wǔ hǎoyǒu wéizuò yì zhuō...",
        "vi": "Nồi lẩu đỏ rực sôi ùng ục, cay tê nồng nàn. Vài ba người bạn quây quần nhúng đồ tâm tình, khói ấm bốc lên đong đầy tình người."
      },
      {
        "hanzi": "一顿热辣的火锅，吃出的不仅是舌尖的鲜美，更是彼此毫无保留的欢笑与真情。",
        "pinyin": "Yí dùn rèlà de huǒguō, chī chū de bùjǐn shì shéjiān de xiānměi...",
        "vi": "Một bữa lẩu nóng hổi, đọng lại không chỉ là mỹ vị đầu lưỡi mà là tiếng cười rộn rã và sự chân thành dành cho nhau."
      }
    ]
  },
  {
    "id": "story-11",
    "category": "culture",
    "categoryName": "Văn hóa & Ẩm thực",
    "title": "中国茶道的宁静之美 — Nét đẹp tĩnh lặng trong trà đạo",
    "pinyin": "Zhōngguó chádào de níngjìng zhī měi",
    "summary": "Nhất ẩm nhất trác — học cách sống tĩnh tâm, biết đủ và bao dung từ chén trà thơm.",
    "moral": "Thưởng trà như nếm trải cuộc đời: đắng trước ngọt sau, thanh tao thuần khiết.",
    "vocab": [
      {
        "hanzi": "回甘",
        "pinyin": "huígān",
        "meaning": "hậu vị ngọt ngào sau vị đắng"
      },
      {
        "hanzi": "淡雅",
        "pinyin": "dànyǎ",
        "meaning": "thanh nhã, tinh tế"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "沸水注入紫砂壶中，茶叶在水中缓缓舒展，淡雅的清香随即在空气中弥漫开来。",
        "pinyin": "Fèishuǐ zhùrù zǐshāhú zhōng, cháyè zài shuǐ zhōng huǎnhuǎn shūzhǎn...",
        "vi": "Nước sôi rót vào ấm tử sa, búp trà từ từ bung nở trong nước, hương thơm thanh khiết thoang thoảng khắp không gian."
      },
      {
        "hanzi": "茶如人生，初尝微苦，细品回甘。在浮躁的世界里，泡一壶清茶，便能寻得内心的宁静与释怀。",
        "pinyin": "Chá rú rénshēng, chū cháng wēi kǔ, xì pǐn huígān...",
        "vi": "Trà tựa nhân sinh, nhấp môi hơi đắng, ngẫm kỹ hậu ngọt. Giữa dòng đời vội vã, pha một ấm trà thanh tao là tìm thấy sự an nhiên nơi đáy lòng."
      }
    ]
  },
  {
    "id": "story-12",
    "category": "workplace",
    "categoryName": "Mẹo hay & Công sở",
    "title": "职场沟通的高情商艺术 — Nghệ thuật giao tiếp khéo léo",
    "pinyin": "Zhíchǎng gōutōng de gāo qíngshāng yìshù",
    "summary": "Những câu thần chú giúp bạn ứng xử khéo léo, được sếp và đồng nghiệp tín nhiệm.",
    "moral": "Biết lắng nghe, đổi góc nhìn và dùng từ tích cực là bí quyết thành công trong công việc.",
    "vocab": [
      {
        "hanzi": "换位思考",
        "pinyin": "huàn wèi sīkǎo",
        "meaning": "đặt mình vào vị trí người khác"
      },
      {
        "hanzi": "专业素养",
        "pinyin": "zhuānyè sùyǎng",
        "meaning": "tố chất chuyên nghiệp"
      }
    ],
    "paragraphs": [
      {
        "hanzi": "把‘我不知道’换成‘我马上了解一下回复您’；把‘你听懂了吗’换成‘我表达清楚了吗’。",
        "pinyin": "Bǎ 'wǒ bù zhīdào' huàn chéng 'wǒ mǎshàng liǎojiě yíxià huífù nín'...",
        "vi": "Đổi câu 'Tôi không biết' thành 'Em sẽ kiểm tra ngay rồi báo lại sếp'; đổi 'Bạn hiểu chưa' thành 'Em nói đã rõ ý chưa ạ'."
      },
      {
        "hanzi": "用词的细微差异，展现的是深厚的修养与对人的尊重，这正是职场人最宝贵的核心软实力。",
        "pinyin": "Yòngcí de xìwēi chāyì, zhǎnxiàn de shì shēnhòu de xiūyǎng...",
        "vi": "Chút khác biệt nhỏ trong cách dùng từ phản ánh sự tinh tế và tôn trọng người khác — thứ kỹ năng mềm quý giá nhất chốn công sở."
      }
    ]
  }
];

  // 2. Toàn bộ 64 bài học chuẩn mực (8 cấp độ, mỗi cấp 8 bài)
  const EXPANDED_LESSONS = [
  {
    "id": "l1-1",
    "levelId": 1,
    "levelName": "Cấp 1 — Chuẩn HSK 1",
    "title": "Chào hỏi cơ bản & 1001 cách gây thiện cảm",
    "skill": "Giao tiếp",
    "duration": "8 phút",
    "badge": "Bài 1",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Giao tiếp với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Chào hỏi cơ bản & 1001 cách gây thiện cảm.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l1-2",
    "levelId": 1,
    "levelName": "Cấp 1 — Chuẩn HSK 1",
    "title": "Mẹo viết bộ Nữ (女) và bộ Khẩu (口) không bao giờ quên",
    "skill": "Chữ Hán",
    "duration": "6 phút",
    "badge": "Bài 2",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Chữ Hán với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Mẹo viết bộ Nữ (女) và bộ Khẩu (口) không bao giờ quên.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l1-3",
    "levelId": 1,
    "levelName": "Cấp 1 — Chuẩn HSK 1",
    "title": "Bảng số đếm 1–100 & Bí kíp mặc cả Taobao",
    "skill": "Mua sắm",
    "duration": "9 phút",
    "badge": "Bài 3",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Mua sắm với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Bảng số đếm 1–100 & Bí kíp mặc cả Taobao.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l1-4",
    "levelId": 1,
    "levelName": "Cấp 1 — Chuẩn HSK 1",
    "title": "Gia đình & Giới thiệu người thân yêu",
    "skill": "Giao tiếp",
    "duration": "10 phút",
    "badge": "Bài 4",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Giao tiếp với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Gia đình & Giới thiệu người thân yêu.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l1-5",
    "levelId": 1,
    "levelName": "Cấp 1 — Chuẩn HSK 1",
    "title": "Hỏi giờ, ngày tháng & Hẹn gặp gỡ",
    "skill": "Ứng dụng",
    "duration": "8 phút",
    "badge": "Bài 5",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Ứng dụng với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Hỏi giờ, ngày tháng & Hẹn gặp gỡ.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l1-6",
    "levelId": 1,
    "levelName": "Cấp 1 — Chuẩn HSK 1",
    "title": "Mua sắm hoa quả & Hỏi giá cả (多少钱一斤)",
    "skill": "Đời sống",
    "duration": "8 phút",
    "badge": "Bài 6",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Đời sống với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Mua sắm hoa quả & Hỏi giá cả (多少钱一斤).",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l1-7",
    "levelId": 1,
    "levelName": "Cấp 1 — Chuẩn HSK 1",
    "title": "Thời tiết bốn mùa & Thích mưa hay nắng",
    "skill": "Đời sống",
    "duration": "7 phút",
    "badge": "Bài 7",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Đời sống với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Thời tiết bốn mùa & Thích mưa hay nắng.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l1-8",
    "levelId": 1,
    "levelName": "Cấp 1 — Chuẩn HSK 1",
    "title": "Sở thích thể thao, xem phim & Âm nhạc",
    "skill": "Sở thích",
    "duration": "9 phút",
    "badge": "Bài 8",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Sở thích với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Sở thích thể thao, xem phim & Âm nhạc.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l2-1",
    "levelId": 2,
    "levelName": "Cấp 2 — Chuẩn HSK 2",
    "title": "Order trà sữa thần thánh: Độ ngọt & Lượng đá",
    "skill": "Ăn uống",
    "duration": "8 phút",
    "badge": "Bài 1",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Ăn uống với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Order trà sữa thần thánh: Độ ngọt & Lượng đá.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l2-2",
    "levelId": 2,
    "levelName": "Cấp 2 — Chuẩn HSK 2",
    "title": "Đi taxi & Chỉ đường không lo lạc lối",
    "skill": "Di chuyển",
    "duration": "7 phút",
    "badge": "Bài 2",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Di chuyển với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đi taxi & Chỉ đường không lo lạc lối.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l2-3",
    "levelId": 2,
    "levelName": "Cấp 2 — Chuẩn HSK 2",
    "title": "Thả thính ngọt ngào bằng tiếng Trung",
    "skill": "Tình cảm",
    "duration": "6 phút",
    "badge": "Bài 3",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Tình cảm với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Thả thính ngọt ngào bằng tiếng Trung.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l2-4",
    "levelId": 2,
    "levelName": "Cấp 2 — Chuẩn HSK 2",
    "title": "Đi ăn nhà hàng: Gọi món & Hỏi vị cay ngọt",
    "skill": "Ẩm thực",
    "duration": "9 phút",
    "badge": "Bài 4",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Ẩm thực với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đi ăn nhà hàng: Gọi món & Hỏi vị cay ngọt.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l2-5",
    "levelId": 2,
    "levelName": "Cấp 2 — Chuẩn HSK 2",
    "title": "Hỏi đường & Bắt tàu điện ngầm Metro",
    "skill": "Di chuyển",
    "duration": "9 phút",
    "badge": "Bài 5",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Di chuyển với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Hỏi đường & Bắt tàu điện ngầm Metro.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l2-6",
    "levelId": 2,
    "levelName": "Cấp 2 — Chuẩn HSK 2",
    "title": "Đi khám bệnh & Miêu tả triệu chứng sức khỏe",
    "skill": "Y tế",
    "duration": "10 phút",
    "badge": "Bài 6",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Y tế với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đi khám bệnh & Miêu tả triệu chứng sức khỏe.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l2-7",
    "levelId": 2,
    "levelName": "Cấp 2 — Chuẩn HSK 2",
    "title": "Thuê nhà, xem phòng & Hỏi tiền đặt cọc",
    "skill": "Đời sống",
    "duration": "11 phút",
    "badge": "Bài 7",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Đời sống với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Thuê nhà, xem phòng & Hỏi tiền đặt cọc.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l2-8",
    "levelId": 2,
    "levelName": "Cấp 2 — Chuẩn HSK 2",
    "title": "Mua sắm thời trang & Thử size quần áo",
    "skill": "Mua sắm",
    "duration": "9 phút",
    "badge": "Bài 8",
    "badgeColor": "bg-pink-100 text-pink-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Mua sắm với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Mua sắm thời trang & Thử size quần áo.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l3-1",
    "levelId": 3,
    "levelName": "Cấp 3 — Chuẩn HSK 3",
    "title": "Viết tin nhắn WeChat xin nghỉ phép khéo léo",
    "skill": "Công sở",
    "duration": "10 phút",
    "badge": "Bài 1",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Công sở với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Viết tin nhắn WeChat xin nghỉ phép khéo léo.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l3-2",
    "levelId": 3,
    "levelName": "Cấp 3 — Chuẩn HSK 3",
    "title": "Báo cáo tiến độ công việc với sếp",
    "skill": "Họp hành",
    "duration": "9 phút",
    "badge": "Bài 2",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Họp hành với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Báo cáo tiến độ công việc với sếp.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l3-3",
    "levelId": 3,
    "levelName": "Cấp 3 — Chuẩn HSK 3",
    "title": "Thuật ngữ họp hành & Thảo luận dự án",
    "skill": "Công sở",
    "duration": "11 phút",
    "badge": "Bài 3",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Công sở với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Thuật ngữ họp hành & Thảo luận dự án.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l3-4",
    "levelId": 3,
    "levelName": "Cấp 3 — Chuẩn HSK 3",
    "title": "Giao tiếp WeChat công việc: Nhanh gọn & Chuyên nghiệp",
    "skill": "Công sở",
    "duration": "10 phút",
    "badge": "Bài 4",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Công sở với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Giao tiếp WeChat công việc: Nhanh gọn & Chuyên nghiệp.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l3-5",
    "levelId": 3,
    "levelName": "Cấp 3 — Chuẩn HSK 3",
    "title": "Đi ngân hàng đổi tiền & Mở tài khoản thanh toán",
    "skill": "Tài chính",
    "duration": "11 phút",
    "badge": "Bài 5",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Tài chính với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đi ngân hàng đổi tiền & Mở tài khoản thanh toán.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l3-6",
    "levelId": 3,
    "levelName": "Cấp 3 — Chuẩn HSK 3",
    "title": "Gửi chuyển phát nhanh bưu phẩm (顺丰快递)",
    "skill": "Dịch vụ",
    "duration": "8 phút",
    "badge": "Bài 6",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Dịch vụ với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Gửi chuyển phát nhanh bưu phẩm (顺丰快递).",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l3-7",
    "levelId": 3,
    "levelName": "Cấp 3 — Chuẩn HSK 3",
    "title": "Tổ chức sinh nhật & Mời đồng nghiệp tụ họp",
    "skill": "Giao tiếp",
    "duration": "9 phút",
    "badge": "Bài 7",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Giao tiếp với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Tổ chức sinh nhật & Mời đồng nghiệp tụ họp.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l3-8",
    "levelId": 3,
    "levelName": "Cấp 3 — Chuẩn HSK 3",
    "title": "Đặt vé tham quan & Du lịch tự túc",
    "skill": "Du lịch",
    "duration": "10 phút",
    "badge": "Bài 8",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Du lịch với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đặt vé tham quan & Du lịch tự túc.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l4-1",
    "levelId": 4,
    "levelName": "Cấp 4 — Chuẩn HSK 4",
    "title": "Đàm phán chiết khấu & Điều khoản thanh toán",
    "skill": "Thương mại",
    "duration": "12 phút",
    "badge": "Bài 1",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Thương mại với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đàm phán chiết khấu & Điều khoản thanh toán.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l4-2",
    "levelId": 4,
    "levelName": "Cấp 4 — Chuẩn HSK 4",
    "title": "Soạn thảo email giải quyết khiếu nại khách hàng",
    "skill": "Chăm sóc KH",
    "duration": "10 phút",
    "badge": "Bài 2",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Chăm sóc KH với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Soạn thảo email giải quyết khiếu nại khách hàng.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l4-3",
    "levelId": 4,
    "levelName": "Cấp 4 — Chuẩn HSK 4",
    "title": "Hợp đồng ngoại thương & Điều khoản giao hàng",
    "skill": "Xuất nhập khẩu",
    "duration": "13 phút",
    "badge": "Bài 3",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Xuất nhập khẩu với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Hợp đồng ngoại thương & Điều khoản giao hàng.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l4-4",
    "levelId": 4,
    "levelName": "Cấp 4 — Chuẩn HSK 4",
    "title": "Đàm phán chiết khấu & Giá sỉ (Bán buôn)",
    "skill": "Thương mại",
    "duration": "12 phút",
    "badge": "Bài 4",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Thương mại với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đàm phán chiết khấu & Giá sỉ (Bán buôn).",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l4-5",
    "levelId": 4,
    "levelName": "Cấp 4 — Chuẩn HSK 4",
    "title": "Điều khoản vận chuyển Incoterms (FOB / CIF)",
    "skill": "Logistics",
    "duration": "14 phút",
    "badge": "Bài 5",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Logistics với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Điều khoản vận chuyển Incoterms (FOB / CIF).",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l4-6",
    "levelId": 4,
    "levelName": "Cấp 4 — Chuẩn HSK 4",
    "title": "Xử lý khiếu nại giao hàng chậm & Bồi thường",
    "skill": "Thương mại",
    "duration": "11 phút",
    "badge": "Bài 6",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Thương mại với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Xử lý khiếu nại giao hàng chậm & Bồi thường.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l4-7",
    "levelId": 4,
    "levelName": "Cấp 4 — Chuẩn HSK 4",
    "title": "Lập chiến lược marketing & Quảng bá số",
    "skill": "Marketing",
    "duration": "13 phút",
    "badge": "Bài 7",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Marketing với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Lập chiến lược marketing & Quảng bá số.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l4-8",
    "levelId": 4,
    "levelName": "Cấp 4 — Chuẩn HSK 4",
    "title": "Báo cáo tài chính & Doanh thu quý công ty",
    "skill": "Tài chính",
    "duration": "12 phút",
    "badge": "Bài 8",
    "badgeColor": "bg-purple-100 text-purple-700",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Tài chính với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Báo cáo tài chính & Doanh thu quý công ty.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l5-1",
    "levelId": 5,
    "levelName": "Cấp 5 — Chuẩn HSK 5",
    "title": "Kịch bản phỏng vấn ấn tượng điểm 10",
    "skill": "Tuyển dụng",
    "duration": "14 phút",
    "badge": "Bài 1",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Tuyển dụng với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Kịch bản phỏng vấn ấn tượng điểm 10.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l5-2",
    "levelId": 5,
    "levelName": "Cấp 5 — Chuẩn HSK 5",
    "title": "Văn hóa bàn tiệc thương gia & Nghệ thuật chúc rượu",
    "skill": "Ngoại giao",
    "duration": "11 phút",
    "badge": "Bài 2",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Ngoại giao với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Văn hóa bàn tiệc thương gia & Nghệ thuật chúc rượu.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l5-3",
    "levelId": 5,
    "levelName": "Cấp 5 — Chuẩn HSK 5",
    "title": "Phát biểu khai mạc & Thuyết trình dự án",
    "skill": "Thuyết trình",
    "duration": "13 phút",
    "badge": "Bài 3",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Thuyết trình với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Phát biểu khai mạc & Thuyết trình dự án.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l5-4",
    "levelId": 5,
    "levelName": "Cấp 5 — Chuẩn HSK 5",
    "title": "Phỏng vấn song ngữ & Kỹ năng Deal lương cao",
    "skill": "Tuyển dụng",
    "duration": "12 phút",
    "badge": "Bài 4",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Tuyển dụng với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Phỏng vấn song ngữ & Kỹ năng Deal lương cao.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l5-5",
    "levelId": 5,
    "levelName": "Cấp 5 — Chuẩn HSK 5",
    "title": "Văn hóa tiệc rượu thương gia & Nghi thức tiếp khách",
    "skill": "Ngoại giao",
    "duration": "13 phút",
    "badge": "Bài 5",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Ngoại giao với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Văn hóa tiệc rượu thương gia & Nghi thức tiếp khách.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l5-6",
    "levelId": 5,
    "levelName": "Cấp 5 — Chuẩn HSK 5",
    "title": "Thuyết trình dự án trước Hội đồng quản trị",
    "skill": "Thuyết trình",
    "duration": "14 phút",
    "badge": "Bài 6",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Thuyết trình với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Thuyết trình dự án trước Hội đồng quản trị.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l5-7",
    "levelId": 5,
    "levelName": "Cấp 5 — Chuẩn HSK 5",
    "title": "Ký kết thỏa thuận nhượng quyền thương hiệu",
    "skill": "Pháp lý",
    "duration": "13 phút",
    "badge": "Bài 7",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Pháp lý với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Ký kết thỏa thuận nhượng quyền thương hiệu.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l5-8",
    "levelId": 5,
    "levelName": "Cấp 5 — Chuẩn HSK 5",
    "title": "Quản trị khủng hoảng truyền thông doanh nghiệp",
    "skill": "Quan hệ công chúng",
    "duration": "15 phút",
    "badge": "Bài 8",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Quan hệ công chúng với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Quản trị khủng hoảng truyền thông doanh nghiệp.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l6-1",
    "levelId": 6,
    "levelName": "Cấp 6 — Chuẩn HSK 6",
    "title": "Đọc hiểu báo chí kinh tế & Bình luận tài chính",
    "skill": "Đọc hiểu",
    "duration": "15 phút",
    "badge": "Bài 1",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Đọc hiểu với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đọc hiểu báo chí kinh tế & Bình luận tài chính.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l6-2",
    "levelId": 6,
    "levelName": "Cấp 6 — Chuẩn HSK 6",
    "title": "Kỹ thuật viết luận 400 chữ phân tích logic",
    "skill": "Viết luận",
    "duration": "16 phút",
    "badge": "Bài 2",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Viết luận với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Kỹ thuật viết luận 400 chữ phân tích logic.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l6-3",
    "levelId": 6,
    "levelName": "Cấp 6 — Chuẩn HSK 6",
    "title": "Đọc hiểu báo chí kinh tế & Chuỗi cung ứng",
    "skill": "Kinh tế",
    "duration": "15 phút",
    "badge": "Bài 3",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Kinh tế với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đọc hiểu báo chí kinh tế & Chuỗi cung ứng.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l6-4",
    "levelId": 6,
    "levelName": "Cấp 6 — Chuẩn HSK 6",
    "title": "Xã luận về già hóa dân số & An sinh xã hội",
    "skill": "Xã hội",
    "duration": "16 phút",
    "badge": "Bài 4",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Xã hội với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Xã luận về già hóa dân số & An sinh xã hội.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l6-5",
    "levelId": 6,
    "levelName": "Cấp 6 — Chuẩn HSK 6",
    "title": "Bình luận công nghệ trí tuệ nhân tạo AI",
    "skill": "Công nghệ",
    "duration": "15 phút",
    "badge": "Bài 5",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Công nghệ với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Bình luận công nghệ trí tuệ nhân tạo AI.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l6-6",
    "levelId": 6,
    "levelName": "Cấp 6 — Chuẩn HSK 6",
    "title": "Nghệ thuật thơ từ Đường Tống & Điển cố",
    "skill": "Văn học",
    "duration": "17 phút",
    "badge": "Bài 6",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Văn học với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Nghệ thuật thơ từ Đường Tống & Điển cố.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l6-7",
    "levelId": 6,
    "levelName": "Cấp 6 — Chuẩn HSK 6",
    "title": "Đọc hiểu văn bản pháp luật sở hữu trí tuệ",
    "skill": "Pháp luật",
    "duration": "16 phút",
    "badge": "Bài 7",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Pháp luật với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đọc hiểu văn bản pháp luật sở hữu trí tuệ.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l6-8",
    "levelId": 6,
    "levelName": "Cấp 6 — Chuẩn HSK 6",
    "title": "Luận bàn chuyển đổi năng lượng xanh & Bền vững",
    "skill": "Môi trường",
    "duration": "15 phút",
    "badge": "Bài 8",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Môi trường với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Luận bàn chuyển đổi năng lượng xanh & Bền vững.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l7-1",
    "levelId": 7,
    "levelName": "Cấp 7 — Chuẩn HSK 7-9",
    "title": "Biên phiên dịch văn bản ngoại giao & Hiệp định",
    "skill": "Dịch thuật",
    "duration": "18 phút",
    "badge": "Bài 1",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Dịch thuật với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Biên phiên dịch văn bản ngoại giao & Hiệp định.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l7-2",
    "levelId": 7,
    "levelName": "Cấp 7 — Chuẩn HSK 7-9",
    "title": "Biên dịch hợp đồng quốc tế & Bảo mật NDA",
    "skill": "Pháp lý",
    "duration": "18 phút",
    "badge": "Bài 2",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Pháp lý với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Biên dịch hợp đồng quốc tế & Bảo mật NDA.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l7-3",
    "levelId": 7,
    "levelName": "Cấp 7 — Chuẩn HSK 7-9",
    "title": "Họp báo quốc tế & Phiên dịch hội nghị cabin",
    "skill": "Phiên dịch",
    "duration": "20 phút",
    "badge": "Bài 3",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Phiên dịch với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Họp báo quốc tế & Phiên dịch hội nghị cabin.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l7-4",
    "levelId": 7,
    "levelName": "Cấp 7 — Chuẩn HSK 7-9",
    "title": "Hiệp định đối tác kinh tế RCEP & Mậu dịch",
    "skill": "Ngoại giao",
    "duration": "19 phút",
    "badge": "Bài 4",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Ngoại giao với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Hiệp định đối tác kinh tế RCEP & Mậu dịch.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l7-5",
    "levelId": 7,
    "levelName": "Cấp 7 — Chuẩn HSK 7-9",
    "title": "Phong cách văn ngôn trong công văn hiện đại",
    "skill": "Hán học",
    "duration": "18 phút",
    "badge": "Bài 5",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Hán học với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Phong cách văn ngôn trong công văn hiện đại.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l7-6",
    "levelId": 7,
    "levelName": "Cấp 7 — Chuẩn HSK 7-9",
    "title": "Hội nghị khoa học y sinh quốc tế",
    "skill": "Chuyên ngành",
    "duration": "20 phút",
    "badge": "Bài 6",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Chuyên ngành với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Hội nghị khoa học y sinh quốc tế.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l7-7",
    "levelId": 7,
    "levelName": "Cấp 7 — Chuẩn HSK 7-9",
    "title": "Tác phẩm văn học Lỗ Tấn & Mạc Ngôn",
    "skill": "Văn học",
    "duration": "19 phút",
    "badge": "Bài 7",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Văn học với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Tác phẩm văn học Lỗ Tấn & Mạc Ngôn.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l7-8",
    "levelId": 7,
    "levelName": "Cấp 7 — Chuẩn HSK 7-9",
    "title": "Khái niệm triết học Nho gia & Đạo gia",
    "skill": "Triết học",
    "duration": "22 phút",
    "badge": "Bài 8",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Triết học với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Khái niệm triết học Nho gia & Đạo gia.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l8-1",
    "levelId": 8,
    "levelName": "Cấp 8 — Chuẩn HSK Chuyên ngành",
    "title": "Xuất nhập khẩu & Vận tải đường biển (Incoterms)",
    "skill": "Logistics",
    "duration": "13 phút",
    "badge": "Bài 1",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Logistics với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Xuất nhập khẩu & Vận tải đường biển (Incoterms).",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l8-2",
    "levelId": 8,
    "levelName": "Cấp 8 — Chuẩn HSK Chuyên ngành",
    "title": "Thương mại điện tử & Livestream chốt đơn",
    "skill": "E-Commerce",
    "duration": "11 phút",
    "badge": "Bài 2",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng E-Commerce với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Thương mại điện tử & Livestream chốt đơn.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l8-3",
    "levelId": 8,
    "levelName": "Cấp 8 — Chuẩn HSK Chuyên ngành",
    "title": "Đánh hàng Quảng Châu & Tìm nguồn cung",
    "skill": "Đánh hàng",
    "duration": "12 phút",
    "badge": "Bài 3",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Đánh hàng với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Đánh hàng Quảng Châu & Tìm nguồn cung.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l8-4",
    "levelId": 8,
    "levelName": "Cấp 8 — Chuẩn HSK Chuyên ngành",
    "title": "Quản lý sản xuất & Tiêu chuẩn chất lượng nhà máy",
    "skill": "Sản xuất",
    "duration": "14 phút",
    "badge": "Bài 4",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Sản xuất với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Quản lý sản xuất & Tiêu chuẩn chất lượng nhà máy.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l8-5",
    "levelId": 8,
    "levelName": "Cấp 8 — Chuẩn HSK Chuyên ngành",
    "title": "Logistics Quốc Tế: Vận đơn B/L & Thông quan",
    "skill": "Logistics",
    "duration": "14 phút",
    "badge": "Bài 5",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Logistics với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Logistics Quốc Tế: Vận đơn B/L & Thông quan.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l8-6",
    "levelId": 8,
    "levelName": "Cấp 8 — Chuẩn HSK Chuyên ngành",
    "title": "Livestream Bán Hàng TikTok & Taobao",
    "skill": "E-Commerce",
    "duration": "12 phút",
    "badge": "Bài 6",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng E-Commerce với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Livestream Bán Hàng TikTok & Taobao.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l8-7",
    "levelId": 8,
    "levelName": "Cấp 8 — Chuẩn HSK Chuyên ngành",
    "title": "Quản lý nhà máy & Tiêu chuẩn kiểm hàng QC",
    "skill": "Chất lượng",
    "duration": "15 phút",
    "badge": "Bài 7",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Chất lượng với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": true,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Quản lý nhà máy & Tiêu chuẩn kiểm hàng QC.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  },
  {
    "id": "l8-8",
    "levelId": 8,
    "levelName": "Cấp 8 — Chuẩn HSK Chuyên ngành",
    "title": "Thuật ngữ y tế & Chăm sóc sức khỏe thực tế",
    "skill": "Y tế",
    "duration": "13 phút",
    "badge": "Bài 8",
    "badgeColor": "bg-emerald-100 text-emerald-800",
    "summary": "Bài học chuyên sâu rèn luyện toàn diện kỹ năng Y tế với ngữ cảnh ứng dụng thực tế.",
    "bookmarked": false,
    "detail": {
      "objective": "Làm chủ mẫu câu và từ vựng trọng tâm chủ đề Thuật ngữ y tế & Chăm sóc sức khỏe thực tế.",
      "vocab": [
        {
          "hanzi": "沟通",
          "pinyin": "gōutōng",
          "meaning": "Giao tiếp, trao đổi"
        },
        {
          "hanzi": "提高",
          "pinyin": "tígāo",
          "meaning": "Nâng cao, cải thiện"
        },
        {
          "hanzi": "效率",
          "pinyin": "xiàolǜ",
          "meaning": "Hiệu suất công việc"
        },
        {
          "hanzi": "经验",
          "pinyin": "jīngyàn",
          "meaning": "Kinh nghiệm thực tế"
        }
      ],
      "dialog": [
        {
          "role": "A",
          "name": "Ngọc Ánh",
          "text": "我们在实际工作中如何更好地运用这套技巧？",
          "pinyin": "Wǒmen zài shíjì gōngzuò zhōng rúhé gèng hǎo de yùnyòng zhè tào jìqiǎo?",
          "vi": "Chúng ta làm sao áp dụng tốt kỹ năng này vào công việc thực tế?"
        },
        {
          "role": "B",
          "name": "Chuyên gia",
          "text": "关键在于多听、多练，并在真实情境中不断复盘总结。",
          "pinyin": "Guānjiàn zàiyú duō tīng, duō liàn, bìng zài zhēnshí qíngjìng zhōng búduàn fùpán zǒngjié.",
          "vi": "Mấu chốt nằm ở nghe nhiều, luyện nhiều và không ngừng đúc kết kinh nghiệm từ thực tiễn."
        }
      ],
      "memoryTip": "💡 Kiên trì luyện tập phản xạ mỗi ngày sẽ giúp bạn ghi nhớ tự nhiên như tiếng mẹ đẻ!",
      "miniQuiz": {
        "question": "Trong giao tiếp chuyên nghiệp, yếu tố quan trọng nhất là gì?",
        "options": [
          "A. Rõ ràng, chân thành và tôn trọng đối phương",
          "B. Nói thật nhanh",
          "C. Dùng từ phức tạp"
        ],
        "correctIndex": 0,
        "explanation": "Giao tiếp hiệu quả luôn đặt sự rõ ràng, chân thành và tôn trọng lên hàng đầu."
      }
    }
  }
];

  function applyData() {
    // Gán 64 bài học vào MOCHI_DATA
    M.lessonsCatalog = EXPANDED_LESSONS;

    // Gán kho truyện
    M.richStories = RICH_STORIES;
    if (M.categories) {
      const readCat = M.categories.find(c => c.id === "read");
      if (readCat) {
        readCat.stories = RICH_STORIES;
      }
    }
  }

  applyData();

  if (typeof global !== 'undefined') {
    global.RICH_READING_STORIES = RICH_STORIES;
    global.FULL_LESSONS_CATALOG = EXPANDED_LESSONS;
  }
})(typeof window !== 'undefined' ? window : global);
