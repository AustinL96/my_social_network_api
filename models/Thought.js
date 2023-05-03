const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId {
            type: Schema.Types.ObjectId,
        },
        reactionBody {
            type: String,
            required: true,
            maxlength: [
                280,
                'Maximum of 280 characters.'
            ]
        },
        username {
            type: String,
            required: true
        },
        createdAt {
            type: Date,
            default: Date.now
        },
    }
)


const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: [
                1, 
                'Please enter a thought'
            ],
            maxlength: [
                280,
                'Maximum of 280 characters.'
            ]
        },
        createdAt:{
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    }
)