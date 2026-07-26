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

    const timeline = document.getElementById("flowerTossTimelineEn");
    const button = document.querySelector("#invitation-en .btn-flower-toss-toggle");

    if (!button) return;

    if (timeline.classList.contains("collapsed")) {
        button.classList.remove("active");
        button.innerHTML = "📋 Click here to view detailed Flower Tossing program";
    } else {
        button.classList.add("active");
        button.innerHTML = "✔ Hide detailed Flower Tossing program";
    }
}