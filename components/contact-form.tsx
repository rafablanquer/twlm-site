import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowRight } from 'lucide-react';

export function ContactForm() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
      <svg className="absolute -top-6 left-0 w-full h-6" viewBox="0 0 400 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 24C50 0 350 0 400 24H0Z" fill="#6ee7b7" fillOpacity="0.15" />
      </svg>
      <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">Contacta con nosotros</h3>

      <form
        className="space-y-6"
        action="https://formspree.io/f/xkgbwlwq"
        method="POST">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Empresa</Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Nombre de tu empresa"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+34 600 000 000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sector">Sector</Label>
          <select
            id="sector"
            name="sector"
            className="w-full p-2 border rounded-md bg-white text-gray-900 appearance-none"
            required
          >
            <option value="">Selecciona tu sector</option>
            <option value="hotel">Hotelería y turismo</option>
            <option value="agro">Agricultura y alimentación</option>
            <option value="industry">Industria</option>
            <option value="retail">Comercio y retail</option>
            <option value="public">Administración pública</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="employees">Número de empleados</Label>
          <select
            id="employees"
            name="employees"
            className="w-full p-2 border rounded-md bg-white text-gray-900 appearance-none"
            required
          >
            <option value="">Selecciona el tamaño de tu empresa</option>
            <option value="1-49">1-49 empleados</option>
            <option value="50-249">50-249 empleados</option>
            <option value="250-499">250-499 empleados</option>
            <option value="500+">500+ empleados</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">¿Qué necesitas?</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Cuéntanos brevemente tu situación y necesidades"
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white"
        >
          Solicitar diagnóstico CSRD
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
        </p>
      </form>
    </div>
  );
}
