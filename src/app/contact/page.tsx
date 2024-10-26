"use client"

import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-white">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We would love to hear from you! Get in touch with Tutti Education.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Whether you have questions about our services, want to explore collaboration opportunities, 
                or simply want to say hello, we are here to listen.
              </p>
              <Button size="lg" asChild>
                <Link href="mailto:officialtuttieducation@gmail.com">Send us an Email</Link>
              </Button>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <img src="/images/contact-us.jpg" alt="Contact Us" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Connect With Us</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Reach out to us directly via email:
                </p>
                <Button variant="outline" asChild>
                  <Link href="mailto:officialtuttieducation@gmail.com">
                    officialtuttieducation@gmail.com
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Follow us on LinkedIn for updates and news:
                </p>
                <Button variant="outline" asChild>
                  <Link href="https://www.linkedin.com/company/tutti-education" target="_blank" rel="noopener noreferrer">
                    Tutti Education on LinkedIn
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8">We&apos;re Here to Help</h2>
          <p className="text-gray-600 mb-6">
            Don&apos;t hesitate to reach out. We&apos;re excited to connect with you and discuss how 
            Tutti Education can help revolutionize your learning experience.
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link href="mailto:officialtuttieducation@gmail.com">Contact Us Now</Link>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
