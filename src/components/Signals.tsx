import { Activity, Search, AlertTriangle, Users, MessageSquare } from 'lucide-react';
import { ReactNode } from 'react';

function SignalItem({ title, icon, phenomenon, meaning }: { title: string, icon: ReactNode, phenomenon: string, meaning: string }) {
  return (
    <div className="bg-zinc-50 rounded-2xl p-4 sm:p-5 mb-3 last:mb-0 border border-zinc-100/50">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 bg-white rounded-xl shadow-sm tracking-tight text-blue-600 shrink-0">
          {icon}
        </div>
        <h3 className="font-medium text-[14px] text-zinc-900 leading-snug pt-1">{title}</h3>
      </div>
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider shrink-0">现象</span>
          <p className="text-[13px] text-zinc-600 leading-relaxed">{phenomenon}</p>
        </div>
        <div className="flex gap-2 items-baseline">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider shrink-0 w-[24px]">意味</span>
          <p className="text-[13px] text-zinc-800 font-medium leading-relaxed bg-blue-50/50 py-1 px-2 rounded-md">{meaning}</p>
        </div>
      </div>
    </div>
  );
}

export function Signals() {
  return (
    <div className="flex flex-col">
      <SignalItem
        title="AI 搜索正在重新定义“被看见”"
        icon={<Activity className="w-4 h-4" />}
        phenomenon="Semrush数据显示，被 AI 引用的内容 95% 是原创帖，reshare 几乎不被引用；中位被引用帖仅有 15-25 个 reactions。发布频率和专业深度比总粉丝量更重要。"
        meaning="品牌影响力计量单位从 impressions 转向 citations。20 个点赞的引用帖商业价值远超 2000 赞的忽略帖。"
      />
      <SignalItem
        title="平台引用行为差异分化内容策略"
        icon={<Search className="w-4 h-4" />}
        phenomenon="ChatGPT 96% 引用偏好 Wiki/Forbes；Gemini 82% 偏好 Reddit；Claude 偏好 PubMed Central；Perplexity 31% 来自社交媒体。"
        meaning="不存在一套打通所有的方案。必须理解不同 AI 系统的引用偏好，“在哪里发”和“怎么写”比“发什么”更重要。"
      />
      <SignalItem
        title="Safety 叙事从品牌资产变监管武器"
        icon={<AlertTriangle className="w-4 h-4" />}
        phenomenon="Anthropic 推动的安全叙事被美国商务部反向利用，援引其自身警告发出了出口控制指令。"
        meaning="叙事不是单向广播，会被不同利益相关方重新解读调用。这是高度政治化领域中的“叙事回旋镖效应”。"
      />
      <SignalItem
        title="Founder-led 挤压 Brand-led 空间"
        icon={<Users className="w-4 h-4" />}
        phenomenon="LinkedIn 个人号触达是企业号 5.6-10 倍。Sam Altman 帖文数千互动，官方号仅为其零头。"
        meaning="平台算法系统性奖励“人”而非“机构”。没有高辨识度技术 IP 的 AI 品牌，正在失去 organic share of voice。"
      />
      <SignalItem
        title="Reddit 的引用逻辑转向“唯一权威”"
        icon={<MessageSquare className="w-4 h-4" />}
        phenomenon="Reddit 整体 AI 引用 share 下降，但作为“sole cited source”的比例反而上升 31%。"
        meaning="LLM 正在学习意图级引用。需要真实经验时 Reddit 是唯一权威，品牌在技术社区必须存在真实讨论。"
      />
    </div>
  );
}
