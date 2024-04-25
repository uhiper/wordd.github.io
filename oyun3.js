let words = [
    { word: "masa", hint: "Mobilya" },
    { word: "kalem", hint: "Yazma aracı" },
    { word: "kitap", hint: "Okuma malzemesi" },
    { word: "telefon", hint: "İletişim cihazı" },
    { word: "sandalye", hint: "Oturma aracı" },
    { word: "bilgisayar", hint: "Elektronik cihaz" },
    { word: "televizyon", hint: "Görüntü cihazı" },
    { word: "araba", hint: "Taşıt" },
    { word: "köpek", hint: "Evcil hayvan" },
    { word: "kedi", hint: "Küçük evcil hayvan" },
    { word: "yazılım", hint: "Bilgisayar programları" },
    { word: "müzik", hint: "Seslerin ritmik bir şekilde düzenlenmesi" },
    { word: "güneş", hint: "Gündüzün ışık ve ısı kaynağı" },
    { word: "ay", hint: "Gece gökyüzünde görülen ışıklı cisim" },
    { word: "yıldız", hint: "Gökyüzündeki parlak nokta" },
    { word: "orman", hint: "Ağaçlarla kaplı arazi" },
    { word: "deniz", hint: "Büyük su kütlesi" },
    { word: "gökyüzü", hint: "Mavi renkli uzayın görünen kısmı" },
    { word: "bulut", hint: "Gökyüzünde hareket eden beyaz veya gri kütle" },
    { word: "kuş", hint: "Uçabilen hayvan" },
    { word: "ev", hint: "Yaşam alanı" },
    { word: "ağaç", hint: "Odunsu bitki" },
    { word: "çiçek", hint: "Bitkilerin üreme organı" },
    { word: "göl", hint: "Su birikintisi" },
    { word: "dağ", hint: "Yüksek arazi" },
    { word: "kıta", hint: "Büyük kara parçası" },
    { word: "nehir", hint: "Büyük akarsu" },
    { word: "okyanus", hint: "Büyük su kütleleri" },
    { word: "balık", hint: "Suda yaşayan hayvan" },
    { word: "kar", hint: "Soğuk hava koşullarında oluşan beyaz yağış" },
    { word: "rüzgar", hint: "Hava hareketi" },
    { word: "karpuz", hint: "Büyük ve yeşil kabuklu bir meyve" },
    { word: "çay", hint: "Bitki yapraklarından yapılan içecek" },
    { word: "gözlük", hint: "Görme yeteneğini düzeltmek için kullanılan araç" },
    { word: "denizaltı", hint: "Sualtında seyahat eden araç" },
    { word: "kırmızı", hint: "Canlı bir renk" },
    { word: "futbol", hint: "Topla oynanan bir spor" },
    { word: "at", hint: "Dört bacaklı bir hayvan" },
    { word: "gitar", hint: "Müzik aleti" },
    { word: "kuşku", hint: "Şüphe" },
    { word: "kağıt", hint: "Yazı veya resim yapmak için kullanılan malzeme" },
    { word: "dolap", hint: "Eşyaları saklamak için kullanılan mobilya" },
    { word: "yemek", hint: "Besin alımı" },
    { word: "salata", hint: "Yeşilliklerle yapılan bir yemek" },
    { word: "patates", hint: "Yenilebilen bir kök sebze" },
    { word: "kütüphane", hint: "Kitapların saklandığı yer" },
    { word: "şapka", hint: "Başı örten giysi" },
    { word: "ayna", hint: "Görüntüyü yansıtan yüzey" },
    { word: "tablo", hint: "Resim veya yazıların asıldığı düz yüzey" },
    { word: "çatal", hint: "Yemek yerken kullanılan araç" },
    { word: "buz", hint: "Dondurucu sıcaklıkta olan su" },
    { word: "yüzme", hint: "Suda ilerleme hareketi" },
    { word: "ceket", hint: "Üst giysi" },
    { word: "ayakkabı", hint: "Ayak giysisi" },
    { word: "kaykay", hint: "Tekerlekli bir tahta üzerinde kayma sporu" },
    { word: "yelken", hint: "Rüzgarla hareket eden deniz taşıtı" },
    { word: "yıldönümü", hint: "Bir yılın tamamlanma günü" },
    { word: "telefon", hint: "İletişim cihazı" },
    { word: "soba", hint: "Isı sağlayan ev aracı" },
    { word: "portakal", hint: "Turuncu renkli bir meyve" },
    { word: "bisiklet", hint: "İki tekerlekli bir taşıt aracı" },
    { word: "perde", hint: "Pencere veya kapıyı örtmek için kullanılan kumaş" },
    { word: "yıldırım", hint: "Gökyüzünde aniden oluşan elektriksel deşarj" },
    { word: "gökkuzgunu", hint: "Kargagiller familyasından bir kuş" },
    { word: "şemsiye", hint: "Yağmur veya güneş ışınlarından korunmak için kullanılan araç" },
    { word: "çatal", hint: "Yemek yerken kullanılan araç" },
    { word: "uçurtma", hint: "Rüzgarla havada uçan eğlence aracı" },
    { word: "battaniye", hint: "Isınmak için kullanılan kalın kumaş" },
    { word: "kazak", hint: "Soğuk havalarda giyilen üst giysi" },
    { word: "kalemtraş", hint: "Kalemin ucu sivri hale getirmek için kullanılan alet" },
    { word: "gözlük", hint: "Görme yeteneğini düzeltmek için kullanılan araç" },
    { word: "radyo", hint: "Ses dalgalarını alıp çalan cihaz" },
    { word: "tavşan", hint: "Uzun kulaklı bir hayvan" },
    { word: "maymun", hint: "Ağaçlarda yaşayan bir hayvan türü" },
    { word: "çiçek", hint: "Bitkilerin üreme organı" },
    { word: "karpuz", hint: "Büyük ve yeşil kabuklu bir meyve" },
    { word: "dinozor", hint: "Nesli tükenmiş devasa canlılar" },
    { word: "tavuk", hint: "Yumurtlayan bir evcil hayvan" },
    { word: "kütüphane", hint: "Kitapların saklandığı yer" },
    { word: "merdiven", hint: "Yukarı veya aşağı çıkmak için kullanılan araç" },
    { word: "fırın", hint: "Yemek pişirmek için kullanılan alet" },
    { word: "ayna", hint: "Görüntüyü yansıtan yüzey" },
    { word: "tablo", hint: "Resim veya yazıların asıldığı düz yüzey" },
    { word: "yelken", hint: "Rüzgarla hareket eden deniz taşıtı" },
    { word: "palyaço", hint: "Eğlence amaçlı giyinen ve şakalar yapan kişi" },
    { word: "kürk", hint: "Hayvan derisinden elde edilen bir malzeme" },
    { word: "havlu", hint: "Islaklığı emmek için kullanılan kumaş" },
    { word: "pilav", hint: "Tahılların pişirilmesiyle yapılan bir yemek" },
    { word: "kalemlik", hint: "Kalemleri saklamak için kullanılan kap" },
    { word: "bulut", hint: "Gökyüzünde hareket eden beyaz veya gri kütle" },
    { word: "yemek", hint: "Besin alımı" },
    { word: "pencere", hint: "Işığı içeri almak için kullanılan açıklık" },
    { word: "süt", hint: "İnek veya keçi sütünden elde edilen bir içecek" },
    { word: "gitar", hint: "Müzik aleti" },
    { word: "denizaltı", hint: "Sualtında seyahat eden araç" },
    { word: "kırmızı", hint: "Canlı bir renk" },
    { word: "futbol", hint: "Topla oynanan bir spor" },
    { word: "at", hint: "Dört bacaklı bir hayvan" },
    { word: "gitar", hint: "Müzik aleti" },
    { word: "kuşku", hint: "Şüphe" },
    { word: "kağıt", hint: "Yazı veya resim yapmak için kullanılan malzeme" },
    { word: "dolap", hint: "Eşyaları saklamak için kullanılan mobilya" },
    { word: "yemek", hint: "Besin alımı" },
    { word: "salata", hint: "Yeşilliklerle yapılan bir yemek" },
    { word: "patates", hint: "Yenilebilen bir kök sebze" },
    { word: "kütüphane", hint: "Kitapların saklandığı yer" },
    { word: "şapka", hint: "Başı örten giysi" },
    { word: "ayna", hint: "Görüntüyü yansıtan yüzey" },
    { word: "tablo", hint: "Resim veya yazıların asıldığı düz yüzey" },
    { word: "çatal", hint: "Yemek yerken kullanılan araç" },
    { word: "buz", hint: "Dondurucu sıcaklıkta olan su" },
    { word: "yüzme", hint: "Suda ilerleme hareketi" },
    { word: "ceket", hint: "Üst giysi" },
    { word: "ayakkabı", hint: "Ayak giysisi" },
    { word: "kaykay", hint: "Tekerlekli bir tahta üzerinde kayma sporu" },
    { word: "yelken", hint: "Rüzgarla hareket eden deniz taşıtı" },
    { word: "yıldönümü", hint: "Bir yılın tamamlanma günü" },
    { word: "telefon", hint: "İletişim cihazı" },
    { word: "soba", hint: "Isı sağlayan ev aracı" },
    { word: "şair", hint: "Şiir yazan kimse" },
    { word: "roman", hint: "Uzun hikaye anlatan edebi eser" },
    { word: "şiir", hint: "Duyguları ve düşünceleri anlatan edebi metin" },
    { word: "hikaye", hint: "Kısa anlatı" },
    { word: "kahraman", hint: "Öyküde veya destanda başrol oynayan karakter" },
    { word: "kahramanlık", hint: "Olağanüstü cesaret gösterme eylemi" },
    { word: "destan", hint: "Eski dönemlerde yazılan kahramanlık hikayesi" },
    { word: "edebiyat", hint: "Yazınsal eserlerin tümü" },
    { word: "şairane", hint: "Şairimsi, şiirsel" },
    { word: "müzik", hint: "Seslerin ritmik bir şekilde düzenlenmesi" },
    { word: "drama", hint: "Tiyatro eseri" },
    { word: "tarih", hint: "Geçmiş olayların incelendiği bilim dalı" },
    { word: "anı", hint: "Geçmişte yaşanan bir olayın kişisel olarak anlatılması" },
    { word: "perde", hint: "Tiyatro sahnesini seyirciden ayıran kumaş veya tahta" },
    { word: "tiyatro", hint: "Canlı performansların sergilendiği sahne sanatı" },
    { word: "yazar", hint: "Eser yazan kimse" },
    { word: "deneme", hint: "Kişisel düşüncelerin yazıya döküldüğü edebi tür" },
    { word: "masal", hint: "Hayal ürünü olayları anlatan öykü" },
    { word: "düzyazı", hint: "Belirli bir ölçü ya da uyak düzeni olmayan yazı" },
    { word: "şiirsel", hint: "Şiire benzeyen, şiirsel" },
    { word: "söyleşi", hint: "Kişiler arasında geçen konuşmanın yazıya dökülmesi" },
    { word: "edebiyatçı", hint: "Edebiyatla uğraşan kimse" },
    { word: "tür", hint: "Edebiyat eserlerinin sınıflandırıldığı kategori" },
    { word: "romantizm", hint: "Duygusallık ve duyarlılık vurgusu yapan edebi akım" },
    { word: "klasik", hint: "Örnek alınan, zamanla değerini koruyan eser" },
    { word: "sairane", hint: "Şairimsi, şiirsel" },
    { word: "ironi", hint: "Karşıt bir anlamı ima eden dil kullanımı" },
    { word: "şiirsel", hint: "Şiire benzeyen, şiirsel" },
    { word: "makale", hint: "Bir konuda düşünce ve görüşlerin açıklandığı yazı türü" },
    { word: "karşılaştırma", hint: "Bir konuyu daha iyi anlamak için benzerliklerin veya farklılıkların belirtildiği yazı türü" },
    { word: "anlatım", hint: "Dil ve üslup kullanarak düşüncelerin aktarılması" },
    { word: "umut", hint: "Geleceğe dair olumlu beklenti (siteyi yapan yazılımcının adı)" },
];


