'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Coffee, Bean, IndianRupee, User, Phone, Package, Mail, MapPin } from 'lucide-react'
import Head from 'next/head'

// Mock data for coffee prices (replace with actual data fetching in production)

export function CoffeePriceAppComponent() {
  const [selectedCoffee, setSelectedCoffee] = useState('')
  const [selectedProcessing, setSelectedProcessing] = useState('')
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [quantity, setQuantity] = useState('')
  const [showPrice, setShowPrice] = useState(false);

  const handleCoffeeSelection = (value: string) => {
    setSelectedCoffee(value)
    setSelectedProcessing('')
    setShowBookingForm(false)
  }

  const handleProcessingSelection = (value: string) => {
    setSelectedProcessing(value)
    setShowPrice(true);
    setShowBookingForm(false)
  }

  const handleBookNow = () => {
    setShowBookingForm(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate appending to Excel sheet (replace with actual Excel operations)
    console.log('Booking:', { name, phone, quantity, selectedCoffee, selectedProcessing, price })
    alert(`Thank you, ${name}! Your order for ${quantity}kg of ${selectedCoffee} (${selectedProcessing}) has been placed.`)
    setName('')
    setPhone('')
    setQuantity('')
    setShowBookingForm(false)
  }

  const price = 400;

  return (
    <>
      <Head>
        <title>Premium Coffee Bean Prices | Vasavi Coffee</title>
        <meta name="description" content="Check daily prices for premium coffee beans. Choose from Arabica and Robusta, with cherry and parchment processing options." />
        <meta name="keywords" content="coffee, coffee beans, Arabica, Robusta, cherry, parchment, coffee prices, Vasavi Coffee" />
      </Head>
      <div className="min-h-screen flex flex-col bg-[#f9f5f0] text-[#2c2c2c]">
        <header className="bg-[#2c2c2c] text-white py-6">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">Vasavi Coffee</span>
            </div>
            <nav>
              <ul className="flex space-x-6 text-sm uppercase tracking-wider">
                <li><a href="#" className="hover:text-[#c7a17a]">Home</a></li>
                <li><a href="#" className="hover:text-[#c7a17a]">About</a></li>
                <li><a href="#" className="hover:text-[#c7a17a]">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-[#8b4513] mb-12">Daily Coffee Bean Prices</h1>
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="p-6 sm:p-10 space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-[#8b4513] mb-4">Select Coffee Type</h2>
                  <RadioGroup value={selectedCoffee} onValueChange={handleCoffeeSelection} className="flex flex-wrap gap-4">
                    {['arabica', 'robusta'].map((coffee) => (
                      <div key={coffee} className="flex-1 min-w-[150px]">
                        <RadioGroupItem value={coffee} id={coffee} className="peer sr-only" />
                        <Label
                          htmlFor={coffee}
                          className="flex flex-col items-center justify-between rounded-lg border-2 border-[#d2b48c] bg-white p-4 hover:bg-[#fff8e7] peer-data-[state=checked]:border-[#8b4513] peer-data-[state=checked]:bg-[#fff8e7] cursor-pointer transition-all"
                        >
                          <Coffee className="mb-3 h-6 w-6 text-[#8b4513]" />
                          <span className="text-sm font-medium capitalize">{coffee}</span>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {selectedCoffee && (
                  <div>
                    <h2 className="text-2xl font-semibold text-[#8b4513] mb-4">Select Processing Method</h2>
                    <RadioGroup value={selectedProcessing} onValueChange={handleProcessingSelection} className="flex flex-wrap gap-4">
                      {['cherry', 'parchment'].map((processing) => (
                        <div key={processing} className="flex-1 min-w-[150px]">
                          <RadioGroupItem value={processing} id={processing} className="peer sr-only" />
                          <Label
                            htmlFor={processing}
                            className="flex flex-col items-center justify-between rounded-lg border-2 border-[#d2b48c] bg-white p-4 hover:bg-[#fff8e7] peer-data-[state=checked]:border-[#8b4513] peer-data-[state=checked]:bg-[#fff8e7] cursor-pointer transition-all"
                          >
                            <Bean className="mb-3 h-6 w-6 text-[#8b4513]" />
                            <span className="text-sm font-medium capitalize">{processing}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                )}

                {showPrice && (
                  <div className="mt-8 p-6 bg-[#fff8e7] rounded-lg shadow-inner">
                    <h2 className="text-2xl font-semibold text-[#8b4513] mb-4">Todays Price</h2>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <IndianRupee className="h-4 w-4 text-[#8b4513]" />
                        <span className="text-xl font-bold text-[#8b4513]">{price.toFixed(2)}</span>
                        <span className="text-sm text-[#a0522d]">per kg</span>
                      </div>
                      <Button onClick={handleBookNow} className="bg-[#8b4513] hover:bg-[#a0522d] text-white">
                        Book Now
                      </Button>
                    </div>
                  </div>
                )}

                {showBookingForm && (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <h2 className="text-2xl font-semibold text-[#8b4513] mb-4">Booking Form</h2>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-[#8b4513]">Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8b4513]" />
                          <Input 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className="pl-10 border-[#d2b48c] focus:border-[#8b4513] focus:ring-[#8b4513]"
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-[#8b4513]">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8b4513]" />
                          <Input 
                            id="phone" 
                            type="tel" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            className="pl-10 border-[#d2b48c] focus:border-[#8b4513] focus:ring-[#8b4513]"
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="quantity" className="text-[#8b4513]">Quantity (kg)</Label>
                        <div className="relative">
                          <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8b4513]" />
                          <Input 
                            id="quantity" 
                            type="number" 
                            min="1" 
                            value={quantity} 
                            onChange={(e) => setQuantity(e.target.value)} 
                            className="pl-10 border-[#d2b48c] focus:border-[#8b4513] focus:ring-[#8b4513]"
                            required 
                          />
                        </div>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-[#8b4513] hover:bg-[#a0522d] text-white">
                      Confirm Booking
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-[#2c2c2c] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p className="text-[#a0a0a0]">Vasavi Coffee is dedicated to bringing you the finest coffee beans from Chikkamagaluru. Our commitment to quality and sustainability ensures a superior coffee experience.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-[#a0a0a0]">
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-[#c7a17a]" />
                    <span>+91 1234567890</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-[#c7a17a]" />
                    <span>info@vasavicoffee.com</span>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-[#c7a17a]" />
                    <span>Chikkamagaluru, Karnataka, India</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#a0a0a0] hover:text-[#c7a17a]">Facebook</a>
                  <a href="#" className="text-[#a0a0a0] hover:text-[#c7a17a]">Twitter</a>
                  <a href="#" className="text-[#a0a0a0] hover:text-[#c7a17a]">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#4c4c4c] text-center text-[#a0a0a0]">
              <p>&copy; {new Date().getFullYear()} Vasavi Coffee. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
