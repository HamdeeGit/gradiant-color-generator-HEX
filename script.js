/* const box = document.querySelector(".container");
const colorValue = document.querySelector(".colorRGBValue");
const btn = document.querySelector("button");
const firstValue = document.querySelector(".first");
const secValue = document.querySelector(".sec");
const thirdValue = document.querySelector(".third");


let a;
function gradientBackground(){

    function random_color(a) {
        let h = Math.floor(Math.random() * 361);
        let s = Math.floor(Math.random() * 101);
        let l = Math.floor(Math.random() * 101);
        a += "hsl(" + h + "," + s + "%," + l + "%)";
        return a;
        console.log(a);


                            //box.style.background = a;

        firstValue.innerHTML = "HSL( " + h + ",";
                            // firstValue.style.color = h;
                            // secValue.style.color = s;
        secValue.innerHTML = s + "%,";
                            // thirdValue.style.color = l;
        thirdValue.innerHTML = l + "%)";
    }
    
    let colorA = random_color('');
    let colorB = random_color('');
    const gradient = "linear-gradient(to right" + ", " + colorA + ", " + colorB + ")";
    console.log(gradient);
    box.style.background = gradient;

    console.log(colorA);
    console.log(colorB);

}

btn.addEventListener("click", gradientBackground); 
*/




const box = document.querySelector(".container");
const colorValue = document.querySelector(".colorHEXValue");
const btn = document.querySelector("button");
const palete1 = document.querySelector(".palete1");
const palete2 = document.querySelector(".palete2");
const value1 = document.querySelector(".value1");
const value2 = document.querySelector(".value2");



function random_BG_color(){
    let hex = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'a' , 'b' , 'c' , 'd' , 'e' , 'f']
    let a;

    function populate(a){
            for(let i = 0; i < 6; i++){
            let x = Math.floor(Math.random() * 16);
            let y = hex[x];
            a += y;
            console.log(a);

            }
            return a;
    }
    console.log(a);
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to left';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ',' + Color2 + ')';
    box.style.background = gradient;
    palete1.innerHTML = Color1;
    value1.style.background = Color1;
    palete2.innerHTML = Color2;
    value2.style.background = Color2;

}
    
btn.addEventListener("click", random_BG_color);