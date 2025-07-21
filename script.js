 // Initialize Particles.js
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.6, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });

        // Chart.js Configurations
        // Deep Learning Adoption Chart
        const ctxDL = document.getElementById('dlChart').getContext('2d');
        new Chart(ctxDL, {
            type: 'bar',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Deep Learning Adoption (%)',
                    data: [20, 35, 50, 65, 75, 85, 90],
                    backgroundColor: 'rgba(99, 102, 241, 0.8)',
                    borderColor: 'rgba(99, 102, 241, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                scales: {
                    y: { 
                        beginAtZero: true, 
                        title: { display: true, text: 'Adoption Rate (%)', font: { size: 10 } },
                        ticks: { font: { size: 10 } }
                    },
                    x: { 
                        title: { display: true, text: 'Year', font: { size: 10 } },
                        ticks: { font: { size: 10 } }
                    }
                },
                plugins: { 
                    legend: { display: true, position: 'top', labels: { font: { size: 10 } } }
                }
            }
        });

        // NLP Market Size Chart
        const ctxNLP = document.getElementById('nlpChart').getContext('2d');
        new Chart(ctxNLP, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'NLP Market Size ($B)',
                    data: [2, 3.5, 5, 7.5, 10, 13, 16],
                    fill: false,
                    borderColor: 'rgba(139, 92, 246, 1)',
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                scales: {
                    y: { 
                        beginAtZero: true, 
                        title: { display: true, text: 'Market Size ($B)', font: { size: 10 } },
                        ticks: { font: { size: 10 } }
                    },
                    x: { 
                        title: { display: true, text: 'Year', font: { size: 10 } },
                        ticks: { font: { size: 10 } }
                    }
                },
                plugins: { 
                    legend: { display: true, position: 'top', labels: { font: { size: 10 } } }
                }
            }
        });

        // Computer Vision Applications Chart
        const ctxCV = document.getElementById('cvChart').getContext('2d');
        new Chart(ctxCV, {
            type: 'bar',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Computer Vision Applications',
                    data: [100, 150, 220, 300, 400, 500, 620],
                    backgroundColor: 'rgba(236, 72, 153, 0.8)',
                    borderColor: 'rgba(236, 72, 153, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2,
                scales: {
                    y: { 
                        beginAtZero: true, 
                        title: { display: true, text: 'Applications (Thousands)', font: { size: 10 } },
                        ticks: { font: { size: 10 } }
                    },
                    x: { 
                        title: { display: true, text: 'Year', font: { size: 10 } },
                        ticks: { font: { size: 10 } }
                    }
                },
                plugins: { 
                    legend: { display: true, position: 'top', labels: { font: { size: 10 } } }
                }
            }
        });

        // Scroll to Top Functionality
        const scrollToTopBtn = document.querySelector('.scroll-to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        });

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Contact Form Handling
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const feedback = document.getElementById('formFeedback');

            if (name && email && message) {
                feedback.textContent = `Thank you, ${name}! Your message has been received.`;
                feedback.className = 'text-center text-green-400 text-sm';
                this.reset();
            } else {
                feedback.textContent = 'Please fill out all fields.';
                feedback.className = 'text-center text-red-400 text-sm';
            }
        });