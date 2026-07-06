"use client";

import React from 'react'
import { useState } from 'react'
import Sidebar from './sidebar'
const clientlayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(true);
    if (isAuthenticated === null) {
        return <div className="h-screen w-full flex items-center justify-center">
            <p>loading...</p>
        </div>;
    }
    return <div className="flex min-h-screen bg-white">
        <Sidebar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
    </div>;


}

export default clientlayout
