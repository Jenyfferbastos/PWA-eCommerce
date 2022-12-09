import styled from "styled-components";
import { mediaQueries } from "../../utils/mediaQueries";

export const ListingOptionsStyle = styled.div`
 ${mediaQueries.mobile} {
  display: none;
 }
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #171520;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;

  .containerLayout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 280px;
  }
  .containerShow {
    display: flex;
    align-items: center;
  }

  input {
    width: 50px;
    border: none;
    background-color: #f1f1f1;
    height: 40px;
    border-radius: 4px;
    padding-left: 20px;
  }
  select, option{
    width: 170px;
    padding: 10px;
    background-color: #F1F1F1;
    border: none;
    border-radius: 4px;
    height: 40px;
  }
`;
