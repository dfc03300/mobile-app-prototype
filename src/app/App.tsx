import { RouterProvider } from 'react-router';
import { router } from './routes';
import { FileProvider } from './contexts/FileContext';

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-[#f5f7f9] flex items-center justify-center">
      <div className="w-full max-w-[430px] h-[100dvh] bg-white relative overflow-hidden shadow-[0px_0px_40px_rgba(0,0,0,0.1)]">
        <FileProvider>
          <RouterProvider router={router} />
        </FileProvider>
      </div>
    </div>
  );
}
