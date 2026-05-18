import svgPaths from "./svg-i9ukymltqy";
import { useNavigate } from "react-router";

interface ConfirmHomeProps {
  isOpen: boolean;
  onClose: () => void;
}

function Component1() {
  return (
    <div className="absolute left-[6.38px] size-[55.694px] top-[15.7px]" data-name="Component 2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.6943 55.6943">
        <g id="Component 2">
          <circle cx="27.8471" cy="27.8471" fill="url(#paint0_linear_6_14182)" id="Ellipse 230" r="27.8471" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_14182" x1="8.80827" x2="35.7137" y1="5.94984e-07" y2="55.6943">
            <stop stopColor="#FF9A81" />
            <stop offset="1" stopColor="#E683FF" />
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.3729 75.3729">
          <g id="Information Circle">
            <foreignObject height="128.839" width="128.839" x="-26.7332" y="-26.7332">
              <div style={{ backdropFilter: "blur(13.37px)", clipPath: "url(#bgblur_0_6_14176_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
            </foreignObject>
            <path clipRule="evenodd" d={svgPaths.p6c51260} fill="var(--fill-0, #E14D52)" fillOpacity="0.08" fillRule="evenodd" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.12" strokeWidth="1.11388" data-figma-bg-blur-radius="26.7332" />
            <g filter="url(#filter1_d_6_14176)" id="Vector_2">
              <path clipRule="evenodd" d={svgPaths.p3c160280} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <clipPath id="bgblur_0_6_14176_clip_path" transform="translate(26.7332 26.7332)">
              <path clipRule="evenodd" d={svgPaths.p6c51260} fillRule="evenodd" />
            </clipPath>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="54.4207" id="filter1_d_6_14176" width="21.9323" x="30.3466" y="14.1028">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="3.62661" dy="3.62661" />
              <feGaussianBlur stdDeviation="3.62661" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.882353 0 0 0 0 0.301961 0 0 0 0 0.321569 0 0 0 0.48 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_14176" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_14176" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HiconGlassInformationCircle() {
  return (
    <div className="absolute left-[17.52px] overflow-clip size-[89.111px] top-[13.47px]" data-name="Hicon / Glass / Information Circle">
      <InformationCircle />
    </div>
  );
}

function BodyImgArea() {
  return (
    <div className="relative shrink-0 w-full" data-name="body img area">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pt-[22.691px] px-[24px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[104.945px]" data-name="glass">
            <Component1 />
            <HiconGlassInformationCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center pt-[17.018px] relative shrink-0 w-full" data-name="title">
      <div className="flex-[1_0_0] font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[0] min-w-px not-italic relative text-[#0b0d11] text-[18px] text-center">
        <p className="leading-[1.68] mb-0">홈으로 이동하면</p>
        <p className="leading-[1.68]">입력 중인 내용이 모두 취소됩니다.</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.44] not-italic relative shrink-0 text-[#3ba5e6] text-[19px] text-center whitespace-nowrap">이전</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.44] not-italic relative shrink-0 text-[19px] text-center text-white whitespace-nowrap">이동하기</p>
    </div>
  );
}

function Component({ onPrev, onConfirm }: { onPrev: () => void; onConfirm: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[24px] relative shrink-0 w-[320px]" data-name="버튼">
      <div onClick={onPrev} className="bg-white max-w-[400px] relative rounded-[999px] shrink-0 cursor-pointer" data-name="button-legacy">
        <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
          <Content />
        </div>
        <div aria-hidden="true" className="absolute border border-[#3ba5e6] border-solid inset-0 pointer-events-none rounded-[999px]" />
      </div>
      <div onClick={onConfirm} className="bg-[#3ba5e6] flex-[1_0_0] max-w-[400px] min-w-px relative rounded-[999px] cursor-pointer" data-name="button-legacy">
        <div className="flex flex-row items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[24px] py-[12px] relative size-full">
            <Content1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Popup({ onPrev, onConfirm }: { onPrev: () => void; onConfirm: () => void }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[326px] left-1/2 max-h-[726.1091918945312px] max-w-[629.10400390625px] min-h-[269.45458984375px] min-w-[233.45657348632812px] rounded-[24px] top-1/2 w-[320px]" data-name="popup">
      <div className="content-stretch flex flex-col items-center max-h-[inherit] max-w-[inherit] min-h-[inherit] min-w-[inherit] overflow-clip px-[24px] py-[22.691px] relative rounded-[inherit] size-full">
        <BodyImgArea />
        <Title />
        <Component onPrev={onPrev} onConfirm={onConfirm} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8.509px_14.182px_0px_rgba(11,13,17,0.12)]" />
    </div>
  );
}

function BottomSheet({ onPrev, onConfirm }: { onPrev: () => void; onConfirm: () => void }) {
  return (
    <div className="absolute bg-[rgba(11,13,17,0.6)] h-full left-0 overflow-clip top-0 w-full" data-name="BottomSheet">
      <Popup onPrev={onPrev} onConfirm={onConfirm} />
    </div>
  );
}

export default function ConfirmHome({ isOpen, onClose }: ConfirmHomeProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handlePrev = () => {
    onClose();
  };

  const handleConfirm = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <BottomSheet onPrev={handlePrev} onConfirm={handleConfirm} />
    </div>
  );
}
