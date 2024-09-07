const mongoose=require('mongoose')

const loginCapSchema=new mongoose.Schema({
    username:String,
    password:String,
})

module.exports = mongoose.model('loginCap', loginCapSchema);
