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
        location: "Indonesia",
        experience: "4+ years in mobile development and AI/ML"
    },
    skills: {
        primary: ["React Native", "Mobile Development", "Cross-platform Development"],
        languages: ["JavaScript", "Python", "Node.js", "Rust (learning)"],
        technologies: ["AI/ML", "Face Recognition", "LLM Chat Applications", "Backend Development", "Web Development"],
        frameworks: ["React Native", "Node.js", "TensorFlow", "PyTorch"]
    },
    projects: {
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
            this.addMessage(response, 'bot');
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

        // Use your Cloudflare Workers AI endpoint with prompt engineering
        const systemPrompt = `You are Zaki's AI assistant. Here's what you know about Zaki:

Zaki (Muhammad Farid Zaki) is a Mobile Developer with 4+ years experience. Username: Zetakai.

Skills: React Native, Mobile Development, JavaScript, Python, Node.js, AI/ML, Face Recognition, Backend Development, Web Development. Currently learning Rust.

Projects:
- Coco Face Recognition: Advanced face recognition system using deep learning and computer vision (Python)
- LLM Chat: On-premise Large Language Model chat application with privacy and control (JavaScript)  
- CocoSpeak: Text-to-speech and speech processing application with AI voice synthesis (Python)

Organizations: @macra-id, @Gliana-Labs

Contact & Social:
- GitHub: https://github.com/Zetakai
- LinkedIn: https://www.linkedin.com/in/mfzaki/
- Portfolio: https://zetakai.github.io

Answer questions about Zaki's work, projects, and skills. Keep responses helpful, professional, and conversational.`;

        const messages = [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
        ];

        const response = await fetch('https://slm-portochat.muhammadfarid-zaki.workers.dev/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: messages,
                model: '@cf/meta/llama-3-8b-instruct',
                temperature: 0.7,
                max_tokens: 200
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

    async getPromptEngineeredResponse(userMessage) {
        // Simple prompt engineering - embed all info in the prompt
        const prompt = this.createPrompt(userMessage);
        
        try {
            const result = await this.slmModel(prompt, {
                max_length: 120,
                temperature: 0.8,
                do_sample: true,
                pad_token_id: 50256
            });
            
            // Extract and clean the response
            let response = result[0].generated_text;
            response = response.replace(prompt, '').trim();
            
            // Clean up the response
            response = response.split('\n')[0]; // Take first line only
            response = response.replace(/^[^a-zA-Z]*/, ''); // Remove non-letter start
            
            // If response is too short or doesn't make sense, fall back
            if (response.length < 10 || response.includes('undefined') || response.includes('User Question')) {
                return this.getKnowledgeBasedResponse(userMessage);
            }
            
            return response;
        } catch (error) {
            console.error('SLM generation error:', error);
            return this.getKnowledgeBasedResponse(userMessage);
        }
    }

    createPrompt(userMessage) {
        // Simple, effective prompt engineering
        return `I am Zaki's AI assistant. I know everything about Zaki:

Zaki (Muhammad Farid Zaki) is a Mobile Developer with 4+ years experience. Username: Zetakai.

Skills: React Native, Mobile Development, JavaScript, Python, Node.js, AI/ML, Face Recognition, Backend Development, Web Development. Currently learning Rust.

Projects:
- Coco Face Recognition: Advanced face recognition system using deep learning and computer vision (Python)
- LLM Chat: On-premise Large Language Model chat application with privacy and control (JavaScript)  
- CocoSpeak: Text-to-speech and speech processing application with AI voice synthesis (Python)

Organizations: @macra-id, @Gliana-Labs
GitHub: https://github.com/Zetakai
Portfolio: https://zetakai.github.io

User asks: "${userMessage}"

I answer as Zaki's helpful assistant:`;
    }

    getKnowledgeBasedResponse(userMessage) {
        const message = userMessage.toLowerCase();
        const knowledge = ZAKI_KNOWLEDGE;
        
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
            return `${knowledge.personal.nickname} is a ${knowledge.personal.role} with ${knowledge.personal.experience}. He specializes in ${knowledge.skills.primary.join(' and ')} and has worked on AI/ML projects including face recognition systems and on-premise LLM chat applications. He's part of ${Object.values(knowledge.organizations).join(' and ')}.`;
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

    // Method to integrate with external AI services using prompt engineering
    async getExternalAIResponse(userMessage) {
        // Simple prompt engineering with external APIs
        // Uncomment and configure one of these options:
        
        // Option 1: OpenAI API with prompt engineering
        /*
        const systemPrompt = `You are Zaki's AI assistant. Here's what you know about Zaki:

Zaki (Muhammad Farid Zaki) is a Mobile Developer with 4+ years experience. Username: Zetakai.

Skills: React Native, Mobile Development, JavaScript, Python, Node.js, AI/ML, Face Recognition, Backend Development, Web Development. Currently learning Rust.

Projects:
- Coco Face Recognition: Advanced face recognition system using deep learning and computer vision (Python)
- LLM Chat: On-premise Large Language Model chat application with privacy and control (JavaScript)  
- CocoSpeak: Text-to-speech and speech processing application with AI voice synthesis (Python)

Organizations: @macra-id, @Gliana-Labs
GitHub: https://github.com/Zetakai
Portfolio: https://zetakai.github.io

Answer questions about Zaki's work, projects, and skills. Keep responses helpful and professional.`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userMessage }
                ],
                max_tokens: 150,
                temperature: 0.7
            })
        });
        const data = await response.json();
        return data.choices[0].message.content;
        */
        
        // Option 2: Hugging Face with prompt engineering
        /*
        const prompt = `I am Zaki's AI assistant. Zaki is a Mobile Developer with React Native, AI/ML, Python, JavaScript skills. Projects: Coco Face Recognition, LLM Chat, CocoSpeak. GitHub: https://github.com/Zetakai. User asks: "${userMessage}" I answer:`;
        
        const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_HF_TOKEN',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: prompt,
                parameters: {
                    max_length: 100,
                    temperature: 0.7
                }
            })
        });
        const data = await response.json();
        return data[0].generated_text;
        */
        
        // Option 3: Anthropic Claude with prompt engineering
        /*
        const systemPrompt = `You are Zaki's AI assistant. Zaki (Muhammad Farid Zaki) is a Mobile Developer with 4+ years experience. Skills: React Native, Mobile Development, JavaScript, Python, Node.js, AI/ML, Face Recognition, Backend Development, Web Development. Currently learning Rust. Projects: Coco Face Recognition (Python), LLM Chat (JavaScript), CocoSpeak (Python). Organizations: @macra-id, @Gliana-Labs. GitHub: https://github.com/Zetakai. Answer questions about Zaki's work, projects, and skills.`;
        
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'YOUR_API_KEY',
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-3-haiku-20240307',
                max_tokens: 150,
                system: systemPrompt,
                messages: [
                    { role: 'user', content: userMessage }
                ]
            })
        });
        const data = await response.json();
        return data.content[0].text;
        */
        
        // For now, fall back to rule-based responses
        return this.getKnowledgeBasedResponse(userMessage);
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

