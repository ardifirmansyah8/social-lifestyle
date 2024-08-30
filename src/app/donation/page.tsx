import { Suspense } from "react";

import Donation from "@/features/Donation";

export default function Page() {
  return (
    <Suspense>
      <Donation />
    </Suspense>
  );
}
