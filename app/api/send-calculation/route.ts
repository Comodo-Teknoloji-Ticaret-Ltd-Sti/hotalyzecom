import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { hotelName, email, commentCount, hotelRoomCount, siteCount, calculatedPrice } = body

        const emailContent = `
Yeni Fiyat Hesaplama Talebi

Otel Bilgileri:
- Otel Adı: ${hotelName}
- E-posta: ${email}

Hesaplama Detayları:
- Yorum Sayısı: ${commentCount}
- Otel Oda Sayısı: ${hotelRoomCount}
- Site Sayısı: ${siteCount}
- Hesaplanan Fiyat: ${calculatedPrice} ₺

Hesaplama Formülü: (${commentCount} × 0.5) + (${hotelRoomCount} × 0.2) + (${siteCount} × 1) + 150 = ${calculatedPrice} ₺

Tarih: ${new Date().toLocaleString("tr-TR")}
    `

        // For now, we'll simulate the email sending and log the content
        console.log("Email to be sent to info@comodoteknoloji.com:")
        console.log(emailContent)

        // Simulate email sending delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        return NextResponse.json({
            success: true,
            message: "Hesaplama bilgileri başarıyla gönderildi",
        })
    } catch (error) {
        console.error("Error sending calculation:", error)
        return NextResponse.json({ success: false, message: "Bir hata oluştu" }, { status: 500 })
    }
}
