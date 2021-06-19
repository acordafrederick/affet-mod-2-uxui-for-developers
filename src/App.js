import { GlobalStyle } from "./utils";
import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { Header, Nav, NavItem } from "./components/Nav";

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Header>
        <Logo />
        <Nav>
          <NavItem href="#">Shop</NavItem>
          <NavItem href="#">Blog</NavItem>
          <NavItem href="#">Location</NavItem>
          <NavItem href="#">Contact</NavItem>
        </Nav>
      </Header>

      <Header variant="right">
        <Logo variant="secondary" href="#" />
        <Nav>
          <NavItem href="#">Shop</NavItem>
          <NavItem href="#">Blog</NavItem>
          <NavItem href="#">Location</NavItem>
          <NavItem href="#">Contact</NavItem>
        </Nav>
      </Header>

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
