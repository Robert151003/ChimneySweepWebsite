import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import Image from 'next/image';

const ContactCards = () => {
  return (
    <section id="about" className="my-8 max-w-4xl mx-auto px-4">
          <div className="container mx-auto flex flex-wrap justify-center gap-6">

            <Link href='tel:+447545976100'>
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <Image 
                    src="/Icons/mobile.png" 
                    width={64} 
                    height={64} 
                    alt="SmokelessCoals" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">Mobile</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    +44 7545 976 100
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>

            <Link href="mailto:david.odonnell0101@gmail.com">
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <Image 
                    src="/Icons/email.png" 
                    width={64} 
                    height={64} 
                    alt="Tools" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">E-mail</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    David.odonnell0101@gmail.com
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>
          </div>
        </section>
  )
}

export default ContactCards