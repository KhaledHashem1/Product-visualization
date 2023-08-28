import React, { Component } from 'react';
class NrealGlasses extends Component {
   componentDidMount(){
    
    let m = document.getElementById("Nreal8");
    if (m) {
    
       m.addEventListener("markerFound", (e) => {
        debugger;
        document
          .getElementById("firstGlass")
          .setAttribute(
            "animation__scale",
            `property: scale; to: 3 3 3; loop: false; dur: 2000; easing: easeInOutSine;`
          );
      });
      m.addEventListener("markerLost", (e) => {
        debugger;
        document
          .getElementById("firstGlass")
          .setAttribute(
            "animation__scale",
            `property: scale; to: 0 0 0; loop: false; dur: 2000; easing: easeInOutSine;`
          );
      });
     
    }
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
                      <a-entity
                      id="firstGlass"
                            gltf-model="url(/Nreal light glasses/Nreal Light.glb)"
                            scale="0 0 0"
                          position='-5 -10 -30'
                            rotation="0 0 0"
                        >
                        </a-entity>
                    <a-nft
                    id="Nreal17"
                    type="nft"
                    url="./Nreal glasses 17 - 300 DPI/Nreal glasses 17"
                    smooth="true"
                    smoothCount="10"
                    smoothTolerance=".01"
                    smoothThreshold="5"
                >
                    <a-entity
                    gltf-model="./Nreal light glasses/Nreal Light.glb"
                    scale="40 40 40"
                    position="0 -20 0"
                    rotation="270 0 0"
                    >
                    </a-entity>
                </a-nft>
                    <a-entity camera></a-entity>
                </a-scene>
            </>
      );
    }
}
 
export default NrealGlasses;