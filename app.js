// Dữ liệu Bảo tàng Hồ Chí Minh Trực tuyến - Trường học & Phường Phú Lâm

const TIMELINE_DATA = [
  {
    id: '1890-1911',
    period: '1890 – 1911',
    title: 'Quê hương Kim Liên & Tuổi trẻ nuôi chí lớn',
    summary: 'Sinh ra tại làng Sen (Kim Liên, Nam Đàn, Nghệ An) trong một gia đình nhà nho yêu nước. Chứng kiến cảnh nước mất nhà tan và các phong trào yêu nước đầu thế kỷ XX bị đàn áp, người thanh niên Nguyễn Tất Thành sớm hun đúc ý chí tìm một con đường giải phóng dân tộc mới.',
    takeaway: 'Ý nghĩa giáo dục tại phòng truyền thống: Bồi đắp lòng hiếu học, tinh thần tự học và tình yêu quê hương đất nước cho học sinh ngay từ ghế nhà trường.',
    quote: '“Tôi muốn đi ra nước ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta.”',
    artifactName: 'Mô hình Nhà tranh Làng Sen & Trường Dục Thanh'
  },
  {
    id: '1911-1941',
    period: '05/06/1911 – 1941',
    title: 'Hành trình 30 năm bôn ba tìm đường cứu nước',
    summary: 'Từ Bến cảng Nhà Rồng trên con tàu Đô đốc Latouche-Tréville với tên gọi Văn Ba, Người đã đi qua gần 30 quốc gia qua 3 đại dương, 4 châu lục, làm đủ mọi nghề để sống và hoạt động cách mạng. Năm 1930, Người sáng lập Đảng Cộng sản Việt Nam; mùa xuân năm 1941, Người trở về Pác Bó (Cao Bằng) trực tiếp lãnh đạo cách mạng.',
    takeaway: 'Tư liệu trưng bày trọng tâm tại trường: Bản đồ hành trình cứu nước của Bác và mô hình tàu Amiral Latouche-Tréville.',
    quote: '“Tự do cho đồng bào tôi, độc lập cho Tổ quốc tôi, đấy là tất cả những điều tôi muốn, đấy là tất cả những điều tôi hiểu.”',
    artifactName: 'Bản đồ Hành trình 30 năm & Tàu Latouche-Tréville'
  },
  {
    id: '1945-1954',
    period: '1945 – 1954',
    title: 'Tuyên ngôn Độc lập & Kháng chiến kiến quốc',
    summary: 'Ngày 02/09/1945 tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa. Ngay trong ngày khai trường đầu tiên của nước Việt Nam độc lập (9/1945), Bác đã gửi thư cho học sinh cả nước với lời căn dặn bất hủ về vai trò của thế hệ trẻ.',
    takeaway: 'Điểm nhấn gắn với nhà trường: Bức thư Bác Hồ gửi học sinh nhân ngày khai trường đầu tiên (9/1945) và 5 Điều Bác Hồ dạy thiếu niên, nhi đồng.',
    quote: '“Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.”',
    artifactName: 'Bản sao Tuyên ngôn Độc lập & Thư gửi Học sinh 1945'
  },
  {
    id: '1954-1969',
    period: '1954 – 1969',
    title: 'Bác Hồ với miền Nam & Di chúc thiêng liêng',
    summary: 'Dù bận trăm công nghìn việc, trái tim Chủ tịch Hồ Chí Minh luôn hướng về đồng bào và chiến sĩ miền Nam (“Miền Nam luôn trong trái tim tôi”). Bản Di chúc lịch sử Người để lại là kết tinh tư tưởng, đạo đức, phong cách Hồ Chí Minh cho muôn đời sau.',
    takeaway: 'Gắn kết địa phương: Truyền thống đấu tranh cách mạng và xây dựng Không gian Văn hóa Hồ Chí Minh tại địa bàn Phường Phú Lâm.',
    quote: '“Bồi dưỡng thế hệ cách mạng cho đời sau là một việc rất quan trọng và rất cần thiết.”',
    artifactName: 'Toàn văn Di chúc (1969) & Kỷ vật Cây vú sữa miền Nam'
  },
  {
    id: 'phu-lam',
    period: 'Hiện nay',
    title: 'Không gian Văn hóa Hồ Chí Minh tại Trường & Phường Phú Lâm',
    summary: 'Thực hiện chủ trương xây dựng Không gian Văn hóa Hồ Chí Minh, Phòng Bảo tàng của nhà trường kết hợp cùng cổng bảo tàng trực tuyến này trở thành địa chỉ đỏ giáo dục truyền thống, nơi tổ chức tiết học lịch sử trải nghiệm, kết nạp Đoàn – Đội và lan tỏa việc học tập, làm theo lời Bác đến từng học sinh, giáo viên và người dân Phường Phú Lâm.',
    takeaway: 'Kết nối thực – ảo: Mỗi kệ trưng bày trong phòng thật tại trường đều có mã QR dẫn thẳng tới trang thuyết minh âm thanh trên Bảo tàng Online này.',
    quote: '“Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.”',
    artifactName: 'Sổ vàng Điện tử & Hoạt động Phường Phú Lâm'
  }
];

