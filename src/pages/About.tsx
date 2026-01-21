import { motion } from "framer-motion";
import { Target, Eye, Leaf, Award, Users, Lightbulb } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const timeline = [
  { year: "2018", title: "Founded", description: "Started with a vision to make solar accessible to every Indian home" },
  { year: "2019", title: "First 1000 Installations", description: "Reached our first major milestone in residential solar" },
  { year: "2020", title: "AI Integration", description: "Launched our AI-powered optimization platform" },
  { year: "2021", title: "Expanded Nationwide", description: "Operations expanded to 15+ major cities" },
  { year: "2022", title: "10,000+ Customers", description: "Celebrated helping 10,000 families go solar" },
  { year: "2023", title: "Industry Leader", description: "Recognized as India's most innovative solar company" },
];

const values = [
  {
    icon: Leaf,
    title: "Sustainability First",
    description: "Every decision we make prioritizes environmental impact and long-term sustainability.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries with AI and smart technology to maximize solar efficiency.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our success is measured by our customers' savings and satisfaction.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in installation quality and service delivery.",
  },
];

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Leaf className="w-4 h-4" />
              Our Story
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Powering India's <span className="text-gradient">Green Future</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to make clean, renewable solar energy accessible to every 
              Indian household, one rooftop at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl solar-gradient flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate India's transition to clean energy by providing intelligent, 
                affordable solar solutions that empower homeowners to take control of their 
                energy future while reducing their carbon footprint.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-solar-amber flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every rooftop is a power station, every home is energy 
                independent, and clean electricity is a right, not a privilege. 
                We envision 50 million solar-powered homes in India by 2030.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-xl p-6 text-center border border-border shadow-md"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small startup to India's leading AI-powered solar solutions company.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary md:-translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-card rounded-xl p-6 border border-border shadow-md inline-block"
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 solar-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: "10,000+", label: "Happy Customers" },
              { value: "15+", label: "Cities Covered" },
              { value: "50MW", label: "Capacity Installed" },
              { value: "25,000", label: "Tonnes CO₂ Saved" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-primary-foreground"
              >
                <p className="font-display text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
