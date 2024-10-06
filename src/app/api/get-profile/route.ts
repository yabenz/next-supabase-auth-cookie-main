import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  // Get the user ID
  const userId = session.user.id;

  // Fetch profile data from Supabase
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
  }

  // Store profile data in a cookie
  cookies().set('profile', JSON.stringify(profile), { httpOnly: true });

  return NextResponse.json({ message: 'Profile stored in cookie' });
}
