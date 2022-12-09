import styled from "styled-components";

interface DuoPrimaryStyleProps {
  sizeDuoPrimary: string;
}
interface DuoSecondaryStyleProps {
  sizeDuoSecondary: string;
}
export const DuoStyle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DuoPrimaryStyle = styled.button<DuoPrimaryStyleProps>`
  width: ${(props) => props.sizeDuoPrimary};
  height: 44px;
  background-color: #1B4B66;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  color: #FFFFFF;
  font-size: 0.75rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
`;

export const DuoSecondaryStyle = styled.button<DuoSecondaryStyleProps>`
  width: ${(props) => props.sizeDuoSecondary};
  height: 44px;
  background-color: #F4F4F4;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;