import React from "react"
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const CompletionCircle = (props : any) => {
    if (props.availability_status === "LOCKED"){
      return (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <mask id="___SVG_ID__21__0___" width="12" height="14" x="2" y="1" maskUnits="userSpaceOnUse">
              <path fill="#0F172A" fillRule="evenodd" d="M12 5.667h-.667V4.333a3.335 3.335 0 00-6.667 0v1.334h-.667c-.733 0-1.333.6-1.333 1.333v6.667c0 .733.6 1.333 1.333 1.333h8c.734 0 1.334-.6 1.334-1.333V7c0-.733-.6-1.333-1.334-1.333zm-4 6c-.734 0-1.334-.6-1.334-1.334C6.666 9.6 7.266 9 7.999 9c.734 0 1.334.6 1.334 1.333 0 .734-.6 1.334-1.334 1.334zM6 4.333v1.334h4V4.333c0-1.106-.894-2-2-2-1.107 0-2 .894-2 2z" clipRule="evenodd"></path>
              </mask><g mask="url(#___SVG_ID__21__0___)">
            <path fill="#475569" d="M0 0H16V16H0z"></path></g></svg>
        </div>
      )
    } else if (props.completion_percentage === 100){
      return (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="#16A34A" fill-rule="evenodd" d="M12 21.6a9.6 9.6 0 009.6-9.6A9.6 9.6 0 0012 2.4 9.6 9.6 0 002.4 12a9.6 9.6 0 009.6 9.6zM16.45 10.45a1.2 1.2 0 00-1.697-1.697L10.8 12.703 9.25 11.152a1.2 1.2 0 10-1.697 1.697l2.4 2.4a1.2 1.2 0 001.697 0l4.8-4.8z" clip-rule="evenodd"></path>
          </svg>
        </div>
      )
    } else {
      return (
        <div className="circular-progress">
          <Stack spacing={1} direction="row">
            <CircularProgress color="success" variant="determinate" value={props.completion_percentage} />
          </Stack>
        </div>
      )
    }
  }

export default CompletionCircle