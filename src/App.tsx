import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "./components/styles/Header";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import { Container } from "./components/styles/Container";
import { DFlex } from "./components/styles/DFlex";
import { Button } from "./components/styles/Button";
import { TextDiv } from "./components/styles/TextDiv";
import { Footer } from "./components/styles/Footer";

import Results from "./components/Results";
import About from "./components/About";
type ThemeType = {
  colors: {
    backgroundColor: string;
    textColor: string;
    tertiary: string;
    success: string;
    warning: string;
    danger: string;
  };
};
const theme: ThemeType = {
  colors: {
    backgroundColor: "#164863",
    textColor: "#DDF2FD",
    tertiary: "#427D9D",
    success: "#6FCF97",
    warning: "#F7DB6A",
    danger: "#E06469",
  },
};
function App() {
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [bmi, setBmi] = useState<number>();
  const [risk, setRisk] = useState<"no-risk" | "warning" | "danger">("no-risk");
  useEffect(() => {
    const localStorageHeight = localStorage.getItem("height");
    const localStorageWeight = localStorage.getItem("weight");
    if (localStorageHeight && localStorageWeight) {
      setHeight(Number(localStorageHeight));
      setWeight(Number(localStorageWeight));
    }

    if (bmi) {
      if (bmi < 18.5) {
        setRisk("warning");
      } else if (bmi < 24.9) {
        setRisk("no-risk");
      } else if (bmi < 29.9) {
        setRisk("warning");
      } else if (bmi > 30) {
        setRisk("danger");
      }
    }
  }, [bmi]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const height = Number(event.currentTarget.height.value / 100);
    setHeight(height);
    window.localStorage.setItem("height", String(height));
    const weight = Number(event.currentTarget.weight.value);
    setWeight(weight);
    window.localStorage.setItem("weight", String(weight));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header $backgroundColor={theme.colors.tertiary}>
          <p>BMI Calculator</p>
        </Header>
        <Container>
          <GlobalStyle />
          <div>
            <form onSubmit={handleSubmit}>
              <DFlex>
                <div>
                  <label htmlFor="height">Height</label>
                  <input
                    type="number"
                    name="height"
                    placeholder={height ? String(height * 100) : "cm"}
                  />
                </div>
                <div>
                  <label htmlFor="weight">Weight</label>
                  <input
                    type="number"
                    min={1}
                    name="weight"
                    placeholder={weight ? String(weight) : "cm"}
                  />
                </div>

                <Button
                  $backgroundColor={theme.colors.tertiary}
                  $floatRight
                  color="white"
                  type="submit"
                >
                  Calculate
                </Button>
              </DFlex>
            </form>
          </div>

          <TextDiv $risk={risk}>
            <About />
            {height && weight && (
              <>
                <hr style={{ color: theme.colors.textColor }} />
                <Results
                  bmi={bmi}
                  setBmi={setBmi}
                  height={height}
                  weight={weight}
                />
              </>
            )}
          </TextDiv>
        </Container>
        <Footer>
          <a href="https://github.com/YunusAkten/">
            <img
              alt="github logo"
              height="32"
              width="32"
              src="https://cdn.simpleicons.org/github/white"
            />
          </a>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
