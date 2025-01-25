import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const QuickLinks = () => {
  return (
    <section id="about" className="my-8 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-8 text-center">Check Out Our Services</h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-6">
        <a href='/Services'>
            <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
            <img 
                src="/Icons/chimney.png" 
                width={64} 
                height={64} 
                alt="Chimney" 
                className="mb-4"
            />
            <CardHeader className="space-y-2">
                <CardTitle className="text-lg font-semibold">Chimney Sweep Services</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                Keep your chimney safe and soot free with regular chimney sweeping.
                </CardDescription>
            </CardHeader>
            </Card>
        </a>
        <a href='/Services'>
            <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
            <img 
                src="/Icons/tools.png" 
                width={64} 
                height={64} 
                alt="Tools" 
                className="mb-4"
            />
            <CardHeader className="space-y-2">
                <CardTitle className="text-lg font-semibold">Chimney Servicing & Repairs</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                Ensure your chimney stays in top condition with our fast and friendly service.
                </CardDescription>
            </CardHeader>
            </Card>
        </a>
        <a href='/Services'>
            <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
            <img 
                src="/Icons/woodburner.png" 
                width={64} 
                height={64} 
                alt="WoodBurner" 
                className="mb-4"
            />
            <CardHeader className="space-y-2">
                <CardTitle className="text-lg font-semibold">Wood Burner Servicing & Repairs</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                Look after your wood burner to guarantee it remains safe and efficient.
                </CardDescription>
            </CardHeader>
            </Card>
        </a>
      </div>
    </section>
  )
}

export default QuickLinks;
