export function initializeSkillAnimations() {
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Animation function
    function animateSkill(progressBar, percentageElement) {
        const targetValue = parseInt(progressBar.getAttribute('data-width'));
        if (isNaN(targetValue)) return;

        let current = 0;
        const duration = 2000;
        const interval = 20;
        const steps = duration / interval;
        const increment = targetValue / steps;

        // Set initial state
        progressBar.style.width = '0%';
        percentageElement.textContent = '0%';

        const timer = setInterval(() => {
            current += increment;
            
            if (current >= targetValue) {
                current = targetValue;
                clearInterval(timer);
            }
            
            progressBar.style.width = `${Math.round(current)}%`;
            percentageElement.textContent = `${Math.round(current)}%`;
        }, interval);
    }

    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItem = entry.target;
                const progressBar = skillItem.querySelector('.skill-progress, .soft-skill-progress');
                const percentageElement = skillItem.querySelector('.skill-percentage');
                
                if (progressBar && percentageElement && !skillItem.classList.contains('animated')) {
                    animateSkill(progressBar, percentageElement);
                    skillItem.classList.add('animated');
                }
            }
        });
    }, {
        threshold: 0.2
    });

    // Observe all skill items
    document.querySelectorAll('.skill-item, .soft-skill-item').forEach(item => {
        observer.observe(item);
    });
}