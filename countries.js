
const row = document.querySelector('.row')
const input = document.querySelector('.search-input')
const btn = document.querySelector('.search-btn')
const select = document.querySelector('.select-sort')
const selectfilter = document.querySelector('.select-filter')

let allCountries = null


function fetchCountries(API){

    try{
        axios(`https://restcountries.com/v3.1/${API}`)
        .then((res)=>{
            allCountries = res.data
        getCountries(res.data)
    })
    }catch(error){
        console.log(error)
    }

    

 
}

fetchCountries('all')


btn.addEventListener('click',() => {
   fetchCountries(`name/${input.value}`)
})


function getCountries(data){
    row.innerHTML = ""
    data.map((el,idx) =>(
        row.innerHTML +=`<div class="col-4 my-5">
        <h1>${idx+1}</h1>
        <img src="${el.flags.svg}" width="400" height="250" alt="">
        <h2>${el.name.common}</h2>
        <p>борбору:${el.capital ? el.capital : "jok"}</p>
        <p>калкы:${el.population}</p>
        <p>аянты:${el.area} км <b><sup> 2 </sup><b></p>
        <p>регион:${el.region}</p>

    </div>`
    ))
}



input.addEventListener('keydown',(e)=>{
     if (e.key === "Enter"){
        fetchCountries(`name/${input.value}`)
     }
})


select.addEventListener('change', (e) =>{
        const {value} = e.target
        if (e.target.value === 'population'){
            const result = allCountries.sort((a,b)=>{
                return b.population - a.population
        })
        getCountries(result)
    }else if (value === 'area'){
            const result = allCountries.sort((a,b)=>{
                return b.area - a.area
    })
        getCountries(result)
    }else if (value === 'A-Z'){
        const result = allCountries.sort((a,b)=>{
            return a.name.common > b.name.common ? 1 : -1
    })
        getCountries(result)
    }else if (value === 'Z-A'){
        const result = allCountries.sort((a,b)=>{
            return a.name.common > b.name.common ? -1 : 1
    })
        getCountries(result)
    }
    else if (value === 'Asia'){
        const result = allFilter.sort((a,b)=>{
            return a.Asia > b.Aisa ? -1 : 1
    })
        getCountries(result)
    }
}) 









input.addEventListener('input', () =>{
    axios(`https://restcountries.com/v3.1/name/${input.value}`)
    .then((res) =>{
        console.log(res)
        getCountries(res.data)
    })
})





