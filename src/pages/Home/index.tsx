import { BannerAlert } from "../../components/BannerAlert/BannerAlert";
import { Cta } from "../../components/CTA/Cta";
import { EndBannerHome } from "../../components/EndBannerHome/EndBannerHome";
import { Footer } from "../../components/Footer/Footer";
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
      <Cta />
      <EndBannerHome />
      <Footer />
    </>
  );
}