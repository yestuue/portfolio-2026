import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Get the country code from Vercel headers
  const country = request.headers.get('x-vercel-ip-country') || 'US';
  
  // 2. Define your logic (e.g., if user is in France, redirect to /fr)
  // For your portfolio, you might just want to set a cookie or a header 
  // that your components can read to show specific local content.
  
  const response = NextResponse.next();
  
  // 3. Set a custom header or cookie so your App can "know" the region
  response.headers.set('x-user-region', country);
  
  return response;
}

// Only run this on the homepage or specific routes
export const config = {
  matcher: ['/', '/about', '/projects'],
};