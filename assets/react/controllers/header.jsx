import React from 'react'

const header = (props) => {
    return (
        
        <header className='screen-size border-title'>
            <h1 className="text-center fs-2 p-1 fw-normal"><strong><b>{props.title}</b></strong></h1>
        </header>
        
    )
}

export default header