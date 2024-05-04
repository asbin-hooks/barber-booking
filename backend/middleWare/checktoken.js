import Jwt from 'jsonwebtoken';

export const checkToken = roleArray => {
  return (req, res, next) => {
    const bToken = req.headers.authorization;
    if (!bToken) {
      return res.status(400).json({ Message: 'you are not authorised' });
    }
    const token = bToken.split(' ')[1];
    try {
      const isValid = Jwt.verify(token, 'SETDRFYGUHUJTFGYH');
      if (!roleArray.includes(isValid.role)) {
        return res.status(500).json({ Message: 'you are not authorised' });
      }
    } catch (e) {
      return res.status(500).json({ Message: 'you are not authorised' });
    }
    next();
  };
};
