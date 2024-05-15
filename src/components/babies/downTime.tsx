import { useState } from "react";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import { BabyEvents } from "state/babies";

type Props = {
  data: BabyEvents[]
}

export function DownTime(props: Props) {
  const data = props.data.filter(event => event.downTime?.includes(':')).map(event => {
    const [a, b] = event.downTime.split(':')
    const y = (+b / 60) + +a
    
    return {
      x: new Date(event.Timestamp),
      y
    }
  })
  console.log(data)
  const [chart] = useState<ApexCharts.ApexOptions>({
    chart: {
      height: 350,
      width: '800px',
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
      text: ''
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
      data,
      name: 'Down time'
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