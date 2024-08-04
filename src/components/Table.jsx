import { DefaultCellComponent } from "./customcellcomponents/DefaultCellComponent";
import { InputCell } from "./customcellcomponents/InputCell";
import { SelectCell } from "./customcellcomponents/SelectCell";
import { SelectInputCell } from "./customcellcomponents/SelectInputCell";


const Table = ({ config }) => {
      
  // Mapping of types to components
  const cellComponents = {
    input: InputCell,
    select: SelectCell,
    'select-input': SelectInputCell,
  };

 const handleInputChange = (rowIndex, field) => (e) => {
      // Handle change for each row's field
      console.log(`Row: ${rowIndex}, Field: ${field}, Value: ${e.target.value}`);
    };
  
    return (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {config.columns.map((col, index) => (
                <th
                  key={index}
                  className={col.className || ''}
                  style={{
                    border: '1px solid black',
                    padding: '8px',
                    backgroundColor: '#f4f4f4',
                  }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {config.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {config.columns.map((col, colIndex) => {
                  const cellData = row[col.field];
                  const CellComponent = cellComponents[cellData.type] || DefaultCellComponent;
                  return (
                    <td
                      key={colIndex}
                      className={col.cellClassName || ''}
                      style={{
                        border: '1px solid black',
                        padding: '8px',
                        textAlign: 'left',
                      }}
                    >
                      <CellComponent
                        value={cellData.value}
                        onChange={handleInputChange(rowIndex, col.field)}
                        options={cellData.options || []}
                        cellClassName={col.cellClassName || ''}
                        cellClasses={col.cellClasses || {}}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      );
  };

  export default Table;