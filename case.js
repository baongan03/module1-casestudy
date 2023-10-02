

class Post {
    constructor(id, name, content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }
}
let posts = [];


const KEY_POSTS = "KEY_POSTS";

function handleBtnModalClose() {
    document.getElementById("modal").style.display = "none";
}
function openPost(){
    modal.style.display="block";
}

function createPost(){
    let postHTML="";
    
}
function renderPost() {
    let htmls = posts.map(function(post){
        return `
        <div class="post">
          <div class="info">
            <div class="user">
              <div class="profile-pic"><img src="./image/photo-1530281700549-e82e7bf110d6.jpg" alt=""></div>
              <p class="username" id="username-post">${post.name}</p>
            </div>
            <img onclick="handleImageDelete(${post.id}, '${post.content}')" src="./image/bn.svg" class="option" alt="">
          </div>
          <img src="./image/photo-1530281700549-e82e7bf110d6.jpg" class="post-image" alt="">
          <div class="post content">
            <div class="reaction-wrapper">
              <div class="icon-reaction">
                <img src="./image/heart-outline.svg" class="icon" alt="">
                
                <img src="./image/comment.svg" class="icon" alt="">
                <img src="./image/send.svg" class="icon" alt="">
                <img src="./image/save.svg" class=" save icon" alt="">
              </div>
              <div>
                <p class="likes">2,510 likes</p>
              </div>
              <div>
                <p class="description"><span> ${post.content} </span></p>
              </div>
              <div>
                <p class="post-time">2 minutes ago</p>
              </div>
            </div>
            <div class="comment-wrapper">
              <img src="./image/happy-outline.svg" class="icon" alt="">
              <input type="text" class="comment-box" planceholder="Add a comment">
              <button class="comment-btn">post</button>

            </div>
          </div>

        </div>
        `
    });
    document.querySelector('#posts').innerHTML = htmls.join("")
}



function findMaxId() {
    let max = 0;
    for (let post of posts) {
        if (post.id > max) {
            max = post.id;
        }
    }
    return max;
}
function handleBtnCreatePost() {
    let content = document.getElementById('post-content').innerText;
    let name = document.querySelector('#username-avatar').innerText;
    let id = findMaxId() + 1;
    let post = new Post(id, name, content);
    posts.unshift(post);
    localStorage.setItem(KEY_POSTS, JSON.stringify(posts));
    handleBtnModalClose();
    renderPost();
}
function init(){
    if(localStorage.getItem(KEY_POSTS) == null){
        posts = [
            new Post(1, "Gấuu", " Hom qua toi moi mua mot con cho "),
            new Post(2, "Bôngg", "Con cho dep khong moi người"),
            new Post(3, "Xoàii", "Hôm nay trời đẹp lắm")
        ];
        localStorage.setItem(KEY_POSTS, JSON.stringify(posts) )
    }else{
        posts = JSON.parse(localStorage.getItem(KEY_POSTS));
    }
}
function main(){
    init();
    renderPost();
}
main();

function handleImageDelete(id, content){
  let check = confirm('Are you sure delete this post');
  if(check == true){
    let indexPost = posts.findIndex(p=> p.id == id);
    posts.splice(indexPost, 1);
    localStorage.setItem(KEY_POSTS, JSON.stringify(posts));
    renderPost(posts);
  }
}









