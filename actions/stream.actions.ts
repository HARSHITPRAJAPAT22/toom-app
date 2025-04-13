'use server'

import { currentUser } from '@clerk/nextjs/server';
import jwt from 'jsonwebtoken';

const apiSecret = process.env.STREAM_SECRET_KEY!;
const apiKey = process.env.NEXT_PUBLIC__STREAM_API_KEY!;

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) throw new Error('User is not logged in');

  const token = jwt.sign(
    {
      user_id: user.id,
    },
    apiSecret,
    { expiresIn: '1h' }
  );

  return token;
};
