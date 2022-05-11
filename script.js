
function cambio() {
    const userName = document.getElementById("userName"); //se llama al id del html
    const userName2 = document.getElementById("userName2"); //se llama al id del html
    const userNum = document.getElementById("userNum"); //se llama al id del html
    const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regUserEmail =
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const regNum = /^[0-9]+$/;
    if (!regUserName.test(userName.value)) {
      return console.log("Solo letras");
    }
    if (!regUserName.test(userName2.value)) {
      return console.log("Solo letras");
    }
    if (!regNum.test(userNum.value)) {
      return console.log("Solo numeros");
    }
  
    var clase1=document.createElement("div");
    var clase2=document.createElement("div");
    var clase3=document.createElement("div");
    var clase4=document.createElement("div");
    var clase5=document.createElement("div");
    var clase6=document.createElement("div");
    var clase7=document.createElement("div");

  
    var he1 = document.createElement("p");
    var he2 = document.createElement("p");
    var he3 = document.createElement("p");
    var he4 = document.createElement("p");
  

    var taxt0 = document.createTextNode("Datos");
    var text1 = document.createTextNode("Nombre: " + userName.value);
    var text2 = document.createTextNode("Apellido: " + userName2.value);
    var text3 = document.createTextNode("Numero: " + userNum.value);
  
    clase1.setAttribute("class","card-container");
    clase2.setAttribute("class","card");
    clase3.setAttribute("class","card-image");
    clase4.setAttribute("class","card-info");
    clase5.setAttribute("class","card-title");
    clase6.setAttribute("class","card-detail");
    clase7.setAttribute("class","card-social");
  
    he1.appendChild(text1);
    he2.appendChild(text2);
    he3.appendChild(text3);
    he4.appendChild(taxt0);
    clase5.appendChild(taxt0);

    clase2.appendChild(clase3);
    clase4.appendChild(clase5);

    document.body.appendChild(clase1).appendChild(clase2).appendChild(clase7).appendChild(clase4).appendChild(clase6).appendChild(he1).appendChild(he2).appendChild(he3);



    
  
  }
  