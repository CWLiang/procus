import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface AssessmentAnswer {
  question: number;
  answer: string | string[];
}

interface FormSubmission {
  personalInfo: {
    name: string;
    company: string;
    jobTitle: string;
    email: string;
  };
  assessmentAnswers: AssessmentAnswer[];
}

export async function POST(request: NextRequest) {
  try {
    const data: FormSubmission = await request.json();

    // 格式化問卷答案
    const formatAnswers = (answers: AssessmentAnswer[]) => {
      const stages = [
        { title: '定位與驗證 (0-1)', questions: [1, 2, 3, 4] },
        { title: '引擎搭建 (1-10)', questions: [5, 6, 7, 8, 9, 10] },
        { title: '加速與優化 (10-50)', questions: [11, 12, 13, 14] },
        { title: '規模與壁壘 (50-100)', questions: [15, 16] }
      ];

      const questionTexts = {
        1: '你是否能用一句話說清楚「你是誰，為誰解決什麼問題」？',
        2: '你是否清楚相較於競爭對手，客戶選擇你的「獨特理由」？',
        3: '你的獲利模式包含哪些？（可複選）',
        4: '你是否有清楚的客戶輪廓（年齡、職業、收入、痛點）？',
        5: '你是否有穩定的產品或服務交付流程？',
        6: '你的客戶來源管道包含哪些？（可複選）',
        7: '你是否有基本的財務管理制度（記帳、報稅）？',
        8: '你是否有固定的營收來源？',
        9: '你的月營收是否能覆蓋基本營運成本？',
        10: '客戶從認識到付費過程中，主要卡關點有哪些？（可複選）',
        11: '你是否有明確的營收目標和達成計畫？',
        12: '你是否有團隊協作工具和標準作業流程？',
        13: '你是否清楚每個客戶的獲客成本和終身價值？',
        14: '如果你休假一個月，公司能否正常運作？',
        15: '你是否能看懂公司的財務三表（損益表、資產負債表、現金流量表）？',
        16: '公司是否有基本的法律文件（如：股東協議、客戶合約、隱私權政策）？'
      };

      let formattedText = '';

      stages.forEach(stage => {
        formattedText += `\n📊 ${stage.title}\n`;
        formattedText += '─'.repeat(50) + '\n';

        stage.questions.forEach(qNum => {
          const answer = answers.find(a => a.question === qNum);
          if (answer) {
            formattedText += `${qNum}. ${questionTexts[qNum as keyof typeof questionTexts]}\n`;

            if (Array.isArray(answer.answer)) {
              formattedText += `   答案：${answer.answer.join(', ')}\n\n`;
            } else {
              formattedText += `   答案：${answer.answer === 'yes' ? '是' : '否'}\n\n`;
            }
          }
        });
      });

      return formattedText;
    };

    // 準備郵件內容
    const emailContent = `
親愛的專注團隊，

有新的企業健診表單提交：

👤 客戶基本資訊
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
姓名：${data.personalInfo.name}
公司：${data.personalInfo.company}
職稱：${data.personalInfo.jobTitle}
信箱：${data.personalInfo.email}

🔍 企業健診評估結果
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formatAnswers(data.assessmentAnswers)}

此郵件由專注企業健診系統自動發送
時間：${new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })}
    `;

    // 發送郵件
    await resend.emails.send({
      from: 'onboarding@resend.dev', // 這需要是您在 Resend 驗證的域名
      to: process.env.ADMIN_EMAIL || 'your-email@example.com',
      subject: `🏢 新的企業健診提交 - ${data.personalInfo.company} (${data.personalInfo.name})`,
      text: emailContent,
    });

    return NextResponse.json({
      success: true,
      message: '表單提交成功，感謝您的填寫！'
    });

  } catch (error) {
    console.error('郵件發送失敗:', error);
    return NextResponse.json(
      { success: false, message: '提交失敗，請稍後再試' },
      { status: 500 }
    );
  }
} 