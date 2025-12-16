function MenuNavbar() {
    const navbar = `
     <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #4169E1 !important;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">API Stores</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About</a>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>`;

  document.getElementById("navbar").innerHTML = navbar;
}

MenuNavbar()