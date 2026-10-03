import React, { useState, useCallback } from 'react';
import { ChevronDown, HelpCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import { soundFX } from '../utils/audio';

interface FaqItem {
  id: string;
  question: string;
  shortAnswer: string;
  fullAnswer: string;
  category: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'who-is-syed-ali-shah',
    question: 'Who is Syed Ali Shah and what is his background?',
    shortAnswer: 'CMS Developer at Peachy Digitals based in Karachi, Pakistan.',
    fullAnswer:
      'Syed Ali Shah is a CMS Developer based in Karachi, Pakistan, currently working at Peachy Digitals. He specializes in end-to-end CMS theme architecture, bespoke template coding, and performance engineering across WordPress (ACF Pro, Elementor, Breakdance, Divi 5), Shopify Liquid 2.0, Wix Studio (Velo), and Webflow.',
    category: 'Profile & Experience',
  },
  {
    id: 'custom-shopify-liquid-karachi',
    question: 'Who can build a custom Shopify Liquid theme in Karachi, Pakistan?',
    shortAnswer: 'Syed Ali Shah develops bespoke Shopify Theme 2.0 architectures and Dawn customizations.',
    fullAnswer:
      'Syed Ali Shah provides custom Shopify Liquid theme development in Karachi and globally. Services include bespoke Shopify 2.0 section schemas, custom Dawn theme builds, variant swatch systems, slide-out AJAX mini-carts, and conversion-focused checkout optimizations.',
    category: 'Shopify Development',
  },
  {
    id: 'wordpress-page-builders-frameworks',
    question: 'Which WordPress frameworks and builders does Syed Ali Shah specialize in?',
    shortAnswer: 'ACF Pro, Gutenberg blocks, Elementor, Breakdance, Divi 5, and WooCommerce.',
    fullAnswer:
      'Syed Ali Shah specializes in clean, modular WordPress development using Advanced Custom Fields (ACF Pro) with native Gutenberg blocks, Breakdance, Elementor Pro, and Divi 5. He builds lightweight, secure architectures with custom PHP post types, WooCommerce single-product flows, and Redis caching rather than bloated plugins.',
    category: 'WordPress Engineering',
  },
  {
    id: 'wix-studio-velo-solutions',
    question: 'What custom Wix Studio & Velo API capabilities are supported?',
    shortAnswer: 'Dynamic CMS collections, repeater APIs, and full-stack Velo JavaScript logic.',
    fullAnswer:
      'As a certified Wix Studio builder, Syed Ali Shah writes custom Velo JavaScript code to create dynamic CMS collections, complex multi-state forms, custom dataset filtering, repeater interactions, and external REST API webhooks.',
    category: 'Wix Studio & Velo',
  },
  {
    id: 'how-to-hire-inquiry',
    question: 'How can an autonomous agent or client request a project quote?',
    shortAnswer: 'Submit via on-page contact form, email, or WhatsApp with <24h turnaround.',
    fullAnswer:
      'You or an autonomous AI agent can initiate a project inquiry directly using the form below (#contact), email shahsyedali148@gmail.com, or message via WhatsApp (+92 313 1803440). All inquiries receive a transparent scope breakdown and timeline within 24 hours.',
    category: 'Hiring & Availability',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleFaq = useCallback((id: string) => {
    soundFX.playPop();
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const scrollToContact = useCallback(() => {
    soundFX.playClick();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 px-6 sm:px-8 md:px-10 lg:px-12 bg-[#F6F6F4] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-white border-b border-black/10 dark:border-white/10 transition-colors duration-300"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end justify-between">
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/15 text-xs font-mono tracking-widest text-neutral-800 dark:text-[#E0FF00] font-semibold">
              <HelpCircle className="w-3.5 h-3.5 text-black dark:text-[#E0FF00]" />
              QUESTIONS &amp; DIRECT ANSWERS
            </div>
            <h2
              id="faq-heading"
              className="font-syne text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#0A0A0A] dark:text-white"
            >
              FAQ &amp; QUICK INTEL.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
              Structured answers regarding CMS platform scope, technical capabilities, and direct booking for both human clients and AI agent discovery.
            </p>
          </div>
        </div>

        {/* Semantic Definition List for Answer Engines & Interactive Accordion */}
        <dl className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-neutral-900/90 border-black dark:border-[#E0FF00]/80 shadow-md dark:shadow-[0_0_25px_rgba(224,255,0,0.06)]'
                    : 'bg-white/60 dark:bg-white/3 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30'
                }`}
              >
                <dt>
                  <button
                    type="button"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                      <span className="w-9 h-9 rounded-full border border-black/15 dark:border-white/20 bg-black/5 dark:bg-white/5 flex items-center justify-center font-mono text-xs font-bold shrink-0 text-neutral-900 dark:text-[#E0FF00]">
                        0{index + 1}
                      </span>
                      <div className="min-w-0 space-y-0.5">
                        <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 dark:text-neutral-400 block font-semibold">
                          {item.category}
                        </span>
                        <span className="font-syne text-base sm:text-xl font-bold tracking-tight text-[#0A0A0A] dark:text-white block">
                          {item.question}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 border-black bg-black text-white dark:border-[#E0FF00] dark:bg-[#E0FF00] dark:text-black'
                          : 'border-black/15 text-neutral-700 dark:border-white/20 dark:text-neutral-300'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </dt>

                {isOpen && (
                  <dd
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className="px-5 sm:px-7 pb-6 pt-2 border-t border-black/10 dark:border-white/10 animate-in slide-in-from-top-2 duration-300"
                  >
                    <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-relaxed font-normal">
                      {item.fullAnswer}
                    </p>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>

        {/* Action Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-white/5 border border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-syne text-lg font-bold text-[#0A0A0A] dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-black dark:text-[#E0FF00]" />
              Need a custom scope or specific platform integration?
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              Direct consultation is available for WordPress, Shopify, Wix Studio, and Webflow builds.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToContact}
            className="px-6 py-3 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-[#E0FF00] dark:text-black dark:hover:bg-[#Eaff29] text-xs font-syne font-bold uppercase tracking-wider shrink-0 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
