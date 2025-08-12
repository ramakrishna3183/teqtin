const { default: mongoose } = require("mongoose");

const DBConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);

    }catch(error){
        console.error(error)
    }
}

export default DBConnection;