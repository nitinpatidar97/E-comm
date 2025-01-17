
const isValid = (schema, data) => {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error } = schema.validate(data, options);
    if (error) {
        return { errors: error.details.map(x => x.message)[0].replace(/"/g, '') };
    }
    return {}
}

module.exports = isValid;