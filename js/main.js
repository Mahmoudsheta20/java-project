 let landingpage = document.querySelector('.landing_page');
 let images = ['shuffle-01.jpg', 'shuffle-02.jpg', 'shuffle-03.jpg', 'shuffle-04.jpg', 'shuffle-05.jpg', 'shuffle-06.jpg'];

 let setting = document.querySelector('.settings');
 let icon = document.querySelector('.toggle .fa-cog');

 let colorli = document.querySelectorAll('.colors-list li');

 let maincolor = localStorage.getItem('color_option');

 if (maincolor !== null) {

     //  console.log('dsakd')
     document.documentElement.style.setProperty('--main-color', maincolor);

     document.querySelectorAll(".colors-list li").forEach(ele => {
         ele.classList.remove("activ");


         if (ele.dataset.color === maincolor) {
             ele.classList.add("activ")
         };
     });



 };


 colorli.forEach(lie => {

     lie.addEventListener('click', (e) => {

         console.log(e.target.dataset.color);
         document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
         //  
         localStorage.setItem('color_option', e.target.dataset.color);


         //  localStorage.setItem('color_option', e.target.dataset.color);
         e.target.parentElement.querySelectorAll('.activ').forEach(ele => {

             ele.classList.remove("activ");
         });


         e.target.classList.add("activ");

     });

 });
 const ranrowele = document.querySelectorAll('.randow span');


 ranrowele.forEach(span => {

     span.addEventListener('click', (e) => {





         //  localStorage.setItem('color_option', e.target.dataset.color);
         e.target.parentElement.querySelectorAll('.activ').forEach(ele => {

             ele.classList.remove("activ");
         });


         e.target.classList.add("activ");

     });

 });

 let backgroung = true;

 function randow() {

     if (backgroung === true) {


         setInterval(() => {

             let randow = Math.floor(Math.random() * images.length)
             landingpage.style.backgroundImage = 'url("/imags/' + images[randow] + '")'




         }, 10000);





     };
 };




 icon.onclick = function() {
     this.classList.toggle('fa-spin'), setting.classList.toggle('open')
 };




 //  icon.onclick = () => {

 //      s
 //  };



 let ourskills = document.querySelector(".skilss");

 window.onscroll = () => {
     let sills = ourskills.offsetTop;

     let outter = ourskills.offsetHeight;
     let windo = window.innerHeight;

     let windowtop = window.pageYOffset;
     if (windowtop > (outter + sills - windo)) {

         let all = document.querySelectorAll('.skilss .skill-box .skill-progress span');

         all.forEach(skill => {
             skill.style.width = skill.dataset.progress
         })

     };



 };

 let ourgallry = document.querySelectorAll(".gallry img");


 ourgallry.forEach(img => {

     img.addEventListener('click', (e) => {
         let overly = document.createElement("div");
         overly.className = 'ovarly';


         document.body.appendChild(overly);

         let poupbox = document.createElement("div");


         poupbox.className = "popup";
         if (img.alt !== null) {


             let imghead = document.createElement("h3");
             let imgtext = document.createTextNode(img.alt);

             imghead.appendChild(imgtext);

             poupbox.appendChild(imghead);





         };

         let poupimg = document.createElement('img');

         poupimg.src = img.src;

         poupbox.appendChild(poupimg);

         document.body.appendChild(poupbox);
         let close = document.createElement('span');
         let closetext = document.createTextNode('x');

         close.appendChild(closetext);
         close.className = 'colse'
         poupbox.appendChild(close);






     });
 });


 document.addEventListener('click', (e) => {
     if (e.target.className == 'colse') {


         e.target.parentNode.remove();

         document.querySelector('.ovarly').remove();
     }



 });


 const allbull = document.querySelectorAll(".nav");

 allbull.forEach(bull => {


     bull.addEventListener("click", (e) => {

         document.querySelector(e.target.dataset.bull).scrollIntoView({ behavior: "smooth" })






     });
 });