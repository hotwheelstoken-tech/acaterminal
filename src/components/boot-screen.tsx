import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";

export function BootScreen() {
  const [open,setOpen]=useState(false); const [progress,setProgress]=useState(0); const reduce=useReducedMotion();
  useEffect(()=>{ if(sessionStorage.getItem("aca-entered")){return} setOpen(true); if(reduce){setProgress(100);return} const id=window.setInterval(()=>setProgress((v)=>{if(v>=100){window.clearInterval(id);return 100} return v+4}),35); return()=>window.clearInterval(id)},[reduce]);
  function enter(){sessionStorage.setItem("aca-entered","true");setOpen(false)}
  return <AnimatePresence>{open&&<motion.div className="fixed inset-0 z-[90] grid place-items-center bg-background p-6" exit={{opacity:0}} transition={{duration:.55}}><div className="w-full max-w-md text-center"><motion.img initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} src="/assets/aca-logo.png" alt="ARC CODING AGENT" className="mx-auto size-36 object-contain sm:size-44"/><h2 className="mt-4 font-display text-3xl font-bold uppercase">ARC CODING AGENT</h2><div className="mt-8 hud-panel p-5 text-left font-mono text-xs"><p>INITIALIZING CORE...</p><div className="mt-4 h-2 overflow-hidden bg-muted"><motion.div className="h-full bg-primary shadow-glow" animate={{width:`${progress}%`}}/></div><p className="mt-3 text-primary-bright">[{"█".repeat(Math.floor(progress/7))}{"░".repeat(14-Math.floor(progress/7))}] {progress}%</p>{progress===100&&<p className="mt-3 text-ice">AGENT ONLINE.</p>}</div><Button onClick={enter} disabled={progress<100} className="mt-7 w-full">Enter System</Button></div></motion.div>}</AnimatePresence>;
}