const handleErrors = (err) => {
    let errors = {};

    if (err.code === 11000) errors.email = "Email already exists";
    if (err.message.includes("User validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

export default handleErrors;
