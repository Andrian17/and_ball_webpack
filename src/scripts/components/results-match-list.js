import './result-match-item';

class ResultsMatchList extends HTMLElement {
  constructor() {
    super();
  }

  set resMatches(matches) {
    this._matches = matches;
    this.render();
  }

  render() {
    this.innerHTML = ``;

    if (!this._matches) {
      this.innerHTML = `Request Wrong`;
    }

    this._matches.map((match, index) => {
      const ResultMatchItem = document.createElement('result-match-item');
      if (index < 10) {
        ResultMatchItem.resMatch = match;
        this.appendChild(ResultMatchItem);
      }
    });
  }

  set renderError(msg) {
    this.innerHTML = `<h1>Gagal mengambil data | ${msg} </h1>`;
  }
}

customElements.define('results-match-list', ResultsMatchList);
