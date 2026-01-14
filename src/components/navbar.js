function MenuNavbar() {
  const navbar = `
  <nav class="bg-stone-200 ">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex h-16 items-center justify-between"">
      <a href="index.html" class="text-stone-800 font-semibold text-lg mr-3">
        API Stores
      </a>
    
        <button id="menu-toggle"
          class="md:hidden text-stone-800 focus:outline-none">
          ☰
        </button>

        <ul id="menu"
          class="hidden md:flex gap-6 text-stone-800 text-sm font-medium">
          <li><a href="index.html" class="hover:bg-stone-400 p-2 rounded-xl">Home</a></li>
          <li><a href="about.html" class="hover:bg-stone-400 p-2 rounded-xl">About</a></li>
          <li><a target="_blank" class="hover:bg-stone-400 p-2 rounded-xl" href="https://github.com/Filipe-Carvalh0/FakeStore-Catalog">Repositório</a></li>
        </ul> 

      </div>
    </div>

    <ul id="menu-mobile"
      class="hidden flex-col gap-4 px-4 pb-4 md:hidden text-stone-800">
      <li class="mb-1"><a href="index.html">Home</a></li>
      <li class="mb-1"><a href="about.html">About</a></li>
      <li><a href="https://github.com/Filipe-Carvalh0/FakeStore-Catalog">Repositório</a></li>
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
