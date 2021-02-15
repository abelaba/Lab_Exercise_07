
const placeholder = document.querySelector(".carousel-inner")
async function load() {
    //open the request
     let response = await fetch('https://picsum.photos/v2/list');
      
     let data = await response.json(); 
       
     return data;
     
}



function display(){
    load().then((image)=>{
        

        let count = 0;

        let output;

        image.forEach(element => {

            if(count==0){
                output +=` 
                    <div class="carousel-item active">
                    <img src="${element.download_url}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>${element.author}</h5>
                   
                    </div>
                </div>`

            }else{
                output +=` 
                    <div class="carousel-item">
                    <img src="${element.download_url}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                    <h5>${element.author}</h5>
                   
                    </div>
                </div>`
                console.log(count);
                
            }
            console.log(count);
            count +=1;


            
            
            
        });

        placeholder.innerHTML = output;

        

    }
        
    )

}

display()



  