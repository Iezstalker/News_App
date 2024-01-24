console.log('This is my index js file')

//Initialize the news api parameters
let source = 'the-hindu';
let apikey = 'd29179889c054314876c66d6bb4b33bd'
//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//Create an ajax Get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`,true)
//What to do when response is ready
xhr.onload = function () {
    if(this.status == 200){
    let json = JSON.parse(this.responseText)
    let articles = json.articles
    // console.log(json);
    // console.log(articles);
    let newsHtml = "";

    articles.forEach(function(element, index) {
            // console.log(element["title"]);
            let news = `<div class="card">
            <div class="card-header" id="heading${index}">
            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b> Breaking News ${index+1} : </b> ${element['title']}
                            </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                        <div class="card-body"> ${element['content']}.<a href= "${element['url']}" target = "_blank" >Read More here
                        </a></div>
                    </div>
                </div>`;
                newsHtml+= news
        });
    newsAccordion.innerHTML = newsHtml
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send()


