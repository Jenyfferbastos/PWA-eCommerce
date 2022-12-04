import { ModelProductCard } from "./ModelProductCard";
import ImagemBag1 from "../../assets/img/image-bag-1.png";
import ImagemBag2 from "../../assets/img/image-bag-2.png";
import ImagemBag3 from "../../assets/img/image-bag-3.png";
import ImagemBag4 from "../../assets/img/image-bag-4.png";
import { ContainerNavStyle, ProductCardStyle } from "./ProductCardStyle";
import { Icons } from "../Icons/Icons";
import { Link } from "react-router-dom";

export function ProductCard() {
  return (
    <>
    <ContainerNavStyle>
    <h2>New Arrivals</h2>
    <button>View All
      <Icons icon={'ChevronRight'} />
    </button>
    </ContainerNavStyle>
    
    <ProductCardStyle>
      <Link to="/Handbags/Grande"><ModelProductCard nameBag="Grande" descritionBag="Blossom Pouch" valueBag="$39.49" img={ImagemBag1} /></Link>

      <Link to="/Handbags/Coach"><ModelProductCard nameBag="Coach" descritionBag="Leather Coach Bag" valueBag="$54.69" img={ImagemBag2} /></Link>

      <Link to="/Handbags/Remus"><ModelProductCard nameBag="Remus" descritionBag="Brown Strap Bag" valueBag="$57.00" img={ImagemBag3} /></Link>

      <Link to="/Handbags/Boujee"><ModelProductCard nameBag="Boujee" descritionBag="Black Bag" valueBag="$56.49" img={ImagemBag4} /></Link>
    </ProductCardStyle>
    </>
  );
}
