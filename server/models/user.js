import mongoose from "mongoose";

const userModel = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: false},
    google: {type: String, required: false},
    id: {type: String}
});

export default mongoose.model("User", userModel);