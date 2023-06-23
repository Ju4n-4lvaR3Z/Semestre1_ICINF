import * as yup from 'yup'

export const forgot1ValidationSchena = yup.object().shape({
    email: yup 
    .string()
    .required('E-mail es requerido'),
})