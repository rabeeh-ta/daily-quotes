addEventListener('load', () => {
  function callApi() {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        document.getElementById('quote').innerHTML = data.en;
        document.getElementById('author').innerHTML = data.author;
      })
      .catch((err) => console.log(err));
  }

  callApi();
});
