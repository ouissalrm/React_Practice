import React from 'react'

export default function Buttons({title ,children}) {
  return (
    <div>
      <button>
        {title}
        {children}
      </button>
    </div>
  )
}
