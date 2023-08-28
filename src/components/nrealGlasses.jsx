import React, { Component } from 'react';
class NrealGlasses extends Component {
    render() { 
        return (
            <>
                <a-scene
                vr-mode-ui="enabled: false;"
                renderer="logarithmicDepthBuffer: true;"
                embedded
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
                        <a-entity
                            gltf-model="./Nreal light glasses/Nreal Light.glb"
                            scale="40 40 40"
                            position="141 0 -70"
                            rotation="270 0 0"
                        >
                        </a-entity>
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
                    <a-entity
                    gltf-model="./Nreal light glasses/Nreal Light.glb"
                    scale="40 40 40"
                    position="60 0 -70"
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