import {
  App,
  Block,
  Link,
  NavRight,
  Navbar,
  Page,
  Panel,
  Popup,
  View,
  f7ready,
} from "framework7-react";
import { AppProps } from "framework7-react/components/app";
import { KonstaProvider } from "konsta/react";
import routes from "../routes";
import capacitorInit from "../capacitor-app";
import { useEffect } from "react";
import { Capacitor } from "@capacitor/core";

const MyApp = () => {
  const isWeb = Capacitor.getPlatform() === "web";

  const f7params: AppProps = {
    name: "F7 Template",
    darkMode: "auto",
    routes: routes,
    input: {
      scrollIntoViewOnFocus: !isWeb,
      scrollIntoViewCentered: !isWeb,
    },
  };

  useEffect(() => {
    f7ready(() => {
      if (isWeb) return;
      capacitorInit();
    });
  }, []);

  return (
    <KonstaProvider dark theme="parent">
      <App {...f7params}>
        <Panel left cover dark>
          <View>
            <Page>
              <Navbar title="Left Panel" />
              <Block>Left panel content goes here</Block>
            </Page>
          </View>
        </Panel>
        <View main url="/" />
        <Popup id="my-popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Popup content goes here.</p>
              </Block>
            </Page>
          </View>
        </Popup>
      </App>
    </KonstaProvider>
  );
};
export default MyApp;
