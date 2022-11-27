import styled from "styled-components";

export const CardHorizontalStyle = styled.div`
  width: 332px;

  h4{
    color: #626262;
    font-size: 14px;
    font-weight: 400;
  }
  .rating{
    color: #1B4B66;
    font-size: 14px;
    font-weight: 500;
  }
  .valueBeforeBag{
    color: #171520;
    font-weight: 500;
    font-size: 16px;
  }
  .valueAfterBag{
    color: #626262;
    font-weight: 400;
    font-size: 14px;
  }
  .valueDiscountBag{
    color: #E21D1D;
    font-weight: 400;
    font-size: 16px;
  }
  .containerRating{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
  }
`;

export const ValuesStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
`;