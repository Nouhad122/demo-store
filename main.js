let menu = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');
let close = document.querySelector('.close');
let body = document.querySelector('body');
let plus = document.querySelector('.fa-plus');
let minus = document.querySelector('.fa-minus');
let counter = document.querySelector('.counter');
let countInBox = document.querySelector('.number-box');
let addCart = document.querySelector('.add-cart');
let total = document.querySelector('.total');
let originalPrice = document.querySelector('.original');
let mainCart = document.querySelector('.countCart');
let full = document.querySelector('.full');
let empty = document.querySelector('.empty');
let numOnCart = document.querySelector('.count');
let deleteCard = document.querySelector('.delete');
let checkout = document.querySelector('.checkout');
let box = document.querySelector('.count-box');
let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
let image3 = document.querySelector('.image3');
let image4 = document.querySelector('.image4');
let mainImage = document.querySelector('.mainImage');
let next = document.querySelector('.nextBg');
let previous = document.querySelector('.previousBg');
let darkBg= document.querySelector('.dark');
let allImages= document.querySelector('.all-images');
let miniImages= document.querySelector('.mini-images');
let closeIn= document.querySelector('.close-in');
let allImagesIn= document.querySelector('.all-images-in');
let miniImagesIn= document.querySelector('.mini-images-in');
let previousIn= document.querySelector('.previous-in');
let nextIn= document.querySelector('.next-in');
let mainImageIn= document.querySelector('.mainImage-in');
let image1In = document.querySelector('.image1-in');
let image2In = document.querySelector('.image2-in');
let image3In = document.querySelector('.image3-in');
let image4In = document.querySelector('.image4-in');

menu.onclick = function(){
    navbar.style.display = 'flex';
    darkBg.style.display = 'block';
}
close.onclick = function(){
    navbar.style.display = 'none';
    darkBg.style.display = 'none';
}

let count = 0;
function countPlus(){
    
   plus.onclick = function(){
    counter.innerHTML = (count++)+1;
   }

}
function countMinus(){
    minus.onclick = function(){
        if(count-1>=0){
        counter.innerHTML = (count--)-1;
        }
    }
 
 }

 function InBox(){
     price = 125;
    addCart.onclick = function(){
        originalPrice.innerHTML = '$'+price+'.00'+' x';
        countInBox.innerHTML = count;
        let sum = price*count;
        total.innerHTML = '$'+sum+'.00';
        if(count>0){
            numOnCart.style.display = 'block';
            numOnCart.innerHTML = count;
            mainCart.onmouseover = function(){
                full.style.display = 'block';
            }
            mainCart.onmouseout = function(){
                full.style.display = 'none';
            }
            full.onmouseover = function(){
                full.style.display = 'block';
            }
            full.onmouseout = function(){
                full.style.display = 'none';
            }
        }
        else{
            numOnCart.style.display = 'none';
            mainCart.onmouseover = function(){
                empty.style.display = 'block';
            }
            mainCart.onmouseout = function(){
                empty.style.display = 'none';
            }
            empty.onmouseover = function(){
                empty.style.display = 'block';
            }
            empty.onmouseout = function(){
                empty.style.display = 'none';
            }
        }
       
    }
        mainCart.onmouseover = function(){
            empty.style.display = 'block';
        }
        mainCart.onmouseout = function(){
            empty.style.display = 'none';
        }
        empty.onmouseover = function(){
            empty.style.display = 'block';
        }
        empty.onmouseout = function(){
            empty.style.display = 'none';
        }
}
function deleteItems(){
    deleteCard.onclick = function(){
        full.style.display = 'none';
        empty.style.display = 'block';
        numOnCart.style.display = 'none';
    }
}

function checkFocus(){
    checkout.onclick = function(){
        box.style.border = 'solid 2px orange';
    }
    onmousemove = function(){
        box.style.border = 'solid 2px transparent';
    }
    
}
   function onImagesClick(){
    image1.onclick = function(){
        mainImage.src = 'images/prod1.png';
        image1.style.border = 'solid 4px orange';
        image2.style.border = 'solid 4px transparent';
        image3.style.border = 'solid 4px transparent';
        image4.style.border = 'solid 4px transparent';
     }
image2.onclick = function(){
   mainImage.src = 'images/prod2.png';
   image2.style.border = 'solid 4px orange';
   image1.style.border = 'solid 4px transparent';
   image3.style.border = 'solid 4px transparent';
   image4.style.border = 'solid 4px transparent';
}
image3.onclick = function(){
    mainImage.src = 'images/prod3.png';
    image3.style.border = 'solid 4px orange';
    image1.style.border = 'solid 4px transparent';
    image2.style.border = 'solid 4px transparent';
    image4.style.border = 'solid 4px transparent';
 }
 image4.onclick = function(){
    mainImage.src = 'images/prod4.png';
    image4.style.border = 'solid 4px orange';
    image1.style.border = 'solid 4px transparent';
    image2.style.border = 'solid 4px transparent';
    image3.style.border = 'solid 4px transparent';
 }
   }


   function onImagesClickIn(){
    image1In.onclick = function(){
        mainImageIn.src = 'images/prod1.png';
     }
image2In.onclick = function(){
   mainImageIn.src = 'images/prod2.png';
}
image3In.onclick = function(){
    mainImageIn.src = 'images/prod3.png';
 }
 image4In.onclick = function(){
    mainImageIn.src = 'images/prod4.png';
 }
}
       
   const images = [
    'images/prod1.png',
    'images/prod2.png',
    'images/prod3.png',
    'images/prod4.png'
   ];

   const firstImage = 0;
   const lastImage = images.length-1 ;
   let currentImage = 0;
   
   next.addEventListener('click',()=>{
      currentImage++;
      if(currentImage>=lastImage){
        currentImage = 3;
      }
      mainImage.src = images[currentImage];
   });

   previous.addEventListener('click',()=>{
    currentImage--;
    if(currentImage<=firstImage){
      currentImage = 0;
    }
    mainImage.src = images[currentImage];
   });

   const imagesIn = [
    'images/prod1.png',
    'images/prod2.png',
    'images/prod3.png',
    'images/prod4.png'
   ];

   const firstImageIn = 0;
   const lastImageIn = imagesIn.length-1 ;
   let currentImageIn = 0;

   nextIn.addEventListener('click',()=>{
    currentImageIn++;
    if(currentImageIn>=lastImageIn){
      currentImageIn = 3;
    }
    mainImageIn.src = imagesIn[currentImageIn];
    
 });
 

 previousIn.addEventListener('click',()=>{
  currentImageIn--;
  if(currentImageIn<=firstImageIn){
    currentImageIn = 0;
  }
  mainImageIn.src = imagesIn[currentImageIn];
 });

 closeIn.addEventListener('click',()=>{
    allImagesIn.style.display = 'none';
    darkBg.style.display = 'none';
 });
 function myFunction(x) {
    if (x.matches) { 
        mainImage.addEventListener('click',()=>{
            allImagesIn.style.display = 'none';
            darkBg.style.display = 'none';
         });
         } 
         else {
        mainImage.addEventListener('click',()=>{
            allImagesIn.style.display = 'block';
            darkBg.style.display = 'block'
    });
  }
}
  var x = window.matchMedia("(max-width: 864px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)

countPlus();
countMinus();
InBox();
deleteItems();
checkFocus();
onImagesClick();
onImagesClickIn();