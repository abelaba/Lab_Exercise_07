// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    load_fromPlaceHolder();
    //loadDataNew();
});



//load post from fake api function 
function load_fromPlaceHolder() {
    //open the request
     fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(res) {  return res.json(); //return the JSON Promise
         })
         .then(function(posts) {
             //iterate over each post [100 posts]
             let output = '';
             posts.forEach(function(post) {
                 
                 output += `
                 <div class="item">
                 
                 <div class="content">
                         <a class="header" href="#" id="bTitle"> ${post.userId} </a>
                         <div class="meta">
                             <span id="bDate">${post.id} </span>
                             <span>By: <a href="#" id="bAuthor"> ${post.title}</a></span>
                         </div>
                         <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
                         <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
                 </div>
             </div> `;  // same code as previous with few update
             });
             postDiv3.innerHTML = output;
         })
         .catch(function(err) {     console.log(err);
         });  }
  
//async await
async function load_fromPlaceHolder_new() {
    //open the request
     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
     let data = await response.json(); 
       
     return data;
     
  }
  

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
        //iterate over each post [100 posts]
        let output = '';
        posts.forEach(function(post) {
            
            output += `
            <div class="item">
            
            <div class="content">
                    <a class="header" href="#" id="bTitle"> ${post.userId} </a>
                    <div class="meta">
                        <span id="bDate">${post.id} </span>
                        <span>By: <a href="#" id="bAuthor"> ${post.title}</a></span>
                    </div>
                    <div class="description">  <p id="bDesc">  ${post.body} </p>  </div>
                    <div class="extra"> <a class="ui floated basic violet button" href="#">Read Mores</a> </div>
            </div>
        </div> `;  // same code as previous with few update
        });
        postDiv3.innerHTML = output;
    })
        
    


}