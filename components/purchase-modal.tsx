"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Star, Rocket } from "lucide-react"
import type { PackageItem } from "@/lib/data"

interface PurchaseModalProps {
  open: boolean
  onClose: () => void
  selectedPackage: PackageItem | null
  formData: {
    name: string
    email: string
    company: string
    phone: string
  }
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string
      email: string
      company: string
      phone: string
    }>
  >
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({
  open,
  onClose,
  selectedPackage,
  formData,
  setFormData,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`🎉 Tebrikler ${formData.name}! ${selectedPackage?.name} paketiniz için ödeme işlemi başlatılıyor...`)
    onClose()
  }

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  if (!selectedPackage) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="space-y-2 text-center">
            <Avatar className="mx-auto h-16 w-16 bg-blue-600">
              <AvatarFallback className="text-white">
                <Star className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <DialogTitle className="text-xl">{selectedPackage.name} Paketi</DialogTitle>
            <p className="text-gray-600">Bilgilerinizi doldurun, hemen başlayın!</p>
          </div>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ad Soyad</Label>
            <Input id="name" required value={formData.name} onChange={handleInputChange("name")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-posta</Label>
            <Input id="email" type="email" required value={formData.email} onChange={handleInputChange("email")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Şirket/Otel Adı</Label>
            <Input id="company" required value={formData.company} onChange={handleInputChange("company")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon</Label>
            <Input id="phone" required value={formData.phone} onChange={handleInputChange("phone")} />
          </div>
          <Card className="bg-blue-50">
            <CardContent className="p-4">
              <h4 className="mb-2 font-semibold">Paket Özeti</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{selectedPackage.name} Paketi</span>
                  <span className="font-semibold text-blue-600">{selectedPackage.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Normal Fiyat</span>
                  <span className="line-through text-gray-600">{selectedPackage.originalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Tasarrufunuz</span>
                  <span className="font-semibold text-green-600">{selectedPackage.savings}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex space-x-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              İptal
            </Button>
            <Button type="submit" className="flex-1">
              <Rocket className="mr-2 h-4 w-4" />
              Hemen Başla
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
