import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import './ApexChart.css'

class ApexChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Marine Sprite',
                data: [7],
            }, {
                name: 'Development',
                data: [23.49],
            }, {
                name: 'Tank Picture',
                data: [39.50],
            }, {
                name: 'Bucket Slope',
                data: [30.15]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 100,
                    stacked: true,
                    stackType: '100%'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: [],
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    // opacity: 1,
                    colors: ['#0C7047', '#F3C204', '#CB0D46', '#3B113D']
                },
            },


        };
    }

    render() {

        return (
            <div id="chart">
                <ReactApexChart 
                    options={this.state.options} 
                    series={this.state.series} 
                    type="bar" 
                    height={250} 
                />
            </div>
        )

    }
}


export default ApexChart;