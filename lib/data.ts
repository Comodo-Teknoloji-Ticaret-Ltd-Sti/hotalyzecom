import type React from "react"
import { PieChart, Building2, InfoIcon as Analytics, TrendingUp, Users } from "lucide-react"

export interface SentimentDataItem {
  name: string
  value: number
  color: string
}

export const sentimentData: SentimentDataItem[] = [
  { name: "Pozitif", value: 78, color: "#22c55e" },
  { name: "Negatif", value: 15, color: "#ef4444" },
  { name: "Nötr", value: 7, color: "#6b7280" },
]

export interface DepartmentDataItem {
  department: string
  positive: number
  negative: number
}

export const departmentData: DepartmentDataItem[] = [
  { department: "Personel", positive: 87, negative: 13 },
  { department: "Yemek", positive: 73, negative: 27 },
  { department: "Temizlik", positive: 92, negative: 8 },
  { department: "Oda", positive: 68, negative: 32 },
  { department: "Hizmet", positive: 83, negative: 17 },
]

export interface TrendDataItem {
  month: string
  positive: number
  negative: number
}

export const trendData: TrendDataItem[] = [
  { month: "Oca", positive: 68, negative: 32 },
  { month: "Şub", positive: 72, negative: 28 },
  { month: "Mar", positive: 78, negative: 22 },
  { month: "Nis", positive: 82, negative: 18 },
  { month: "May", positive: 87, negative: 13 },
  { month: "Haz", positive: 81, negative: 19 },
]

export interface RevenueDataItem {
  month: string
  before: number
  after: number
}

export const revenueData: RevenueDataItem[] = [
  { month: "Oca", before: 105000, after: 142000 },
  { month: "Şub", before: 98000, after: 148000 },
  { month: "Mar", before: 115000, after: 165000 },
  { month: "Nis", before: 108000, after: 172000 },
  { month: "May", before: 125000, after: 188000 },
  { month: "Haz", before: 118000, after: 203000 },
]

export interface ReviewItem {
  id: number
  user: string
  platform: string
  date: string
  rating: number
  text: string
  sentiment: string
  department: string
  avatar: string
}

export const sampleReviews: ReviewItem[] = [
  {
    id: 1,
    user: "Ahmet Kaya",
    platform: "Google",
    date: "2024-01-15",
    rating: 5,
    text: "Personel çok ilgili ve yardımseverdi. Özellikle resepsiyon görevlileri her konuda destek oldular. Oda temizliği mükemmeldi, her gün düzenli olarak temizlendi. Kahvaltı çeşitliliği de oldukça iyiydi.",
    sentiment: "Pozitif",
    department: "Personel, Temizlik",
    avatar: "AK",
  },
  {
    id: 2,
    user: "Zeynep Demir",
    platform: "Booking.com",
    date: "2024-01-12",
    rating: 3,
    text: "Kahvaltı çeşitliliği çok iyiydi ancak yemek servis hızı biraz yavaştı. Odanın manzarası harikaydı ama klima sistemi düzgün çalışmıyordu. Genel olarak ortalama bir deneyimdi.",
    sentiment: "Karışık",
    department: "Yemek, Oda",
    avatar: "ZD",
  },
  {
    id: 3,
    user: "Mehmet Özkan",
    platform: "TripAdvisor",
    date: "2024-01-10",
    rating: 5,
    text: "Genel olarak çok memnun kaldık. Spa hizmetleri harika, masaj çok rahatlatıcıydı. Havuz alanı temiz ve ferahtı. Personel güler yüzlü ve yardımsever. Kesinlikle tekrar geliriz.",
    sentiment: "Pozitif",
    department: "Hizmet, Temizlik",
    avatar: "MÖ",
  },
  {
    id: 4,
    user: "Ayşe Yılmaz",
    platform: "Google",
    date: "2024-01-08",
    rating: 2,
    text: "Oda temizliği yetersizdi, banyoda saç telleri vardı. Klima çok gürültülüydü, gece uyuyamadık. Kahvaltıda yemekler soğuktu. Fiyat performans açısından hayal kırıklığı yaşadık.",
    sentiment: "Negatif",
    department: "Temizlik, Oda, Yemek",
    avatar: "AY",
  },
  {
    id: 5,
    user: "Can Demir",
    platform: "Booking.com",
    date: "2024-01-05",
    rating: 4,
    text: "Konum çok iyi, denize yakın. Personel samimi ve yardımsever. Odalar geniş ve konforlu. Sadece wifi biraz yavaştı, iş için kullanmakta zorlandık. Genel olarak güzel bir tatildi.",
    sentiment: "Pozitif",
    department: "Personel, Oda",
    avatar: "CD",
  },
]

export interface TestimonialItem {
  name: string
  role: string
  company: string
  content: string
  rating: number
  results: string
}

export const testimonials: TestimonialItem[] = [
  {
    name: "Mehmet Özkan",
    role: "Genel Müdür",
    company: "Antalya Palace Hotel",
    content:
      "Hotalyze sayesinde müşteri memnuniyetimizi %42 artırdık. Artık hangi alanlarda iyileştirme yapmamız gerektiğini tam olarak biliyoruz.",
    rating: 5,
    results: "+42% Müşteri Memnuniyeti",
  },
  {
    name: "Ayşe Demir",
    role: "Pazarlama Direktörü",
    company: "Bodrum Resort & Spa",
    content:
      "Rakip analizi özelliği sayesinde pazardaki konumumuzu net olarak görebiliyoruz. ROI'mız 3 ay içinde %280 arttı.",
    rating: 5,
    results: "+280% ROI Artışı",
  },
  {
    name: "Can Yılmaz",
    role: "İşletme Sahibi",
    company: "Kapadokya Cave Hotel",
    content:
      "Daha önce yorumları tek tek okumak zorundaydık. Şimdi tüm insights'ları dakikalar içinde alıyoruz. Zaman tasarrufu inanılmaz!",
    rating: 5,
    results: "90% Zaman Tasarrufu",
  },
]

