import PropTypes from "prop-types"

export default function ContactIcon({icons}){
  return(
    <>
      {icons.map(({title,img,link})=>{
        return(
          <a key={title} href={link}>
            <img src={img} alt={title} />
          </a>
        )
      })}
    </>
  )
}

ContactIcon.propTypes={
  icons: PropTypes.array,
}