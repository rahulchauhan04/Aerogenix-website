import React from "react"
import AnimatedSection from "../components/ui/AnimatedSection"

const ContactPage = () => {
  return (
    <main className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for demos, partnerships, or support.
          </p>
        </AnimatedSection>
      </div>
    </main>
  )
}

export default ContactPage
