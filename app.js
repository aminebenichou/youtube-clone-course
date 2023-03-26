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
            // getting our elemnt
            const card = document.getElementsByClassName("card")[0]

            //cloning the card
            var clones = card.cloneNode(true)



            /*thumbnails_resp = response.items[0].snippet.thumbnails.default.url
            i++
            console.log(response);
            var thumbnails = document.getElementsByClassName("thumbnail")
            var j = 0;
            while (j < thumbnails.length) {
                thumbnails[j].src = thumbnails_resp
                console.log(thumbnails_resp)
                j++
            }
            var title = document.getElementsByClassName("title")
            var t=0
            title[0].innerHTML = response.items[i].snippet.title*/
            i++;
        }
    })
    .catch(err => console.error(err));

