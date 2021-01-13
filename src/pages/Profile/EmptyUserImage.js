import * as React from "react"

function EmptyUserImage(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width='300px'
      height='300px'
      viewBox="0 0 510 510"
      fill='#bdbdbd'
      {...props}
    >
      <path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm0 76.5c43.35 0 76.5 33.15 76.5 76.5s-33.15 76.5-76.5 76.5-76.5-33.15-76.5-76.5 33.15-76.5 76.5-76.5zm0 362.1c-63.75 0-119.85-33.149-153-81.6 0-51 102-79.05 153-79.05S408 306 408 357c-33.15 48.45-89.25 81.6-153 81.6z" />
    </svg>
  )
}

export default EmptyUserImage;
