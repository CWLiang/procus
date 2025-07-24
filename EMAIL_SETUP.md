# 📧 企業健診郵件通知設置指南

## 🚀 快速設置步驟

### 1. 註冊 Resend 帳號
1. 前往 [Resend 官網](https://resend.com)
2. 註冊免費帳號（每月免費 3,000 封郵件）
3. 驗證您的信箱

### 2. 獲取 API Key
1. 登入 Resend 控制台
2. 點擊左側選單的 "API Keys"
3. 點擊 "Create API Key"
4. 輸入名稱（例如：procus-website）
5. 複製生成的 API Key（格式：re_xxxxxxxx）

### 3. 設置域名（建議）
1. 在 Resend 控制台點擊 "Domains"
2. 點擊 "Add Domain"
3. 輸入您的域名（例如：procus.com）
4. 按照指示設置 DNS 記錄
5. 等待驗證完成

### 4. 創建環境變數文件
在專案根目錄創建 `.env.local` 文件：

```env
# Resend API Key
RESEND_API_KEY=re_your_actual_api_key_here

# 收件人信箱（您的信箱）
ADMIN_EMAIL=your-email@example.com
```

### 5. 修改寄件人地址（如果您設置了自定義域名）
編輯 `src/app/api/submit-assessment/route.ts` 第95行：

```typescript
// 將這行：
from: 'noreply@procus.com',

// 改為您驗證的域名：
from: 'noreply@your-domain.com',
```

如果沒有自定義域名，可以使用：
```typescript
from: 'onboarding@resend.dev',
```

## 📋 功能說明

### 郵件內容包含：
- ✅ 客戶基本資訊（姓名、公司、職稱、信箱）
- ✅ 完整的 16 題問卷答案
- ✅ 按發展階段分類顯示
- ✅ 提交時間戳記

### 郵件格式範例：
```
🏢 新的企業健診提交 - ABC公司 (張三)

👤 客戶基本資訊
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
姓名：張三
公司：ABC公司
職稱：執行長
信箱：zhang@abc.com

🔍 企業健診評估結果
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 定位與驗證 (0-1)
──────────────────────────────────────────────────
1. 你是否能用一句話說清楚「你是誰，為誰解決什麼問題」？
   答案：是

2. 你是否清楚相較於競爭對手，客戶選擇你的「獨特理由」？
   答案：否
...
```

## 🔧 測試功能

1. 確保環境變數設置正確
2. 重啟開發伺服器：`npm run dev`
3. 填寫測試問卷並提交
4. 檢查您的信箱是否收到郵件

## ⚠️ 注意事項

- 免費方案每月限制 3,000 封郵件
- 第一次使用可能需要幾分鐘時間驗證域名
- 建議設置自定義域名以提高郵件送達率
- 記得將 `.env.local` 加入 `.gitignore`（已預設排除）

## 🆘 常見問題

**Q: 郵件沒有收到怎麼辦？**
A: 檢查垃圾郵件夾，確認 API Key 和收件人信箱設置正確

**Q: 出現 API Key 錯誤？**
A: 確認 `.env.local` 文件格式正確，重啟開發伺服器

**Q: 想要自定義郵件模板？**
A: 編輯 `src/app/api/submit-assessment/route.ts` 中的 `emailContent` 變數

## 📞 技術支援

如需協助，請聯繫開發團隊或查看 [Resend 文件](https://resend.com/docs)。 