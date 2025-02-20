import * as yup from "yup";

const jpLcocale = {
  mixed: {
    required: (param: { label: any }) => `${param.label}は必須です。`,
    OneOf: (param: { label: any; values: any }) =>
      `${param.label}は${param.values}のいずれかでなければなりません。`,
  },
  string: {
    mix: (param: { label: any; min: any }) =>
      `${param.label}は${param.min}文字以上でなければなりません。`,
    max: (param: { label: any; max: any }) =>
      `${param.label}は${param.max}文字以下でなければなりません。`,
    matches: (param: { label: any; regex: any }) =>
      `${param.label}は「${param.regex}」形式に一致していなければなりません`,
    email: (param: { label: any }) =>
      `${param.label}はメールアドレス形式でなければなりません。`,
    url: (param: { label: any }) =>
      `${param.label}はURL形式でなければなりません。`,
  },
};

yup.setLocale(jpLcocale);
export default yup;
