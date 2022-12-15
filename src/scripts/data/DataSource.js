const tokenVideo =
  'NDE5MDdfMTY3MTAyNTE0NF8wMGEyNjVhMTFjYTU3ZjRmNTM4MjQxN2Q4ZmExNTkzNDU3MzY2MGIy';
const tokenEmbed =
  'NDE5MDdfMTY3MTAyNTE0NF8wODNjZjRkMWVmYmZmMTYxMWQ1MjIyZGFhY2U0NTM4OTg5YTIwMGY5';
const urlAPI = `https://www.scorebat.com/video-api/v3`;

class DataSource {
  static getFeeds() {
    return fetch(`${urlAPI}/feed/?token=${tokenVideo}`)
      .then((response) => response.json())
      .then((results) => {
        if (results.response) {
          return Promise.resolve(results.response);
        }
        return Promise.reject('Data Not Found');
      });
  }

  static getTeams(team) {
    return fetch(`${urlAPI}/team/${team}/?token=${tokenVideo}`)
      .then((response) => response.json())
      .then((results) => {
        if (results.response) {
          return Promise.resolve(results.response);
        }
        return Promise.reject('Data Not Found');
      });
  }

  static getListClub() {
    return [
      {
        club: 'real-madrid',
      },
      {
        club: 'barcelona',
      },
      {
        club: 'liverpool',
      },
      {
        club: 'arsenal',
      },
      {
        club: 'chelsea',
      },
      {
        club: 'manchester-city',
      },
      {
        club: 'manchester-united',
      },
    ];
  }
}

export default DataSource;
