import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, HelpCircle, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/ui/header"

export default function KontakPage() {
  // Data FAQ
  const faqs = [
    {
      question: "Bagaimana cara membuat janji untuk melihat properti?",
      answer:
        "Anda dapat menghubungi kami melalui telepon, email, atau mengisi formulir kontak di halaman ini. Tim kami akan menghubungi Anda untuk mengatur jadwal kunjungan properti yang sesuai dengan ketersediaan Anda.",
    },
    {
      question: "Apakah Home99 menyediakan layanan KPR?",
      answer:
        "Ya, Home99 bekerja sama dengan berbagai bank terkemuka untuk membantu Anda mendapatkan KPR dengan suku bunga kompetitif. Konsultan kami akan membantu Anda memilih program KPR yang sesuai dengan kebutuhan dan kemampuan finansial Anda.",
    },
    {
      question: "Berapa lama proses jual beli properti biasanya berlangsung?",
      answer:
        "Proses jual beli properti biasanya memakan waktu 1-3 bulan, tergantung pada kompleksitas transaksi, status properti, dan proses KPR (jika diperlukan). Tim kami akan membantu mempercepat proses ini dan memberikan update secara berkala.",
    },
    {
      question: "Apakah Home99 menangani properti di luar Jakarta Selatan?",
      answer:
        "Saat ini, Home99 fokus pada properti di kawasan Jakarta Selatan. Namun, kami memiliki jaringan mitra di berbagai wilayah lain dan dapat membantu menghubungkan Anda dengan agen properti terpercaya di lokasi yang Anda inginkan.",
    },
    {
      question: "Bagaimana cara menjual properti melalui Home99?",
      answer:
        "Untuk menjual properti melalui Home99, Anda dapat menghubungi kami untuk penilaian properti gratis. Setelah itu, tim kami akan membantu memasarkan properti Anda melalui berbagai platform dan jaringan kami untuk mendapatkan pembeli potensial dengan harga terbaik.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeMenu="kontak" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <Image
            src="/cust-service.jpg"
            alt="Hubungi Home99"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="container relative z-10 flex flex-col items-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Hubungi Kami</h1>
            <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
              Tim kami siap membantu Anda menemukan properti impian
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Alamat Kantor</h3>
                  <p className="text-muted-foreground">
                    Jl. Kemang Raya No. 99, Kemang, Jakarta Selatan, DKI Jakarta 12730
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Telepon & Email</h3>
                  <p className="text-muted-foreground mb-1">+62 812-3456-7890</p>
                  <p className="text-muted-foreground mb-1">+62 21-7654-3210</p>
                  <p className="text-muted-foreground">info@home99.id</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
                  <p className="text-muted-foreground mb-1">Senin - Jumat: 09.00 - 17.00</p>
                  <p className="text-muted-foreground mb-1">Sabtu: 09.00 - 15.00</p>
                  <p className="text-muted-foreground">Minggu & Hari Libur: Tutup</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Kirim Pesan</h2>
                <p className="text-muted-foreground mb-8">
                  Isi formulir di bawah ini untuk mengirim pesan kepada tim kami. Kami akan merespons pesan Anda secepat
                  mungkin.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nama Lengkap
                      </label>
                      <Input id="name" placeholder="Masukkan nama lengkap" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Nomor Telepon
                      </label>
                      <Input id="phone" placeholder="Masukkan nomor telepon" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Masukkan alamat email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">
                      Saya Tertarik Dengan
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Jenis Properti" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">Rumah</SelectItem>
                        <SelectItem value="shophouse">Ruko</SelectItem>
                        <SelectItem value="land">Tanah</SelectItem>
                        <SelectItem value="other">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Pesan
                    </label>
                    <Textarea id="message" placeholder="Tulis pesan Anda di sini" className="min-h-[120px]" />
                  </div>
                  <Button className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Kirim Pesan
                  </Button>
                </form>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Lokasi Kami</h2>
                <div className="relative h-[400px] rounded-xl overflow-hidden bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Peta Lokasi Kantor Home99</p>
                      <p className="text-sm text-muted-foreground">Jl. Kemang Raya No. 99, Jakarta Selatan</p>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-bold mb-4">Petunjuk Arah</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>5 menit dari Stasiun MRT Cipete Raya</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>10 menit dari Plaza Kemang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>15 menit dari Pondok Indah Mall</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>Tersedia parkir luas di area kantor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Pertanyaan Umum</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Jawaban untuk pertanyaan yang sering diajukan
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pl-7">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 bg-primary/10">
          <div className="container">
            <div className="flex flex-col items-center text-center gap-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Jadwalkan Konsultasi Gratis</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Konsultasikan kebutuhan properti Anda dengan tim ahli kami tanpa biaya
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Telepon Sekarang
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/properti">Lihat Properti</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 md:py-12">
        <div className="container flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2">
              <Image
                src="/icon.jpg"
                alt="Modern property in Jakarta"
                width={100}
                height={40}
                className="object-cover"
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
                  <Link href="/properti/rumah" className="text-sm text-muted-foreground hover:text-primary">
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
                  <Link href="/tentang-kami#team" className="text-sm text-muted-foreground hover:text-primary">
                    Tim Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="/kontak" className="text-sm text-primary hover:text-primary">
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

