'use strict';
var util = require('util');

module.exports = {
    upload: upload,
    uploadDataLink: uploadDataLink,
    getFiles: getFiles,
    deleteFilesInBizsky: deleteFilesInBizsky,
    postImportFile: postImportFile,
    getfileSize: getfileSize,
};

function upload(req, res) {
    res.status(200);
    res.json({
        status: 'success',
        data: {
            message: null
        }
    })
    res.end();
};

function getFiles(req, res) {
    res.status(200);
    res.json({
        status: 'success',
        data: [{
                CompanyId: 1,
                FileId: "1",
                FileType: "-1",
                FileName: "1111111111111111111111111111111111111111111111111",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-23T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 2,
                FileId: "2",
                FileType: "2",
                FileName: "filesName12",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-24T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 3,
                FileId: "3",
                FileType: "3",
                FileName: "22222222222222222222222222222222222222222222222222222222222222",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-25T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 4,
                FileId: "4",
                FileType: "4",
                FileName: "3333333333333333333333333333333333333333333333333333333333333",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-26T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 5,
                FileId: "5",
                FileType: "1",
                FileName: "4444444444444444444444444444444444444444444444444444444444444",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-27T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 6,
                FileId: "6",
                FileType: "2",
                FileName: "66666666666666666666666666666666666666666666666666666666666666",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-28T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 7,
                FileId: "7",
                FileType: "3",
                FileName: "77777777777777777777777777777777777777777777777777777777777777",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-23T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 8,
                FileId: "8",
                FileType: "4",
                FileName: "88888888888888888888888888888888888888888888888888888888888888",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-24T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 9,
                FileId: "9",
                FileType: "3",
                FileName: "filesName19",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-25T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 10,
                FileId: "10",
                FileType: "2",
                FileName: "filesName20",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-26T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 11,
                FileId: "11",
                FileType: "1",
                FileName: "filesName21",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-27T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 12,
                FileId: "12",
                FileType: "2",
                FileName: "filesName01",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-01T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 13,
                FileId: "13",
                FileType: "3",
                FileName: "filesName03",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-02T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 14,
                FileId: "14",
                FileType: "4",
                FileName: "filesName04",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-03T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 15,
                FileId: "15",
                FileType: "1",
                FileName: "filesName05",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-04T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 16,
                FileId: "16",
                FileType: "2",
                FileName: "filesName06",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-05T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 17,
                FileId: "17",
                FileType: "3",
                FileName: "filesName07",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-06T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 18,
                FileId: "18",
                FileType: "4",
                FileName: "filesName08",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-07T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 19,
                FileId: "19",
                FileType: "3",
                FileName: "filesName09",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-08T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 20,
                FileId: "20",
                FileType: "2caec",
                FileName: "filesName10",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-09T18:25:43.511Z"),
                dataLinkFlag: 0
            },
            {
                CompanyId: 21,
                FileId: "21",
                FileType: "13",
                FileName: "filesName11",
                FileSize: 12,
                UploadDateTime: new Date("2012-05-10T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 22,
                FileId: "22",
                FileType: "12",
                FileName: "filesName01",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-11T18:25:43.511Z"),
                dataLinkFlag: 1
            },
            {
                CompanyId: 23,
                FileId: "",
                FileType: "11",
                FileName: "filesName22",
                FileSize: 12,
                UploadDateTime: new Date("2012-04-12T18:25:43.511Z"),
                dataLinkFlag: 1
            }
        ]
    })
    res.end();
}

function deleteFilesInBizsky(req, res) {
    res.status(200);
    res.json({
        status: 'success',
        data: {
            message: "INFO00038",
            title: "INFO00038"
        }

    })
    res.end();
}

function uploadDataLink(req, res) {
    res.status(200);
    res.json({
        status: 'success',
        data: {
            field: "fc30e08e-dee2-48d3-92bc-078b34369a6a"
        }
    })
}

function postImportFile(req, res) {
    res.status(200);
    res.json({
        status: 'success',
        data: 1

    })
    res.end();
}

function getfileSize(req, res) {
    res.status(200);
    res.json({
        status: 'success',
        data: {
            fileupload_maxlimit: 50,
            fileupload_maxlimit_foreach_file: 2,
        }
    })
    res.end();
}
