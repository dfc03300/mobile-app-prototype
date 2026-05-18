import svgPaths from "./svg-5voz0gzg1q";

interface S9CompleteProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    year: string;
    schoolName: string;
    region: string;
    grade: string;
    semester: string;
    examType: string;
    subject: string;
  };
}

function SheetTitle() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-[12px] pt-[8px]">
      <div className="h-[4px] w-[44px] shrink-0 rounded-[4px] bg-[#e3e8ed]" />
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[16px] font-bold leading-[1.44] tracking-[0.32px] text-[#0b0d11]">
        등록 완료
      </p>
    </div>
  );
}

function CompleteIcon() {
  return (
    <div className="relative size-[132px] shrink-0" data-name="glass">
      <div className="absolute left-[8px] top-[20px] size-[70px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.5432 78.5432">
          <circle cx="39.2716" cy="39.2716" fill="url(#paint0_linear_complete)" r="39.2716" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_complete" x1="12.4219" x2="50.3654" y1="0" y2="78.5432">
              <stop stopColor="#81C5FF" />
              <stop offset="1" stopColor="#A683FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[22px] top-[17px] size-[112px] overflow-clip">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.295 106.295">
          <path clipRule="evenodd" d={svgPaths.p2ab91980} fill="#4F60FF" fillOpacity="0.08" fillRule="evenodd" stroke="white" strokeOpacity="0.12" strokeWidth="1.57086" />
          <g filter="url(#filter_complete)">
            <path clipRule="evenodd" d={svgPaths.p278ebf00} fill="white" fillRule="evenodd" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58.192" id="filter_complete" width="71.9395" x="22.4184" y="29.2927">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="5.24104" dy="5.24104" />
              <feGaussianBlur stdDeviation="5.24104" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.376471 0 0 0 0 1 0 0 0 0.48 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" mode="normal" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function formatRegion(region?: string) {
  if (!region) return "";
  const parts = region.trim().split(/\s+/);
  return parts[1] || parts[0] || "";
}

function CompleteContent({ formData }: { formData: S9CompleteProps["formData"] }) {
  const title = `${formData.year || "2026년"} ${formatRegion(formData.region) || "관악구"} ${formData.schoolName || "당곡중학교"} ${formData.grade || "1학년"} ${formData.semester || "1학기"} ${formData.examType || "중간고사"}`.trim();

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center px-[32px] pt-[28px] text-center">
      <CompleteIcon />
      <p className="mt-[22px] font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[18px] font-bold leading-[1.68] text-[#0b0d11]">
        자료 등록이 완료되었습니다
      </p>
      <p className="mt-[14px] max-w-[312px] font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[13px] font-bold leading-[1.44] tracking-[0.32px] text-[#394046]">
        {title}
      </p>
    </div>
  );
}

function CompleteButton({ onClose }: { onClose: () => void }) {
  return (
    <div className="w-full shrink-0 px-[32px] pb-[28px]">
      <button
        type="button"
        onClick={onClose}
        className="flex h-[56px] w-full items-center justify-center rounded-[999px] bg-[#3ba5e6]"
      >
        <span className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] text-[16px] font-medium leading-[1.44] tracking-[0.32px] text-white">
          자료 추가 등록하기
        </span>
      </button>
    </div>
  );
}

function BottomSheet({ onClose, formData }: { onClose: () => void; formData: S9CompleteProps["formData"] }) {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-[rgba(11,13,17,0.6)]" data-name="BottomSheet">
      <div className="absolute bottom-0 left-0 right-0 flex h-[414px] max-h-[calc(100%-24px)] flex-col overflow-hidden rounded-tl-[24px] rounded-tr-[24px] bg-white shadow-[0px_-8px_16px_0px_rgba(11,13,17,0.08)]" data-name="Bottom Sheet">
        <SheetTitle />
        <CompleteContent formData={formData} />
        <CompleteButton onClose={onClose} />
      </div>
    </div>
  );
}

export default function S9Complete({ isOpen, onClose, formData }: S9CompleteProps) {
  if (!isOpen) return null;

  return <BottomSheet onClose={onClose} formData={formData} />;
}
