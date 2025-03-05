const SvgPanel = () => {
  // const { SQRT1_2, SQRT2 } = Math
  // const SQRT3 = Math.sqrt(3)
  const ARR = Array.from({ length: 11 }, (v, i) => i * 10)
  return (
    <svg viewBox={`0 0 100 100`} className="z-[1000] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square bg-black h-[50vh]">
      {ARR.map((v) => <path key={v} d={`M${v} 0 v100`} className="stroke-1 stroke-white" />)}
      {ARR.map((v) => <path key={v} d={`M0 ${v} h100`} className="stroke-1 stroke-white" />)}

      <path d={`M0 0 L100 100`} className="stroke-white stroke-[10] fill-black" />
      <path d={`M100 0 L0 100`} className="stroke-white stroke-[10] fill-black" />
    </svg>
  )
}

export default SvgPanel