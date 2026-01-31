export const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    sucess: false,
    message: err.message || "Internal Server Error",
  });
};