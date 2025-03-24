import Gifts from "../modules/Banner/Gifts"
import HeroBanner from "../modules/Banner/HeroBanner"
import SignatureComponent from "../modules/Banner/Signature"
import Header from "../modules/Header/Header"
import Products from "../modules/Products/Products"

const Main = () => {
  return (
    <>
    <Header/>
    <HeroBanner/>
    <Gifts/>
    <SignatureComponent/>
    <Products/>
    </>
  )
}

export default Main