// ============================================================================
// HỆ SINH THÁI BẢO TÀNG HỒ CHÍ MINH TRỰC TUYẾN
// TRƯỜNG THPT MẠC ĐĨNH CHI & PHƯỜNG PHÚ LÂM
// 3 Trụ cột: (1) Mô hình 3D Bảo tàng • (2) Thư viện Sách Điện tử • (3) Kho Bài viết Học sinh
// ============================================================================

// 1. DỮ LIỆU 5 PHÂN KHU TRONG MÔ HÌNH KIẾN TRÚC 3D PHÒNG BẢO TÀNG
const MUSEUM_ZONES_3D = [
  {
    id: 0,
    code: 'KHU VỰC [1] • VÁCH CHÍNH DIỆN',
    title: 'Bục Khánh Tiết & Tượng Chân Dung Chủ Tịch Hồ Chí Minh',
    position: 'Trung tâm Vách Bắc (Chính diện khi bước vào phòng bảo tàng trường)',
    description: 'Không gian trang nghiêm nhất của phòng bảo tàng với tượng bán thân Chủ tịch Hồ Chí Minh trên bục gỗ sơn son thếp vàng, phía sau là cờ Đảng – cờ Tổ quốc, bảng 5 Điều Bác Hồ dạy và trích dẫn lời căn dặn đối với thế hệ trẻ.',
    exhibits: [
      'Tượng chân dung Chủ tịch Hồ Chí Minh & Thảm đỏ dâng hoa',
      'Bảng vàng 5 Điều Bác Hồ dạy thiếu niên, nhi đồng',
      'Trích dẫn: “Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người”'
    ],
    audioScript: 'Khu vực 1: Sảnh Khánh Tiết chính diện của phòng Bảo tàng Hồ Chí Minh tại Trường Trung học phổ thông Mạc Đĩnh Chi. Đây là nơi thầy cô, học sinh và đoàn viên Phường Phú Lâm dâng hoa, tổ chức lễ kết nạp Đoàn và sinh hoạt dưới cờ.',
    linkedBookId: 'book-thu-hoc-sinh'
  },
  {
    id: 1,
    code: 'KHU VỰC [2] • VÁCH TÂY (BÊN TRÁI)',
    title: 'Vách Biên Niên Sử & Hành Trình 30 Năm Tìm Đường Cứu Nước',
    position: 'Dọc toàn bộ mảng tường bên trái phòng bảo tàng',
    description: 'Trưng bày hệ thống tranh tư liệu, bản đồ phát sáng và biên niên sử từ quê hương Kim Liên (Nghệ An), mái trường Dục Thanh (Phan Thiết), Bến Nhà Rồng (05/06/1911) qua 4 châu lục đến ngày trở về Pác Bó (1941) và đọc Tuyên ngôn Độc lập (02/09/1945).',
    exhibits: [
      'Hình ảnh Làng Sen quê nội và Làng Hoàng Trù quê ngoại',
      'Bản đồ hành trình 30 năm bôn ba qua gần 30 quốc gia',
      'Tư liệu Hội nghị thành lập Đảng (1930) và Quảng trường Ba Đình (02/09/1945)'
    ],
    audioScript: 'Khu vực 2: Vách biên niên sử bên trái phòng bảo tàng, tái hiện cuộc đời và hành trình 30 năm tìm đường cứu nước của người thanh niên Nguyễn Tất Thành từ Bến Nhà Rồng đến ngày đọc bản Tuyên ngôn Độc lập.',
    linkedBookId: 'book-duong-kach-menh'
  },
  {
    id: 2,
    code: 'KHU VỰC [3] • TỦ KÍNH TRUNG TÂM',
    title: 'Tủ Trưng Bày Mô Hình Tàu Latouche-Tréville & Hiện Vật Phục Chế',
    position: 'Cụm tủ kính đặt giữa phòng bảo tàng (có lối đi xung quanh)',
    description: 'Trưng bày các mô hình và hiện vật phục chế trực quan giúp học sinh quan sát từ 4 phía: Mô hình con tàu Đô đốc Latouche-Tréville, đôi dép cao su giản dị, chiếc áo kaki sờn vai và chiếc gậy tre của Bác.',
    exhibits: [
      'Mô hình tàu buôn Pháp Amiral Latouche-Tréville (tỷ lệ thu nhỏ)',
      'Đôi dép cao su & Mũ cối chiến dịch Việt Bắc',
      'Mã QR dán tại tủ kính kết nối thẳng tới giọng đọc thuyết minh trên điện thoại'
    ],
    audioScript: 'Khu vực 3: Tủ kính trưng bày hiện vật trung tâm. Nổi bật là mô hình con tàu Đô đốc Latouche-Tréville nơi Bác rời Bến Nhà Rồng năm 1911 cùng đôi dép cao su biểu tượng cho lối sống giản dị, cần kiệm liêm chính.',
    linkedBookId: 'book-doi-dep-bac'
  },
  {
    id: 3,
    code: 'KHU VỰC [4] • VÁCH ĐÔNG (BÊN PHẢI)',
    title: 'Kệ Tủ Sách Hồ Chí Minh & Chuyên Đề Bác Hồ Với Giáo Dục',
    position: 'Mảng tường và hệ thống kệ gỗ bên phải phòng bảo tàng',
    description: 'Khu vực trưng bày các đầu sách quý viết về Bác, các tác phẩm văn thơ của Người và những bức thư Bác gửi ngành Giáo dục, thầy cô giáo và học sinh. Kết nối đồng bộ với phân khu Thư viện Số trực tuyến bên dưới.',
    exhibits: [
      'Tủ sách truyền thống trưng bày hơn 50 đầu sách về Chủ tịch Hồ Chí Minh',
      'Bản sao Thư gửi học sinh nhân ngày khai trường đầu tiên (9/1945)',
      'Chuyên đề: “Miền Nam luôn trong trái tim tôi” & Cây vú sữa miền Nam'
    ],
    audioScript: 'Khu vực 4: Kệ Tủ sách Hồ Chí Minh và chuyên đề Bác Hồ với sự nghiệp giáo dục. Mọi đầu sách trên kệ đều đã được số hóa thành sách lật trang điện tử ngay tại mục Thư viện của website này.',
    linkedBookId: 'book-nhat-ky-trong-tu'
  },
  {
    id: 4,
    code: 'KHU VỰC [5] • KHU TƯƠNG TÁC PHÍA TRƯỚC',
    title: 'Không Gian Hoạt Động THPT Mạc Đĩnh Chi & Phường Phú Lâm',
    position: 'Khu vực bàn tương tác & bảng vinh danh gần cửa ra vào phòng bảo tàng',
    description: 'Nơi trưng bày hình ảnh các tiết học lịch sử tại bảo tàng, hoạt động ngoại khóa của học sinh THPT Mạc Đĩnh Chi, sinh hoạt chuyên đề của Đoàn Phường Phú Lâm và màn hình tra cứu Kho bài viết học sinh đóng góp.',
    exhibits: [
      'Bảng ảnh hoạt động học tập và làm theo lời Bác của thầy trò THPT Mạc Đĩnh Chi',
      'Góc kết nối Đoàn viên – Thanh niên và nhân dân Phường Phú Lâm',
      'Bàn Sổ vàng lưu niệm và mã QR để học sinh gửi bài viết đóng góp vào Kho'
    ],
    audioScript: 'Khu vực 5: Không gian kết nối giữa Trường Trung học phổ thông Mạc Đĩnh Chi và Phường Phú Lâm, nơi vinh danh các gương điển hình và lưu giữ các bài viết cảm nhận do chính học sinh nhà trường đóng góp.',
    linkedBookId: 'book-di-chuc'
  }
];

