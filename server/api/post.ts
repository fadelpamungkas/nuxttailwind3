import mongoose from 'mongoose';
import { getAllPosts, createPost} from '../controllers/PostController';

console.log('Hello World');

mongoose.connect('mongodb+srv://fadel:fadel@cluster1.apc8j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));


export default getAllPosts