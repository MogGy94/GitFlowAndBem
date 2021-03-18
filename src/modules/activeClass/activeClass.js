/** Al hacer click en el elemento "li" debe adquirir la clase .active 
 * y sus partientes "li" no deben tener la clase activa 
 * 
*/

const currentLocation =  location.href;
const nav = document.querySelector( "ul");
const navItems = nav.children;
console.log(navItems);

for(let item of navItems){
    item.addEventListener('mousedown', (e) =>{
        quitSelection();
        item.classList.add('active');
        console.log(e.target.innerHTML);
    })
}

const quitSelection = () =>{
    for(let item   of navItems){
        item.classList.remove('active');
    }
}
