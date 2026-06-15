import { CheckCircle2, AlertCircle } from 'lucide-react';

function BrandCard({ name, positioning, audience, citeAbility, pros, cons }: any) {
  return (
    <div className="border border-zinc-100 rounded-2xl p-5 mb-4 last:mb-0 hover:shadow-sm transition-shadow">
      <div className="flex items-center justify-between mb-3 border-b border-zinc-50 pb-3">
        <h3 className="font-bold text-lg text-zinc-900">{name}</h3>
        <div className="text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded-full bg-zinc-100 text-zinc-600">
          Citeability: {citeAbility}
        </div>
      </div>
      
      <div className="space-y-3 text-[13px]">
        <div>
          <span className="text-zinc-500 font-medium block mb-0.5 text-[11px] uppercase tracking-wider">Narrative 定位</span>
          <p className="text-zinc-900 font-medium leading-snug">{positioning}</p>
        </div>
        
        <div>
          <span className="text-zinc-500 font-medium block mb-0.5 text-[11px] uppercase tracking-wider">目标受众</span>
          <p className="text-zinc-600 leading-snug">{audience}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="bg-green-50/50 rounded-xl py-2 px-3">
             <div className="flex items-center gap-1.5 mb-1 text-green-700">
               <CheckCircle2 className="w-3.5 h-3.5" />
               <span className="font-semibold text-xs">传播优势</span>
             </div>
             <p className="text-zinc-600 text-xs leading-relaxed">{pros}</p>
          </div>
          <div className="bg-red-50/50 rounded-xl py-2 px-3">
             <div className="flex items-center gap-1.5 mb-1 text-red-700">
               <AlertCircle className="w-3.5 h-3.5" />
               <span className="font-semibold text-xs">潜在风险</span>
             </div>
             <p className="text-zinc-600 text-xs leading-relaxed">{cons}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Brands() {
  return (
    <div className="flex flex-col">
      <BrandCard 
        name="OpenAI"
        citeAbility="High"
        positioning="AI = 新电力，人人可用。从技术前沿转向普惠型平台公司。"
        audience="公众 (AI for everyone)、开发者、企业客户、政策制定者"
        pros="全球最高品牌 SOV；Altman 个人 IP 极强；内容结构高度适配 AI 抽提；多渠道协同。"
        cons="社区信任危机；当 '惠及全人类' 与商业变现现实冲突时，叙事信誉极易严重受损。"
      />
      <BrandCard 
        name="Anthropic"
        citeAbility="Low-Medium"
        positioning="Responsible stewardship of powerful AI。从竞争优势变为监管弱点。"
        audience="政策制定者、企业 CTO/CISO、AI 安全社区、主流媒体"
        pros="政策和安全议题的极高信誉；80% 代码由 Claude 编写是强大的技术故事。"
        cons="学术长文写作不易被 AI SEO 抓取；安全叙事被监管武器化 (回旋镖效应)。"
      />
      <BrandCard 
        name="Google / Gemini"
        citeAbility="Highest"
        positioning="AI as platform infrastructure。嵌入搜索、Android 等生态全系。"
        audience="消费者、企业 (Cloud AI)、开发者、科研机构"
        pros="全渠道矩阵最完整；文本包含 AI 总结、结构化极佳；生态整合让系统故事圆融。"
        cons="大而全导致焦点模糊；消费者侧感知差异化偏弱；平台收税叙事引发开发者警惕。"
      />
      <BrandCard 
        name="Alibaba Cloud (Qwen)"
        citeAbility="Medium"
        positioning="AI-Native Infrastructure Provider。避开 C 端，主打底座。"
        audience="海外开发者、东南中东企业、研究社区"
        pros="中国公司中出海传播系统性最强；以 Hugging Face 下载量作坚实技术论据。"
        cons="创始人国际能见度近乎为零；缺乏等量级的 '人物锚点'；内容呈现属机构风，缺乏叙事深度。"
      />
    </div>
  );
}
