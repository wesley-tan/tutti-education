require('dotenv').config();

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function GET() {
  console.log('GET /api/tutors called'); // Add this line for logging
  try {
    const { data: tutors, error } = await supabase
      .from('tutors')
      .select('*');  // Changed from select(*) to select('*')

    if (error) {
      throw error;
    }

    return NextResponse.json(tutors);
  } catch (error) {
    console.error('Error fetching tutors:', error);
    return NextResponse.json({ error: 'Failed to fetch tutors' }, { status: 500 });
  }
}
