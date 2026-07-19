/**
 * Wedding Invitation Core UI Logic
 * Handles interactive timeline, scroll behavior, and navigation elements.
 */

// --- 1. Timeline Toggle Logic ---
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');
    
    if (!timeline) return;

    // Toggle the 'collapsed' class
    const isCollapsed = timeline.classList.toggle('collapsed');
    
    // Update button text or state conditionally if desired
    if (isCollapsed) {
        toggleBtn.innerHTML = '📋 សូមចុចទីនេះដើម្បីមើលកម្មវិធីបោះបាច់ផ្កាមង្គលលម្អិត';
    } else {
        toggleBtn.innerHTML = '✨ សូមចុចទីនេះដើម្បីលាក់កម្មវិធីពិធីការលម្អិត';
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
