import { useEffect, useState } from 'react';

// 모든 입력란의 초기값, 제출된 입력값을 처리하는 로직, 입력값을 검증하는 로직을 인자로 받습니다.
function useForm({ initialValues, onSubmit, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({}); //틀린 내용 알려주는 것
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // 제출 이벤트 처리
  const handleSubmit = e => {
    setSubmitting(true);
    e.preventDefault();
    setErrors(validate(values));
  };

  // 에러가 없을 때만 인자로 넘어온 입력값을 처리
  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setSubmitting(false);
    }
  }, [errors]);

  // return을 해야 이 hook을 사용하는 함수에서 활용할 수 있다!
  return { values, errors, submitting, handleChange, handleSubmit };
}

export default useForm;
