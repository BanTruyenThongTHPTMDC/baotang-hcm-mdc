// ============================================================================
// HỆ THỐNG DỮ LIỆU TRUNG TÂM & QUẢN TRỊ NO-CODE (MUSEUM CMS ENGINE v2.0)
// Không Gian Văn Hóa Hồ Chí Minh - Chi bộ Trường THPT Mạc Đĩnh Chi & Phường Phú Lâm
// ============================================================================

const STORAGE_KEY_CMS = 'bthcm_museum_cms_v2';
const STORAGE_KEY_GUESTBOOK = 'bthcm_guestbook';

const DEFAULT_MUSEUM_DATA = {
  general: {
    partySlogan: 'ĐẢNG CỘNG SẢN VIỆT NAM QUANG VINH MUÔN NĂM • HỌC TẬP VÀ LÀM THEO TƯ TƯỞNG, ĐẠO ĐỨC, PHONG CÁCH HỒ CHÍ MINH',
    partyCellBadge: 'Chi bộ THPT Mạc Đĩnh Chi • Đảng bộ Phường Phú Lâm',
    brandSub: 'Chi bộ Trường THPT Mạc Đĩnh Chi • Đảng bộ Phường Phú Lâm',
    brandTitle: 'Không Gian Văn Hóa Hồ Chí Minh',
    heroBadge: 'Công trình Chào mừng • Chi bộ THPT Mạc Đĩnh Chi & Đảng bộ Phường Phú Lâm',
    heroTitleMain: 'Không Gian Văn Hóa Hồ Chí Minh',
    heroTitleSub: 'Hệ Thống Bảo Tàng Số, Lưu Trữ Lịch Sử Đảng & Phòng Truyền Thống 360°',
    heroQuote: '“Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.”',
    heroQuoteAuthor: '— Chủ tịch Hồ Chí Minh',
    heroDesc: 'Công trình số hóa chuẩn mực của Chi bộ Trường THPT Mạc Đĩnh Chi phối hợp cùng Đảng bộ Phường Phú Lâm. Tích hợp đồng bộ không gian trưng bày thực tế 360°, biên niên sử cách mạng, kho lưu trữ hiện vật chuẩn bảo tàng học và hệ thống quản trị trực quan không cần lập trình (No-Code).',
    monumentTitle: 'Chi Bộ Trường THPT Mạc Đĩnh Chi',
    monumentSub: 'Địa chỉ Đỏ Giáo dục Lý tưởng Cách mạng – Liên kết Đảng bộ Phường Phú Lâm',
    heroCustomImage: '',
    stat1Num: '04',
    stat1Label: 'Phân khu Vách 360°',
    stat2Num: '06+',
    stat2Label: 'Hồ sơ Hiện vật Số hóa',
    stat3Num: '100%',
    stat3Label: 'Quản trị No-Code',
    welcomeNarration: 'Nhiệt liệt chào mừng các đồng chí lãnh đạo, quý đại biểu, các thầy cô giáo, đoàn viên, thanh niên và các em học sinh Trường Trung học phổ thông Mạc Đĩnh Chi cùng Đảng bộ, nhân dân Phường Phú Lâm đến với Không gian văn hóa Hồ Chí Minh trực tuyến. Tại đây, quý vị có thể tham quan phòng truyền thống 360 độ, tra cứu biên niên sử Đảng và Chủ tịch Hồ Chí Minh, nghe thuyết minh từng hồ sơ hiện vật và ghi sổ vàng truyền thống.',
    footerTitle: 'KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH TRỰC TUYẾN – CHI BỘ TRƯỜNG THPT MẠC ĐĨNH CHI & ĐẢNG BỘ PHƯỜNG PHÚ LÂM',
    footerSub: 'Thực hiện: Ban Truyền Thông & Chi đoàn Giáo viên Trường THPT Mạc Đĩnh Chi • Hệ thống Bảo tàng Số & Quản trị No-Code'
  },

  walls: [
    {
      id: 'wall-1',
      tabTitle: '1. Vách Khánh Tiết (Chính diện)',
      bannerTitle: 'Vách 1 • Sảnh Khánh Tiết Đảng Kỳ – Quốc Kỳ & Tượng Đài Bác',
      directionLabel: 'Hướng Bắc (Vách 1 - Chính diện)',
      bgImage: '',
      exhibits: [
        {
          id: 'ex-1a',
          category: 'Bảng Trích Dẫn Bên Trái',
          title: '5 Điều Bác Hồ Dạy Thiếu Niên, Nhi Đồng',
          desc: 'Được niêm yết trang trọng tại sảnh chính diện. Bấm vào điểm chạm (+) để mở hồ sơ và nghe giọng đọc chuẩn.',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-5',
          customSpeech: '',
          imageUrl: ''
        },
        {
          id: 'ex-1b',
          category: 'Bục Khánh Tiết Trung Tâm',
          title: 'Tượng Chân Dung Chủ Tịch Hồ Chí Minh & Đảng Kỳ',
          desc: 'Không gian thiêng liêng tổ chức Lễ Chào cờ, Lễ Kết nạp Đảng viên mới và sinh hoạt chính trị của Chi bộ nhà trường cùng Đảng bộ Phường Phú Lâm.',
          isCenterpiece: true,
          actionType: 'speech',
          targetId: '',
          customSpeech: 'Đảng Cộng sản Việt Nam quang vinh muôn năm! Nước Cộng hòa xã hội chủ nghĩa Việt Nam muôn năm! Chủ tịch Hồ Chí Minh vĩ đại sống mãi trong sự nghiệp của chúng ta!',
          imageUrl: ''
        },
        {
          id: 'ex-1c',
          category: 'Bảng Trích Dẫn Bên Phải',
          title: 'Thư Bác Gửi Học Sinh Khai Trường (9/1945)',
          desc: 'Lời căn dặn bất hủ của Người về sứ mệnh đưa dân tộc Việt Nam bước tới đài vinh quang sánh vai cùng các cường quốc năm châu.',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-2',
          customSpeech: '',
          imageUrl: ''
        }
      ]
    },
    {
      id: 'wall-2',
      tabTitle: '2. Vách Hành Trình Cứu Nước & Lập Đảng',
      bannerTitle: 'Vách 2 • Hành Trình 30 Năm Tìm Đường Cứu Nước & Sáng Lập Đảng (1911 – 1941)',
      directionLabel: 'Hướng Đông (Vách 2)',
      bgImage: '',
      exhibits: [
        {
          id: 'ex-2a',
          category: 'Tủ Kính Mô Hình Lịch Sử',
          title: 'Tàu Amiral Latouche-Tréville (05/06/1911)',
          desc: 'Mô hình con tàu tại Bến Nhà Rồng nơi người thanh niên Nguyễn Tất Thành rời Tổ quốc đi tìm đường cứu nước.',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-1',
          customSpeech: '',
          imageUrl: ''
        },
        {
          id: 'ex-2b',
          category: 'Bản Đồ & Tư Liệu Đảng',
          title: 'Hành Trình Qua 4 Châu Lục & Mùa Xuân Lập Đảng 1930',
          desc: 'Sơ đồ trực quan từ Bến Nhà Rồng (1911), tiếp thu Chủ nghĩa Mác - Lênin, sáng lập Đảng Cộng sản Việt Nam (3/2/1930) đến Pác Bó (1941).',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-4',
          customSpeech: '',
          imageUrl: ''
        },
        {
          id: 'ex-2c',
          category: 'Tủ Hiện Vật Đạo Đức Cách Mạng',
          title: 'Đôi Dép Cao Su & Áo Kaki Giản Dị',
          desc: 'Biểu tượng sáng ngời về đạo đức cần, kiệm, liêm, chính, chí công vô tư của người chiến sĩ cộng sản vĩ đại.',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-3',
          customSpeech: '',
          imageUrl: ''
        }
      ]
    },
    {
      id: 'wall-3',
      tabTitle: '3. Vách Tư Tưởng & Tủ Sách Đảng',
      bannerTitle: 'Vách 3 • Tủ Sách Tư Tưởng Hồ Chí Minh & Sự Nghiệp Trồng Người',
      directionLabel: 'Hướng Nam (Vách 3)',
      bgImage: '',
      exhibits: [
        {
          id: 'ex-3a',
          category: 'Kệ Sách Lý Luận Chính Trị Số Hóa',
          title: '“Đường Kách Mệnh”, “Nhật Ký Trong Tù” & Văn Kiện Đảng',
          desc: 'Tích hợp mã QR cho phép đảng viên, giáo viên và học sinh quét đọc trực tiếp trên thiết bị di động.',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-4',
          customSpeech: '',
          imageUrl: ''
        },
        {
          id: 'ex-3b',
          category: 'Chuyên Đề Giáo Dục',
          title: 'Bác Hồ Với Ngành Giáo Dục & Thế Hệ Trẻ',
          desc: 'Tư liệu, hình ảnh Chủ tịch Hồ Chí Minh thăm các trường học và căn dặn đội ngũ nhà giáo, đoàn viên thanh niên.',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-2',
          customSpeech: '',
          imageUrl: ''
        },
        {
          id: 'ex-3c',
          category: 'Chuyên Đề Miền Nam Thành Đồng',
          title: 'Bác Hồ Với Đồng Bào Miền Nam & Sài Gòn – Gia Định',
          desc: 'Hình ảnh cây vú sữa miền Nam và tình cảm thiêng liêng của Bác dành cho nhân dân miền Nam ruột thịt.',
          isCenterpiece: false,
          actionType: 'speech',
          targetId: '',
          customSpeech: 'Miền Nam luôn ở trong trái tim tôi. Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi.',
          imageUrl: ''
        }
      ]
    },
    {
      id: 'wall-4',
      tabTitle: '4. Vách Chi Bộ Trường & Phường Phú Lâm',
      bannerTitle: 'Vách 4 • Hoạt Động Chi Bộ THPT Mạc Đĩnh Chi & Đảng Bộ Phường Phú Lâm',
      directionLabel: 'Hướng Tây (Vách 4)',
      bgImage: '',
      exhibits: [
        {
          id: 'ex-4a',
          category: 'Sinh Hoạt Chi Bộ & Chuyên Đề',
          title: 'Tiết Học Lịch Sử & Lễ Kết Nạp Đoàn – Đảng Tại Bảo Tàng',
          desc: 'Không gian giáo dục trực quan, bồi dưỡng quần chúng ưu tú và học sinh tiêu biểu của Trường THPT Mạc Đĩnh Chi.',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-6',
          customSpeech: '',
          imageUrl: ''
        },
        {
          id: 'ex-4b',
          category: 'Liên Kết Địa Phương',
          title: 'Đảng Bộ, Đoàn Viên & Nhân Dân Phường Phú Lâm Tham Quan',
          desc: 'Hoạt động phối hợp xây dựng Không gian Văn hóa Hồ Chí Minh gắn kết chặt chẽ giữa nhà trường và địa phương.',
          isCenterpiece: false,
          actionType: 'artifact',
          targetId: 'art-6',
          customSpeech: '',
          imageUrl: ''
        },
        {
          id: 'ex-4c',
          category: 'Bàn Tương Tác Chính Trị Số',
          title: 'Ghi Sổ Vàng Truyền Thống & Trắc Nghiệm Nhận Thức',
          desc: 'Bấm để di chuyển xuống phân khu Trắc nghiệm Tư tưởng Hồ Chí Minh và ghi Sổ vàng lưu niệm trực tuyến.',
          isCenterpiece: false,
          actionType: 'scroll',
          targetId: 'tuong-tac',
          customSpeech: '',
          imageUrl: ''
        }
      ]
    }
  ],

  timeline: [
    {
      id: 'tl-1',
      period: '1890 – 1911',
      title: 'Quê hương Kim Liên & Tuổi trẻ nuôi chí lớn tìm đường cứu nước',
      summary: 'Sinh ngày 19/05/1890 tại làng Sen (Kim Liên, Nam Đàn, Nghệ An) trong một gia đình nhà nho yêu nước. Chứng kiến cảnh nước mất nhà tan và sự bế tắc của các phong trào yêu nước đương thời, người thanh niên Nguyễn Tất Thành sớm hun đúc ý chí ra đi tìm một con đường giải phóng dân tộc hoàn toàn mới.',
      takeaway: 'Giá trị giáo dục tại Phòng truyền thống: Bồi đắp lòng yêu nước, truyền thống hiếu học và ý chí tự lực tự cường cho thế hệ học sinh THPT Mạc Đĩnh Chi.',
      quote: '“Tôi muốn đi ra nước ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.”',
      artifactName: 'Mô hình Nhà tranh Làng Sen & Trường Dục Thanh (Hồ sơ: HS-MDC-001)'
    },
    {
      id: 'tl-2',
      period: '1911 – 1930',
      title: 'Bôn ba 4 châu lục, tiếp thu Chủ nghĩa Mác – Lênin & Sáng lập Đảng (03/02/1930)',
      summary: 'Ngày 05/06/1911, từ Bến cảng Nhà Rồng trên tàu Amiral Latouche-Tréville, Người đi qua gần 30 quốc gia. Năm 1920, Người đọc Sơ thảo luận cương của V.I. Lênin, tìm thấy con đường cứu nước theo cách mạng vô sản. Mùa xuân năm 1930, Người chủ trì Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam – bước ngoặt vĩ đại của lịch sử dân tộc.',
      takeaway: 'Trọng tâm sinh hoạt chính trị: Khẳng định vai trò lãnh đạo duy nhất của Đảng Cộng sản Việt Nam đối với sự nghiệp cách mạng Việt Nam.',
      quote: '“Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản.”',
      artifactName: 'Tàu Amiral Latouche-Tréville & Tác phẩm Đường Kách Mệnh (1927)'
    },
    {
      id: 'tl-3',
      period: '1941 – 1954',
      title: 'Trở về Tổ quốc, Tuyên ngôn Độc lập (02/09/1945) & Kháng chiến Kiến quốc',
      summary: 'Mùa xuân 1941, Người trở về Pác Bó (Cao Bằng) trực tiếp lãnh đạo phong trào cách mạng. Ngày 02/09/1945 tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa. Tháng 9/1945, Người gửi thư cho học sinh nhân ngày khai trường đầu tiên của nước Việt Nam độc lập.',
      takeaway: 'Điểm nhấn gắn kết nhà trường: Toàn văn Thư Bác gửi học sinh (9/1945) được trưng bày trang trọng tại Vách Khánh tiết số 1.',
      quote: '“Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.”',
      artifactName: 'Bản sao Tuyên ngôn Độc lập & Thư gửi Học sinh Khai trường (9/1945)'
    },
    {
      id: 'tl-4',
      period: '1954 – 1969',
      title: 'Xây dựng CNXH ở miền Bắc, đấu tranh giải phóng miền Nam & Bản Di chúc lịch sử',
      summary: 'Cùng Trung ương Đảng lãnh đạo hai nhiệm vụ chiến lược của cách mạng, trái tim Chủ tịch Hồ Chí Minh luôn hướng về đồng bào miền Nam ruột thịt. Trước lúc đi xa (1969), Người để lại Bản Di chúc thiêng liêng – bảo vật quốc gia kết tinh tư tưởng, đạo đức, phong cách Hồ Chí Minh và công tác xây dựng, chỉnh đốn Đảng.',
      takeaway: 'Tư liệu sinh hoạt Chi bộ: Học tập chuyên đề Di chúc của Chủ tịch Hồ Chí Minh về “Bồi dưỡng thế hệ cách mạng cho đời sau”.',
      quote: '“Đảng ta là một Đảng cầm quyền. Mỗi đảng viên và cán bộ phải thật sự thấm nhuần đạo đức cách mạng, thật sự cần kiệm liêm chính, chí công vô tư.”',
      artifactName: 'Toàn văn Di chúc (1969) & Đôi dép cao su, áo kaki của Bác'
    },
    {
      id: 'tl-5',
      period: 'Hiện nay',
      title: 'Không gian Văn hóa Hồ Chí Minh tại Trường THPT Mạc Đĩnh Chi & Phường Phú Lâm',
      summary: 'Thực hiện Nghị quyết của Đảng bộ TP. Hồ Chí Minh về xây dựng Không gian Văn hóa Hồ Chí Minh, Chi bộ Trường THPT Mạc Đĩnh Chi phối hợp cùng Đảng bộ Phường Phú Lâm xây dựng mô hình Bảo tàng truyền thống kết hợp Bảo tàng số 360°, đưa tư tưởng, đạo đức, phong cách của Bác thấm sâu vào đời sống học đường và cộng đồng.',
      takeaway: 'Chuyển đổi số công tác Đảng & Giáo dục: Mỗi tủ trưng bày tại trường đều gắn mã QR đồng bộ trực tiếp với kho lưu trữ số trên nền tảng này.',
      quote: '“Bồi dưỡng thế hệ cách mạng cho đời sau là một việc rất quan trọng và rất cần thiết.”',
      artifactName: 'Hệ thống Bảo tàng số 360° & Sổ vàng Truyền thống Điện tử'
    }
  ],

  artifacts: [
    {
      id: 'art-1',
      code: 'HS-MDC-001',
      category: 'hien-vat',
      tag: 'Hiện vật Lịch sử',
      title: 'Mô hình Tàu Amiral Latouche-Tréville',
      year: '05/06/1911',
      location: 'Tủ kính trung tâm – Vách số 2 (Phòng truyền thống trường)',
      summary: 'Mô hình con tàu buôn Pháp nơi người thanh niên Nguyễn Tất Thành (Văn Ba) rời Bến Nhà Rồng ra đi tìm đường cứu nước.',
      detail: 'Tại Phòng truyền thống Trường THPT Mạc Đĩnh Chi, mô hình tàu được trưng bày kèm bản đồ hành trình 30 năm tìm đường cứu nước. Bạn có thể bấm nút "Mã QR" trên thẻ này để in nhãn QR dán lên tủ kính thật tại trường.',
      audioText: 'Hồ sơ hiện vật số 001: Mô hình tàu Đô đốc Latouche-Tréville. Ngày 5 tháng 6 năm 1911, từ Bến cảng Nhà Rồng, người thanh niên yêu nước Nguyễn Tất Thành với tên gọi Văn Ba đã rời Tổ quốc trên con tàu này, mở đầu hành trình 30 năm tìm đường cứu nước giải phóng dân tộc.',
      imageUrl: '',
      docUrl: ''
    },
    {
      id: 'art-2',
      code: 'HS-MDC-002',
      category: 'giao-duc',
      tag: 'Bác Hồ với Giáo dục',
      title: 'Thư Bác gửi Học sinh nhân ngày khai trường đầu tiên',
      year: 'Tháng 9/1945',
      location: 'Bảng trích dẫn Vách số 1 & Chuyên đề Giáo dục Vách số 3',
      summary: 'Bức thư lịch sử gửi các em học sinh cả nước ngay sau khi nước nhà giành độc lập, khích lệ tinh thần học tập xây dựng đất nước.',
      detail: 'Tư liệu cốt lõi trong Không gian Văn hóa Hồ Chí Minh khối trường học. Học sinh có thể đọc toàn văn bức thư, nghe thuyết minh tự động và tham gia trả lời câu hỏi nhận thức ngay sau khi tham quan.',
      audioText: 'Hồ sơ hiện vật số 002: Thư Chủ tịch Hồ Chí Minh gửi các em học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa, tháng 9 năm 1945. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.',
      imageUrl: '',
      docUrl: ''
    },
    {
      id: 'art-3',
      code: 'HS-MDC-003',
      category: 'hien-vat',
      tag: 'Đạo đức – Phong cách',
      title: 'Đôi dép cao su & Chiếc áo kaki giản dị của Bác',
      year: '1947 – 1969',
      location: 'Tủ trưng bày Chuyên đề Đạo đức & Phong cách Hồ Chí Minh – Vách số 2',
      summary: 'Biểu tượng bất hủ về lối sống cần, kiệm, liêm, chính, chí công vô tư, suốt đời vì nước vì dân của Chủ tịch Hồ Chí Minh.',
      detail: 'Đôi dép cao su được chế tác từ lốp xe quân sự thu được tại căn cứ địa Việt Bắc năm 1947 đã gắn bó với bước chân Người trên khắp các chiến dịch và các chuyến công tác quốc tế. Hiện vật giáo dục sâu sắc cho cán bộ, đảng viên và học sinh về đức tính giản dị, tiết kiệm.',
      audioText: 'Hồ sơ hiện vật số 003: Đôi dép cao su và chiếc áo kaki giản dị là biểu tượng sinh động cho đạo đức cách mạng cần, kiệm, liêm, chính, chí công vô tư của Chủ tịch Hồ Chí Minh.',
      imageUrl: '',
      docUrl: ''
    },
    {
      id: 'art-4',
      code: 'HS-MDC-004',
      category: 'tu-lieu-sach',
      tag: 'Tủ sách Đảng & Bác Hồ',
      title: 'Tác phẩm “Đường Kách Mệnh”, “Nhật ký trong tù” & Bản Di chúc',
      year: '1927 – 1969',
      location: 'Kệ Tủ sách Tư tưởng Hồ Chí Minh – Vách số 3',
      summary: 'Những tác phẩm lý luận cách mạng vô giá đặt nền móng tư tưởng cho Đảng Cộng sản Việt Nam và di sản văn hóa tinh thần của Bác.',
      detail: 'Tủ sách điện tử cho phép gắn đường dẫn tài liệu PDF hoặc Flipbook từ thư viện nhà trường để đảng viên, giáo viên, học sinh và nhân dân Phường Phú Lâm đọc trực tuyến mọi lúc mọi nơi.',
      audioText: 'Hồ sơ hiện vật số 004: Tủ sách Tư tưởng Hồ Chí Minh và Văn kiện Đảng giới thiệu các tác phẩm kinh điển như Đường Kách Mệnh năm 1927, Nhật ký trong tù và Bản Di chúc lịch sử năm 1969.',
      imageUrl: '',
      docUrl: ''
    },
    {
      id: 'art-5',
      code: 'HS-MDC-005',
      category: 'giao-duc',
      tag: 'Thiếu niên – Thanh niên',
      title: '5 Điều Bác Hồ dạy & Lời căn dặn Thanh niên',
      year: '15/05/1961',
      location: 'Mảng tường Khánh tiết Chính diện – Vách số 1',
      summary: 'Kim chỉ nam rèn luyện đạo đức, tác phong và lý tưởng cách mạng cho các thế hệ thiếu niên, đoàn viên, học sinh Việt Nam.',
      detail: '1. Yêu Tổ quốc, yêu đồng bào / 2. Học tập tốt, lao động tốt / 3. Đoàn kết tốt, kỷ luật tốt / 4. Giữ gìn vệ sinh thật tốt / 5. Khiêm tốn, thật thà, dũng cảm.',
      audioText: 'Hồ sơ hiện vật số 005: Năm điều Bác Hồ dạy: Một, Yêu Tổ quốc, yêu đồng bào. Hai, Học tập tốt, lao động tốt. Ba, Đoàn kết tốt, kỷ luật tốt. Bốn, Giữ gìn vệ sinh thật tốt. Năm, Khiêm tốn, thật thà, dũng cảm.',
      imageUrl: '',
      docUrl: ''
    },
    {
      id: 'art-6',
      code: 'HS-MDC-006',
      category: 'phu-lam',
      tag: 'Chi bộ Trường & Phường Phú Lâm',
      title: 'Hồ sơ Hoạt động Chi bộ THPT Mạc Đĩnh Chi & Đảng bộ Phường Phú Lâm',
      year: '2025 – 2026',
      location: 'Vách số 4 – Không gian Sinh hoạt Chính trị & Cộng đồng',
      summary: 'Lưu giữ hình ảnh sinh hoạt chi bộ chuyên đề, lễ kết nạp Đảng viên từ học sinh ưu tú, tiết học lịch sử tại bảo tàng và gương điển hình.',
      detail: 'Ban Truyền thông và Chi ủy nhà trường có thể tải ảnh hoạt động mới lên trực tiếp qua công cụ Quản trị No-Code mà không cần can thiệp mã nguồn.',
      audioText: 'Hồ sơ hiện vật số 006: Không gian sinh hoạt chính trị kết nối giữa Chi bộ Trường Trung học phổ thông Mạc Đĩnh Chi và Đảng bộ Phường Phú Lâm, nơi lan tỏa các gương điển hình tiên tiến trong học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.',
      imageUrl: '',
      docUrl: ''
    }
  ],

  quiz: [
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
      question: 'Câu 2: Hội nghị hợp nhất các tổ chức cộng sản thành lập Đảng Cộng sản Việt Nam do lãnh tụ Nguyễn Ái Quốc chủ trì diễn ra vào mùa xuân năm nào?',
      options: [
        'A. Năm 1925',
        'B. Ngày 03/02/1930',
        'C. Năm 1941',
        'D. Ngày 02/09/1945'
      ],
      correctIndex: 1,
      explanation: 'Chính xác! Sự kiện thành lập Đảng Cộng sản Việt Nam (03/02/1930) là bước ngoặt vĩ đại chấm dứt thời kỳ khủng hoảng về đường lối cứu nước.'
    },
    {
      question: 'Câu 3: Câu nói bất hủ “Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em” trích từ văn kiện nào của Bác?',
      options: [
        'A. Bản Tuyên ngôn Độc lập (2/9/1945)',
        'B. Thư gửi các em học sinh nhân ngày khai trường đầu tiên (9/1945)',
        'C. Lời kêu gọi Toàn quốc kháng chiến (12/1946)',
        'D. Bản Di chúc lịch sử (1969)'
      ],
      correctIndex: 1,
      explanation: 'Chính xác! Đây là bức thư lịch sử Bác gửi học sinh cả nước nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa (tháng 9/1945).'
    },
    {
      question: 'Câu 4: Mục đích cốt lõi của việc xây dựng “Không gian văn hóa Hồ Chí Minh trực tuyến” tại Trường THPT Mạc Đĩnh Chi và Phường Phú Lâm là gì?',
      options: [
        'A. Chỉ để lưu trữ văn bản hành chính nội bộ',
        'B. Thay thế hoàn toàn việc học môn Lịch sử trên lớp',
        'C. Đưa tư tưởng, đạo đức, phong cách của Bác và lịch sử Đảng lan tỏa sâu rộng tới cán bộ, đảng viên, giáo viên, học sinh và nhân dân qua công nghệ số',
        'D. Chỉ mở vào các ngày lễ lớn trong năm'
      ],
      correctIndex: 2,
      explanation: 'Rất tuyệt vời! Bảo tàng số giúp xóa nhòa khoảng cách không gian – thời gian và gắn kết chặt chẽ với phòng truyền thống thực tế của nhà trường.'
    }
  ]
};

