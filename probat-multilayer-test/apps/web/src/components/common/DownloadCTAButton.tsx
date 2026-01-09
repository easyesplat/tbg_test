"use client";

import React from "react";
import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';
import { withExperiment } from "@probat/react";

const __PROBAT_COMPONENT_PATH__ = "probat-multilayer-test/apps/web/src/components/common/DownloadCTAButton.tsx";

interface DownloadCTAButtonProps {
  probat?: { trackClick: () => void };
}

const DownloadCTAButton = ({ probat }: DownloadCTAButtonProps) => {
  return (
    <Link
      href="/download"
      className="bg-blue-primary hover:bg-blue-primary/90 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-white transition-all duration-200 md:gap-2 md:rounded-xl md:px-4 md:py-2 md:text-sm lg:gap-2.5 lg:px-5 lg:py-2 xl:text-[15px]"
      data-probat-conversion="true"
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

export default withExperiment<any>(DownloadCTAButton as any, {
    componentPath: __PROBAT_COMPONENT_PATH__
} as any);
