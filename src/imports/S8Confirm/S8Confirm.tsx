interface S8ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
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

function CloseIcon({ onClose }: { onClose: () => void }) {
  return (
    <button type="button" onClick={onClose} className="flex size-[24px] shrink-0 items-center justify-center">
      <svg className="size-[22px]" fill="none" viewBox="0 0 22 22">
        <path d="M4 4L18 18M18 4L4 18" stroke="#394046" strokeLinecap="round" strokeWidth="2.4" />
      </svg>
    </button>
  );
}

function SheetTitle({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-[8px] pt-[8px]">
      <div className="h-[4px] w-[44px] shrink-0 rounded-[4px] bg-[#e3e8ed]" />
      <div className="flex w-full items-start justify-between px-[32px]">
        <p className="font-['Pretendard_Variable:Bold','Noto_Sans_KR:Bold',sans-serif] text-[16px] font-bold leading-[1.44] tracking-[0.32px] text-[#0b0d11]">
          학교 출제 경향 자료명
        </p>
        <CloseIcon onClose={onClose} />
      </div>
    </div>
  );
}

function formatRegion(region?: string) {
  if (!region) return "";
  const parts = region.trim().split(/\s+/);
  return parts[1] || parts[0] || "";
}

function FileSummary({ formData }: { formData: S8ConfirmProps["formData"] }) {
  const subject = formData.subject || "수학";
  const titleLine = `${formData.year || "2026년"} ${formatRegion(formData.region) || "관악구"} ${formData.schoolName || "당곡중학교"}`.trim();
  const metaLine = `${formData.grade || "1학년"} ${formData.semester || "1학기"} ${formData.examType || "중간고사"}`.trim();

  return (
    <div className="flex w-full shrink-0 justify-center px-[32px] pt-[32px]">
      <div className="flex min-h-[108px] w-full max-w-[312px] overflow-hidden rounded-[8px] border-2 border-[#3ba5e6] bg-[#f1f4f8]">
        <div className="flex w-[72px] shrink-0 items-center justify-center bg-[#3ba5e6]">
          <span className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[20px] font-bold leading-[1.68] text-white">
            {subject}
          </span>
        </div>
        <div className="flex min-w-0 flex-1 items-center px-[16px] py-[12px]">
          <div className="min-w-0 font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[clamp(16px,4.2vw,19px)] font-bold leading-[1.45] text-black">
            <p className="whitespace-normal break-keep">{titleLine}</p>
            <p className="whitespace-normal break-keep">{metaLine}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConfirmMessage() {
  return (
    <div className="flex w-full shrink-0 justify-center px-[32px] pt-[24px]">
      <p className="text-center font-['Pretendard_Variable:Bold','Noto_Sans_KR:Bold',sans-serif] text-[15px] font-bold leading-[1.68] tracking-[0.32px] text-[#0b0d11]">
        등록 전 입력 정보를 확인해 주세요.
      </p>
    </div>
  );
}

function RegisterButton({ onNext }: { onNext: () => void }) {
  return (
    <div className="mt-auto w-full shrink-0 px-[32px] pb-[28px]">
      <button
        type="button"
        onClick={onNext}
        className="flex h-[60px] w-full items-center justify-center rounded-[999px] bg-[#3ba5e6]"
      >
        <span className="font-['Pretendard_Variable:Bold','Noto_Sans_KR:Bold',sans-serif] text-[19px] font-bold leading-[1.44] text-white">
          등록하기
        </span>
      </button>
    </div>
  );
}

function BottomSheet({ onClose, onNext, formData }: { onClose: () => void; onNext: () => void; formData: S8ConfirmProps["formData"] }) {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-[rgba(11,13,17,0.6)]" data-name="BottomSheet">
      <div
        className="absolute bottom-0 left-0 right-0 flex h-[414px] max-h-[calc(100%-24px)] flex-col overflow-hidden rounded-tl-[24px] rounded-tr-[24px] bg-white shadow-[0px_-8px_16px_0px_rgba(11,13,17,0.08)]"
        data-name="Bottom Sheet"
      >
        <SheetTitle onClose={onClose} />
        <FileSummary formData={formData} />
        <ConfirmMessage />
        <RegisterButton onNext={onNext} />
      </div>
    </div>
  );
}

export default function S8Confirm({ isOpen, onClose, onNext, formData }: S8ConfirmProps) {
  if (!isOpen) return null;

  return <BottomSheet onClose={onClose} onNext={onNext} formData={formData} />;
}
