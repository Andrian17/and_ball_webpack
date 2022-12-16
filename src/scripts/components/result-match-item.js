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
    <div class="card justify-content-center m-auto p-3 mb-3 shadow-lg">
      <div class="card-body">
        <p class="card-text">${this._matches.title}</p>
        <p class="card-text">${this._matches.competition} | ${moment(
      this._matches.date
    )
      .utc()
      .format('YYYY-MM-DD, h:mm:ss')}</p>
      </div>
       ${this._matches.videos.map((video) => {
         return video.embed;
       })}
    </div>
    `;
  }
}

customElements.define('result-match-item', ResultMatchItem);
