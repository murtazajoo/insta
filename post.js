// let userimg = document.getElementById('userimg')
// let selectedimg = document.getElementById('selectedimg')

let imgArr = []
let disArr = [] 
function hello() {


    // let newimg = `http://127.0.0.1:5500/images/${userimg.files[0].name}`
let imgNum = Math.floor(Math.random()*10)

// console.log(newimg + " " + newDis)


let newDis = document.getElementById("userdis").value
    let newimg = `postimg/${imgNum}.jpg`
let newlogo = `imgs/${imgNum}.jpg`
    
// console.log(newimg)
    
document.getElementById("posts").innerHTML = ""
    


imgArr.unshift(newimg)
disArr.unshift(newDis)

    for (let i = 0; i < imgArr.length; i++) {
        let img = imgArr[i]
        console.log(i + imgArr[i])
        let dis = disArr.shift()
        setnew =
            `
        <div class="post">



    <div class="posthead">
        <div class="inposthead">
    <img src="${newlogo}" alt="">
    <p class="accholder">JAMES</p>
</div>
    <div onclick="doton()" id="threedot" class="dots">
        ...
    </div>
</div>

<div class="postimg">
    <img src="${img}" alt="">
</div>


<div class="postrew">
    <div class="review">
        <div class="firstreview">
            <img id="heart" onclick="likes()" src="images/heart.png" alt="">
            <img src="images/bubble-chat.png" alt="">
            <img src="images/send.png" alt="">
        </div>
        <div class="save">
            <img src="images/save-instagram.png" alt="">
        </div>
    </div>
    <div class="likes">
     <span  id="like" >0</span> likes
    </div>
    
    <div class="discription">
        <strong>James </strong>${dis}
    
    </div>
    
    
    
    <div class="comments">view all 621 comments</div>
    
    <div class="time">6 DAYS AGO</div>
</div>


</div>
`;
        
document.getElementById("posts").innerHTML += setnew
        
document.getElementById("userdis").value = ""
}
cancelpost()    

}



