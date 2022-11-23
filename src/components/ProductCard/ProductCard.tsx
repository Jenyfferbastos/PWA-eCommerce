import "./ProductCardStyle";
import {
  CardStyle,
  Flex,
  ImageBag,
  ProductCardStyle,
} from "./ProductCardStyle";
import ImagemBag1 from "../../assets/img/image-bag-1.png";
import ImagemBag2 from "../../assets/img/image-bag-2.png";
import ImagemBag3 from "../../assets/img/image-bag-3.png";
import ImagemBag4 from "../../assets/img/image-bag-4.png";
import { Icons } from "../Icons/Icons";

export function ProductCard() {
  return (
    <ProductCardStyle>
      <CardStyle>
        <ImageBag src={ImagemBag1} />
        <Flex>
          <h3>Grande</h3>
        <Icons icon={"wishlistFillFalse"} />
        </Flex>
        <h4>Blossom Pouch</h4>
        <span>$39.49</span>
      </CardStyle>

      <CardStyle>
        <ImageBag src={ImagemBag2} />
        <Flex>
          <h3>Coach</h3>
          <Icons icon={"wishlistFillFalse"} />
        </Flex>
        <h4>Leather Coach Bag</h4>
        <span>$54.69</span>
      </CardStyle>

      <CardStyle>
        <ImageBag src={ImagemBag3} />
        <Flex>
          <h3>Remus</h3>
          <Icons icon={"wishlistFillFalse"} />
        </Flex>
        <h4>Brown Strap Bag</h4>
        <span>$57.00</span>
      </CardStyle>

      <CardStyle>
        <ImageBag src={ImagemBag4} />
        <Flex>
        <h3>Boujee</h3>
        <Icons icon={"wishlistFillFalse"} />
        </Flex>
        <h4>Black Bag</h4>
        <span>$56.49</span>
      </CardStyle>
    </ProductCardStyle>
  );
}
