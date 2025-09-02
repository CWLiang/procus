'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { expertsData, getExpertById, ExpertData } from '@/data/experts';
import ExpertAvatar from '@/components/ExpertAvatar';

export default function ExpertsPage() {
  const [selectedExpert, setSelectedExpert] = useState<ExpertData>(expertsData[0]);
  const [showExpertsList, setShowExpertsList] = useState(false);

  // Handle URL parameters to select specific expert
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const expertId = urlParams.get('expert');
    if (expertId) {
      const expert = getExpertById(expertId);
      if (expert) {
        setSelectedExpert(expert);
      }
    }
  }, []);

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

    // Prevent scroll propagation between panels
    const preventScrollPropagation = (e: Event) => {
      e.stopPropagation();
    };

    // Handle logo click for smooth scroll to top or navigate to home
    const handleLogoClick = (e: Event) => {
      const leftPanel = document.querySelector('.expert-detail-panel');
      const rightPanel = document.querySelector('.experts-grid-panel');
      
      // Check if both panels are at the top
      const leftAtTop = !leftPanel || leftPanel.scrollTop <= 10;
      const rightAtTop = !rightPanel || rightPanel.scrollTop <= 10;
      
      if (leftAtTop && rightAtTop) {
        // If at top, navigate to home page
        window.location.href = '/';
      } else {
        // If not at top, scroll to top
        e.preventDefault();
        if (leftPanel) {
          leftPanel.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        if (rightPanel) {
          rightPanel.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all fade-in sections
    const fadeInElements = document.querySelectorAll('.fade-in-section');
    fadeInElements.forEach(el => observer.observe(el));

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.querySelector('.mobile-menu-toggle')?.addEventListener('click', handleMobileMenuClick);
    document.querySelector('#logoLink')?.addEventListener('click', handleLogoClick);
    
    // Add mobile menu link click handlers
    const mobileMenuLinks = document.querySelectorAll('.nav-menu a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', handleMobileMenuLinkClick);
    });
    
    // Add scroll isolation for both panels
    const leftPanel = document.querySelector('.expert-detail-panel');
    const rightPanel = document.querySelector('.experts-grid-panel');
    
    if (leftPanel) {
      leftPanel.addEventListener('scroll', preventScrollPropagation);
    }
    if (rightPanel) {
      rightPanel.addEventListener('scroll', preventScrollPropagation);
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelector('.mobile-menu-toggle')?.removeEventListener('click', handleMobileMenuClick);
      document.querySelector('#logoLink')?.removeEventListener('click', handleLogoClick);
      
      // Remove mobile menu link click handlers
      const mobileMenuLinks = document.querySelectorAll('.nav-menu a');
      mobileMenuLinks.forEach(link => {
        link.removeEventListener('click', handleMobileMenuLinkClick);
      });
      
      if (leftPanel) {
        leftPanel.removeEventListener('scroll', preventScrollPropagation);
      }
      if (rightPanel) {
        rightPanel.removeEventListener('scroll', preventScrollPropagation);
      }

      observer.disconnect();
    };
  }, []);

  // Get KPI data for selected expert
  const getExpertKPIs = (expert: ExpertData) => {
    switch (expert.id) {
      case 'Aaron':
        return [
          { value: '破億', label: '資金規模', description: 'DeFi金融產品交易量與鎖倉量', color: 'blue' },
          { value: '10年', label: '技術經驗', description: '程式自動化與AI應用深度經驗', color: 'purple' },
          { value: '3大', label: '核心領域', description: 'AI自動化、DeFi開發、數據分析', color: 'green' },
          { value: '100%', label: '專案成功率', description: '從學術研究到商業落地的完整實踐', color: 'orange' }
        ];
      case 'Charlie':
        return [
          { value: '百億', label: '企業規模', description: '協助企業總規模超過百億元', color: 'purple' },
          { value: '10大', label: '產業經驗', description: '跨房仲、教育、食品等多元產業', color: 'blue' },
          { value: '13年', label: '特助資歷', description: '老闆特助經驗，深諳決策者思維', color: 'green' },
          { value: '破億', label: '募資成果', description: '協助創辦人成功募資破億元', color: 'orange' }
        ];
      case 'Mikhor':
        return [
          { value: '105家', label: '企業客戶', description: '一年內從零開始成功開發的跨產業客戶數量', color: 'brown' },
          { value: '30%', label: '營收增長', description: '協助美學工作室在2個月內實現的營收增長率', color: 'green' },
          { value: '23%', label: '市場轉化率', description: '首次進入馬來西亞市場，三個月內達成的線上高價值方案轉化率', color: 'blue' },
          { value: '100%', label: '客戶滿意度', description: '長期陪跑超過20位企業主，始終將客戶成功置於首位', color: 'purple' }
        ];
      default:
        return [];
    }
  };

  // Get timeline data for selected expert
  const getExpertTimeline = (expert: ExpertData) => {
    switch (expert.id) {
      case 'Aaron':
        return [
          {
            period: '學術研究期',
            age: '博士階段',
            title: '技術基礎奠定',
            description: '交大電機博士，專精半導體設計自動化，獲最佳博士論文獎',
            color: 'blue'
          },
          {
            period: '技術深耕期', 
            age: '十年積累',
            title: '雙軌專業發展',
            description: '程式自動化開發與AI機器學習並行，累積深厚實戰經驗',
            color: 'purple'
          },
          {
            period: '創業實踐期',
            age: '破億成果',
            title: 'DeFi全棧開發',
            description: '從零打造去中心化金融平台，達成破億資金規模里程碑',
            color: 'green'
          }
        ];
      case 'Charlie':
        return [
          {
            period: '學習成長期',
            age: '大學階段',
            title: '管理基礎建立',
            description: '台灣大學農經所碩士，建立經濟與管理理論基礎',
            color: 'purple'
          },
          {
            period: '實戰累積期',
            age: '13年歷練',
            title: '特助經驗深化',
            description: '13年老闆特助資歷，跨10大產業，累積百億企業經驗',
            color: 'blue'
          },
          {
            period: '顧問專精期',
            age: '現階段',
            title: '轉型升級專家',
            description: '專注企業轉型與組織升級，實現戰略與實戰並行',
            color: 'green'
          }
        ];
      case 'Mikhor':
        return [
          {
            period: '多元發展期',
            age: '17-23歲',
            title: '跨領域能力培養',
            description: '從高中校隊到大學跨界實習，展現卓越多工管理能力',
            color: 'brown'
          },
          {
            period: '專業認證期',
            age: '23-27歲',
            title: '國際資格取得',
            description: '取得NLP、國際催眠師等專業認證，建立顧問基礎',
            color: 'blue'
          },
          {
            period: '創業領導期',
            age: '27歲至今',
            title: 'Procus創辦與市場拓展',
            description: '創辦Procus，成功開發105家企業客戶，達成卓越業績',
            color: 'green'
          }
        ];
      default:
        return [];
    }
  };

  const kpis = getExpertKPIs(selectedExpert);
  const timeline = getExpertTimeline(selectedExpert);

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
            <Link href="/#experts">專家陣容</Link>
            <Link href="/#about">關於我們</Link>
            <Link href="/consultation" className="contact-btn">立即諮詢</Link>
          </div>
          <div className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Expert Detail Page */}
      <div className="expert-detail-page">
        {/* Left Panel - Selected Expert Detail */}
        <div className={`expert-detail-panel ${showExpertsList ? '' : 'full-width'}`}>
          <div className="expert-detail-content">
            
            {/* Expert Hero Section */}
            <div className="expert-hero fade-in-section">
              <div className="expert-hero-content">
                <div className="expert-main-avatar">
                  <ExpertAvatar 
                    name={selectedExpert.name}
                    image={selectedExpert.image}
                    fallbackGradient={selectedExpert.fallbackGradient}
                    fallbackInitials={selectedExpert.fallbackInitials}
                    size="large"
                    className="expert-main-avatar-image"
                  />
                </div>
                <div className="expert-main-info">
                  <h1 className="expert-main-name">{selectedExpert.name}</h1>
                  <div className="expert-main-title">{selectedExpert.title}</div>
                  <div className="expert-main-expertise">{selectedExpert.expertise}</div>
                  <div className="expert-main-highlights">
                    {selectedExpert.highlights.map((highlight, index) => (
                      <span key={index} className="main-highlight-badge">{highlight}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Improved Experts Toggle Button */}
            <div className="experts-toggle-container">
              <button 
                onClick={() => setShowExpertsList(!showExpertsList)}
                className={`experts-toggle-btn ${showExpertsList ? 'active' : ''}`}
                aria-label={showExpertsList ? '隱藏專家列表' : '查看所有專家'}
              >
                <span className="btn-icon">
                  {showExpertsList ? '×' : '👥'}
                </span>
                <span className="btn-text">
                  {showExpertsList ? '隱藏專家列表' : '查看所有專家'}
                </span>
                <span className="btn-arrow">
                  {showExpertsList ? '←' : '→'}
                </span>
              </button>
            </div>

            {/* Professional Bio Section */}
            <section className="expert-bio-section fade-in-section">
              <h2 className="section-title">專業背景</h2>
              <div className="expert-bio-content">
                <p className="expert-full-bio">{selectedExpert.fullBio}</p>
              </div>
            </section>

            <hr className="section-divider" />

            {/* KPI Data Cards Section */}
            <section className="expert-kpi-section fade-in-section">
              <h2 className="section-title">核心成就數據</h2>
              <div className="kpi-grid">
                {kpis.map((kpi, index) => (
                  <div key={index} className={`kpi-card kpi-${kpi.color}`}>
                    <div className="kpi-number">{kpi.value}</div>
                    <h3 className="kpi-label">{kpi.label}</h3>
                    <p className="kpi-description">{kpi.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="section-divider" />

            {/* Professional Development Timeline */}
            <section className="expert-timeline-section fade-in-section">
              <h2 className="section-title">專業發展歷程</h2>
              <div className="timeline-container">
                {timeline.map((period, index) => (
                  <div key={index} className={`timeline-card timeline-${period.color}`}>
                    <div className="timeline-period">{period.period}</div>
                    <div className="timeline-age">{period.age}</div>
                    <h3 className="timeline-title">{period.title}</h3>
                    <p className="timeline-description">{period.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="section-divider" />

            {/* Enhanced Case Studies */}
            <section className="expert-cases-section fade-in-section">
              <h2 className="section-title">實戰案例：成功實績</h2>
              <div className="case-studies-grid">
                {selectedExpert.successCases.map((case_, index) => (
                  <div key={index} className="case-study-card">
                    <div className="case-header">
                      <h3 className="case-title">{case_.company}</h3>
                      <span className="case-industry">{case_.industry}</span>
                    </div>
                    <div className="case-content">
                      <div className="case-section">
                        <h4 className="case-section-title">挑戰</h4>
                        <p className="case-text">{case_.challenge}</p>
                      </div>
                      <div className="case-section">
                        <h4 className="case-section-title">解決方案</h4>
                        <p className="case-text">{case_.solution}</p>
                      </div>
                      <div className="case-result-section">
                        <h4 className="case-section-title">成果</h4>
                        <p className="case-result-text">{case_.result}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <hr className="section-divider" />

            {/* Specialties and Credentials - Side by Side */}
            <div className="expert-bottom-sections fade-in-section">
              <div className="expert-specialties-section">
                <h2 className="section-title">專業領域</h2>
                <div className="specialties-grid">
                  {selectedExpert.specialties.map((specialty, index) => (
                    <div key={index} className="specialty-card">
                      <div className="specialty-icon">{specialty.icon}</div>
                      <div className="specialty-content">
                        <h4 className="specialty-title">{specialty.title}</h4>
                        <p className="specialty-description">{specialty.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="expert-credentials-section">
                <h2 className="section-title">學歷與認證</h2>
                <div className="credentials-container">
                  <div className="credential-group">
                    <h4 className="credential-group-title">學歷</h4>
                    <ul className="credential-list">
                      {selectedExpert.credentials.education.map((edu, index) => (
                        <li key={index} className="credential-item">{edu}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="credential-group">
                    <h4 className="credential-group-title">專業認證</h4>
                    <ul className="credential-list">
                      {selectedExpert.credentials.certifications.map((cert, index) => (
                        <li key={index} className="credential-item">{cert}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="credential-group">
                    <h4 className="credential-group-title">工作經歷</h4>
                    <ul className="credential-list">
                      {selectedExpert.credentials.experience.map((exp, index) => (
                        <li key={index} className="credential-item">{exp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="expert-cta fade-in-section">
              <Link href="/consultation" className="cta-primary">
                立即預約諮詢
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel - All Experts Grid */}
        <div className={`experts-grid-panel ${showExpertsList ? 'show' : 'hide'}`}>
          <div className="experts-grid-content">
            <div className="grid-header">
              <h2 className="grid-title">專家陣容</h2>
              <p className="grid-subtitle">點擊專家卡片查看詳細資訊</p>
            </div>
            
            <div className="experts-grid-container">
              {expertsData.map((expert) => (
                <div 
                  key={expert.id}
                  className={`expert-grid-card ${selectedExpert.id === expert.id ? 'selected' : ''}`}
                  onClick={() => setSelectedExpert(expert)}
                >
                  <div className="expert-grid-avatar">
                    <ExpertAvatar 
                      name={expert.name}
                      image={expert.image}
                      fallbackGradient={expert.fallbackGradient}
                      fallbackInitials={expert.fallbackInitials}
                      size="medium"
                      className="expert-grid-avatar-image"
                    />
                  </div>
                  <div className="expert-grid-info">
                    <div className="expert-grid-name">{expert.name}</div>
                    <div className="expert-grid-title">{expert.title}</div>
                    <div className="expert-grid-expertise">{expert.expertise}</div>
                    <p className="expert-grid-bio">{expert.bio}</p>
                    <div className="expert-grid-highlights">
                      {expert.highlights.map((highlight, index) => (
                        <span key={index} className="grid-highlight-badge">{highlight}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}