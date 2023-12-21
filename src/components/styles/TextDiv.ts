import styled from "styled-components";

export const TextDiv = styled.div<{ $risk: "no-risk" | "warning" | "danger" }>`
  height: 40%;

  #bmiClass {
    color: ${({ theme, $risk }) =>
      $risk === "no-risk"
        ? theme.colors.success
        : $risk === "warning"
        ? theme.colors.warning
        : theme.colors.danger};
  }
  ul > li::before {
    content: "•"; /* Insert content that looks like bullets */
    margin-right: 0.5rem;
    color: ${({ theme, $risk }) =>
      $risk === "no-risk"
        ? theme.colors.success
        : $risk === "warning"
        ? theme.colors.warning
        : "red"};
    font-weight: bold;
    margin-top: 0.5rem;
  }
  #risk {
    color: ${({ theme, $risk }) =>
      $risk === "no-risk"
        ? theme.colors.success
        : $risk === "warning"
        ? theme.colors.warning
        : theme.colors.danger};
  }
  #bmi {
    color: ${({ theme, $risk }) =>
      $risk === "no-risk"
        ? theme.colors.success
        : $risk === "warning"
        ? theme.colors.warning
        : theme.colors.danger};
  }
`;
