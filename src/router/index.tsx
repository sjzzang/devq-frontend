// src/router/index.tsx
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from '../layouts/Layout';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import KnowledgeListPage from '../pages/Knowledge/KnowledgeListPage';
import KnowledgeDetailPage from '../pages/Knowledge/KnowledgeDetailPage';
import KnowledgeCreatePage from '../pages/Knowledge/KnowledgeCreatePage';
import QuizListPage from '../pages/Quiz/QuizListPage';
import QuizDetailPage from '../pages/Quiz/QuizDetailPage';
import QuizCreatePage from '../pages/Quiz/QuizCreatePage';
import MyPage from '../pages/MyPage';
import ObjectionPage from '../pages/ObjectionPage';
import AdminPage from '../pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'knowledge', element: <KnowledgeListPage /> },
      { path: 'knowledge/:id', element: <KnowledgeDetailPage /> },
      { path: 'knowledge/create', element: <KnowledgeCreatePage /> },
      { path: 'quiz', element: <QuizListPage /> },
      { path: 'quiz/:id', element: <QuizDetailPage /> },
      { path: 'quiz/create', element: <QuizCreatePage /> },
      { path: 'my', element: <MyPage /> },
      { path: 'objection/:id', element: <ObjectionPage /> },
      { path: 'admin', element: <AdminPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}