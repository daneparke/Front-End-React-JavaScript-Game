import React from 'react'

const Death = (props) => {
    return (
        <>
            <div className={` ${props.showDeath ? '' : 'hidden'}`}>
                <h1><b><u>YOU DIED</u></b></h1>
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
                <br></br>
                <p>Easter Egg for game: if you make 3 pancakes you could give the bat a pancake for an extra attack!</p>
                <br></br>
                <p>Also click on inventory to use most items</p>
            </div>
        </>
    )
}
export default Death