import { Container } from "@/components";

const QuestsPage = () => {
  const colAmount = 20
  const rowAmount = 20
  const colArr = Array.from({ length: colAmount }, (v, i) => i);
  const rowArr = Array.from({ length: rowAmount }, (v, i) => i)
  return (
    <Container>
      <div className="size-full overflow-auto">
        {rowArr.map(row => <div key={row} className="whitespace-nowrap">
          {colArr.map(col => <div key={col} className="inline-block w-[8rem] aspect-square outline">{row}-{col}</div>)}
        </div>)}
      </div>
    </Container>
  );
}

export default QuestsPage;