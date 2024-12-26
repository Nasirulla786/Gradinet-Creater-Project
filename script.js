let a = document.getElementById("b1");
let b = document.getElementById("b2");
let code = document.querySelector(".color");
let rgb1 = "#fff"
let rgb2 = "#000"




const  chnagecolor=()=> {
    let c = "0123456789abcdef";
    let hash = "#";

    for(let i=0;i<6;i++){
        hash = hash + c[Math.floor(Math.random()*16)];

      
    }
   return hash;

}


const color1=()=>{
    rgb1 = chnagecolor();
    document.body.style.backgroundImage=`linear-gradient(to right , ${rgb1}, ${rgb2})`;
    code.innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
    a.innerText=rgb1

  

};
const color2=()=>{
    rgb2 = chnagecolor();
    document.body.style.backgroundImage=`linear-gradient(to right , ${rgb1}, ${rgb2})`;
        code.innerHTML=`background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`
    b.innerText=rgb2
};

a.addEventListener("click",color1);

b.addEventListener("click",color2);

code.addEventListener("click",()=>{
    navigator.clipboard.writeText(code.innerText);
    customAlert("YOUR CODE IS COPIED")
    
})



function customAlert(message) {
    // Set the message in the alert box
    document.getElementById('alertMessage').innerText = message;
    // Display the custom alert box
    document.getElementById('customAlert').style.display = 'block';
}

function closeAlert() {
    // Hide the custom alert box
    document.getElementById('customAlert').style.display = 'none';
}

// Close the alert if the user clicks outside of it
window.onclick = function(event) {
    const customAlert = document.getElementById('customAlert');
    if (event.target == customAlert) {
        customAlert.style.display = 'none';
    }
}
