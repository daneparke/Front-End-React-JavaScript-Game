import React from 'react'

const Bat = (props) => {
    if (props.enemies.length > 1) {
        return (
            <>
                <div className={`row batCont ${props.showBat ? '' : 'hidden'}`}>
                    <div className='col-4 playerCont'>
                        <div>{props.userName}</div>
                        <div>Health: 10</div>
                    </div>
                    <div className='col-5 attackButtons'>
                        <button onClick={props.panAttack} type="button" className="btn btn-light">Hit With Pan</button>
                        <button onClick={props.pancakeThrow} type="button" className="btn btn-light">Throw Pancake</button>
                        <button onClick={props.pancakeOffer} type="button" className="btn btn-light">Offer a Pancake</button>
                    </div>
                    <div className='col-3 enemyCont'>
                        <div>{props.enemies[2].bat.name}</div>
                        <div>Health: {props.enemies[2].bat.health}</div>
                    </div>
                </div>
            </>
        )

    } else {
        return null
    }
}

export default Bat