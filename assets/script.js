


function dateTime () {
    var timeNow = moment().format("MMMM Do, YYYY [at] hh:mm:ss a");
    $("#currentDay").text(timeNow);
    return timeNow;
}


    setInterval(dateTime, 1000);


var timeBlockData = [
    {
        row: "0",
        hour: "08",
        time: "08",
        meridiem: "am",
        reminder: "",
    },
    {
        row: "1",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: "",
    },
    {
        row: "2",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: "",
    },
    {
        row: "3",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: "",
    },
    {
        row: "4",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "5",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "6",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "7",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "8",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "9",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: "",
    },
    {
        row: "10",
        hour: "06",
        time: "18",
        meridiem: "pm",
        reminder: "",
    },
];

var saveBtn;
var saveBtnEl;
var userInput;


timeBlockData.forEach(function(timeBlockEl, index) {

    var rowEl = $("<form>")
        rowEl.addClass("row");
        $(".container").append(rowEl);

        var hourEl = $("<div>")
         .text(`${timeBlockEl.hour}${timeBlockEl.meridiem}`)
         hourEl.addClass("col-12 col-md-1 hour");

    
    var descriptionEl = $("<div>")
    descriptionEl.addClass("col-10 col-md-10 description p-0");

        var descriptionText = $("<textarea>");
        descriptionText.addClass("user-input");

        descriptionEl.append(descriptionText);
        descriptionText.attr("id", timeBlockEl.row);

    if (timeBlockEl.time < moment().format("HH")) {
        descriptionEl.addClass("past");

    } else if (timeBlockEl.time === moment().format("HH")){
        descriptionEl.addClass("future");

    }else if (timeBlockEl.time > moment().format("HH")){
        descriptionEl.addClass("future");
    }



    
});