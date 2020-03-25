function searchFunc() {
    let input = document.getElementById("input").value;
    console.log(input);
    fetch(`http://newsapi.org/v2/everything?q=${input}&from=2020-02-25&sortBy=publishedAt&apiKey=fa168a8960ee4bf0911fbf6759ae54c7`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let el of data.articles) {
                console.log(el);
                document.getElementById("contain").innerHTML += `
             <div>
             <img src=${el.urlToImage} alt="">
             <h1>${el.title}</h1>
             <p>${el.description}</p>
             <h6>${el.author}</h6>
             <a href=${el.url}>Lesen Sie mehr</a>
         </div>
             `
            }
        })
}
function main(para) {
    fetch(`http://newsapi.org/v2/top-headlines?category=${para}&from=2020-02-25&sortBy=publishedAt&apiKey=fa168a8960ee4bf0911fbf6759ae54c7`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            for (let el of data.articles) {
                console.log(el);
                document.getElementById("contain").innerHTML += `
                 <div>
                 <img src=${el.urlToImage} alt="">
                 <h1>${el.title}</h1>
                 <p>${el.description}</p>
                 <h6>${el.author}</h6>
                 <a href=${el.url}>Lesen Sie mehr</a>
             </div>
                 `
            }
        })
}
let cat;
let btnCat = document.getElementsByClassName("btn-cat");
for (let el of btnCat) {
    el.addEventListener("click", (elt) => {
        cat = elt.target.innerText;
        main(cat);

    })
}

