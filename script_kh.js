/* =================================================== */
/*                     SCRIPT.JS                       */
/*                  (Khmer Version)                    */
/* =================================================== */

/**
 * តក្កវិជ្ជានៃការបញ្ជាចំណុចប្រទាក់អ្នកប្រើប្រាស់ (UI Logic)
 * គ្រប់គ្រងលើការបង្ហាញ TimeLine, Scroll និងប៊ូតុងរុញ
 */

// --- ១. មុខងារ ពន្លាត/បង្រួម កម្មវិធី (Timeline Toggle) ---
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');
    
    if (!timeline) return;

    // ផ្លាស់ប្តូរ Class 'collapsed'
    const isCollapsed = timeline.classList.toggle('collapsed');
    
    // ប្តូរអត្ថបទលើប៊ូតុងតាមស្ថានភាព
    if (isCollapsed) {
        toggleBtn.innerHTML = '📋 សូមចុចទីនេះដើម្បីមើលកម្មវិធីពិធីការលម្អិត';
    } else {
        toggleBtn.innerHTML = '✨ សូមចុចទីនេះដើម្បីបិទកម្មវិធីពិធីការលម្អិត';
    }
}

// --- ២. មុខងារ ប៊ូតុងរុញទៅលើវិញ (Scroll To Top) ---
const scrollTopBtn = document.getElementById('scrollTopBtn');

// តាមដានសកម្មភាព Scroll លើទំព័រ
window.onscroll = function() {
    handleScrollBehavior();
};

function handleScrollBehavior() {
    if (!scrollTopBtn) return;
    
    // បង្ហាញប៊ូតុងនៅពេល Scroll ចុះក្រោមលើសពី 300px
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

// មុខងាររុញទៅលើបង្អស់ដោយរលូន
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// --- ៣. មុខងារ បើកតំណភ្ជាប់ខាងក្រៅ ---
function openAiSystem() {
    window.open("https://tharahuokaing.github.io/ai/", "_blank");
}

function openKohChenMap() {
    window.open("https://maps.app.goo.gl/5kikd7zafHEAujVJ6", "_blank");
}
