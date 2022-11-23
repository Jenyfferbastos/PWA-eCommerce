import styled from "styled-components";

export const MainCarouselStyle = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .inner {
    display: flex;
  }
  .item{
    width: 100%;
    padding: 14px;
  }
  .item img{
    width: 97vw;
    pointer-events: none;
    border-radius: 1rem;
  }
  .carousel{
    cursor: grap;
    overflow: hidden;
  }
`;
