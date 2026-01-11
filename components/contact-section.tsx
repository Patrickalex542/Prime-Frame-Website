"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" })
          setIsSubmitted(false)
        }, 3000)
      } else {
        const data = await response.json()
        alert(data.error || "A apărut o eroare. Te rugăm să încerci din nou.")
      }
    } catch (error) {
      alert("Eroare de conexiune. Te rugăm să încerci din nou.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-widest">Hai Să Discutăm</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 tracking-wider">
            Gata să transformi producția ta creativă? Ia legătura și îți vom arăta ce este posibil.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className="p-6 sm:p-8 md:p-12 rounded-2xl border border-border/50 relative overflow-hidden glass-panel"
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none contact-glow"
            />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nume
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary"
                  placeholder="Numele tău"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary"
                  placeholder="email@tau.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mesaj
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary min-h-32 resize-none"
                  placeholder="Spune-ne despre proiectul tău..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 relative overflow-hidden group"
              >
                {isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-5 h-5" />
                    Mesaj Trimis!
                  </span>
                ) : isSubmitting ? (
                  <span>Se trimite...</span>
                ) : (
                  <span className="relative z-10">Trimite Mesaj</span>
                )}
                {!isSubmitted && !isSubmitting && (
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M5 13l4 4L19 7"></path>
    </svg>
  )
}
