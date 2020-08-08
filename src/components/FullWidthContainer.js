import styled from "styled-components";

const FullWidthContainer = styled.div`
  position: relative;
  height: calc(100vh - 60px);
  width: 100vw;
  background: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: start;
`;

export default FullWidthContainer;
