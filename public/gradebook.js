window.addEventListener('DOMContentLoaded', fetchGradeData);

async function fetchGradeData() {
  try {
    // Simulate a fetch request with a hardcoded response (in place of a real server request)
    const data = [
      {
        name: "Kyle Kearns",
        assignment1: 95,
        assignment2: 88
      }
    ];
    populateGradebook(data);  // Populate the table with the fetched data
  } catch (error) {
    console.error('Error fetching grades:', error);
  }
}

function populateGradebook(data) {
  const tableBody = document.getElementById('gradebook-body');
  tableBody.innerHTML = '';  // Clear any existing rows in the table body

  data.forEach(student => {
    const row = document.createElement('tr');
    
    // Add the student's data into the table row
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.assignment1}%</td>
      <td>${student.assignment2}%</td>
    `;
    
    tableBody.appendChild(row);  // Append the row to the table
  });
}
