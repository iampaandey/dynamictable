import Table from "./components/Table";

//example config file
const jsonConfig = {
  columns: [
    { header: 'Field 1', field: 'field1', className: 'field1-header', classes: { input: 'input-class', select: 'select-class' } },
    { header: 'Field 2', field: 'field2', className: 'field2-header', classes: { input: 'input-class', select: 'select-class' } },
    { header: 'Field 3', field: 'field3', className: 'field3-header', classes: { input: 'input-class', select: 'select-class' } },
  ],
  rows: [
    {
      field1: { type: 'input', value: 'Value1' },
      field2: { type: 'select', value: 'Option1', options: ['Option1', 'Option2', 'Option3'] },
      field3: { type: 'select-input', value: 'SelectOption1', options: ['SelectOption1', 'SelectOption2'] }
    },
    {
      field1: { type: 'select-input', value: 'SelectOption2', options: ['SelectOption1', 'SelectOption2'] },
      field2: { type: 'input', value: 'Value2' },
      field3: { type: 'select', value: 'Option2', options: ['Option1', 'Option2', 'Option3'] }
    },
    {
      field1: { type: 'select', value: 'Option3', options: ['Option1', 'Option2', 'Option3'] },
      field2: { type: 'select-input', value: 'SelectOption3', options: ['SelectOption1', 'SelectOption2'] },
      field3: { type: 'input', value: 'Value3' }
    }
  ]
};

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Dynamic Table with Mixed Cells</h2>
      <Table config={jsonConfig} />
    </div>
  );
};

export default App;
