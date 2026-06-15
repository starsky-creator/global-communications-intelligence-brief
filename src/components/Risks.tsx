import { AlertTriangle, Zap, UserX, FileWarning, RefreshCcw } from 'lucide-react';

function RiskItem({ num, title, icon, desc }: { num: string, title: string, icon: React.ReactNode, desc: string }) {
  return (
    <div className="flex gap-4 mb-5 last:mb-0">
      <div className="mt-0.5 shrink-0 bg-red-50 text-red-500 p-2 rounded-full h-fit">
        {icon}
      </div>
      <div>
        <h4 className="text-[14px] font-semibold text-zinc-900 mb-1 leading-snug">
          <span className="text-zinc-400 font-normal mr-2">误区 {num}:</span>
          {title}
        </h4>
        <p className="text-[13px] text-zinc-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function Risks() {
  return (
    <div className="flex flex-col pt-1">
      <RiskItem 
        num="01"
        icon={<Zap className="w-4 h-4" />}
        title="将“模型发布”等同于“品牌传播”"
        desc="脉冲式的发布在 AI 搜索引用中极为不利。持续的 narrative presence 远比单次爆发有效，LLM 偏好持续活跃的内容源（四周 5 条以上）。"
      />
      <RiskItem 
        num="02"
        icon={<FileWarning className="w-4 h-4" />}
        title="技术语言直接外放，缺少语境翻译"
        desc="“AIME 2025 得分 92.7%”对决策者无意义。需要将其嵌入决策上下文中，如“数学推理上超越了 GPT-5”，这更容易被复述和 AI 引用。"
      />
      <RiskItem 
        num="03"
        icon={<UserX className="w-4 h-4" />}
        title="创始人缺位视为“低调策略”"
        desc="缺少主动定义的叙事，就会被外部框架填补。中国品牌常被裹挟进极具偏见的竞争框架。个人号在引用和互动上远超企业号，缺位是放弃叙事主权。"
      />
      <RiskItem 
        num="04"
        icon={<AlertTriangle className="w-4 h-4" />}
        title="只为人类读者写作，忽略 AI 爬取"
        desc="新闻如果没有清晰的 H2/H3 和完备的 schema，即使被读到也不会被引用。引用权威数据源将提高被 LLM 索引的概率（GEO 技术）。"
      />
      <RiskItem 
        num="05"
        icon={<RefreshCcw className="w-4 h-4" />}
        title="无视叙事的“回旋镖效应”"
        desc="叙事一旦进入公共领域不再受控。Anthropic 强调的危险论变成了对付自己的武器。品牌在构建核心主张时必须进行 adversarial reading（敌意假定阅读）。"
      />
    </div>
  );
}
