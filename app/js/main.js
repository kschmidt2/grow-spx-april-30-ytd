// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area-spx-march6");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// adds social-square class to get square social chart
// let element = document.getElementsByClassName("chart-area-spx-march6");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social-square";
// }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});

let chartIdSpxApril30 = document.getElementById("chart-container-spx-april-30-ytd");

// checks for the chart ID and displays a backup image if the browser can't find it
setTimeout(function() {
    if(chartIdSpxApril30.innerHTML === "") {
        // console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/08/chart-error_wide.1570569331252.png" style="width: 100%;max-width:660px">';
    } else {
        // console.log('yesId')
    }
},500);

function drawHighcharts() {
    Highcharts.chart(chartIdSpxApril30, {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1J4Zlen3v10_WGNf3vD6HXvRjrnMznDEFE1uAZLIl0Q4'
        },
        // for line charts only
        plotOptions: {
            series: {
                lineWidth: 1,
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            plotBands: [{
                from: 1584897689000, // Start of the plot band
                to: 1588180889000 // End of the plot band
              }],
            // dateTimeLabelFormats: {
            //     week: '%b. %e',
            // },
            tickLength: 5,
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                formatter: function () {
                    return Highcharts.numberFormat(this.value,0,'.',',');
                },
            },
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueDecimals: 0
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}