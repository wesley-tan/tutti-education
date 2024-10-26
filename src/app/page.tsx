'use client'

import { useState } from 'react'
import { BookOpen, Users, Video, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from './components/Header'
import Footer from './components/Footer'

export default function TuttiEducationLanding() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const data = await response.json()
      if (data.success) {
        console.log('Lead registered:', data.lead)
        setEmail('')
      } else {
        console.error('Error registering lead:', data.error)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <Header />

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class IB Tutoring, Anywhere</h2>
          <p className="text-xl text-gray-600 mb-8">Connect with expert IB tutors from around the globe for personalized, remote learning experiences.</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </section>

        <section id="services" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 text-purple-600" />
                  IB Subject Tutoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Expert tutoring in all IB subjects, tailored to your curriculum and learning style.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 text-purple-600" />
                  Group Study Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Collaborative learning experiences with peers from around the world.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Video className="mr-2 text-purple-600" />
                  On-Demand Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Access to recorded lessons, practice materials, and study guides.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="benefits" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Tutti Education?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-start">
              <CheckCircle className="mr-4 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Global Talent Pool</h3>
                <p className="text-gray-600">Access to the best IB tutors from around the world, regardless of your location.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-4 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
                <p className="text-gray-600">Tailored sessions that adapt to your learning style and academic goals.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-4 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Book sessions at times that suit you, across different time zones.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-4 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of improving grades and boosting confidence in IB students.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Excel in Your IB Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">Sign up for a free consultation and discover how Tutti Education can support your academic success.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit">Get Started</Button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  )
}
