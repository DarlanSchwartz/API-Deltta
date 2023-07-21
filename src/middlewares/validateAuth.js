export default async function validateAuth(req, res, next) {
  const authorization = req.headers.authorization;
 
  if(!authorization || authorization !== process.env.SECRET) return res.sendStatus(401);

  next();
}