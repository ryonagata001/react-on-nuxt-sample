import { en, ja } from "@CHILLNN-Inc/chillnn-driver-reservation-ui-react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  // debug: true,
  lng: "ja", // 現在の言語を設定する
  fallbackLng: "ja", // defaultでの言語を設定する
  supportedLngs: ["ja", "en"], // 対象の言語を選択する
  ns: ["reservation"], // 名前空間を設定する
  defaultNS: "reservation", // デフォルトの名前空間を設定する
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
  resources: {
    ja: {
      reservation: ja,
    },
    en: {
      reservation: en,
    },
  },
});

export default i18n;
