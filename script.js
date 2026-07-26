function toggleFlowerTossKh() {
    const timeline = document.getElementById("flowerTossTimelineKh");

    timeline.classList.toggle("collapsed");

    if (timeline.classList.contains("collapsed")) {
        timeline.style.maxHeight = "0";
    } else {
        timeline.style.maxHeight = timeline.scrollHeight + "px";
    }
}