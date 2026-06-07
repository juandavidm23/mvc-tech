import React from 'react';

const Marquee = () => {
  const items = [
    'React', 'Spring Boot', 'Solidity', 'Blockchain', 'Python', 'n8n',
    'WhatsApp API', 'Supabase', 'Docker', 'Web3j', 'PostgreSQL', 'InfluxDB'
  ];

  // We duplicate the items to create a seamless infinite loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="bg-brand-black py-5 overflow-hidden flex group">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="font-mono text-[13px] text-gray mx-6">
              {item}
            </span>
            <span className="text-brand-dark2">&middot;</span>
          </div>
        ))}
      </div>
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap absolute top-0" aria-hidden="true" style={{ display: 'none' }}>
        {/* We can achieve the loop just by having enough items and translating -50%. The wrapper structure is enough. */}
      </div>
    </div>
  );
};

export default Marquee;
