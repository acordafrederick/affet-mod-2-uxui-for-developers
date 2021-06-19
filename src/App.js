import { GlobalStyle } from "./utils";
import { Button } from "./components/Button";

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Button onClick={() => alert("Triggered by button click!")}>
        This is a default button
      </Button>
      <br />
      <br />
      <Button href="http://google.com">
        This is a default button with a link
      </Button>
    </main>
  );
};

export default App;
