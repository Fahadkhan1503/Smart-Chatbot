import moongose from 'mongoose';
const schema  = new moongose.Schema({
    chat:{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
},
    { 
        timestamps: true, 

    }
);

export const Conversation = moongose.model('Conversation',schema)