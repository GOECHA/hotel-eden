function fetchAllData (dataType) {
    return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then(response => response.json())
    .catch(error => console.log(`API error: ${error.message}`));
  }

  function addBooking(bookingData) {
    return fetch("http://localhost:3001/api/v1/bookings" , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((booking) => {
        if (booking.ok) {
          return booking.json();
        } else {
          throw Error(booking.status.Text);
        }
      })
      .catch((error) => console.log(error));
    }
    

  let getAllData = Promise.all([fetchAllData('customers'), fetchAllData('rooms'), fetchAllData('bookings'), addBooking])
   
 
  
  

 
export { getAllData, addBooking }

