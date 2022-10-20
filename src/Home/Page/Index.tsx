import { Suscribe } from '../../Subcribe/Components/Suscribe';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import Instagram from '../Components/Instagram';
import ProductList from '../Components/ProductList';
export const Index = () => {
  
  return (
    <>
      <Header/>
      <ProductList/>
      <Instagram/>
      <Suscribe/>
      <Footer/>
    </>
  )
}
