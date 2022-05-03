import * as yup from 'yup';

export const formSchema = yup.object({
  name: yup.string().min(7, 'Имя должно состоять минимум из 7 букв!').required('Имя обязательно!'),
  username: yup
    .string()
    .min(3, 'Имя пользователя должно состоять минимум из 3 букв!')
    .required('Имя пользователя обязательно'),
  email: yup.string().email('Проверьте данные почты!').required('Почта обязательна!'),
  street: yup.string().required('Улица обязательна!'),
  city: yup.string().required('Город обязателен!'),
  zipcode: yup.string().required('Zipcode обязателен!'),
  phone: yup.string().required('Телефон обязателен!'),
  website: yup
    .string()
    .matches(/[a-zA-Z]*.[a-zA-Z]*/g, { message: 'Введите верные данные!', excludeEmptyString: true })
    .required('Вебсайт обязателен!'),
});
