// function handleSubmit() {
//   const country = document.getElementById('country').value;
//   localStorage.setItem('COUNTRY', country);
//   return;
// }

window.addEventListener('load', () => {
  // const country = localStorage.getItem('COUNTRY');

  const params = new URL(document.location).searchParams;
  const country = params.get('country');
  // console.log(country);

  const container = document.getElementById('container');
  const request = new XMLHttpRequest();
  request.open('GET', `http://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  // to get the response
  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // console.log(
    //   data.languages[1] == undefined
    //     ? data.languages[0].nativeName
    //     : data.languages[1].nativeName == 'English'
    //     ? data.languages[0].nativeName
    //     : data.languages[1].nativeName
    // );

    const htmlData = `
    <div class="content">
        <div class="row1">
          <img src="${data.flag}" alt="flag" />
          <h2 class="countryName">${data.name}</h2>
          <p class="countryCapital">Capital : ${data.capital}</p>
          <p class="countryDemonym">Demonym : ${data.demonym}</p>
        </div>
        <div class="row2">
          <div class="detail">
            <h3>${
              data.languages[1] == undefined
                ? data.languages[0].nativeName
                : data.languages[1].nativeName == 'English'
                ? data.languages[0].nativeName
                : data.languages[1].nativeName
            }</h3>
            <p>Native Language</p>
          </div>
          <div class="detail">
            <h3>${data.population}</h3>
            <p>Population</p>
          </div>
          <div class="detail">
            <h3>${data.area}</h3>
            <p>Area</p>
          </div>
        </div>
      </div>
  `;
    container.insertAdjacentHTML('beforeend', htmlData);
  });
});
