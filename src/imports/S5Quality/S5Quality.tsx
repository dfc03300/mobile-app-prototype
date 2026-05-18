import { useState } from "react";
import S3Preview from "../S3Preview/S3Preview";

interface S5QualityProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[10px] items-start px-[24px] relative size-full">
        <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0d11] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
          <p className="leading-[1.44]">파일 이상 체크 (중복 선택 가능)</p>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] relative shrink-0 w-full" data-name="title">
      <div className="bg-[#e3e8ed] h-[4px] relative rounded-[4px] shrink-0 w-[44px]" data-name="tab" />
      <Frame3 />
    </div>
  );
}

function Frame1({ checked }: { checked: boolean }) {
  return (
    <div className="absolute left-[1.67px] size-[16.667px] top-[1.67px]">
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Frame 4">
            <circle cx="10" cy="10" id="Ellipse 2" r="9.16667" stroke={checked ? "var(--stroke-0, #3BA5E6)" : "var(--stroke-0, #8C98A1)"} strokeWidth="1.66667" />
            {checked && <circle cx="10" cy="10" fill="var(--fill-0, #3BA5E6)" id="Ellipse 1" r="6.25" />}
          </g>
        </svg>
      </div>
    </div>
  );
}

function RadioButton({ checked, label, onChange }: { checked: boolean; label: string; onChange: () => void }) {
  return (
    <div onClick={onChange} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full cursor-pointer">
      <div className="relative shrink-0 size-[20px]" data-name="Radio Button">
        <Frame1 checked={checked} />
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0d11] text-[15px] tracking-[0.32px] whitespace-nowrap">
        <p className="leading-[1.68]">{label}</p>
      </div>
    </div>
  );
}

function Content({ blurry, notes, incomplete, onBlurryChange, onNotesChange, onIncompleteChange }: {
  blurry: boolean;
  notes: boolean;
  incomplete: boolean;
  onBlurryChange: () => void;
  onNotesChange: () => void;
  onIncompleteChange: () => void;
}) {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center pb-[24px] pt-[32px] px-[24px] relative size-full">
          <RadioButton checked={blurry} label="글자가 흐릿함" onChange={onBlurryChange} />
          <RadioButton checked={notes} label="필기와 낙서가 심함" onChange={onNotesChange} />
          <RadioButton checked={incomplete} label="자료 일부가 없음" onChange={onIncompleteChange} />
        </div>
      </div>
    </div>
  );
}

function BottomSheet1({ blurry, notes, incomplete, onBlurryChange, onNotesChange, onIncompleteChange }: {
  blurry: boolean;
  notes: boolean;
  incomplete: boolean;
  onBlurryChange: () => void;
  onNotesChange: () => void;
  onIncompleteChange: () => void;
}) {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[318px] items-center left-[0.03%] overflow-clip right-[-0.03%] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-8px_16px_0px_rgba(11,13,17,0.08)] top-[calc(50%+241px)]" data-name="Bottom Sheet">
      <Title />
      <Content
        blurry={blurry}
        notes={notes}
        incomplete={incomplete}
        onBlurryChange={onBlurryChange}
        onNotesChange={onNotesChange}
        onIncompleteChange={onIncompleteChange}
      />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[1.44] not-italic relative shrink-0 text-[#3ba5e6] text-[19px] text-center whitespace-nowrap">이전</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[1.44] not-italic relative shrink-0 text-[19px] text-center text-white whitespace-nowrap">다음</p>
    </div>
  );
}

function Component({ onPrev, onNext, hasAnyChecked }: { onPrev: () => void; onNext: () => void; hasAnyChecked: boolean }) {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 p-[24px] top-[701px] w-full" data-name="버튼">
      <div onClick={onPrev} className="bg-white max-w-[400px] relative rounded-[999px] shrink-0 cursor-pointer" data-name="button-legacy">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
          <Content1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#3ba5e6] border-solid inset-0 pointer-events-none rounded-[999px]" />
      </div>
      <button
        onClick={onNext}
        disabled={!hasAnyChecked}
        className="bg-[#3ba5e6] disabled:bg-[rgba(140,152,161,0.24)] flex-[1_0_0] max-w-[400px] min-w-px relative rounded-[999px] cursor-pointer disabled:cursor-not-allowed"
        data-name="button-legacy"
      >
        <div className="flex flex-row items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[24px] py-[12px] relative size-full">
            <Content2 />
          </div>
        </div>
      </button>
    </div>
  );
}

function BottomSheet({ blurry, notes, incomplete, onBlurryChange, onNotesChange, onIncompleteChange, onPrev, onNext, hasAnyChecked }: {
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
    <div className="absolute bg-[rgba(11,13,17,0.6)] h-full left-0 overflow-clip top-0 w-full z-10" data-name="BottomSheet">
      <BottomSheet1
        blurry={blurry}
        notes={notes}
        incomplete={incomplete}
        onBlurryChange={onBlurryChange}
        onNotesChange={onNotesChange}
        onIncompleteChange={onIncompleteChange}
      />
      <Component onPrev={onPrev} onNext={onNext} hasAnyChecked={hasAnyChecked} />
    </div>
  );
}

export default function S5Quality({ isOpen, onClose, onNext, onPrev }: S5QualityProps) {
  const [blurry, setBlurry] = useState(false);
  const [notes, setNotes] = useState(false);
  const [incomplete, setIncomplete] = useState(false);

  const hasAnyChecked = blurry || notes || incomplete;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="bg-white content-stretch flex flex-col items-center relative h-full w-full overflow-hidden" data-name="s5-quality">
        <div className="absolute inset-0 z-0">
          <S3Preview />
        </div>
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
    </div>
  );
}
