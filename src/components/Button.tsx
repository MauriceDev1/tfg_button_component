interface ButtonProps {
    title: string,
    link: string,
    color: string
}

const Button = ({title, link,color}:ButtonProps) => {
  return (
    <a href={link} className="w-full sm:w-1/3 flex border-[1.5px] rounded-md h-10" style={{borderColor: `${color}`}}>
      <p className="m-auto">
          {title}
      </p>
    </a>
  )
}

export default Button