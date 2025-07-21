// src/layouts/Layout.tsx
import type { ReactNode } from 'react'; // ✅ 이렇게 수정
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4 px-6">
        <nav className="flex space-x-4">
          <Link to="/">홈</Link>
          <Link to="/knowledge">지식인</Link>
          <Link to="/quiz">문제</Link>
          <Link to="/my">마이페이지</Link>
          <Link to="/admin">관리자</Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-4">
        <Outlet />{children}
      </main>
    </div>
  );
}