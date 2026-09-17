import type { LucideIcon } from 'lucide-react'

import {
  AlertCircleIcon,
  BookOpenIcon,
  BoxesIcon,
  Code2Icon,
  EyeIcon,
  FolderTreeIcon,
  GitBranchIcon,
  LayersIcon,
  NetworkIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrendingUpIcon,
  WorkflowIcon
} from 'lucide-react'

export const SECTION_ICONS: Record<string, LucideIcon> = {
  preface: BookOpenIcon,
  traction: TrendingUpIcon,
  'product-preview': EyeIcon,
  'the-problem': AlertCircleIcon,
  'how-trust-works': ShieldCheckIcon,
  features: SparklesIcon,
  architecture: BoxesIcon,
  'tech-stack': Code2Icon,
  'open-source-links': GitBranchIcon,
  // nested-set-org-chart
  'nested-set-model': NetworkIcon,
  'folder-structure': FolderTreeIcon,
  'under-the-hood': WorkflowIcon,
  // fin-qdrant-rag
  'multi-agent-orchestration': NetworkIcon,
  'hybrid-memory': LayersIcon
}

export const DEFAULT_SECTION_ICON = LayersIcon
