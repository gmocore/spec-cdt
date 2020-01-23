// $("#current-date").on("click", function() {
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();

//     today = mm + '/' + dd + '/' + yyyy;
//     // document.write(today);
//     $("#current-date").val(today);
// });

// $("#current-date").on("click", function(){
//     var myDate = new Date();
//     var displayDate = (myDate.getMonth()+1) + '/' + (myDate.getDate()) + '/' + (myDate.getFullYear()) + " " + (myDate.getHours()) + ":" + myDate.getMinutes();

//     $("#current-date").val(displayDate);
// });

const stability = document.getElementById("test-stab");
const specDDT = document.getElementById("spec-ddt");
const currentDate = document.getElementById("current-date");
const returnValue_P = document.getElementById("info");

// var inputEntry = specDDT.moment(specDDT.value)

$("#current-date").on("click", function() {
  $("#current-date").val(moment().format("MM/DD/YYYY HH:mm"));
});

// $("#spec-ddt").on("click", function() {
//   console.log(moment(currentDate.value));

//   // return specDDT.value
// });

// stability.addEventListener("click", function() {
//   console.log(`${stability.value} hours`);
//   returnValue_P.innerHTML = `${stability.value} hours`;
// });

$("#submit").click(function(e) {
  if ($("#spec-ddt").val() !== "" && $("#test-stab").val() !== "") {
    let cdtMoment = moment(specDDT.value, "MM/DD/YYYY HH:mm");
    let stabilityInt = parseInt(stability.value);

    let elapsedTime = moment().diff(cdtMoment);
    let unstable =
      moment.duration(elapsedTime).subtract(stabilityInt, "hours") <= 0;
    console.log(cdtMoment);

    if (unstable) {
      //sample is stable
      console.log("stable");
      returnValue_P.textContent = "Send the Specimen to lab";
    } else {
      // Sample is not stable
      console.log("unstable");
      returnValue_P.textContent = "Specimen is past stability, place on EXCEPT";
    }
  }
});
