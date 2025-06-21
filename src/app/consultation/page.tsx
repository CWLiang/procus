'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface FormData {
  ownerName: string;
  companyName: string;
  jobTitle: string;
  companySize: string;
  capitalAmount: string;
  businessDescription: string;
  currentStatus: string;
  challenges: string;
  contactPhone: string;
  contactEmail: string;
  preferredTime: string;
  urgency: string;
  budget: string;
  expectedOutcome: string;
}

export default function ConsultationPage() {
  const [formData, setFormData] = useState<FormData>({
    ownerName: '',
    companyName: '',
    jobTitle: '',
    companySize: '',
    capitalAmount: '',
    businessDescription: '',
    currentStatus: '',
    challenges: '',
    contactPhone: '',
    contactEmail: '',
    preferredTime: '',
    urgency: '',
    budget: '',
    expectedOutcome: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.querySelector('.mobile-menu-toggle')?.addEventListener('click', handleMobileMenuClick);
    
    // Add mobile menu link click handlers
    const mobileMenuLinks = document.querySelectorAll('.nav-menu a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', handleMobileMenuLinkClick);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelector('.mobile-menu-toggle')?.removeEventListener('click', handleMobileMenuClick);
      
      const mobileMenuLinks = document.querySelectorAll('.nav-menu a');
      mobileMenuLinks.forEach(link => {
        link.removeEventListener('click', handleMobileMenuLinkClick);
      });
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 模擬API調用
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 這裡可以添加實際的API調用
      console.log('Form submitted:', formData);
      
      setSubmitSuccess(true);
      
      // 重置表單
      setFormData({
        ownerName: '',
        companyName: '',
        jobTitle: '',
        companySize: '',
        capitalAmount: '',
        businessDescription: '',
        currentStatus: '',
        challenges: '',
        contactPhone: '',
        contactEmail: '',
        preferredTime: '',
        urgency: '',
        budget: '',
        expectedOutcome: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      alert('提交失敗，請稍後再試');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <>
        {/* Navigation */}
        <nav id="navbar">
          <div className="nav-container">
            <Link href="/" className="logo">
              <div className="logo-mark"></div>
              專注 | PROCUS
            </Link>
            <div className="nav-menu">
              <Link href="/#why-procus">為何選擇專注</Link>
              <Link href="/#experts">專家陣容</Link>
              <Link href="/#cases">成功案例</Link>
              <Link href="/#services">服務流程</Link>
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

        {/* Success Page */}
        <div className="consultation-success">
          <div className="success-content">
            <div className="success-icon">✅</div>
            <h1>諮詢申請已成功提交！</h1>
            <p>感謝您選擇專注 PROCUS</p>
            
            <div className="success-details">
              <h3>接下來會發生什麼？</h3>
              <div className="success-steps">
                <div className="success-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>24小時內聯繫</h4>
                    <p>我們的專業顧問將在24小時內主動聯繫您</p>
                  </div>
                </div>
                <div className="success-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>深度需求分析</h4>
                    <p>透過電話或視訊進行30分鐘免費諮詢</p>
                  </div>
                </div>
                <div className="success-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>專家精準媒合</h4>
                    <p>根據您的需求推薦3位最適合的專業顧問</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="success-actions">
              <Link href="/" className="cta-primary">
                返回首頁
              </Link>
              <Link href="/experts" className="cta-secondary">
                瀏覽專家陣容
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Navigation */}
      <nav id="navbar">
        <div className="nav-container">
          <Link href="/" className="logo">
            <div className="logo-mark"></div>
            專注 | PROCUS
          </Link>
          <div className="nav-menu">
            <Link href="/#why-procus">為何選擇專注</Link>
            <Link href="/#experts">專家陣容</Link>
            <Link href="/#cases">成功案例</Link>
            <Link href="/#services">服務流程</Link>
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

      {/* Consultation Form */}
      <div className="consultation-page">
        <div className="consultation-container">
          {/* Header */}
          <div className="consultation-header">
            <h1>免費企業諮詢申請</h1>
            <p>請填寫以下資訊，我們將為您匹配最適合的專業顧問</p>
            <div className="consultation-benefits">
              <div className="benefit-item">
                <span className="benefit-icon">🎯</span>
                <span>精準媒合專家</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">💡</span>
                <span>30分鐘免費諮詢</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🚀</span>
                <span>24小時內回覆</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="consultation-form" onSubmit={handleSubmit}>
            {/* 基本資訊 */}
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">👤</span>
                基本資訊
              </h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="ownerName">企業主姓名 *</label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    required
                    placeholder="請輸入您的姓名"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="jobTitle">職稱/抬頭 *</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    placeholder="例：執行長、總經理、創辦人"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contactPhone">聯絡電話 *</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required
                    placeholder="例：0912-345-678"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactEmail">電子信箱 *</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                    placeholder="example@company.com"
                  />
                </div>
              </div>
            </div>

            {/* 公司資訊 */}
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">🏢</span>
                公司資訊
              </h3>
              
              <div className="form-group">
                <label htmlFor="companyName">公司名稱 *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  placeholder="請輸入公司全名"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companySize">公司人數 *</label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">請選擇</option>
                    <option value="1-10">1-10人</option>
                    <option value="11-50">11-50人</option>
                    <option value="51-100">51-100人</option>
                    <option value="101-500">101-500人</option>
                    <option value="500+">500人以上</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="capitalAmount">公司資本額</label>
                  <select
                    id="capitalAmount"
                    name="capitalAmount"
                    value={formData.capitalAmount}
                    onChange={handleInputChange}
                  >
                    <option value="">請選擇（可不填）</option>
                    <option value="under-1m">100萬以下</option>
                    <option value="1m-5m">100萬-500萬</option>
                    <option value="5m-10m">500萬-1000萬</option>
                    <option value="10m-50m">1000萬-5000萬</option>
                    <option value="50m+">5000萬以上</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="businessDescription">公司服務簡述 *</label>
                <textarea
                  id="businessDescription"
                  name="businessDescription"
                  value={formData.businessDescription}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  placeholder="請簡述您的公司主要業務、產品或服務內容"
                />
              </div>
            </div>

            {/* 營運現況與需求 */}
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">📊</span>
                營運現況與需求
              </h3>
              
              <div className="form-group">
                <label htmlFor="currentStatus">公司營運現況 *</label>
                <textarea
                  id="currentStatus"
                  name="currentStatus"
                  value={formData.currentStatus}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  placeholder="請描述目前公司的營運狀況，例：營收規模、市場地位、團隊狀況等"
                />
              </div>

              <div className="form-group">
                <label htmlFor="challenges">目前所遇到的困難 *</label>
                <textarea
                  id="challenges"
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="請詳細描述目前面臨的挑戰，例：營收成長停滯、管理制度不完善、數位轉型困難、人才招募問題等"
                />
              </div>

              <div className="form-group">
                <label htmlFor="expectedOutcome">期望達成的目標</label>
                <textarea
                  id="expectedOutcome"
                  name="expectedOutcome"
                  value={formData.expectedOutcome}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="請說明您希望透過顧問服務達成的具體目標"
                />
              </div>
            </div>

            {/* 諮詢偏好 */}
            <div className="form-section">
              <h3 className="section-title">
                <span className="section-icon">⚙️</span>
                諮詢偏好
              </h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="preferredTime">希望聯繫時間</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                  >
                    <option value="">請選擇</option>
                    <option value="morning">上午 (9:00-12:00)</option>
                    <option value="afternoon">下午 (13:00-17:00)</option>
                    <option value="evening">晚上 (18:00-21:00)</option>
                    <option value="anytime">任何時間皆可</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="urgency">需求急迫性</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                  >
                    <option value="">請選擇</option>
                    <option value="urgent">非常急迫（1週內）</option>
                    <option value="soon">儘快處理（1個月內）</option>
                    <option value="normal">正常規劃（3個月內）</option>
                    <option value="flexible">時間彈性</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">預期投資預算範圍</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                >
                  <option value="">請選擇（可不填）</option>
                  <option value="under-50k">5萬以下</option>
                  <option value="50k-100k">5萬-10萬</option>
                  <option value="100k-300k">10萬-30萬</option>
                  <option value="300k-500k">30萬-50萬</option>
                  <option value="500k+">50萬以上</option>
                </select>
              </div>
            </div>

            {/* 提交按鈕 */}
            <div className="form-submit">
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    提交中...
                  </>
                ) : (
                  <>
                    立即提交諮詢申請
                    <span>→</span>
                  </>
                )}
              </button>
              
              <p className="form-notice">
                * 為必填欄位。提交後我們將在24小時內聯繫您安排免費諮詢。
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
} 