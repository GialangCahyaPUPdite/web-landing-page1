// Registration Modal Logic
  const regModal = document.getElementById('regModal');
  const modalPackageName = document.getElementById('modalPackageName');
  let selectedPackage = '';

  function openRegModal(pkg) {
    selectedPackage = pkg;
    modalPackageName.textContent = pkg;
    regModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeRegModal() {
    regModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  regModal.addEventListener('click', (e) => {
    if (e.target === regModal) closeRegModal();
  });

  function submitRegForm() {
    const nama = document.getElementById('regNama').value.trim();
    const kota = document.getElementById('regKota').value.trim();
    const profesi = document.getElementById('regProfesi').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const telp = document.getElementById('regTelp').value.trim();

    if (!nama || !kota || !profesi || !email || !telp) {
      alert('Mohon lengkapi semua data form.');
      return;
    }

    let packageText = '';
    if (selectedPackage === 'Early Bird') {
      packageText = '*Early Bird – Rp7.500.000*\n(Periode 1–10 Agustus 2026)\n\nPaket ini merupakan harga terbaik dengan hemat Rp2.500.000 dari harga normal, dan sudah mencakup sertifikasi resmi, 6 bulan pendampingan, hingga program lanjutan bersama mentor BRM.';
    } else if (selectedPackage === 'Special Price') {
      packageText = '*Special Price – Rp8.500.000*\n(Periode 11–20 Agustus 2026)\n\nPaket ini masih dalam periode harga spesial dengan hemat Rp1.500.000 dari harga normal, lengkap dengan sertifikasi resmi, 6 bulan pendampingan, hingga program lanjutan bersama mentor BRM.';
    } else if (selectedPackage === 'Normal Price') {
      packageText = '*Normal Price – Rp10.000.000*\n(Periode 21–28 Agustus 2026)\n\nSaya memilih paket harga penuh ini karena mengingat kuota yang terbatas, dengan fasilitas lengkap: sertifikasi resmi, 6 bulan pendampingan, hingga program lanjutan bersama mentor BRM.';
    }

    const message = `Assalamu'alaikum Warahmatullahi Wabarakatuh
Perkenalkan, saya ${nama} ingin mendaftar Program BRM Batch 8
Paket yang dipilih: ${packageText}

Berikut data saya:
1. Asal kota      : ${kota}
2. Profesi        : ${profesi}
3. Email aktif    : ${email}
4. No. telepon    : ${telp}

Mohon info selanjutnya untuk proses pendaftaran. Terima kasih
Wassalamu'alaikum Warahmatullahi Wabarakatuh`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6200000000000?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
    closeRegModal();
  }

  // Customer Service Modal Logic
  const csModal = document.getElementById('csModal');

  function openCsModal() {
    csModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeCsModal() {
    csModal.classList.remove('show');
    document.body.style.overflow = '';
  }

  csModal.addEventListener('click', (e) => {
    if (e.target === csModal) closeCsModal();
  });

  function submitCsForm() {
    const nama = document.getElementById('csNama').value.trim();
    const kota = document.getElementById('csKota').value.trim();
    const tanya = document.getElementById('csTanya').value.trim();

    if (!nama || !kota || !tanya) {
      alert('Mohon lengkapi semua data form.');
      return;
    }

    const message = `Assalamu'alaikum Warahmatullahi Wabarakatuh
Perkenalkan, saya ${nama} dari ${kota}.

Saya tertarik untuk mengikuti Program BRM Batch 8, namun ada beberapa hal yang ingin saya tanyakan terlebih dahulu:
 ${tanya}

Mohon informasinya ya Kak, agar saya bisa mempertimbangkan untuk bergabung. Terima kasih banyak sebelumnya
Wassalamu'alaikum Warahmatullahi Wabarakatuh`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6200000000000?text=${encodedMessage}`;

    window.open(waUrl, '_blank');
    closeCsModal();
  }

  // Navbar scroll state
  const navbar = document.getElementById('navbar');
  const stickyCTA = document.getElementById('stickyCTA');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 40);
    stickyCTA.classList.toggle('show', y > 900);
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
  closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // Countdown to Early Bird deadline: Aug 10, 2026 23:59:59 (local)
  const deadline = new Date('2026-08-10T23:59:59+08:00').getTime();
  function tickCountdown() {
    const now = Date.now();
    let diff = deadline - now;
    if (diff < 0) diff = 0;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cd-d').textContent = pad(d);
    document.getElementById('cd-h').textContent = pad(h);
    document.getElementById('cd-m').textContent = pad(m);
    document.getElementById('cd-s').textContent = pad(s);
  }
  tickCountdown();
  setInterval(tickCountdown, 1000);

  // Benefit tabs
  const tabs = document.querySelectorAll('.btab');
  const cats = document.querySelectorAll('.bcat');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      cats.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector('.bcat[data-cat="' + tab.dataset.cat + '"]').classList.add('active');
    });
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // FAQ: only one open at a time (optional, keep simple accordion behavior on desktop)
  document.querySelectorAll('#faq details').forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        document.querySelectorAll('#faq details').forEach(o => { if (o !== d) o.open = false; });
      }
    });
  });