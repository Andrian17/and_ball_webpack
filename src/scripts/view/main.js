import '../components/app-bar';
import DataSource from '../data/DataSource';
import '../components/results-match-list';

const main = () => {
  const ResultsMatchList = document.querySelector('results-match-list');
  const appBar = document.querySelector('app-bar');

  const feeds = async () => {
    try {
      const results = await DataSource.getFeeds();
      renderResult(results);
    } catch (error) {
      errorResult(error);
    }
  };
  const renderResult = (results) => {
    ResultsMatchList.resMatches = results;
  };

  const errorResult = (res) => {
    ResultsMatchList.renderError = res;
  };

  feeds();
};

export default main;
