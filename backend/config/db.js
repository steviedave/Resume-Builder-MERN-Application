import mongoose from 'mongoose';
// import MONGO_URI from '../.env'

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://steveoduor289:DlTogXaPHj809iLF@cluster0.p2jsmjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB CONNECTED'))
  
}