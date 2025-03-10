import Link from "next/link"
import Image from "next/image"
import { Building, Home, MapPin, Phone, Mail, Map } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/ui/header"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activeMenu="" />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src="/landing-page.jpg"
            alt="Modern property in Jakarta"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="container relative z-10 flex flex-col items-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Temukan Rumah Impian Anda di Jakarta Selatan
            </h1>
            <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
              Home99 menyediakan layanan penjualan dan penyewaan rumah, ruko, dan tanah kosong dengan lokasi strategis.
            </p>
            <div className="mt-6">
              <Tabs defaultValue="buy" className="w-full max-w-3xl bg-white/10 backdrop-blur-sm rounded-lg p-1">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="buy">Beli</TabsTrigger>
                  <TabsTrigger value="rent">Sewa</TabsTrigger>
                  <TabsTrigger value="land">Tanah</TabsTrigger>
                </TabsList>
                <TabsContent value="buy" className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <select className="w-full p-3 rounded-md bg-white text-black">
                        <option value="">Tipe Properti</option>
                        <option value="house">Rumah</option>
                        <option value="apartment">Apartemen</option>
                        <option value="shophouse">Ruko</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <select className="w-full p-3 rounded-md bg-white text-black">
                        <option value="">Lokasi</option>
                        <option value="kebayoran">Kebayoran Baru</option>
                        <option value="pondok-indah">Pondok Indah</option>
                        <option value="kemang">Kemang</option>
                      </select>
                    </div>
                    <Link href="/properti">
                      <Button className="sm:w-auto w-full">Cari Properti</Button>
                    </Link>
                  </div>
                </TabsContent>
                <TabsContent value="rent" className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <select className="w-full p-3 rounded-md bg-white text-black">
                        <option value="">Tipe Properti</option>
                        <option value="house">Rumah</option>
                        <option value="apartment">Apartemen</option>
                        <option value="shophouse">Ruko</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <select className="w-full p-3 rounded-md bg-white text-black">
                        <option value="">Lokasi</option>
                        <option value="kebayoran">Kebayoran Baru</option>
                        <option value="pondok-indah">Pondok Indah</option>
                        <option value="kemang">Kemang</option>
                      </select>
                    </div>
                    <Button className="sm:w-auto w-full">Cari Properti</Button>
                  </div>
                </TabsContent>
                <TabsContent value="land" className="p-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <select className="w-full p-3 rounded-md bg-white text-black">
                        <option value="">Luas Tanah</option>
                        <option value="small">&lt; 500 m²</option>
                        <option value="medium">500 - 1000 m²</option>
                        <option value="large">&gt; 1000 m²</option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <select className="w-full p-3 rounded-md bg-white text-black">
                        <option value="">Lokasi</option>
                        <option value="kebayoran">Kebayoran Baru</option>
                        <option value="pondok-indah">Pondok Indah</option>
                        <option value="kemang">Kemang</option>
                      </select>
                    </div>
                    <Button className="sm:w-auto w-full">Cari Properti</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section id="properties" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Properti Unggulan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Temukan properti terbaik kami di Jakarta Selatan
                </p>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <PropertyCard
                title="Rumah Mewah Kebayoran Baru"
                type="Rumah"
                price="Rp 5.5 Milyar"
                location="Kebayoran Baru"
                bedrooms={4}
                bathrooms={3}
                area={250}
                image="/rumah1.jpg"
              />
              <PropertyCard
                title="Ruko 3 Lantai Fatmawati"
                type="Ruko"
                price="Rp 3.2 Milyar"
                location="Fatmawati"
                bedrooms={0}
                bathrooms={2}
                area={150}
                image="/ruko1.png"
              />
              <PropertyCard
                title="Tanah Komersial Kemang"
                type="Tanah"
                price="Rp 12 Milyar"
                location="Kemang"
                bedrooms={0}
                bathrooms={0}
                area={500}
                image="/tanah1.webp"
              />
              <PropertyCard
                title="Rumah Minimalis Cilandak"
                type="Rumah"
                price="Rp 4.8 Milyar"
                location="Cilandak"
                bedrooms={3}
                bathrooms={2}
                area={200}
                image="/rumah3.jpg"
              />
              <PropertyCard
                title="Ruko Strategis Pondok Indah"
                type="Ruko"
                price="Rp 7.5 Milyar"
                location="Pondok Indah"
                bedrooms={0}
                bathrooms={2}
                area={180}
                image="/ruko2.jpg"
              />
              <PropertyCard
                title="Tanah Siap Bangun Jagakarsa"
                type="Tanah"
                price="Rp 3.5 Milyar"
                location="Jagakarsa"
                bedrooms={0}
                bathrooms={0}
                area={300}
                image="/tanah2.jpeg"
              />
            </div>
            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg">
                Lihat Semua Properti
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Layanan Kami</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Penjualan Properti</h3>
                      <p className="text-muted-foreground mt-1">
                        Kami menawarkan berbagai pilihan rumah, ruko, dan tanah untuk dijual dengan lokasi strategis di
                        Jakarta Selatan.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Penyewaan Properti</h3>
                      <p className="text-muted-foreground mt-1">
                        Dapatkan properti sewa terbaik untuk kebutuhan bisnis atau hunian Anda dengan harga kompetitif.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Map className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Investasi Tanah</h3>
                      <p className="text-muted-foreground mt-1">
                        Investasikan dana Anda pada tanah kosong dengan potensi pengembangan dan nilai investasi yang
                        tinggi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/layanan-kami.jpg"
                  alt="Layanan properti Home99"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden order-2 lg:order-1">
                <Image src="/tentang.jpg" alt="Tentang Home99" fill className="object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Tentang Home99</h2>
                <p className="text-muted-foreground mb-4">
                  Home99 adalah perusahaan pengembang properti terkemuka yang bergerak di bidang penjualan, penyewaan
                  rumah, ruko, dan tanah kosong di Jakarta Selatan.
                </p>
                <p className="text-muted-foreground mb-4">
                  Dengan pengalaman lebih dari 10 tahun di industri properti, kami telah membantu ribuan klien menemukan
                  properti impian mereka dengan lokasi strategis dan harga terbaik.
                </p>
                <p className="text-muted-foreground mb-6">
                  Komitmen kami adalah memberikan pelayanan terbaik dan profesional kepada setiap klien, serta
                  memastikan proses transaksi properti berjalan dengan lancar dan transparan.
                </p>
                <Button>Pelajari Lebih Lanjut</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hubungi Kami</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Konsultasikan kebutuhan properti Anda dengan tim kami
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Alamat Kantor</h3>
                    <p className="text-muted-foreground mt-1">
                      Jl. Kemang Raya No. 99, Kemang, Jakarta Selatan, DKI Jakarta 12730
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Telepon</h3>
                    <p className="text-muted-foreground mt-1">+62 812-3456-7890</p>
                    <p className="text-muted-foreground">+62 21-7654-3210</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Email</h3>
                    <p className="text-muted-foreground mt-1">info@home99.id</p>
                    <p className="text-muted-foreground">marketing@home99.id</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-6 rounded-xl">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nama Lengkap
                      </label>
                      <input id="name" placeholder="Masukkan nama lengkap" className="w-full p-3 rounded-md border" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Nomor Telepon
                      </label>
                      <input id="phone" placeholder="Masukkan nomor telepon" className="w-full p-3 rounded-md border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Masukkan alamat email"
                      className="w-full p-3 rounded-md border"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      Saya Tertarik Dengan
                    </label>
                    <select id="interest" className="w-full p-3 rounded-md border">
                      <option value="">Pilih Jenis Properti</option>
                      <option value="house">Rumah</option>
                      <option value="shophouse">Ruko</option>
                      <option value="land">Tanah</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tulis pesan Anda di sini"
                      className="w-full p-3 rounded-md border min-h-[120px]"
                    ></textarea>
                  </div>
                  <Button className="w-full">Kirim Pesan</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-12">
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
                  <Link href="tentang-kami" className="text-sm text-muted-foreground hover:text-primary">
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
        <Button variant="outline" className="w-full">
          Lihat Detail
        </Button>
      </CardFooter>
    </Card>
  )
}

