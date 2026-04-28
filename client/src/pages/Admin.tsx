import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  LayoutDashboard, Settings, Layers, Globe, Briefcase, FileText,
  Newspaper, Radio, Mail, LogOut, Plus, Pencil, Trash2, Save, X,
  Eye, EyeOff, BarChart3, Users, MessageSquare, CheckCircle2, AlertTriangle,
  Monitor, Phone, Share2, Upload, Home as HomeIcon,
} from "lucide-react";

function apiFetch(url: string, opts: RequestInit = {}) {
  return fetch(url, opts).then(r => {
    if (!r.ok) return r.text().then(t => { throw new Error(t); });
    return r.json();
  });
}

function authHeaders(token: string) {
  return { "Content-Type": "application/json", "x-admin-password": token };
}

// ── Field editors ────────────────────────────────────────────────────────────

function FormField({ label, value, onChange, placeholder, required, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; required?: boolean; type?: string;
}) {
  return (
    <div>
      <Label className="text-zinc-300 mb-1.5 block text-sm">
        {label}{required && <span className="text-brand-pink ml-1">*</span>}
      </Label>
      <Input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        required={required} className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500" />
    </div>
  );
}

function StringArrayField({ label, value, onChange }: {
  label: string; value: string[]; onChange: (v: string[]) => void;
}) {
  const [items, setItems] = useState<string[]>(value || []);
  useEffect(() => { setItems(value || []); }, [value]);
  const update = (next: string[]) => { setItems(next); onChange(next); };
  return (
    <div className="space-y-2">
      <Label className="text-zinc-300">{label}</Label>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <Input value={item} onChange={e => { const n = [...items]; n[i] = e.target.value; update(n); }}
            className="bg-zinc-800 border-zinc-700 text-white" />
          <Button type="button" variant="ghost" size="sm" className="text-red-400 hover:text-red-300 px-2"
            onClick={() => update(items.filter((_, j) => j !== i))}><Trash2 className="h-4 w-4" /></Button>
        </div>
      ))}
      <Button type="button" variant="outline" size="sm"
        className="border-zinc-600 text-zinc-300 hover:bg-zinc-800" onClick={() => update([...items, ""])}>
        <Plus className="h-3 w-3 mr-1" /> Add Item
      </Button>
    </div>
  );
}

function ObjectArrayField<T extends Record<string, string>>({ label, value, fields, onChange }: {
  label: string; value: T[];
  fields: { key: keyof T; label: string; textarea?: boolean }[];
  onChange: (v: T[]) => void;
}) {
  const [items, setItems] = useState<T[]>(value || []);
  useEffect(() => { setItems(value || []); }, [value]);
  const update = (next: T[]) => { setItems(next); onChange(next); };
  const addItem = () => {
    const blank = fields.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {} as T);
    update([...items, blank]);
  };
  return (
    <div className="space-y-3">
      <Label className="text-zinc-300">{label}</Label>
      {items.map((item, i) => (
        <div key={i} className="bg-zinc-800/60 border border-zinc-700 rounded-lg p-3 space-y-2">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-zinc-500 font-medium">#{i + 1}</span>
            <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
              onClick={() => update(items.filter((_, j) => j !== i))}><X className="h-3 w-3" /></Button>
          </div>
          {fields.map(f => (
            <div key={String(f.key)}>
              <Label className="text-xs text-zinc-400 mb-1 block">{f.label}</Label>
              {f.textarea ? (
                <Textarea value={String(item[f.key] || "")}
                  onChange={e => { const n = [...items]; n[i] = { ...n[i], [f.key]: e.target.value }; update(n); }}
                  className="bg-zinc-900 border-zinc-600 text-white text-sm min-h-[60px]" />
              ) : (
                <Input value={String(item[f.key] || "")}
                  onChange={e => { const n = [...items]; n[i] = { ...n[i], [f.key]: e.target.value }; update(n); }}
                  className="bg-zinc-900 border-zinc-600 text-white text-sm" />
              )}
            </div>
          ))}
        </div>
      ))}
      <Button type="button" variant="outline" size="sm"
        className="border-zinc-600 text-zinc-300 hover:bg-zinc-800" onClick={addItem}>
        <Plus className="h-3 w-3 mr-1" /> Add {label.replace(/s$/, "")}
      </Button>
    </div>
  );
}

// ── Login ────────────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      await apiFetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      localStorage.setItem("adminToken", password);
      onLogin(password);
    } catch {
      setError("Invalid password. Try MAI@Admin2025");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-pink to-brand-yellow flex items-center justify-center mx-auto mb-4">
            <Settings className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-heading font-black text-white">Admin Panel</h1>
          <p className="text-zinc-400 mt-2">MAI Digital Marketing</p>
        </div>
        <form onSubmit={submit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-5">
          <div>
            <Label className="text-zinc-300 mb-2 block">Admin Password</Label>
            <div className="relative">
              <Input type={show ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password" className="bg-zinc-800 border-zinc-700 text-white pr-10"
                data-testid="input-password" />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                onClick={() => setShow(!show)}>
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          {error && (
            <p className="text-red-400 text-sm flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />{error}
            </p>
          )}
          <Button type="submit" disabled={loading}
            className="w-full bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow text-white border-0 rounded-full h-12 text-base font-semibold">
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}

// ── Sidebar ──────────────────────────────────────────────────────────────────

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "home-page", label: "Home Page", icon: HomeIcon },
  { id: "about-page", label: "About Page", icon: Users },
  { id: "contact-page", label: "Contact Page", icon: Phone },
  { id: "footer-settings", label: "Footer & Social", icon: Share2 },
  { id: "services", label: "Services", icon: Layers },
  { id: "industries", label: "Industries", icon: Globe },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "blogs", label: "Blog Posts", icon: FileText },
  { id: "case-studies", label: "Case Studies", icon: Newspaper },
  { id: "press-releases", label: "Press Releases", icon: Radio },
  { id: "site-settings", label: "Raw Settings", icon: Settings },
  { id: "submissions", label: "Contact Submissions", icon: Mail },
];

