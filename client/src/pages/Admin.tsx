import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  LayoutDashboard, Zap, Building2, Briefcase, BookOpen, FileText,
  Newspaper, Settings, LogOut, Plus, Pencil, Trash2, ChevronLeft,
  Users, Star, Info, Phone, Mail, Eye, X, Check, Loader2, Menu
} from "lucide-react";
import logoImg from "@assets/MAI_logo_final_transparent.png";

// ── Types ─────────────────────────────────────────────────────────────────────
type Section =
  | "dashboard" | "services" | "industries" | "portfolio"
  | "blogs" | "case-studies" | "press-releases"
  | "settings" | "submissions";

interface NavItem { id: Section; label: string; icon: React.ElementType }
const NAV: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "services", label: "Services", icon: Zap },
  { id: "industries", label: "Industries", icon: Building2 },
  { id: "portfolio", label: "Portfolio", icon: Briefcase },
  { id: "blogs", label: "Blogs", icon: BookOpen },
  { id: "case-studies", label: "Case Studies", icon: FileText },
  { id: "press-releases", label: "Press Releases", icon: Newspaper },
  { id: "settings", label: "Site Settings", icon: Settings },
  { id: "submissions", label: "Submissions", icon: Users },
];

// ── API helper ────────────────────────────────────────────────────────────────
function useAdminApi(token: string) {
  const headers = { "Content-Type": "application/json", "x-admin-password": token };

  const get = (url: string) => fetch(url, { headers }).then(r => r.json());
  const post = (url: string, body: any) => fetch(url, { method: "POST", headers, body: JSON.stringify(body) }).then(r => r.json());
  const put = (url: string, body: any) => fetch(url, { method: "PUT", headers, body: JSON.stringify(body) }).then(r => r.json());
  const del = (url: string) => fetch(url, { method: "DELETE", headers }).then(r => r.json());

  return { get, post, put, del };
}

// ── Reusable helpers ───────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1">
      <Label className="text-xs text-zinc-400">{label}</Label>
      {children}
    </div>
  );
}

function inputCls() { return "bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-pink-500"; }
function areaCls() { return `${inputCls()} min-h-[80px]`; }

function PairArrayField({ label, value, onChange, keyA, keyB }: {
  label: string; value: { [k: string]: string }[];
  onChange: (v: any[]) => void; keyA: string; keyB: string;
}) {
  const add = () => onChange([...value, { [keyA]: "", [keyB]: "" }]);
  const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i));
  const update = (i: number, k: string, v: string) => {
    const copy = [...value]; copy[i] = { ...copy[i], [k]: v }; onChange(copy);
  };
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label className="text-xs text-zinc-400">{label}</Label>
        <button onClick={add} className="text-xs text-pink-400 hover:text-pink-300 flex items-center gap-1"><Plus size={12} /> Add</button>
      </div>
      {value.map((item, i) => (
        <div key={i} className="flex gap-2 items-start">
          <Input placeholder={keyA} value={item[keyA] || ""} onChange={e => update(i, keyA, e.target.value)} className={`${inputCls()} flex-1 h-8 text-sm`} />
          <Input placeholder={keyB} value={item[keyB] || ""} onChange={e => update(i, keyB, e.target.value)} className={`${inputCls()} flex-1 h-8 text-sm`} />
          <button onClick={() => remove(i)} className="text-zinc-500 hover:text-red-400 pt-1"><X size={14} /></button>
        </div>
      ))}
    </div>
  );
}

function StringArrayField({ label, value, onChange }: { label: string; value: string[]; onChange: (v: string[]) => void }) {
  const add = () => onChange([...value, ""]);
  const remove = (i: number) => onChange(value.filter((_, idx) => idx !== i));
  const update = (i: number, v: string) => { const copy = [...value]; copy[i] = v; onChange(copy); };
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Label className="text-xs text-zinc-400">{label}</Label>
        <button onClick={add} className="text-xs text-pink-400 hover:text-pink-300 flex items-center gap-1"><Plus size={12} /> Add</button>
      </div>
      {value.map((item, i) => (
        <div key={i} className="flex gap-2 items-center">
          <Textarea value={item} onChange={e => update(i, e.target.value)} className={`${inputCls()} flex-1 min-h-[60px] text-sm`} />
          <button onClick={() => remove(i)} className="text-zinc-500 hover:text-red-400"><X size={14} /></button>
        </div>
      ))}
    </div>
  );
}

