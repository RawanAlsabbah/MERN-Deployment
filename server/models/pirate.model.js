const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema(
{
        name: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],
        },
        imgUrl: {
            type: String,
            required: [true, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],

        },

        treasurChests:{
            type:Number,
            required: [false, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],

        },

        catchPhrases :{
            type:String,
            required: [false, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],

        },
        position:{
            type:String,
            required: [false, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],

        },


        pegLeg:{
            type:Boolean,
            required: [false, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],

        },

        eyePatch:{
            type:Boolean,
            required: [false, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],

        },

        hookHand:{
            type:Boolean,
            required: [false, "{PATH} is required"],
            minlength: [3, "{PATH} must be at least {MINLENGTH}"],

        },
    },
    { timestamps: true 
    }
);


module.exports.Pirate = mongoose.model("Pirate", PirateSchema)



