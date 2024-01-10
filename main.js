function button__action() {
    alert("if you're reading this, it means I've learn how to make buttons work, remind me to delete this later")
};


const dividerByFive = function () {

    const usersNumber = prompt("choose a number") 

    const solution = Math.floor(usersNumber / 5)

    alert(`${usersNumber} divided by 5 is ${solution}`)
}


//###############         TESTING          ####################################################################################################################

// const examplerecepie = ["dish", "ingredients, ingredients, ingredients", "instructions" ];

// const food = {
//     dish: "desert",
//     ingredients: "milk, eggs, sugar",
//     instructions: "lorem ",

// }

// const Recepie = function (dish, ingredients, instructions) {

//     this.dish = dish;
//     this.ingredients = ingredients;
//     this.instructions = instructions;


// }


// const lemonPie = new Recepie ("lemon pie", "limon y otras cosas", "no sé");

// const bizcochuelo = new Recepie ("bizcochuelo", "harina, huevos, leche", "tampoco sé");

// const flan = new Recepie ("flan", "huevos, leche, azucar", "ni idea");

// // console.log(lemonPie);


// const postres = [lemonPie, bizcochuelo, flan];

// console.log(postres);


//###############         HOMEWORK          ####################################################################################################################




const testing = function() {







    const userAns = prompt("que quiere hacer? 1. Ver recetas    2.Agregar recetas nuevas 3.ver recetas del usuario")

    if (userAns == 1) {


                // este es el constructor de objetos 
                const Recepie = function (dish, ingredients) {
                    
                    this.dish = dish;
                    this.ingredients = ingredients;
                    
                }

                //objetos de prueba

                const lemonPie = new Recepie ("lemon pie ", "200 gr de galletitas de vainilla, 70 gramos de manteca, 4 huevos, 1 lata de leche condensada, 1/2 vaso de jugo de limón, ralladura de miedio limón, 200 gr de azúcar");

                const bizcochuelo = new Recepie ("bizcochuelo ", "1 taza de azucar, 1 taza de aceite ,3 huevos ,2 tazas de harina 0000, 1 cucharada de polvo para hornear, escencia de vainilla ");

                const flan = new Recepie ("flan ", "huevos, leche, azucar ");



                //estos los voy a llamar en un swich para que despues se me haga mas facil organizar el swich

                const cookFlan = function() {
                    alert(`estos son los ingredientes necesarios: ${flan.ingredients}, quiere seguir?`)

                    alert("Para hacer el caramelo, mezcla 1.5 tazas de azúcar con 2 cucharadas de agua en una olla a fuego medio. Revuelve constantemente hasta que el azúcar se derrita y se vuelva de color marrón dorado. Vierte el caramelo en un molde para flan y déjalo enfriar.")
                    alert("En un tazón grande, bate 5 huevos. Agrega 1 lata de leche evaporada, 1 lata de leche condensada y 1 cucharada de esencia de vainilla. Mezcla bien todos los ingredientes.")
                    alert("Vierte la mezcla de flan en el molde con el caramelo. Cubre el molde con papel aluminio y hornea a baño maría a 350 grados Fahrenheit durante 1 hora y 15 minutos. Para verificar si el flan está listo, inserta un palillo en el centro del flan. Si sale limpio, el flan está listo. Deja enfriar el flan a temperatura ambiente y luego refrigera durante al menos 2 horas.")
                }

                const cookBizcochuelo = function() {
                    alert(`estos son los ingredientes necesarios: ${bizcochuelo.ingredients}, quiere seguir?`)
                    alert("recalentar el horno al MÍNIMO. Enmantecar/aceitar y enharinar un molde. Reservar.");
                    alert("Batir los huevos, agregar la leche (seguir batiendo), el aceite (batimos), la esencia de vainilla y el azúcar. Volver a batir.");
                    alert("Tamizar la harina (de a poco) y batir hasta integrar todos los ingredientes y la mezcla quede aireada (con burbujitas).");
                    alert("Pasamos la mezcla al molde y le damos ligeros golpecitos (sobre una superficie firme) para emparejar. Llevamos al horno por 1 hora o hasta que, pinchando con un cuchillo, este salga seco.");
                }


                const cookLemonPie = function() {
                    alert(`estos son los ingredientes necesarios: ${lemonPie.ingredients} quiere seguir?`);
                    alert("Precalentar el horno a 180°C.");
                    alert("Moler las galletitas de vainilla y colocarlas en un recipiente. Agregar la manteca derretida y mezclar hasta que quede con consistencia de arena mojada.");
                    alert("Desparramar la preparación obtenida en una tartera. Aplastarla bien con las manos.");
                    alert("En otro recipiente, colocar las yemas de los huevos, la leche condensada, el jugo de limón y la ralladura de medio limón. Batir hasta lograr una consistencia espesa.");
                    alert("En otro recipiente, batir las claras de los huevos a punto de nieve. Agregar el azúcar en forma de lluvia sin dejar de batir, hasta lograr la consistencia deseada.");
                    alert("Agregar la mezcla de limón a la tartera con la base de galletitas. Luego, agregar el merengue encima de la crema de limón en la tartera.");
                    alert("Poner al horno durante 15 minutos o hasta que el merengue esté dorado.");
                }



                const postres = [lemonPie, bizcochuelo, flan];
                const postresLista = [lemonPie.dish, bizcochuelo.dish, flan.dish];




        const recepies = prompt(`cual quiere ver? ${postresLista}`)

        switch (recepies) {
            case "lemon pie":
            cookLemonPie();
            break

            
            case "bizcochuelo": 
            cookBizcochuelo();
            break;
            
            case "flan": 
            cookFlan();
            break;
        
            default:
                alert("esa receta no existe");
        }

        } 
        else if(userAns == 2) {


                const postresDelUsuario = [];
            
                repeat = true
            
                while (repeat) {
            
                    const postresagregados = []
                    const newDish = {};
            
                    const dish = prompt("cual es el nombre");
                    newDish[dish] = newDish;
            
            
                    newDish.ingredients = prompt("que ingredientes se necesitan? ")
                    newDish.instructions = prompt("procedimiento: ")
            
                    postresagregados.push(newDish)
                    postresDelUsuario.push(postresagregados);
                    // console.log(newDish)
                    // console.log(postresagregados)
            
                    repeatAns = prompt("quiere agregar otra receta? Y / N ")
                    if (repeatAns === "N" || repeatAns ==="n") {
                        repeat = false;
                    }
                }
            
                
                console.log(postresDelUsuario);
                return postresDelUsuario; //necesito hacer que este array sea usable sin que se rompa nada.
            
            



    }
        else if(userAns == 3 ) { 



        }

}




function testAddRecepie() {

    const postresDelUsuario = [];
                
    repeat = true

    while (repeat) {

        const postresagregados = []
        const newDish = {};

        const dish = prompt("cual es el nombre");
        newDish[dish] = newDish;


        newDish.ingredients = prompt("que ingredientes se necesitan? ")
        newDish.instructions = prompt("procedimiento: ")

        postresagregados.push(newDish)
        postresDelUsuario.push(postresagregados);
        // console.log(newDish)
        // console.log(postresagregados)

        repeatAns = prompt("quiere agregar otra receta? Y / N ")
        if (repeatAns === "N" || repeatAns ==="n") {
            repeat = false;
        }
    }


    console.log(postresDelUsuario);
    return postresDelUsuario;

}