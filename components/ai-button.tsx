"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface AIButtonProps {
  label?: string
  thinkingLabel?: string
  onClick?: () => void
  className?: string
  href?: string
}

export function AIButton({
  label = "Vezi Portofoliul",
  thinkingLabel = "Se încarcă...",
  onClick,
  className,
  href,
}: AIButtonProps) {
  const [isThinking, setIsThinking] = useState(false)
  const router = useRouter()
  const ButtonWrapper = href ? "a" : "button"

  const handleClick = async (e: React.MouseEvent) => {
    if (isThinking) return
    
    e.preventDefault()
    setIsThinking(true)

    try {
      // Show the "Thinking" state for 1.5 seconds
      await new Promise((resolve) => setTimeout(resolve, 1500))

      if (onClick) {
        onClick()
      } else if (href) {
        if (href.startsWith("#")) {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        } else {
          router.push(href)
        }
      }
    } catch (err) {
      console.error("AI Button Error:", err)
    } finally {
      // Ensure the button is blurred to remove focus-driven highlights
      if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
      
      // Delay the state reset slightly to ensure the visual transition back is smooth
      setTimeout(() => {
        setIsThinking(false)
      }, 500)
    }
  }

  return (
    <div className={cn("ai-btn-wrapper", isThinking && "is-thinking", className)}>
      <div className="light-1" />
      <div className="light-2" />
      <ButtonWrapper
        href={href}
        onClick={handleClick}
        className={cn("ai-btn", isThinking && "thinking-active")}
        // @ts-ignore - a tags don't have type="button"
        {...(href ? {} : { type: "button" })}
      >
        <span className="txt-1">{label}</span>
        <span className="txt-2">{thinkingLabel}</span>
      </ButtonWrapper>
      <svg
        className="ai-bg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="70 70 160 160"
        width="300"
        height="300"
      >
        <line className="line-bg" x1="150" y1="143.58" x2="150" y2="97.31" />
        <line className="line-bg" x1="157.98" y1="143.58" x2="157.98" y2="112.08" />
        <line className="line-bg" x1="142.02" y1="143.58" x2="142.02" y2="118.08" />
        <line className="line-bg" x1="130.05" y1="143.58" x2="130.05" y2="133.79" />
        <line className="line-bg" x1="138.03" y1="143.58" x2="138.03" y2="131.83" />
        <line className="line-bg" x1="146.01" y1="143.58" x2="146.01" y2="129.15" />
        <line className="line-bg" x1="153.99" y1="143.58" x2="153.99" y2="129.15" />
        <line className="line-bg" x1="161.97" y1="143.58" x2="161.97" y2="131.83" />
        <line className="line-bg" x1="169.95" y1="143.58" x2="169.95" y2="133.79" />
        <path
          className="line-bg"
          d="M126.06,143.58v-10.37c0-.72-.29-1.41-.8-1.92l-4.28-4.28c-.51-.51-.8-1.2-.8-1.92v-12.37"
        />
        <path
          className="line-bg"
          d="M165.96,143.58v-18.37c0-.72.29-1.41.8-1.92l4.28-4.28c.51-.51.8-1.2.8-1.92v-14.37"
        />
        <path
          className="line-bg"
          d="M173.94,143.58v-10.37c0-.72.29-1.41.8-1.92l4.28-4.28c.51-.51.8-1.2.8-1.92v-10.69"
        />
        <path
          className="line-bg"
          d="M134.04,143.58v-20.37c0-.72-.29-1.41-.8-1.92l-4.28-4.28c-.51-.51-.8-1.2-.8-1.92v-9.37"
        />
        <line className="line-bg" x1="176.04" y1="150" x2="217.32" y2="150" />
        <path
          className="line-bg"
          d="M176.04,153.99h13.37c.72,0,1.41.29,1.92.8l4.28,4.28c.51.51,1.2.8,1.92.8h14.37"
        />
        <path
          className="line-bg"
          d="M176.04,146.01h15.37c.72,0,1.41-.29,1.92-.8l4.28-4.28c.51-.51,1.2-.8,1.92-.8h9.37"
        />
        <line className="line-bg" x1="123.96" y1="150" x2="82.68" y2="150" />
        <path
          className="line-bg"
          d="M123.96,146.01h-13.37c-.72,0-1.41-.29-1.92-.8l-4.28-4.28c-.51-.51-1.2-.8-1.92-.8h-14.37"
        />
        <path
          className="line-bg"
          d="M123.96,153.99h-15.37c-.72,0-1.41.29-1.92.8l-4.28,4.28c-.51.51-1.2.8-1.92.8h-9.37"
        />
        <line className="line-bg" x1="150" y1="156.42" x2="150" y2="202.69" />
        <line className="line-bg" x1="142.02" y1="156.42" x2="142.02" y2="187.92" />
        <line className="line-bg" x1="157.98" y1="156.42" x2="157.98" y2="181.92" />
        <line className="line-bg" x1="169.95" y1="156.42" x2="169.95" y2="166.21" />
        <line className="line-bg" x1="161.97" y1="156.42" x2="161.97" y2="168.17" />
        <line className="line-bg" x1="153.99" y1="156.42" x2="153.99" y2="170.85" />
        <line className="line-bg" x1="146.01" y1="156.42" x2="146.01" y2="170.85" />
        <line className="line-bg" x1="138.03" y1="156.42" x2="138.03" y2="168.17" />
        <line className="line-bg" x1="130.05" y1="156.42" x2="130.05" y2="166.21" />
        <path
          className="line-bg"
          d="M173.94,156.42v10.37c0,.72.29,1.41.8,1.92l4.28,4.28c.51.51.8,1.2.8,1.92v12.37"
        />
        <path
          className="line-bg"
          d="M134.04,156.42v18.37c0,.72-.29,1.41-.8,1.92l-4.28-4.28c-.51.51-.8,1.2-.8,1.92v14.37"
        />
        <path
          className="line-bg"
          d="M126.06,156.42v10.37c0,.72-.29,1.41-.8,1.92l-4.28,4.28c-.51.51-.8,1.2-.8,1.92v10.69"
        />
        <path
          className="line-bg"
          d="M165.96,156.42v20.37c0,.72.29,1.41.8,1.92l4.28,4.28c.51.51.8,1.2.8,1.92v9.37"
        />

        <line className="line" x1="150" y1="143.58" x2="150" y2="97.31" />
        <line className="line" x1="157.98" y1="143.58" x2="157.98" y2="112.08" />
        <line className="line" x1="142.02" y1="143.58" x2="142.02" y2="118.08" />
        <line className="line" x1="130.05" y1="143.58" x2="130.05" y2="133.79" />
        <line className="line" x1="138.03" y1="143.58" x2="138.03" y2="131.83" />
        <line className="line" x1="146.01" y1="143.58" x2="146.01" y2="129.15" />
        <line className="line" x1="153.99" y1="143.58" x2="153.99" y2="129.15" />
        <line className="line" x1="161.97" y1="143.58" x2="161.97" y2="131.83" />
        <line className="line" x1="169.95" y1="143.58" x2="169.95" y2="133.79" />
        <path
          className="line"
          d="M126.06,143.58v-10.37c0-.72-.29-1.41-.8-1.92l-4.28-4.28c-.51-.51-.8-1.2-.8-1.92v-12.37"
        />
        <path
          className="line"
          d="M165.96,143.58v-18.37c0-.72.29-1.41.8-1.92l4.28-4.28c.51-.51.8-1.2.8-1.92v-14.37"
        />
        <path
          className="line"
          d="M173.94,143.58v-10.37c0-.72.29-1.41.8-1.92l4.28-4.28c.51-.51.8-1.2.8-1.92v-10.69"
        />
        <path
          className="line"
          d="M134.04,143.58v-20.37c0-.72-.29-1.41-.8-1.92l-4.28-4.28c-.51-.51-.8-1.2-.8-1.92v-9.37"
        />
        <line className="line" x1="176.04" y1="150" x2="217.32" y2="150" />
        <path
          className="line"
          d="M176.04,153.99h13.37c.72,0,1.41.29,1.92.8l4.28,4.28c.51.51,1.2.8,1.92.8h14.37"
        />
        <path
          className="line"
          d="M176.04,146.01h15.37c.72,0,1.41-.29,1.92-.8l4.28-4.28c.51-.51,1.2-.8,1.92-.8h9.37"
        />
        <line className="line" x1="123.96" y1="150" x2="82.68" y2="150" />
        <path
          className="line"
          d="M123.96,146.01h-13.37c-.72,0-1.41-.29-1.92-.8l-4.28-4.28c-.51-.51-1.2-.8-1.92-.8h-14.37"
        />
        <path
          className="line"
          d="M123.96,153.99h-15.37c-.72,0-1.41.29-1.92.8l-4.28,4.28c-.51.51-1.2.8-1.92.8h-9.37"
        />
        <line className="line" x1="150" y1="156.42" x2="150" y2="202.69" />
        <line className="line" x1="142.02" y1="156.42" x2="142.02" y2="187.92" />
        <line className="line" x1="157.98" y1="156.42" x2="157.98" y2="181.92" />
        <line className="line" x1="169.95" y1="156.42" x2="169.95" y2="166.21" />
        <line className="line" x1="161.97" y1="156.42" x2="161.97" y2="168.17" />
        <line className="line" x1="153.99" y1="156.42" x2="153.99" y2="170.85" />
        <line className="line" x1="146.01" y1="156.42" x2="146.01" y2="170.85" />
        <line className="line" x1="138.03" y1="156.42" x2="138.03" y2="168.17" />
        <line className="line" x1="130.05" y1="156.42" x2="130.05" y2="166.21" />
        <path
          className="line"
          d="M173.94,156.42v10.37c0,.72.29,1.41.8,1.92l4.28,4.28c.51.51.8,1.2.8,1.92v12.37"
        />
        <path
          className="line"
          d="M134.04,156.42v18.37c0,.72-.29,1.41-.8,1.92l-4.28-4.28c-.51.51-.8,1.2-.8,1.92v14.37"
        />
        <path
          className="line"
          d="M126.06,156.42v10.37c0,.72-.29,1.41-.8,1.92l-4.28-4.28c-.51.51-.8,1.2-.8,1.92v10.69"
        />
        <path
          className="line"
          d="M165.96,156.42v20.37c0,.72.29,1.41.8,1.92l4.28,4.28c.51.51.8,1.2.8,1.92v9.37"
        />

        <circle className="dot" cx="150" cy="96.13" r="1.17" />
        <circle className="dot" cx="157.98" cy="110.91" r="1.17" />
        <circle className="dot" cx="142.02" cy="116.91" r="1.17" />
        <circle className="dot" cx="157.98" cy="183.09" r="1.17" />
        <circle className="dot" cx="171.83" cy="101.54" r="1.17" />
        <circle className="dot" cx="179.81" cy="113.23" r="1.17" />
        <circle className="dot" cx="128.17" cy="104.54" r="1.17" />
        <circle className="dot" cx="120.19" cy="111.54" r="1.17" />
        <circle className="dot" cx="150" cy="203.87" r="1.17" />
        <circle className="dot" cx="142.02" cy="189.09" r="1.17" />
        <circle className="dot" cx="128.17" cy="198.46" r="1.17" />
        <circle className="dot" cx="120.19" cy="186.77" r="1.17" />
        <circle className="dot" cx="171.83" cy="195.46" r="1.17" />
        <circle className="dot" cx="179.81" cy="188.46" r="1.17" />
        <circle className="dot" cx="210.08" cy="140.14" r="1.17" />
        <circle className="dot" cx="218.49" cy="150" r="1.17" />
        <circle className="dot" cx="213.08" cy="159.86" r="1.17" />
        <circle className="dot" cx="89.92" cy="159.86" r="1.17" />
        <circle className="dot" cx="81.51" cy="150" r="1.17" />
        <circle className="dot" cx="86.92" cy="140.14" r="1.17" />
      </svg>
      <style dangerouslySetInnerHTML={{ __html: `
        .ai-btn-wrapper {
          --accent-1: #c9a26a;
          --accent-2: #d4af7a;
          --accent-3: #f5d799;
          --accent-4: #c9a26a66;
          --light-1: #c9a26a28;
          --light-2: #d4af7a28;

          --duration: 3s;
          --transition: 0.5s;

          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: max-content;
          height: max-content;
          transform: scale(0.85);
        }

        .light-1,
        .light-2 {
          pointer-events: none;
          position: absolute;
          top: -20px;
          left: -30px;
          width: 100px;
          height: 70px;
          border-radius: 50%;
          background-color: var(--light-1);
          filter: blur(24px);
          z-index: 1;
          transition:
            opacity var(--transition) ease,
            top var(--transition) ease,
            left var(--transition) ease;
          opacity: 0.4;
        }
        .light-2 {
          top: auto;
          bottom: -20px;
          left: auto;
          right: -20px;
          width: 80px;
          height: 40px;
          background-color: var(--light-2);
          transition-duration: calc(var(--transition) * 2);
          z-index: -1;
          opacity: 0.25;
        }

        .ai-bg {
          position: absolute;
          z-index: -1;
          fill: none;
          transition: filter var(--transition) ease;
        }

        .line-bg {
          stroke: #fff1;
          stroke-width: 0.5;
        }

        .line {
          stroke: none;
          stroke-width: 0;
          stroke-dasharray: 16 56;
          transition: stroke var(--transition) ease-in-out;
        }

        .dot {
          fill: #555;
          opacity: 0.3;
          transition: fill var(--transition) ease;
        }

        .ai-btn {
          width: max-content;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
          min-height: 48px;
          border-radius: 7px;
          background-color: #000;
          background-image: 
            url("data:image/png;base64,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"),
            linear-gradient(to bottom, #fff1, transparent);
          color: #ddd;
          border: 1px solid #333;
          font-size: 16px;
          font-weight: 500;
          font-family: inherit;
          letter-spacing: -0.5px;
          cursor: pointer;
          transition: all var(--transition) ease;
          box-shadow:
            0 0 30px -12px var(--light-1),
            inset -1px -1px 1px 1px #000,
            inset -2px -2px 2px 1px #fff2,
            inset 1px 1px 1px 1px #000,
            inset 2px 2px 2px 1px #fff2;
          z-index: 2;
          text-decoration: none;
        }

        .ai-btn .txt-1, .ai-btn .txt-2 {
          position: absolute;
          transition: opacity 0.4s ease;
          white-space: nowrap;
        }
        .ai-btn .txt-2 { opacity: 0; }

        /* HOVER & THINKING STATES */
        .ai-btn:hover, .ai-btn.thinking-active {
          color: #fff;
          border: 1px solid #555;
          text-shadow: 0 0 10px var(--light-1);
        }
        
        .ai-btn-wrapper:hover .dot, .ai-btn-wrapper.is-thinking .dot { fill: #bbb; }
        .ai-btn-wrapper:hover .light-1, .ai-btn-wrapper:hover .light-2,
        .ai-btn-wrapper.is-thinking .light-1, .ai-btn-wrapper.is-thinking .light-2 { opacity: 0.7; }
        
        .ai-btn-wrapper:hover .light-1, .ai-btn-wrapper.is-thinking .light-1 { top: -30px; left: -40px; }
        .ai-btn-wrapper:hover .light-2, .ai-btn-wrapper.is-thinking .light-2 { bottom: -30px; right: -30px; }

        /* ACTIVE STATE */
        .ai-btn:active {
          box-shadow:
            0 0 10px var(--light-1),
            inset -1px -1px 1px 1px #000,
            inset -2px -2px 2px 1px #fff2,
            inset 1px 1px 1px 1px #000,
            inset 2px 2px 2px 1px #fff2;
        }
        .ai-btn-wrapper:active .light-1, .ai-btn-wrapper:active .light-2 { opacity: 1; }

        /* THINKING ANIMATION TRIGGER (Directly linked to React state) */
        .ai-btn.thinking-active {
          background-color: #1a1a1e;
          border-color: var(--accent-2);
          animation: pulse var(--duration) ease-in-out infinite;
          outline: none;
        }

        .ai-btn:focus {
          outline: 1px solid var(--accent-1);
          outline-offset: 4px;
        }

        .ai-btn.thinking-active .txt-1 { opacity: 0; }
        .ai-btn.thinking-active .txt-2 { opacity: 1; animation: pulse-text var(--duration) ease-in-out infinite; }
        
        /* Triggering animations on thinking class */
        .ai-btn-wrapper.is-thinking .dot {
          animation: dot-opac calc(var(--duration) * 0.5) linear infinite;
          fill: var(--accent-1);
        }
        .ai-btn-wrapper.is-thinking .line {
          animation: dash var(--duration) ease-out infinite;
          stroke-width: 0.5;
        }
        .ai-btn-wrapper.is-thinking .ai-bg {
          filter: drop-shadow(0px 0px 4px var(--accent-3));
        }

        @keyframes pulse-text {
          0%, 100% { text-shadow: 0 0 2px #0000; }
          50% { text-shadow: 0 0 32px var(--accent-3); }
        }

        @keyframes dot-opac {
          0%, 100% { opacity: 0.1; }
          20% { opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 20px var(--light-2), inset -1px -1px 1px 1px #000, inset -2px -2px 2px 1px #fff2, inset 1px 1px 1px 1px #000, inset -2px -2px 2px 1px #fff2;
            border-color: #0000;
          }
          50% {
            box-shadow: 0 0 60px 0px var(--light-1), inset -1px -1px 1px 1px #000, inset -2px -2px 2px 1px #fff2, inset 1px 1px 1px 1px #000, inset -2px -2px 2px 1px #fff2;
          }
          85% { border-color: var(--accent-2); }
        }

        @keyframes dash {
          0% { stroke-dashoffset: 10; stroke: var(--accent-4); }
          50% { stroke-dashoffset: 88; stroke: var(--accent-2); }
          100% { stroke-dashoffset: 166; stroke: var(--accent-4); }
        }
      ` }} />
    </div>
  )
}
