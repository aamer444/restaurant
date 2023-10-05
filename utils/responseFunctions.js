export const successRes = (res, statusCode, data) => {
    res.status(statusCode).json({
        "status": "successful",
        "data": data
    })
}


export const failureRes = (res, statusCode, err) => {
    res.status(statusCode).json({
        "status": "failed",
        "data": err.message
    })
    console.log(err.message);
}