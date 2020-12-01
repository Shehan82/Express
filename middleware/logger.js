const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.host}${req.originalUrl} time:${moment().format()}`);
    next();
}

module.exports = logger;