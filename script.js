// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Optional: Change icon based on state
            if (navMenu.classList.contains('active')) {
                navToggle.innerHTML = '<i class="fas fa-times"></i>'; // Close icon
            } else {
                navToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
            }
        });
        
        // Close menu when a link is clicked (on mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    navMenu.classList.remove('active');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    }
    
    // Initial setup: Load the profile image dynamically (if possible)
    const avatarContainer = document.querySelector('.profile-avatar');
    if (avatarContainer) {
        avatarContainer.innerHTML = '<img src="https://i.postimg.cc/dVRBM6Kc/aes-muin.jpg" alt="Muntasir Profile Picture">';
    }
    
    const heroPhotoContainer = document.querySelector('.photo-container');
    if (heroPhotoContainer) {
         heroPhotoContainer.innerHTML = '<img style="height: 300px;width: 300px;" src="https://i.postimg.cc/dVRBM6Kc/aes-muin.jpg" alt="Muntasir Photo">';
    }
});