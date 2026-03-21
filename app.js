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

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}