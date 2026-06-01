require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require(
  "./config/db"
);

const authRoutes = require(
  "./routes/authRoutes"
);

const taskRoutes = require(
  "./routes/taskRoutes"
);

const swaggerUi =
  require(
    "swagger-ui-express"
  );

const swaggerSpec =
  require(
    "./swagger/swagger"
  );

const adminRoutes =
  require(
    "./routes/adminRoutes"
  );

const errorMiddleware =
  require(
    "./middleware/errorMiddleware"
  );

const app = express();

connectDB();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());

app.use(
  "/api/v1/auth",
  authRoutes
);

app.use(
  "/api/v1/tasks",
  taskRoutes
);

app.use(
  "/api/v1/admin",
  adminRoutes
);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(
    swaggerSpec
  )
);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
  });
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});