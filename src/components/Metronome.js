import React, {useState, useEffect, useRef} from 'react'
import click1 from '../sounds/click1.wav'
import click2 from '../sounds/click2.wav'

export const Metronome = () => {
    const [bpm, setBpm] = useState(100)
    const [playing, setPlaying] = useState(false)
    const [count, setCount] = useState(0)
    const timer = useRef()
    const beatsPerMeasure = 4
    const firstClick = new Audio(click1)
    const secondClick = new Audio(click2)



    const startStop = () => {
        let timer
        if (playing === true) {
            setPlaying(false)
        } else {
            setCount(0)
            setPlaying(true) 
            console.log(timer)
        }
    }

    const playClick = () => {
        if (count % beatsPerMeasure === 0){
            secondClick.play()
        } else{
            firstClick.play()
        }
        setCount(prevCount => (prevCount + 1) % beatsPerMeasure)
    }

    useEffect(() => {
        if (playing) {
            clearInterval(timer.current)
            timer.current = setInterval(playClick, (60/bpm) *1000)
        } else {
            clearInterval(timer.current)
        }
    }, [bpm, playing, playClick, count, firstClick, secondClick])

    const handleBpmChange = (e)=> {
        let timer
        const bpm = e.target.value
        if (playing){
            clearInterval(timer)
            timer = setInterval(playClick, (60/bpm) * 1000 )
            setCount(0)
            setBpm(bpm)
        } else
            setBpm(bpm)
    }


    return (
        <div className="metronome">
           <div className="bpm-slider">
                <h1>{bpm} BPM </h1>
               <input onChange={handleBpmChange} type='range' min='50' max="240" value={bpm} />
           </div>
           <button onClick={startStop}>{playing ? "Stop" : "Start"} </button>
        </div>
    )
}
