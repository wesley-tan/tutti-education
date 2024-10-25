import dotenv from 'dotenv';

dotenv.config();

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
  throw new Error('Supabase environment variables are not set.');
}

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function GET() {
  console.log('GET /api/tutors called'); // Add this line for logging
  try {
    const { data: tutors, error } = await supabase
      .from('tutors')
      .select('*'); 

    console.log('Fetched tutors:', tutors); // Log the fetched tutors
    if (error) {
      console.error('Supabase error:', error); // Log the error if it exists
      throw error;
    }

    return NextResponse.json(tutors);
  } catch (error) {
    console.error('Error fetching tutors:', error);
    return NextResponse.json({ error: 'Failed to fetch tutors' }, { status: 500 });
  }
}
