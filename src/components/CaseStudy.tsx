export function CaseStudy() {
  return (
    <div className="flex flex-col text-[13px] text-zinc-300">
      <div className="mb-6 pb-6 border-b border-zinc-800">
        <h3 className="text-zinc-400 font-semibold mb-2 text-xs tracking-widest uppercase">Target Sample</h3>
        <p className="text-xl font-medium text-white leading-snug">"Built to Benefit Everyone: Our Plan"</p>
        <p className="text-zinc-500 mt-1">Date: 2026年6月8日 | Type: Mission Restatement</p>
      </div>

      <div className="space-y-5">
        <div>
          <h4 className="text-white font-medium mb-1.5 flex gap-2">
            <span className="text-blue-500">Q1.</span> 核心主张是什么？
          </h4>
          <p className="leading-relaxed pl-6">"AI is the next great technology revolution, comparable to electrification... available to everyone." 从能力(capability)转向获取(access)。</p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-1.5 flex gap-2">
            <span className="text-blue-500">Q2.</span> 它服务的是哪个受众？
          </h4>
          <ul className="list-none pl-6 space-y-1">
            <li><span className="text-zinc-400">政策制定者：</span> "benefit everyone" 是政治安全的避风港。</li>
            <li><span className="text-zinc-400">投资者：</span> "平台型公司"估值逻辑远超实验室。</li>
            <li><span className="text-zinc-400">企业客户：</span> "作为基础设施"降低了采购风险。</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-1.5 flex gap-2">
            <span className="text-blue-500">Q3.</span> 表达是否一致？
          </h4>
          <p className="leading-relaxed pl-6">高度一致。Altman X首发 → 博客长文 → Oracle合作公告 → 新加坡Lab公告。构成一个"全球AI平台"的完整叙事序列，多渠道调度极佳。</p>
        </div>

        <div>
           <h4 className="text-white font-medium mb-1.5 flex gap-2">
            <span className="text-blue-500">Q4.</span> AI 系统最容易抽取哪些段落？
          </h4>
          <p className="leading-relaxed pl-6">电气化类比是一个极强的 media hook。"Built to benefit everyone" 可直接摘引。广告规则采用列表式呈现，堪称标准的 AI-extractable 结构。</p>
        </div>

         <div className="bg-zinc-800/50 p-3 rounded-xl mt-4">
           <h4 className="text-white font-medium mb-1.5 flex gap-2">
            <span className="text-red-400">!</span> 潜在张力与反噬
          </h4>
          <p className="leading-relaxed pl-6">与 GPT-4o 下线、付费墙加高形成明显张力。社区反讽 "built to benefit everyone... who pays $200/month"。叙事承诺与体验落差会导致严重的信任侵蚀。</p>
        </div>
      </div>
    </div>
  );
}
