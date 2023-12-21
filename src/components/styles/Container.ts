import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0 5rem;
  justify-content: center;
  & > div {
    width: 80%;
    margin: 3rem;
  }
  & > div > div {
    margin: 1rem 0;
    border-radius: 0.5rem;
  }
`;
