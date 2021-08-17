const express = require('express')
const app = express()
const port = 3000
const { getBmi } = require('./services/bmi.services')
const { body, validationResult } = require('express-validator');

app.use(express.json())

app.post('/',
    body('height').not().isEmpty().isNumeric(),
    body('weight').not().isEmpty().isNumeric(),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        res.status(200).json(getBmi(req.body.weight / (req.body.height ^ 2)))
    })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})