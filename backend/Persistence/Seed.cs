using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Products.Any())
            {
                var products = new List<Product>
                {
                    new()
                    {
                        Title = "Acme Drawstring Bag",
                        Price = 120,
                        Description = "Strong 210D ripstop nylon drawstring bag",
                        Category = "men's clothing",
                        Image = "/static/images/1.png",
                    },
                    new()
                    {
                        Title = "Acme Circles T-Shirt",
                        Price = 25,
                        Description = "100% cotton t-shirt with the Acme logo",
                        Category = "men's clothing",
                        Image = "/static/images/2.png",
                    },
                    new()
                    {
                        Title = "Acme Prism T-Shirt",
                        Price = 25,
                        Description = "100% cotton t-shirt with the Acme logo",
                        Category = "men's clothing",
                        Image = "/static/images/3.png",
                    },
                    new()
                    {
                        Title = "Acme Baby Onesie",
                        Price = 15,
                        Description = "Short sleeve 5-oz, 100% combed ringspun cotton onesie",
                        Category = "men's clothing",
                        Image = "/static/images/4.png",
                    },
                    new()
                    {
                        Title = "SAcme Cowboy Hat",
                        Price = 160,
                        Description =
                            "Part of our Buffalo collection, this cowboy hat is made in the USA of high-quality, weather-resistant 4X buffalo felt. Its classic Western profile features a classic cattleman crease, a 4 brim and a 4 1/2 regular oval crown. Additional details include a leather sweatband, satin lining, and a self-matching hat band with a three-piece silver-toned buckle set, as well as a hat box.",
                        Category = "hat",
                        Image = "/static/images/5.png",
                    },
                    new()
                    {
                        Title = "Acme Cap",
                        Price = 20,
                        Description =
                            "100% cotton twill cap with the Acme logo. Structured, mid-profile, six-panel cap with pre-curved visor and adjustable self-fabric strap with sliding buckle.",
                        Category = "hat",
                        Image = "/static/images/6.png",
                    },
                    new()
                    {
                        Title = "Acme Hoodie",
                        Price = 50,
                        Description =
                            "8-ounce, 50/50 cotton/poly pill-resistant air jet yarn. Double-needle stitching. Double-lined hood with dyed-to-match drawcord. 1x1 rib knit cuffs and waistband with spandex. Front pouch pocket.",
                        Category = "men's clothing",
                        Image = "/static/images/7.png",
                    },
                    new()
                    {
                        Title = "Acme Mug",
                        Price = 15,
                        Description =
                            "This 11-ounce ceramic mug features the Acme logo. It is microwave and dishwasher safe.",
                        Category = "cups",
                        Image = "/static/images/8.png",
                    },
                    new()
                    {
                        Title = "Acme Slip-On Shoes",
                        Price = 30,
                        Description =
                            "These slip-on shoes are made of 100% cotton canvas with a rubber sole. They feature the Acme logo on the heel.",
                        Category = "men's clothing",
                        Image = "/static/images/9.png",
                    },
                    new()
                    {
                        Title = "Acme Blue T-Shirt",
                        Price = 25,
                        Description =
                            "100% cotton t-shirt with the Acme logo. Available in sizes S-XXL.",
                        Category = "men's clothing",
                        Image = "/static/images/10.png",
                    },
                    new()
                    {
                        Title = "Acme White T-Shirt",
                        Price = 7,
                        Description =
                            "100% cotton t-shirt with the Acme logo. Available in sizes S-XXL.",
                        Category = "men's clothing",
                        Image = "/static/images/11.png",
                    },
                    new()
                    {
                        Title = "Acme Baby Cap",
                        Price = 12,
                        Description =
                            "100% cotton baby cap with the Acme logo. Available in sizes 0-6 months and 6-12 months.",
                        Category = "men's clothing",
                        Image = "/static/images/12.png",
                    },
                };

                context.Products.AddRange(products);
                await context.SaveChangesAsync();
            }
        }
    }
}
