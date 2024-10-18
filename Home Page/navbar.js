
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        
        navItems.forEach(link => link.classList.remove('active'));
        
        this.classList.add('active');
    });
});
