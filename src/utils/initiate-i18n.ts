import i18next from "i18next";
import Backend, { FsBackendOptions } from "i18next-fs-backend";
import path from "path";

const initI18N = async (locale?: string) => {
  return await i18next.use(Backend).init<FsBackendOptions>({
    lng: locale || "en",
    ns: ["common"], // Add here all of the namespaces you need
    interpolation: {
      // Added this because by default it was not handling formatted dates well
      escapeValue: false,
    },
    backend: {
      loadPath: path.join(process.cwd(), "/public/locales/{{lng}}/{{ns}}.json"),
    },
  });
};

export default initI18N;
