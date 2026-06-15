/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Header } from './components/Header';
import { BentoBox } from './components/BentoBox';
import { ExecSummary } from './components/ExecSummary';
import { Signals } from './components/Signals';
import { Risks } from './components/Risks';
import { Brands } from './components/Brands';
import { CaseStudy } from './components/CaseStudy';
import { FileText, Radio, AlertOctagon, Eye, Lightbulb } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen lg:h-screen w-full bg-[#fbfbfd] text-zinc-900 font-sans p-4 lg:p-6 lg:pb-8 flex flex-col lg:overflow-hidden selection:bg-blue-200">
      <Header />
      
      <main className="flex-1 min-h-0 w-full max-w-[1800px] mx-auto mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-6 lg:h-full lg:min-h-0">
          
          {/* Column 1: Exec Summary (Span 2 rows) */}
          <div className="col-span-1 lg:row-span-2 flex flex-col lg:h-full lg:min-h-0">
            <BentoBox title="执行摘要" icon={<FileText className="w-5 h-5" />} delay={0.0}>
              <ExecSummary />
            </BentoBox>
          </div>

          {/* Column 2: Signals & Risks */}
          <div className="col-span-1 lg:row-span-2 flex flex-col gap-4 lg:gap-6 lg:h-full lg:min-h-0">
            <div className="flex-1 lg:min-h-0">
              <BentoBox title="本周传播信号" icon={<Radio className="w-5 h-5" />} delay={0.1}>
                <Signals />
              </BentoBox>
            </div>
            <div className="flex-[0.8] lg:min-h-0">
              <BentoBox title="风险与误区" icon={<AlertOctagon className="w-5 h-5" />} delay={0.2}>
                <Risks />
              </BentoBox>
            </div>
          </div>

          {/* Column 3: Case Study & Brands */}
          <div className="col-span-1 lg:row-span-2 flex flex-col gap-4 lg:gap-6 lg:h-full lg:min-h-0">
            <div className="flex-[0.8] lg:min-h-0">
              <BentoBox title="案例拆解: OpenAI" icon={<Lightbulb className="w-5 h-5" />} dark delay={0.3}>
                <CaseStudy />
              </BentoBox>
            </div>
            <div className="flex-1 lg:min-h-0">
              <BentoBox title="品牌叙事观察" icon={<Eye className="w-5 h-5" />} delay={0.4}>
                <Brands />
              </BentoBox>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

