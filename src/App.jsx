import React, {useEffect,useState} from 'react'
import Display from './Components/Display'
import DrumPad from './Components/DrumPad'
import keys from './keys.js'
export default function App() {
  const [display, setDisplay] = useState('')
  const [volume, setVolume] = useState('1')
  function handleVolume(e) {
    setVolume(e.target.value);
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
      <input type='range' max='1' min='0' step='0.01' value={volume} onChange={handleVolume} style={{width: '50%'}} id='volume' />
    </div>
  );
}