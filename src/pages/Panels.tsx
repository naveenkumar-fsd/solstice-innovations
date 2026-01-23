import { motion } from "framer-motion";
import { Sun, Zap, Clock, DollarSign, Home, Factory, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const panelTypes = [
  {
    name: "Monocrystalline",
    efficiency: "20-22%",
    lifespan: "25-30 years",
    costLevel: "High",
    bestFor: "Residential rooftops with limited space",
    icon: Sun,
    color: "from-solar-green to-solar-green-dark",
    features: [
      "Highest efficiency available",
      "Best for limited roof space",
      "Sleek black appearance",
      "Premium performance"
    ]
  },
  {
    name: "Polycrystalline",
    efficiency: "15-17%",
    lifespan: "25 years",
    costLevel: "Medium",
    bestFor: "Budget-conscious homeowners with ample roof space",
    icon: Zap,
    color: "from-blue-500 to-blue-700",
    features: [
      "Great value for money",
      "Proven technology",
      "Blue speckled look",
      "Good all-around choice"
    ]
  },
  {
    name: "Thin Film",
    efficiency: "10-12%",
    lifespan: "20 years",
    costLevel: "Low",
    bestFor: "Large commercial installations or curved surfaces",
    icon: Factory,
    color: "from-purple-500 to-purple-700",
    features: [
      "Flexible installation",
      "Lightweight design",
      "Works in partial shade",
      "Lower upfront cost"
    ]
  },
];

const getCostBadgeColor = (cost: string) => {
  switch (cost) {
    case "High": return "bg-solar-amber/20 text-solar-amber border-solar-amber/30";
    case "Medium": return "bg-primary/20 text-primary border-primary/30";
    case "Low": return "bg-accent/20 text-accent border-accent/30";
    default: return "bg-muted text-muted-foreground";
  }
};

const Panels = () => {
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
              <Sun className="w-4 h-4" />
              Panel Technologies
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Choose the Right <span className="text-gradient">Solar Panel</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare different solar panel technologies to find the perfect match for your needs
            </p>
          </motion.div>

          {/* Panel Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {panelTypes.map((panel, index) => (
              <motion.div
                key={panel.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Header with gradient */}
                <div className={`min-h-[8rem] flex items-end bg-gradient-to-br ${panel.color} relative overflow-hidden px-6 pb-4`}>

                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-8 -top-8 opacity-20 pointer-events-none -z-10"
                  >
                    <panel.icon className="w-32 h-32 text-white" />
                  </motion.div>
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl font-bold text-white relative z-10">
                      {panel.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Cost Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getCostBadgeColor(panel.costLevel)}`}>
                      {panel.costLevel} Cost
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Efficiency</p>
                        <p className="font-semibold">{panel.efficiency}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Lifespan</p>
                        <p className="font-semibold">{panel.lifespan}</p>
                      </div>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="flex items-start gap-2 mb-6 p-3 bg-muted/50 rounded-lg">
                    <Home className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Best For</p>
                      <p className="text-sm">{panel.bestFor}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {panel.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Compare Panels
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  Not Sure Which Panel is Right for You?
                </h3>
                <p className="text-muted-foreground">
                  Our AI-powered estimator can recommend the perfect panel type based on your roof size, 
                  energy needs, and budget. Get a personalized recommendation in minutes.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 flex-shrink-0">
                Get Recommendation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Panels;
