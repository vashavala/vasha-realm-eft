import { useRef, useState } from "react";
import { Popup, PopupHandle, Radio, RadioGroup } from "@/components"
import { IconSettings } from "@/svgs"
import { Language, useTranslation } from "@/utils/i18n";
import { storage } from "@/utils/storage";

const Header = () => {
  const { t, setLang } = useTranslation()
  const popupRef = useRef<PopupHandle>(null);
  const openPopup = () => popupRef.current?.show();

  const [selected, setSelected] = useState(
    storage.getItem('lang') as Language
  );

  const radios = [
    { label: t('header.settings.en'), value: 'en' },
    { label: t('header.settings.zh'), value: 'zh' }
  ]

  const changeLanguage = (arg: string) => {
    setSelected(arg as Language)
    setLang(arg as Language)
  }

  return (
    <header className="
      z-50 fixed inset-x-0 top-0 flex justify-between items-stretch shadow-2xl shadow-white/20
      *:aspect-square *:flex *:items-center *:justify-center
      h-[4rem]
    ">
      <div></div>
      <div>
        <div onClick={openPopup}>
          <IconSettings classNames="" />
        </div>
        <Popup ref={popupRef}>
          <div className="flex flex-col items-center">
            <div className="text-[1.5rem] font-bold mb-[1rem]">{t('header.settings.language')}</div>
            <RadioGroup value={selected} onChange={changeLanguage} name="language" classNames="flex-col gap-[.2rem]">
              {radios.map(radio => <Radio key={radio.value} value={radio.value}>{radio.label}</Radio>)}
            </RadioGroup>
          </div>
        </Popup>
      </div>
    </header>
  )
}

export default Header