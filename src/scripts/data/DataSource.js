const tokenVideo = process.env.API_KEY_SCF;
const urlAPI = `https://www.scorebat.com/video-api/v3`;

class DataSource {
  static getFeeds() {
    return fetch(`${urlAPI}/feed/?token=${tokenVideo}`)
      .then((response) => response.json())
      .then((results) => {
        if (results.response) {
          return Promise.resolve(results.response);
        }
        return Promise.reject('Sumber Data tidak merespon');
      });
  }
}

export default DataSource;
