import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/logo.png"; // You need to upload your logo as public/logo.png

export default function Home() {
  return (
    <div className="p-6 space-y-10">
      <header className="text-center">
        <Image src={logo} alt="Kinaby Ventures Logo" width={100} height={100} className="mx-auto mb-4" />
        <motion.h1 className="text-4xl font-bold text-blue-800" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Kinaby Ventures Limited
        </motion.h1>
        <p className="text-lg mt-2">Ireland’s Trusted Nurse Staffing Agency</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Our Services</h2>
            <ul className="list-disc ml-5">
              <li>Temporary Nurse Placements</li>
              <li>Emergency Cover</li>
              <li>Long-Term Contracts</li>
              <li>Future Home Care Expansion</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
            <ul className="list-disc ml-5">
              <li>Rigorous Vetting Process</li>
              <li>Fast Response Times</li>
              <li>Fully NMBI Registered Nurses</li>
              <li>Compliance with HSE & HIQA</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Get In Touch</h2>
            <p>Email: yawamankwaah386@gmail.com</p>
            <p>Phone: +353 86 123 4567</p>
            <p>Address: 47 The Glen, Kilnacourt Woods, Portarlington</p>
            <Button className="mt-4 w-full">Contact Us</Button>
          </CardContent>
        </Card>
      </section>

      <section className="bg-gray-100 p-6 rounded-2xl shadow-inner">
        <h2 className="text-2xl font-bold text-center mb-4">Nurse Registration Form</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" type="text" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="text" required />
          </div>
          <div>
            <Label htmlFor="nmbi">NMBI Pin</Label>
            <Input id="nmbi" name="nmbi" type="text" required />
          </div>
          <Button type="submit" className="w-full">Register</Button>
        </form>
      </section>

      <footer className="text-center text-gray-600 text-sm mt-10">
        &copy; {new Date().getFullYear()} Kinaby Ventures Limited. All rights reserved.
      </footer>
    </div>
  );
}
