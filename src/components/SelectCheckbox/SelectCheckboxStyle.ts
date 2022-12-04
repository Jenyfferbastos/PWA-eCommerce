import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const SelectCheckboxStyle = styled.div`
  button{
    background: none;
    border: none;
    width: ${px2vw(280)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    font-size: ${px2vw(16)};
    padding: 10px 2px;
    margin-bottom: ${px2vw(16)};
  }
  img{
    width: ${px2vw(20)}
  }
`
