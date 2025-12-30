"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, CheckCircle } from "lucide-react"

const Stepper = dynamic(() => import("@/components/ui/Stepper"), { ssr: false })
const Step = dynamic(() => import("@/components/ui/Stepper").then(mod => ({ default: mod.Step })), { ssr: false })

const studios = [
  { id: "hair", name: "The Hair Atelier", description: "Wigs, braiding, and editorial styling" },
  { id: "ink", name: "The Ink Atelier", description: "Fine line tattoos and blackwork" },
  { id: "talisman", name: "The Talisman Atelier", description: "Custom jewelry and talismans" },
  { id: "beauty", name: "The Beauty Atelier", description: "Makeup and skincare treatments" },
  { id: "apparel", name: "The Apparel Atelier", description: "Bespoke fashion and styling" },
]

const services: Record<string, { id: string; name: string; duration: string; price: string }[]> = {
  hair: [
    { id: "wig-install", name: "Full Wig Installation", duration: "2-3 hours", price: "$250+" },
    { id: "lace-front", name: "Lace Front Install", duration: "1.5-2 hours", price: "$180+" },
    { id: "braiding", name: "Artisan Braiding", duration: "3-6 hours", price: "$300+" },
    { id: "styling", name: "Editorial Styling", duration: "1-2 hours", price: "$150+" },
  ],
  ink: [
    { id: "fine-line", name: "Fine Line Tattoo", duration: "1-3 hours", price: "$200+" },
    { id: "blackwork", name: "Ornamental Blackwork", duration: "2-4 hours", price: "$350+" },
    { id: "botanical", name: "Botanical Design", duration: "1-2 hours", price: "$180+" },
    { id: "custom", name: "Custom Piece", duration: "Varies", price: "Consultation" },
  ],
  talisman: [
    { id: "consultation", name: "Design Consultation", duration: "1 hour", price: "Complimentary" },
    { id: "custom-ring", name: "Custom Ring Commission", duration: "4-6 weeks", price: "$800+" },
    { id: "pendant", name: "Pendant Creation", duration: "3-4 weeks", price: "$500+" },
    { id: "repair", name: "Jewelry Repair", duration: "1-2 weeks", price: "$100+" },
  ],
  beauty: [
    { id: "makeup", name: "Full Glam Makeup", duration: "1-2 hours", price: "$150+" },
    { id: "facial", name: "Signature Facial", duration: "1.5 hours", price: "$180+" },
    { id: "brows", name: "Brow Sculpting", duration: "45 min", price: "$80+" },
    { id: "lashes", name: "Lash Extensions", duration: "2 hours", price: "$200+" },
  ],
  apparel: [
    { id: "consultation", name: "Style Consultation", duration: "1 hour", price: "$100+" },
    { id: "bespoke", name: "Bespoke Garment", duration: "4-8 weeks", price: "$500+" },
    { id: "alterations", name: "Luxury Alterations", duration: "1-2 weeks", price: "$150+" },
    { id: "styling", name: "Personal Styling Session", duration: "2 hours", price: "$250+" },
  ],
}

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
]

