// Language toggle logic
const translateBtn = document.getElementById('translateBtn');
const languages = ['en', 'lo', 'th', 'ar'];
let currentLangIndex = 0; // default to English

function setLanguage(lang) {
    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = lang === 'en' ? '' : 'none';
    });
    document.querySelectorAll('.lang-lo').forEach(el => {
        el.style.display = lang === 'lo' ? '' : 'none';
    });
    document.querySelectorAll('.lang-th').forEach(el => {
        el.style.display = lang === 'th' ? '' : 'none';
    });
    document.querySelectorAll('.lang-ar').forEach(el => {
        el.style.display = lang === 'ar' ? '' : 'none';
    });
    currentLangIndex = languages.indexOf(lang);
    if (lang === 'en') {
        translateBtn.textContent = 'ພາສາລາວ / TH / AR';
    } else if (lang === 'lo') {
        translateBtn.textContent = 'EN / TH / AR';
    } else if (lang === 'th') {
        translateBtn.textContent = 'EN / ພາສາລາວ / AR';
    } else {
        translateBtn.textContent = 'EN / ພາສາລາວ / TH';
    }
}

translateBtn.addEventListener('click', () => {
    const nextLang = languages[(currentLangIndex + 1) % languages.length];
    setLanguage(nextLang);
});

// Set initial language
setLanguage('en');

// Growth Chart Modal logic
function loadChartJsAndRenderGrowthChart() {
  if (window.Chart) {
    renderGrowthChart();
    return;
  }
  // Load Chart.js from CDN if not loaded
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
  script.onload = renderGrowthChart;
  document.body.appendChild(script);
}

