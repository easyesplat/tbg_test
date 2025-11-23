import { DownloadIcon } from 'lucide-react';
import Link from 'next/link';

export default function DownloadCTAButton({ onClick, label, ...props }: { onClick?: () => void; label?: string; [key: string]: any }) {
  return (
    <Link
      href="/download"
      onClick={onClick}
      {...props}
      className="bg-white border border-gray-200 text-[#171717] hover:bg-gray-50 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 md:gap-2 md:rounded-xl md:px-4 md:py-2 md:text-sm lg:gap-2.5 lg:px-5 lg:py-2 xl:text-[15px]"
    >
      <DownloadIcon
        className="lg:w-4.5 lg:h-4.5 h-3.5 w-3.5 md:h-4 md:w-4"
        strokeWidth={2.5}
      />
      <span className="hidden xl:inline">Download Now!</span>
      <span className="xl:hidden">Download</span>
    </Link>
  );
}