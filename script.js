function getCountry() {
    const countryName = document.getElementById("country").value;
    const result = document.getElementById("result");

    if (countryName === "") {
        result.innerText = "Please enter a country name";
        return;
    }

    result.innerText = "Loading...................";

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Not found");
            }
            return response.json();
        })
        .then(data => {
            const country = data[0]; // ab sirf exact country hogi

            result.innerHTML = `
                <h3>${country.name.common}</h3>
                <p>Capital: ${country.capital[0]}</p>
                <p>Population: ${country.population}</p>
                <p>Region: ${country.region}</p>
            `;
        })
        .catch(error => {
            result.innerText = "Country not found 😢";
        });
}