const ARTIFACTS_DATA = [
  {
    id: 'art-1',
    category: 'hien-vat',
    tag: 'Hiện vật tiêu biểu',
    title: 'Mô hình Tàu Amiral Latouche-Tréville',
    year: '05/06/1911',
    location: 'Tủ kính trung tâm – Vách số 1 (Phòng bảo tàng trường)',
    summary: 'Mô hình con tàu buôn Pháp nơi người thanh niên Nguyễn Tất Thành (Văn Ba) rời Bến Nhà Rồng ra đi tìm đường cứu nước.',
    detail: 'Tại phòng Bảo tàng Hồ Chí Minh của trường, mô hình tàu được đặt ở vị trí trang trọng mở đầu chuyến tham quan. Khi nâng cấp lên Bảo tàng Online, bạn chỉ cần chụp 1–3 tấm ảnh thật của mô hình tại trường để thay vào khung này, kèm mã QR dán ngay trên tủ kính để học sinh quét nghe thuyết minh tự động.',
    audioText: 'Mô hình tàu Đô đốc Latouche-Tréville. Ngày 5 tháng 6 năm 1911, từ Bến Nhà Rồng, người thanh niên yêu nước Nguyễn Tất Thành với tên gọi Văn Ba đã làm phụ bếp trên con tàu này, bắt đầu hành trình 30 năm tìm đường cứu nước.'
  },
  {
    id: 'art-2',
    category: 'giao-duc',
    tag: 'Bác Hồ với Giáo dục',
    title: 'Thư Bác gửi Học sinh nhân ngày khai trường đầu tiên',
    year: 'Tháng 9/1945',
    location: 'Bảng trích dẫn Vách số 3 – Chuyên đề Giáo dục',
    summary: 'Bức thư lịch sử gửi các em học sinh cả nước ngay sau khi nước nhà giành độc lập, khích lệ tinh thần học tập xây dựng đất nước.',
    detail: 'Đây là tư liệu cốt lõi không thể thiếu trong Không gian Văn hóa Hồ Chí Minh khối trường học. Trên giao diện trực tuyến, học sinh có thể đọc toàn văn bức thư, nghe giọng đọc truyền cảm và làm bài trắc nghiệm ngắn ngay sau khi xem.',
    audioText: 'Thư Bác Hồ gửi các em học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa, tháng 9 năm 1945. Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.'
  },
  {
    id: 'art-3',
    category: 'hien-vat',
    tag: 'Đạo đức – Phong cách',
    title: 'Đôi dép cao su & Chiếc áo kaki giản dị',
    year: '1947 – 1969',
    location: 'Tủ trưng bày Chuyên đề Đời sống & Phong cách Bác',
    summary: 'Biểu tượng bất hủ về lối sống cần, kiệm, liêm, chính, hết lòng vì nước vì dân của Chủ tịch Hồ Chí Minh.',
    detail: 'Đôi dép cao su được cắt từ lốp xe ô tô quân sự Pháp thu được tại Việt Bắc năm 1947 đã theo bước chân Người đi khắp các chiến dịch và các chuyến thăm quốc tế. Hiện vật giúp giáo dục học sinh lối sống giản dị, tiết kiệm và sẻ chia.',
    audioText: 'Đôi dép cao su và chiếc áo kaki sờn vai là biểu tượng sinh động cho phong cách sống thanh cao, giản dị, cần kiệm liêm chính của Chủ tịch Hồ Chí Minh.'
  },
  {
    id: 'art-4',
    category: 'tu-lieu-sach',
    tag: 'Tủ sách Hồ Chí Minh',
    title: 'Tác phẩm “Đường Kách Mệnh” & “Nhật ký trong tù”',
    year: '1927 & 1942–1943',
    location: 'Kệ Tủ sách Điện tử – Vách số 2',
    summary: 'Những tác phẩm kết tinh trí tuệ cách mạng và tâm hồn nghệ sĩ lớn của Chủ tịch Hồ Chí Minh, được số hóa để đọc trực tuyến.',
    detail: 'Trong Bảo tàng Online, mục Tủ sách Điện tử cho phép gắn link PDF hoặc Flipbook (sách lật trang) các đầu sách có sẵn tại thư viện trường để học sinh và đoàn viên Phường Phú Lâm đọc trực tiếp trên điện thoại.',
    audioText: 'Tủ sách Hồ Chí Minh trực tuyến giới thiệu các tác phẩm tiêu biểu như Đường Kách Mệnh, Nhật ký trong tù, Bản Di chúc lịch sử và các câu chuyện kể về tấm gương đạo đức của Người.'
  },
  {
    id: 'art-5',
    category: 'giao-duc',
    tag: 'Thiếu niên – Nhi đồng',
    title: '5 Điều Bác Hồ dạy Thiếu niên, Nhi đồng',
    year: '15/05/1961',
    location: 'Mảng tường Chính diện – Sảnh Khánh tiết',
    summary: 'Kim chỉ nam rèn luyện đạo đức và học tập của bao thế hệ học sinh Việt Nam nhân kỷ niệm 20 năm thành lập Đội TNTP.',
    detail: 'Yêu Tổ quốc, yêu đồng bào / Học tập tốt, lao động tốt / Đoàn kết tốt, kỷ luật tốt / Giữ gìn vệ sinh thật tốt / Khiêm tốn, thật thà, dũng cảm.',
    audioText: 'Năm điều Bác Hồ dạy thiếu niên, nhi đồng: Một, Yêu Tổ quốc, yêu đồng bào. Hai, Học tập tốt, lao động tốt. Ba, Đoàn kết tốt, kỷ luật tốt. Bốn, Giữ gìn vệ sinh thật tốt. Năm, Khiêm tốn, thật thà, dũng cảm.'
  },
  {
    id: 'art-6',
    category: 'phu-lam',
    tag: 'Hoạt động Địa phương',
    title: 'Góc Sinh hoạt Chuyên đề Trường & Phường Phú Lâm',
    year: '2025 – 2026',
    location: 'Vách số 4 – Không gian Tương tác Cộng đồng',
    summary: 'Lưu giữ hình ảnh tiết học lịch sử tại phòng bảo tàng, lễ kết nạp Đoàn – Đội và các gương điển hình “Học tập và làm theo lời Bác”.',
    detail: 'Khu vực này được thiết kế để Ban Truyền thông của trường và Phường Phú Lâm dễ dàng cập nhật hình ảnh hoạt động mới hàng tháng, biến bảo tàng thành một không gian sống động chứ không chỉ là trang tĩnh.',
    audioText: 'Không gian kết nối giữa nhà trường và Phường Phú Lâm, nơi lưu giữ những khoảnh khắc sinh hoạt truyền thống, tiết học lịch sử tại bảo tàng và tuyên dương các gương sáng học tập, làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh.'
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
    question: 'Câu 2: Câu nói nổi tiếng “Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em” trích từ văn kiện nào của Bác?',
    options: [
      'A. Bản Tuyên ngôn Độc lập (2/9/1945)',
      'B. Thư gửi các em học sinh nhân ngày khai trường đầu tiên (9/1945)',
      'C. Lời kêu gọi Toàn quốc kháng chiến (12/1946)',
      'D. Bài nói chuyện tại Đại hội Thanh niên (1950)'
    ],
    correctIndex: 1,
    explanation: 'Chính xác! Đây là bức thư lịch sử Bác gửi học sinh cả nước nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa (tháng 9/1945).'
  },
  {
    question: 'Câu 3: Mục đích cốt lõi của việc xây dựng “Không gian văn hóa Hồ Chí Minh trực tuyến” tại trường và Phường Phú Lâm là gì?',
    options: [
      'A. Chỉ để lưu trữ văn bản hành chính nội bộ',
      'B. Thay thế hoàn toàn việc học môn Lịch sử trên lớp',
      'C. Đưa tư tưởng, đạo đức, phong cách của Bác lan tỏa mọi lúc mọi nơi tới học sinh, giáo viên và người dân qua công nghệ số',
      'D. Chỉ mở vào các ngày lễ lớn trong năm'
    ],
    correctIndex: 2,
    explanation: 'Rất tuyệt vời! Bảo tàng trực tuyến giúp xóa nhòa khoảng cách không gian và thời gian, kết nối chặt chẽ với phòng bảo tàng thật của trường.'
  }
];

