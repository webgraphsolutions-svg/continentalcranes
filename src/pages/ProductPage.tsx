import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { productsData } from "@/data/productsData";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/products">
              <Button>View All Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 bg-primary">
          <div className="container mx-auto px-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              {product.title}
            </h1>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>

              {/* Product Info */}
              <div>
                <p className="text-lg text-muted-foreground mb-8">
                  {product.longDescription}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Link to="/#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Zap className="w-5 h-5 mr-2" />
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        {product.specifications && (
          <section className="py-12 md:py-20 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Technical <span className="text-primary">Specifications</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="bg-background rounded-lg border border-border overflow-hidden">
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-4 ${
                        index !== product.specifications!.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="font-medium text-foreground">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Applications */}
        {product.applications && (
          <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                <span className="text-primary">Applications</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {product.applications.map((app, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-muted rounded-full text-foreground border border-border"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Interested in {product.title}?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today for pricing, customization options, and expert consultation.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
