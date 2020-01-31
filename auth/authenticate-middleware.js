/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
    if(token){
       jwt.verify(token,process.env.JWT_SECRET || 'StewartsMassiveHorn', (err, decodedToken)=>{
           if(err){
            res.status(401).json({maessage:'Your token was as bad as these jokes that you will not see...'})
           }else{
               req.user = decodedToken;
               next()
           }
       })
    }else{
      res.status(401).json({ you: 'shall not pass!' });
    }
  
};
