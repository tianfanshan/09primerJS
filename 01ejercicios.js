//Variables
/*alert("JavaScript funcionando correctamente");*/

let variableSinValor;

let uno=true;
console.log(uno);

let dos=false;
console.log(dos);

const PI=3.14;
console.log("PI es:"+PI);

const TAU=(PI*2);
console.log("TAU es:"+TAU);

const miNombre="Tianfan";
console.log("Mi nombre: ", miNombre);

const miNumeroFav=9;
const tres=true;
console.log("mi numero favorito es:"+miNumeroFav);

console.log("el longitud de mi nombre es:"+miNombre.length+"letras.");

console.log(typeof miNumeroFav);

console.log("Mi nombre es"+miNombre+"y mi numero favorito es"+miNumeroFav);

const cuatro="Seré un crack en JavaScript al terminar el bootcamp";
    let val;
        val=cuatro.toUpperCase();
        console.log(val);

const cinco="Hola soy 123 un crack";
    let val1;
        val1=cinco.substring(0,5);
        console.log(val1);

console.log("tipo de mi numero favorito es:"+typeof miNumeroFav);

const miVariableCambiada = miNumeroFav.toString();
console.log("le he cambiado el tipo,del numero a la letra:"+typeof miVariableCambiada);

console.log("Me has cambiado el tipo?: ", miVariableCambiada)

//Muestra por consola la variable PI hasta los 2 primeros decimales


//Arrays
const arrayVacio =[];
console.log("este array esta vacio:"+arrayVacio);

const arrayNumeros=[0,1,2,3,4,5,6,7,8,9];
console.log("este array tiene numero de:"+arrayNumeros);

const arrayNumeros2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log("este es el segundo array de numeros:"+arrayNumeros2);

const arrayNumerosPares=[0,2,4,6,8];
console.log("numero de pares"+arrayNumerosPares);

const arrayNumerosNeg=[0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
console.log("numeros negativos:"+arrayNumerosNeg);

const holaMundo=['Hola','Mundo'];
console.log(holaMundo);

const loGuardoTodo=['hola','que',23,42.33,'tal'];
console.log(loGuardoTodo);

const arrayDeArrays=[[756,'nombre'],[225,'apellido'],[298,'direccion']];
console.log(arrayDeArrays.length);

const siete=[1,2,3,4];
    siete.push("loGuardoTodo");
    console.log(siete);

arrayNumeros.sort();
console.log("de numero menor a mayor usamos sort:"+arrayNumeros);

arrayNumeros2.reverse();
console.log("para darle al reves:"+arrayNumeros2);

console.log("para sacar segunda parabla usa variable+[1]"+loGuardoTodo[1]);

loGuardoTodo.push("Euralio");
console.log("le pongo al final con push"+loGuardoTodo);

//Objetos
const coche={
    marca:"BMW",
    modelo:"seie1",
    matricula:"123bcv",
};
console.log(coche);

const casa={
    codPostal:46790,
    calle:"Jesus",
    portal:4,
    piso:6,
}
console.log(casa);

const FullStackDeveloper={
    lenguajes:['javascript','php'],
    proyectos:['mi pagina personal'],
}
console.log(FullStackDeveloper);

const Perro={
    nombre:"Yago",
    raza:"aleman",
    color:"negro",
    edad:5,
}
console.log(Perro);

const Noticia={
    titular:"no se que",
    curpo:"rellenar",
}
console.log(Noticia);

const Persona={
    nombre:"Juan",
    apeido:"Frutero",
    edad:15,
}
console.log(Persona);

console.log("el nombre es :"+Persona.nombre);

console.log("lenguaje que usamos:"+FullStackDeveloper.lenguajes);

const Portatil={
    marca1:"Hp",
    marca2:"Asus",
    marca3:"LG",
}
console.log(Portatil);

const marca=["HP","ASUS","LG"];
console.log("marcas:"+marca);

const Led={
    rojo:["Rojo"],
    verde:["Verde"],
    azul:["Azul"],
}
console.log(Led);

const O_Error={
    cuatro:["cuarto"],
    cinco:["qinto"],
    seis:["sexto"],
}
console.log(O_Error);

const Grup={
    uno:["1","2","3"],
}
console.log(Grup);

const impresora={
    tinta:{
        rojo:["lleno"],
        verde:["poco"],
        azul:["medio"],
    }
}
console.log("como esta la tinta?:"+impresora.tinta.rojo);

const Movil={
    especificaciones:["especificaciones"],
}
console.log(Movil.especificaciones);

console.log(Portatil.marca1);

Portatil.marca1 = "Msi";
console.log(Portatil.marca1);

const concierto={
    siete:["Guns N' Roses"],
    ocho:["7 de marzo"],
}
console.log(concierto.siete);

concierto.ocho="11 de abrir";
console.log(concierto.ocho);

Grup.uno.pop();
console.log(Grup.uno.length);