num1 = document.getElementById("num1");
num2 = document.getElementById("num2");
num3 = document.getElementById("num3");

num4 = document.getElementById("num4");
num5 = document.getElementById("num5");
num6 = document.getElementById("num6");

num7 = document.getElementById("num7");
num8 = document.getElementById("num8");
num9 = document.getElementById("num9");

texto = document.getElementById("texto");

function calc1() {

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const n3 = Number(num3.value);

    document.getElementById("resultado1").innerHTML = Math.max(n1, n2, n3);
}

function calc2() {
    const n4 = Number(num1.value);
    const n5 = Number(num2.value);
    const n6 = Number(num3.value);
}