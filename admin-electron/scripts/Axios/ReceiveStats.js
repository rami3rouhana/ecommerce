
const chartsDiv = document.getElementById("main-display=charts");

export const ReceiveStats = async (data2) => {

    if(data2.user_type == 'Client'){

        let xValues = []
        let yValues = []
        let barColors = ["red", "blue","blue","orange","brown"];
            const url = "http://localhost/ecommerce/ecommerce-server/select-revenue.php";
            const response = await axios.post(url, data2, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
                 // 
        }});
        //Empty chart div
        chartsDiv.innerHTML = '<canvas id="myChart" style="width:100%;"></canvas>';
        //Get data from response
        response.data['topgroups'].map(top => {
            console.log(top.totalrev);
            xValues.push(top.f_name);
            yValues.push(top.totalrev);
        })

        //Configure chart from chart.js
        const data = {
        labels: xValues,
        datasets: [{
            label: 'Top 5 Sellers',
            data: yValues,
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
        };
        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            },
          };

          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );

    }
    else if(data2.user_type == 'Seller'){    
        let xValues = []
        let yValues = []
        let barColors = ["red", "blue","blue","orange","brown"];
            const url = "http://localhost/ecommerce/ecommerce-server/select-revenue.php";
            const response = await axios.post(url, data2, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
                 // 
        }});
        //Empty chart div
        chartsDiv.innerHTML = '<canvas id="myChart" style="width:100%;"></canvas>';
        //Get data from response
        response.data['topgroups'].map(top => {
            console.log(top.totalrev);
            xValues.push(top.f_name);
            yValues.push(top.totalrev);
        })

        //Configure chart from chart.js
        const data = {
        labels: xValues,
        datasets: [{
            label: 'Top 5 Sellers',
            data: yValues,
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
        };
        const config = {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            },
          };

          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
    }
}
