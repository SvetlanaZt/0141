import React from "react";
import Logo from "./component/Logo/Logo";
import SendMessage from "./component/SendMessage/SendMessage";
import Reviews from "./component/Reviews/Reviews";
import Wrapper from "./component/Wrapper/Wrapper";

function App() {
  return (
    <Wrapper>
      <Logo />
      <Reviews />
      <SendMessage />
    </Wrapper>
  );
}

export default App;
