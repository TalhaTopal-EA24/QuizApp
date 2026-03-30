const BANK = {
  Teknoloji: {
    Kolay: [
      { q: "HTML'in açılımı nedir?", opts: ["HyperText Markup Language", "High Transfer Markup Link", "Hyper Tool Making Language", "HyperText Making Link"], ans: 0 },
      { q: "CSS'de arka plan rengini ayarlayan özellik hangisidir?", opts: ["color", "background-color", "fill", "bg"], ans: 1 },
      { q: "JavaScript'te sabit değişken için hangi kelime kullanılır?", opts: ["var", "let", "const", "static"], ans: 2 },
      { q: "Aşağıdakilerden hangisi bir tarayıcıdır?", opts: ["Python", "Chrome", "Linux", "MySQL"], ans: 1 },
      { q: "HTTP'nin güvenli versiyonu nedir?", opts: ["FTP", "SMTP", "HTTPS", "SSH"], ans: 2 },
      { q: "'localhost' hangi IP adresine karşılık gelir?", opts: ["0.0.0.0", "192.168.1.1", "127.0.0.1", "255.255.255.0"], ans: 2 },
      { q: "CSS'de bir sınıfı seçmek için hangi sembol kullanılır?", opts: ["#", ".", "@", "*"], ans: 1 },
      { q: "HTML'de link oluşturmak için hangi etiket kullanılır?", opts: ["<link>", "<a>", "<href>", "<url>"], ans: 1 },
    ],
    Orta: [
      { q: "HTTP 404 hatası ne anlama gelir?", opts: ["Sunucu hatası", "Yetkilendirme gerekli", "Sayfa bulunamadı", "Zaman aşımı"], ans: 2 },
      { q: "Aşağıdakilerden hangisi NoSQL veritabanıdır?", opts: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"], ans: 3 },
      { q: "REST API'de silme için hangi HTTP metodu kullanılır?", opts: ["GET", "POST", "PUT", "DELETE"], ans: 3 },
      { q: "Git'te 'commit' ne yapar?", opts: ["Dosyaları siler", "Değişiklikleri kaydeder", "Sunucuya gönderir", "Branch açar"], ans: 1 },
      { q: "CSS 'flexbox' ne için kullanılır?", opts: ["Renk ayarları", "Yazı tipi", "Yerleşim düzeni", "Animasyon"], ans: 2 },
      { q: "JavaScript'te 'typeof null' ne döndürür?", opts: ["'null'", "'undefined'", "'object'", "'boolean'"], ans: 2 },
      { q: "Hangi HTTP metodu sunucudan veri almak için kullanılır?", opts: ["POST", "PUT", "GET", "DELETE"], ans: 2 },
      { q: "CSS'de 'z-index' ne işe yarar?", opts: ["Boyutu ayarlar", "Katman sırasını belirler", "Renk değiştirir", "Animasyon ekler"], ans: 1 },
    ],
    Zor: [
      { q: "Binary Search'ün Big O karmaşıklığı nedir?", opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], ans: 2 },
      { q: "JavaScript Event Loop'un görevi nedir?", opts: ["DOM güncellemek", "Call stack ve queue yönetmek", "Değişken saklamak", "HTTP istek göndermek"], ans: 1 },
      { q: "CSS specificity'de en yüksek öncelik hangisinde?", opts: ["Element selector", "Class selector", "ID selector", "Inline style"], ans: 3 },
      { q: "HTTP/2'nin HTTP/1.1'e göre en büyük avantajı?", opts: ["Daha güvenli şifreleme", "Multiplexing ile paralel istek", "Daha az port", "XML desteği"], ans: 1 },
      { q: "JavaScript'te 'closure' nedir?", opts: ["Bir döngü türü", "Dış scope'a erişen iç fonksiyon", "Hata yakalama", "Asenkron fonksiyon"], ans: 1 },
    ],
  },
 
  Bilim: {
    Kolay: [
      { q: "Suyun kimyasal formülü nedir?", opts: ["CO₂", "NaCl", "H₂O", "O₂"], ans: 2 },
      { q: "Işığın boşluktaki hızı yaklaşık kaç km/s?", opts: ["150.000", "300.000", "500.000", "1.000.000"], ans: 1 },
      { q: "'Fe' sembolü hangi elementtir?", opts: ["Flor", "Demir", "Fosfor", "Fermiyum"], ans: 1 },
      { q: "Güneş sistemindeki en büyük gezegen?", opts: ["Satürn", "Uranüs", "Neptün", "Jüpiter"], ans: 3 },
      { q: "DNA'nın açılımı nedir?", opts: ["Deoxyribonucleic Acid", "Dual Nucleic Acid", "Dynamic Nucleotide Array", "Dense Nuclear Agent"], ans: 0 },
      { q: "Bir atomun çekirdeğinde hangi parçacıklar var?", opts: ["Proton ve Elektron", "Elektron ve Nötron", "Proton ve Nötron", "Sadece Proton"], ans: 2 },
      { q: "İnsan vücudundaki en uzun kemik hangisidir?", opts: ["Kaburga", "Omurga", "Femur (uyluk kemiği)", "Humerus"], ans: 2 },
      { q: "Fotosentez hangi organel sayesinde gerçekleşir?", opts: ["Mitokondri", "Ribozom", "Kloroplast", "Çekirdek"], ans: 2 },
    ],
    Orta: [
      { q: "Antibiyotiği keşfeden bilim insanı kimdir?", opts: ["Pasteur", "Koch", "Fleming", "Lister"], ans: 2 },
      { q: "Evrenin yaşı yaklaşık kaç milyar yıldır?", opts: ["4,5", "8,2", "13,8", "20"], ans: 2 },
      { q: "Fotosentezde hangi gaz üretilir?", opts: ["CO₂", "N₂", "O₂", "H₂"], ans: 2 },
      { q: "Newton'un ikinci yasası nedir?", opts: ["Her etki eşit tepki", "F = m × a", "Hareketsiz cisim durur", "Enerji korunur"], ans: 1 },
      { q: "Işığın madde içinde bükülmesine ne denir?", opts: ["Yansıma", "Kırılma", "Difraksiyon", "Polarizasyon"], ans: 1 },
      { q: "Hangi element en hafif elementtir?", opts: ["Helyum", "Lityum", "Hidrojen", "Oksijen"], ans: 2 },
    ],
    Zor: [
      { q: "Schrödinger denkleminde 'ψ' neyi temsil eder?", opts: ["Enerji", "Dalga fonksiyonu", "Momentum", "Spin"], ans: 1 },
      { q: "Karanlık madde evrenin yaklaşık yüzde kaçını oluşturur?", opts: ["%5", "%27", "%68", "%95"], ans: 1 },
      { q: "Higgs bozonu ne için önemlidir?", opts: ["Işık hızını belirler", "Parçacıklara kütle kazandırır", "Yerçekimini açıklar", "Antimaddeyi dengeler"], ans: 1 },
      { q: "Pauli Dışarlama İlkesi neyi ifade eder?", opts: ["Elektronlar çekirdeğe çarpar", "İki elektron aynı kuantum durumunda olamaz", "Atom bölünemez", "Foton kütlesizdir"], ans: 1 },
    ],
  },
 
  Tarih: {
    Kolay: [
      { q: "Türkiye Cumhuriyeti hangi yıl kuruldu?", opts: ["1919", "1920", "1923", "1938"], ans: 2 },
      { q: "Birinci Dünya Savaşı hangi yıllar arasında yaşandı?", opts: ["1904–1908", "1914–1918", "1918–1922", "1939–1945"], ans: 1 },
      { q: "Berlin Duvarı hangi yıl yıkıldı?", opts: ["1985", "1987", "1989", "1991"], ans: 2 },
      { q: "Osmanlı İmparatorluğu'nun kurucusu kimdir?", opts: ["Orhan Gazi", "Osman Gazi", "Yıldırım Bayezid", "Fatih Sultan Mehmet"], ans: 1 },
      { q: "Amerika'nın bağımsızlık bildirgesi hangi yıl imzalandı?", opts: ["1763", "1776", "1789", "1812"], ans: 1 },
      { q: "İstanbul hangi yıl fethedildi?", opts: ["1389", "1402", "1453", "1517"], ans: 2 },
      { q: "Atatürk hangi yıl vefat etti?", opts: ["1934", "1936", "1938", "1940"], ans: 2 },
      { q: "İkinci Dünya Savaşı hangi yıl başladı?", opts: ["1937", "1938", "1939", "1940"], ans: 2 },
    ],
    Orta: [
      { q: "Magna Carta hangi yılda imzalandı?", opts: ["1066", "1215", "1453", "1648"], ans: 1 },
      { q: "Fransız Devrimi hangi yıl başladı?", opts: ["1776", "1789", "1799", "1815"], ans: 1 },
      { q: "Kanuni Sultan Süleyman Avrupa'da hangi lakabıyla tanınır?", opts: ["Büyük", "Muhteşem", "Bilge", "Adil"], ans: 1 },
      { q: "Soğuk Savaş hangi iki ülke arasındaydı?", opts: ["İngiltere–Fransa", "ABD–Çin", "ABD–SSCB", "NATO–Almanya"], ans: 2 },
      { q: "Kurtuluş Savaşı hangi yıl başladı?", opts: ["1918", "1919", "1920", "1921"], ans: 1 },
      { q: "Lozan Antlaşması hangi yıl imzalandı?", opts: ["1920", "1921", "1922", "1923"], ans: 3 },
    ],
    Zor: [
      { q: "Westphalia Antlaşması (1648) hangi savaşı sona erdirdi?", opts: ["Yüzyıl Savaşları", "Otuz Yıl Savaşları", "İspanya Veraset Savaşı", "Dokuz Yıl Savaşı"], ans: 1 },
      { q: "Rönesans önce hangi şehirde başladı?", opts: ["Roma", "Venedik", "Floransa", "Milano"], ans: 2 },
      { q: "Milattan önce hangi yılda Büyük İskender öldü?", opts: ["MÖ 356", "MÖ 323", "MÖ 301", "MÖ 281"], ans: 1 },
      { q: "Sanayi Devrimi ilk hangi ülkede başladı?", opts: ["Fransa", "Almanya", "ABD", "İngiltere"], ans: 3 },
    ],
  },
 
  Matematik: {
    Kolay: [
      { q: "√144 kaçtır?", opts: ["10", "11", "12", "14"], ans: 2 },
      { q: "Bir üçgenin iç açıları toplamı kaç derecedir?", opts: ["90°", "120°", "180°", "360°"], ans: 2 },
      { q: "3! (3 faktöriyel) kaçtır?", opts: ["3", "6", "9", "12"], ans: 1 },
      { q: "π sayısının yaklaşık değeri nedir?", opts: ["2.71", "3.14", "1.41", "1.73"], ans: 1 },
      { q: "100'ün %25'i kaçtır?", opts: ["10", "20", "25", "40"], ans: 2 },
      { q: "İki çift sayının toplamı her zaman ne olur?", opts: ["Tek", "Çift", "Asal", "Negatif"], ans: 1 },
      { q: "2⁸ kaçtır?", opts: ["64", "128", "256", "512"], ans: 2 },
      { q: "Bir karenin çevresi 40 cm ise kenar uzunluğu kaçtır?", opts: ["5", "8", "10", "20"], ans: 2 },
    ],
    Orta: [
      { q: "log₂(64) kaçtır?", opts: ["4", "5", "6", "8"], ans: 2 },
      { q: "Fibonacci dizisinde 10. terim hangisidir?", opts: ["34", "55", "89", "144"], ans: 1 },
      { q: "d/dx (sin x) nedir?", opts: ["sin x", "−sin x", "cos x", "−cos x"], ans: 2 },
      { q: "Bir 6 yüzlü zarın beklenen değeri nedir?", opts: ["3", "3.5", "4", "4.5"], ans: 1 },
      { q: "2³ × 2⁴ kaçtır?", opts: ["2⁶", "2⁷", "2¹²", "4⁷"], ans: 1 },
      { q: "Bir dairenin alanı π×r². r=5 ise alan kaçtır?", opts: ["10π", "20π", "25π", "50π"], ans: 2 },
    ],
    Zor: [
      { q: "Euler kimlik formülü: e^(iπ) + 1 = ?", opts: ["1", "0", "−1", "2"], ans: 1 },
      { q: "∫ x² dx = ?", opts: ["x³ + C", "x³/3 + C", "2x + C", "x²/2 + C"], ans: 1 },
      { q: "3×3 birim matrisin determinantı kaçtır?", opts: ["0", "1", "3", "9"], ans: 1 },
      { q: "En küçük çift asal sayı hangisidir?", opts: ["1", "2", "3", "4"], ans: 1 },
      { q: "Riemann hipotezi hangi konuyla ilgilidir?", opts: ["Geometri", "Asal sayıların dağılımı", "Diferansiyel denklemler", "İstatistik"], ans: 1 },
    ],
  },
};

