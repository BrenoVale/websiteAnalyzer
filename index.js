function analyzeWebSite() {
  const urlData = document.getElementById('url_data');
  const url = urlData.value;
  if (url === '') {
    alert('You need to send a valid website.');
    return;
  }
  fetch(url).then(function (response) {
    console.log(response); // show all response from the sended webpage
    return response.text().then(function (text) {
      console.log(text); // show all the text from the sended webpage
    });
  });
}
go;
