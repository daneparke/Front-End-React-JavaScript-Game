import React, { Component } from 'react'

const Story = (props) => {
    let story = props.story.map(script => {
        return (
            <div className="storyLine">{script}</div>
        )
    })
    return (
        <>
            <div className={`storyScript ${props.showStory ? '' : 'hidden'}`}>
                <div className="storyHeader">Your Story</div>
                <div className="storyContainer">
                    {story}
                </div>
            </div>
        </>
    )
}
export default Story