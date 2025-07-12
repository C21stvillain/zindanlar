import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Star, Zap, Users, Crown, Rocket, Shield, Eye, Download, MapPin, Sword, Scroll, Dice6 } from "lucide-react";
import { useEffect, useState } from "react";
import KanyeQuote from "./components/KanyeQuote";
import { getMonster } from "./services/baserow";
import { BaserowMonster } from "./types/baserow";
import { MonsterCard } from "./components/MonsterCard";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [monster, setMonster] = useState<BaserowMonster | null>(null);

  useEffect(() => {
    getMonster().then(setMonster);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">
              <span className="fantasy-accent">Deneme</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#battlemaps" className="hover:text-primary transition-colors">Battlemaps</a>
              <a href="#tokens" className="hover:text-primary transition-colors">Tokens</a>
              <a href="#scenes" className="hover:text-primary transition-colors">Scenes</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              <a href="#community" className="hover:text-primary transition-colors">Community</a>
              <Button variant="outline" size="sm">Sign In</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 pb-4">
              <a href="#battlemaps" className="block hover:text-primary transition-colors">Battlemaps</a>
              <a href="#tokens" className="block hover:text-primary transition-colors">Tokens</a>
              <a href="#scenes" className="block hover:text-primary transition-colors">Scenes</a>
              <a href="#gallery" className="block hover:text-primary transition-colors">Gallery</a>
              <a href="#community" className="block hover:text-primary transition-colors">Community</a>
              <Button variant="outline" size="sm" className="w-full">Sign In</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/fantasy-hero.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 fantasy-bg text-background px-4 py-2 text-sm font-semibold">
            Award-Winning D&D Assets
          </Badge>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 drop-shadow-2xl hero-title">
            <span className="fantasy-accent">Deneme</span>
          </h1>
          <KanyeQuote />
          <p className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-12">
            Forge legendary adventures with premium D&D battlemaps, character tokens,
            and immersive scenes. Trusted by thousands of Game Masters worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="fantasy-bg text-background hover:opacity-90 px-8 py-6 text-lg font-semibold"
            >
              <Download className="mr-2" />
              Browse Assets
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-sm border-foreground/20 px-8 py-6 text-lg"
            >
              <Eye className="mr-2" />
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold fantasy-accent">500+</div>
              <div className="text-muted-foreground">Battlemaps</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold fantasy-accent">1000+</div>
              <div className="text-muted-foreground">Character Tokens</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold fantasy-accent">200+</div>
              <div className="text-muted-foreground">Scene Illustrations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold fantasy-accent">10K+</div>
              <div className="text-muted-foreground">Happy DMs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Battlemaps Section */}
      <section id="battlemaps" className="py-24">
        <div className="container mx-auto px-4">
          <div className="fantasy-divider mb-8"></div>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold fantasy-accent tracking-tight mb-6">
              BATTLEMAPS
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From ancient dungeons to mystical forests, our hand-crafted battlemaps
              bring your encounters to life. Each map comes with multiple variants
              and lighting options for maximum versatility.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/20 p-6 card-hover">
              <div className="space-y-4">
                <MapPin className="text-amber-400 w-8 h-8" />
                <h3 className="text-xl font-semibold">Dungeons & Crypts</h3>
                <p className="text-sm text-muted-foreground">Dark chambers, ancient tombs, and forgotten ruins filled with secrets and danger.</p>
                <div className="text-sm fantasy-accent font-semibold">150+ Maps Available</div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/20 p-6 card-hover">
              <div className="space-y-4">
                <Crown className="text-green-400 w-8 h-8" />
                <h3 className="text-xl font-semibold">Taverns & Cities</h3>
                <p className="text-sm text-muted-foreground">Bustling marketplaces, cozy inns, and grand castles for social encounters.</p>
                <div className="text-sm fantasy-accent font-semibold">120+ Maps Available</div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-500/20 p-6 card-hover">
              <div className="space-y-4">
                <Zap className="text-blue-400 w-8 h-8" />
                <h3 className="text-xl font-semibold">Wilderness & Magic</h3>
                <p className="text-sm text-muted-foreground">Enchanted forests, magical towers, and otherworldly landscapes.</p>
                <div className="text-sm fantasy-accent font-semibold">230+ Maps Available</div>
              </div>
            </Card>
          </div>

          {/* Sample Maps Gallery */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img
                src="/battlemap-example-1.jpg"
                alt="Dungeon battlemap collection"
                className="w-full rounded-lg border border-border/20 card-hover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-lg">12 Dungeon Map Collection</h4>
                <p className="text-muted-foreground">High-resolution 6144x6144px maps</p>
              </div>
            </div>
            <div className="space-y-4">
              <img
                src="/battlemap-example-2.jpg"
                alt="Adventure map pack"
                className="w-full rounded-lg border border-border/20 card-hover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-lg">SideQuests Adventure Pack</h4>
                <p className="text-muted-foreground">Ready-to-use encounter maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokens Section */}
      <section id="tokens" className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="fantasy-divider mb-8"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold fantasy-accent tracking-tight">
                CHARACTER TOKENS
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bring your NPCs and player characters to life with our extensive
                collection of high-quality character portraits and tokens.
                From noble paladins to cunning rogues, we have every class and race covered.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Sword className="fantasy-accent w-5 h-5" />
                    <span className="font-semibold">All D&D Classes</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Complete coverage of official classes</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="fantasy-accent w-5 h-5" />
                    <span className="font-semibold">Multiple Races</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Humans, elves, dwarves, and more</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Crown className="fantasy-accent w-5 h-5" />
                    <span className="font-semibold">Various Ages</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Young adventurers to ancient masters</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Dice6 className="fantasy-accent w-5 h-5" />
                    <span className="font-semibold">Ready for VTT</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Optimized for Roll20, Foundry, etc.</p>
                </div>
              </div>

              <Button
                size="lg"
                className="fantasy-bg text-background hover:opacity-90 px-8 py-6 text-lg font-semibold"
              >
                <Download className="mr-2" />
                Browse Tokens
              </Button>
            </div>

            <div className="space-y-4">
              <img
                src="/character-token-1.jpg"
                alt="Dragonborn character token collection"
                className="w-full rounded-lg border border-border/20 card-hover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-lg">25 Dragonborn Portraits</h4>
                <p className="text-muted-foreground">Varied classes, ages, and backgrounds</p>
              </div>
            </div>
          </div>

          {monster && (
            <div className="mt-8">
              <MonsterCard monster={monster} />
            </div>
          )}
        </div>
      </section>

      {/* Scenes Section */}
      <section id="scenes" className="py-24">
        <div className="container mx-auto px-4">
          <div className="fantasy-divider mb-8"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              <img
                src="/tavern-scene.jpg"
                alt="Fantasy tavern interior scene"
                className="w-full rounded-lg border border-border/20 card-hover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-lg">The Wyrm's Rest Tavern</h4>
                <p className="text-muted-foreground">Perfect for social encounters and roleplay</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold fantasy-accent tracking-tight">
                IMMERSIVE SCENES
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Set the mood with our atmospheric scene illustrations.
                From cozy tavern interiors to imposing throne rooms,
                these high-quality artworks help immerse your players in the world.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full fantasy-bg flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Theatre of the Mind</h4>
                    <p className="text-muted-foreground text-sm">Perfect for narrative-focused sessions where imagination takes center stage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full fantasy-bg flex items-center justify-center flex-shrink-0 mt-1">
                    <Scroll className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Story Moments</h4>
                    <p className="text-muted-foreground text-sm">Capture key story beats and emotional moments with evocative artwork.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full fantasy-bg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Social Encounters</h4>
                    <p className="text-muted-foreground text-sm">Rich backdrops for negotiations, celebrations, and character interactions.</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="fantasy-bg text-background hover:opacity-90 px-8 py-6 text-lg font-semibold"
              >
                <Eye className="mr-2" />
                View Scenes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Loved by Game Masters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of DMs who trust Zindanlar to enhance their campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current fantasy-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "The quality of these maps is incredible. My players are constantly amazed
                by the detail and atmosphere. Zindanlar has become essential to my campaigns."
              </p>
              <div className="font-semibold">- Sarah M., DM for 8 years</div>
            </Card>

            <Card className="p-8 space-y-4 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current fantasy-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "As a new DM, Zindanlar's assets gave me the confidence to run epic adventures.
                The variety and quality are unmatched. Highly recommended!"
              </p>
              <div className="font-semibold">- Marcus T., New DM</div>
            </Card>

            <Card className="p-8 space-y-4 card-hover">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current fantasy-accent" />
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "The token collection saved me hours of prep time. Having professional-quality
                character art readily available is a game-changer for any campaign."
              </p>
              <div className="font-semibold">- Elena R., Veteran DM</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Zindanlar?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20 p-8 text-center space-y-6 card-hover">
              <div className="w-16 h-16 mx-auto bg-indigo-500/20 rounded-full flex items-center justify-center">
                <Crown className="text-indigo-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Hand-crafted assets with meticulous attention to detail.
                Each piece is created by professional artists with years of TTRPG experience.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-emerald-500/20 p-8 text-center space-y-6 card-hover">
              <div className="w-16 h-16 mx-auto bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Users className="text-emerald-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Active Community</h3>
              <p className="text-muted-foreground">
                Join our thriving Discord community! Share stories, get inspiration,
                and connect with fellow Game Masters from around the world.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-500/20 p-8 text-center space-y-6 card-hover">
              <div className="w-16 h-16 mx-auto bg-amber-500/20 rounded-full flex items-center justify-center">
                <Zap className="text-amber-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Regular Updates</h3>
              <p className="text-muted-foreground">
                New content released monthly. Stay ahead with fresh maps, tokens,
                and scenes to keep your campaigns exciting and unpredictable.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h3 className="text-3xl font-bold">Join the Adventure</h3>
            <p className="text-muted-foreground text-lg">
              Subscribe for free maps, exclusive content, and the latest Zindanlar updates!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 bg-background/50"
                type="email"
              />
              <Button className="fantasy-bg text-background hover:opacity-90 px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              We won't send you spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-lg fantasy-accent">Zindanlar</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Battlemaps</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Character Tokens</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Scene Illustrations</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Adventure Packs</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Licensing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Commercial Use</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Discord Server</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Reddit Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Artist Spotlight</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">DM Resources</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">YouTube</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Patreon</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/20 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>Copyright © 2025 Zindanlar. All rights reserved.</p>
            <p className="mt-2">Crafting legendary adventures, one map at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
