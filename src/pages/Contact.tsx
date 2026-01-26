import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import PageTransition from "@/components/PageTransition";
import axios from "axios";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubmitted(true);
  //   }, 1500);
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await axios.post("http://localhost:8081/api/contact", {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  } catch (error) {
    console.error("Error sending contact message", error);
    alert("Failed to send message. Check backend.");
  } finally {
    setIsSubmitting(false);
  }
};



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      value: "almifitness79@gmail.com",
      href: "mailto:almifitness79@gmail.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Green Energy Park, Chennai, Tamil Nadu 600028",
      href: "#",
    },
  ];

  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="container mx-auto px-4 relative z-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Mail className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's Talk <span className="text-gradient">Solar</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 space-y-6 relative z-20"
              >
                <div className="bg-solar-slate rounded-2xl p-8 text-primary-foreground">
                  <h2 className="font-display text-xl font-semibold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.a
                        key={index}
                        href={info.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-solar-amber group-hover:text-solar-slate transition-colors">
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-primary-foreground/70">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-primary-foreground/10">
                    <h3 className="font-medium mb-4">Business Hours</h3>
                    <div className="space-y-2 text-sm text-primary-foreground/70">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d314831.9786882554!2d80.04386448065257!3d13.047473319264865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1769411758937!5m2!1sen!2sin"
  width="100%"
  height="350"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-xl shadow-lg"
/>

                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-3"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex items-center justify-center bg-card rounded-2xl p-8 border border-border shadow-lg"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </motion.div>
                      <h2 className="font-display text-2xl font-bold mb-3">Thank You!</h2>
                      <p className="text-muted-foreground mb-6">
                        Your message has been sent successfully. Our team will contact you shortly.
                      </p>
                      <Button 
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", message: "" });
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                    <h2 className="font-display text-xl font-semibold mb-6">Send us a Message</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="name" className="mb-2 block">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="mb-2 block">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="phone" className="mb-2 block">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="mb-6">
                      <Label htmlFor="message" className="mb-2 block">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your solar requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
