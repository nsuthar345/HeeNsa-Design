// 1. Loader ko hide karna jab page load ho jaye
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        // Upar ki taraf slide hokar gayab hoga
        loader.style.transform = 'translateY(-100%)';
    }, 2000); // 2 second ka wait
});

// 2. Scroll Animation (Cards dheere se upar aayenge)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Sabhi cards par animation apply karna
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
    observer.observe(card);
});
