const authMiddleware = (req, res, next) => {
  console.log("Middleware: Request at", new Date().toISOString());
  next();
};

module.exports = authMiddleware;