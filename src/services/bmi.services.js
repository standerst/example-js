const bmiValues = [
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

Number.prototype.between = function (minimo, maximo) {
    var min = Math.min.apply(Math, [minimo, maximo]),
        max = Math.max.apply(Math, [minimo, maximo])

    return this >= min && this <= max
}

const getBmi = (average) => {
    for (const existentBmi of bmiValues) {
        if (average.between(existentBmi.min, existentBmi.max)) {
            return existentBmi
        }
    }
}

module.exports = { getBmi }