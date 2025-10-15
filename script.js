// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// ==================== Zaki's Knowledge Base ====================
const ZAKI_KNOWLEDGE = {
    personal: {
        name: "Muhammad Farid Zaki",
        nickname: "Zaki",
        username: "Zetakai",
        role: "Mobile Developer",
        location: "Jakarta, Indonesia",
        email: "muhammadfarid.zaki@gmail.com",
        experience: "2+ years professional experience in mobile development",
        profile: "A Mobile app developer with high passion to learn and to grow within the industry. I'm a results-driven and collaborative person with good analytical skills. Working in a team always brings something new to me and I see feedback as a good way to become better."
    },
    skills: {
        primary: ["React Native", "Mobile Development", "Cross-platform Development"],
        languages: ["JavaScript", "TypeScript", "Python", "Golang"],
        technologies: ["React Native + Expo", "FFmpeg", "Firebase", "Google Maps API", "Face Recognition", "Git"],
        tools: ["Android Studio", "XCode", "Jira"],
        frameworks: ["React Native", "Expo", "Firebase"]
    },
    certificates: [
        "Software & Data Engineering",
        "Engineering with Python",
        "Relational Database (SQL)",
        "Mobile App Developer (React Native)",
        "Javascript certificate",
        "Golang certificate"
    ],
    experience: {
        "PT Macra Teknologi Indonesia": {
            position: "Mobile Developer",
            duration: "08/2022 – present",
            location: "Jakarta, Indonesia",
            achievements: [
                "Developed mobile apps utilizing FFmpeg, Firebase, React Native, and Google Maps API for live location tracking and mapping features",
                "Integrated advanced features such as face recognition for enhanced functionality",
                "Published and maintained 10+ apps to both Google Play Store and Apple App Store, actively used by thousands of users"
            ]
        },
        "TriSquare Technology (M) Sdn Bhd": {
            position: "Freelance React Native Developer",
            duration: "05/2022 – 08/2022",
            achievements: [
                "Turned UI concepts from Figma into code"
            ]
        }
    },
    education: {
        "Institut Teknologi Tangerang Selatan": {
            degree: "Informatics",
            duration: "07/2024 – present"
        },
        "Politeknik Keuangan Negara STAN": {
            degree: "Accounting and Finance",
            duration: "2017 – 2018"
        }
    },
    professionalProjects: [
        "GSI - HRIS",
        "Mavent Video Booth App",
        "USFC - logistics tracking app"
    ],
    projects: {
        "Gliana Labs": {
            description: "Cutting-edge AI solutions provider and SaaS platform specializing in advanced artificial intelligence services including machine learning, computer vision, OCR, chatbots, and custom AI model development",
            tech: "AI/ML Platform",
            website: "https://glianalabs.com/",
            status: "Current Project - Building",
            features: [
                "Machine Learning services and custom ML models",
                "Computer Vision with face recognition and object detection",
                "Advanced OCR technology for text extraction",
                "Conversational AI and intelligent chatbots",
                "Speech recognition and voice processing",
                "Liveness detection and biometric security",
                "Deepfake detection and content authenticity",
                "Predictive analytics and forecasting",
                "Custom AI development and API integration"
            ],
            mission: "Revolutionize business operations with cutting-edge artificial intelligence solutions and services"
        },
        "Coco Face Recognition": {
            description: "Advanced face recognition system using deep learning and computer vision to accurately identify and verify individuals in real-time",
            tech: "Python",
            github: "https://github.com/Zetakai/coco-face-recog",
            features: ["Real-time face detection", "Deep learning models", "Computer vision", "High accuracy identification"]
        },
        "LLM Chat": {
            description: "On-premise Large Language Model chat application providing intelligent conversational AI capabilities with privacy and control",
            tech: "JavaScript",
            github: "https://github.com/Zetakai/llm-chat",
            features: ["On-premise deployment", "Privacy-focused", "Conversational AI", "Local processing"]
        },
        "CocoSpeak": {
            description: "Text-to-speech and speech processing application leveraging AI to deliver natural and expressive voice synthesis capabilities",
            tech: "Python",
            github: "https://github.com/Zetakai/CocoSpeak",
            features: ["Text-to-speech", "Voice synthesis", "AI-powered", "Natural voice generation"]
        }
    },
    organizations: {
        "macra-id": "Part of @macra-id organization",
        "Gliana-Labs": "Part of @Gliana-Labs organization"
    },
    contact: {
        github: "https://github.com/Zetakai",
        linkedin: "https://www.linkedin.com/in/mfzaki/",
        portfolio: "https://zetakai.github.io"
    },
    interests: {
        current: ["Rust Language", "AI technologies", "Mobile app development"],
        passion: ["Turning ideas into reality", "Innovative solutions", "Cross-platform development"]
    }
};