const INITIAL_GUESTBOOK = [
  {
    name: 'Cô Nguyễn Thị Minh Châu',
    role: 'Giáo viên Lịch sử – THPT Mạc Đĩnh Chi',
    date: 'Hôm nay',
    message: 'Không gian trực tuyến kết hợp với phòng truyền thống của Trường THPT Mạc Đĩnh Chi giúp các em học sinh chuẩn bị bài trước ở nhà và hứng thú hơn hẳn khi bước vào tiết học thực tế!'
  },
  {
    name: 'Trần Hoàng Nam',
    role: 'Đoàn viên thanh niên Phường Phú Lâm',
    date: 'Hôm qua',
    message: 'Tự hào khi Phường Phú Lâm và Trường THPT Mạc Đĩnh Chi có một bảo tàng số trang trọng, dễ xem ngay trên điện thoại. Phần thuyết minh âm thanh rất truyền cảm.'
  },
  {
    name: 'Lê Ngọc Bảo Trân',
    role: 'Học sinh tiêu biểu – THPT Mạc Đĩnh Chi',
    date: '2 ngày trước',
    message: 'Em hứa sẽ luôn cố gắng học tập tốt, rèn luyện tốt theo 5 Điều Bác Hồ dạy để xứng đáng là học sinh mái trường Mạc Đĩnh Chi.'
  }
];

