const userModel = require("../models/user/userModel");
const jwt = require("jsonwebtoken");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");

const Authentication = async (req, res, next) => {
  try {
    const token =
      req.cookies?.authToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token)
      return res
        .status(401)
        .json(
          new ApiResponse(
            401,
            {},
            "Unauthorized (Not autherized to access this route)"
          )
        );

    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const user = await userModel
      .findById(decoded._id)
      .select("-password -refreshToken");

    if (!user)
      return res
        .status(403)
        .json(
          new ApiResponse(403, {}, "User not allowed to access this resource")
        );
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in verifyJwt middleware: ", error);
    throw new ApiError(401, "Unauthorized, invalid token", error);
  }
};
module.exports = Authentication;
