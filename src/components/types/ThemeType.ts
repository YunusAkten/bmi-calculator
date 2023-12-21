import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      textColor: string;
      tertiary: string;
      success: string;
      danger: string;
      warning: string;
    };
  }
}
