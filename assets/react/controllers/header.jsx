import React from 'react'

const header = (props) => {
    return (
        
        <header className='screen-size my-5 border-title'>
            <h1 className="text-center fs-2 p-5 fw-normal"><strong><b>{props.title}</b></strong></h1>
        </header>
        
    )
}

export default header