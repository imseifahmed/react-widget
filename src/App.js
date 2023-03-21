import './App.css';

function App({ domElement }) {
  const contest = domElement.getAttribute('data-contest'); // we can name it something like contestId and make an api request

  /**  implement api calls logic and setup state
   * *
   * *
   * *
   * *
   */

  // render our widget
  return <div className='App'>{contest}</div>;
}

export default App;
