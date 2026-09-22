"use client";

import { Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import { sendForm } from "@emailjs/browser";

const inputClassName =
  "w-full rounded-xl border border-white/40 bg-white/60 px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-white/70 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white/25";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactFormSection() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      );
      form.reset();
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  }

  return (
    <section id="contact-form" className="rounded-2xl border border-white/40 bg-white/55 p-5 dark:border-white/10 dark:bg-white/5">
      <SectionHeading title="Send a message" />
      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={inputClassName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={inputClassName}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className={inputClassName}
        />
        <textarea
          name="message"
          placeholder="Your message..."
          required
          rows={5}
          className={`${inputClassName} resize-none`}
        />
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-white/80 px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        >
          <Send className="h-4 w-4" />
          Send
        </button>
      </form>
    </section>
  );
}
