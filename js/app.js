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

// distructing 
const getCountriesList = ({ name, flags }) => {
    return `
        <div class="country">
            <h1>${name.common}</h1>
            <img src="${flags.png}">
        </div>
    `
}
// // distructing 2
// const getCountriesList = list => {
//     // distructing
//     const { name, flags } = list;
//     return `
//         <div class="country">
//             <h1>${name.common}</h1>
//             <img src="${flags.png}">
//         </div>
//     `
// }
allCountries()

// original
// const getCountriesList = list => {
//     return `
//         <div class="country">
//             <h1>${list.name.common}</h1>
//             <img src="${list.flags.png}">
//         </div>
//     `
// }
// allCountries()