// ====================================================
// STATE & INITIALIZATION
// ====================================================
let currentWallIndex = 0;
let isAudioPlaying = false;
let currentQuizIdx = 0;
let quizScore = 0;
let quizAnswered = false;

document.addEventListener('DOMContentLoaded', () => {
  initVirtualRoom();
  initTimeline();
  renderArtifacts('all');
  initArtifactFilters();
  initQuiz();
  initGuestbook();
  initAudioGuideButton();
});

// ====================================================
// 1. 3D / 360° VIRTUAL ROOM CONTROLLER (Zero Server GPU)
// ====================================================
function initVirtualRoom() {
  const tabs = document.querySelectorAll('.wall-tab');
  const prevBtn = document.getElementById('btnPrevWall');
  const nextBtn = document.getElementById('btnNextWall');
  const viewport = document.getElementById('roomViewport');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => goToWall(index));
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToWall((currentWallIndex + 3) % 4);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToWall((currentWallIndex + 1) % 4);
    });
  }

  // Drag / Swipe support on the 3D Room Viewport
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

function goToWall(index) {
  currentWallIndex = index;
  const stage = document.getElementById('panoramaStage');
  const tabs = document.querySelectorAll('.wall-tab');
  const wallLabel = document.getElementById('currentWallIndicator');

  if (stage) {
    stage.style.transform = `translateX(-${index * 25}%)`;
  }

  tabs.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });

  const names = [
    'Góc nhìn 1/4: Sảnh Chính diện & Tượng đài Bác',
    'Góc nhìn 2/4: Vách Trưng bày Quê hương & Hành trình Cứu nước',
    'Góc nhìn 3/4: Vách Bác Hồ với Sự nghiệp Giáo dục & Tủ sách',
    'Góc nhìn 4/4: Góc Hoạt động Nhà trường & Phường Phú Lâm'
  ];
  if (wallLabel) {
    wallLabel.textContent = names[index];
  }
}

window.openArtifactById = function (artifactId) {
  const item = ARTIFACTS_DATA.find(a => a.id === artifactId);
  if (item) openModal(item);
};

