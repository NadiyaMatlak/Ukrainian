let searchBtn = document.querySelector(".searchBtn");
let closeBtn = document.querySelector(".closeBtn");
let searchBox = document.querySelector(".searchBox");
let navigation = document.querySelector(".navigation");
let menuToggle = document.querySelector(".menuToggle");
let header = document.querySelector("header");

searchBtn.onclick = function() {
   searchBox.classList.add("active"); 
   closeBtn.classList.add("active");
   searchBtn.classList.add("active");
   menuToggle.classList.add("hide");
   header.classList.remove("open");
}
closeBtn.onclick = function() {
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
    menuToggle.classList.remove("hide");
}
menuToggle.onclick = function() {
    header.classList.toggle("open");
    searchBox.classList.remove("active");
    closeBtn.classList.remove("active");
    searchBtn.classList.remove("active");
}
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const pagesitems = document.getElementById("product-container");
    const product = document.querySelectorAll(".box");
    const productname = document.getElementsByTagName("h6");
    const productDis = document.getElementsByTagName("h2");

    for ( let i=0; i < productname.length; i++) {
        for (let j=0; j<productDis.length; j++) {
            let matchD = product[j].getElementsByTagName("h2")[0];
             if(matchD) {
                let textvalue = matchD.textContent || match.innerHTML;
                if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                    product[j].style.display = "";
                }else {
                    product[j].style.display = "none"; 
                }
            } 
        }
        let match = product[i].getElementsByTagName("h6")[0];
         if(match) {
            let textvalue = match.textContent || match.innerHTML;
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }else {
                product[i].style.display = "none"; 
            }
        }
    }

}