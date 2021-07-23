import React from 'react'
import Nav from '../../components/Nav'
import Parking from '../../components/Parking'
import useParkings from '../../hooks/useParkings'
import Spinner from '../../components/Spinner'


function ParkingList(props) {
    
    const location = props.match.params.location    
    const {loading, parkings} = useParkings(location)


    return (
        <div>
            <Nav/>
            <h1 className="text-4xl text-center font-bold mt-8"> {location} </h1>
            <div className="w-4/5 flex flex-col sm:flex-row flex-wrap justify-center mx-auto my-10">
            {loading
                ? <Spinner/>
                : parkings.map(parking => { 
                    return <Parking key={parking.id} parking={parking}/>
                    }
            )} 
            </div>   
        </div>
    )
}

export default ParkingList
