
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart, Leaf, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: "5 breadfruit cookies have been added to your cart."
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f6f1]">
      {/* Header/Navbar */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-[#e0d9c8]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#5a7052] font-playfair">Bread Fruity.</h1>
          </div>
          <button className="text-[#5a7052] hover:text-[#8da084]">
            <ShoppingCart className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#f8f6f1] to-[#e8e2d1]">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5a7052] font-playfair leading-tight">
              Delicious Cookies Made from <span className="text-[#c1905c]">Breadfruit</span>
            </h2>
            <p className="text-lg text-[#6b705c] max-w-lg">
              Experience the unique taste of Sri Lanka with our sustainable, healthy, and incredibly
              delicious cookies made from locally sourced breadfruit.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleAddToCart}
                className="bg-[#5a7052] hover:bg-[#4a604a] text-white px-8 py-6"
                size="lg"
              >
                Buy Now - Rs. 250
              </Button>
              <Button 
                variant="outline"
                className="border-[#5a7052] text-[#5a7052] hover:bg-[#5a7052] hover:text-white px-8 py-6"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-[#5a7052]/10">
              <img 
                src="/src/image/Bread-Fruity.jpg" 
                alt="Breadfruit Cookies" 
                className="w-full h-auto object-cover rounded-2xl transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#5a7052] mb-12 font-playfair">Why Choose Our Breadfruit Cookies?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Leaf className="h-8 w-8 text-[#5a7052]" />}
              title="100% Natural Ingredients"
              description="Our cookies are made from locally sourced breadfruit without any artificial additives or preservatives."
            />
            <BenefitCard 
              icon={<Shield className="h-8 w-8 text-[#5a7052]" />}
              title="Gluten-Free"
              description="Breadfruit flour is naturally gluten-free, making our cookies perfect for those with gluten sensitivity."
            />
            <BenefitCard 
              icon={<Heart className="h-8 w-8 text-[#5a7052]" />}
              title="Eco-Friendly"
              description="We use sustainable farming practices and eco-friendly packaging to minimize environmental impact."
            />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-[#f8f6f1]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#5a7052] mb-12 font-playfair">Our Product</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left space-y-4">
              <h3 className="text-2xl font-semibold text-[#c1905c]">Premium Breadfruit Cookies</h3>
              <p className="text-[#6b705c]">Pack of 5 delicious cookies for Rs. 250</p>
              <ul className="list-disc list-inside text-[#6b705c] space-y-2">
                <li>Made with Sri Lankan breadfruit</li>
                <li>No artificial ingredients</li>
                <li>Rich in fiber and nutrients</li>
                <li>Perfect balance of sweetness</li>
                <li>Sustainable packaging</li>
              </ul>
              <Button 
                onClick={handleAddToCart}
                className="bg-[#5a7052] hover:bg-[#4a604a] text-white mt-4"
              >
                Add to Cart
              </Button>
            </div>
            
            <div className="flex-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <img 
                  src="/src/image/Bread-Fruity.jpg" 
                  alt="Breadfruit Cookie Pack" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-4 p-4 bg-[#f1ede2] rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-[#6b705c]">Rs. 250 per pack</span>
                    <span className="text-sm font-medium text-[#6b705c]">5 cookies per pack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#5a7052] mb-12 font-playfair">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="These cookies are incredible! I love that they're both healthy and delicious. The breadfruit adds such a unique flavor."
              author="Sarah J."
            />
            <TestimonialCard 
              quote="As someone with gluten sensitivity, finding tasty alternatives is hard. These breadfruit cookies are a game-changer for me!"
              author="Michael T."
            />
            <TestimonialCard 
              quote="I appreciate the sustainable approach of using breadfruit. Plus, they taste amazing with my morning tea!"
              author="Priya D."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#5a7052] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to Try Our Breadfruit Cookies?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the unique taste and benefits of our Sri Lankan breadfruit cookies today.
            Limited batches available!
          </p>
          <Button 
            onClick={handleAddToCart}
            className="bg-white text-[#5a7052] hover:bg-[#e8e2d1] hover:text-[#4a604a] px-8 py-6"
            size="lg"
          >
            Order Now - Rs. 250
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b4a36] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair">CrispLeaf</h3>
              <p className="text-[#c5cdc3]">
                Delicious, sustainable cookies made from Sri Lankan breadfruit.
                Healthy snacking reimagined.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-[#c5cdc3]">Email: hello@crispleaf.com</p>
              <p className="text-[#c5cdc3]">Phone: +94 123 456 789</p>
              <p className="text-[#c5cdc3]">Address: Colombo, Sri Lanka</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#e8e2d1]">Instagram</a>
                <a href="#" className="text-white hover:text-[#e8e2d1]">Facebook</a>
                <a href="#" className="text-white hover:text-[#e8e2d1]">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#5a7052] text-center text-[#c5cdc3]">
            <p>&copy; {new Date().getFullYear()} CrispLeaf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Benefit Card Component
const BenefitCard = ({ icon, title, description }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-[#f8f6f1]">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="p-3 bg-[#e8e2d1] rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-[#5a7052] mb-2">{title}</h3>
        <p className="text-[#6b705c]">{description}</p>
      </CardContent>
    </Card>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, author }) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="text-[#5a7052] text-4xl font-serif mb-2">"</div>
        <p className="text-[#6b705c] italic mb-4">{quote}</p>
        <p className="text-right font-medium text-[#5a7052]">— {author}</p>
      </CardContent>
    </Card>
  );
};

export default Index;
