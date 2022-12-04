import styled from "styled-components";
import { px2vw } from "../../../utils/px2vw";

export const ButtonFalseBackStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: ${px2vw(180)};
  height: ${px2vw(38)};
  background: transparent;
  border-radius: ${px2vw(8)};
  font-weight: 600;
  font-size:${px2vw(16)};
  color:  #1b4b66;
  border: solid 1px #1b4b66;
  margin-top: ${px2vw(16)};
  margin-bottom: ${px2vw(12)};
  cursor: pointer;
`;