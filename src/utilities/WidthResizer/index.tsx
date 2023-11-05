import React, {useEffect, useRef} from 'react'
import "./index.css"

export const WidthResizer = () => {
    const resizerRef = useRef<HTMLDivElement>(null);

    const mouseMove = (e : any) => {
        console.log(e)

    }

    useEffect(()=> {
        const parentElement = resizerRef.current?.parentElement;
        const prevSibilingId = resizerRef.current?.previousElementSibling?.id;
        const nextSibilingId = resizerRef.current?.nextElementSibling?.id;

        parentElement?.addEventListener("mousedown", ()=>{});
        parentElement?.addEventListener("mouseup", ()=>{});

    }, [])


  return (
    <div className='window-resizer' ref={resizerRef} onMouseDown={(e: any)=> mouseMove(e)}>
        <div>
        <span>.</span><br />
        <span>.</span><br />
        <span>.</span>
        </div>
    </div>
  )
}

export default WidthResizer