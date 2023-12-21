import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0 ; 
}
    body {
        font-family: 'Roboto', sans-serif;
        background-color: ${({ theme }) =>
          theme?.colors.backgroundColor || "#f5f5f5"};
        color: ${({ theme }) => theme?.colors.textColor || "black"};
        
        height: 100vh;
       
    }
    #root{
        height: 100vh;
    }
    label{
        margin: 0.5rem;
        
    }
    input{
        margin: 0.5rem 0;
        border-radius: 0.4rem;
        padding: 0.5rem;
    }
    ul{
        margin:0 1rem;
  
  list-style: none; /* Remove default bullets */

    }
    li{
        margin:0.5rem 1rem ;
        
    }
 
    h1,h2,h3,h4,h5,h6{
        margin: 0.5rem 0;
    }
    
   
`;
