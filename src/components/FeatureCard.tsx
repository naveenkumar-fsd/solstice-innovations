import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon Container */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 0.5 }}
        className="relative w-14 h-14 rounded-xl solar-gradient flex items-center justify-center mb-5 group-hover:shadow-lg transition-shadow"
      >
        <Icon className="w-7 h-7 text-primary-foreground" />
      </motion.div>

      <h3 className="relative font-display font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="relative text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary origin-left"
      />
    </motion.div>
  );
};

export default FeatureCard;
