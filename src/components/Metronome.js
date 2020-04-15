import React, {useState} from 'react'

export const Metronome = () => {
    const [bpm, setBpm] = useState(100)
    let playing = false

    return (
        <div className="metronome">
           <div className="bpm-slider">
                <h1>{bpm} BPM </h1>
               <input type='range' min='50' max="240" value={bpm} />
           </div>
           <button>{playing ? "Stop" : "Start"} </button>
        </div>
    )
}
