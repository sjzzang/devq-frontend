import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <nav className="flex gap-4">
          <Link to="/">홈</Link>
          <Link to="/knowledge">지식인</Link>
          <Link to="/quiz">문제</Link>
          <Link to="/my">마이페이지</Link>
          <Link to="/admin">관리자</Link>
        </nav>
      </header>
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
