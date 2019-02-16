/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: _Yawen Deng_ Student ID: _152023164_ Date: _Jan 17, 2019_
*
* ********************************************************************************/

$(document).ready(() => {
    console.log("jquery working!");

    //teams
    $("#teams-menu").on("click", (event) => {
        event.preventDefault();

        $.ajax({
            url: //localhost
            //"http://localhost:8081/teams",
            "https://whispering-refuge-67607.herokuapp.com/teams",
            type: "GET",
            contentType: "application/json"
        }).done((data) => {
            $(".well").empty()
                .append("<h3>Teams</h3>")
                .append(JSON.stringify(data))
        });
    });

    //employess
    $("#employees-menu").on("click", (event) => {
        event.preventDefault();

        $.ajax({
            url: //localhost
            //"http://localhost:8081/employees",
            "https://whispering-refuge-67607.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done((data) => {
            $(".well").empty()
                .append("<h3>Employees</h3>")
                .append(JSON.stringify(data))
        });
    });

    //project
    $("#projects-menu").on("click", (event) => {
        event.preventDefault();

        $.ajax({
            url: //localhost "http://localhost:8081/projects",
            "https://whispering-refuge-67607.herokuapp.com/projects",
            type: "GET",
            contentType: "application/json"
        }).done((data) => {
            $(".well").empty()
                .append("<h3>Projects</h3>")
                .append(JSON.stringify(data))
        });
    });

    //position
    $("#positions-menu").on("click", (event) => {
        event.preventDefault();

        $.ajax({
            url: //localhost:
            //"http://localhost:8081/positions",
            "https://whispering-refuge-67607.herokuapp.com/positions",
            type: "GET",
            contentType: 'application/json'
        }).done((data) => {
            $(".well").empty()
                .append("<h3>Positions</h3>")
                .append(JSON.stringify(data))
        });
    });
});

