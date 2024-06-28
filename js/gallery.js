function upDate(previewPic) {
   /* In this function you should 
      1) Change the URL for the background image of the div with the id = "image" 
         to the source file of the preview image
      
      2) Change the text of the div with the id = "image" 
         to the alt text of the preview image 
   */
   document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
   document.getElementById('image').innerHTML = previewPic.alt;
   console.log("Event triggered: upDate");
}

function unDo() {
   /* In this function you should 
      1) Update the URL for the background image of the div with the id = "image" 
         back to the original image. You can use the CSS code to see what that original URL was.
      
      2) Change the text of the div with the id = "image" 
         back to the original text. You can use the HTML code to see what that original text was.
   */
   document.getElementById('image').style.backgroundImage = "url('')";
   document.getElementById('image').innerHTML = "Hover over an image below to display here.";
   console.log("Event triggered: unDo");
}

function addTabFocus() {
   const images = document.querySelectorAll('.preview');
   for (let i = 0; i < images.length; i++) {
       images[i].setAttribute('tabindex', i + 1);
       images[i].addEventListener('focus', function() {
           upDate(this);
       });
       images[i].addEventListener('blur', function() {
           unDo();
       });
   }
   console.log("Tabindex and event listeners added to images");
}
