import React from 'react';
import { ChevronLeft, Settings } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center">
        <ChevronLeft className="w-6 h-6 text-gray-600" />
        <h1 className="text-xl font-medium ml-2">{title}</h1>
      </div>
      <Settings className="w-6 h-6 text-gray-600" />
    </header>
  );
}