const INITIAL_GUESTBOOK = [
  {
    name: 'Đồng chí Nguyễn Thị Minh Châu',
    role: 'Đảng viên – Tổ Lịch sử THPT Mạc Đĩnh Chi',
    date: 'Hôm nay',
    message: 'Hệ thống Không gian Văn hóa Hồ Chí Minh trực tuyến được thiết kế rất khoa học, trang trọng, mang đậm tính Đảng và giúp các tiết học lịch sử truyền thống tại trường sinh động hơn rất nhiều!'
  },
  {
    name: 'Trần Hoàng Nam',
    role: 'Đoàn viên thanh niên Phường Phú Lâm',
    date: 'Hôm qua',
    message: 'Tự hào khi Đảng bộ Phường Phú Lâm và Trường THPT Mạc Đĩnh Chi có một bảo tàng số 360° hiện đại, dễ tra cứu hồ sơ hiện vật và nghe thuyết minh ngay trên điện thoại.'
  },
  {
    name: 'Lê Ngọc Bảo Trân',
    role: 'Cảm tình Đảng – Học sinh tiêu biểu Lớp 12',
    date: '2 ngày trước',
    message: 'Em xin hứa sẽ không ngừng rèn luyện đạo đức, học tập thật tốt theo tư tưởng, đạo đức, phong cách Hồ Chí Minh để sớm được đứng vào hàng ngũ của Đảng Cộng sản Việt Nam.'
  }
];

