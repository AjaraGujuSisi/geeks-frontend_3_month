const gmailInput = document.getElementById("gmail_input");
const gmailButton = document.getElementById("gmail_button");
const gmailResult = document.getElementById("gmail_result");

const regExp =  /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerText = "ok";
    }else{
        gmailResult.innerText = "not ok";
    }
};


const childBlock = document.querySelector(".child_block");
const parentWidth = 449;
let position = 0;
const moveBlock = () => {
    if (position < parentWidth) {
        position++;
        childBlock.style.left = position + "px";
        requestAnimationFrame(moveBlock);
    }
};
moveBlock();