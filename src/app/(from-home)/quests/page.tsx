'use client'
import { Header } from "@/biz-components";
import { Container } from "@/components";

const QuestsPage = () => {
  const colAmount = 20
  const rowAmount = 20
  const colArr = Array.from({ length: colAmount }, (v, i) => i);
  const rowArr = Array.from({ length: rowAmount }, (v, i) => i)

  const questPos = Array.from({ length: rowAmount + 1 }).map(() => Array.from({ length: colAmount + 1 }, () => ""))
  questPos[1][1] = 'Prapor'
  questPos[1][2] = 'Shooting Cans'

  const questArrow = Array.from({ length: rowAmount + 1 }).map(() => Array.from({ length: colAmount + 1 }, () => ""))
  questArrow[1][2] = 'L'
  return (
    <Container>
      <Header />
      <div className="size-full overflow-auto relative">
        {rowArr.map(row => <div key={row} className="whitespace-nowrap">
          {colArr.map(col => <div key={col} className="inline-block align-middle aspect-square outline w-[12rem]"></div>)}
        </div>)}

        {questArrow.map(
          (row, rowIdx) => row.map(
            (col, colIdx) => col &&
              <div
                key={`${rowIdx}-${colIdx}`}
                className="w-[12rem] h-[.5rem] bg-[var(--tc)] absolute"
                style={
                  col ? { top: `${rowIdx * 12 - 1 / 4}rem`, left: `${(colIdx - 1) * 12}rem` } : {}
                }
              >
                {col}
              </div>
          )
        )}

        {questPos.map(
          (row, rowIdx) => row.map(
            (col, colIdx) => col &&
              <div
                key={`${rowIdx}-${colIdx}`}
                className="border p-[.8rem] whitespace-nowrap rounded-xl bg-[var(--bgc)] cursor-pointer absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${rowIdx * 12}rem`,
                  left: `${colIdx * 12}rem`
                }}
              >
                {col}
              </div>
          )
        )}
      </div>
    </Container>
  );
}

export default QuestsPage;