const client_id = '651291';
const client_secret = '3b200f404d9a4e4e2943cbe6990b6f64';
const authorize_url = `https://connect.deezer.com/oauth/auth.php?app_id=${client_id}&redirect_uri=YOUR_REDIRECT_URL&perms=basic_access,email,offline_access`;

fetch("https://api.deezer.com/artist/5520", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3b200f404d9a4e4e2943cbe6990b6f64"
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    displayData(data);
  })
  .catch(err => {
    console.error(err);
  });

function displayData(data) {
  const artistData = document.getElementById('artistData');
  artistData.textContent = `Artist Name: ${data.name}, Genre: ${data.genre.name}`;
}

// Server http://127.0.0.1:5501

    

/* var d = new DZ.init({
    appId : "651291",
    channelUrl : "https://example.com/callback/index.html",
    player : {
        onload : function() {
            
        }
    }
 }); */
 