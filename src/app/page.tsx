'use client'
import { QueryClientProvider } from '@tanstack/react-query';
import { MyApp } from './App';
import queryClient from './queryClient';

export default function Home() {
   return (
   <div>
    <MyApp />
   </div>
   )
}

