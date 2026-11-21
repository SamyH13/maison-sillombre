import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="tadelakt flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-5xl md:text-6xl">Page introuvable</h1>
        <p className="mt-4 text-ink-soft">Cette page n'existe pas ou a été déplacée.</p>
        <div className="mt-8"><Link to="/" className="btn-lux">Retour à l'accueil</Link></div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="tadelakt flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl">La page n'a pas pu s'afficher</h1>
        <p className="mt-4 text-ink-soft">Un problème est survenu de notre côté. Réessayez, ou revenez à l'accueil.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-lux"
          >
            Réessayer
          </button>
          <a href="/" className="btn-lux-outline">Retour à l'accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Maison Sillombre — Parfums d'Orient" },
      { name: "description", content: "Maison Sillombre : parfums orientaux et soins capillaires, vendus sur les marchés." },
      { property: "og:title", content: "Maison Sillombre" },
      { property: "og:description", content: "Parfums, parfums orientaux et soins." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300..600&family=Reem+Kufi:wght@400..700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body className="tadelakt">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-3">Aller au contenu</a>
      <SiteHeader />
      <main id="contenu"><Outlet /></main>
      <SiteFooter />
      <WhatsAppFab />
    </QueryClientProvider>
  );
}
