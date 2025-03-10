"use client";

// components/MobileMenubar.js
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Building, Users, Phone } from 'lucide-react';
import Image from 'next/image';

const MobileMenubar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { name: 'Beranda', icon: <Home size={20} />, href: '/' },
        { name: 'Properti', icon: <Building size={20} />, href: '/properti' },
        { name: 'Tentang Kami', icon: <Users size={20} />, href: '/tentang-kami' },
        { name: 'Kontak', icon: <Phone size={20} />, href: '/kontak' },
    ];

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50">
                <div className="flex justify-between items-center p-4 bg-white border-b">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <Image
                                src="/icon.jpg"
                                alt="Modern property in Jakarta"
                                width={100}
                                height={40}
                                className="object-cover"
                                priority
                            />
                        </Link>
                    </div>
                    <button onClick={toggleMenu} className="text-gray-600">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="h-full w-full bg-white border-t shadow-lg z-10">
                        {menuItems.map((item) => (
                            <Link
                                href={item.href}
                                key={item.name}
                                className="flex items-center p-4 border-b text-gray-600 hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="mr-3">{item.icon}</div>
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default MobileMenubar;