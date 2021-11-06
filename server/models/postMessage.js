import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    brand: String,
    model: String,
    colorway: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    postedOn: {
        type: Date,
        default: new Date()

    },
});

const PostStyle = mongoose.model('PostStyle', postSchema);
export default PostStyle;