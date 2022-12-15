import '../components/app-bar';
import DataSource from '../data/DataSource';
import '../components/results-match-list';
import { async } from 'regenerator-runtime';

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

  const dropdownTeams = document.querySelectorAll('.data-teams');
  dropdownTeams.forEach((el) => {
    el.addEventListener('click', async () => {
      console.log('el id : ', el.id);
      try {
        const result = await DataSource.getTeams(el.id);
        console.log('res: ', result);
        renderResult(result);
      } catch (err) {
        errorResult(err);
      }
    });
  });
  const onButtonClicked = async () => {
    try {
      const result = await DataSource.getTeams();
      console.log('res: ', result);
      renderResult(result);
    } catch (err) {
      errorResult(err);
    }
  };

  appBar.click = onButtonClicked;
};

export default main;
