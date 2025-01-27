import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

interface FlippableCardProps {
    imagePath: string;
    description1: string;
    description2: string;
    title: string;
}

const FlippableCard: React.FC<FlippableCardProps> = ({ imagePath, title, description1, description2  }) => {
    return (
    <div className="flex items-center justify-center w-64 h-64">
        <div className="card w-full h-full">
            <div className="card-inner w-full h-full">
                <div className="front w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center backface-hidden">
                    <Card className="flex flex-col items-center justify-center h-full w-full text-center p-4">
                        <Image 
                            src={imagePath} 
                            width={64} 
                            height={64} 
                            alt="SmokelessCoals" 
                            className="mb-4"
                        />
                        <CardHeader className="space-y-2">
                            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                            <CardDescription className="text-sm text-gray-600">
                                {description1}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
                <div className="back w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center backface-hidden transform rotate-y-180">
                    <Card className="flex flex-col items-center justify-center h-full w-full text-center p-4">
                        <CardHeader className="space-y-2">
                            <CardDescription className="text-sm text-gray-600">
                                {description2}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FlippableCard