let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex].word;
let hint = words[randomIndex].hint;
let remainingGuesses = 3;

// Seçilen kelimenin betimlemesi ve harf sayısı
let wordLength = selectedWord.length;
document.getElementById("description").innerText += " Bu kelime " + wordLength + " harf içerir.";
document.getElementById("hint").innerText = "İpucu: " + hint;

// Kelimeyi kutucuklarla gösterme
for (let i = 0; i < wordLength; i++) {
    let letterBox = document.createElement("div");
    letterBox.classList.add("letter-box");
    letterBox.innerText = "_";
    document.getElementById("wordContainer").appendChild(letterBox);
}



// Kullanıcının bir harf açma fonksiyonu
function revealLetter() {
    if (remainingGuesses > 0) {
        let unrevealedIndexes = [];
        let letterBoxes = document.querySelectorAll(".letter-box");

        for (let i = 0; i < letterBoxes.length; i++) {
            if (letterBoxes[i].innerText === "_") {
                unrevealedIndexes.push(i);
            }
        }

        if (unrevealedIndexes.length > 0) {
            let randomIndex = unrevealedIndexes[Math.floor(Math.random() * unrevealedIndexes.length)];
            letterBoxes[randomIndex].innerText = selectedWord[randomIndex];
            remainingGuesses--;
            document.getElementById("remaining").innerText = "Kalan harf alma hakkın: " + remainingGuesses;
        } else {
            alert("Üzgünüm, tüm harfler zaten açıldı.");
        }
    } else {
        alert("Üzgünüm, harf alma hakkın kalmadı. Doğru kelime: " + selectedWord);
    }
}

