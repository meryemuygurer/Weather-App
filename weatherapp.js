let url = 'https://api.openweathermap.org/data/2.5';
let key = '75ac4f1b101f77a61602f3031c751d9c';

// Hedef : SearchBar ' a girilen şehir ismini konsola yazdırmak.

/*
let city = document.getElementById("SearchBar");

city.addEventListener("keydown", function(event){
    if(event.key == 'Enter'){
        console.log(city.value);
    }
})
*/

// Simdi konsola yazdirmak yerine, api araciligiyla bir istek olusturacagiz ve sehir isminden faydalanacagiz. Bu nedenle konsola yazdirma kismini silip devam ediyorum.
let SearchBar = document.getElementById("SearchBar");
SearchBar.addEventListener('keydown', setQuery);
function setQuery(e) {
    if (e.key === 'Enter') {
        getResult(SearchBar.value);
    }
}

let getResult = (cityname) => {
    let query = `${url}/weather?q=${cityname}&units=metric&lang=tr&appid=${key}`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

function displayResult(result) {
    let city = document.querySelector('.city');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let derece = document.querySelector('.derece');
    derece.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = `${result.weather[0].description}`;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

}



 /* 

API'yi "metrik olarak almak" terimi, bir API'den alınan verilerin metrik sistemine uygun olarak sunulduğunu ifade etmektedir. Metrik sistem, uzunluk, ağırlık, sıcaklık, zaman vb. ölçü birimlerini içeren uluslararası bir ölçüm sistemidir.
Bir API, genellikle farklı ülkelerdeki ve kullanıcılar arasındaki farklı ölçü birimlerine uyum sağlamak için farklı birimlerde veriler sunabilir. Örneğin, bir hava durumu API'si sıcaklık verisini Celsius veya Fahrenheit olarak sunabilir. 
Bununla birlikte, "API'yi metrik olarak almak" ifadesi, API'nin verilerini temel olarak metrik sistemde (örneğin Celsius, metre, kilogram) sunma anlamına gelir.
API'yi metrik olarak almak, verilerin daha tutarlı ve kullanıcı dostu bir şekilde sunulmasını sağlar. Aynı zamanda, metrik sistem kullanan birçok ülke ve endüstri standardını takip eden uygulamalar için daha uygun bir seçenektir.
 */

/*
then: Bu yöntem, Promise'nin tamamlandığında çağrılacak bir callback'i kaydetmek için kullanılır. Callback, Promise'nin tamamlanma nedeni olan değerle çağrılır. catch: Bu yöntem, Promise'nin reddedildiğinde çağrılacak bir callback'i kaydetmek için kullanılır.
    Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve olumlu durumlarda Resolve ile belirtilen işlemlerin, olumsuz durumlarda da Reject ile belirtilen işlemlerin
     yapılacağına dair güvence verir. Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da .catch() ile karşılar.

*/


