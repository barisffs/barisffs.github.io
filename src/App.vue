<template>
  <div>
    <header class="hero">
      <div class="glow" style="top: -120px; left: -120px"></div>
      <div class="glow" style="bottom: -140px; right: -80px"></div>
      <div class="container hero-grid">
        <div>
          <span class="badge">⚡ Bombom PVC Sezon 4 Açıldı</span>
          <h1>Bombom PVC Server ile rekabeti, rol yapmayı ve güvenli oyunu tek merkezde yaşa.</h1>
          <p>
            25 yıllık operasyon tecrübesiyle tasarlanmış gibi düşünen bir ekip: sürdürülebilir ekonomi,
            adil PvP dengesi, hikâye bazlı PvE içerikleri ve 7/24 aktif moderasyon.
          </p>
          <div class="hero-actions">
            <button class="button-primary">Hemen Katıl</button>
            <button class="button-secondary">Tanıtım Dosyası</button>
          </div>
          <div class="hero-meta">
            <div>
              <strong>IP Adresi</strong>
              <span>play.bombompvc.gg</span>
            </div>
            <div>
              <strong>Sürüm</strong>
              <span>1.20.4</span>
            </div>
            <div>
              <strong>Platform</strong>
              <span>Java + Bedrock</span>
            </div>
          </div>
        </div>
        <div class="card">
          <h3>Canlı Ops Paneli</h3>
          <p class="muted">Operasyon ekibinin günlük kontrol listesi.</p>
          <ul class="timeline">
            <li class="timeline-item" v-for="item in opsChecklist" :key="item">
              <strong>{{ item }}</strong>
              <span class="muted">Gerçek zamanlı otomasyon</span>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Performans ve Güvenlik Özetleri</h2>
          <p>Hem oyuncu deneyimini hem de altyapı sağlığını ölçen kritik göstergeler.</p>
        </div>
        <div class="stats-grid">
          <div class="card" v-for="stat in stats" :key="stat.label">
            <div class="stat-value">{{ stat.value }}</div>
            <strong>{{ stat.label }}</strong>
            <p class="muted">{{ stat.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Oyun Deneyimini Büyüten Sistemler</h2>
          <p>Bombom PVC Server, modüler ve ölçeklenebilir tasarım prensipleriyle sürekli gelişir.</p>
        </div>
        <div class="feature-grid">
          <div class="card" v-for="feature in features" :key="feature.title">
            <span class="badge">{{ feature.tag }}</span>
            <h3 style="margin: 14px 0 10px">{{ feature.title }}</h3>
            <p class="muted">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Destek Planları</h2>
          <p>Topluluğa katkı sağlayan oyuncular için şeffaf ve dengeli destek paketleri.</p>
        </div>
        <div class="plan-grid">
          <div class="card plan-card" :class="{ highlight: plan.highlight }" v-for="plan in plans" :key="plan.name">
            <div>
              <h3>{{ plan.name }}</h3>
              <div class="plan-price">{{ plan.price }}</div>
              <span class="muted">{{ plan.cadence }}</span>
            </div>
            <ul>
              <li v-for="perk in plan.perks" :key="perk">• {{ perk }}</li>
            </ul>
            <button class="button-secondary">Paketi İncele</button>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Sezon Yol Haritası</h2>
          <p>Ürün yöneticisi disipliniyle net tarihli ve ölçülebilir hedefler.</p>
        </div>
        <div class="roadmap-grid">
          <div class="timeline-item" v-for="item in roadmap" :key="item.title">
            <strong>{{ item.title }}</strong>
            <span class="muted">{{ item.detail }}</span>
            <span class="badge">{{ item.period }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Topluluk Kuralları</h2>
          <p>Adil, sürdürülebilir ve toksik olmayan bir ekosistem için temel prensipler.</p>
        </div>
        <div class="rules-grid">
          <div class="card" v-for="rule in rules" :key="rule.title">
            <h3>{{ rule.title }}</h3>
            <p class="muted">{{ rule.detail }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Sık Sorulan Sorular</h2>
          <p>Yeni oyuncular için hızlı başlangıç ve destek bilgileri.</p>
        </div>
        <div class="faq-grid">
          <div class="card" v-for="faq in faqs" :key="faq.question">
            <h3>{{ faq.question }}</h3>
            <p class="muted">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <strong>Bombom PVC Server</strong>
        <p>Discord: discord.gg/bombompvc • E-posta: support@bombompvc.gg</p>
        <p>© 2024 Bombom PVC. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { faqs, features, plans, roadmap, rules, stats } from './content';

const opsChecklist = [
  'Ping & TPS kontrolü',
  'Raid logları izleme',
  'Back-up snapshots',
  'Economy anomaly scan',
];
</script>

<style scoped>
.muted {
  color: var(--text-muted);
  line-height: 1.6;
}
</style>
