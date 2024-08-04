//custom select compnent

export const SelectCell = ({ value, onChange, options, className, classes = {} }) => (
    <select
      value={value}
      onChange={onChange}
      className={`${className} ${classes.select}`}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );