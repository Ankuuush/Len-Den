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
        type:Number
    },
    dateBorrowed:{
        type:Date
    },
    dateRepayed:{
        type:Date
    },
    activeState:{
        type:Number
    }
});
module.exports=mongoose.model('loanApp',LoanAppSchema);