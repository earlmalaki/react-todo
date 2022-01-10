import React from "react";
import { Container } from "./components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Flex } from "./components/styles/Flex.styled";
import Sheet from "./components/Sheet";
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = {
  colors: {
    body: "#fff",
    primary: "#333",
    light: "#ccc",
  },
};

function App() {
  const today = new Date().toLocaleDateString();
  // const yesterday = new Date(todayDate);
  // const tomorrow = new Date(todayDate);
  // const today = todayDate.toLocaleDateString();
  // yesterday.setDate(yesterday.getDate() - 1);
  // tomorrow.setDate(tomorrow.getDate() + 1);

  // yesterday.toLocaleDateString();
  // tomorrow.toLocaleDateString();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <Flex>
          <Sheet title="Gahapon" date={today} />
          <Sheet title="Karon" date={today} />
          <Sheet title="Ugma" date={today} />
        </Flex>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
