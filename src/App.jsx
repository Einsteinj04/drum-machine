import React, {useEffect,useState} from 'react'
import Display from './Components/Display'
import DrumPad from './Components/DrumPad'
import keys from './keys.js'
export default function App() {
  const [display, setDisplay] = useState('')
  const [volume, setVolume] = useState('1')
  const [record, setRecord] = useState('')
  function handleVolume(e) {
    setVolume(e.target.value);
  }
  function play() {
    let index = 1
    const array = record.split(' ')
    const interval = setInterval(() => {
      const audioTag = document.getElementById(array[index])
      audioTag.currentTime = 0
      audioTag.play()
      index++
    }, 200);
    setTimeout(()=>{clearInterval(interval)},200*array.length - 1)
  }
  function clear() {
    setRecord('')
  }
  const pads = keys.map(item => {
    return (
      <>
        <DrumPad
          keys={item.keys}
          id={item.id}
          src={item.src}
          keycode={item.keycode}
          setDisplay={setDisplay}
          volume={volume}
          setRecord={setRecord}
        />
      </>
    );
  })
  return (
    <div id="drum-machine">
      <Display display={display} />
      <br />
      {pads}
      <br />
      <input
        type="range"
        max="1"
        min="0"
        step="0.01"
        value={volume}
        onChange={handleVolume}
        style={{ width: "50%" }}
        id="volume"
      />
      <br />
      <div>{record}</div>
      <button onClick={play}>PLAY</button>
      <button onClick={clear}>CLEAR</button>
    </div>
  );
}