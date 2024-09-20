// import { TranslateOptions } from 'i18n-js/typings';
// import React, { useEffect, useMemo, useState } from 'react';
// import { StyleSheet } from 'react-native';
// import * as RNLocalize from 'react-native-localize';
// import RNRestart from 'react-native-restart';
// import { i18n } from '../translations/I18n';
// import { i18Storage } from '../local-storage/i18n-storage/i18nStorage';
// export type Ttype = (scope: string, options?: TranslateOptions) => string
// type Locale = 'hi' | 'en';
// // type Currency = '1' | '2';

// interface LocalizationContextProps {
//   locale: string;
//   setLocale: React.Dispatch<React.SetStateAction<Locale>>;
//   t: Ttype;
//   updateLocaleAndRestart: any;
//   ConvertToHindiNumbers?: any;
// }

// interface LocalizationContextWrapperProps {
//   children: React.ReactNode;
// }

// export const LocalizationContext =
//   React.createContext<LocalizationContextProps | null>(null);

// const LocalizationContextWrapper: React.FC<
//   LocalizationContextWrapperProps
// > = props => {
//   const { children } = props;
//   const [locale, setLocale] = useState<Locale>('en');

//   const updateLocaleAndRestart = async () => {
//     if (locale === 'en') {
//       setLocale('hi');
//       await i18Storage.storeAppLanguage('hi');
//       RNRestart.restart();
//       return;
//     }
//     if (locale === 'hi') {
//       setLocale('en');
//       await i18Storage.storeAppLanguage('en');
//       RNRestart.restart();
//       return;
//     }
//   };

//   const ConvertToHindiNumbers = (num: number) => {
//     if (locale === 'hi') {
//       const hindiNumbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
//       return new String(num).replace(/[0-9]/g, (d: any) => {
//         return hindiNumbers[d];
//       });
//     } else {
//       return num;
//     }
//   };

//   const memoizedValues = useMemo(() => {
//     i18n.locale = locale;
//     return {
//       t: (scope: string, options?: TranslateOptions) =>
//         i18n.t(scope, { ...options }),
//       locale,
//       setLocale,
//       updateLocaleAndRestart,
//       ConvertToHindiNumbers
//     };
//   }, [locale]);

//   const checkAppLanguageAndSet = async () => {
//     const appStoredLang = await i18Storage.retreiveAppLanguage();
//     if (!appStoredLang) {
//       if (
//         RNLocalize.getLocales()[0].languageCode !== 'en' &&
//         RNLocalize.getLocales()[0].languageCode !== 'hi'
//       ) {
//         return setLocale('hi');
//       }
//       setLocale(RNLocalize.getLocales()[0].languageCode as Locale);
//     }
//     if (appStoredLang) {
//       setLocale(appStoredLang as Locale);
//     }
//   };

//   useEffect(() => {
//     checkAppLanguageAndSet();
//   }, []);

//   return (
//     <LocalizationContext.Provider value={memoizedValues}>
//       {children}
//     </LocalizationContext.Provider>
//   );
// };

// export default LocalizationContextWrapper;

// const styles = StyleSheet.create({});
