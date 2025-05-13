var typed = new Typed('#element', {
    strings: ['Front End Developer...'],
    typeSpeed: 50,
    loop:true,
    loopCount: Infinity
  });

  // -------------------------------------------------- Toggle icon navbar----------------------------------------
  let menuIcon = document.getElementById('menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menuIcon.onclick = () => {
      menuIcon.classList.toggle('fa-xmark');
      navbar.classList.toggle('active');
      console.log('Menu icon clicked');  //debugging
      console.log('Navbar class:', navbar.className); // Debugging
  };
  


// -------------------------------- scroll section active link---------------------------------------------------

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec=> {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >=offset && top < offset + height) {
      navlinks.forEach.apply(links =>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  })

// ----------------------------------sticky navbar  ------------------------------------------

      let header = document.querySelector('header');
      header.classList.toggle('sticky',window.scrollY > 100);  


      // remove toggle icon and navbar -------------------------------------

      menuIcon.classList.remove('fa-xmark');
      navbar.classList.remove('active')
};

// contact form 
const form = document.querySelector("form");
form.addEventListener('submit',
async(e) =>{
    e.preventDefault();
    const formData = new FormData(form);
    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers:{'Accept':'application/json'}
        });
        if (response.ok) {
            alert("Message send!");
            form.reset();
        }
        else{
            alert("Error sending message"); 
        }
        
    } catch (error) {
        alert("somethings not work")
    }
}
)
let iconEl=document.querySelector('#iconTop');
document.addEventListener('scroll',()=>{
  let top = window.scrollY;
  console.log(top)
  if(top>70){
    iconEl.classList.add('show');
  }else{
    iconEl.classList.remove('show');
  }

})