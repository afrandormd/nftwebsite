let countDownDate = new Date("november 5, 2022 15:00:00").getTime();

//update every seconds.
let x = setInterval(() => {
  //get date for today
  let now = new Date().getTime();
  //get distance between today and countdown date.
  let distance = countDownDate - now;
  
  //calculate days, hours, minutes, and seconds.
  let days = Math.floor(distance / (1000*60*60*24));
  let hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  let minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  let seconds = Math.floor((distance % (1000*60)) / 1000);
  
  //display on the time id="time"
  document.getElementById("time").innerHTML= days + " Days - " + hours + " : " + minutes + " : " + seconds + "s " + "<div class='desc'>Remaining Time</div>";
  
  //set expired time
  if (distance<0){
    clearInterval(x);
    document.getElementById("time").innerHTML="EXPIRED";
  }
});