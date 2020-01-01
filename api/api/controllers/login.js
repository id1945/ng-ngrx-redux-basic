module.exports = {
    login: getLogin,
};

function getLogin(req, res) {
    // Test Error
    // res.status(400);
    // const obj = {
    //     status: 'error',
    //     data: {
    //         message: "ERROR0001"
    //     }

    // }

    // Test Data Success!
    const obj = {
        status: 'success',
        data: {
            user_database: 'userdatabase',
        }
    }
    res.json(obj);
    res.end();


}
