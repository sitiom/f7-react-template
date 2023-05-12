import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.framework7.myapp",
  appName: "F7 Template",
  webDir: "dist",
  server: {
    // For local development
    // url: "http://localhost:5173/",
    // cleartext: true,
    androidScheme: "https",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
    },
  },
};

export default config;
