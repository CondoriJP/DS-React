import { useForm } from "../../hooks/useForm";

export const FormComponent = () => {

  const { values, handleChange, resetForm } = useForm({ email: "", name: "", age: 0 });

  const { email, name, age } = values;

  const handleSubmitForm = () => {
    console.log(values);
  }

  const handleResetForm = () => {
    resetForm();
  }

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input type="email" value={email} name="email" onChange={handleChange} placeholder="example@example.com" />
        <input type="text" value={name} name="name" onChange={handleChange} placeholder="Nombre" />
        <input type="number" value={age} name="age" onChange={handleChange} placeholder="Edad" />
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
        <button onClick={handleResetForm}>Reset</button>
      </div>
    </div>
  )
}

