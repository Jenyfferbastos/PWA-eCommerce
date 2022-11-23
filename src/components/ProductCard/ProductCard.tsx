import "./ProductCardStyle";
import { Card } from "../Card/Card";
import ImagemBag1 from "../../assets/img/image-bag-1.png";
import ImagemBag2 from "../../assets/img/image-bag-2.png";
import ImagemBag3 from "../../assets/img/image-bag-3.png";
import ImagemBag4 from "../../assets/img/image-bag-4.png";
import { ProductCardStyle } from "./ProductCardStyle";

export function ProductCard() {
  return (
    <ProductCardStyle>
      <Card nameBag="Grande" descritionBag="Blossom Pouch" valueBag="$39.49" img={ImagemBag1} />

      <Card nameBag="Coach" descritionBag="Leather Coach Bag" valueBag="$54.69" img={ImagemBag2} />

      <Card nameBag="Remus" descritionBag="Brown Strap Bag" valueBag="$57.00" img={ImagemBag3} />

      <Card nameBag="Boujee" descritionBag="Black Bag" valueBag="$56.49" img={ImagemBag4} />
    </ProductCardStyle>
  );
}
