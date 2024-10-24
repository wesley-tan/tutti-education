"use client"

import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const CareerPage = () => {
  const jobOpenings = [
    { title: 'IB Tutor', location: 'Remote', type: 'Part-time or Full-time' },
    { title: 'Marketing & Outreach', location: 'Remote', type: 'Part-time or Full-time' },
    { title: 'Content Creator', location: 'Remote', type: 'Part-time or Full-time' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Join Our Team at Tutti Education</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're on a mission to revolutionize IB education. Join us in shaping the future of learning and empowering students worldwide.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose Tutti Education?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tutor across the globe, from the comfort of your own home.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We believe in creating a positive and supportive environment for our tutors.
                  </p>
                </CardContent>
              </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.location} • {job.type}</p>
                  <Button variant="outline">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center bg-purple-50 py-12 px-4 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Don't see a perfect fit?</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg">Submit Your Resume</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareerPage;
