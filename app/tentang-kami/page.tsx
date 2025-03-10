import Link from "next/link"
import Image from "next/image"
import { Home, MapPin, Phone, Mail, Users, Target, Award, Clock, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/ui/header"

export default function TentangKamiPage() {
  // Data tim manajemen
  const teamMembers = [
    {
      name: "Budi Santoso",
      position: "CEO & Founder",
      bio: "Berpengalaman lebih dari 15 tahun di industri properti. Memulai Home99 dengan visi menyediakan properti berkualitas di Jakarta Selatan.",
      image: "/profile.jpg",
    },
    {
      name: "Siti Rahayu",
      position: "Chief Marketing Officer",
      bio: "Ahli pemasaran dengan pengalaman 10 tahun di berbagai perusahaan properti terkemuka. Bergabung dengan Home99 sejak 2018.",
      image: "/profile.jpg",
    },
    {
      name: "Ahmad Wijaya",
      position: "Chief Operations Officer",
      bio: "Memiliki latar belakang di bidang arsitektur dan manajemen properti. Fokus pada pengembangan properti yang berkelanjutan.",
      image: "/profile.jpg",
    },
    {
      name: "Dewi Lestari",
      position: "Head of Sales",
      bio: "Profesional penjualan dengan track record luar biasa. Memimpin tim penjualan Home99 sejak 2019.",
      image: "/profile.jpg",
    },
  ]

  // Data pencapaian perusahaan
  const achievements = [
    {
      title: "Properti Terjual",
      value: "500+",
      icon: Home,
    },
    {
      title: "Klien Puas",
      value: "1200+",
      icon: Users,
    },
    {
      title: "Tahun Pengalaman",
      value: "10+",
      icon: Clock,
    },
    {
      title: "Penghargaan",
      value: "15+",
      icon: Award,
    },
  ]

  // Data nilai-nilai perusahaan
  const values = [
    {
      title: "Integritas",
      description: "Kami selalu menjunjung tinggi kejujuran dan transparansi dalam setiap transaksi properti.",
    },
    {
      title: "Kualitas",
      description: "Kami berkomitmen untuk menyediakan properti dengan standar kualitas tertinggi.",
    },
    {
      title: "Inovasi",
      description: "Kami terus berinovasi dalam layanan dan solusi properti untuk memenuhi kebutuhan klien.",
    },
    {
      title: "Kepuasan Pelanggan",
      description: "Kepuasan pelanggan adalah prioritas utama kami dalam setiap aspek layanan.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeMenu="tentang-kami" />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <Image
            src="/tentang-kami.jpg"
            alt="Tim Home99"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
          <div className="container relative z-10 flex flex-col items-center gap-4 text-center text-white">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Tentang Home99</h1>
            <p className="max-w-[700px] text-lg text-white/90 md:text-xl">
              Menyediakan properti berkualitas di Jakarta Selatan sejak 2013
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/tentang.jpg"
                  alt="Kantor Home99"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6">Sejarah Kami</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Home99 didirikan pada tahun 2013 oleh Budi Santoso, seorang profesional properti berpengalaman
                    dengan visi untuk menyediakan properti berkualitas di kawasan Jakarta Selatan.
                  </p>
                  <p>
                    Berawal dari sebuah kantor kecil di Kemang dengan tim yang terdiri dari 5 orang, Home99 kini telah
                    berkembang menjadi salah satu pengembang properti terkemuka di Jakarta Selatan dengan lebih dari 50
                    karyawan.
                  </p>
                  <p>
                    Selama satu dekade terakhir, Home99 telah membantu ribuan klien menemukan properti impian mereka,
                    baik untuk tempat tinggal maupun investasi. Kami telah menangani penjualan dan penyewaan berbagai
                    jenis properti, mulai dari rumah mewah, ruko strategis, hingga tanah komersial dengan lokasi
                    premium.
                  </p>
                  <p>
                    Komitmen kami terhadap kualitas, integritas, dan kepuasan pelanggan telah menjadikan Home99 sebagai
                    nama yang dipercaya dalam industri properti di Jakarta Selatan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Visi & Misi</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Kami berkomitmen untuk menjadi yang terdepan dalam industri properti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Visi</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Menjadi pengembang properti terkemuka yang menyediakan hunian dan properti komersial berkualitas
                    tinggi, serta memberikan nilai tambah bagi masyarakat dan lingkungan di Jakarta Selatan.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full h-12 w-12 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Misi</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>Menyediakan properti dengan lokasi strategis dan kualitas terbaik</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>Memberikan layanan profesional dan transparan kepada setiap klien</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>Mengembangkan properti yang ramah lingkungan dan berkelanjutan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>Berkontribusi positif terhadap perkembangan kawasan Jakarta Selatan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Pencapaian Kami</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Perjalanan kami selama satu dekade telah menghasilkan berbagai pencapaian
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <achievement.icon className="h-12 w-12 text-primary mb-4" />
                    <div className="text-4xl font-bold mb-2">{achievement.value}</div>
                    <div className="text-muted-foreground">{achievement.title}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Nilai-Nilai Kami</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Prinsip-prinsip yang menjadi landasan setiap langkah kami
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="w-full py-12 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Tim Manajemen</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Dipimpin oleh para profesional berpengalaman di industri properti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-[300px]">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Testimoni Klien</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">Apa kata klien kami tentang layanan Home99</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex text-amber-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      &quot;Home99 membantu saya menemukan rumah impian di Kebayoran Baru. Proses transaksi sangat lancar dan
                      transparan. Sangat merekomendasikan layanan mereka!&quot;
                    </p>
                    <div>
                      <div className="font-bold">Andi Pratama</div>
                      <div className="text-sm text-muted-foreground">Pengusaha</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex text-amber-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      &quot;Sebagai investor properti, saya sangat puas dengan layanan Home99. Mereka memahami kebutuhan
                      investasi saya dan memberikan rekomendasi properti yang tepat.&quot;
                    </p>
                    <div>
                      <div className="font-bold">Maya Sari</div>
                      <div className="text-sm text-muted-foreground">Investor Properti</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex text-amber-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      &quot;Ruko yang saya beli melalui Home99 memiliki lokasi strategis dan sesuai dengan kebutuhan bisnis
                      saya. Tim Home99 sangat profesional dan membantu.&quot;
                    </p>
                    <div>
                      <div className="font-bold">Hendra Wijaya</div>
                      <div className="text-sm text-muted-foreground">Pemilik Bisnis</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-12 md:py-24 bg-primary/10">
          <div className="container">
            <div className="flex flex-col items-center text-center gap-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Siap Menemukan Properti Impian Anda?</h2>
              <p className="max-w-[700px] text-muted-foreground">
                Konsultasikan kebutuhan properti Anda dengan tim ahli kami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" asChild>
                  <Link href="/kontak">Hubungi Kami</Link>
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
                  <Link href="/tentang-kami" className="text-sm text-primary hover:text-primary">
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
                  <Link href="/kontak" className="text-sm text-muted-foreground hover:text-primary">
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

