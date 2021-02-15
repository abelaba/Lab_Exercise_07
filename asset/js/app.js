//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    startTime();
    loadPost();
    loadPosts();
    spinner();
});


const spinnerdisplay = document.querySelector(".spinner")

function spinner(){

    setTimeout(() => {

        spinnerdisplay.style.display = "none";
    

        
    }, 4000);
}