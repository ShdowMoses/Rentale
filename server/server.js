import express from "express";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import SequelizeStore from "connect-session-sequelize";
import AuthRoute from "./routes/AuthRoute.js";
import userRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5000",
  })
);
app.use(express.json());
app.use(userRoute);
app.use(ProductRoute);
app.use(AuthRoute);

// store.sync();

app.listen(process.env.PORT, () => {
  console.log("Server running");
});
