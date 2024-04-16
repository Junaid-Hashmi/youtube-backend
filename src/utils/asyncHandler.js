// const asyncHandler = (requestHandler) => (req, res, next) => {
//   try {
//     requestHandler(req, res, next);
//   } catch (error) {
//     req.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
