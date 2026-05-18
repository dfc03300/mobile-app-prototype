import { useState } from "react";

interface S5QualityProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function SheetTitle() {
  return (
    <div className="flex w-full shrink-0 flex-col items-center gap-[8px] pt-[8px]">
      <div className="h-[4px] w-[44px] shrink-0 rounded-[4px] bg-[#e3e8ed]" />
      <div className="w-full px-[24px]">
        <p className="font-['Pretendard_Variable:Bold','Noto_Sans_KR:Bold',sans-serif] text-[16px] font-bold leading-[1.44] tracking-[0.32px] text-[#0b0d11]">
          파일 이상 체크 (중복 선택 가능)
        </p>
      </div>
    </div>
  );
}

function RadioMark({ checked }: { checked: boolean }) {
  return (
    <div className="relative size-[20px] shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <circle cx="10" cy="10" r="9.1" stroke={checked ? "#3BA5E6" : "#8C98A1"} strokeWidth="1.7" />
        {checked ? <circle cx="10" cy="10" r="6.2" fill="#3BA5E6" /> : null}
      </svg>
    </div>
  );
}

function RadioButton({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex h-[35px] w-full shrink-0 items-center gap-[12px] text-left"
    >
      <RadioMark checked={checked} />
      <span className="font-['Pretendard_Variable:Bold','Noto_Sans_KR:Bold',sans-serif] text-[15px] font-bold leading-[1.68] tracking-[0.32px] text-[#0b0d11]">
        {label}
      </span>
    </button>
  );
}

function CheckList({
  blurry,
  notes,
  incomplete,
  onBlurryChange,
  onNotesChange,
  onIncompleteChange,
}: {
  blurry: boolean;
  notes: boolean;
  incomplete: boolean;
  onBlurryChange: () => void;
  onNotesChange: () => void;
  onIncompleteChange: () => void;
}) {
  return (
    <div className="flex w-full shrink-0 flex-col gap-[16px] px-[24px] pb-[18px] pt-[28px]">
      <RadioButton checked={blurry} label="글자가 흐릿함" onChange={onBlurryChange} />
      <RadioButton checked={notes} label="필기와 낙서가 심함" onChange={onNotesChange} />
      <RadioButton checked={incomplete} label="자료 일부가 없음" onChange={onIncompleteChange} />
    </div>
  );
}

function SheetActions({ onPrev, onNext, hasAnyChecked }: { onPrev: () => void; onNext: () => void; hasAnyChecked: boolean }) {
  return (
    <div className="flex w-full shrink-0 gap-[8px] px-[24px] pb-[24px] pt-[4px]">
      <button
        type="button"
        onClick={onPrev}
        className="flex h-[48px] flex-1 items-center justify-center rounded-[999px] border border-[#3ba5e6] bg-white"
      >
        <span className="font-['Pretendard_Variable:Bold','Noto_Sans_KR:Bold',sans-serif] text-[19px] font-bold leading-[1.44] text-[#3ba5e6]">
          이전
        </span>
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!hasAnyChecked}
        className="flex h-[48px] flex-1 items-center justify-center rounded-[999px] bg-[#3ba5e6] disabled:bg-[rgba(140,152,161,0.24)]"
      >
        <span className="font-['Pretendard_Variable:Bold','Noto_Sans_KR:Bold',sans-serif] text-[19px] font-bold leading-[1.44] text-white">
          다음
        </span>
      </button>
    </div>
  );
}

function BottomSheet({
  blurry,
  notes,
  incomplete,
  onBlurryChange,
  onNotesChange,
  onIncompleteChange,
  onPrev,
  onNext,
  hasAnyChecked,
}: {
  blurry: boolean;
  notes: boolean;
  incomplete: boolean;
  onBlurryChange: () => void;
  onNotesChange: () => void;
  onIncompleteChange: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasAnyChecked: boolean;
}) {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden bg-[rgba(11,13,17,0.6)]" data-name="BottomSheet">
      <div
        className="absolute bottom-0 left-0 right-0 flex h-[318px] max-h-[calc(100%-24px)] flex-col overflow-hidden rounded-tl-[24px] rounded-tr-[24px] bg-white shadow-[0px_-8px_16px_0px_rgba(11,13,17,0.08)]"
        data-name="Bottom Sheet"
      >
        <SheetTitle />
        <CheckList
          blurry={blurry}
          notes={notes}
          incomplete={incomplete}
          onBlurryChange={onBlurryChange}
          onNotesChange={onNotesChange}
          onIncompleteChange={onIncompleteChange}
        />
        <SheetActions onPrev={onPrev} onNext={onNext} hasAnyChecked={hasAnyChecked} />
      </div>
    </div>
  );
}

export default function S5Quality({ isOpen, onNext, onPrev }: S5QualityProps) {
  const [blurry, setBlurry] = useState(false);
  const [notes, setNotes] = useState(false);
  const [incomplete, setIncomplete] = useState(false);

  const hasAnyChecked = blurry || notes || incomplete;

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 overflow-hidden">
      <BottomSheet
        blurry={blurry}
        notes={notes}
        incomplete={incomplete}
        onBlurryChange={() => setBlurry(!blurry)}
        onNotesChange={() => setNotes(!notes)}
        onIncompleteChange={() => setIncomplete(!incomplete)}
        onPrev={onPrev}
        onNext={onNext}
        hasAnyChecked={hasAnyChecked}
      />
    </div>
  );
}
