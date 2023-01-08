class AppBar extends HTMLElement {
  constructor() {
    super();
  }

  set showMatches(matches) {
    this._matches = matches;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  get valueInput() {
    return this.querySelector('#input-team').value;
  }

  set showMatchesEvent(action) {
    this._action = action;
    this.render();
  }

  get Icon() {
    return './../../img/and-ball.png';
  }

  get Avatar() {
    return './../../avatar.png';
  }

  render() {
    this.innerHTML = `<nav class="navbar navbar-expand-lg bg-light shadow-lg mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="${this.Icon}" alt="and-ball" height="40px;" width="40px;" class="p-1">AND-BALL</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <form id="form-team" class="d-flex justify-content-end my-2 border shadow-sm" role="search">
          <input id="input-team" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value="">
          <button id="search-matches" class="btn btn-outline-success">Search</button>
        </form>
        <div class="d-flex justify-content-end ms-1" style="background-color: #d6f8f9">
          <a id="about" href="https://github.com/Andrian17" target="_blank" class="rounded-circle btn btn-outline-primary"><img height="40px" width="40px" src="${this.Avatar}" alt="saya" srcset=""></a>
        </div>
      </div>
    </div>
  </nav>`;
    this.querySelector('#search-matches').addEventListener(
      'click',
      this._action
    );
    this.querySelector('#form-team').addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        if (event.key === 'Enter') {
          await this._action;
        }
      }
    );
  }
}

customElements.define('app-bar', AppBar);
