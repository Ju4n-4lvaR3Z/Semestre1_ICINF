import * as yup from 'yup'

export const forgot2ValidationSchena = yup.object().shape({
    password: yup 
    .string()
    .required('Contraseña es requerida'),
    rpassword: yup 
    .string()
    .required('Repita su contraseña')
})