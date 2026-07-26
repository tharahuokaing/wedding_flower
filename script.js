function toggleTimeline(id) {
    const timeline = document.getElementById(id);

    if (!timeline) return;

    timeline.classList.toggle("collapsed");

    if (timeline.classList.contains("collapsed")) {
        timeline.style.maxHeight = "0";
    } else {
        timeline.style.maxHeight = timeline.scrollHeight + "px";
    }
}

function toggleFlowerTossKh() {
    toggleTimeline("flowerTossTimelineKh");
}

function toggleFlowerTossEn() {
    toggleTimeline("flowerTossTimelineEn");
}