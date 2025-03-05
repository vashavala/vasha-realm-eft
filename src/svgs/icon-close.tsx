const IconClose = ({ classNames = '' }: { classNames?: string }) => {
  return (
    <svg viewBox={`0 0 100 100`} className={`cursor-pointer w-[1rem] ${classNames}`}>
      <path d={`M0 0 L100 100`} className="stroke-white stroke-[20] fill-black" />
      <path d={`M100 0 L0 100`} className="stroke-white stroke-[20] fill-black" />
    </svg>
  )
}

export default IconClose