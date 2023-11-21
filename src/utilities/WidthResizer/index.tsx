import React, {useRef} from 'react'
import "./index.css"

export const WidthResizer = () => {
    const resizerRef : any = useRef(null);

      setTimeout(() => {

      
      // const prevSib: HTMLDivElement = resizerRef.current.previousSiblingElement;
      const resizer : any = document.getElementById("window-resizer");
      const prevSib : any = document.getElementById("web-code-editor");
      const nextSib : any = document.getElementById("web-output-display");
      // console.log(prevSib?.getBoundingClientRect())
      const prevSiblingWidth = prevSib?.style.width;
      const nextWidth = nextSib?.style.width;

      let isDraggable = false;
      let x : any = 0;

      resizer.addEventListener("mousedown", (e : MouseEvent)=> {
          isDraggable = true;
          x = e.clientX;
      });

      prevSib.addEventListener("mousemove", (e: MouseEvent) => {
        console.log(e.target)
        if(isDraggable){
          prevSib.style.width = prevSiblingWidth - x + e.clientX + "px";
          nextSib.style.width = `calc(100% - ${prevSib.style.width})`;
        }
      })

      prevSib.addEventListener("mouseup", ()=>{
        isDraggable = false;
      });
      resizer.addEventListener("mouseup", ()=>{
        isDraggable = false;
      });
      document.removeEventListener("mousedown", ()=> {})
    }, 1000)


      



  return (
    <div className='window-resizer' id="window-resizer" ref={resizerRef}>
        <div>
          <span>.</span><br />
          <span>.</span><br />
          <span>.</span>
        </div>
    </div>
  )
}

export default WidthResizer