import styled from "styled-components";

export const Header = styled.header<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || "gray"};
  min-height: 10vh;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: row;
  align-items: start;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme?.colors.textColor || "white"};
  margin-bottom: 2rem;
  text-align: center;
  p {
    margin: 1rem;
  }
`;
