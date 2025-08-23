export interface ExpertData {
  id: string;
  name: string;
  company: string;
  title: string;
  expertise: string;
  bio: string;
  fullBio: string;
  highlights: string[];
  image: string;
  fallbackGradient: string;
  fallbackInitials: string;
  specialties: {
    icon: string;
    title: string;
    description: string;
  }[];
  successCases: {
    company: string;
    industry: string;
    challenge: string;
    solution: string;
    result: string;
  }[];
  credentials: {
    education: string[];
    certifications: string[];
    experience: string[];
  };
}

/**
 * 專家問券：
 * 訪談問題：
 * 0. 專家 Why (願景), How (方法), What (成果)
 * 1. 過去在你的職涯中，你覺得挑戰最多以及成長最多的是哪一段，為什麼？
 * 1-1. 在這三個挑戰中，是用什麼方式或方法來克服的？從中學習到的關鍵是什麼？
 * 2. 在這些挑戰和經歷中，哪些你覺得是非常需要經驗來判斷，而沒辦法單靠理論來解決的？
 * 3. 對於正在此領域中的企業，你覺得他們最需要的是什麼？
 * 基本資料：
 * 中文名
 * 英文名
 * 學經歷
 * 工作經歷
 * 證照
 * 專業領域
 * 成功案例
 * 關鍵字
 * 座右銘
 */

