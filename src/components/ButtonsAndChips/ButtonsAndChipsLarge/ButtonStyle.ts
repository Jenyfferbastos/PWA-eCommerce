import styled from "styled-components";
import { px2vw } from "../../../utils/px2vw";

export const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${px2vw(350)};
  height: ${px2vw(38)};
  background: #1b4b66;
  border-radius: ${px2vw(8)};
  font-weight: 600;
  font-size:${px2vw(14)};
  color: #FFFFFF;
  border: none;
  margin-top: ${px2vw(16)};
  margin-bottom: ${px2vw(12)};
`;
