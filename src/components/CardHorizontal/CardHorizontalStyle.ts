import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const ImageBag = styled.img`
  ${mediaQueries.desktop} {
    width: ;
  }
  ${mediaQueries.mobile} {
    width: 43vw;
  }
`
export const CardHorizontalStyle = styled.div`
${mediaQueries.desktop} {
  width: 332px;

  h4{
    color: #626262;
    font-size: 0.875rem;
    font-weight: 400;
  }
  .rating{
    color: #1B4B66;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .valueBeforeBag{
    color: #171520;
    font-weight: 600;
    font-size: 16px;
  }
  .valueAfterBag{
    color: #626262;
    font-weight: 400;
    font-size: 0.875rem;
    text-decoration-line: line-through;
  }
  .valueDiscountBag{
    color: #E21D1D;
    font-weight: 400;
    font-size: 1rem;
  }
  .containerRating{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
  }
}
${mediaQueries.mobile} {
  width: 43vw;
  margin-bottom: 2vh;

  h3{
    color: #171520;
    font-size: 0.75rem;
    font-weight: 600;
  }
  h4{
    color: #626262;
    font-size: 0.75rem;
    font-weight: 500;
  }
  .rating{
    color: #1B4B66;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .valueBeforeBag{
    color: #171520;
    font-weight: 500;
    font-size: 0.875rem;
  }
  .valueAfterBag{
    color: #626262;
    font-weight: 600;
    font-size: 0.625rem;
    text-decoration-line: line-through;
  }
  .valueDiscountBag{
    color: #E21D1D;
    font-weight: 500;
    font-size: 0.625rem;
  }
  .containerRating{
  display: none;
}}
`;

export const ValuesStyle = styled.div`
${mediaQueries.desktop} {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}
${mediaQueries.mobile} {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 42vw;
}
`;