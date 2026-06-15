function Judgment({ num, title, desc, highlight }: { num: string, title: string, desc: string, highlight?: string }) {
  return (
    <div className="flex gap-4 mb-8 last:mb-0 group">
      <div className="text-3xl font-light text-zinc-200 font-mono tracking-tighter group-hover:text-zinc-900 transition-colors duration-500 shrink-0 select-none">
        {num}
      </div>
      <div className="mt-1.5">
        <h3 className="text-[15px] font-semibold text-zinc-900 leading-snug mb-2">{title}</h3>
        {highlight && (
          <div className="inline-block px-2.5 py-1 bg-zinc-100 rounded-md text-[13px] font-medium text-zinc-700 mb-2">
            {highlight}
          </div>
        )}
        <p className="text-[13px] leading-relaxed text-zinc-500">{desc}</p>
      </div>
    </div>
  );
}

export function ExecSummary() {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-10 shrink-0">
        <h3 className="text-[13px] font-semibold tracking-widest text-zinc-400 uppercase mb-4">The Shift</h3>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-4">
          从"模型能力竞争"到<br />
          <span className="text-blue-600">"可引用叙事竞争"</span>
        </h1>
        <p className="text-sm text-zinc-500 leading-relaxed border-l-2 border-zinc-200 pl-4 py-1">
          这意味着：你在互联网上留下的每一段文字，都在接受 AI 的"是否值得被引用"评估。
        </p>
      </div>

      <div className="flex-1">
        <Judgment 
          num="01" 
          title="结构性转变：谁的叙事更容易被引用" 
          highlight="LinkedIn 成为 LLM 第二大引用源 (11.03%)"
          desc="Semrush 对 89,000 条被 ChatGPT、Google AI Mode 和 Perplexity 引用的 LinkedIn URL 分析表明，被引用的内容有 54-64% 是'知识分享与实用建议型'—不是产品或融资新闻，而是回答决策者真实问题的结构化内容。" 
        />
        <Judgment 
          num="02" 
          title="叙事即战略武器：OpenAI vs Anthropic" 
          highlight="你选择讲什么故事，决定了你面对什么风险"
          desc="OpenAI 叙事从技术领先转向'普惠型平台'(类比电气化革命)；Anthropic 的 safety-first 叙事遭遇政治反噬，其 Mythos 模型被商务部强制下架，Yann LeCun 指责这是'自食其果'。" 
        />
        <Judgment 
          num="03" 
          title="系统性缺位：中国 AI 品牌的核心短板" 
          desc="不是模型能力，是'citable content'建设缺失。阿里 Qwen 新加坡发布会是国内传播最完整的一次，但 YouTube 仅 6 万观看、创始人国际能见度极低。对比 Sam Altman 的推文，差距在于叙事基础设施。" 
        />
        <Judgment 
          num="04" 
          title="PR 最大范式转移：Generative Engine Optimization" 
          highlight="Earned media 占 AI 引用的 84%"
          desc="从'争夺报道'转向'成为被引用的答案'。Muck Rack 数据显示付费内容引用仅 0.3%。GEO 正在从 SEO 阵营中分离并成为独立的方法论。" 
        />
        <Judgment 
          num="05" 
          title="最具杠杆效应变量：创始人叙事 (Founder-led)" 
          desc="OpenAI 靠 Altman、Anthropic 靠 Amodei、xAI 靠 Musk、Meta 靠 Zuckerberg。中国 AI 公司在国际层面缺乏等量级的话语存在，这一结构性盲区无法靠增加机构发布频率弥补。" 
        />
      </div>
    </div>
  );
}
