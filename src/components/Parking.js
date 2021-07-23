import React from 'react'
import parkingSignal from '../assets/parking.png'

function Parking({parking}) {
    return (
        <div className="w-full sm:w-3/12 flex flex-col my-6 mx-0 sm:mx-8 items-center text-center p-6 shadow-md rounded">
            <img className="w-full h-40 rounded" src={parking.image ? parking.image : parkingSignal} alt={parking.id} />
            <p className="text-lg font-bold mt-2">{parking.name}</p>
            <p>{parking.address}</p>
            <div className="flex flex-row mt-1">
                <svg className="w-6 h-6" fill="yellow" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <p className="font-bold">{parking.rating}</p>
            </div>
            <p className="text-sm mt-3"> Score of <span className="text-primary font-bold"> {parking.score.toFixed(2)} </span> 
                from <span className="text-primary font-bold"> {parking.reviewCount} </span> reviews</p>
            <a className="font-bold text-sm text-primary underline" href={parking.yelpPage}> Yelp page </a> 
        </div>
    )
}

export default Parking
