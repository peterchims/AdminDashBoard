import React from 'react'

const Button = ({bgColor, color, size, text, borderRadius}) => {
  return (
    <div>
<button
type='button' 
style={{backgroundColor:bgColor, color, borderRadius}}
className={`text=${size} p-3 hover:drop-shadow-xl`}> {text} </button>
    {/* <p>Ngo9BigBOggjHTQxAR8/V1NDaF5cWGNCf1NpR2RGfV5ycEVHYVZVR3xdRU0SNHVRdkdnWXZcd3VUQmZeUUZzWkI=</p> */}
    </div>
    
  )
}

export default Button
