import React from 'react'

const Inventory = (props) => {
    let inventory = props.inventory.map(item => {
        return (
            <div className="invItem">{item}</div>
        )
    })
    let equipment = props.equipment.map(item => {
        return (
            <div className="invItem">{item}</div>
        )
    })
    let companion = props.companion.map(pet => {
        return (
            <div className="invItem">{pet}</div>
        )
    })
    return (
        <>
            <div className={`container weaponCont ${props.showWeapon ? '' : 'hidden'}`}>
                <div className="row invHeader">Weapon</div>
                <div>{props.weapon}</div>
            </div>
            <div className={`container equipmentCont ${props.showEquipment ? '' : 'hidden'}`}>
                <div className="row invHeader">Equipment</div>
                <div>{equipment}</div>
            </div>
            <div className={`container companionCont ${props.showCompanion ? '' : 'hidden'}`}>
                <div className="row invHeader">Companion</div>
                <div>{companion}</div>
            </div>
            <div className={`container invCont ${props.showInventory ? '' : 'hidden'}`}>
                <div className="row invHeader">Inventory</div>
                <div>{inventory}</div>
            </div>
        </>
    )
}

export default Inventory
