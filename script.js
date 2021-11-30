const cities = ["London","New York","Los Angeles","Las Vegas"];
let counter = 0;
function getdata() {
    if(counter <= 3) {
        getCities(cities[counter]).then((data) => {
           document.getElementById("no-data").style.display = "none";
           var parent = document.getElementById("tbody");
           var rowData = `<tr id="${counter}">
           <td><input type="text" value="${data.description}"<td>
           <td>${data.temp_in_celsius}<td>
           <td>${data.pressure_in_hpa}<td>
           <td>${new Date(data.date_and_time).getHours()}<td>
           <td><a class="deleteBtn" onclick="removeCity"('${counter}')">Delete</a><td></td>
           </tr>`;
           parent.insertAdjacentHTML("beforeend", rowData);
           counter++;
        });
    }
}
async function getCities(cityName) {
    let response = await fetch(
        `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`
    );
    let data = await response.jason();
    return data;
}