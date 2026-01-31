class appError extends Error {
    constructor (err){
        super(message, statusCode); 
        this.statusCode = statusCode; 
    }
}