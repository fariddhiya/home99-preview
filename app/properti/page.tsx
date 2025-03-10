import Link from "next/link"
import Image from "next/image"
import { Building, ChevronDown, Filter, Home, MapPin, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Header from "@/components/ui/header"

export default function PropertiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeMenu="properti" />

      <main className="flex-1">
        <section className="w-full py-8 md:py-12 bg-muted/30">
          <div className="container">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Semua Properti</h1>
                <p className="text-muted-foreground">Temukan rumah, ruko, dan tanah terbaik di Jakarta Selatan</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Cari berdasarkan lokasi, nama properti..." className="pl-10" />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="terbaru">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Urutkan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="terbaru">Terbaru</SelectItem>
                      <SelectItem value="harga-terendah">Harga Terendah</SelectItem>
                      <SelectItem value="harga-tertinggi">Harga Tertinggi</SelectItem>
                      <SelectItem value="luas-terbesar">Luas Terbesar</SelectItem>
                    </SelectContent>
                  </Select>

                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="lg:hidden">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                      <SheetHeader>
                        <SheetTitle>Filter Properti</SheetTitle>
                        <SheetDescription>Sesuaikan pencarian properti Anda</SheetDescription>
                      </SheetHeader>
                      <div className="py-4">
                        <FilterSidebar />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Sidebar - Desktop */}
              <div className="hidden lg:block w-[300px] shrink-0">
                <div className="sticky top-24 border rounded-lg p-6">
                  <FilterSidebar />
                </div>
              </div>

              {/* Property Grid */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm text-muted-foreground">Menampilkan 1-12 dari 48 properti</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground hidden md:inline-block">Tampilan:</span>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <SlidersHorizontal className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8 bg-primary/10">
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-1.5 h-1.5 bg-primary rounded-sm"></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-sm"></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-sm"></div>
                        <div className="w-1.5 h-1.5 bg-primary rounded-sm"></div>
                      </div>
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <PropertyCard
                      key={index}
                      title={getPropertyTitle(index)}
                      type={getPropertyType(index)}
                      price={getPropertyPrice(index)}
                      location={getPropertyLocation(index)}
                      bedrooms={getPropertyBedrooms(index)}
                      bathrooms={getPropertyBathrooms(index)}
                      area={getPropertyArea(index)}
                      image={getPropertyImage(index)}
                    />
                  ))}
                </div>

                <div className="flex justify-center mt-12">
                  <nav className="flex items-center gap-1">
                    <Button variant="outline" size="icon" disabled>
                      <ChevronDown className="h-4 w-4 rotate-90" />
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      4
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronDown className="h-4 w-4 -rotate-90" />
                    </Button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-12 mt-12">
        <div className="container flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.jpg"
                alt="Tim Home99"
                width={100}
                height={40}
                className="object-cover brightness-[1]"
                priority
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Home99 adalah perusahaan pengembang properti terkemuka yang menyediakan layanan penjualan dan penyewaan
              rumah, ruko, dan tanah kosong di Jakarta Selatan.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Properti</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Rumah
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Ruko
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Tanah
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Properti Baru
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Perusahaan</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tentang-kami" className="text-sm text-muted-foreground hover:text-primary">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Tim Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Kontak</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Jl. Kemang Raya No. 99, Jakarta Selatan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">+62 812-3456-7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">info@home99.id</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Home99. Hak Cipta Dilindungi.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Syarat & Ketentuan
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FilterSidebar() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Tipe Properti</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="rumah" />
            <label
              htmlFor="rumah"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Rumah
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="ruko" />
            <label
              htmlFor="ruko"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ruko
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="tanah" />
            <label
              htmlFor="tanah"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Tanah
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="apartemen" />
            <label
              htmlFor="apartemen"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Apartemen
            </label>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-medium mb-4">Rentang Harga</h3>
        <div className="space-y-4">
          <Slider defaultValue={[20, 80]} max={100} step={1} />
          <div className="flex items-center justify-between">
            <div className="border rounded-md px-3 py-2 w-[45%]">
              <div className="text-xs text-muted-foreground mb-1">Minimum</div>
              <div className="font-medium">Rp 1 M</div>
            </div>
            <div className="border rounded-md px-3 py-2 w-[45%]">
              <div className="text-xs text-muted-foreground mb-1">Maksimum</div>
              <div className="font-medium">Rp 10 M</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-medium mb-4">Lokasi</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="kebayoran" />
            <label
              htmlFor="kebayoran"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Kebayoran Baru
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="pondok-indah" />
            <label
              htmlFor="pondok-indah"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Pondok Indah
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="kemang" />
            <label
              htmlFor="kemang"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Kemang
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cilandak" />
            <label
              htmlFor="cilandak"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Cilandak
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="fatmawati" />
            <label
              htmlFor="fatmawati"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Fatmawati
            </label>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-medium mb-4">Kamar Tidur</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            Semua
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            1+
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            2+
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            3+
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            4+
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            5+
          </Button>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-medium mb-4">Kamar Mandi</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="rounded-full">
            Semua
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            1+
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            2+
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            3+
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            4+
          </Button>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-medium mb-4">Luas Tanah</h3>
        <div className="space-y-4">
          <Slider defaultValue={[30]} max={100} step={1} />
          <div className="flex items-center justify-between">
            <div className="border rounded-md px-3 py-2 w-full">
              <div className="text-xs text-muted-foreground mb-1">Minimum</div>
              <div className="font-medium">100 m²</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6 flex gap-2">
        <Button className="flex-1">Terapkan Filter</Button>
        <Button variant="outline">Reset</Button>
      </div>
    </div>
  )
}

