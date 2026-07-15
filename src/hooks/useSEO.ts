import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  /** canonical path e.g. "/products" */
  path?: string;
  /** OG image URL – falls back to default */
  image?: string;
}

const BASE_URL = "https://shreejyotienterprises.com";
const DEFAULT_IMAGE = `${BASE_URL}/assets/luxury_villa_interior_1780912810343.png`;
const SITE_NAME = "Shree Jyoti Enterprises";

/**
 * useSEO — lightweight per-page SEO hook.
 * Updates <title>, meta description, OG tags, and canonical <link> on every page mount.
 */
export function useSEO({ title, description, path = "/", image = DEFAULT_IMAGE }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonical = `${BASE_URL}${path}`;

    // ── Title ──
    document.title = fullTitle;

    // ── Helper: upsert <meta> ──
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // ── Helper: upsert <link> ──
    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    };

    // Standard meta
    setMeta('meta[name="description"]', "content", description);

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:image"]', "content", image);

    // Twitter Card
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
  }, [title, description, path, image]);
}
