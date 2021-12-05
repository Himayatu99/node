//Joi library is Making the most powerful schema description language and data validator for JavaScript slightly more powerful.

const Joi = require("joi")

const userschema = Joi.object({
    name: Joi.string().min(4).max(10),
    password: Joi.string().min(3).max(12),
    email: Joi.string().email().required()
})

const data = {
    name: "Himayat",
    password: "120335",
    email: "test@yahoo.com"
}

console.log(userschema.validate(data))