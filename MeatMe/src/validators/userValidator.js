const { check } = require("express-validator")

module.exports = {

    register: [
        check("first_name")
            .trim()
            .notEmpty().withMessage("Debe ingresar un nombre").bail()
            .isString().withMessage("No puede ingresar numeros en este campo")
            .isLength({ min: 3, max:50 }).withMessage("El nombre debe tener minimo 3 caracteres y maximo 50 caracteres"),
        check("last_name")
            .trim()
            .notEmpty().withMessage("Debe ingresar un apellido").bail()
            .isString().withMessage("No puede ingresar numeros en este campo")
            .isLength({ min: 3, max:50 }).withMessage("El apellido debe tener minimo 3 caracteres y maximo 50 caracteres"),
        check("email")
            .trim()
            .notEmpty().withMessage("Debe ingresar un email").bail()
            .isEmail().withMessage("Debe ingresar un formato de email valido"),
        check("password")
            .trim()
            .notEmpty().withMessage("Debe ingresar una contraseña").bail()
            .isLength({ min: 8 }).withMessage("La contraseña debe tener minimo 8 caracteres"),
        check("address")
            .trim()
            .optional(),
        check("city")
            .trim()
            .optional()
            .isString().withMessage("No puede ingresar numeros en el campo ciudad"),
        check("state")
            .trim()
            .optional()
            .isString().withMessage("No puede ingresar numeros en el campo provincia")
    ],

    login: [
        check("email")
            .notEmpty().withMessage("Debe ingresar un mail valido").bail()
            .isEmail().withMessage("Debe ingresar un mail valido"),
        check("password")
            .notEmpty().withMessage("Debe ingresar una contraseña").bail()
            .isLength({ min:8 }).withMessage("La contraseña debe tener minimo 8 caracteres")
    ]
}