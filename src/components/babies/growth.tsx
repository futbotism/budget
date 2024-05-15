import { useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { BabyEvents } from "state/babies";

type Props = {
  data: BabyEvents[]
}

export function Growth(props: Props) {
  const freiaData = props.data.filter(event => event.Weight && event.Event === 'Freia').map(event => ({
    x: new Date(event.Timestamp),
    y: event.Weight
  }))
  const ellinorData = props.data.filter(event => event.Weight && event.Event === 'Ellinor').map(event => ({
    x: new Date(event.Timestamp),
    y: event.Weight
  }))
  const [chart] = useState<ApexCharts.ApexOptions>({
    chart: {
      width: '800px',
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: '',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      type: "datetime"
    },
    series: [{
      data: freiaData,
      name: 'Freia'
    },{
      data: ellinorData,
      name: 'Ellinor'
    }]
  });

  return (
    <div>
      <Chart
        options={chart}
        series={chart.series}
      />
    </div>
  )

}