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

function Frame1({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between px-[24px] relative size-full">
          <div className="flex flex-col font-['Pretendard_Variable:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0b0d11] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
            <p className="leading-[1.44]">학교 출제 경향 자료명</p>
          </div>
          <div onClick={onClose} className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[24px] cursor-pointer" data-name="icon slot">
            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="close">
              <div className="absolute flex inset-[20.83%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-45 flex-none h-[hypot(100cqw,100cqh)] w-[hypot(5.05076cqw,-5.05076cqh)]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-5.05%_-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 21.799">
                        <path d="M1 1V20.799" id="Vector" stroke="var(--stroke-0, #394046)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex inset-[20.83%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="-rotate-45 flex-none h-[hypot(5.05076cqw,5.05076cqh)] w-[hypot(100cqw,-100cqh)]">
                  <div className="relative size-full" data-name="Vector">
                    <div className="absolute inset-[-1px_-5.05%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.799 2">
                        <path d="M20.799 1H1" id="Vector" stroke="var(--stroke-0, #394046)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ onClose }: { onClose: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] relative shrink-0 w-full" data-name="title">
      <div className="bg-[#e3e8ed] h-[4px] relative rounded-[4px] shrink-0 w-[44px]" data-name="tab" />
      <Frame1 onClose={onClose} />
    </div>
  );
}

function Frame2({ subject }: { subject: string }) {
  return (
    <div className="bg-[#3ba5e6] h-full relative rounded-bl-[10px] rounded-tl-[10px] shrink-0 w-[60px]">
      <div aria-hidden="true" className="absolute border-[#3ba5e6] border-b-2 border-l-2 border-solid border-t-2 inset-0 pointer-events-none rounded-bl-[10px] rounded-tl-[10px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[26px] pt-[25px] px-[4px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-white whitespace-nowrap">
            <p className="leading-[1.68]">{subject}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3({ formData }: { formData: any }) {
  const { year, schoolName, grade, semester, examType } = formData;

  return (
    <div className="bg-[#f1f4f8] h-full relative rounded-br-[10px] rounded-tr-[10px] shrink-0 w-[252px]">
      <div aria-hidden="true" className="absolute border-[#3ba5e6] border-b-2 border-r-2 border-solid border-t-2 inset-0 pointer-events-none rounded-br-[10px] rounded-tr-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[20px] text-black text-ellipsis whitespace-nowrap">
            <p className="leading-[1.68] mb-0 overflow-hidden text-ellipsis whitespace-nowrap">{year} {formData.region?.split(' ')[1] || '서울'} {schoolName}</p>
            <p className="leading-[1.68] overflow-hidden text-ellipsis whitespace-nowrap">{grade} {semester} {examType}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileItem({ formData }: { formData: any }) {
  return (
    <div className="content-stretch flex h-[92px] items-center relative shrink-0 w-[312px]" data-name="File Item">
      <Frame2 subject={formData.subject || "수학"} />
      <Frame3 formData={formData} />
    </div>
  );
}

function Frame({ formData }: { formData: any }) {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full">
      <FileItem formData={formData} />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[12px] relative shrink-0">
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[1.68] not-italic overflow-hidden relative shrink-0 text-[#0b0d11] text-[15px] text-center text-ellipsis tracking-[0.32px] w-[283px] whitespace-nowrap">등록 전 입력 정보를 확인해 주세요.</p>
    </div>
  );
}

function Content({ formData }: { formData: any }) {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[24px] relative size-full">
          <Frame formData={formData} />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function BottomSheet1({ onClose, formData }: { onClose: () => void; formData: any }) {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[431px] items-center left-[-0.05%] overflow-clip right-[0.05%] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-8px_16px_0px_rgba(11,13,17,0.08)] top-[calc(50%+184.5px)]" data-name="Bottom Sheet">
      <Title onClose={onClose} />
      <Content formData={formData} />
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
      <p className="font-['Pretendard_Variable:Bold',sans-serif] leading-[1.44] not-italic relative shrink-0 text-[19px] text-center text-white whitespace-nowrap">등록하기</p>
    </div>
  );
}

function Component({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 p-[24px] top-[701px] w-full" data-name="버튼">
      <div onClick={onPrev} className="bg-white max-w-[400px] relative rounded-[999px] shrink-0 cursor-pointer" data-name="button-legacy">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
          <Content1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#3ba5e6] border-solid inset-0 pointer-events-none rounded-[999px]" />
      </div>
      <div onClick={onNext} className="bg-[#3ba5e6] flex-[1_0_0] max-w-[400px] min-w-px relative rounded-[999px] cursor-pointer" data-name="button-legacy">
        <div className="flex flex-row items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[24px] py-[12px] relative size-full">
            <Content2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomSheet({ onClose, onPrev, onNext, formData }: { onClose: () => void; onPrev: () => void; onNext: () => void; formData: any }) {
  return (
    <div className="absolute bg-[rgba(11,13,17,0.6)] h-full left-0 overflow-clip top-0 w-full z-10" data-name="BottomSheet">
      <BottomSheet1 onClose={onClose} formData={formData} />
      <Component onPrev={onPrev} onNext={onNext} />
    </div>
  );
}

export default function S8Confirm({ isOpen, onClose, onPrev, onNext, formData }: S8ConfirmProps) {
  if (!isOpen) return null;

  return (
    <BottomSheet onClose={onClose} onPrev={onPrev} onNext={onNext} formData={formData} />
  );
}
