// src/Dashboard.tsx
import React, { useState } from "react";
import { Responsive, WidthProvider, Layouts, Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { breakpoints, cols, generateLayouts } from "../config/gridConfig";
import GridCard from "../components/Cards/GridCard";
import { chartItems } from "../data/ChartData";

const ResponsiveGridLayout = WidthProvider(Responsive);

const KeyMetrics: React.FC = () => {
  // Generate layouts dynamically based on the number of cards.
  const layouts: Layouts = generateLayouts(chartItems.length);
  // Track which card is currently being dragged by its id.
  const [draggingCardId, setDraggingCardId] = useState<number | null>(null);

  // onDragStart is fired when a drag begins.
  const onDragStart = (
    layout: Layout[],
    oldItem: Layout,
    newItem: Layout,
    placeholder: Layout,
    event: MouseEvent,
    element: HTMLElement
  ): void => {
    // Set the dragged card's id.
    setDraggingCardId(+oldItem.i + 1);
  };

  // onDragStop is fired when a drag stops.
  const onDragStop = (
    layout: Layout[],
    oldItem: Layout,
    newItem: Layout,
    placeholder: Layout,
    event: MouseEvent,
    element: HTMLElement
  ): void => {
    // Clear the dragged card's id.
    setDraggingCardId(null);
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={breakpoints}
      cols={cols}
      onDragStart={onDragStart}
      onDragStop={onDragStop}
      // rowHeight={100} // Row height in pixels; adjust as needed.
      draggableHandle=".MuiCardHeader-root" // Restrict dragging to the card header.
      isResizable={false}
    >
      {chartItems.map((chart, index) => {
        return (
          <div key={`${index}`}>
            <GridCard
              title={chart.title}
              content={chart.content}
              isDragging={draggingCardId == chart.id}
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            />
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

export default KeyMetrics;
