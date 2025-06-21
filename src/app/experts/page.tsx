'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
        className={`${avatarClass}`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: style?.borderRadius || '16px',
          position: 'relative',
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
      className={className}
      style={style}
    />
  );
}

// 專家資料
const expertsData = [
  {
    id: 1,
    name: '林建志',
    title: '數位轉型策略總監',
    expertise: ['製造業', '智慧工廠', 'IoT'],
    bio: '前台積電資深經理，20年製造業經驗，專精智慧製造與數位轉型，已協助200+傳統工廠成功升級。',
    experience: '20年經驗',
    cases: '200+案例',
    background: '台積電背景',
    avatarClass: 'expert-1',
    imagePath: '/images/experts/expert-1.jpg',
    fullBio: '林建志先生擁有超過20年的製造業經驗，曾在台積電擔任資深經理職位，負責多項重大數位轉型專案。他深度了解傳統製造業的痛點，並具備豐富的智慧製造導入經驗。',
    specialties: [
      '智慧製造系統導入',
      'IoT設備整合',
      '生產流程優化',
      '數據分析與預測維護',
      '工業4.0轉型策略'
    ],
    successCases: [
      {
        company: '某汽車零件製造商',
        challenge: '傳統生產線效率低下，品質控制困難',
        solution: '導入IoT感測器與AI品質檢測系統',
        result: '生產效率提升45%，不良品率降低60%'
      },
      {
        company: '傳統紡織廠',
        challenge: '人工依賴度高，成本控制困難',
        solution: '建立智慧排程系統與自動化產線',
        result: '人力成本降低30%，交期準確率提升至98%'
      }
    ],
    education: [
      '台灣大學工業工程學系碩士',
      '清華大學電機工程學系學士'
    ],
    certifications: [
      '工業4.0專業認證',
      'PMP專案管理師',
      'Six Sigma黑帶'
    ]
  },
  {
    id: 2,
    name: '陳雅婷',
    title: '品牌行銷策略專家',
    expertise: ['電商', '品牌策略', '社群行銷'],
    bio: '前momo購物網行銷總監，15年電商經驗，成功打造多個破億營收品牌，擅長全通路整合行銷。',
    experience: '15年經驗',
    cases: '破億品牌',
    background: 'momo背景',
    avatarClass: 'expert-2',
    imagePath: '/images/experts/expert-2.jpg',
    fullBio: '陳雅婷女士在電商領域深耕15年，曾任momo購物網行銷總監，成功操盤多個年營收破億的品牌專案。她精通數位行銷策略，特別在全通路整合與品牌建立方面有卓越表現。',
    specialties: [
      '電商平台營運策略',
      '品牌定位與形象塑造',
      '社群媒體行銷',
      '數位廣告投放優化',
      '客戶關係管理(CRM)'
    ],
    successCases: [
      {
        company: '新創美妝品牌',
        challenge: '品牌知名度低，線上銷售困難',
        solution: '制定完整品牌策略與社群行銷計畫',
        result: '6個月內營收成長300%，社群粉絲破10萬'
      },
      {
        company: '傳統服飾品牌',
        challenge: '數位轉型困難，年輕客群流失',
        solution: '重新定位品牌並建立全通路銷售體系',
        result: '年營收突破2億，25-35歲客群佔比提升至60%'
      }
    ],
    education: [
      '政治大學企業管理研究所MBA',
      '輔仁大學廣告傳播學系學士'
    ],
    certifications: [
      'Google Ads認證專家',
      'Facebook Blueprint認證',
      '數位行銷管理師'
    ]
  },
  {
    id: 3,
    name: '張志明',
    title: '連鎖經營顧問',
    expertise: ['餐飲', '連鎖加盟', '營運管理'],
    bio: '王品集團前營運長，18年連鎖餐飲經驗，協助50+品牌成功展店，建立標準化營運體系。',
    experience: '18年經驗',
    cases: '50+品牌',
    background: '王品背景',
    avatarClass: 'expert-3',
    imagePath: '/images/experts/expert-3.jpg',
    fullBio: '張志明先生曾任王品集團營運長，擁有18年連鎖餐飲管理經驗。他深諳連鎖經營的核心要素，從品牌定位、標準化作業到加盟體系建立，協助超過50個品牌成功展店擴張。',
    specialties: [
      '連鎖加盟體系設計',
      '標準化作業流程建立',
      '門市營運管理',
      '供應鏈管理優化',
      '加盟主培訓體系'
    ],
    successCases: [
      {
        company: '地方特色小吃品牌',
        challenge: '想要連鎖化但缺乏標準化經驗',
        solution: '建立完整SOP與加盟管理制度',
        result: '成功展店15家，單店月營收平均提升40%'
      },
      {
        company: '咖啡連鎖品牌',
        challenge: '加盟店品質參差不齊，客訴頻傳',
        solution: '重新設計培訓體系與品質管控機制',
        result: '客戶滿意度提升至95%，加盟續約率達98%'
      }
    ],
    education: [
      '台北大學企業管理學系碩士',
      '淡江大學餐旅管理學系學士'
    ],
    certifications: [
      '連鎖加盟經營管理師',
      'HACCP食品安全管制認證',
      '餐飲業品質管理認證'
    ]
  },
  {
    id: 4,
    name: '劉美玲',
    title: '財務管理專家',
    expertise: ['財務規劃', '投資併購', '風險控制'],
    bio: '前玉山銀行投資部主管，22年金融財務經驗，協助企業優化財務結構，降低營運風險。',
    experience: '22年經驗',
    cases: '百億操盤',
    background: '玉山背景',
    avatarClass: 'expert-4',
    imagePath: '/images/experts/expert-4.jpg',
    fullBio: '劉美玲女士擁有22年金融業經驗，曾任玉山銀行投資部主管，管理資產規模超過百億。她在企業財務規劃、投資併購及風險管理方面具有豐富實戰經驗，協助眾多企業優化財務結構。',
    specialties: [
      '企業財務健檢與優化',
      '投資併購評估',
      '資金規劃與融資策略',
      '財務風險控制',
      '投資組合管理'
    ],
    successCases: [
      {
        company: '中小型製造業',
        challenge: '現金流緊張，融資困難',
        solution: '重新規劃財務結構與銀行關係',
        result: '成功取得5億融資，現金流改善80%'
      },
      {
        company: '科技新創公司',
        challenge: '尋求策略投資者進行擴張',
        solution: '協助進行投資併購談判與財務規劃',
        result: '成功引入3億投資，估值提升200%'
      }
    ],
    education: [
      '台灣大學財務金融學研究所碩士',
      '政治大學會計學系學士'
    ],
    certifications: [
      'CFA特許金融分析師',
      'FRM金融風險管理師',
      '證券投資分析師'
    ]
  },
  {
    id: 5,
    name: '黃志華',
    title: '人資發展顧問',
    expertise: ['組織發展', '人才培育', '績效管理'],
    bio: '前104人力銀行資深顧問，16年人資經驗，專精組織變革與人才發展，協助企業建立高效團隊。',
    experience: '16年經驗',
    cases: '組織專精',
    background: '104背景',
    avatarClass: 'expert-5',
    imagePath: '/images/experts/expert-5.jpg',
    fullBio: '黃志華先生在人力資源領域有16年豐富經驗，曾任104人力銀行資深顧問。他專精於組織發展與變革管理，協助企業建立完善的人才培育體系，提升組織效能與員工績效。',
    specialties: [
      '組織架構設計與優化',
      '人才招募與選才',
      '績效管理制度建立',
      '員工培訓發展',
      '薪酬福利設計'
    ],
    successCases: [
      {
        company: '快速成長科技公司',
        challenge: '組織混亂，人才流失率高',
        solution: '重新設計組織架構與人才發展體系',
        result: '員工滿意度提升60%，離職率降低50%'
      },
      {
        company: '傳統製造業',
        challenge: '缺乏績效管理制度，員工積極性不高',
        solution: '建立完整績效評估與激勵機制',
        result: '生產效率提升35%，員工績效達成率90%+'
      }
    ],
    education: [
      '中央大學人力資源管理研究所碩士',
      '東吳大學心理學系學士'
    ],
    certifications: [
      'SHRM-CP人力資源管理師',
      'CIPD英國特許人事發展協會認證',
      '勞動法令專業認證'
    ]
  },
  {
    id: 6,
    name: '李淑芬',
    title: '法務合規顧問',
    expertise: ['企業法務', '合規管理', '智財保護'],
    bio: '前聯發科法務長，25年企業法務經驗，專精跨國法規與智慧財產權，為企業建立完善法務體系。',
    experience: '25年經驗',
    cases: '跨國法規',
    background: '聯發科背景',
    avatarClass: 'expert-6',
    imagePath: '/images/experts/expert-6.jpg',
    fullBio: '李淑芬女士擁有25年企業法務經驗，曾任聯發科技法務長，負責集團全球法務事務。她在跨國法規遵循、智慧財產權保護及企業合規管理方面具有深厚專業，協助企業建立完善的法務風險控制體系。',
    specialties: [
      '企業合規制度建立',
      '智慧財產權策略',
      '跨國法律事務',
      '合約談判與審查',
      '法律風險評估'
    ],
    successCases: [
      {
        company: '科技製造公司',
        challenge: '面臨國際專利訴訟風險',
        solution: '建立完整智財保護策略與應訴機制',
        result: '成功和解並建立專利授權合作，節省訴訟成本2億'
      },
      {
        company: '跨國貿易公司',
        challenge: '多國法規遵循複雜，合規成本高',
        solution: '設計統一合規管理系統與流程',
        result: '合規效率提升70%，法務成本降低40%'
      }
    ],
    education: [
      '台灣大學法律學研究所碩士',
      '政治大學法律學系學士'
    ],
    certifications: [
      '律師執業資格',
      '美國紐約州律師資格',
      '智慧財產權代理人'
    ]
  }
];

