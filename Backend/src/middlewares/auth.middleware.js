import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { auth } from "../utils/auth.js";

// Attach the session user to the request for downstream checks.
export const userAuth=asyncHandler(async(req,res,next)=>{
    const session = await auth.api.getSession({
        headers: req.headers
    });
    if (!session) {
        throw new ApiError(401, "Unauthorized access");
    }
    req.user=session?.user;
    req.session=session;
    next();
})