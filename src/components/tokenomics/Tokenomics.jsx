import React from 'react';
import { motion } from 'framer-motion';
import './Tokenomics.css';

const Tokenomics = () => {
  const tokenomicsData = [
    { title: "Total Supply", value: "1,000,000,000" },
    { title: "Circulating Supply", value: "500,000" },
    { title: "Tax", value: "NO TAX ON BUYING AND SELLING" },
    { title: "Unclaimed", value: "200,000" },
  ];

  return (
    <section className="tokenomics-section">
      <h2 className="tokenomics-heading">Tokenomics</h2>
      <div className="tokenomics-boxes">
        {tokenomicsData.map((item, index) => (
          <motion.div
            className="tokenomics-box"
            key={index}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.3,
              duration: 0.5,
              type: 'spring',
              stiffness: 50,
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tokenomics;
