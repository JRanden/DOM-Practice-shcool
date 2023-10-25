// .oninput

const colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "Blue", "BlueViolet", "Brown",
 "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
  "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", 
  "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue"]


document.getElementById("buttonCheck").addEventListener("click", function(){
    var trueNumber = Number(document.getElementById("inputNumber").value);
    console.log(typeof(trueNumber))
    perfectChecker(trueNumber)
  });

document.getElementById("buttonRandom").addEventListener("click",function () {

    var randomNumber = Math.floor(Math.random () * 100)

    document.getElementById("inputNumber").value = `${randomNumber}`
    perfectChecker(randomNumber)
})


document.getElementById("buttonRandomColor").addEventListener("click", function (){
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex]
    document.getElementById("inputColor").value = `${colors[randomIndex]}`
})

document.getElementById("buttonColor").addEventListener("click", function (){
    let setColor = document.getElementById("inputColor").value;

    document.body.style.backgroundColor = setColor;
})


  function perfectChecker(number) {
    var y = 0;

    for (var i = 1; i <= number/2 ; i++) 
    {
        if (number%i === 0) 
        {
         y += i;
         console.log(y)
        }
    }
    if (y === number && y !== 0) 
    {
        document.getElementById("outputField").innerHTML = ("It is a perfect number!")
    }
    else
    {
        document.getElementById("outputField").innerHTML = ("It is not a perfect number!") 
    }
}

function changeColor() {
   let red = document.getElementById("sliderRed").value;
   let green = document.getElementById("sliderGreen").value;
   let blue = document.getElementById("sliderBlue").value;
   let color = 'rgb(' + red + ',' + green + ',' + blue + ')'

   document.body.style.backgroundColor = color;
}

function selectInput () {
    let color = document.querySelector('.colorBox').value
    document.body.style.backgroundColor = color;
}



document.getElementById("sliderRed").addEventListener('input', changeColor)
document.getElementById("sliderGreen").addEventListener('input', changeColor)
document.getElementById("sliderBlue").addEventListener('input', changeColor)