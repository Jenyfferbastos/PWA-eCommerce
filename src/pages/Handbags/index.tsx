import { BannerHandbags } from "../../components/BannerHandbags/BannerHandbags";
import { CardHorizontal } from "../../components/CardHorizontal/CardHorizontal";
import { Header } from "../../components/Header/Header";
import { SelectCheckbox } from "../../components/SelectCheckbox/SelectCheckbox";
import ImagemBag1 from "../../assets/img/image-bag-1.png";
import ImagemBag2 from "../../assets/img/image-bag-2.png";
import ImagemBag3 from "../../assets/img/image-bag-3.png";
import ImagemBag4 from "../../assets/img/image-bag-4.png";
import { ContainerProductListing, ProductListing } from "./Handbags";
import { Flex } from "../../components/ProductCard/ModelProductCardStyle";
import { Footer } from "../../components/Footer/Footer";
import { ListingOptions } from "../../components/ListingOptions/ListingOptions";

export function Handbags(){
  return(
    <>
    <Header />
    <BannerHandbags />
    <Flex>
    <SelectCheckbox  TextButton={"teste"} Icon={"Plus"}  />
    <ContainerProductListing>
    <ListingOptions />
    <ProductListing>
    <CardHorizontal img={ImagemBag1} nameBag={"Grande"} descritionBag={"Blossom Pouch"} valueBeforeBag={"$39.49"} valueAfterBag={"$78.66"} valueDiscountBag={"50% OFF"} rating={"43 Ratings"} />
    <CardHorizontal img={ImagemBag2} nameBag={"Grande"} descritionBag={"Blossom Pouch"} valueBeforeBag={"$39.49"} valueAfterBag={"$78.66"} valueDiscountBag={"50% OFF"} rating={"43 Ratings"} />
    <CardHorizontal img={ImagemBag3} nameBag={"Grande"} descritionBag={"Blossom Pouch"} valueBeforeBag={"$39.49"} valueAfterBag={"$78.66"} valueDiscountBag={"50% OFF"} rating={"43 Ratings"} />
    <CardHorizontal img={ImagemBag3} nameBag={"Grande"} descritionBag={"Blossom Pouch"} valueBeforeBag={"$39.49"} valueAfterBag={"$78.66"} valueDiscountBag={"50% OFF"} rating={"43 Ratings"} />
    <CardHorizontal img={ImagemBag3} nameBag={"Grande"} descritionBag={"Blossom Pouch"} valueBeforeBag={"$39.49"} valueAfterBag={"$78.66"} valueDiscountBag={"50% OFF"} rating={"43 Ratings"} />
    <CardHorizontal img={ImagemBag3} nameBag={"Grande"} descritionBag={"Blossom Pouch"} valueBeforeBag={"$39.49"} valueAfterBag={"$78.66"} valueDiscountBag={"50% OFF"} rating={"43 Ratings"} />
    </ProductListing>
    </ContainerProductListing>
    </Flex>
    <Footer />
    </>
  )
}