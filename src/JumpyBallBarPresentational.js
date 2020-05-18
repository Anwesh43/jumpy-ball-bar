import React from 'react'
import {useStyle} from './hooks'

const JumpyBallBarPresentational = ({w, h, scale, onClick}) => {
    const {ballStyle, barStyle} = useStyle(w, h, scale)
    return <div onClick = {onClick}>
        <div style = {barStyle()}>
        </div>
        <div style = {ballStyle()}>
        </div>
    </div>
}

export default JumpyBallBarPresentational
