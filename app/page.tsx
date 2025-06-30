import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SectionWrapper } from "@/components/section-wrapper";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Calendar, MapPin, Download } from "lucide-react";
import Link from "next/link";
import { BackToTop } from "@/components/back-to-top";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
];

const projects = [
  {
    title: "Sari Pasundan Company Profile",
    description:
      "Mengembangkan website profil perusahaan menggunakan Laravel dan manajemen database MySQL dengan fitur admin panel dan content management system.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    repoUrl: "https://github.com/bayuawe/compro-saripasundan",
    liveUrl: "https://saripasundan.bayuawe.my.id",
  },
  {
    title: "Tugas Kita",
    description:
      "Tugas kita adalah aplikasi pengelola tugas berbasis web yang dirancang menggunakan Vue 3, Vite, dan Tailwind CSS. Aplikasi ini bertujuan membantu pengguna mencatat dan mengelola tugas secara efisien melalui antarmuka yang modern dan responsif.",
    technologies: ["Vue 3", "Vite", "Tailwind CSS"],
    repoUrl: "https://github.com/bayuawe/tugaskita",
    liveUrl: "https://tugaskita.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollIndicator />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b z-40 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="#" className="font-bold text-lg sm:text-xl hover:text-primary transition-colors">
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <SectionWrapper className="pt-24 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Bayu Aryandi Wijaya
              </h1>
              <div className="space-y-2 sm:space-y-3">
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">@bayuawe</p>
                <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold">Frontend Developer</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Button variant="outline" size="sm" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="https://github.com/bayuawe" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="https://www.linkedin.com/in/bayu-aryandi-wijaya/" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button size="sm" asChild className="w-full sm:w-auto">
                <Link href="#contact" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in touch
                </Link>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="text-4xl sm:text-5xl md:text-6xl">👋</div>
              <p className="text-lg sm:text-xl font-medium">Hey there!</p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Passionate about creating beautiful, functional web experiences with modern technologies
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8 sm:mb-12">
              <span className="text-2xl sm:text-3xl font-bold mr-4 text-primary">01</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">ABOUT</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardContent className="p-6 sm:p-8">
                    <p className="text-base sm:text-lg leading-relaxed mb-6">
                      Junior Frontend Developer dengan latar belakang 5+ tahun sebagai Desainer Grafis. Memiliki
                      kemampuan kuat dalam membangun antarmuka pengguna responsif dan menarik menggunakan HTML, CSS,
                      JavaScript, serta pengalaman dengan Laravel dan Figma.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed">
                      Lulusan S1 Teknik Informatika. Terbiasa bekerja secara kolaboratif dan menyelesaikan proyek tepat
                      waktu dengan kualitas tinggi. Siap memberikan kontribusi pada tim pengembangan web yang
                      mengutamakan user experience dan desain modern.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Riau, Indonesia</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">HTML/CSS</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">Laravel</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Figma</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Experiences Section */}
      <SectionWrapper id="experiences" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8 sm:mb-12">
              <span className="text-2xl sm:text-3xl font-bold mr-4 text-primary">02</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">EXPERIENCES</h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl mb-2">Web Developer - Intern</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        CV. Sari Pasundan Berkah
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      09/2023 - 02/2024
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-base leading-relaxed">
                    Mengembangkan website profil perusahaan menggunakan Laravel dan manajemen database MySQL.
                    Bertanggung jawab dalam pembuatan fitur admin panel, content management system, dan optimasi
                    performa website.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">PHP</Badge>
                    <Badge variant="secondary">Laravel</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">Bootstrap</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl mb-2">Graphic Designer</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">
                        CV. Sari Pasundan Berkah
                      </CardDescription>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      09/2019 - CURRENT
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-base leading-relaxed">
                    Mendesain konten visual untuk Instagram & Facebook menggunakan Adobe Photoshop, Illustrator, dan
                    CorelDRAW untuk kampanye visual. Mengembangkan brand identity dan material marketing yang konsisten.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Photoshop</Badge>
                    <Badge variant="secondary">Illustrator</Badge>
                    <Badge variant="secondary">CorelDraw</Badge>
                    <Badge variant="secondary">Brand Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Education Section */}
      <SectionWrapper id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8 sm:mb-12">
              <span className="text-2xl sm:text-3xl font-bold mr-4 text-primary">03</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">EDUCATION</h2>
            </div>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl mb-2">
                      Teknik Informatika (Sarjana Ilmu Komputer)
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      Universitas Muhammadiyah Riau
                    </CardDescription>
                  </div>
                  <div className="lg:text-right space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full lg:justify-end">
                      <Calendar className="w-4 h-4 mr-2" />
                      2020 - 2024
                    </div>
                    <div className="text-lg font-bold text-primary">IPK 3.77/4.00</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Fokus pada pengembangan perangkat lunak, database management, dan web development. Menyelesaikan
                  berbagai proyek akademik menggunakan teknologi modern seperti Laravel, PHP, dan MySQL.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8 sm:mb-12">
              <span className="text-2xl sm:text-3xl font-bold mr-4 text-primary">04</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">PROJECTS</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Let&apos;s Work Together</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed">
              Interested in collaborating? I&apos;m always open to discussing new opportunities and exciting projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="mailto:bayuaryandi21@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/resume.pdf" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Link href="https://github.com/bayuawe" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/bayu-aryandi-wijaya/" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
        <div className="container mx-auto">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Bayu Aryandi Wijaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
