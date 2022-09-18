import React, { useRef,useEffect } from 'react';
export default function DrumPad(props) {
  // console.log(props.volume);
  const audioTag = useRef(props.keys);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  },[]);
  function handleChange() {
    audioTag.current.currentTime = 0;
    audioTag.current.volume = props.volume;
    audioTag.current.play();
    props.setDisplay(props.id);
    props.setRecord(prev => {
      return prev + ' ' + props.keys;
    })
  }
  function handleKeyPress(e) {
    if (e.keyCode == props.keycode) {
      handleChange();
    }
  }
    return (
      <button onClick={handleChange} className="drum-pad" id={props.id}>
        <audio src={props.src} id={props.keys} className='clip' ref={audioTag} />{props.keys}
      </button>
    );
}