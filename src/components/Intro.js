import React from 'react'

const Intro = (props) => {
    return (
        <>
            <div>
                <div className={`userInfo ${props.showEntry ? '' : 'hidden'}`}>
                    <h1>Welcome to my Game</h1>
                    <label>Username</label>
                    <input onKeyUp={props.handleKeyPress} onChange={props.addUser} type="text" placeholder="Desired Name"></input>
                    <button onClick={props.sendUser} type="button" className="btn btn-light">Lets Begin</button>
                    <p>This game is in no way complete, but I got all the functionality I wanted to with this game. I may put work into building the story and adding more weapons, but as of now I am happy with what I have learned from this project and feel very accomplished with the challenges that I overcame while creating this game.</p>
                    <br></br>
                    <p>I hope you enjoy the game!</p>
                    <br></br>
                    <p>If you want to contact me</p>
                    <a href="https://github.com/daneparke" target="blank2">
                        <img src="https://www.shareicon.net/download/2016/07/06/107139_development_512x512.png"
                            alt="Github Link"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/daneparke" target="blank1">
                        <img src="http://pngimage.net/wp-content/uploads/2018/06/linkedin-button-png.png"
                            alt="Linkedin Link"></img>
                    </a>
                    <p>Or email me at <br></br>dane.parke@colorado.edu</p>

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