'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';



export default function ConsultationPage() {
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [quickFormData, setQuickFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: ''
  });
  const [quickFormSubmitted, setQuickFormSubmitted] = useState(false);
  const [validationError, setValidationError] = useState('');

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

    // Handle ESC key to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showQuickForm) {
        setShowQuickForm(false);
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

    // Handle input changes to clear validation error
    const handleInputChange = () => {
      if (validationError) {
        setValidationError('');
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);
    document.querySelector('.mobile-menu-toggle')?.addEventListener('click', handleMobileMenuClick);
    
    // Add change listeners to all form inputs
    const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputs.forEach(input => {
      input.addEventListener('change', handleInputChange);
    });
    
    // Add mobile menu link click handlers
    const mobileMenuLinks = document.querySelectorAll('.nav-menu a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', handleMobileMenuLinkClick);
    });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.querySelector('.mobile-menu-toggle')?.removeEventListener('click', handleMobileMenuClick);
      
      // Remove input change listeners
      const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
      inputs.forEach(input => {
        input.removeEventListener('change', handleInputChange);
      });
      
      const mobileMenuLinks = document.querySelectorAll('.nav-menu a');
      mobileMenuLinks.forEach(link => {
        link.removeEventListener('click', handleMobileMenuLinkClick);
      });
    };
  }, [showQuickForm, validationError]);

  const handleQuickFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuickFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuickFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 模擬提交快速表單
    try {
      console.log('Quick form submitted:', quickFormData);
      setQuickFormSubmitted(true);
      setShowQuickForm(false); // 關閉彈窗
      
    } catch (error) {
      console.error('Quick form submission error:', error);
      alert('提交失敗，請稍後再試');
    }
  };

  const handleGetReport = () => {
    // 清除之前的錯誤訊息
    setValidationError('');
    
    // 檢查所有16個問題是否都已回答
    const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const unansweredQuestions = [];
    
    for (const qNum of questions) {
      if ([3, 6, 10].includes(qNum)) {
        // 多選題：檢查是否至少選了一個選項
        const checkboxes = document.querySelectorAll(`input[name="q${qNum}"]:checked`);
        if (checkboxes.length === 0) {
          unansweredQuestions.push(qNum);
        }
      } else {
        // 單選題：檢查是否選了選項
        const radioButtons = document.querySelectorAll(`input[name="q${qNum}"]:checked`);
        if (radioButtons.length === 0) {
          unansweredQuestions.push(qNum);
        }
      }
    }
    
    if (unansweredQuestions.length > 0) {
      // 有未回答的問題
      const firstUnanswered = unansweredQuestions[0];
      
      // 滾動到第一個未回答的問題
      const questionElement = document.querySelector(`.question-item .question-number:nth-of-type(1)`);
      const targetQuestion = Array.from(document.querySelectorAll('.question-number')).find(
        el => el.textContent?.trim() === firstUnanswered.toString()
      );
      
      if (targetQuestion) {
        const questionItem = targetQuestion.closest('.question-item') as HTMLElement;
        if (questionItem) {
          questionItem.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          
          // 添加高亮效果
          questionItem.style.backgroundColor = '#fef3c7';
          questionItem.style.border = '2px solid #f59e0b';
          
          // 3秒後移除高亮效果
          setTimeout(() => {
            questionItem.style.backgroundColor = '';
            questionItem.style.border = '';
          }, 3000);
        }
      }
      
      // 顯示錯誤訊息
      setValidationError(`請完成第 ${unansweredQuestions.join(', ')} 題後再取得健診報告`);
      
      return;
    }
    
    // 所有問題都已回答，顯示快速表單
    setShowQuickForm(true);
  };

  const handleCloseQuickForm = () => {
    setShowQuickForm(false);
  };
    

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

          {/* Business Health Check */}
          <div className="business-assessment">
            <div className="assessment-header">
              <h2>企業健診自評表</h2>
              <p>透過以下問題快速了解您的企業目前處於哪個發展階段，以及需要重點關注的領域</p>
            </div>

            <div className="assessment-stages">
              {/* Stage 1 */}
              <div className="stage-section">
                <div className="stage-header">
                  <div className="stage-number">01</div>
                  <div className="stage-info">
                    <h3>定位與驗證 (0-1)</h3>
                    <p>你是誰？你的戰場在哪？</p>
                    <span className="stage-desc">這個階段的核心是確保「方向」正確，避免在錯誤的道路上狂奔。</span>
                  </div>
                </div>
                <div className="stage-questions">
                  <div className="question-item">
                    <span className="question-number">1</span>
                    <div className="question-content">
                      <p>你是否能用一句話說清楚「你是誰，為誰解決什麼問題」？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q1" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q1" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">2</span>
                    <div className="question-content">
                      <p>你是否清楚相較於競爭對手，客戶選擇你的「獨特理由」？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q2" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q2" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">3</span>
                    <div className="question-content">
                      <p>你的獲利模式包含哪些？（可複選）</p>
                      <div className="question-options">
                        <label className="option-item">
                          <input type="checkbox" name="q3" value="product-sales" />
                          <span>產品銷售</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q3" value="service-fee" />
                          <span>服務收費</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q3" value="subscription" />
                          <span>訂閱制</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q3" value="licensing" />
                          <span>授權金</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q3" value="advertising" />
                          <span>廣告收益</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q3" value="commission" />
                          <span>佣金抽成</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q3" value="franchise" />
                          <span>加盟費用</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q3" value="others" />
                          <span>其他</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">4</span>
                    <div className="question-content">
                      <p>你是否已經有第一批付費客戶，並獲得正面回饋？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q4" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q4" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="stage-section">
                <div className="stage-header">
                  <div className="stage-number">02</div>
                  <div className="stage-info">
                    <h3>引擎搭建 (1-10)</h3>
                    <p>如何讓對的人找到你？</p>
                    <span className="stage-desc">方向對了，就要開始打造一部能持續帶來潛在客戶的「獲客引擎」。</span>
                  </div>
                </div>
                <div className="stage-questions">
                  <div className="question-item">
                    <span className="question-number">5</span>
                    <div className="question-content">
                      <p>你是否有一套讓客戶無法抗拒的核心產品/服務提案？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q5" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q5" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">6</span>
                    <div className="question-content">
                      <p>你的客戶來源管道包含哪些？（可複選）</p>
                      <div className="question-options">
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="word-of-mouth" />
                          <span>口碑推薦</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="social-media" />
                          <span>社群媒體</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="google-ads" />
                          <span>Google廣告</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="facebook-ads" />
                          <span>Facebook廣告</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="seo" />
                          <span>官方網站SEO</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="offline-events" />
                          <span>線下活動</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="business-development" />
                          <span>業務開發</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="partnerships" />
                          <span>合作夥伴</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="traditional-media" />
                          <span>傳統媒體</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="ecommerce" />
                          <span>電商平台</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="content-marketing" />
                          <span>內容行銷</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q6" value="others" />
                          <span>其他</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">7</span>
                    <div className="question-content">
                      <p>你是否有定期產出對目標客戶有價值的內容？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q7" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q7" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">8</span>
                    <div className="question-content">
                      <p>你是否有效收集潛在客戶名單 (Leads)？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q8" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q8" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="stage-section">
                <div className="stage-header">
                  <div className="stage-number">03</div>
                  <div className="stage-info">
                    <h3>加速與優化 (10-50)</h3>
                    <p>如何高效成交並規模化交付？</p>
                    <span className="stage-desc">有了穩定的客源，接下來要提升轉換效率，並確保營運能跟上。</span>
                  </div>
                </div>
                <div className="stage-questions">
                  <div className="question-item">
                    <span className="question-number">9</span>
                    <div className="question-content">
                      <p>你是否有標準化的銷售流程 (Sales Process)？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q9" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q9" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">10</span>
                    <div className="question-content">
                      <p>客戶從認識到付費過程中，主要卡關點有哪些？（可複選）</p>
                      <div className="question-options">
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="price-too-high" />
                          <span>價格過高</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="lack-of-trust" />
                          <span>信任度不足</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="unclear-product" />
                          <span>產品說明不清</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="strong-competitors" />
                          <span>競爭對手更強</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="long-decision-process" />
                          <span>決策流程太長</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="not-urgent-need" />
                          <span>需求不夠急迫</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="payment-limitations" />
                          <span>付款方式限制</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="lack-case-studies" />
                          <span>缺乏成功案例</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="insufficient-communication" />
                          <span>溝通不夠頻繁</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="service-mismatch" />
                          <span>服務範圍不符</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="wrong-timing" />
                          <span>時機不對</span>
                        </label>
                        <label className="option-item">
                          <input type="checkbox" name="q10" value="others" />
                          <span>其他</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">11</span>
                    <div className="question-content">
                      <p>產品交付或服務流程是否已標準化 (SOP)？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q11" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q11" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">12</span>
                    <div className="question-content">
                      <p>你是否花太多時間在重複性的行政工作上？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q12" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q12" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 4 */}
              <div className="stage-section">
                <div className="stage-header">
                  <div className="stage-number">04</div>
                  <div className="stage-info">
                    <h3>規模與壁壘 (50-100)</h3>
                    <p>如何打造可持續的護城河？</p>
                    <span className="stage-desc">當企業進入高速成長期，人才、財務與風險控管成為建立長期競爭優勢的關鍵。</span>
                  </div>
                </div>
                <div className="stage-questions">
                  <div className="question-item">
                    <span className="question-number">13</span>
                    <div className="question-content">
                      <p>你是否清楚下一個需要招聘的關鍵職位是什麼？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q13" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q13" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">14</span>
                    <div className="question-content">
                      <p>如果你休假一個月，公司能否正常運作？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q14" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q14" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">15</span>
                    <div className="question-content">
                      <p>你是否能看懂公司的財務三表（損益表、資產負債表、現金流量表）？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q15" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q15" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="question-item">
                    <span className="question-number">16</span>
                    <div className="question-content">
                      <p>公司是否有基本的法律文件（如：股東協議、客戶合約、隱私權政策）？</p>
                      <div className="yes-no-options">
                        <label className="option-item">
                          <input type="radio" name="q16" value="yes" />
                          <span>是</span>
                        </label>
                        <label className="option-item">
                          <input type="radio" name="q16" value="no" />
                          <span>否</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="assessment-footer">
              <div className="assessment-cta">
                <p>想要針對這些問題獲得專業建議嗎？</p>
                <button 
                  type="button" 
                  className="scroll-to-form-btn"
                  onClick={handleGetReport}
                >
                  取得免費健診報告
                </button>
                {validationError && (
                  <div className="validation-error">
                    <span className="error-icon">⚠️</span>
                    <span>{validationError}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Contact Form Modal */}
          {showQuickForm && !quickFormSubmitted && (
            <div className="modal-overlay" onClick={handleCloseQuickForm}>
              <div className="quick-contact-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={handleCloseQuickForm}>
                  ×
                </button>
                
                <div className="quick-form-header">
                  <h3>快速取得您的健診報告</h3>
                  <p>請先提供基本資訊，我們將為您準備個人化的企業健診報告</p>
                </div>
                
                <form onSubmit={handleQuickFormSubmit} className="quick-form">
                  <div className="quick-form-row">
                    <div className="quick-form-group">
                      <label htmlFor="quickName">姓名 *</label>
                      <input
                        type="text"
                        id="quickName"
                        name="name"
                        value={quickFormData.name}
                        onChange={handleQuickFormChange}
                        required
                        placeholder="請輸入您的姓名"
                      />
                    </div>
                    
                    <div className="quick-form-group">
                      <label htmlFor="quickJobTitle">職稱 *</label>
                      <input
                        type="text"
                        id="quickJobTitle"
                        name="jobTitle"
                        value={quickFormData.jobTitle}
                        onChange={handleQuickFormChange}
                        required
                        placeholder="例：執行長、總經理"
                      />
                    </div>
                  </div>

                  <div className="quick-form-row">
                    <div className="quick-form-group">
                      <label htmlFor="quickCompany">公司名稱 *</label>
                      <input
                        type="text"
                        id="quickCompany"
                        name="company"
                        value={quickFormData.company}
                        onChange={handleQuickFormChange}
                        required
                        placeholder="請輸入公司名稱"
                      />
                    </div>
                    
                    <div className="quick-form-group">
                      <label htmlFor="quickEmail">電子信箱 *</label>
                      <input
                        type="email"
                        id="quickEmail"
                        name="email"
                        value={quickFormData.email}
                        onChange={handleQuickFormChange}
                        required
                        placeholder="example@company.com"
                      />
                    </div>
                  </div>

                  <div className="quick-form-submit">
                    <button type="submit" className="quick-submit-btn">
                      立即取得健診報告
                      <span>→</span>
                    </button>
                    <p className="quick-form-note">
                      * 為必填欄位。我們將在5分鐘內將您的健診報告發送至您的信箱
                    </p>
                  </div>
                </form>
              </div>
            </div>
          )}



          {/* Success Message */}
          {quickFormSubmitted && (
            <div className="final-success-message">
              <div className="success-content">
                <div className="success-icon">✅</div>
                <h2>健診報告準備完成！</h2>
                <p>感謝 <strong>{quickFormData.name}</strong>！您的企業健診報告將在5分鐘內發送至</p>
                <p className="email-highlight">{quickFormData.email}</p>
                
                <div className="next-steps">
                  <h3>接下來會發生什麼？</h3>
                  <div className="steps-grid">
                    <div className="step-card">
                      <span className="step-icon">📧</span>
                      <h4>健診報告</h4>
                      <p>個人化企業健診報告發送至您的信箱</p>
                    </div>
                    <div className="step-card">
                      <span className="step-icon">📞</span>
                      <h4>專業諮詢</h4>
                      <p>如有需要將主動聯繫安排免費諮詢</p>
                    </div>
                    <div className="step-card">
                      <span className="step-icon">🚀</span>
                      <h4>解決方案</h4>
                      <p>提供客製化的顧問服務方案</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info">
                  <p>如有任何問題，歡迎隨時聯繫我們</p>
                  <div className="contact-details">
                    <span>📞 0800-123-456</span>
                    <span>📧 contact@procus.tw</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 