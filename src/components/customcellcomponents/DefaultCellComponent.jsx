 // Default Cell Component
 export const DefaultCellComponent = ({ value, className, classes = {} }) => (
    <div className={className}>
      <span className={classes.text}>{value}</span>
    </div>
  );