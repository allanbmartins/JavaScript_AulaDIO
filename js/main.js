// var nome= "Allan B Martins";
// var idade= 40;
// var idade2= 10;
// var frase= "Japão é o melhor time do mundo";
// var n1= 5;
// var n2= 3;
// // alert(nome + " tem  " + idade + " anos ");
// // alert(idade + idade2);
// console.log(nome);
// console.log(idade + idade2);
// console.log(frase.replace("Japão","Brasil"));
// // alert(frase.replace("Japão","Brasil"));
// // console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());

// alert(n1 * n2);
// console.log(n1 / n2);

// var lista = ["maça","pêra", "laranja"];
// console.log(lista[1]);

// lista.push("uva") //colocar item
// console.log(lista);

// lista.pop("uva") //tirar item
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());

// console.log(lista[0]);
// console.log(lista.toString()[0]);

// console.log(lista);
// console.log(lista.toString());
// console.log(lista.join(" - "));
// console.log(lista.join(" | "));

// var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta);
// console.log(fruta.nome);
// alert(fruta.cor);

// var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}];
// console.log(frutas);
// alert(frutas[1].nome);

// var idade = prompt ("Qual sua idade?")
// // var idade = 18;
//     if (idade >= 18){;
//         alert("Liberado maior de idade");
// }else{
//     alert("Proibido menor de idade");
// };

// var count = 0;
// while (count <= 5){
//     console.log(count);
//     // count = count + 1;
//     alert(count);
//     count++;
// }

// var count = 0;
// for (count = 1; count <= 5; count++){
//     alert(count);
// };

// var d = new Date();
// alert(d.getFullYear());
// alert(d.getMonth()+1);
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());

// function soma(n1, n2){
//     return n1 + n2;
// }

// function setReplace(frase,nome,novo_nome){
//     return frase.replace(nome,novo_nome)
// }

// alert(soma(5, 10));
// alert(setReplace("Vai Japão","Japão","Brasil")); // Case Sensitive

// function soma(n1, n2){
//     return n1 + n2;
// }

// var validar = 0; // Variável global
// function validaidade(idade){
//     // var validar; // Variável local
//     // validar; // não necessário
//     if (idade >= 18){
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar;
// }

// var idade = prompt("Qual sua idade");
// console.log(validaidade(idade));

// function clicou(){
//     alert("Obrigado por clicar");
// }

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("Agradecimento"));
}

function redirecionar(){
    document.getElementById("Vá embora").innerHTML = "<b>Você foi redirecionado? Caso negativo, clique aqui</b>";
    window.open("https://web.digitalinnovation.one/"); // Abre link em nova página
    // window.location.href = "https://web.digitalinnovation.one/"; // Abre link na própria página
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    // alert("Trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    // alert("Trocar texto");
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

