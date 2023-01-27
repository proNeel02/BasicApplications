let search_btn = document.getElementById("search-btn");

let country_Inp = document.getElementById("country-inp");

let result = document.getElementById("result");

search_btn.addEventListener("click", () => {
    let countryName = country_Inp.value;

    let finalURL = `https://restcountries.com/v2/name/${countryName}?fullText=true`;

    console.log(finalURL);

    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital);
            console.log(data[0].flags.svg);
            console.log(data[0].name);
            console.log(data[0].region);

            console.log(data[0].currencies[0].code);
            console.log(data[0].currencies[0].name);
            console.log(data[0].languages[0].name);
            // console.log(data[0].languages[1].name);

            result.innerHTML = `
                    <img src="${data[0].flags.svg}"  
                        class="flag-img"> 
                    <h2>${data[0].name}</h2>
                    
                    <div class="wrapper">

                    <div class="data-wrapper">
                      <h4>Capital:</h4>
                      <span>${data[0].capital}</span>
                    </div>
                    
                    </div>

                    <div class="wrapper">

                    <div class="data-wrapper">
                      <h4>Continent:</h4>
                      <span>${data[0].region}</span>
                    </div>
                    
                    </div>

                    <div class="wrapper">

                    <div class="data-wrapper">
                      <h4>Population:</h4>
                      <span>${data[0].population}</span>
                    </div>
                    
                    </div>

                    <div class="wrapper">
                    <div class="data-wrapper">
                      <h4>Currency:</h4>
                      <span>${data[0].currencies[0].name}-${data[0].currencies[0].code}</span>
                    </div>
                    </div>

                    <div class="wrapper">
                    <div class="data-wrapper">
                      <h4>Common Languages:</h4>
                      <span>${data[0].languages[0].name}</span>
                    </div>
                    </div>
                    `;

            country_Inp.value = '';
            
        }).catch(() => {
            if (countryName.length === 0) {
                result.innerHTML = `<h3>The Input Field Can't be Empty</h3>`;
            }
            else{
                result.innerHTML = `<h3>Please Enter Valid Country Name.</h3>`;
            }
        });
});
