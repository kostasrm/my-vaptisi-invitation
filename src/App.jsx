import { useState, useEffect } from 'react'
import { Button } from '../src/components/ui/button'
import { Card, CardContent } from '../src/components/ui/card'
import {
  MapPin,
  Calendar,
  Clock,
  Heart,
  Phone,
  Gift,
  Church,
} from 'lucide-react'
import pinkButterfly from '../src/assets/pink-butterfly.png'
import churchImage from '../src/assets/ekklisia.jpg'
import invitationCard from '../src/assets/prosklitirio.jpeg'

export default function BaptismInvitation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'>
      <div className='fixed inset-0 z-10 pointer-events-none'>
        <div
          className='absolute top-10 left-10 animate-bounce'
          style={{ animationDelay: '0s' }}
        >
          <img
            src={pinkButterfly}
            alt='Pink Butterfly'
            className='inline-block w-8 h-8'
          />
        </div>
        <div
          className='absolute top-20 right-20 animate-bounce'
          style={{ animationDelay: '0.5s' }}
        >
          <img
            src={pinkButterfly}
            alt='Pink Butterfly'
            className='inline-block w-8 h-8'
          />
        </div>
        <div
          className='absolute bottom-20 left-1/4 animate-bounce'
          style={{ animationDelay: '1s' }}
        >
          <img
            src={pinkButterfly}
            alt='Pink Butterfly'
            className='inline-block w-8 h-8'
          />
        </div>
      </div>

      <div className='fixed inset-0 pointer-events-none z-5'>
        <div className='text-pink-300 floating-petal petal-1'>🌸</div>
        <div className='text-purple-300 floating-petal petal-2'>🌺</div>
        <div className='text-blue-300 floating-petal petal-3'>💙</div>
        <div className='text-pink-200 floating-petal petal-4'>🌸</div>
        <div className='text-purple-200 floating-petal petal-5'>🌺</div>
        <div className='text-blue-200 floating-petal petal-6'>💙</div>
        <div className='text-pink-300 floating-petal petal-7'>🌸</div>
        <div className='text-purple-300 floating-petal petal-8'>🌺</div>
      </div>

      <div className='fixed inset-0 pointer-events-none z-5'>
        <div className='absolute text-yellow-300 top-20 left-10 twinkle'>
          ⭐
        </div>
        <div
          className='absolute text-pink-300 top-32 right-20 twinkle'
          style={{ animationDelay: '1s' }}
        >
          ⭐
        </div>
        <div
          className='absolute text-purple-300 top-60 left-1/4 twinkle'
          style={{ animationDelay: '2s' }}
        >
          ⭐
        </div>
        <div
          className='absolute text-blue-300 top-80 right-1/3 twinkle'
          style={{ animationDelay: '0.5s' }}
        >
          ⭐
        </div>
      </div>

      <header className='relative flex items-center justify-center min-h-screen px-4 py-8'>
        <div
          className={`text-center transform transition-all duration-2000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className='relative mb-8'>
            <div className='relative w-48 h-48 mx-auto mb-6 dreamy-float'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 blur-3xl opacity-70 animate-gentle-pulse'></div>
              <div className='relative z-10 transition-all duration-500 cursor-pointer text-8xl main-butterfly hover:animate-wiggle'>
                <img
                  src={pinkButterfly}
                  alt='Pink Butterfly'
                  className='inline-block w-20 h-20'
                />
              </div>
              <div
                className='absolute text-3xl text-yellow-300 -top-4 -right-4 sparkle'
                style={{ animationDelay: '0s' }}
              >
                ✨
              </div>
              <div
                className='absolute text-2xl text-pink-300 -bottom-4 -left-4 sparkle'
                style={{ animationDelay: '1s' }}
              >
                ✨
              </div>
              <div
                className='absolute text-xl text-purple-300 top-1/2 -right-6 sparkle'
                style={{ animationDelay: '0.5s' }}
              >
                ✨
              </div>
              <div
                className='absolute text-xl text-blue-300 top-1/4 -left-5 sparkle'
                style={{ animationDelay: '1.5s' }}
              >
                ✨
              </div>
              <div
                className='absolute text-lg text-yellow-200 bottom-1/4 right-2 sparkle'
                style={{ animationDelay: '2s' }}
              >
                ✨
              </div>
              <div
                className='absolute text-lg text-pink-200 top-3/4 left-2 sparkle'
                style={{ animationDelay: '2.5s' }}
              >
                ✨
              </div>
            </div>
          </div>

          <h1 className='mb-8 text-2xl leading-tight text-gray-800 md:text-4xl lg:text-6xl'>
            <div className='mb-2'>
              <span className='text-3xl font-elegant md:text-5xl lg:text-7xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient-shift'>
                Σας προσκαλούμε στην βάπτιση της
              </span>
            </div>
            <div className='mt-2'>
              <span className='text-2xl font-bold text-transparent font-elegant md:text-4xl lg:text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text dreamy-float'>
                μικρής μας πριγκίπισσας
              </span>
            </div>
          </h1>

          <div className='flex justify-center mb-8 space-x-8'>
            <Heart
              className='w-10 h-10 text-pink-300 floating-hearts'
              fill='currentColor'
            />
            <Heart
              className='w-12 h-12 text-purple-300 floating-hearts'
              fill='currentColor'
              style={{ animationDelay: '1s' }}
            />
            <Heart
              className='w-10 h-10 text-blue-300 floating-hearts'
              fill='currentColor'
              style={{ animationDelay: '2s' }}
            />
          </div>

          <p className='mb-8 text-lg italic text-gray-600 md:text-2xl animate-fadeInUp dreamy-float font-calligraphy'>
            Μια μαγική μέρα γεμάτη αγάπη και χαρά
          </p>
        </div>

        <div className='absolute transform -translate-x-1/2 cursor-pointer bottom-8 left-1/2 animate-bounce hover:animate-wiggle'>
          <div className='flex justify-center w-6 h-10 border-2 border-purple-300 rounded-full animate-gentle-pulse'>
            <div className='w-1 h-3 mt-2 bg-purple-300 rounded-full'></div>
          </div>
          <p className='mt-2 text-xs text-purple-400'>Κάντε scroll</p>
        </div>
      </header>

      <section className='relative px-4 py-20 bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80'>
        <div className='max-w-5xl mx-auto'>
          <div className='mb-12 text-center'>
            <Church className='w-16 h-16 mx-auto mb-4 text-blue-600 animate-bounce' />
            <h2 className='text-4xl text-gray-800 font-calligraphy animate-soft-wave'>
              Η Εκκλησία μας
            </h2>
          </div>

          <div className='grid items-center gap-12 md:grid-cols-2'>
            <div className='relative'>
              <div className='aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl'>
                <img
                  src={churchImage}
                  alt='Εκκλησία Υπαπαντής'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='absolute text-4xl -top-4 -right-4 animate-bounce'>
                ⛪
              </div>
              <div
                className='absolute text-3xl -bottom-4 -left-4 animate-bounce'
                style={{ animationDelay: '1s' }}
              >
                🕊️
              </div>
            </div>

            <Card className='overflow-hidden transition-all duration-500 transform border-0 shadow-2xl backdrop-blur-sm bg-white/90 rounded-3xl hover:scale-105'>
              <CardContent className='p-10'>
                <h3 className='mb-6 text-2xl text-center text-gray-800 font-elegant'>
                  Ιερός Ναός της Υπαπαντής του κυρίου
                </h3>
                <div className='space-y-4 text-gray-700'>
                  <p className='text-lg leading-relaxed font-cormorant'>
                    Μια όμορφη παραδοσιακή εκκλησία στο γραφικό Κομμένο της
                    Κέρκυρας, όπου θα τελεστεί η βάπτιση της μικρής μας
                    πριγκίπισσας.
                  </p>
                  <div className='flex items-center space-x-3 text-gray-600'>
                    <MapPin className='w-5 h-5 text-blue-500' />
                    <span className='font-cormorant'>Κομμένο, Κέρκυρα</span>
                  </div>
                  <div className='flex items-center space-x-3 text-gray-600'>
                    <Clock className='w-5 h-5 text-purple-500' />
                    <span className='font-inter'>Τελετή στις 19:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='relative px-4 py-20'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='mb-12 text-4xl text-center text-gray-800 font-elegant animate-soft-wave dreamy-float'>
            Λεπτομέρειες Εκδήλωσης
          </h2>

          <div className='grid items-center gap-12 md:grid-cols-2'>
            <Card className='overflow-hidden transition-all duration-500 transform border-0 shadow-2xl backdrop-blur-sm bg-white/90 rounded-3xl hover:scale-105 hover:shadow-3xl'>
              <CardContent className='p-10'>
                <div className='space-y-8'>
                  <div className='flex items-center p-6 space-x-6 transition-all duration-300 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 magical-shimmer'>
                    <Calendar className='w-10 h-10 text-purple-500' />
                    <div>
                      <p className='text-lg font-semibold text-gray-800 font-cormorant'>
                        Ημερομηνία
                      </p>
                      <p className='text-xl text-gray-600 font-inter'>
                        1 Σεπτεμβρίου 2025
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center p-6 space-x-6 transition-all duration-300 rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 magical-shimmer'>
                    <Clock className='w-10 h-10 text-blue-500' />
                    <div>
                      <p className='text-lg font-semibold text-gray-800 font-cormorant'>
                        Ώρα
                      </p>
                      <p className='text-xl text-gray-600 font-inter'>19:00</p>
                    </div>
                  </div>

                  <div className='flex items-center p-6 space-x-6 transition-all duration-300 rounded-2xl bg-gradient-to-r from-blue-100 to-pink-100 hover:from-blue-200 hover:to-pink-200 magical-shimmer'>
                    <MapPin className='w-10 h-10 text-pink-500' />
                    <div>
                      <p className='text-lg font-semibold text-gray-800 font-cormorant'>
                        Τοποθεσία
                      </p>
                      <p className='text-xl text-gray-600 font-cormorant'>
                        Εκκλησία Υπαπαντής
                      </p>
                      <p className='text-gray-500 font-cormorant'>
                        Κομμένο, Κέρκυρα
                      </p>
                    </div>
                  </div>
                </div>

                <div className='mt-10 text-center'>
                  <Button
                    asChild
                    className='px-10 py-4 text-lg font-medium text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:shadow-xl hover:scale-105 dreamy-float'
                  >
                    <a
                      href='https://www.google.com/maps/place/%CE%99%CE%B5%CF%81%CF%8C%CF%82+%CE%9D%CE%B1%CF%8C%CF%82+%CE%A5%CF%80%CE%B1%CF%80%CE%B1%CE%BD%CF%84%CE%AE%CF%82+%CE%93%CE%BF%CF%85%CE%B2%CE%B9%CF%8E%CE%BD/@39.6586803,19.8483294,17z/data=!3m1!4b1!4m6!3m5!1s0x135b5b86069b25e9:0x2e4a8b41a36af4d9!8m2!3d39.6586803!4d19.8487259!16s%2Fg%2F11c53592vn?entry=ttu'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-3'
                    >
                      <MapPin className='w-6 h-6' />
                      <span>Δείτε στο Χάρτη</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className='relative'>
              <h3 className='mb-6 text-2xl text-center text-gray-800 font-elegant dreamy-float'>
                Πού θα μας βρείτε
              </h3>

              <div className='relative overflow-hidden transition-all duration-500 transform shadow-2xl rounded-3xl hover:scale-105 hover:shadow-3xl'>
                <div className='aspect-[4/3] w-full'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.8234567890123!2d19.8462117!3d39.6586945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135c7b1234567890%3A0x1234567890abcdef!2z7Ym1z4HOz4zPgiDOvc6xz4zPgiDOpc-Az4DOsc-Az4DOsc69z4TOrs-CINCzz4XOvc6yz4nOvSwgzpvOr868zr3OtyA0OTEgMDA!5e0!3m2!1sel!2sgr!4v1234567890123!5m2!1sel!2sgr'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='rounded-3xl'
                    title='Ιερός Ναός Υπαπαντής Γουβιών'
                  ></iframe>
                </div>

                <div className='absolute max-w-xs p-4 shadow-lg top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl'>
                  <div className='flex items-center mb-2 space-x-3'>
                    <div className='w-3 h-3 bg-red-500 rounded-full animate-gentle-pulse'></div>
                    <h4 className='font-semibold text-gray-800 font-cormorant'>
                      Ιερός Ναός Υπαπαντής
                    </h4>
                  </div>
                  <p className='text-sm text-gray-600 font-cormorant'>
                    Κομμένο, Κέρκυρα
                  </p>
                  <p className='mt-1 text-xs text-gray-500 font-cormorant'>
                    Κάντε κλικ για οδηγίες
                  </p>
                </div>
              </div>

              <div className='absolute -top-6 -right-6 animate-bounce'>
                <img
                  src={pinkButterfly}
                  alt='Pink Butterfly'
                  className='inline-block w-8 h-8'
                />
              </div>
              <div
                className='absolute text-4xl -bottom-6 -left-6 animate-bounce'
                style={{ animationDelay: '1s' }}
              >
                ⛪
              </div>
              <div
                className='absolute text-3xl top-1/4 -left-4 twinkle'
                style={{ animationDelay: '2s' }}
              >
                ✨
              </div>
              <div
                className='absolute text-3xl bottom-1/4 -right-4 twinkle'
                style={{ animationDelay: '1.5s' }}
              >
                🧭
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative px-4 py-16 bg-gradient-to-r from-pink-100/60 via-purple-100/60 to-blue-100/60'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='mb-8 dreamy-float'>
            <Gift className='w-16 h-16 mx-auto mb-4 text-pink-500 animate-bounce' />
            <h2 className='mb-4 text-3xl text-gray-800 font-calligraphy'>
              Γλυκά & Κεράσματα
            </h2>
          </div>

          <Card className='overflow-hidden border-0 shadow-2xl backdrop-blur-sm bg-white/90 rounded-3xl magical-shimmer'>
            <CardContent className='p-8'>
              <div className='flex justify-center mb-6'>
                <div className='flex space-x-4 text-4xl'>
                  <span className='animate-bounce twinkle'>🧁</span>
                  <span
                    className='animate-bounce twinkle'
                    style={{ animationDelay: '0.5s' }}
                  >
                    🍰
                  </span>
                  <span
                    className='animate-bounce twinkle'
                    style={{ animationDelay: '1s' }}
                  >
                    🍪
                  </span>
                  <span
                    className='animate-bounce twinkle'
                    style={{ animationDelay: '1.5s' }}
                  >
                    🍭
                  </span>
                </div>
              </div>

              <p className='mb-4 text-lg leading-relaxed text-gray-700 font-cormorant'>
                Μετά την τελετή, θα σας περιμένουμε έξω από την εκκλησία για να
                γιορτάσουμε μαζί με γλυκά κεράσματα και πολλές ευχές!
              </p>

              <p className='italic text-gray-600 font-script'>
                Θα χαρούμε να μοιραστούμε αυτή τη γλυκιά στιγμή μαζί σας
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='px-4 py-20'>
        <div className='max-w-xl mx-auto text-center'>
          <h2 className='mb-12 text-4xl text-gray-800 font-elegant animate-soft-wave dreamy-float'>
            Το Προσκλητήριο μας
          </h2>

          <Card className='overflow-hidden transition-all duration-500 border-0 shadow-2xl backdrop-blur-sm bg-white/90 rounded-3xl hover:shadow-3xl magical-shimmer'>
            <CardContent className='p-6'>
              <div className='aspect-[2/3] rounded-2xl overflow-hidden shadow-xl'>
                <img
                  src={invitationCard}
                  alt='Προσκλητήριο Βάπτισης'
                  className='object-cover w-full h-full transition-transform duration-500 hover:scale-105'
                />
              </div>
              <p className='mt-6 text-lg italic text-gray-600 font-script'>
                Το επίσημο προσκλητήριο της βάπτισης
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='px-4 py-20 bg-gradient-to-r from-pink-50/80 via-purple-50/80 to-blue-50/80'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='mb-12 text-4xl text-gray-800 font-calligraphy animate-soft-wave dreamy-float'>
            Θα μας τιμήσει η παρουσία σας
          </h2>

          <Card className='overflow-hidden transition-all duration-500 transform border-0 shadow-2xl backdrop-blur-sm bg-white/95 rounded-3xl hover:shadow-3xl hover:scale-105 magical-shimmer'>
            <CardContent className='p-10'>
              <div className='mb-8 dreamy-float'>
                <div className='inline-block p-6 mb-6 rounded-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 animate-gentle-pulse'>
                  <Phone className='w-12 h-12 text-purple-600' />
                </div>
              </div>

              <p className='mb-8 text-xl leading-relaxed text-gray-700 font-cormorant'>
                Θα χαρούμε πολύ να μας συντροφεύσετε σε αυτή τη χαρούμενη
                στιγμή. Παρακαλούμε επικοινωνήστε μαζί μας για να μας
                ενημερώσετε αν θα μπορέσετε να παρευρεθείτε και πόσα άτομα θα
                είστε.
              </p>

              <div className='p-8 mb-8 transition-all duration-300 border-2 border-purple-200 border-dashed bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl hover:border-purple-400 magical-shimmer'>
                <p className='mb-3 text-lg text-gray-500 font-cormorant'>
                  Καλέστε μας στο:
                </p>
                <a
                  href='tel:+306955569195'
                  className='flex items-center justify-center space-x-3 text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-purple-600 group font-inter'
                >
                  <Phone className='w-8 h-8 group-hover:animate-wiggle' />
                  <span>+30 695 556 9195</span>
                </a>
              </div>

              <div className='p-6 mb-8 border-l-4 border-red-300 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl'>
                <div className='flex items-center justify-center space-x-3 text-red-600'>
                  <span className='text-2xl animate-gentle-pulse'>⏰</span>
                  <p className='text-lg font-semibold font-inter'>
                    Προθεσμία επιβεβαίωσης: 15 Αυγούστου 2025
                  </p>
                </div>
              </div>

              <Button
                asChild
                className='px-12 py-5 text-xl font-medium text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:shadow-xl hover:scale-110 animate-gentle-pulse hover:animate-none dreamy-float'
              >
                <a
                  href='tel:+306955569195'
                  className='flex items-center space-x-4'
                >
                  <Phone className='w-6 h-6' />
                  <span>Καλέστε Τώρα</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className='px-4 py-12 text-center bg-gradient-to-r from-pink-100/30 via-purple-100/30 to-blue-100/30'>
        <div className='flex justify-center mb-6 space-x-4 dreamy-float'>
          <span className='text-3xl animate-gentle-pulse'>
            <img
              src={pinkButterfly}
              alt='Pink Butterfly'
              className='inline-block w-8 h-8'
            />
          </span>
          <Heart
            className='w-8 h-8 text-pink-400 animate-gentle-pulse'
            fill='currentColor'
          />
          <span className='text-3xl animate-gentle-pulse'>
            <img
              src={pinkButterfly}
              alt='Pink Butterfly'
              className='inline-block w-8 h-8'
            />
          </span>
        </div>
        <p className='mb-4 text-lg italic text-gray-600 font-script'>
          Με αγάπη και χαρά σας περιμένουμε
        </p>
        <p className='text-sm text-gray-500 font-inter'>
          Μικρή Πριγκίπισσα • 1 Σεπτεμβρίου 2025 • Κέρκυρα
        </p>
      </footer>
    </div>
  )
}