// ==================== Chat Widget Functionality ====================
class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.isTyping = false;
        this.chatHistory = [];
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        this.chatToggle = document.getElementById('chat-toggle');
        this.chatContainer = document.getElementById('chat-container');
        this.chatClose = document.getElementById('chat-close');
        this.chatInput = document.getElementById('chat-input');
        this.chatSend = document.getElementById('chat-send');
        this.chatMessages = document.getElementById('chat-messages');
    }

    bindEvents() {
        this.chatToggle.addEventListener('click', () => this.toggleChat());
        this.chatClose.addEventListener('click', () => this.closeChat());
        this.chatSend.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }


    toggleChat() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.chatContainer.classList.add('active');
            this.chatInput.focus();
        } else {
            this.chatContainer.classList.remove('active');
        }
    }

    closeChat() {
        this.isOpen = false;
        this.chatContainer.classList.remove('active');
    }

    async sendMessage() {
        const message = this.chatInput.value.trim();
        if (!message || this.isTyping) return;

        // Add user message
        this.addMessage(message, 'user');
        this.chatInput.value = '';
        this.chatSend.disabled = true;

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Get AI response
            const response = await this.getAIResponse(message);
            this.hideTypingIndicator();

            // Add message with pseudo-streaming animation
            this.addStreamingMessage(response, 'bot');
        } catch (error) {
            this.hideTypingIndicator();
            this.addMessage("Sorry, I'm having trouble connecting right now. Please try again later.", 'bot');
        }

        this.chatSend.disabled = false;
        this.chatInput.focus();
    }

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = content;

        messageDiv.appendChild(contentDiv);
        this.chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;

        // Store in history
        this.chatHistory.push({ content, sender, timestamp: Date.now() });
    }

    addStreamingMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message streaming-message`;

        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = '';

        messageDiv.appendChild(contentDiv);
        this.chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;

        // Animate text typing
        this.typeText(contentDiv, content, () => {
            // Remove streaming class when done
            messageDiv.classList.remove('streaming-message');
            // Store in history
            this.chatHistory.push({ content, sender, timestamp: Date.now() });
        });
    }

    typeText(element, text, onComplete) {
        let index = 0;
        const speed = 20; // milliseconds per character
        let userScrolling = false;
        let scrollTimeout;

        // Track user scrolling
        const handleScroll = () => {
            userScrolling = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                userScrolling = false;
            }, 1000); // Reset after 1 second of no scrolling
        };

        // Add scroll listener
        this.chatMessages.addEventListener('scroll', handleScroll);

        const typeChar = () => {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;

                // Only auto-scroll if user isn't manually scrolling
                if (!userScrolling) {
                    this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
                }

                setTimeout(typeChar, speed);
            } else {
                // Remove scroll listener when done
                this.chatMessages.removeEventListener('scroll', handleScroll);
                clearTimeout(scrollTimeout);
                
                // Final scroll to bottom when typing is complete
                this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
                
                if (onComplete) onComplete();
            }
        };

        typeChar();
    }

    showTypingIndicator() {
        this.isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-message';
        typingDiv.innerHTML = `
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        this.chatMessages.appendChild(typingDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        this.isTyping = false;
        const typingMessage = this.chatMessages.querySelector('.typing-message');
        if (typingMessage) {
            typingMessage.remove();
        }
    }

    async getAIResponse(userMessage) {
        // Use Cloudflare Workers AI with prompt engineering

        const message = userMessage.toLowerCase();

        // Try Cloudflare Workers AI first
        try {
            return await this.getCloudflareAIResponse(userMessage);
        } catch (error) {
            console.warn('Cloudflare AI failed, falling back to knowledge base:', error);

            // If it's a static environment, provide a helpful message
            if (error.message === 'AI chat requires a live server environment') {
                return this.getKnowledgeBasedResponse(userMessage) +
                    "\n\n💡 Note: For the full AI experience, visit this portfolio on a live server environment.";
            }
        }

        // Fall back to enhanced knowledge-based responses
        return this.getKnowledgeBasedResponse(userMessage);
    }

    async getCloudflareAIResponse(userMessage) {
        // Check if we're in a static environment (like GitHub Pages)
        if (window.location.protocol === 'file:' || window.location.hostname === 'github.io') {
            throw new Error('AI chat requires a live server environment');
        }

        // Backend now handles all prompt engineering
        return await this.getRegularResponse(userMessage);
    }


    async getRegularResponse(userMessage) {
        const response = await fetch('https://slm-portochat.muhammadfarid-zaki.workers.dev/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: userMessage
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success && data.response) {
            return data.response;
        } else {
            throw new Error('Invalid response from API');
        }
    }


    getKnowledgeBasedResponse(userMessage) {
        const message = userMessage.toLowerCase();
        const knowledge = ZAKI_KNOWLEDGE;

        // Check for off-topic questions and add gentle reminders
        const offTopicKeywords = [
            'weather', 'news', 'politics', 'sports', 'movie', 'music', 'food', 'travel',
            'other developer', 'someone else', 'another person', 'general programming',
            'how to code', 'tutorial', 'learning', 'course', 'book', 'advice',
            'current events', 'world news', 'stock market', 'crypto', 'bitcoin',
            'recipe', 'cooking', 'restaurant', 'shopping', 'fashion', 'health',
            'medical', 'doctor', 'therapy', 'relationship', 'dating', 'love'
        ];

        const isOffTopic = offTopicKeywords.some(keyword => message.includes(keyword));

        if (isOffTopic) {
            // Provide a brief answer but remind about Zaki
            const reminderResponses = [
                `I can help with that, but just a friendly reminder - I'm Zaki's AI assistant! While I can answer general questions, I'm most knowledgeable about Zaki's work as a Mobile Developer and his AI projects. Feel free to ask about his experience, skills, or projects anytime!`,
                `Sure, I can discuss that topic! By the way, as Zaki's AI assistant, I specialize in sharing information about his professional background, mobile development expertise, and innovative projects like Gliana Labs. Don't hesitate to ask about his work!`,
                `I'd be happy to help with that! Just so you know, I'm here as Zaki's AI assistant, so I'm particularly well-versed in his career as a Mobile Developer, his technical skills, and his exciting AI projects. Feel free to explore those topics too!`,
                `Of course! As Zaki's AI assistant, I can answer various questions, but I'm especially knowledgeable about his work in mobile development, AI technologies, and his projects. Feel free to ask about his professional journey anytime!`
            ];
            return reminderResponses[Math.floor(Math.random() * reminderResponses.length)];
        }

        // Enhanced responses using the knowledge base
        if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
            return `Hello! I'm ${knowledge.personal.nickname}'s AI assistant. I know all about his work as a ${knowledge.personal.role} with ${knowledge.personal.experience}. I can tell you about his projects, skills, and experience. What would you like to know?`;
        }

        if (message.includes('project') || message.includes('work')) {
            const projectList = Object.keys(knowledge.projects).join(', ');
            return `${knowledge.personal.nickname} has worked on several interesting projects: ${projectList}. He specializes in ${knowledge.skills.primary.join(' and ')} and has experience in ${knowledge.skills.technologies.join(', ')}. Would you like to know more about any specific project?`;
        }

        if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
            return `${knowledge.personal.nickname}'s tech stack includes ${knowledge.skills.primary.join(', ')}, ${knowledge.skills.languages.join(', ')}, and ${knowledge.skills.technologies.join(', ')}. He's currently exploring ${knowledge.interests.current.join(' and ')}.`;
        }

        if (message.includes('experience') || message.includes('background')) {
            return `${knowledge.personal.nickname} is a ${knowledge.personal.role} with ${knowledge.personal.experience}. He currently works at PT Macra Teknologi Indonesia where he has developed mobile apps utilizing FFmpeg, Firebase, React Native, and Google Maps API. He has published and maintained 10+ apps to both Google Play Store and Apple App Store, actively used by thousands of users. He also worked as a Freelance React Native Developer at TriSquare Technology.`;
        }

        if (message.includes('work') || message.includes('job') || message.includes('company')) {
            return `${knowledge.personal.nickname} currently works as a Mobile Developer at PT Macra Teknologi Indonesia (08/2022 – present) in Jakarta, Indonesia. He has developed mobile apps with advanced features like face recognition, live location tracking, and mapping using FFmpeg, Firebase, React Native, and Google Maps API. He has successfully published 10+ apps to both Google Play Store and Apple App Store.`;
        }

        if (message.includes('education') || message.includes('degree') || message.includes('university')) {
            return `${knowledge.personal.nickname} is currently studying Informatics at Institut Teknologi Tangerang Selatan (07/2024 – present). He previously studied Accounting and Finance at Politeknik Keuangan Negara STAN (2017 – 2018).`;
        }

        if (message.includes('certificate') || message.includes('certification')) {
            return `${knowledge.personal.nickname} has several certificates including Software & Data Engineering, Engineering with Python, Relational Database (SQL), Mobile App Developer (React Native), Javascript certificate, and Golang certificate.`;
        }

        if (message.includes('contact') || message.includes('hire') || message.includes('collaborate')) {
            return `You can connect with ${knowledge.personal.nickname} on GitHub at ${knowledge.contact.github} or LinkedIn at ${knowledge.contact.linkedin}. He's always open to discussing new projects, creative ideas, or opportunities to be part of your visions!`;
        }

        if (message.includes('linkedin') || message.includes('professional') || message.includes('network')) {
            return `You can connect with ${knowledge.personal.nickname} on LinkedIn at ${knowledge.contact.linkedin} for professional networking and career opportunities. He's also active on GitHub at ${knowledge.contact.github}.`;
        }

        if (message.includes('ai') || message.includes('machine learning') || message.includes('ml')) {
            return `${knowledge.personal.nickname} has extensive experience in AI and Machine Learning! He's built face recognition systems, deployed on-premise LLM chat applications, and implemented intelligent solutions with modern AI technology. His projects include ${Object.keys(knowledge.projects).join(', ')}.`;
        }

        if (message.includes('mobile') || message.includes('app') || message.includes('react native')) {
            return `Mobile development is ${knowledge.personal.nickname}'s specialty! He focuses on React Native for cross-platform mobile app development, creating solutions that work seamlessly on both iOS and Android. He loves ${knowledge.interests.passion.join(' and ')}.`;
        }

        if (message.includes('coco') || message.includes('face recognition')) {
            const project = knowledge.projects['Coco Face Recognition'];
            return `${project.description}. It's built with ${project.tech} and features ${project.features.join(', ')}. You can check it out at ${project.github}`;
        }

        if (message.includes('llm') || message.includes('chat')) {
            const project = knowledge.projects['LLM Chat'];
            return `${project.description}. It's built with ${project.tech} and features ${project.features.join(', ')}. You can check it out at ${project.github}`;
        }

        if (message.includes('cocospeak') || message.includes('speech') || message.includes('voice')) {
            const project = knowledge.projects['CocoSpeak'];
            return `${project.description}. It's built with ${project.tech} and features ${project.features.join(', ')}. You can check it out at ${project.github}`;
        }

        if (message.includes('rust')) {
            return `${knowledge.personal.nickname} is currently learning Rust Language as part of his continuous learning journey. He's always exploring new technologies to expand his skill set!`;
        }

        if (message.includes('gliana') || message.includes('gliana labs')) {
            return `${knowledge.personal.nickname} is building Gliana Labs as a personal project - a cutting-edge AI solutions provider and SaaS platform! Visit https://glianalabs.com/ to learn more. Gliana Labs specializes in advanced AI services including machine learning, computer vision, OCR, chatbots, and custom AI model development. It's his most ambitious personal project, focusing on revolutionizing business operations with cutting-edge AI solutions.`;
        }

        if (message.includes('organization') || message.includes('team')) {
            return `${knowledge.personal.nickname} is part of ${Object.values(knowledge.organizations).join(' and ')}. He collaborates with talented developers to create impactful projects.`;
        }

        // Enhanced AI-like responses with context awareness
        const contextResponses = [
            "That's a fascinating question! Based on Zaki's portfolio, he's a versatile developer with expertise spanning mobile development, AI/ML, and modern web technologies. What specific aspect interests you most?",
            "I'd love to help you learn more about Zaki's work! He's particularly passionate about creating innovative solutions that bridge mobile development and AI technologies. Feel free to ask about any specific project or skill area.",
            "Great question! Zaki's journey in tech has led him to specialize in React Native development while exploring cutting-edge AI applications. His projects showcase this unique combination of skills.",
            "I'm here to share insights about Zaki's professional journey! He combines technical expertise with creative problem-solving, particularly in mobile apps and AI solutions. What would you like to explore?"
        ];

        // Add some personality and context
        const personalityResponses = [
            "You know, Zaki really enjoys the challenge of turning complex ideas into user-friendly mobile applications. His work on AI projects shows his passion for emerging technologies.",
            "What I find interesting about Zaki's approach is how he combines traditional mobile development with modern AI capabilities. It's a unique skill set in today's market.",
            "Zaki's experience spans from building cross-platform mobile apps to implementing sophisticated AI solutions. It's quite an impressive range of expertise!",
            "One thing that stands out about Zaki's work is his focus on practical, real-world applications of technology. He doesn't just build for the sake of building."
        ];

        // Mix context and personality responses
        const allResponses = [...contextResponses, ...personalityResponses];
        return allResponses[Math.floor(Math.random() * allResponses.length)];
    }

}

// Initialize chat widget when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatWidget = new ChatWidget();

    // Connect chat section button to chat widget
    const chatSectionToggle = document.getElementById('chat-section-toggle');
    if (chatSectionToggle) {
        chatSectionToggle.addEventListener('click', () => {
            // Directly open the chat widget
            chatWidget.toggleChat();
        });
    }
});

