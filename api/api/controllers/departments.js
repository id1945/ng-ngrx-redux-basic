'use strict';
var util = require('util');

module.exports = {
    getDepartment: getDepartments,
    getDepartmentById: getDepartmentById,
    createDepartment: createDepartment,
    updateDepartment: updateDepartment,
    deleteDepartment: deleteDepartment,
    getDepartmentSort: getDepartmentSort,
};
const department = {
    dept_id: 1,
    dept_external_code: "001",
    dept_name: "Kinh doanh",
    dept_name_abbreviation: "Kinh doanh",
    application_start_date: new Date("1970-01-01T16:42:41.000Z"),
    application_end_days: new Date("2999-12-31T16:42:41.000Z"),
    update_time: new Date("2017-12-16T16:42:41.000Z"),
};
const departments = [{
        dept_id: 1,
        dept_external_code: "001",
        dept_name: "Kinh doanh",
        dept_name_abbreviation: "Kinh doanh",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-16T16:42:41.000Z"),
    },
    {
        dept_id: 2,
        dept_external_code: "002",
        dept_name: "Kinh doanh",
        dept_name_abbreviation: "",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-14T16:42:41.000Z"),
    },
    {
        dept_id: 3,
        dept_external_code: "003",
        dept_name: "Kinh doanh",
        dept_name_abbreviation: "depname31111111111111111111111111111111111111111111111111111111111111111111111111111111111",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-12T16:42:41.000Z"),
    },
    {
        dept_id: 4,
        dept_external_code: "004",
        dept_name: "Tài chính",
        dept_name_abbreviation: "Tài chính",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 5,
        dept_external_code: "004",
        dept_name: "Tài chính",
        dept_name_abbreviation: "Tài chính",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 6,
        dept_external_code: "004",
        dept_name: "Tài chính",
        dept_name_abbreviation: "Tài chính",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 7,
        dept_external_code: "007",
        dept_name: "Tài chính",
        dept_name_abbreviation: "depname7",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 8,
        dept_external_code: "008",
        dept_name: "Tài chính",
        dept_name_abbreviation: "depname8",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 9,
        dept_external_code: "009",
        dept_name: "Tài chính",
        dept_name_abbreviation: "depname9",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 10,
        dept_external_code: "010",
        dept_name: "Tài chính",
        dept_name_abbreviation: "depname10",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 11,
        dept_external_code: "011",
        dept_name: "Tài chính",
        dept_name_abbreviation: "depname11",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 12,
        dept_external_code: "012",
        dept_name: "Tài chính",
        dept_name_abbreviation: "depname12",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    },
    {
        dept_id: 13,
        dept_external_code: "013",
        dept_name: "Tài chính",
        dept_name_abbreviation: "depname13",
        application_start_date: new Date("1970-01-01T16:42:41.000Z"),
        application_end_days: new Date("2999-12-31T16:42:41.000Z"),
        update_time: new Date("2017-12-31T16:42:41.000Z"),
    }
]

function getDepartments(req, res) {
    res.setHeader("count", "999");
    const obj = {
        status: 'success',
        data: departments
    }
    res.json(obj);
    res.end();
}

function getDepartmentById(req, res) {
    const obj = {
        status: 'success',
        data: department
    }
    res.json(obj);
    res.end();
}

function getDepartmentSort(req, res) {
    const obj = {
        status: 'success',
        data: departments
    }
    res.json(obj);
    res.end();
}

function deleteDepartment(req, res) {
    const obj = {
        status: 'success',
        data: null
    }
    res.json(obj);
    res.end();
}

function createDepartment(req, res) {
    // const obj = {
    //     status: 'success',
    //     data: null
    // }
    // res.json(obj);
    // res.end();
    res.status(400);
    res.json({
        status: 'fail',
        data: {
            message: "ERROR00062"
        }

    })
    res.end();
}

function updateDepartment(req, res) {
    // const obj = {
    //     status: 'success',
    //     data: null
    // }
    // res.json(obj);
    // res.end();
    res.status(400);
    res.json({
        status: 'fail',
        data: {
            message: "ERROR00062"
        }

    })
    res.end();
}