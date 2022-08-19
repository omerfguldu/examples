import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli bir email adresi girin")
    .required("Bu alan bos birakilamaz"),
  password: yup
    .string()
    .min(5, "Sifre 5 karakterden az olamaz")
    .required("Bu alan bos birakilamaz"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Sifreler eslesmiyor")
    .required("Bu alan bos birakilamaz"),
});

export default validations;
