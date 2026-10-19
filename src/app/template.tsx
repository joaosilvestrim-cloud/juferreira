import { ViewTransition } from "react";

/** Transição suave entre páginas (React ViewTransition — animações em globals.css). */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="jf-page-enter" exit="jf-page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
