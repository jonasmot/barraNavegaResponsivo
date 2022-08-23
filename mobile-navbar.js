class MobileNavbar {
  //toda classe tem um método contructor
  constructor(mobileMenu, navList, navLinks){
    //propriedades da classe
    this.mobileMenu = document.querySelector(mobileMenu)
    this.navList = document.querySelector(navList)
    this.navLinks = document.querySelectorAll(navLinks)
    //para referencia-la
    this.activeClass = "active"

    this.handleClick = this.handleClick.bind(this)
  }

  animateLinks(){
    //falando com cada link individualmente
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
    });
  }
  

  handleClick(){
    this.navList.classList.toggle(this.activeClass)
    this.mobileMenu.classList.toggle(thisd.activeClass)
    //metodo para animar os links td vz q clickar
    this.animateLinks()
  }

  

  //adiciona o evento de click no botão do menu
  addClickEvent(){
//this.mobileMenu.addEventListener("click", () => console.log("hey")) um exemplo de Callback
    this.mobileMenu.addEventListener("click", this.handleClick )
  }
  //método que inicia a função se .mobileMenu existir no documento
  init(){
    if(this.mobileMenu){
      this.addClickEvent()
    }
    return this
  } 

}

//construimo o objeto chamando como parametro as classes do css
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
)
//inicializando chamando o objeto e acessando seu método 
mobileNavbar.init()