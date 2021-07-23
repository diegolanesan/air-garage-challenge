import React, {useState} from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import {useHistory} from 'react-router-dom'


function Home() {
    const history = useHistory()
    const [location, setLocation] = useState("")
    const [error, setError] = useState("")

    function onChange(e) {
        setLocation(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(location === "") {
            setError("Location cannot be empty")
        } else {
            history.push(`search/${location}`)
        }
    }

    
    return (
        <>
            <Nav/>
            <div className="w-full flex flex-col justify-center text-center mt-4">
                <h1 className="text-3xl font-bold"> Find parking </h1>

                <div className="sm:w-2/5 w-full mt-20 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <input className="border pr-20 pl-4 py-2  focus:outline-none rounded mb-10 sm:mx-8" 
                        type="text" 
                        placeholder= "Search by location"
                        value={location} 
                        onChange={onChange}/>
                        <input 
                        className="bg-primary text-primary px-24 sm:px-16 py-3 uppercase font-semibold rounded cursor-pointer hover:bg-background" 
                        type="submit" 
                        value="Search"
                        />
                        {error && <div className="text-red text-sm sm:m-0 mt-8"> {error} </div>}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
