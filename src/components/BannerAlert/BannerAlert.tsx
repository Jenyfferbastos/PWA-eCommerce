import { Link } from "react-router-dom";
import "./BannerAlertStyle";
import { BannerAlertStyle } from "./BannerAlertStyle";

export function BannerAlert() {
  return (
    <>
      <BannerAlertStyle>
        <p>
          We are currently experiencing local customs clearance delays. For the
          latest updates, please check your order status{" "}
          <Link to={"*"}> here</Link>
        </p>
      </BannerAlertStyle>
    </>
  );
}
