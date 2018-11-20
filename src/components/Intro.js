import React from 'react'

const Intro = (props) => {
    return (
        <>
            <div>
                <div className={`userInfo ${props.showEntry ? '' : 'hidden'}`}>
                    <h1>Welcome to my Game</h1>
                    <label>Username</label>
                    <input onChange={props.addUser} type="text" placeholder="Desired Name"></input>
                    <button onClick={props.sendUser} type="button" className="btn btn-light">Lets Begin</button>

                </div>
                <div className={`buttonOne ${props.showFirst ? '' : 'hidden'}`}>
                    <button onClick={props.firstButton} type="button" className={`btn btn-light ${props.disableAlarm ? 'disabled' : ''}`}>Snooze Alarm</button>
                </div>
                <div className={`${props.getUp ? '' : 'hidden'}`}>
                    <button onClick={props.wakeUp} type="button" className="btn btn-light">Turn off Alarm and Get Out of Bed</button>
                </div>
                <div className={`${props.showDecisionOne ? '' : 'hidden'}`}>
                    <button onClick={props.stayInBed} type="button" className="btn btn-light">Let's Sleep Today</button>
                    <button onClick={props.wakeUp} type="button" className="btn btn-light">Get Out of Bed</button>
                </div>
            </div>
        </>
    )


}
export default Intro