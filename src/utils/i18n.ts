import { storage } from "./storage";
import { en_en, en_zh } from "@/lokalise"

export type Language = 'en' | 'zh';
interface NestedTranslationResources {
  [key: string]: string | NestedTranslationResources;
}
type TranslationResources = NestedTranslationResources;

const DEFAULT_LANGUAGE: Language = 'en';
const RESOURCES: Record<Language, TranslationResources> = {
  'en': en_en,
  'zh': en_zh
};

let currentLang: Language | null = null;

export const getLang = (): Language => {
  if (currentLang) return currentLang;

  try {
    const stored: string | null = storage.getItem('lang');
    if (stored && Object.keys(RESOURCES).includes(stored)) {
      return currentLang = stored as Language;
    }
  } catch (e) {
    console.warn('Failed to read language from storage:', e);
  }

  currentLang = DEFAULT_LANGUAGE;
  storage.setItem('lang', currentLang);
  return currentLang;
};

export const setLang = (lang: Language) => {
  if (!(lang in RESOURCES)) return;
  currentLang = lang;
  storage.setItem('lang', lang);
  window?.location?.reload()
};

const translate = (key: string, translations: TranslationResources): string => {
  return key.split('.').reduce((obj: TranslationResources | string, path) => {
    return typeof obj === 'string' ? obj : (obj[path] || key)
  }, translations) as string;
};

export const useTranslation = () => {
  const lang = getLang();
  const translations = RESOURCES[lang];

  const t = (key: string): string => {
    const result = translate(key, translations);
    if (result === key) {
      console.warn(`Translation missing for key: ${key}`);
      return translate(key, RESOURCES[DEFAULT_LANGUAGE]);
    }
    return result;
  };

  return { t, setLang };
};