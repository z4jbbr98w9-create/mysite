"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send, MessageCircle, X } from "lucide-react";
import { company } from "@/lib/data";

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex flex-col gap-2"
              >
                <a
                  href={company.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-accent transition-colors shadow-lg"
                >
                  <Send size={16} className="text-accent" /> Telegram
                </a>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-accent transition-colors shadow-lg"
                >
                  <Phone size={16} className="text-accent" /> Позвонить
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-accent/30 hover:bg-accent-soft transition-colors"
            aria-label="Связаться"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <MessageCircle size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
