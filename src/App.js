import Table from "./components/Table";
import tableData1 from "./tableData1.json";

const columns = [
  { label: "Title", accessor: "title", sortable: true },
  { label: "Release date", accessor: "release_date", sortable: true },
  {
    label: "Character",
    accessor: "character",
    sortable: true,
    sortbyOrder: "desc",
  },
];

const App = () => {
  return (
    <div className="table_container">
      <Table
        caption="Developers currently enrolled in this course. The table below is ordered (descending) by the Gender column."
        data={tableData1.cast}
        columns={columns}
      />
    </div>
  );
};

export default App;
