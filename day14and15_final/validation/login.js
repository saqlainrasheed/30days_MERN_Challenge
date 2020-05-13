const validator = require('validator');
const isEmpty = require('is-empty');

const validateLoginInput = ( data ) => {
  let errors = {};
  let {email, password} = data;

  //checking empty fields
  email = isEmpty(email) ? email : "" ;
  password = isEmpty(password) ? password : "" ;

  //if email is empty error else check correctness
  if(validator.isEmpty(email)){ errors.email = 'Email is required.' }
  else if(!Validator.isEmail(email)){ errors.email = 'Enter valid email address' }

  if (Validator.isEmpty(password)) { errors.password = "Password is required."; }
  else if (!Validator.isLength(password, { min: 6, max: 30 })) {errors.password = "Password must be at least 6 characters."; }

  return {
    errors,
    isValid : isEmpty(errors)
  };
}

module.exports = validateLoginPage;