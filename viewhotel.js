const hotelsList = document.getElementById('hotels-list');
const viewMoreBtn = document.getElementById('view-more-btn');

// Sample data of hotels
const moreHotelsData = [
  { name: 'Hotel F', location: 'City F', price: '$130' },
  { name: 'Hotel G', location: 'City G', price: '$140' },
  { name: 'Hotel H', location: 'City H', price: '$160' },
  { name: 'Hotel I', location: 'City I', price: '$110' },
  { name: 'Hotel J', location: 'City J', price: '$170' }
];

// Function to render more hotels
function renderMoreHotels() {
  moreHotelsData.forEach(hotel => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h2>${hotel.name}</h2>
      <p><strong>Location:</strong> ${hotel.location}</p>
      <p><strong>Price:</strong> ${hotel.price}</p>
    `;
    hotelsList.appendChild(listItem);
  });
}

// Event listener for "View More" button
viewMoreBtn.addEventListener('click', () => {
  renderMoreHotels();
  viewMoreBtn.style.display = 'none'; // Hide the button after clicking
});
