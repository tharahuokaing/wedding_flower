/* =================================================== */
/*                    SCRIPT_EN.JS                     */
/*                  (English Version)                  */
/* =================================================== */

/**
 * Core User Interface Control Logic
 * Handles interactive timeline, smooth scroll, and buttons.
 */

// --- 1. Timeline Display Control (Toggle Logic) ---
function toggleProgram() {
    const timeline = document.getElementById('eventTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');
    
    if (!timeline) return;

    // Toggle the 'collapsed' visibility state
    const isCollapsed = timeline.classList.toggle('collapsed');
    
    // Dynamically update button label
    if (isCollapsed) {
        toggleBtn.innerHTML = '📋 Click here to view detailed program';
    } else {
        toggleBtn.innerHTML = '✨ Click here to hide detailed program';
    }
}

// --- 2. Scroll to Top Behavior ---
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Track viewport scrolling position
window.onscroll = function() {
    handleScrollBehavior();
};

function handleScrollBehavior() {
    if (!scrollTopBtn) return;
    
    // Display button when scrolled past 300px threshold
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
        setTimeout(() => {
            scrollTopBtn.style.opacity = "1";
        }, 10);
    } else {
        scrollTopBtn.style.opacity = "0";
        setTimeout(() => {
            if (scrollTopBtn.style.opacity === "0") {
                scrollTopBtn.style.display = "none";
            }
        }, 300);
    }
}

// Smooth scroll to top execution
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// --- 3. External Links & Navigation ---
function openAiSystem() {
    window.open("https://tharahuokaing.github.io/ai/", "_blank");
}

function openKohChenMap() {
    window.open("https://maps.app.goo.gl/5kikd7zafHEAujVJ6", "_blank");
}