// 2. DỮ LIỆU THƯ VIỆN SỐ & SÁCH ĐIỆN TỬ LẬT TRANG (E-BOOK FLIPBOOK)
const LIBRARY_BOOKS = [
  {
    id: 'book-thu-hoc-sinh',
    category: 'giao-duc',
    categoryLabel: 'Bác Hồ với Giáo dục',
    year: 'Tháng 9/1945',
    title: 'Thư Gửi Các Em Học Sinh Nhân Ngày Khai Trường Đầu Tiên',
    author: 'Chủ tịch Hồ Chí Minh',
    summary: 'Bức thư lịch sử Bác gửi học sinh cả nước trong mùa thu độc lập đầu tiên, gửi gắm niềm tin đưa dân tộc bước tới đài vinh quang.',
    pages: [
      {
        header: 'Hoàn cảnh lịch sử • Tháng 9 năm 1945',
        body: 'Ngay sau khi đọc bản Tuyên ngôn Độc lập ngày 02/09/1945 khai sinh nước Việt Nam Dân chủ Cộng hòa, nhân ngày khai trường đầu tiên của nước Việt Nam độc lập, Chủ tịch Hồ Chí Minh đã viết bức thư tâm huyết gửi các em học sinh trên toàn quốc.\n\n“Các em học sinh,\nNgày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Dân chủ Cộng hòa. Tôi đã tưởng tượng thấy trước mắt cái cảnh nhộn nhịp tưng bừng của ngày tựu trường ở khắp các nơi. Các em hết thảy đều vui vẻ vì sau mấy tháng giời nghỉ học, sau bao nhiêu cuộc chuyển biến khác thường, các em lại được gặp thầy gặp bạn.”'
      },
      {
        header: 'Niềm hạnh phúc của thế hệ học sinh nước độc lập',
        body: '“Nhưng sung sướng hơn nữa, từ giờ phút này giở đi, các em bắt đầu được nhận một nền giáo dục hoàn toàn Việt Nam. Các em được hưởng sự may mắn đó là nhờ sự hy sinh của biết bao nhiêu đồng bào các em. Vậy các em nghĩ sao?\n\nTrong năm học tới đây, các em hãy cố gắng, siêng năng học tập, ngoan ngoãn, nghe thầy, yêu bạn. Sau 80 năm giời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần phải xây dựng lại cơ đồ mà tổ tiên đã để lại cho chúng ta, làm sao cho chúng ta theo kịp các nước khác trên hoàn cầu.”'
      },
      {
        header: 'Lời căn dặn bất hủ dành cho tuổi trẻ học đường',
        body: '“Trong công cuộc kiến thiết đó, nước nhà trông mong chờ đợi ở các em rất nhiều.\n\nNon sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.”'
      },
      {
        header: 'Ý nghĩa đối với học sinh THPT Mạc Đĩnh Chi hôm nay',
        body: '“Ngày hôm nay, nhân buổi tựu trường của các em, tôi chỉ biết chúc các em một năm đầy vui vẻ và đầy kết quả tốt đẹp.\nChào các em thân yêu.\nHỒ CHÍ MINH”\n\n— Tại phòng Bảo tàng Hồ Chí Minh Trường THPT Mạc Đĩnh Chi, bức thư này được khắc trang trọng như lời nhắc nhở mỗi học sinh không ngừng rèn đức, luyện tài trong kỷ nguyên số.'
      }
    ]
  },
  {
    id: 'book-duong-kach-menh',
    category: 'tac-pham',
    categoryLabel: 'Tác phẩm Kinh điển',
    year: 'Xuất bản 1927',
    title: 'Tác Phẩm “Đường Kách Mệnh” – Kim Chỉ Nam Giải Phóng Dân Tộc',
    author: 'Nguyễn Ái Quốc',
    summary: 'Tập hợp các bài giảng của Nguyễn Ái Quốc tại các lớp huấn luyện cán bộ ở Quảng Châu (1925–1927), đặt nền móng tư tưởng cho cách mạng Việt Nam.',
    pages: [
      {
        header: 'Chương I • Tư cách một người Kách mệnh',
        body: 'Mở đầu tác phẩm “Đường Kách Mệnh”, Nguyễn Ái Quốc không bàn ngay đến lý luận cao siêu mà đặt vấn đề đạo đức cách mạng lên trang đầu tiên: “Tư cách một người kách mệnh”.\n\nNgười viết ngắn gọn, súc tích:\n“Tự mình phải:\n- Cần kiệm.\n- Hòa mà không tư.\n- Cả quyết sửa lỗi mình.\n- Cẩn thận mà không nhút nhát.\n- Hay hỏi.\n- Nhẫn nại (chịu khó).\n- Hay nghiên cứu, xem xét.\n- Vị công vong tư.\n- Không hiếu danh, không kiêu ngạo.\n- Nói thì phải làm.”'
      },
      {
        header: 'Đối với người & Đối với công việc',
        body: '“Đối với người phải:\n- Với từng người thì khoan thứ.\n- Với Đoàn thể thì nghiêm.\n- Có lòng bày vẽ cho người.\n- Trực mà không táo bạo.\n- Hay xem xét người.\n\nLàm việc phải:\n- Xem xét hoàn cảnh kỹ càng.\n- Quyết đoán.\n- Dũng cảm.\n- Phục tùng đoàn thể.”'
      },
      {
        header: 'Vì sao phải viết bằng văn phong giản dị?',
        body: 'Nguyễn Ái Quốc giải thích rõ mục đích của cuốn sách:\n“Sách này muốn nói cho vắn tắt, dễ hiểu, dễ nhớ. Chắc có người sẽ chê rằng văn chương cụt quằn. Vâng! Đây nói việc gì thì nói rất giản tiện, mau mắn, chắc chắn như hai lần hai là bốn, không tô vẽ trang hoàng gì cả.”'
      },
      {
        header: 'Giá trị Bảo vật Quốc gia',
        body: '“Đường Kách Mệnh” đã được công nhận là Bảo vật Quốc gia của Việt Nam. Đối với học sinh và đoàn viên thanh niên Phường Phú Lâm, những lời dạy về “Hay hỏi, nhẫn nại, hay nghiên cứu xem xét, nói thì phải làm” vẫn giữ nguyên giá trị thời sự trong học tập và rèn luyện hôm nay.'
      }
    ]
  },
  {
    id: 'book-nhat-ky-trong-tu',
    category: 'tac-pham',
    categoryLabel: 'Tác phẩm Văn học',
    year: '1942 – 1943',
    title: 'Tập Thơ “Nhật Ký Trong Tù” (Ngục Trung Nhật Ký)',
    author: 'Hồ Chí Minh',
    summary: '133 bài thơ chữ Hán sáng tác trong hoàn cảnh lao tù khắc nghiệt tại Quảng Tây, sáng ngời tinh thần lạc quan và ý chí thép của người chiến sĩ cách mạng.',
    pages: [
      {
        header: 'Lời Đề Từ Tập Thơ',
        body: '“Thân thể ở trong lao,\nTinh thần ở ngoài lao;\nMuốn nên sự nghiệp lớn,\nTinh thần càng phải cao.”\n\nSáng tác trong suốt 14 tháng bị chính quyền Tưởng Giới Thạch giam giữ vô cớ qua hơn 30 nhà lao tại tỉnh Quảng Tây (Trung Quốc), tập thơ là bức chân dung tự họa tinh thần kiên cường của Chủ tịch Hồ Chí Minh.'
      },
      {
        header: 'Bài thơ: Ngắm Trăng (Vọng Nguyệt)',
        body: 'Nguyên tác chữ Hán:\n“Ngục trung vô tửu diệc vô hoa,\nĐối thử lương tiêu nại nhược hà?\nNhân hướng song tiền khán minh nguyệt,\nNguyệt tòng song khích khán thi gia.”\n\nBản dịch thơ (Nam Trân):\n“Trong tù không rượu cũng không hoa,\nCảnh đẹp đêm nay, khó hững hờ;\nNgười ngắm trăng soi ngoài cửa sổ,\nTrăng nhòm khe cửa ngắm nhà thơ.”'
      },
      {
        header: 'Bài thơ: Nghe Tiếng Giã Gạo',
        body: '“Gạo đem vào giã bao đau đớn,\nGạo giã xong rồi, trắng tựa bông;\nSống ở trên đời người cũng vậy,\nGian nan rèn luyện mới thành công.”\n\nBốn câu thơ giản dị như một triết lý sống sâu sắc dành cho các bạn học sinh trước mỗi kỳ thi và thử thách trong cuộc sống.'
      },
      {
        header: 'Bài thơ: Đi Đường (Tẩu Lộ)',
        body: '“Đi đường mới biết gian lao,\nNúi cao rồi lại núi cao trập trùng;\nNúi cao lên đến tận cùng,\nThu vào tầm mắt muôn trùng nước non.”\n\nTập thơ “Nhật ký trong tù” được giảng dạy trang trọng trong chương trình Ngữ văn THPT và là đầu sách được học sinh Trường THPT Mạc Đĩnh Chi tìm đọc nhiều nhất tại Thư viện.'
      }
    ]
  },
  {
    id: 'book-di-chuc',
    category: 'tac-pham',
    categoryLabel: 'Di sản Thiêng liêng',
    year: '1965 – 1969',
    title: 'Bản Di Chúc Thiêng Liêng Của Chủ Tịch Hồ Chí Minh',
    author: 'Chủ tịch Hồ Chí Minh',
    summary: 'Những lời căn dặn cuối cùng đầy tình thương bao la dành cho toàn Đảng, toàn dân, đặc biệt là việc bồi dưỡng thế hệ cách mạng cho đời sau.',
    pages: [
      {
        header: 'Hoàn cảnh Bác viết Di chúc (1965 – 1969)',
        body: 'Vào dịp tháng 5 hàng năm từ năm 1965 đến năm 1969, Chủ tịch Hồ Chí Minh đều dành thời gian viết và chỉnh sửa tài liệu “Tuyệt đối bí mật” để dặn lại cho toàn Đảng, toàn dân.\n\nMở đầu bản Di chúc, Bác viết:\n“Cuộc chống Mỹ, cứu nước của nhân dân ta dù phải kinh qua gian khổ, hy sinh nhiều hơn nữa, song nhất định thắng lợi hoàn toàn. Đế quốc Mỹ nhất định phải cút khỏi nước ta. Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà.”'
      },
      {
        header: 'Lời căn dặn về Đoàn viên và Thanh niên',
        body: 'Trong Di chúc, Bác dành một đoạn riêng nói về thế hệ trẻ:\n\n“Đoàn viên và thanh niên ta nói chung là tốt, mọi việc đều hăng hái xung phong, không ngại khó khăn, có chí tiến thủ. Đảng cần phải chăm lo giáo dục đạo đức cách mạng cho họ, đào tạo họ thành những người thừa kế xây dựng chủ nghĩa xã hội vừa “hồng” vừa “chuyên”.\n\nBồi dưỡng thế hệ cách mạng cho đời sau là một việc rất quan trọng và rất cần thiết.”'
      },
      {
        header: 'Mong ước cuối cùng của Bác',
        body: '“Suốt đời tôi hết lòng hết sức phục vụ Tổ quốc, phục vụ cách mạng, phục vụ nhân dân. Nay dù phải từ biệt thế giới này, tôi không có điều gì phải hối hận, chỉ tiếc là tiếc rằng không được phục vụ lâu hơn nữa, nhiều hơn nữa.\n\nĐiều mong muốn cuối cùng của tôi là: Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, và góp phần xứng đáng vào sự nghiệp cách mạng thế giới.”'
      },
      {
        header: 'Học tập và làm theo Di chúc của Người',
        body: 'Hơn nửa thế kỷ đã trôi qua, Bản Di chúc của Chủ tịch Hồ Chí Minh vẫn là ngọn đuốc soi đường. Tại Trường THPT Mạc Đĩnh Chi và Phường Phú Lâm, việc bồi dưỡng lý tưởng “vừa hồng vừa chuyên” cho đoàn viên, học sinh luôn là nhiệm vụ trọng tâm hàng đầu.'
      }
    ]
  },
  {
    id: 'book-doi-dep-bac',
    category: 'dao-duc',
    categoryLabel: 'Kể chuyện Đạo đức Bác Hồ',
    year: 'Tư liệu Giáo dục',
    title: 'Câu Chuyện Về Đôi Dép Cao Su & Lối Sống Giản Dị Của Bác',
    author: 'Tuyển tập Kể chuyện Bác Hồ',
    summary: 'Câu chuyện cảm động về đôi dép cao su cắt từ lốp xe quân sự năm 1947 gắn liền với bước chân Người suốt hơn 20 năm.',
    pages: [
      {
        header: 'Sự ra đời của đôi dép cao su năm 1947',
        body: 'Đôi dép của Bác ra đời vào năm 1947 tại chiến khu Việt Bắc, được cắt từ một chiếc lốp ô tô quân sự của thực dân Pháp mà bộ đội ta phục kích thu được tại Đèo Khế.\n\nĐôi dép đo vừa cỡ chân Bác, bốn quai to bản, dày nhưng rất bền chắc. Từ đó, đôi dép cao su trở thành người bạn đường thân thiết của Chủ tịch Hồ Chí Minh.'
      },
      {
        header: 'Đôi dép đi khắp các chiến dịch và năm châu',
        body: 'Trải qua bao mùa mưa nắng kháng chiến, Bác vẫn giữ gìn đôi dép cẩn thận. Khi quai dép bị tụt trên đường hành quân hay đi thăm nông dân làm thủy lợi, các chiến sĩ cảnh vệ chỉ cần dùng một chiếc đinh tre nhỏ đóng chốt lại là Bác lại tiếp tục bước đi.\n\nNgay cả khi đi thăm chính thức Ấn Độ, Liên Xô hay tiếp đón các nguyên thủ quốc gia, Bác vẫn đi đôi dép cao su giản dị ấy.'
      },
      {
        header: 'Chuyện các chiến sĩ muốn đổi dép mới cho Bác',
        body: 'Nhiều lần thấy đôi dép đã quá mòn, anh em phục vụ tìm cách giấu đi để Bác chuyển sang dùng đôi giày da mới. Nhưng sáng ra Bác vẫn nhẹ nhàng hỏi:\n\n“Các chú trả lại dép cho Bác. Dân ta còn nghèo, các cháu thiếu nhi còn nhiều em chưa có dép đi học, đôi dép của Bác vẫn còn dùng tốt, sao lại phải bỏ?”'
      },
      {
        header: 'Bài học thực hành tiết kiệm cho học sinh',
        body: 'Câu chuyện về đôi dép cao su của Bác không chỉ là kỷ vật lịch sử mà còn là bài học gần gũi với mỗi học sinh Trường THPT Mạc Đĩnh Chi: biết trân trọng sức lao động, tiết kiệm từ trang vở, ngọn đèn, hạt gạo và biết sẻ chia cùng những hoàn cảnh khó khăn.'
      }
    ]
  },
  {
    id: 'book-mien-nam',
    category: 'dao-duc',
    categoryLabel: 'Bác Hồ với Miền Nam',
    year: '1954 – 1969',
    title: '“Miền Nam Luôn Trong Trái Tim Tôi” & Cây Vú Sữa Miền Nam',
    author: 'Tư liệu Lịch sử Dân tộc',
    summary: 'Những câu chuyện xúc động về tình cảm sâu nặng của Chủ tịch Hồ Chí Minh dành cho đồng bào, chiến sĩ và thiếu nhi miền Nam.',
    pages: [
      {
        header: 'Món quà từ đất phương Nam năm 1954',
        body: 'Cuối năm 1954, sau Hiệp định Giơ-ne-vơ, má Nguyễn Thị Sảnh cùng đồng bào xã Trí Phải (Cà Mau) đã gửi tặng Bác Hồ một cây vú sữa nhỏ thông qua các cán bộ tập kết ra Bắc.\n\nNhận được cây vú sữa của đồng bào miền Nam gửi tặng, Bác vô cùng xúc động và tự tay chọn vị trí trồng cây ngay bên cạnh ngôi nhà sàn trong Phủ Chủ tịch.'
      },
      {
        header: 'Sự chăm sóc tận tình mỗi sớm mai',
        body: 'Hàng ngày, sau giờ làm việc, Bác đều ra tưới nước, bắt sâu, vun gốc cho cây vú sữa. Những ngày mùa đông miền Bắc giá rét, Bác căn dặn các chú bảo vệ lấy rơm quấn quanh gốc cây và che chắn gió bấc để cây phương Nam không bị lạnh.\n\nNhìn cây vú sữa lớn lên xanh tốt, Bác như thấy hình ảnh đồng bào miền Nam ruột thịt luôn ở ngay bên cạnh mình.'
      },
      {
        header: 'Câu nói bất hủ: “Miền Nam luôn trong trái tim tôi”',
        body: 'Năm 1962, khi tiếp đoàn đại biểu Mặt trận Dân tộc Giải phóng miền Nam Việt Nam ra thăm miền Bắc, Bác đã đặt tay lên ngực trái và nghẹn ngào nói:\n\n“Ở miền Nam, mỗi người, mỗi gia đình đều có một nỗi đau khổ riêng. Gộp cả những nỗi đau khổ riêng của mỗi người, mỗi gia đình lại thì thành nỗi đau khổ của tôi.”'
      },
      {
        header: 'Không gian Văn hóa Hồ Chí Minh tại TP.HCM hôm nay',
        body: 'Tình cảm bao la của Bác dành cho miền Nam là cội nguồn để Đảng bộ và nhân dân Thành phố Hồ Chí Minh – trong đó có Phường Phú Lâm và Trường THPT Mạc Đĩnh Chi – xây dựng Không gian Văn hóa Hồ Chí Minh, để tư tưởng và tình thương của Người mãi tỏa sáng.'
      }
    ]
  }
];

