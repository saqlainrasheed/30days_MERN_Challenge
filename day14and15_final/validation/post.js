const Validator = require('validator');
const isEmpty = require('is-empty');

const validatePostInputs = (data) => {
  let errors = {};
  const { title, body } = data;

  title = !isEmpty(title) ? title : "";
  body = !isEmpty(body) ? body : "";

  if (Validator.isEmpty(title)) {
    errors.title = "Title is required";
  }
 if (Validator.isEmpty(body)) {
    errors.body = "Description is required";
  }

  return { 
    errors,
    isValid : isEmpty(errors)
  };
}




module.exports = validatePostInputs;