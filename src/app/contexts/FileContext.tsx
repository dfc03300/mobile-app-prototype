import { createContext, useContext, useState, ReactNode } from 'react';

interface FileData {
  file: File;
  preview: string;
}

interface FileContextType {
  files: FileData[];
  addFiles: (newFiles: File[]) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
  reorderFiles: (dragIndex: number, hoverIndex: number) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export function FileProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<FileData[]>([]);

  const addFiles = (newFiles: File[]) => {
    const fileDataArray = newFiles.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setFiles(prev => [...prev, ...fileDataArray]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev];
      URL.revokeObjectURL(newFiles[index].preview);
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const clearFiles = () => {
    files.forEach(({ preview }) => URL.revokeObjectURL(preview));
    setFiles([]);
  };

  const reorderFiles = (dragIndex: number, hoverIndex: number) => {
    setFiles(prev => {
      const newFiles = [...prev];
      const [removed] = newFiles.splice(dragIndex, 1);
      newFiles.splice(hoverIndex, 0, removed);
      return newFiles;
    });
  };

  return (
    <FileContext.Provider value={{ files, addFiles, removeFile, clearFiles, reorderFiles }}>
      {children}
    </FileContext.Provider>
  );
}

export function useFiles() {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('useFiles must be used within FileProvider');
  }
  return context;
}

export function ConditionalFileProvider({ children }: { children: ReactNode }) {
  const existingContext = useContext(FileContext);

  if (existingContext) {
    return <>{children}</>;
  }

  return <FileProvider>{children}</FileProvider>;
}
