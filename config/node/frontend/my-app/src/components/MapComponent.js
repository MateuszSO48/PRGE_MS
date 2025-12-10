import React, {useEffect, useRef} from 'react';
import Map from "ol/Map";
import TitleLayer from "ol/layer/Tile";
import View from "ol/View";
import OSM from "ol/source/OSM";
import {useGeographic} from "ol/proj";


function MapComponent(props) {
    const mapRef = useRef(null);


    useGeographic()
    useEffect(
        ()=>{
            const map = new Map({
                target: mapRef.current,
                layers: [
                    new TitleLayer({
                        source: new OSM(),
                    })
                ],
                view: new View({
                    center: [52, 21],
                    zoom:6,
                })
            });
            return ()=>map.setTarget(null)
        },

        [])


    return (
        <div className="mapComponent" ref={mapRef}></div>
    );
}

export default MapComponent;