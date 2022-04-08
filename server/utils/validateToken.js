const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'A1ABILITIES-JWT-SECRET';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';
const JWT_ISSUER = process.env.JWT_ISSUER || 'https://a1abilities.com.au';

module.exports = (req, res, next) => {
  const authorizationHeaader = req.headers.authorization;
  // const authorizationHeaader = req.headers['authorization'];
  // console.log("+++authorizationHeaader+++", authorizationHeaader)
  let result;
  if (authorizationHeaader) {
    // const tokenString = req.headers.authorization.split(' ')[1]; // Bearer <token> Bearer sfdsfdsfafdsf
    const tokenString = authorizationHeaader && authorizationHeaader.split(" ")[1]; // Bearer <token> Bearer sfdsfdsfafdsf
    const options = {
      expiresIn: JWT_EXPIRES_IN,
      issuer: JWT_ISSUER
    };

    try {
      // console.log("tokenString ===",tokenString);  
      // console.log("JWT_SECRET === ",JWT_SECRET);
      // console.log("optionnn === ",options);
      // verify makes sure that the token hasn't expired and has been issued by us
      result = jwt.verify(tokenString, JWT_SECRET, options);
      console.log('req.decoded...', result);
      // Let's pass back the decoded token to the request object
      req.decoded = result;
      // We call next to pass execution to the subsequent middleware
      next();
    } 
    catch (err) {
      console.log('token erorr:', err);
      // Throw an error just in case anything goes wrong with verification
      // throw new Error(err);
      result = {
        error: 'Authentication error. Token invalid.',
        status: 401
      };
      res.status(401).send(result);
    }
  } else {
    result = {
      error: 'Authentication error. Token required.',
      status: 401
    };
    res.status(401).send(result);
  }
};