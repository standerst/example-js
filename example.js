// altura 1.76 peso 79
// resposta: magreza, sobrepeso, normal, obeso

//Magreza, quando o resultado é menor que 18.5 kg / m2;
//Normal, quando o resultado está entre 18.5 e 24.9 kg / m2;
//Sobrepeso, quando o resultado está entre 24.9 e 30 kg / m2;
//Obesidade, quando o resultado é maior que 30 kg / m2.

const valoresIMC = [
    {
        min: 0,
        max: 18.5,
        imc: 'Magreza'
    },
    {
        min: 18.5,
        max: 24.9,
        imc: 'Normal'
    },
    {
        min: 24.9,
        max: 30,
        imc: 'Sobrepeso'
    },
    {
        min: 30,
        max: 36,
        imc: 'Obesidade'
    }
]

var altura = 1.76,
    peso = 79,
    media = peso / (altura * altura)

function obtemIMC() {
    valoresIMC.forEach(function (valorImc) {
        if (media.between(valorImc.min, valorImc.max))
            meuIMC = valorImc
    })

    return meuIMC
}

Number.prototype.between = function (minimo, maximo) {
    var min = Math.min.apply(Math, [minimo, maximo]),
        max = Math.max.apply(Math, [minimo, maximo])

    return this >= min && this <= max
}

console.log(obtemIMC())