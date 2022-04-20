import * as Yup from 'yup';


let validationReg = Yup.object({
  
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    password: Yup.string().min(5).required(),
    passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null])
  })


export default validationReg;