
  function setCurrentTime() {
    var myDate = new Date();

    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];


    let date = myDate.getDate();
    let month = monthsList[myDate.getMonth()];
    let year = myDate.getFullYear();
    let day = daysList[myDate.getDay()];

    let today = `${date} ${month} ${year}, ${day}`;

    let amOrPm;
    let twelveHours = function() {
      if (myDate.getHours() > 12) {
        amOrPm = 'PM';
        let twentyFourHourTime = myDate.getHours();
        let conversion = twentyFourHourTime - 12;
        return `${conversion}`

      } else {
        amOrPm = 'AM';
        return `${myDate.getHours()}`
      }
    };
    let hours = twelveHours();
    let minutes = myDate.getMinutes();
    let seconds = myDate.getSeconds();

    let currentTime = `${hours}:${minutes}:${seconds} ${amOrPm}`;

    document.getElementById('current-time').innerText = today + ' ' + currentTime
  }

  setInterval(function() {
    setCurrentTime();
  }, 1000);


  function validateForm() {
  let x = document.forms["myForm"]["friendly"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    alert("thank you for your submission")
  }
}
function validateRadio() {
  var x = document.getElementById("c1").required;
}
