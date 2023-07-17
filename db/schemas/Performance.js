const mongoose=require("mongoose");
const { Schema } = mongoose;

const numberSchema = new Schema({
    month:{
        type:String,
    },

    performance:{
        type:Number
    }
 
});



const Performance = mongoose.model('Performance',numberSchema);

module.exports=Performance;