function renderGrowthChart() {
  const ctx = document.getElementById('growthChartCanvas').getContext('2d');
  if (window.growthChartInstance) {
    window.growthChartInstance.destroy();
  }
  window.growthChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026],
      datasets: [
        {
          label: 'Share Capital (M)',
          data: [2000, 2500, 3000, 3500, 4000, 4500, 5000, 5300, 5500, 5700],
          borderColor: '#007b43',
          backgroundColor: 'rgba(0,123,67,0.08)',
          fill: false,
          tension: 0.2
        },
        {
          label: 'Deposits (M)',
          data: [3000, 4000, 5000, 6000, 7000, 8000, 9000, 9500, 9860, 10500],
          borderColor: '#3498ff',
          backgroundColor: 'rgba(52,152,255,0.08)',
          fill: false,
          tension: 0.2
        },
        {
          label: 'Loans (M)',
          data: [4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 14880, 16000],
          borderColor: '#e67e22',
          backgroundColor: 'rgba(230,126,34,0.08)',
          fill: false,
          tension: 0.2
        },
        {
          label: 'Members',
          data: [20, 25, 30, 35, 40, 50, 60, 65, 70, 80],
          borderColor: '#8e44ad',
          backgroundColor: 'rgba(142,68,173,0.08)',
          fill: false,
          yAxisID: 'y2',
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { position: 'top' },
        title: { display: false }
      },
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          title: { display: true, text: 'Million LAK' }
        },
        y2: {
          type: 'linear',
          position: 'right',
          title: { display: true, text: 'Members' },
          grid: { drawOnChartArea: false },
          min: 0,
          max: 100
        }
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
// Sticky navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Activity modal logic
const activityData = {
    1: {
        topic: {
            en: 'Community Meeting with Images A-D',
            lo: 'ການປະຊຸມຊຸມຊົນພ້ອມຮູບພາບ A-D',
            th: 'ประชุมชุมชนพร้อมภาพ A-D',
            ar: 'اجتماع المجتمع مع الصور A-D'
        },
        desc: {
            en: 'A gathering to discuss community development featuring images A, B, C, and D.',
            lo: 'ການປະຊຸມເພື່ອຫາທາງພັດທະນາຊຸມຊົນພ້ອມຮູບພາບ A, B, C, ແລະ D.',
            th: 'การประชุมเพื่อพัฒนาชุมชนพร้อมภาพ A, B, C และ D',
            ar: 'اجتماع لمناقشة تطوير المجتمع مع الصور A و B و C و D.'
        },
        images: [1,2,3,4,5,6,7,8]
    },
    2: {
        topic: {en:'Charity Event',lo:'ກິດຈະກຳການກຸສົນ',th:'กิจกรรมการกุศล',ar:'فعالية خيرية'},
        desc: {en:'Helping those in need.',lo:'ຊ່ວຍເຫຼືອຜູ້ທີ່ຕ້ອງການ.',th:'ช่วยเหลือผู้ที่ต้องการ',ar:'مساعدة المحتاجين.'},
        images: [1,2,3,4,5,6,7,8]
    },
    3: {
        topic: {en:'Youth Workshop',lo:'ກິດຈະກຳຝຶກອົບຮົມຍາວຊົນ',th:'เวิร์กช็อปเยาวชน',ar:'ورشة عمل للشباب'},
        desc: {en:'Skill-building for young members.',lo:'ພັດທະນາທັກສະໃຫ້ກັບສະມາຊິກລຸ້ນໃໝ່.',th:'พัฒนาทักษะให้กับสมาชิกเยาวชน',ar:'بناء المهارات للأعضاء الشباب.'},
        images: [1,2,3,4,5,6,7,8]
    },
    4: {
        topic: {en:'Idea Sharing',lo:'ແບ່ງປັນໄອເດຍ',th:'แบ่งปันไอเดีย',ar:'مشاركة الأفكار'},
        desc: {en:'Members share innovative ideas.',lo:'ສະມາຊິກແບ່ງປັນໄອເດຍໃໝ່.',th:'สมาชิกแบ่งปันไอเดียใหม่',ar:'الأعضاء يشاركون أفكارًا مبتكرة.'},
        images: [1,2,3,4,5,6,7,8]
    },
    5: {
        topic: {en:'Partnership Signing',lo:'ລົງນາມຮ່ວມມື',th:'ลงนามความร่วมมือ',ar:'توقيع الشراكة'},
        desc: {en:'Formalizing new partnerships.',lo:'ການລົງນາມຮ່ວມມືໃໝ່.',th:'การลงนามความร่วมมือใหม่',ar:'توقيع شراكات جديدة.'},
        images: [1,2,3,4,5,6,7,8]
    },
    6: {
        topic: {en:'Charity Drive',lo:'ກິດຈະກຳການບໍລິຈາກ',th:'กิจกรรมการบริจาค',ar:'حملة خيرية'},
        desc: {en:'Collecting donations for a cause.',lo:'ເກັບເງິນບໍລິຈາກເພື່ອຈຸດປະສົງດີ.',th:'รวบรวมเงินบริจาคเพื่อจุดประสงค์ดี',ar:'جمع التبرعات لهدف نبيل.'},
        images: [1,2,3,4,5,6,7,8]
    }
};

const activityCards = document.querySelectorAll('.activity-card');
const modal = document.getElementById('activityModal');
const closeModalBtn = document.querySelector('.close-modal');
const modalTopic = document.querySelector('.modal-topic');
const modalDesc = document.querySelector('.modal-desc');
const modalImages = document.querySelector('.modal-images');

activityCards.forEach(card => {
    card.addEventListener('click', () => {
        const num = card.getAttribute('data-activity');
        const data = activityData[num];
        if (!data) return;
        // Set topic
        modalTopic.querySelector('.lang-en').textContent = data.topic.en;
        modalTopic.querySelector('.lang-lo').textContent = data.topic.lo;
        modalTopic.querySelector('.lang-th').textContent = data.topic.th;
        modalTopic.querySelector('.lang-ar').textContent = data.topic.ar;
        // Set desc
        modalDesc.querySelector('.lang-en').textContent = data.desc.en;
        modalDesc.querySelector('.lang-lo').textContent = data.desc.lo;
        modalDesc.querySelector('.lang-th').textContent = data.desc.th;
        modalDesc.querySelector('.lang-ar').textContent = data.desc.ar;
        // Use images A, B, C, D for Activity 1, others use default images
        let imgs = '';
        if (num == 1) {
            // Activity 1 uses images A, B, C, D
            const imageFiles = ['A.PNG.jpeg', 'B.PNG.jpeg', 'C.PNG.png', 'D.PNG.jpeg'];
            imageFiles.forEach((file, index) => {
                imgs += `<img src="image/${file}" alt="activity-img${index + 1}" data-img="${index + 1}">`;
            });
        } else {
            // Other activities use default images
            for (let i = 1; i <= 8; i++) {
                imgs += `<img src="images/activities/activity${i}.jpg" alt="activity-img${i}" data-img="${i}">`;
            }
        }
        modalImages.innerHTML = imgs;
        modal.style.display = 'flex';
    });
});
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});

