"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const searchTerms = query.trim();
    if (!searchTerms) {
      setError("Please enter a name or keywords");
      return;
    }

    setError("");
    const words = searchTerms.split(/\s+/);
    const namePhrase = words.slice(0, 2).join(" ");
    const keywords = words.slice(2).join(" ");
    const googleQuery = `site:linkedin.com/in "${namePhrase}"${keywords ? ` ${keywords}` : ""}`;
    const googleSearch = new URL("https://www.google.com/search");
    googleSearch.searchParams.set("q", googleQuery);
    window.open(googleSearch.toString(), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#f7f9fc]">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-6 py-5 sm:px-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-200" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8"><circle cx="10.8" cy="8" r="3.2" /><path d="M4.8 19c.7-3 2.7-4.6 6-4.6 1.5 0 2.7.3 3.7 1M16.5 14.5v6m-3-3h6" strokeLinecap="round" /></svg>
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">Profile Preview</h1>
            <p className="mt-0.5 text-sm text-slate-500">Search public LinkedIn profiles via Google</p>
          </div>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center px-6 pb-16 pt-16 sm:px-8 sm:pt-24">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-blue-600">OSINT-STYLE SEARCH</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Find public LinkedIn profiles.</h2>
          <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-slate-600">Enter a name and optional keywords. We'll build a targeted Google search for public LinkedIn results.</p>
        </div>

        <form className="profile-form flex w-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_8px_30px_-16px_rgba(15,23,42,0.2)] sm:flex-row sm:items-center" onSubmit={handleSubmit} noValidate>
          <label className="sr-only" htmlFor="profile-query">Name or keywords</label>
          <div className="relative min-w-0 flex-1">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" strokeLinecap="round" /></svg>
            <input id="profile-query" type="text" value={query} onChange={(event) => { setQuery(event.target.value); if (error) setError(""); }} placeholder="e.g. Bill Gates Microsoft" className="h-12 w-full rounded-xl border border-transparent bg-transparent pl-11 pr-4 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-200 focus:bg-blue-50/30" aria-invalid={Boolean(error)} aria-describedby={error ? "profile-query-error" : undefined} />
          </div>
          <button type="submit" className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100">
            Search Google
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.7"><path d="M4 10h11m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </form>
        {error && <p id="profile-query-error" className="form-error" role="alert">{error}</p>}

        <aside className="how-it-works" aria-labelledby="how-it-works-title">
          <div className="how-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01" strokeLinecap="round"/></svg></div>
          <div><h3 id="how-it-works-title">How it works</h3><p>This tool builds a targeted Google search for public LinkedIn profiles. It doesn't access LinkedIn directly, doesn't log in, and doesn't notify anyone. You're just searching Google's public index.</p></div>
        </aside>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <p className="mx-auto max-w-6xl px-6 py-5 text-center text-xs leading-5 text-slate-500 sm:px-8 sm:text-sm">This tool searches only Google's public index of LinkedIn profiles. No LinkedIn account is used, no scraping is performed, and no one is notified.</p>
      </footer>
    </main>
  );
}
