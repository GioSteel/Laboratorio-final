import { Request, Response } from 'express';
import { db } from './db';

export const getUser = (req: Request, res: Response) => {
  const userId = req.params.userId;
  const query = 'SELECT * FROM users WHERE id = ?'; // Using parameterized query
  db.query(query, [userId], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};
