/*
KEY:
SPAN, MODAL, AND BTN CORRESPOND
modal - bsong
modal1 - bwrite 
modal2 - bchart
modal3 - lesson1
modal4 - lesson1game
*/

// Group variables by modal
let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");
let modal5 = document.getElementById("myModal5");
let modal6 = document.getElementById("myModal6");
let modal7 = document.getElementById("myModal7");
let modal8 = document.getElementById("myModal8");
let modal9 = document.getElementById("myModal9");
let modal10 = document.getElementById("myModal10");
// Create an array of the modal variables
let modals = [modal, modal1, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9, modal10];

// Loop through the array and console.log each variable
for (let i = 0; i < modals.length; i++) {
  console.log(modals[i]);
}

// Group variables by span
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];
let span3 = document.getElementsByClassName("close3")[0];
let span4 = document.getElementsByClassName("close4")[0];
let span5 = document.getElementsByClassName("close5")[0];
let span6 = document.getElementsByClassName("close6")[0];
let span7 = document.getElementsByClassName("close7")[0];
let span8 = document.getElementsByClassName("close8")[0];
let span9 = document.getElementsByClassName("close9")[0];
let span10 = document.getElementsByClassName("close10")[0];

// Group variables by btn
let btn = document.getElementById("bsong");
let btn1 = document.getElementById("bwrite");
let btn2 = document.getElementById("bchart");
let btn3 = document.getElementById("lesson1");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");

// Group variables by block
let blockpress;
let divpress;
let div;
let block;
let buttons = document.getElementsByClassName("alphabetblock");
let buttons1 = document.getElementsByClassName("alphabetblock1");
let buttons2;
let alreadyblocks = [];

// Group other variables
let dropbox = document.getElementsByClassName("dropbox");
let dropbox1 = document.getElementsByClassName("dropbox1");
let arabictext = document.getElementById("arabictext");
let hi = document.getElementById("blockcontainer");
let timestamps = [4, 10, 15, 21, 28, 34, 39];
let index = 0;
let video = document.getElementById("myVideo");
let playButton = document.getElementById("playButton");





for (let i = 0; i < 7; i++) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 7) + 1;
  } while (alreadyblocks.includes(randomNumber));

  alreadyblocks[i] = randomNumber;
  console.log(alreadyblocks);

  var button = document.createElement("button");

  button.id = "pp" + randomNumber;
  button.className = "alphabetblock2";

  var img = document.createElement("img");
  img.src = "Picture" + randomNumber + ".png";

  button.appendChild(img);
  modal4.appendChild(button);
  buttons2 = document.getElementsByClassName("alphabetblock2");
}

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

btn1.onclick = function () {
  modal1.style.display = "block";
};

span1.onclick = function () {
  modal1.style.display = "none";
};

btn2.onclick = function () {
  modal2.style.display = "block";
};

span2.onclick = function () {
  modal2.style.display = "none";
};

btn3.onclick = function () {
  
  modal3.style.display = "block";
};

span3.onclick = function () {
  modal3.style.display = "none";
};

btn4.onclick = function () {
  modal4.style.display = "block";
};

span4.onclick = function () {
  modal4.style.display = "none";
};

/*btn5.onclick = function () {
  modal5.style.display = "block";
};

span5.onclick = function () {
  modal5.style.display = "none";
};
btn6.onclick = function () {
  modal6.style.display = "block";
};

span6.onclick = function () {
  modal6.style.display = "none";
};

btn7.onclick = function () {
  modal7.style.display = "block";
};

span7.onclick = function () {
  modal7.style.display = "none";
};

btn8.onclick = function () {
  modal8.style.display = "block";
};

span8.onclick = function () {
  modal8.style.display = "none";
};

btn9.onclick = function () {
  modal9.style.display = "block";
};

span9.onclick = function () {
  modal9.style.display = "none";
};

btn10.onclick = function () {
  modal10.style.display = "block";
};

span10.onclick = function () {
  modal10.style.display = "none";
};

*/
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal7) {
    modal7.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal8) {
    modal8.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal9) {
    modal9.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == modal10) {
    modal10.style.display = "none";
  }
};

  console.log("drawrealstared");
  let isDrawing = false;
  let x = 0;
  let y = 0;
  const canvas = document.getElementById('drawCanvas');
  const context = canvas.getContext('2d');

  // Event listeners for mouse movement
  canvas.addEventListener('mousedown', e => {
    x = e.offsetX;
    y = e.offsetY;
    isDrawing = true;
    console.log("ramzezstart");
  });

  canvas.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
      console.log("drawin");
    }
  });

  window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.offsetX, e.offsetY);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });

  // Function to draw a line
  function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black'; // Line color
    context.lineWidth = 2; // Line width
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }


video.addEventListener("timeupdate", function () {
  if (this.currentTime >= timestamps[index]) {
    this.pause();
    
    console.log("drawing started");
    index++;
  }
});

playButton.addEventListener("click", function () {
  video.play();
});

let arabicLetters = [
  "ا",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "ي",
];

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let id = this.id;
    let audiobefore = "Recording (" + id + ").mp3";
    console.log(audiobefore);
    var audio = new Audio(audiobefore);
    audio.play();

    let index = id - 1;
    let letter = arabicLetters[index];
    console.log(letter);
    arabictext.value += letter;
  });
}
for (let i = 0; i < buttons1.length; i++) {
  buttons1[i].addEventListener("click", function () {
    let str = this.id;
    let id1 = str.replace("p", "");
    let index1 = id1 - 1;
    let letter1 = arabicLetters[index1];
    blockpress = letter1;
    console.log(blockpress);
    block = document.getElementById(this.id);
    for (let i = 0; i < dropbox.length; i++) {
      dropbox[i].addEventListener("click", function () {
        let str2 = this.id;
        let id2 = str2.replace("b", "");
        console.log(str2);
        let index2 = id2 - 1;
        let letter2 = arabicLetters[index2];
        console.log(letter2);
        divpress = letter2;
        if (divpress == blockpress) {
          console.log("ramtrud");
          const element = document.getElementById(this.id);
          element.style.border = "3px solid green";
          div = document.getElementById(this.id);

          block.style.marginRight = "auto";
          block.style.marginLeft = "auto";
          block.style.display = "block";

          div.appendChild(block);
        } else {
          console.log("ramtrudd");
          const element = document.getElementById(this.id);
          element.style.border = "3px solid red";
        }
      });
    }
  });
}

for (let i = 0; i < buttons2.length; i++) {
  buttons2[i].addEventListener("click", function () {
    let str = this.id;
    let id1 = str.replace("pp", "");
    let index1 = id1 - 1;
    let letter1 = arabicLetters[index1];
    blockpress = letter1;
    console.log(blockpress);
    block = document.getElementById(this.id);
    for (let i = 0; i < dropbox1.length; i++) {
      dropbox1[i].addEventListener("click", function () {
        let str2 = this.id;
        let id2 = str2.replace("bb", "");
        console.log(str2);
        let index2 = id2 - 1;
        let letter2 = arabicLetters[index2];
        console.log(letter2);
        divpress = letter2;
        if (divpress == blockpress) {
          console.log("ramtrud");
          const element = document.getElementById(this.id);
          element.style.border = "3px solid green";
          div = document.getElementById(this.id);

          block.style.marginRight = "auto";
          block.style.marginLeft = "auto";
          block.style.display = "block";

          div.appendChild(block);
        } else {
          console.log("ramtrudd");
          const element = document.getElementById(this.id);
          element.style.border = "3px solid red";
        }
      });
    }
  });
}
