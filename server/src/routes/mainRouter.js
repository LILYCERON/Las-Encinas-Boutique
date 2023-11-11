const { Router } = require("express");
const categoryRouter = require("./categories");
const productsRouter=require("./products");
const typesRouter = require("./types");
const usersRouter=require("./users")
const cartRoutes=require("./Cart")
const favoritesRouter=require("./favorites")
const reviewsRouter=require("./reviews");
const requestRouter = require("./request");
const paymentsRouter=require("./payments")
const mainRouter = Router()

mainRouter.use("/products", productsRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/categories",categoryRouter);
mainRouter.use("/types", typesRouter)
mainRouter.use("/cart", cartRoutes)
mainRouter.use("/favorites", favoritesRouter);
mainRouter.use("/reviews", reviewsRouter);
mainRouter.use("/request", requestRouter)
mainRouter.use("/payments", paymentsRouter)
module.exports = mainRouter;

