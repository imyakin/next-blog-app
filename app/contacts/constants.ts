export const RESEND_API_KEY= 're_Ee1qadD5_5Yv3dpAwKoQpKAhK3tabaMQR';

export enum Values {
  NAME = "name",
  EMAIL = "email",
  MESSAGE = "message",
}

export const initialValues = {
  name: '',
  email: '',
  message: ''
};

export const contacts = {
  title: 'Feel free to reach me out: ',
  telegram: {
    title: 'telegram:',
    text: ' https://t.me/imyakin'
  },
  mail: {
    title: 'mail:',
    text: 'myakinalex@gmail.com'
  },
  wechat: {
    title: 'wechat:',
    text: 'imyakin'
  },
  form: {
    name: {
      label: 'Name:',
      placeholder: 'Enter your name please',
    },
    email: {
      label: 'Email:',
      placeholder: 'Enter your email please',
    },
    message: {
      label: 'Message:',
      placeholder: 'Enter your message please',
    },
    btn: {
      text: 'Send!'
    }
  }
}