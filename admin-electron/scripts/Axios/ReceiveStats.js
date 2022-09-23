let xValues = []
let yValues = []
let barColors = ["red", "green","blue","orange","brown"];
const chartsDiv = document.getElementById("main-display=charts");

export const ReceiveStats = async (data) => {

    if(data.user_type == 'Client'){

    }
    else if(data.user_type == 'Seller'){
        console.log(data);
        xValues = []
        yValues = []
            const url = "http://localhost/ecommerce/ecommerce-server/select-revenue.php";
            const response = await axios.post(url, data, {headers: {'Authorization': `token ${localStorage.getItem("token")}` 
                 // 
        }});

        response.data['topgroups'].map(top => {
            xValues.push(top.f_name);
            yValues.push(top.totalrev);
        })
        chartsDiv.innerHTML = '<canvas id="myChart" style="width:100%;"></canvas>';
        new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            legend: {display: false},
            title: {
            display: true,
            text: "Top 5 Sellers"
            }
        }
        });
    }
}
