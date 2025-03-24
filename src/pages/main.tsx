import BestSellers from "../modules/Banner/BestSeller"
import CategoryImages from "../modules/Banner/CategoryBanner"
import Commets from "../modules/Banner/Commets"

import Gifts from "../modules/Banner/Gifts"
import HeroBanner from "../modules/Banner/HeroBanner"
import SignatureComponent from "../modules/Banner/Signature"
import Footer from "../modules/Footer/Footer"
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
    <CategoryImages/>
    <BestSellers/>
    <Commets/>
    <Footer/>
    </>
  )
}

export default Main