// Kullanıcının kelime tahmin etme fonksiyonu
function guessWord() {
    let guess = document.getElementById("guessInput").value.toLowerCase();

    if (guess === selectedWord) {
        document.getElementById("result").innerText = "Tebrikler, doğru tahmin ettiniz!";
        setTimeout(nextWord, 2000); // 2 saniye sonra yeni kelimeye geç
    } else {
        alert("Üzgünüm, yanlış tahmin. Doğru kelime: " + selectedWord);
    }
}

// Yeni kelimeye geçiş fonksiyonu
function nextWord() {
    window.location.reload(); // Sayfayı yenile, yeni kelimeye geç
}


function usePass() {
    remainingGuesses = 3; // Pas hakkı kullandığımızda harf alma hakkı resetlenir
    document.getElementById("remaining").innerText = "Kalan harf alma hakkın: " + remainingGuesses;
    
    // Yeni bir kelime seç
    randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex].word;
    hint = words[randomIndex].hint;

    // Seçilen kelimenin betimlemesi ve harf sayısı
    document.getElementById("description").innerText = "Kelimenin harf sayısı: " + selectedWord.length;
    document.getElementById("hint").innerText = "İpucu: " + hint;

    // Kelimeyi kutucuklarla gösterme
    let wordContainer = document.getElementById("wordContainer");
    wordContainer.innerHTML = ""; // Önceki kelimenin kutucuklarını temizle
    for (let i = 0; i < selectedWord.length; i++) {
        let letterBox = document.createElement("div");
        letterBox.classList.add("letter-box");
        letterBox.innerText = "_";
        wordContainer.appendChild(letterBox);
    }

    // Tahmin sonucunu temizle
    document.getElementById("result").innerText = "";
}


