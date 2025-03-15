// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only scroll if the href is not just '#'
        if (href !== '#') {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add active class to current navigation item
const currentLocation = location.href;
const menuItems = document.querySelectorAll('nav a');
const dropdownItems = document.querySelectorAll('.dropdown-content a');

menuItems.forEach(item => {
    if(item.href === currentLocation) {
        item.classList.add('active');
        // If the active item is in a dropdown, also activate the parent
        const parentDropdown = item.closest('.dropdown');
        if(parentDropdown) {
            parentDropdown.querySelector('.dropbtn').classList.add('active');
        }
    }
});

dropdownItems.forEach(item => {
    if(item.href === currentLocation) {
        item.classList.add('active');
        // Activate the parent dropdown button
        const parentDropdown = item.closest('.dropdown');
        if(parentDropdown) {
            parentDropdown.querySelector('.dropbtn').classList.add('active');
        }
    }
});

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Add hover effect for dropdowns on mobile
if(window.innerWidth <= 768) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            const content = dropdown.querySelector('.dropdown-content');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
}

function toggleMenu() {
    document.getElementById("mobileNav").classList.add("active");
}

function closeMenu() {
    document.getElementById("mobileNav").classList.remove("active");
}