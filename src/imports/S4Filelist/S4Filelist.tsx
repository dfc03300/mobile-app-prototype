import svgPaths from "./svg-7mjss4cqil";
import containerSvg from "../Container/svg-4lnm7lq3s1";
import { useFiles, ConditionalFileProvider } from "../../app/contexts/FileContext";
import { useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + 'MB';
  return (bytes / (1024 * 1024)).toFixed(2) + 'MB';
}

interface S4FilelistProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DraggableFileItemProps {
  index: number;
  filename: string;
  fileSize: string;
  isSelected: boolean;
  onDelete: () => void;
  onSelect: () => void;
  moveFile: (dragIndex: number, hoverIndex: number) => void;
}

const ItemType = 'FILE_ITEM';

function DraggableFileItem({ index, filename, fileSize, isSelected, onDelete, onSelect, moveFile }: DraggableFileItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (item: { index: number }) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveFile(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      onClick={onSelect}
      className="bg-white relative rounded-[10px] shrink-0 w-full cursor-pointer"
      style={{ opacity: isDragging ? 0.5 : 1 }}
      data-name="File Item"
    >
      {isSelected ? (
        <div aria-hidden="true" className="absolute border-2 border-[#423bff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[2px_2px_10px_0px_rgba(58,255,193,0.25),-2px_-2px_10px_0px_rgba(133,89,255,0.25)]" />
      ) : (
        <div aria-hidden="true" className="absolute border border-[#c6d0d7] border-solid inset-0 pointer-events-none rounded-[10px]" />
      )}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          {/* Number Badge */}
          <div className="bg-[#e3e8ed] h-[40px] relative rounded-[6px] shrink-0 w-[24px] flex items-center justify-center flex-shrink-0">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] text-black text-center leading-[1.44]">{index + 1}</p>
          </div>

          {/* Hamburger Icon */}
          <div className="h-[11.699px] relative shrink-0 w-[16.5px] cursor-grab active:cursor-grabbing flex-shrink-0" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 11.6992">
              <g id="Union">
                <path d={containerSvg.p39673f80} fill="var(--fill-0, #0B0D11)" />
                <path d={containerSvg.p1f551180} fill="var(--fill-0, #0B0D11)" />
                <path d={containerSvg.p3229da00} fill="var(--fill-0, #0B0D11)" />
              </g>
            </svg>
          </div>

          {/* File Info */}
          <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Medium',sans-serif] font-medium gap-[2px] items-start leading-[1.44] min-w-px not-italic relative text-[13px] tracking-[0.32px] overflow-hidden" data-name="File Item">
            <p className="overflow-hidden relative shrink-0 text-[#394046] text-ellipsis whitespace-nowrap w-full">{filename}</p>
            <p className="relative shrink-0 text-[#8c98a1] whitespace-nowrap">{fileSize}</p>
          </div>

          {/* Delete Button */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="flex items-center justify-center shrink-0 size-[24px] cursor-pointer"
            data-name="icon slot"
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
              <path d="M12 4L4 12M4 4L12 12" stroke="#8C98A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame({ onClose }: { onClose: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between px-[24px] relative size-full">
          <div className="flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0b0d11] text-[16px] text-center tracking-[0.32px] whitespace-nowrap">
            <p className="leading-[1.44]">파일 목록</p>
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
      <Frame onClose={onClose} />
    </div>
  );
}

function RequiredLabel({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-white content-stretch drop-shadow-[0px_1px_2px_rgba(11,13,17,0.12)] flex items-center justify-center px-[8px] py-[4px] relative rounded-[999px] shrink-0 cursor-pointer" data-name="Required Label">
      <div aria-hidden="true" className="absolute border border-[#416df0] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] not-italic relative shrink-0 text-[#416df0] text-[13px] text-center tracking-[0.32px] whitespace-nowrap">+ 파일 추가</p>
    </div>
  );
}

function ProblemQuantityHeader({ fileCount, onAddFile }: { fileCount: number; onAddFile: () => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Problem Quantity Header">
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[1.44] not-italic relative shrink-0 text-[#6a747c] text-[13px] tracking-[0.32px] whitespace-nowrap">총 {fileCount}개 파일</p>
      <RequiredLabel onClick={onAddFile} />
    </div>
  );
}

function PutContentHere({ onAddFile, selectedIndex, setSelectedIndex }: { onAddFile: () => void; selectedIndex: number | null; setSelectedIndex: (index: number | null) => void }) {
  const { files, removeFile, reorderFiles } = useFiles();

  const moveFile = (dragIndex: number, hoverIndex: number) => {
    reorderFiles(dragIndex, hoverIndex);
  };

  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="[Put content here]">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center pt-[12px] relative size-full overflow-y-auto">
          {files.map((fileData, index) => (
            <DraggableFileItem
              key={`${fileData.file.name}-${index}`}
              index={index}
              filename={fileData.file.name}
              fileSize={formatFileSize(fileData.file.size)}
              isSelected={selectedIndex === index}
              onDelete={() => {
                removeFile(index);
                if (selectedIndex === index) {
                  setSelectedIndex(null);
                } else if (selectedIndex !== null && selectedIndex > index) {
                  setSelectedIndex(selectedIndex - 1);
                }
              }}
              onSelect={() => setSelectedIndex(index)}
              moveFile={moveFile}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Content({ onAddFile, selectedIndex, setSelectedIndex }: { onAddFile: () => void; selectedIndex: number | null; setSelectedIndex: (index: number | null) => void }) {
  const { files } = useFiles();

  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[24px] relative size-full">
          <ProblemQuantityHeader fileCount={files.length} onAddFile={onAddFile} />
          <PutContentHere onAddFile={onAddFile} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </div>
      </div>
    </div>
  );
}

function BottomSheet1({ onClose, onAddFile, selectedIndex, setSelectedIndex }: { onClose: () => void; onAddFile: () => void; selectedIndex: number | null; setSelectedIndex: (index: number | null) => void }) {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex flex-col h-[532px] items-center left-0 overflow-clip right-0 rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-8px_16px_0px_rgba(11,13,17,0.08)] top-[calc(50%+134px)]" data-name="Bottom Sheet">
      <Title onClose={onClose} />
      <Content onAddFile={onAddFile} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </div>
  );
}

function BottomSheet({ onClose, onAddFile, selectedIndex, setSelectedIndex }: { onClose: () => void; onAddFile: () => void; selectedIndex: number | null; setSelectedIndex: (index: number | null) => void }) {
  return (
    <div className="absolute bg-[rgba(11,13,17,0.6)] h-full left-0 overflow-clip top-0 w-full" data-name="BottomSheet">
      <BottomSheet1 onClose={onClose} onAddFile={onAddFile} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
    </div>
  );
}

function S4FilelistContent({ isOpen, onClose }: S4FilelistProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleAddFileClick = () => {
    fileInputRef.current?.click();
  };

  const { addFiles } = useFiles();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      addFiles(filesArray);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept=".pdf,.jpg,.jpeg,.heic,.heif,.png,image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="fixed inset-0 z-50 overflow-hidden">
        <DndProvider backend={HTML5Backend}>
          <BottomSheet onClose={onClose} onAddFile={handleAddFileClick} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </DndProvider>
      </div>
    </>
  );
}

export default function S4Filelist({ isOpen, onClose }: S4FilelistProps) {
  return (
    <ConditionalFileProvider>
      <S4FilelistContent isOpen={isOpen} onClose={onClose} />
    </ConditionalFileProvider>
  );
}
