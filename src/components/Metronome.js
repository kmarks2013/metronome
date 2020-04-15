import React from 'react'

export const Metronome = () => {
    let bpm = 100

    return (
        <div className="metronome">
           <div className="bpm-slider">
                <h1>{bpm} BPM </h1>
               <input type='range' min='50' max="240" value={bpm} />
           </div>
        </div>
    )
}