// Yeni kelime seçme fonksiyonu
function getNextWord() {
    randomIndex = Math.floor(Math.random() * words.length);
    selectedWord = words[randomIndex].word;
    hint = words[randomIndex].hint;
    remainingGuesses = 3;
    document.getElementById("description").innerText = "Kelimenin harf sayısı: " + selectedWord.length;
    document.getElementById("hint").innerText = "İpucu: " + hint;
    document.getElementById("result").innerText = ""; // Sonucu temizle
    document.getElementById("remaining").innerText = "Kalan harf alma hakkın: " + remainingGuesses;
    
    // Çizgi sayısını da güncelle
    let wordContainer = document.getElementById("wordContainer");
    wordContainer.innerHTML = ""; // Önceki kelimenin kutucuklarını temizle
    for (let i = 0; i < selectedWord.length; i++) {
        let letterBox = document.createElement("div");
        letterBox.classList.add("letter-box");
        letterBox.innerText = "_";
        wordContainer.appendChild(letterBox);
    }
}


// İlk kelimeyi göster
getNextWord();

function guessWord() {
    let guess = document.getElementById("guessInput").value.toLowerCase(); // Kullanıcının girdisini küçük harfe çevir

    if (guess === selectedWord.toLowerCase()) { // Seçilen kelimeyi de küçük harfe çevirerek karşılaştır
        document.getElementById("result").innerText = "Tebrikler, doğru tahmin ettiniz!";
        setTimeout(nextWord, 2000); // 2 saniye sonra yeni kelimeye geç
    } else {
        alert("Üzgünüm, yanlış tahmin. Doğru kelime: " + selectedWord);
    }
}
