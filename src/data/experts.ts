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
    title: "企業轉型顧問 | 商業策略專家 | Procus創辦人&CEO",
    expertise: "企業轉型、商業策略、市場開發、客戶服務、專案管理",
    bio: "Procus創辦人&CEO，擁有卓越的多工能力和高效專案管理經驗，成功開發105家企業客戶",
    fullBio: "Mikhor（許嘉姿）是一位企業家與策略制定者，不僅擔任顧問，更以創辦人、股東的身份深入產業，進行高層次的策略佈局與合作談判。作為Procus創辦人&CEO，同時是馬來西亞五金建材股東和FansTag AI台灣獨家代理。擁有NLP專業執行師、國際催眠師、生涯教練、國際企業管理師、Google Cloud數位領導認證等多項專業認證。展現卓越的專案管理與多工能力，從高中時期的多重身份（羽球校隊、標槍校隊、合唱團團長）到大學時期的跨界發展（台北董事長特助、花蓮戶外攝影剪輯師），再到職涯加速期同時執行五項專案（婚友社愛情教練、Airbnb自動化房東、美業&服飾業策略顧問、馬來西亞市場開發負責人）。始終將客戶成功置於首位，透過高感知洞察、真實問題收斂、高效實際協作的三步驟方法論，協助企業實現轉型升級。",
    highlights: ["企業轉型", "商業策略", "市場開發", "專案管理"],
    image: "/images/experts/Mikhor.png",
    fallbackGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    fallbackInitials: "M",
    specialties: [
      {
        icon: "🎯",
        title: "高感知洞察",
        description: "深入分析商業模式與團隊動態，快速釐清核心問題與潛在機會點"
      },
      {
        icon: "🔄",
        title: "真實問題收斂",
        description: "透過結構化提問與數據分析，將複雜的挑戰收斂為清晰、可執行的目標"
      },
      {
        icon: "⚡",
        title: "高效實際協作",
        description: "與客戶團隊緊密合作，共同制定並落地解決方案，確保策略有效執行並達成預期成果"
      },
      {
        icon: "📈",
        title: "卓越專案管理",
        description: "展現巅峰多工能力，能同時執行多項專案並保持高效率和高品質的交付"
      }
    ],
    successCases: [
      {
        company: "商業顧問與市場開發",
        industry: "商業顧問",
        challenge: "為商業顧問公司從零開拓馬來西亞市場，並為超過20位企業主解決商業流程與組織管理問題",
        solution: "運用高感知洞察能力進行市場分析，建立線上業務模式，並提供個人化的企業顧問服務",
        result: "2小時對談成交50萬訂單，海外市場專案達成23%成交率，輔導客戶3個月內成功聘請6位職員"
      },
      {
        company: "中小企業營運升級",
        industry: "美業及服飾業",
        challenge: "擔任美業及服飾業顧問，企業面臨營收停滞、效率低下、品牌影響力不足等問題",
        solution: "透過策略導入與流程優化，重新設計營運模式，並主導數位行銷內容創作",
        result: "2個月內提升美業營收30%，提升服飾業銷售額25%、效率提升20%，主導IG影片達4,600+次觀看"
      },
      {
        company: "大型企業內部銷售與流程建立",
        industry: "科技業 Google Cloud",
        challenge: "在台灣最大Google Cloud代理商任職，需要快速學習、客戶開發與內部流程自動化",
        solution: "展現快速學習能力，建立系統化的客戶開發流程，並創建完整的培訓自動化系統",
        result: "1年內成功開發105家跨產業客戶，半年內提升活動名單開發效率80%，創建50頁新人手冊實現培訓自動化"
      },
      {
        company: "客戶服務專家",
        industry: "跨產業服務",
        challenge: "如何在不同產業中都能提供卓越的客戶服務，建立長期信任關係",
        solution: "始終將客戶成功放在首位，透過深度服務與溝通，建立個人化的服務體驗",
        result: "商業顧問服務20+企業主滿意度100%，歐廚VIP管理客戶滿意度100%，1週內成功提升客服部門士氣與主動性"
      }
    ],
    credentials: {
      education: ["淡江大學 運輸管理學系"],
      certifications: ["NLP專業執行師", "國際催眠師", "生涯教練", "國際企業管理師", "Google Cloud數位領導認證"],
      experience: [
        "專注|PROCUS顧問公司 創辦人 & CEO",
        "馬來西亞五金建材 股東",
        "FansTag AI 台灣獨家代理",
        "台灣最大Google Cloud代理商 Inside Sales（105家客戶開發）",
        "董事長特助（台北，面試內錄取）",
        "戶外攝影剪輯師（花蓮，跨界發展）",
        "婚友社愛情教練（多工專案之一）",
        "Airbnb自動化房東（多工專案之一）",
        "美業&服飾業策略顧問（營收提升30%和25%）",
        "馬來西亞市場開發負責人（23%轉化率）",
        "歐廚VIP客戶管理（100%滿意度）",
        "多元創作背景：主播、攝影師、剪輯師、YouTuber",
        "長期陪跑20+企業主（零售、製造、建築、設計、電商）"
      ]
    }
  },
  {
    id: "Aaron",
    name: "Aaron (梁家為)",
    company: "專注|PROCUS顧問公司",
    title: "AI自動化專家 | DeFi技術架構師 | 系統設計顧問",
    expertise: "程式自動化開發、機器學習AI應用、去中心化金融系統、數據分析",
    bio: "電機工程博士，擁有十年程式自動化及AI應用經驗，成功開發破億資金規模的DeFi金融產品",
    fullBio: "Aaron（梁家為）是一位擁有十年技術經驗的AI自動化專家與DeFi技術架構師。擁有超過十年的程式自動化及軟體開發經驗，擅長從根本問題出發，以最高效率的方式透過自動化軟體開發解決複雜問題。同時具備十年機器學習及AI應用經驗，專精於處理龐大資料並進行深度分析，從數據中挖掘出根本問題與解決方案。最具代表性的成就是執行從無到有的去中心化金融服務開發，包含產品設計、網頁設計、智能合約開發、後端架構設計等全棧開發，該金融產品成功達到破億資金的交易量和總鎖倉量。作為專注|Procus技術顧問，他致力於將深度技術經驗轉化為企業可執行的解決方案。",
    highlights: ["程式自動化", "AI機器學習", "DeFi開發", "數據分析"],
    image: "/images/experts/Aaron.png",
    fallbackGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    fallbackInitials: "A",
    specialties: [
      {
        icon: "⚡",
        title: "程式自動化開發",
        description: "十年軟體開發經驗，專精從根本問題出發，以最高效率的自動化方式解決複雜問題"
      },
      {
        icon: "🧠",
        title: "AI機器學習應用",
        description: "十年AI與機器學習經驗，擅長處理龐大資料分析，從數據中發現根本問題與商業洞察"
      },
      {
        icon: "🏦",
        title: "DeFi全棧開發",
        description: "從零打造去中心化金融服務，包含產品設計、前後端開發、智能合約，達成破億資金規模"
      },
      {
        icon: "📊",
        title: "數據驅動決策",
        description: "運用AI技術進行大數據分析，為企業提供基於數據的策略建議與問題解決方案"
      }
    ],
    successCases: [
      {
        company: "去中心化金融平台",
        industry: "金融科技 DeFi",
        challenge: "從零開始建構完整的去中心化金融生態系統，涵蓋前端、後端、智能合約等全方位開發",
        solution: "執行全棧開發包含產品設計、網頁UI/UX設計、智能合約開發、後端API架構、前端介面設計",
        result: "成功打造破億資金規模的DeFi金融產品，總交易量和鎖倉量均突破一億元里程碑"
      },
      {
        company: "半導體設計自動化研究",
        industry: "半導體",
        challenge: "傳統IC設計流程依賴人工經驗，效率有限且容易出錯",
        solution: "運用AI演算法與程式自動化技術優化設計流程，建立自動化驗證與最佳化系統",
        result: "顯著提升設計效率與精度，研究成果獲得國立交通大學最佳博士論文獎"
      }
    ],
    credentials: {
      education: ["國立交通大學 電機工程博士（最佳博士論文獎）", "國立交通大學 電機工程學士"],
      certifications: ["十年程式自動化及軟體開發專業", "十年機器學習及AI應用專業", "區塊鏈技術與智能合約開發"],
      experience: [
        "專注|PROCUS顧問公司 技術顧問 & AI自動化專家",
        "DeFi金融平台 全棧技術架構師（破億資金規模）",
        "軟體自動化自動化顧問（十年經驗）",
        "數據分析與AI專家（十年經驗）",
        "多項產學合作計畫 核心技術成員",
        "國際頂尖技術研討會 共同作者"
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