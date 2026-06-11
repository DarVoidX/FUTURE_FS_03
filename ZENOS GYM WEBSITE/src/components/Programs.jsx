import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Flame, BicepsFlexed, UserCircle, Activity, Trophy } from 'lucide-react';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      title: "Strength Training",
      icon: <Dumbbell size={40} className="program-icon" />,
      desc: "Build functional strength with compound movements and heavy lifting."
    },
    {
      title: "Weight Loss",
      icon: <Flame size={40} className="program-icon" />,
      desc: "High-intensity fat burning workouts designed for rapid results."
    },
    {
      title: "Muscle Building",
      icon: <BicepsFlexed size={40} className="program-icon" />,
      desc: "Hypertrophy-focused training to sculpt and define your physique."
    },
    {
      title: "Personal Training",
      icon: <UserCircle size={40} className="program-icon" />,
      desc: "1-on-1 coaching tailored specifically to your body and goals."
    },
    {
      title: "Functional Fitness",
      icon: <Activity size={40} className="program-icon" />,
      desc: "Improve mobility, agility, and real-world physical performance."
    },
    {
      title: "Athlete Performance",
      icon: <Trophy size={40} className="program-icon" />,
      desc: "Advanced training methodologies for sports-specific excellence."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="programs" className="programs-section bg-jet">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            ELITE <span className="text-red">PROGRAMS</span>
          </h2>
          <p className="section-subtitle">
            Choose from our specialized training programs designed to push your limits and deliver guaranteed results.
          </p>
        </motion.div>

        <motion.div 
          className="programs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {programs.map((program, idx) => (
            <motion.div key={idx} className="program-card glass" variants={itemVariants}>
              <div className="icon-wrapper">
                {program.icon}
              </div>
              <h3>{program.title}</h3>
              <p>{program.desc}</p>
              <a href="#join" className="program-link">Learn More &rarr;</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
