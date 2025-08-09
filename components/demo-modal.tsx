"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Star, X, InfoIcon as Analytics } from "lucide-react"
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area,
} from "recharts"
import { CustomTooltip } from "./custom-tooltip"
import {
  sentimentData,
  departmentData,
  trendData,
  revenueData,
  sampleReviews,
  heroStats,
  platformPerformanceData,
} from "@/lib/data"

interface DemoModalProps {
  open: boolean
  onClose: () => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

export const DemoModal: React.FC<DemoModalProps> = ({ open, onClose, activeTab, setActiveTab }) => {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "Pozitif":
        return "bg-green-100 text-green-800"
      case "Negatif":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="fixed inset-0 h-full w-full overflow-hidden p-0
                   data-[state=open]:animate-in data-[state=closed]:animate-out
                   data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                   data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right
                   translate-x-0 translate-y-0 sm:max-w-full sm:rounded-none" // Düzeltme: inset-0, translate-x-0 translate-y-0 eklendi
      >
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Analytics className="h-8 w-8 text-blue-600" />
              <div>
                <DialogTitle className="text-2xl font-bold">Canlı Demo - Hotalyze</DialogTitle>
                <p className="text-gray-600">Gerçek verilerle analiz örnekleri</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview" className="text-xs sm:text-sm">
                📊 Genel
              </TabsTrigger>
              <TabsTrigger value="sentiment" className="text-xs sm:text-sm">
                💭 Duygu
              </TabsTrigger>
              <TabsTrigger value="departments" className="text-xs sm:text-sm">
                🏢 Departman
              </TabsTrigger>
              <TabsTrigger value="roi" className="text-xs sm:text-sm">
                💰 ROI
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs sm:text-sm">
                📝 Yorumlar
              </TabsTrigger>
            </TabsList>
            <div className="mt-6 max-h-[70vh] overflow-y-auto">
              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {heroStats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.number}</p>
                            <p className="text-xs text-green-600">{stat.change}</p>
                          </div>
                          <stat.icon className={`h-8 w-8 ${stat.color}`} />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Aylık Trend</CardTitle>
                      <CardDescription>Pozitif ve negatif yorum trendleri</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={trendData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CustomTooltip />
                            <Legend />
                            <Line type="monotone" dataKey="positive" stroke="#22c55e" strokeWidth={3} name="Pozitif" />
                            <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={3} name="Negatif" />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Platform Performansı</CardTitle>
                      <CardDescription>Hangi platformda daha iyi performans gösteriyorsunuz?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {platformPerformanceData.map((platform, index) => (
                        <div key={index} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
                          <div>
                            <p className="font-semibold">{platform.platform}</p>
                            <p className="text-sm text-gray-600">{platform.reviews} yorum</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold">{platform.score}</p>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              {platform.trend}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="sentiment" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Duygu Dağılımı</CardTitle>
                      <CardDescription>Yorumların genel duygu analizi</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={sentimentData}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {sentimentData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <CustomTooltip />
                            <Legend />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Duygu Detayları</CardTitle>
                      <CardDescription>Her duygu kategorisinin yüzdesel dağılımı</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {sentimentData.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">{item.name}</span>
                            <span className="text-xl font-bold">{item.value}%</span>
                          </div>
                          <Progress value={item.value} className="h-2" />
                        </div>
                      ))}
                      <Card className="rounded-lg border-blue-200 bg-blue-50">
                        <CardContent className="p-4">
                          <h4 className="mb-2 font-semibold text-blue-800">💡 AI Önerisi</h4>
                          <p className="text-sm text-blue-700">
                            Pozitif yorumlarınız çok iyi! Ancak negatif yorumların %60'ı "oda temizliği" konusunda. Bu
                            alana odaklanarak genel memnuniyeti %85'e çıkarabilirsiniz.
                          </p>
                        </CardContent>
                      </Card>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="departments">
                <Card>
                  <CardHeader>
                    <CardTitle>Departman Performans Analizi</CardTitle>
                    <CardDescription>Her departmanın pozitif ve negatif yorum oranları</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsBarChart
                          data={departmentData}
                          layout="horizontal" // Düzeltme: Dikey çubuklar için layout="horizontal"
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }} // Marjları güncelledik
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="department" type="category" /> {/* X ekseni departmanlar için */}
                          <YAxis type="number" /> {/* Y ekseni değerler için */}
                          <CustomTooltip />
                          <Legend />
                          <Bar dataKey="positive" fill="#22c55e" name="Pozitif" />
                          <Bar dataKey="negative" fill="#ef4444" name="Negatif" />
                        </RechartsBarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="roi">
                <Card>
                  <CardHeader>
                    <CardTitle>ROI Analizi - Gelir Karşılaştırması</CardTitle>
                    <CardDescription>Hotalyze kullanmadan önce ve sonra gelir karşılaştırması</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={revenueData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <CustomTooltip />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="before"
                            stackId="1"
                            stroke="#94a3b8"
                            fill="#94a3b8"
                            fillOpacity={0.6}
                            name="Önceki Gelir"
                          />
                          <Area
                            type="monotone"
                            dataKey="after"
                            stackId="2"
                            stroke="#22c55e"
                            fill="#22c55e"
                            fillOpacity={0.8}
                            name="Mevcut Gelir"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews">
                <Card>
                  <CardHeader>
                    <CardTitle>Örnek Yorumlar</CardTitle>
                    <CardDescription>Gerçek müşteri yorumları ve AI analizi</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {sampleReviews.map((review) => (
                      <div key={review.id} className="space-y-3 rounded-lg border p-4">
                        <div className="flex items-start space-x-3">
                          <Avatar>
                            <AvatarFallback className="bg-blue-600 text-white">{review.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <h4 className="font-semibold">{review.user}</h4>
                              <div className="flex items-center space-x-2">
                                <Badge variant="outline">{review.platform}</Badge>
                                <Badge className={getSentimentColor(review.sentiment)}>{review.sentiment}</Badge>
                              </div>
                            </div>
                            <div className="mt-1 flex items-center space-x-2">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "fill-current text-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.text}</p>
                        <div className="rounded-lg bg-blue-50 p-3">
                          <p className="text-sm text-blue-700">
                            <strong>AI Analizi:</strong> İlgili Departmanlar: {review.department}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
