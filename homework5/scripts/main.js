const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true';
const recipeApiUrl = 'http://localhost:3000/recipes';

// Fetch and display the weather
fetch(weatherUrl)
  .then(response => response.json())
  .then(data => {
    const tempC = data.current_weather.temperature;
    const tempF = (tempC * 9 / 5) + 32;
    document.getElementById('temperature').textContent = `Temperature: ${tempF.toFixed(2)} °F`;
  })
  .catch(error => console.error('Error fetching weather:', error));

// Fetch and display recipes without showing the id
function loadRecipes() {
  $.get(recipeApiUrl, function (data) {
    $('#recipe-list').empty(); // Clear the recipe list
    data.forEach(recipe => {
      $('#recipe-list').append(`
        <div class="recipe">
          <h4>${recipe.title}</h4>
          <p>${recipe.description}</p>
        </div>
      `);
    });
  });
}

// Add a new recipe
$('#recipeForm').on('submit', function (e) {
  e.preventDefault(); // Prevent form from refreshing the page
  const recipeTitle = $('#recipeTitle').val();
  const recipeDescription = $('#recipeDescription').val();

  $.ajax({
    url: recipeApiUrl,
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      title: recipeTitle,
      description: recipeDescription
    }),
    success: function () {
      $('#recipeTitle').val(''); // Clear input fields
      $('#recipeDescription').val('');
      loadRecipes(); // Reload recipes to include the new one
    }
  });
});

// Load recipes on page load
$(document).ready(loadRecipes);

