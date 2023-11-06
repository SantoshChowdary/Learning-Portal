import React, { useRef} from 'react'
import "./index.css"

export const WidthResizer = () => {
    const resizerRef = useRef<HTMLDivElement>(null);

    let isMouseDown = false;

    const handleMouseDown = (e: any) => {

      const windowResizerId :any = document.getElementById("window-resizer");
      const prevSiblingId : any = windowResizerId.previousElementSibling;
      const nextSiblingId : any = windowResizerId.nextElementSibling;

      const prevSiblingWidth = prevSiblingId.getBoundingClientRect().width;
      const nextSiblingWidth = nextSiblingId.getBoundingClientRect().width;
      // console.log(nextSiblingWidth)

      isMouseDown = true;
      if (isMouseDown){
        prevSiblingId.addEventListener("mouseup", (e1 : any) => {
          let d = e.clientX - e1.clientX;
          // console.log(d)
          prevSiblingId.style.width = prevSiblingWidth - d + "px";
          nextSiblingId.style.width = nextSiblingWidth + d + "px";
        });

        nextSiblingId.addEventListener("mouseup", (e2 : any) => {
          let f = e2.clientX - e.clientX;
          console.log("e2", e2)
          prevSiblingId.style.width = prevSiblingWidth + f + "px";
          nextSiblingId.style.width = nextSiblingWidth - f + "px";
        });
      }
      isMouseDown = false
    }


  return (
    <div className='window-resizer' id="window-resizer" ref={resizerRef} onMouseDown={(e) => handleMouseDown(e)}>
        <div>
        <span>.</span><br />
        <span>.</span><br />
        <span>.</span>
        </div>
    </div>
  )
}

export default WidthResizer