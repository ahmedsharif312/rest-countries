const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = country => {
    console.log(country[0]);
    const countryListHTML = country.map(countrie => getCountriesList(countrie));
    // console.log(countryListHTML[0]);
    const countrie = document.getElementById('container')
    countrie.innerHTML = countryListHTML.join(' ')
}

const getCountriesList = list => {
    return `
        <div class="country">
            <h1>${list.name.common}</h1>
            <img src="${list.flags.png}">
        </div>
    `
}
allCountries()