export default function ExpertsPage() {
  const [selectedExpert, setSelectedExpert] = useState(expertsData[0]);

  // Handle URL parameters to select specific expert
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const expertId = urlParams.get('expert');
    if (expertId) {
      const expert = expertsData.find(exp => exp.id === parseInt(expertId));
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
            <Link href="/#why-procus">為何選擇專注</Link>
            <Link href="/#experts">專家陣容</Link>
            <Link href="/#cases">成功案例</Link>
            <Link href="/#services">服務流程</Link>
            <Link href="/#about">關於我們</Link>
            <Link href="/experts" className="contact-btn">立即諮詢</Link>
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
        <div className="expert-detail-panel">
          <div className="expert-detail-content">
            {/* Expert Header */}
            <div className="expert-header">
              <div className="expert-main-avatar">
                <ExpertAvatar 
                  imagePath={selectedExpert.imagePath}
                  name={selectedExpert.name}
                  avatarClass={selectedExpert.avatarClass}
                  width={150}
                  height={190}
                  className="avatar-image"
                  style={{
                    objectFit: 'cover',
                    borderRadius: '16px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
                  }}
                />
              </div>
              <div className="expert-main-info">
                <h1 className="expert-main-name">{selectedExpert.name}</h1>
                <div className="expert-main-title">{selectedExpert.title}</div>
                <div className="expert-main-expertise">
                  {selectedExpert.expertise.join(' • ')}
                </div>
                <div className="expert-main-highlights">
                  <span className="main-highlight-badge">{selectedExpert.experience}</span>
                  <span className="main-highlight-badge">{selectedExpert.cases}</span>
                  <span className="main-highlight-badge">{selectedExpert.background}</span>
                </div>
              </div>
            </div>

            {/* Expert Bio */}
            <div className="expert-section">
              <h3 className="section-title">專業背景</h3>
              <p className="expert-full-bio">{selectedExpert.fullBio}</p>
            </div>

            {/* Specialties */}
            <div className="expert-section">
              <h3 className="section-title">專業領域</h3>
              <div className="specialties-list">
                {selectedExpert.specialties.map((specialty, index) => (
                  <div key={index} className="specialty-item">
                    <span className="specialty-icon">✓</span>
                    <span className="specialty-text">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Cases */}
            <div className="expert-section">
              <h3 className="section-title">成功案例</h3>
              <div className="success-cases">
                {selectedExpert.successCases.map((case_, index) => (
                  <div key={index} className="success-case">
                    <h4 className="case-company">{case_.company}</h4>
                    <div className="case-details">
                      <div className="case-item">
                        <span className="case-label">挑戰：</span>
                        <span className="case-text">{case_.challenge}</span>
                      </div>
                      <div className="case-item">
                        <span className="case-label">解決方案：</span>
                        <span className="case-text">{case_.solution}</span>
                      </div>
                      <div className="case-item">
                        <span className="case-label">成果：</span>
                        <span className="case-text case-result">{case_.result}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="expert-credentials">
              <div className="credential-section">
                <h3 className="section-title">學歷背景</h3>
                <ul className="credential-list">
                  {selectedExpert.education.map((edu, index) => (
                    <li key={index} className="credential-item">{edu}</li>
                  ))}
                </ul>
              </div>
              <div className="credential-section">
                <h3 className="section-title">專業認證</h3>
                <ul className="credential-list">
                  {selectedExpert.certifications.map((cert, index) => (
                    <li key={index} className="credential-item">{cert}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="expert-cta">
              <Link href="/experts" className="cta-primary">
                預約諮詢 {selectedExpert.name}
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel - All Experts Grid */}
        <div className="experts-grid-panel">
          <div className="experts-grid-content">
            <div className="grid-header">
              <h2 className="grid-title">專家陣容</h2>
              <p className="grid-subtitle">點選專家查看詳細資訊</p>
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
                      imagePath={expert.imagePath}
                      name={expert.name}
                      avatarClass={expert.avatarClass}
                      width={100}
                      height={130}
                      className="avatar-image"
                      style={{
                        objectFit: 'cover',
                        borderRadius: '10px'
                      }}
                    />
                  </div>
                  <div className="expert-grid-info">
                    <div className="expert-grid-title">{expert.title}</div>
                    <div className="expert-grid-expertise">
                      {expert.expertise.join(' • ')}
                    </div>
                    <p className="expert-grid-bio">{expert.bio}</p>
                    <div className="expert-grid-highlights">
                      <span className="grid-highlight-badge">{expert.experience}</span>
                      <span className="grid-highlight-badge">{expert.cases}</span>
                      <span className="grid-highlight-badge">{expert.background}</span>
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