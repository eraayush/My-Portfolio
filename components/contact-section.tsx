"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useForm, ValidationError } from '@formspree/react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { fetchPersonalRequest } from "@/lib/store/slices/personalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [state, handleSubmit] = useForm("mwpnjlja");

  const dispatch = useAppDispatch()
  const { data: personalData } = useAppSelector((state) => state.personal)

  useEffect(() => {
    if (!personalData) {
      dispatch(fetchPersonalRequest())
    }
  }, [dispatch, personalData])

  const handleSubmits = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-up">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-4" />
                <span>{personalData?.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-4" />
                <span>{personalData?.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-4" />
                <span>{personalData?.location}</span>
              </div>
            </div>
          </div>

          <Card className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Send Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>

              {state.succeeded && <p className="mt-4 text-green-500">Thank you for your message!</p>}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
