const jwt = require('jsonwebtoken')

const authVerify = (req,res, next) => {
    console.log('req' , req)
    // "Bearer xxxxxxxx" -> ["Bearer", "xxxxxxxx"]
    if (req.headers.authorization && 
        req.headers.authorization.split(" ")[0] === 'Bearer'){
        
        const token = req.headers.authorization.split(" ")[1]

        try{
            const decoded = jwt.verify(token, 'millavesecretadetokenquenadiepuedever')
            req.payload = decoded
        }catch(error){
            return res.status(401).send( 'Token invalido')
        }
    }else{
        return res.status(401).send( 'Token invalido')
    }
    next()
}
    



module.exports = authVerify