import mongoose from "mongoose";

const  { Schema, model } = mongoose;


// 1. Create an interface representing a document in MongoDB.
interface Post {
    title: string;
    author: string;
    body: string;
  }
  
  // 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Post>({
title: { type: String, required: true },
author: { type: String, required: true },
body: { type: String, required: true },
});

// 3. Create a Model.
const PostModel = model<Post>('Post', schema);

export default PostModel;