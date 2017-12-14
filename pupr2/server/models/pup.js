let mongoose = require('mongoose');
const schema = mongoose.Schema;

let PupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please provide the pups name'],
        maxlength:[30, 'name cannot exceed 30 charachters']
    },
    breed:{
        type:String,
        required:[true, 'please provide pups breed'],
        maxlength:[20, 'name of breed cannot exceed 20 charachters']
    },
    age:{
        type: String,
        required:[true, 'please provide age of pup']
    },
    //still trying to find how to use ratings
    goodkids:{
        type:Number,
        min: 1,
        max:4
    },
      //still trying to find how to use ratings
    gooddogs:{
        type:Number,
        min: 1,
        max:4
    },
      //still trying to find how to use ratings
    goodcats:{
        type: Number,
        min: 1,
        max:4
    },
    agencyName: {
      type:String,
      required: [true, 'please enter agency Name']
    },
    agencyAddress: {
      type: String,
      required:[true, 'please enter agency address']
    },
    agencyCity: {
      type:String,
      reqired:[true, 'please enter agencies city']
    },
    agencyState:{
      type: String,
      minlength: [2, 'please enter state abbreviation']
    },
    agencyPhone:{
      type: String,
      match: [/\d{3}-\d{3}-\d{4}/, 'please enter a phone number in the following format "xxx-xxx-xxxx"']
  },
   _user: {
       type: schema.Types.ObjectId,
       ref: 'User'
   }
}, {timestamps:true})

mongoose.model("Pup", PupSchema)
