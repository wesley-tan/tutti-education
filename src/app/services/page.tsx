"use client"

import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
<Header />

      <div className="container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">
            Personalized IB tutoring services to help you achieve academic excellence.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Why Choose Our Services?</h2>
              <p className="text-gray-600 mb-6">
                At Tutti Education, we offer expert guidance, personalized attention, and proven strategies 
                to help you excel in your IB studies. Our tutors are highly qualified and experienced in the IB curriculum.
              </p>
              <Link href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Book a Session</Button>
              </Link>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <img src="images/education.jpg" alt="Services" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Offerings</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'Online IB Tutoring', description: 'Master IB from anywhere with our tailored online sessions.' },
              { title: 'In-Person IB Tutoring', description: 'Get premium, in-person tutoring with localized insights.' },
              { title: 'Exam Practice', description: 'Undertake online, invigilated mock exams for all IB subjects.' },
            ].map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
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

export default ServicesPage;
