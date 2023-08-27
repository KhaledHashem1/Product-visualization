const tutorialVideo = document.getElementById("tutorialVideo");
const showButton = document.getElementById("showTutorialButton");
document.addEventListener("markerFound", function(){
    if(window.getComputedStyle(tutorialVideo).display === "none"){
        showButton.style.setProperty("display", "inline-block");
    }
});
document.addEventListener("markerLost", function(){
    showButton.style.setProperty("display", "none");
});