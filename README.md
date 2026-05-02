# 🔐 Phishing Detection Chrome Extension (Django + API)

A browser-based phishing detection system that scans the current website and determines whether it is **safe** or **phishing** using a backend API.

---

## 🚀 Features

- 🔍 Scan any website directly from Chrome
- 🌐 Django REST API backend (deployed on Render)
- ⚡ Real-time phishing detection
- 🧩 Chrome Extension popup UI
- 🌍 Works globally with hosted backend

---

## 📁 Project Structure

```
phishing-detector/
│
├── backend/              # Django backend (API)
│   ├── detectphising/
│   ├── myapp/
│   ├── manage.py
│   ├── requirements.txt
│
├── extension/            # Chrome Extension
│   ├── manifest.json
│   ├── popup.html
│   ├── content2.js
│   ├── style.css
│   ├── logo.png
│   ├── safe.png
│   ├── alert.png
│
├── .gitignore
└── README.md
```

---

## 🌐 Live API (Production)

Your backend is already deployed on Render:

```
https://phishing-detector-nhel.onrender.com/api/<URL>
```

Example:

```
https://phishing-detector-nhel.onrender.com/api/https://google.com
```

Expected response:

```json
{
  "result": "Website is safe to visit"
}
```

---

## 🧩 Chrome Extension Setup (User Guide)

### 1️⃣ Open Chrome Extensions

Go to:

```
chrome://extensions/
```

---

### 2️⃣ Enable Developer Mode

Turn ON **Developer Mode** (top-right)

---

### 3️⃣ Load Extension

- Click **Load unpacked**
- Select the `extension/` folder

---

### 4️⃣ Configure API URL

Open file:

```
extension/content2.js
```

Ensure this line is present:

```javascript
fetch(`https://phishing-detector-nhel.onrender.com/api/${url}`)
```

---

### 5️⃣ Reload Extension

- Go to `chrome://extensions/`
- Click **Reload**

---

## ▶️ How to Use

1. Open any website (e.g., google.com)
2. Click the extension icon
3. Click **Scan**
4. View result:

| Result | Meaning |
|------|--------|
| ✅ Safe | Website is legitimate |
| 🚨 Phishing | Suspicious or malicious |

---

## ⚠️ Important Notes

- Internet connection is required
- First request may be slow (Render free tier)
- Detection is currently **rule-based (not AI yet)**
- Some URLs may not parse correctly due to path-based API

---

## 🐞 Common Issues

### ❌ Extension shows `[object Object]`
Fix:
- Ensure `.then(response => response.json())` is used

---

### ❌ Images not loading
Fix:
- Use local images (`safe.png`, `alert.png`) inside extension folder

---

### ❌ API not responding
Check:
- Render service is running
- Correct API URL is used

---

### ❌ CORS error
Temporary fix in backend:

```python
CORS_ALLOW_ALL_ORIGINS = True
```

---

## 🚀 Future Improvements

- 🧠 Machine Learning-based detection (Phase 3)
- 🔁 Convert API to POST request
- ⚡ Faster detection system
- 🔒 Secure API with restricted CORS
- 🌍 Publish extension on Chrome Web Store

---

## 👨‍💻 Author

Developed as a cybersecurity + web integration project combining:

- Django REST Framework
- Chrome Extension APIs
- URL Feature Extraction

---

## ⭐ Support

If you like this project:

- ⭐ Star the repository
- 🔁 Share with others
- 🛠️ Contribute improvements

---

## 📌 Status

✅ Phase 1: Local Setup  
✅ Phase 2: Production Deployment (Render)  
🚀 Phase 3: AI Integration (Next)
