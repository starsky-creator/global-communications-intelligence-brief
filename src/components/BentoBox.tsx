import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function BentoBox({
  title,
  icon,
  children,
  className = '',
  delay = 0,
  dark = false,
}: {
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  delay?: number;
  dark?: boolean;
}) {
  const baseClass = dark 
    ? 'bg-zinc-900 text-white border-zinc-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)]' 
    : 'bg-white text-zinc-900 border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.02)]';
  const titleClass = dark ? 'text-zinc-100' : 'text-zinc-900';
  const iconClass = dark ? 'text-zinc-500' : 'text-zinc-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={`flex flex-col relative overflow-hidden h-full rounded-[28px] p-6 lg:p-8 border ${baseClass} ${className}`}
    >
      <div className="flex items-center gap-3 mb-5 shrink-0">
        {icon && <div className={iconClass}>{icon}</div>}
        <h2 className={`text-[19px] font-semibold tracking-tight ${titleClass}`}>{title}</h2>
      </div>
      <div className="overflow-y-auto hide-scrollbar flex-1 -mr-4 pr-4 pb-2 content-container">
        {children}
      </div>
    </motion.div>
  );
}
