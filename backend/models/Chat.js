import moongose from 'mongoose';
const schema  = new moongose.Schema({
    user:{
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    latestMessage: {
        type: String,
        default:"New Chat",
    },
},
    { 
        timestamps: true, 

    }
);

export const Chat = moongose.model('Chat',schema)