import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { FileText, FileUp } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.mjs?url";
import { ConditionalFileProvider, useFiles } from "../../app/contexts/FileContext";
import TitleBar from "../../app/components/TitleBar";
import ConfirmHome from "../ConfirmHome/ConfirmHome";
import S4Filelist from "../S4Filelist/S4Filelist";
import S5Quality from "../S5Quality/S5Quality";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

function ProgressHeader() {
  return (
    <div className="flex w-full shrink-0 items-center justify-center gap-[8px] py-[10px]">
      <div className="flex items-center gap-[4px]">
        <FileUp aria-hidden="true" className="size-[18px] shrink-0 text-[#3ba5e6]" strokeWidth={2} />
        <span className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[13px] font-bold text-[#0b0d11]">파일 업로드</span>
      </div>
      <div className="h-px w-[28px] border-t border-dashed border-[#8c98a1]" />
      <div className="flex items-center gap-[4px]">
        <FileText aria-hidden="true" className="size-[18px] shrink-0 text-[#8c98a1]" strokeWidth={2} />
        <span className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] text-[13px] font-medium text-[#394046]">기본정보 입력</span>
      </div>
    </div>
  );
}

function PreviewHeader({ filename, onFileListClick }: { filename: string; onFileListClick: () => void }) {
  return (
    <div className="w-full shrink-0 pt-[8px]">
      <div className="flex items-center justify-between">
        <p className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[15px] font-bold leading-[1.68] tracking-[0.32px] text-[#394046]">
          파일 미리보기
        </p>
        <button
          type="button"
          onClick={onFileListClick}
          className="rounded-[999px] border border-[#416df0] bg-white px-[8px] py-[4px] text-[13px] font-medium leading-[1.44] tracking-[0.32px] text-[#416df0] shadow-[0px_1px_2px_rgba(11,13,17,0.12)]"
        >
          파일 목록
        </button>
      </div>
      <p className="mt-[8px] truncate font-['Inter:Medium',sans-serif] text-[13px] font-medium leading-[1.44] tracking-[0.32px] text-[#6a747c]">
        {filename}
      </p>
    </div>
  );
}

function PageNav({ currentPage, totalPages, onPrev, onNext }: { currentPage: number; totalPages: number; onPrev: () => void; onNext: () => void }) {
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  return (
    <div className="flex w-full shrink-0 items-center justify-center gap-[7px] pt-[8px]">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        className="flex h-[32px] shrink-0 items-center rounded-[10px] font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[15px] font-bold leading-[1.68] tracking-[0.32px] text-[#0b0d11] disabled:cursor-not-allowed disabled:text-[rgba(11,13,17,0.24)]"
      >
        <span className="mr-[2px] text-[20px] leading-none">‹</span>
        이전
      </button>
      <div className="flex h-[32px] flex-1 items-center justify-center gap-[2px]">
        <span className="font-['Inter:Bold',sans-serif] text-[18px] font-bold leading-[1.68] text-[#3ba5e6]">{currentPage}</span>
        <span className="font-['Inter:Medium',sans-serif] text-[15px] font-medium leading-[1.68] text-[#6a747c]">/{totalPages || 1}</span>
      </div>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        className="flex h-[32px] shrink-0 items-center rounded-[10px] font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[15px] font-bold leading-[1.68] tracking-[0.32px] text-[#0b0d11] disabled:cursor-not-allowed disabled:text-[rgba(11,13,17,0.24)]"
      >
        다음
        <span className="ml-[6px] text-[20px] leading-none">›</span>
      </button>
    </div>
  );
}

function formatFileSize(size?: number) {
  if (!size) return "";
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))}KB`;
  return `${(size / (1024 * 1024)).toFixed(1)}MB`;
}

function ZoomControls({ zoom, onZoomIn, onZoomOut, onReset }: { zoom: number; onZoomIn: () => void; onZoomOut: () => void; onReset: () => void }) {
  return (
    <div className="absolute right-[10px] top-[10px] z-10 flex items-center overflow-hidden rounded-[999px] border border-[#c6d0d7] bg-white/95 shadow-[0px_2px_8px_rgba(11,13,17,0.12)]">
      <button type="button" onClick={onZoomOut} className="flex size-[32px] items-center justify-center text-[20px] font-bold text-[#394046]">-</button>
      <button type="button" onClick={onReset} className="min-w-[48px] px-[6px] text-[12px] font-bold text-[#394046]">{Math.round(zoom * 100)}%</button>
      <button type="button" onClick={onZoomIn} className="flex size-[32px] items-center justify-center text-[20px] font-bold text-[#394046]">+</button>
    </div>
  );
}

function PdfPreview({ file, fileUrl, filename, fileSize, zoom }: { file?: File; fileUrl: string; filename: string; fileSize?: number; zoom: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [renderFailed, setRenderFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let renderTask: { cancel: () => void } | undefined;

    async function renderPdf() {
      if (!file || !canvasRef.current) return;

      try {
        setRenderFailed(false);
        const data = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data }).promise;
        const page = await pdf.getPage(1);
        const baseViewport = page.getViewport({ scale: 1 });
        const fitScale = Math.min(320 / baseViewport.width, 470 / baseViewport.height, 1.6);
        const viewport = page.getViewport({ scale: fitScale * zoom });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (!context || cancelled) return;

        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        renderTask = page.render({ canvasContext: context, viewport });
        await renderTask.promise;
      } catch {
        if (!cancelled) setRenderFailed(true);
      }
    }

    renderPdf();

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [file, zoom]);

  if (!renderFailed) {
    return (
      <div className="flex min-h-full min-w-full items-center justify-center bg-white p-[10px]">
        <canvas ref={canvasRef} className="rounded-[4px] shadow-[0px_2px_8px_rgba(11,13,17,0.12)]" />
      </div>
    );
  }

  return (
    <a className="flex h-full w-full flex-col items-center justify-center gap-[12px] bg-white p-[24px] text-center" href={fileUrl} target="_blank" rel="noreferrer">
      <div className="flex size-[72px] items-center justify-center rounded-[18px] bg-[#eef5ff]">
        <div className="font-['Inter:Bold',sans-serif] text-[22px] font-bold text-[#416df0]">PDF</div>
      </div>
      <div className="max-w-full">
        <p className="truncate font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[15px] font-bold leading-[1.44] text-[#0b0d11]">{filename}</p>
        {fileSize ? <p className="mt-[4px] font-['Inter:Medium',sans-serif] text-[13px] font-medium leading-[1.44] text-[#6a747c]">{formatFileSize(fileSize)}</p> : null}
      </div>
      <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] text-[13px] font-medium leading-[1.44] text-[#416df0]">미리보기 열기</p>
    </a>
  );
}

function PreviewArea({ file, imageUrl, fileType, filename, fileSize }: { file?: File; imageUrl: string; fileType: string; filename: string; fileSize?: number }) {
  const [imageError, setImageError] = useState(false);
  const [zoom, setZoom] = useState(1);
  const isPdf = fileType.toLowerCase() === "pdf";
  const isHeic = ["heic", "heif"].includes(fileType.toLowerCase());

  useEffect(() => {
    setZoom(1);
    setImageError(false);
  }, [imageUrl]);

  const zoomOut = () => setZoom((value) => Math.max(0.75, Number((value - 0.25).toFixed(2))));
  const zoomIn = () => setZoom((value) => Math.min(2.5, Number((value + 0.25).toFixed(2))));

  return (
    <div className="relative flex min-h-0 w-full flex-[1_0_0] items-start justify-center overflow-hidden pt-[8px]">
      <div className="relative flex h-full min-h-[270px] w-full max-w-[324px] items-center justify-center overflow-auto rounded-[10px] bg-[#f5f7f9]" data-name="image 13">
        {imageUrl && !isHeic ? <ZoomControls zoom={zoom} onZoomOut={zoomOut} onZoomIn={zoomIn} onReset={() => setZoom(1)} /> : null}
        {!imageUrl ? (
          <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[14px] text-[#8c98a1]">파일을 선택해주세요</p>
        ) : isPdf ? (
          <PdfPreview file={file} fileUrl={imageUrl} filename={filename} fileSize={fileSize} zoom={zoom} />
        ) : isHeic ? (
          <div className="flex flex-col items-center gap-[8px] p-[24px] text-center">
            <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] text-[14px] text-[#6a747c]">HEIC/HEIF 형식은 미리보기가 지원되지 않습니다</p>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-[#8c98a1]">파일은 정상적으로 업로드됐습니다</p>
          </div>
        ) : imageError ? (
          <div className="flex flex-col items-center gap-[8px] p-[24px] text-center">
            <p className="font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] text-[14px] text-[#6a747c]">미리보기를 불러올 수 없습니다</p>
            <p className="font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] text-[12px] text-[#8c98a1]">파일은 정상적으로 업로드됐습니다</p>
          </div>
        ) : (
          <img alt="" className="max-h-none max-w-none rounded-[10px] object-contain" style={{ width: `${zoom * 100}%` }} src={imageUrl} onError={() => setImageError(true)} />
        )}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[10px] border border-[#8c98a1]" />
      </div>
    </div>
  );
}

function Body({ currentPage, totalPages, onPrev, onNext, filename, imageUrl, fileType, fileSize, file, onFileListClick }: { currentPage: number; totalPages: number; onPrev: () => void; onNext: () => void; filename: string; imageUrl: string; fileType: string; fileSize?: number; file?: File; onFileListClick: () => void }) {
  return (
    <div className="min-h-0 flex-[1_0_0] w-full" data-name="body">
      <div className="flex h-full flex-col items-center px-[24px]">
        <PreviewHeader filename={filename} onFileListClick={onFileListClick} />
        <PageNav currentPage={currentPage} totalPages={totalPages || 1} onPrev={onPrev} onNext={onNext} />
        <PreviewArea imageUrl={imageUrl} fileType={fileType} filename={filename} fileSize={fileSize} file={file} />
      </div>
    </div>
  );
}

function BottomButton({ onNextClick }: { onNextClick: () => void }) {
  return (
    <div className="w-full shrink-0 p-[24px] pt-[16px]">
      <button
        type="button"
        onClick={onNextClick}
        className="flex h-[48px] w-full items-center justify-center rounded-[999px] bg-[#3ba5e6]"
      >
        <span className="font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] text-[19px] font-bold leading-[1.44] text-white">
          다음
        </span>
      </button>
    </div>
  );
}

function S3PreviewContent() {
  const navigate = useNavigate();
  const { files } = useFiles();
  const [currentPage, setCurrentPage] = useState(1);
  const [isFileListOpen, setIsFileListOpen] = useState(false);
  const [isQualityCheckOpen, setIsQualityCheckOpen] = useState(false);
  const [showConfirmHome, setShowConfirmHome] = useState(false);
  const totalPages = files.length;

  useEffect(() => {
    if (totalPages === 0) {
      setCurrentPage(1);
      return;
    }

    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  const currentFile = files[currentPage - 1];
  const filename = currentFile?.file.name || "";
  const imageUrl = currentFile?.preview || "";
  const fileType = currentFile?.file.name.split(".").pop() || "";
  const fileSize = currentFile?.file.size;
  const file = currentFile?.file;

  const handlePrev = () => {
    setCurrentPage((page) => Math.max(1, page - 1));
  };

  const handleNext = () => {
    setCurrentPage((page) => Math.min(totalPages || 1, page + 1));
  };

  const handleQualityCheckNext = () => {
    setIsQualityCheckOpen(false);
    navigate("/form");
  };

  return (
    <>
      <div className="relative flex h-full w-full flex-col items-center overflow-hidden bg-white" data-name="s3-preview">
        <TitleBar onHomeClick={() => setShowConfirmHome(true)} />
        <ProgressHeader />
        <Body
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
          filename={filename}
          imageUrl={imageUrl}
          fileType={fileType}
          fileSize={fileSize}
          file={file}
          onFileListClick={() => setIsFileListOpen(true)}
        />
        <BottomButton onNextClick={() => setIsQualityCheckOpen(true)} />
        <S5Quality
          isOpen={isQualityCheckOpen}
          onClose={() => setIsQualityCheckOpen(false)}
          onNext={handleQualityCheckNext}
          onPrev={() => setIsQualityCheckOpen(false)}
        />
      </div>
      <S4Filelist isOpen={isFileListOpen} onClose={() => setIsFileListOpen(false)} />
      <ConfirmHome isOpen={showConfirmHome} onClose={() => setShowConfirmHome(false)} />
    </>
  );
}

export default function S3Preview() {
  return (
    <ConditionalFileProvider>
      <S3PreviewContent />
    </ConditionalFileProvider>
  );
}
