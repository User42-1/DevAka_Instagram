instagrammer = require('./data.js');
let likes = instagrammer.likes;
var heartStatus = [false];

function render() {

    let content = document.getElementById('feed');
    content.innerHTML = ``;

    for (let i = 0; i < instagrammer.length; i++) {
        const person = instagrammer[i];
        content.innerHTML += insertHTML(person, i);

        let comments = document.getElementById(`comments-${i}`);

        for (let j = 0; j < person['comments'].length; j++) {
            const comment = person['comments'][j];
            comments.innerHTML += `
            <div class="comment">${comment}</div>
            `;
        }
    }
}

function insertHTML(person, i) {
    return /*html*/`
    <div class="person" id="person-${i}">
    <div class="profile-header">
        <a href="${person['url']}"> <img class="small-profile-img" src="${person['profile-img']}" alt=""> </a>
        <a href="${person['url']}"><h4>${person['name']}</h4></a>
    </div>
        <img src="${person['img']}" alt="">
        <div class="below-img">
            <div class="below-img-left">
                <img onclick="changeImage(${i})" src="${person['like']}" id="like-${i}" alt="">
                <img src="img/bubble.png" alt="">
                <img src="img/share.png" alt="">
            </div>
            <div class="below-img-right">
                <img src="img/banner.png" alt="">
            </div>
        </div>
        <div class="likes">gefällt ${person['likes']} mal</div>
        <p>${person['post']}</p>
        
        <div class="comments" id="comments-${i}"></div>
        <div class="input-and-button">
        <input class="input-field" type="text" name="" id="input-${i}" placeholder="Kommentar...">
        <button class="send-button" onclick="addComment(${i})">Senden</button>
        </div>
    <div>
`;
}


function addComment(i) {
    let newComment = document.getElementById(`input-${i}`).value;
    if (newComment.trim() === "") {
        alert("Please enter a comment");
        return;
    }
    instagrammer[i]['comments'].push(newComment);
    render()
    newComment = ``;
}



function changeImage(i) {
    image = document.getElementById(`like-${i}`);

    if (image.src.match("heart-empty")) {
        instagrammer[i]['like'] = "img/heart-full.png";

        instagrammer[i].likes++;
    } else {
        instagrammer[i]['like'] = "img/heart-empty.png";
        instagrammer[i].likes--;
    }
    render()
}