import Joi from 'joi';

export const userCreateSchemaInvalid = function(req, res, next) {
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        age: Joi.number().required(),
        email: Joi.string().required()
    });
    
    const validateResult = Joi.validate(req.body, schema);
    
    if(validateResult.error) {
        res.send(validateResult.error.message);
    }
    next();
};