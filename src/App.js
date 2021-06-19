import { GlobalStyle } from "./utils";
import { Button } from "./components/Button";
import { Logo } from "./components/Logo";

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Logo />
      <br />
      <br />
      <Logo variant="secondary" href="#" />
      <br />
      <br />
      <Button href="http://google.com">This is a button with a link</Button>
      <br />
      <br />
      <Button variant="secondary" size="large" disabled>
        This is a secondary disabled button
      </Button>
      <br />
      <br />
      <Button variant="tertiary" size="small">
        This is a tertiary button
      </Button>
    </main>
  );
};

export default App;
