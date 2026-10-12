import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mehruh.com"),
  title: "MEHRUH | Haute Perfumery • Scent. Soul. Memory.",
  description:
    "Centuries of royal South Asian botanical alchemy distilled into extraordinary flacons of Extrait de Parfum. Featuring Kashmiri Rose, Wild Assamese Oud, and Kannauj Mitti Attar.",
  keywords: [
    "Mehruh",
    "Luxury Perfume",
    "Extrait de Parfum",
    "South Asian Haute Perfumery",
    "Attar",
    "Assamese Oud",
    "Kannauj Mitti",
    "Kashmiri Rose",
    "Mysore Sandalwood",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MEHRUH | Scent. Soul. Memory.",
    description: "Royal South Asian botanical alchemy distilled into extraordinary flacons.",
    images: [{ url: "/images/story-palace.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var o=Element.prototype.setAttribute;Element.prototype.setAttribute=function(n,v){if(n==='bis_skin_checked'||n==='bis_register'||(typeof n==='string'&&n.indexOf('__processed_')===0))return;return o.apply(this,arguments);};}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#171515] text-[#F4EFE5] font-sans selection:bg-[#4A1726] selection:text-[#DFC285]"
        suppressHydrationWarning
      >
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
