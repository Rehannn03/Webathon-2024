import mongoose  from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Using existing database connection");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URL || "", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    
    console.log("Database connected", db);
    connection.isConnected = db.connections[0].readyState;

} catch (error) {
    console.error("Error connecting to database", error);
   process.exit(1);
  }
}

export default dbConnect;
