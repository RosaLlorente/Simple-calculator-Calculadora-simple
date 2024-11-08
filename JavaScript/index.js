//DECLARATION OF GLOBAL VARIABLES
var data, p;
var result = "";
var resultF = "";

//PROGRAM
window.onload = function()
{
    p = document.querySelector('p');
    document.getElementById("Numbers").addEventListener("click", (e) =>
    {
        if(e.target.id != "Numbers")
        {
            playSound();
            data = e.target.innerText;
            result += data;
            p.innerHTML = result;
        }
    });
    
    document.getElementById("Buttons-Operators").addEventListener("click", (e) =>
    {
        if(e.target.id != "Buttons-Operators")
        {
            playSound();
            data = e.target.innerText;
            result += data;
            p.innerHTML = result;
        }
    });

    document.getElementById("Functional-Buttons").addEventListener("click", (e) =>
    {
        playSound();
        if (e.target.innerText === "=") 
        {
            try 
            {
                if (result === "" || result === "0") {
                    p.innerHTML = resultF;
                    resultF = "0";
                    result = "";
                }
                else
                {
                    if (result.includes("/0")) 
                    {
                        throw new Error("Cannot divide by zero");
                    }
                    
                    resultF = eval(result);  
                    p.innerHTML = resultF;
                    result = resultF.toString();  
                } 
            }
            catch (error) 
            {
                p.innerHTML = "Error";
                result = "";
            }
        }
        else if (e.target.innerText === "C") 
        {  
            result = "";
            p.innerHTML = "0";
        }
        console.log(result);
    });
}   

//FUNCTIONS
function playSound() 
{
    var KeySound = new Audio('Sounds/SoundKey.mp3');
    KeySound.play();
    KeySound.volume = 1.0;
}
