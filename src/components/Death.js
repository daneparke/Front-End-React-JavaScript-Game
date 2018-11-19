import React, { Component } from 'react'

const Death = (props) => {
    return (
        <>
            <div className={` ${props.showDeath ? '' : 'hidden'}`}>
                <h1><b><u>YOU DIED</u></b></h1>
            </div>
        </>
    )
}
export default Death