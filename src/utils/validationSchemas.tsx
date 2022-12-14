import * as Yup from 'yup';
import { emailRegex, generateDays, generateMonths, generateYears, urlRegex } from './consts';

export const basicValidationSchema = Yup.object().shape({
    name: Yup.string()
        .required('É necessário inserir um nome.'),
    nickname: Yup.string(),
    email: Yup.string()
        .required()
        .matches(emailRegex, 'O email inserido não é valido.'),
    phone: Yup.number(),
    birthDay: Yup.number()
        .required()
        .oneOf(generateDays()),
    birthMonth: Yup.number()
        .required()
        .oneOf(generateMonths()),
    birthYear: Yup.number()
        .required()
        .oneOf(generateYears()),
    acceptTerms: Yup.boolean()
        .required()
        .oneOf([true], 'É necessário concordar com os termos para prosseguir.')
})

export const socialValidationSchema = Yup.object().shape({
    linkedin: Yup.string()
        .matches(urlRegex, 'Insira um endereço válido.'),
    github: Yup.string()
        .required()
        .matches(urlRegex, 'Insira um endereço válido.')
})

export const certificatesValidationSchema = Yup.object().shape({
    certificates: Yup.array().of(
        Yup.object().shape({
            certificate: Yup.string()
            .matches(urlRegex, 'Insira um endereço válido.')
        })
    ),
    teamName: Yup.string()
        .required('Insira o nome da equipe.'),
    institution: Yup.string()
        .required('Insira o nome da instituição de ensino.'),
    graduation: Yup.string()
        .required('Insira o curso superior.'),
})