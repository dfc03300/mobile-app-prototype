import { RouterProvider } from 'react-router';
import { router } from './routes';
import { FileProvider } from './contexts/FileContext';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f7f9] flex items-center justify-center">
      <div className="w-[360px] h-[800px] bg-white relative overflow-hidden shadow-[0px_0px_40px_rgba(0,0,0,0.1)]">
        <FileProvider>
          <RouterProvider router={router} />
        </FileProvider>
      </div>
    </div>
  );
}