// ============================================================================
// BIẾN TRẠNG THÁI TOÀN CỤC
// ============================================================================
let MUSEUM_STATE = loadMuseumState();
let currentWallIndex = 0;
let currentTimelineIdx = 0;
let currentArtifactFilter = 'all';
let currentArtifactSearch = '';
let isAudioPlaying = false;
let currentQuizIdx = 0;
let quizScore = 0;
let quizAnswered = false;
let activeCmsTab = 'general';
let selectedCmsWallIdx = 0;

function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function loadMuseumState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CMS);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        general: { ...cloneDeep(DEFAULT_MUSEUM_DATA.general), ...(parsed.general || {}) },
        walls: Array.isArray(parsed.walls) && parsed.walls.length === 4 ? parsed.walls : cloneDeep(DEFAULT_MUSEUM_DATA.walls),
        timeline: Array.isArray(parsed.timeline) && parsed.timeline.length > 0 ? parsed.timeline : cloneDeep(DEFAULT_MUSEUM_DATA.timeline),
        artifacts: Array.isArray(parsed.artifacts) && parsed.artifacts.length > 0 ? parsed.artifacts : cloneDeep(DEFAULT_MUSEUM_DATA.artifacts),
        quiz: Array.isArray(parsed.quiz) && parsed.quiz.length > 0 ? parsed.quiz : cloneDeep(DEFAULT_MUSEUM_DATA.quiz)
      };
    }
  } catch (err) {
    console.warn('Không thể đọc dữ liệu CMS đã lưu, dùng dữ liệu chuẩn mặc định.', err);
  }
  return cloneDeep(DEFAULT_MUSEUM_DATA);
}

window.saveMuseumState = function (showNotification = true) {
  try {
    localStorage.setItem(STORAGE_KEY_CMS, JSON.stringify(MUSEUM_STATE));
    renderEntireMuseum();
    const previewFrame = document.getElementById('livePreviewIframe');
    if (previewFrame && previewFrame.contentWindow && previewFrame.contentWindow.renderEntireMuseumFromStorage) {
      previewFrame.contentWindow.renderEntireMuseumFromStorage();
    }
    if (showNotification) {
      showCmsToast('✔ Đã lưu và cập nhật Bảo tàng Số thành công!');
    }
  } catch (err) {
    alert('Dung lượng ảnh tải lên quá lớn so với bộ nhớ trình duyệt. Hãy thử dùng ảnh nhẹ hơn hoặc xuất file JSON.');
  }
};

window.renderEntireMuseumFromStorage = function () {
  MUSEUM_STATE = loadMuseumState();
  renderEntireMuseum();
};

function showCmsToast(msg) {
  const toast = document.getElementById('cmsToast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ============================================================================
// KHỞI ĐỘNG ỨNG DỤNG
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderEntireMuseum();
  initVirtualRoomEvents();
  initArtifactFiltersAndSearch();
  initGuestbook();
  initAudioGuideButton();
  initCmsStudioControls();
  checkDeepLinkArtifact();

  // Tự động nạp file museum-config.json nếu được đặt cùng thư mục trên Hosting/Server
  if (!localStorage.getItem(STORAGE_KEY_CMS)) {
    fetch('museum-config.json')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        const stateToLoad = data && (data.museumState || data);
        if (stateToLoad && stateToLoad.general && stateToLoad.walls) {
          MUSEUM_STATE = stateToLoad;
          renderEntireMuseum();
        }
      })
      .catch(() => { });
  }

  // Tự động đồng bộ nếu chỉnh sửa từ tab/cửa sổ admin.html khác
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY_CMS) {
      MUSEUM_STATE = loadMuseumState();
      renderEntireMuseum();
    }
  });
});

function renderEntireMuseum() {
  renderGeneralAndHero();
  renderVirtualRoomWalls();
  renderTimeline();
  renderArtifacts();
  renderQuizStep();
}

function checkDeepLinkArtifact() {
  const hash = window.location.hash || '';
  if (hash.startsWith('#artifact=')) {
    const id = hash.replace('#artifact=', '').trim();
    setTimeout(() => window.openArtifactById(id), 350);
  }
}

// ============================================================================
// 1. RENDER SẢNH KHÁNH TIẾT & THÔNG TIN ĐẢNG BỘ (GENERAL & HERO)
// ============================================================================
function renderGeneralAndHero() {
  const g = MUSEUM_STATE.general;
  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setTxt('cmsPartySlogan', g.partySlogan);
  setTxt('cmsPartyCellBadge', g.partyCellBadge);
  setTxt('cmsBrandSub', g.brandSub);
  setTxt('cmsBrandTitle', g.brandTitle);
  setTxt('cmsHeroBadge', g.heroBadge);
  setTxt('cmsHeroTitleMain', g.heroTitleMain);
  setTxt('cmsHeroTitleSub', g.heroTitleSub);
  setTxt('cmsHeroQuote', g.heroQuote);
  setTxt('cmsHeroQuoteAuthor', g.heroQuoteAuthor);
  setTxt('cmsHeroDesc', g.heroDesc);
  setTxt('cmsMonumentTitle', g.monumentTitle);
  setTxt('cmsMonumentSub', g.monumentSub);
  setTxt('cmsStat1Num', g.stat1Num);
  setTxt('cmsStat1Label', g.stat1Label);
  setTxt('cmsStat2Num', g.stat2Num);
  setTxt('cmsStat2Label', g.stat2Label);
  setTxt('cmsStat3Num', g.stat3Num);
  setTxt('cmsStat3Label', g.stat3Label);
  setTxt('cmsFooterTitle', g.footerTitle);
  setTxt('cmsFooterSub', g.footerSub);

  const customImg = document.getElementById('cmsHeroCustomImage');
  const defaultSvg = document.getElementById('cmsHeroDefaultSvg');
  if (customImg && defaultSvg) {
    if (g.heroCustomImage && g.heroCustomImage.trim() !== '') {
      customImg.src = g.heroCustomImage;
      customImg.style.display = 'block';
      defaultSvg.style.display = 'none';
    } else {
      customImg.style.display = 'none';
      defaultSvg.style.display = 'block';
    }
  }
}

// ============================================================================
// 2. RENDER PHÒNG BẢO TÀNG 360° (4 VÁCH ĐỘNG + SƠ ĐỒ MẶT BẰNG RADAR)
// ============================================================================
function renderVirtualRoomWalls() {
  const tabsWrap = document.getElementById('roomWallTabs');
  const stage = document.getElementById('panoramaStage');
  if (!tabsWrap || !stage) return;

  const walls = MUSEUM_STATE.walls;

  tabsWrap.innerHTML = walls.map((w, idx) => `
    <button class="wall-tab ${idx === currentWallIndex ? 'active' : ''}" type="button" onclick="goToWall(${idx})">
      ${escapeHtml(w.tabTitle)}
    </button>
  `).join('');

  stage.innerHTML = walls.map((w) => {
    const hasBg = w.bgImage && w.bgImage.trim() !== '';
    const bgStyle = hasBg ? `style="background-image: url('${escapeHtml(w.bgImage)}');"` : '';
    return `
      <div class="museum-wall ${hasBg ? 'has-custom-bg' : ''}" ${bgStyle}>
        <div class="wall-banner">${escapeHtml(w.bannerTitle)}</div>
        <div class="wall-exhibits-row">
          ${(w.exhibits || []).map((ex) => renderWallExhibitFrame(ex)).join('')}
        </div>
      </div>
    `;
  }).join('');

  goToWall(currentWallIndex);
}

function renderWallExhibitFrame(ex) {
  let clickHandler = '';
  let actionLabel = '🔍 Mở hồ sơ lưu trữ';

  if (ex.actionType === 'artifact' && ex.targetId) {
    clickHandler = `openArtifactById('${escapeHtml(ex.targetId)}')`;
    actionLabel = '📂 Xem hồ sơ & Nghe thuyết minh';
  } else if (ex.actionType === 'speech') {
    const speechSafe = (ex.customSpeech || ex.desc || ex.title).replace(/'/g, "\\'");
    clickHandler = `speakText('${escapeHtml(speechSafe)}')`;
    actionLabel = '🔊 Nghe phát thanh khánh tiết';
  } else if (ex.actionType === 'scroll') {
    const targetSec = ex.targetId || 'tuong-tac';
    clickHandler = `document.getElementById('${escapeHtml(targetSec)}')?.scrollIntoView({behavior:'smooth'})`;
    actionLabel = '✍️ Di chuyển tới bàn tương tác';
  }

  const thumbHtml = ex.imageUrl && ex.imageUrl.trim() !== ''
    ? `<img class="wall-frame-thumb" src="${escapeHtml(ex.imageUrl)}" alt="${escapeHtml(ex.title)}" />`
    : '';

  return `
    <div class="wall-frame ${ex.isCenterpiece ? 'altar-centerpiece' : ''}" onclick="${clickHandler}">
      <span class="hotspot-pin" title="Bấm để tương tác">+</span>
      <div>
        ${thumbHtml}
        <div class="wall-frame-category">${escapeHtml(ex.category)}</div>
        <h3 class="wall-frame-title">${escapeHtml(ex.title)}</h3>
        <p class="wall-frame-desc">${escapeHtml(ex.desc)}</p>
      </div>
      <div class="wall-frame-action-hint">
        <span>${actionLabel}</span>
        <span>→</span>
      </div>
    </div>
  `;
}

function initVirtualRoomEvents() {
  const prevBtn = document.getElementById('btnPrevWall');
  const nextBtn = document.getElementById('btnNextWall');
  const viewport = document.getElementById('roomViewport');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goToWall((currentWallIndex + 3) % 4));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => goToWall((currentWallIndex + 1) % 4));
  }
  if (!viewport) return;

  let startX = 0;
  let isDragging = false;

  viewport.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 60) {
      if (diff < 0) goToWall((currentWallIndex + 1) % 4);
      else goToWall((currentWallIndex + 3) % 4);
    }
  });

  viewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) goToWall((currentWallIndex + 1) % 4);
      else goToWall((currentWallIndex + 3) % 4);
    }
  });
}

