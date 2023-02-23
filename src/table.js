function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>page no</th>
          <th>date</th>
          <th>time</th>
          <th>Title</th>
          <th>pdf_url</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.pageno}</td>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>{data.Title}</td>
              <td>
                {data.pdf && (
                  <a href={data.pdf} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
