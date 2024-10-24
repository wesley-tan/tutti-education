"use client"

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic';

const TeamPage = () => {
  type Tutor = {
    id: number;
    name: string;
    bio: string;
  };

  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [isClient, setIsClient] = useState(false); // Track if we are on the client

  useEffect(() => {
    setIsClient(true); // Set to true when the component mounts
  }, []);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await fetch('/api/tutors');
        console.log('Response Status:', response.status);
        console.log('Response Headers:', response.headers);
        
        const text = await response.text(); // Get the response as text
        console.log('Response:', text); // Log the raw response

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = JSON.parse(text); // Parse it as JSON
        console.log('Fetched tutors:', data);
        
        if (Array.isArray(data)) {
          setTutors(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };

    fetchTutors();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl text-gray-600">Bringing you the best.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Tutors</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {tutors.map((tutor) => (
              <Card key={tutor.id}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{tutor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{tutor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
