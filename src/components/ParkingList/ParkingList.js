import React from 'react'
import useParkings from '../../hooks/useParkings'


function ParkingList(props) {
    
    const location = props.match.params.location    
    const {loading, parkings} = useParkings(location)


    return (
        <>
        {loading
                ? <p>Loading...</p>
                : parkings.map(parking => { 
                    return <div>
                        <img src={parking.image} alt={parking.name} />
                        <p>{parking.address}</p>
                        <p>{parking.lotScore}</p>
                        <p>{parking.rating}</p>
                        <p>{parking.reviewCount}</p>
                        <p>{parking.yelpPage}</p>
                    </div>
                    }
                )}    
        </>
    )
}

export default ParkingList
