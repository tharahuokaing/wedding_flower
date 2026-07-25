/**
 * Interactive UI Logic
 * Handles interactive timeline, scroll behavior, and navigation elements.
 */

// --- 1. Timeline Toggle Logic ---
function toggleProgram() {
    const timeline = document.getElementById('eventTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');
    
    if (!timeline) return;

    // Toggle the 'collapsed' class
    const isCollapsed = timeline.classList.toggle('collapsed');
    
    // Update button text conditionally
    if (isCollapsed) {
        toggleBtn.innerHTML = '📋 Click here to view detailed program';
    } else {
        toggleBtn.innerHTML = '✨ Click here to hide detailed program';
    }
}

// --- 2. Scroll to Top Button Logic ---
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Monitor page scrolling to dynamically display the button
window.onscroll = function() {
    handleScrollBehavior();
};

function handleScrollBehavior() {
    if (!scrollTopBtn) return;
    
    // Show button if page is scrolled past 300px from the top
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
        // Small delay to let opacity transition work if defined in your CSS
        setTimeout(() => {
            scrollTopBtn.style.opacity = "1";
        }, 10);
    } else {
        scrollTopBtn.style.opacity = "0";
        // Match CSS transition time before setting display to none
        setTimeout(() => {
            if (scrollTopBtn.style.opacity === "0") {
                scrollTopBtn.style.display = "none";
            }
        }, 300);
    }
}

// Smooth scroll to the top function triggered by the button action
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// --- 3. External System & Map Navigation ---
function openAiSystem() {
    window.open("https://tharahuokaing.github.io/ai/", "_blank");
}

function openKohChenMap() {
    window.open("https://maps.app.goo.gl/5kikd7zafHEAujVJ6", "_blank");
}
