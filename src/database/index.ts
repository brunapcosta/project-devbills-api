// import { error } from "console";
import mongoose from "mongoose";

export async function setupMongo(): Promise<void> {
    try{
        if(mongoose.connection.readyState === 1) {
            return;
        }

        console.log('🎲 Connecting to DB...');
        console.log('MongoDB URL:', process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('✅ DB Connected!');
    } catch (error) {
        console.error('❌ Error connecting to DB:', error instanceof Error ? error.message : error);
        throw new Error('❌ DB not connected.');
    }
}
