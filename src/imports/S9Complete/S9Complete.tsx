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

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0b0d11] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
            <p className="leading-[1.44]">등록 완료</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center pt-[8px] relative shrink-0 w-full" data-name="title">
      <div className="bg-[#e3e8ed] h-[4px] relative rounded-[4px] shrink-0 w-[44px]" data-name="tab" />
      <Frame />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute left-[9px] size-[78.543px] top-[22.14px]" data-name="Component 2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.5432 78.5432">
        <g id="Component 2">
          <circle cx="39.2716" cy="39.2716" fill="url(#paint0_linear_1_934)" id="Ellipse 230" r="39.2716" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_934" x1="12.4219" x2="50.3654" y1="8.39079e-07" y2="78.5432">
            <stop stopColor="#81C5FF" />
            <stop offset="1" stopColor="#A683FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function InformationCircle() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Information Circle">
      <div className="absolute inset-[-0.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106.295 106.295">
          <g id="Information Circle">
            <foreignObject height="181.696" width="181.696" x="-37.7006" y="-37.7006">
              <div style={{ backdropFilter: "blur(18.85px)", clipPath: "url(#bgblur_0_1_4745_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path clipRule="evenodd" d={svgPaths.p2ab91980} fill="var(--fill-0, #4F60FF)" fillOpacity="0.08" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.12" strokeWidth="1.57086" data-figma-bg-blur-radius="37.7006" />
            <g filter="url(#filter1_d_1_4745)" id="Vector_2">
              <path clipRule="evenodd" d={svgPaths.p278ebf00} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_1_4745_clip_path" transform="translate(37.7006 37.7006)">
              <path clipRule="evenodd" d={svgPaths.p2ab91980} fillRule="evenodd" />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58.192" id="filter1_d_1_4745" width="71.9395" x="22.4184" y="29.2927">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="5.24104" dy="5.24104" />
              <feGaussianBlur stdDeviation="5.24104" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.376471 0 0 0 0 1 0 0 0 0.48 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_4745" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_4745" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HiconGlassInformationCircle() {
  return (
    <div className="absolute left-[24.71px] overflow-clip size-[125.669px] top-[19px]" data-name="Hicon / Glass / Information Circle">
      <InformationCircle />
    </div>
  );
}

function BodyImgArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="body img area">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pt-[16px] px-[36px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[148px]" data-name="glass">
            <Component1 />
            <HiconGlassInformationCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1({ formData }: { formData: any }) {
  const { year, schoolName, region, grade, semester, examType } = formData;

  return (
    <div className="content-stretch flex flex-col h-[56px] items-start justify-center pt-[12px] relative shrink-0 w-[283px]">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.44] not-italic overflow-hidden relative shrink-0 text-[#394046] text-[13px] text-center text-ellipsis tracking-[0.32px] w-full whitespace-nowrap">
        {year} {region?.split(' ')[1] || '서울'} {schoolName} {grade} {semester} {examType}
      </p>
    </div>
  );
}

function Content({ formData }: { formData: any }) {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[24px] relative size-full">
          <BodyImgArea />
          <div className="flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0b0d11] text-[18px] text-center w-[283.123px]">
            <p className="leading-[1.68]">자료 등록이 완료되었습니다</p>
          </div>
          <Frame1 formData={formData} />
        </div>
      </div>
    </div>
  );
}

function BottomSheet1({ formData }: { formData: any }) {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[431px] items-center left-[-0.05%] overflow-clip right-[0.05%] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-8px_16px_0px_rgba(11,13,17,0.08)] top-[calc(50%+184.5px)]" data-name="Bottom Sheet">
      <Title />
      <Content formData={formData} />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.32px] whitespace-nowrap">자료 추가 등록하기</p>
    </div>
  );
}

function Component({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 p-[24px] top-[701px] w-full" data-name="버튼">
      <div onClick={onClose} className="bg-[#3ba5e6] flex-[1_0_0] max-w-[400px] min-w-px relative rounded-[999px] cursor-pointer" data-name="button-legacy">
        <div className="flex flex-row items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[24px] py-[12px] relative size-full">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomSheet({ onClose, formData }: { onClose: () => void; formData: any }) {
  return (
    <div className="absolute bg-[rgba(11,13,17,0.6)] h-full left-0 overflow-clip top-0 w-full z-10" data-name="BottomSheet">
      <BottomSheet1 formData={formData} />
      <Component onClose={onClose} />
    </div>
  );
}

export default function S9Complete({ isOpen, onClose, formData }: S9CompleteProps) {
  if (!isOpen) return null;

  return (
    <BottomSheet onClose={onClose} formData={formData} />
  );
}