function ConfirmDelete({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-zinc-400">Delete?</span>
      <button onClick={onConfirm} className="text-xs bg-red-600 hover:bg-red-700 px-2 py-0.5 rounded text-white">Yes</button>
      <button onClick={onCancel} className="text-xs text-zinc-400 hover:text-white">No</button>
    </div>
  );
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
function Dashboard({ token }: { token: string }) {
  const api = useAdminApi(token);
  const [counts, setCounts] = useState({ services: 0, industries: 0, portfolio: 0, blogs: 0, submissions: 0 });
  useEffect(() => {
    Promise.all([
      api.get("/api/services"), api.get("/api/industries"), api.get("/api/portfolio"),
      api.get("/api/blogs"), api.get("/api/admin/submissions"),
    ]).then(([s, i, p, b, sub]) => {
      setCounts({ services: s.length, industries: i.length, portfolio: p.length, blogs: b.length, submissions: sub.length });
    }).catch(() => {});
  }, [token]);

  const cards = [
    { label: "Services", count: counts.services, color: "from-pink-600 to-red-600", icon: Zap },
    { label: "Industries", count: counts.industries, color: "from-purple-600 to-pink-600", icon: Building2 },
    { label: "Portfolio Items", count: counts.portfolio, color: "from-orange-500 to-yellow-500", icon: Briefcase },
    { label: "Blog Posts", count: counts.blogs, color: "from-blue-600 to-cyan-500", icon: BookOpen },
    { label: "Contact Submissions", count: counts.submissions, color: "from-green-600 to-teal-500", icon: Users },
  ];

  return (
    <div className="p-6 max-w-5xl">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {cards.map(c => (
          <div key={c.label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0`}>
              <c.icon size={22} className="text-white" />
            </div>
            <div>
              <div className="text-3xl font-bold">{c.count}</div>
              <div className="text-sm text-zinc-400">{c.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
        <h3 className="font-semibold mb-3 text-zinc-200">Quick Links</h3>
        <div className="text-sm text-zinc-400 space-y-1">
          <p>Welcome to the MAI Admin Panel. Use the sidebar to manage all website content.</p>
          <p className="text-zinc-500">Changes made here are reflected live on the website.</p>
        </div>
      </div>
    </div>
  );
}

// ── Services Section ──────────────────────────────────────────────────────────
const emptyService = () => ({
  slug: "", title: "", description: "", iconName: "zap", displayOrder: 0, active: true,
  stats: [] as any[], benefits: [] as any[], process: [] as any[], redefined: null as any
});

function ServicesSection({ token }: { token: string }) {
  const api = useAdminApi(token);
  const { toast } = useToast();
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>(emptyService());
  const [editing, setEditing] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = useCallback(() => api.get("/api/services").then(setItems).catch(() => {}), [token]);
  useEffect(() => { load(); }, [load]);

  const openNew = () => { setForm(emptyService()); setEditing(null); setShowForm(true); };
  const openEdit = (item: any) => {
    setForm({ ...item, stats: item.stats || [], benefits: item.benefits || [], process: item.process || [], redefined: item.redefined || null });
    setEditing(item.id); setShowForm(true);
  };

  const save = async () => {
    setLoading(true);
    try {
      if (editing !== null) { await api.put(`/api/admin/services/${editing}`, form); toast({ title: "Service updated" }); }
      else { await api.post("/api/admin/services", form); toast({ title: "Service created" }); }
      setShowForm(false); load();
    } catch { toast({ title: "Error saving service", variant: "destructive" }); }
    setLoading(false);
  };

  const remove = async (id: number) => {
    try { await api.del(`/api/admin/services/${id}`); toast({ title: "Deleted" }); load(); }
    catch { toast({ title: "Error deleting", variant: "destructive" }); }
    setDeleting(null);
  };

  const set = (k: string, v: any) => setForm((f: any) => ({ ...f, [k]: v }));

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Services</h2>
        {!showForm && <Button onClick={openNew} size="sm" className="bg-gradient-to-r from-pink-600 to-red-600 border-0"><Plus size={16} className="mr-1" /> Add Service</Button>}
        {showForm && <Button onClick={() => setShowForm(false)} size="sm" variant="outline" className="border-zinc-700"><X size={16} className="mr-1" /> Cancel</Button>}
      </div>

      {showForm ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold">{editing ? "Edit Service" : "New Service"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Title"><Input value={form.title} onChange={e => set("title", e.target.value)} className={inputCls()} /></Field>
            <Field label="Slug (URL)"><Input value={form.slug} onChange={e => set("slug", e.target.value)} className={inputCls()} /></Field>
          </div>
          <Field label="Description"><Textarea value={form.description} onChange={e => set("description", e.target.value)} className={areaCls()} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Icon Name (lucide)"><Input value={form.iconName} onChange={e => set("iconName", e.target.value)} className={inputCls()} placeholder="zap, users, search..." /></Field>
            <Field label="Display Order"><Input type="number" value={form.displayOrder} onChange={e => set("displayOrder", Number(e.target.value))} className={inputCls()} /></Field>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="svc-active" checked={form.active} onChange={e => set("active", e.target.checked)} className="accent-pink-500" />
            <Label htmlFor="svc-active" className="text-sm">Active (visible on website)</Label>
          </div>
          <PairArrayField label="Stats" value={form.stats || []} onChange={v => set("stats", v)} keyA="value" keyB="label" />
          <PairArrayField label="Benefits" value={form.benefits || []} onChange={v => set("benefits", v)} keyA="title" keyB="desc" />
          <PairArrayField label="Process Steps" value={form.process || []} onChange={v => set("process", v)} keyA="title" keyB="desc" />
          <div className="space-y-2">
            <Label className="text-xs text-zinc-400">Redefined Section (optional)</Label>
            <div className="flex items-center gap-2 mb-2">
              <input type="checkbox" id="has-redefined" checked={!!form.redefined} onChange={e => set("redefined", e.target.checked ? { title: "", desc: "" } : null)} className="accent-pink-500" />
              <Label htmlFor="has-redefined" className="text-sm">Include "Redefined" section</Label>
            </div>
            {form.redefined && (
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Title" value={form.redefined?.title || ""} onChange={e => set("redefined", { ...form.redefined, title: e.target.value })} className={inputCls()} />
                <Input placeholder="Description" value={form.redefined?.desc || ""} onChange={e => set("redefined", { ...form.redefined, desc: e.target.value })} className={inputCls()} />
              </div>
            )}
          </div>
          <Button onClick={save} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
            {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save Service
          </Button>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-zinc-800 text-zinc-400 text-left">
              <th className="p-3">Title</th><th className="p-3">Slug</th><th className="p-3">Order</th><th className="p-3">Status</th><th className="p-3">Actions</th>
            </tr></thead>
            <tbody>{items.map(item => (
              <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="p-3 font-medium">{item.title}</td>
                <td className="p-3 text-zinc-400 font-mono text-xs">{item.slug}</td>
                <td className="p-3 text-zinc-400">{item.displayOrder}</td>
                <td className="p-3"><Badge className={item.active ? "bg-green-600/20 text-green-400 border-green-600/30" : "bg-zinc-700 text-zinc-400"}>{item.active ? "Active" : "Hidden"}</Badge></td>
                <td className="p-3">
                  {deleting === item.id ? <ConfirmDelete onConfirm={() => remove(item.id)} onCancel={() => setDeleting(null)} /> : (
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="text-zinc-400 hover:text-white p-1"><Pencil size={14} /></button>
                      <button onClick={() => setDeleting(item.id)} className="text-zinc-400 hover:text-red-400 p-1"><Trash2 size={14} /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Industries Section ────────────────────────────────────────────────────────
const emptyIndustry = () => ({ slug: "", title: "", description: "", iconName: "briefcase", displayOrder: 0, active: true });

function IndustriesSection({ token }: { token: string }) {
  const api = useAdminApi(token);
  const { toast } = useToast();
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>(emptyIndustry());
  const [editing, setEditing] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = useCallback(() => api.get("/api/industries").then(setItems).catch(() => {}), [token]);
  useEffect(() => { load(); }, [load]);

  const openNew = () => { setForm(emptyIndustry()); setEditing(null); setShowForm(true); };
  const openEdit = (item: any) => { setForm({ ...item }); setEditing(item.id); setShowForm(true); };
  const set = (k: string, v: any) => setForm((f: any) => ({ ...f, [k]: v }));

  const save = async () => {
    setLoading(true);
    try {
      if (editing !== null) { await api.put(`/api/admin/industries/${editing}`, form); toast({ title: "Industry updated" }); }
      else { await api.post("/api/admin/industries", form); toast({ title: "Industry created" }); }
      setShowForm(false); load();
    } catch { toast({ title: "Error", variant: "destructive" }); }
    setLoading(false);
  };

  const remove = async (id: number) => {
    try { await api.del(`/api/admin/industries/${id}`); toast({ title: "Deleted" }); load(); }
    catch { toast({ title: "Error", variant: "destructive" }); }
    setDeleting(null);
  };

  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Industries</h2>
        {!showForm && <Button onClick={openNew} size="sm" className="bg-gradient-to-r from-pink-600 to-red-600 border-0"><Plus size={16} className="mr-1" /> Add Industry</Button>}
        {showForm && <Button onClick={() => setShowForm(false)} size="sm" variant="outline" className="border-zinc-700"><X size={16} className="mr-1" /> Cancel</Button>}
      </div>
      {showForm ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold">{editing ? "Edit Industry" : "New Industry"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Title"><Input value={form.title} onChange={e => set("title", e.target.value)} className={inputCls()} /></Field>
            <Field label="Slug (URL)"><Input value={form.slug} onChange={e => set("slug", e.target.value)} className={inputCls()} /></Field>
          </div>
          <Field label="Description"><Textarea value={form.description} onChange={e => set("description", e.target.value)} className={areaCls()} /></Field>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Icon Name"><Input value={form.iconName} onChange={e => set("iconName", e.target.value)} className={inputCls()} placeholder="briefcase, cpu..." /></Field>
            <Field label="Display Order"><Input type="number" value={form.displayOrder} onChange={e => set("displayOrder", Number(e.target.value))} className={inputCls()} /></Field>
            <div className="flex items-end pb-0.5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.active} onChange={e => set("active", e.target.checked)} className="accent-pink-500" />
                <span className="text-sm">Active</span>
              </label>
            </div>
          </div>
          <Button onClick={save} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
            {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save
          </Button>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-zinc-800 text-zinc-400 text-left">
              <th className="p-3">Title</th><th className="p-3">Slug</th><th className="p-3">Icon</th><th className="p-3">Order</th><th className="p-3">Status</th><th className="p-3">Actions</th>
            </tr></thead>
            <tbody>{items.map(item => (
              <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="p-3 font-medium">{item.title}</td>
                <td className="p-3 font-mono text-xs text-zinc-400">{item.slug}</td>
                <td className="p-3 text-zinc-400 font-mono text-xs">{item.iconName}</td>
                <td className="p-3 text-zinc-400">{item.displayOrder}</td>
                <td className="p-3"><Badge className={item.active ? "bg-green-600/20 text-green-400 border-green-600/30" : "bg-zinc-700 text-zinc-400"}>{item.active ? "Active" : "Hidden"}</Badge></td>
                <td className="p-3">
                  {deleting === item.id ? <ConfirmDelete onConfirm={() => remove(item.id)} onCancel={() => setDeleting(null)} /> : (
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="text-zinc-400 hover:text-white p-1"><Pencil size={14} /></button>
                      <button onClick={() => setDeleting(item.id)} className="text-zinc-400 hover:text-red-400 p-1"><Trash2 size={14} /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Portfolio Section ──────────────────────────────────────────────────────────
const emptyPortfolio = () => ({
  slug: "", client: "", clientColor: "text-pink-500", category: "", industry: "", headline: "", tagline: "",
  heroImage: "", coverImage: "", overview: "", challenge: "", approach: [] as string[],
  results: [] as any[], projectServices: [] as string[], duration: "", displayOrder: 0, active: true,
});

function PortfolioSection({ token }: { token: string }) {
  const api = useAdminApi(token);
  const { toast } = useToast();
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>(emptyPortfolio());
  const [editing, setEditing] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = useCallback(() => api.get("/api/portfolio").then(setItems).catch(() => {}), [token]);
  useEffect(() => { load(); }, [load]);

  const openNew = () => { setForm(emptyPortfolio()); setEditing(null); setShowForm(true); };
  const openEdit = (item: any) => {
    setForm({ ...item, approach: item.approach || [], results: item.results || [], projectServices: item.projectServices || [] });
    setEditing(item.id); setShowForm(true);
  };
  const set = (k: string, v: any) => setForm((f: any) => ({ ...f, [k]: v }));

  const save = async () => {
    setLoading(true);
    try {
      if (editing !== null) { await api.put(`/api/admin/portfolio/${editing}`, form); toast({ title: "Portfolio item updated" }); }
      else { await api.post("/api/admin/portfolio", form); toast({ title: "Portfolio item created" }); }
      setShowForm(false); load();
    } catch { toast({ title: "Error", variant: "destructive" }); }
    setLoading(false);
  };

  const remove = async (id: number) => {
    try { await api.del(`/api/admin/portfolio/${id}`); toast({ title: "Deleted" }); load(); }
    catch { toast({ title: "Error", variant: "destructive" }); }
    setDeleting(null);
  };

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Portfolio / Success Stories</h2>
        {!showForm && <Button onClick={openNew} size="sm" className="bg-gradient-to-r from-pink-600 to-red-600 border-0"><Plus size={16} className="mr-1" /> Add Item</Button>}
        {showForm && <Button onClick={() => setShowForm(false)} size="sm" variant="outline" className="border-zinc-700"><X size={16} className="mr-1" /> Cancel</Button>}
      </div>
      {showForm ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold">{editing ? "Edit Portfolio Item" : "New Portfolio Item"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Client Name"><Input value={form.client} onChange={e => set("client", e.target.value)} className={inputCls()} /></Field>
            <Field label="Slug (URL)"><Input value={form.slug} onChange={e => set("slug", e.target.value)} className={inputCls()} /></Field>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Client Color Class"><Input value={form.clientColor} onChange={e => set("clientColor", e.target.value)} className={inputCls()} placeholder="text-pink-500" /></Field>
            <Field label="Category"><Input value={form.category} onChange={e => set("category", e.target.value)} className={inputCls()} /></Field>
            <Field label="Industry"><Input value={form.industry} onChange={e => set("industry", e.target.value)} className={inputCls()} /></Field>
          </div>
          <Field label="Headline"><Input value={form.headline} onChange={e => set("headline", e.target.value)} className={inputCls()} /></Field>
          <Field label="Tagline"><Input value={form.tagline} onChange={e => set("tagline", e.target.value)} className={inputCls()} /></Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Hero Image (keyword)"><Input value={form.heroImage} onChange={e => set("heroImage", e.target.value)} className={inputCls()} /></Field>
            <Field label="Cover Image (keyword)"><Input value={form.coverImage} onChange={e => set("coverImage", e.target.value)} className={inputCls()} /></Field>
          </div>
          <Field label="Overview"><Textarea value={form.overview} onChange={e => set("overview", e.target.value)} className={`${inputCls()} min-h-[100px]`} /></Field>
          <Field label="Challenge"><Textarea value={form.challenge} onChange={e => set("challenge", e.target.value)} className={`${inputCls()} min-h-[100px]`} /></Field>
          <StringArrayField label="Approach Steps" value={form.approach || []} onChange={v => set("approach", v)} />
          <PairArrayField label="Results" value={form.results || []} onChange={v => set("results", v)} keyA="value" keyB="label" />
          <div className="space-y-2">
            <Label className="text-xs text-zinc-400">Services Used (comma-separated)</Label>
            <Input value={(form.projectServices || []).join(", ")} onChange={e => set("projectServices", e.target.value.split(",").map((s: string) => s.trim()).filter(Boolean))} className={inputCls()} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Duration"><Input value={form.duration} onChange={e => set("duration", e.target.value)} className={inputCls()} placeholder="4 months" /></Field>
            <Field label="Display Order"><Input type="number" value={form.displayOrder} onChange={e => set("displayOrder", Number(e.target.value))} className={inputCls()} /></Field>
            <div className="flex items-end pb-0.5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.active} onChange={e => set("active", e.target.checked)} className="accent-pink-500" />
                <span className="text-sm">Active</span>
              </label>
            </div>
          </div>
          <Button onClick={save} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
            {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save
          </Button>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-zinc-800 text-zinc-400 text-left">
              <th className="p-3">Client</th><th className="p-3">Category</th><th className="p-3">Industry</th><th className="p-3">Duration</th><th className="p-3">Actions</th>
            </tr></thead>
            <tbody>{items.map(item => (
              <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="p-3 font-medium">{item.client}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.category}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.industry}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.duration}</td>
                <td className="p-3">
                  {deleting === item.id ? <ConfirmDelete onConfirm={() => remove(item.id)} onCancel={() => setDeleting(null)} /> : (
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="text-zinc-400 hover:text-white p-1"><Pencil size={14} /></button>
                      <button onClick={() => setDeleting(item.id)} className="text-zinc-400 hover:text-red-400 p-1"><Trash2 size={14} /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Blogs Section ─────────────────────────────────────────────────────────────
const emptyBlog = () => ({
  slug: "", title: "", category: "", description: "", content: "",
  image: "", createdAt: "", author: "MAI Team", readTime: "5 min read", featured: false
});

function BlogsSection({ token }: { token: string }) {
  const api = useAdminApi(token);
  const { toast } = useToast();
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>(emptyBlog());
  const [editing, setEditing] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = useCallback(() => api.get("/api/blogs").then(setItems).catch(() => {}), [token]);
  useEffect(() => { load(); }, [load]);

  const openNew = () => { setForm(emptyBlog()); setEditing(null); setShowForm(true); };
  const openEdit = (item: any) => { setForm({ ...item }); setEditing(item.id); setShowForm(true); };
  const set = (k: string, v: any) => setForm((f: any) => ({ ...f, [k]: v }));

  const save = async () => {
    setLoading(true);
    try {
      if (editing !== null) { await api.put(`/api/admin/blogs/${editing}`, form); toast({ title: "Blog updated" }); }
      else { await api.post("/api/admin/blogs", form); toast({ title: "Blog created" }); }
      setShowForm(false); load();
    } catch { toast({ title: "Error", variant: "destructive" }); }
    setLoading(false);
  };

  const remove = async (id: number) => {
    try { await api.del(`/api/admin/blogs/${id}`); toast({ title: "Deleted" }); load(); }
    catch { toast({ title: "Error", variant: "destructive" }); }
    setDeleting(null);
  };

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        {!showForm && <Button onClick={openNew} size="sm" className="bg-gradient-to-r from-pink-600 to-red-600 border-0"><Plus size={16} className="mr-1" /> New Blog Post</Button>}
        {showForm && <Button onClick={() => setShowForm(false)} size="sm" variant="outline" className="border-zinc-700"><X size={16} className="mr-1" /> Cancel</Button>}
      </div>
      {showForm ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold">{editing ? "Edit Blog Post" : "New Blog Post"}</h3>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Title"><Input value={form.title} onChange={e => set("title", e.target.value)} className={inputCls()} /></Field>
            <Field label="Slug"><Input value={form.slug} onChange={e => set("slug", e.target.value)} className={inputCls()} /></Field>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Category"><Input value={form.category} onChange={e => set("category", e.target.value)} className={inputCls()} /></Field>
            <Field label="Author"><Input value={form.author} onChange={e => set("author", e.target.value)} className={inputCls()} /></Field>
            <Field label="Read Time"><Input value={form.readTime} onChange={e => set("readTime", e.target.value)} className={inputCls()} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Date (e.g. Aug 25, 2025)"><Input value={form.createdAt} onChange={e => set("createdAt", e.target.value)} className={inputCls()} /></Field>
            <Field label="Image URL"><Input value={form.image} onChange={e => set("image", e.target.value)} className={inputCls()} /></Field>
          </div>
          <Field label="Short Description"><Textarea value={form.description} onChange={e => set("description", e.target.value)} className={areaCls()} /></Field>
          <Field label="Content (HTML)"><Textarea value={form.content} onChange={e => set("content", e.target.value)} className={`${inputCls()} min-h-[200px]`} /></Field>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="blog-featured" checked={form.featured} onChange={e => set("featured", e.target.checked)} className="accent-pink-500" />
            <Label htmlFor="blog-featured" className="text-sm">Featured (shown prominently)</Label>
          </div>
          <Button onClick={save} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
            {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save Blog Post
          </Button>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-zinc-800 text-zinc-400 text-left">
              <th className="p-3">Title</th><th className="p-3">Category</th><th className="p-3">Author</th><th className="p-3">Date</th><th className="p-3">Featured</th><th className="p-3">Actions</th>
            </tr></thead>
            <tbody>{items.map(item => (
              <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="p-3 font-medium max-w-[200px] truncate">{item.title}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.category}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.author}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.createdAt}</td>
                <td className="p-3">{item.featured ? <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-600/30">Featured</Badge> : null}</td>
                <td className="p-3">
                  {deleting === item.id ? <ConfirmDelete onConfirm={() => remove(item.id)} onCancel={() => setDeleting(null)} /> : (
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="text-zinc-400 hover:text-white p-1"><Pencil size={14} /></button>
                      <button onClick={() => setDeleting(item.id)} className="text-zinc-400 hover:text-red-400 p-1"><Trash2 size={14} /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Case Studies Section ───────────────────────────────────────────────────────
const emptyCS = () => ({ slug: "", title: "", client: "", category: "", date: "", description: "", content: "", image: "", color: "#E1306C", stats: [] as any[] });

function CaseStudiesSection({ token }: { token: string }) {
  const api = useAdminApi(token);
  const { toast } = useToast();
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>(emptyCS());
  const [editing, setEditing] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = useCallback(() => api.get("/api/case-studies").then(setItems).catch(() => {}), [token]);
  useEffect(() => { load(); }, [load]);
  const openNew = () => { setForm(emptyCS()); setEditing(null); setShowForm(true); };
  const openEdit = (item: any) => { setForm({ ...item, stats: item.stats || [] }); setEditing(item.id); setShowForm(true); };
  const set = (k: string, v: any) => setForm((f: any) => ({ ...f, [k]: v }));

  const save = async () => {
    setLoading(true);
    try {
      if (editing !== null) { await api.put(`/api/admin/case-studies/${editing}`, form); toast({ title: "Case study updated" }); }
      else { await api.post("/api/admin/case-studies", form); toast({ title: "Case study created" }); }
      setShowForm(false); load();
    } catch { toast({ title: "Error", variant: "destructive" }); }
    setLoading(false);
  };
  const remove = async (id: number) => {
    try { await api.del(`/api/admin/case-studies/${id}`); toast({ title: "Deleted" }); load(); }
    catch { toast({ title: "Error", variant: "destructive" }); }
    setDeleting(null);
  };

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Case Studies</h2>
        {!showForm && <Button onClick={openNew} size="sm" className="bg-gradient-to-r from-pink-600 to-red-600 border-0"><Plus size={16} className="mr-1" /> New Case Study</Button>}
        {showForm && <Button onClick={() => setShowForm(false)} size="sm" variant="outline" className="border-zinc-700"><X size={16} className="mr-1" /> Cancel</Button>}
      </div>
      {showForm ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Title"><Input value={form.title} onChange={e => set("title", e.target.value)} className={inputCls()} /></Field>
            <Field label="Slug"><Input value={form.slug} onChange={e => set("slug", e.target.value)} className={inputCls()} /></Field>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Client"><Input value={form.client} onChange={e => set("client", e.target.value)} className={inputCls()} /></Field>
            <Field label="Category"><Input value={form.category} onChange={e => set("category", e.target.value)} className={inputCls()} /></Field>
            <Field label="Date"><Input value={form.date} onChange={e => set("date", e.target.value)} className={inputCls()} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Image URL"><Input value={form.image} onChange={e => set("image", e.target.value)} className={inputCls()} /></Field>
            <Field label="Color (hex)"><Input value={form.color} onChange={e => set("color", e.target.value)} className={inputCls()} /></Field>
          </div>
          <Field label="Description"><Textarea value={form.description} onChange={e => set("description", e.target.value)} className={areaCls()} /></Field>
          <Field label="Content (HTML)"><Textarea value={form.content} onChange={e => set("content", e.target.value)} className={`${inputCls()} min-h-[150px]`} /></Field>
          <PairArrayField label="Stats" value={form.stats || []} onChange={v => set("stats", v)} keyA="label" keyB="value" />
          <Button onClick={save} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
            {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save
          </Button>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-zinc-800 text-zinc-400 text-left"><th className="p-3">Title</th><th className="p-3">Client</th><th className="p-3">Category</th><th className="p-3">Actions</th></tr></thead>
            <tbody>{items.map(item => (
              <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="p-3 font-medium max-w-[200px] truncate">{item.title}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.client}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.category}</td>
                <td className="p-3">
                  {deleting === item.id ? <ConfirmDelete onConfirm={() => remove(item.id)} onCancel={() => setDeleting(null)} /> : (
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="text-zinc-400 hover:text-white p-1"><Pencil size={14} /></button>
                      <button onClick={() => setDeleting(item.id)} className="text-zinc-400 hover:text-red-400 p-1"><Trash2 size={14} /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Press Releases Section ────────────────────────────────────────────────────
const emptyPR = () => ({ slug: "", title: "", category: "", source: "", description: "", content: "", date: "", year: "", link: "" });

function PressReleasesSection({ token }: { token: string }) {
  const api = useAdminApi(token);
  const { toast } = useToast();
  const [items, setItems] = useState<any[]>([]);
  const [form, setForm] = useState<any>(emptyPR());
  const [editing, setEditing] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);

  const load = useCallback(() => api.get("/api/press-releases").then(setItems).catch(() => {}), [token]);
  useEffect(() => { load(); }, [load]);
  const openNew = () => { setForm(emptyPR()); setEditing(null); setShowForm(true); };
  const openEdit = (item: any) => { setForm({ ...item }); setEditing(item.id); setShowForm(true); };
  const set = (k: string, v: any) => setForm((f: any) => ({ ...f, [k]: v }));

  const save = async () => {
    setLoading(true);
    try {
      if (editing !== null) { await api.put(`/api/admin/press-releases/${editing}`, form); toast({ title: "Press release updated" }); }
      else { await api.post("/api/admin/press-releases", form); toast({ title: "Press release created" }); }
      setShowForm(false); load();
    } catch { toast({ title: "Error", variant: "destructive" }); }
    setLoading(false);
  };
  const remove = async (id: number) => {
    try { await api.del(`/api/admin/press-releases/${id}`); toast({ title: "Deleted" }); load(); }
    catch { toast({ title: "Error", variant: "destructive" }); }
    setDeleting(null);
  };

  return (
    <div className="p-6 max-w-5xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Press Releases</h2>
        {!showForm && <Button onClick={openNew} size="sm" className="bg-gradient-to-r from-pink-600 to-red-600 border-0"><Plus size={16} className="mr-1" /> New Press Release</Button>}
        {showForm && <Button onClick={() => setShowForm(false)} size="sm" variant="outline" className="border-zinc-700"><X size={16} className="mr-1" /> Cancel</Button>}
      </div>
      {showForm ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Title"><Input value={form.title} onChange={e => set("title", e.target.value)} className={inputCls()} /></Field>
            <Field label="Slug"><Input value={form.slug} onChange={e => set("slug", e.target.value)} className={inputCls()} /></Field>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Field label="Category"><Input value={form.category} onChange={e => set("category", e.target.value)} className={inputCls()} /></Field>
            <Field label="Source"><Input value={form.source} onChange={e => set("source", e.target.value)} className={inputCls()} /></Field>
            <Field label="Year"><Input value={form.year} onChange={e => set("year", e.target.value)} className={inputCls()} /></Field>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Date (e.g. Dec 15, 2025)"><Input value={form.date} onChange={e => set("date", e.target.value)} className={inputCls()} /></Field>
            <Field label="External Link"><Input value={form.link} onChange={e => set("link", e.target.value)} className={inputCls()} /></Field>
          </div>
          <Field label="Description"><Textarea value={form.description} onChange={e => set("description", e.target.value)} className={areaCls()} /></Field>
          <Field label="Content (HTML)"><Textarea value={form.content} onChange={e => set("content", e.target.value)} className={`${inputCls()} min-h-[150px]`} /></Field>
          <Button onClick={save} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
            {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save
          </Button>
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-zinc-800 text-zinc-400 text-left"><th className="p-3">Title</th><th className="p-3">Source</th><th className="p-3">Year</th><th className="p-3">Actions</th></tr></thead>
            <tbody>{items.map(item => (
              <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="p-3 font-medium max-w-[250px] truncate">{item.title}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.source}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.year}</td>
                <td className="p-3">
                  {deleting === item.id ? <ConfirmDelete onConfirm={() => remove(item.id)} onCancel={() => setDeleting(null)} /> : (
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="text-zinc-400 hover:text-white p-1"><Pencil size={14} /></button>
                      <button onClick={() => setDeleting(item.id)} className="text-zinc-400 hover:text-red-400 p-1"><Trash2 size={14} /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ── Settings Section ──────────────────────────────────────────────────────────
function SettingsSection({ token }: { token: string }) {
  const api = useAdminApi(token);
  const { toast } = useToast();
  const [contactInfo, setContactInfo] = useState({ email: "", phone: "", whatsapp: "", address: "", linkedin: "", instagram: "", twitter: "" });
  const [aboutStats, setAboutStats] = useState<any[]>([]);
  const [homeStats, setHomeStats] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/site-settings").then(r => r.json()).then(data => {
      if (data.contact_info) setContactInfo(data.contact_info);
      if (data.about_stats) setAboutStats(data.about_stats);
      if (data.home_stats) setHomeStats(data.home_stats);
    }).catch(() => {});
  }, [token]);

  const save = async (key: string, value: any) => {
    setLoading(true);
    try {
      await api.put(`/api/admin/site-settings/${key}`, { value });
      toast({ title: "Settings saved" });
    } catch { toast({ title: "Error saving", variant: "destructive" }); }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-4xl space-y-8">
      <h2 className="text-2xl font-bold">Site Settings</h2>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
        <h3 className="font-semibold flex items-center gap-2"><Phone size={16} className="text-pink-400" /> Contact Information</h3>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Email"><Input value={contactInfo.email} onChange={e => setContactInfo(p => ({ ...p, email: e.target.value }))} className={inputCls()} /></Field>
          <Field label="Phone"><Input value={contactInfo.phone} onChange={e => setContactInfo(p => ({ ...p, phone: e.target.value }))} className={inputCls()} /></Field>
          <Field label="WhatsApp Number (no +)"><Input value={contactInfo.whatsapp} onChange={e => setContactInfo(p => ({ ...p, whatsapp: e.target.value }))} className={inputCls()} /></Field>
          <Field label="Address"><Input value={contactInfo.address} onChange={e => setContactInfo(p => ({ ...p, address: e.target.value }))} className={inputCls()} /></Field>
          <Field label="LinkedIn URL"><Input value={contactInfo.linkedin} onChange={e => setContactInfo(p => ({ ...p, linkedin: e.target.value }))} className={inputCls()} /></Field>
          <Field label="Instagram URL"><Input value={contactInfo.instagram} onChange={e => setContactInfo(p => ({ ...p, instagram: e.target.value }))} className={inputCls()} /></Field>
          <Field label="Twitter/X URL"><Input value={contactInfo.twitter} onChange={e => setContactInfo(p => ({ ...p, twitter: e.target.value }))} className={inputCls()} /></Field>
        </div>
        <Button onClick={() => save("contact_info", contactInfo)} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
          {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save Contact Info
        </Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
        <h3 className="font-semibold flex items-center gap-2"><Info size={16} className="text-pink-400" /> About Page Stats</h3>
        <PairArrayField label="Stats (value, label)" value={aboutStats} onChange={setAboutStats} keyA="value" keyB="label" />
        <Button onClick={() => save("about_stats", aboutStats)} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
          {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save About Stats
        </Button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
        <h3 className="font-semibold flex items-center gap-2"><Star size={16} className="text-pink-400" /> Home Page Stats Bar</h3>
        <PairArrayField label="Stats (value, label)" value={homeStats} onChange={setHomeStats} keyA="value" keyB="label" />
        <Button onClick={() => save("home_stats", homeStats)} disabled={loading} className="bg-gradient-to-r from-pink-600 to-red-600 border-0">
          {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : <Check size={16} className="mr-2" />} Save Home Stats
        </Button>
      </div>
    </div>
  );
}

// ── Submissions Section ───────────────────────────────────────────────────────
function SubmissionsSection({ token }: { token: string }) {
  const api = useAdminApi(token);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => { api.get("/api/admin/submissions").then(setItems).catch(() => {}); }, [token]);

  return (
    <div className="p-6 max-w-5xl">
      <h2 className="text-2xl font-bold mb-6">Contact Submissions</h2>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        {items.length === 0 ? (
          <div className="p-12 text-center text-zinc-500">No submissions yet.</div>
        ) : (
          <table className="w-full text-sm">
            <thead><tr className="border-b border-zinc-800 text-zinc-400 text-left">
              <th className="p-3">Name</th><th className="p-3">Email</th><th className="p-3">Phone</th>
              <th className="p-3">Service</th><th className="p-3">Message</th><th className="p-3">Date</th>
            </tr></thead>
            <tbody>{items.map(item => (
              <tr key={item.id} className="border-b border-zinc-800/50 hover:bg-zinc-800/30">
                <td className="p-3 font-medium">{item.name}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.email}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.phone}</td>
                <td className="p-3 text-zinc-400 text-xs">{item.service}</td>
                <td className="p-3 text-zinc-400 text-xs max-w-[200px] truncate">{item.message}</td>
                <td className="p-3 text-zinc-500 text-xs">{item.submittedAt ? new Date(item.submittedAt).toLocaleDateString() : ""}</td>
              </tr>
            ))}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ── Login Screen ──────────────────────────────────────────────────────────────
function AdminLogin({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", password);
        onLogin(password);
        toast({ title: "Welcome to admin panel" });
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch {
      setError("Failed to connect. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src={logoImg} alt="MAI" className="h-12 object-contain mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-zinc-500 text-sm mt-1">Enter your admin password to continue</p>
        </div>
        <form onSubmit={handleLogin} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
          <Field label="Password">
            <Input
              type="password" value={password} onChange={e => setPassword(e.target.value)}
              className={inputCls()} placeholder="Enter admin password" autoFocus
              data-testid="input-admin-password"
            />
          </Field>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <Button type="submit" disabled={loading || !password} className="w-full bg-gradient-to-r from-pink-600 to-red-600 border-0" data-testid="button-admin-login">
            {loading ? <Loader2 size={16} className="animate-spin mr-2" /> : null}
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        <div className="text-center mt-4">
          <Link href="/" className="text-zinc-500 text-sm hover:text-zinc-300">← Back to website</Link>
        </div>
      </div>
    </div>
  );
}

// ── Main Admin App ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [token, setToken] = useState(() => localStorage.getItem("adminToken") || "");
  const [section, setSection] = useState<Section>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logout = () => { localStorage.removeItem("adminToken"); setToken(""); };

  if (!token) return <AdminLogin onLogin={setToken} />;

  const sectionComponents: Record<Section, React.ReactNode> = {
    dashboard: <Dashboard token={token} />,
    services: <ServicesSection token={token} />,
    industries: <IndustriesSection token={token} />,
    portfolio: <PortfolioSection token={token} />,
    blogs: <BlogsSection token={token} />,
    "case-studies": <CaseStudiesSection token={token} />,
    "press-releases": <PressReleasesSection token={token} />,
    settings: <SettingsSection token={token} />,
    submissions: <SubmissionsSection token={token} />,
  };

  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/60 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 left-0 w-60 bg-zinc-900 border-r border-zinc-800 flex flex-col z-30 transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="p-4 border-b border-zinc-800">
          <img src={logoImg} alt="MAI" className="h-8 object-contain" />
          <div className="text-xs text-zinc-500 mt-1 font-mono">Admin Panel</div>
        </div>
        <nav className="flex-1 overflow-y-auto py-3">
          {NAV.map(item => (
            <button
              key={item.id}
              onClick={() => { setSection(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all ${section === item.id ? "bg-gradient-to-r from-pink-600/20 to-red-600/10 text-white border-r-2 border-pink-500" : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"}`}
              data-testid={`nav-${item.id}`}
            >
              <item.icon size={16} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-zinc-800 space-y-2">
          <Link href="/" className="flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors">
            <Eye size={14} /> View Website
          </Link>
          <button onClick={logout} className="flex items-center gap-2 text-xs text-zinc-500 hover:text-red-400 transition-colors">
            <LogOut size={14} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobile header */}
        <div className="md:hidden flex items-center gap-3 p-4 border-b border-zinc-800 bg-zinc-900">
          <button onClick={() => setSidebarOpen(true)} className="text-zinc-400 hover:text-white"><Menu size={20} /></button>
          <span className="font-semibold text-sm">{NAV.find(n => n.id === section)?.label}</span>
        </div>
        {sectionComponents[section]}
      </main>
    </div>
  );
}
