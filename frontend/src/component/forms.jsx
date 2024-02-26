export default function FormGroup(props) {
  return (
    <div className="form-field">
      <input type={props.type} id={props.id} placeholder={props.placeholder} />
    </div>
  );
}
