import svgPaths from "../../imports/TitleBar/svg-lwjel77zjx";

interface TitleBarProps {
  onHomeClick: () => void;
}

function DLinkText() {
  return (
    <div className="absolute h-[17.736px] left-0 top-[0.62px] w-[79.869px]" data-name="D.Link text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.8687 17.7352">
        <g id="D.Link text">
          <path d={svgPaths.p23581480} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p169e3080} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p5557b00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3c9cd8c0} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p35ac6e80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.pc0cb400} fill="var(--fill-0, white)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="h-[19px] relative shrink-0 w-[80px]" data-name="임시로고">
      <DLinkText />
    </div>
  );
}

export default function TitleBar({ onHomeClick }: TitleBarProps) {
  return (
    <div className="content-stretch flex justify-between h-[48px] items-center px-[16px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(105.26deg, rgb(79, 161, 249) 6.717%, rgb(112, 83, 245) 109.71%)" }} data-name="title bar">
      <Component />
      <div onClick={onHomeClick} className="relative shrink-0 size-[24px] cursor-pointer" data-name="home-filled">
        <div className="absolute inset-[12.92%_8.33%_16.25%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
            <path d={svgPaths.p11ed7200} fill="var(--fill-0, white)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}
