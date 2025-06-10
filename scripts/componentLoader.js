const components = [
    { id: 'nav-container', file: 'nav.html' },
    { id: 'hero-container', file: 'hero.html' },
    { id: 'about-container', file: 'about.html' },
    { id: 'skills-container', file: 'skills.html' },
    { id: 'experience-container', file: 'experience.html' },
    { id: 'education-container', file: 'education.html' },
    { id: 'certificates-container', file: 'certificates.html' },
    { id: 'achievements-container', file: 'achievements.html' },
    { id: 'contact-container', file: 'contact.html' }
];

export async function loadComponents() {
    try {
        for (const component of components) {
            const response = await fetch(`components/${component.file}`);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const html = await response.text();
            document.getElementById(component.id).innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}