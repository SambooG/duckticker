import React, { Component } from 'react';
import Chart from "chart.js";
import duck from './assets/duck.jpg';


const chartPoint = new Image(45,45)
  chartPoint.src = duck

// let apiChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");

        // const bubbleData = this.props.labels.map((label, index) => {
        //     return { x: Number(label.split('-').join('')), y: this.props.data[index], r: 10  };
        // });

        // Props is passed in from the graph-dashboard component
        const myLineChart = new Chart(myChartRef, {
            type: 'line',
            data: {
                labels: this.props.labels,
                datasets: [{
                    label: this.props.name,
                    data: this.props.data,
                    backgroundColor: [
                        'rgba(44, 196, 246, 1)',
                        'rgba(8, 153, 201, 1)',
                    ],
                    borderColor: 'rgba(8, 153, 201, 1)',
                    borderWidth: 1,
                    pointStyle: chartPoint,
                    height: 10,
                    width:5
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }


    render() {

        return (
            <div
                // className={classes.graphContainer}
            >
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

  