import mongoose from 'mongoose'

const connectionDB = async (url, db) => {
    try {
        await mongoose.connect(`${url}${db}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`connected to the DataBase`);
    } catch (error) {
        console.log(error.message);
    }

}
export default connectionDB