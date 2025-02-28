import CustomChart from "../components/Charts/CustomChart";

interface ChartItem {
  id: number;
  title: string;
  content: React.ReactElement | string;
}

const donutSeries = [44, 55, 41, 17, 15];
const donutOptions: ApexCharts.ApexOptions = {
  labels: ["Apples", "Oranges", "Bananas", "Grapes", "Berries"],
  legend: {
    show: true,
    position: "right", // Positions the legend on the side
    horizontalAlign: "center",
    offsetY: 40,
    offsetX: -50,
    labels: {
      colors: "#000",
    },
    itemMargin: {
      vertical: 5,
    },
  },

  plotOptions: {
    pie: {
      offsetY: 40,
      offsetX:15,
      customScale: 1.3,
      donut: {
        size: "50%",
        labels: {
          show: true,
          // Optional: style for the name and value sections
          name: {
            show: true,
            fontSize: "12px",
            color: "#333",
            offsetY: -10,
          },
          value: {
            // show: true,
            fontSize: "10px",
            color: "#333",
            offsetY: 10,
          },
          // Center total displays the trend change
          total: {
            show: true,
            showAlways: true,
            label: "",
            fontSize: "12px",
            color: "#333",
            formatter: () => {
              return "10%";
            },
          },
        },
      },
    },
  },
  // Optional: additional global chart options can be added here
};

export const chartItems: ChartItem[] = [
  {
    id: 1,
    title: "Sales Overview",
    content: (
      <CustomChart
        type="line"
        series={[{ name: "Sales", data: [10, 20, 15, 30, 40] }]}
        options={{ xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] } }}
        height={"100%"}
      />
    ),
  },
  {
    id: 2,
    title: "User Engagement",
    content: (
      <CustomChart
        type="donut"
        series={donutSeries}
        options={donutOptions}
        // Ensure height and width are set to fill the parent container
        height="100%"
      />
    ),
  },
  { id: 3, title: "Server Status", content: "Server uptime and load..." },
  { id: 4, title: "Sales Overview", content: "Detailed sales figures..." },
  { id: 5, title: "Sales Overview", content: "Detailed sales figures..." },
];
