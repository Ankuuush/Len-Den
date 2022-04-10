const mongoose = require('mongoose');
const {Schema}=mongoose;
const LoanOfferSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    loanApp:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'loanApp'
    },
    interest:{
        type:Number,
        required:true
    },
    state:{
        type:Number,
        default:0
    }
})
module.exports=mongoose.model('loanOffer',LoanOfferSchema)