export const useEffect = () => {
    const years = [2020, 2021, 2022];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


    window.onload = () => {
        if (document.getElementById("add-product-categories")) {
            const categories = ['category', 'potato', 'batata'];
            let options = "";
            categories.forEach(category => {
                options += `<option value="${category}">${category}</option>`
            })
            document.getElementById("add-product-categories").innerHTML = options;
        }
        if (document.getElementById("year")) {
            let options = "";
            years.forEach(year => {
                options += `<option value="${year}">${year}</option>`
            })
            document.getElementById("year").innerHTML = options;
        }
        if (document.getElementById("month")) {
            let options = "";
            months.forEach((month, i) => {
                options += `<option value="${i}">${month}</option>`
            })
            document.getElementById("month").innerHTML = options;
        }
        if (document.getElementById("day")) {
            let options = "";
            days.forEach(day => {
                options += `<option value="${day}">${day}</option>`
            })
            document.getElementById("day").innerHTML = options;
        }
    }
}

