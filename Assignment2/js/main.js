/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students. *
* Name: _Yawen Deng_ Student ID: _152023164_ Date: _Feb 1, 2019_
*
* ********************************************************************************/

//neeeeeeeeeeeeeeeeeeeeeeed global!
let employeesModel = [];

$(document).ready(() => {
    console.log("jquery working!");

    //assignment2
    function initializeEmployeesModel() {
        //$.get("/employees", data, function(data){
        $.ajax({
            url: //"http://localhost:8081/employees",
                "https://whispering-refuge-67607.herokuapp.com/employees",
            type: "GET",
            contentType: "application/json"
        }).done(function (data) {
            employeesModel = _.take(data, 300);
            refreshEmployeeRows(employeesModel);
            //console.log(employees)  
        }).fail(function (err) {
            console.log("error: " + err.statusText);
            showGenericModal("Error", "Unable to get Employees");
        });
        //console.log("1");
        //});
    };

    function showGenericModal(title, message) {

        $("#genericModal .modaltitle").html(title);
        $("#genericModal .modal-body").html(message);

        $("#genericModal").modal({});

        //console.log("2");

    }

    function refreshEmployeeRows(employees) {
        $("#employees-table").empty();
        // console.log("3")});
        let rowsTemplate = _.template(
            '<% _.forEach(employees, function(employee) { %>' +
            '<div class="row body-row" data-id=<%- employee._id %>>' +
            '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
            '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
            '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
            '</div>' +
            '<% }); %>');
        let rows = rowsTemplate({ 'employees': employees });
        $("#employees-table").html(rows);
    }

    function getFilteredEmployeesModel(filterString) {
        // let temp = _.filterString(employeesModel, function (data) {
        //     
        // 
        let filterStringCompare = ".*" + filterString.toLowerCase() + ".*";
        let temp = _.filter(employeesModel, function (emp) {
            return (emp.FirstName.toLowerCase().match(filterStringCompare)) ||
                (emp.LastName.toLowerCase().match(filterStringCompare)) ||
                (emp.Position.PositionName.toLowerCase().match(filterStringCompare));
        });

        return temp;
    }

    function getEmployeeModelById(id) {
        let empIdTemplate = _.find(employeesModel, function (emp) {
            return emp._id == id;
        });

        //let temp = _.cloneDeeop(empIdTemplate);   
        return empIdTemplate == null ? null : _.cloneDeep(empIdTemplate);
    }

    initializeEmployeesModel();
    //console.log("6");

    $("#employee-search").keyup(function () {
        let filteredEmpModel = getFilteredEmployeesModel(this.value);
        refreshEmployeeRows(filteredEmpModel);

        // console.log("7");
    });

    $(document).on("click", ".body-row", function () {
        let emp = getEmployeeModelById(
            $(this).attr(//{
                "data-id")
        );
        let empHD = moment(emp.HireDate).format('LL');

        console.log(empHD);

        let tempT = _.template('<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressState %>, <%- employee.AddressCity %> <%- employee.AddressZip %><br>'
            + '<strong>Phone Number:</strong> <%- employee.PhoneNum %> ext: <%- employee.Extension %><br>'
            + '<strong>Hire Date:</strong> <%-  hireDate %>');

        let clickedEmp = tempT({ 'employee': emp, 'hireDate': empHD });

        let fullName = emp.FirstName + ' ' + emp.LastName;

        showGenericModal(fullName, clickedEmp);
        // console.log("8");

    });


    //assignment 1
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
                "http://localhost:8081/employees",
            //"https://whispering-refuge-67607.herokuapp.com/employees",
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
            url: //localhost 
                //"http://localhost:8081/projects",
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

