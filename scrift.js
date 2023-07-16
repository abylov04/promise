const burgerMenu = document.querySelector('.burger-menu')
const navMenu = document.querySelector('.header-nav')
const burgerItems = document.querySelectorAll('.burger-item')

 burgerMenu.addEventListener('click', ()=>{
    if(!burgerMenu.classList.contains('active')){
        burgerMenu.classList.add('active')
        navMenu.style.transform="translateX(0)" 
        burgerItems[0].style.transform="rotate(45deg)translateY(15px)"
        burgerItems[1].style.opacity = "0"
        burgerItems[2].style.transform = "rotate(-45deg)translateY(-15px)" 
    }else   {
        burgerMenu.classList.remove('active')
        navMenu.style.transform = "0"  
        burgerItems[0].style.transform=""
        burgerItems[1].style.opacity = ""
        burgerItems[2].style.transform = "" 
    }
    
 })

 const row = document.querySelector('.row')
 fetch('https://jsonplaceholder.typicode.com/users')
    .then ((res)=> res.json())
    .then ((data) => {
        console.log(data)
        data.map(el =>(
            row.innerHTML+=`
            <div class="col-4 border my-3">
             <h2>${el.name}</h2>
             <p>${el.username}</p>
             <span>number</span>
             <a href=" phone:${el.phone}">${el.phone}</a>
             <br>
             <span>web site</span>
             <a href="https://jsonplaceholder.typicode.com/users">${el.website}</a>
             <h5>address</h5>
            <ul>
            <li>city:${el.address.city}</li>
            <li>street:${el.address.street}</li>
            <li>zipcode:${el.address.zipcode}</li>
            </ul>
             </div>`
        ))
    })






   