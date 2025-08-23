'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllExpertsBasicInfo } from '@/data/experts';
import Image from 'next/image';

// ExpertAvatar 組件 - 處理照片不存在的情況
interface ExpertAvatarProps {
  imagePath: string;
  name: string;
  avatarClass: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
}

function ExpertAvatar({ imagePath, name, avatarClass, width, height, className, style }: ExpertAvatarProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 檢查圖片是否存在
  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = imagePath;
  }, [imagePath]);

  // 如果圖片載入失敗或還沒載入，使用CSS背景
  if (imageError || !imageLoaded) {
    return (
      <div 
        className={`${avatarClass} ${className || ''}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: '10px',
          position: 'relative',
          overflow: 'hidden',
          ...style
        }}
      />
    );
  }

  // 載入真實圖片
  return (
    <Image
      src={imagePath}
      alt={name}
      width={width}
      height={height}
      className={`${className} expert-avatar-img`}
      style={{
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '10px',
        ...style
      }}
    />
  );
}

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
      const href = target.getAttribute('href');
      if (href?.startsWith('#') && href.length > 1) { // Check that href is not just '#'
        e.preventDefault();
        const targetElement = document.querySelector(href);
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

    // Handle logo click for smooth scroll to top
    const handleLogoClick = (e: Event) => {
      e.preventDefault();
      // Only scroll if not already at top
      if (window.scrollY > 0) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    };

    // Newsletter form
    const handleNewsletterSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const email = (form.querySelector('input') as HTMLInputElement)?.value;
      if (email) {
        alert('感謝您的訂閱！我們將定期寄送企業經營洞察給您。');
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

    // Close mobile menu when clicking on links
    const handleMobileMenuLinkClick = () => {
      const navMenu = document.querySelector('.nav-menu');
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      navMenu?.classList.remove('active');
      mobileMenuToggle?.classList.remove('active');
    };



    // Expert Scroll functionality
    const handleExpertScrollClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const scrollWrapper = document.getElementById('expertsScrollWrapper');
      
      if (!scrollWrapper) {
        console.log('Scroll wrapper not found');
        return;
      }
      
      const cardWidth = 350 + 32; // card width (350px) + gap (2rem = 32px)
      
      if (target.id === 'scrollLeft') {
        console.log('Scrolling left by', -cardWidth);
        scrollWrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      } else if (target.id === 'scrollRight') {
        console.log('Scrolling right by', cardWidth);
        scrollWrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    };
    
    const updateScrollButtons = () => {
      const scrollWrapper = document.getElementById('expertsScrollWrapper');
      const scrollLeft = document.getElementById('scrollLeft');
      const scrollRight = document.getElementById('scrollRight');
      
      if (!scrollWrapper || !scrollLeft || !scrollRight) return;
      
      const { scrollLeft: currentScroll, scrollWidth, clientWidth } = scrollWrapper;
      
      // Hide left button if at start
      if (currentScroll <= 0) {
        scrollLeft.classList.add('hidden');
      } else {
        scrollLeft.classList.remove('hidden');
      }
      
      // Hide right button if at end
      if (currentScroll >= scrollWidth - clientWidth - 10) {
        scrollRight.classList.add('hidden');
      } else {
        scrollRight.classList.remove('hidden');
      }
    };
    
    const handleExpertScroll = () => {
      updateScrollButtons();
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
    document.addEventListener('click', handleExpertScrollClick);
    document.querySelector('.newsletter-form')?.addEventListener('submit', handleNewsletterSubmit);
    document.querySelector('.mobile-menu-toggle')?.addEventListener('click', handleMobileMenuClick);
    document.querySelector('#logoLink')?.addEventListener('click', handleLogoClick);
    
    // Add mobile menu link click handlers
    const mobileMenuLinks = document.querySelectorAll('.nav-menu a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', handleMobileMenuLinkClick);
    });
    
    // Initialize expert scroll buttons visibility
    setTimeout(() => {
      console.log('Initializing expert scroll...');
      updateScrollButtons();
      // Add scroll listener to expert wrapper
      const scrollWrapper = document.getElementById('expertsScrollWrapper');
      if (scrollWrapper) {
        console.log('Found scroll wrapper, adding scroll listener');
        scrollWrapper.addEventListener('scroll', handleExpertScroll);
      } else {
        console.log('Scroll wrapper not found during initialization');
      }
    }, 100); // Wait for DOM to be ready

    // Observe elements for animations
    document.querySelectorAll('.case-card, .pain-point, .feature-card, .value-item, .expert-card').forEach(el => {
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
      document.removeEventListener('click', handleExpertScrollClick);
      document.querySelector('.newsletter-form')?.removeEventListener('submit', handleNewsletterSubmit);
      document.querySelector('.mobile-menu-toggle')?.removeEventListener('click', handleMobileMenuClick);
      document.querySelector('#logoLink')?.removeEventListener('click', handleLogoClick);
      
      // Remove mobile menu link click handlers
      const mobileMenuLinks = document.querySelectorAll('.nav-menu a');
      mobileMenuLinks.forEach(link => {
        link.removeEventListener('click', handleMobileMenuLinkClick);
      });
      
      // Remove expert scroll listener
      const scrollWrapper = document.getElementById('expertsScrollWrapper');
      if (scrollWrapper) {
        scrollWrapper.removeEventListener('scroll', handleExpertScroll);
      }
      
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav id="navbar">
        <div className="nav-container">
          <Link href="/" className="logo" id="logoLink">
            <div className="logo-mark"></div>
            專注 | PROCUS
          </Link>
          <div className="nav-menu">
            <a href="#experts">專家陣容</a>
            <Link href="/experts">所有專家</Link>
            <a href="#about">關於我們</a>
            <Link href="/consultation" className="contact-btn">免費企業健診</Link>
          </div>
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
            連結<strong>企業需求</strong>與<strong>專家經驗</strong><br/>
            共創真實的商業價值
          </h1>
          <p className="hero-subtitle">
            我們是專家與企業間的橋樑，讓有經驗的專家與你並肩同行
          </p>
          
          <div className="hero-cta">
            <Link href="/consultation" className="cta-primary">
              預約企業健診
              <span>→</span>
            </Link>
            <a href="#experts" className="cta-secondary">
              查看專家陣容
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points & Value Section */}
      <section id="why-procus" className="pain-points-section" style={{display: 'none'}}>
        <div className="pain-points-container">
          <div className="pain-points-content">
            <h2>
              您是否正面臨這些<br/>
              <strong>經營挑戰</strong>？
            </h2>
            
            <div className="pain-points-list">
              <div className="pain-point">
                <span className="pain-icon">⚠️</span>
                <div className="pain-text">
                  <h4>商業模式混亂</h4>
                  <p>營運方向不清晰，缺乏系統化的商業策略</p>
                </div>
              </div>
              
              <div className="pain-point">
                <span className="pain-icon">⚠️</span>
                <div className="pain-text">
                  <h4>營銷漏斗不明</h4>
                  <p>客戶旅程斷層，無法有效轉換潛在客戶</p>
                </div>
              </div>
              
              <div className="pain-point">
                <span className="pain-icon">⚠️</span>
                <div className="pain-text">
                  <h4>缺乏領域經驗</h4>
                  <p>跨入新市場或產業，缺少實戰know-how</p>
                </div>
              </div>
              
              <div className="pain-point">
                <span className="pain-icon">⚠️</span>
                <div className="pain-text">
                  <h4>專業人才難尋</h4>
                  <p>關鍵職能缺口，但難以找到合適的專業人才</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="value-proposition">
            <h3>專注平台的價值</h3>
            <p style={{color: 'var(--text-gray)', marginBottom: '2rem'}}>
              我們不只是媒合顧問，更是您的成長夥伴
            </p>
            
            <div className="value-grid">
              <div className="value-item">
                <div className="value-check"></div>
                <span className="value-text">嚴選認證的產業專家</span>
              </div>
              <div className="value-item">
                <div className="value-check"></div>
                <span className="value-text">精準匹配企業需求</span>
              </div>
              <div className="value-item">
                <div className="value-check"></div>
                <span className="value-text">陪伴式顧問服務</span>
              </div>
              <div className="value-item">
                <div className="value-check"></div>
                <span className="value-text">成效導向收費模式</span>
              </div>
            </div>
            
            <Link href="/consultation" className="cta-primary" style={{marginTop: '2rem'}}>
              立即解決經營難題
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Expert Carousel Section */}
      <section id="experts" className="experts-section">
        <div className="experts-container">
          <div className="section-header">
            <div className="section-tag">OUR EXPERTS</div>
            <h2 className="section-title">業界頂尖專家陣容</h2>
            <p className="section-desc">
              匯聚各領域資深專家，擁有豐富實戰經驗，為您的企業量身打造解決方案
            </p>
          </div>
          
          <div className="experts-scroll-container">
            <div className="scroll-indicator scroll-left" id="scrollLeft">‹</div>
            <div className="scroll-indicator scroll-right" id="scrollRight">›</div>
            
            <div className="experts-scroll-wrapper" id="expertsScrollWrapper">
              <div className="experts-grid">
                {getAllExpertsBasicInfo().map((expert, index) => (
                  <Link key={expert.id} href={`/experts?expert=${expert.id}`} className="expert-card">
                    <div className="expert-avatar">
                      <ExpertAvatar
                        imagePath={expert.image}
                        name={expert.name}
                        avatarClass={`expert-${index + 1}`}
                        width={140}
                        height={180}
                        className="avatar-image"
                        style={{
                          objectFit: 'cover',
                          borderRadius: '10px'
                        }}
                      />
                    </div>
                    <div className="expert-info">
                      <div className="expert-name">{expert.name}</div>
                      <div className="expert-title">{expert.title}</div>
                      <div className="expert-expertise">{expert.expertise}</div>
                      <p className="expert-bio">{expert.bio}</p>
                      <div className="expert-highlights">
                        {expert.highlights.map((highlight, idx) => (
                          <span key={idx} className="highlight-badge">{highlight}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="experts-footer">
            <p>還有更多各領域專家等著與您合作</p>
            <Link href="/experts" className="cta-primary">
              查看所有專家
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="cases" className="cases-section" style={{display: 'none'}}>
        <div className="section-header">
          <div className="section-tag">SUCCESS STORIES</div>
          <h2 className="section-title">真實的轉型成果</h2>
          <p className="section-desc">
            我們相信每一間企業都應該被專業與經驗支持
          </p>
        </div>

        <div className="cases-grid">
          <div className="case-card">
            <div className="case-industry">製造業</div>
            <h3 className="case-title">傳統工廠智慧轉型</h3>
            <p className="case-desc">
              協助 30 年傳統製造廠導入 IoT 與數據分析系統，建立智慧生產線，大幅提升營運效率。
            </p>
            <div className="case-metrics">
              <div className="metric-item">
                <span className="metric-value">45%</span>
                <span className="metric-label">生產效率</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">30%</span>
                <span className="metric-label">成本降低</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">6個月</span>
                <span className="metric-label">回收期</span>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="case-industry">零售電商</div>
            <h3 className="case-title">全通路營銷優化</h3>
            <p className="case-desc">
              重新規劃品牌定位與行銷策略，整合線上線下通路，創造差異化競爭優勢。
            </p>
            <div className="case-metrics">
              <div className="metric-item">
                <span className="metric-value">180%</span>
                <span className="metric-label">營收成長</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">3.5倍</span>
                <span className="metric-label">轉換率</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">65%</span>
                <span className="metric-label">回購率</span>
              </div>
            </div>
          </div>

          <div className="case-card">
            <div className="case-industry">服務業</div>
            <h3 className="case-title">連鎖餐飲標準化</h3>
            <p className="case-desc">
              建立完整 SOP 與培訓體系，協助從單店擴展至 15 家分店，確保服務品質一致性。
            </p>
            <div className="case-metrics">
              <div className="metric-item">
                <span className="metric-value">15家</span>
                <span className="metric-label">成功展店</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">92%</span>
                <span className="metric-label">品質一致</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">25%</span>
                <span className="metric-label">人力優化</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section" style={{display: 'none'}}>
        <div className="section-header">
          <div className="section-tag">OUR PROCESS</div>
          <h2 className="section-title">專業顧問媒合流程</h2>
          <p className="section-desc">
            透過系統化的流程，確保每次合作都能創造最大價值
          </p>
        </div>

        <div className="process-container">
          <div className="process-header">
            <h3>四步驟開啟轉型之旅</h3>
            <p style={{color: 'var(--text-gray)'}}>從需求了解到成效追蹤，全程陪伴您的企業成長</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">🔍</div>
              <div className="step-title">深度診斷</div>
              <div className="step-desc">免費諮詢了解企業現況與核心痛點</div>
            </div>
            <div className="process-step">
              <div className="step-icon">🤝</div>
              <div className="step-title">精準媒合</div>
              <div className="step-desc">24小時內推薦3位最適合的專家</div>
            </div>
            <div className="process-step">
              <div className="step-icon">🚀</div>
              <div className="step-title">啟動專案</div>
              <div className="step-desc">顧問進駐，展開客製化輔導</div>
            </div>
            <div className="process-step">
              <div className="step-icon">📊</div>
              <div className="step-title">成效追蹤</div>
              <div className="step-desc">定期檢視進度，確保目標達成</div>
            </div>
          </div>
          
          <div className="service-features">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h4>產業專精</h4>
              <p>500+ 位各領域認證專家，涵蓋製造、零售、服務、科技等產業</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h4>實戰經驗</h4>
              <p>平均 15 年以上產業經驗，曾協助超過 1,200 家企業成功轉型</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h4>成效保證</h4>
              <p>階段性付款機制，未達成目標提供額外支援或部分退款</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{display: 'none'}}>
        <div className="cta-content">
          <h2>準備好突破經營瓶頸了嗎？</h2>
          <p>立即預約企業健診，讓專業顧問協助您找到最佳解決方案</p>
          
          <div className="cta-stats">
            <div className="cta-stat">
              <span className="cta-stat-number">500+</span>
              <span className="cta-stat-label">認證顧問</span>
            </div>
            <div className="cta-stat">
              <span className="cta-stat-number">1,200+</span>
              <span className="cta-stat-label">成功案例</span>
            </div>
            <div className="cta-stat">
              <span className="cta-stat-number">95%</span>
              <span className="cta-stat-label">客戶滿意度</span>
            </div>
          </div>
          
          <Link href="/consultation" className="cta-primary">
            預約企業健診
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>陪伴企業走得更長遠</h2>
            <p>
              Procus 深信，真正的顧問價值不在於提供建議，而在於陪伴執行與落地實踐。
            </p>
            <p>
              我們嚴選各領域的實戰專家，不只提供策略規劃，更重視執行陪跑，確保每個建議都能轉化為實際成果。
            </p>
            
          </div>
          
          <div className="about-values">
            <div className="value-item">
              <span className="value-icon">🤝</span>
              <h3 className="value-title">信任</h3>
              <p className="value-desc">透明的合作機制</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <h3 className="value-title">專業</h3>
              <p className="value-desc">嚴選認證專家</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🚀</span>
              <h3 className="value-title">落地</h3>
              <p className="value-desc">重視執行成效</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌱</span>
              <h3 className="value-title">成長</h3>
              <p className="value-desc">持續優化改善</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section" style={{display: 'none'}}>
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
                顧問費用依據專案複雜度、所需時間與顧問資歷而定。我們提供三種收費模式：
                時薪制（3,000-15,000元/小時）、專案制（依專案規模報價）、成效制（基本費用+成效分潤）。
                首次諮詢完全免費，確認合作意向後才會產生費用。
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
                所有顧問都需通過嚴格的三階段審核：資歷驗證（15年以上經驗）、案例審查（至少5個成功案例）、
                客戶推薦（3位以上推薦人）。我們也建立評價機制，每次合作後收集回饋，
                維持 4.5 星以上評價的顧問才能持續服務。
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h4>媒合過程需要多久？</h4>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>
                提交需求後，我們會在 24 小時內完成初步評估並推薦 3 位適合的顧問。
                您可以查看顧問資料、進行線上面談（通常 30 分鐘），整個媒合過程約 3-5 個工作天。
                確認合作後，顧問可在一週內開始服務。
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h4>如果對顧問不滿意怎麼辦？</h4>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>
                我們提供「滿意保證」機制。合作初期（前 2 週）如果您對顧問不滿意，
                可以免費更換其他顧問。若仍無法達到期待，我們提供全額退款。
                此外，專案進行中隨時可以向客戶成功經理反映問題，我們會立即介入協調。
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <h4>哪些產業的顧問最多？</h4>
              <span className="faq-arrow">▼</span>
            </div>
            <div className="faq-answer">
              <p>
                我們的顧問涵蓋各大產業，其中以製造業（30%）、零售電商（25%）、
                服務業（20%）、科技業（15%）為主。專業領域包含：經營策略、數位轉型、
                行銷推廣、人力資源、財務管理、營運優化等。無論您的產業為何，
                我們都能找到適合的專家。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content" style={{gap: '3rem', gridTemplateColumns: '2.5fr 1fr 1fr 1.5fr'}}>
          <div className="footer-brand">
            <h3>專注 | PROCUS</h3>
            <p style={{marginBottom: '0.5rem'}}>
              我們致力於為企業找到最適合的專業顧問，透過精準媒合與陪伴式服務，
              協助企業突破經營瓶頸，實現持續成長。
            </p>
            <div className="social-links" style={{display: 'none'}}>
              <a href="#"><span>f</span></a>
              <a href="#"><span>in</span></a>
              <a href="#"><span>ig</span></a>
              <a href="#"><span>▶</span></a>
            </div>
          </div>

          <div className="footer-section">
            <h4 style={{marginBottom: '1rem'}}>服務項目</h4>
            <ul className="footer-links">
              <li><Link href="/experts">專家媒合諮詢</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 style={{marginBottom: '1rem'}}>關於專注</h4>
            <ul className="footer-links">
              <li><a href="#about">公司介紹</a></li>
              <li><a href="#experts">專家團隊</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 style={{marginBottom: '1rem'}}>聯絡我們</h4>
            <p style={{color: 'var(--text-gray)', marginBottom: '1rem'}}>
              週一至週五 9:00-18:00<br/>
              Phone：+886 970-767-307<br/>
              Email：mikhorszee422@gmail.com
            </p>
            <form className="newsletter-form" style={{display: 'none'}}>
              <input type="email" placeholder="訂閱電子報" />
              <button type="submit">訂閱</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom" style={{marginTop: '2rem', paddingTop: '1.5rem'}}>
          <p>&copy; 2024 專注 | Procus. All rights reserved. | 讓專業落地，讓價值實現</p>
        </div>
      </footer>
    </>
  );
}
