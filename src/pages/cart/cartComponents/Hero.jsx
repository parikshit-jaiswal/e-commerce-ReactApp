import React from 'react'
import Table from './Table'

function Hero() {
    return (
        <div className='containerP ml-10 mt-16'>
            <div className=" text-lg mb-20">
                <span className='opacity-60'>Home  &nbsp;&nbsp;/</span>&nbsp;&nbsp;  Cart
            </div>
            <Table />
        </div>
    )
}

export default Hero