// 初始變數
const inputR = document.querySelector(".inputR");
const inputG = document.querySelector(".inputG");
const inputB = document.querySelector(".inputB");
const convertBtn = document.querySelector("#convert-btn");

// 1.先輸入3個數值(0-255、不可空白)，按convert並同時顯色在小方塊裡面

convertBtn.addEventListener("click", function () {
  let inputValueR = parseInt(inputR.value);
  // console.log(inputValueR);
  let inputValueG = parseInt(inputG.value);
  let inputValueB = parseInt(inputB.value);
  if (
    inputValueR >= 0 &&
    inputValueR <= 255 &&
    inputValueG >= 0 &&
    inputValueG <= 255 &&
    inputValueB >= 0 &&
    inputValueB <= 255
  ) {
    rgbtoHex(inputValueR, inputValueG, inputValueB);
    inputR.nextElementSibling.style = `
    background-color:rgb(${inputValueR}, 0, 0)`;
    inputG.nextElementSibling.style = `
    background-color:rgb(0,${inputValueG}, 0)`;
    inputB.nextElementSibling.style = `
    background-color:rgb(0,0,${inputValueR})`;
  } else {
    alert("Please key in 0-255");
  }
});

// 2.把3個數值轉換成HEX，並放在HEX-text，顯色在大方塊裡面
const HEXtext = document.querySelector(".HEX-text");
function decimal(color) {
  // let HEX = ""
  let colorDecimal = color.toString(16);
  if (colorDecimal.length === 1) {
    colorDecimal = `0${colorDecimal}`;
    return colorDecimal;
  } else {
    return colorDecimal;
  }
}

function rgbtoHex(R, G, B) {
  let Hex = `#${decimal(R)}${decimal(G)}${decimal(B)}`;
  // console.log(typeof HEX);
  HEXtext.innerHTML = `${decimal(R)}${decimal(G)}${decimal(B)}`;
  HEXtext.nextElementSibling.style = `background-color:${Hex}`;
  // let Hex = `#${R.toString(16)}${G.toString(16)}${B.toString(16)}`;
  // HEXtext.innerHTML = `${R.toString(16)}${G.toString(16)}${B.toString(16)}`;
}
