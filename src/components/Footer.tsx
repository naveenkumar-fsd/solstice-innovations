import { Link } from "react-router-dom";
import { Sun, Facebook, Twitter, Instagram, Linkedin, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Contact", path: "/contact" },
      { name: "Careers", path: "#" },
    ],
    services: [
      { name: "Cost Estimator", path: "/estimator" },
      { name: "Panel Types", path: "/panels" },
      { name: "Compare Plans", path: "/compare" },
    ],
    support: [
      { name: "FAQs", path: "#" },
      { name: "Payment", path: "/payment" },
      { name: "Warranty", path: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-solar-slate text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full solar-gradient flex items-center justify-center">
                <Sun className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Solar<span className="text-solar-amber">AI</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Powering a sustainable future with AI-driven solar solutions. 
              Join thousands of homeowners saving money while saving the planet.
            </p>
            <div className="flex items-center gap-2 text-solar-amber">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">Carbon Neutral Certified</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-solar-amber transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-solar-amber transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-solar-amber transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 SolarAI. All rights reserved. Built for a greener tomorrow.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ y: -3 }}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-solar-amber hover:text-solar-slate transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
