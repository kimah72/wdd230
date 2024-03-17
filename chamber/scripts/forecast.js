const div = document.querySelector("#forecast");
const day1 = document.createElement("p");
const day2 = document.createElement("p");
const day3 = document.createElement("p");

const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.115&lon=-111.6549&appid=f333fbf945ff940b11bdcc892d3ac53e&units=imperial";

async function getforecast(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayforecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }
};

function displayforecast(data) {
    const firstDay = data.list[8];
    const temp1 = firstDay.main.temp;
    const tempFirstDay = temp1.toFixed(0);
    const dateFirstDay = getDate(firstDay.dt_txt);

    const secondDay = data.list[16];
    const temp2 = secondDay.main.temp;
    const tempSecondDay = temp2.toFixed(0);
    const dateSecondDay = getDate(secondDay.dt_txt);

    const thirdDay = data.list[24];
    const temp3 = thirdDay.main.temp;
    const tempThirdDay = temp3.toFixed(0);
    const dateThirdDay = getDate(thirdDay.dt_txt);

    day1.innerHTML = `${dateFirstDay} - ${tempFirstDay}&deg;F`;
    day2.innerHTML = `${dateSecondDay} - ${tempSecondDay}&deg;F`;
    day3.innerHTML = `${dateThirdDay} - ${tempThirdDay}&deg;F`;

    div.appendChild(day1);
    div.appendChild(day2);
    div.appendChild(day3);
}

function getDate(txt) {
    const date = new Date(txt);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${month}/${day}`;
}
getforecast(forecasturl);