const cfg = { name: "Anonim", cat: "Teknoloji", diff: "Kolay", count: 10 };
const quiz = { questions: [], current: 0, score: 0, correct: 0, wrong: 0, timerID: null, timerVal: 20, answered: false };
 
const TIMER  = 20;
const LS_KEY = "quizapp_history"

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Diziyi karıştır (Fisher-Yates)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// HTML injection'a karşı güvenlik
function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ── PILL SEÇİCİLER ────
function setupPills(id, callback) {
  document.getElementById(id).addEventListener("click", (e) => {
    const pill = e.target.closest(".pill");
    if (!pill) return;
    document.querySelectorAll(`#${id} .pill`).forEach(p => p.classList.remove("on"));
    pill.classList.add("on");
    callback(pill.dataset.val);
  });
}
 
setupPills("pills-cat",   (val) => { cfg.cat   = val; });
setupPills("pills-diff",  (val) => { cfg.diff  = val; });
setupPills("pills-count", (val) => { cfg.count = parseInt(val); });

// ── SON QUİZ ÖZETİ ────
function showLastBanner() {
  const history = getHistory();
  if (history.length === 0) return;
 
  const last = history[0];
  document.getElementById("last-banner").style.display = "flex";
  document.getElementById("lb-name").textContent  = last.name;
  document.getElementById("lb-meta").textContent  = `${last.cat} · ${last.diff} · ${last.date}`;
  document.getElementById("lb-score").textContent = last.score;
}
showLastBanner();