// ====================================================
// 2. TIMELINE CONTROLLER
// ====================================================
function initTimeline() {
  const tabsContainer = document.getElementById('timelineTabs');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = TIMELINE_DATA.map((item, idx) => `
    <button class="timeline-step-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
      ${item.period}
    </button>
  `).join('');

  tabsContainer.querySelectorAll('.timeline-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-idx'), 10);
      tabsContainer.querySelectorAll('.timeline-step-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTimelineDetail(idx);
    });
  });

  renderTimelineDetail(0);
}

function renderTimelineDetail(idx) {
  const item = TIMELINE_DATA[idx];
  const card = document.getElementById('timelineDisplayCard');
  if (!card || !item) return;

  card.innerHTML = `
    <div>
      <span class="timeline-year-badge">${item.period}</span>
      <h3 class="timeline-event-title">${item.title}</h3>
      <p class="timeline-event-body">${item.summary}</p>
      <div class="timeline-Takeaway">
        <strong>💡 Gợi ý trưng bày & số hóa cho trường:</strong> ${item.takeaway}
      </div>
    </div>
    <div class="timeline-visual-box">
      <div style="font-size: 2.3rem; margin-bottom: 0.75rem; color: var(--gold-bright);">★</div>
      <p style="font-family: var(--font-serif); font-style: italic; font-size: 1.05rem; margin-bottom: 1rem; color: var(--bg-parchment);">
        ${item.quote}
      </p>
      <div style="font-size: 0.8rem; color: var(--gold-primary); border-top: 1px solid rgba(212,168,83,0.3); padding-top: 0.75rem; width: 100%;">
        Hiện vật tiêu biểu: <strong>${item.artifactName}</strong>
      </div>
    </div>
  `;
}

// ====================================================
// 3. DIGITAL ARTIFACTS GALLERY & MODAL
// ====================================================
function initArtifactFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderArtifacts(filter);
    });
  });
}

