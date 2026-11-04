/**
 * ============================================================================
 * PORTFOLIO ADITYA SAPUTRA — SCRIPT.JS
 * Vanilla JavaScript murni, performa tinggi, tanpa framework & dependensi luar
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. ELEMEN DOM UTAMA
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navLinksContainer = document.getElementById('navLinks');
  const navItems = document.querySelectorAll('.nav-item');
  const menuToggle = document.getElementById('menuToggle');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const scrollProgress = document.getElementById('scroll-progress');
  const yearVal = document.getElementById('yearVal');

  // Elemen Modal Detail Proyek
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCancelBtn = document.getElementById('modalCancelBtn');
  const modalHeadline = document.getElementById('modalHeadline');
  const modalCat = document.getElementById('modalCat');
  const modalText = document.getElementById('modalText');
  const modalFeaturesList = document.getElementById('modalFeaturesList');
  const modalTechList = document.getElementById('modalTechList');
  const projectButtons = document.querySelectorAll('.btn-project');

  // --------------------------------------------------------------------------
  // 2. TAHUN FOOTER OTOMATIS
  // --------------------------------------------------------------------------
  if (yearVal) {
    yearVal.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 3. NAVIGASI MOBILE (HAMBURGER MENU DRAWER)
  // --------------------------------------------------------------------------
  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      menuToggle.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Menutup menu mobile ketika salah satu tautan navigasi diklik
    navItems.forEach((link) => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Menutup menu mobile saat mengklik area di luar navbar
    document.addEventListener('click', (e) => {
      if (
        navLinksContainer.classList.contains('open') &&
        !navbar.contains(e.target)
      ) {
        navLinksContainer.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. SCROLL PROGRESS BAR & ELEVASI NAVBAR
  // --------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

    // Bar indikator di bagian paling atas layar
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }

    // Efek shadow & elevasi pada navbar saat digulir
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Tombol melayang kembali ke atas (Back to Top)
    if (scrollTopBtn) {
      if (scrollY > 280) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    }
  });

  // Event klik tombol Back to Top
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. SCROLLSPY (INDIKATOR MENU AKTIF PADA NAVBAR)
  // --------------------------------------------------------------------------
  const trackedSections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    const scrollPos = window.scrollY + 100;

    trackedSections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach((item) => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();

  // --------------------------------------------------------------------------
  // 6. SMOOTH SCROLL DENGAN KOMPENSASI TINGGI NAVBAR
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetHash = this.getAttribute('href');
      if (targetHash === '#' || targetHash === '') return;

      const targetEl = document.querySelector(targetHash);
      if (targetEl) {
        e.preventDefault();
        const navHeight = 65;
        const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // 7. FADE-IN ON SCROLL (INTERSECTION OBSERVER)
  // --------------------------------------------------------------------------
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    fadeElements.forEach((el) => fadeObserver.observe(el));
  } else {
    // Fallback untuk browser lawas tanpa IntersectionObserver
    fadeElements.forEach((el) => el.classList.add('visible'));
  }

  // --------------------------------------------------------------------------
  // 8. TAB FILTER PROYEK (DINAMIS / STATIS)
  // --------------------------------------------------------------------------
  const projectTabBtns = document.querySelectorAll('.project-tab-btn');
  const allProjectCards = document.querySelectorAll('.project-card[data-type]');
  const projectsEmptyMsg = document.getElementById('projects-empty');
  const categoryDinamisInfo = document.getElementById('category-dinamis-info');
  const categoryStatisInfo  = document.getElementById('category-statis-info');

  // Hitung jumlah proyek per kategori & tampilkan di badge tab
  function updateTabCounts() {
    const countDinamis = document.querySelectorAll('.project-card[data-type="dinamis"]').length;
    const countStatis  = document.querySelectorAll('.project-card[data-type="statis"]').length;
    const badgeDinamis = document.getElementById('count-dinamis');
    const badgeStatis  = document.getElementById('count-statis');
    if (badgeDinamis) badgeDinamis.textContent = countDinamis;
    if (badgeStatis)  badgeStatis.textContent  = countStatis;
  }

  function filterProjects(activeFilter) {
    let visibleCount = 0;

    allProjectCards.forEach((card) => {
      if (card.getAttribute('data-type') === activeFilter) {
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.classList.add('hidden');
      }
    });

    // Tampilkan/sembunyikan pesan kosong
    if (projectsEmptyMsg) {
      if (visibleCount === 0) {
        projectsEmptyMsg.classList.remove('hidden');
      } else {
        projectsEmptyMsg.classList.add('hidden');
      }
    }

    // Ganti info kategori
    if (categoryDinamisInfo && categoryStatisInfo) {
      if (activeFilter === 'dinamis') {
        categoryDinamisInfo.classList.remove('hidden');
        categoryStatisInfo.classList.add('hidden');
      } else {
        categoryDinamisInfo.classList.add('hidden');
        categoryStatisInfo.classList.remove('hidden');
      }
    }
  }

  // Init: tampilkan tab 'dinamis' by default
  updateTabCounts();
  filterProjects('dinamis');

  projectTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update tombol aktif
      projectTabBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Filter proyek
      const filter = btn.getAttribute('data-filter');
      filterProjects(filter);
    });
  });

  // --------------------------------------------------------------------------
  // 9. MODAL DETAIL PROYEK INTERAKTIF
  // --------------------------------------------------------------------------
  function openModal(data) {
    modalHeadline.textContent = data.name || 'Proyek Web';
    modalCat.textContent = data.category || 'Proyek';
    modalText.textContent = data.desc || 'Deskripsi lengkap proyek ini.';
    modalTechList.textContent = data.tech || 'HTML, CSS, JS';

    // Memecah teks fitur yang dipisahkan simbol pipa (|) menjadi daftar <li>
    modalFeaturesList.innerHTML = '';
    if (data.features) {
      const items = data.features.split('|');
      items.forEach((item) => {
        const trimmed = item.trim();
        if (trimmed) {
          const li = document.createElement('li');
          li.textContent = trimmed;
          modalFeaturesList.appendChild(li);
        }
      });
    }

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Pasang event listener pada setiap tombol proyek
  projectButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const data = {
        name: btn.getAttribute('data-name'),
        category: btn.getAttribute('data-category'),
        desc: btn.getAttribute('data-desc'),
        features: btn.getAttribute('data-features'),
        tech: btn.getAttribute('data-tech')
      };
      openModal(data);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalCancelBtn) modalCancelBtn.addEventListener('click', closeModal);

  // Tutup modal jika area gelap di luar jendela diklik
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  // Tutup modal saat tombol Escape ditekan pada keyboard
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('open')) {
      closeModal();
    }
  });
});
