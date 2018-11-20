import React from 'react'

const Second = (props) => {
    return (
        <>
            <div className={`buttonTwo ${props.showSecond ? '' : 'hidden'}`}>
                <div>Now That You Are Up What Do You Want For Breakfast?</div>
                <div className='stuff'>
                    <button onClick={props.pancakeClick} type="button" className="btn btn-light">I Want Pancakes</button>
                    <button onClick={props.muffinClick} type="button" className="btn btn-light">I Want A Muffin</button>
                    <button onClick={props.starveClick} type="button" className="btn btn-light">Nothing</button>
                </div>
            </div>

        </>
    )
}
export default Second