'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { expertsData, getExpertById, ExpertData } from '@/data/experts';
import ExpertAvatar from '@/components/ExpertAvatar';

export default function ExpertsPage() {
  const [selectedExpert, setSelectedExpert] = useState<ExpertData>(expertsData[0]);

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
        <div className="expert-detail-panel">
          <div className="expert-detail-content">
            {/* Expert Header */}
            <div className="expert-header">
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
                    <span className="specialty-icon">{specialty.icon}</span>
                    <div className="specialty-text">
                      <h4>{specialty.title}</h4>
                      <p>{specialty.description}</p>
                    </div>
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
                    <div className="case-company">{case_.company}</div>
                    <div className="case-details">
                      <div className="case-item">
                        <span className="case-label">產業：</span>
                        <span className="case-text">{case_.industry}</span>
                      </div>
                      <div className="case-item">
                        <span className="case-label">挑戰：</span>
                        <span className="case-text">{case_.challenge}</span>
                      </div>
                      <div className="case-item">
                        <span className="case-label">解決方案：</span>
                        <span className="case-text">{case_.solution}</span>
                      </div>
                      <div className="case-result">
                        <span className="case-label">成果：</span>
                        <span className="case-text">{case_.result}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="expert-section">
              <h3 className="section-title">學歷與認證</h3>
              <div className="expert-credentials">
                <div className="credential-section">
                  <h4>學歷</h4>
                  <ul className="credential-list">
                    {selectedExpert.credentials.education.map((edu, index) => (
                      <li key={index} className="credential-item">{edu}</li>
                    ))}
                  </ul>
                </div>
                <div className="credential-section">
                  <h4>專業認證</h4>
                  <ul className="credential-list">
                    {selectedExpert.credentials.certifications.map((cert, index) => (
                      <li key={index} className="credential-item">{cert}</li>
                    ))}
                  </ul>
                </div>
                <div className="credential-section">
                  <h4>工作經歷</h4>
                  <ul className="credential-list">
                    {selectedExpert.credentials.experience.map((exp, index) => (
                      <li key={index} className="credential-item">{exp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="expert-cta">
              <Link href="/consultation" className="cta-primary">
                立即預約諮詢
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