// Image slider logic
const imageSliderModal = document.getElementById('imageSliderModal');
const sliderImg = document.querySelector('.slider-img');
const sliderClose = document.querySelector('.slider-close');
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
let sliderImages = [];
let sliderIndex = 0;

modalImages.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        sliderImages = Array.from(modalImages.querySelectorAll('img')).map(img => img.src);
        sliderIndex = parseInt(e.target.getAttribute('data-img'), 10) - 1;
        showSliderImage();
        imageSliderModal.style.display = 'flex';
    }
});
function showSliderImage() {
    sliderImg.src = sliderImages[sliderIndex];
    sliderImg.alt = `activity-large-img${sliderIndex+1}`;
}
sliderPrev.addEventListener('click', () => {
    sliderIndex = (sliderIndex + sliderImages.length - 1) % sliderImages.length;
    showSliderImage();
});
sliderNext.addEventListener('click', () => {
    sliderIndex = (sliderIndex + 1) % sliderImages.length;
    showSliderImage();
});
sliderClose.addEventListener('click', () => {
    imageSliderModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target === imageSliderModal) imageSliderModal.style.display = 'none';
});

// Timeline expand/collapse logic
const timelineYears = document.querySelectorAll('.timeline-year.clickable');
timelineYears.forEach(year => {
  year.addEventListener('click', function() {
    const desc = this.nextElementSibling;
    if (desc && desc.classList.contains('timeline-desc')) {
      desc.classList.toggle('collapsed');
    }
  });
});

// About Us radio button logic
const aboutRadios = document.querySelectorAll('input[name="about-tab"]');
const aboutHistory = document.getElementById('about-history');
const aboutManager = document.getElementById('about-manager');
aboutRadios.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.value === 'history') {
      aboutHistory.style.display = '';
      aboutManager.style.display = 'none';
    } else {
      aboutHistory.style.display = 'none';
      aboutManager.style.display = '';
    }
  });
});

// Join Us Popup logic
const joinUsBtns = document.querySelectorAll('.cta-btn');
const joinUsPopup = document.getElementById('joinUsPopup');
const joinUsClose = document.querySelector('.joinus-close');

if (joinUsBtns.length && joinUsPopup && joinUsClose) {
  joinUsBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      joinUsPopup.style.display = 'flex';
    });
  });
  joinUsClose.addEventListener('click', function() {
    joinUsPopup.style.display = 'none';
  });
  window.addEventListener('click', function(e) {
    if (e.target === joinUsPopup) joinUsPopup.style.display = 'none';
  });
} else {
  if (!joinUsBtns.length) console.warn('No .cta-btn found for Join Us popup');
  if (!joinUsPopup) console.warn('No #joinUsPopup found for Join Us popup');
  if (!joinUsClose) console.warn('No .joinus-close found for Join Us popup');
}

// Growth Chart Modal logic
const showGrowthChartBtn = document.getElementById('showGrowthChart');
const growthChartModal = document.getElementById('growthChartModal');
const growthChartClose = document.querySelector('.growth-chart-close');
if (showGrowthChartBtn && growthChartModal && growthChartClose) {
    showGrowthChartBtn.addEventListener('click', function() {
      growthChartModal.style.display = 'flex';
      loadChartJsAndRenderGrowthChart();
    });
    growthChartClose.addEventListener('click', function() {
      growthChartModal.style.display = 'none';
    });
    window.addEventListener('click', function(e) {
      if (e.target === growthChartModal) growthChartModal.style.display = 'none';
    });
}

});
