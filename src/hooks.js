import {useState, useEffect} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
            return () => {
                window.onresize = () => {

                }
            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const y = (h / 2) * Math.sin(scale * Math.PI)
    const x = w / 2
    const position = 'absolute'
    const background = '#4a148c'
    const barW = Math.min(w, h) / 8
    const radius = Math.min(w, h) / 6
    return {
        barStyle() {
            const left = `${x - barW / 2}px`
            const top = '0px'
            const width = `${barW}px`
            const height = `${y}px`
            return {position, left, top, width, height, background}
        },
        ballStyle() {
            const left = `${w / 2 - radius}px`
            const top = `${y}px`
            const width = `${2 * radius}px`
            const height = `${2 * radius}px`
            const borderRadius = `50%`
            return {position, left, top, width, height, borderRadius, background}
        }
    }
}
