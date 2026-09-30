document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const codeSections = document.querySelectorAll('.code-section');
    const bgOverlay = document.getElementById('bg-overlay');
    const body = document.body;

    const gradients = {
        'kok-kod': 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        'oq-kod': 'linear-gradient(135deg, #141e30, #243b55)',
        'qizil-kod': 'linear-gradient(135deg, #4b134f, #c94b4b)'
    };

    // Initialize with kok-kod theme
    body.classList.add('theme-kok');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all buttons
            navButtons.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const targetId = btn.getAttribute('data-target');

            // Hide all sections
            codeSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show target section
            document.getElementById(targetId).classList.add('active');

            // Update background
            bgOverlay.style.background = gradients[targetId];

            // Update theme class on body for specific styling tweaks
            body.className = ''; // clear classes
            if (targetId === 'kok-kod') body.classList.add('theme-kok');
            if (targetId === 'oq-kod') body.classList.add('theme-white');
            if (targetId === 'qizil-kod') body.classList.add('theme-red');
        });
    });
});
