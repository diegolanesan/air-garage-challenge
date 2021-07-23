import React from 'react'
import github from '../assets/github-logo.png'

function Footer() {
    return (
        <div className="w-full fixed bottom-0 flex flex-row items-center justify-center h-12 bg-secondary">
            <img className="w-6 h-6 mx-2" src={github} alt="github"/>
            <a className="text-white text-sm" href="http://github.com/diegolanesan" rel="noreferrer" target="_blank">  diegolanesan </a>
        </div>
    )
}

export default Footer
