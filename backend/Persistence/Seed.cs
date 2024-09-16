using System;
using System.Collections.Generic;
using System.Collections.Generic;
using System.Linq;
using System.Linq;
using System.Threading.Tasks;
using System.Threading.Tasks;
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
                        Name = "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                        Price = 109,
                        Description =
                            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                        Category = "men's clothing",
                        ImageUrl = "/static/images/1.png",
                    },
                    new()
                    {
                        Name = "Mens Casual Premium Slim Fit T-Shirts",
                        Price = 22,
                        Description =
                            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                        Category = "men's clothing",
                        ImageUrl = "/static/images/2.png",
                    },
                    new()
                    {
                        Name = "Mens Cotton Jacket",
                        Price = 55,
                        Description =
                            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                        Category = "men's clothing",
                        ImageUrl = "/static/images/3.png",
                    },
                    new()
                    {
                        Name = "Mens Casual Slim Fit",
                        Price = 15,
                        Description =
                            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                        Category = "men's clothing",
                        ImageUrl = "/static/images/4.png",
                    },
                    new()
                    {
                        Name =
                            "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                        Price = 695,
                        Description =
                            "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                        Category = "jewelery",
                        ImageUrl = "/static/images/5.png",
                    },
                    new()
                    {
                        Name = "Solid Gold Petite Micropave",
                        Price = 168,
                        Description =
                            "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
                        Category = "jewelery",
                        ImageUrl = "/static/images/6.png",
                    },
                    new()
                    {
                        Name = "White Gold Plated Princess",
                        Price = 9,
                        Description =
                            "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
                        Category = "jewelery",
                        ImageUrl = "/static/images/6.png",
                    },
                    new()
                    {
                        Name = "Pierced Owl Rose Gold Plated Stainless Steel Double",
                        Price = 10,
                        Description =
                            "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
                        Category = "jewelery",
                        ImageUrl = "/static/images/7.png",
                    },
                    new()
                    {
                        Name = "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
                        Price = 56,
                        Description =
                            "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
                        Category = "women's clothing",
                        ImageUrl = "/static/images/14.png",
                    },
                    new()
                    {
                        Name =
                            "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
                        Price = 29,
                        Description =
                            "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
                        Category = "women's clothing",
                        ImageUrl = "/static/images/15.png",
                    },
                    new()
                    {
                        Name = "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
                        Price = 39,
                        Description =
                            "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
                        Category = "women's clothing",
                        ImageUrl = "/static/images/16.png",
                    },
                    new()
                    {
                        Name = "MBJ Women's Solid Short Sleeve Boat Neck V",
                        Price = 9,
                        Description =
                            "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
                        Category = "women's clothing",
                        ImageUrl = "/static/images/17.png",
                    },
                    new()
                    {
                        Name = "Opna Women's Short Sleeve Moisture",
                        Price = 7,
                        Description =
                            "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
                        Category = "women's clothing",
                        ImageUrl = "/static/images/18.png",
                    },
                    new()
                    {
                        Name = "DANVOUY Womens T Shirt Casual Cotton Short",
                        Price = 12,
                        Description =
                            "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
                        Category = "women's clothing",
                        ImageUrl = "/static/images/19.png",
                    },
                };

                context.Products.AddRange(products);
                await context.SaveChangesAsync();
            }
        }
    }
}