window.goToWall = function (index) {
  currentWallIndex = ((index % 4) + 4) % 4;
  const stage = document.getElementById('panoramaStage');
  const tabs = document.querySelectorAll('#roomWallTabs .wall-tab');
  const wallLabel = document.getElementById('currentWallIndicator');
  const radarBtns = document.querySelectorAll('.radar-wall-btn');
  const radarCone = document.getElementById('radarFovCone');
  const radarDir = document.getElementById('radarDirectionLabel');

  if (stage) {
    stage.style.transform = `translateX(-${currentWallIndex * 25}%)`;
  }
  tabs.forEach((t, i) => t.classList.toggle('active', i === currentWallIndex));
  radarBtns.forEach((b, i) => b.classList.toggle('active', i === currentWallIndex));

  if (radarCone) {
    radarCone.style.transform = `rotate(${currentWallIndex * 90}deg)`;
  }

  const wallObj = MUSEUM_STATE.walls[currentWallIndex];
  if (wallLabel && wallObj) {
    wallLabel.textContent = `Góc nhìn ${currentWallIndex + 1}/4: ${wallObj.bannerTitle}`;
  }
  if (radarDir && wallObj) {
    radarDir.textContent = wallObj.directionLabel || `Vách ${currentWallIndex + 1}`;
  }
};

// ============================================================================
// 3. BIÊN NIÊN SỬ ĐẢNG & BÁC HỒ (TIMELINE)
// ============================================================================
function renderTimeline() {
  const tabsContainer = document.getElementById('timelineTabs');
  if (!tabsContainer) return;

  const list = MUSEUM_STATE.timeline || [];
  if (currentTimelineIdx >= list.length) currentTimelineIdx = 0;

  tabsContainer.innerHTML = list.map((item, idx) => `
    <button class="timeline-step-btn ${idx === currentTimelineIdx ? 'active' : ''}" type="button" onclick="selectTimelineStep(${idx})">
      <span>★</span> ${escapeHtml(item.period)}
    </button>
  `).join('');

  renderTimelineDetail(currentTimelineIdx);
}

window.selectTimelineStep = function (idx) {
  currentTimelineIdx = idx;
  renderTimeline();
};

function renderTimelineDetail(idx) {
  const list = MUSEUM_STATE.timeline || [];
  const item = list[idx];
  const card = document.getElementById('timelineDisplayCard');
  if (!card || !item) return;

  card.innerHTML = `
    <div>
      <span class="timeline-year-badge">📅 Giai đoạn Lịch sử: ${escapeHtml(item.period)}</span>
      <h3 class="timeline-event-title">${escapeHtml(item.title)}</h3>
      <p class="timeline-event-body">${escapeHtml(item.summary)}</p>
      <div class="timeline-Takeaway">
        <strong style="color: var(--gold-bright);">★ Ý nghĩa Chính trị & Định hướng Trưng bày tại Trường:</strong><br/>
        ${escapeHtml(item.takeaway)}
      </div>
    </div>
    <div class="timeline-visual-box">
      <div style="font-size: 2.1rem; margin-bottom: 0.65rem; color: var(--gold-bright);">★</div>
      <p style="font-family: var(--font-serif); font-style: italic; font-size: 1.05rem; margin-bottom: 1.15rem; color: var(--gold-light); line-height: 1.6;">
        ${escapeHtml(item.quote)}
      </p>
      <div style="font-size: 0.8rem; color: var(--text-light-muted); border-top: 1px solid rgba(217,169,76,0.3); padding-top: 0.8rem; width: 100%;">
        Hồ sơ / Hiện vật gắn liền:<br/>
        <strong style="color: var(--gold-bright);">${escapeHtml(item.artifactName)}</strong>
      </div>
    </div>
  `;
}

// ============================================================================
// 4. KHO LƯU TRỮ HIỆN VẬT SỐ, TÌM KIẾM & NHÃN MÃ QR (ARTIFACTS ARCHIVE)
// ============================================================================
function initArtifactFiltersAndSearch() {
  const buttons = document.querySelectorAll('#artifactFilterBar .filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentArtifactFilter = btn.getAttribute('data-filter') || 'all';
      renderArtifacts();
    });
  });

  const searchInput = document.getElementById('artifactSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentArtifactSearch = (e.target.value || '').trim().toLowerCase();
      renderArtifacts();
    });
  }
}

function renderArtifacts() {
  const grid = document.getElementById('artifactsGrid');
  if (!grid) return;

  const allItems = MUSEUM_STATE.artifacts || [];
  const filtered = allItems.filter(item => {
    const matchCat = currentArtifactFilter === 'all' || item.category === currentArtifactFilter;
    const matchSearch = !currentArtifactSearch ||
      (item.title && item.title.toLowerCase().includes(currentArtifactSearch)) ||
      (item.code && item.code.toLowerCase().includes(currentArtifactSearch)) ||
      (item.summary && item.summary.toLowerCase().includes(currentArtifactSearch)) ||
      (item.year && item.year.toLowerCase().includes(currentArtifactSearch));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: rgba(0,0,0,0.3); border: 1px dashed var(--gold-muted); border-radius: 12px;">
        <p style="color: var(--gold-bright); font-size: 1.1rem; margin-bottom: 0.5rem;">Không tìm thấy hồ sơ hiện vật phù hợp</p>
        <p style="font-size: 0.86rem; color: var(--text-light-muted);">Bạn có thể thử từ khóa khác hoặc thêm hồ sơ hiện vật mới trong công cụ Quản trị No-Code.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((item, idx) => {
    const code = item.code || `HS-00${idx + 1}`;
    const hasImg = item.imageUrl && item.imageUrl.trim() !== '';
    const illustrationContent = hasImg
      ? `<img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" />`
      : `
        <div style="text-align: center; padding: 1rem;">
          <div style="width: 58px; height: 58px; border-radius: 50%; border: 1.5px solid var(--gold-primary); display: inline-flex; align-items: center; justify-content: center; color: var(--gold-bright); font-family: var(--font-serif); font-size: 1.35rem; background: rgba(0,0,0,0.4);">
            ★
          </div>
          <div style="font-size: 0.78rem; color: var(--gold-bright); margin-top: 0.5rem; font-weight: 600;">
            ${escapeHtml(item.year)}
          </div>
        </div>
      `;

    const safeSpeech = (item.audioText || item.summary || item.title).replace(/'/g, "\\'");

    return `
      <article class="artifact-card">
        <div class="artifact-Illustration">
          <span class="artifact-tag">${escapeHtml(item.tag)}</span>
          <span class="artifact-code-badge">${escapeHtml(code)}</span>
          ${illustrationContent}
        </div>
        <div class="artifact-body">
          <div class="artifact-location-line">📍 ${escapeHtml(item.location)}</div>
          <h3 class="artifact-title">${escapeHtml(item.title)}</h3>
          <p class="artifact-summary">${escapeHtml(item.summary)}</p>
          <div class="artifact-footer">
            <button type="button" class="btn-card-action" onclick="openArtifactById('${escapeHtml(item.id)}')">
              📂 Hồ sơ chi tiết
            </button>
            <button type="button" class="btn-card-action" onclick="speakText('${escapeHtml(safeSpeech)}')">
              🔊 Thuyết minh
            </button>
            <button type="button" class="btn-card-action" title="Tạo nhãn Mã QR để in dán tại phòng bảo tàng" onclick="openArtifactQrModal('${escapeHtml(item.id)}')">
              🏷️ QR
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.openArtifactById = function (artifactId) {
  const item = (MUSEUM_STATE.artifacts || []).find(a => a.id === artifactId);
  if (item) openModal(item);
};

function openModal(item) {
  const modal = document.getElementById('artifactModal');
  const body = document.getElementById('modalBodyContent');
  if (!modal || !body) return;

  const hasImg = item.imageUrl && item.imageUrl.trim() !== '';
  const hasDoc = item.docUrl && item.docUrl.trim() !== '';
  const safeSpeech = (item.audioText || item.summary || item.title).replace(/'/g, "\\'");

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.75rem;">
      <span style="background: rgba(158,19,24,0.6); border:1px solid var(--gold-primary); color: var(--gold-light); padding: 0.22rem 0.65rem; border-radius: 4px; font-size: 0.74rem; font-family: var(--font-mono); font-weight:700;">
        Mã Hồ Sơ: ${escapeHtml(item.code || 'HS-MDC')}
      </span>
      <span style="background: rgba(217,169,76,0.16); color: var(--gold-bright); padding: 0.22rem 0.7rem; border-radius: 4px; font-size: 0.75rem; font-weight:600;">
        ${escapeHtml(item.tag)} • ${escapeHtml(item.year)}
      </span>
    </div>

    <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--text-light); margin-bottom: 0.45rem;">
      ${escapeHtml(item.title)}
    </h3>

    <p style="font-size: 0.85rem; color: var(--gold-primary); margin-bottom: 1.15rem; font-weight:600;">
      📍 Vị trí niêm yết thực tế: ${escapeHtml(item.location)}
    </p>

    ${hasImg ? `
      <div style="margin-bottom: 1.25rem; border-radius: 8px; overflow: hidden; border: 1.5px solid var(--gold-primary); max-height: 300px;">
        <img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" style="width:100%; height:100%; object-fit:cover;" />
      </div>
    ` : ''}

    <p style="color: var(--text-light); margin-bottom: 1.15rem; line-height: 1.7; font-size: 0.96rem;">
      ${escapeHtml(item.summary)}
    </p>

    <div style="background: rgba(0,0,0,0.42); border-left: 3px solid var(--gold-bright); padding: 1rem 1.2rem; border-radius: 6px; margin-bottom: 1.4rem; font-size: 0.88rem; color: var(--text-light-muted);">
      <strong style="color: var(--gold-bright);">📋 Tư liệu chi tiết & Hướng dẫn trưng bày:</strong><br/>
      ${escapeHtml(item.detail)}
    </div>

    <div style="display: flex; gap: 0.65rem; flex-wrap: wrap;">
      <button type="button" class="btn-primary" onclick="speakText('${escapeHtml(safeSpeech)}')">
        🔊 Phát giọng đọc thuyết minh
      </button>
      <button type="button" class="btn-secondary" onclick="openArtifactQrModal('${escapeHtml(item.id)}')">
        🏷️ In Nhãn Mã QR Kệ Trưng Bày
      </button>
      ${hasDoc ? `
        <a href="${escapeHtml(item.docUrl)}" target="_blank" rel="noopener" class="btn-secondary">
          📖 Mở Tài liệu / Sách điện tử ↗
        </a>
      ` : ''}
      <button type="button" class="cms-btn-sm" onclick="closeArtifactModal(); openCmsStudio('artifacts')">
        ✏️ Chỉnh sửa hồ sơ này
      </button>
    </div>
  `;

  modal.classList.add('open');
}

window.openArtifactQrModal = function (artifactId) {
  const item = (MUSEUM_STATE.artifacts || []).find(a => a.id === artifactId);
  if (!item) return;

  const modal = document.getElementById('artifactModal');
  const body = document.getElementById('modalBodyContent');
  if (!modal || !body) return;

  const baseUrl = window.location.href.split('#')[0];
  const targetUrl = `${baseUrl}#artifact=${encodeURIComponent(item.id)}`;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(targetUrl)}`;

  body.innerHTML = `
    <div style="text-align: center; padding: 0.5rem;">
      <span class="section-index-pill">NHÃN MÃ QR ĐỊNH DANH HIỆN VẬT TẠI PHÒNG TRUYỀN THỐNG</span>
      <h3 style="font-family: var(--font-serif); font-size: 1.45rem; color: var(--gold-bright); margin-bottom: 0.4rem;">
        ${escapeHtml(item.title)}
      </h3>
      <p style="font-size: 0.84rem; color: var(--text-light-muted); margin-bottom: 1.25rem;">
        In nhãn này và dán lên tủ kính tại <strong>${escapeHtml(item.location)}</strong>. Khi đại biểu, học sinh quét mã bằng điện thoại, trang sẽ tự động mở đúng hồ sơ và phát thuyết minh!
      </p>

      <div id="printableQrCard" style="background: #fff; color: #1a0907; padding: 1.5rem; border-radius: 12px; border: 3px solid #9e1318; max-width: 340px; margin: 0 auto 1.5rem; box-shadow: 0 12px 30px rgba(0,0,0,0.5);">
        <div style="font-size: 0.68rem; font-weight: 800; color: #9e1318; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.35rem;">
          ★ KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH ★
        </div>
        <div style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.75rem; color: #130605;">
          ${escapeHtml(item.title)}
        </div>
        <img src="${qrApiUrl}" alt="QR Code ${escapeHtml(item.title)}" style="width: 190px; height: 190px; display: block; margin: 0 auto 0.65rem; border: 1px solid #ddd; border-radius: 6px;" />
        <div style="font-family: monospace; font-size: 0.76rem; font-weight: 700; color: #555;">
          Mã hồ sơ: ${escapeHtml(item.code || item.id)} • Quét để nghe thuyết minh
        </div>
      </div>

      <div style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap;">
        <button type="button" class="btn-primary" onclick="window.print()">
          🖨️ In Nhãn QR Này Ngay
        </button>
        <button type="button" class="btn-secondary" onclick="openArtifactById('${escapeHtml(item.id)}')">
          ← Quay lại Hồ sơ Hiện vật
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
};

window.closeArtifactModal = function () {
  const modal = document.getElementById('artifactModal');
  if (modal) modal.classList.remove('open');
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

// ============================================================================
// 5. HỆ THỐNG THUYẾT MINH TỰ ĐỘNG (WEB SPEECH API)
// ============================================================================
window.speakText = function (text) {
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
    if (labelGuide) labelGuide.textContent = 'Đang đọc... (Dừng)';
  };

  utterance.onend = () => {
    isAudioPlaying = false;
    if (btnGuide) btnGuide.classList.remove('playing');
    if (labelGuide) labelGuide.textContent = 'Thuyết minh';
  };

  window.speechSynthesis.speak(utterance);
};

function initAudioGuideButton() {
  const btnGuide = document.getElementById('btnAudioGuide');
  const labelGuide = document.getElementById('audioGuideLabel');
  if (!btnGuide) return;

  btnGuide.addEventListener('click', () => {
    if (isAudioPlaying) {
      window.speechSynthesis.cancel();
      isAudioPlaying = false;
      btnGuide.classList.remove('playing');
      if (labelGuide) labelGuide.textContent = 'Thuyết minh';
    } else {
      window.speakText(MUSEUM_STATE.general.welcomeNarration);
    }
  });
}

// ============================================================================
// 6. TRẮC NGHIỆM NHẬN THỨC CHÍNH TRỊ & SỔ VÀNG LƯU NIỆM
// ============================================================================
function renderQuizStep() {
  const box = document.getElementById('quizContainer');
  if (!box) return;

  const questions = MUSEUM_STATE.quiz || [];
  if (questions.length === 0) {
    box.innerHTML = `<p style="color:var(--text-light-muted);">Chưa có câu hỏi nào. Hãy thêm câu hỏi trong Trình Quản trị No-Code.</p>`;
    return;
  }

  if (currentQuizIdx >= questions.length) {
    box.innerHTML = `
      <div style="text-align: center; padding: 1.5rem 1.25rem; background: rgba(217,169,76,0.1); border: 1.5px solid var(--gold-primary); border-radius: 12px;">
        <div style="font-size: 2.3rem; margin-bottom: 0.4rem;">🏅</div>
        <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold-primary); font-weight: 700;">
          CHỨNG NHẬN HOÀN THÀNH SINH HOẠT CHUYÊN ĐỀ
        </div>
        <h4 style="font-family: var(--font-serif); font-size: 1.38rem; color: var(--gold-bright); margin: 0.35rem 0 0.5rem;">
          Tìm Hiểu Tư Tưởng, Đạo Đức, Phong Cách Hồ Chí Minh
        </h4>
        <p style="font-size: 0.9rem; color: var(--text-light-muted); margin-bottom: 1.15rem;">
          Bạn đã trả lời đúng <strong style="color: var(--gold-light);">${quizScore}/${questions.length}</strong> câu hỏi tại Không gian Văn hóa Hồ Chí Minh – Trường THPT Mạc Đĩnh Chi & Đảng bộ Phường Phú Lâm!
        </p>
        <button type="button" class="btn-primary" onclick="resetQuiz()">Làm lại lượt mới</button>
      </div>
    `;
    return;
  }

  const q = questions[currentQuizIdx];
  quizAnswered = false;

  box.innerHTML = `
    <div style="display:flex; justify-content:space-between; font-size: 0.78rem; color: var(--gold-primary); margin-bottom: 0.5rem; font-weight:600;">
      <span>Câu hỏi ${currentQuizIdx + 1} / ${questions.length}</span>
      <span>Điểm đạt được: ${quizScore}</span>
    </div>
    <h4 style="font-size: 1.02rem; margin-bottom: 1rem; color: var(--text-light); line-height: 1.5;">
      ${escapeHtml(q.question)}
    </h4>
    <div id="quizOptionsList">
      ${(q.options || []).map((opt, idx) => `
        <button type="button" class="quiz-option-btn" onclick="selectQuizOption(${idx})">
          ${escapeHtml(opt)}
        </button>
      `).join('')}
    </div>
    <div id="quizFeedback" style="margin-top: 0.65rem; font-size: 0.86rem; min-height: 1.5rem;"></div>
  `;
}

window.selectQuizOption = function (selectedIndex) {
  if (quizAnswered) return;
  quizAnswered = true;

  const questions = MUSEUM_STATE.quiz || [];
  const q = questions[currentQuizIdx];
  if (!q) return;

  const buttons = document.querySelectorAll('#quizOptionsList .quiz-option-btn');
  const feedback = document.getElementById('quizFeedback');

  buttons.forEach((btn, i) => {
    if (i === Number(q.correctIndex)) btn.classList.add('correct');
    else if (i === selectedIndex) btn.classList.add('wrong');
  });

  if (selectedIndex === Number(q.correctIndex)) {
    quizScore++;
    if (feedback) feedback.innerHTML = `<span style="color: #34d399; font-weight:600;">✔ ${escapeHtml(q.explanation)}</span>`;
  } else {
    if (feedback) feedback.innerHTML = `<span style="color: #fca5a5; font-weight:600;">✘ ${escapeHtml(q.explanation)}</span>`;
  }

  setTimeout(() => {
    currentQuizIdx++;
    renderQuizStep();
  }, 2300);
};

window.resetQuiz = function () {
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
      const nowStr = new Date().toLocaleDateString('vi-VN');
      saved.unshift({
        name: nameInput.value.trim(),
        role: roleInput.value.trim() || 'Đảng viên / Khách tham quan Phường Phú Lâm',
        date: nowStr,
        message: msgInput.value.trim()
      });

      localStorage.setItem(STORAGE_KEY_GUESTBOOK, JSON.stringify(saved));
      nameInput.value = '';
      msgInput.value = '';
      renderGuestbookEntries();
      showCmsToast('✔ Đã ghi cảm nghĩ vào Sổ vàng Truyền thống!');
    });
  }
}

function getGuestbookData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_GUESTBOOK);
    if (raw) return JSON.parse(raw);
  } catch (e) { }
  return [...INITIAL_GUESTBOOK];
}

