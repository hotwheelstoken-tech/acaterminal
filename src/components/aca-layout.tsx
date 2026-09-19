import { Link } from "@tanstack/react-router";
import { Menu, X as XIcon, ExternalLink } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BUY_URL, X_URL, navItems } from "@/lib/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return <div className="cursor-system min-h-screen"><CustomCursor /><SiteHeader /><main>{children}</main><SiteFooter /></div>;
}

function SiteHeader() {
  return <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/75 backdrop-blur-xl">
    <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-4 sm:px-6">
      <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="ACA home"><img src="/assets/aca-logo.png" alt="" className="size-11 shrink-0 object-contain" /><span className="truncate font-display text-lg font-bold uppercase text-foreground">Arc Coding Agent</span></Link>
      <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">{navItems.map((item) => item.to.includes("#") ? <a key={item.label} href={item.to} className="font-mono text-[10px] uppercase text-muted-foreground transition-colors hover:text-primary-bright">{item.label}</a> : <Link key={item.label} to={item.to} activeProps={{ className: "text-primary-bright" }} className="font-mono text-[10px] uppercase text-muted-foreground transition-colors hover:text-primary-bright">{item.label}</Link>)}</nav>
      <div className="ml-5 hidden items-center gap-2 xl:flex"><Button asChild><a href={BUY_URL} target="_blank" rel="noopener noreferrer">Buy $ACA <ExternalLink /></a></Button>{X_URL ? <Button asChild variant="outline" size="icon"><a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="Follow ACA on X"><XIcon /></a></Button> : <Button variant="outline" size="icon" disabled aria-label="X profile coming soon"><XIcon /></Button>}</div>
      <Sheet><SheetTrigger asChild><Button className="xl:hidden" variant="outline" size="icon" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent className="hud-panel w-[86vw] border-primary/30"><SheetTitle className="font-display uppercase">ACA Navigation</SheetTitle><SheetDescription>System routes</SheetDescription><nav className="mt-10 grid gap-2" aria-label="Mobile navigation">{navItems.map((item) => <SheetClose asChild key={item.label}>{item.to.includes("#") ? <a href={item.to} className="border-b border-border px-2 py-4 font-mono text-sm uppercase">{item.label}</a> : <Link to={item.to} className="border-b border-border px-2 py-4 font-mono text-sm uppercase">{item.label}</Link>}</SheetClose>)}</nav><Button className="mt-8 w-full" asChild><a href={BUY_URL} target="_blank" rel="noopener noreferrer">Buy $ACA</a></Button></SheetContent></Sheet>
    </div>
  </header>;
}

function SiteFooter() {
  return <footer className="border-t border-border bg-background/90 px-4 py-12 sm:px-6"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]"><div><img src="/assets/aca-logo.png" alt="ACA" loading="lazy" className="mb-4 size-16 object-contain"/><p className="font-display text-2xl font-bold">ARC CODING AGENT</p><p className="font-mono text-xs text-primary-bright">FROM PROMPT TO ONCHAIN.</p></div><nav className="grid grid-cols-2 gap-3 text-sm" aria-label="Footer navigation">{navItems.filter((x)=>!x.to.includes("#")).map((item)=><Link key={item.label} to={item.to} className="text-muted-foreground hover:text-foreground">{item.label}</Link>)}<a href={BUY_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">Argus.World</a></nav><div className="text-sm leading-6 text-muted-foreground"><p>Independent community project.</p><p className="mt-3">Not affiliated with or endorsed by Circle Internet Financial, Inc., Arc, or Arc Studio unless explicitly stated by those entities.</p></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-border pt-5 font-mono text-[10px] text-muted-foreground">© 2026 ARC CODING AGENT</div></footer>;
}

function CustomCursor() {
  const reduce = useReducedMotion(); const [point,setPoint]=useState({x:-50,y:-50}); const [active,setActive]=useState(false);
  useEffect(()=>{ if(reduce) return; const move=(e:MouseEvent)=>setPoint({x:e.clientX,y:e.clientY}); const over=(e:MouseEvent)=>setActive(Boolean((e.target as HTMLElement).closest("a,button,input"))); window.addEventListener("mousemove",move); window.addEventListener("mouseover",over); return()=>{window.removeEventListener("mousemove",move);window.removeEventListener("mouseover",over)}},[reduce]);
  if(reduce) return null;
  return <motion.div aria-hidden className="pointer-events-none fixed z-[100] hidden rounded-full border border-primary bg-primary/20 shadow-glow lg:block" animate={{x:point.x-(active?18:5),y:point.y-(active?18:5),width:active?36:10,height:active?36:10}} transition={{type:"spring",stiffness:600,damping:38}}/>;
}

export function PageIntro({ eyebrow, title, description, children }: { eyebrow:string; title:string; description:string; children?:ReactNode }) {
  return <section className="relative overflow-hidden border-b border-border px-4 pb-20 pt-36 sm:px-6 sm:pb-28"><div className="mx-auto max-w-7xl"><p className="mb-4 font-mono text-xs uppercase text-primary-bright">// {eyebrow}</p><h1 className="max-w-5xl font-display text-5xl font-bold uppercase leading-[.9] text-glow sm:text-7xl lg:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>{children}</div></section>;
}

export function SectionHeading({ label, title, copy }: { label:string; title:string; copy?:string }) { return <div className="mb-10 max-w-3xl"><p className="mb-3 font-mono text-xs uppercase text-primary-bright">[{label}]</p><h2 className="font-display text-4xl font-bold uppercase leading-none sm:text-6xl">{title}</h2>{copy && <p className="mt-5 leading-7 text-muted-foreground">{copy}</p>}</div>; }

export const PageSection = ({ children, className="" }: { children:ReactNode; className?:string }) => <section className={`px-4 py-20 sm:px-6 sm:py-28 ${className}`}><div className="mx-auto max-w-7xl">{children}</div></section>;