interface PropertyCardProps {
  title: string
  type: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
}

function PropertyCard({ title, type, price, location, bedrooms, bathrooms, area, image }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[200px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
          {type}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {bedrooms > 0 && (
            <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
              <span className="font-bold">{bedrooms}</span>
              <span className="text-xs text-muted-foreground">Kamar</span>
            </div>
          )}
          {bathrooms > 0 && (
            <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
              <span className="font-bold">{bathrooms}</span>
              <span className="text-xs text-muted-foreground">Kamar Mandi</span>
            </div>
          )}
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <span className="font-bold">{area}</span>
            <span className="text-xs text-muted-foreground">m²</span>
          </div>
        </div>
        <div className="text-xl font-bold text-primary">{price}</div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" >
          <Link href="/properti/rumah/1">
            Lihat Detail
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Helper functions to generate property data
function getPropertyTitle(index: number): string {
  const titles = [
    "Rumah Mewah Kebayoran Baru",
    "Ruko 3 Lantai Fatmawati",
    "Tanah Komersial Kemang",
    "Rumah Minimalis Cilandak",
    "Ruko Strategis Pondok Indah",
    "Tanah Siap Bangun Jagakarsa",
    "Rumah Modern Kemang",
    "Ruko 2 Lantai Cilandak",
    "Tanah Premium Pondok Indah",
    "Rumah Klasik Kebayoran Lama",
    "Ruko Baru Renovasi Tebet",
    "Tanah Luas Pasar Minggu",
  ]
  return titles[index % titles.length]
}

function getPropertyType(index: number): string {
  const types = ["Rumah", "Ruko", "Tanah"]
  return types[index % types.length]
}

function getPropertyPrice(index: number): string {
  const basePrice = 2 + (index % 10)
  return `Rp ${basePrice} Milyar`
}

function getPropertyLocation(index: number): string {
  const locations = [
    "Kebayoran Baru",
    "Fatmawati",
    "Kemang",
    "Cilandak",
    "Pondok Indah",
    "Jagakarsa",
    "Tebet",
    "Pasar Minggu",
  ]
  return locations[index % locations.length]
}

function getPropertyImage(index: number): string {
  const images = [
    "/ruko2.jpg",
    "/ruko3.jpg",
    "/rumah1.jpg",
    "/rumah2.jpg",
    "/rumah3.jpg",
    "/tanah3.jpg"
  ]
  return images[index % images.length]
}

function getPropertyBedrooms(index: number): number {
  const type = getPropertyType(index)
  if (type === "Rumah") {
    return 2 + (index % 4)
  }
  return 0
}

function getPropertyBathrooms(index: number): number {
  const type = getPropertyType(index)
  if (type === "Rumah") {
    return 1 + (index % 3)
  } else if (type === "Ruko") {
    return 1 + (index % 2)
  }
  return 0
}

function getPropertyArea(index: number): number {
  const type = getPropertyType(index)
  if (type === "Rumah") {
    return 150 + (index % 5) * 50
  } else if (type === "Ruko") {
    return 100 + (index % 4) * 25
  } else {
    return 300 + (index % 6) * 100
  }
}

