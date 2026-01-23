import { motion } from "framer-motion";
import { Check, Star, TrendingUp, Home, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const plans = [
  {
    name: "Starter",
    capacity: "1 kW",
    price: "₹55,000",
    yearlySavings: "₹10,000",
    idealFor: "1 BHK Apartment",
    icon: Home,
    features: [
      "4 Solar Panels",
      "Basic Inverter",
      "10-Year Warranty",
      "Mobile Monitoring",
      "Standard Installation",
    ],
    popular: false,
    color: "border-border",
  },
  {
    name: "Popular",
    capacity: "3 kW",
    price: "₹1,50,000",
    yearlySavings: "₹30,000",
    idealFor: "2-3 BHK Home",
    icon: Home,
    features: [
      "12 Solar Panels",
      "Smart Inverter",
      "15-Year Warranty",
      "AI Optimization",
      "Premium Installation",
      "Annual Maintenance",
    ],
    popular: true,
    color: "border-primary",
  },
  {
    name: "Enterprise",
    capacity: "5 kW",
    price: "₹2,50,000",
    yearlySavings: "₹50,000",
    idealFor: "Villa / Large Home",
    icon: Building2,
    features: [
      "20 Solar Panels",
      "Premium Inverter",
      "25-Year Warranty",
      "AI + Battery Backup",
      "White-Glove Installation",
      "Lifetime Maintenance",
      "Priority Support",
    ],
    popular: false,
    color: "border-secondary",
  },
];

const CompareProgress = ({ value, max, label }: { value: number; max: number; label: string }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{value.toLocaleString()}</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / max) * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
      />
    </div>
  </div>
);

const Compare = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="container mx-auto px-4 relative z-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Plan Comparison
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Find Your Perfect <span className="text-gradient">Solar Plan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare our solar system packages and choose the one that fits your energy needs
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`relative bg-card rounded-2xl p-6 md:p-8 border-2 ${plan.color} shadow-lg ${
                  plan.popular ? "md:-mt-4 md:mb-4" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <plan.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.idealFor}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-4xl font-display font-bold text-gradient">
                      {plan.capacity}
                    </span>
                  </div>
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <p className="text-sm text-muted-foreground">One-time installation</p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg mb-6 text-center">
                  <p className="text-sm text-muted-foreground">Yearly Savings</p>
                  <p className="text-xl font-bold text-primary">{plan.yearlySavings}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/payment">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90" 
                        : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-card rounded-2xl p-8 border border-border shadow-lg"
          >
            <h2 className="font-display text-2xl font-bold mb-8 text-center">
              Yearly Savings Comparison
            </h2>
            
            <div className="space-y-6">
              {plans.map((plan) => (
                <div key={plan.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{plan.capacity} System</span>
                    <span className="text-primary font-bold">{plan.yearlySavings}/year</span>
                  </div>
                  <CompareProgress 
                    value={parseInt(plan.yearlySavings.replace(/[₹,]/g, ""))} 
                    max={50000} 
                    label="" 
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
              <h3 className="font-display font-semibold mb-2">💡 Pro Tip</h3>
              <p className="text-muted-foreground text-sm">
                The 3kW system offers the best value for most Indian households. 
                It covers 80% of typical energy needs while providing excellent ROI.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Compare;
