import DataSource from '../data/DataSource';

class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  getListClub() {
    try {
      const clubList = DataSource.getListClub();
      this._club = clubList;
    } catch (err) {
      console.log(err);
    }
  }

  set clubList(club) {
    this.render();
  }

  set click(event) {
    this._event = event;
    console.log(event);
    console.log('OK Clikc');
  }

  get valueFromInput() {
    return this.querySelector('input').value;
  }

  connectedCallback() {
    this.getListClub();
    if (this._club) {
      this.render();
    }
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg bg-light p-3 shadow-lg mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
          <li class="nav-item dropdown" id="drop-down-club">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            ${this._club
              .map((element) => {
                return `<li>
                          <a id="${element.club}" class=" data-teams dropdown-item" href="#">${element.club}</a>
                        </li>`;
              })
              .join('')}
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button id="search-data" class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`;
    this.querySelectorAll('.data-teams'),
      addEventListener('click', this._event);
  }
}

customElements.define('app-bar', AppBar);
