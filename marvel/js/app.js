const marvel = {
    render:()=>{
const urlAPI='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=36540649aec783e8bffd103b8d8ab8d2&hash=5d0b4e2600d2e958e39da1c9a87d5be8';
const container = document.querySelector('#marvel-row');
let contentHTML= '';

fetch(urlAPI)
.then(res=>res.json())
.then((json)=>{
    for (const hero of json.data.results){
        let urlHero = hero.urls[0].url;
        contentHTML+= `
        <div class="col-md-4">
           <a href="${urlHero}" target="_blank">
            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
           </a>
           <h3 class="title">${hero.name}</h3>
        </div>`;
    }
    container.innerHTML=contentHTML;
})

    }
};
marvel.render();


