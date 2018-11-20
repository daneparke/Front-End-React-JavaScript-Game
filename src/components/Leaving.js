import React from 'react'

const Leaving = (props) => {
    return (
        <>
            <div className={`${props.showLeaving ? '' : 'hidden'}`}>
                <button onClick={props.addUmbrella} type="button" className={`btn btn-light`}>Umbrella</button>
                <button onClick={props.addBoomerang} type="button" className={`btn btn-light`}>Boomerang</button>

            </div>
        </>
    )
}

export default Leaving