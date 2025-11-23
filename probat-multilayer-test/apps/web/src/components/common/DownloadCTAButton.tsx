import React from "react";
import { withExperiment } from "../../../probat/runtime";
import { PROBAT_COMPONENTS, PROBAT_REGISTRIES } from "../../../probat/index";

import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';

const __PROBAT_KEY__ = "probat-multilayer-test/apps/web/src/components/common/DownloadCTAButton.tsx";

const DownloadCTAButtonComponent = () => {
  return (
    <Link
      href="/download"
      className="bg-blue-primary hover:bg-blue-primary/90 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 md:gap-2 md:rounded-xl md:px-4 md:py-2 md:text-sm lg:gap-2.5 lg:px-5 lg:py-2 xl:text-[15px]"
    >
      <DownloadIcon
        className="lg:w-4.5 lg:h-4.5 h-3.5 w-3.5 md:h-4 md:w-4"
        strokeWidth={2.5}
      />
      <span className="hidden xl:inline">Download Now!</span>
      <span className="xl:hidden">Download</span>
    </Link>
  );
};

// Probat Generate Lines.
export default (() => {
  const meta = PROBAT_COMPONENTS[__PROBAT_KEY__];
  const reg  = PROBAT_REGISTRIES[__PROBAT_KEY__] as Record<string, React.ComponentType<any>> | undefined;
  return (meta?.proposalId && reg)
    ? withExperiment<any>(DownloadCTAButtonComponent as any, { proposalId: meta.proposalId, registry: reg })
    : DownloadCTAButtonComponent;
})();
