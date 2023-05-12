import {
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  Page,
  Toolbar,
  Link,
  Button,
} from "framework7-react";
import { Block, BlockTitle, List, ListItem } from "konsta/react";
import useCounterStore from "../store";

const HomePage = () => {
  const { count, inc } = useCounterStore();

  return (
    <Page name="home">
      <Navbar large sliding={false}>
        <NavLeft>
          <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
        </NavLeft>
        <NavTitle sliding>F7 Template</NavTitle>
        <NavTitleLarge>F7 Template</NavTitleLarge>
      </Navbar>
      <Toolbar bottom>
        <Link>Left Link</Link>
        <Link>Right Link</Link>
        <Link>Right Link</Link>
      </Toolbar>
      <Block>
        <p>Here is your blank Framework7 app. Let's see what we have here.</p>
      </Block>
      <BlockTitle>Navigation</BlockTitle>
      <Block strong inset outline>
        <p>
          <b>Counter:</b> {count}
        </p>
        <Button fill onClick={inc}>
          Click me
        </Button>
      </Block>

      <BlockTitle>Counter</BlockTitle>
      <List strong inset dividersIos>
        <ListItem href="/about/" title="About" />
        <ListItem href="/panel/" title="Panels" />
      </List>

      <BlockTitle>Strong Inset Block</BlockTitle>
      <Block strong inset outline>
        <p>
          Donec et nulla auctor massa pharetra adipiscing ut sit amet sem.
          Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam
          mollis, vulputate turpis vel, sagittis felis.{" "}
        </p>
      </Block>

      <BlockTitle>Modals</BlockTitle>
      <Block className="grid-gap grid grid-cols-2">
        <Button fill popupOpen="#my-popup">
          Popup
        </Button>
        <Button fill loginScreenOpen="#my-login-screen">
          Login Screen
        </Button>
      </Block>

      <BlockTitle>Panels</BlockTitle>
      <Block className="grid-gap grid grid-cols-2">
        <Button fill panelOpen="left">
          Left Panel
        </Button>
        <Button fill panelOpen="right">
          Right Panel
        </Button>
      </Block>

      <List strong inset dividersIos>
        <ListItem
          title="Dynamic (Component) Route"
          href="/dynamic-route/blog/45/post/125/?foo=bar#about"
        />
        <ListItem
          title="Default Route (404)"
          href="/load-something-that-doesnt-exist/"
        />
        <ListItem
          title="Request Data & Load"
          href="/request-and-load/user/123456/"
        />
      </List>
    </Page>
  );
};
export default HomePage;
