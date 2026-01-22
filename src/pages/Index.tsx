import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Sun, Zap, Shield, Clock, PiggyBank, Leaf, ArrowRight, 
  CheckCircle2, TrendingUp, Award 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import SolarPanelAnimation from "@/components/SolarPanelAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import FeatureCard from "@/components/FeatureCard";

const stats = [
  { value: 10000, suffix: "+", label: "Installations", icon: Sun },
  { value: 25, suffix: " Years", label: "Panel Lifespan", icon: Clock },
  { value: 50000, prefix: "₹", suffix: "+", label: "Saved Annually", icon: PiggyBank },
];

const features = [
  {
    icon: Zap,
    title: "AI-Powered Optimization",
    description: "Our smart algorithms maximize your energy production and savings with real-time adjustments.",
  },
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Industry-leading protection ensures your investment is secured for decades.",
  },
  {
    icon: Leaf,
    title: "100% Green Energy",
    description: "Reduce your carbon footprint and contribute to a sustainable future for generations.",
  },
  {
    icon: TrendingUp,
    title: "Quick ROI",
    description: "See returns on your investment within 3-5 years with our efficient panel systems.",
  },
  {
    icon: Award,
    title: "Expert Installation",
    description: "Certified professionals ensure perfect setup with minimal disruption to your home.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Support",
    description: "From consultation to maintenance, we're with you every step of the way.",
  },
];

const Index = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-visible">
        {/* Background Gradient */}
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-muted/30 to-background" />

        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                <Sun className="w-4 h-4" />
                <span>AI-Powered Solar Solutions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 break-words whitespace-normal"
              >
                Smart Solar Solutions for a{" "}
                <span className="text-gradient">Sustainable Future</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 px-2"
              >
                Harness the power of artificial intelligence to optimize your solar energy 
                production and save up to 90% on electricity bills.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" 
              >
                <Link to="/estimator">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 group">
                    Estimate Cost
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 border-primary text-primary hover:bg-primary/10">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-foreground">Trusted by 10,000+</p>
                  <p className="text-xs text-muted-foreground">Happy Customers</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <SolarPanelAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-solar-slate relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-solar-amber" />
                <h3 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                  />
                </h3>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose SolarAI
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Powering Tomorrow with{" "}
              <span className="text-gradient">Intelligent Solar</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover why thousands of homeowners trust us with their energy future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 solar-gradient opacity-90" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Get your personalized solar quote in minutes. No obligation, just savings.
            </p>
            <Link to="/estimator">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-10 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
