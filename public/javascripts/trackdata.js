const TrackComponent = () => {
    React.useEffect(() => {
        fetch('trackdata/display')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // assuming response is JSON
            })
            .then(data => {
                const formattedData = data.map(row => [row.name, row.event, row.preformance, row.gender, row.year]);
                const dataTable = new simpleDatatables.DataTable("#myTable");
                dataTable.on('datatable.init', () => {
                    dataTable.insert(formattedData);
                });
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

const track = ReactDOM.createRoot(document.getElementById('preformancelist'));
track.render(<TrackComponent />);