export interface PackageItem {
  id: number
  name: string
  subtitle: string
  price: string
  originalPrice: string
  monthlyPrice: string
  discount: string
  features: string[]
  popular: boolean
  savings: string
}

export const packages: PackageItem[] = [
  {
    id: 1,
    name: "Starter",
    subtitle: "Küçük Oteller İçin",
    price: "2,999₺",
    originalPrice: "4,999₺",
    monthlyPrice: "299₺/ay",
    discount: "40",
    features: [
      "Google ve Booking.com yorumları",
      "Temel sentiment analizi",
      "Departman kategorilendirme",
      "Excel raporları",
      "Email destek",
      "Aylık güncelleme",
    ],
    popular: false,
    savings: "2,000₺ Tasarruf",
  },
  {
    id: 2,
    name: "Professional",
    subtitle: "Büyüyen İşletmeler İçin",
    price: "7,999₺",
    originalPrice: "12,999₺",
    monthlyPrice: "799₺/ay",
    discount: "38",
    features: [
      "Tüm platformlardan yorumlar",
      "Gelişmiş AI analizi",
      "Rekabet analizi",
      "Trend raporları",
      "API entegrasyonu",
      "Özel dashboard",
      "Öncelikli destek",
      "Haftalık güncelleme",
    ],
    popular: true,
    savings: "5,000₺ Tasarruf",
  },
  {
    id: 3,
    name: "Enterprise",
    subtitle: "Büyük Zincirler İçin",
    price: "19,999₺",
    originalPrice: "29,999₺",
    monthlyPrice: "1,999₺/ay",
    discount: "33",
    features: [
      "Sınırsız otel verisi",
      "AI-powered insights",
      "Gerçek zamanlı analiz",
      "Özelleştirilebilir raporlar",
      "Dedicated hesap yöneticisi",
      "White-label çözüm",
      "Günlük veri akışı",
      "7/24 telefon desteği",
      "Özel eğitim",
    ],
    popular: false,
    savings: "10,000₺ Tasarruf",
  },
]

export interface StatItem {
  icon: React.ElementType
  number: string
  label: string
  change: string
  color?: string
}

export const heroStats: StatItem[] = [
  { icon: Analytics, number: "52,847", label: "Analiz Edilen Yorum", change: "+1,347 Bu hafta" },
  { icon: Users, number: "247", label: "Mutlu Müşteri", change: "+15 Bu ay" },
  { icon: Building2, number: "28+", label: "Platform", change: "+3 Yeni eklenen" },
  { icon: TrendingUp, number: "98.9%", label: "Müşteri Memnuniyeti", change: "+2.8% Son 3 ay" },
]

export interface PlatformPerformanceItem {
  platform: string
  score: number
  reviews: number
  trend: string
}

export const platformPerformanceData: PlatformPerformanceItem[] = [
  { platform: "Google", score: 8.7, reviews: 1250, trend: "+5%" },
  { platform: "Booking.com", score: 8.2, reviews: 890, trend: "+3%" },
  { platform: "TripAdvisor", score: 8.9, reviews: 420, trend: "+8%" },
  { platform: "Zoover", score: 8.1, reviews: 220, trend: "+2%" },
]

export interface AnalysisFeatureItem {
  title: string
  description: string
  icon: React.ElementType
  tab: string
}

export const analysisFeatures: AnalysisFeatureItem[] = [
  {
    title: "Duygu Analizi",
    description: "Müşterileriniz gerçekte ne düşünüyor?",
    icon: PieChart,
    tab: "sentiment",
  },
  {
    title: "Departman Analizi",
    description: "Hangi departmanınız daha iyi performans gösteriyor?",
    icon: Building2,
    tab: "departments",
  },
  {
    title: "ROI Analizi",
    description: "Yatırımınızın geri dönüşü ne kadar?",
    icon: Analytics,
    tab: "roi",
  },
]

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export const whyHotalyzeFeatures: FeatureItem[] = [
  {
    icon: "🛡️",
    title: "%100 Güvenilir Veri",
    description: "Tüm verilerimiz gerçek otel yorumlarından elde edilir ve AI ile doğrulanır.",
  },
  {
    icon: "⚡",
    title: "Hızlı Teslimat",
    description: "Ödeme sonrası 24 saat içinde verileriniz hazır! Hemen başlayın.",
  },
  {
    icon: "📈",
    title: "Kanıtlanmış Sonuçlar",
    description: "Müşterilerimiz ortalama %42 gelir artışı yaşıyor. Siz de katılın!",
  },
  {
    icon: "👑",
    title: "Premium Destek",
    description: "7/24 Türkçe destek ekibimiz her zaman yanınızda. Hiç yalnız kalmayın.",
  },
  {
    icon: "🎯",
    title: "Aksiyon Odaklı",
    description: "Sadece rapor değil, ne yapmanız gerektiğini de söylüyoruz.",
  },
  {
    icon: "✨",
    title: "AI Destekli",
    description: "En gelişmiş yapay zeka teknolojileri ile daha akıllı analizler.",
  },
]
