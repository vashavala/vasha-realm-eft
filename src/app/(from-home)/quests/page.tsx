'use client'
import { useEffect, useRef, useState } from "react";
import { Header } from "@/biz-components";
import { Container } from "@/components";
import { useTranslation } from "@/utils/i18n";

const QuestsPage = () => {
  const { t } = useTranslation()
  const colAmount = 20
  const rowAmount = 20
  const colArr = Array.from({ length: colAmount }, (v, i) => i);
  const rowArr = Array.from({ length: rowAmount }, (v, i) => i)

  const questPos = Array.from({ length: rowAmount + 1 }).map(() => Array.from({ length: colAmount + 1 }, () => ""))
  questPos[1][1] = 'Prapor'
  questPos[1][2] = t('quest.Shooting_Cans')
  questPos[1][3] = t('quest.Shooting_Cans')

  const questArrow = Array.from({ length: rowAmount + 1 }).map(() => Array.from({ length: colAmount + 1 }, () => ""))
  questArrow[1][2] = 'L'

  // 使用Ref存储拖拽相关状态
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const scrollTopRef = useRef(0);

  // 用于触发重新渲染的光标状态
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    // 初始化拖拽状态
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    scrollLeftRef.current = container.scrollLeft;
    scrollTopRef.current = container.scrollTop;

    // 防止文本选中
    e.preventDefault();
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      // 计算滚动距离
      const deltaX = e.clientX - startXRef.current;
      const deltaY = e.clientY - startYRef.current;

      // 更新滚动位置
      if (containerRef.current) {
        containerRef.current.scrollLeft = scrollLeftRef.current - deltaX;
        containerRef.current.scrollTop = scrollTopRef.current - deltaY;
      }
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;

      // 重置状态
      isDraggingRef.current = false;
      setIsDragging(false);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };

    // 绑定全局事件
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  return (
    <Container>
      <Header />
      <div
        ref={containerRef}
        className={`size-full overflow-auto relative ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
      >
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