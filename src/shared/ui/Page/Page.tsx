import { ReactNode } from "react";

interface PageProps {
    children: ReactNode
}

export const Page = ({children}: PageProps) => {
  return (
    <div className="max-w-7xl mx-auto pt-24 h-[calc(100vh-64px)]">
        {children}
    </div>
  );
};