const Joi = require("joi");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Saksham@Boy_1234";
module.exports.validateRegisterUserBody = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    }).validate(req.body);

    if (schema.error) {
        const msg = schema.error.details.map((er) => {
            return er.message;
        });
        return res.status(400).json({ error: { message: msg } });
    }

    next();

};

module.exports.validateLoginUserBody = (req, res, next) => {
    const schema = Joi.object({
        password: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    }).validate(req.body);

    if (schema.error) {
        const msg = schema.error.details.map((er) => {
            return er.message;
        });
        return res.status(400).json({ error: { message: msg } });
    }

    next();
};

module.exports.validateNoteUserBody = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
    }).validate(req.body);

    if (schema.error) {
        const msg = schema.error.details.map((er) => {
            return er.message;
        });
        return res.status(400).json({ error: { message: msg } });
    }

    next();
};


module.exports.fetchUserDetails = async (req, res, next) => {
    try {
        const authToken = req.header("auth-token");
        if (!authToken) {
            return res.status(401).send("User not verified");
        }
        const decoded = jwt.verify(authToken, JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error(error);
        res.status(400).send("Internal Error");
    }
};
