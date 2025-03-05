const IconSettings = ({ classNames = '' }: { classNames?: string }) => {
  const SQRT3 = Math.sqrt(3)
  const halfSQRT3 = SQRT3 / 2
  const sideLen = 50
  const halfSide = 50 / 2
  const height = halfSQRT3 * sideLen
  return (
    <svg viewBox={`0 ${50 - height} 100 ${2 * height}`} className={`cursor-pointer w-[2rem] ${classNames}`}>
      <path d={`
        M0 50
        L${halfSide} ${50 - height}
        h50
        L100 50
        L${100 - halfSide} ${50 + height}
        h-50
        z
      `} className="stroke-none fill-white" />

      <circle cx={50} cy={50} r={20} className="stroke-none fill-black" />
    </svg>
  )
}

export default IconSettings