function renderArtifacts(filter) {
  const grid = document.getElementById('artifactsGrid');
  if (!grid) return;

  const list = filter === 'all'
    ? ARTIFACTS_DATA
    : ARTIFACTS_DATA.filter(item => item.category === filter);

  grid.innerHTML = list.map(item => `
    <article class="artifact-card">
      <div class="artifact-Illustration">
        <span class="artifact-tag">${item.tag}</span>
        <div style="text-align: center; padding: 1rem;">
          <div style="width: 58px; height: 58px; border-radius: 50%; border: 1.5px solid var(--gold-primary); display: inline-flex; align-items: center; justify-content: center; color: var(--gold-bright); font-family: var(--font-serif); font-size: 1.35rem; background: rgba(0,0,0,0.35);">
            ✦
          </div>
          <div style="font-size: 0.78rem; color: var(--gold-bright); margin-top: 0.5rem; opacity: 0.9;">
            ${item.year}
          </div>
        </div>
      </div>
      <div class="artifact-body">
        <h3 class="artifact-title">${item.title}</h3>
        <p class="artifact-summary">${item.summary}</p>
        <div class="artifact-footer">
          <button class="btn-card-action" onclick="openArtifactById('${item.id}')">
            🔍 Xem chi tiết & Vị trí kệ
          </button>
          <button class="btn-card-action" onclick="speakText('${item.audioText.replace(/'/g, "\\'")}')">
            🔊 Nghe thuyết minh
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function openModal(item) {
  const modal = document.getElementById('artifactModal');
  const body = document.getElementById('modalBodyContent');
  if (!modal || !body) return;

  body.innerHTML = `
    <span style="display:inline-block; background: rgba(212,168,83,0.18); color: var(--gold-bright); padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.78rem; margin-bottom: 0.75rem;">
      ${item.tag} • ${item.year}
    </span>
    <h3 style="font-family: var(--font-serif); font-size: 1.65rem; color: var(--text-light); margin-bottom: 0.5rem;">
      ${item.title}
    </h3>
    <p style="font-size: 0.85rem; color: var(--gold-primary); margin-bottom: 1.25rem;">
      📍 Vị trí thực tế: ${item.location}
    </p>
    <p style="color: var(--text-light-muted); margin-bottom: 1.25rem; line-height: 1.7;">
      ${item.summary}
    </p>
    <div style="background: rgba(0,0,0,0.35); border-left: 3px solid var(--gold-primary); padding: 1rem; border-radius: 6px; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--bg-parchment);">
      <strong>Hướng dẫn triển khai thực tế:</strong><br/>
      ${item.detail}
    </div>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <button class="btn-primary" onclick="speakText('${item.audioText.replace(/'/g, "\\'")}')">
        🔊 Phát giọng đọc thuyết minh
      </button>
      <button class="btn-secondary" onclick="closeArtifactModal()">
        Đóng cửa sổ
      </button>
    </div>
  `;

  modal.classList.add('open');
}

window.closeArtifactModal = function () {
  const modal = document.getElementById('artifactModal');
  if (modal) modal.classList.remove('open');
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

// ====================================================
// 4. WEB SPEECH API AUDIO GUIDE (Thuyết minh tự động)
// ====================================================
window.speakText = function (text) {
  const btnGuide = document.getElementById('btnAudioGuide');
  const labelGuide = document.getElementById('audioGuideLabel');

  if (!('speechSynthesis' in window)) {
    alert('Trình duyệt của bạn đang tắt tính năng đọc giọng nói. Nội dung thuyết minh: ' + text);
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

  const welcomeNarration = 'Chào mừng quý đại biểu, thầy cô giáo, các em học sinh Trường Trung học phổ thông Mạc Đĩnh Chi và nhân dân Phường Phú Lâm đến với Không gian văn hóa Hồ Chí Minh trực tuyến. Tại đây, quý vị có thể xoay tham quan 4 vách phòng bảo tàng, tra cứu dòng thời gian lịch sử, nghe thuyết minh từng hiện vật và ghi sổ vàng lưu niệm.';

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

// ====================================================
// 5. INTERACTIVE QUIZ & CERTIFICATE GENERATOR
// ====================================================
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
        <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--gold-bright); margin-bottom: 0.4rem;">
          Chứng nhận Tham quan & Tìm hiểu
        </h4>
        <p style="font-size: 0.92rem; color: var(--text-light-muted); margin-bottom: 1rem;">
          Bạn đã hoàn thành xuất sắc <strong>${quizScore}/${QUIZ_QUESTIONS.length}</strong> câu hỏi tại Không gian Văn hóa Hồ Chí Minh – Trường THPT Mạc Đĩnh Chi & Phường Phú Lâm!
        </p>
        <button class="btn-primary" onclick="resetQuiz()">Làm lại lượt mới</button>
      </div>
    `;
    return;
  }

  const q = QUIZ_QUESTIONS[currentQuizIdx];
  quizAnswered = false;

  box.innerHTML = `
    <div style="font-size: 0.8rem; color: var(--gold-primary); margin-bottom: 0.4rem;">
      Câu hỏi ${currentQuizIdx + 1} / ${QUIZ_QUESTIONS.length} • Điểm hiện tại: ${quizScore}
    </div>
    <h4 style="font-size: 1.05rem; margin-bottom: 1.1rem; color: var(--text-light);">
      ${q.question}
    </h4>
    <div id="quizOptionsList">
      ${q.options.map((opt, idx) => `
        <button class="quiz-option-btn" onclick="selectQuizOption(${idx})">
          ${opt}
        </button>
      `).join('')}
    </div>
    <div id="quizFeedback" style="margin-top: 0.75rem; font-size: 0.88rem; min-height: 1.5rem;"></div>
  `;
}

window.selectQuizOption = function (selectedIndex) {
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

window.resetQuiz = function () {
  currentQuizIdx = 0;
  quizScore = 0;
  renderQuizStep();
};

// ====================================================
// 6. DIGITAL GOLDEN GUESTBOOK (Sổ vàng lưu niệm)
// ====================================================
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
  } catch (e) { }
  return [...INITIAL_GUESTBOOK];
}

function renderGuestbookEntries() {
  const container = document.getElementById('guestbookEntries');
  if (!container) return;

  const entries = getGuestbookData();
  container.innerHTML = entries.map(entry => `
    <div class="guest-entry">
      <div class="guest-meta">${entry.name} • <span style="font-weight:400; opacity:0.85;">${entry.role} (${entry.date})</span></div>
      <div class="guest-message">“${entry.message}”</div>
    </div>
  `).join('');
}
