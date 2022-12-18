import '../components/app-bar';
import DataSource from '../data/DataSource';
import '../components/results-match-list';

const main = () => {
  const ResultsMatchList = document.querySelector('results-match-list');
  const appBar = document.querySelector('app-bar');

  const renderResult = (results) => {
    ResultsMatchList.resMatches = results;
  };

  const errorResult = (res) => {
    ResultsMatchList.renderError = res;
  };

  // search matches
  const matchesResults = async () => {
    try {
      // Get data from DataSource
      const matches = await DataSource.getFeeds();

      // Get Values Input
      const teams = appBar.valueInput;

      // Data filtering / finding data by teams
      const temp = matches
        .filter((match) =>
          match.title.toLowerCase().includes(teams.toLowerCase())
        )
        .map((res) => ({
          title: res.title,
          competition: res.competition,
          videos: res.videos,
        }));
      if (temp.length >= 1) {
        renderResult(temp);
      } else {
        throw errorResult(temp);
      }
    } catch (error) {
      errorResult(error);
    }
  };

  matchesResults();

  appBar.showMatchesEvent = matchesResults;
};

export default main;