export default function BookPage() {
  const [selectedStudio, setSelectedStudio] = useState<string>("")
  const [selectedService, setSelectedService] = useState<string>("")
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: ""
  })
  const [isComplete, setIsComplete] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const getSelectedServiceDetails = () => {
    if (!selectedStudio || !selectedService) return null
    return services[selectedStudio]?.find(s => s.id === selectedService)
  }

  if (isComplete) {
    return (
      <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
        <Navbar />
        <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
          <div className="text-center max-w-lg mx-auto space-y-8">
            <div className="w-20 h-20 bg-primary/10 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif">
              Booking <span className="italic">Confirmed</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Thank you for your booking. You will receive a confirmation email shortly with all the details.
            </p>
            <div className="bg-secondary/30 p-8 text-left space-y-4">
              <div className="flex justify-between border-b border-primary/10 pb-2">
                <span className="text-muted-foreground text-sm">Studio</span>
                <span className="font-medium">{studios.find(s => s.id === selectedStudio)?.name}</span>
              </div>
              <div className="flex justify-between border-b border-primary/10 pb-2">
                <span className="text-muted-foreground text-sm">Service</span>
                <span className="font-medium">{getSelectedServiceDetails()?.name}</span>
              </div>
              <div className="flex justify-between border-b border-primary/10 pb-2">
                <span className="text-muted-foreground text-sm">Date</span>
                <span className="font-medium">{selectedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Time</span>
                <span className="font-medium">{selectedTime}</span>
              </div>
            </div>
            <Link
              href="/"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-semibold hover:bg-foreground transition-colors"
            >
              Return Home
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-foreground text-background pt-32 pb-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Book Your <span className="italic">Appointment</span>
          </h1>
          <p className="text-background/60 max-w-xl mx-auto">
            Reserve your session at one of our specialized ateliers. Each appointment is a curated experience.
          </p>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="px-6 md:px-12 py-6 border-b border-primary/10">
        <div className="max-w-screen-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Booking Stepper */}
      <section className="py-12 px-6 bg-secondary/20">
        <Stepper
          initialStep={1}
          onStepChange={(step) => console.log("Step:", step)}
          onFinalStepCompleted={() => setIsComplete(true)}
          backButtonText="Previous"
          nextButtonText="Continue"
        >
          {/* Step 1: Select Studio */}
          <Step>
            <div className="space-y-6">
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-2">Step 1</span>
                <h2 className="text-2xl md:text-3xl font-serif">Select Your <span className="italic">Atelier</span></h2>
              </div>
              <div className="grid gap-3">
                {studios.map((studio) => (
                  <button
                    key={studio.id}
                    onClick={() => {
                      setSelectedStudio(studio.id)
                      setSelectedService("")
                    }}
                    className={`w-full p-4 text-left border transition-all ${
                      selectedStudio === studio.id
                        ? "border-primary bg-primary/5"
                        : "border-primary/10 hover:border-primary/30"
                    }`}
                  >
                    <span className="block font-serif text-lg">{studio.name}</span>
                    <span className="block text-sm text-muted-foreground">{studio.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </Step>

          {/* Step 2: Select Service */}
          <Step>
            <div className="space-y-6">
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-2">Step 2</span>
                <h2 className="text-2xl md:text-3xl font-serif">Choose Your <span className="italic">Service</span></h2>
              </div>
              {selectedStudio ? (
                <div className="grid gap-3">
                  {services[selectedStudio]?.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`w-full p-4 text-left border transition-all ${
                        selectedService === service.id
                          ? "border-primary bg-primary/5"
                          : "border-primary/10 hover:border-primary/30"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="block font-serif text-lg">{service.name}</span>
                          <span className="block text-sm text-muted-foreground">{service.duration}</span>
                        </div>
                        <span className="text-primary font-medium">{service.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">Please select a studio first</p>
              )}
            </div>
          </Step>

          {/* Step 3: Select Date & Time */}
          <Step>
            <div className="space-y-6">
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-2">Step 3</span>
                <h2 className="text-2xl md:text-3xl font-serif">Select <span className="italic">Date & Time</span></h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    <Calendar className="w-3 h-3 inline mr-2" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-primary/10 bg-background focus:border-primary focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    <Clock className="w-3 h-3 inline mr-2" />
                    Preferred Time
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm border transition-all ${
                          selectedTime === time
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-primary/10 hover:border-primary/30"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Step>

          {/* Step 4: Contact Details */}
          <Step>
            <div className="space-y-6">
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-2">Step 4</span>
                <h2 className="text-2xl md:text-3xl font-serif">Your <span className="italic">Details</span></h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      <User className="w-3 h-3 inline mr-2" />
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Jane"
                      className="w-full p-3 border border-primary/10 bg-background focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full p-3 border border-primary/10 bg-background focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    <Mail className="w-3 h-3 inline mr-2" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com"
                    className="w-full p-3 border border-primary/10 bg-background focus:border-primary focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    <Phone className="w-3 h-3 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (234) 567-8900"
                    className="w-full p-3 border border-primary/10 bg-background focus:border-primary focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special requests or information..."
                    rows={3}
                    className="w-full p-3 border border-primary/10 bg-background focus:border-primary focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          </Step>

          {/* Step 5: Review & Confirm */}
          <Step>
            <div className="space-y-6">
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary block mb-2">Step 5</span>
                <h2 className="text-2xl md:text-3xl font-serif">Review & <span className="italic">Confirm</span></h2>
              </div>
              
              <div className="bg-secondary/30 p-6 space-y-4">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Booking Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Studio</span>
                    <span className="font-medium">{studios.find(s => s.id === selectedStudio)?.name || "—"}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-medium">{getSelectedServiceDetails()?.name || "—"}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{getSelectedServiceDetails()?.duration || "—"}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-medium">{selectedDate || "—"}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-medium">{selectedTime || "—"}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Name</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between border-b border-primary/10 pb-2">
                    <span className="text-muted-foreground">Email</span>
                    <span className="font-medium">{formData.email || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone</span>
                    <span className="font-medium">{formData.phone || "—"}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-primary/10">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Estimated Price</span>
                    <span className="text-xl font-serif text-primary">{getSelectedServiceDetails()?.price || "—"}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground text-center">
                By completing this booking, you agree to our terms of service and cancellation policy.
              </p>
            </div>
          </Step>
        </Stepper>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-background/40">
            © 2025 The Atelier Collective. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