document.getElementById("btn-start").addEventListener("click", () => {
  cfg.name = document.getElementById("inp-name").value.trim() || "Anonim";
 
  const pool = BANK[cfg.cat]?.[cfg.diff] || [];
  if (pool.length === 0) {
    alert("Bu kombinasyon için soru bulunamadı!");
    return;
  }
 
  // Soruları karıştır, seçilen sayı kadar al
  quiz.questions = shuffle(pool).slice(0, Math.min(cfg.count, pool.length));
  quiz.current   = 0;
  quiz.score     = 0;
  quiz.correct   = 0;
  quiz.wrong     = 0;
 
  show("screen-quiz");
  loadQuestion();
});

 // Çıkış butonu
document.getElementById("btn-exit").addEventListener("click", () => {
  if (!confirm("Quiz'den çıkmak istediğine emin misin?")) return;
  clearInterval(quiz.timerID);
  show("screen-home");
});
 
// ── SORU YÜKLE ─────
function loadQuestion() {
  clearInterval(quiz.timerID);
  quiz.answered = false;
 
  const q     = quiz.questions[quiz.current];
  const total = quiz.questions.length;
 
  // Üst bilgileri güncelle
  document.getElementById("q-counter").textContent = `${quiz.current + 1} / ${total}`;
  document.getElementById("q-score").textContent   = `${quiz.score} puan`;
  document.getElementById("prog-fill").style.width = `${(quiz.current / total) * 100}%`;
  document.getElementById("q-text").textContent    = q.q;
 
  // Cevap butonlarını oluştur
  const letters = ["A", "B", "C", "D"];
  document.getElementById("answers").innerHTML = q.opts
    .map((opt, i) => `
      <button class="ans-btn" onclick="pickAnswer(${i})">
        <span class="ans-letter">${letters[i]}</span>${esc(opt)}
      </button>
    `)
    .join("");
 
  startTimer();
}
 
