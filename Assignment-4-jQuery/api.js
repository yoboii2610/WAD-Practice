// api.js

// Fetch book data based on search query
function searchBooks(query) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Process the fetched data (e.g., display results on the page)
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  // Handle search button click event
  document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value;

    if (query) {
      searchBooks(query);
    }
  });