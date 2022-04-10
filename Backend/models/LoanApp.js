const mongoose = require('mongoose');
const {Schema}=mongoose;
const LoanAppSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    loanType:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    period:{
        type:Number,
        required:true
    },
    interest:{
        type:Number,
        default:0
    },
    dateBorrowed:{
        type:Date,
        default:Date.now
    },
    dateRepayed:{
        type:Date,
        default:Date.now
    },
    activeState:{
        type:Number,
        default:0
    }
});
module.exports=mongoose.model('loanApp',LoanAppSchema);