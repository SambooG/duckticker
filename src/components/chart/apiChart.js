import React, { Component } from 'react';
import Chart from "chart.js";
import duck from './assets/duck.png';
import style from './style.css'


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
                    // backgroundColor: [
                    //     'rgba(255, 99, 132, 0.2)',
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)',
                    //     'rgba(255, 159, 64, 0.2)'
                    // ],
                    backgroundColor: [
                      'rgba(0, 153, 255, .2)',
                      'rgba(0, 153, 255, .2)',
                      'rgba(0, 153, 255, .2)',
                      'rgba(0, 153, 255, .2)',
                      'rgba(0, 153, 255, .2)',
                      'rgba(0, 153, 255, .2)'
                  ],
                    borderColor: [
                      'rgb(0, 153, 255, 1)',
                      'rgb(0, 153, 255, 1)',
                      'rgb(0, 153, 255, 1)',
                      'rgb(0, 153, 255, 1)',
                      'rgb(0, 153, 255, 1)',
                      'rgb(0, 153, 255, 1)'
                    ],
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

  