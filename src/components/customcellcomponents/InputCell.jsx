// custom input component
export const InputCell = ({ value, onChange, className, classes = {} }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`${className} ${classes.input}`}
    />
  );
  