// ── CEVAP SEÇ ───
function pickAnswer(chosen) {
  if (quiz.answered) return;
  quiz.answered = true;
  clearInterval(quiz.timerID);
 
  const q    = quiz.questions[quiz.current];
  const btns = document.querySelectorAll(".ans-btn");
  btns.forEach(btn => btn.disabled = true);
 
  if (chosen === q.ans) {
    // Doğru cevap
    btns[chosen].classList.add("correct");
    quiz.score  += 100 + Math.round((quiz.timerVal / TIMER) * 50); // zaman bonusu
    quiz.correct++;
  } else {
    // Yanlış cevap
    btns[chosen].classList.add("wrong");
    btns[q.ans].classList.add("correct"); // doğruyu göster
    quiz.wrong++;
  }
 
  document.getElementById("q-score").textContent = `${quiz.score} puan`;
  setTimeout(nextQuestion, 1200);
}
 
function nextQuestion() {
  quiz.current++;
  if (quiz.current >= quiz.questions.length) {
    endQuiz();
  } else {
    loadQuestion();
  }
}
 
// ── ZAMANLAYICI ──
function startTimer() {
  quiz.timerVal = TIMER;
  updateTimerUI();
 
  quiz.timerID = setInterval(() => {
    quiz.timerVal--;
    updateTimerUI();
 
    if (quiz.timerVal < 0) {
      clearInterval(quiz.timerID);
      timeUp();
    }
  }, 1000);
}
 
