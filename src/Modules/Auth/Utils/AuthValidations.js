import validate from 'validate.js';

export const isValidEmail = email => {
    let constraints = {
        from: {
            email: true
        }
    };


    return validate({from: email}, constraints) === undefined;
}

export const isValidPasswordConfirm = passwordConfirm => {
    let constraints = {
        from: {
            passwordConfirm: true
        }
    };
    return validate({from: passwordConfirm}, constraints) === undefined;
}
