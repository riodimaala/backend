import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

let corsOption ={
    origin : "http://localhost:5173",
};

//create express app
const app = express();

app.use(express.json());
app.use(cors(corsOption));

/* routes implementation */
app.use('/book', bookRoutes);
app.use('/student', studentRoutes);
app.use('/user', userRoutes);


try {
    const port = 3000; // define port variable
    app.listen(port, () => {
        console.log(`listening port ${port}...`);
    });
} catch (e) {
    console.log(e);
}




