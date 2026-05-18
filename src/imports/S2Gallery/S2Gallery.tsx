import svgPaths from "./svg-09jbove33f";
import { useNavigate } from "react-router";

function Text() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[26.643px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#1e2939] text-[11px] top-[-0.43px] whitespace-nowrap">10:57</p>
      </div>
    </div>
  );
}

function Text1() {
  return <div className="h-[12px] relative shrink-0 w-[3.348px]" data-name="Text" />;
}

function Container1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[81.991px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p1cf7680} id="Vector" stroke="var(--stroke-0, #1E2939)" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[16px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2dd10900} fill="var(--fill-0, #1E2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[32px] size-[12px] top-[2.25px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2cbdd780} fill="var(--fill-0, #1E2939)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[16.5px] left-[48px] top-0 w-[21.321px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[-1.68px] not-italic text-[#1e2939] text-[11px] top-[-0.43px] whitespace-nowrap">100%</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[76px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <Icon1 />
        <Icon2 />
        <Text2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-white content-stretch flex h-[24px] items-center justify-between left-0 px-[16px] top-0 w-[360px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Icon3() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')} className="relative shrink-0 size-[24px] cursor-pointer" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p22da5e40} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p19568f00} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M21 21L16.7 16.7" id="Vector_2" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3d96f400} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1a816e00} id="Vector_2" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1116500} id="Vector_3" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Icon4 />
        <Icon5 />
        <Icon6 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white content-stretch flex h-[56px] items-center justify-between left-0 pb-[0.571px] px-[16px] top-[24px] w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <Icon3 />
      <Container4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p21a7e80} id="Vector_2" stroke="var(--stroke-0, #1E2939)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.571px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6px] py-[0.571px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1e2939] text-[16px] top-[-1.86px] whitespace-nowrap">문서</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container7 />
        <Icon8 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[-11.88px] not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">54.38 MB</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[56.571px] items-center justify-between left-0 pb-[12.571px] pt-[12px] px-[16px] top-[80px] w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Text4 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2 4H14" id="Vector" stroke="var(--stroke-0, #364153)" strokeWidth="1.33333" />
          <path d="M2 8H14" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeWidth="1.33333" />
          <path d="M2 12H14" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.43px] whitespace-nowrap">날짜</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon9 />
        <Text5 />
        <Icon10 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[36.571px] items-center justify-end left-0 pb-[8.571px] pt-[8px] px-[16px] top-[136.57px] w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <Container9 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#4285f4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JPG</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.44] left-0 not-italic text-[#394046] text-[16px] top-[-2.14px] tracking-[0.32px] whitespace-nowrap">20260512_142360.jpg</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">5월 12일 오후 2:23</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[211.509_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.491px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[-6.51px] not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">3.14 MB</p>
      </div>
    </div>
  );
}

function Container11() {
  const navigate = useNavigate();

  return (
    <div className="h-[72.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div onClick={() => navigate('/preview')} className="content-stretch flex gap-[12px] items-center pb-[12.571px] pt-[12px] px-[16px] relative size-full cursor-pointer hover:bg-gray-50">
          <Container12 />
          <Container13 />
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#4285f4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JPG</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.44] left-0 not-italic text-[#394046] text-[16px] top-[-1.86px] tracking-[0.32px] whitespace-nowrap">20260512_142260.jpg</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">5월 12일 오후 2:22</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[200.732_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.268px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[4.27px] not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">3.13 MB</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[72.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[12.571px] pt-[12px] px-[16px] relative size-full">
          <Container18 />
          <Container19 />
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#4285f4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JPG</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.44] left-0 not-italic text-[#394046] text-[16px] top-[-1.86px] tracking-[0.32px] whitespace-nowrap">20260512_142160.jpg</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">5월 12일 오후 2:21</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[235.196_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.804px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[-29.2px] not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">3.16 MB</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[72.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[12.571px] pt-[12px] px-[16px] relative size-full">
          <Container24 />
          <Container25 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#4285f4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JPG</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.44] left-0 not-italic text-[#394046] text-[16px] top-[-1.86px] tracking-[0.32px] whitespace-nowrap">20260512_142060.jpg</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">5월 12일 오후 2:20</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[200.732_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.268px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[4.27px] not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">3.01 MB</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[72.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[12.571px] pt-[12px] px-[16px] relative size-full">
          <Container30 />
          <Container31 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#4285f4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JPG</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.44] left-0 not-italic text-[#394046] text-[16px] top-[-1.86px] tracking-[0.32px] whitespace-nowrap">20260512_141960.jpg</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">5월 12일 오후 2:19</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="flex-[200.732_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.268px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[2.27px] not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">3.08 MB</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[72.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[12.571px] pt-[12px] px-[16px] relative size-full">
          <Container36 />
          <Container37 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#4285f4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JPG</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.44] left-0 not-italic text-[#394046] text-[16px] top-[-1.86px] tracking-[0.32px] whitespace-nowrap">20260512_141860.jpg</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">5월 12일 오후 2:18</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[200.732_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.268px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[4.27px] not-italic text-[#4a5565] text-[14px] top-[0.14px] whitespace-nowrap">3.14 MB</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[72.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[12.571px] pt-[12px] px-[16px] relative size-full">
          <Container42 />
          <Container43 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#4285f4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JPG</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.44] left-0 not-italic text-[#394046] text-[16px] top-[-1.86px] tracking-[0.32px] whitespace-nowrap">20260512_141960.jpg</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">5월 12일 오후 2:17</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[200.732_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.268px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[4.27px] not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">3.13 MB</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[72.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[12.571px] pt-[12px] px-[16px] relative size-full">
          <Container48 />
          <Container49 />
          <Container52 />
        </div>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#4285f4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">JPG</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.44] left-0 not-italic text-[#394046] text-[16px] top-[-1.86px] tracking-[0.32px] whitespace-nowrap">20260512_141960.jpg</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[16px] min-w-px not-italic relative text-[#4a5565] text-[12px]">5월 12일 오후 2:17</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[200.732_0_0] h-[42px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.268px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[5.27px] not-italic text-[#4a5565] text-[14px] top-[-0.43px] whitespace-nowrap">3.15 MB</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[72.571px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b-[0.571px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pb-[12.571px] pt-[12px] px-[16px] relative size-full">
          <Container54 />
          <Container55 />
          <Container58 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[578.857px] items-start left-0 overflow-clip top-[173px] w-[360px]" data-name="Container">
      <Container11 />
      <Container17 />
      <Container23 />
      <Container29 />
      <Container35 />
      <Container41 />
      <Container47 />
      <Container53 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M4 12H20" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 6H20" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M4 18H20" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-white content-stretch flex h-[48px] items-center justify-between left-0 pt-[0.571px] px-[55px] top-[752px] w-[360px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t-[0.571px] inset-0 pointer-events-none" />
      <Icon11 />
      <div className="relative rounded-[5px] shrink-0 size-[19px]">
        <div aria-hidden="true" className="absolute border-2 border-[#364153] border-solid inset-0 pointer-events-none rounded-[5px]" />
      </div>
      <Icon12 />
    </div>
  );
}

export default function S2Gallery() {
  return (
    <div className="bg-white relative size-full" data-name="s2-gallery">
      <Container />
      <Container3 />
      <Container5 />
      <Container8 />
      <Container10 />
      <Container59 />
    </div>
  );
}