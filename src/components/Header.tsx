import { motion } from 'motion/react';
import { Sparkle } from 'lucide-react';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row md:items-center justify-between shrink-0 gap-4 px-2"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center">
          <Sparkle className="w-4 h-4 fill-white" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight text-zinc-900 leading-none">Starsky</h1>
          <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest mt-1">Global Communications</p>
        </div>
      </div>
      
      <div className="flex flex-col md:items-end">
        <h2 className="text-sm font-semibold text-zinc-900">AI 品牌全球传播简报 Vol.01</h2>
        <div className="flex items-center gap-2 text-[12px] text-zinc-500 mt-0.5">
          <span>2026.06.15</span>
          <span className="w-1 h-1 rounded-full bg-zinc-300 border"></span>
          <span>Coverage: 05月中旬 - 06月中旬</span>
        </div>
      </div>
    </motion.header>
  );
}
