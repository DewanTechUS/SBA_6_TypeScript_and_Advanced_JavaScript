"use strict";
//https://ps-lms.vercel.app/curriculum/se/413/sba#:~:text=Error%20Handling%20Utility%3A
// src/utils/errorHandler.ts
// We can throw this when the API fails or the network has issues.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
exports.handleError = handleError;
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message); // super call to Error constructor
        this.name = "ApiError";
        this.statusCode = statusCode;
    }
}
exports.ApiError = ApiError;
//// Function to handle and log errors appropriately
function handleError(error) {
    if (error instanceof ApiError) {
        console.error("Rocky what you did? there is an API Error:", error.message);
        if (error.statusCode) {
            console.error("Rocky why Status Code:", error.statusCode);
        }
    }
    else if (error instanceof Error) {
        // Standard Error object
        console.error("Rocky why Unexpected Error:", error.message);
    }
    else {
        // Non-Error thrown
        console.error("Rocky why Unknown error:", error);
    }
    console.error("Rocky why Something went wrong while processing your request.");
}
