import moment from 'moment/moment';

class ResultMatchItem extends HTMLElement {
  constructor() {
    super();
  }
  set resMatch(result) {
    this._match = result;
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="card justify-content-center m-auto p-3 mb-3 shadow-lg">
      <div class="card-body">
        <p class="card-text">${this._match.title}</p>
        <p class="card-text">${this._match.competition} | ${moment(
      this._match.date
    )
      .utc()
      .format('YYYY-MM-DD, h:mm:ss')}</p>
      </div>
       ${this._match.videos.map((el) => {
         return el.embed;
       })}
    </div>
    `;
  }
}

customElements.define('result-match-item', ResultMatchItem);
