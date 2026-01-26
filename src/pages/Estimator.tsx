import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Home, Zap, IndianRupee, Calendar, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateSolarEstimate } from "@/utils/estimator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PageTransition from "@/components/PageTransition";

const cities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", 
  "Pune", "Ahmedabad", "Kolkata", "Jaipur", "Lucknow"
];

interface EstimateResult {
  solarCapacity: number;
  installationCost: number;
  yearlySavings: number;
  roiYears: number;
  co2Saved: number;
}

const Estimator = () => {
  const [roofSize, setRoofSize] = useState("");
  const [monthlyBill, setMonthlyBill] = useState("");
  const [city, setCity] = useState("");
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [roofWarning, setRoofWarning] = useState<string | null>(null);


  

  //   setIsCalculating(true);
    
  //   // Dummy calculation logic
  //   setTimeout(() => {
  //     const roofSqFt = parseFloat(roofSize);
  //     const bill = parseFloat(monthlyBill);
      
  //     // 1 kW needs ~100 sq ft
  //     const maxCapacity = roofSqFt / 100;
  //     // Assume ₹7 per unit, so monthly units = bill/7
  //     const monthlyUnits = bill / 7;
  //     // 1 kW produces ~120 units/month
  //     const requiredCapacity = monthlyUnits / 120;
      
  //     const solarCapacity = Math.min(maxCapacity, requiredCapacity);
  //     const installationCost = solarCapacity * 55000; // ₹55,000 per kW
  //     const yearlySavings = solarCapacity * 120 * 12 * 7; // yearly savings
  //     const roiYears = installationCost / yearlySavings;
  //     const co2Saved = solarCapacity * 1.5; // tonnes per year

  //     setResult({
  //       solarCapacity: Math.round(solarCapacity * 10) / 10,
  //       installationCost: Math.round(installationCost),
  //       yearlySavings: Math.round(yearlySavings),
  //       roiYears: Math.round(roiYears * 10) / 10,
  //       co2Saved: Math.round(co2Saved * 10) / 10,
  //     });
  //     setIsCalculating(false);
  //   }, 1500);
  // };
      const calculateEstimate = () => {
  if (!roofSize || !monthlyBill || !city) return;

  setIsCalculating(true);

  const roof = Number(roofSize);
  const bill = Number(monthlyBill);

  const estimate = calculateSolarEstimate({
    monthlyBill: bill,
    roofArea: roof,
  });
// 🚨 ROOF INSUFFICIENT CHECK — HERE ONLY
    if (!estimate.feasible) {
    setRoofWarning(
      `⚠️ Your roof area is insufficient.
       You need at least ${estimate.requiredArea} sq.ft
       for a ${estimate.requiredKW} kW system.`
    );
    setResult(null);
    setIsCalculating(false);
    return;
  }

  // ✅ CLEAR WARNING IF OK
  setRoofWarning(null);


  setTimeout(() => {
    setResult({
      solarCapacity: estimate.requiredKW,
      installationCost: estimate.estimatedCost,
      yearlySavings: estimate.yearlySavings,
      roiYears: Math.round((estimate.estimatedCost / estimate.yearlySavings) * 10) / 10,
      co2Saved: Math.round(estimate.requiredKW * 1.5 * 10) / 10,
    });
    setIsCalculating(false);
  }, 800);
};


 const resetForm = () => {
  setRoofSize("");
  setMonthlyBill("");
  setCity("");
  setResult(null);
  setRoofWarning(null);
};


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
              <Calculator className="w-4 h-4" />
              AI-Powered Estimator
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Calculate Your <span className="text-gradient">Solar Savings</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get an instant estimate of your solar installation cost and potential savings
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border relative z-20"
              >
                <h2 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                  <Home className="w-5 h-5 text-primary" />
                  Enter Your Details
                </h2>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="roofSize" className="text-sm font-medium mb-2 block">
                      Available Roof Area (sq.ft)
                    </Label>
                    <Input
                      id="roofSize"
                      type="number"
                      placeholder="e.g., 500"
                      value={roofSize}
                      onChange={(e) => setRoofSize(e.target.value)}
                      className="h-12"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Shadow-free area available for panel installation
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="monthlyBill" className="text-sm font-medium mb-2 block">
                      Monthly Electricity Bill (₹)
                    </Label>
                    <Input
                      id="monthlyBill"
                      type="number"
                      placeholder="e.g., 3000"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="h-12"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Your average monthly electricity bill amount
                    </p>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">
                      Select Your City
                    </Label>
                    <Select value={city} onValueChange={setCity}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Choose your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map((c) => (
                          <SelectItem key={c} value={c}>{c}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={calculateEstimate}
                      disabled={!roofSize || !monthlyBill || !city || isCalculating}
                      className="flex-1 h-12 bg-primary hover:bg-primary/90"
                    >
                      {isCalculating ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <>
                          <Calculator className="w-5 h-5 mr-2" />
                          Calculate Estimate
                        </>
                      )}
                    </Button>
                    {result && (
                      <Button variant="outline" onClick={resetForm} className="h-12">
                        Reset
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative z-20"
              >
                <AnimatePresence mode="wait">
                  {roofWarning && (
  <motion.div
    key="roof-warning"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="mb-4 bg-destructive/10 border border-destructive/30 text-destructive rounded-xl p-4"
  >
    <p className="text-sm font-medium">
      {roofWarning}
    </p>
    <p className="text-xs mt-1 text-destructive/80">
      💡 Tip: Consider reducing system size or using high-efficiency panels.
    </p>
  </motion.div>
)}

                  {result ? (
                    <motion.div
                      key="results"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-4"
                    >
                      {/* Main Result Card */}
                      <div className="bg-solar-slate rounded-2xl p-6 md:p-8 text-primary-foreground">
                        <h3 className="text-sm font-medium text-primary-foreground/70 mb-2">
                          Recommended System Size
                        </h3>
                        <div className="flex items-end gap-2 mb-4">
                          <span className="font-display text-5xl font-bold text-solar-amber">
                            {result.solarCapacity}
                          </span>
                          <span className="text-2xl font-medium pb-1">kW</span>
                        </div>
                        <p className="text-primary-foreground/70 text-sm">
                          Based on your roof area and energy consumption in {city}
                        </p>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="bg-card rounded-xl p-5 border border-border shadow-md"
                        >
                          <IndianRupee className="w-8 h-8 text-primary mb-3" />
                          <p className="text-sm text-muted-foreground mb-1">Installation Cost</p>
                          <p className="font-display text-2xl font-bold">
                            ₹{result.installationCost.toLocaleString()}
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-card rounded-xl p-5 border border-border shadow-md"
                        >
                          <TrendingUp className="w-8 h-8 text-primary mb-3" />
                          <p className="text-sm text-muted-foreground mb-1">Yearly Savings</p>
                          <p className="font-display text-2xl font-bold text-primary">
                            ₹{result.yearlySavings.toLocaleString()}
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-card rounded-xl p-5 border border-border shadow-md"
                        >
                          <Calendar className="w-8 h-8 text-secondary mb-3" />
                          <p className="text-sm text-muted-foreground mb-1">ROI Period</p>
                          <p className="font-display text-2xl font-bold">
                            {result.roiYears} Years
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="bg-card rounded-xl p-5 border border-border shadow-md"
                        >
                          <Zap className="w-8 h-8 text-secondary mb-3" />
                          <p className="text-sm text-muted-foreground mb-1">CO₂ Saved/Year</p>
                          <p className="font-display text-2xl font-bold">
                            {result.co2Saved} Tonnes
                          </p>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-primary/10 rounded-xl p-4 text-center"
                      >
                        <p className="text-sm text-primary font-medium">
                          💡 You could save up to ₹{(result.yearlySavings * 25).toLocaleString()} over 25 years!
                        </p>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex items-center justify-center bg-muted/30 rounded-2xl border-2 border-dashed border-border p-8"
                    >
                      <div className="text-center">
                        <Calculator className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
                        <h3 className="font-display text-xl font-semibold text-muted-foreground mb-2">
                          Your Results Will Appear Here
                        </h3>
                        <p className="text-muted-foreground">
                          Fill in the form and click calculate to see your personalized solar estimate
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Estimator;