function Sidebar({ active, setActive, onLogout }: {
  active: string; setActive: (s: string) => void; onLogout: () => void;
}) {
  return (
    <div className="w-64 flex-shrink-0 bg-zinc-900 border-r border-zinc-800 flex flex-col h-screen sticky top-0">
      <div className="p-5 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-pink to-brand-yellow flex items-center justify-center">
            <Settings className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">MAI Admin</p>
            <p className="text-zinc-500 text-xs">Content Manager</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map(item => (
          <button key={item.id} onClick={() => setActive(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left ${
              active === item.id
                ? "bg-gradient-to-r from-brand-pink/20 to-brand-yellow/10 text-white border border-brand-pink/20"
                : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
            }`}>
            <item.icon className="h-4 w-4 flex-shrink-0" />
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-3 border-t border-zinc-800">
        <button onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-red-400/10 transition-colors">
          <LogOut className="h-4 w-4" /> Log Out
        </button>
      </div>
    </div>
  );
}

// ── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({ token }: { token: string }) {
  const { data: services = [] } = useQuery<any[]>({ queryKey: ["/api/services"] });
  const { data: industries = [] } = useQuery<any[]>({ queryKey: ["/api/industries"] });
  const { data: portfolio = [] } = useQuery<any[]>({ queryKey: ["/api/portfolio"] });
  const { data: blogs = [] } = useQuery<any[]>({ queryKey: ["/api/blogs"] });
  const { data: submissions = [] } = useQuery<any[]>({
    queryKey: ["/api/admin/submissions"],
    queryFn: () => apiFetch("/api/admin/submissions", { headers: authHeaders(token) }),
  });

  const stats = [
    { label: "Services", value: (services as any[]).length, icon: Layers, color: "from-pink-600 to-rose-500" },
    { label: "Industries", value: (industries as any[]).length, icon: Globe, color: "from-orange-500 to-amber-400" },
    { label: "Portfolio", value: (portfolio as any[]).length, icon: Briefcase, color: "from-violet-600 to-purple-500" },
    { label: "Blog Posts", value: (blogs as any[]).length, icon: FileText, color: "from-emerald-600 to-teal-500" },
    { label: "Contact Leads", value: (submissions as any[]).length, icon: Mail, color: "from-blue-600 to-cyan-500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-1">Dashboard</h2>
        <p className="text-zinc-400 text-sm">Overview of your website content</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3`}>
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <div className="text-3xl font-black font-heading text-white mb-1">{s.value}</div>
            <div className="text-zinc-400 text-xs">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400" /> Quick Guide
        </h3>
        <div className="space-y-2 text-sm text-zinc-400">
          <p>• <strong className="text-zinc-200">Services</strong> — Edit all service page content: title, description, stats, benefits, process steps, FAQs</p>
          <p>• <strong className="text-zinc-200">Industries</strong> — Edit all industry pages. Adding a new industry automatically creates its page — no code needed</p>
          <p>• <strong className="text-zinc-200">Portfolio</strong> — Manage case studies shown on the Success Stories page</p>
          <p>• <strong className="text-zinc-200">Blog Posts</strong> — Create and manage thought leadership articles</p>
          <p>• <strong className="text-zinc-200">Site Settings</strong> — Edit contact info, home stats, and about page stats</p>
          <p>• <strong className="text-zinc-200">Contact Submissions</strong> — View all leads received from the website</p>
        </div>
      </div>
    </div>
  );
}

// ── Services Manager ─────────────────────────────────────────────────────────

const iconOptions = [
  "zap","users","search","globe","bar-chart","message-circle","mail","layout","video",
  "shopping-cart","activity","cpu","graduation-cap","coffee","shopping-bag","home","tag",
  "banknote","sprout","briefcase","trending-up","target","shield","award","pen-tool",
  "file-text","settings","heart","layers","gauge","workflow","brain-circuit","lightbulb",
  "eye","palette","rocket","share2","database","megaphone",
];

const emptyService = {
  slug: "", title: "", description: "", iconName: "zap",
  stats: [], benefits: [], process: [], redefined: { title: "", desc: "" },
  faqs: [], displayOrder: 0, active: true,
};

function ServicesManager({ token }: { token: string }) {
  const qc = useQueryClient();
  const { data: services = [], isLoading } = useQuery<any[]>({ queryKey: ["/api/services"] });
  const [editing, setEditing] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [saveError, setSaveError] = useState("");

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError("");
    try {
      if (isNew) {
        await apiFetch("/api/admin/services", { method: "POST", headers: authHeaders(token), body: JSON.stringify(editing) });
      } else {
        await apiFetch(`/api/admin/services/${editing.id}`, { method: "PUT", headers: authHeaders(token), body: JSON.stringify(editing) });
      }
      qc.invalidateQueries({ queryKey: ["/api/services"] });
      setEditing(null);
    } catch (err: any) { setSaveError(err.message || "Save failed"); }
  };

  const del = async (id: number) => {
    await apiFetch(`/api/admin/services/${id}`, { method: "DELETE", headers: authHeaders(token) });
    qc.invalidateQueries({ queryKey: ["/api/services"] });
    setDeleteId(null);
  };

  if (editing) return (
    <ServiceForm service={editing} isNew={isNew} error={saveError}
      onChange={setEditing} onSave={save} onCancel={() => { setEditing(null); setSaveError(""); }} />
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-1">Services</h2>
          <p className="text-zinc-400 text-sm">Manage all service pages — add, edit or disable services</p>
        </div>
        <Button onClick={() => { setEditing({ ...emptyService }); setIsNew(true); setSaveError(""); }}
          className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
          <Plus className="h-4 w-4 mr-2" /> Add Service
        </Button>
      </div>
      {isLoading ? <p className="text-zinc-400">Loading...</p> : (
        <div className="space-y-2">
          {(services as any[]).map((s: any) => (
            <div key={s.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${s.active ? "bg-green-400" : "bg-zinc-600"}`} />
                <div className="min-w-0">
                  <p className="text-white font-semibold truncate">{s.title}</p>
                  <p className="text-zinc-500 text-xs">/services/{s.slug} · Order: {s.displayOrder}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-lg"
                  onClick={() => { setEditing({ ...s }); setIsNew(false); setSaveError(""); }}>
                  <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                </Button>
                {deleteId === s.id ? (
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xs">Confirm delete?</span>
                    <Button size="sm" variant="destructive" className="h-8 rounded-lg" onClick={() => del(s.id)}>Yes</Button>
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg text-zinc-400" onClick={() => setDeleteId(null)}>No</Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg"
                    onClick={() => setDeleteId(s.id)}><Trash2 className="h-3.5 w-3.5" /></Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ServiceForm({ service, isNew, error, onChange, onSave, onCancel }: {
  service: any; isNew: boolean; error: string;
  onChange: (v: any) => void; onSave: (e: React.FormEvent) => void; onCancel: () => void;
}) {
  const f = service;
  const set = (key: string, val: any) => onChange({ ...f, [key]: val });

  return (
    <form onSubmit={onSave} className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white">{isNew ? "Add New Service" : `Edit: ${f.title}`}</h2>
          <p className="text-zinc-400 text-sm mt-0.5">Content on the /services/{f.slug || "..."} page</p>
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onCancel} className="border-zinc-700 text-zinc-300 rounded-full">Cancel</Button>
          <Button type="submit" className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
            <Save className="h-4 w-4 mr-2" /> Save Service
          </Button>
        </div>
      </div>
      {error && <p className="text-red-400 text-sm flex items-center gap-2 bg-red-400/10 px-4 py-2 rounded-lg"><AlertTriangle className="h-4 w-4" />{error}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-white font-semibold border-b border-zinc-800 pb-2">Basic Info</h3>
          <FormField label="Title" value={f.title} onChange={v => set("title", v)} placeholder="Marketing Automation" required />
          <FormField label="URL Slug" value={f.slug} onChange={v => set("slug", v)} placeholder="marketing-automation" required />
          <div>
            <Label className="text-zinc-300 mb-2 block">Description</Label>
            <Textarea value={f.description} onChange={e => set("description", e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" placeholder="Brief description shown in hero section" />
          </div>
          <div>
            <Label className="text-zinc-300 mb-2 block">Icon Name</Label>
            <select value={f.iconName} onChange={e => set("iconName", e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 text-sm">
              {iconOptions.map(ic => <option key={ic} value={ic}>{ic}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <Switch checked={f.active} onCheckedChange={v => set("active", v)} id="svc-active" />
            <Label htmlFor="svc-active" className="text-zinc-300">Active (visible on website)</Label>
          </div>
          <FormField label="Display Order" value={String(f.displayOrder ?? 0)} onChange={v => set("displayOrder", parseInt(v) || 0)} type="number" />
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold border-b border-zinc-800 pb-2">Redefined Section</h3>
          <p className="text-zinc-500 text-xs">The right-side panel under the stats bar</p>
          <FormField label="Title" value={f.redefined?.title || ""} onChange={v => set("redefined", { ...(f.redefined || {}), title: v })} placeholder="Automation Redefined" />
          <div>
            <Label className="text-zinc-300 mb-2 block">Description</Label>
            <Textarea value={f.redefined?.desc || ""} onChange={e => set("redefined", { ...(f.redefined || {}), desc: e.target.value })}
              className="bg-zinc-800 border-zinc-700 text-white min-h-[100px]" placeholder="Compelling paragraph..." />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">Stats (4 numbers below hero)</h3>
        <ObjectArrayField label="Stats" value={f.stats || []}
          fields={[{ key: "value" as const, label: "Value (e.g. 40%)" }, { key: "label" as const, label: "Label (e.g. Increase in productivity)" }]}
          onChange={v => set("stats", v)} />
      </div>

      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">Benefits (services grid)</h3>
        <ObjectArrayField label="Benefits" value={f.benefits || []}
          fields={[{ key: "title" as const, label: "Title" }, { key: "desc" as const, label: "Description", textarea: true }]}
          onChange={v => set("benefits", v)} />
      </div>

      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">Process Steps (services grid)</h3>
        <ObjectArrayField label="Process Steps" value={f.process || []}
          fields={[{ key: "title" as const, label: "Step Title" }, { key: "desc" as const, label: "Step Description", textarea: true }]}
          onChange={v => set("process", v)} />
      </div>

      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">FAQs</h3>
        <ObjectArrayField label="FAQs" value={f.faqs || []}
          fields={[{ key: "q" as const, label: "Question" }, { key: "a" as const, label: "Answer", textarea: true }]}
          onChange={v => set("faqs", v)} />
      </div>
    </form>
  );
}

// ── Industries Manager ───────────────────────────────────────────────────────

const imageKeyOptions = [
  "ecommerce_online_shopping_concept",
  "doctor_holding_stethoscope_for_healthcare_industry",
  "information_technology_data_center",
  "stack_of_books_for_education_industry",
  "hospitality_luxury_hotel_lobby",
  "fmcg_consumer_goods_display",
  "modern_architectural_house_for_real_estate",
  "retail_shopping_store_interior",
  "fintech_industry_concept",
  "agriculture_modern_farmland",
  "happy_child_shopping_for_ecommerce_success",
  "modern_office_space_for_furniture_brand",
  "futuristic_athletic_shoe_for_footwear_brand",
];

const emptyIndustry = {
  slug: "", title: "", description: "", iconName: "briefcase",
  imageKey: "ecommerce_online_shopping_concept",
  heroStats: [], faqs: [], precisionText: "", displayOrder: 0, active: true,
};

function IndustriesManager({ token }: { token: string }) {
  const qc = useQueryClient();
  const { data: industries = [], isLoading } = useQuery<any[]>({ queryKey: ["/api/industries"] });
  const [editing, setEditing] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [saveError, setSaveError] = useState("");

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError("");
    try {
      if (isNew) {
        await apiFetch("/api/admin/industries", { method: "POST", headers: authHeaders(token), body: JSON.stringify(editing) });
      } else {
        await apiFetch(`/api/admin/industries/${editing.id}`, { method: "PUT", headers: authHeaders(token), body: JSON.stringify(editing) });
      }
      qc.invalidateQueries({ queryKey: ["/api/industries"] });
      setEditing(null);
    } catch (err: any) { setSaveError(err.message || "Save failed"); }
  };

  const del = async (id: number) => {
    await apiFetch(`/api/admin/industries/${id}`, { method: "DELETE", headers: authHeaders(token) });
    qc.invalidateQueries({ queryKey: ["/api/industries"] });
    setDeleteId(null);
  };

  if (editing) return (
    <IndustryForm industry={editing} isNew={isNew} error={saveError}
      onChange={setEditing} onSave={save} onCancel={() => { setEditing(null); setSaveError(""); }} />
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-1">Industries</h2>
          <p className="text-zinc-400 text-sm">Manage all industry pages — adding a new one auto-creates its route</p>
        </div>
        <Button onClick={() => { setEditing({ ...emptyIndustry }); setIsNew(true); setSaveError(""); }}
          className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
          <Plus className="h-4 w-4 mr-2" /> Add Industry
        </Button>
      </div>
      {isLoading ? <p className="text-zinc-400">Loading...</p> : (
        <div className="space-y-2">
          {(industries as any[]).map((ind: any) => (
            <div key={ind.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${ind.active ? "bg-green-400" : "bg-zinc-600"}`} />
                <div className="min-w-0">
                  <p className="text-white font-semibold truncate">{ind.title}</p>
                  <p className="text-zinc-500 text-xs">/industries/{ind.slug} · Order: {ind.displayOrder}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-lg"
                  onClick={() => { setEditing({ ...ind }); setIsNew(false); setSaveError(""); }}>
                  <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                </Button>
                {deleteId === ind.id ? (
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xs">Confirm delete?</span>
                    <Button size="sm" variant="destructive" className="h-8 rounded-lg" onClick={() => del(ind.id)}>Yes</Button>
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg text-zinc-400" onClick={() => setDeleteId(null)}>No</Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg"
                    onClick={() => setDeleteId(ind.id)}><Trash2 className="h-3.5 w-3.5" /></Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function IndustryForm({ industry, isNew, error, onChange, onSave, onCancel }: {
  industry: any; isNew: boolean; error: string;
  onChange: (v: any) => void; onSave: (e: React.FormEvent) => void; onCancel: () => void;
}) {
  const f = industry;
  const set = (key: string, val: any) => onChange({ ...f, [key]: val });

  return (
    <form onSubmit={onSave} className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white">{isNew ? "Add New Industry" : `Edit: ${f.title}`}</h2>
          <p className="text-zinc-400 text-sm mt-0.5">Content on the /industries/{f.slug || "..."} page</p>
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onCancel} className="border-zinc-700 text-zinc-300 rounded-full">Cancel</Button>
          <Button type="submit" className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
            <Save className="h-4 w-4 mr-2" /> Save Industry
          </Button>
        </div>
      </div>
      {error && <p className="text-red-400 text-sm flex items-center gap-2 bg-red-400/10 px-4 py-2 rounded-lg"><AlertTriangle className="h-4 w-4" />{error}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-white font-semibold border-b border-zinc-800 pb-2">Basic Info</h3>
          <FormField label="Title" value={f.title} onChange={v => set("title", v)} placeholder="Ecommerce" required />
          <FormField label="URL Slug" value={f.slug} onChange={v => set("slug", v)} placeholder="ecommerce" required />
          <div>
            <Label className="text-zinc-300 mb-2 block">Description (shown in slider)</Label>
            <Textarea value={f.description} onChange={e => set("description", e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white min-h-[70px]" />
          </div>
          <div>
            <Label className="text-zinc-300 mb-2 block">Icon Name</Label>
            <select value={f.iconName} onChange={e => set("iconName", e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 text-sm">
              {iconOptions.map(ic => <option key={ic} value={ic}>{ic}</option>)}
            </select>
          </div>
          <div>
            <Label className="text-zinc-300 mb-2 block">Slider Image</Label>
            <select value={f.imageKey} onChange={e => set("imageKey", e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 text-sm">
              {imageKeyOptions.map(k => <option key={k} value={k}>{k}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-3">
            <Switch checked={f.active} onCheckedChange={v => set("active", v)} id="ind-active" />
            <Label htmlFor="ind-active" className="text-zinc-300">Active (visible on website)</Label>
          </div>
          <FormField label="Display Order" value={String(f.displayOrder ?? 0)} onChange={v => set("displayOrder", parseInt(v) || 0)} type="number" />
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold border-b border-zinc-800 pb-2">Precision Targeting Section</h3>
          <div>
            <Label className="text-zinc-300 mb-2 block">Precision Text</Label>
            <Textarea value={f.precisionText || ""} onChange={e => set("precisionText", e.target.value)}
              className="bg-zinc-800 border-zinc-700 text-white min-h-[140px]"
              placeholder="We utilize advanced analytics to deeply understand your audience..." />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">
          Hero Stats (3 numbers in "Boost Brand Awareness" section)
        </h3>
        <ObjectArrayField label="Hero Stats" value={f.heroStats || []}
          fields={[
            { key: "value" as const, label: "Value (e.g. 200%+)" },
            { key: "label" as const, label: "Label (e.g. Higher customer engagement)" },
            { key: "color" as const, label: "Gradient (e.g. from-brand-pink to-brand-rose)" },
          ]}
          onChange={v => set("heroStats", v)} />
      </div>

      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">FAQs</h3>
        <ObjectArrayField label="FAQs" value={f.faqs || []}
          fields={[{ key: "q" as const, label: "Question" }, { key: "a" as const, label: "Answer", textarea: true }]}
          onChange={v => set("faqs", v)} />
      </div>
    </form>
  );
}

// ── Portfolio Manager ────────────────────────────────────────────────────────

const emptyPortfolio = {
  slug: "", client: "", clientColor: "text-pink-500", category: "",
  industry: "", headline: "", tagline: "", heroImage: "", coverImage: "",
  overview: "", challenge: "", approach: [], results: [], projectServices: [],
  duration: "", displayOrder: 0, active: true,
};

function PortfolioManager({ token }: { token: string }) {
  const qc = useQueryClient();
  const { data: items = [], isLoading } = useQuery<any[]>({ queryKey: ["/api/portfolio"] });
  const [editing, setEditing] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [saveError, setSaveError] = useState("");

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError("");
    try {
      if (isNew) {
        await apiFetch("/api/admin/portfolio", { method: "POST", headers: authHeaders(token), body: JSON.stringify(editing) });
      } else {
        await apiFetch(`/api/admin/portfolio/${editing.id}`, { method: "PUT", headers: authHeaders(token), body: JSON.stringify(editing) });
      }
      qc.invalidateQueries({ queryKey: ["/api/portfolio"] });
      setEditing(null);
    } catch (err: any) { setSaveError(err.message || "Save failed"); }
  };

  const del = async (id: number) => {
    await apiFetch(`/api/admin/portfolio/${id}`, { method: "DELETE", headers: authHeaders(token) });
    qc.invalidateQueries({ queryKey: ["/api/portfolio"] });
    setDeleteId(null);
  };

  if (editing) return (
    <PortfolioForm item={editing} isNew={isNew} error={saveError}
      onChange={setEditing} onSave={save} onCancel={() => { setEditing(null); setSaveError(""); }} />
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-1">Portfolio</h2>
          <p className="text-zinc-400 text-sm">Manage case studies shown on the Success Stories page</p>
        </div>
        <Button onClick={() => { setEditing({ ...emptyPortfolio }); setIsNew(true); setSaveError(""); }}
          className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
          <Plus className="h-4 w-4 mr-2" /> Add Case Study
        </Button>
      </div>
      {isLoading ? <p className="text-zinc-400">Loading...</p> : (
        <div className="space-y-2">
          {(items as any[]).map((item: any) => (
            <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.active ? "bg-green-400" : "bg-zinc-600"}`} />
                <div className="min-w-0">
                  <p className={`font-semibold truncate ${item.clientColor}`}>{item.client}</p>
                  <p className="text-zinc-500 text-xs truncate">{item.headline}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-lg"
                  onClick={() => { setEditing({ ...item }); setIsNew(false); setSaveError(""); }}>
                  <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                </Button>
                {deleteId === item.id ? (
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 text-xs">Confirm?</span>
                    <Button size="sm" variant="destructive" className="h-8 rounded-lg" onClick={() => del(item.id)}>Yes</Button>
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg text-zinc-400" onClick={() => setDeleteId(null)}>No</Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg"
                    onClick={() => setDeleteId(item.id)}><Trash2 className="h-3.5 w-3.5" /></Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PortfolioForm({ item, isNew, error, onChange, onSave, onCancel }: {
  item: any; isNew: boolean; error: string;
  onChange: (v: any) => void; onSave: (e: React.FormEvent) => void; onCancel: () => void;
}) {
  const f = item;
  const set = (key: string, val: any) => onChange({ ...f, [key]: val });
  const colorOptions = ["text-pink-500","text-amber-500","text-orange-500","text-blue-500","text-green-500","text-purple-500","text-cyan-500","text-red-500"];

  return (
    <form onSubmit={onSave} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-bold text-white">{isNew ? "Add Case Study" : `Edit: ${f.client}`}</h2>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onCancel} className="border-zinc-700 text-zinc-300 rounded-full">Cancel</Button>
          <Button type="submit" className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
            <Save className="h-4 w-4 mr-2" /> Save
          </Button>
        </div>
      </div>
      {error && <p className="text-red-400 text-sm flex items-center gap-2 bg-red-400/10 px-4 py-2 rounded-lg"><AlertTriangle className="h-4 w-4" />{error}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-white font-semibold border-b border-zinc-800 pb-2">Basic Info</h3>
          <FormField label="URL Slug" value={f.slug} onChange={v => set("slug", v)} placeholder="fabpik" required />
          <FormField label="Client Name" value={f.client} onChange={v => set("client", v)} placeholder="FabPik" required />
          <div>
            <Label className="text-zinc-300 mb-2 block">Client Name Color</Label>
            <select value={f.clientColor} onChange={e => set("clientColor", e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 text-white rounded-md px-3 py-2 text-sm">
              {colorOptions.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <FormField label="Category" value={f.category} onChange={v => set("category", v)} placeholder="Social Media Marketing" />
          <FormField label="Industry" value={f.industry} onChange={v => set("industry", v)} placeholder="E-commerce" />
          <FormField label="Duration" value={f.duration} onChange={v => set("duration", v)} placeholder="4 months" />
          <div className="flex items-center gap-3">
            <Switch checked={f.active} onCheckedChange={v => set("active", v)} id="port-active" />
            <Label htmlFor="port-active" className="text-zinc-300">Active</Label>
          </div>
          <FormField label="Display Order" value={String(f.displayOrder ?? 0)} onChange={v => set("displayOrder", parseInt(v) || 0)} type="number" />
        </div>
        <div className="space-y-4">
          <h3 className="text-white font-semibold border-b border-zinc-800 pb-2">Content</h3>
          <FormField label="Headline" value={f.headline} onChange={v => set("headline", v)} placeholder="50% Jump in Brand Visibility..." />
          <FormField label="Tagline" value={f.tagline} onChange={v => set("tagline", v)} placeholder="From invisible to unmissable..." />
          <FormField label="Hero Image Key" value={f.heroImage} onChange={v => set("heroImage", v)} placeholder="happy_child_shopping_for_ecommerce_success" />
          <FormField label="Cover Image Key" value={f.coverImage} onChange={v => set("coverImage", v)} placeholder="happy_child_shopping_for_ecommerce_success" />
          <div>
            <Label className="text-zinc-300 mb-2 block">Overview</Label>
            <Textarea value={f.overview} onChange={e => set("overview", e.target.value)} className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" />
          </div>
          <div>
            <Label className="text-zinc-300 mb-2 block">Challenge</Label>
            <Textarea value={f.challenge} onChange={e => set("challenge", e.target.value)} className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">Approach Steps</h3>
        <StringArrayField label="Approach Steps" value={f.approach || []} onChange={v => set("approach", v)} />
      </div>
      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">Results</h3>
        <ObjectArrayField label="Results" value={f.results || []}
          fields={[{ key: "value" as const, label: "Value (e.g. 50%)" }, { key: "label" as const, label: "Label (e.g. Increase in brand visibility)" }]}
          onChange={v => set("results", v)} />
      </div>
      <div>
        <h3 className="text-white font-semibold border-b border-zinc-800 pb-2 mb-4">Services Used</h3>
        <StringArrayField label="Services" value={f.projectServices || []} onChange={v => set("projectServices", v)} />
      </div>
    </form>
  );
}

// ── Blogs Manager ────────────────────────────────────────────────────────────

const emptyBlog = {
  slug: "", title: "", category: "", description: "", content: "",
  image: "", createdAt: new Date().toISOString().slice(0, 10),
  author: "MAI Team", readTime: "5 min read", featured: false,
};

function BlogsManager({ token }: { token: string }) {
  const qc = useQueryClient();
  const { data: blogs = [], isLoading } = useQuery<any[]>({ queryKey: ["/api/blogs"] });
  const [editing, setEditing] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [saveError, setSaveError] = useState("");

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError("");
    try {
      if (isNew) {
        await apiFetch("/api/admin/blogs", { method: "POST", headers: authHeaders(token), body: JSON.stringify(editing) });
      } else {
        await apiFetch(`/api/admin/blogs/${editing.id}`, { method: "PUT", headers: authHeaders(token), body: JSON.stringify(editing) });
      }
      qc.invalidateQueries({ queryKey: ["/api/blogs"] });
      setEditing(null);
    } catch (err: any) { setSaveError(err.message || "Save failed"); }
  };

  const del = async (id: number) => {
    await apiFetch(`/api/admin/blogs/${id}`, { method: "DELETE", headers: authHeaders(token) });
    qc.invalidateQueries({ queryKey: ["/api/blogs"] });
    setDeleteId(null);
  };

  if (editing) return (
    <form onSubmit={save} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-bold text-white">{isNew ? "Add Blog Post" : `Edit: ${editing.title}`}</h2>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={() => setEditing(null)} className="border-zinc-700 text-zinc-300 rounded-full">Cancel</Button>
          <Button type="submit" className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full"><Save className="h-4 w-4 mr-2" />Save</Button>
        </div>
      </div>
      {saveError && <p className="text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg">{saveError}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FormField label="Title" value={editing.title} onChange={v => setEditing({ ...editing, title: v })} required />
        <FormField label="Slug" value={editing.slug} onChange={v => setEditing({ ...editing, slug: v })} required />
        <FormField label="Category" value={editing.category} onChange={v => setEditing({ ...editing, category: v })} />
        <FormField label="Author" value={editing.author} onChange={v => setEditing({ ...editing, author: v })} />
        <FormField label="Read Time" value={editing.readTime} onChange={v => setEditing({ ...editing, readTime: v })} />
        <FormField label="Date (YYYY-MM-DD)" value={editing.createdAt} onChange={v => setEditing({ ...editing, createdAt: v })} />
        <FormField label="Image URL" value={editing.image} onChange={v => setEditing({ ...editing, image: v })} />
        <div className="flex items-center gap-3 pt-6">
          <Switch checked={editing.featured} onCheckedChange={v => setEditing({ ...editing, featured: v })} id="blog-featured" />
          <Label htmlFor="blog-featured" className="text-zinc-300">Featured</Label>
        </div>
      </div>
      <div>
        <Label className="text-zinc-300 mb-2 block">Description</Label>
        <Textarea value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" />
      </div>
      <div>
        <Label className="text-zinc-300 mb-2 block">Content (HTML or Markdown)</Label>
        <Textarea value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[200px] font-mono text-sm" />
      </div>
    </form>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-1">Blog Posts</h2>
          <p className="text-zinc-400 text-sm">Manage thought leadership articles</p>
        </div>
        <Button onClick={() => { setEditing({ ...emptyBlog }); setIsNew(true); setSaveError(""); }}
          className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
          <Plus className="h-4 w-4 mr-2" /> Add Post
        </Button>
      </div>
      {isLoading ? <p className="text-zinc-400">Loading...</p> : (
        <div className="space-y-2">
          {(blogs as any[]).map((b: any) => (
            <div key={b.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="min-w-0 flex items-center gap-3">
                {b.featured && <span className="text-xs bg-brand-pink/20 text-brand-rose px-2 py-0.5 rounded-full flex-shrink-0">Featured</span>}
                <div className="min-w-0">
                  <p className="text-white font-semibold truncate">{b.title}</p>
                  <p className="text-zinc-500 text-xs">{b.category} · {b.createdAt}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-lg"
                  onClick={() => { setEditing({ ...b }); setIsNew(false); setSaveError(""); }}>
                  <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                </Button>
                {deleteId === b.id ? (
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="destructive" className="h-8 rounded-lg" onClick={() => del(b.id)}>Delete</Button>
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg text-zinc-400" onClick={() => setDeleteId(null)}>Cancel</Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg" onClick={() => setDeleteId(b.id)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Case Studies Manager ─────────────────────────────────────────────────────

function CaseStudiesManager({ token }: { token: string }) {
  const qc = useQueryClient();
  const { data: items = [], isLoading } = useQuery<any[]>({ queryKey: ["/api/case-studies"] });
  const [editing, setEditing] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [saveError, setSaveError] = useState("");
  const empty = { slug: "", title: "", client: "", category: "", date: "", stats: [], description: "", content: "", image: "", color: "#C13584" };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError("");
    try {
      if (isNew) {
        await apiFetch("/api/admin/case-studies", { method: "POST", headers: authHeaders(token), body: JSON.stringify(editing) });
      } else {
        await apiFetch(`/api/admin/case-studies/${editing.id}`, { method: "PUT", headers: authHeaders(token), body: JSON.stringify(editing) });
      }
      qc.invalidateQueries({ queryKey: ["/api/case-studies"] });
      setEditing(null);
    } catch (err: any) { setSaveError(err.message || "Save failed"); }
  };

  const del = async (id: number) => {
    await apiFetch(`/api/admin/case-studies/${id}`, { method: "DELETE", headers: authHeaders(token) });
    qc.invalidateQueries({ queryKey: ["/api/case-studies"] });
    setDeleteId(null);
  };

  if (editing) return (
    <form onSubmit={save} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-bold text-white">{isNew ? "Add Case Study" : `Edit: ${editing.title}`}</h2>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={() => setEditing(null)} className="border-zinc-700 text-zinc-300 rounded-full">Cancel</Button>
          <Button type="submit" className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full"><Save className="h-4 w-4 mr-2" />Save</Button>
        </div>
      </div>
      {saveError && <p className="text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg">{saveError}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FormField label="Title" value={editing.title} onChange={v => setEditing({ ...editing, title: v })} required />
        <FormField label="Slug" value={editing.slug} onChange={v => setEditing({ ...editing, slug: v })} required />
        <FormField label="Client" value={editing.client} onChange={v => setEditing({ ...editing, client: v })} />
        <FormField label="Category" value={editing.category} onChange={v => setEditing({ ...editing, category: v })} />
        <FormField label="Date" value={editing.date} onChange={v => setEditing({ ...editing, date: v })} />
        <FormField label="Accent Color (hex)" value={editing.color} onChange={v => setEditing({ ...editing, color: v })} />
        <FormField label="Image URL" value={editing.image} onChange={v => setEditing({ ...editing, image: v })} />
      </div>
      <div>
        <Label className="text-zinc-300 mb-2 block">Description</Label>
        <Textarea value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" />
      </div>
      <div>
        <Label className="text-zinc-300 mb-2 block">Content</Label>
        <Textarea value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[150px]" />
      </div>
      <ObjectArrayField label="Stats" value={editing.stats || []}
        fields={[{ key: "value" as const, label: "Value" }, { key: "label" as const, label: "Label" }]}
        onChange={v => setEditing({ ...editing, stats: v })} />
    </form>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-1">Case Studies</h2>
          <p className="text-zinc-400 text-sm">Manage case study articles in the resources section</p>
        </div>
        <Button onClick={() => { setEditing({ ...empty }); setIsNew(true); setSaveError(""); }}
          className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
          <Plus className="h-4 w-4 mr-2" /> Add Case Study
        </Button>
      </div>
      {isLoading ? <p className="text-zinc-400">Loading...</p> : (
        <div className="space-y-2">
          {(items as any[]).map((item: any) => (
            <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-white font-semibold truncate">{item.title}</p>
                <p className="text-zinc-500 text-xs">{item.client} · {item.date}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-lg"
                  onClick={() => { setEditing({ ...item }); setIsNew(false); setSaveError(""); }}>
                  <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                </Button>
                {deleteId === item.id ? (
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="destructive" className="h-8 rounded-lg" onClick={() => del(item.id)}>Delete</Button>
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg text-zinc-400" onClick={() => setDeleteId(null)}>Cancel</Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg" onClick={() => setDeleteId(item.id)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Press Releases Manager ───────────────────────────────────────────────────

function PressReleasesManager({ token }: { token: string }) {
  const qc = useQueryClient();
  const { data: items = [], isLoading } = useQuery<any[]>({ queryKey: ["/api/press-releases"] });
  const [editing, setEditing] = useState<any | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [saveError, setSaveError] = useState("");
  const empty = { slug: "", title: "", category: "", source: "", description: "", content: "", date: "", year: new Date().getFullYear().toString(), link: "" };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveError("");
    try {
      if (isNew) {
        await apiFetch("/api/admin/press-releases", { method: "POST", headers: authHeaders(token), body: JSON.stringify(editing) });
      } else {
        await apiFetch(`/api/admin/press-releases/${editing.id}`, { method: "PUT", headers: authHeaders(token), body: JSON.stringify(editing) });
      }
      qc.invalidateQueries({ queryKey: ["/api/press-releases"] });
      setEditing(null);
    } catch (err: any) { setSaveError(err.message || "Save failed"); }
  };

  const del = async (id: number) => {
    await apiFetch(`/api/admin/press-releases/${id}`, { method: "DELETE", headers: authHeaders(token) });
    qc.invalidateQueries({ queryKey: ["/api/press-releases"] });
    setDeleteId(null);
  };

  if (editing) return (
    <form onSubmit={save} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-heading font-bold text-white">{isNew ? "Add Press Release" : `Edit: ${editing.title}`}</h2>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={() => setEditing(null)} className="border-zinc-700 text-zinc-300 rounded-full">Cancel</Button>
          <Button type="submit" className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full"><Save className="h-4 w-4 mr-2" />Save</Button>
        </div>
      </div>
      {saveError && <p className="text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg">{saveError}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <FormField label="Title" value={editing.title} onChange={v => setEditing({ ...editing, title: v })} required />
        <FormField label="Slug" value={editing.slug} onChange={v => setEditing({ ...editing, slug: v })} required />
        <FormField label="Category" value={editing.category} onChange={v => setEditing({ ...editing, category: v })} />
        <FormField label="Source" value={editing.source} onChange={v => setEditing({ ...editing, source: v })} />
        <FormField label="Date" value={editing.date} onChange={v => setEditing({ ...editing, date: v })} />
        <FormField label="Year" value={editing.year} onChange={v => setEditing({ ...editing, year: v })} />
        <FormField label="External Link" value={editing.link} onChange={v => setEditing({ ...editing, link: v })} />
      </div>
      <div>
        <Label className="text-zinc-300 mb-2 block">Description</Label>
        <Textarea value={editing.description} onChange={e => setEditing({ ...editing, description: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" />
      </div>
      <div>
        <Label className="text-zinc-300 mb-2 block">Content</Label>
        <Textarea value={editing.content} onChange={e => setEditing({ ...editing, content: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[150px]" />
      </div>
    </form>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-1">Press Releases</h2>
          <p className="text-zinc-400 text-sm">Manage press releases in the resources section</p>
        </div>
        <Button onClick={() => { setEditing({ ...empty }); setIsNew(true); setSaveError(""); }}
          className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full">
          <Plus className="h-4 w-4 mr-2" /> Add Press Release
        </Button>
      </div>
      {isLoading ? <p className="text-zinc-400">Loading...</p> : (
        <div className="space-y-2">
          {(items as any[]).map((item: any) => (
            <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-white font-semibold truncate">{item.title}</p>
                <p className="text-zinc-500 text-xs">{item.source} · {item.date}</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-lg"
                  onClick={() => { setEditing({ ...item }); setIsNew(false); setSaveError(""); }}>
                  <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                </Button>
                {deleteId === item.id ? (
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="destructive" className="h-8 rounded-lg" onClick={() => del(item.id)}>Delete</Button>
                    <Button size="sm" variant="ghost" className="h-8 rounded-lg text-zinc-400" onClick={() => setDeleteId(null)}>Cancel</Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg" onClick={() => setDeleteId(item.id)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Site Settings ────────────────────────────────────────────────────────────

function SiteSettingsManager({ token }: { token: string }) {
  const qc = useQueryClient();
  const { data: rawSettings, isLoading } = useQuery<Record<string, any>>({
    queryKey: ["/api/site-settings"],
    queryFn: () => apiFetch("/api/site-settings"),
    staleTime: 60000,
  });
  const [editing, setEditing] = useState<{ key: string; value: any } | null>(null);
  const [saveError, setSaveError] = useState("");

  const settings = rawSettings ? Object.entries(rawSettings).map(([key, value]) => ({ key, value })) : [];

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    setSaveError("");
    try {
      let parsedValue = editing.value;
      if (typeof editing.value === "string") {
        try { parsedValue = JSON.parse(editing.value); } catch { parsedValue = editing.value; }
      }
      await apiFetch(`/api/admin/site-settings/${editing.key}`, {
        method: "PUT",
        headers: authHeaders(token),
        body: JSON.stringify({ value: parsedValue }),
      });
      qc.invalidateQueries({ queryKey: ["/api/site-settings"] });
      setEditing(null);
    } catch (err: any) { setSaveError(err.message || "Save failed"); }
  };

  const descriptions: Record<string, string> = {
    contact_info: "Contact details shown in footer and contact page",
    about_stats: "Stats shown on the About page",
    home_stats: "Stats shown on the Home page",
  };

  if (editing) return (
    <form onSubmit={save} className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white">{editing.key}</h2>
          <p className="text-zinc-400 text-sm">{descriptions[editing.key] || "Site setting value"}</p>
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={() => setEditing(null)} className="border-zinc-700 text-zinc-300 rounded-full">Cancel</Button>
          <Button type="submit" className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full"><Save className="h-4 w-4 mr-2" />Save</Button>
        </div>
      </div>
      {saveError && <p className="text-red-400 text-sm bg-red-400/10 px-4 py-2 rounded-lg">{saveError}</p>}
      <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4">
        <Label className="text-zinc-300 mb-2 block">Value (JSON format)</Label>
        <Textarea
          value={typeof editing.value === "string" ? editing.value : JSON.stringify(editing.value, null, 2)}
          onChange={e => setEditing({ ...editing, value: e.target.value })}
          className="bg-zinc-900 border-zinc-600 text-white min-h-[300px] font-mono text-sm" />
        <p className="text-zinc-500 text-xs mt-2">Edit as JSON. Arrays: [], Objects: {"{}"}, Strings: ""</p>
      </div>
    </form>
  );

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-1">Site Settings</h2>
        <p className="text-zinc-400 text-sm">Global content settings for contact info, stats, and other site-wide content</p>
      </div>
      {isLoading ? <p className="text-zinc-400">Loading...</p> : (
        <div className="space-y-3">
          {settings.map((s) => (
            <div key={s.key} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-white font-semibold mb-1">{s.key}</p>
                  <p className="text-zinc-500 text-xs mb-3">{descriptions[s.key] || "Site setting"}</p>
                  <pre className="text-zinc-400 text-xs bg-zinc-800 rounded-lg p-3 overflow-x-auto max-h-28 overflow-y-auto">
                    {JSON.stringify(s.value, null, 2)}
                  </pre>
                </div>
                <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-lg self-start flex-shrink-0"
                  onClick={() => setEditing({ key: s.key, value: s.value })}>
                  <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Submissions ──────────────────────────────────────────────────────────────

function SubmissionsManager({ token }: { token: string }) {
  const { data: submissions = [], isLoading } = useQuery<any[]>({
    queryKey: ["/api/admin/submissions"],
    queryFn: () => apiFetch("/api/admin/submissions", { headers: authHeaders(token) }),
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-1">Contact Submissions</h2>
        <p className="text-zinc-400 text-sm">{(submissions as any[]).length} total leads received</p>
      </div>
      {isLoading ? <p className="text-zinc-400">Loading...</p> : (
        <div className="space-y-3">
          {(submissions as any[]).length === 0 ? (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
              <MessageSquare className="h-10 w-10 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-400">No submissions yet</p>
            </div>
          ) : (submissions as any[]).map((s: any) => (
            <div key={s.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-pink to-brand-yellow flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {s.name?.charAt(0)?.toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{s.name}</p>
                    <p className="text-zinc-400 text-sm">{s.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {s.service && <span className="text-xs bg-brand-pink/15 text-brand-rose px-2 py-1 rounded-full">{s.service}</span>}
                  {s.phone && <span className="text-xs text-zinc-500">{s.phone}</span>}
                </div>
              </div>
              {s.message && <p className="text-zinc-400 text-sm bg-zinc-800 rounded-lg px-4 py-3">{s.message}</p>}
              {s.submittedAt && (
                <p className="text-zinc-600 text-xs mt-2">
                  {new Date(s.submittedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Image Upload ──────────────────────────────────────────────────────────────

function ImageUpload({ token, label, value, onChange }: {
  token: string; label: string; value: string; onChange: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    setUploading(true);
    const fd = new FormData();
    fd.append("image", file);
    try {
      const r = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "x-admin-password": token },
        body: fd,
      });
      if (!r.ok) throw new Error("Upload failed");
      const { url } = await r.json();
      onChange(url);
    } catch (e) { console.error(e); }
    setUploading(false);
  };

  return (
    <div>
      <Label className="text-zinc-300 mb-2 block text-sm">{label}</Label>
      <div className="space-y-2">
        {value && (
          <img src={value} alt="preview" className="h-24 max-w-xs object-cover rounded-lg border border-zinc-700" />
        )}
        <div className="flex gap-2">
          <Input value={value} onChange={e => onChange(e.target.value)}
            placeholder="/uploads/image.jpg or https://..."
            className="bg-zinc-800 border-zinc-700 text-white text-sm" />
          <input type="file" ref={inputRef} accept="image/*" className="hidden"
            onChange={e => e.target.files?.[0] && handleFile(e.target.files[0])} />
          <Button type="button" variant="outline" size="sm"
            className="border-zinc-600 text-zinc-300 hover:bg-zinc-800 flex-shrink-0"
            onClick={() => inputRef.current?.click()} disabled={uploading}>
            <Upload className="h-3.5 w-3.5 mr-1" />
            {uploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
      </div>
    </div>
  );
}

// ── Section Card (generic edit card for any site-settings key) ────────────────

function SectionCard({ title, desc, settingsKey, token, renderForm }: {
  title: string; desc?: string; settingsKey: string; token: string;
  renderForm: (draft: any, set: (v: any) => void) => React.ReactNode;
}) {
  const qc = useQueryClient();
  const { data: settings = {} } = useQuery<Record<string, any>>({ queryKey: ["/api/site-settings"] });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const current = (settings as any)[settingsKey];

  const openEdit = () => {
    setDraft(current != null ? JSON.parse(JSON.stringify(current)) : Array.isArray(current) ? [] : {});
    setEditing(true);
    setError("");
  };

  const save = async () => {
    setSaving(true); setError("");
    try {
      await apiFetch(`/api/admin/site-settings/${settingsKey}`, {
        method: "PUT", headers: authHeaders(token), body: JSON.stringify({ value: draft }),
      });
      await qc.invalidateQueries({ queryKey: ["/api/site-settings"] });
      setEditing(false);
    } catch (e: any) { setError(e.message || "Save failed"); }
    setSaving(false);
  };

  if (editing && draft !== null) {
    return (
      <div className="bg-zinc-900 border border-brand-pink/20 rounded-2xl p-5 space-y-5">
        <div className="flex justify-between items-start gap-3">
          <div>
            <h3 className="text-white font-semibold">{title}</h3>
            {desc && <p className="text-zinc-500 text-xs mt-0.5">{desc}</p>}
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <Button type="button" variant="outline" size="sm" className="border-zinc-700 text-zinc-300 rounded-full h-8"
              onClick={() => { setEditing(false); setError(""); }}>
              <X className="h-3.5 w-3.5 mr-1" /> Cancel
            </Button>
            <Button type="button" size="sm" className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white border-0 rounded-full h-8"
              onClick={save} disabled={saving}>
              <Save className="h-3.5 w-3.5 mr-1" />{saving ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
        {error && <p className="text-red-400 text-sm bg-red-400/10 px-3 py-2 rounded-lg flex items-center gap-2"><AlertTriangle className="h-4 w-4 flex-shrink-0" />{error}</p>}
        <div className="space-y-4">{renderForm(draft, setDraft)}</div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <p className="text-white font-medium text-sm">{title}</p>
        {desc && <p className="text-zinc-500 text-xs mb-2">{desc}</p>}
        {current != null && (
          <pre className="text-zinc-600 text-xs bg-zinc-800/70 rounded-lg p-2 overflow-x-auto whitespace-pre-wrap line-clamp-2">
            {JSON.stringify(current).substring(0, 150)}{JSON.stringify(current).length > 150 ? "..." : ""}
          </pre>
        )}
      </div>
      <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 rounded-lg flex-shrink-0"
        onClick={openEdit}>
        <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
      </Button>
    </div>
  );
}

// ── Home Page Manager ─────────────────────────────────────────────────────────

function HomePageManager({ token }: { token: string }) {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-1">Home Page</h2>
        <p className="text-zinc-400 text-sm">Edit every section visible on the home page</p>
      </div>

      <SectionCard title="Hero Section" desc="Main banner: headings, description, CTA buttons, background image" settingsKey="home_hero" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Heading Line 1 (white)" value={d.title1 || ""} onChange={v => set({ ...d, title1: v })} placeholder="We're the Crusaders of" />
              <FormField label="Heading Line 2 (white/grey)" value={d.title2 || ""} onChange={v => set({ ...d, title2: v })} placeholder="Redefining Engagement" />
            </div>
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Description</Label>
              <Textarea value={d.description || ""} onChange={e => set({ ...d, description: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Primary CTA Text" value={d.cta1Text || ""} onChange={v => set({ ...d, cta1Text: v })} />
              <FormField label="Primary CTA Link" value={d.cta1Href || ""} onChange={v => set({ ...d, cta1Href: v })} />
              <FormField label="Secondary CTA Text" value={d.cta2Text || ""} onChange={v => set({ ...d, cta2Text: v })} />
              <FormField label="Secondary CTA Link" value={d.cta2Href || ""} onChange={v => set({ ...d, cta2Href: v })} />
            </div>
            <ImageUpload token={token} label="Hero Background Image" value={d.bgImage || ""} onChange={v => set({ ...d, bgImage: v })} />
          </div>
        )} />

      <SectionCard title="Hero Stats Bar" desc="The numbers shown at the bottom of the hero (12+, 68+, 200+...)" settingsKey="home_stats" token={token}
        renderForm={(d, set) => (
          <ObjectArrayField label="Stats" value={Array.isArray(d) ? d : []}
            fields={[{ key: "value" as const, label: "Value (e.g. 200+)" }, { key: "label" as const, label: "Label (e.g. Number of Clients)" }]}
            onChange={v => set(v)} />
        )} />

      <SectionCard title="Trusted Logos Marquee" desc="Scrolling brand names in the banner below hero" settingsKey="home_trusted_logos" token={token}
        renderForm={(d, set) => (
          <ObjectArrayField label="Logos" value={Array.isArray(d) ? d : []}
            fields={[{ key: "name" as const, label: "Brand Name" }, { key: "color" as const, label: "Tailwind color class (e.g. text-orange-400)" }]}
            onChange={v => set(v)} />
        )} />

      <SectionCard title="How We Work (Workflow)" desc="5-step process section headings and step cards" settingsKey="home_workflow" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <FormField label="Subtitle" value={d.subtitle || ""} onChange={v => set({ ...d, subtitle: v })} />
            <ObjectArrayField label="Workflow Steps" value={d.steps || []}
              fields={[
                { key: "number" as const, label: "Step Number (01, 02...)" },
                { key: "title" as const, label: "Step Title" },
                { key: "desc" as const, label: "Step Description", textarea: true },
              ]}
              onChange={v => set({ ...d, steps: v })} />
          </div>
        )} />

      <SectionCard title="Testimonials" desc="Client review carousel with name, role, quote, and star rating" settingsKey="home_testimonials" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Label (small badge text)" value={d.sectionLabel || ""} onChange={v => set({ ...d, sectionLabel: v })} />
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <ObjectArrayField label="Testimonials" value={d.items || []}
              fields={[
                { key: "quote" as const, label: "Quote Text", textarea: true },
                { key: "name" as const, label: "Client Name" },
                { key: "role" as const, label: "Role & Company" },
                { key: "rating" as const, label: "Rating (1-5)" },
              ]}
              onChange={v => set({ ...d, items: v })} />
          </div>
        )} />

      <SectionCard title="Partners Section" desc="Logo grid with heading and description" settingsKey="home_partners" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Heading" value={d.heading || ""} onChange={v => set({ ...d, heading: v })} />
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Description</Label>
              <Textarea value={d.description || ""} onChange={e => set({ ...d, description: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" />
            </div>
            <ObjectArrayField label="Partner Logos" value={d.logos || []}
              fields={[{ key: "name" as const, label: "Company Name" }]}
              onChange={v => set({ ...d, logos: v })} />
          </div>
        )} />

      <SectionCard title="Awards Section" desc="Awards heading, subheading, and award items" settingsKey="home_awards" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Heading" value={d.heading || ""} onChange={v => set({ ...d, heading: v })} />
            <FormField label="Subheading" value={d.description || ""} onChange={v => set({ ...d, description: v })} />
            <ObjectArrayField label="Award Items" value={d.items || []}
              fields={[
                { key: "name" as const, label: "Award Name" },
                { key: "subtitle" as const, label: "Subtitle (e.g. TOP DIGITAL MARKETING)" },
                { key: "site" as const, label: "Website (e.g. goodfirms.co)" },
              ]}
              onChange={v => set({ ...d, items: v })} />
          </div>
        )} />
    </div>
  );
}

// ── About Page Manager ────────────────────────────────────────────────────────

function AboutPageManager({ token }: { token: string }) {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-1">About Page</h2>
        <p className="text-zinc-400 text-sm">Edit all sections of the About Us page</p>
      </div>

      <SectionCard title="Hero Section" desc="Page banner with title, description, CTA, background image" settingsKey="about_hero" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Title (white text)" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
              <FormField label="Title Highlight (gradient)" value={d.titleHighlight || ""} onChange={v => set({ ...d, titleHighlight: v })} />
            </div>
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Description</Label>
              <Textarea value={d.description || ""} onChange={e => set({ ...d, description: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[100px]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="CTA Button Text" value={d.ctaText || ""} onChange={v => set({ ...d, ctaText: v })} />
              <FormField label="CTA Link" value={d.ctaHref || ""} onChange={v => set({ ...d, ctaHref: v })} />
            </div>
            <ImageUpload token={token} label="Hero Background Image" value={d.bgImage || ""} onChange={v => set({ ...d, bgImage: v })} />
          </div>
        )} />

      <SectionCard title="Stats Section" desc="4 key metrics shown below the hero" settingsKey="about_stats" token={token}
        renderForm={(d, set) => (
          <ObjectArrayField label="Stats" value={Array.isArray(d) ? d : []}
            fields={[{ key: "value" as const, label: "Value (e.g. 300%)" }, { key: "label" as const, label: "Label" }]}
            onChange={v => set(v)} />
        )} />

      <SectionCard title="Mission Statement" settingsKey="about_mission" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Mission Text</Label>
              <Textarea value={d.text || ""} onChange={e => set({ ...d, text: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[100px]" />
            </div>
          </div>
        )} />

      <SectionCard title="Vision Statement" settingsKey="about_vision" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Vision Text</Label>
              <Textarea value={d.text || ""} onChange={e => set({ ...d, text: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[100px]" />
            </div>
          </div>
        )} />

      <SectionCard title="Strategic Approach" desc="3-card section: Analysis, Targeting, Personalization" settingsKey="about_strategic" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <FormField label="Subtitle" value={d.subtitle || ""} onChange={v => set({ ...d, subtitle: v })} />
            <ObjectArrayField label="Approach Cards" value={d.items || []}
              fields={[
                { key: "title" as const, label: "Card Title" },
                { key: "desc" as const, label: "Description", textarea: true },
                { key: "icon" as const, label: "Icon name (bar-chart / target / zap)" },
              ]}
              onChange={v => set({ ...d, items: v })} />
          </div>
        )} />

      <SectionCard title="Why Choose Us" desc="Grid of 8 differentiators" settingsKey="about_whyus" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <ObjectArrayField label="Reasons" value={d.items || []}
              fields={[{ key: "title" as const, label: "Title (e.g. AI-Driven Precision)" }]}
              onChange={v => set({ ...d, items: v })} />
          </div>
        )} />

      <SectionCard title="Client Community Marquee" desc="Scrolling ticker of client brand names" settingsKey="about_clients" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <StringArrayField label="Client Names" value={d.clients || []} onChange={v => set({ ...d, clients: v })} />
          </div>
        )} />

      <SectionCard title="Leadership Team" desc="C-Suite member cards with photo, name, role, LinkedIn" settingsKey="about_team" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Section Subtitle</Label>
              <Textarea value={d.subtitle || ""} onChange={e => set({ ...d, subtitle: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[60px]" />
            </div>
            <div className="space-y-4">
              {(d.members || []).map((member: any, i: number) => (
                <div key={i} className="bg-zinc-800/60 border border-zinc-700 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-zinc-500 font-medium">Member #{i + 1}</span>
                    <Button type="button" variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-400 hover:text-red-300"
                      onClick={() => { const m = [...(d.members || [])]; m.splice(i, 1); set({ ...d, members: m }); }}>
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label className="text-xs text-zinc-400 mb-1 block">Full Name</Label>
                      <Input value={member.name || ""} onChange={e => { const m = [...(d.members || [])]; m[i] = { ...m[i], name: e.target.value }; set({ ...d, members: m }); }}
                        className="bg-zinc-900 border-zinc-600 text-white text-sm" />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400 mb-1 block">Designation</Label>
                      <Input value={member.designation || ""} onChange={e => { const m = [...(d.members || [])]; m[i] = { ...m[i], designation: e.target.value }; set({ ...d, members: m }); }}
                        className="bg-zinc-900 border-zinc-600 text-white text-sm" />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400 mb-1 block">Initials (2 letters)</Label>
                      <Input value={member.initials || ""} onChange={e => { const m = [...(d.members || [])]; m[i] = { ...m[i], initials: e.target.value }; set({ ...d, members: m }); }}
                        className="bg-zinc-900 border-zinc-600 text-white text-sm" />
                    </div>
                    <div>
                      <Label className="text-xs text-zinc-400 mb-1 block">LinkedIn URL</Label>
                      <Input value={member.linkedin || ""} onChange={e => { const m = [...(d.members || [])]; m[i] = { ...m[i], linkedin: e.target.value }; set({ ...d, members: m }); }}
                        className="bg-zinc-900 border-zinc-600 text-white text-sm" />
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs text-zinc-400 mb-1 block">Gradient (CSS, e.g. linear-gradient(135deg, #C13584, #E1306C))</Label>
                    <Input value={member.gradient || ""} onChange={e => { const m = [...(d.members || [])]; m[i] = { ...m[i], gradient: e.target.value }; set({ ...d, members: m }); }}
                      className="bg-zinc-900 border-zinc-600 text-white text-sm" />
                  </div>
                  <div>
                    <Label className="text-xs text-zinc-400 mb-1 block">Photo URL (leave blank for initials avatar)</Label>
                    <div className="flex gap-2">
                      <Input value={member.photo || ""} onChange={e => { const m = [...(d.members || [])]; m[i] = { ...m[i], photo: e.target.value }; set({ ...d, members: m }); }}
                        placeholder="/uploads/photo.jpg" className="bg-zinc-900 border-zinc-600 text-white text-sm" />
                    </div>
                    {member.photo && <img src={member.photo} alt="preview" className="h-12 w-12 rounded-full object-cover mt-2 border border-zinc-600" />}
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" size="sm" className="border-zinc-600 text-zinc-300 hover:bg-zinc-800"
                onClick={() => { const m = [...(d.members || [])]; m.push({ name: "", designation: "", initials: "", gradient: "", linkedin: "", photo: "" }); set({ ...d, members: m }); }}>
                <Plus className="h-3 w-3 mr-1" /> Add Member
              </Button>
            </div>
          </div>
        )} />

      <SectionCard title="Pre-Footer CTA" desc="'Ready to Embark...' call-to-action above footer" settingsKey="about_prefooter" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Title Line 1" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <FormField label="Title Highlight (gradient text)" value={d.titleHighlight || ""} onChange={v => set({ ...d, titleHighlight: v })} />
            <div className="grid grid-cols-2 gap-4">
              <FormField label="CTA Button Text" value={d.ctaText || ""} onChange={v => set({ ...d, ctaText: v })} />
              <FormField label="CTA Link" value={d.ctaHref || ""} onChange={v => set({ ...d, ctaHref: v })} />
            </div>
          </div>
        )} />
    </div>
  );
}

// ── Contact Page Manager ──────────────────────────────────────────────────────

function ContactPageManager({ token }: { token: string }) {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-1">Contact Page</h2>
        <p className="text-zinc-400 text-sm">Edit all sections of the Contact Us page</p>
      </div>

      <SectionCard title="Hero & Contact Info" desc="Page heading, sub-description, email, phone, address, background" settingsKey="contact_info" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Hero Badge Label" value={d.heroLabel || ""} onChange={v => set({ ...d, heroLabel: v })} placeholder="Contact Us" />
              <FormField label="Hero Title" value={d.heroTitle || ""} onChange={v => set({ ...d, heroTitle: v })} placeholder="Get in Touch" />
              <FormField label="Title Highlight (gradient)" value={d.heroTitleHighlight || ""} onChange={v => set({ ...d, heroTitleHighlight: v })} placeholder="with Us" />
            </div>
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Hero Description</Label>
              <Textarea value={d.heroDescription || ""} onChange={e => set({ ...d, heroDescription: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[80px]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
              <FormField label="Email" value={d.email || ""} onChange={v => set({ ...d, email: v })} type="email" />
              <FormField label="Phone" value={d.phone || ""} onChange={v => set({ ...d, phone: v })} />
            </div>
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Address</Label>
              <Textarea value={d.address || ""} onChange={e => set({ ...d, address: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[60px]" />
            </div>
            <ImageUpload token={token} label="Hero Background Image" value={d.bgImage || ""} onChange={v => set({ ...d, bgImage: v })} />
          </div>
        )} />

      <SectionCard title="Partners Bar" desc="Partner logos/names shown below contact details on hero" settingsKey="contact_partners" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Heading" value={d.heading || ""} onChange={v => set({ ...d, heading: v })} />
            <StringArrayField label="Partner Names" value={d.partners || []} onChange={v => set({ ...d, partners: v })} />
          </div>
        )} />

      <SectionCard title="India Office Details" desc="Office card: city, full address, email, phone, Google Maps embed" settingsKey="contact_office" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="City Name" value={d.city || ""} onChange={v => set({ ...d, city: v })} />
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Full Address</Label>
              <Textarea value={d.address || ""} onChange={e => set({ ...d, address: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[60px]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="Email" value={d.email || ""} onChange={v => set({ ...d, email: v })} type="email" />
              <FormField label="Phone" value={d.phone || ""} onChange={v => set({ ...d, phone: v })} />
            </div>
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Google Maps Embed URL</Label>
              <Textarea value={d.mapsUrl || ""} onChange={e => set({ ...d, mapsUrl: e.target.value })}
                placeholder="https://www.google.com/maps?q=...&output=embed"
                className="bg-zinc-800 border-zinc-700 text-white min-h-[60px] text-xs" />
            </div>
          </div>
        )} />

      <SectionCard title="Awards Section" desc="Award recognition grid displayed on contact page" settingsKey="contact_awards" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <FormField label="Subtitle" value={d.subtitle || ""} onChange={v => set({ ...d, subtitle: v })} />
            <StringArrayField label="Award Names" value={d.awards || []} onChange={v => set({ ...d, awards: v })} />
          </div>
        )} />

      <SectionCard title="FAQ Section" desc="Frequently asked questions accordion" settingsKey="contact_faq" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Section Title" value={d.title || ""} onChange={v => set({ ...d, title: v })} />
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Section Description</Label>
              <Textarea value={d.description || ""} onChange={e => set({ ...d, description: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[60px]" />
            </div>
            <ObjectArrayField label="FAQ Items" value={d.items || []}
              fields={[{ key: "q" as const, label: "Question" }, { key: "a" as const, label: "Answer", textarea: true }]}
              onChange={v => set({ ...d, items: v })} />
          </div>
        )} />
    </div>
  );
}

// ── Footer Settings Manager ───────────────────────────────────────────────────

function FooterSettingsManager({ token }: { token: string }) {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-2xl font-heading font-bold text-white mb-1">Footer & Social</h2>
        <p className="text-zinc-400 text-sm">Edit footer content, social media links, and the marketing banner</p>
      </div>

      <SectionCard title="Social Media Links" desc="All social media URLs used in the footer" settingsKey="footer_social" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Instagram URL" value={d.instagram || ""} onChange={v => set({ ...d, instagram: v })} placeholder="https://www.instagram.com/username/" />
            <FormField label="LinkedIn URL" value={d.linkedin || ""} onChange={v => set({ ...d, linkedin: v })} placeholder="https://www.linkedin.com/company/name/" />
            <FormField label="Twitter / X URL" value={d.twitter || ""} onChange={v => set({ ...d, twitter: v })} placeholder="https://x.com/username" />
            <FormField label="YouTube URL" value={d.youtube || ""} onChange={v => set({ ...d, youtube: v })} placeholder="https://www.youtube.com/@handle" />
            <FormField label="Facebook URL" value={d.facebook || ""} onChange={v => set({ ...d, facebook: v })} placeholder="https://www.facebook.com/pagename" />
          </div>
        )} />

      <SectionCard title="Footer Contact Info" desc="Email, phone, and address shown in the footer column" settingsKey="footer_contact" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Email" value={d.email || ""} onChange={v => set({ ...d, email: v })} type="email" />
            <FormField label="Phone" value={d.phone || ""} onChange={v => set({ ...d, phone: v })} />
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Address</Label>
              <Textarea value={d.address || ""} onChange={e => set({ ...d, address: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[60px]" />
            </div>
          </div>
        )} />

      <SectionCard title="Marketing Banner" desc="The gradient 'Market Smarter Not Harder' banner above footer" settingsKey="footer_banner" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <div>
              <Label className="text-zinc-300 mb-1.5 block text-sm">Banner Title</Label>
              <Textarea value={d.title || ""} onChange={e => set({ ...d, title: e.target.value })} className="bg-zinc-800 border-zinc-700 text-white min-h-[60px]" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="CTA Button Text" value={d.ctaText || ""} onChange={v => set({ ...d, ctaText: v })} />
              <FormField label="CTA Link" value={d.ctaHref || ""} onChange={v => set({ ...d, ctaHref: v })} />
            </div>
          </div>
        )} />

      <SectionCard title="Copyright Bar" desc="Bottom footer copyright text and developer credit" settingsKey="footer_copyright" token={token}
        renderForm={(d, set) => (
          <div className="space-y-4">
            <FormField label="Copyright Text (after © year)" value={d.text || ""} onChange={v => set({ ...d, text: v })} placeholder="Marketing AI Agency. All rights reserved." />
            <FormField label="Developer Name" value={d.developer || ""} onChange={v => set({ ...d, developer: v })} placeholder="Gopikrishna Malneedi" />
          </div>
        )} />
    </div>
  );
}

// ── Main Admin ───────────────────────────────────────────────────────────────

export default function Admin() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("adminToken"));
  const [active, setActive] = useState("dashboard");
  const [mobileNav, setMobileNav] = useState(false);

  const logout = () => { localStorage.removeItem("adminToken"); setToken(null); };

  if (!token) return <LoginScreen onLogin={setToken} />;

  const sections: Record<string, React.ReactNode> = {
    dashboard: <Dashboard token={token} />,
    "home-page": <HomePageManager token={token} />,
    "about-page": <AboutPageManager token={token} />,
    "contact-page": <ContactPageManager token={token} />,
    "footer-settings": <FooterSettingsManager token={token} />,
    services: <ServicesManager token={token} />,
    industries: <IndustriesManager token={token} />,
    portfolio: <PortfolioManager token={token} />,
    blogs: <BlogsManager token={token} />,
    "case-studies": <CaseStudiesManager token={token} />,
    "press-releases": <PressReleasesManager token={token} />,
    "site-settings": <SiteSettingsManager token={token} />,
    submissions: <SubmissionsManager token={token} />,
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      <div className="hidden lg:block">
        <Sidebar active={active} setActive={setActive} onLogout={logout} />
      </div>

      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-zinc-800 px-4 py-3 flex items-center justify-between">
        <p className="text-white font-bold text-sm">MAI Admin</p>
        <Button variant="ghost" size="sm" className="text-zinc-400" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? <X className="h-5 w-5" /> : <LayoutDashboard className="h-5 w-5" />}
        </Button>
      </div>

      {mobileNav && (
        <div className="lg:hidden fixed inset-0 z-40 bg-zinc-950/98 pt-14">
          <div className="p-3 space-y-0.5 overflow-y-auto h-full">
            {navItems.map(item => (
              <button key={item.id} onClick={() => { setActive(item.id); setMobileNav(false); }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-colors text-left ${
                  active === item.id ? "bg-gradient-to-r from-brand-pink/20 to-brand-yellow/10 text-white" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}>
                <item.icon className="h-4 w-4" /> {item.label}
              </button>
            ))}
            <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-400/10 mt-4">
              <LogOut className="h-4 w-4" /> Log Out
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 min-w-0 pt-14 lg:pt-0 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-8">
          {sections[active]}
        </div>
      </div>
    </div>
  );
}
