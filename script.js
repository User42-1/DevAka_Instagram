let posts = [{
    'author':'img/imgs0.jpg',
    'image':'img/img0.jpg',
    'likes': 1578,
    'comments':['Dwayne Johnson plays football']
    },
    {
    'author':'img/imgs1.jpg',
    'image':'img/img1.jpg',
    'likes':34,
    'comments':['Vegan ist besser', 'Lieber Steak als Salat']
    },
    {
    'author':'img/imgs2.jpg',
    'image':'img/img2.jpg',
    'likes':543,
    'comments':['Wo ist das Ticket erhältlich?']
    },
    {
    'author':'img/imgs3.jpg',
    'image':'img/img3.jpg',
    'likes':7577,
    'comments':['Kommentar'] 
    }
];

let counterToggle = false;


function show() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i=0; i<posts.length; i++) {
        const post = posts[i];
        content.innerHTML += generateHTMLPost(i,post);
        let commentArray = document.getElementById(`commentArray${i}`);
        commentArray.innerHTML = '';
        
        showPostComments(i,post);
    }
}

function showPostComments(i,post) {
    let commentArray = document.getElementById(`commentArray${i}`);
    commentArray.innerHTML = '';
    
    for (let j = 0; j < post['comments'].length; j++) {
        const comment = post['comments'][j];
        commentArray.innerHTML += generateHTMLComment(comment);
    }
}

function generateHTMLPost(i,post) {
    return`
            <div class="post_container">
                <div class="author">
                    <img class="authorImage" src="${post['author']}">
                </div>
                <div>
                    <img class="image" src="${post['image']}">
                </div>
                <div class="middle_logo_container">
                    <div class="heart_row" id="heart_row">
                        <div class="logos_in_row_container">
                            <img onclick="counterLikes(${i})" class="logos_in_row" id="heart${i}" src="logos/heart-empty.png" alt="">
                        </div>
                        <div class="logos_in_row_container" >
                            <img class="logos_in_row" src="logos/bubble.png" alt="">
                        </div>
                        <div class="logos_in_row_container" >
                            <img class="logos_in_row" src="logos/paper-icon.png" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="banner"><img class="logo" src="logos/banner.png" alt=""></div>
                    </div>
                </div>
                <div class="likes">Gefällt: <div id="numberLikes${i}">${post['likes']}</div></div>

                <div class="commentArray" id="commentArray${i}"></div>

                <div class="input">
                    <input id="input${i}" type="text" placeholder="Kommentieren...">
                    <button onclick="sendComment(${i})">OK</button>
                </div>
            </div>
        `
}

function generateHTMLComment(comment) {
    return`
        <div>${comment}</div>
    `;
}

function sendComment(i) {
        let input = document.getElementById(`input${i}`);
        if (input.value.length == 0) { 
/*             input.style.background = 'Silver';
 */            alert("Bitte Kommentar einfügen");  	
                return false; 
        } else {
        posts[i]['comments'].push(input.value);
        input.value = '';
        }
        let post = posts[i];
        showPostComments(i,post);
}

function counterLikes(i) {
    if (counterToggle == false) {
        posts[i]['likes']++;
        let likes = posts[i]['likes'];
        document.getElementById(`numberLikes${i}`).innerHTML = `${likes}`;
        document.getElementById(`heart${i}`).style.backgroundColor = 'red';
        document.getElementById(`heart${i}`).style.borderRadius = '50%';
        counterToggle = true;
    } else {
        posts[i]['likes']--;
        let likes = posts[i]['likes'];
        document.getElementById(`numberLikes${i}`).innerHTML = `${likes}`;
        document.getElementById(`heart${i}`).style.backgroundColor = 'transparent';
        document.getElementById(`heart${i}`).style.borderRadius = '50%';
        counterToggle = false;
        }
}