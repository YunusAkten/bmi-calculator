import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;

  font-size: calc(10px + 2vmin);
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
  p,
  a {
    margin-top: 4rem;
    color: ${({ theme }) => theme?.colors.textColor || "white"};
  }
`;
