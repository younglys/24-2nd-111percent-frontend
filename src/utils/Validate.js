export default function validate({
  email,
  password,
  name,
  phone_number,
  bank_name,
  account_number,
}) {
  const errors = {};

  const num = /[0-9]/;
  const char = /[a-zA-Z]/;
  const pattern = /[~!@#$%^&*()-=_+]/;

  if (!email) {
    errors.email = '이메일을 입력해주세요';
  } else if (!email.includes('@') && !email.includes('.')) {
    errors.email = '올바른 양식으로 입력해주세요';
  }

  if (!password) {
    errors.password = '비밀번호를 입력해주세요';
  } else if (
    !num.test(password) ||
    !char.test(password) ||
    !pattern.test(password) ||
    password.length < 8
  ) {
    errors.password = '8자리 이상, 문자, 숫자, 특수문자를 포함시켜주세요';
  }

  if (!name) {
    errors.name = '이름을 입력해주세요';
  }

  if (!phone_number) {
    errors.phone_number = '전화번호를 입력해주세요';
  } else if (phone_number.includes('-')) {
    errors.phone_number = ' - 없이 전화번호를 입력해주세요.';
  }

  if (!bank_name) {
    errors.bank_name = '출금은행명을 입력해주세요';
  }

  if (!account_number) {
    errors.account_number = '계좌번호를 입력해주세요';
  } else if (!account_number.includes('-')) {
    errors.account_number = ' - 포함하여 입력해주세요';
  }

  return errors;
}
