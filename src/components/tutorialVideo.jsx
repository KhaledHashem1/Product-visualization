import React, { Component } from 'react';
import "../Styling/TutorialVideo.css"
class TutorialVideo extends Component {
    state = { 
        arr : ["Nreal8", "Nreal17"] // Nreal images' numbers
     } 
    render() { 
        return (
            <div>
                <video id="tutorialVideo" src="Nreal Glasses 720p video 3.mp4" className="video" controls width="300" height="170"></video>
                <button onClick={this.handelShowButton} id="showTutorialButton" className="button button1">Show AD</button>
                <button onClick={this.handelHideButton} id="hideTutorialButton" className="button button1">Hide AD</button>
            </div>
        );
    }
    showTutorialButton = () => {
        const showButton = document.getElementById("showTutorialButton");
        for(let i=0; i<this.state.arr.length; i++){
            if(document.getElementById(this.state.arr[i]).object3D.visible){
                showButton.style.setProperty("display", "inline-block");
            }
        }
    }
    handelShowButton = () => {
        const showButton = document.getElementById("showTutorialButton");
        const hideButton = document.getElementById("hideTutorialButton");
        const tutorialVideo = document.getElementById("tutorialVideo");
        showButton.style.setProperty("display", "none");
        tutorialVideo.style.setProperty("display", "block");
        tutorialVideo.setAttribute("currentTime", 0);
        tutorialVideo.load();
        tutorialVideo.play();
        hideButton.style.setProperty("display", "inline-block");
    }
    handelHideButton = () => {
        const hideButton = document.getElementById("hideTutorialButton");
        const tutorialVideo = document.getElementById("tutorialVideo");
        tutorialVideo.pause();
        tutorialVideo.style.setProperty("display", "none");
        hideButton.style.setProperty("display", "none");
        this.showTutorialButton();
    }
    componentDidMount(){
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
    }
    componentWillUnmount(){
        document.removeEventListener("markerFound", function(){
            if(window.getComputedStyle(tutorialVideo).display === "none"){
                showButton.style.setProperty("display", "inline-block");
            }
        });
        document.removeEventListener("markerLost", function(){
            showButton.style.setProperty("display", "none");
        });
    }
}

export default TutorialVideo;