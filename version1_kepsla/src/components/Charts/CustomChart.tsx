// ChartComponent.tsx
import React from "react";
import Chart from "react-apexcharts";

interface ChartComponentProps {
  title?: string;
  type: "line" | "bar" | "pie" | "donut" | "radialBar" | "area";
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  options?: ApexCharts.ApexOptions;
  height?: number | string;
}

const CustomChart: React.FC<ChartComponentProps> = ({
  title,
  type,
  series,
  options,
  height = "100%",
}) => {
  const defaultOptions: ApexCharts.ApexOptions = {
    chart: {
      background: "transparent",
      toolbar: { show: false },
    },
    xaxis: {
      type: "category",
      labels: { style: { colors: "#6b7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: { style: { colors: "#6b7280", fontSize: "12px" } },
    },
    tooltip: { theme: "dark" },
    ...options,
  };

  return (
    <div
      style={{ display: "flex", flexGrow: 1, height: "100%", width: "100%" }}
    >
      <Chart
        options={defaultOptions}
        series={series}
        type={type}
        height={height}
        width="100%"
      />
    </div>
  );
};

export default CustomChart;
