import React, {useState} from 'react'
import ParkingList from '../../components/ParkingList/ParkingList'
import getParkings from '../../services/getParkings'
import {useHistory} from 'react-router-dom'

function Home() {
    const history = useHistory()
    const [location, setLocation] = useState("")
    

    function handleChange(e) {
        setLocation(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        history.push(`search/${location}`)
    }

    
    return (
        <div className="w-full flex justify-center my-20">
            <form onSubmit={handleSubmit}>
                <input type="text" value={location} onChange={handleChange}/>
                <input className="" type="submit" value="Search"/>
            </form>
        </div>
        
    )
}

export default Home