// 3. DỮ LIỆU KHO BÀI VIẾT HỌC SINH ĐÓNG GÓP & HÀNG CHỜ KIỂM DUYỆT
const INITIAL_STUDENT_ARTICLES = [
  {
    id: 'stu-art-1',
    name: 'Nguyễn Minh Khuê',
    className: 'Lớp 12A1 – THPT Mạc Đĩnh Chi',
    topic: 'Cảm nhận Tác phẩm của Bác',
    title: 'Bài học tự học và ý chí vượt khó từ hành trình bôn ba của người thanh niên Nguyễn Tất Thành',
    date: '02/11/2026',
    status: 'approved',
    content: 'Khi bước vào phòng Bảo tàng Hồ Chí Minh của Trường THPT Mạc Đĩnh Chi và dừng chân trước mô hình con tàu Đô đốc Latouche-Tréville, em luôn tự hỏi: Điều gì đã giúp một người thanh niên 21 tuổi với hai bàn tay trắng vượt qua gần 30 quốc gia và tự học thông thạo nhiều ngoại ngữ như tiếng Pháp, tiếng Anh, tiếng Nga, tiếng Trung?\n\nĐọc tư liệu tại thư viện trường, em hiểu rằng mỗi tối sau hơn 10 giờ lao động vất vả trên tàu hay trong căn phòng trọ nhỏ ở Paris, Bác đều viết từ mới lên cánh tay để vừa làm việc vừa nhẩm học, rồi tập viết từng bài báo ngắn cho tờ Người Cùng Khổ (Le Paria). Đối với học sinh lớp 12 chúng em đang đứng trước ngưỡng cửa kỳ thi tốt nghiệp THPT, tấm gương tự học bền bỉ của Bác chính là nguồn động lực lớn nhất để không bao giờ bỏ cuộc trước bài toán khó.'
  },
  {
    id: 'stu-art-2',
    name: 'Trần Gia Huy',
    className: 'Lớp 11A4 – THPT Mạc Đĩnh Chi',
    topic: 'Kể chuyện Đạo đức Hồ Chí Minh',
    title: 'Từ câu chuyện đôi dép cao su của Bác đến lối sống xanh, tiết kiệm của học sinh Mạc Đĩnh Chi',
    date: '01/11/2026',
    status: 'approved',
    content: 'Trong buổi sinh hoạt dưới cờ tuần qua, chi đoàn 11A4 chúng em đã cùng nhau tìm hiểu câu chuyện về đôi dép cao su của Bác Hồ. Dù là Chủ tịch nước, Bác vẫn giữ thói quen tiết kiệm từng trang giấy, viết thư trên mặt sau của những tờ bản tin đã đọc xong và đi đôi dép cao su suốt hơn 20 năm.\n\nTừ câu chuyện ấy, lớp em đã phát động phong trào “Góc học tập xanh – Tiết kiệm theo gương Bác”: tắt quạt và đèn ngay khi rời phòng học, quyên góp sách giáo khoa cũ và dụng cụ học tập gửi tặng các em nhỏ có hoàn cảnh khó khăn trên địa bàn Phường Phú Lâm. Học theo Bác không phải là những điều xa vời mà bắt đầu từ những hành động nhỏ bé mỗi ngày.'
  },
  {
    id: 'stu-art-3',
    name: 'Lê Hoàng Thảo Vy',
    className: 'Đoàn viên Phường Phú Lâm & Cựu HS Mạc Đĩnh Chi',
    topic: 'Tìm hiểu Di tích & Phường Phú Lâm',
    title: 'Tự hào Không gian Văn hóa Hồ Chí Minh gắn kết giữa mái trường Mạc Đĩnh Chi và Phường Phú Lâm',
    date: '30/10/2026',
    status: 'approved',
    content: 'Là một cựu học sinh Trường THPT Mạc Đĩnh Chi và hiện đang tham gia công tác Đoàn tại Phường Phú Lâm, mình vô cùng xúc động khi thấy phòng Bảo tàng Hồ Chí Minh của trường nay đã có phiên bản trực tuyến. Nhờ đó, không chỉ các em học sinh trong trường mà cả bà con nhân dân, các cô chú cựu chiến binh và đoàn viên thanh niên trong phường đều có thể truy cập đọc sách của Bác và nghe thuyết minh ngay trên điện thoại.'
  },
  {
    id: 'stu-art-4',
    name: 'Phạm Quốc Bảo',
    className: 'Lớp 10A8 – THPT Mạc Đĩnh Chi',
    topic: 'Gương sáng Học tập & Làm theo lời Bác',
    title: 'Cảm nghĩ của học sinh khối 10 trong lần đầu tham quan Phòng Bảo tàng Hồ Chí Minh của trường',
    date: 'Hôm nay (Chờ GV duyệt)',
    status: 'pending',
    content: 'Hôm nay là tiết học Lịch sử trải nghiệm đầu tiên của tập thể lớp 10A8 tại Phòng Bảo tàng Hồ Chí Minh của Trường THPT Mạc Đĩnh Chi. Em ấn tượng nhất với bức thư Bác gửi học sinh nhân ngày khai trường tháng 9/1945 được treo trang trọng ở vách chính diện. Em xin gửi bài cảm nhận này vào kho tư liệu của trường với lời hứa sẽ rèn luyện thật tốt trong 3 năm học dưới mái trường Mạc Đĩnh Chi!'
  }
];

