function fetchAllData (dataType) {
    return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
  }




  let getAllData = Promise.all([fetchAllData('customers'), fetchAllData('rooms'), fetchAllData('bookings')])
   
 
  
  

 
export { getAllData }

