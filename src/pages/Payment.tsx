import { motion } from "framer-motion";
import { CreditCard, QrCode, Shield, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const Payment = () => {
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
              <CreditCard className="w-4 h-4" />
              Secure Payment
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Complete Your <span className="text-gradient">Order</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Secure payment processing for your solar installation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* QR Payment Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg text-center"
              >
                <QrCode className="w-12 h-12 mx-auto text-primary mb-4" />
                <h2 className="font-display text-xl font-semibold mb-4">Scan to Pay</h2>
                
                {/* QR Code Placeholder */}
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0)",
                      "0 0 0 20px rgba(34, 197, 94, 0.1)",
                      "0 0 0 0 rgba(34, 197, 94, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-48 h-48 mx-auto mb-6 bg-white rounded-xl p-4 shadow-md"
                >
                  <div className="w-full h-full bg-gradient-to-br from-solar-slate to-solar-slate-light rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-1">
                      {[...Array(25)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-3 h-3 ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                <p className="text-sm text-muted-foreground mb-4">
                  Scan with any UPI app to complete payment
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-8 object-contain" />
                </div>
              </motion.div>

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-lg"
              >
                <h2 className="font-display text-xl font-semibold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <div>
                      <p className="font-medium">3kW Solar System</p>
                      <p className="text-sm text-muted-foreground">Popular Plan</p>
                    </div>
                    <p className="font-bold">₹1,50,000</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Installation Fee</span>
                    <span className="text-primary font-medium">FREE</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">GST (5%)</span>
                    <span>₹7,500</span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-2xl text-primary">₹1,57,500</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>100% Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Installation within 7 days</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>15-Year Warranty included</span>
                  </div>
                </div>

                <Button disabled className="w-full h-12 bg-muted text-muted-foreground cursor-not-allowed">
                  Payment Gateway Coming Soon
                </Button>
              </motion.div>
            </div>

            {/* Coming Soon Banner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-solar-amber/20 via-primary/20 to-accent/20 border border-primary/20 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-solar-amber/20 flex items-center justify-center"
              >
                <CreditCard className="w-10 h-10 text-solar-amber" />
              </motion.div>
              
              <h3 className="font-display text-2xl font-bold mb-2">
                Payment Gateway Integration
              </h3>
              <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
                We're working on integrating multiple payment options including Credit Cards, 
                Debit Cards, Net Banking, and EMI options. Stay tuned!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="px-4 py-2 bg-card rounded-lg text-sm font-medium">UPI</div>
                <div className="px-4 py-2 bg-card rounded-lg text-sm font-medium">Credit Cards</div>
                <div className="px-4 py-2 bg-card rounded-lg text-sm font-medium">EMI Options</div>
                <div className="px-4 py-2 bg-card rounded-lg text-sm font-medium">Net Banking</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-8"
            >
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Contact Us for Manual Payment Options
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Payment;
