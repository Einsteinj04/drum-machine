import React, { useRef} from "react";
export default function Display(props) {
  // console.log(props.display)
  return <input id="display" value={props.display}></input>;
}
// props.value[0].keys