const QUIZ_QUESTIONS = [
  {
    question: 'Câu 1: Ngày 05/06/1911, người thanh niên Nguyễn Tất Thành rời Bến cảng Nhà Rồng ra đi tìm đường cứu nước trên con tàu mang tên gì?',
    options: [
      'A. Tàu Amiral Latouche-Tréville',
      'B. Tàu Pháp quốc (France)',
      'C. Tàu Bình Minh',
      'D. Tàu Đông Dương'
    ],
    correctIndex: 0,
    explanation: 'Chính xác! Người lấy tên là Văn Ba và làm phụ bếp trên tàu buôn Pháp Đô đốc Latouche-Tréville.'
  },
  {
    question: 'Câu 2: Trong tác phẩm “Đường Kách Mệnh” (1927), nội dung nào được Nguyễn Ái Quốc đặt ở ngay trang đầu tiên?',
    options: [
      'A. Lịch sử các cuộc cách mạng thế giới',
      'B. Tư cách một người Kách mệnh (23 điều rèn luyện đạo đức)',
      'C. Phương pháp tổ chức hội quần chúng',
      'D. Nghệ thuật quân sự'
    ],
    correctIndex: 1,
    explanation: 'Chính xác! Bác đặt “Tư cách một người kách mệnh” lên đầu tiên vì đạo đức là gốc của người cách mạng.'
  },
  {
    question: 'Câu 3: Để bài viết của học sinh đóng góp được hiển thị công khai trên Kho Bảo Tàng Số của Trường THPT Mạc Đĩnh Chi, bài viết sẽ đi qua quy trình nào?',
    options: [
      'A. Chỉ nộp bản giấy viết tay cuối năm',
      'B. Học sinh gửi qua Biểu mẫu trực tuyến → Lưu vào Hàng chờ kiểm duyệt → Giáo viên / Ban Truyền Thông phê duyệt công khai',
      'C. Không cho phép học sinh gửi bài',
      'D. Phải cài phần mềm riêng trên máy tính'
    ],
    correctIndex: 1,
    explanation: 'Hoàn toàn chính xác! Quy trình 3 bước giúp khuyến khích học sinh đóng góp sôi nổi mà vẫn đảm bảo kiểm duyệt nội dung chuẩn xác.'
  }
];

