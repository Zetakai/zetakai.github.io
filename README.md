# 🚀 Zetakai Portfolio - AI-Powered Developer Showcase

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)
![AI Powered](https://img.shields.io/badge/AI%20Powered-Cloudflare%20Workers%20AI-purple)
![Responsive](https://img.shields.io/badge/Design-Responsive-orange)

**A cutting-edge portfolio website featuring an AI-powered chat assistant built with Cloudflare Workers AI and Llama 3 8B**

[🌐 Live Demo](https://zetakai.github.io) • [💬 AI Chat](https://zetakai.github.io#chat) • [📧 Contact](https://www.linkedin.com/in/mfzaki/)

</div>

---

## ✨ Features

### 🤖 **AI-Powered Chat Assistant**
- **Cloudflare Workers AI Integration** with Llama 3 8B model
- **Prompt Engineering** with comprehensive portfolio knowledge
- **Intelligent Responses** about projects, skills, and experience
- **Floating Chat Widget** with smooth animations
- **Fallback System** for reliable performance

### 🎨 **Modern Design**
- **Responsive Design** - Perfect on all devices
- **Smooth Animations** - CSS transitions and hover effects
- **Gradient Backgrounds** - Beautiful visual appeal
- **Interactive Elements** - Engaging user experience
- **Professional Typography** - Inter font family

### 📱 **Portfolio Sections**
- **Hero Section** - Eye-catching introduction with floating stats
- **About Section** - Professional background and tech stack
- **Projects Section** - Featured GitHub projects with descriptions
- **Chat Section** - Interactive AI assistant showcase
- **Contact Section** - Professional networking links

### 🛠️ **Technical Excellence**
- **Vanilla JavaScript** - No framework dependencies
- **CSS Grid & Flexbox** - Modern layout techniques
- **Semantic HTML5** - SEO-friendly structure
- **Optimized Performance** - Fast loading times
- **Cross-browser Compatible** - Works everywhere

---

## 🏗️ Architecture

### **Frontend Stack**
```
HTML5 + CSS3 + Vanilla JavaScript
├── Responsive Design (Mobile-first)
├── CSS Custom Properties (Variables)
├── Intersection Observer API
└── Fetch API for AI Integration
```

### **AI Integration**
```
Cloudflare Workers AI
├── Llama 3 8B Instruct Model
├── Prompt Engineering
├── CORS Configuration
└── Error Handling & Fallbacks
```

### **Knowledge Base**
```
Portfolio Information
├── Personal Details
├── Technical Skills
├── Project Descriptions
├── Contact Information
└── Professional Experience
```

---

## 🚀 Quick Start

### **Prerequisites**
- Modern web browser
- Git (for cloning)
- GitHub account (for deployment)

### **Local Development**
```bash
# Clone the repository
git clone https://github.com/Zetakai/zetakai.github.io.git

# Navigate to the directory
cd zetakai.github.io

# Open in browser
start index.html  # Windows
open index.html   # macOS
```

### **Deployment**
```bash
# Push to GitHub (auto-deploys to GitHub Pages)
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 🎯 AI Chat Features

### **What the AI Knows**
- **Personal Information**: Name, role, experience, location
- **Technical Skills**: React Native, AI/ML, Python, JavaScript, etc.
- **Projects**: Coco Face Recognition, LLM Chat, CocoSpeak
- **Organizations**: @macra-id, @Gliana-Labs
- **Contact**: GitHub, LinkedIn, Portfolio links

### **Sample Questions**
- "What projects have you worked on?"
- "Tell me about your AI experience"
- "What technologies do you use?"
- "How can I contact you?"
- "What's your LinkedIn profile?"

---

## 🛠️ Customization

### **Personal Information**
Update the knowledge base in `script.js`:
```javascript
const ZAKI_KNOWLEDGE = {
    personal: {
        name: "Your Name",
        role: "Your Role",
        experience: "Your Experience"
    },
    // ... other sections
};
```

### **AI Integration**
Configure your Cloudflare Workers AI endpoint:
```javascript
const response = await fetch('YOUR_CLOUDFLARE_WORKERS_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        messages: messages,
        model: '@cf/meta/llama-3-8b-instruct'
    })
});
```

### **Styling**
Customize colors in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

---

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Load Time**: < 2 seconds
- **Bundle Size**: < 100KB (no external dependencies)
- **Mobile Performance**: Optimized for all devices

---

## 🔧 Technical Details

### **Browser Support**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### **Features Used**
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer API
- Fetch API
- ES6+ JavaScript
- Semantic HTML5

### **AI Model Specifications**
- **Model**: Llama 3 8B Instruct
- **Provider**: Cloudflare Workers AI
- **Context Length**: 200 tokens
- **Temperature**: 0.7
- **Response Time**: < 2 seconds

---

## 📈 Roadmap

- [ ] **Enhanced AI Responses** - More contextual understanding
- [ ] **Multi-language Support** - Internationalization
- [ ] **Dark Mode** - Theme switching
- [ ] **Analytics Integration** - Usage tracking
- [ ] **Performance Monitoring** - Real-time metrics

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 About the Developer

**Muhammad Farid Zaki (Zetakai)**
- 🚀 **Mobile Developer** with 3+ years experience
- 🤖 **AI/ML Enthusiast** - Face recognition, LLM applications
- 📱 **React Native Specialist** - Cross-platform development
- 🐍 **Python Developer** - Backend and AI solutions
- 🔗 **Connect**: [LinkedIn](https://www.linkedin.com/in/mfzaki/) | [GitHub](https://github.com/Zetakai)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Built with ❤️ and AI by [Zetakai](https://github.com/Zetakai)

[🌐 Live Portfolio](https://zetakai.github.io) • [💬 Try the AI Chat](https://zetakai.github.io#chat)

</div>