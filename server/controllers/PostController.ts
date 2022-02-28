import { IncomingMessage, ServerResponse } from 'http';
import PostModel from '../models/Post';

export function createPost (req: IncomingMessage, res: ServerResponse){
    const data = new PostModel({
        title: 'Bill',
        author: 'bill@initech.com',
        body: 'https://i.imgur.com/dM7Thhn.png'
    });
    data.save().then(() => {console.log('Post Created')}).catch(err => console.log(err));
    res.end('Create Post');
}

export function getAllPosts (req:IncomingMessage, res:ServerResponse) {
    PostModel.find({}, function (err, posts) {
        if (err) {
        console.log(err);
        }
        console.log(posts);
        return res.end(JSON.stringify(posts));
    })
}  