import { useMatches, useLocation } from "react-router-dom";
import { useEffect } from "react";

interface MatchHandle {
  title?: string;
  description?: string;
  image?: string;
}

interface Match {
  handle?: MatchHandle;
}

export function MetadataUpdater() {
  const matches = useMatches() as Match[];
  const location = useLocation();

  useEffect(() => {
    const lastMatch = matches[matches.length - 1];
    if (!lastMatch) return;

    const title =
      lastMatch.handle?.title ||
      "Secretaría Ejecutiva del Sistema Local Anticorrupción de Nayarit";
    const description =
      lastMatch.handle?.description ||
      "Portal oficial de la Secretaría Ejecutiva del Sistema Local Anticorrupción de Nayarit";
    const image =
      lastMatch.handle?.image ||
      "https://seslan.gob.mx/SecretariaEjecutiva.svg";
    const url = window.location.origin + location.pathname;

    // -------------------
    // Title
    // -------------------
    document.title = title;

    // -------------------
    // Meta Description
    // -------------------
    let descTag = document.querySelector("meta[name='description']");
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", description);

    // -------------------
    // Open Graph
    // -------------------
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach((tag) => {
      let el = document.querySelector(`meta[property='${tag.property}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", tag.property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", tag.content);
    });

    // -------------------
    // Twitter Card
    // -------------------
    const twitterTags = [
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ];

    twitterTags.forEach((tag) => {
      let el = document.querySelector(`meta[name='${tag.name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", tag.name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", tag.content);
    });
  }, [matches, location]);

  return null;
}
