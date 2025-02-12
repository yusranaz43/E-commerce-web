import Cards from "./components/cards";
import Clients from "./components/clients";
import Content from "./components/content";
import FeatureProduct from "./components/feature";
import Hero from "./components/hero";
import ProductCard from "./components/productscard";

export default function Home(){
  return(
    <main>
      <Hero/>
      <Clients/>
      <Cards/>
      <ProductCard/>
      <Content/>
      <FeatureProduct/>
    </main>
  )
}