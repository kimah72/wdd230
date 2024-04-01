function populateTable() {
    fetch('data/pricing.json')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#rental-table tbody');
        data.forEach(rental => {

          const row = document.createElement('tr');

          row.innerHTML = `
            <td>${rental.RentalType}</td>
            <td>${rental.MaxPersons}</td>
            <td>${rental.HalfDayReservation}</td>
            <td>${rental.FullDayReservation}</td>
            <td>${rental.HalfDayWalkIn}</td>
            <td>${rental.FullDayWalkIn}</td>
          `;
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Call the function to populate the table when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', populateTable);