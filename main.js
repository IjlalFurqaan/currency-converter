document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#currency-converter").addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("async function called first")

        const { target: { from, to, amount } } = event;

        let headers = new Headers();
        headers.append("apikey", "annff335Gc68oHQXF15c1ExOCV30bCLv");
        const requestOptions = {
            method: "GET",
            headers,
        }
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("reponse is now available");


                let { info, date, query: { to }, result } = data;
                document.querySelector(".result").textContent = `As per the exchange rate :${info.rate.toFixed(2)} for ${date} => converted value in ${to} is ${result.toFixed(2)} `;
            })
            .catch(error => console.log(error));
        console.log("end of function");
    })

    document.querySelector("#currency-converter").addEventListener("submit", (event) => {
        console.log("a regular synchronous function");
    })

})