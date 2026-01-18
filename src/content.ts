import type { Feature, FaqItem, Plan, Rule, Stat, TimelineItem } from './types';

export const stats: Stat[] = [
  {
    label: 'Aktif Oyuncu Zirvesi',
    value: '2.4K',
    detail: 'Hafta sonu eşzamanlı giriş rekoru.',
  },
  {
    label: 'Ortalama TPS',
    value: '19.8',
    detail: 'Yoğun saatlerde bile stabil performans.',
  },
  {
    label: 'Gecikme Süresi',
    value: '28ms',
    detail: 'Türkiye veri merkezinden yayın.',
  },
  {
    label: 'Sunucu Uptime',
    value: '%99.97',
    detail: 'Otomatik failover ve yedekleme.',
  },
];

export const features: Feature[] = [
  {
    title: 'Akıllı Ekonomi Dengesi',
    description:
      'Enflasyonu engelleyen dinamik vergi sistemi ve pazar analizi ile adil ticaret döngüsü.',
    tag: 'Ekonomi',
  },
  {
    title: 'Klan & Bölge Kontrolü',
    description:
      'Klan seviyeleri, bölge bonusları ve haftalık savaş senaryolarıyla rekabeti sürekli canlı tutuyoruz.',
    tag: 'PvP',
  },
  {
    title: 'Özel Boss İstilaları',
    description:
      'Her hafta farklı biome temaları ile tetiklenen raid etkinlikleri ve drop tabloları.',
    tag: 'PvE',
  },
  {
    title: 'Profesyonel Anti-Cheat',
    description:
      'Davranış analizi, log izleme ve anlık müdahale ile hilesiz oyun alanı.',
    tag: 'Güvenlik',
  },
  {
    title: 'Story Mode Görevleri',
    description:
      'Sürükleyici NPC hikayeleri, sinematik anlatım ve oyuncu seçimlerine göre değişen görevler.',
    tag: 'RPG',
  },
  {
    title: 'Automated Ops',
    description:
      'Günlük bakım, yedekleme, restart ve hata yakalama süreçleri tamamen otomatik.',
    tag: 'Ops',
  },
];

export const plans: Plan[] = [
  {
    name: 'Scout',
    price: 'Ücretsiz',
    cadence: 'Topluluk erişimi',
    perks: [
      'Starter kit ve hızlı başlangıç rehberi',
      'Günlük market limiti',
      'Standart destek',
    ],
    highlight: false,
  },
  {
    name: 'Vanguard',
    price: '₺99',
    cadence: 'Aylık destek',
    perks: [
      'Öncelikli slot ve queue azaltma',
      'Vanguard kit + kozmetik rozetler',
      'Erken etkinlik erişimi',
      'Discord VIP kanalı',
    ],
    highlight: true,
  },
  {
    name: 'Founder',
    price: '₺199',
    cadence: 'Aylık destek',
    perks: [
      'Özel lobi ve inşa alanı',
      'Founder kit + özel skin efektleri',
      'Aylık üretim boost',
      'Özel destek hattı',
    ],
    highlight: false,
  },
];

export const roadmap: TimelineItem[] = [
  {
    title: 'Sezon 4: Neon Rebirth',
    detail: 'Şehir temalı map, yeni raid bossları ve günlük görev sistemi.',
    period: 'Nisan 2024',
  },
  {
    title: 'Crossplay Lobby',
    detail: 'Java & Bedrock arasında birleşik sosyal alan.',
    period: 'Mayıs 2024',
  },
  {
    title: 'Guild Wars',
    detail: 'Haftalık puan tablosu ve bölge kontrol ödülleri.',
    period: 'Haziran 2024',
  },
  {
    title: 'Creator Studio',
    detail: 'Topluluk modları, map üretimi ve test laboratuvarı.',
    period: 'Temmuz 2024',
  },
];

export const rules: Rule[] = [
  {
    title: 'Saygılı İletişim',
    detail: 'Toxic davranış, hakaret ve spam içerikler sıfır tolerans.',
  },
  {
    title: 'Adil Oyun',
    detail: 'Hile, macro, bug abuse ve alt hesap manipülasyonu yasak.',
  },
  {
    title: 'Ekonomi Düzeni',
    detail: 'Pazar manipülasyonu ve fiyat sabitleme kurallarla denetlenir.',
  },
  {
    title: 'Klan Politikaları',
    detail: 'Bölge ihlali ve saldırı zamanları sezon kurallarına göre yürür.',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Sunucuya nasıl bağlanırım?',
    answer: 'IP: play.bombompvc.gg adresini Minecraft istemcine eklemen yeterli.',
  },
  {
    question: 'Türkiye dışından oynayabilir miyim?',
    answer: 'Evet. Çoklu lokasyon optimizasyonu ile Avrupa ve Orta Doğu için düşük gecikme.',
  },
  {
    question: 'Destek süreci nasıl işliyor?',
    answer: 'Discord üzerinden ticket açabilir, kritik konular için 7/24 ops ekibine ulaşabilirsin.',
  },
  {
    question: 'Sezonlar ne kadar sürüyor?',
    answer: 'Ortalama 10-12 hafta. Final etkinliği sonrası yeni sezon başlıyor.',
  },
];
