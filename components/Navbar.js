export default function Header(){
console.log("Main Reached")
  document.querySelector('#app').innerHTML = `
  <header class="header w-[100vw] fixed ">
    <nav class=" bg-slate-200 rounded-lg">
    
      <ul class="header__menu flex w-full justify-center ">
      
        <li class=" block p-10 font-semibold text-2xl">
          <a class="header__link" href="#about">About</a>
        </li>
        <li class="block p-10  font-semibold text-2xl">
          <a class="header__link" href="#projects">Projects</a>
        </li>
        <li class=" block p-10 font-semibold text-2xl">
          <a class="btn-primary header__link" href="#contact">Contact</a>
        </li>
        <li class="header__line"></li>
        <li class="absolute left-6 md:left-12 lg:left-24 xl:left-48 top-4">
            <div id="theme-toggle" class="header__sun flex">
              <canvas class="abstract"></canvas class=" abstract">
              <div class="header__link block font-semibold text-3xl p-5" href="#Abstract">Abstract</div>
            </div>
           
        </li>

       

       
      </ul>
    </nav>
  </header>
  `
}