import svgPaths from "./svg-j6hz43rkgi";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import ConfirmHome from "../ConfirmHome/ConfirmHome";
import TitleBar from "../../app/components/TitleBar";
import S8Confirm from "../S8Confirm/S8Confirm";
import S9Complete from "../S9Complete/S9Complete";

// 학교 데이터 샘플
const SCHOOLS = [
  { name: "당곡중학교", region: "서울특별시 관악구" },
  { name: "당곡중학교", region: "서울특별시 강남구" },
  { name: "당곡중학교", region: "서울특별시 성북구" },
  { name: "당진중학교", region: "충청남도 당진시" },
  { name: "당산중학교", region: "서울특별시 영등포구" },
];

interface SchoolAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  onSelectSchool: (school: { name: string; region: string }) => void;
}

function SchoolAutocomplete({ value, onChange, onSelectSchool }: SchoolAutocompleteProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredSchools, setFilteredSchools] = useState<typeof SCHOOLS>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value) {
      const filtered = SCHOOLS.filter(school =>
        school.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSchools(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setFilteredSchools([]);
      setShowDropdown(false);
    }
  }, [value]);

  const handleSelect = (school: typeof SCHOOLS[0]) => {
    onChange(school.name);
    onSelectSchool(school);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full">
      <div className="bg-white h-[55px] relative rounded-[4px] shrink-0 w-full" data-name="dropbox">
        <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
          <div className="h-[48px] relative shrink-0 w-full" data-name="familysite">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[24px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
                <input
                  ref={inputRef}
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] min-w-px not-italic relative text-[#0b0d11] text-[16px] tracking-[0.32px] bg-transparent border-none outline-none"
                  placeholder="학교명 입력"
                />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>

      {showDropdown && (
        <div className="absolute bg-white left-0 rounded-[4px] top-[59px] w-full z-10 shadow-[0px_4px_8px_rgba(0,0,0,0.1)]">
          <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full max-h-[200px] overflow-y-auto border border-[#c6d0d7]">
            {filteredSchools.map((school, index) => {
              const schoolName = school.name;
              const inputLower = value.toLowerCase();
              const schoolLower = schoolName.toLowerCase();
              const matchIndex = schoolLower.indexOf(inputLower);

              let beforeMatch = '';
              let matchText = '';
              let afterMatch = '';

              if (matchIndex !== -1 && value) {
                beforeMatch = schoolName.substring(0, matchIndex);
                matchText = schoolName.substring(matchIndex, matchIndex + value.length);
                afterMatch = schoolName.substring(matchIndex + value.length);
              } else {
                afterMatch = schoolName;
              }

              return (
                <div
                  key={index}
                  onMouseDown={(event) => {
                    event.preventDefault();
                    handleSelect(school);
                  }}
                  onClick={() => handleSelect(school)}
                  className={`h-[48px] relative shrink-0 w-full cursor-pointer hover:bg-[#f1f4f8] px-[20px] py-[12px] flex items-center ${index === 0 ? 'bg-[#f1f4f8]' : ''}`}
                  data-name="Container"
                >
                  <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-[#8c98a1]">{school.region.split(' ').join(' > ')} &gt; </span>
                    <span className="text-black">{beforeMatch}</span>
                    <span className="text-[#4f60ff]">{matchText}</span>
                    <span className="text-black">{afterMatch}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function MailSendEmailAttachmentDocumentStreamlinePlump() {
  return (
    <div className="aspect-[17.458953857421875/17.458953857421875] flex-[1_0_0] min-w-px overflow-clip relative" data-name="mail-send-email-attachment-document--Streamline-Plump">
      <div className="absolute inset-[6.25%_6.25%_10.42%_18.95%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.57%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9643 16.5">
            <path d={svgPaths.p2703a880} id="Vector" stroke="var(--stroke-0, #C6D0D7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[7.29%_7.29%_66.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.1875 6.1875">
            <path d={svgPaths.p1b596a00} id="Vector" stroke="var(--stroke-0, #C6D0D7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[43.75%_60.42%_6.25%_6.25%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 10.5">
            <path d={svgPaths.p24dff000} id="Vector" stroke="var(--stroke-0, #C6D0D7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[24px]" data-name="icon slot">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="upload-File">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[3px] relative size-full">
              <MailSendEmailAttachmentDocumentStreamlinePlump />
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] not-italic relative shrink-0 text-[#8c98a1] text-[13px] text-center tracking-[0.32px] whitespace-nowrap">파일 업로드</p>
    </div>
  );
}

function InterfaceFileContentListStreamlinePlump() {
  return (
    <div className="aspect-[16.48675537109375/16.48675537109375] flex-[1_0_0] min-w-px overflow-clip relative" data-name="interface-file-content-list--Streamline-Plump">
      <div className="absolute inset-[61.66%_25.85%_25.37%_25.49%]" data-name="Vector">
        <div className="absolute inset-[-32.13%_-8.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.2578 3.83433">
            <path d={svgPaths.p9007900} id="Vector" stroke="var(--stroke-0, #3BA5E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.25%_10.42%]" data-name="Vector">
        <div className="absolute inset-[-4.76%_-5.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7499 17.25">
            <path d={svgPaths.p329d9900} id="Vector" stroke="var(--stroke-0, #3BA5E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.4%_10.68%_65.08%_60.18%]" data-name="Vector">
        <div className="absolute inset-[-14.61%_-14.3%_-14.6%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.74641 6.63328">
            <path d={svgPaths.p39a75000} id="Vector" stroke="var(--stroke-0, #3BA5E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28.61%_56.17%_52.08%_23.8%]" data-name="Vector">
        <div className="absolute inset-[-21.58%_-20.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.10571 4.97607">
            <path d={svgPaths.p232ff080} id="Vector" stroke="var(--stroke-0, #3BA5E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[24px]" data-name="icon slot">
        <div className="flex-[1_0_0] min-h-px relative w-full" data-name="basic-info">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center justify-center p-[3px] relative size-full">
              <InterfaceFileContentListStreamlinePlump />
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.44] not-italic relative shrink-0 text-[#0b0d11] text-[13px] text-center tracking-[0.32px] whitespace-nowrap">기본정보 입력</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-full">
      <div className="content-stretch flex gap-[2px] h-[24px] items-center relative shrink-0" data-name="upload progress">
        <Frame />
        <div className="h-0 relative shrink-0 w-[24px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
              <line id="Line 1" stroke="var(--stroke-0, #8C98A1)" strokeLinecap="round" x1="0.5" x2="23.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Frame1 />
      </div>
    </div>
  );
}

export default function S6Form() {
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [region, setRegion] = useState("");
  const [grade, setGrade] = useState("");
  const [semester, setSemester] = useState("");
  const [examType, setExamType] = useState("");
  const [subject] = useState("수학");
  const [publisher] = useState("공통");
  const [showConfirmHome, setShowConfirmHome] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const handleSchoolSelect = (school: { name: string; region: string }) => {
    setRegion(school.region);
  };

  const handleHomeClick = () => {
    setShowConfirmHome(true);
  };

  const handlePrev = () => {
    navigate('/preview');
  };

  const handleNext = () => {
    setShowConfirm(true);
  };

  const handleConfirmPrev = () => {
    setShowConfirm(false);
  };

  const handleConfirmNext = () => {
    setShowConfirm(false);
    setShowComplete(true);
  };

  const handleCompleteClose = () => {
    navigate('/');
  };

  const isFormValid = year && schoolName && region && grade && semester && examType && subject && publisher;

  const formData = {
    year,
    schoolName,
    region,
    grade,
    semester,
    examType,
    subject,
    publisher
  };

  return (
    <>
      <div className="bg-white content-stretch flex flex-col items-center relative h-full w-full overflow-hidden" data-name="s6-form">
        <TitleBar onHomeClick={handleHomeClick} />
        <Frame3 />

        {/* Body - Scrollable Content */}
        <div className="flex-[1_0_0] min-h-0 relative w-full overflow-y-auto" data-name="body">
          <div className="flex flex-col items-center">
            <div className="content-stretch flex flex-col items-center px-[24px] relative w-full pb-[20px]">

              {/* 자료 출제 연도 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-[312px]" data-name="드롭박스-비활성 입력전">
                <div className="content-start flex flex-wrap font-bold gap-[2px] items-start leading-[1.44] not-italic relative shrink-0 text-[13px] tracking-[0.32px] w-full whitespace-nowrap" data-name="Dropdown Title">
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-[#0b0d11]">자료 출제 연도</p>
                  <p className="font-['Inter:Bold',sans-serif] relative shrink-0 text-[#3ba5e6]">*</p>
                </div>
                <div className="bg-white h-[55px] relative rounded-[4px] shrink-0 w-full" data-name="dropbox">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="h-[48px] relative shrink-0 w-full" data-name="familysite">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[24px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
                          <select
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] min-w-px not-italic relative text-[#8c98a1] text-[16px] tracking-[0.32px] bg-transparent border-none outline-none appearance-none cursor-pointer"
                          >
                            <option value="">출제연도 선택</option>
                            <option value="2026년">2026년</option>
                            <option value="2025년">2025년</option>
                            <option value="2024년">2024년</option>
                            <option value="2023년">2023년</option>
                          </select>
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[20px]" data-name="icon slot">
                            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="arrow-down-simple">
                              <div className="absolute bottom-[31.67%] flex items-center justify-center left-1/4 right-1/4 top-[37.5%]" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="vector">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                                      <path d={svgPaths.p17eef600} fill="var(--fill-0, #8C98A1)" id="vector" />
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
                  <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>

              {/* 학교명 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-[312px]" data-name="인풋-비활성 입력전">
                <div className="content-start flex flex-wrap font-bold gap-[2px] items-start leading-[1.44] not-italic relative shrink-0 text-[13px] tracking-[0.32px] w-full whitespace-nowrap" data-name="Dropdown Title">
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-[#0b0d11]">학교명</p>
                  <p className="font-['Inter:Bold',sans-serif] relative shrink-0 text-[#3ba5e6]">*</p>
                </div>
                <SchoolAutocomplete
                  value={schoolName}
                  onChange={setSchoolName}
                  onSelectSchool={handleSchoolSelect}
                />
              </div>

              {/* 지역 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-[312px]" data-name="인풋-비활성 입력전">
                <div className="content-start flex flex-wrap gap-[2px] items-start relative shrink-0 w-full" data-name="Dropdown Title">
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.44] not-italic relative shrink-0 text-[#8c98a1] text-[13px] tracking-[0.32px] whitespace-nowrap">지역</p>
                </div>
                <div className="bg-[#f1f4f8] h-[55px] relative rounded-[4px] shrink-0 w-full" data-name="dropbox">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="h-[48px] relative shrink-0 w-full" data-name="familysite">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[24px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
                          <p className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] min-w-px not-italic relative text-[#8c98a1] text-[16px] tracking-[0.32px]">
                            {region || "학교명 입력 시 자동입력"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>

              {/* 학년 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-[312px]" data-name="드롭박스-비활성 입력전">
                <div className="content-start flex flex-wrap font-bold gap-[2px] items-start leading-[1.44] not-italic relative shrink-0 text-[13px] tracking-[0.32px] w-full whitespace-nowrap" data-name="Dropdown Title">
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-[#0b0d11]">학년</p>
                  <p className="font-['Inter:Bold',sans-serif] relative shrink-0 text-[#3ba5e6]">*</p>
                </div>
                <div className="bg-white h-[55px] relative rounded-[4px] shrink-0 w-full" data-name="dropbox">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="h-[48px] relative shrink-0 w-full" data-name="familysite">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[24px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
                          <select
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] min-w-px not-italic relative text-[#8c98a1] text-[16px] tracking-[0.32px] bg-transparent border-none outline-none appearance-none cursor-pointer"
                          >
                            <option value="">학년 선택</option>
                            <option value="1학년">1학년</option>
                            <option value="2학년">2학년</option>
                            <option value="3학년">3학년</option>
                          </select>
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[20px]" data-name="icon slot">
                            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="arrow-down-simple">
                              <div className="absolute bottom-[31.67%] flex items-center justify-center left-1/4 right-1/4 top-[37.5%]" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="vector">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                                      <path d={svgPaths.p17eef600} fill="var(--fill-0, #8C98A1)" id="vector" />
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
                  <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>

              {/* 학기 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-[312px]" data-name="드롭박스-비활성 입력전">
                <div className="content-start flex flex-wrap font-bold gap-[2px] items-start leading-[1.44] not-italic relative shrink-0 text-[13px] tracking-[0.32px] w-full whitespace-nowrap" data-name="Dropdown Title">
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-[#0b0d11]">학기</p>
                  <p className="font-['Inter:Bold',sans-serif] relative shrink-0 text-[#3ba5e6]">*</p>
                </div>
                <div className="bg-white h-[55px] relative rounded-[4px] shrink-0 w-full" data-name="dropbox">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="h-[48px] relative shrink-0 w-full" data-name="familysite">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[24px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
                          <select
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                            className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] min-w-px not-italic relative text-[#8c98a1] text-[16px] tracking-[0.32px] bg-transparent border-none outline-none appearance-none cursor-pointer"
                          >
                            <option value="">학기 선택</option>
                            <option value="1학기">1학기</option>
                            <option value="2학기">2학기</option>
                          </select>
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[20px]" data-name="icon slot">
                            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="arrow-down-simple">
                              <div className="absolute bottom-[31.67%] flex items-center justify-center left-1/4 right-1/4 top-[37.5%]" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="vector">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                                      <path d={svgPaths.p17eef600} fill="var(--fill-0, #8C98A1)" id="vector" />
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
                  <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>

              {/* 시험 유형 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-[312px]" data-name="드롭박스-비활성 입력전">
                <div className="content-start flex flex-wrap font-bold gap-[2px] items-start leading-[1.44] not-italic relative shrink-0 text-[13px] tracking-[0.32px] w-full whitespace-nowrap" data-name="Dropdown Title">
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-[#0b0d11]">시험 유형</p>
                  <p className="font-['Inter:Bold',sans-serif] relative shrink-0 text-[#3ba5e6]">*</p>
                </div>
                <div className="bg-white h-[55px] relative rounded-[4px] shrink-0 w-full" data-name="dropbox">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="h-[48px] relative shrink-0 w-full" data-name="familysite">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[24px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
                          <select
                            value={examType}
                            onChange={(e) => setExamType(e.target.value)}
                            className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] min-w-px not-italic relative text-[#8c98a1] text-[16px] tracking-[0.32px] bg-transparent border-none outline-none appearance-none cursor-pointer"
                          >
                            <option value="">시험 유형 선택</option>
                            <option value="중간고사">중간고사</option>
                            <option value="기말고사">기말고사</option>
                          </select>
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[20px]" data-name="icon slot">
                            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="arrow-down-simple">
                              <div className="absolute bottom-[31.67%] flex items-center justify-center left-1/4 right-1/4 top-[37.5%]" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="vector">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                                      <path d={svgPaths.p17eef600} fill="var(--fill-0, #8C98A1)" id="vector" />
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
                  <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>

              {/* 과목 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-[312px]" data-name="드롭박스-비활성 입력전">
                <div className="content-start flex flex-wrap font-bold gap-[2px] items-start leading-[1.44] not-italic relative shrink-0 text-[13px] tracking-[0.32px] w-full whitespace-nowrap" data-name="Dropdown Title">
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-[#0b0d11]">과목</p>
                  <p className="font-['Inter:Bold',sans-serif] relative shrink-0 text-[#3ba5e6]">*</p>
                </div>
                <div className="bg-white h-[55px] relative rounded-[4px] shrink-0 w-full" data-name="dropbox">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="h-[48px] relative shrink-0 w-full" data-name="familysite">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[24px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
                          <select
                            value={subject}
                            disabled
                            onChange={() => undefined}
                            className="hidden"
                          >
                            <option value="">과목 선택</option>
                            <option value="수학">수학</option>
                            <option value="국어">국어</option>
                            <option value="영어">영어</option>
                            <option value="과학">과학</option>
                            <option value="사회">사회</option>
                            <option value="역사">역사</option>
                            <option value="기술가정">기술가정</option>
                            <option value="음악">음악</option>
                            <option value="미술">미술</option>
                            <option value="체육">체육</option>
                          </select>
                          <p className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] min-w-px not-italic relative text-[#8c98a1] text-[16px] tracking-[0.32px]">
                            수학
                          </p>
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[20px]" data-name="icon slot">
                            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="arrow-down-simple">
                              <div className="absolute bottom-[31.67%] flex items-center justify-center left-1/4 right-1/4 top-[37.5%]" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="vector">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                                      <path d={svgPaths.p17eef600} fill="var(--fill-0, #8C98A1)" id="vector" />
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
                  <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>

              {/* 출판사 */}
              <div className="content-stretch flex flex-col gap-[8px] items-start py-[16px] relative shrink-0 w-[312px]" data-name="드롭박스-비활성 입력전">
                <div className="content-start flex flex-wrap font-bold gap-[2px] items-start leading-[1.44] not-italic relative shrink-0 text-[13px] tracking-[0.32px] w-full whitespace-nowrap" data-name="Dropdown Title">
                  <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] relative shrink-0 text-[#0b0d11]">출판사</p>
                  <p className="font-['Inter:Bold',sans-serif] relative shrink-0 text-[#3ba5e6]">*</p>
                </div>
                <div className="bg-white h-[55px] relative rounded-[4px] shrink-0 w-full" data-name="dropbox">
                  <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
                    <div className="h-[48px] relative shrink-0 w-full" data-name="familysite">
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[24px] items-center pl-[20px] pr-[16px] py-[16px] relative size-full">
                          <select
                            value={publisher}
                            disabled
                            onChange={() => undefined}
                            className="hidden"
                          >
                            <option value="">출판사 선택</option>
                            <option value="공통">공통</option>
                            <option value="천재교과서">천재교과서</option>
                            <option value="교학사">교학사</option>
                          </select>
                          <p className="flex-[1_0_0] font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] min-w-px not-italic relative text-[#8c98a1] text-[16px] tracking-[0.32px]">
                            공통
                          </p>
                          <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 size-[20px]" data-name="icon slot">
                            <div className="flex-[1_0_0] min-h-px relative w-full" data-name="arrow-down-simple">
                              <div className="absolute bottom-[31.67%] flex items-center justify-center left-1/4 right-1/4 top-[37.5%]" style={{ containerType: "size" }}>
                                <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
                                  <div className="relative size-full" data-name="vector">
                                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 10">
                                      <path d={svgPaths.p17eef600} fill="var(--fill-0, #8C98A1)" id="vector" />
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
                  <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[4px]" />
                </div>
              </div>

              <div className="content-stretch flex h-[60px] items-center py-[8px] relative rounded-[10px] shrink-0 w-full" data-name="File Item Container" />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="relative shrink-0 w-full" data-name="버튼">
          <div aria-hidden="true" className="absolute border-[#c6d0d7] border-solid border-t inset-0 pointer-events-none shadow-[0px_-8px_16px_0px_rgba(11,13,17,0.08)]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center p-[24px] relative size-full">
              <div onClick={handlePrev} className="bg-white max-w-[400px] relative rounded-[999px] shrink-0 cursor-pointer" data-name="button-legacy">
                <div className="content-stretch flex items-center justify-center max-w-[inherit] overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
                  <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Content">
                    <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.44] not-italic relative shrink-0 text-[#3ba5e6] text-[19px] text-center whitespace-nowrap">이전</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#3ba5e6] border-solid inset-0 pointer-events-none rounded-[999px]" />
              </div>
              <div
                onClick={isFormValid ? handleNext : undefined}
                className={`${isFormValid ? 'bg-[#3ba5e6] cursor-pointer' : 'bg-[rgba(140,152,161,0.24)] cursor-not-allowed'} flex-[1_0_0] max-w-[400px] min-w-px relative rounded-[999px]`}
                data-name="button-legacy"
              >
                <div className="flex flex-row items-center justify-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center max-w-[inherit] px-[24px] py-[12px] relative size-full">
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Content">
                      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] not-italic relative shrink-0 text-[19px] text-center text-white whitespace-nowrap">다음</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmHome isOpen={showConfirmHome} onClose={() => setShowConfirmHome(false)} />
      <S8Confirm
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onPrev={handleConfirmPrev}
        onNext={handleConfirmNext}
        formData={formData}
      />
      <S9Complete
        isOpen={showComplete}
        onClose={handleCompleteClose}
        formData={formData}
      />
    </>
  );
}
