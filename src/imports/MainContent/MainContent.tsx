import svgPaths from "./svg-85vhlfmhs3";

function Label() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#0f172a] text-[12px] top-[0.72px] tracking-[-0.076px] whitespace-nowrap">
        <span className="leading-[18px]">{`자료 출제 연도 `}</span>
        <span className="leading-[18px] text-[#ef4444]">*</span>
      </p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white h-[39.991px] mr-[-25.993px] relative rounded-[5px] shrink-0 w-[275.21px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#a8a8a8] border-[0.572px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[12.38px] not-italic text-[13px] text-black top-[9.84px] tracking-[-0.0762px] whitespace-nowrap">2026년</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.993 15.993">
        <g id="Icon">
          <path d={svgPaths.p1e2dba00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33275" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[10px] relative size-full">
          <Dropdown />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[5.993px] h-[64px] items-start relative shrink-0 w-[275.21px]" data-name="Container">
      <Label />
      <Container2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[275.21px]">
      <Container1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#0f172a] text-[12px] top-[0.72px] tracking-[-0.076px] whitespace-nowrap">
        <span className="leading-[18px]">{`학교명 `}</span>
        <span className="leading-[18px] text-[#ef4444]">*</span>
      </p>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="absolute bg-white border-[#a8a8a8] border-[0.572px] border-solid h-[39.991px] left-0 rounded-[5px] top-0 w-[275.21px]" data-name="Dropdown">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[11.81px] not-italic text-[13px] text-black top-[9.22px] tracking-[-0.0762px] whitespace-nowrap">당곡중학교</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Dropdown1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[5.993px] h-[64px] items-start relative shrink-0 w-[275.21px]" data-name="Container">
      <Label1 />
      <Container4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[275.21px]">
      <Container3 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#0f172a] text-[12px] top-[0.72px] tracking-[-0.076px] whitespace-nowrap">지역</p>
    </div>
  );
}

function Dropdown2() {
  return (
    <div className="absolute bg-[#f3f3f3] border-[#a8a8a8] border-[0.572px] border-solid h-[39.991px] left-0 rounded-[5px] top-0 w-[275.21px]" data-name="Dropdown">
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[12.19px] not-italic text-[#a8a8a8] text-[13px] top-[9.22px] tracking-[-0.0762px] whitespace-nowrap">서울특별시 관악구</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <Dropdown2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[5.993px] h-[64px] items-start relative shrink-0 w-[275.21px]" data-name="Container">
      <Label2 />
      <Container6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[275.21px]">
      <Container5 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#0f172a] text-[12px] top-[0.72px] tracking-[-0.076px] whitespace-nowrap">
        <span className="leading-[18px]">{`학년 `}</span>
        <span className="leading-[18px] text-[#ef4444]">*</span>
      </p>
    </div>
  );
}

function Dropdown3() {
  return (
    <div className="bg-white h-[39.991px] mr-[-25.993px] relative rounded-[5px] shrink-0 w-[275.21px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#a8a8a8] border-[0.572px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[12.38px] not-italic text-[13px] text-black top-[9.84px] tracking-[-0.0762px] whitespace-nowrap">1학년</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.993 15.993">
        <g id="Icon">
          <path d={svgPaths.p1e2dba00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33275" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[10px] relative size-full">
          <Dropdown3 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[5.993px] h-[64px] items-start relative shrink-0 w-[275.21px]" data-name="Container">
      <Label3 />
      <Container8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[275.21px]">
      <Container7 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#0f172a] text-[12px] top-[0.72px] tracking-[-0.076px] whitespace-nowrap">
        <span className="leading-[18px]">{`학기 `}</span>
        <span className="leading-[18px] text-[#ef4444]">*</span>
      </p>
    </div>
  );
}

function Dropdown4() {
  return (
    <div className="bg-white h-[39.991px] mr-[-25.993px] relative rounded-[5px] shrink-0 w-[275.21px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#a8a8a8] border-[0.572px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[12.38px] not-italic text-[13px] text-black top-[9.84px] tracking-[-0.0762px] whitespace-nowrap">1학기</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.993 15.993">
        <g id="Icon">
          <path d={svgPaths.p1e2dba00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33275" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[10px] relative size-full">
          <Dropdown4 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[5.993px] h-[64px] items-start relative shrink-0 w-[275.21px]" data-name="Container">
      <Label4 />
      <Container10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container9 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#0f172a] text-[12px] top-[0.72px] tracking-[-0.076px] whitespace-nowrap">
        <span className="leading-[18px]">{`시험 유형 `}</span>
        <span className="leading-[18px] text-[#ef4444]">*</span>
      </p>
    </div>
  );
}

function Dropdown5() {
  return (
    <div className="bg-white h-[39.991px] mr-[-25.993px] relative rounded-[5px] shrink-0 w-[275.21px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#a8a8a8] border-[0.572px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[12.38px] not-italic text-[13px] text-black top-[9.84px] tracking-[-0.0762px] whitespace-nowrap">중간고사</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.993 15.993">
        <g id="Icon">
          <path d={svgPaths.p1e2dba00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33275" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[10px] relative size-full">
          <Dropdown5 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[5.993px] h-[64px] items-start relative shrink-0 w-[275.21px]" data-name="Container">
      <Label5 />
      <Container12 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container11 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[#0f172a] text-[12px] top-[0.72px] tracking-[-0.076px] whitespace-nowrap">
        <span className="leading-[18px]">{`과목 `}</span>
        <span className="leading-[18px] text-[#ef4444]">*</span>
      </p>
    </div>
  );
}

function Dropdown6() {
  return (
    <div className="bg-white h-[39.991px] mr-[-25.993px] relative rounded-[5px] shrink-0 w-[275.21px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#a8a8a8] border-[0.572px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[12.38px] not-italic text-[13px] text-black top-[9.84px] tracking-[-0.0762px] whitespace-nowrap">수학</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.993 15.993">
        <g id="Icon">
          <path d={svgPaths.p1e2dba00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33275" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[10px] relative size-full">
          <Dropdown6 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[5.993px] h-[64px] items-start relative shrink-0 w-[275.21px]" data-name="Container">
      <Label6 />
      <Container14 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container13 />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[18.006px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#1976d2] text-[12px] top-[0.72px] tracking-[-0.076px] whitespace-nowrap">{`과목 출판사 (선택 사항) `}</p>
    </div>
  );
}

function Dropdown7() {
  return (
    <div className="bg-white h-[39.991px] mr-[-25.993px] relative rounded-[5px] shrink-0 w-[275.21px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[#a8a8a8] border-[0.572px] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <p className="absolute font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal leading-[19.5px] left-[12.38px] not-italic text-[13px] text-black top-[9.84px] tracking-[-0.0762px] whitespace-nowrap">천재교과서</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[15.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.993 15.993">
        <g id="Icon">
          <path d={svgPaths.p1e2dba00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33275" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[10px] relative size-full">
          <Dropdown7 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[5.993px] h-[64px] items-start relative shrink-0 w-[275.21px]" data-name="Container">
      <Label7 />
      <Container16 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Container15 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[700px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-center p-[10px] relative size-full">
          <Frame2 />
          <Frame />
          <Frame1 />
          <Frame3 />
          <Frame4 />
          <Frame6 />
          <Frame5 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Main Content">
      <Container />
    </div>
  );
}