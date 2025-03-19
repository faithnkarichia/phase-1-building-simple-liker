// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let allLikes=document.querySelectorAll(".like-glyph")
  allLikes.forEach((like)=>{
  like.addEventListener("click", () => {
    mimicServerCall()
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(() => {
        const modalHeading = document.querySelector("#modal h2"); // Select the h2 element
        modalHeading.classList.remove("hidden");
      });
  });
  
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
