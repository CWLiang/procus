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
    title: "企業經營管理專家",
    expertise: "企業管理制度建立、溝通協商、營運策略",
    bio: "台大農經碩士，10多年總經理特助經驗，協助中小企業建立管理制度",
    fullBio: "Charlie（林聖超）擁有台灣大學農經所碩士學位，具備超過10年擔任老闆/總經理特助的豐富經驗。曾待過5人到500人規模的公司，對於不同規模企業都有深度歷練。擁有創業家與經理人的經營高度，特別擅長對內與對外的溝通、說服談判與協商。曾協助多家中小企業老闆導入管理制度與建立主管團隊，讓企業能從生存階段邁向擴展階段。同時具備豐富的行銷企劃與業務團隊領導經驗，對於企業營收擴展具有策略性思維。",
    highlights: ["溝通談判", "管理制度", "營運策略", "團隊建立"],
    image: "/images/experts/Charlie.png",
    fallbackGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fallbackInitials: "C",
    specialties: [
      {
        icon: "🤝",
        title: "溝通協商談判",
        description: "擅長職場溝通術、跨部門協調與商業談判技巧"
      },
      {
        icon: "⚙️",
        title: "管理制度建立",
        description: "協助企業導入標準化管理制度與建立主管團隊"
      },
      {
        icon: "📈",
        title: "營運策略規劃",
        description: "具備行銷企劃與業務團隊領導的策略性思維"
      },
      {
        icon: "👥",
        title: "組織發展輔導",
        description: "幫助企業從生存階段邁向擴展階段的組織轉型"
      }
    ],
    successCases: [
      {
        company: "傳統製造業G公司",
        industry: "製造業",
        challenge: "公司規模擴大但管理制度不完善，部門溝通效率低",
        solution: "建立標準化管理制度並培訓主管團隊溝通技巧",
        result: "管理效率提升50%，跨部門協作滿意度達90%"
      },
      {
        company: "服務業H企業",
        industry: "服務業",
        challenge: "營收成長停滞，團隊士氣低落",
        solution: "重新規劃營運策略並建立績效管理制度",
        result: "營收成長35%，員工滿意度提升40%"
      },
      {
        company: "貿易公司I集團",
        industry: "貿易業",
        challenge: "國際業務談判成效不佳，合作機會流失",
        solution: "提供談判技巧培訓並建立客戶關係管理制度",
        result: "談判成功率提升60%，客戶續約率達85%"
      }
    ],
    credentials: {
      education: ["台灣大學農經所碩士"],
      certifications: ["企業內訓講師認證", "談判協商專業認證"],
      experience: [
        "商明國際股份有限公司 企業顧問",
        "七寶創意公司 營運最高主管",
        "典華婚訂股份有限公司 整合長特助",
        "友俊國際股份有限公司 總經理特助",
        "金善利有限公司 負責人",
        "大陸公司(上海/北京) 總經理特助",
        "味全食品工業股份有限公司 行銷企劃主管"
      ]
    }
  },
  {
    id: "Mikhor",
    name: "Mikhor (許嘉姿)",
    company: "專注|PROCUS顧問公司",
    title: "企業溝通與流程專家",
    expertise: "企業溝通、流程優化、組織變革",
    bio: "10年企業溝通與流程優化經驗，擅長企業溝通、流程優化、組織變革",
    fullBio: "Mikhor (許嘉姿)擁有10年豐富的企業溝通與流程優化經驗，曾服務於國際4A廣告公司及知名品牌企業。專精於企業溝通、流程優化、組織變革。擅長整合線上線下行銷資源，為企業打造具有市場競爭力的品牌形象。",
    highlights: ["企業溝通", "流程優化", "組織變革"],
    image: "/images/experts/Mikhor.png",
    fallbackGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    fallbackInitials: "M",
    specialties: [
      {
        icon: "🎯",
        title: "企業溝通",
        description: "協助企業找到獨特的企業溝通與差異化優勢"
      },
      {
        icon: "📱",
        title: "流程優化",
        description: "協助企業找到獨特的企業溝通與差異化優勢"
      },
      {
        icon: "💡",
        title: "組織變革",
        description: "協助企業找到獨特的企業溝通與差異化優勢"
      }
    ],
    successCases: [
      {
        company: "傳統食品C公司",
        industry: "食品業",
        challenge: "品牌老化，年輕消費者接受度低",
        solution: "重新定位品牌並執行數位行銷策略",
        result: "品牌知名度提升50%，年輕族群銷售成長80%"
      },
      {
        company: "新創科技D公司",
        industry: "科技業",
        challenge: "品牌知名度不足，市場競爭激烈",
        solution: "建立品牌識別系統並執行整合行銷",
        result: "品牌認知度提升3倍，客戶詢問量增加150%"
      }
    ],
    credentials: {
      education: ["政治大學廣告學系", "紐約大學行銷碩士"],
      certifications: ["Google Ads認證", "Facebook Blueprint認證"],
      experience: ["品牌行銷總監 10年", "數位行銷經理 6年"]
    }
  },
  {
    id: "Aaron",
    name: "Aaron (梁家為)",
    company: "專注|PROCUS顧問公司",
    title: "區塊鏈技術專家",
    expertise: "區塊鏈技術",
    bio: "3年區塊鏈實務經驗，擅長區塊鏈技術以及應用整合",
    fullBio: "Aaron (梁家為)擁有超過3年的區塊鏈技術經驗，從零打造國際級的區塊鏈金融應用，帶領20人團隊將區塊鏈技術應用於金融領域。專精於區塊鏈技術、區塊鏈金融應用、區塊鏈技術應用整合。",
    highlights: ["區塊鏈技術", "區塊鏈金融應用", "區塊鏈技術應用整合"],
    image: "/images/experts/Aaron.png",
    fallbackGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    fallbackInitials: "A",
    specialties: [
      {
        icon: "🏪",
        title: "區塊鏈技術",
        description: "協助企業建立完整的區塊鏈技術應用"
      },
      {
        icon: "📋",
        title: "區塊鏈金融應用",
        description: "協助企業建立完整的區塊鏈金融應用"
      },
      {
        icon: "👥",
        title: "區塊鏈技術應用整合",
        description: "協助企業建立完整的區塊鏈技術應用"
      }
    ],
    successCases: [
      {
        company: "TermMax",
        industry: "去中心化金融",
        challenge: "開創去中心化的固定利率借貸平台",
        solution: "建立完整的區塊鏈技術應用",
        result: "半年內從prototyping到上線，並獲得400萬美元的種子輪投資，產品上線兩個月內即達到3000萬美元的平台交易量"
      },
      {
        company: "Term Structure",
        industry: "去中心化金融",
        challenge: "開創去中心化的Layout 2固定利率借貸平台",
        solution: "建立完整的區塊鏈技術應用",
        result: "成功帶領團隊從0到1打造去中心化的Layout 2固定利率借貸平台。"
      }
    ],
    credentials: {
      education: ["國立陽明交通大學電機工程博士"],
      certifications: ["區塊鏈技術認證", "區塊鏈金融應用認證"],
      experience: ["區塊鏈技術顧問 3年", "區塊鏈金融應用顧問 3年"]
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