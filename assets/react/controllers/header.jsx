import React from 'react'

const header = (props) => {
    return (
        
        <header className='title-border screen-size my-5 w-100'>
            <h1 className="title-gradient text-center fs-2 p-5 fw-normal">{props.title}</h1>
        </header>
        
    )
}

export default header