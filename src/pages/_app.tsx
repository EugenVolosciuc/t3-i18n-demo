import { AppProps, type AppType } from "next/app";
import { appWithTranslation } from "next-i18next";
import { ComponentType } from "react";

import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(
  api.withTRPC(MyApp) as ComponentType<AppProps<any>>
);
