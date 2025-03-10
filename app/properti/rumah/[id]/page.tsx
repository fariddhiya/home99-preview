import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Mail,
  ChevronLeft,
  Share2,
  Heart,
  Printer,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/ui/header"

export default function RumahDetailPage() {
  // Dalam implementasi nyata, data akan diambil dari database berdasarkan ID
  // Untuk contoh ini, kita gunakan data statis
  const propertyData = {
    id: 1,
    title: "Rumah Mewah Kebayoran Baru",
    price: "Rp 5.5 Milyar",
    location: "Jl. Kebayoran Baru No. 123, Kebayoran Baru, Jakarta Selatan",
    description:
      "Rumah mewah 2 lantai dengan desain modern minimalis di kawasan premium Kebayoran Baru. Dikelilingi area hijau dan akses mudah ke berbagai fasilitas publik. Cocok untuk keluarga yang menginginkan kenyamanan dan privasi.",
    longDescription:
      "Rumah mewah 2 lantai dengan desain modern minimalis di kawasan premium Kebayoran Baru. Dikelilingi area hijau dan akses mudah ke berbagai fasilitas publik. Cocok untuk keluarga yang menginginkan kenyamanan dan privasi.\n\nDilengkapi dengan kolam renang pribadi, taman yang asri, garasi untuk 2 mobil, dan sistem keamanan 24 jam. Interior rumah dirancang dengan konsep open space yang memberikan kesan luas dan nyaman. Material bangunan berkualitas tinggi dengan finishing premium.\n\nLokasi strategis, hanya 5 menit ke pusat perbelanjaan, 10 menit ke sekolah internasional, dan 15 menit ke kawasan bisnis Jakarta Selatan. Akses mudah ke jalan tol dan transportasi umum.",
    type: "Rumah",
    status: "Dijual",
    bedrooms: 4,
    bathrooms: 3,
    buildingSize: 250,
    landSize: 300,
    floors: 2,
    furnishing: "Unfurnished",
    facilities: ["Kolam Renang", "Taman", "Garasi", "Keamanan 24 Jam", "CCTV", "AC"],
    nearbyFacilities: ["Sekolah", "Rumah Sakit", "Pusat Perbelanjaan", "Taman Kota", "Akses Tol"],
    yearBuilt: 2020,
    certificate: "SHM - Sertifikat Hak Milik",
    images: [
      "/rumah1.jpg",
      "/rumah3.jpg",
      "/rumah1.jpg",
      "/rumah3.jpg",
      "/rumah1.jpg",

    ],
    agent: {
      name: "Budi Santoso",
      phone: "+62 812-3456-7890",
      email: "budi@home99.id",
      image: "/profile.jpg",
    },
    publishedAt: "2023-10-15",
    views: 240,
  }

  // Properti serupa (dalam implementasi nyata akan diambil dari database)
  const similarProperties = [
    {
      id: "rumah-2",
      title: "Rumah Minimalis Cilandak",
      price: "Rp 4.8 Milyar",
      location: "Cilandak",
      bedrooms: 3,
      bathrooms: 2,
      area: 200,
      image: "/rumah1.jpg",
    },
    {
      id: "rumah-3",
      title: "Rumah Modern Kemang",
      price: "Rp 7.2 Milyar",
      location: "Kemang",
      bedrooms: 5,
      bathrooms: 4,
      area: 300,
      image: "/rumah3.jpg",
    },
    {
      id: "rumah-4",
      title: "Rumah Klasik Kebayoran Lama",
      price: "Rp 6.5 Milyar",
      location: "Kebayoran Lama",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      image: "/rumah3.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeMenu="properti" />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-2">
          <div className="container">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <Link href="/properti" className="hover:text-primary">
                Properti
              </Link>
              <span className="mx-2">/</span>
              <Link href="/properti/rumah" className="hover:text-primary">
                Rumah
              </Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{propertyData.title}</span>
            </div>
          </div>
        </div>

        {/* Back Button & Actions */}
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/properti/rumah">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Kembali ke Daftar Rumah
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Bagikan
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="mr-2 h-4 w-4" />
                Simpan
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="mr-2 h-4 w-4" />
                Cetak
              </Button>
            </div>
          </div>
        </div>

        {/* Property Title & Price */}
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{propertyData.title}</h1>
              <div className="flex items-center mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{propertyData.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-3xl font-bold text-primary">{propertyData.price}</div>
              <Badge className="mt-1">{propertyData.status}</Badge>
            </div>
          </div>
        </div>

        {/* Property Images */}
        <div className="container py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={propertyData.images[0] || "/placeholder.svg"}
                alt={propertyData.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {propertyData.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative h-[90px] md:h-[92px] rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${propertyData.title} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                  {index === 3 && propertyData.images.length > 5 && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-medium">+{propertyData.images.length - 5} Foto</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Ringkasan Properti</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                    <BedDouble className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Kamar Tidur</span>
                    <span className="font-bold">{propertyData.bedrooms}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                    <Bath className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Kamar Mandi</span>
                    <span className="font-bold">{propertyData.bathrooms}</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                    <Maximize className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Luas Bangunan</span>
                    <span className="font-bold">{propertyData.buildingSize} m²</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                    <Maximize className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground">Luas Tanah</span>
                    <span className="font-bold">{propertyData.landSize} m²</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Deskripsi</h2>
                <div className="text-muted-foreground whitespace-pre-line">{propertyData.longDescription}</div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Spesifikasi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                  <div className="flex items-center">
                    <span className="w-40 text-muted-foreground">Tipe Properti</span>
                    <span className="font-medium">{propertyData.type}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-40 text-muted-foreground">Jumlah Lantai</span>
                    <span className="font-medium">{propertyData.floors}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-40 text-muted-foreground">Kondisi Perabotan</span>
                    <span className="font-medium">{propertyData.furnishing}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-40 text-muted-foreground">Tahun Dibangun</span>
                    <span className="font-medium">{propertyData.yearBuilt}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-40 text-muted-foreground">Sertifikat</span>
                    <span className="font-medium">{propertyData.certificate}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-40 text-muted-foreground">Dipublikasikan</span>
                    <span className="font-medium">{propertyData.publishedAt}</span>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Fasilitas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {propertyData.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Facilities */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Fasilitas Terdekat</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {propertyData.nearbyFacilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tabs: Photos, Maps, Floor Plan */}
              <div>
                <Tabs defaultValue="photos">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="photos">Foto</TabsTrigger>
                    <TabsTrigger value="maps">Peta</TabsTrigger>
                    <TabsTrigger value="floorplan">Denah</TabsTrigger>
                  </TabsList>
                  <TabsContent value="photos" className="mt-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {propertyData.images.map((image, index) => (
                        <div key={index} className="relative h-[150px] rounded-lg overflow-hidden">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${propertyData.title} ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="maps" className="mt-4">
                    <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Peta Lokasi Properti</p>
                        <p className="text-sm text-muted-foreground">{propertyData.location}</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="floorplan" className="mt-4">
                    <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      <div className="text-center">
                        <Maximize className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Denah Rumah</p>
                        <p className="text-sm text-muted-foreground">Denah lantai 1 dan lantai 2</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={propertyData.agent.image || "/placeholder.svg"}
                        alt={propertyData.agent.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{propertyData.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">Agen Properti</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Telepon
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      Jadwalkan Kunjungan
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Mortgage Calculator */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Kalkulator KPR</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Harga Properti</label>
                      <div className="p-2 border rounded-md mt-1">Rp 5.500.000.000</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Uang Muka (20%)</label>
                      <div className="p-2 border rounded-md mt-1">Rp 1.100.000.000</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Jumlah Pinjaman</label>
                      <div className="p-2 border rounded-md mt-1">Rp 4.400.000.000</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Tenor</label>
                      <div className="p-2 border rounded-md mt-1">20 Tahun</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Suku Bunga</label>
                      <div className="p-2 border rounded-md mt-1">7.5%</div>
                    </div>
                    <Separator />
                    <div>
                      <label className="text-sm font-medium">Estimasi Angsuran per Bulan</label>
                      <div className="p-2 bg-primary/10 rounded-md mt-1 font-bold">Rp 35.600.000</div>
                    </div>
                    <Button className="w-full">Hitung Ulang</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Property Views */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Dilihat</span>
                    <span className="font-bold">{propertyData.views} kali</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="container py-8">
          <h2 className="text-2xl font-bold mb-6">Properti Serupa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProperties.map((property) => (
              <Link href={`/properti/rumah/${property.id}`} key={property.id}>
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="relative h-[200px]">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                      Rumah
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground my-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                        <span className="font-bold">{property.bedrooms}</span>
                        <span className="text-xs text-muted-foreground">Kamar</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                        <span className="font-bold">{property.bathrooms}</span>
                        <span className="text-xs text-muted-foreground">K. Mandi</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                        <span className="font-bold">{property.area}</span>
                        <span className="text-xs text-muted-foreground">m²</span>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-primary">{property.price}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
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
                  <Link href="/properti/rumah" className="text-sm text-primary hover:text-primary">
                    Rumah
                  </Link>
                </li>
                <li>
                  <Link href="/properti/ruko" className="text-sm text-muted-foreground hover:text-primary">
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
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">+62 812-3456-7890</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
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

