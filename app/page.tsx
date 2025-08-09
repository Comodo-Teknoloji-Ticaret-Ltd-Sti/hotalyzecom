"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Star,
  TrendingUp,
  BarChart3,
  PieChart,
  Phone,
  Play,
  Menu,
  Sun,
  Moon,
  InfoIcon as Analytics,
  Rocket,
  CheckCircle,
  MessageSquare,
} from "lucide-react"

import { DemoModal } from "@/components/demo-modal"
import { PurchaseModal } from "@/components/purchase-modal"
import { ScrollToTop } from "@/components/scroll-to-top"

import { testimonials, packages, heroStats, analysisFeatures, whyHotalyzeFeatures, type PackageItem } from "@/lib/data"

export default function HotalyzeApp() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null)
  const [showPurchaseForm, setShowPurchaseForm] = useState(false)
  const [showDemo, setShowDemo] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handlePackageSelect = (pkg: PackageItem) => {
    setSelectedPackage(pkg)
    setShowPurchaseForm(true)
  }

  const openDemo = (tab = "overview") => {
    setActiveTab(tab)
    setShowDemo(true)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">Hotalyze</span>
              <Badge variant="secondary" className="hidden sm:inline-flex">
                AI Powered
              </Badge>
            </div>
            <div className="hidden items-center space-x-4 md:flex">
              <Button variant="ghost" onClick={() => openDemo("overview")}>
                <Play className="mr-2 h-4 w-4" />
                Demo
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("analysis")}>
                Analizler
              </Button>
              <Button variant="ghost" onClick={() => scrollToSection("packages")}>
                Fiyatlar
              </Button>
              <Button onClick={() => window.open("tel:+905059982093", "_self")}>
                <Phone className="mr-2 h-4 w-4" />
                Hemen Ara
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="mt-8 flex flex-col space-y-4">
                    <Button variant="ghost" onClick={() => openDemo("overview")} className="justify-start">
                      <Play className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                    <Button variant="ghost" onClick={() => scrollToSection("analysis")} className="justify-start">
                      Analizler
                    </Button>
                    <Button variant="ghost" onClick={() => scrollToSection("packages")} className="justify-start">
                      Fiyatlar
                    </Button>
                    <Button className="justify-start" onClick={() => window.open("tel:+905059982093", "_self")}>
                      <Phone className="mr-2 h-4 w-4" />
                      Hemen Ara
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-24 dark:from-gray-900 dark:to-gray-800">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Shapes */}
            <div
              className="absolute left-10 top-20 h-20 w-20 animate-bounce rounded-full bg-blue-200/30"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            ></div>
            <div
              className="absolute right-20 top-40 h-16 w-16 animate-bounce rounded-full bg-purple-200/30"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
            <div
              className="absolute bottom-40 left-20 h-12 w-12 animate-bounce rounded-full bg-indigo-200/30"
              style={{ animationDelay: "2s", animationDuration: "5s" }}
            ></div>
            <div
              className="absolute bottom-20 right-40 h-24 w-24 animate-bounce rounded-full bg-blue-300/20"
              style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
            ></div>
            {/* Floating Charts Icons */}
            <div className="absolute right-10 top-32 animate-float">
              <BarChart3 className="h-12 w-12 text-blue-300/40" />
            </div>
            <div className="absolute bottom-32 left-40 animate-float" style={{ animationDelay: "1s" }}>
              <PieChart className="h-10 w-10 text-purple-300/40" />
            </div>
            <div className="absolute left-1/4 top-60 animate-float" style={{ animationDelay: "2s" }}>
              <TrendingUp className="h-8 w-8 text-indigo-300/40" />
            </div>
            <div className="absolute right-1/4 bottom-60 animate-float" style={{ animationDelay: "1.5s" }}>
              <Analytics className="h-14 w-14 text-blue-400/30" />
            </div>
            {/* Gradient Orbs */}
            <div className="absolute -left-40 -top-40 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"></div>
            <div
              className="absolute -right-40 -bottom-40 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
              style={{ animationDelay: "1s" }}
            ></div>
            {/* Moving Lines */}
            <div className="absolute inset-0 h-full w-full">
              <div className="absolute left-0 top-1/4 h-px w-full animate-slide-right bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
              <div
                className="absolute left-0 top-2/4 h-px w-full animate-slide-left bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute left-0 top-3/4 h-px w-full animate-slide-right bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent"
                style={{ animationDelay: "4s" }}
              ></div>
            </div>
          </div>
          <div className="container relative z-10">
            <div className="space-y-8 text-center">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                🚀 Türkiye'nin #1 Otel Yorum Analiz Platformu
              </Badge>
              <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
                Otel Yorumlarını
                <br />
                AI ile Gelire Çevir!
              </h1>
              <p className="mx-auto max-w-4xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                <strong>Binlerce yorumu saniyeler içinde analiz et.</strong> Müşteri memnuniyetini %42 artır, gelirini
                %280 yükselt. Rakiplerinizi geride bırak!
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button size="lg" onClick={() => openDemo("overview")} className="px-8 py-6 text-lg">
                  <Play className="mr-2 h-5 w-5" />🎯 Ücretsiz Demo İzle
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("packages")}
                  className="px-8 py-6 text-lg"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Hemen Başla
                </Button>
              </div>
              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {heroStats.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="p-4">
                      <stat.icon className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                      <div className="text-xs text-green-600">{stat.change}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="bg-gray-50 py-12 md:py-24 dark:bg-gray-900">
          <div className="container">
            <div className="mb-12 space-y-4 text-center">
              <Badge variant="secondary">💬 Müşteri Hikayeleri</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Başarı Hikayeleri</h2>
              <p className="text-xl text-muted-foreground">Gerçek müşterilerimizin gerçek sonuçları</p>
            </div>
            <Card className="mx-auto max-w-4xl">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0">
                  <Avatar className="h-20 w-20 bg-blue-600 text-2xl text-white">
                    <AvatarFallback className="bg-blue-600 text-white">
                      {testimonials[currentTestimonial].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4 flex justify-center md:justify-start">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="mb-4 text-lg italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                      <div>
                        <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                        <div className="text-muted-foreground">
                          {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {testimonials[currentTestimonial].results}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                    }`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* Analysis Preview */}
        <section id="analysis" className="py-12 md:py-24">
          <div className="container">
            <div className="mb-12 space-y-4 text-center">
              <Badge variant="secondary">🤖 AI Destekli Analizler</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Profesyonel Analiz Raporları</h2>
              <p className="text-xl text-muted-foreground">Verilerinizi anlamlı içgörülere ve kâra dönüştürüyoruz</p>
            </div>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {analysisFeatures.map((item, index) => (
                <Card
                  key={index}
                  className="cursor-pointer transition-all hover:-translate-y-2 hover:shadow-lg"
                  onClick={() => openDemo(item.tab)}
                >
                  <CardContent className="p-8 text-center">
                    <item.icon className="mx-auto mb-4 h-16 w-16 text-blue-600" />
                    <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" onClick={() => openDemo("overview")} className="px-8 py-6 text-lg">
                <Play className="mr-2 h-5 w-5" />🚀 Detaylı Demo İzle - Ücretsiz
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">Kredi kartı gerektirmez • 2 dakikada kurulum</p>
            </div>
          </div>
        </section>
        {/* Packages */}
        <section id="packages" className="bg-gray-50 py-12 md:py-24 dark:bg-gray-900">
          <div className="container">
            <div className="mb-12 space-y-4 text-center">
              <Badge variant="secondary">💎 Özel Fiyatlar</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Size Özel Paketler</h2>
              <p className="text-xl text-muted-foreground">İhtiyacınıza uygun paketi seçin, hemen başlayın!</p>
            </div>
            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {packages.map((pkg) => (
                <Card
                  key={pkg.id}
                  className={`relative transition-all hover:shadow-xl ${pkg.popular ? "scale-105 border-2 border-blue-500" : ""
                    }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute left-1/2 top-3 -translate-x-1/2 transform">En Popüler</Badge>
                  )}
                  <CardContent className="p-8 text-center">
                    <h3 className="mb-2 text-2xl font-bold">{pkg.name}</h3>
                    <p className="mb-6 text-muted-foreground">{pkg.subtitle}</p>
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-blue-600">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</div>
                      <div className="text-sm text-muted-foreground">veya {pkg.monthlyPrice} 12 ay taksit</div>
                      <Badge variant="destructive" className="mt-2">
                        %{pkg.discount} İndirim
                      </Badge>
                    </div>
                    <Card className="mb-6 border-green-200 bg-green-50">
                      <CardContent className="p-3">
                        <div className="font-semibold text-green-800">💰 {pkg.savings}</div>
                      </CardContent>
                    </Card>
                    <div className="mb-8 space-y-3 text-left">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" size="lg" onClick={() => handlePackageSelect(pkg)}>
                      <Rocket className="mr-2 h-4 w-4" />
                      Hemen Başla
                    </Button>
                    <p className="mt-2 text-xs text-muted-foreground">🛡️ 30 gün para iade garantisi</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <p className="mb-4 text-lg">🤔 Hangi paket size uygun emin değil misiniz?</p>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Ücretsiz Danışmanlık Al
              </Button>
            </div>
          </div>
        </section>
        {/* Features */}
        <section className="py-12 md:py-24">
          <div className="container">
            <div className="mb-12 space-y-4 text-center">
              <Badge variant="secondary">⚡ Özellikler</Badge>
              <h2 className="text-3xl font-bold md:text-4xl">Neden Hotalyze?</h2>
              <p className="text-xl text-muted-foreground">Sektörde öncü teknolojiler ile fark yaratıyoruz</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {whyHotalyzeFeatures.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="mb-4 text-4xl">{feature.icon}</div>
                    <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 text-white md:py-24">
          <div className="container text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">🚀 Hemen Başlayın, Farkı Görün!</h2>
            <p className="mb-8 text-xl opacity-90">
              Binlerce otel sahibi zaten Hotalyze kullanıyor. Siz de geride kalmayın!
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" onClick={() => openDemo("overview")} className="px-8 py-6 text-lg">
                <Play className="mr-2 h-5 w-5" />
                Ücretsiz Demo İzle
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("packages")}
                className="border-white px-8 py-6 text-lg text-white hover:bg-white hover:text-blue-600"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Paketi Seç & Başla
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-80">💳 Kredi kartı gerektirmez • ⚡ 2 dakikada kurulum</p>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 py-12 text-white">
          <div className="container">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div>
                <div className="mb-4 flex items-center space-x-2">
                  <BarChart3 className="h-8 w-8 text-blue-400" />
                  <span className="text-2xl font-bold">Hotalyze</span>
                </div>
                <p className="mb-4 text-gray-400">
                  Otel yorumlarını analiz ederek işletmenizin büyümesine katkıda bulunuyoruz.
                </p>
                <div className="flex space-x-2">
                  <Badge variant="secondary">⭐ 4.9/5</Badge>
                  <Badge variant="secondary">🏆 #1 Platform</Badge>
                </div>
              </div>
              {["Hizmetler", "Şirket", "Kaynaklar"].map((section) => (
                <div key={section}>
                  <h4 className="mb-4 font-semibold text-blue-400">{section}</h4>
                  <div className="space-y-2">
                    {["Analiz", "Raporlar", "API", "Destek"].map((item) => (
                      <div key={item} className="cursor-pointer text-gray-400 hover:text-white">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-8 bg-gray-700" />
            <div className="text-center text-gray-400">
              <p>&copy; 2025 Hotalyze. Tüm hakları saklıdır. 🇹🇷 Türkiye'de tasarlandı.</p>
            </div>
          </div>
        </footer>
        {/* WhatsApp Floating Button */}
        <Button
          size="icon"
          className="fixed bottom-20 left-4 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600"
          onClick={() => window.open("https://wa.me/905059982093", "_blank")}
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </Button>
        {/* Scroll to Top Button */}
        <ScrollToTop />
        {/* Modals */}
        <PurchaseModal
          open={showPurchaseForm}
          onClose={() => setShowPurchaseForm(false)}
          selectedPackage={selectedPackage}
          formData={formData}
          setFormData={setFormData}
        />
        <DemoModal
          open={showDemo}
          onClose={() => setShowDemo(false)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
