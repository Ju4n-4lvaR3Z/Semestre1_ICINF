import * as yup from 'yup'

export const createValidationSchena = yup.object().shape({
    nombres: yup 
    .string()
    .required('Su nombre es requerido'),
    apellidos: yup 
    .string()
    .required('Su apellido es requerido'),
    email: yup 
    .string()
    .required('E-mail es requerido'),
    carrera: yup 
    .string()
    .required('Su carrera es requerido'),
    password: yup 
    .string()
    .required('Contraseña es requerida'),
    rpassword: yup 
    .string()
    .required('Repita su contraseña')
})