export const expertsData: ExpertData[] = [
  {
    id: "Charlie",
    name: "Charlie (林聖超)",
    company: "專注|PROCUS顧問公司",
    title: "企業轉型與組織升級顧問",
    expertise: "企業轉型、組織升級、制度搭建、風險管控",
    bio: "13年老闆特助資歷，協助百億規模企業轉型升級的實戰顧問，跨10大產業經驗",
    fullBio: "Charlie（林聖超）是一位專注於企業轉型與組織升級的企管顧問，曾協助的企業總規模超過百億元，涵蓋房仲業、教育業、食品業、美業、能源業、流行服飾業、餐飲業、科技業、工程業、室內裝潢等10大產業。擁有13年老闆特助資歷，融合三項市場稀有特質：戰略×實戰並行、顧問×特助雙視角、成長×風險共存歷練。不只提供建議，更擅長下場解決問題、搭建制度與團隊。曾協助創辦人募資破億元，促成多項被認為不可能的任務，包括邀請米其林主廚無償代言、讓中國食用油品牌打入台灣有機通路等。經歷過快速成長、跨國拓展，也曾陪伴公司度過倒閉邊緣，這些真實經驗讓他能協助企業避開盲區、打破瓶頸。",
    highlights: ["企業轉型", "組織升級", "實戰執行", "風險管控"],
    image: "/images/experts/Charlie.png",
    fallbackGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fallbackInitials: "C",
    specialties: [
      {
        icon: "🎯",
        title: "戰略×實戰並行",
        description: "從高層策略設計到實地執行落地，把紙上規劃真正轉化為成效"
      },
      {
        icon: "👔",
        title: "顧問×特助雙視角",
        description: "13年老闆特助資歷，了解決策者思維與盲點，懂得如何幫老闆想一步"
      },
      {
        icon: "⚡",
        title: "成長×風險共存歷練",
        description: "經歷快速成長與危機處理，能協助企業避開看不到的坑"
      },
      {
        icon: "🔧",
        title: "跨產業整合能力",
        description: "涵蓋10大產業經驗，具備跨領域整合與系統性思維"
      }
    ],
    successCases: [
      {
        company: "創業公司募資專案",
        industry: "創業投資",
        challenge: "新創企業需要大額資金支持發展，但缺乏完整商業規劃",
        solution: "協助完善商業模式、財務規劃與投資人簡報策略",
        result: "成功協助創辦人募資破億元資金，順利進入快速發展期"
      },
      {
        company: "米其林主廚代言專案",
        industry: "餐飲業",
        challenge: "品牌知名度不足，需要頂級代言人但預算有限",
        solution: "運用談判技巧與策略包裝，創造雙贏合作模式",
        result: "成功邀請米其林主廚無償代言商品一年，大幅提升品牌價值"
      },
      {
        company: "中國食用油品牌",
        industry: "食品業",
        challenge: "中國品牌要打入台灣有機通路，面臨文化與市場進入障礙",
        solution: "建立在地化策略與通路合作模式，重新包裝品牌定位",
        result: "成功讓中國食用油品牌打入台灣有機通路，建立穩定銷售渠道"
      }
    ],
    credentials: {
      education: ["台灣大學農經所碩士"],
      certifications: ["企業轉型顧問認證", "風險管理專業認證", "跨國企業管理認證"],
      experience: [
        "專注|PROCUS顧問公司 企業轉型顧問",
        "多家小型企業 內部顧問與策略執行者",
        "13年老闆/總經理特助經驗",
        "跨10大產業顧問經驗（房仲、教育、食品、美業、能源、服飾、餐飲、科技、工程、裝潢）",
        "百億規模企業轉型專案負責人",
        "海外市場拓展與風險管控專家"
      ]
    }
  },
  {
    id: "Mikhor",
    name: "Mikhor (許嘉姿)",
    company: "專注|PROCUS顧問公司",
    title: "企業溝通與個人品牌顧問",
    expertise: "企業溝通、組織變革、個人品牌、情感療癒",
    bio: "馬來西亞華僑，高感知顧問，擅長快速洞察與陪伴式成長，跨領域整合藝術、心理學與商業",
    fullBio: "Mikhor (許嘉姿)來自馬來西亞太平，今年28歲，是一位高感知×真實收斂×實際協作的顧問與陪伴者。承繼家族公益精神，從小相信企業應該為世界做出貢獻。擅長在一小時內看懂對方內心世界，協助釐清盲點，讓人重新有力量出發。擁有多元才能背景，從藝術創作、內容創作到Google Cloud業務，再轉型成為專業顧問。目前為商業顧問與愛情陪跑者，長期陪跑近20家客戶，跨足零售、製造、建築、設計、電商等領域。相信「你不舉手，永遠不會被看見」，用語言改變人、用陪伴喚醒人、用真誠撐起人。",
    highlights: ["快速洞察", "陪伴式顧問", "跨領域整合", "情感療癒"],
    image: "/images/experts/Mikhor.png",
    fallbackGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    fallbackInitials: "M",
    specialties: [
      {
        icon: "👁️",
        title: "快速洞察能力",
        description: "一小時內看懂對方內心世界，協助釐清盲點，讓人重新有力量出發"
      },
      {
        icon: "🤝",
        title: "陪伴式顧問",
        description: "不只是解決問題，更創造安全、可被探索的空間，陪你想、陪你做、陪你成功"
      },
      {
        icon: "🎨",
        title: "跨領域整合",
        description: "藝術+心理學+商業的完美結合，多元才能背景帶來獨特視角與解決方案"
      },
      {
        icon: "💖",
        title: "情感療癒專家",
        description: "用心理學療癒愛情創傷，陪伴情感創傷者、高敏感族群找回真正快樂的自己"
      }
    ],
    successCases: [
      {
        company: "房仲女主管溝通突破",
        industry: "房地產業",
        challenge: "原本與團隊溝通困難，無法有效領導團隊，士氣低落",
        solution: "透過釐清概念與模擬共識對話，協助建立有效的溝通模式",
        result: "從不會溝通到能感動團隊，客戶感動地稱呼她為「天使」"
      },
      {
        company: "傳產二代接班人",
        industry: "傳統製造業",
        challenge: "習慣迎合父親、逃避衝突，無法建立自己的管理風格",
        solution: "協助學會如何不迎合父親、不逃避衝突，建立自信的領導方式",
        result: "學會說出關心、不再壓抑，逐步建立自己的管理風格"
      },
      {
        company: "馬來西亞市場開發",
        industry: "跨國顧問",
        challenge: "需要在這生市場快速建立業務，但缺乏在地經驗與資源",
        solution: "運用在地優勢進行市場調研，並建立線上業務模式",
        result: "3個月內完成市場調研，2小時線上會議成交50萬訂單，直播轉化率達23%"
      }
    ],
    credentials: {
      education: ["淡江大學 運輸管理學系"],
      certifications: ["NLP專業執行師", "國際催眠師", "生涯教練", "國際企業管理師", "Google Cloud Digital Leader"],
      experience: [
        "專注|PROCUS顧問公司 企業溝通顧問",
        "商明國際 從助理轉型成顧問",
        "Google Cloud 代理商 Inside Sales",
        "董事長特助（面試內錄取）",
        "個人品牌IP創業者（愛情陪跑計畫）",
        "多元背景：主播、攝影師、剪輯師、YouTuber",
        "長期陪跑近20家客戶（零售、製造、建築、設計、電商）"
      ]
    }
  },
  {
    id: "Aaron",
    name: "Aaron (梁家為)",
    company: "專注|PROCUS顧問公司",
    title: "系統設計專家 | 跨領域創新顧問",
    expertise: "系統設計、跨領域整合、組織重構、產品創新",
    bio: "電機工程博士，從學術研究到創業實踐的系統設計專家，擅長將複雜技術轉化為實用系統",
    fullBio: "從電機工程博士到創業實踐者，Aaron擅長將複雜技術轉化為實用系統。他不僅具備深厚的技術底蘊，更擁有跨領域整合與團隊領導的實戰經驗。相信「理解比記憶重要，邏輯比資料長久」，善於用第一性原理解決複雜問題。現為專注|Procus的專家經理人，致力於協助專業者打造個人品牌，讓有能力但尚未被看見的人用自己的方式發光。",
    highlights: ["系統設計", "跨領域整合", "組織重構", "產品創新"],
    image: "/images/experts/Aaron.png",
    fallbackGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    fallbackInitials: "A",
    specialties: [
      {
        icon: "🔧",
        title: "系統設計與架構",
        description: "複雜系統的底層邏輯分析與重構，從0到1產品架構設計與實施"
      },
      {
        icon: "🤖",
        title: "跨領域技術整合",
        description: "AI演算法在產業應用的落地實踐，區塊鏈技術與金融系統整合"
      },
      {
        icon: "👥",
        title: "組織領導與重構",
        description: "團隊組織重組與人才發掘，跨部門協作機制建立"
      },
      {
        icon: "💡",
        title: "產品創新與設計",
        description: "複雜邏輯的使用者友善化設計，從概念到市場的完整產品開發"
      }
    ],
    successCases: [
      {
        company: "TermMax 借貸平台",
        industry: "金融科技",
        challenge: "將複雜的DeFi金融邏輯轉化為一般用戶可理解的系統",
        solution: "重新設計產品架構與使用者流程，建立跨部門協作機制",
        result: "成功打造安全易用的固定利率借貸平台，獲得市場認可"
      },
      {
        company: "半導體設計自動化研究",
        industry: "半導體",
        challenge: "傳統IC設計流程依賴人工經驗，效率有限",
        solution: "運用AI演算法優化設計流程，自動化驗證程序",
        result: "顯著提升設計效率與精度，獲得最佳博士論文獎"
      }
    ],
    credentials: {
      education: ["國立交通大學 電機工程博士（最佳博士論文獎）", "國立交通大學 電機工程學士"],
      certifications: ["半導體設計自動化專業", "區塊鏈技術與智能合約開發", "AI演算法與機器學習應用"],
      experience: [
        "專注|PROCUS顧問公司 系統設計專家",
        "TermMax 產品設計師 & 專案經理",
        "多項產學合作計畫 核心成員",
        "國際頂尖研討會 共同作者"
      ]
    }
  }
];

// 根據ID獲取專家資料
export const getExpertById = (id: string): ExpertData | undefined => {
  return expertsData.find(expert => expert.id === id);
};

// 獲取所有專家的基本資訊（用於列表顯示）
export const getAllExpertsBasicInfo = () => {
  return expertsData.map(expert => ({
    id: expert.id,
    name: expert.name,
    title: expert.title,
    expertise: expert.expertise,
    bio: expert.bio,
    highlights: expert.highlights,
    image: expert.image,
    fallbackGradient: expert.fallbackGradient,
    fallbackInitials: expert.fallbackInitials
  }));
};

// 獲取專家的成功案例摘要
export const getExpertSuccessSummary = (id: string) => {
  const expert = getExpertById(id);
  if (!expert) return null;

  return {
    name: expert.name,
    totalCases: expert.successCases.length,
    industries: [...new Set(expert.successCases.map(c => c.industry))],
    highlights: expert.highlights
  };
}; 