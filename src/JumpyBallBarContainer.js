import JumpyBallBarPresentational from './JumpyBallBarPresentational'
import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'

const JumpyBallBarContainer = (props) => {
    const {scale, start} = useAnimatedScale(0.01, 20)
    const {w, h} = useDimension()
    return <JumpyBallBarPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
    </JumpyBallBarPresentational>
}

export default JumpyBallBarContainer
