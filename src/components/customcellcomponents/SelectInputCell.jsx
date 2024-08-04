 //custom select input component
 
 export const SelectInputCell = ({ value, onChange, options, className, classes = {} }) => (
    <div className={className}>
      <select
        value={value}
        onChange={onChange}
        className={classes.select}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={classes.input}
      />
    </div>
  );