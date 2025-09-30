const mongoose = require('mongoose');

async function connectToMonoDb(url) {
    return mongoose.connect(url);
}

module.exports = {connectToMonoDb};