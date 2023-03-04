import { useState } from "react";
import { GetServerSideProps, type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [message, setMessage] = useState("");
  const { mutateAsync, isLoading } = api.example.getMessage.useMutation();

  const handleClick = async () => {
    const fetchedMessage = await mutateAsync();

    setMessage(fetchedMessage);
  };

  return (
    <div>
      <p>{t("common:hello-frontend")}</p>
      <button onClick={() => void handleClick()} disabled={isLoading}>
        {t("common:get-message")}
      </button>
      <button
        onClick={() =>
          void router.push(router.pathname, router.asPath, {
            locale: i18n.language === "ro" ? "en" : "ro",
          })
        }
      >
        {t("common:switch-language")}
      </button>
      <p>{message}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default Home;
