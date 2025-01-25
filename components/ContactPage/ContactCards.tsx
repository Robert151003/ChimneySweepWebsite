import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';

const ContactCards = () => {
  return (
    <section id="about" className="my-8 max-w-4xl mx-auto px-4">
          <div className="container mx-auto flex flex-wrap justify-center gap-6">

            <Link href='tel:+447709568280'>
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <img 
                    src="/Icons/mobile.png" 
                    width={64} 
                    height={64} 
                    alt="SmokelessCoals" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">Mobile</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    +44 7709 569 290
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>

            <Link href="mailto:Robert.forsythe1234@gmail.com">
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <img 
                    src="/Icons/email.png" 
                    width={64} 
                    height={64} 
                    alt="Tools" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">E-mail</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    Robert.forsythe1234@gmail.com
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>
          </div>
        </section>
  )
}

export default ContactCards