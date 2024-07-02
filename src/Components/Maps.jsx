import React, {useState, useRef, useEffect} from 'react'
// import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'

import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';

const Maps = () => {
    const mapElement = useRef(null)
    const map = useRef(null) 
    const [dimensions, setDimensions] = useState({
        width: '500px',
        height: '500px'
    })

    useEffect(() => {
        const handleResize = () => {
            const width = Math.max(350, Math.min(window.innerWidth * 0.6, 600))
            const height = Math.max(300, Math.min(window.innerHeight * 0.6, 600))
            setDimensions({width: width, height: height})
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        if (map.current) return;


        map.current = tt.map({
            key: import.meta.env.VITE_TOMTOM_API_KEY,
            container: mapElement.current,
            center: [20.1683, 41.1533],
            zoom: 5,
        })
        const marker = new tt.Marker().setLngLat([20.1683, 41.1533]).addTo(map.current)
        
        return () => map.current.remove();

    }, [])


    return (
        <div ref={mapElement} className='map-container' style={{ width: dimensions.width, height: dimensions.height}}/>
    )

    // Google API
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    // });
    // if(!isLoaded) return <div>Loading...</div>
    

    // return (
    //     <GoogleMap zoom={13} center={{lat: 40.9420,lng: 19.6996}} mapContainerClassName='map-container'>
    //         <Marker position={{lat: 40.9420,lng:19.6996}}/>
    //     </GoogleMap>
    // )
}

export default Maps