const INITIAL_GUESTBOOK = [
  {
    name: 'Cô Nguyễn Thị Minh Châu',
    role: 'Giáo viên Lịch sử – THPT Mạc Đĩnh Chi',
    date: 'Hôm nay',
    message: 'Mô hình 3D kèm Thư viện sách lật trang và Kho bài viết giúp học sinh chủ động đọc tư liệu và nộp bài thu hoạch trực tiếp cực kỳ tiện lợi!'
  },
  {
    name: 'Trần Hoàng Nam',
    role: 'Bí thư Chi đoàn khu phố – Phường Phú Lâm',
    date: 'Hôm qua',
    message: 'Giao diện trang trọng, phần sách điện tử lật trang rất dễ đọc trên điện thoại cho đoàn viên và người dân Phường Phú Lâm.'
  }
];

// ============================================================================
// BIẾN TRẠNG THÁI TOÀN CỤC
// ============================================================================
let isoRotX = 55;
let isoRotZ = -35;
let isoScale = 1;
let selectedZoneIdx = 0;
let panoWallIdx = 0;

let activeBook = null;
let activeBookSpreadIndex = 0; // Mỗi spread hiển thị 2 trang (0 -> trang 0,1; 1 -> trang 2,3)

let currentArticleFilter = 'approved';
let teacherModerationMode = true; // Mặc định bật trong bản Demo để BGH/Phường bấm thử duyệt bài ngay

let isAudioPlaying = false;
let currentQuizIdx = 0;
let quizScore = 0;
let quizAnswered = false;

// ============================================================================
// KHỞI TẠO HỆ THỐNG KHI TẢI TRANG
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  init3DMuseumModel();
  selectZone3D(0);
  renderLibraryBooks('all');
  initLibraryFilterTabs();
  initStudentRepository();
  initQuiz();
  initGuestbook();
  initAudioGuideButton();
});

// ============================================================================
// TRỤ CỘT 1: MÔ HÌNH KIẾN TRÚC 3D BẢO TÀNG HCM & GÓC NHÌN 360°
// ============================================================================
function init3DMuseumModel() {
  const stage = document.getElementById('isoStageContainer');
  if (!stage) return;

  let dragging = false;
  let prevX = 0;
  let prevY = 0;

  stage.addEventListener('mousedown', (e) => {
    if (e.target.closest('button') || e.target.closest('.iso-zone-box')) return;
    dragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - prevX;
    const dy = e.clientY - prevY;
    prevX = e.clientX;
    prevY = e.clientY;

    isoRotZ += dx * 0.4;
    isoRotX = Math.max(25, Math.min(75, isoRotX - dy * 0.3));
    applyIsoTransform();
  });

  window.addEventListener('mouseup', () => {
    dragging = false;
  });

  // Hỗ trợ vuốt cảm ứng trên điện thoại / máy tính bảng
  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
      dragging = true;
    }
  }, { passive: true });

  stage.addEventListener('touchmove', (e) => {
    if (!dragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - prevX;
    prevX = e.touches[0].clientX;
    isoRotZ += dx * 0.45;
    applyIsoTransform();
  }, { passive: true });

  stage.addEventListener('touchend', () => {
    dragging = false;
  });
}

function applyIsoTransform() {
  const room = document.getElementById('isoRoom3D');
  if (!room) return;
  const mobileScale = window.innerWidth <= 1024 ? 0.72 : 1;
  room.style.transform = `rotateX(${isoRotX}deg) rotateZ(${isoRotZ}deg) scale(${isoScale * mobileScale})`;
}

window.rotateIsoModel = function(deltaZ, deltaX) {
  isoRotZ += deltaZ;
  isoRotX = Math.max(25, Math.min(75, isoRotX + deltaX));
  applyIsoTransform();
};

window.resetIsoModel = function() {
  isoRotX = 55;
  isoRotZ = -35;
  isoScale = 1;
  applyIsoTransform();
};

