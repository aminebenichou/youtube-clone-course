var side_button = document.getElementsByClassName("btn-side");
const btn = document.getElementById("btn")
btn.addEventListener("click", (e) => console.log("hey"))

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd6f2791a72msha295b982405ced2p113a58jsn1c774b87e870',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
var thumbnails_resp;
var i = 0
fetch('https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date', options)
    .then(response => response.json())
    .then(response => {
        while (i < response.items.length) {
            thumbnails_resp = response.items[0].snippet.thumbnails.default.url
            i++

            var thumbnails = document.getElementsByClassName("thumbnail")
            var j = 0;
            while (j < thumbnails.length) {
                thumbnails[j].src = thumbnails_resp
                console.log(thumbnails_resp)
                j++
            }
        }
    })
    .catch(err => console.error(err));

