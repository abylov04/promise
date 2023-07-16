const row = document.querySelector('.breeds')
const breedImg = document.querySelector('.breed-img')
const select = document.querySelector('.select-breeds')
const btn = document.querySelector('.search-btn')
const input = document.querySelector('.search-input')


function fetchingALLBreeds(){
    try{
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then((res) =>{
            Object.keys(res.data.message).map(el => {
                row.innerHTML +=`<button class="breed-btn btn btn-success my-1">${el}</button>`
                select.innerHTML += `<option value="${el}">${el}</option>`
        })
        })
        .then( () => getBreedsImg())
    }catch(e){
        console.log(e)
    }
}
fetchingALLBreeds()

function getBreedsImg(){
    const buttons = document.querySelectorAll('.breed-btn')
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            fetchingImg(btn.innerHTML)
    })
    })
}

function fetchingImg(name){
    axios(`https://dog.ceo/api/breed/${name}/images/random`)
    .then((result) => {
        breedImg.innerHTML=`<img src="${result.data.message}" alt="тура эмес жазылды">`
    }) 
    .then(()=> {
        setTimeout(() => {
            window.scroll(0,1000)
        },1000)    
    })
    
}


select.addEventListener('change', (event) => {
    fetchingImg(event.target.value)
})

function searchBreeds(){
    if (input.value.trim().length !== 0){
        fetchingImg(input.value.trim())
        input.value = ''
    } 
}

btn.addEventListener('click', ()=>{
    searchBreeds()
})
input.addEventListener('keydown',(e)=>{
    if (e.key === "Enter"){
        searchBreeds()
    }
})