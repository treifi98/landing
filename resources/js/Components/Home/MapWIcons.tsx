import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidHJldmk5OCIsImEiOiJjbDNwcWhyOWgwMnppM2twN3JicG5wMmY2In0.m_eFeF9ZP_4xkJA9e5N05Q';

interface Props {
    points: { point: number[], bg: string }[],
    changes?: number,
    rchanges?: number,
    zoom?: number,
    isZoom?: boolean
}

const MapWIcons = (props: Props) => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/trevi98/cli19khgh02g701qy1jsmb8wr',
            center: [55.3657800858067, 25.253378250856844 ], // Dubai coordinates
            zoom: props.zoom?props.zoom:14,
            maxZoom: 18,
            minZoom: 10,
            logoPosition: 'top-left',
            attributionControl: false,
            scrollZoom: props.isZoom,

        });

        map.on('load', () => {
            props.points.forEach((point, index) => {
                map.addLayer({
                    "id": `points${index}`,
                    "type": 'symbol',

                    // "paint": {
                    //     "circle-radius": 6,

                    //     "circle-color": point.bg,

                    // },
                    'layout':{
                        'icon-image':`icon${index}`,
                        'icon-size':1,
                        "icon-allow-overlap": true,
                    },
                    "source": {
                        "type": "geojson",
                        "data": {
                            "type": "FeatureCollection",
                            "features": [{
                                "type": 'Feature',
                                "properties": {
                                    "field": 1
                                },
                                "geometry": {
                                    "type": 'Point',
                                    "coordinates": point.point,

                                }
                            }]
                        }
                    }
                });
            });

            document.querySelectorAll('.mapboxgl-ctrl-logo').forEach((logo)=>{
                logo.style.display = 'none';
            })
            mapRef.current = map;
        });
        props.points.forEach((point,index)=>{

            map.loadImage(point.bg, (error, image) => {
                if (error) throw error;
                if (!map.hasImage('cat')) map.addImage(`icon${index}`, image);
            });
        })

        return () => map.remove();
    }, []);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setPaintProperty(`points${props.changes}`, 'circle-color', '#fff');
        }
    }, [props.changes]);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setPaintProperty(`points${props.rchanges}`, 'circle-color', '#002d31');
        }
    }, [props.rchanges]);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setZoom(props.zoom);
        }
    }, [props.zoom]);

    return <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />;
}

export default MapWIcons;
