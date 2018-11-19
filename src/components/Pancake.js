import React, { Component } from 'react'

const Pancake = (props) => {
    return (
        <>
            <div className={`pancake row ${props.showPancake ? '' : 'hidden'}`}>
                <div className='cookingItems container col-6'>
                    <button onClick={props.turnOnStove} type="button" className={`btn btn-light ${props.stoveOn ? 'disabled' : ''}`}>Turn On Stove</button>
                    <button onClick={props.grabPan} type="button" className={`btn btn-light ${props.grabbedPan ? 'disabled' : ''}`}>Grab Frying Pan</button>
                    <button onClick={props.grabBowl} type="button" className={`btn btn-light ${props.grabbedBowl ? 'disabled' : ''}`}>Grab Mixing Bowl</button>
                </div>
                <div className={`ingredients container  col-6 ${props.showIngredients ? '' : 'hidden'}`}>
                    <button onClick={props.addIngredient} type="button" className="btn btn-light">Add Flour</button>
                    <button onClick={props.addIngredient} type="button" className="btn btn-light">Add Sugar</button>
                    <button onClick={props.addIngredient} type="button" className="btn btn-light">Add Baking Powder</button>
                    <button onClick={props.addIngredient} type="button" className="btn btn-light">Add Salt</button>
                    <button onClick={props.addIngredient} type="button" className="btn btn-light">Add Milk</button>
                    <button onClick={props.addIngredient} type="button" className="btn btn-light">Add 2 Eggs</button>
                </div>
            </div>
            <div className={`${props.showCooking ? '' : 'hidden'}`}>
                <button onClick={props.cookBreakfast} type="button" className={`btn btn-light ${props.breakfastPour ? '' : 'disabled'}`}>Pour Batter Into Pan</button>
                <button onClick={props.flipBreakfast} type="button" className={`btn btn-light ${props.breakfastFlip ? '' : 'hidden'}`}>Flip It</button>
                <button onClick={props.grabBreakfast} type="button" className={`btn btn-light ${props.breakfastDone ? '' : 'hidden'}`}>Grab Pancake</button>
                <button onClick={props.stopCooking} type="button" className={`btn btn-light ${props.leaveCooking ? '' : 'hidden'}`}>Stop Cooking</button>
            </div>
        </>
    )
}
export default Pancake