// pages/api/app-redirect.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userAgent = req.headers['user-agent'] || '';

  if (/android/i.test(userAgent)) {
    return res.redirect(
      302,
      'https://play.google.com/store/apps/details?id=com.viettelpost.smartbox'
    );
  }

  if (/iphone|ipad|ipod/i.test(userAgent)) {
    return res.redirect(
      302,
      'https://apps.apple.com/us/app/viettelsmartbox/id6753664887'
    );
  }

  return res.redirect(302, '/app-links');
}
