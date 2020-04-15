import React, {useState} from 'react'
import click1 from '../sounds/click1.wav'

export const Metronome = () => {
    const [bpm, setBpm] = useState(100)
    const [playing, setPlaying] = useState(false)

    const newclick = new Audio(click1)

    const startStop = () => {
        newclick.play()
    }

    return (
        <div className="metronome">
           <div className="bpm-slider">
                <h1>{bpm} BPM </h1>
               <input onChange={(e) => setBpm(e.target.value)} type='range' min='50' max="240" value={bpm} />
           </div>
           <button>{playing ? "Stop" : "Start"} </button>
        </div>
    )
}
