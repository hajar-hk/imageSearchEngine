

const accessKey ="Me5zhZdhkBdorXA1XIGl6pGN5iJB2k6O5c-W1Y9UwBc";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showBtn = document.getElementById("show-more-btn");

let keyword ="";
let page= 1;


async  function searchImage(){
    keyword = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

   const results = data.results;
   
   if(page === 1){
    searchResult.innerHTML ="";
   }

   results.map((result)=>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
   })
   showBtn.style.display ='block';
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImage();
})
showBtn.addEventListener("click",()=>{
    page++;
    searchImage();

})

