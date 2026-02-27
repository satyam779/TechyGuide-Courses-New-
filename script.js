(function() {
    'use strict';

    const DOM_STATE = { loading: 'loading', interactive: 'interactive', complete: 'complete' };
    const MODAL_CLOSE_MS = 140;

    function runOnDomReady(callback) {
        if (document.readyState === DOM_STATE.loading) {
            document.addEventListener('DOMContentLoaded', callback, { once: true });
        } else {
            callback();
        }
    }

    const courseDetails = {
        Robotics: {
            curriculum: ['Arduino Programming & Hardware Setup', 'Sensor Integration (Ultrasonic, Camera, GPS)', 'Motor Control & Servo Programming', 'Robot Assembly & Mechanical Design', 'AI Integration & Machine Learning', 'Advanced Robotics Projects'],
            description: 'Build and program autonomous robots using Arduino, Raspberry Pi, and advanced sensors. Learn mechanical engineering principles, AI integration, and real-world robotics applications.',
            duration: '8 weeks intensive program',
            projects: ['Line Following Robot', 'Obstacle Avoiding Car', 'Voice Controlled Assistant', 'Smart Home Automation'],
            skills: ['Hardware Programming', 'Sensor Integration', 'AI & ML', 'Mechanical Design']
        },
        Coding: {
            curriculum: ['Python Fundamentals & Syntax', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management & SQL', 'Web Development Basics', 'Final Capstone Project'],
            description: 'Master programming fundamentals with Python, JavaScript, and modern development practices. Build real applications and learn industry-standard coding techniques.',
            duration: '10 weeks comprehensive course',
            projects: ['Personal Finance Tracker', 'Weather Prediction App', 'E-commerce Website', 'Data Analysis Dashboard'],
            skills: ['Python Programming', 'Web Development', 'Database Design', 'Problem Solving']
        },
        AI: {
            curriculum: ['Introduction to Artificial Intelligence', 'Machine Learning Algorithms', 'Neural Networks & Deep Learning', 'Computer Vision & Image Processing', 'Natural Language Processing', 'AI Ethics & Future Applications'],
            description: 'Explore the fascinating world of AI and machine learning. Build intelligent systems that can learn, adapt, and make decisions like humans.',
            duration: '12 weeks advanced program',
            projects: ['Image Recognition System', 'Chatbot Development', 'Recommendation Engine', 'Predictive Analytics Tool'],
            skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Science']
        },
        AppDev: {
            curriculum: ['Mobile App Design Principles', 'React Native Development', 'Database Integration & APIs', 'User Interface Design', 'App Store Optimization', 'Publishing & Monetization'],
            description: 'Create stunning mobile applications for iOS and Android. Learn modern frameworks, UI/UX design, and app store deployment strategies.',
            duration: '8 weeks practical course',
            projects: ['Social Media App', 'E-commerce Mobile App', 'Fitness Tracking App', 'Food Delivery Platform'],
            skills: ['React Native', 'UI/UX Design', 'API Integration', 'App Publishing']
        },
        WebDev: {
            curriculum: ['HTML5 & CSS3 Fundamentals', 'JavaScript ES6+ Programming', 'Frontend Frameworks (React)', 'Backend Development (Node.js)', 'Database Management', 'Full Stack Project Development'],
            description: 'Build modern, responsive websites using cutting-edge technologies. Master both frontend and backend development for complete web solutions.',
            duration: '10 weeks full-stack program',
            projects: ['Personal Portfolio Website', 'E-commerce Platform', 'Blog Management System', 'Real-time Chat Application'],
            skills: ['Frontend Development', 'Backend Programming', 'Database Design', 'Full Stack Architecture']
        },
        IoT: {
        curriculum: ['Introduction to IoT & Embedded Systems', 'Microcontrollers & Sensors', 'Arduino & Raspberry Pi Programming', 'Wireless Communication Protocols', 'Cloud Integration & Data Analytics', 'IoT Security & Deployment'],
        description: 'Design and build smart connected systems using sensors, microcontrollers, and cloud platforms. Learn automation, real-time monitoring, and secure IoT deployment strategies.',
        duration: '12 weeks hands-on program',
        projects: ['Smart Home Automation System', 'Weather Monitoring Station', 'IoT-Based Health Tracker', 'Smart Agriculture System'],
        skills: ['Embedded Systems', 'Sensor Integration', 'Wireless Communication', 'Cloud Connectivity']
        }
    };

    function initializeHeroBackground() {
        const container = document.getElementById('heroBackgroundAnimation');
        if (!container || container.children.length > 0) return;

        container.innerHTML = `
            <svg class="hero-scene" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <defs>
                    <linearGradient id="heroSky" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#002a52"></stop>
                        <stop offset="55%" stop-color="#0a4a85"></stop>
                        <stop offset="100%" stop-color="#1a6cb0"></stop>
                    </linearGradient>
                    <radialGradient id="heroSun" cx="0.5" cy="0.5" r="0.5">
                        <stop offset="0%" stop-color="#ffeaa6" stop-opacity="0.85"></stop>
                        <stop offset="100%" stop-color="#ffeaa6" stop-opacity="0"></stop>
                    </radialGradient>
                </defs>
                <rect width="1440" height="900" fill="url(#heroSky)"></rect>
                <g class="hero-clouds">
                    <ellipse class="hero-cloud hero-cloud-a" cx="220" cy="220" rx="170" ry="62"></ellipse>
                    <ellipse class="hero-cloud hero-cloud-b" cx="1240" cy="250" rx="210" ry="70"></ellipse>
                    <ellipse class="hero-cloud hero-cloud-c" cx="820" cy="160" rx="140" ry="52"></ellipse>
                </g>
                <g class="hero-floating-icons">
                    <text class="hero-icon hero-icon-a" x="160" y="190">{ }</text>
                    <text class="hero-icon hero-icon-b" x="1060" y="300">&lt;/&gt;</text>
                    <text class="hero-icon hero-icon-c" x="560" y="120">AI</text>
                </g>
                <path class="hero-hill-back" d="M0 640 C220 570, 520 700, 760 620 C980 545, 1210 650, 1440 600 L1440 900 L0 900 Z"></path>
                <path class="hero-hill-front" d="M0 700 C260 620, 520 760, 760 700 C980 650, 1200 760, 1440 710 L1440 900 L0 900 Z"></path>
                <g class="hero-gear-system">
                    <g class="hero-gear hero-gear-a" transform="translate(260 665)">
                        <circle r="44"></circle>
                        <line x1="-44" y1="0" x2="44" y2="0"></line>
                        <line x1="0" y1="-44" x2="0" y2="44"></line>
                        <line x1="-31" y1="-31" x2="31" y2="31"></line>
                        <line x1="-31" y1="31" x2="31" y2="-31"></line>
                        <circle class="hero-gear-center" r="12"></circle>
                    </g>
                    <g class="hero-gear hero-gear-b" transform="translate(350 724)">
                        <circle r="30"></circle>
                        <line x1="-30" y1="0" x2="30" y2="0"></line>
                        <line x1="0" y1="-30" x2="0" y2="30"></line>
                        <line x1="-21" y1="-21" x2="21" y2="21"></line>
                        <line x1="-21" y1="21" x2="21" y2="-21"></line>
                        <circle class="hero-gear-center" r="8"></circle>
                    </g>
                </g>
                <g class="hero-play-scene">
                    <g class="hero-kid hero-kid-coder" transform="translate(446 652)">
                        <circle class="kid-head" cx="0" cy="-82" r="26"></circle>
                        <rect class="kid-body kid-body-coder" x="-20" y="-48" width="40" height="64" rx="19"></rect>
                        <line class="kid-leg" x1="-8" y1="16" x2="-14" y2="72"></line>
                        <line class="kid-leg" x1="8" y1="16" x2="16" y2="72"></line>
                        <line class="kid-arm" x1="-20" y1="-18" x2="-50" y2="-30"></line>
                        <line class="kid-arm" x1="20" y1="-18" x2="46" y2="-8"></line>
                    </g>
                    <g class="hero-kid hero-kid-left" transform="translate(520 645)">
                        <circle class="kid-head" cx="0" cy="-86" r="30"></circle>
                        <rect class="kid-body kid-body-left" x="-24" y="-52" width="48" height="70" rx="22"></rect>
                        <line class="kid-leg" x1="-11" y1="18" x2="-22" y2="78"></line>
                        <line class="kid-leg" x1="11" y1="18" x2="24" y2="78"></line>
                        <line class="kid-arm" x1="-24" y1="-18" x2="-56" y2="8"></line>
                        <g class="kid-arm-wave">
                            <line class="kid-arm" x1="24" y1="-18" x2="60" y2="-58"></line>
                        </g>
                    </g>
                    <g class="hero-kid hero-kid-right" transform="translate(940 650)">
                        <circle class="kid-head" cx="0" cy="-84" r="28"></circle>
                        <rect class="kid-body kid-body-right" x="-22" y="-50" width="44" height="66" rx="20"></rect>
                        <line class="kid-leg" x1="-10" y1="16" x2="-24" y2="76"></line>
                        <line class="kid-leg" x1="10" y1="16" x2="20" y2="76"></line>
                    </g>
                    <g class="hero-robot" transform="translate(735 642)">
                        <rect class="robot-body" x="-56" y="-78" width="112" height="128" rx="24"></rect>
                        <rect class="robot-face" x="-40" y="-56" width="80" height="48" rx="12"></rect>
                        <circle class="robot-eye robot-eye-left" cx="-16" cy="-33" r="6"></circle>
                        <circle class="robot-eye robot-eye-right" cx="16" cy="-33" r="6"></circle>
                        <rect class="robot-mouth" x="-16" y="-18" width="32" height="6" rx="3"></rect>
                        <line class="robot-antenna" x1="0" y1="-78" x2="0" y2="-102"></line>
                        <circle class="robot-signal" cx="0" cy="-110" r="8"></circle>
                    </g>
                </g>
            </svg>
        `;
    }

    function loadLottieAnimations() {
        if (typeof lottie === 'undefined') {
            console.warn('Lottie library not loaded');
            return;
        }

        const containers = document.querySelectorAll('[data-lottie]:not([data-loaded])');
        
        containers.forEach(container => {
            const jsonPath = container.dataset.lottie;
            if (!jsonPath) return;

            container.setAttribute('data-loaded', 'true');
            
            try {
                lottie.loadAnimation({
                    container: container,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: jsonPath,
                    rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                    }
                });
            } catch (error) {
                console.error(`Failed to load Lottie: ${jsonPath}`, error);
                container.setAttribute('data-loaded', 'false');
            }
        });
    }

    function openModal(courseKey) {
        const modal = document.getElementById('courseModal');
        const title = document.getElementById('modalTitle');
        const curriculum = document.getElementById('modalCurriculum');
        
        if (!modal || !title || !curriculum) return;

        title.textContent = courseKey;

        const course = courseDetails[courseKey];
        if (course) {
            curriculum.innerHTML = `
                <div style="text-align: left; max-width: 800px; margin: 0 auto;">
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: var(--primary-blue); margin: 0 0 5px 0;">Course Description</h4>
                        <p style="line-height: 1.4; color: #555; margin: 0;">${course.description}</p>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: var(--primary-blue); margin: 0 0 5px 0;">Duration</h4>
                        <p style="color: #666; font-weight: 500; margin: 0;">${course.duration}</p>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: var(--primary-blue); margin: 0 0 8px 0;">Curriculum</h4>
                        ${course.curriculum.map((item, index) => `
                            <div style="padding: 6px 0; border-bottom: 1px solid #f0f0f0; display: flex; align-items: center;">
                                <span style="color: var(--primary-orange); font-weight: bold; margin-right: 6px;">&#10003;</span>
                                <span style="color: #444;">Module ${index + 1}: ${item}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="color: var(--primary-blue); margin: 0 0 8px 0;">Projects You'll Build</h4>
                        ${course.projects.map(project => `
                            <div style="padding: 4px 0; color: #555;">
                                <span style="color: var(--primary-orange); margin-right: 5px;">&#128640;</span>${project}
                            </div>
                        `).join('')}
                    </div>
                    <div>
                        <h4 style="color: var(--primary-blue); margin: 0 0 8px 0;">Skills You'll Master</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                            ${course.skills.map(skill => `
                                <span style="background: #f0f8ff; color: var(--primary-blue); padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 500;">${skill}</span>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } else {
            curriculum.innerHTML = '<div>Course details coming soon...</div>';
        }

        modal.classList.remove('closing');
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
        
        requestAnimationFrame(() => {
            modal.classList.add('show');
        });
        
        document.body.classList.add('modal-open');
    }

    let modalCloseTimer = null;

    function closeModal() {
        const modal = document.getElementById('courseModal');
        if (!modal) return;

        if (!modal.classList.contains('show') || modal.classList.contains('closing')) return;

        modal.classList.remove('show');
        modal.classList.add('closing');

        if (modalCloseTimer) clearTimeout(modalCloseTimer);

        modalCloseTimer = setTimeout(() => {
            modal.style.display = 'none';
            modal.classList.remove('closing');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
            modalCloseTimer = null;
        }, MODAL_CLOSE_MS);
    }

    function setupModalHandlers() {
        const modal = document.getElementById('courseModal');
        if (!modal) return;

        const closeBtn = modal.querySelector('.close-modal');
        
        document.addEventListener('click', (e) => {
            const trigger = e.target.closest('.know-more');
            if (!trigger) return;

            e.preventDefault();
            openModal(trigger.dataset.course);
        });
        
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });
    }

    function setupReelsHandlers() {
        const reelsContainer = document.querySelector('.reels-container');
        const prevBtn = document.querySelector('.prev-arrow');
        const nextBtn = document.querySelector('.next-arrow');
        
        if (!reelsContainer) return;

        const scrollAmount = 600;

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                reelsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                reelsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        reelsContainer.addEventListener('click', (e) => {
            const reelCard = e.target.closest('.reel-card');
            if (!reelCard) return;

            const video = reelCard.querySelector('.reel-bg');
            const playButton = reelCard.querySelector('.play-btn-circle');
            
            if (!video || !playButton) return;
            
            const allVideos = document.querySelectorAll('.reel-bg');
            const allButtons = document.querySelectorAll('.play-btn-circle');
            
            allVideos.forEach(v => {
                if (v !== video) {
                    v.pause();
                    v.currentTime = 0;
                }
            });
            
            allButtons.forEach(btn => {
                btn.style.display = 'flex';
            });
            
            if (video.paused) {
                video.play().catch(() => {});
                playButton.style.display = 'none';
            } else {
                video.pause();
                playButton.style.display = 'flex';
            }
            
            video.onended = () => {
                playButton.style.display = 'flex';
            };
        });
    }

    function initializeStoryTrack() {
        const track = document.querySelector('.story-track');
        if (!track || track.dataset.loopReady === 'true') return;

        const items = Array.from(track.children);
        if (items.length < 2) return;

        items.forEach((item) => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });

        track.dataset.loopReady = 'true';
    }

    function initializeSectionRevealAnimations() {
        const selectors = ['.courses-section .card', '.future-point'];
        const revealTargets = [];

        selectors.forEach((selector) => {
            document.querySelectorAll(selector).forEach((element, index) => {
                element.classList.add('section-animate');
                element.style.setProperty('--reveal-order', String(index));
                revealTargets.push(element);
            });
        });

        if (!revealTargets.length) return;

        if (!('IntersectionObserver' in window)) {
            revealTargets.forEach((element) => element.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -10% 0px'
        });

        revealTargets.forEach((element) => observer.observe(element));
    }

    function init() {
        initializeHeroBackground();
        loadLottieAnimations();
        setupModalHandlers();
        setupReelsHandlers();
        initializeStoryTrack();
        initializeSectionRevealAnimations();
    }

    runOnDomReady(init);
})();
