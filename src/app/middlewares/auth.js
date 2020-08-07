import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConf from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.header.autorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConf.secret);
    req.userId = decoded.id;
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  return next;
};
