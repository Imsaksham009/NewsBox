const Joi = require("joi");

const validateUserBody = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),


        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    }).validate(req.body);

    if (schema.error) {
        const msg = schema.error.details.map((er) => {
            return er.message;
        });
        return res.status(400).json({ error: { message: msg } });

    }
    next();

};

module.exports = validateUserBody;