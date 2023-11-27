import React, { useState, useEffect } from 'react';

const WorkerList = () => {
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBranch, setFilterBranch] = useState('');

  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then(response => response.json())
      .then(data => setWorkers(data))
      .catch(error => console.error('Error fetching workers:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredWorkers = workers.filter(worker =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterBranch === '' || worker.branch === filterBranch)
  );

  return (
    <div>
      <div>
        <label>Axtarış:
          <input type="text" value={searchTerm} onChange={handleSearch} />
        </label>
      </div>
      <ul>
        {filteredWorkers.map(worker => (
          <li key={worker.id}>
            {worker.name} - {worker.branch}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkerList;
