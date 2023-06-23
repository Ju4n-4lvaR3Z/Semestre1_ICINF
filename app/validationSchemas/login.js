import * as yup from 'yup'

export const loginValidationSchena = yup.object().shape({
    email: yup 
    .string()
    .required('E-mail es requerido'),
    password: yup 
    .string()
    .required('Contraseña es requerida')
})