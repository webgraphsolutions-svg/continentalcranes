import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/data/productsData";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Products
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              High-quality material handling equipment designed for performance, reliability, and safety.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow group"
                >
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {product.shortDescription}
                    </p>

                    {/* Features Preview */}
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to={`/products/${product.id}`}>
                      <Button className="w-full group/btn">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We can design and manufacture equipment tailored to your specific requirements.
            </p>
            <Link to="/#contact">
              <Button size="lg" className="text-lg px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
