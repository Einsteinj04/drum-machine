import React, { useRef} from "react";
export default function Display(props) {
  return <input id="display"
    value={props.display}
    ></input>;
}
// props.value[0].keys