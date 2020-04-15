import React, {useState} from 'react'
import click1 from '../sounds/click1.wav'
import click2 from '../sounds/click2.wav'

export const Metronome = () => {
    const [bpm, setBpm] = useState(100)
    const [playing, setPlaying] = useState(false)
    const [count, setCount] = useState(0)
    const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)


    const firstClick = new Audio(click1)
    const secondClick = new Audio(click2)

    const startStop = () => {
        let timer
        switch(playing) {
            case true :
                timer = setInterval(
                   playClick,(60/bpm) * 1000
                )
                setPlaying(true)
            case false:
                clearInterval(timer)
                setPlaying(false)
            default: 
                return null
        }
    }

    const playClick = () => {
        if (count % beatsPerMeasure === 0)
        secondClick.play()
    }


    return (
        <div className="metronome">
           <div className="bpm-slider">
                <h1>{bpm} BPM </h1>
               <input onChange={(e) => setBpm(e.target.value)} type='range' min='50' max="240" value={bpm} />
           </div>
           <button onClick={() => startStop()}>{playing ? "Stop" : "Start"} </button>
        </div>
    )
}
