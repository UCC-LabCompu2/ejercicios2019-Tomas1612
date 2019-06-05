/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function saludar() {

    alert("NISAAAAAAAAAAAAAAA");

}

function convertir(id_elem, valor_elem) {

    if (isNaN(valor_elem)){
        alert("El valor de "+id_elem+" no es un elemento")
        document.getElementById(id_elem).value = "";
    }

    if(!isNaN(valor_elem)){
    if(id_elem =='metro'){
        document.getElementById("pulgada").value = valor_elem * 39.3701;
        document.getElementById("pie").value = valor_elem * 3.28084;
        document.getElementById("yarda").value = valor_elem * 1.09361;
    }
    if (id_elem == 'yarda'){
        document.getElementById("pulgada").value = valor_elem * 36;
        document.getElementById("pie").value = valor_elem * 3;
        document.getElementById("metro").value = valor_elem * 0.9144;
    }
    if (id_elem == 'pulgada'){
        document.getElementById("metro").value = valor_elem * 0.0254;
        document.getElementById("pie").value = valor_elem * 0.08333;
        document.getElementById("yarda").value = valor_elem * 0.0277778;
    }
    if (id_elem == 'pie'){
        document.getElementById("metro").value = valor_elem * 0.3048;
        document.getElementById("pulgada").value = valor_elem * 12;
        document.getElementById("yarda").value = valor_elem * 0.333333;
    }

}}

function suma() {

    document.opMat.sum_total.value = Number(document.opMat.sum_num1.value) + Number(document.opMat.sum_num2.value);

}

function resta() {

    document.opMat.res_total.value = Number(document.opMat.res_num1.value) - Number(document.opMat.res_num2.value);

}

function multi() {

    document.opMat.mul_total.value = Number(document.opMat.mul_num1.value) * Number(document.opMat.mul_num2.value);

}

function divi() {

    document.opMat.div_total.value = Number(document.opMat.div_num1.value) / Number(document.opMat.div_num2.value);

}

function gradosRadianes(id_elem, valor) {



            if(id_elem == 'grados'){
                document.getElementById("radianes").value = valor * Math.PI/180;


    }
            if(id_elem == 'radianes'){
                document.getElementById("grados").value = valor * 180/Math.PI;


            }


}

function MostrarDiv(id_elem) {

    if (id_elem == "ocultarDiv"){

        document.getElementById("unDiv").style.display = 'none';


    }
    if (id_elem == "mostrarDiv"){

        document.getElementById("unDiv").style.display = 'block';


    }

}

function dibujar(x, y) {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#000000";

    ctx.beginPath();
    ctx.rect(x,y,30,40);
    ctx.fill();
    ctx.closePath();
}

function circulo(x,y){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ac0003";

    ctx.beginPath();
    ctx.arc(x,y,10,40,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();


}

function dibujarCuadriculado() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.beginPath();


    for(var i=10;i<canvas.width;i += 10){

        ctx.moveTo(i,0);
        ctx.lineTo(i,canvas.height);
    }
    for(var j=10;j<canvas.height;j += 10){

        ctx.moveTo(0,j);
        ctx.lineTo(canvas.width,j);
    }

    ctx.stroke();
    ctx.closePath();
}

function auto(posicionX,) {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();

    img.src = "images/124210-full.png";

    img.onload = function(){
        ctx.drawImage(img, x,y);
    }

}