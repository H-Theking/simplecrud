/* 
 * @author Team5
 * This script file contains all script to display the Table list
 * Table list here are: Block list and Free list
 * 
 */

//Executed when the file is ready
$(document).ready(function () {


    //Monday blocked Click......................................
    $("#loading").modal("show");
    var request = $.ajax({
        url: "TimeTableServlet",
        data: {"submit": "getMondayLectureHours"},
        async: false,
        method: "POST"
    }).done(function (msg) {
         $("#loading").modal("hide");
        var response = JSON.parse(msg);
        var content = '<table style = "width: 85%; text-align:center" ' +
                'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                '<thead>' +
                '<tr>' +
                '<th> 7am </th>' +
                '<th> 8am </th>' +
                '<th> 9am </th>' +
                '<th> 10am </th>' +
                '<th> 11am </th>' +
                '<th> 12pm </th>' +
                '<th> 1pm </th>' +
                '<th> 2pm </th>' +
                '<th> 3pm </th>' +
                '<th> 4pm </th>' +
                '<th> 5pm </th>' +
                '<th> 6pm </th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>';
        //                            alert(response.blocked_lecturers.length );
        for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
            content += "<tr>";
            //                                alert(response.blocked_lecturers[i].length);
            for (var j = 0; j < response.blocked_lecturers.length; j++) {
                content += "<td>" +
                        response.blocked_lecturers[j][i].name +
                        "</td>";
            }
            content += "</tr>";
        }
        content += '</tbody>' +
                '</table>';
        //                            alert(content);
        $("#timetable").html(content);
    });
    //end of monday blocked Click


    $("#day1").click(function () { //when tab is clicked 
        $("#day1").focus();
        $("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getMondayLectureHours"},
            method: "POST"
        }).done(function (msg) {
  $("#loading").modal("hide");

            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#timetable").html(content);
        });


    });

    //tuesday blocked Click......................................
    $("#day2").click(function () { //when tab is clicked 
$("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getTuesdayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
              $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#timetable").html(content);
        });


    }
    );
    //end tuesday blocked Click

    //wednesday blocked Click......................................
    $("#day3").click(function () { //when tab is clicked 
$("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getWednesdayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
              $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#timetable").html(content);
        });


    }
    );
    //end wednesday blocked Click

    //thursday blocked Click......................................
    $("#day4").click(function () { //when tab is clicked 
$("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getThursdayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
              $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#timetable").html(content);
        });
    });

    //end thursday blocked Click...................................

    //friday blocked Click......................................
    $("#day5").click(function () { //when tab is clicked 
$("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getFridayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
              $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#timetable").html(content);
        });


    }
    ); //end friday blocked Click

    //saturday blocked Click......................................
    $("#day6").click(function () { //when tab is clicked 
$("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getSaturdayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
              $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#timetable").html(content);
        });


    }
    ); //end of saturday blocked Click

    /*
     * *------------------------------------------------------
     * End Blocked list--------------------------------------------
     * ----------------------------------------------------
     * 
     * */


    /*
     * *------------------------------------------------------
     * Free list--------------------------------------------
     * ----------------------------------------------------
     * 
     * */
    //Monday Tab free click............
    $("#freeday1").click(function () { //when tab is clicked 

        $("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getFreeMondayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
            //                            alert(msg);
            $("#loading").modal("hide");

            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#freelisttable").html(content);
        });


    }); // end of monday free Click


    //tuesday free Click......................................
    $("#freeday2").click(function () { //when tab is clicked 
        $("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getFreeTuesdayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
            $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#freelisttable").html(content);
        });


    }
    );

    //wednesday free Click......................................
    $("#freeday3").click(function () { //when tab is clicked 
        $("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getFreeWednesdayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
            $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#freelisttable").html(content);
        });


    }
    );
    //end wednesday free Click

    //thursday free Click......................................
    $("#freeday4").click(function () { //when tab is clicked 
        $("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getFreeThursdayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
            $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#freelisttable").html(content);
        });
    });

    //end thursday free Click...................................

    //friday free Click......................................
    $("#freeday5").click(function () { //when tab is clicked 
        $("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getFreeFridayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
            $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#freelisttable").html(content);
        });


    }
    ); //end friday free Click

    //saturday free Click......................................
    $("#freeday6").click(function () { //when tab is clicked 
        $("#loading").modal("show");
        var request = $.ajax({
            url: "TimeTableServlet",
            data: {"submit": "getFreeSaturdayLectureHours"},
            async: false,
            method: "POST"
        }).done(function (msg) {
            $("#loading").modal("hide");
            var response = JSON.parse(msg);
            var content = '<table style = "width: 85%; text-align:center" ' +
                    'class = "table table-bordered table-striped table-hover table-responsive table-condensed" >' +
                    '<thead>' +
                    '<tr>' +
                    '<th> 7am </th>' +
                    '<th> 8am </th>' +
                    '<th> 9am </th>' +
                    '<th> 10am </th>' +
                    '<th> 11am </th>' +
                    '<th> 12pm </th>' +
                    '<th> 1pm </th>' +
                    '<th> 2pm </th>' +
                    '<th> 3pm </th>' +
                    '<th> 4pm </th>' +
                    '<th> 5pm </th>' +
                    '<th> 6pm </th>' +
                    '</tr>' +
                    '</thead>' +
                    '<tbody>';
            //                            alert(response.blocked_lecturers.length );
            for (var i = 0; i < response.blocked_lecturers[0].length; i++) {
                content += "<tr>";
                //                                alert(response.blocked_lecturers[i].length);
                for (var j = 0; j < response.blocked_lecturers.length; j++) {
                    content += "<td>" +
                            response.blocked_lecturers[j][i].name +
                            "</td>";
                }
                content += "</tr>";
            }
            content += '</tbody>' +
                    '</table>';
            //                            alert(content);
            $("#freelisttable").html(content);
        });


    }
    ); //end of saturday free Click

    /*
     * *------------------------------------------------------
     * End Free list--------------------------------------------
     * ----------------------------------------------------
     * 
     * */

});

