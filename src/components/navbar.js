function MenuNavbar() {
  const navbar = `
  <nav class="bg-stone-200 ">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex h-16 items-center justify-between"">
      <a href="home.html" class="text-stone-800 font-semibold text-lg mr-3">
        API Stores
      </a>
    
        <button id="menu-toggle"
          class="md:hidden text-stone-800 focus:outline-none">
          ☰
        </button>

        <ul id="menu"
          class="hidden md:flex gap-6 text-stone-800 text-sm font-medium">
          <li><a href="home.html" class="hover:bg-stone-400 p-2 rounded-xl">Home</a></li>
          <li><a href="about.html" class="hover:bg-stone-400 p-2 rounded-xl">About</a></li>
        </ul> 

      </div>
    </div>

    <ul id="menu-mobile"
      class="hidden flex-col gap-4 px-4 pb-4 md:hidden text-stone-800">
      <li><a href="home.html">Home</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </nav>
  `;

  document.getElementById("navbar").innerHTML = navbar;

  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("menu-mobile");

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

MenuNavbar();