window.selectZone3D = function(idx) {
  selectedZoneIdx = idx;
  const zone = MUSEUM_ZONES_3D[idx];
  const panel = document.getElementById('zoneInspectorPanel');

  // Cập nhật trạng thái nút Pin trên sa bàn 3D
  for (let i = 0; i < 5; i++) {
    const pin = document.getElementById(`pinZone${i}`);
    if (pin) pin.classList.toggle('active', i === idx);
  }

  if (!panel || !zone) return;

  panel.innerHTML = `
    <div>
      <span style="display:inline-block; font-size:0.72rem; font-weight:700; color:var(--gold-bright); background:rgba(212,168,83,0.16); border:1px solid var(--gold-primary); padding:0.22rem 0.65rem; border-radius:4px; margin-bottom:0.65rem;">
        ${zone.code}
      </span>
      <h3 style="font-family:var(--font-serif); font-size:1.35rem; color:var(--text-light); margin-bottom:0.45rem;">
        ${zone.title}
      </h3>
      <p style="font-size:0.8rem; color:var(--gold-primary); margin-bottom:0.85rem;">
        📍 Vị trí trong phòng thật: ${zone.position}
      </p>
      <p style="font-size:0.88rem; color:var(--text-light-muted); margin-bottom:1rem; line-height:1.6;">
        ${zone.description}
      </p>

      <div style="background:rgba(255,255,255,0.04); border:1px solid var(--gold-muted); border-radius:8px; padding:0.9rem; margin-bottom:1.1rem;">
        <strong style="font-size:0.78rem; text-transform:uppercase; color:var(--gold-bright); display:block; margin-bottom:0.45rem;">
          Danh mục trưng bày tại phân khu này:
        </strong>
        <ul style="padding-left:1.1rem; font-size:0.84rem; color:var(--text-light); display:flex; flex-direction:column; gap:0.35rem;">
          ${zone.exhibits.map(ex => `<li>${ex}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div style="display:flex; flex-direction:column; gap:0.55rem;">
      <button class="btn-primary" type="button" onclick="speakText('${zone.audioScript.replace(/'/g, "\\'")}')" style="justify-content:center; width:100%;">
        🔊 Nghe thuyết minh Phân khu [${idx + 1}]
      </button>
      <button class="btn-secondary" type="button" onclick="openBookReader('${zone.linkedBookId}')" style="justify-content:center; width:100%;">
        📖 Đọc Tác phẩm liên quan trong Thư viện
      </button>
    </div>
  `;
};

window.switchMuseumViewMode = function(mode) {
  const isoWrap = document.getElementById('isoModelWrapper');
  const panoWrap = document.getElementById('panoModelWrapper');
  const btnIso = document.getElementById('btnModeIso');
  const btnPano = document.getElementById('btnModePano');

  if (mode === 'iso') {
    isoWrap.style.display = 'grid';
    panoWrap.classList.remove('active');
    btnIso.classList.add('active');
    btnPano.classList.remove('active');
  } else {
    isoWrap.style.display = 'none';
    panoWrap.classList.add('active');
    btnIso.classList.remove('active');
    btnPano.classList.add('active');
  }
};

window.stepPanoWall = function(step) {
  panoWallIdx = (panoWallIdx + step + 4) % 4;
  const stage = document.getElementById('panoramaStage');
  const label = document.getElementById('panoWallIndicator');
  if (stage) {
    stage.style.transform = `translateX(-${panoWallIdx * 25}%)`;
  }
  const titles = [
    'Đang xem: Vách 1/4 – Sảnh Khánh Tiết & Tượng Bác',
    'Đang xem: Vách 2/4 – Hành Trình 30 Năm Tìm Đường Cứu Nước',
    'Đang xem: Vách 3/4 – Tủ Sách Hồ Chí Minh & Sự Nghiệp Trồng Người',
    'Đang xem: Vách 4/4 – Hoạt Động THPT Mạc Đĩnh Chi & Phường Phú Lâm'
  ];
  if (label) label.textContent = titles[panoWallIdx];
};

// ============================================================================
// TRỤ CỘT 2: THƯ VIỆN SỐ & TRÌNH ĐỌC SÁCH LẬT TRANG ĐÔI (E-BOOK READER)
// ============================================================================
function initLibraryFilterTabs() {
  const buttons = document.querySelectorAll('.lib-tab-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-lib-filter');
      renderLibraryBooks(filter);
    });
  });
}

function renderLibraryBooks(filter) {
  const grid = document.getElementById('bookshelfGrid');
  if (!grid) return;

  const list = filter === 'all'
    ? LIBRARY_BOOKS
    : LIBRARY_BOOKS.filter(b => b.category === filter);

  grid.innerHTML = list.map(book => `
    <article class="book-card">
      <div class="book-cover-visual">
        <div class="book-3d-spine">
          <div style="font-size:0.6rem; color:var(--gold-bright); letter-spacing:0.08em; text-transform:uppercase;">
            TỦ SÁCH HCM
          </div>
          <div style="font-family:var(--font-serif); font-size:0.82rem; font-weight:700; line-height:1.25; color:#fff;">
            ${book.title.length > 42 ? book.title.slice(0, 42) + '...' : book.title}
          </div>
          <div style="font-size:0.62rem; color:var(--gold-primary);">
            ★ ${book.year}
          </div>
        </div>
      </div>

      <div class="book-card-body">
        <span class="book-meta-badge">${book.categoryLabel} • ${book.year}</span>
        <h3 class="book-title">${book.title}</h3>
        <p class="book-desc">${book.summary}</p>
        <div class="book-actions">
          <button class="btn-read-book" type="button" onclick="openBookReader('${book.id}')">
            📖 Mở đọc sách lật trang (${book.pages.length} trang)
          </button>
          <button class="btn-listen-book" type="button" onclick="speakText('${book.pages[0].body.replace(/\n/g, ' ').replace(/'/g, "\\'")}')" title="Nghe đọc trích đoạn">
            🔊 Nghe
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

window.openBookReader = function(bookId) {
  const book = LIBRARY_BOOKS.find(b => b.id === bookId);
  if (!book) return;

  activeBook = book;
  activeBookSpreadIndex = 0;

  const modal = document.getElementById('bookReaderModal');
  const titleEl = document.getElementById('readerBookTitle');
  const tagEl = document.getElementById('readerBookTag');

  if (titleEl) titleEl.textContent = book.title;
  if (tagEl) tagEl.textContent = `${book.categoryLabel} • ${book.author} (${book.year})`;

  updateBookSpreadView();
  if (modal) modal.classList.add('open');
};

function updateBookSpreadView() {
  if (!activeBook) return;
  const leftIdx = activeBookSpreadIndex * 2;
  const rightIdx = leftIdx + 1;

  const leftPage = activeBook.pages[leftIdx];
  const rightPage = activeBook.pages[rightIdx];

  document.getElementById('leftPageHeader').textContent = leftPage ? leftPage.header : '';
  document.getElementById('leftPageContent').innerHTML = leftPage
    ? leftPage.body.replace(/\n/g, '<br/>')
    : '';
  document.getElementById('leftPageNum').textContent = leftPage ? `Trang ${leftIdx + 1}` : '';

  document.getElementById('rightPageHeader').textContent = rightPage ? rightPage.header : '';
  document.getElementById('rightPageContent').innerHTML = rightPage
    ? rightPage.body.replace(/\n/g, '<br/>')
    : '<em>(Hết tác phẩm)</em>';
  document.getElementById('rightPageNum').textContent = rightPage ? `Trang ${rightIdx + 1}` : '';

  const totalPages = activeBook.pages.length;
  document.getElementById('readerSpreadStatus').textContent =
    `Đang mở Trang ${leftIdx + 1}–${Math.min(rightIdx + 1, totalPages)} / Tổng ${totalPages} trang`;

  const btnListen = document.getElementById('btnListenCurrentPage');
  if (btnListen) {
    btnListen.onclick = () => {
      const combinedText = [
        leftPage ? leftPage.body : '',
        rightPage ? rightPage.body : ''
      ].join(' ');
      window.speakText(combinedText);
    };
  }
}

window.turnBookSpread = function(direction) {
  if (!activeBook) return;
  const maxSpread = Math.ceil(activeBook.pages.length / 2) - 1;
  activeBookSpreadIndex = Math.max(0, Math.min(maxSpread, activeBookSpreadIndex + direction));
  updateBookSpreadView();
};

window.closeBookReader = function() {
  const modal = document.getElementById('bookReaderModal');
  if (modal) modal.classList.remove('open');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
};

