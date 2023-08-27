const toturialVideo = document.getElementById("tutorialVideo");
const showButton = document.getElementById("showTutorialButton");
const arr = ["Nreal8", "Nreal17"];
for(let i=0; i<arr.length; i++){
    document.getElementById(arr[i]).addEventListener("markerFound", function(){
        if(window.getComputedStyle(toturialVideo).display === "none"){
            showButton.style.setProperty("display", "inline-block");
        }
    });
    document.getElementById(arr[i]).addEventListener("markerLost", function(){
        showButton.style.setProperty("display", "none");
    });
}