function updateTimerUI() {
  document.getElementById("timer-num").textContent  = quiz.timerVal;
  document.getElementById("timer-fill").style.width = `${(quiz.timerVal / TIMER) * 100}%`;
 
  const fill = document.getElementById("timer-fill");
  fill.className = "timer-fill";
  if (quiz.timerVal <= 5)       fill.classList.add("danger");
  else if (quiz.timerVal <= 10) fill.classList.add("warn");
}
 
function timeUp() {
  if (quiz.answered) return;
  quiz.answered = true;
 
  const btns = document.querySelectorAll(".ans-btn");
  btns.forEach(btn => btn.disabled = true);
  btns[quiz.questions[quiz.current].ans]?.classList.add("correct");
  quiz.wrong++;
 
  setTimeout(nextQuestion, 1200);
}

// ── QUİZ BİTİŞ ───
function endQuiz() {
  clearInterval(quiz.timerID);
  document.getElementById("prog-fill").style.width = "100%";
 
  const total    = quiz.questions.length;
  const accuracy = total > 0 ? Math.round((quiz.correct / total) * 100) : 0;
 
  // Sonuç metnini belirle
  const tier   = Math.min(Math.floor(accuracy / 20), 4);
  const emojis = ["😅", "🙂", "👍", "🎯", "🏆"];
  const titles = ["Daha fazla pratik yap!", "Fena değil!", "İyi iş!", "Harika!", "Mükemmel!"];
 
  document.getElementById("res-emoji").textContent   = emojis[tier];
  document.getElementById("res-title").textContent   = titles[tier];
  document.getElementById("res-score").textContent   = quiz.score;
  document.getElementById("res-correct").textContent = quiz.correct;
  document.getElementById("res-wrong").textContent   = quiz.wrong;
  document.getElementById("res-acc").textContent     = accuracy + "%";
 
  // localStorage'a kaydet
  saveHistory({
    name:    cfg.name,
    cat:     cfg.cat,
    diff:    cfg.diff,
    score:   quiz.score,
    correct: quiz.correct,
    total:   total,
    acc:     accuracy,
    date:    new Date().toLocaleDateString("tr-TR"),
  });
 
  show("screen-result");
}
 
document.getElementById("btn-again").addEventListener("click", () => show("screen-home"));
document.getElementById("btn-home").addEventListener("click", () => {
  showLastBanner();
  show("screen-home");
});
 
// ── GEÇMİŞ SONUÇLARI GÖRME ──
function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || [];
  } catch {
    return [];
  }
}
 
function saveHistory(entry) {
  const history = getHistory();
  history.unshift(entry);                                        // en yeni başa
  localStorage.setItem(LS_KEY, JSON.stringify(history.slice(0, 30))); // max 30
}
 
function renderHistory() {
  const history = getHistory();
  const list    = document.getElementById("hist-list");
 
  if (history.length === 0) {
    list.innerHTML = '<div class="empty">Henüz quiz yapılmadı. 🚀</div>';
    return;
  }
 
  list.innerHTML = history
    .map((entry, i) => `
      <div class="hist-item" style="animation-delay: ${i * 0.04}s">
        <div class="hi-left">
          <div class="hi-name">${esc(entry.name)}</div>
          <div class="hi-meta">${esc(entry.cat)} · ${esc(entry.diff)} · ${entry.correct}/${entry.total} · ${entry.date}</div>
        </div>
        <div class="hi-right">
          <div class="hi-sc">${entry.score}</div>
          <div class="hi-acc">%${entry.acc} doğruluk</div>
        </div>
      </div>
    `)
    .join("");
}
 
document.getElementById("btn-hist").addEventListener("click", () => {
  renderHistory();
  show("screen-history");
});
 
document.getElementById("btn-hist-back").addEventListener("click", () => show("screen-home"));
 