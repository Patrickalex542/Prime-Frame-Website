"use client"

import type React from "react"

import { Mail, MessageCircle, Facebook, Instagram } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    {
      name: "EMAIL",
      href: "mailto:contact@primeframe.ro",
      label: "EMAIL EMAIL EMAIL   ",
      icon: Mail,
      class: "mail"
    },
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/primeframe.ro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      label: "INSTAGRAM INSTAGRAM ",
      icon: Instagram,
      class: "instagram"
    },
    {
      name: "TIKTOK",
      href: "https://www.tiktok.com/@primeframe.ro",
      label: "TIKTOK TIKTOK TIKTOK",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 48 48" fill="currentColor">
          <path d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z" />
        </svg>
      ),
      class: "tiktok"
    },
    {
      name: "FACEBOOK",
      href: "#",
      label: "FACEBOOK FACEBOOK   ",
      icon: Facebook,
      class: "facebook"
    },
    {
      name: "WHATSAPP",
      href: "https://wa.me/40763481568",
      label: "WHATSAPP WHATSAPP   ",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 16 16" fill="currentColor">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      ),
      class: "whatsapp"
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .rotate-btn {
          cursor: pointer;
          border: none;
          background: var(--btn-gradient, #212121);
          color: #fff;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
          text-decoration: none;
          margin: 0 auto;
        }

        .rotate-btn__text {
          position: absolute;
          inset: 0;
          animation: text-rotation 12s linear infinite;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rotate-btn__text span {
          position: absolute;
          left: 50%;
          top: 8px;
          transform-origin: 50% 37px; /* 45px center - 8px top = 37px radius */
          transform: translateX(-50%) rotate(calc(var(--index) * 18deg));
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0;
          white-space: nowrap;
          color: rgba(255, 255, 255, 0.95);
          width: 12px;
          text-align: center;
        }

        .rotate-btn__circle {
          position: relative;
          width: 42px;
          height: 42px;
          overflow: hidden;
          background: #111;
          color: var(--icon-color, #fff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: all 500ms cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.8);
          flex-shrink: 0;
        }

        .rotate-btn__icon--copy {
          position: absolute;
          transform: translate(-150%, 150%);
        }

        .rotate-btn:hover {
          background: #000;
          transform: scale(1.15);
          box-shadow: 0 0 30px var(--icon-color);
        }

        .rotate-btn:hover .rotate-btn__circle {
          color: #fff;
          transform: scale(1.05);
          box-shadow: 0 0 20px var(--icon-color);
        }

        .rotate-btn:hover .rotate-btn__icon:first-child {
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          transform: translate(150%, -150%);
        }

        .rotate-btn:hover .rotate-btn__icon--copy {
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0.05s;
          transform: translate(0);
        }

        @keyframes text-rotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .rotate-btn:active {
          transform: scale(0.92);
        }

        .rotate-btn.instagram {
          --btn-gradient: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          --icon-color: #dc2743;
        }

        .rotate-btn.tiktok {
          --btn-gradient: linear-gradient(45deg, #000000 0%, #25F4EE 50%, #FE2C55 100%);
          --icon-color: #25F4EE;
        }

        .rotate-btn.facebook {
          --btn-gradient: linear-gradient(45deg, #1877F2, #0C5DC7);
          --icon-color: #1877F2;
        }

        .rotate-btn.whatsapp {
          --btn-gradient: linear-gradient(45deg, #25D366, #128C7E);
          --icon-color: #25D366;
        }

        .rotate-btn.mail {
          /* Gmail specific red-to-dark gradient */
          --btn-gradient: linear-gradient(45deg, #EA4335 0%, #FBBC05 25%, #34A853 50%, #4285F4 75%, #EA4335 100%);
          --icon-color: #ffffff;
        }
      ` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-widest uppercase text-balance">Hai Să Discutăm</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 tracking-wider text-pretty">
            Suntem gata să dăm viață viziunii tale. Contactează-ne pe platforma ta preferată.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="p-10 sm:p-12 md:p-16 rounded-3xl border border-border/50 relative overflow-hidden glass-panel flex flex-col items-center justify-center"
          >
            <div
              className="absolute inset-0 opacity-30 pointer-events-none contact-glow"
            />
            
            <div className="relative z-20 flex flex-wrap items-center justify-center gap-8 sm:gap-14">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`rotate-btn ${link.class}`} 
                  aria-label={link.name}
                >
                  <p className="rotate-btn__text">
                    {link.label.split("").map((char, i) => (
                      <span key={i} style={{ "--index": i } as React.CSSProperties}>
                        {char}
                      </span>
                    ))}
                  </p>

                  <div className="rotate-btn__circle">
                    <link.icon className="rotate-btn__icon w-5 h-5" />
                    <link.icon className="rotate-btn__icon rotate-btn__icon--copy w-5 h-5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
