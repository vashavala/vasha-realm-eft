'use client'
import { forwardRef, useImperativeHandle, useState } from "react"
import { IconClose } from "@/svgs"

type PopupPos = 'top' | 'bottom' | 'left' | 'right' | 'center'

type PopupProps = {
  maskClassName?: string
  boxClassName?: string
  position?: PopupPos
  children?: React.ReactNode
}

export type PopupHandle = {
  show: () => void;
  hide: () => void;
};

const Popup = forwardRef<PopupHandle, PopupProps>((props, ref) => {
  const {
    maskClassName = '',
    boxClassName = '',
    children = null,
    position = 'center'
  } = props
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  useImperativeHandle(ref, () => ({
    show: handleShow,
    hide: handleHide,
  }));
  return show && (
    <div className={`z-[100] fixed inset-0 backdrop-blur-[.2rem] ${maskClassName}`}>
      <div className={`
          absolute
          portrait:w-[60vw] landscape:h-[60vh] aspect-[1/1.618]
          bg-[var(--bgc)] text-[var(--tc)]
          rounded-[2rem] shadow-[0_0_32px_16px_rgba(255,255,255,.1)]
          p-[2rem]
          ${position === 'center' && `left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}
          ${position === 'right' && `inset-y-0 right-0`}
          ${position === 'left' && `inset-y-0 left-0`}
          ${position === 'top' && `inset-x-0 top-0`}
          ${position === 'bottom' && `inset-x-0 bottom-0`}
          ${boxClassName}
        `}>
        <div
          className="
            absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[200%]
            w-[2rem] h-[2rem] flex items-center justify-center rounded-full cursor-pointer
            hover:bg-[var(--tc)] group duration-200
          "
          onClick={handleHide}
        >
          <IconClose classNames="group-hover:*:!stroke-black *:duration-200" />
        </div>
        {children}
      </div>
    </div>
  )
})

Popup.displayName = 'Popup';

export default Popup