// ============================================================================
// TRỤ CỘT 3: KHO BÀI VIẾT HỌC SINH & CỔNG ĐÓNG GÓP / KIỂM DUYỆT
// ============================================================================
function getStudentArticlesStore() {
  try {
    const raw = localStorage.getItem('mdc_student_articles_v2');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [...INITIAL_STUDENT_ARTICLES];
}

function saveStudentArticlesStore(list) {
  try {
    localStorage.setItem('mdc_student_articles_v2', JSON.stringify(list));
  } catch (e) {}
}

function initStudentRepository() {
  renderStudentArticlesList();

  const form = document.getElementById('studentContributionForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameEl = document.getElementById('stuName');
    const classEl = document.getElementById('stuClass');
    const topicEl = document.getElementById('stuTopic');
    const titleEl = document.getElementById('stuTitle');
    const contentEl = document.getElementById('stuContent');
    const notice = document.getElementById('submitNoticeBox');

    if (!nameEl.value.trim() || !titleEl.value.trim() || !contentEl.value.trim()) return;

    const allArticles = getStudentArticlesStore();
    const newEntry = {
      id: 'stu-art-' + Date.now(),
      name: nameEl.value.trim(),
      className: classEl.value.trim() || 'Học sinh THPT Mạc Đĩnh Chi',
      topic: topicEl.value,
      title: titleEl.value.trim(),
      date: 'Vừa gửi xong',
      status: 'pending',
      content: contentEl.value.trim()
    };

    allArticles.unshift(newEntry);
    saveStudentArticlesStore(allArticles);

    nameEl.value = '';
    classEl.value = '';
    titleEl.value = '';
    contentEl.value = '';

    // Chuyển sang tab Hàng chờ duyệt để người trình bày thấy ngay bài vừa gửi
    currentArticleFilter = 'pending';
    document.querySelectorAll('[data-art-filter]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-art-filter') === 'pending');
    });
    renderStudentArticlesList();

    if (notice) {
      notice.style.display = 'block';
      notice.innerHTML = `
        <strong>🎉 Đã nhận bài viết của học sinh!</strong><br/>
        Bài viết đã được đưa vào <strong>“⏳ Hàng chờ Giáo viên duyệt”</strong> bên trái. Bạn có thể bấm nút <strong>“✔ Phê duyệt đăng lên Kho”</strong> ngay trên thẻ bài viết để trải nghiệm quy trình duyệt bài!
      `;
    }
  });
}

window.filterStudentArticles = function(filterType, btnElement) {
  currentArticleFilter = filterType;
  document.querySelectorAll('[data-art-filter]').forEach(b => b.classList.remove('active'));
  if (btnElement) btnElement.classList.add('active');
  renderStudentArticlesList();
};

window.toggleTeacherModerationMode = function() {
  teacherModerationMode = !teacherModerationMode;
  const label = document.getElementById('modStatusLabel');
  if (label) {
    label.textContent = teacherModerationMode ? 'ĐANG BẬT (Demo)' : 'ĐANG TẮT (Chế độ Khách)';
    label.style.color = teacherModerationMode ? 'var(--gold-bright)' : '#9ca3af';
  }
  renderStudentArticlesList();
};

function renderStudentArticlesList() {
  const grid = document.getElementById('studentArticlesGrid');
  if (!grid) return;

  const all = getStudentArticlesStore();
  const approvedCount = all.filter(a => a.status === 'approved').length;
  const pendingCount = all.filter(a => a.status === 'pending').length;

  const cApp = document.getElementById('countApproved');
  const cPen = document.getElementById('countPending');
  if (cApp) cApp.textContent = approvedCount;
  if (cPen) cPen.textContent = pendingCount;

  const filtered = currentArticleFilter === 'all'
    ? all
    : all.filter(a => a.status === currentArticleFilter);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 2rem; text-align: center; background: rgba(255,255,255,0.03); border: 1px dashed var(--gold-muted); border-radius: 12px; color: var(--text-light-muted);">
        Hiện không có bài viết nào trong mục này. Hãy thử gửi một bài viết mới ở biểu mẫu bên phải!
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(art => {
    const isApproved = art.status === 'approved';
    const excerpt = art.content.length > 140 ? art.content.slice(0, 140) + '...' : art.content;

    return `
      <article class="student-article-card">
        <div class="article-badge-row">
          <span class="article-topic-tag">${art.topic}</span>
          <span class="article-status-tag ${isApproved ? 'approved' : 'pending'}">
            ${isApproved ? '✔ Đã duyệt công khai' : '⏳ Chờ GV duyệt'}
          </span>
        </div>

        <h3 class="student-article-title">${art.title}</h3>
        <div class="student-author-meta">
          ✍️ ${art.name} • <span style="opacity:0.85; font-weight:400;">${art.className} (${art.date})</span>
        </div>
        <p class="student-article-excerpt">${excerpt}</p>

        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:auto;">
          <button class="btn-secondary" type="button" onclick="openStudentArticleDetail('${art.id}')" style="flex:1; padding:0.5rem 0.75rem; font-size:0.8rem; justify-content:center;">
            📄 Đọc toàn văn
          </button>
          <button class="btn-secondary" type="button" onclick="speakText('${art.title.replace(/'/g, "\\'")}. Bài viết của học sinh ${art.name}. ${art.content.replace(/\n/g, ' ').replace(/'/g, "\\'")}')" style="padding:0.5rem 0.75rem; font-size:0.8rem;">
            🔊 Nghe
          </button>
        </div>

        ${teacherModerationMode ? `
          <div style="margin-top:0.75rem; padding-top:0.75rem; border-top:1px dashed rgba(212,168,83,0.25); display:flex; gap:0.5rem;">
            ${!isApproved ? `
              <button type="button" onclick="approveStudentArticle('${art.id}')" style="flex:1; background:#15803d; color:#fff; border:none; padding:0.45rem 0.65rem; border-radius:4px; font-size:0.78rem; font-weight:700; cursor:pointer;">
                ✔ Phê duyệt đăng lên Kho
              </button>
            ` : `
              <span style="font-size:0.74rem; color:#86efac; display:flex; align-items:center;">✔ Đang hiển thị trên Kho</span>
            `}
            <button type="button" onclick="deleteStudentArticle('${art.id}')" style="background:rgba(185,28,28,0.3); color:#fca5a5; border:1px solid rgba(248,113,113,0.4); padding:0.42rem 0.65rem; border-radius:4px; font-size:0.75rem; cursor:pointer; margin-left:auto;">
              Xóa
            </button>
          </div>
        ` : ''}
      </article>
    `;
  }).join('');
}

window.approveStudentArticle = function(id) {
  const all = getStudentArticlesStore();
  const item = all.find(a => a.id === id);
  if (item) {
    item.status = 'approved';
    item.date = 'Đã duyệt hôm nay';
    saveStudentArticlesStore(all);
    currentArticleFilter = 'approved';
    document.querySelectorAll('[data-art-filter]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-art-filter') === 'approved');
    });
    renderStudentArticlesList();
  }
};

window.deleteStudentArticle = function(id) {
  const all = getStudentArticlesStore().filter(a => a.id !== id);
  saveStudentArticlesStore(all);
  renderStudentArticlesList();
};

