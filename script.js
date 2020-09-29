var current_time_el = $("#currentDay")

function displayTime() {
    var current_time = moment().format("MMMM do, YYYY h:mm:ss a")
    current_time_el.text(current_time)
}

displayTime();
setInterval(displayTime, 1 * 1000)
    //pulling id from each time column
var t0800 = $("#8am");
var t0900 = $("#9am");
var t1000 = $("#10am");
var t1100 = $("#11am");
var t1200 = $("#12pm");
var t1300 = $("#1pm");
var t1400 = $("#2pm");
var t1500 = $("#3pm");
var t1600 = $("#4pm");
var t1700 = $("#5pm");
var saveBtn = $(".saveBtn");

// function to save info input into calendar
function saveList() {
    saveBtn.on("click", function() {
        localStorage.setItem("eight-a", t0800.val());
        localStorage.setItem("nine-a", t0900.val());
        localStorage.setItem("ten-a", t1000.val());
        localStorage.setItem("eleven-a", t1100.val());
        localStorage.setItem("twelve-p", t1200.val());
        localStorage.setItem("one-a", t1300.val());
        localStorage.setItem("two-p", t1400.val());
        localStorage.setItem("three-p", t1500.val());
        localStorage.setItem("four-p", t1600.val());
        localStorage.setItem("five-p", t1700.val());

    });
}

function getList() {
    t0800.val(localStorage.getItem("eight-a"));
    t0900.val(localStorage.getItem("nine-a"));
    t1000.val(localStorage.getItem("ten-a"));
    t1100.val(localStorage.getItem("eleven-a"));
    t1200.val(localStorage.getItem("twelve-p"));
    t1300.val(localStorage.getItem("one-p"));
    t1400.val(localStorage.getItem("two-p"));
    t1500.val(localStorage.getItem("three-p"));
    t1600.val(localStorage.getItem("four-p"));
    t1700.val(localStorage.getItem("five-p"));
}
saveList();
getList();
colorChange();
//function to change timeblock colors depending on time
function colorChange() {
    $(".input-group").each(function() {
            var hourBlock = $(this).attr("id");
            if (hourBlock > displaytime()) {
                $(this).addClass("future");
            } else if (hourBlock < displayTime()) {
                $(this).addClass("past");
            } else {
                $(this).addClass("present");
            }
        }



    )
}