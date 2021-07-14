var Mouseevent = "empty";
var lastposition_x, lastposition_y;

canvas = document.getElementById("pd_canvas");
ctx = canvas.getContext("2d");

color_de = "black";
width_de = 2;

canvas.addEventListener("mousedown", my_MD);
canvas.addEventListener("mouseup", my_MU);
canvas.addEventListener("mouseleave", my_ML);
canvas.addEventListener("mousemove", my_MM);

function my_MD(d){
    color_de = document.getElementById("color_hi").value;
    width_de = document.getElementById("width_hi").value;
    Mouseevent = "MouseD";
}

function my_MU(d){
    Mouseevent = "MouseUP";
}

function my_ML(d){
    Mouseevent = "MouseL"
}

function my_MM(d){
    currentposition_x =  d.clientX - canvas.offsetLeft;
    currentposition_y = d.clientY - canvas.offsetTop;

    if(Mouseevent == "MouseD"){
        console.log("Current position of X and Y is: ");
        console.log("X = "+ currentposition_x+ "Y = "+ currentposition_y);

        ctx.beginPath();
        ctx.strokeStyle = color_de;
        ctx.lineWidth = width_de;

        ctx.moveTo(lastposition_x, lastposition_y);
        ctx.lineTo(currentposition_x, currentposition_y);
        ctx.stroke();
    }
    lastposition_x = currentposition_x;
    lastposition_y = currentposition_y;
};

screenw = screen.width;
newh = screen.height - 300;
neww = screen.width - 70;

if(screenw < 992){
    document.getElementById("pd_canvas").width = neww;
    document.getElementById("pd_Canvas").height = newh;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", t_s);
canvas.addEventListener("touchmove", t_m);

function t_s(t){
    lastposition_x = t.touches[0].clientX - canvas.offsetLeft;
    lastposition_y = t.touches[0].clientY - canvas.offsetTop;
}

function t_m(t){
    currentposition_x = t.touches[0].clientX - canvas.offsetLeft;
    currentposition_y = t.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color_de;
    ctx.lineWidth = width_de;
    
    ctx.moveTo(lastposition_x, lastposition_y);
    ctx.lineTo(currentposition_x, currentposition_y);
    ctx.stroke();

    lastposition_x = currentposition_x;
    lastposition_y = currentposition_y;
    
}



function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
