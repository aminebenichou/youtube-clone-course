var side_button = document.getElementsByClassName("btn-side");
const btn = document.getElementById("btn")
btn.addEventListener("click", (e) => console.log("hey"))


var video = document.getElementsByClassName("card-link")[0]

// video.addEventListener("click", (e)=>{
//     document.cookie="videoId=123"

    
// })


function getVideo(id) {
    console.log(id);
}

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
        console.log(response);
        while (i < response.items.length) {
            // getting our elemnt
            const card = document.getElementsByClassName("card-link")[0]

            //cloning the card
            var clones = card.cloneNode(true)
            card.after(clones)



            // console.log(response);
            var thumbnails = document.getElementsByClassName("thumbnail")
            var card_link = document.getElementsByClassName("card-link")
            var j = 0;
            while (j < thumbnails.length) {
                thumbnails_resp = response.items[j].snippet.thumbnails.default.url

                thumbnails[j].src = thumbnails_resp
                console.log(thumbnails_resp)
                var title = document.getElementsByClassName("title")
                
                title[j].innerHTML = response.items[j].snippet.title
                card_link[j].onclick = getVideo(response.items[j].id.videoId)
                
                j++
            }
            
            i++;
        }
    })
    .catch(err => console.error(err));







