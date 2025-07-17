import { Chat } from "../models/Chat.js"
import { Conversation } from "../models/Conversation.js";

export const createChat = async (req, res) => {
    try {
        const userId = req.user._id

        const chat = await Chat.create({
            user: userId,
        });

        res.json(chat);

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

export const getAllChats = async (req, res) => {
    try {
        const chats = await Chat.find({ user: req.user._id }).sort({
            createdAt: -1,
        });

        res.json(chats);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

export const addConversation = async (req, res) => {
    try {
        const chat = await Chat.findById(req.params.id)
        if (!chat)
            return res.status(404).json({
                message: " No chat found :( ",
            });

        const conversation = await Conversation.create({
            chat: chat._id,
            question: req.body.question,
            answer: req.body.answer,

        });

        const updatedChat = await Chat.findByIdAndUpdate(
            req.params.id, 
            { latestMessage: req.body.answer },
            { new: true }
        );

        res.json({
            conversation,
            updatedChat,
        });
    } catch (error) {
        req.status(500).json({
            message: error.message,
        });
    }
}