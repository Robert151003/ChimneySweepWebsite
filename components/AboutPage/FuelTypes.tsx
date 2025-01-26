import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import Image from 'next/image';

const FuelTypes = () => {
    return (
        <section id="about" className="my-8 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center text-black">Fuel Types</h2>
          <div className="container mx-auto flex flex-wrap justify-center gap-6">

            <Link href='https://bigkproducts.co.uk/post/smokeless-coal-facts-for-you/?srsltid=AfmBOorz9cm4T-ZUS7IzXEH9EUSYbOrCYuPjmAc7qdUFAafZkAEJaWng' target="_blank" rel="noopener noreferrer">
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <Image 
                    src="/Icons/coal.png" 
                    width={64} 
                    height={64} 
                    alt="SmokelessCoals" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">Smokeless Coals</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    Sweep Frequency: At least once a year
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>

            <Link href='https://solidfuel.co.uk/wood-fuel-stoves-open-fires/#:~:text=It%20is%20important%20the%20logs,prevent%20the%20chimney%20functioning%20properly.' target="_blank" rel="noopener noreferrer">
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <Image 
                    src="/Icons/wood.png" 
                    width={64} 
                    height={64} 
                    alt="Tools" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">Wood</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    Sweep Frequency: Once a season when in use
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>

            <Link href='https://pearsonfuels.co.uk/the-characteristics-of-bituminous-coal/'>
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <Image 
                    src="/Icons/coal.png" 
                    width={64} 
                    height={64} 
                    alt="WoodBurner" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">Bitumous Coal</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    Sweep Frequency: Twice a year
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>
            <Link href='https://www.csia.org/blog/gas-oil-furnace-chimneys-what-you-need-to-know'>
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <Image 
                    src="/Icons/oil.png" 
                    width={64} 
                    height={64} 
                    alt="WoodBurner" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">Oil</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    Sweep Frequency: Once a year
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>

            <Link href='https://www.csia.org/blog/gas-oil-furnace-chimneys-what-you-need-to-know'>
                <Card className="flex flex-col items-center justify-center h-72 w-64 text-center p-4">
                <Image 
                    src="/Icons/gas.png" 
                    width={64} 
                    height={64} 
                    alt="WoodBurner" 
                    className="mb-4"
                />
                <CardHeader className="space-y-2">
                    <CardTitle className="text-lg font-semibold">Gas</CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                    Sweep Frequency: Once a year
                    </CardDescription>
                </CardHeader>
                </Card>
            </Link>
          </div>
        </section>
      )
}

export default FuelTypes