import * as Yup from 'yup';

let validation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(5).required()
});


export default validation;