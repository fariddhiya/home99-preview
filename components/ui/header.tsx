import Link from "next/link"
import Image from "next/image"
import {
    Phone
} from "lucide-react"

import { Button } from "@/components/ui/button"
import MobileMenubar from "../headerMobile";

interface HeaderProps {
    activeMenu: string;
}

const Header: React.FC<HeaderProps> = ({ activeMenu }) => {
    return (
        <>
            <div className="md:hidden">
                <MobileMenubar />
            </div>
            <div className="hidden md:block">
                <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-16 items-center justify-between py-4">
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
                        <nav className="hidden md:flex gap-6">
                            <Link href="/" className={`text-sm font-medium transition-colors ${activeMenu === 'beranda' ? 'text-primary' : 'hover:text-primary'}`}>
                                Beranda
                            </Link>
                            <Link href="/properti" className={`text-sm font-medium transition-colors ${activeMenu === 'properti' ? 'text-primary' : 'hover:text-primary'}`}>
                                Properti
                            </Link>
                            <Link href="/tentang-kami" className={`text-sm font-medium transition-colors ${activeMenu === 'tentang-kami' ? 'text-primary' : 'hover:text-primary'}`}>
                                Tentang Kami
                            </Link>
                            <Link href="/kontak" className={`text-sm font-medium transition-colors ${activeMenu === 'kontak' ? 'text-primary' : 'hover:text-primary'}`}>
                                Kontak
                            </Link>
                        </nav>
                        <div className="flex items-center gap-4">
                            <Button variant="outline" size="sm" className="hidden md:flex">
                                <Phone className="mr-2 h-4 w-4" />
                                0812-3456-7890
                            </Button>
                            <Button>Hubungi Kami</Button>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header;