var mongoose = require('mongoose');

var User = mongoose.model('User', {
    created_at: { type: String },
    updated_at: { type: String },
    username: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    address: { type: String },
    phone: { type: String }
});

// module.exports = User;

module.exports = {
    User: User
};
