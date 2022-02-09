let dots = document.getElementsByClassName("dots");
let dotclick = document.getElementById('choose')



function doton() {
console.log("JO "+ document.getElementById('choose'))
document.getElementById('choose').style.display ="block";
}

function dotoff() {
    dotclick.style.display = "none"
    
}



let follow = document.getElementById('follow')

follow.addEventListener('click', () => {
    if (follow.textContent == "Unfollow") {
        follow.textContent = "Follow"
        follow.style.color = 'black'
    }    
    else {
        follow.textContent = "Unfollow"
        follow.style.color = "rgb(218, 32, 32)"
        
    }
})








let newPost=document.getElementById("addpost")
newPost.addEventListener('click', () => {
document.getElementById('create').style.display="block"    
})

    function cancelpost() {
document.getElementById('create').style.display="none"    
}





let checkliked = false

function likes() {
    let me = document.getElementById("like")
    let like = document.getElementById("heart")
  
    if (checkliked === false) {

        me.innerHTML = parseInt(me.textContent) + 1;
        like.src = "images/liked.png"
        checkliked = true
    }

    else if(checkliked !== false) {

        me.innerHTML = parseInt(me.textContent) - 1;
        like.src = "images/heart.png" 
        checkliked = false
        
}   
}

let activity = document.getElementById("activities")
function cancelactivity() {
        activity.style.display="none"
}
function openactivity() {
        activity.style.display="block"    
}