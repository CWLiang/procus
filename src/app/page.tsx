'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    // FAQ Toggle
    const handleFaqClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const question = target.closest('.faq-question');
      if (question) {
        const item = question.parentElement;
        const wasActive = item?.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.faq-item').forEach(faqItem => {
          faqItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!wasActive && item) {
          item.classList.add('active');
        }
      }
    };

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href') || '');
        if (targetElement) {
          const offset = 80; // Height of fixed navbar
          const targetPosition = (targetElement as HTMLElement).offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Newsletter form
    const handleNewsletterSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const email = (form.querySelector('input') as HTMLInputElement)?.value;
      if (email) {
        alert('感謝您的訂閱！我們將定期寄送最新資訊給您。');
        (form.querySelector('input') as HTMLInputElement).value = '';
      }
    };

    // Mobile menu toggle
    const handleMobileMenuClick = () => {
      const navMenu = document.querySelector('.nav-menu');
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      navMenu?.classList.toggle('active');
      mobileMenuToggle?.classList.toggle('active');
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleFaqClick);
    document.addEventListener('click', handleAnchorClick);
    document.querySelector('.newsletter-form')?.addEventListener('submit', handleNewsletterSubmit);
    document.querySelector('.mobile-menu-toggle')?.addEventListener('click', handleMobileMenuClick);

    // Observe elements for animations
    document.querySelectorAll('.service-block, .case-card, .value-item').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease-out';
      observer.observe(element);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleFaqClick);
      document.removeEventListener('click', handleAnchorClick);
      document.querySelector('.newsletter-form')?.removeEventListener('submit', handleNewsletterSubmit);
      document.querySelector('.mobile-menu-toggle')?.removeEventListener('click', handleMobileMenuClick);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav id="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <div className="logo-mark"></div>
            專注 | PROCUS
          </a>
          <ul className="nav-menu">
            <li><a href="#services">服務介紹</a></li>
            <li><a href="#cases">成功案例</a></li>
            <li><a href="#about">關於我們</a></li>
            <li><a href="#faq">常見問題</a></li>
            <li><a href="#contact" className="contact-btn">聯絡我們</a></li>
          </ul>
          <div className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-tagline">TOGETHER WE GROW</div>
          <h1>
            連結<strong>企業需求</strong>與<strong>專業資源</strong><br/>
            共創真實的商業價值
          </h1>
          <p className="hero-subtitle">
            一站式注入專業與經驗，讓企業主專注在策略與成長
          </p>
          
          <div className="entry-points">
            <div className="entry-card">
              <span className="entry-icon">🏢</span>
              <h3>我是企業主</h3>
              <p>尋找專業顧問協助<br/>解決經營痛點，提升營運效率</p>
              <a href="/consultant" className="entry-btn">
                尋找顧問協助
                <span>→</span>
              </a>
            </div>
            
            <div className="entry-card">
              <span className="entry-icon">💼</span>
              <h3>我是專家</h3>
              <p>打造個人品牌<br/>透過平台提供顧問服務變現</p>
              <a href="/expert" className="entry-btn">
                成為平台顧問
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="section-header">
          <div className="section-tag">OUR SERVICES</div>
          <h2 className="section-title">為不同需求打造的專業服務</h2>
          <p className="section-desc">
            無論您是尋求專業協助的企業主，或是想要發展顧問事業的專家<br/>
            我們都能提供最適合的解決方案
          </p>
        </div>

        <div className="services-grid">
          {/* Business Services */}
          <div id="business-services" className="service-block">
            <h3>
              <span className="service-number">01</span>
              企業顧問媒合服務
            </h3>
            
            <div className="process-flow">
              <div className="process-step">
                <div className="step-icon">🔍</div>
                <div className="step-title">問題診斷</div>
                <div className="step-desc">深入了解痛點</div>
              </div>
              <div className="process-step">
                <div className="step-icon">🤝</div>
                <div className="step-title">媒合顧問</div>
                <div className="step-desc">精準配對專家</div>
              </div>
              <div className="process-step">
                <div className="step-icon">🚀</div>
                <div className="step-title">協作落地</div>
                <div className="step-desc">陪跑執行方案</div>
              </div>
              <div className="process-step">
                <div className="step-icon">📊</div>
                <div className="step-title">效益追蹤</div>
                <div className="step-desc">持續優化改善</div>
              </div>
            </div>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-check"></div>
                <div className="feature-text">
                  <h4>解決人才缺口</h4>
                  <p>快速引入專業人才，填補關鍵職能空缺</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-check"></div>
                <div className="feature-text">
                  <h4>導入專業工具</h4>
                  <p>協助評估並導入適合的管理工具與系統</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-check"></div>
                <div className="feature-text">
                  <h4>策略規劃執行</h4>
                  <p>從策略制定到執行落地的完整陪伴</p>
                </div>
              </div>
            </div>
            
            <a href="/consultant" className="cta-primary">
              預約顧問諮詢
              <span>→</span>
            </a>
          </div>

          {/* Expert Services */}
          <div id="expert-services" className="service-block">
            <h3>
              <span className="service-number">02</span>
              專家品牌打造服務
            </h3>
            
            <div className="process-flow">
              <div className="process-step">
                <div className="step-icon">🌐</div>
                <div className="step-title">建立專頁</div>
                <div className="step-desc">個人品牌官網</div>
              </div>
              <div className="process-step">
                <div className="step-icon">📅</div>
                <div className="step-title">開啟預約</div>
                <div className="step-desc">智能排程系統</div>
              </div>
              <div className="process-step">
                <div className="step-icon">📈</div>
                <div className="step-title">內容行銷</div>
                <div className="step-desc">擴大影響力</div>
              </div>
              <div className="process-step">
                <div className="step-icon">💰</div>
                <div className="step-title">服務變現</div>
                <div className="step-desc">穩定收入來源</div>
              </div>
            </div>
            
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-check"></div>
                <div className="feature-text">
                  <h4>專業形象網站</h4>
                  <p>快速建立個人品牌官網，展現專業價值</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-check"></div>
                <div className="feature-text">
                  <h4>自動化預約系統</h4>
                  <p>智能管理諮詢時段，提升服務效率</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-check"></div>
                <div className="feature-text">
                  <h4>平台流量導入</h4>
                  <p>善用平台資源，持續獲得潛在客戶</p>
                </div>
              </div>
            </div>
            
            <a href="/expert" className="cta-primary">
              申請成為平台專家
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section id="cases" className="cases-section">
        <div className="section-header">
          <div className="section-tag">SUCCESS STORIES</div>
          <h2 className="section-title">企業與專家的共贏故事</h2>
          <p className="section-desc">
            每一個成功案例，都是企業需求與專業資源的完美對接
          </p>
        </div>

        <div className="cases-grid">
          <div className="case-card">
            <div className="case-industry">製造業</div>
            <h3 className="case-title">傳統製造業數位轉型</h3>
            <p className="case-desc">
              透過平台媒合數位轉型專家，6個月內成功導入智慧製造系統，建立數據驅動的管理模式。
            </p>
            <div className="case-metrics">
              <div className="metric-item">
                <span className="metric-value">45%</span>
                <span className="metric-label">生產效率提升</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">30%</span>
                <span className="metric-label">營運成本降低</span>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="case-industry">電商零售</div>
            <h3 className="case-title">新創電商品牌重塑</h3>
            <p className="case-desc">
              行銷專家協助重新定位品牌策略，優化全通路行銷佈局，成功打造差異化競爭優勢。
            </p>
            <div className="case-metrics">
              <div className="metric-item">
                <span className="metric-value">180%</span>
                <span className="metric-label">年營收成長</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">3.5X</span>
                <span className="metric-label">轉換率提升</span>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="case-industry">服務業</div>
            <h3 className="case-title">連鎖餐飲營運優化</h3>
            <p className="case-desc">
              導入營運管理顧問，建立標準化流程與培訓體系，快速複製成功經驗至各分店。
            </p>
            <div className="case-metrics">
              <div className="metric-item">
                <span className="metric-value">25%</span>
                <span className="metric-label">人力成本優化</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">92%</span>
                <span className="metric-label">客戶滿意度</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>陪伴客戶走得更長遠</h2>
            <p>
              專注 Procus 不只是一個顧問媒合平台，更是企業成長路上的戰略夥伴。我們深信，真正的價值來自於持續的陪伴與落地執行。
            </p>
            <p>
              透過嚴選的專業顧問網絡，我們協助企業解決關鍵問題，同時為專家打造個人品牌，創造雙贏的商業生態圈。
            </p>
            <p>
              我們的使命是讓每一次的顧問合作，都能創造實質的商業價值，推動企業持續成長。
            </p>
          </div>
          
          <div className="about-values">
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <h3 className="value-title">信任</h3>
              <p className="value-desc">建立透明可靠的合作關係</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <h3 className="value-title">專業</h3>
              <p className="value-desc">嚴選各領域實戰專家</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🚀</span>
              <h3 className="value-title">落地</h3>
              <p className="value-desc">注重執行與成果追蹤</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌱</span>
              <h3 className="value-title">成長</h3>
              <p className="value-desc">持續優化共同進步</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="section-header">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">常見問題</h2>
          <p className="section-desc">
            幫助您更了解我們的服務
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-item">
            <div className="faq-question">
              <h4>顧問費用如何計算？</h4>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>
                顧問費用依據專業領域、經驗年資與服務內容而定。平台提供透明的價格區間參考，
                企業可依預算選擇適合的顧問。我們也提供首次諮詢優惠方案，讓企業能以較低成本
                評估顧問的適配性。
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h4>平台如何收費？</h4>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>
                企業主可免費使用平台尋找顧問。專家端採用訂閱制，提供基礎版、專業版、企業版
                三種會員方案，包含個人網站、預約系統、行銷工具等功能。成交後我們收取 10-15% 
                的平台服務費，確保持續提供優質的媒合與支援服務。
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h4>如何確保顧問品質？</h4>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>
                所有顧問都需通過嚴格的專業審核，包含資歷驗證、案例審查、客戶推薦等。
                我們建立完整的評價機制，每次合作後都會收集雙方回饋，確保服務品質。
                表現優異的顧問將獲得平台認證標章，提升可信度。
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h4>成為平台專家的條件？</h4>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>
                需具備相關領域 5 年以上實務經驗，並提供至少 3 個成功案例。我們重視實戰經驗
                勝過學歷背景。通過初步審核後，將安排線上面談，了解您的專業能力與服務理念。
                審核通過後即可開始建立個人品牌頁面，開啟顧問服務。
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h4>平台提供哪些支援？</h4>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>
                企業端：智能媒合系統、顧問背景查核、合約範本、專案管理工具、成效追蹤報表。
                專家端：個人品牌網站、預約排程系統、發票金流服務、內容行銷支援、
                專業培訓課程。我們也提供專屬客戶成功經理，協助解決合作過程中的各種問題。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>專注 | PROCUS</h3>
            <p>
              我們致力於建立最專業的顧問媒合平台，透過科技連結企業需求與專家資源，
              實現真正的商業價值。讓專業落地，讓價值實現。
            </p>
            <div className="social-links">
              <a href="#"><span>f</span></a>
              <a href="#"><span>in</span></a>
              <a href="#"><span>ig</span></a>
              <a href="#"><span>▶</span></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>服務項目</h4>
            <ul className="footer-links">
              <li><a href="/consultant">企業顧問媒合</a></li>
              <li><a href="/expert">專家品牌打造</a></li>
              <li><a href="#">顧問培訓課程</a></li>
              <li><a href="#cases">成功案例分享</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>資源中心</h4>
            <ul className="footer-links">
              <li><a href="#">部落格</a></li>
              <li><a href="#">白皮書下載</a></li>
              <li><a href="#">線上研討會</a></li>
              <li><a href="#">顧問指南</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>訂閱電子報</h4>
            <p style={{color: 'var(--text-gray)', marginBottom: '1rem'}}>
              獲取最新商業洞察與顧問資訊
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="輸入您的 Email" />
              <button type="submit">訂閱</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 專注 | Procus. All rights reserved. | 服務條款 | 隱私政策 | Cookie 設定</p>
        </div>
      </footer>
    </>
  );
}