window.openStudentArticleDetail = function(id) {
  const all = getStudentArticlesStore();
  const art = all.find(a => a.id === id);
  if (!art) return;

  const modal = document.getElementById('articleDetailModal');
  const body = document.getElementById('articleModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <span style="display:inline-block; background:rgba(212,168,83,0.18); color:var(--gold-bright); padding:0.25rem 0.75rem; border-radius:4px; font-size:0.78rem; margin-bottom:0.75rem;">
      ${art.topic}
    </span>
    <h3 style="font-family:var(--font-serif); font-size:1.55rem; color:var(--text-light); margin-bottom:0.45rem;">
      ${art.title}
    </h3>
    <p style="font-size:0.86rem; color:var(--gold-primary); margin-bottom:1.25rem;">
      ✍️ Tác giả: <strong>${art.name}</strong> • ${art.className} • (${art.date})
    </p>
    <div style="background:rgba(0,0,0,0.35); border-left:3px solid var(--gold-primary); padding:1.35rem; border-radius:8px; margin-bottom:1.5rem; font-size:0.98rem; color:var(--bg-parchment); line-height:1.8;">
      ${art.content.replace(/\n/g, '<br/>')}
    </div>
    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
      <button class="btn-primary" type="button" onclick="speakText('${art.title.replace(/'/g, "\\'")}. Bài viết của ${art.name}. ${art.content.replace(/\n/g, ' ').replace(/'/g, "\\'")}')">
        🔊 Nghe đọc bài viết này
      </button>
      <button class="btn-secondary" type="button" onclick="closeArticleModal()">
        Đóng cửa sổ
      </button>
    </div>
  `;

  modal.classList.add('open');
};

window.closeArticleModal = function() {
  const modal = document.getElementById('articleDetailModal');
  if (modal) modal.classList.remove('open');
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
};

// ============================================================================
// THUYẾT MINH GIỌNG NÓI TỰ ĐỘNG (WEB SPEECH API)
// ============================================================================
window.speakText = function(text) {
  const btnGuide = document.getElementById('btnAudioGuide');
  const labelGuide = document.getElementById('audioGuideLabel');

  if (!('speechSynthesis' in window)) {
    alert('Nội dung thuyết minh: ' + text);
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.96;

  utterance.onstart = () => {
    isAudioPlaying = true;
    if (btnGuide) btnGuide.classList.add('playing');
    if (labelGuide) labelGuide.textContent = 'Đang thuyết minh... (Bấm để dừng)';
  };

  utterance.onend = () => {
    isAudioPlaying = false;
    if (btnGuide) btnGuide.classList.remove('playing');
    if (labelGuide) labelGuide.textContent = 'Thuyết minh tự động';
  };

  window.speechSynthesis.speak(utterance);
};

function initAudioGuideButton() {
  const btnGuide = document.getElementById('btnAudioGuide');
  const labelGuide = document.getElementById('audioGuideLabel');
  if (!btnGuide) return;

  const welcomeNarration = 'Chào mừng quý đại biểu, thầy cô giáo, các em học sinh Trường Trung học phổ thông Mạc Đĩnh Chi và nhân dân Phường Phú Lâm đến với Không gian văn hóa Hồ Chí Minh trực tuyến. Trang web bao gồm 3 phân khu trọng tâm: Một là Mô hình kiến trúc 3D phòng bảo tàng của nhà trường; Hai là Thư viện sách điện tử lật trang; và Ba là Kho bài viết do học sinh đóng góp có kiểm duyệt.';

  btnGuide.addEventListener('click', () => {
    if (isAudioPlaying) {
      window.speechSynthesis.cancel();
      isAudioPlaying = false;
      btnGuide.classList.remove('playing');
      if (labelGuide) labelGuide.textContent = 'Thuyết minh tự động';
    } else {
      window.speakText(welcomeNarration);
    }
  });
}

// ============================================================================
// TRẮC NGHIỆM & SỔ VÀNG LƯU NIỆM
// ============================================================================
function initQuiz() {
  renderQuizStep();
}

function renderQuizStep() {
  const box = document.getElementById('quizContainer');
  if (!box) return;

  if (currentQuizIdx >= QUIZ_QUESTIONS.length) {
    box.innerHTML = `
      <div style="text-align: center; padding: 1.5rem 1rem; background: rgba(212,168,83,0.1); border: 1px dashed var(--gold-primary); border-radius: 12px;">
        <div style="font-size: 2.4rem; margin-bottom: 0.5rem;">🏅</div>
        <h4 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--gold-bright); margin-bottom: 0.4rem;">
          Chứng nhận Tham quan & Tìm hiểu
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-light-muted); margin-bottom: 1rem;">
          Bạn đã hoàn thành <strong>${quizScore}/${QUIZ_QUESTIONS.length}</strong> câu hỏi tại Không gian Văn hóa Hồ Chí Minh – Trường THPT Mạc Đĩnh Chi & Phường Phú Lâm!
        </p>
        <button class="btn-primary" type="button" onclick="resetQuiz()">Làm lại lượt mới</button>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[currentQuizIdx];
  quizAnswered = false;

  box.innerHTML = `
    <div style="font-size: 0.8rem; color: var(--gold-primary); margin-bottom: 0.4rem;">
      Câu hỏi ${currentQuizIdx + 1} / ${QUIZ_QUESTIONS.length} • Điểm: ${quizScore}
    </div>
    <h4 style="font-size: 1rem; margin-bottom: 1rem; color: var(--text-light);">
      ${q.question}
    </h4>
    <div id="quizOptionsList">
      ${q.options.map((opt, idx) => `
        <button class="quiz-option-btn" type="button" onclick="selectQuizOption(${idx})">
          ${opt}
        </button>
      `).join('')}
    </div>
    <div id="quizFeedback" style="margin-top: 0.65rem; font-size: 0.86rem; min-height: 1.4rem;"></div>
  `;
}

window.selectQuizOption = function(selectedIndex) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = QUIZ_QUESTIONS[currentQuizIdx];
  const buttons = document.querySelectorAll('#quizOptionsList .quiz-option-btn');
  const feedback = document.getElementById('quizFeedback');

  buttons.forEach((btn, i) => {
    if (i === q.correctIndex) btn.classList.add('correct');
    else if (i === selectedIndex) btn.classList.add('wrong');
  });

  if (selectedIndex === q.correctIndex) {
    quizScore++;
    feedback.innerHTML = `<span style="color: #4ade80;">✔ ${q.explanation}</span>`;
  } else {
    feedback.innerHTML = `<span style="color: #fca5a5;">✘ ${q.explanation}</span>`;
  }

  setTimeout(() => {
    currentQuizIdx++;
    renderQuizStep();
  }, 2400);
};

window.resetQuiz = function() {
  currentQuizIdx = 0;
  quizScore = 0;
  renderQuizStep();
};

function initGuestbook() {
  const form = document.getElementById('guestbookForm');
  renderGuestbookEntries();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('guestName');
      const roleInput = document.getElementById('guestRole');
      const msgInput = document.getElementById('guestMessage');

      if (!nameInput.value.trim() || !msgInput.value.trim()) return;

      const saved = getGuestbookData();
      saved.unshift({
        name: nameInput.value.trim(),
        role: roleInput.value.trim() || 'Khách tham quan Phường Phú Lâm',
        date: 'Vừa xong',
        message: msgInput.value.trim()
      });

      localStorage.setItem('bthcm_guestbook', JSON.stringify(saved));
      nameInput.value = '';
      msgInput.value = '';
      renderGuestbookEntries();
    });
  }
}

function getGuestbookData() {
  try {
    const raw = localStorage.getItem('bthcm_guestbook');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [...INITIAL_GUESTBOOK];
}

function renderGuestbookEntries() {
  const container = document.getElementById('guestbookEntries');
  if (!container) return;

  const entries = getGuestbookData();
  container.innerHTML = entries.map(entry => `
    <div class="guest-entry">
      <div style="font-size:0.78rem; color:var(--gold-bright); font-weight:700; margin-bottom:0.2rem;">
        ${entry.name} • <span style="font-weight:400; opacity:0.85;">${entry.role} (${entry.date})</span>
      </div>
      <div style="font-size:0.86rem; color:var(--text-light);">“${entry.message}”</div>
    </div>
  `).join('');
}
