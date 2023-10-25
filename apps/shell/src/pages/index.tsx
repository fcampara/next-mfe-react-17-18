import { LoaderReact17 } from "@/components/Loaders";
import { useRef } from "react";
// @ts-ignore
// import AppHome from "app1/home";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div>
      Teste
      <div ref={containerRef}/>
      {/* <AppHome/> */}
      <LoaderReact17 />
    </div>
  );
}
