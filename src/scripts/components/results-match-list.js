import './result-match-item';

class ResultsMatchList extends HTMLElement {
  constructor() {
    super();
  }

  set resMatches(results) {
    this._results = results;
    this.render();
  }

  render() {
    this.innerHTML = ``;

    if (!this._results) {
      this.innerHTML = `Request Wrong`;
    }

    this._results.map((res, index) => {
      const ResultMatchItem = document.createElement('result-match-item');
      ResultMatchItem.resMatch = res;
      if (index < 5) {
        this.appendChild(ResultMatchItem);
        console.log(index);
      }
    });
  }

  set renderError(msg) {
    this.innerHTML = `<h1>Gagal mengambil data | ${msg} </h1>`;
  }
}

customElements.define('results-match-list', ResultsMatchList);
