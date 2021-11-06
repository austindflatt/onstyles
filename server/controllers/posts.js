import PostStyle from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postStyles = await PostStyle.find();
        console.log(postStyles);
        res.status(200).json(postStyles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStyle = async (req, res) => {
    const body = req.body;
    const newStyle = new PostStyle(body);
    try {
        await newStyle.save();
        res.status(201).json(newStyle);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}