function renderGuestbookEntries() {
  const container = document.getElementById('guestbookEntries');
  if (!container) return;

  const entries = getGuestbookData();
  container.innerHTML = entries.map(entry => `
    <div class="guest-entry">
      <div class="guest-meta">${escapeHtml(entry.name)} • <span style="font-weight:400; opacity:0.88;">${escapeHtml(entry.role)} (${escapeHtml(entry.date)})</span></div>
      <div class="guest-message">“${escapeHtml(entry.message)}”</div>
    </div>
  `).join('');
}

window.exportGuestbookCSV = function () {
  const entries = getGuestbookData();
  const rows = [
    ['STT', 'Họ và Tên', 'Đơn vị / Chi bộ / Lớp', 'Thời gian', 'Nội dung Cảm nghĩ / Đăng ký làm theo lời Bác']
  ];
  entries.forEach((e, idx) => {
    rows.push([
      idx + 1,
      `"${(e.name || '').replace(/"/g, '""')}"`,
      `"${(e.role || '').replace(/"/g, '""')}"`,
      `"${(e.date || '').replace(/"/g, '""')}"`,
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);
  });

  const csvContent = '\uFEFF' + rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `So-Vang-Khong-Gian-Van-Hoa-HCM-MDC.csv`;
  a.click();
  URL.revokeObjectURL(url);
};

// ============================================================================
// 7. TRÌNH XÂY DỰNG BẢO TÀNG KHÔNG CẦN CODE (NO-CODE MUSEUM BUILDER STUDIO)
// ============================================================================
function initCmsStudioControls() {
  const btnOpen = document.getElementById('btnOpenStudio');
  if (btnOpen) {
    btnOpen.addEventListener('click', () => openCmsStudio('general'));
  }

  const btnInline = document.getElementById('btnInlineEditToggle');
  if (btnInline) {
    btnInline.addEventListener('click', () => {
      const active = document.body.classList.toggle('inline-edit-active');
      btnInline.classList.toggle('active', active);
      btnInline.innerHTML = active ? '🟢 Đang bật Sửa trực tiếp' : '✏️ Sửa trực tiếp';
      if (active) {
        showCmsToast('💡 Hãy bấm vào bất kỳ phần nào có khung viền xanh trên trang để sửa ngay!');
      }
    });
  }

  // Hỗ trợ bấm trực tiếp vào phần tử trên trang khi bật chế độ Inline Edit
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('inline-edit-active')) return;
    const editable = e.target.closest('[data-cms-edit]');
    if (editable) {
      e.preventDefault();
      e.stopPropagation();
      const targetTab = editable.getAttribute('data-cms-edit') || 'general';
      openCmsStudio(targetTab);
    }
  });

  // Khởi tạo các nút chuyển Tab trong Studio
  const tabBtns = document.querySelectorAll('#cmsTabsNav .cms-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab') || 'general';
      switchCmsTab(tab);
    });
  });

  // Nếu đang ở trang admin.html độc lập thì render ngay Studio
  if (document.body.classList.contains('studio-standalone')) {
    switchCmsTab('general');
  }
}

window.openCmsStudio = function (tabName = 'general') {
  const drawer = document.getElementById('cmsStudioDrawer');
  if (drawer) {
    drawer.classList.add('open');
  }
  switchCmsTab(tabName);
};

window.closeCmsStudio = function () {
  const drawer = document.getElementById('cmsStudioDrawer');
  if (drawer) {
    drawer.classList.remove('open');
  }
};

window.saveAndCloseCms = function () {
  saveMuseumState(true);
  closeCmsStudio();
};

function switchCmsTab(tabName) {
  activeCmsTab = tabName;
  const tabBtns = document.querySelectorAll('#cmsTabsNav .cms-tab-btn');
  tabBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-tab') === tabName));
  renderCmsTabContent(tabName);
}

