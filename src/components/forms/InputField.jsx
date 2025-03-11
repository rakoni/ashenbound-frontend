const InputField = ({type, name, label, onChange}) => (
  <div>
    <label>{label}</label>
    <input type={type} name={name} onChange={onChange} required />
  </div>
);

export default InputField;