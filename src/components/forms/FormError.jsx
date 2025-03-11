// A component for displaying error messages.
// It simply shows the error message in a styled div.
const FormError = ({ message }) => (
  <div style={{ color:'red' }}>{message}</div>
);

export default FormError;