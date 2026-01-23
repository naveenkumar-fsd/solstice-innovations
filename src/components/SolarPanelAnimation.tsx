import { motion } from "framer-motion";
import { Sun } from "lucide-react";

const SolarPanelAnimation = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden pointer-events-none">
      {/* Sun */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: 360 
        }}
        transition={{ 
          scale: { duration: 3, repeat: Infinity },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        className="absolute top-10 right-10 md:right-20 -z-10 pointer-events-none"
      >
        <div className="relative">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-solar-amber animate-pulse-glow" />
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-solar-amber blur-xl"
          />
        </div>
      </motion.div>

      {/* Sun rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          className="absolute top-16 right-16 md:top-20 md:right-28 w-32 h-0.5 bg-gradient-to-r from-solar-amber to-transparent origin-left -z-10 pointer-events-none"
          style={{ transform: `rotate(${i * 45}deg)` }}
        />
      ))}

      {/* Solar Panel Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%]"
      >
        <div className="relative perspective-1000">
          <motion.div
            animate={{ rotateX: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="grid grid-cols-6 gap-1 p-4 bg-solar-slate rounded-lg shadow-2xl transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            {[...Array(24)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.03 }}
                className="aspect-square rounded-sm bg-gradient-to-br from-solar-slate-light to-solar-green-dark relative overflow-hidden"
              >
                <motion.div
                  animate={{ 
                    x: ["-100%", "200%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-solar-amber/30 to-transparent"
                />
                <div className="absolute inset-[2px] border border-solar-green-light/20 rounded-sm" />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Panel Stand */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-solar-slate to-solar-slate-light rounded-b-lg" />
        </div>
      </motion.div>

      {/* Energy Flow Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-20, 100]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: i * 0.4,
            ease: "linear"
          }}
          className="absolute top-32 right-24 md:right-32 w-1 h-8 rounded-full bg-gradient-to-b from-solar-amber to-solar-green -z-10 pointer-events-none"
          style={{ left: `${40 + i * 5}%` }}
        />
      ))}
    </div>
  );
};

export default SolarPanelAnimation;
