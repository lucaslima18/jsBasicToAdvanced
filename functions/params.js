/**
 * Quando eu envio um argumento para uma função que n exista parâmetros o js 
 * continua a execução da função.
 * 
 * Em casos como este, quando definimos as funções com a palavra function, temos
 * uma variável chamada arguments que retorna um objeto que podemos acessar com
 * todos os valores enviados como argumentos
 * 
 * OBS: NÃO FUNCIONA COM ARROW FUNCTIONS
 */
function fun() {
    console.log(arguments)

    let total = 0
    for (let argument of arguments) {
        total += argument;
    }

    console.log(total)

}

fun(1, 2, 3, 4, 5)


/**
 * mesmo que eu tenha parâmetros o argument continua sendo o mesmo, porém agora
 * a, b e c sustentam os 3 primeiros argumentos
 * */
function fun2(a, b, c) {
    console.log(arguments, a, b, c)

    let total = 0
    for (let argument in arguments) {
        total += arguments[argument];
    }

    console.log(total)

}

fun2(1, 2, 3, 4, 5)

/**
 * Se eu não envio um argumento o valor do parâmetro será undefined
 * */
 function fun3(a, b, c, d, e , f) {
    console.log(arguments, a, b, c, d, e, f)

    let total = 0
    for (let argument in arguments) {
        total += arguments[argument];
    }

    console.log(total)

}

fun3(1, 2, 3)


/**
 * Caso eu queira fazer com que um parametro tenha um valor padrão, posso inserir
 * uma atribuição para o parâmetro, neste caso, se o parâmetro tiver um valor ele
 * será sobescrito no valor do parâmetro, caso não utilizará o valor atribuido.
 * 
 * caso eu envie undefined o valor será substituido pelo atribuido no parâmetro,
 * com null não funciona pois a função irá assumir o valor de null como 0, e, por
 * fim, com NaN a função irá retornar Nan.
 * */
function fun4(a, b = 1, c = 2) {
    //maneira antiga -> b = b || 0
    console.log(a + b + c)

}

fun4(1, 2)
fun4(1, undefined, 2)
fun4(1, null, 2)
fun4(1, NaN, 2)


/**
 * existe tambem a opção te utilizar destructuring assignment
 */

function fun5({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

fun5({nome: 'Lucas', sobrenome: 'Amorim', idade: 22})

// você tambem pode desestruturar uma array
function fun6([ valor1, valor2, valor3 ]) {
    console.log(valor1, valor2, valor3)
}

fun6([1, 2, 3])

/**
 * aqui utilizamos o rest operator para receber todos os outros argumentos enviados
 * na variável numbers como uma array
 * 
 * OBS: um rest param deve sempre, quando utilizado, ser o último da função
*/ 
const acummulateOperation = function (operator, acummulator, ...numbers) {
    for(let number of numbers) {
        if(operator === '+') acummulator += number
        if(operator === '-') acummulator -= number
        if(operator === '/') acummulator /= number
        if(operator === '*') acummulator *= number
    }

    console.log(acummulator)
    console.log(arguments)
}

acummulateOperation('+', 3, 20, 30, 40, 50)
acummulateOperation('-', 3, 20, 30, 40, 50)
acummulateOperation('/', 3, 20, 30, 40, 50)
acummulateOperation('*', 3, 20, 30, 40, 50)

/**
 * você pode utilizar o rest operator para pegar os argumentos de uma arrow
 * function
 */

const arrowTest = (...args) => {
    console.log(args)
}

arrowTest(1, 2, 3, 4, 5)