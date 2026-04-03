const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#searchInput")
const buttonWrapper = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#clearButton")
const imageListWrapper = document.querySelector(".imageList-wrapper")

runEventListeners()

function runEventListeners(){
    form.addEventListener("submit",search)
    clearButton.addEventListener("click",clear)
}

function clear(){
    searchInput.value=""
    //Array.from(imageListWrapper.children).forEach((child)=>child.remove())
    imageListWrapper.innerHTML=""
}

function search(e){

    const value = searchInput.value.trim() //inputa girilen değeri boşluklarını silerek value değerine atadık.
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,     //kullandığımız rest api'den girdiğimiz value'ye göre görselleri çekecek
        {
            method : "GET", //görselleri almak için GET metodunu kullanıyoruz
            headers : {
                Authorization : "Client-ID ueooPOchEjvtSnSSGdGPhUhgBMlHoMNG_PaEzpJ4DTg" //unsplash'dan aldığımız access key'imizi buraya ekliyoruz apiye erişim iznimiz olması için
            }
        })
        .then((res)=> res.json()) //fetch promise olarak döndüğü için onu .then ile yakalıyoruz.
        .then((data)=>{ //şimdi elimize ulaşan verileri ekrana yazdıralım.
            //console.log(data) //bize dönen verileri buradan görebiliriz.
            Array.from(data.results).forEach((image)=>{ //Json ile obje tipinde aldığımız verileri array tipine dönüştürüp her bir görselin üzerinde dolaşıyoruz.
                //console.log(image.urls.small) // bu yol ile tüm görsellerin linkini konsola yazdırdık.
                addImageToUl(image.urls.small)
            })
        })
        .catch((err)=>console.log(err))


    e.preventDefault()
}

function addImageToUl(url){
    /*
    <div class="card">
        <img src="">
    </div>
    
    */
    const div = document.createElement("div")
    div.className="card"

    const img = document.createElement("img")
    img.setAttribute("src",url)
    img.height='400'
    img.width='400'

    div.append(img)
    imageListWrapper.append(div)
}