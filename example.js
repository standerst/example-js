const bmi = require('./bmi')

const personData = {
    height: 1.76,
    weight: 79,
    average: function () {
        return this.weight / (this.height ^ 2)
    }
}

Number.prototype.between = function (minimo, maximo) {
    var min = Math.min.apply(Math, [minimo, maximo]),
        max = Math.max.apply(Math, [minimo, maximo])

    return this >= min && this <= max
}

const personBmi = (average, bmiArray) => {
    for (const existentBmi of bmiArray) {
        if (average.between(existentBmi.min, existentBmi.max)) {
            return existentBmi
        }
    }
}

console.log(personBmi(personData.average(), bmi))