import { BannerAlert } from "../../components/BannerAlert/BannerAlert";
import { HandpickedCollections } from "../../components/HandpickedCollections/HandpickedCollections";
import { Header } from "../../components/Header/Header";
import { MainCarousel } from "../../components/MainBanner/MainBanner";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ShopByBrands } from "../../components/ShopByBrands/ShopByBrands";
import { TopCategories } from "../../components/TopCategories/TopCategories";

export function Home() {

  return (
    <>
      <Header />
      <BannerAlert />
      <MainCarousel />
      <TopCategories />
      <ProductCard />
      <HandpickedCollections />
      <ShopByBrands />
    </>
  );
}