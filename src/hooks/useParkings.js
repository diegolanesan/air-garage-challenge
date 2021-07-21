import {useState, useEffect} from 'react'
import getParkings from '../services/getParkings'

function useParkings(location) {
    const [loading, setLoading] = useState(false)
    const [parkings, setParkings] = useState([])
    
    useEffect(() => {
        // Cambiar por un warning en el cuerpo del componente
        if(location === "") {
            alert("Please enter a location")
        }  
        // ---------------------------------------------------
        setLoading(true)  
        getParkings(location)
            .then(parkings => {
                setParkings(parkings)
                setLoading(false)
            })
    }, [location])
    
    return {loading, parkings}
}

export default useParkings
