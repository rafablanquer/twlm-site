import { ArrowRight, Check, MessageSquareText, BarChart2, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Simplificado */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <MessageSquareText className="h-6 w-6 text-purple-500" />
            <span>TWLM</span>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm">Registrarse</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section - Simplificado */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-purple-950/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Comprende a tu audiencia en tiempo real
                  </h1>
                  <p className="text-muted-foreground">
                    Analiza tu chat de Twitch automáticamente, identifica temas populares y conecta mejor con tu
                    comunidad.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Prueba gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="bg-black rounded-t-xl p-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400 flex-1 text-center">TWLM</div>
                  </div>
                  <div className="p-4 bg-gray-900 h-full">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="bg-gray-800 rounded-lg p-3">
                        <h3 className="text-sm font-medium text-white mb-2">Temas populares</h3>
                        <div className="space-y-2">
                          <div className="bg-gray-700 rounded p-2">
                            <div className="text-xs text-white">Nuevo juego anunciado</div>
                            <div className="w-full bg-gray-600 h-2 rounded-full mt-1">
                              <div className="bg-purple-500 h-2 rounded-full w-4/5"></div>
                            </div>
                          </div>
                          <div className="bg-gray-700 rounded p-2">
                            <div className="text-xs text-white">Reacción al trailer</div>
                            <div className="w-full bg-gray-600 h-2 rounded-full mt-1">
                              <div className="bg-purple-500 h-2 rounded-full w-3/5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3">
                        <h3 className="text-sm font-medium text-white mb-2">Preguntas frecuentes</h3>
                        <div className="space-y-2">
                          <div className="bg-gray-700 rounded p-2">
                            <div className="text-xs text-white">¿Cuándo sale el DLC?</div>
                            <div className="text-xs text-gray-400 mt-1">12 menciones</div>
                          </div>
                          <div className="bg-gray-700 rounded p-2">
                            <div className="text-xs text-white">¿Jugarás con subs hoy?</div>
                            <div className="text-xs text-gray-400 mt-1">8 menciones</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Simplificado */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                Todo lo que necesitas para entender tu chat
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <BarChart2 className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Análisis en tiempo real</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Procesa mensajes del chat en lotes y obtén insights instantáneos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Clustering inteligente</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Agrupa automáticamente mensajes similares en temas y preguntas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-4">
                <div className="rounded-full bg-purple-100 p-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Actualización configurable</h3>
                <p className="text-center text-sm text-muted-foreground">
                  Configura el intervalo de actualización según tus necesidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works - Mejorado */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Integración sencilla en 3 pasos</h2>
              <p className="text-muted-foreground max-w-2xl">
                Servicio 100% en la nube. Sin instalaciones, sin configuraciones complejas, sin servidores propios.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  1
                </div>
                <h3 className="text-lg font-bold">Regístrate y conecta</h3>
                <p className="text-sm text-muted-foreground">
                  Crea tu cuenta y conecta tu canal de Twitch con OAuth. Todo desde tu navegador, sin descargas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  2
                </div>
                <h3 className="text-lg font-bold">Configura tu análisis</h3>
                <p className="text-sm text-muted-foreground">
                  Ajusta la frecuencia de análisis y personaliza qué temas quieres destacar. Todo funciona en la nube.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                  3
                </div>
                <h3 className="text-lg font-bold">Añade el widget a OBS</h3>
                <p className="text-sm text-muted-foreground">
                  Copia la URL del widget y añádela como fuente de navegador en OBS. Listo para streamear.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-8">
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Servicio en la nube</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Sin instalación local</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Configuración en minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Compatible con OBS</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section id="waitlist" className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm backdrop-blur-xl mb-6">
                <span className="text-purple-300">Early Access</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl/tight mb-6">
                Join the Waitlist for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 animate-gradient">
                  Access
                </span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                We&apos;re currently in private beta. Leave your email to be among the first to experience the future of
                AI-powered websites.
              </p>

              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-md opacity-70"></div>
                <div className="relative flex items-center bg-slate-900 border border-white/10 rounded-full p-1">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-white/50 px-4 py-3"
                    aria-label="Email address"
                  />
                  <Button className="rounded-full bg-gradient-to-r mr-4 from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 px-6 py-3">
                    Join Waitlist
                  </Button>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/60 text-sm">
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-400" />
                  <span>Early access to new features</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 mr-2 text-green-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Planes para cada tipo de streamer</h2>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-5">
               <div className="flex flex-col rounded-lg border p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-bold">Básico</h3>
                  <p className="text-xs text-muted-foreground">Para comenzar</p>
                </div>
                <div className="mb-2 flex items-baseline">
                  <span className="text-xl font-bold">€4.99</span>
                  <span className="text-xs text-muted-foreground">/mes</span>
                </div>
                <ul className="mb-4 space-y-1 text-xs">
                  <li>Hasta 200 mensajes/hora</li>
                  <li>Actualización cada 60s</li>
                  <li>Widget básico</li>
                </ul>
                <Button size="sm" className="mt-auto" variant="outline">
                  Comenzar
                </Button>
              </div>

               <div className="flex flex-col rounded-lg border p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-bold">Iniciante</h3>
                  <p className="text-xs text-muted-foreground">Streamers emergentes</p>
                </div>
                <div className="mb-2 flex items-baseline">
                  <span className="text-xl font-bold">€9.99</span>
                  <span className="text-xs text-muted-foreground">/mes</span>
                </div>
                <ul className="mb-4 space-y-1 text-xs">
                  <li>Hasta 500 mensajes/hora</li>
                  <li>Actualización cada 30s</li>
                  <li>Widget básico</li>
                  <li>Exportación básica</li>
                </ul>
                <Button size="sm" className="mt-auto" variant="outline">
                  Comenzar
                </Button>
              </div>

               <div className="flex flex-col rounded-lg border border-purple-600 bg-purple-50 dark:bg-purple-950/20 p-4 shadow-lg">
                <div className="mb-2">
                  <Badge className="mb-1">Popular</Badge>
                  <h3 className="text-lg font-bold">Profesional</h3>
                  <p className="text-xs text-muted-foreground">Streamers establecidos</p>
                </div>
                <div className="mb-2 flex items-baseline">
                  <span className="text-xl font-bold">€19.99</span>
                  <span className="text-xs text-muted-foreground">/mes</span>
                </div>
                <ul className="mb-4 space-y-1 text-xs">
                  <li>Hasta 2000 mensajes/hora</li>
                  <li>Actualización cada 10s</li>
                  <li>Widget personalizable</li>
                  <li>Exportación de datos</li>
                  <li>Soporte por email</li>
                </ul>
                <Button size="sm" className="mt-auto bg-purple-600 hover:bg-purple-700">
                  Comenzar
                </Button>
              </div>

               <div className="flex flex-col rounded-lg border p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-bold">Avanzado</h3>
                  <p className="text-xs text-muted-foreground">Creadores en crecimiento</p>
                </div>
                <div className="mb-2 flex items-baseline">
                  <span className="text-xl font-bold">€29.99</span>
                  <span className="text-xs text-muted-foreground">/mes</span>
                </div>
                <ul className="mb-4 space-y-1 text-xs">
                  <li>Hasta 5000 mensajes/hora</li>
                  <li>Actualización cada 5s</li>
                  <li>Widget personalizable</li>
                  <li>API básica</li>
                  <li>Soporte prioritario</li>
                </ul>
                <Button size="sm" className="mt-auto" variant="outline">
                  Comenzar
                </Button>
              </div>

               <div className="flex flex-col rounded-lg border p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-bold">Enterprise</h3>
                  <p className="text-xs text-muted-foreground">Grandes creadores</p>
                </div>
                <div className="mb-2 flex items-baseline">
                  <span className="text-xl font-bold">€49.99</span>
                  <span className="text-xs text-muted-foreground">/mes</span>
                </div>
                <ul className="mb-4 space-y-1 text-xs">
                  <li>Mensajes ilimitados</li>
                  <li>Actualización en tiempo real</li>
                  <li>API completa</li>
                  <li>Personalización total</li>
                  <li>Soporte dedicado</li>
                </ul>
                <Button size="sm" className="mt-auto" variant="outline">
                  Contactar
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA Section - Simplificado */}
        {/* <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Mejora tu stream hoy mismo</h2>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Comenzar ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section> */}
      </main>

      {/* Footer - Simplificado */}
      <footer className="border-t py-4">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <MessageSquareText className="h-5 w-5 text-purple-500" />
            <span>TWLM</span>
          </div>
          <p className="text-center text-xs text-muted-foreground">
            © 2025 TWLM. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
