"use client";

import { useState, type FormEvent } from "react";

const verificationUrl = "https://wedding-emails-636097654896.us-west1.run.app";

export default function LoginGate({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(verificationUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.status !== 200) {
        setError("We couldn't verify that email address. Please check it and try again.");
        return;
      }

      const result: unknown = await response.json();
      if (typeof result !== "object" || result === null || !("allowed" in result) || result.allowed !== true) {
        setError("That email address isn't on the guest list. Please check it and try again.");
        return;
      }

      setIsVerified(true);
    } catch {
      setError("We couldn't connect to verify your email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isVerified) {
    return children;
  }

  return (
    <main className="flex min-h-0 flex-1 items-center justify-center px-6 py-10">
      <section className="w-full max-w-md text-center text-[#38385F]">
        <h1 className="mb-3 font-custom text-4xl">Welcome</h1>
        <p className="mb-8 font-serif text-base">Please confirm your email address to continue.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
          <input
            id="login-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={isSubmitting}
            className={`
              rounded border border-[#38385F]/40 bg-white/80 px-3 py-2 font-serif text-base
              outline-none focus:border-[#38385F] focus:ring-2 focus:ring-[#38385F]/20
              disabled:opacity-60
            `}
          />
          {error && (
            <p role="alert" className="font-serif text-sm text-red-800">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              mt-2 self-center rounded border border-[#38385F] px-6 py-2 font-serif text-sm
              transition-colors hover:bg-[#38385F] hover:text-white
              disabled:cursor-wait disabled:opacity-60
            `}
          >
            {isSubmitting ? "Confirming..." : "Confirm"}
          </button>
        </form>
      </section>
    </main>
  );
}
