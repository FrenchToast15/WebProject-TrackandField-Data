const CarComponent = () => {
    React.useEffect(() => {
      fetch('/isAdminOut')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // assuming response is JSON
        })
        .then(data => {
          // https://datatables.net/
          // https://github.com/fiduswriter/Simple-DataTables
          const dataTable = new simpleDatatables.DataTable("#myTable");
          dataTable.insert(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }, []); // Empty dependency array ensures this effect runs only once, after initial render
  
    return (
      <div>
        <h2>Preformancelist Database</h2>
        <table id="myTable">
          <thead>
            <tr><th>Name</th><th>Event</th><th>Time/Mark</th><th>Gender</th><th>Year</th></tr>
          </thead>
        </table>
      </div>
    );
  };
  
  const car = ReactDOM.createRoot(document.getElementById('cars'));
  car.render(<CarComponent />);