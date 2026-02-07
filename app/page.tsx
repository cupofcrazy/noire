

import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="min-h-svh p-4">
      <p>Hello World</p>
      <p>Update <pre className="px-2 py-0.5 rounded-md inline-block bg-muted text-muted-foreground">page.tsx</pre> to get started.</p>
    </div>
  );
}
