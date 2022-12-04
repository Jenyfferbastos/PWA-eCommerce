import styled from "styled-components";
import { px2vw } from "../../utils/px2vw";

export const RadioCheckboxStyle = styled.div`
.container {
  font-size:  ${px2vw(16)};
  font-weight: 500;
  line-height:  ${px2vw(20)};
  width: ${px2vw(200)};
  display: block;
  position: relative;
  padding-left: ${px2vw(28)};
  color: #626262;
  margin-bottom: ${px2vw(12)};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: ${px2vw(17)};
  width: ${px2vw(17)};
  background-color: #FFFFFF;
  border: solid 2px #626262;
  border-radius: ${px2vw(2)};
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #1B4B66;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: ${px2vw(5)};
  top: ${px2vw(2)};
  width: ${px2vw(4)};
  height: ${px2vw(8)};
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`