function renderCmsTabContent(tab) {
  const container = document.getElementById('cmsStudioBody');
  if (!container) return;

  if (tab === 'general') {
    const g = MUSEUM_STATE.general;
    container.innerHTML = `
      <div class="cms-section-card">
        <h3>🚩 1. Thiết lập Đảng Bộ, Chi Bộ & Dải Khánh Tiết Đỉnh Trang</h3>
        <div class="cms-field">
          <label>Khẩu hiệu Đảng trên dải băng đỏ trên cùng</label>
          <input class="cms-input" type="text" value="${escapeHtml(g.partySlogan)}"
            oninput="MUSEUM_STATE.general.partySlogan = this.value; saveMuseumState(false);" />
        </div>
        <div class="cms-grid-2">
          <div class="cms-field">
            <label>Tên Chi bộ / Đảng bộ liên kết (Góc phải trên & Thương hiệu)</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.brandSub)}"
              oninput="MUSEUM_STATE.general.brandSub = this.value; MUSEUM_STATE.general.partyCellBadge = this.value; saveMuseumState(false);" />
          </div>
          <div class="cms-field">
            <label>Tên Công trình Bảo tàng (Trên thanh Menu)</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.brandTitle)}"
              oninput="MUSEUM_STATE.general.brandTitle = this.value; saveMuseumState(false);" />
          </div>
        </div>
      </div>

      <div class="cms-section-card">
        <h3>🏛️ 2. Nội dung Sảnh Khánh Tiết (Hero Section)</h3>
        <div class="cms-field">
          <label>Nhãn Huy hiệu mở đầu (Phía trên tiêu đề lớn)</label>
          <input class="cms-input" type="text" value="${escapeHtml(g.heroBadge)}"
            oninput="MUSEUM_STATE.general.heroBadge = this.value; saveMuseumState(false);" />
        </div>
        <div class="cms-grid-2">
          <div class="cms-field">
            <label>Tiêu đề chính (Dòng 1)</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.heroTitleMain)}"
              oninput="MUSEUM_STATE.general.heroTitleMain = this.value; saveMuseumState(false);" />
          </div>
          <div class="cms-field">
            <label>Tiêu đề phụ mạ vàng (Dòng 2)</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.heroTitleSub)}"
              oninput="MUSEUM_STATE.general.heroTitleSub = this.value; saveMuseumState(false);" />
          </div>
        </div>
        <div class="cms-grid-2">
          <div class="cms-field">
            <label>Câu trích dẫn lời dạy của Bác Hồ / Nghị quyết</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.heroQuote)}"
              oninput="MUSEUM_STATE.general.heroQuote = this.value; saveMuseumState(false);" />
          </div>
          <div class="cms-field">
            <label>Tác giả / Nguồn trích dẫn</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.heroQuoteAuthor)}"
              oninput="MUSEUM_STATE.general.heroQuoteAuthor = this.value; saveMuseumState(false);" />
          </div>
        </div>
        <div class="cms-field">
          <label>Đoạn văn giới thiệu tổng quan công trình</label>
          <textarea class="cms-textarea" rows="3"
            oninput="MUSEUM_STATE.general.heroDesc = this.value; saveMuseumState(false);">${escapeHtml(g.heroDesc)}</textarea>
        </div>
      </div>

      <div class="cms-section-card">
        <h3>★ 3. Khung Biểu Trưng Khánh Tiết & Thuyết Minh Chào Mừng</h3>
        <div class="cms-grid-2">
          <div class="cms-field">
            <label>Tiêu đề dưới biểu trưng Hoa Sen / Sao Vàng</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.monumentTitle)}"
              oninput="MUSEUM_STATE.general.monumentTitle = this.value; saveMuseumState(false);" />
          </div>
          <div class="cms-field">
            <label>Dòng mô tả phụ dưới biểu trưng</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.monumentSub)}"
              oninput="MUSEUM_STATE.general.monumentSub = this.value; saveMuseumState(false);" />
          </div>
        </div>

        <div class="cms-field">
          <label>Ảnh Chân dung Bác / Logo Trường ở tâm Hoa Sen (Để trống sẽ hiện Ngôi Sao Vàng Đảng Kỳ mặc định)</label>
          <div class="cms-upload-zone">
            <input class="cms-input" style="flex:1;" type="text" placeholder="Dán link ảnh hoặc bấm nút Tải ảnh bên cạnh..."
              value="${escapeHtml(g.heroCustomImage)}"
              oninput="MUSEUM_STATE.general.heroCustomImage = this.value; saveMuseumState(false);" />
            <label class="cms-upload-label">
              📁 Tải ảnh từ máy
              <input type="file" accept="image/*" style="display:none;"
                onchange="handleCmsImageUpload(this, (dataUrl) => { MUSEUM_STATE.general.heroCustomImage = dataUrl; saveMuseumState(true); renderCmsTabContent('general'); })" />
            </label>
            ${g.heroCustomImage ? `<button type="button" class="cms-btn-sm cms-btn-danger" onclick="MUSEUM_STATE.general.heroCustomImage=''; saveMuseumState(true); renderCmsTabContent('general');">Xóa ảnh</button>` : ''}
          </div>
        </div>

        <div class="cms-grid-3">
          <div class="cms-field">
            <label>Chỉ số 1 (Số & Nhãn)</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.stat1Num)}" oninput="MUSEUM_STATE.general.stat1Num=this.value; saveMuseumState(false);" />
            <input class="cms-input" type="text" value="${escapeHtml(g.stat1Label)}" oninput="MUSEUM_STATE.general.stat1Label=this.value; saveMuseumState(false);" />
          </div>
          <div class="cms-field">
            <label>Chỉ số 2 (Số & Nhãn)</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.stat2Num)}" oninput="MUSEUM_STATE.general.stat2Num=this.value; saveMuseumState(false);" />
            <input class="cms-input" type="text" value="${escapeHtml(g.stat2Label)}" oninput="MUSEUM_STATE.general.stat2Label=this.value; saveMuseumState(false);" />
          </div>
          <div class="cms-field">
            <label>Chỉ số 3 (Số & Nhãn)</label>
            <input class="cms-input" type="text" value="${escapeHtml(g.stat3Num)}" oninput="MUSEUM_STATE.general.stat3Num=this.value; saveMuseumState(false);" />
            <input class="cms-input" type="text" value="${escapeHtml(g.stat3Label)}" oninput="MUSEUM_STATE.general.stat3Label=this.value; saveMuseumState(false);" />
          </div>
        </div>

        <div class="cms-field">
          <label>Lời chào Thuyết minh tự động (Khi bấm nút "Thuyết minh" trên thanh công cụ)</label>
          <textarea class="cms-textarea" rows="3"
            oninput="MUSEUM_STATE.general.welcomeNarration = this.value; saveMuseumState(false);">${escapeHtml(g.welcomeNarration)}</textarea>
          <div style="margin-top:0.35rem;">
            <button type="button" class="cms-btn-sm" onclick="speakText(MUSEUM_STATE.general.welcomeNarration)">🔊 Nghe thử lời chào thuyết minh</button>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (tab === 'walls') {
    const walls = MUSEUM_STATE.walls;
    const w = walls[selectedCmsWallIdx] || walls[0];

    container.innerHTML = `
      <div class="cms-section-card">
        <h3>
          <span>🏛️ Thiết kế Không Gian Phòng Truyền Thống 360° (4 Vách Tường)</span>
        </h3>
        <p style="font-size: 0.82rem; color: var(--text-light-muted); margin-bottom: 1rem;">
          Chọn từng Vách tường bên dưới để đổi tên, tải ảnh chụp thực tế của bức tường tại trường làm nền, và thêm/sửa/xóa các tủ trưng bày trên vách đó.
        </p>

        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:1.25rem;">
          ${walls.map((wallItem, idx) => `
            <button type="button" class="cms-tab-btn ${idx === selectedCmsWallIdx ? 'active' : ''}"
              onclick="selectWallInCms(${idx})">
              ${escapeHtml(wallItem.tabTitle)}
            </button>
          `).join('')}
        </div>

        <div class="cms-grid-2">
          <div class="cms-field">
            <label>Tên Nút Tab Vách (Hiển thị trên thanh chuyển vách)</label>
            <input class="cms-input" type="text" value="${escapeHtml(w.tabTitle)}"
              oninput="MUSEUM_STATE.walls[${selectedCmsWallIdx}].tabTitle = this.value; saveMuseumState(false);" />
          </div>
          <div class="cms-field">
            <label>Tiêu đề Băng rôn Đỏ treo trên Vách</label>
            <input class="cms-input" type="text" value="${escapeHtml(w.bannerTitle)}"
              oninput="MUSEUM_STATE.walls[${selectedCmsWallIdx}].bannerTitle = this.value; saveMuseumState(false);" />
          </div>
        </div>

        <div class="cms-field">
          <label>Ảnh chụp Thực tế của Vách tường này (Tùy chọn: tải ảnh chụp phòng bảo tàng thật của trường lên làm nền)</label>
          <div class="cms-upload-zone">
            <input class="cms-input" style="flex:1;" type="text" placeholder="Để trống nếu dùng nền kiến trúc Sơn mài mặc định, hoặc tải ảnh thật lên..."
              value="${escapeHtml(w.bgImage || '')}"
              oninput="MUSEUM_STATE.walls[${selectedCmsWallIdx}].bgImage = this.value; saveMuseumState(false);" />
            <label class="cms-upload-label">
              📷 Tải ảnh nền Vách ${selectedCmsWallIdx + 1}
              <input type="file" accept="image/*" style="display:none;"
                onchange="handleCmsImageUpload(this, (dataUrl) => { MUSEUM_STATE.walls[${selectedCmsWallIdx}].bgImage = dataUrl; saveMuseumState(true); renderCmsTabContent('walls'); })" />
            </label>
            ${w.bgImage ? `<button type="button" class="cms-btn-sm cms-btn-danger" onclick="MUSEUM_STATE.walls[${selectedCmsWallIdx}].bgImage=''; saveMuseumState(true); renderCmsTabContent('walls');">Xóa ảnh nền</button>` : ''}
          </div>
        </div>
      </div>

      <div class="cms-section-card">
        <h3>
          <span>🖼️ Các Kệ / Khung Trưng Bày Trên Vách ${selectedCmsWallIdx + 1} (${(w.exhibits || []).length} khung)</span>
          <button type="button" class="cms-btn-sm" onclick="addWallExhibit(${selectedCmsWallIdx})">+ Thêm Khung Trưng Bày Mới</button>
        </h3>

        ${(w.exhibits || []).map((ex, exIdx) => `
          <div class="cms-item-row">
            <div class="cms-item-header">
              <strong style="color: var(--gold-bright); font-size: 0.88rem;">
                Khung #${exIdx + 1}: ${escapeHtml(ex.title)}
              </strong>
              <div style="display:flex; gap:0.4rem;">
                <label style="font-size:0.75rem; display:inline-flex; align-items:center; gap:0.3rem; color:var(--gold-light); cursor:pointer;">
                  <input type="checkbox" ${ex.isCenterpiece ? 'checked' : ''}
                    onchange="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].isCenterpiece = this.checked; saveMuseumState(true);" />
                  Bục Khánh tiết Trung tâm
                </label>
                <button type="button" class="cms-btn-sm cms-btn-danger" onclick="deleteWallExhibit(${selectedCmsWallIdx}, ${exIdx})">Xóa</button>
              </div>
            </div>

            <div class="cms-grid-2">
              <div class="cms-field">
                <label>Loại kệ / Nhãn nhỏ phía trên</label>
                <input class="cms-input" type="text" value="${escapeHtml(ex.category)}"
                  oninput="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].category = this.value; saveMuseumState(false);" />
              </div>
              <div class="cms-field">
                <label>Tiêu đề Khung trưng bày</label>
                <input class="cms-input" type="text" value="${escapeHtml(ex.title)}"
                  oninput="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].title = this.value; saveMuseumState(false);" />
              </div>
            </div>

            <div class="cms-field">
              <label>Mô tả ngắn hiển thị trên vách tường</label>
              <textarea class="cms-textarea" rows="2"
                oninput="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].desc = this.value; saveMuseumState(false);">${escapeHtml(ex.desc)}</textarea>
            </div>

            <div class="cms-grid-2">
              <div class="cms-field">
                <label>Khi khách bấm vào dấu (+) sẽ thực hiện:</label>
                <select class="cms-select"
                  onchange="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].actionType = this.value; saveMuseumState(true); renderCmsTabContent('walls');">
                  <option value="artifact" ${ex.actionType === 'artifact' ? 'selected' : ''}>Mở Hồ sơ Hiện vật trong Kho lưu trữ</option>
                  <option value="speech" ${ex.actionType === 'speech' ? 'selected' : ''}>Đọc một đoạn Thuyết minh trực tiếp</option>
                  <option value="scroll" ${ex.actionType === 'scroll' ? 'selected' : ''}>Cuộn xuống khu vực Sổ vàng / Trắc nghiệm</option>
                </select>
              </div>

              ${ex.actionType === 'artifact' ? `
                <div class="cms-field">
                  <label>Chọn Hồ sơ Hiện vật liên kết:</label>
                  <select class="cms-select"
                    onchange="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].targetId = this.value; saveMuseumState(true);">
                    ${(MUSEUM_STATE.artifacts || []).map(a => `
                      <option value="${escapeHtml(a.id)}" ${ex.targetId === a.id ? 'selected' : ''}>
                        [${escapeHtml(a.code || a.id)}] ${escapeHtml(a.title)}
                      </option>
                    `).join('')}
                  </select>
                </div>
              ` : ex.actionType === 'speech' ? `
                <div class="cms-field">
                  <label>Lời đọc thuyết minh khi bấm:</label>
                  <input class="cms-input" type="text" value="${escapeHtml(ex.customSpeech || '')}"
                    oninput="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].customSpeech = this.value; saveMuseumState(false);" />
                </div>
              ` : `
                <div class="cms-field">
                  <label>Khu vực cuộn tới:</label>
                  <input class="cms-input" type="text" value="tuong-tac" disabled />
                </div>
              `}
            </div>

            <div class="cms-field" style="margin-bottom:0;">
              <label>Ảnh thu nhỏ trên kệ trưng bày (Tùy chọn)</label>
              <div class="cms-upload-zone">
                <input class="cms-input" style="flex:1;" type="text" placeholder="Dán link ảnh hoặc tải ảnh từ máy..."
                  value="${escapeHtml(ex.imageUrl || '')}"
                  oninput="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].imageUrl = this.value; saveMuseumState(false);" />
                <label class="cms-upload-label">
                  📁 Chọn ảnh
                  <input type="file" accept="image/*" style="display:none;"
                    onchange="handleCmsImageUpload(this, (dataUrl) => { MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].imageUrl = dataUrl; saveMuseumState(true); renderCmsTabContent('walls'); })" />
                </label>
                ${ex.imageUrl ? `<button type="button" class="cms-btn-sm cms-btn-danger" onclick="MUSEUM_STATE.walls[${selectedCmsWallIdx}].exhibits[${exIdx}].imageUrl=''; saveMuseumState(true); renderCmsTabContent('walls');">Xóa ảnh</button>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  if (tab === 'timeline') {
    const list = MUSEUM_STATE.timeline || [];
    container.innerHTML = `
      <div class="cms-section-card">
        <h3>
          <span>⏳ Quản Lý Biên Niên Sử Lịch Sử Đảng & Bác Hồ (${list.length} giai đoạn)</span>
          <button type="button" class="cms-btn-sm" onclick="addTimelineItem()">+ Thêm Mốc Lịch Sử Mới</button>
        </h3>
        <p style="font-size: 0.82rem; color: var(--text-light-muted); margin-bottom: 1rem;">
          Bạn có thể chỉnh sửa nội dung từng giai đoạn lịch sử, câu nói nổi tiếng của Bác hoặc thêm mốc hoạt động mới của Đảng bộ nhà trường.
        </p>

        ${list.map((item, idx) => `
          <div class="cms-item-row">
            <div class="cms-item-header">
              <strong style="color: var(--gold-bright);">Mốc #${idx + 1}: ${escapeHtml(item.period)} – ${escapeHtml(item.title)}</strong>
              <div style="display:flex; gap:0.35rem;">
                ${idx > 0 ? `<button type="button" class="cms-btn-sm" onclick="moveArrayItem(MUSEUM_STATE.timeline, ${idx}, -1, 'timeline')">↑ Lên</button>` : ''}
                ${idx < list.length - 1 ? `<button type="button" class="cms-btn-sm" onclick="moveArrayItem(MUSEUM_STATE.timeline, ${idx}, 1, 'timeline')">↓ Xuống</button>` : ''}
                <button type="button" class="cms-btn-sm cms-btn-danger" onclick="deleteTimelineItem(${idx})">Xóa</button>
              </div>
            </div>

            <div class="cms-grid-2">
              <div class="cms-field">
                <label>Giai đoạn / Năm lịch sử (Hiển thị trên nút bấm)</label>
                <input class="cms-input" type="text" value="${escapeHtml(item.period)}"
                  oninput="MUSEUM_STATE.timeline[${idx}].period = this.value; saveMuseumState(false);" />
              </div>
              <div class="cms-field">
                <label>Tiêu đề giai đoạn lịch sử</label>
                <input class="cms-input" type="text" value="${escapeHtml(item.title)}"
                  oninput="MUSEUM_STATE.timeline[${idx}].title = this.value; saveMuseumState(false);" />
              </div>
            </div>

            <div class="cms-field">
              <label>Nội dung tóm tắt lịch sử</label>
              <textarea class="cms-textarea" rows="3"
                oninput="MUSEUM_STATE.timeline[${idx}].summary = this.value; saveMuseumState(false);">${escapeHtml(item.summary)}</textarea>
            </div>

            <div class="cms-field">
              <label>Ý nghĩa chính trị & Định hướng trưng bày tại trường</label>
              <input class="cms-input" type="text" value="${escapeHtml(item.takeaway)}"
                oninput="MUSEUM_STATE.timeline[${idx}].takeaway = this.value; saveMuseumState(false);" />
            </div>

            <div class="cms-grid-2">
              <div class="cms-field">
                <label>Câu nói nổi tiếng / Trích dẫn văn kiện</label>
                <input class="cms-input" type="text" value="${escapeHtml(item.quote)}"
                  oninput="MUSEUM_STATE.timeline[${idx}].quote = this.value; saveMuseumState(false);" />
              </div>
              <div class="cms-field">
                <label>Hiện vật tiêu biểu gắn kèm</label>
                <input class="cms-input" type="text" value="${escapeHtml(item.artifactName)}"
                  oninput="MUSEUM_STATE.timeline[${idx}].artifactName = this.value; saveMuseumState(false);" />
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  if (tab === 'artifacts') {
    const list = MUSEUM_STATE.artifacts || [];
    container.innerHTML = `
      <div class="cms-section-card">
        <h3>
          <span>🏺 Kho Hồ Sơ Hiện Vật Số & Tủ Sách Đảng (${list.length} hồ sơ)</span>
          <button type="button" class="cms-btn-sm" onclick="addArtifactItem()">+ Thêm Hồ Sơ Hiện Vật Mới</button>
        </h3>
        <p style="font-size: 0.82rem; color: var(--text-light-muted); margin-bottom: 1rem;">
          Tải ảnh chụp thật của hiện vật tại trường, nhập nội dung thuyết minh tự động (hệ thống tự chuyển thành giọng đọc tiếng Việt) và in mã QR dán lên kệ.
        </p>

        ${list.map((item, idx) => `
          <div class="cms-item-row">
            <div class="cms-item-header">
              <strong style="color: var(--gold-bright);">
                [${escapeHtml(item.code || `HS-0${idx + 1}`)}] ${escapeHtml(item.title)}
              </strong>
              <div style="display:flex; gap:0.4rem;">
                <button type="button" class="cms-btn-sm" onclick="openArtifactQrModal('${escapeHtml(item.id)}')">🏷️ Lấy Mã QR</button>
                <button type="button" class="cms-btn-sm" onclick="speakText(MUSEUM_STATE.artifacts[${idx}].audioText)">🔊 Nghe thử</button>
                <button type="button" class="cms-btn-sm cms-btn-danger" onclick="deleteArtifactItem(${idx})">Xóa</button>
              </div>
            </div>

            <div class="cms-grid-3">
              <div class="cms-field">
                <label>Mã số Hồ sơ Lưu trữ</label>
                <input class="cms-input" type="text" value="${escapeHtml(item.code || '')}"
                  oninput="MUSEUM_STATE.artifacts[${idx}].code = this.value; saveMuseumState(false);" />
              </div>
              <div class="cms-field">
                <label>Phân loại Chuyên đề</label>
                <select class="cms-select"
                  onchange="MUSEUM_STATE.artifacts[${idx}].category = this.value; saveMuseumState(true);">
                  <option value="hien-vat" ${item.category === 'hien-vat' ? 'selected' : ''}>Hiện vật & Mô hình</option>
                  <option value="giao-duc" ${item.category === 'giao-duc' ? 'selected' : ''}>Bác Hồ với Giáo dục</option>
                  <option value="tu-lieu-sach" ${item.category === 'tu-lieu-sach' ? 'selected' : ''}>Tủ sách Đảng & Bác Hồ</option>
                  <option value="phu-lam" ${item.category === 'phu-lam' ? 'selected' : ''}>Chi bộ Trường & Phường Phú Lâm</option>
                </select>
              </div>
              <div class="cms-field">
                <label>Nhãn hiển thị & Năm lịch sử</label>
                <div style="display:flex; gap:0.4rem;">
                  <input class="cms-input" type="text" placeholder="Nhãn" value="${escapeHtml(item.tag)}"
                    oninput="MUSEUM_STATE.artifacts[${idx}].tag = this.value; saveMuseumState(false);" />
                  <input class="cms-input" type="text" placeholder="Năm" value="${escapeHtml(item.year)}"
                    oninput="MUSEUM_STATE.artifacts[${idx}].year = this.value; saveMuseumState(false);" />
                </div>
              </div>
            </div>

            <div class="cms-grid-2">
              <div class="cms-field">
                <label>Tên Hiện vật / Tài liệu</label>
                <input class="cms-input" type="text" value="${escapeHtml(item.title)}"
                  oninput="MUSEUM_STATE.artifacts[${idx}].title = this.value; saveMuseumState(false);" />
              </div>
              <div class="cms-field">
                <label>Vị trí đặt tại Phòng truyền thống thực tế</label>
                <input class="cms-input" type="text" value="${escapeHtml(item.location)}"
                  oninput="MUSEUM_STATE.artifacts[${idx}].location = this.value; saveMuseumState(false);" />
              </div>
            </div>

            <div class="cms-field">
              <label>Tóm tắt ngắn (Hiển thị ngoài thẻ)</label>
              <textarea class="cms-textarea" rows="2"
                oninput="MUSEUM_STATE.artifacts[${idx}].summary = this.value; saveMuseumState(false);">${escapeHtml(item.summary)}</textarea>
            </div>

            <div class="cms-field">
              <label>Nội dung chi tiết & Hướng dẫn trưng bày (Hiển thị khi bấm xem chi tiết)</label>
              <textarea class="cms-textarea" rows="2"
                oninput="MUSEUM_STATE.artifacts[${idx}].detail = this.value; saveMuseumState(false);">${escapeHtml(item.detail)}</textarea>
            </div>

            <div class="cms-field">
              <label>🎙️ Kịch bản Giọng đọc Thuyết minh Tự động</label>
              <textarea class="cms-textarea" rows="2"
                oninput="MUSEUM_STATE.artifacts[${idx}].audioText = this.value; saveMuseumState(false);">${escapeHtml(item.audioText)}</textarea>
            </div>

            <div class="cms-grid-2">
              <div class="cms-field" style="margin-bottom:0;">
                <label>Ảnh chụp Hiện vật (Tải từ máy hoặc dán URL)</label>
                <div class="cms-upload-zone">
                  <input class="cms-input" style="flex:1;" type="text" placeholder="URL ảnh hoặc tải từ máy..."
                    value="${escapeHtml(item.imageUrl || '')}"
                    oninput="MUSEUM_STATE.artifacts[${idx}].imageUrl = this.value; saveMuseumState(false);" />
                  <label class="cms-upload-label">
                    📷 Tải ảnh
                    <input type="file" accept="image/*" style="display:none;"
                      onchange="handleCmsImageUpload(this, (dataUrl) => { MUSEUM_STATE.artifacts[${idx}].imageUrl = dataUrl; saveMuseumState(true); renderCmsTabContent('artifacts'); })" />
                  </label>
                </div>
              </div>
              <div class="cms-field" style="margin-bottom:0;">
                <label>Link Sách điện tử PDF / Flipbook / Tư liệu ngoài (Nếu có)</label>
                <input class="cms-input" type="text" placeholder="https://..."
                  value="${escapeHtml(item.docUrl || '')}"
                  oninput="MUSEUM_STATE.artifacts[${idx}].docUrl = this.value; saveMuseumState(false);" />
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  if (tab === 'interactive') {
    const quizList = MUSEUM_STATE.quiz || [];
    const guestEntries = getGuestbookData();

    container.innerHTML = `
      <div class="cms-section-card">
        <h3>
          <span>🎯 Quản Lý Ngân Hàng Câu Hỏi Trắc Nghiệm (${quizList.length} câu)</span>
          <button type="button" class="cms-btn-sm" onclick="addQuizQuestion()">+ Thêm Câu Hỏi Mới</button>
        </h3>

        ${quizList.map((q, qIdx) => `
          <div class="cms-item-row">
            <div class="cms-item-header">
              <strong style="color: var(--gold-bright);">Câu hỏi #${qIdx + 1}</strong>
              <button type="button" class="cms-btn-sm cms-btn-danger" onclick="deleteQuizQuestion(${qIdx})">Xóa câu này</button>
            </div>
            <div class="cms-field">
              <label>Nội dung câu hỏi</label>
              <input class="cms-input" type="text" value="${escapeHtml(q.question)}"
                oninput="MUSEUM_STATE.quiz[${qIdx}].question = this.value; saveMuseumState(false);" />
            </div>
            <div class="cms-grid-2">
              ${(q.options || []).map((opt, oIdx) => `
                <div class="cms-field">
                  <label>Phương án ${oIdx + 1} ${Number(q.correctIndex) === oIdx ? '✔ (Đáp án đúng)' : ''}</label>
                  <input class="cms-input" type="text" value="${escapeHtml(opt)}"
                    oninput="MUSEUM_STATE.quiz[${qIdx}].options[${oIdx}] = this.value; saveMuseumState(false);" />
                </div>
              `).join('')}
            </div>
            <div class="cms-grid-2">
              <div class="cms-field" style="margin-bottom:0;">
                <label>Chọn đáp án đúng</label>
                <select class="cms-select"
                  onchange="MUSEUM_STATE.quiz[${qIdx}].correctIndex = Number(this.value); saveMuseumState(true); renderCmsTabContent('interactive');">
                  <option value="0" ${Number(q.correctIndex) === 0 ? 'selected' : ''}>Phương án 1 (A)</option>
                  <option value="1" ${Number(q.correctIndex) === 1 ? 'selected' : ''}>Phương án 2 (B)</option>
                  <option value="2" ${Number(q.correctIndex) === 2 ? 'selected' : ''}>Phương án 3 (C)</option>
                  <option value="3" ${Number(q.correctIndex) === 3 ? 'selected' : ''}>Phương án 4 (D)</option>
                </select>
              </div>
              <div class="cms-field" style="margin-bottom:0;">
                <label>Giải thích hiển thị sau khi trả lời</label>
                <input class="cms-input" type="text" value="${escapeHtml(q.explanation)}"
                  oninput="MUSEUM_STATE.quiz[${qIdx}].explanation = this.value; saveMuseumState(false);" />
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="cms-section-card">
        <h3>
          <span>✍️ Quản Lý Sổ Vàng Truyền Thống (${guestEntries.length} lượt ghi)</span>
          <button type="button" class="cms-btn-sm" onclick="exportGuestbookCSV()">📥 Xuất Excel / CSV</button>
        </h3>
        ${guestEntries.map((g, gIdx) => `
          <div class="cms-item-row" style="display:flex; justify-content:space-between; align-items:center; gap:1rem;">
            <div>
              <strong style="color:var(--gold-bright); font-size:0.84rem;">${escapeHtml(g.name)} (${escapeHtml(g.role)} - ${escapeHtml(g.date)})</strong>
              <p style="font-size:0.84rem; color:var(--text-light-muted); margin-top:0.2rem;">“${escapeHtml(g.message)}”</p>
            </div>
            <button type="button" class="cms-btn-sm cms-btn-danger" onclick="deleteGuestbookEntry(${gIdx})">Xóa</button>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  if (tab === 'publish') {
    container.innerHTML = `
      <div class="cms-section-card">
        <h3>💾 1. Sao Lưu & Khôi Phục Dự Án Bảo Tàng (JSON)</h3>
        <p style="font-size: 0.85rem; color: var(--text-light-muted); margin-bottom: 1rem;">
          Toàn bộ nội dung, hình ảnh 4 vách 360°, biên niên sử, hiện vật và câu hỏi trắc nghiệm bạn vừa chỉnh sửa được lưu tức thì trên trình duyệt này. Để chuyển sang máy tính khác hoặc gửi cho thành viên trong Ban Truyền thông, hãy xuất ra file <code>.json</code>:
        </p>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button type="button" class="btn-primary" onclick="exportMuseumJson()">
            📥 Tải File Dữ Liệu Bảo Tàng (.json)
          </button>
          <label class="btn-secondary" style="cursor:pointer;">
            📂 Nhập File Dữ Liệu (.json) Từ Máy Tính
            <input type="file" accept=".json" style="display:none;" onchange="importMuseumJson(this)" />
          </label>
        </div>
      </div>

      <div class="cms-section-card">
        <h3>🚀 2. Đóng Gói Vĩnh Viễn Để Đưa Lên Mạng (Hosting / GitHub Pages)</h3>
        <p style="font-size: 0.85rem; color: var(--text-light-muted); margin-bottom: 1rem;">
          Sau khi bạn đã thiết kế xong bảo tàng theo đúng ý muốn trên giao diện No-Code này, bạn có thể bấm nút <strong>“Đóng gói thành file app.js mới”</strong> bên dưới rồi chép đè vào thư mục web để mọi người truy cập từ bất kỳ máy nào cũng thấy ngay phiên bản mới nhất:
        </p>
        <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
          <button type="button" class="btn-primary" onclick="exportBakedDataScript()">
            📦 Tải File Dữ Liệu Đóng Gói Vĩnh Viễn (museum-config.json)
          </button>
          <button type="button" class="cms-btn-sm" onclick="copyMuseumStateToClipboard()">
            📋 Sao chép Toàn bộ JSON vào Clipboard
          </button>
          <button type="button" class="cms-btn-sm cms-btn-danger" onclick="resetToDefaultMuseum()">
            🔄 Khôi phục Dữ liệu Gốc Ban Đầu
          </button>
        </div>
      </div>
    `;
  }
}

// ============================================================================
// CÁC HÀM THAO TÁC TRONG NO-CODE STUDIO (THÊM / XÓA / UPLOAD ẢNH NÉN)
// ============================================================================
window.selectWallInCms = function (idx) {
  selectedCmsWallIdx = idx;
  goToWall(idx);
  renderCmsTabContent('walls');
};

window.addWallExhibit = function (wallIdx) {
  const wall = MUSEUM_STATE.walls[wallIdx];
  if (!wall) return;
  wall.exhibits.push({
    id: 'ex-' + Date.now(),
    category: 'Kệ Trưng Bày Mới',
    title: 'Tiêu đề Hiện vật / Bảng trích dẫn mới',
    desc: 'Mô tả ngắn gọn về hiện vật hoặc nội dung trưng bày tại vị trí này.',
    isCenterpiece: false,
    actionType: 'artifact',
    targetId: (MUSEUM_STATE.artifacts[0] && MUSEUM_STATE.artifacts[0].id) || 'art-1',
    customSpeech: '',
    imageUrl: ''
  });
  saveMuseumState(true);
  renderCmsTabContent('walls');
};

window.deleteWallExhibit = function (wallIdx, exIdx) {
  const wall = MUSEUM_STATE.walls[wallIdx];
  if (!wall || wall.exhibits.length <= 1) {
    alert('Mỗi vách tường cần có ít nhất 1 khung trưng bày.');
    return;
  }
  wall.exhibits.splice(exIdx, 1);
  saveMuseumState(true);
  renderCmsTabContent('walls');
};

window.addTimelineItem = function () {
  MUSEUM_STATE.timeline.push({
    id: 'tl-' + Date.now(),
    period: 'Giai đoạn mới',
    title: 'Tiêu đề sự kiện / dấu mốc lịch sử mới',
    summary: 'Nhập nội dung tóm tắt sự kiện lịch sử hoặc hoạt động của Chi bộ nhà trường và Đảng bộ Phường Phú Lâm...',
    takeaway: 'Ý nghĩa giáo dục chính trị tư tưởng cho đảng viên, giáo viên và học sinh.',
    quote: '“Câu nói hoặc lời căn dặn tiêu biểu...”',
    artifactName: 'Tên hồ sơ hiện vật gắn kèm'
  });
  saveMuseumState(true);
  renderCmsTabContent('timeline');
};

window.deleteTimelineItem = function (idx) {
  if (MUSEUM_STATE.timeline.length <= 1) return;
  MUSEUM_STATE.timeline.splice(idx, 1);
  saveMuseumState(true);
  renderCmsTabContent('timeline');
};

window.addArtifactItem = function () {
  const nextNum = (MUSEUM_STATE.artifacts.length + 1).toString().padStart(3, '0');
  MUSEUM_STATE.artifacts.unshift({
    id: 'art-' + Date.now(),
    code: `HS-MDC-${nextNum}`,
    category: 'hien-vat',
    tag: 'Hiện vật mới',
    title: 'Tên Hiện vật / Tư liệu mới',
    year: '2026',
    location: 'Tủ trưng bày – Phòng truyền thống trường',
    summary: 'Mô tả tóm tắt giá trị lịch sử và ý nghĩa của hiện vật/tài liệu này.',
    detail: 'Hướng dẫn chi tiết hoặc nội dung tư liệu mở rộng khi khách tham quan bấm xem hồ sơ.',
    audioText: 'Thuyết minh tự động cho hiện vật mới.',
    imageUrl: '',
    docUrl: ''
  });
  saveMuseumState(true);
  renderCmsTabContent('artifacts');
};

window.deleteArtifactItem = function (idx) {
  if (MUSEUM_STATE.artifacts.length <= 1) return;
  MUSEUM_STATE.artifacts.splice(idx, 1);
  saveMuseumState(true);
  renderCmsTabContent('artifacts');
};

window.addQuizQuestion = function () {
  MUSEUM_STATE.quiz.push({
    question: `Câu ${MUSEUM_STATE.quiz.length + 1}: Nhập nội dung câu hỏi tìm hiểu mới?`,
    options: [
      'A. Phương án trả lời A',
      'B. Phương án trả lời B',
      'C. Phương án trả lời C',
      'D. Phương án trả lời D'
    ],
    correctIndex: 0,
    explanation: 'Chính xác! Giải thích thêm về đáp án đúng.'
  });
  saveMuseumState(true);
  renderCmsTabContent('interactive');
};

window.deleteQuizQuestion = function (idx) {
  if (MUSEUM_STATE.quiz.length <= 1) return;
  MUSEUM_STATE.quiz.splice(idx, 1);
  saveMuseumState(true);
  renderCmsTabContent('interactive');
};

window.deleteGuestbookEntry = function (idx) {
  const list = getGuestbookData();
  list.splice(idx, 1);
  localStorage.setItem(STORAGE_KEY_GUESTBOOK, JSON.stringify(list));
  renderGuestbookEntries();
  renderCmsTabContent('interactive');
};

window.moveArrayItem = function (arr, idx, dir, tabToRefresh) {
  const targetIdx = idx + dir;
  if (targetIdx < 0 || targetIdx >= arr.length) return;
  const temp = arr[idx];
  arr[idx] = arr[targetIdx];
  arr[targetIdx] = temp;
  saveMuseumState(true);
  renderCmsTabContent(tabToRefresh);
};

// Nén ảnh ngay trên trình duyệt bằng Canvas để lưu mượt mà vào LocalStorage & JSON
window.handleCmsImageUpload = function (inputEl, callback) {
  const file = inputEl.files && inputEl.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      const maxW = 1100;
      let w = img.width;
      let h = img.height;
      if (w > maxW) {
        h = Math.round((h * maxW) / w);
        w = maxW;
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
      callback(compressedDataUrl);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

// Xuất / Nhập / Khôi phục JSON
window.exportMuseumJson = function () {
  const payload = {
    exportedAt: new Date().toISOString(),
    museumState: MUSEUM_STATE,
    guestbook: getGuestbookData()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `khong-gian-van-hoa-hcm-data.json`;
  a.click();
  URL.revokeObjectURL(url);
  showCmsToast('📥 Đã tải xuống file cấu hình Bảo tàng (.json)');
};

window.importMuseumJson = function (inputEl) {
  const file = inputEl.files && inputEl.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const parsed = JSON.parse(e.target.result);
      const stateToLoad = parsed.museumState || parsed;
      if (stateToLoad && stateToLoad.general && stateToLoad.walls) {
        MUSEUM_STATE = stateToLoad;
        if (Array.isArray(parsed.guestbook)) {
          localStorage.setItem(STORAGE_KEY_GUESTBOOK, JSON.stringify(parsed.guestbook));
        }
        saveMuseumState(true);
        renderCmsTabContent(activeCmsTab);
        showCmsToast('✔ Đã khôi phục dữ liệu Bảo tàng từ file JSON!');
      } else {
        alert('File JSON không đúng định dạng của Bảo tàng.');
      }
    } catch (err) {
      alert('Không thể đọc file JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
};

window.exportBakedDataScript = function () {
  const payload = {
    exportedAt: new Date().toISOString(),
    museumState: MUSEUM_STATE,
    guestbook: getGuestbookData()
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `museum-config.json`;
  a.click();
  URL.revokeObjectURL(url);
  showCmsToast('📦 Đã tải xuống museum-config.json! Hãy đặt file này vào cùng thư mục web.');
};

window.copyMuseumStateToClipboard = function () {
  navigator.clipboard.writeText(JSON.stringify(MUSEUM_STATE, null, 2)).then(() => {
    showCmsToast('📋 Đã sao chép dữ liệu JSON vào bộ nhớ tạm!');
  });
};

window.resetToDefaultMuseum = function () {
  if (!confirm('Bạn có chắc chắn muốn khôi phục toàn bộ Bảo tàng về dữ liệu mẫu ban đầu không?')) return;
  localStorage.removeItem(STORAGE_KEY_CMS);
  MUSEUM_STATE = cloneDeep(DEFAULT_MUSEUM_DATA);
  renderEntireMuseum();
  renderCmsTabContent(activeCmsTab);
  const previewFrame = document.getElementById('livePreviewIframe');
  if (previewFrame && previewFrame.contentWindow) {
    previewFrame.contentWindow.location.reload();
  }
  showCmsToast('🔄 Đã khôi phục dữ liệu mẫu ban đầu!');
};
