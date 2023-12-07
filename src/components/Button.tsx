import React from 'react'

interface ButtonProps {
    title: string,
    link: string,
    color: string
}

const Button = ({title, link,color}) => {
  return (
    <div class="w-1/3 flex border-[1.5px] rounded-md h-10" style={{borderColor: `${color}`}}>
        <p class="m-auto">
            {title}
        </p>
    </div>
  )
}

export default Button