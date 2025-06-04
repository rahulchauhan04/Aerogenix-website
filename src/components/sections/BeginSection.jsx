import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPlay,
  FaCode,
  FaUsers,
} from 'react-icons/fa';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import FloatingParticles from '../ui/FloatingParticles';

const BeginSection = () => {
  return (
    <div className='py-16 px-8 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 relative overflow-hidden text-white'>
    <section className="text-white relative overflow-hidden">
      <FloatingParticles count={150} />

      <AnimatedSection className="text-center">
        <h3 className="text-4xl font-bold mb-12">Ready to Begin?</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <FaPlay className="text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Book a Demo</h4>
            <p className="opacity-90 mb-12">
              Let's explore your use case, architecture, and outcomes.
            </p>
            <Button
              primary
              className="bg-white text-blue-600 hover:bg-gray-100 w-full text-center flex items-center justify-center"
              icon={<FaPlay />}
            >
              Book a Demo
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <FaCode className="text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Start Designing</h4>
            <p className="opacity-90 mb-6">
              Launch AeroGenix Platform and begin creating your first agent
              today.
            </p>
            <Button
            primary
              className="border-white text-white hover:bg-white/10 w-full text-center flex items-center justify-center"
              icon={<FaCode />}
            >
              Start Designing
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <FaUsers className="text-4xl mx-auto mb-4" />
            <h4 className="text-xl font-semibold mb-4">Talk to Sales</h4>
            <p className="opacity-90 mb-6">
              Co-create an agent application or deployment model that fits your
              business.
            </p>
            <Button
            primary
              className="border-white text-white hover:bg-white/10 w-full text-center flex items-center justify-center"
              icon={<FaUsers />}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
        <motion.div
          className="max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <p className="text-2xl font-semibold">
            With AeroGenix, you don't just keep up with AI — You build the
            intelligence that leads.
          </p>
        </motion.div>
      </AnimatedSection>
    </section></div>
  );
};

export default BeginSection;
