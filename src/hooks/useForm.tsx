import { useState } from "react"

interface FormValues {
  [key: string]: string | number
}

export const useForm = <T extends FormValues>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (name !== "age") {
      setValues({ ...values, [name]: value });
    } else {
      setValues({ ...values, [name]: parseInt(value) });
    }
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    resetForm
  }
}
