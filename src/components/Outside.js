import React from 'react'

const Outside = (props) => {

    if (props.enemies.length > 1) {
        return (
            <>
                <div className={`row batCont ${props.showOutside ? '' : 'hidden'}`}>
                    <div className='col-4 playerCont'>
                        <div>{props.userName}</div>
                        <div>Health: {props.playerHealth}</div>
                    </div>
                    <div className={`col-5 attackButtons ${props.killedEnemy ? 'hidden' : ''}`}>
                        <button onClick={props.basicAttack} type="button" className={`btn ${props.disablePlayerAttack ? 'btn-dark' : 'btn-light'}`}>Attack</button>
                        <button onClick={props.companionAttack} type="button" className={`btn ${props.disableCompanion ? 'btn-dark' : 'btn-light'} ${props.showCompanion ? '' : 'hidden'}`}>{props.companion} Attack</button>
                    </div>
                    <div className={`col-8 attackButtons ${props.killedEnemy ? '' : 'hidden'}`}>
                        <button onClick={props.pickUpItem} type="button" className={`btn btn-light ${props.disablePickedUp ? 'hidden' : ''}`}>Pick Up {props.droppedItem}</button>
                        <button onClick={props.leaveCombat} type="button" className="btn btn-light">Leave</button>
                    </div>
                    <div className={`col-3 enemyCont ${props.killedEnemy ? 'hidden' : ''}`}>
                        <div>{props.enemies[0].grunt.name}</div>
                        <div>Health: {`${props.enemyHit ? props.enemyHealth : props.enemies[0].grunt.health}`}</div>
                    </div>
                </div>
            </>
        )

    } else {
        return null
    }
}

export default Outside