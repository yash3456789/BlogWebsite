import mongoose from 'mongoose';



const Connection = async () => {
    try {
    const URL = `mongodb://user33:userPOP41@blogwebsite-shard-00-00.p90st.mongodb.net:27017,blogwebsite-shard-00-01.p90st.mongodb.net:27017,blogwebsite-shard-00-02.p90st.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-10du3l-shard-0&authSource=admin&retryWrites=true&w=majority`;

  await mongoose.connect(URL);
   console.log('Database connected successfully');
} catch(error) {
        console.log('Error while connecting to MongoDB', error);
    }
}

export default Connection;