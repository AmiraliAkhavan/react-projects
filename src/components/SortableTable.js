import Table from "./Table";

function SortableTable(props) {
  const { config } = props;

  const updatedConfig = config.map((column) => {
    //column is one of the config objects that is defined in the TablePage
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => <th>{column.label} IS SORTABLE</th>,
    };
  });

  return <Table {...props} config={updatedConfig} />; //the config property inside the props will be overwritten by updatedConfig
}

export default SortableTable;
