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
      <div className="containerCheckbox">
    <SelectCheckbox  TextButton={"Size"} Icon={"Plus"} Name={['S','M','L','XL', 'XXL', '3XL', '4XL', '5XL']}  />
    <SelectCheckbox  TextButton={"Color"} Icon={"Plus"} Name={['Blue','Maroon Red','Crimson Red','Seinna Pink', 'Teal', 'Aquamarine', 'Off-White', 'Muave Orange']}  />
    <SelectCheckbox  TextButton={"Brand"} Icon={"Plus"} Name={['Zara','D & G','H & M','Chanel', 'Prada', 'Biba', 'CoraL', 'Other']}  />
    <SelectCheckbox  TextButton={"Price Range"} Icon={"Plus"} Name={['$1 - $50','$51 - $100','$101 - $150','$151 - $200', '$201 - $250', '$251 - $300', '$301 - $350', '$351 - Max']}  />
    <SelectCheckbox  TextButton={"Discount"} Icon={"Plus"} Name={['Mais de 5% OFF','Mais de 10% OFF','Mais de 15% OFF','Mais de 20% OFF', 'Mais de 25% OFF', 'Mais de 30% OFF', 'Mais de 35% OFF', 'Mais de 40% OFF']}  />
    <SelectCheckbox  TextButton={"Availability"} Icon={"Plus"} Name={['Small','Medium','Large','Extra Large']}  />
    </div>
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