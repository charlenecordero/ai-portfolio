function appData() {
    return {
        currentSection: 'dashboard',
        subject: '',
        message: '',
        fromEmail: '',
        inputQuery: '',
        inputQuery: '',
        isLightMode: localStorage.getItem('theme_preference') === 'light',

        toggleTheme() {
            this.isLightMode = !this.isLightMode;
            localStorage.setItem('theme_preference', this.isLightMode ? 'light' : 'dark');
            this.refreshCharts();
        },

        // Blog Data
        selectedBlog: null,
        selectedProject: null, // NEW: For project modal
        careerChartInstance: null,
        stackChartInstance: null,
        learningChartInstance: null,
        chartRefreshTimeout: null,

        // Chatbot Data
        chatOpen: false,
        chatInput: '',
        isTyping: false,
        chatMessages: [
            { role: 'aura', text: "Hello! I'm Aura, your AI guide. Ask me anything about Charlene's projects, experience, or design philosophy!" }
        ],
        suggestions: [
            "Summarize Portfolio",
            "Who is Charlene?",
            "Explain Design",
            "What is Cottagecore?",
            "Explain Code Architecture"
        ],

        // System Version History Data
        activeVersion: 6,
        systemHistory: [
            {
                version: 1,
                id: 'v1.0.0',
                label: 'APL-Web',
                year: '2016',
                role: 'Intern Web Programmer',
                company: 'APL co. ptd. Ltd.',
                focus: 'Module_Focus: Web Development Foundation',
                skills: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
                desc: 'Assisted in front-end and back-end web development tasks. Built foundational skills in translating requirements into functional web components.'
            },
            {
                version: 2,
                id: 'v2.0.0',
                label: 'Accenture-PS',
                year: '2018-2019',
                role: 'Oracle PeopleSoft Developer',
                company: 'Accenture',
                focus: 'Module_Focus: Enterprise HR Systems',
                skills: ['Oracle PeopleSoft', 'HCM', 'Oracle SQL', 'Enterprise Architecture'],
                desc: 'Designed and configured enterprise HR systems for state DOT. Translated complex business requirements into technical configurations.'
            },
            {
                version: 3,
                id: 'v3.0.0',
                label: 'CareCoach-AI',
                year: '2020',
                role: 'Health Advocate',
                company: 'Care Coach',
                focus: 'Module_Focus: AI-Assisted UX',
                skills: ['Human-AI Interaction', 'Workflow Design', 'Responsible Automation'],
                desc: 'Delivered interactive user experiences through AI-assisted conversational systems. Balanced automation with human empathy.'
            },
            {
                version: 4,
                id: 'v4.0.0',
                label: 'Multisys-QA',
                year: '2020-2021',
                role: 'Mobile QA Specialist',
                company: 'Multisys Tech',
                focus: 'Module_Focus: Quality Assurance',
                skills: ['End-to-End Testing', 'Mobile Validation', 'Edge-Case Analysis'],
                desc: 'Conducted end-to-end quality validation for web and mobile apps. Designed test scenarios to verify system behavior.'
            },
            {
                version: 5,
                id: 'v5.0.0',
                label: 'DevOps-Unix',
                year: '2021-2023',
                role: 'DevOps / Ops Analyst',
                company: 'Accenture / Amdocs',
                focus: 'Module_Focus: Production Systems & Automation',
                skills: ['UNIX Shell', 'Oracle SQL', 'Automation Pipelines', 'Incident Management'],
                desc: 'Supported large-scale customer resource and telecom systems. Enhanced backend workflows and resolved production incidents.'
            },
            {
                version: 6,
                id: 'v6.0.0',
                label: 'TaskUs-AI',
                year: '2024-Present',
                role: 'Business Insights Analyst',
                company: 'TaskUs',
                focus: 'Module_Focus: AI & Data Strategy',
                skills: ['SQL', 'Sigma Computing', 'ETL', 'Business Strategy'],
                desc: 'Designing data-driven decision systems. Bridging technical analysis and business strategy for sales/ops growth.'
            }
        ],

        blogs: [
            {
                id: 5,
                title: 'GreetStyle AI: The Solution to "Cringey" Greetings',
                date: 'Jan 24, 2026',
                summary: 'An AI-powered greeting card generator that makes personal messages more fun and interactive.',
                content: `
                    <h4 class="text-[var(--neon-pink)] font-bold text-lg mb-2">The Problem with Digital Greetings</h4>
                    <p class="mb-4">We've all been there: It's your friend's birthday, and you want to tell them how much you appreciate them. But how do you say it without being "cringey" or awkward?</p>

                    <h4 class="text-[var(--neon-pink)] font-bold text-lg mb-2">The Story: A Birthday, a Dilemma, and an Idea</h4>
                    <p class="mb-4">Last week, while staring at a blank text box, I realized I didn't know what "mood" the celebrant was in. Was he in the mood for a heartfelt message? A joke? Or maybe something completely absurd? I thought: “What if he could choose how to read my message?”</p>

                    <h4 class="text-[var(--neon-mint)] font-bold text-lg mb-2">The Solution: GreetStyle AI</h4>
                    <p class="mb-4">That "what if" became GreetStyle AI. I built this platform so that the sender can be sincere, but the receiver gets to have all the fun. Now, when I send a message, he can use AI to instantly toggle the "vibe":</p>
                    <ul class="list-disc list-inside mb-4 pl-4 text-[var(--txt-muted)]">
                        <li>Feeling silly? Switch to <span class="text-[var(--neon-pink)]">Minion Language 🍌</span>.</li>
                        <li>Feeling chaotic? Switch to <span class="text-[var(--neon-pink)]">Gen Z Slang 💀</span>.</li>
                        <li>Feeling fancy? Switch to <span class="text-[var(--neon-pink)]">Royalty 👑</span>.</li>
                    </ul>

                    <h4 class="text-[#8B5CF6] font-bold text-lg mb-2">The Tech Stack ("The How")</h4>
                    <ul class="list-disc list-inside mb-4 pl-4 text-[var(--txt-muted)]">
                        <li><strong>Brain:</strong> Integrated <span class="text-[var(--neon-mint)]">Gemini 2.5 Flash-Lite</span> for high-speed, creative styling.</li>
                        <li><strong>Infrastructure:</strong> Deployed a dual-platform setup with GitHub Pages (Frontend) and Hugging Face (Backend).</li>
                        <li><strong>Efficiency:</strong> Used <span class="text-[var(--neon-mint)]">LZ-String compression</span> to store data in the URL, making it a "serverless" experience.</li>
                        <li><strong>Reliability:</strong> Built a custom Direct Fetch architecture and Auto-Retry logic to handle API quotas.</li>
                    </ul>

                    <h4 class="text-[var(--txt-bone)] font-bold text-lg mb-2">Takeaway</h4>
                    <p class="mb-4">Sometimes the best technical solutions come from a very human problem: trying to connect with your special someone in a fun way.</p>
                    
                    <p class="mt-4"><a href="https://greetstyle.com" target="_blank" class="text-[var(--neon-mint)] underline">Check it out at greetstyle.com</a></p>
                    <div class="flex gap-2 mt-4 text-[10px] text-[var(--neon-mint)]/60 font-mono flex-wrap">
                        <span>#GenAI</span> <span>#WebDev</span> <span>#GeminiAI</span> <span>#BuildInPublic</span> <span>#FullStack</span>
                    </div>
                `
            },
            {
                id: 4,
                title: 'Challenge Accepted: Google AI New Year, New You',
                date: 'Jan 24, 2026',
                summary: 'The spark that started this Cyber-Cottage overhaul.',
                content: 'I stumbled upon an article on dev.to about the "New Year, New You" portfolio challenge by the Google AI team. It was the perfect motivation to finally revamp my portfolio. I decided to blend my love for Cyberpunk aesthetics with Cottagecore elements, creating a unique "Neural Garden" interface. Check out the challenge here: <a href="https://dev.to/devteam/join-the-new-year-new-you-portfolio-challenge-3000-in-prizes-feedback-from-google-ai-team-4e7g" target="_blank" class="text-[var(--neon-mint)] underline">Join the Challenge</a>.'
            },
            {
                id: 1,
                title: 'The Ghost in the Shell Script: Automating My Life',
                date: 'Oct 24, 2025',
                summary: 'How I used simple bash scripts to reclaim 10 hours of my week.',
                content: 'Automation isn\'t just for servers. In this post, I explore how I applied DevOps principles to my daily routine, from meal prep scheduling to automated budget tracking. It started with a simple cron job...'
            },
            {
                id: 2,
                title: 'Neon Gardening: Hydroponics meet IoT',
                date: 'Nov 12, 2025',
                summary: 'Building a self-sustaining indoor garden with Arduino and a lot of UV lights.',
                content: 'My cottagecore dreams collided with my cyberpunk reality. Using an ESP32, some water pumps, and a custom dashboard, I created a hydroponic system that texts me when the pH is off.'
            },
            {
                id: 3,
                title: 'AI Architectures for the Lazy Developer',
                date: 'Jan 05, 2026',
                summary: 'Why "good enough" is sometimes better than state-of-the-art.',
                content: 'We often obsess over the latest transformer models, but sometimes a simple regression is all you need. Here is a breakdown of practical AI architecture decisions for real-world business problems.'
            }
        ],

        // Theme Logic
        getThemeColor(cssVar) {
            return getComputedStyle(document.body).getPropertyValue(cssVar).trim();
        },

        refreshCharts() {
            // Debounce: Clear previous timer if it exists
            if (this.chartRefreshTimeout) {
                clearTimeout(this.chartRefreshTimeout);
            }

            // Small delay to allow CSS variable propagation
            this.chartRefreshTimeout = setTimeout(() => {
                this.initChart();
                this.initStackChart();
                this.initLearningChart();
            }, 100); // Increased to 100ms for safety
        },

        projects: [
            {
                title: 'GreetStyle AI',
                desc: 'AI-powered greeting card generator.',
                tags: ['AI', 'GenAI', 'Web App'],
                link: 'https://greetstyle.com',
                details: `
                    <h4 class="text-[var(--neon-pink)] font-bold text-lg mb-2">Project Overview</h4>
                    <p class="mb-4">GreetStyle AI is a web application designed to solve the social anxiety of writing greeting cards. It uses Generative AI to rewrite generic messages into various "styles" or personas.</p>
                    
                    <h4 class="text-[var(--neon-mint)] font-bold text-lg mb-2">Key Features</h4>
                    <ul class="list-disc list-inside mb-4 pl-4 text-[var(--txt-muted)] space-y-1">
                        <li><strong>Style Transfer:</strong> Instantly convert text into "Gen Z", "Formal", "Poetic", or "Pirate" styles.</li>
                        <li><strong>Serverless Architecture:</strong> Uses LZ-String to encode state in URLs, requiring no backend database for message sharing.</li>
                        <li><strong>AI Integration:</strong> Powered by Gemini Flash for sub-second text transformations.</li>
                    </ul>

                    <div class="mt-6 p-4 border border-[#2d5a45] bg-project-frame rounded text-center">
                        <p class="text-[10px] text-[var(--neon-mint)] mb-2 uppercase tracking-widest">System Link</p>
                        <a href="https://greetstyle.com" target="_blank" class="inline-block bg-[var(--neon-mint)] text-black px-6 py-2 rounded font-bold hover:bg-white transition-colors">LAUNCH GREETSTYLE.COM</a>
                    </div>
                `
            },
            {
                title: 'Weird Wanderess',
                desc: 'Personal blog for worldly exploration.',
                tags: ['Blog', 'Exploration', 'Personal'],
                link: 'https://charlenecordero.github.io/weird-wanderess/',
                details: `
                    <h4 class="text-[var(--neon-pink)] font-bold text-lg mb-2">Travel & Exploration Log</h4>
                    <p class="mb-4">"Weird Wanderess" is my personal brand for travel documenting. It captures the intersection of solo travel, cultural immersion, and finding the "weird" or unique in every destination.</p>
                    
                    <h4 class="text-[var(--neon-mint)] font-bold text-lg mb-2">Highlights</h4>
                    <ul class="list-disc list-inside mb-4 pl-4 text-[var(--txt-muted)] space-y-1">
                        <li><strong>Content Creation:</strong> Photography and storytelling from 10+ countries.</li>
                        <li><strong>Community Building:</strong> grew a community of like-minded solo female travelers.</li>
                    </ul>

                    <div class="mt-6 p-4 border border-[#2d5a45] bg-project-frame rounded text-center">
                        <p class="text-[10px] text-[var(--neon-mint)] mb-2 uppercase tracking-widest">Connect</p>
                        <a href="https://charlenecordero.github.io/weird-wanderess/" target="_blank" class="inline-block border border-[var(--neon-pink)] text-[var(--neon-pink)] px-6 py-2 rounded font-bold hover:bg-[var(--neon-pink)] hover:text-black transition-colors">VISIT PAGE</a>
                    </div>
                `
            },
            {
                title: 'Ibasari',
                desc: 'Ecommerce platform for online variety store.',
                tags: ['E-commerce', 'Store', 'Business'],
                link: 'https://charlenecordero.github.io/ibasari/',
                details: `
                    <h4 class="text-[var(--neon-pink)] font-bold text-lg mb-2">E-Commerce Venture</h4>
                    <p class="mb-4">Ibasari was a variety store experiment that focused on curating unique home goods. This project involved setting up digital storefronts, managing inventory logistics, and digital marketing.</p>
                    
                     <h4 class="text-[var(--neon-mint)] font-bold text-lg mb-2">Operational Stack</h4>
                    <ul class="list-disc list-inside mb-4 pl-4 text-[var(--txt-muted)] space-y-1">
                        <li><strong>Platform:</strong> Facebook Commerce / Meta Business Suite.</li>
                        <li><strong>Logistics:</strong> Integration with local courier APIs for automated shipping calculations.</li>
                    </ul>

                    <div class="mt-6 p-4 border border-[#2d5a45] bg-project-frame rounded text-center">
                        <p class="text-[10px] text-[var(--neon-mint)] mb-2 uppercase tracking-widest">Storefront</p>
                        <a href="https://charlenecordero.github.io/ibasari/" target="_blank" class="inline-block border border-[var(--neon-pink)] text-[var(--neon-pink)] px-6 py-2 rounded font-bold hover:bg-[var(--neon-pink)] hover:text-black transition-colors">VISIT IBASARI</a>
                    </div>
                `
            },
            {
                title: 'CyCo.ai',
                desc: 'Future AI startup brand.',
                tags: ['Startup', 'AI', 'Future'],
                link: 'https://www.https://charlenecordero.github.io/cyco.ai/',
                details: `
                    <h4 class="text-[var(--neon-pink)] font-bold text-lg mb-2">Future Concept</h4>
                    <p class="mb-4">CyberCottage is the brand identity for my future ventures in "Cozy AI"—technology designed to help humans disconnect and live simpler lives, paradoxically through automation.</p>
                    
                    <h4 class="text-[var(--neon-mint)] font-bold text-lg mb-2">Vision</h4>
                    <p class="text-[var(--txt-muted)]">"High Tech, Soft Life." The goal is to build tools that automate the drudgery of modern existence (admin, scheduling, basic comms) so people have more time for "cottagecore" activities like gardening, crafting, and resting.</p>

                    <div class="mt-6 p-4 border border-[#2d5a45] bg-project-frame rounded text-center">
                        <p class="text-[10px] text-[var(--neon-mint)] mb-2 uppercase tracking-widest">Follow the Journey</p>
                        <a href="https://charlenecordero.github.io/cyco.ai/" target="_blank" class="inline-block border border-[var(--neon-pink)] text-[var(--neon-pink)] px-6 py-2 rounded font-bold hover:bg-[var(--neon-pink)] hover:text-black transition-colors">VISIT PAGE</a>
                    </div>
                `
            },
            {
                title: 'Portfolio Dashboard',
                desc: 'This interactive portfolio dashboard, built with core web technologies.',
                tags: ['HTML', 'Tailwind CSS', 'Alpine.js'],
                link: 'code_architecture.html',
                details: `
                    <h4 class="text-[var(--neon-pink)] font-bold text-lg mb-2">Recursive System Architecture</h4>
                    <p class="mb-4">You are looking at it. This portfolio is a single-page application (SPA) built to demonstrate a balance of aesthetic performance and clean code.</p>
                    
                    <h4 class="text-[var(--neon-mint)] font-bold text-lg mb-2">Tech Specs</h4>
                    <ul class="list-disc list-inside mb-4 pl-4 text-[var(--txt-muted)] space-y-1">
                        <li><strong>Frontend:</strong> Vanilla HTML5 + TailwindCSS for styling. Alpine.js for lightweight state management.</li>
                        <li><strong>Design System:</strong> Custom "Cyber-Cottage" design tokens (Neon Mint + Void Moss).</li>
                        <li><strong>AI Agent:</strong> Integrated "Aura" Chatbot for natural language navigation.</li>
                    </ul>

                     <div class="mt-6 p-4 border border-[#2d5a45] bg-project-frame rounded text-center">
                        <p class="text-[10px] text-[var(--neon-mint)] mb-2 uppercase tracking-widest">Source Code</p>
                        <a href="https://github.com/charlenecordero/ai-portfolio" target="_blank" class="inline-block bg-[#4AF2A1] text-black px-6 py-2 rounded font-bold hover:bg-white transition-colors">VIEW REPO</a>
                    </div>
                `
            }
        ],

        // Console Header Data
        displayTitle: '',
        typingInterval: null,
        sectionTitles: {
            'dashboard': { title: 'SYSTEM_DASHBOARD', subtitle: 'KPIs & status overview.' },
            'about': { title: 'IDENTITY_CORE', subtitle: 'Personal & Professional Bio' },
            'projects': { title: 'THE_LAB', subtitle: 'AI Projects & Experiments' },
            'experience': { title: 'DEPLOY_LOGS', subtitle: 'Work Experience & History' },
            'blog': { title: 'NEURAL_ARCHIVES', subtitle: 'Thoughts, Logs & Tutorials' },
            'contact': { title: 'INITIALIZE_HANDSHAKE', subtitle: 'Connect & Collaborate' }
        },

        typeTitle(sectionKey) {
            const data = this.sectionTitles[sectionKey] || this.sectionTitles['dashboard'];
            const fullText = `>> ${data.title} // ${data.subtitle}`;

            this.displayTitle = '';
            if (this.typingInterval) clearInterval(this.typingInterval);

            let i = 0;
            this.typingInterval = setInterval(() => {
                this.displayTitle += fullText.charAt(i);
                i++;
                if (i > fullText.length) {
                    clearInterval(this.typingInterval);
                }
            }, 30); // Speed of typing
        },

        // Legacy autoType (optional support or remove)
        autoType(cmd) {
            // No longer used for input, but maybe for direct section jumps if we keep the function
            // converted to direct navigation for now
        },

        initChart() {

            const ctx = document.getElementById('careerChart');
            if (ctx) {
                if (this.careerChartInstance) this.careerChartInstance.destroy();

                const mint = '#4AF2A1';
                const pink = '#FF2E88';
                const text = '#E0E5D7';
                const axisText = '#8A9A90';
                const gridColor = 'rgba(74, 242, 161, 0.1)';


                this.careerChartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['2016', '2018', '2020', '2021', '2022', '2024', '2026'],
                        datasets: [{
                            label: 'Career Trajectory',
                            data: [1, 2, 2.5, 3, 3.5, 4, 5],
                            borderColor: mint,
                            backgroundColor: 'rgba(74, 242, 161, 0.1)',
                            tension: 0.4,
                            pointBackgroundColor: pink,
                            pointBorderColor: mint,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        const roles = [
                                            "Web Intern (APL)",
                                            "PeopleSoft Dev (Accenture)",
                                            "Health Advocate / QA",
                                            "DevOps (Accenture)",
                                            "Ops Analyst (Amdocs)",
                                            "Business Insights (TaskUs)",
                                            "AI Architect Goal"
                                        ];
                                        return roles[context.dataIndex];
                                    }
                                },
                                backgroundColor: 'rgba(5, 5, 5, 0.9)',
                                titleColor: mint,
                                bodyColor: '#E0E5D7',
                                borderColor: mint,
                                borderWidth: 1,
                                displayColors: false,
                                bodyFont: { family: 'Fira Code' }
                            }
                        },
                        plugins: [{
                            afterDatasetsDraw: (chart) => {
                                const ctx = chart.ctx;
                                ctx.save();
                                ctx.font = '10px "Fira Code"';
                                ctx.fillStyle = text;
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';

                                const roles = [
                                    "Intern",
                                    "PeopleSoft",
                                    "Health/QA",
                                    "DevOps",
                                    "Ops Analyst",
                                    "Biz Analyst",
                                    "AI Architect"
                                ];

                                const meta = chart.getDatasetMeta(0);
                                meta.data.forEach((point, index) => {
                                    const role = roles[index];
                                    if (role) {
                                        ctx.fillText(role, point.x, point.y - 12);
                                    }
                                });
                                ctx.restore();
                            }
                        }],
                        scales: {
                            y: {
                                display: false,
                                grid: { color: this.getThemeColor('--glass-border') || 'rgba(74, 242, 161, 0.1)' }
                            },
                            x: {
                                grid: { color: this.getThemeColor('--glass-border') || 'rgba(74, 242, 161, 0.1)' },
                                ticks: {
                                    color: text,
                                    font: { family: 'Fira Code', size: 10 }
                                }
                            }
                        }
                    }
                });
            }
        },
        initStackChart() {
            const ctx = document.getElementById('architectStackChart');
            if (ctx) {
                if (this.stackChartInstance) this.stackChartInstance.destroy();

                if (this.stackChartInstance) this.stackChartInstance.destroy();

                const mint = '#4AF2A1';
                const pink = '#FF2E88'; // Keep pink consistent
                const text = this.isLightMode ? '#000000' : '#E0E5D7';

                this.stackChartInstance = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['WORKFLOW AUTO', 'RAG SYSTEMS', 'LLM AGENTS', 'PYTHON / APIS', 'DATA OPS'],
                        datasets: [{
                            data: [30, 25, 20, 15, 10],
                            backgroundColor: [
                                mint, // System Design
                                '#2D5A45', // AI/LLM Ops (Keep static or var?)
                                '#98F5C6', // Automation (Pale Mint)
                                pink, // AI Strategy
                                '#FF85B3'  // Governance (Soft Pink)
                            ],
                            borderColor: 'transparent',
                            borderWidth: 2,
                            hoverOffset: 4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: 24
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                backgroundColor: 'rgba(5, 5, 5, 0.9)',
                                titleColor: mint,
                                bodyColor: '#E0E5D7',
                                borderColor: mint,
                                borderWidth: 1,
                                bodyFont: { family: 'Monaco' }
                            }
                        }
                    },
                    plugins: [{
                        id: 'outerLabels',
                        afterDraw: (chart) => {
                            const { ctx, chartArea: { width, height } } = chart;
                            chart.data.datasets.forEach((dataset, i) => {
                                const meta = chart.getDatasetMeta(i);
                                meta.data.forEach((element, index) => {
                                    const { x, y, startAngle, endAngle, outerRadius } = element;
                                    const midAngle = (startAngle + endAngle) / 2;
                                    const startX = x + Math.cos(midAngle) * outerRadius;
                                    const startY = y + Math.sin(midAngle) * outerRadius;
                                    const lineLen = 15;
                                    const endX = x + Math.cos(midAngle) * (outerRadius + lineLen);
                                    const endY = y + Math.sin(midAngle) * (outerRadius + lineLen);

                                    ctx.save();
                                    ctx.beginPath();
                                    ctx.moveTo(startX, startY);
                                    ctx.lineTo(endX, endY);
                                    ctx.strokeStyle = '#74E39A';
                                    ctx.lineWidth = 1;
                                    ctx.stroke();

                                    const label = chart.data.labels[index];
                                    ctx.font = '10px "Monaco", "Roboto Mono", monospace';
                                    ctx.fillStyle = text;

                                    const isRight = Math.cos(midAngle) > 0;
                                    ctx.textAlign = isRight ? 'left' : 'right';
                                    ctx.textBaseline = 'middle';
                                    const textX = endX + (isRight ? 6 : -6);

                                    ctx.fillText(label, textX, endY);
                                    ctx.restore();
                                });
                            });
                        }
                    }]
                });
            }
        },


        initLearningChart() {
            const ctx = document.getElementById('learningChart');
            if (ctx) {
                if (this.learningChartInstance) this.learningChartInstance.destroy();

                const isLight = this.isLightMode;
                // Mint for bars
                const mint = this.getThemeColor('--neon-mint'); // Will be darker in light mode
                // Text Colors: Black in light mode, Bone in dark
                const text = isLight ? '#1a1a1a' : '#E0E5D7';
                const axisText = isLight ? '#1a1a1a' : '#8A9A90';
                // Bars background
                const barBg = isLight ? 'rgba(4, 120, 87, 0.2)' : 'rgba(74, 242, 161, 0.2)'; // Darker mint bg for light mode

                this.learningChartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['UDEMY AI', 'LINKEDIN AI', 'COURSERA GENAI', 'CRASHCOURSE'],
                        datasets: [{
                            label: 'Completion',
                            data: [50, 100, 100, 60],
                            backgroundColor: barBg,
                            borderColor: mint,
                            borderWidth: 1,
                            barPercentage: 0.6
                        }]
                    },
                    options: {
                        indexAxis: 'y',
                        responsive: true,
                        maintainAspectRatio: false,
                        layout: {
                            padding: {
                                right: 30 // Add padding for labels
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                backgroundColor: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(5, 5, 5, 0.9)',
                                titleColor: mint,
                                bodyColor: isLight ? '#000' : '#E0E5D7',
                                borderColor: mint,
                                borderWidth: 1,
                                bodyFont: { family: 'Fira Code' },
                                callbacks: {
                                    label: function (context) {
                                        return context.raw + '%';
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                min: 0,
                                max: 100,
                                grid: {
                                    color: this.getThemeColor('--glass-border') || 'rgba(74, 242, 161, 0.1)'
                                },
                                ticks: {
                                    color: axisText,
                                    font: { family: 'Fira Code', size: 10 }
                                }
                            },
                            y: {
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    color: text,
                                    font: { family: 'Fira Code', size: 10 }
                                }
                            }
                        }
                    },
                    plugins: [{
                        id: 'percentLabels',
                        afterDatasetsDraw(chart, args, options) {
                            const { ctx } = chart;
                            chart.data.datasets.forEach((dataset, i) => {
                                const meta = chart.getDatasetMeta(i);
                                meta.data.forEach((bar, index) => {
                                    const value = dataset.data[index];
                                    ctx.save();
                                    ctx.fillStyle = mint; // Uses the dynamic mint color
                                    ctx.font = 'bold 10px "Fira Code"'; // Match font
                                    ctx.textAlign = 'left';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(value + '%', bar.x + 5, bar.y);
                                    ctx.restore();
                                });
                            });
                        }
                    }]
                });
            }
        },

        // Resume Data
        experience: [
            {
                company: 'TaskUs',
                role: 'Business Insights Analyst',
                years: 'May 2024 – Present',
                points: [
                    'Design and deliver data-driven decision systems to support merchant and vendor growth.',
                    'Use SQL on ETL pipelines to decompose business questions and identify patterns.',
                    'Build and maintain Sigma Computing dashboards as decision-support tools.',
                    'Validate data, assumptions, and logic to ensure accuracy and trust.'
                ],
                skills: ['SQL', 'UNIX', 'Sigma Computing', 'ETL']
            },
            {
                company: 'Amdocs',
                role: 'Technical & Business Operations Analyst',
                years: 'Dec 2022 – Dec 2023',
                points: [
                    'Supported large-scale telecom systems (CRM, billing, invoicing) in production.',
                    'Monitored batch jobs and system workflows, identifying failures.',
                    'Broke down complex system issues into actionable steps for resolution.'
                ],
                skills: ['System Monitoring', 'Workflow Analysis', 'SQL', 'Incident Mgmt']
            },
            {
                company: 'Accenture',
                role: 'DevOps / Production Systems Engineer',
                years: 'May 2021 – July 2022',
                points: [
                    'Supported enterprise-scale customer resource systems (CRS) for NA utilities.',
                    'Designed and maintained backend workflows and automation pipelines.',
                    'Diagnosed automation job failures and implemented durable fixes.',
                    'Used UNIX shell scripting, Oracle SQL, and Java for reliability.'
                ],
                skills: ['DevOps', 'UNIX Shell', 'Oracle SQL', 'Automation']
            },
            {
                company: 'Multisys Technologies',
                role: 'Mobile QA Specialist',
                years: 'Oct 2020 – Apr 2021',
                points: [
                    'Conducted end-to-end quality validation for web and mobile applications.',
                    'Designed and executed test scenarios to verify system behavior.',
                    'Identified edge cases and documented findings.'
                ],
                skills: ['QA Testing', 'Mobile Validation']
            },
            {
                company: 'Care Coach',
                role: 'Health Advocate',
                years: 'Jan 2020 – Oct 2020',
                points: [
                    'Delivered interactive user experiences through AI-assisted conversational systems.',
                    'Adapted interactions based on user responses and context.',
                    'Supported system-driven engagement while maintaining empathy.'
                ],
                skills: ['HCI', 'Workflow Design']
            },
            {
                company: 'Accenture',
                role: 'Oracle PeopleSoft Developer',
                years: 'Mar 2018 – Dec 2019',
                points: [
                    'Designed and configured enterprise HR systems for state DOT.',
                    'Translated business requirements into technical configurations.',
                    'Used Oracle SQL Developer for data-driven configurations.'
                ],
                skills: ['Oracle PeopleSoft', 'HCM', 'Oracle SQL']
            },
            {
                company: 'APL co. ptd. Ltd.',
                role: 'Intern Web Programmer',
                years: 'July 2016 – Oct 2016',
                points: ['Assisted in front-end and back-end web development tasks (PHP, MySQL).'],
                skills: ['PHP', 'MySQL', 'JS']
            }
        ],

        toggleChat() {
            this.chatOpen = !this.chatOpen;
            if (this.chatOpen) {
                this.scrollToBottom();
            }
        },

        clearChat() {
            this.chatMessages = [
                { role: 'aura', text: "Memory wiped. Ready for new inputs." }
            ];
            this.suggestions = [
                "Summarize Portfolio",
                "Who is Charlene?",
                "What is Cyberpunk?",
                "Explain Design"
            ];
        },

        formatMessage(text) {
            if (!text) return '';
            return text
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--neon-mint)]">$1</strong>') // Bold
                .replace(/\*(.*?)\*/g, '<em class="text-[var(--neon-pink)]">$1</em>') // Italic
                .replace(/^- (.*$)/gm, '<span class="block pl-2 border-l-2 border-[#2d5a45] mb-1">$1</span>') // List items
                .replace(/\n/g, '<br>'); // Newlines
        },

        async sendChatMessage() {
            const text = this.chatInput.trim();
            if (!text) return;

            // Add user message
            this.chatMessages.push({ role: 'user', text: text });
            this.chatInput = '';
            this.scrollToBottom();
            this.isTyping = true;

            // OFFLINE FALLBACKS (Instant Response)
            const offlineMap = {
                "Summarize Portfolio": "Here is quick summary:\n- **Role**: Business Insights Analyst (TaskUs)\n- **Focus**: Transitioning into AI & Automation.\n- **Experience**: 7+ years (Amdocs, Accenture, Multisys)\n- **Style**: Cyberpunk x Cottagecore.",
                "Who is Charlene?": "Charlene Cordero is a **Business Insights Analyst** at TaskUs. She has a strong background in DevOps & QA and is now **transitioning into AI & Automation**, aiming to build efficient, intelligent systems.",
                "Explain Design": "This portfolio uses a **'Neural Garden'** design:\n- **Cyberpunk**: Neon greens/pinks representing raw data.\n- **Cottagecore**: Organic textures representing life.\nIt symbolizes AI supporting human growth.",
                "What is Cottagecore?": "**Cottagecore** celebrates simple, rural living. Here, it represents the 'Soft Life'—using high-tech automation to reclaim time for meaningful experiences.",
                "What is Cyberpunk?": "**Cyberpunk** is a subgenre of sci-fi usually featuring advanced tech in a dystopian future. In this portfolio, I use its **neon aesthetics** to represent the power of data and automation.",
                "Explain Code Architecture": "This site is a **serverless SPA**:\n- **Frontend**: Alpine.js + Tailwind.\n- **Backend**: Node.js (Cloud Run).\n- **AI**: Gemini 1.5 Flash.\n- **Performance**: Zero-cache, lightweight DOM."
            };

            const lowerText = text.toLowerCase();
            let offlineReply = null;

            // 1. Direct Match
            if (offlineMap[text]) {
                offlineReply = offlineMap[text];
            }
            // 2. Fuzzy / Keyword Match
            else if (lowerText.includes('who') && lowerText.includes('charlene') || lowerText === 'charlene') {
                offlineReply = "Charlene is a **Business Insights Analyst** transitioning into **AI Architecture**. \n<br><button onclick=\"window.location.href='#'; document.querySelector('[x-data]').__x.$data.currentSection = 'about'\" class='mt-2 text-xs border border-[#4AF2A1] text-[#4AF2A1] px-2 py-1 rounded hover:bg-[#4AF2A1] hover:text-black transition-colors uppercase'>Read Full Bio >></button>";
            }
            else if (lowerText.includes('design') || lowerText.includes('style')) offlineReply = offlineMap["Explain Design"];
            else if (lowerText.includes('code') || lowerText.includes('stack')) offlineReply = offlineMap["Explain Code Architecture"];
            else if (lowerText.includes('summary') || lowerText.includes('portfolio') || lowerText.includes('resume')) offlineReply = offlineMap["Summarize Portfolio"];
            else if (lowerText.includes('cyberpunk')) offlineReply = offlineMap["What is Cyberpunk?"];

            // 3. Generic Keyword Fallbacks (for free typing)
            else if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('hire') || lowerText === 'contact') {
                offlineReply = "Open a frequency to Charlene via the **Transmission Log**.\n<br><button onclick=\"document.querySelector('[x-data]').__x.$data.currentSection = 'contact'\" class='mt-2 text-xs border border-[#FF2E88] text-[#FF2E88] px-2 py-1 rounded hover:bg-[#FF2E88] hover:text-black transition-colors uppercase'>Open Contact Form >></button>";
            }
            else if (lowerText.includes('linkedin') || lowerText === 'linkedin') {
                offlineReply = "Connect with Charlene on the professional network.\n<br><a href='https://linkedin.com/in/charlenecordero' target='_blank' class='mt-2 inline-block text-xs border border-[#0077b5] text-[#0077b5] px-2 py-1 rounded hover:bg-[#0077b5] hover:text-white transition-colors uppercase'><i class='fa-brands fa-linkedin'></i> View Profile >></a>";
            }
            else if (lowerText.includes('skill') || lowerText.includes('tech')) {
                offlineReply = "My toolkit includes:\n- **Languages**: Python, SQL, JavaScript\n- **Cloud**: Google Cloud (Cloud Run, BigQuery)\n- **AI**: Gemini, OpenAI, fine-tuning\n- **DevOps**: Docker, Jenkins, Unix";
            }

            if (offlineReply) {
                setTimeout(() => {
                    this.chatMessages.push({ role: 'aura', text: this.formatMessage(offlineReply) });
                    this.isTyping = false;
                    this.scrollToBottom();
                }, 600);
                return;
            }

            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text })
                });

                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                this.chatMessages.push({ role: 'aura', text: this.formatMessage(data.reply) });
            } catch (error) {
                console.error('Chat Error:', error);

                // Smart Error Fallback (instead of generic error)
                const fallbackResponses = [
                    "I'm currently operating in **Offline Mode** (Neural Link severed). But I can still tell you about Charlene's **Skills**, **Projects**, or **Design Philosophy**.",
                    "My cloud uplinks are unreachable, but my local database is active. Ask me about **Cyberpunk**, **Cottagecore**, or **Code Architecture**!"
                ];
                const randomFallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];

                this.chatMessages.push({
                    role: 'aura',
                    text: this.formatMessage(randomFallback)
                });
            } finally {
                this.isTyping = false;
                this.scrollToBottom();
            }
        },

        scrollToBottom() {
            this.$nextTick(() => {
                const chatContainer = document.getElementById('chat-messages');
                if (chatContainer) {
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                }
            });
        },

        init() {
            console.log("CORE SYSTEM v2.1 LOADED - " + new Date().toISOString());
            this.refreshCharts();

            // Initial Typewriter
            this.typeTitle(this.currentSection);

            // Watch for section changes
            this.$watch('currentSection', (value) => {
                this.typeTitle(value);
            });

            // Start scanline effect
            setTimeout(() => {
                document.querySelector('.scanlines').style.opacity = '0.15';
            }, 100);

            // Generate Falling Petals
            this.generatePetals();
        },

        generatePetals() {
            const container = document.getElementById('falling-petals');
            if (container) {
                for (let i = 0; i < 20; i++) {
                    const petal = document.createElement('div');
                    petal.classList.add('petal');
                    petal.style.left = Math.random() * 100 + '%';
                    petal.style.animationDuration = Math.random() * 5 + 5 + 's';
                    petal.style.animationDelay = Math.random() * 5 + 's';
                    container.appendChild(petal);
                }
            }
        }
    }
}


