import React, { Component } from 'react';
class NrealGlasses extends Component {
    componentDidMount(){
        const nreal8 = document.getElementById("Nreal8");
        const nreal17 = document.getElementById("Nreal17");
        if (nreal8) {
            nreal8.addEventListener("markerFound", (e) => {
                debugger;
                document.getElementById("NrealModel").setAttribute(
                    "animation__scale",
                    `property: scale; to: 4 4 4; loop: false; dur: 1000; easing: easeInOutSine;`
                );
            });
            nreal8.addEventListener("markerLost", (e) => {
                debugger;
                document.getElementById("NrealModel").setAttribute(
                    "animation__scale",
                    `property: scale; to: 0 0 0; loop: false; dur: 1000; easing: easeInOutSine;`
                );
            });
        }
        if (nreal17) {
            nreal17.addEventListener("markerFound", (e) => {
                debugger;
                document.getElementById("NrealModel").setAttribute(
                    "animation__scale",
                    `property: scale; to: 4 4 4; loop: false; dur: 1000; easing: easeInOutSine;`
                );
            });
            nreal17.addEventListener("markerLost", (e) => {
                debugger;
                document.getElementById("NrealModel").setAttribute(
                    "animation__scale",
                    `property: scale; to: 0 0 0; loop: false; dur: 1000; easing: easeInOutSine;`
                );
            });
        }
        document.getElementById("NrealModel").addEventListener("animationcomplete", function (event) {
            if (document.getElementById("NrealModel").getAttribute("animation__scale")) {
                document.getElementById("NrealModel").removeAttribute("animation__scale");
            }
      });
    }
    render() { 
        return (
            <>
                <a-scene
                vr-mode-ui="enabled: false;"
                renderer="logarithmicDepthBuffer: true;"
                arjs="trackingMethod: best; sourceType: webcam;debugUIEnabled: false;"
                >
                    <a-nft
                        id="Nreal8"
                        type="nft"
                        url="./Nreal glasses 8 - 300 DPI/Nreal glasses 8"
                        smooth="true"
                        smoothCount="10"
                        smoothTolerance=".01"
                        smoothThreshold="5"
                    >
                    </a-nft>
                    <a-nft
                        id="Nreal17"
                        type="nft"
                        url="./Nreal glasses 17 - 300 DPI/Nreal glasses 17"
                        smooth="true"
                        smoothCount="10"
                        smoothTolerance=".01"
                        smoothThreshold="5"
                    >
                    </a-nft>
                    <a-entity
                        id="NrealModel"
                        gltf-model="./Nreal light glasses/Nreal Light.glb"
                        scale="0 0 0"
                        position='0 -5 -25'
                        rotation="15 0 0"
                    >
                    </a-entity>
                    <a-entity camera></a-entity>
                </a-scene>
            </>
      );
    }
}
 
export default NrealGlasses;