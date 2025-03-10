import Link from "next/link"
import Image from "next/image"
import { Building, ChevronDown, Home, MapPin, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/ui/header"

export default function RukoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeMenu="properti" />

      <div className="bg-muted/30 border-b">
        <div className="container py-4">
          <Tabs defaultValue="ruko" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
              <TabsTrigger value="rumah" asChild>
                <Link href="/properti/rumah">Rumah</Link>
              </TabsTrigger>
              <TabsTrigger value="ruko" asChild>
                <Link href="/properti/ruko">Ruko</Link>
              </TabsTrigger>
              <TabsTrigger value="tanah" asChild>
                <Link href="/properti/tanah">Tanah</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <main className="flex-1">
        <section className="w-full py-8 md:py-12 bg-muted/10">
          <div className="container">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Ruko</h1>
                <p className="text-muted-foreground">Temukan ruko terbaik untuk bisnis Anda di Jakarta Selatan</p>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filter Sidebar */}
              <div className="w-full lg:w-[300px] shrink-0">
                <div className="lg:sticky lg:top-24 border rounded-lg p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-4">Jumlah Lantai</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lantai-1" />
                          <label
                            htmlFor="lantai-1"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            1 Lantai
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lantai-2" />
                          <label
                            htmlFor="lantai-2"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            2 Lantai
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lantai-3" />
                          <label
                            htmlFor="lantai-3"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            3 Lantai
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lantai-4" />
                          <label
                            htmlFor="lantai-4"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            4+ Lantai
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
                          <Checkbox id="fatmawati" />
                          <label
                            htmlFor="fatmawati"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Fatmawati
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
                          <Checkbox id="pondok-indah" />
                          <label
                            htmlFor="pondok-indah"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Pondok Indah
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-medium mb-4">Luas Bangunan</h3>
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

                    <div className="border-t pt-6">
                      <h3 className="font-medium mb-4">Fasilitas</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="parkir" />
                          <label
                            htmlFor="parkir"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Area Parkir
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="jalan-lebar" />
                          <label
                            htmlFor="jalan-lebar"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Jalan Lebar
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="keamanan" />
                          <label
                            htmlFor="keamanan"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Keamanan 24 Jam
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mainroad" />
                          <label
                            htmlFor="mainroad"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Akses Jalan Utama
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6 flex gap-2">
                      <Button className="flex-1">Terapkan Filter</Button>
                      <Button variant="outline">Reset</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Grid */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm text-muted-foreground">Menampilkan 1-9 dari 18 ruko</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Ruko 3 Lantai Fatmawati",
                      price: "Rp 3.2 Milyar",
                      location: "Fatmawati",
                      floors: 3,
                      bathrooms: 2,
                      area: 150,
                      features: ["Area Parkir", "Jalan Lebar", "Akses Jalan Utama"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko1",
                    },
                    {
                      title: "Ruko Strategis Pondok Indah",
                      price: "Rp 7.5 Milyar",
                      location: "Pondok Indah",
                      floors: 2,
                      bathrooms: 2,
                      area: 180,
                      features: ["Area Parkir", "Keamanan 24 Jam", "Akses Jalan Utama"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko2",
                    },
                    {
                      title: "Ruko 2 Lantai Cilandak",
                      price: "Rp 2.8 Milyar",
                      location: "Cilandak",
                      floors: 2,
                      bathrooms: 1,
                      area: 120,
                      features: ["Area Parkir", "Jalan Lebar"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko3",
                    },
                    {
                      title: "Ruko Premium Kemang",
                      price: "Rp 8.9 Milyar",
                      location: "Kemang",
                      floors: 3,
                      bathrooms: 3,
                      area: 200,
                      features: ["Area Parkir", "Jalan Lebar", "Keamanan 24 Jam", "Akses Jalan Utama"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko4",
                    },
                    {
                      title: "Ruko Baru Renovasi Tebet",
                      price: "Rp 4.5 Milyar",
                      location: "Tebet",
                      floors: 2,
                      bathrooms: 2,
                      area: 160,
                      features: ["Area Parkir", "Jalan Lebar"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko5",
                    },
                    {
                      title: "Ruko 4 Lantai Kebayoran Baru",
                      price: "Rp 9.2 Milyar",
                      location: "Kebayoran Baru",
                      floors: 4,
                      bathrooms: 4,
                      area: 240,
                      features: ["Area Parkir", "Jalan Lebar", "Keamanan 24 Jam", "Akses Jalan Utama"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko6",
                    },
                    {
                      title: "Ruko Siap Pakai Fatmawati",
                      price: "Rp 3.8 Milyar",
                      location: "Fatmawati",
                      floors: 2,
                      bathrooms: 2,
                      area: 140,
                      features: ["Area Parkir", "Jalan Lebar"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko7",
                    },
                    {
                      title: "Ruko Strategis Kemang",
                      price: "Rp 6.5 Milyar",
                      location: "Kemang",
                      floors: 3,
                      bathrooms: 3,
                      area: 180,
                      features: ["Area Parkir", "Jalan Lebar", "Keamanan 24 Jam"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko8",
                    },
                    {
                      title: "Ruko 2 Lantai Pondok Indah",
                      price: "Rp 5.2 Milyar",
                      location: "Pondok Indah",
                      floors: 2,
                      bathrooms: 2,
                      area: 150,
                      features: ["Area Parkir", "Keamanan 24 Jam", "Akses Jalan Utama"],
                      image: "/placeholder.svg?height=400&width=600&text=Ruko9",
                    },
                  ].map((property, index) => (
                    <RukoCard
                      key={index}
                      title={property.title}
                      price={property.price}
                      location={property.location}
                      floors={property.floors}
                      bathrooms={property.bathrooms}
                      area={property.area}
                      features={property.features}
                      image={property.image}
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
              <Building className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Home99</span>
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
                  <Link href="/properti/rumah" className="text-sm text-muted-foreground hover:text-primary">
                    Rumah
                  </Link>
                </li>
                <li>
                  <Link href="/properti/ruko" className="text-sm text-primary hover:text-primary">
                    Ruko
                  </Link>
                </li>
                <li>
                  <Link href="/properti/tanah" className="text-sm text-muted-foreground hover:text-primary">
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
                  <Link href="/#contact" className="text-sm text-muted-foreground hover:text-primary">
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

interface RukoCardProps {
  title: string
  price: string
  location: string
  floors: number
  bathrooms: number
  area: number
  features: string[]
  image: string
}

function RukoCard({ title, price, location, floors, bathrooms, area, features, image }: RukoCardProps) {
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
          Ruko
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
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <span className="font-bold">{floors}</span>
            <span className="text-xs text-muted-foreground">Lantai</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <span className="font-bold">{bathrooms}</span>
            <span className="text-xs text-muted-foreground">Kamar Mandi</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
            <span className="font-bold">{area}</span>
            <span className="text-xs text-muted-foreground">m²</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
        <div className="text-xl font-bold text-primary">{price}</div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Lihat Detail
        </Button>
      </CardFooter>
    </Card>
  )
}

