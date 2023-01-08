import moment from 'moment/moment';

class ResultMatchItem extends HTMLElement {
  constructor() {
    super();
  }
  set resMatch(matches) {
    this._matches = matches;
    this.render();
  }
  render() {
    this.innerHTML = `
    <div id="res-item" class="card mb-3 shadow-lg mx-3">
      <div class="card-body">
        <p class="card-text fs-5">${this._matches.title}</p>
        <p class="card-text">${this._matches.competition} | ${moment(
      this._matches.date
    )
      .utc()
      .format('YYYY-MM-DD')}</p>
      </div>
       ${this._matches.videos.map(({ embed }) => {
         return embed;
       })}
    </div>
    `;
  }
}

customElements.define('result-match-item', ResultMatchItem);
