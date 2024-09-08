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
const parentBlock = document.querySelector(".parent_block");
const parentWidth = parentBlock.clientWidth - childBlock.clientWidth;
const parentHeight = parentBlock.clientHeight - childBlock.clientHeight;
let positionX = 0;
let positionY = 0;
let direction = 'right';
const speed = 1;

const moveBlock = () => {
    switch (direction) {
        case 'right':
            positionX += speed;
            if (positionX >= parentWidth) {
                positionX = parentWidth;
                direction = 'down';
            }
            break;
        case 'down':
            positionY += speed;
            if (positionY >= parentHeight) {
                positionY = parentHeight;
                direction = 'left';
            }
            break;
        case 'left':
            positionX -= speed;
            if (positionX <= 0) {
                positionX = 0;
                direction = 'up';
            }
            break;
        case 'up':
            positionY -= speed;
            if (positionY <= 0) {
                positionY = 0;
                direction = 'right';
            }
            break;
    }

    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    requestAnimationFrame(moveBlock);
};

moveBlock();


let seconds = 0;
let timer = null;

const display = document.getElementById('seconds');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const startTimer = () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            display.textContent = seconds;
        }, 1000);
    }
};


const stopTimer = () => {
    clearInterval(timer);
    timer = null;
};


const resetTimer = () => {
    stopTimer();
    seconds = 0;
    display.textContent = seconds;
};

// Обработчики событий для кнопок
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

