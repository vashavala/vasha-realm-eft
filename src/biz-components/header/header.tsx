import { useRef } from "react";
import { Popup, PopupHandle } from "@/components"
import { IconSettings } from "@/svgs"

const SetLanguage = () => {
  return (
    <div>
      
    </div>
  )
}

const Header = () => {
  const popupRef = useRef<PopupHandle>(null);
  const openPopup = () => popupRef.current?.show();
  const closePopup = () => popupRef.current?.hide();
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
        <Popup ref={popupRef} >
          <div>

          </div>
        </Popup>
      </div>
    </header>
  )
}

export default Header