let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');
let Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        minlength:[2, "name must be at least 2 charachters"]
    },
    lastName:{
        type:String,
        required:[true,"please enter your last name"]
    },
    alias:{
        type:String,
        required:[true,"please enter an alias"],
        unique: [true, "looks like that alias is taken lets try another one"]
    },
    address :{
      type: String,
      required: [true, "please enter your address"]
     },
    city:{
        type: String,
        required:[true,"please enter your city"]
    },
    state:{
        type:String,
        required:[true, "please enter state"],
        maxlength: [2, "please enter state abbreviation"]
    },
    zip:{
        type:String,
        required:[true, "please enter zip code"],
        minlength:[5, "please enter full zip code "]
    },
    bio: {
        type: String,
        required:[true, "please tell us a bit about yourself"],
        maxlength: [140, "please limit your bio to 140 charachters"]
    },
    email: {
        type: String,
        required:[true, "please enter your email"],
        unique: [true, 'Email is already registered'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    admin:{
        type:Boolean,
        required:[false],
    },
    phone: {
        type: String,
        match: [/\d{3}-\d{3}-\d{4}/, 'please enter a phone number in the following format "xxx-xxx-xxxx"']
    },
    birthday: {
      type:Date,
      required: [true, 'please enter your birthdate']
    },
    password:{
      type:String,
      required:[true, 'please enter a password']
    },
    swipeLocation:{
      type:Number,
      defualt:0
      },
    friends:[this],
    favorites: [{
      type: Schema.Types.ObjectId, ref: "Pup"
    }]

}, {timestamps: true})

UserSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    next();
})

UserSchema.methods.authenticate = function(password){
    return bcrypt.compareSync(password, this.password);
}

mongoose.model("User", UserSchema)
