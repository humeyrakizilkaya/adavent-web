# ADAVENT kurumsal web sitesi

Mevcut React + Vite projesi içinde hazırlanmıştır. React Router, Tailwind CSS v4, Motion for React ve Lucide React kullanır.

## Çalıştırma

```sh
npm install
npm run dev
npm run build
npm run lint
```

## Dosya düzeni

- `src/pages/Home.jsx`: ana sayfa bölümleri
- `src/components/`: Header, Footer, Contact ve ortak görsel bileşenler
- `src/data/company.js`: doğrulanmış firma ve hizmet bilgileri
- `src/index.css`: Tailwind v4 girişi, kurumsal stiller ve responsive kurallar
- `public/images/industrial.jpg`: temsili hero fotoğrafı

## İçerik kaynakları

9 Ekim 2026 tarihinde https://adaventotomasyon.com/ ana sayfasından firma telefonu, e-posta, Girne adresi, 15+ yıl deneyim, 10+ hizmet kalemi, altı ana hizmet ve markalar doğrulandı. Marka adı `Donfoss`, kaynak sitedeki yazımıyla korundu; yetkili distribütörlük veya ortaklık iddiası eklenmedi.

https://www.verminevictors.com/ sayfasının büyük hero, bölüm sıralaması, hizmet kartları ve iletişim düzeni incelendi. Kaynak kodu veya tasarımı kopyalanmadı. Animasyonlar özgün Motion bileşenleriyle oluşturuldu. Tarayıcı aracı bu oturumda kullanılabilir bir tarayıcı bulamadığından canlı görsel karşılaştırma yapılamadı.

Hero görseli: https://images.unsplash.com/photo-1581094794329-c8112a89af12 — temsili endüstriyel fotoğraf; ADAVENT proje referansı değildir. Diğer grafikler CSS ve Lucide ikonlarıyla oluşturulmuştur.

## Teklif formu

Tarayıcının yerleşik doğrulaması kullanılır. Talep hazırlandıktan sonra kullanıcı e-posta uygulamasını açıp göndermeyi kendisi tamamlar. Form bilgileri saklanmaz; backend ve otomatik gönderim yoktur. Telefon, e-posta ve harita bağlantıları doğrudan çalışır.

## Kontroller

- `npm run build`: başarılı
- `npm run lint`: başarılı

Hareket azaltma tercihi desteklenir. Mobil menü Escape ile kapanır; form alanları etiketlidir ve klavye odak stilleri bulunur.

## Sağdan açılan navigasyon

Tüm ekranlarda logo ve hamburger butonu kullanılır. `Header.css` menü stillerini ayrı tutar. Motion ile açılış/kapanış ve karartma animasyonu uygulanır; hareket azaltma tercihi desteklenir.

Native modal `dialog` arka planı etkileşime kapatır ve klavye odağını panelde tutar. Açılışta kapatma butonuna odaklanır; kapanış tamamlanınca tetikleyiciye döner. ESC, dış alan tıklaması, kapatma butonu ve bağlantı seçimi menüyü kapatır. Kaydırma kilidi ve önceki body stilleri kapanışta geri alınır. Menü paneli kısa ekranlarda kendi içinde kaydırılabilir.

Aktif ana sayfa bölümü kaydırma konumuna göre turuncu vurgulanır. `/referanslar` rotası henüz proje içeriği eklenmediğini açıklar; doğrulanmamış referans içermez.

## Logo renkleri

ADAVENT logosuyla uyum için ana palet lacivert `#123c60`, koyu lacivert `#0b2945`, mavi `#1681b5`, açık mavi `#51b8e5` ve altın sarısı `#f5b928` olarak güncellendi. Sol menünün ölçüleri korunarak zemini koyu mavi yapıldı. Sarı eylem butonlarında okunabilirlik için lacivert yazı kullanılır. Hero, hizmet ikonları, sistem şeması, formlar, footer ve favicon aynı paleti paylaşır.
