import Presentation from "../components/Presentation";
import RelevantProducts from "../components/RelevantProducts";
import PropTypes from "prop-types"

export default function Home ({products}){
  return(
    <>
      <Presentation/>
      <RelevantProducts products={products}/>
    </>
  )
}

Home.propTypes={
  products: PropTypes.array,
}