export default function Navbar(){

 

console.log("Main Reached")
  document.querySelector('#app').innerHTML = `
  <nav class="bg-three p-10">
  <div class=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" id="hamburger" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center ">
          <canvas class="abstract"></canvas>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4 p-10">
            <!-- Current: "bg-gray-900 text-primary", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
            <a href="#" class="text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Team</a>
            <a href="#" class="text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Projects</a>
            <a href="#" class="text-primary hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-md font-medium">Calendar</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        

        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button  type="button" class="relative flex rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 21 21" id="profile"><g fill="none" fill-rule="evenodd"><g fill="#000" transform="translate(-180 -2159)"><g transform="translate(56 160)"><path d="M134 2009c-2.217 0-4.019-1.794-4.019-4s1.802-4 4.019-4 4.019 1.794 4.019 4-1.802 4-4.019 4m3.776.673a5.978 5.978 0 0 0 2.182-5.603c-.397-2.623-2.589-4.722-5.236-5.028-3.652-.423-6.75 2.407-6.75 5.958 0 1.89.88 3.574 2.252 4.673-3.372 1.261-5.834 4.222-6.22 8.218a1.012 1.012 0 0 0 1.004 1.109.99.99 0 0 0 .993-.891c.403-4.463 3.836-7.109 7.999-7.109s7.596 2.646 7.999 7.109a.99.99 0 0 0 .993.891c.596 0 1.06-.518 1.003-1.109-.385-3.996-2.847-6.957-6.22-8.218"/></g></g></g></svg>
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          <div id="toggleMenu"  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
            <!-- Active: "bg-gray-100", Not Active: "" -->
            <a href="#" class="block px-4 py-2 text-sm text-primary" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" class="block px-4 py-2 text-sm text-primary" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
            <a href="#" class="block px-4 py-2 text-sm text-primary" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
      <a href="#" class="text-primary hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
      <a href="#" class="text-primary hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
      <a href="#" class="text-primary hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
    </div>
  </div>
</nav>
  `

  var toggleMenu = document.getElementById("toggleMenu");
  var menu = document.getElementById("user-menu-button");
  toggleMenu.style.display = "none"
  menu.addEventListener("click", function() {
      toggleMenu.style.display === "none" ? toggleMenu.style.display = "block" : toggleMenu.style.display = "none" ;
  });

  var ham = document.getElementById('hamburger');
  var mobile_menu = document.getElementById('mobile-menu');
  mobile_menu.style.display = "none" 
  ham.addEventListener("click", function() {
      mobile_menu.style.display === "none" ? mobile_menu.style.display = "block" : mobile_menu.style.display = "none" ;
  });
}






// <header class="header w-[100vw] fixed z-[100]">
{/* <nav class=" bg-three rounded-lg">
    
<ul class="header__menu relative flex flex-col xl:flex-row w-full justify-center ">

  <li class="relative left-6 md:left-12 lg:left-24 xl:left-0 top-4">
      <div id="theme-toggle" class="header__sun flex">
        <canvas class="abstract"></canvas class=" abstract">
        <div class="header__link block font-semibold text-3xl p-5" href="#Abstract">Abstract</div>
      </div>
  </li>
  <div class="flex">
    <li class=" block p-10 font-semibold text-2xl">
      <a class="header__link" href="#about">About</a>
    </li>
    <li class="block p-10  font-semibold text-2xl">
      <a class="header__link" href="#projects">Projects</a>
    </li>
    <li class=" block p-10 font-semibold text-2xl">
      <a class="btn-primary header__link" href="#contact">Contact</a>
    </li>
  </div>

</ul>
</nav>
</header> */}