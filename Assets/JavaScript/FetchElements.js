// // Fetch the navigation component
// fetch('/x/BoilerPlate/OptionPage.html')
//   .then(response => {
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`Failed to load nav: ${response.status}`);
//     }
//     return response.text(); // Convert response to text
//   })
//   .then(navHTML => {
//     // Insert the navigation HTML into the placeholder
//     document.getElementById('navbar-placeholder').innerHTML = navHTML;
//   })
//   .catch(error => {
//     // Log errors (e.g., if nav.html is missing)
//     console.error('Error loading navigation:', error);
//   });

GetComponent('BoilerPlate/NavBar.html','navbar-placeholder').then(result => document.getElementById('navbar-placeholder').innerHTML = result);

async function GetComponent(location, id)
{
// const response = await
  fetch(location)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`Failed to load nav: ${response.status}`);
    }
    return response.text(); // Convert response to text
  })
  .then(navHTML => {
    // Insert the navigation HTML into the placeholder
    document.getElementById(id).innerHTML = navHTML;
  })
  .catch(error => {
    // Log errors (e.g., if nav.html is missing)
    console.error('Error loading navigation:', error);
  });

 
}