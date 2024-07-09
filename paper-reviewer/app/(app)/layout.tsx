import type { ReactNode } from "react";
import { Nav } from "../components/Nav"

interface Props {
  readonly children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
   
      <>
        <Nav/>
        {children}
      </>

  );
}
