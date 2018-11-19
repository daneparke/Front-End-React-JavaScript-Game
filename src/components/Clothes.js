import React, { Component } from 'react'

const Clothes = (props) => {
    return (
        <>
            <div className={`${props.showClothes ? '' : 'hidden'}`}>
                <button onClick={props.addShirt} type="button" className={`btn btn-light ${props.showShirt ? '' : 'disabled'}`}>Put Shirt On</button>
                <button onClick={props.addPants} type="button" className={`btn btn-light ${props.showPants ? '' : 'disabled'}`}>Put Pants On</button>
                <button onClick={props.addBoots} type="button" className={`btn btn-light ${props.showBoots ? '' : 'disabled'}`}>Put Boots On</button>
                <button onClick={props.goNaked} type="button" className={`btn btn-light ${props.showNude ? '' : 'hidden'}`}>Lets Go Naked!</button>
                <button onClick={props.goOutside} type="button" className={`btn btn-light ${props.letsGo ? '' : 'hidden'}`}>Embark To The Outside World!</button>
            </div>
        </>
    )
}

export default Clothes