

document.getElementById("plus").addEventListener("click", increaseCounter);
document.getElementById("minus").addEventListener("click", decreaseCounter);
document.getElementById("heart").addEventListener("click", liked);
document.getElementById("pause").addEventListener("click", pause);
document.querySelector("#comment-form").addEventListener("submit", addComment);

const counterH1 = document.querySelector("#counter"); 
let counter = parseInt(counterH1.textContent);

let counterID = timer();

function timer(){
    let time = setInterval(()=> {
        counter = counter + 1;
        counterH1.textContent = counter;
    }, 1000)
    return time;
}

function liked(){
    const manyOfLikes = document.createElement("li");
    manyOfLikes.textContent = `I liked ${counter}, ____ times`;   //**Need to figure out how to add many of times like button is clicked */
    document.querySelector(".likes").appendChild(manyOfLikes);
}


function increaseCounter(){
    counter = counter + 1;
    counterH1.textContent = counter;
}

function decreaseCounter(){
    counter = counter -1;
    counterH1.textContent = counter;
}


let paused = false;
function pause() {
    const btn = document.querySelector("#pause");
    if (!paused) {
        clearInterval(counterID);
        btn.textContent = "resume";
        disableBtn (true);
        paused = true;
    }
    else {
        counterID = timer()
        btn.textContent = "pause"
        disableBtn (false)
        paused = false;   
    }
}

function disableBtn (state) {
    document.querySelector("#plus").disabled = state;
    document.querySelector("#minus").disabled = state;
    document.querySelector("#heart").disabled = state;
    document.querySelector("#submit").disabled = state;
}

function addComment(event){
    event.preventDefault();
    const comment = document.createElement("p");
    comment.textContent = event.target.querySelector("input").value;
    document.querySelector("#list").appendChild(comment);
    
    event.target.reset();
}