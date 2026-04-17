// Agent定义
export interface AgentDefinition {
  id: string;
  name: string;
  emoji: string;
  role: string;
  description: string;
  phase1Goals: string[];
  phase2Goals: string[];
}

// 项目状态
export type ProjectStatus = 'draft' | 'phase1_running' | 'phase1_completed' | 'phase2_running' | 'completed';

// 项目定义
export interface Project {
  id: string;
  name: string;
  ipTheme: string;
  targetAudience: string;
  channels: string[];
  passScore: number;
  targetScore: number;
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
  phase1Score?: number;
  currentCycleDay?: number;
}

// 产出物定义
export interface OutputItem {
  id: string;
  icon: string;
  name: string;
  type: string;
  description: string;
  category: string;
  phase: 1 | 2;
  projectId: string;
  createdAt: string;
}

// Agent执行状态
export type AgentStatus = 'waiting' | 'running' | 'completed';

// Agent执行过程
export interface AgentProcessStep {
  action?: string;
  data?: string;
}

// Agent运行状态
export interface AgentRunState {
  agentId: string;
  status: AgentStatus;
  processSteps: AgentProcessStep[];
  output: string;
  outputs: string[];
}

// 渠道选项
export const CHANNEL_OPTIONS = ['抖音', '小红书', 'B站', '视频号', '微博', '微信群'];

// 6个Agent定义
export const AGENTS: AgentDefinition[] = [
  {
    id: 'insight',
    name: '市场洞察',
    emoji: '🔍',
    role: '探路者',
    description: '发现热点趋势，分析用户画像，提出IP方向建议',
    phase1Goals: ['发现热点趋势', '提出IP方向建议', '轻量快速判断'],
    phase2Goals: ['深度数据分析', '用户反馈洞察', '迭代优化方向'],
  },
  {
    id: 'planning',
    name: '策划设计',
    emoji: '📝',
    role: '编剧',
    description: '制定内容类型、渠道策略、目标规划',
    phase1Goals: ['轻量化内容类型', '试水渠道选择', '试水目标设定'],
    phase2Goals: ['IP全案设计', '全渠道内容矩阵', '阶段性目标规划'],
  },
  {
    id: 'production',
    name: '内容生产',
    emoji: '🎬',
    role: '导演',
    description: '内容制作、多格式产出',
    phase1Goals: ['快速产出', '图片/表情包/KV', '短视频(10-15s)'],
    phase2Goals: ['内容矩阵', '多格式适配', '线上+线下物料'],
  },
  {
    id: 'review',
    name: '内容审核',
    emoji: '✅',
    role: '质检员',
    description: '质量检查、合规审核、品牌调性',
    phase1Goals: ['质量检查', '合规审核', '品牌调性检查'],
    phase2Goals: ['IP一致性检查', '质量审核', '品牌调性审核'],
  },
  {
    id: 'publish',
    name: '投放执行',
    emoji: '📢',
    role: '运营',
    description: '渠道投放、线上线下执行',
    phase1Goals: ['线上主渠道试水', '小规模测试', '快速获取反馈'],
    phase2Goals: ['全渠道精细化投放', '线上+线下联动', '数据驱动优化'],
  },
  {
    id: 'analysis',
    name: '数据分析',
    emoji: '📊',
    role: '分析师',
    description: '效果评估、优化建议、目标判断',
    phase1Goals: ['综合评分', '达标判断', '重洞察方向建议'],
    phase2Goals: ['效果深度评估', '优化建议', '新目标设定'],
  },
];