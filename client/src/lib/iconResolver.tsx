import React from "react";
import {
  Zap, Users, Search, Globe, BarChart, MessageCircle, Mail, Layout, Video,
  ShoppingCart, Activity, Cpu, GraduationCap, Coffee, ShoppingBag, Home, Tag,
  Banknote, Sprout, Star, Briefcase, TrendingUp, Target, Shield, Award,
  PenTool, FileText, Settings, Heart, Layers, Gauge, Workflow, BrainCircuit,
  Lightbulb, Eye, Palette, Rocket, Share2, Database, Megaphone, CheckCircle,
} from "lucide-react";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  zap: Zap,
  users: Users,
  search: Search,
  globe: Globe,
  "bar-chart": BarChart,
  "message-circle": MessageCircle,
  mail: Mail,
  layout: Layout,
  video: Video,
  "shopping-cart": ShoppingCart,
  activity: Activity,
  cpu: Cpu,
  "graduation-cap": GraduationCap,
  coffee: Coffee,
  "shopping-bag": ShoppingBag,
  home: Home,
  tag: Tag,
  banknote: Banknote,
  sprout: Sprout,
  briefcase: Briefcase,
  "trending-up": TrendingUp,
  target: Target,
  shield: Shield,
  award: Award,
  "pen-tool": PenTool,
  "file-text": FileText,
  settings: Settings,
  heart: Heart,
  layers: Layers,
  gauge: Gauge,
  workflow: Workflow,
  "brain-circuit": BrainCircuit,
  lightbulb: Lightbulb,
  eye: Eye,
  palette: Palette,
  rocket: Rocket,
  share2: Share2,
  database: Database,
  megaphone: Megaphone,
  "check-circle": CheckCircle,
};

export function getIcon(name: string, className?: string): React.ReactNode {
  const IconComponent = iconMap[name] || Star;
  return <IconComponent className={className || "h-6 w-6"} />;
}

export function getIconComponent(name: string): React.FC<{ className?: string }> {
  return iconMap[name] || Star;
}

export const iconOptions = Object.keys(iconMap);
