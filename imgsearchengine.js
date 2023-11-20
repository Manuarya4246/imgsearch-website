var accessKey="9za0I_b9f5cERKmjUWs0Ml9GJCbYQqGx8OTsMEqBIH0"
var searchform=document.getElementById("searchform")
var searchbox=document.getElementById("searchbox")
var searchresult=document.getElementById("searchresult")
var showmorebtn=document.getElementById("showmorebtn")

// 9za0I_b9f5cERKmjUWs0Ml9GJCbYQqGx8OTsMEqBIH0=accesskey

var keyword=""
var page=1
 async function searchimages(){
    keyword=searchbox.value
    var url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    var response=await fetch(url)
    var data=await response.json()
    var results=data.results

   if(page===1){
    searchresult.innerHTML=""
   }

    results.map((result)=>{
        var image=document.createElement("img")
        image.src=result.urls.small
        var imagelink=document.createElement("a")
        imagelink.href=result.links.html
        imagelink.target="_blank"

        imagelink.appendChild(image)
        searchresult.appendChild(imagelink)
    })
    showmorebtn.style.display="block"

 }
 searchform.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1
    searchimages()
 })

 showmorebtn.addEventListener("click",()=>{
    page++
    searchimages()
 })