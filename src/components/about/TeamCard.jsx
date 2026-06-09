import React from 'react';
import Badge from '../ui/Badge';

const TeamCard = ({ initials, name, role, stack, quote }) => {
  return (
    <div className="bg-white border border-gray-light rounded-xl p-10 flex flex-col items-center text-center">
      {/* Avatar */}
      <div className="w-[80px] h-[80px] bg-surface rounded-full flex items-center justify-center mb-6">
        <span className="font-display font-extrabold text-[28px] text-graphite">{initials}</span>
      </div>

      {/* Info */}
      <h3 className="font-display font-extrabold text-[22px] text-graphite">{name}</h3>
      <p className="font-mono text-[13px] text-gray mt-1">{role}</p>

      {/* Separador */}
      <div className="w-full border-t border-surface my-5"></div>

      {/* Stack */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {stack.map((tech, index) => (
          <Badge key={index} text={tech} />
        ))}
      </div>

      {/* Quote */}
      <p className="font-body font-normal italic text-[15px] text-gray mt-auto">
        "{quote}"
      </p>
    </div>
  );
};

export default TeamCard;
