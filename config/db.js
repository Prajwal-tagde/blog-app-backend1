const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog-app-coder29')
        .then((res) => {
            console.log('Connected Successfully!');
        })
        .catch((err) => {
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = ConnectDB;