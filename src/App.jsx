import React, { useState, useEffect } from 'react';

import './App.css'; 



// --- DANH MỤC MENU ---

const partsList = ["Bottom Brackets", "Chainrings", "Chains", "Clips & Straps", "Cranks", "Cogs", "Forks", "Handlebars", "Handlebar & Stem sets", "Headsets", "Hubs", "Pedals", "Saddles", "Rims", "Seatposts", "Stems", "Wheels"];

const miscList = ["Bric-a-brac", "Gear", "Grips", "Tools"];



// --- DỮ LIỆU BỘ LỌC TỔNG ---

const brandsList = ["All", "3Rensho", "Anchor", "Baramon", "Bridgestone", "Bomber Pro", "Cherubim", "Dontzer", "Eimei", "Gan Well Pro", "Georama", "Giro", "Grand Velo", "Hiko", "Iribe", "Kalavinka", "Katakura Silk", "Kiyo", "Levant", "Level", "Look", "Makino", "Nagasawa", "Nagasawa", "Ohtaki", " Osca", "Panasonic", "Peloton", "Presto", "Rap", "Ravanello", "Reminton", "Rinsei Lab", "Samson", "Stratos", "Umezawa", "Vivalo", "Vogue", "Watanabe", "Yamamoto", "Cinelli", "Colnago", "Cannondale", "*Carbon Fiber", "*Drilled", "*Road", " *Vintage", "Shimano", "Campagnolo", "Hatta", "Dura-Ace", "Daido D.I.D", "HKK", "Kashimax", "MKS", "Rotor", "Sugino", "Suntour", "3T", "Nitto", "Gran Compe", "Ariake", "Cornago", "Fujita", "ALEXRIMS", "Ambrosio", "Araya", "Minoura", "AGU", "Arai", "Park Tool", "Stone", "Stratos", "izumi"];

const sizeList = ["All", "46cm", "46.5cm", "47cm", "47.5cm", "48cm", "48.5cm", "49cm", "49.5cm", "50cm", "50.5cm", "51cm", "51.5cm", "52cm", "52.5cm", "53cm", "53.5cm", "54cm", "54.5cm", "55cm", "55.5cm", "56cm", "56.5cm", "57cm", "57.5cm", "58cm", "51T", "52T", "53T", "12T", "13T", "14T", "16T", "165mm", "167.5mm", "170mm", "300mm", "305mm", "325mm", "340mm", "350mm", "360mm", "42cm", "90mm", "95mm", "100mm", "105mm", "110mm", "120mm", "26.8mm", "27.0mm", "27.2mm", "44mm", "700c"];

const sortList = ["Alphabetically, A-Z", "Alphabetically, Z-A", "Price, low to high", "Price, high to low", "Date, new to old", "Date, old to new"];



const framesData = [







    { 







        id: 1, 







        name: "Nagasawa Special Keirin (NJS) Frameset.", 







        price: 1400, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0303_6ad0f0d6-88f6-4886-aecd-61a725c3ab7f_1024x1024.jpg?v=1583321630", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0320_9a2dcb60-eb6e-4010-8871-02eeffec272b_1024x1024.jpg?v=1583321630",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0332_14a1221a-743a-4314-a7ef-e089c071bb1d_1024x1024.jpg?v=1583321630",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0323_4521e5d6-a08f-4c9d-994e-ab98f724c1c7_1024x1024.jpg?v=1583321630",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0326_48e621f4-579e-425f-a36c-dab4d592ddff_1024x1024.jpg?v=1583321630"







        ],







        specs: [







            "There are many legends coloring Nagasawa’s career. After graduating from college, he went to Italy in 1970. Being a trainee at Pogliaghi, then spent the next six years at De Rosa learning from him. ", 







            "In 1976, Nagasawa met with Koichi Nakano, who had just graduated from Keirin School a year before. In ’77, these two started working together, which their combined efforts created a cycling legend; 10 consecutive world Championship sprint titles.", 







            "Condition: Newly restored", "C-C: 53.5cm", "C-T: 5.5cm", "Top Tube: 53.5cm", "Seatpost Diameter: 27.2mm", "Color: Purple with Flakes", "Frame, Fork & Headset",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ]







    },



    { 







        id: 31, 







        name: "3Rensho - Takizawa Blue", 







        price: 962.34, 







        images: [







            "https://www.tracksupermarket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_10.jpg", 







            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_04.jpg",         







            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_06.jpg",         







            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_03.jpg",         







            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_05.jpg",



            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_07.jpg",



            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_11.jpg",

            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_12.jpg", 

            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_16.jpg",

            "https://www.tracksupermarket.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/3/r/3rensho_aluminum_road_frame_takizawa_blue_09.jpg"







        ],







        specs: [







            "Year- 1990", 







            "Color- Takizawa Blue", 







            "Brand- 3Rensho (Japan)", "Seat tube size- 51 cm (c-t) 49.5 cm (c-c)", "Top tube size (c-c)- 52 cm", "Rear Spacing- 126", "Seat pillar size- 25.8", "Fork shape- aero", "Headset- Shimano HP-7410",







            "Bottom Bracket- N/A",

            "Condition- Freshly Restored",

            "What's cool about it- Seatpost is included!"







        ]







    },



     { 







        id: 33, 







        name: "3Rensho Model 'TR' World Champion Track Racing Framesets", 







        price: 10000, 







        images: [







            "http://www.yellowjersey.org/3RRED1X.JPG", 







            "http://www.yellowjersey.org/3RRED2X.JPG",         







            "http://www.yellowjersey.org/3RRED3X.JPG",         







            "http://www.yellowjersey.org/3RRED4X.JPG",         







           

        ],







        specs: [







            "3Rensho's designer, builder and resident genius, Mr Yoshi Konno , began building track racing frames just after the Tokyo Olympics. He built the first World Champion frameset for Koichi Nakano ( who went on to win a supernatural nine more World Championships). He also built for the first visiting Americans on the Keirin circuit in the 1980s, Gibby Hatton and Dave Grylls among others.", 

            "our related company imported 3Rensho to USA from 1980 through1995 3Rensho is closed there are no more"





            







        ],

        isSoldOut: true





    },



    { 







        id: 32, 







        name: "3Rensho Pro Time Trial Frameset Model XR", 







        price: 1400, 



        



        images: [







            "http://www.yellowjersey.org/grylls.jpg", 







            "http://www.yellowjersey.org/photosfromthepast/XRTA.JPG",         







            "http://www.yellowjersey.org/photosfromthepast/XRTB.JPG",         







            "http://www.yellowjersey.org/photosfromthepast/XRTC.JPG",         







            "http://www.yellowjersey.org/photosfromthepast/XRTD.JPG",



            "http://www.yellowjersey.org/photosfromthepast/XRTE.JPG",



            "http://www.yellowjersey.org/photosfromthepast/XRTF.JPG"







        ],







        specs: [







            "Here's a point on the path of 3Rensho's aero frame development, the Gold Medal finish photo at the Pan Am Games with pilot and motor Dave Grylls in perfect form. Designed and built at Kashiwa and Abiko, Japan, by Yoshi Konno", 









        ],

        isSoldOut: true

        



    },



    { 







        id: 2, 







        name: "Nagasawa Special Keirin (NJS) Frameset.", 







        price: 1400, 







        images: [







           "https://kuromoribikeco.com/cdn/shop/products/DSC_0202_55378b17-dd31-4817-8605-6f4c9b48a2eb_1024x1024.jpg?v=1622295564", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0220_028f285d-f8bd-487a-b572-0affb5a39e41_1024x1024.jpg?v=1622295662",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0218_1024x1024.jpg?v=1622295662",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0222_e5aa4e17-b885-4cee-8f6d-b89e3bd7b5ba_1024x1024.jpg?v=1622295564",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0267_1cc0b4fb-6793-474b-bc1a-0646412b4aaa_1024x1024.jpg?v=1622295564",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0268_6537d387-b008-42bf-826b-faa526736fe8_1024x1024.jpg?v=1622295564", 







        ], 







        specs: [







            "There are many legends coloring Nagasawa’s career. After graduating from college, he went to Italy in 1970. Being a trainee at Pogliaghi, then spent the next six years at De Rosa learning from him. ",







            "In 1976, Nagasawa met with Koichi Nakano, who had just graduated from Keirin School a year before. In ’77, these two started working together, which their combined efforts created a cycling legend; 10 consecutive world Championship sprint titles.",







            "Condition: Newly restored", "C-C: 55cm", "C-T: 56.5cm", "Top Tube: 57cm", "Seatpost Diameter: 27.2mm", "Color: Light Blue with Hologram decal set", "Frame, Fork & Headset",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 3, 







        name: "90's Samson // Red with Rainbow Flake // 51cm", 







        price: 599.99, 







        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_3076_540x.jpg?v=1767320461", 







            "https://www.njs-export.com/cdn/shop/files/IMG_3077_2048x2048@2x.jpg?v=1767320463",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3078_2048x2048@2x.jpg?v=1767320461",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3080_2048x2048@2x.jpg?v=1767320461",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3081_2048x2048@2x.jpg?v=1767320461",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3082_2048x2048@2x.jpg?v=1767320461",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3083_2048x2048@2x.jpg?v=1767320461",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3084_2048x2048@2x.jpg?v=1767320461",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3085_2048x2048@2x.jpg?v=1767320462",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3086_2048x2048@2x.jpg?v=1767320461",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3087_2048x2048@2x.jpg?v=1767320462",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3088_2048x2048@2x.jpg?v=1767320462",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3089_2048x2048@2x.jpg?v=1767320461",







            "https://www.njs-export.com/cdn/shop/files/IMG_3090_2048x2048@2x.jpg?v=1767320462",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3091_2048x2048@2x.jpg?v=1767320461"







        ], 







        specs: [







            "Color/Red with Rainbow Flake", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/51cm c-t", "Top tube/55cm c-c", "Rear/110mm", "Seatpost diameter/27.2mm", "Standover/78.5cm", "Model Year/1999",







            "Condition/This NJS Keirin track frame has some chipped paint spots, a minor dent on the right side of the toptube and a few rust spots (almosto none) but is otherwise still in good used condition! Very Slightly Sloping toptube!"







        ] 







    },





    { 







        id: 34, 







        name: "Anchor // Black Columbus Max Fork : Kaisei 019 tubing // 53.5cm", 







        price: 899.00, 







        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_2295_740x.JPG?v=1571438632", 







            "https://www.njs-export.com/cdn/shop/products/IMG_2296_740x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2297_740x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2298_740x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2299_2048x2048@2x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2300_2048x2048@2x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2301_2048x2048@2x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2302_b0eff2ab-6c5a-4fe2-8798-058e6e8c753e_2048x2048@2x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2303_bceb6b80-25da-4317-8cc9-8cc0b8a8c217_2048x2048@2x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2304_8434eec7-c830-4775-9f3d-067a9c2fcd8e_2048x2048@2x.JPG?v=1571438632",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2305_91776e62-dde4-434e-9023-e6d960313645_2048x2048@2x.JPG?v=1571438632",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2306_9f83749f-e744-4054-b476-ca4c7d85c334_2048x2048@2x.JPG?v=1571438632",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2307_a4f0e6d3-25d9-4056-b7cd-2c91e3329e10_2048x2048@2x.JPG?v=1571438632",







            "https://www.njs-export.com/cdn/shop/products/IMG_2308_b5899941-a43a-4c9b-9023-ee545aeb9969_2048x2048@2x.JPG?v=1571438632",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2310_5b4acbfb-1757-414f-b669-69d3669dd641_2048x2048@2x.JPG?v=1571438632"







        ], 







        specs: [







            "Color/Black", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/53.5cm c-t", "Top tube/54.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/79.5cm", "Model Year/2015",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in great condition!"







        ] 







    },



    { 







        id: 35, 







        name: "Anchor // Mach Silver Candy Red Fade with rainbow flake // 52.5cm", 







        price: 850.00, 







        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_8808_2048x2048@2x.JPG?v=1571438655", 







            "https://www.njs-export.com/cdn/shop/products/IMG_8809_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8810_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8811_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8812_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8813_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8814_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8815_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8816_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8817_2048x2048@2x.JPG?v=1571438655",         







            "https://www.njs-export.com/cdn/shop/products/IMG_8818_2048x2048@2x.JPG?v=1571438655",        







            "https://www.njs-export.com/cdn/shop/products/IMG_8819_2048x2048@2x.JPG?v=1571438655",        







            "https://www.njs-export.com/cdn/shop/products/IMG_8820_2048x2048@2x.JPG?v=1571438655",







            "https://www.njs-export.com/cdn/shop/products/IMG_8821_2048x2048@2x.JPG?v=1571438655",        







            "https://www.njs-export.com/cdn/shop/products/IMG_8823_2048x2048@2x.JPG?v=1571438655"







        ], 







        specs: [







            "Color/ Mach Silver Candy Red Fade with rainbow flake", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/52.5cm c-t", "Top tube/54cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/78cm", "Model Year/2013",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in great condition!!"







        ] 







    },



    { 







        id: 36, 







        name: "Baramon // Dark Blue Metallic // 50cm", 







        price: 899.99, 







        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_2976_2048x2048@2x.jpg?v=1697675682", 







            "https://www.njs-export.com/cdn/shop/files/IMG_2977_2048x2048@2x.jpg?v=1697675683",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2978_2048x2048@2x.jpg?v=1697675685",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2979_2048x2048@2x.jpg?v=1697675685",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2980_baea1779-7052-4e7a-b2d6-8a3c08c6fa0f_2048x2048@2x.jpg?v=1697675686",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2981_2048x2048@2x.jpg?v=1697675684",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2982_2048x2048@2x.jpg?v=1697675682",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2983_2048x2048@2x.jpg?v=1697675684",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2984_2048x2048@2x.jpg?v=1697675684",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2984_2048x2048@2x.jpg?v=1697675684",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2986_2048x2048@2x.jpg?v=1697675684",        







            "https://www.njs-export.com/cdn/shop/files/IMG_2987_2048x2048@2x.jpg?v=1697675682",        







            "https://www.njs-export.com/cdn/shop/files/IMG_2988_2048x2048@2x.jpg?v=1697675682",







            "https://www.njs-export.com/cdn/shop/files/IMG_2989_2048x2048@2x.jpg?v=1697675684",        







            "https://www.njs-export.com/cdn/shop/files/IMG_2991_2048x2048@2x.jpg?v=1697675682"







        ], 







        specs: [







            "Color/ Dark Blue Metallic", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/50cm c-t", "Top tube/52.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/76cm", "Model Year/2022",







            "This njs track frame has a few chipped paint spots but is otherwise still in great condition!"







        ] 







    },



    { 







        id: 37, 







        name: "Bridgestone Columbus Max Fork // Gold Plated Finish // 54.5cm", 







        price: 1280.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_3571_2048x2048@2x.jpg?v=1642399192", 







            "https://www.njs-export.com/cdn/shop/products/IMG_3572_2048x2048@2x.jpg?v=1642399190",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3573_2048x2048@2x.jpg?v=1642399192",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3574_2048x2048@2x.jpg?v=1642399190",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3575_2048x2048@2x.jpg?v=1642399193",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3576_2048x2048@2x.jpg?v=1642399190",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3577_2048x2048@2x.jpg?v=1642399193",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3578_2048x2048@2x.jpg?v=1642399192",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3579_2048x2048@2x.jpg?v=1642399194",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3580_2048x2048@2x.jpg?v=1642399190",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3581_9a08016b-40b3-41d7-a555-7751c2c2b9df_2048x2048@2x.jpg?v=1642399194",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3582_13a74552-5ebd-440d-9b86-501c761470ab_2048x2048@2x.jpg?v=1642399191",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3583_779992e8-8775-49cc-97c3-dd70a98045ab_2048x2048@2x.jpg?v=1642399193",







            "https://www.njs-export.com/cdn/shop/products/IMG_3584_40894ee8-9eb8-41fd-86e2-87edeecc7c5b_2048x2048@2x.jpg?v=1642399194",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3586_703abdc3-c0b8-4a26-a925-43d7ef2e78c6_2048x2048@2x.jpg?v=1642399270"







        ], 







        specs: [







            "Color/Gold Plated Finish", "Headset/ Shimano HP-7410", "BB/Hatta R9400", "Seat tube/54.5cm c-t", "Top tube/52.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/81.5cm", "Model Year/2020",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in great condition!"







        ] 







    },



    { 







        id: 38, 







        name: "BRIDGESTONE // Columbus Max Fork // Russian Tricolor // used by Denis Dmitriev // 54.5cm", 







        price: 2380.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_6971_70b4c863-0dc1-43f8-a492-4c7cf80ea95a_2048x2048@2x.JPG?v=1571438638", 







            "https://www.njs-export.com/cdn/shop/products/IMG_6972_09c40127-dab1-438f-8f0f-1c934a092fa2_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6973_f90ec2a5-4bc8-4949-b873-66ca1d0160f8_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6974_da7cfdba-e08a-4077-971e-77ff976a0946_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6975_2d2c3585-dd52-49c6-8444-2394320fd093_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6976_17ef0d9b-0d49-46e0-a7b5-58dfecb4e27a_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6977_ba97cdca-258a-4884-8efb-fd92811da563_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6978_f67176f3-2126-4421-a0d6-d68ed7672217_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6979_149fe188-23bc-4607-be5f-1a5675265026_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6980_9a150602-d38f-4afc-afac-9de5b653cfba_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6981_1a014d33-e65b-4980-9787-481c5a73ac89_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6982_0b1d60db-5d5c-4991-a9ff-2b4335199707_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6983_d9476d19-b3c3-4ff1-9cf3-91e1beb212cc_2048x2048@2x.JPG?v=1571438638",







            "https://www.njs-export.com/cdn/shop/products/IMG_6984_8e12ecfd-b429-4256-b383-131968398921_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6986_604b8d69-b39c-44ac-a33c-1be25055747d_2048x2048@2x.JPG?v=1571438638"







        ], 







        specs: [







            "Color/ Russian Tricolor", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/54.5cm c-t", "Top tube/57.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/81cm", "Model Year/2015",







            "Condition/This NJS Keirin track frame was built for World Champion sprint cyclist Denis Dmitriev when he participated in the Japan Keirin. Ths frame has a few chipped paint spots but is otherwise still in great condition! Very slightly sloping top tube! (almost horizontal)"







        ] 







    },



    { 







        id: 39, 







        name: "Bridgestone // Gray Silver // 57.5cm", 







        price: 599.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_9048_740x.jpg?v=1757373290", 







            "https://www.njs-export.com/cdn/shop/files/IMG_9049_740x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9050_2048x2048@2x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9051_2048x2048@2x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9052_2048x2048@2x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9053_2048x2048@2x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9054_2048x2048@2x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9055_2048x2048@2x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9056_2048x2048@2x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9057_2048x2048@2x.jpg?v=1757373290",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9058_2048x2048@2x.jpg?v=1757373290",        







            "https://www.njs-export.com/cdn/shop/files/IMG_9059_42b0dbe7-af2f-4dda-a974-08b5c1baa212_2048x2048@2x.jpg?v=1757373290",        







            "https://www.njs-export.com/cdn/shop/files/IMG_9060_a505606c-3eb5-485f-a63d-bc9fcaca5848_2048x2048@2x.jpg?v=1757373290",







            "https://www.njs-export.com/cdn/shop/files/IMG_9061_6a7f3632-6fe3-435b-b29e-964261d97309_2048x2048@2x.jpg?v=1757373290",        







            "https://www.njs-export.com/cdn/shop/files/IMG_9063_35542005-69f7-4167-b9a1-810c67e1287e_2048x2048@2x.jpg?v=1757373290"







        ], 







        specs: [







            "Color/Gray Silver", "Headset/Hatta Swan Super Deluxe", "BB/Sugino75", "Seat tube/57.5cm c-t", "Top tube/54.5cm c-c", "Rear/110mm", "Seatpost diameter/27.0cm", "Standover/83cm", "Model Year/1993",







            "Condition/This NJS Keirin track frame still has some chipped paint spots,, a few minor rust spots and a light dent on the right side of the toptube but is otherwise still in good used condition!"







        ] 







    },



    { 







        id: 40, 







        name: "Bridgestone 2016 Columbus Max Fork // Candy Red // Dedacciai Zero Uno Tubing // 51.5cm", 







        price: 750.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_2072_2048x2048@2x.jpg?v=1608525906", 







            "https://www.njs-export.com/cdn/shop/products/IMG_2073_2048x2048@2x.jpg?v=1608525906",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2074_2048x2048@2x.jpg?v=1608525906",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2075_2048x2048@2x.jpg?v=1608525906",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2076_2048x2048@2x.jpg?v=1608525906",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2077_2048x2048@2x.jpg?v=1608525906",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2078_2048x2048@2x.jpg?v=1608525906",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2079_2048x2048@2x.jpg?v=1608525906",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2080_2048x2048@2x.jpg?v=1608525907",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2081_2048x2048@2x.jpg?v=1608525907",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2082_2048x2048@2x.jpg?v=1608525907",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2083_2048x2048@2x.jpg?v=1608525907",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2085_2048x2048@2x.jpg?v=1608525907",







            "https://www.njs-export.com/cdn/shop/products/IMG_2086_2048x2048@2x.jpg?v=1608525907",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2088_2048x2048@2x.jpg?v=1608525907"







        ], 







        specs: [







            "Color/ Candy Red Metallic", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/51.5cm c-t", "Top tube/52cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/77.5cm", "Model Year/2016",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in clean condition!!"







        ] 







    },





    { 







        id: 41, 







        name: "Bridgestone Columbus Max Fork // Candy Red // Dedacciai Zero Uno Tubing // 52cm", 







        price: 1080.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_6987_27c1755b-11b4-4fca-9053-e629a5939fa0_2048x2048@2x.JPG?v=1571438638", 







            "https://www.njs-export.com/cdn/shop/products/IMG_6988_04a71500-3947-4f28-a4f8-d3c7a51d9b6d_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6989_dbbc0de9-af16-4fcd-9e32-72336ab29a50_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6990_55fed580-73a8-4cad-979e-a4b3012c7091_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6991_356671b8-2307-45cd-8059-609202e34842_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6992_b4182d76-8fed-4e1a-8f7d-ff5ae42f641c_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6993_43492a56-4eeb-46d6-92b5-ad4691ca87bd_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6994_db9ac7fd-8687-447d-9292-e1cc572c6884_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6995_27f1a55a-0292-4170-983e-cd2ce0a4de0d_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6996_9de7a252-06f3-4b61-a374-abf98534f43a_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6997_5d433214-6923-484a-9292-f30432a17aa6_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6998_40187c07-8733-4831-ba08-f5ca5268e1a0_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6999_2c2487dd-acfc-4490-88a3-e70b99ac9044_2048x2048@2x.JPG?v=1571438638",







            "https://www.njs-export.com/cdn/shop/products/IMG_7000_dbd075e5-54e4-47f0-b76e-b3bf33bdce56_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_7002_bc1eb618-ee80-4203-ab0e-8bb1470bd079_2048x2048@2x.JPG?v=1571438638"







        ], 







        specs: [







            "Color/ Candy Red Metallic", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/52cm c-t", "Top tube/53cm c-c", "Rear/110mm", "Seatpost diameter/27.2cm", "Standover/78.5cm" , "Model Year/2015",







            "Condition/This NJS Keirin track frame has a few chipped paint spots,but is otherwise still in great condition!!"







        ] 







    },



    { 







        id: 42, 







        name: "BOMBER PRO // Red / Silver Lugs with rainbow flake // 51cm", 







        price: 899.99,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_3866_2048x2048@2x.jpg?v=1615018025", 







            "https://www.njs-export.com/cdn/shop/products/IMG_3867_2048x2048@2x.jpg?v=1615018025",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3868_2048x2048@2x.jpg?v=1615018025",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3869_2048x2048@2x.jpg?v=1615018025",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3870_2048x2048@2x.jpg?v=1615018025",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3871_2048x2048@2x.jpg?v=1615018026",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3872_2048x2048@2x.jpg?v=1615018026",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3873_2048x2048@2x.jpg?v=1615018026",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3874_2048x2048@2x.jpg?v=1615018026",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3875_2048x2048@2x.jpg?v=1615018026",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3876_2048x2048@2x.jpg?v=1615018026",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3877_2048x2048@2x.jpg?v=1615018026",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3878_2048x2048@2x.jpg?v=1615018026",







            "https://www.njs-export.com/cdn/shop/products/IMG_3879_af4458a3-cdfa-4907-b7c2-6e1799ef4973_2048x2048@2x.jpg?v=1615018026",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3881_ef8c6d4f-7d21-4759-9455-8743c1be3e37_2048x2048@2x.jpg?v=1615018027"







        ], 







        specs: [







            "Color/ White", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/51cm c-t", "Top tube/54.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/76cm" , "Model Year/2020",







            "Condition/This NJS Keirin track frame has a few chipped paint spots but is otherwise still in great condition!"







        ] 







    },



    { 







        id: 43, 







        name: "Cherubim Columbus Max Fork // Matte Black / Purple Lugs // 55cm", 







        price: 699.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_8384_96e9ee76-a22b-4720-971a-a83d8a8ad65b_2048x2048@2x.jpg?v=1755397558", 







            "https://www.njs-export.com/cdn/shop/files/IMG_8385_2048x2048@2x.jpg?v=1755397558",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8386_2048x2048@2x.jpg?v=1755397558",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8387_2048x2048@2x.jpg?v=1755397558",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8388_2048x2048@2x.jpg?v=1755397558",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8389_2048x2048@2x.jpg?v=1755397558",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8390_2048x2048@2x.jpg?v=1755397558",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8391_2048x2048@2x.jpg?v=1755397558",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8392_2048x2048@2x.jpg?v=1755397558",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8393_2048x2048@2x.jpg?v=1755397559",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8394_2048x2048@2x.jpg?v=1755397558",        







            "https://www.njs-export.com/cdn/shop/files/IMG_8395_2048x2048@2x.jpg?v=1755397559",        







            "https://www.njs-export.com/cdn/shop/files/IMG_8396_2048x2048@2x.jpg?v=1755397558",







            "https://www.njs-export.com/cdn/shop/files/IMG_8398_2048x2048@2x.jpg?v=1755397558",        







            "https://www.njs-export.com/cdn/shop/files/IMG_8399_2048x2048@2x.jpg?v=1755397558",

            "https://www.njs-export.com/cdn/shop/files/IMG_8400_2048x2048@2x.jpg?v=1755397558"







        ], 







        specs: [







            "Color/ Matte Black / Purple Lugs", "Headset/Shimano HP-7410", "BB/Shimano BB-7700", "Seat tube/55cm c-t", "Top tube/54cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/82.5cm" , "Model Year/2015",







            "Condition/This NJS Keirin track frame has some chipped paint spots and a dent on the left side of the toptube but is otherwise still in good working condition!! Slightly sloping toptube!"







        ] 







    },



    { 







        id: 44, 







        name: "Cherubim Columbus Max Fork // 57.5cm", 







        price: 1499.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_7106_c5026e2b-6eb5-4ef2-af92-cfb8a4142453_2048x2048@2x.jpg?v=1773369889", 







            "https://www.njs-export.com/cdn/shop/files/IMG_7107_009bd1d3-a1dc-4b33-8c7e-dfbcdb5b27fa_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7108_807b9248-3c84-40cb-b54a-3db3f8b9a0d3_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7109_30fcd903-9222-41ec-8232-01aa9dfddc09_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7110_da8185e3-f966-4a11-8ca2-7ade3d8da360_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7111_0107aac0-8cdb-4b52-90be-97cdc9ee72ea_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7112_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7113_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7114_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7115_2048x2048@2x.jpg?v=1773369889",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7116_2048x2048@2x.jpg?v=1773369889",        







            "https://www.njs-export.com/cdn/shop/files/IMG_7117_2048x2048@2x.jpg?v=1773369889",        







            "https://www.njs-export.com/cdn/shop/files/IMG_7118_2048x2048@2x.jpg?v=1773369889",







            "https://www.njs-export.com/cdn/shop/files/IMG_7119_2048x2048@2x.jpg?v=1773369889",        







            "https://www.njs-export.com/cdn/shop/files/IMG_7120_02971d30-35bc-43d2-a056-23b02ed89547_2048x2048@2x.jpg?v=1773369889"

        







        ], 







        specs: [







            "Color/ White / Candy Purple", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/57.5cm c-t", "Top tube/57cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/83.5cm" , "Model Year/2020",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in good used condition!! Slightly sloping toptube! No dents!!!"







        ],

        isSoldOut: true







    },



    { 







        id: 44, 







        name: "Lo Pro Cherubim Columbus Max Fork // Black / Matte Black // 55cm", 







        price: 1499.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_7588_12a09042-0c5d-4d9b-95a6-5c14af62ca7a_2048x2048@2x.jpg?v=1775107173", 







            "https://www.njs-export.com/cdn/shop/files/IMG_7589_55dc0861-2cf2-4134-a90c-4c6e0c8a1353_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7590_8da62b8e-2728-4155-91a8-9b72d7b1cadf_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7591_d0f4ebfd-5e26-4b99-a908-7bc6f6f27cec_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7592_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7594_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7595_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7596_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7597_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7598_2048x2048@2x.jpg?v=1775107173",         







            "https://www.njs-export.com/cdn/shop/files/IMG_7599_320346a4-15c3-4f92-8ed2-ddf9a98e5e71_2048x2048@2x.jpg?v=1775107174",        







            "https://www.njs-export.com/cdn/shop/files/IMG_7600_2048x2048@2x.jpg?v=1775107173",        







            "https://www.njs-export.com/cdn/shop/files/IMG_7601_2048x2048@2x.jpg?v=1775107173",







            "https://www.njs-export.com/cdn/shop/files/IMG_7602_2048x2048@2x.jpg?v=1775107173",        







            "https://www.njs-export.com/cdn/shop/files/IMG_7604_e89ab64b-6b13-4cac-a06b-8572c97a5945_2048x2048@2x.jpg?v=1775107173"

        







        ], 







        specs: [







            "Color/Black/Matte Black", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/55cm c-t", "Top tube/55.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/79cm" , "Model Year/2019",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in good used condition!! No dents!!!"







        ],

        isSoldOut: true







    },



      { 







        id: 45, 







        name: "Dontzer Columbus Max Fork // Candy Berry Purple Metallic // 53cm", 







        price: 799.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_1211_2b07849e-f6f4-411c-80a4-76189c03164d_2048x2048@2x.jpg?v=1763167610", 







            "https://www.njs-export.com/cdn/shop/files/IMG_1212_ff93463b-5111-48c4-9cfc-d7575b8c2a76_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1213_68a9f256-87e2-41a4-a665-550c8ceca720_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1214_56cc0d91-c726-4bba-81bf-2e039b7275c6_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1215_b2acd0ab-4fa5-438f-a397-396d87980631_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1216_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1217_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1218_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1219_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1220_2048x2048@2x.jpg?v=1763167610",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1221_2048x2048@2x.jpg?v=1763167610",        







            "https://www.njs-export.com/cdn/shop/files/IMG_1222_6d23c173-5338-4cdb-80cd-07550a7405a5_2048x2048@2x.jpg?v=1763167610",        







            "https://www.njs-export.com/cdn/shop/files/IMG_1223_2048x2048@2x.jpg?v=1763167610",







            "https://www.njs-export.com/cdn/shop/files/IMG_1224_2048x2048@2x.jpg?v=1763167610"

        







        ], 







        specs: [







            "Color/ Candy Berry Purple Metallic ", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/53cm c-t", "Top tube/55cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/79cm" , "Model Year/2021",







            "This njs track frame has some small chipped paint spots but is otherwise still in clean condition!! No dents!"







        ],

        







    },



    { 







        id: 46, 







        name: "EIMEI // Red Metallic with SUPER Rainbow Flake // 53.5cm", 







        price: 899.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_3254_17f6fb0a-b073-473c-a43e-5e5d05892dc6_2048x2048@2x.jpg?v=1767415970", 







            "https://www.njs-export.com/cdn/shop/files/IMG_3255_29e2d131-d9a8-49ec-bc89-b34831ef30df_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3257_cb0cc813-462c-4e00-8b2e-f026515d7378_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3258_f1de922e-1964-4b94-be03-a156ee1d926e_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3259_f34d7766-e1e5-4371-9520-104c87e24f13_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3260_b0fb77a5-d86f-4bfc-9006-a7dab4dfbe9a_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3261_bb7e575d-3c76-484c-b38c-06b1b765e7c9_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3262_3c3178aa-12a1-4678-b78e-ebc5afb13f51_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3263_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3264_2048x2048@2x.jpg?v=1767415970",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3265_2048x2048@2x.jpg?v=1767415970",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3266_a820ab46-1d27-420d-869c-03782717576a_2048x2048@2x.jpg?v=1767415970",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3267_c117c35e-12dd-49ef-b8de-b21dd1f515d3_2048x2048@2x.jpg?v=1767415970",







            "https://www.njs-export.com/cdn/shop/files/IMG_3268_79bea14d-2eb4-4fba-9de5-b3d3ae2bc024_2048x2048@2x.jpg?v=1767415970",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3270_2048x2048@2x.jpg?v=1767415970"

        







        ], 







        specs: [







            "Color/Red Metallic with Rainbow Flake", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/53.5cm c-t", "Top tube/54cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/80cm" , "Model Year/2015",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in great condition!! No dents!!!"







        ],

        







    },



    { 







        id: 47, 







        name: "EIMEI // Red Metallic with SUPER Rainbow Flake // 51.5cm", 







        price: 699.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_3287_2048x2048@2x.jpg?v=1767489060", 







            "https://www.njs-export.com/cdn/shop/files/IMG_3288_2048x2048@2x.jpg?v=1767489061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3289_2048x2048@2x.jpg?v=1767489060",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3290_ece2e444-e616-4605-a63b-da05454c49f0_2048x2048@2x.jpg?v=1767489060",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3291_3f21c3c8-5a0f-47f8-b2bc-31adb73a23d5_2048x2048@2x.jpg?v=1767489060",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3292_fd0852c3-3677-47ca-ae3f-04810611e603_2048x2048@2x.jpg?v=1767489060",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3293_5a6c7ab5-5fcc-4d5b-97e4-1c127df67916_2048x2048@2x.jpg?v=1767489061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3294_5927b9f2-4de7-4207-b29e-ab9c591981c5_2048x2048@2x.jpg?v=1767489060",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3295_ad3174c7-4c56-46d7-8a63-bf5db29891f2_2048x2048@2x.jpg?v=1767489060",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3296_2048x2048@2x.jpg?v=1767489061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_3297_2048x2048@2x.jpg?v=1767489061",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3298_818ee9a1-2f60-416f-8aff-aa3677bafe68_2048x2048@2x.jpg?v=1767489060",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3299_3d74fece-91bf-402e-be41-779db92526ce_2048x2048@2x.jpg?v=1767489060",







            "https://www.njs-export.com/cdn/shop/files/IMG_3301_18d67946-70e4-4a48-892c-28d8d1c458ca_2048x2048@2x.jpg?v=1767489061",        







            "https://www.njs-export.com/cdn/shop/files/IMG_3303_a544a69f-0457-4e54-8d23-e59ad137b4f8_2048x2048@2x.jpg?v=1767489061"

        







        ], 







        specs: [







            "Color/Red Metallic with Rainbow Flake", "Headset/Hatta Swan Super Deluxe", "BB/Sugino75", "Seat tube/51.5cm c-t", "Top tube/53.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/78.5cm" , "Model Year/2015",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in clean condition!! No dents!!! Slightly slopoing toptube!"







        ],

        







    },





    { 







        id: 48, 







        name: "Gan Well Pro // Black with Fine Green Flakes // 53.5cm", 







        price: 879.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_6071_2048x2048@2x.jpg?v=1703380895", 







            "https://www.njs-export.com/cdn/shop/files/IMG_6072_2048x2048@2x.jpg?v=1703380896",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6073_2048x2048@2x.jpg?v=1703380893",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6074_2048x2048@2x.jpg?v=1703380894",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6075_57e92cea-2458-4e27-9f47-8d692dfa71ba_2048x2048@2x.jpg?v=1703380894",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6076_bad7e0c6-b616-46af-b0de-da1935ba0460_2048x2048@2x.jpg?v=1703380895",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6077_6d23d9ed-5d41-4eb0-8a07-22ba5a8dc4b8_2048x2048@2x.jpg?v=1703380894",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6078_039fbe1c-ac1f-40d8-94cb-9d2b750457e2_2048x2048@2x.jpg?v=1703380894",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6079_2048x2048@2x.jpg?v=1703380895",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6080_2048x2048@2x.jpg?v=1703380896",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6081_2048x2048@2x.jpg?v=1703380895",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6081_2048x2048@2x.jpg?v=1703380895",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6082_92fdf9fb-25fb-4623-bf3e-4b9437b0fded_2048x2048@2x.jpg?v=1703380893",







            "https://www.njs-export.com/cdn/shop/files/IMG_6083_2048x2048@2x.jpg?v=1703380897",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6086_2048x2048@2x.jpg?v=1703380894"

        







        ], 







        specs: [







            "Color/ Black with Fine Green Flakes", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/53.5cm c-t", "Top tube/54cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/79cm" , "Model Year/2014",







            "Condition/This njs track frame has a few chipped paint spots but is otherwise still in great condition!"







        ],

        







    },





    { 







        id: 49, 







        name: "Gan Well Pro // Red / Gold Two Tone // 51.5cm", 







        price: 899.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_5961_2048x2048@2x.jpg?v=1581914558", 







            "https://www.njs-export.com/cdn/shop/products/IMG_5962_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5963_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5964_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5965_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5966_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5967_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5968_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5969_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5970_2048x2048@2x.jpg?v=1581914558",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5971_2048x2048@2x.jpg?v=1581914558",        







            "https://www.njs-export.com/cdn/shop/products/IMG_5972_2048x2048@2x.jpg?v=1581914558",        







            "https://www.njs-export.com/cdn/shop/products/IMG_5973_2048x2048@2x.jpg?v=1581914558",







            "https://www.njs-export.com/cdn/shop/products/IMG_5974_2048x2048@2x.jpg?v=1581914558",        







            "https://www.njs-export.com/cdn/shop/products/IMG_5976_2048x2048@2x.jpg?v=1581914558"

        







        ], 







        specs: [







            "Color/ Red Gold Two Tone", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/51.5cm c-t", "Top tube/54.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/76.5cm" , "Model Year/2019",







            "Condition/This njs track frame has a few chipped paint spots but is otherwise still in near mint condition!"







        ],

        







    },





    { 







        id: 50, 







        name: "Gan Well Pro Columbus Max Fork// Matte Blue / Black Two Tone // 53cm", 







        price: 750.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_6587_fa4ddbf7-bc10-4cba-b6db-4d75584623ba_2048x2048@2x.jpg?v=1681700768", 







            "https://www.njs-export.com/cdn/shop/products/IMG_6588_1c1f61f3-35b5-4604-b514-0857815eec87_2048x2048@2x.jpg?v=1681700770",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6589_35e912d0-7ee0-4009-845e-a0ddd2e972b7_2048x2048@2x.jpg?v=1681700771",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6590_2048x2048@2x.jpg?v=1681700769",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6591_2048x2048@2x.jpg?v=1681700770",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6592_2048x2048@2x.jpg?v=1681700769",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6593_2048x2048@2x.jpg?v=1681700769",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6594_2048x2048@2x.jpg?v=1681700769",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6595_03ba3789-7515-455b-8063-1aa8d441bd1f_2048x2048@2x.jpg?v=1681700769",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6596_3459adbc-be4e-4878-8739-57b86aec6d61_2048x2048@2x.jpg?v=1681700768",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6597_63eabc55-d4fe-4610-86e8-fc73bc6990b1_2048x2048@2x.jpg?v=1681700771",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6598_688a034e-f2ef-4b39-a7ce-5f2cb9817a55_2048x2048@2x.jpg?v=1681700770",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6599_0ffe7ca9-a122-492b-8c4c-abf1c56602de_2048x2048@2x.jpg?v=1681700769",







            "https://www.njs-export.com/cdn/shop/products/IMG_6601_7af63688-49d7-423c-a5da-2e33ae7962b0_2048x2048@2x.jpg?v=1681700769",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6604_85f38e94-bf44-480f-bb90-c60841771ef4_2048x2048@2x.jpg?v=1681700768"

        







        ], 







        specs: [







            "Color/Matte Blue / Black Two Tone", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/53cm c-t", "Top tube/59cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/80.5cm" , "Model Year/2021",







            "This njs track frame has some small chipped paint spots but is otherwise still in clean condition!!  Slightly sloping toptube!"







        ],

        







    },



    { 







        id: 51, 







        name: "Super Rare! Gan Well Pro Japan National Team Carbon Track Frame Non NJS // Yellow // 51.5cm", 







        price: 1799.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_6285_2048x2048@2x.jpg?v=1772423409", 







            "https://www.njs-export.com/cdn/shop/files/IMG_6286_2048x2048@2x.jpg?v=1772423409",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6287_2048x2048@2x.jpg?v=1772423409",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6288_2048x2048@2x.jpg?v=1772423409",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6289_2048x2048@2x.jpg?v=1772423409",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6290_2048x2048@2x.jpg?v=1772423409",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6291_2048x2048@2x.jpg?v=1772423409",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6292_2048x2048@2x.jpg?v=1772423409",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6293_2048x2048@2x.jpg?v=1772423409",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6294_2048x2048@2x.jpg?v=1772423410",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6295_2048x2048@2x.jpg?v=1772423409",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6297_2048x2048@2x.jpg?v=1772423409",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6298_2048x2048@2x.jpg?v=1772423409",







            "https://www.njs-export.com/cdn/shop/files/IMG_6299_2048x2048@2x.jpg?v=1772423409",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6304_ebd3d131-f8be-48f3-acb9-172fa755e71c_2048x2048@2x.jpg?v=1772423409"

        







        ], 







        specs: [







            "Color/ Yellow", "Headset/Ness", "BB/Hatta R9400", "Seat tube/51.5cm c-t ", "Top tube/57.5cm c-c", "Rear/120mm", "Seatpost diameter/With an original carbon seatpost", "Standover/74.5cm" , "Model Year/???",







            "Condition/This track frame has some small chipped paint spots but is otherwise clean condition!! No cracks on carbon! A previous owner was 181cm tall."







        ],

        







    },





    { 







        id: 52, 







        name: "GAN WELL PRO | dark blue / rainbow flake | Columbus Max Fork + Dedacciai Tubing | 51.5cm", 







        price: 979.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/065_881c8bf0-54c1-4d58-966b-82de501c45fa_2048x2048@2x.JPG?v=1571438593", 







            "https://www.njs-export.com/cdn/shop/products/076_65791d2c-08cf-44e2-8050-45e8a1843a55_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/066_e9b8bb75-c314-4e1a-8f7d-9dcdbfcd61a8_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/067_10713d24-a58a-477f-93a4-3abd0ab04e9b_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/068_0a975121-915c-49ab-a992-ffb0f7cdf4ae_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/069_fbfc2d9a-c6db-46ad-b92a-2148e4d054c9_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/070_5d33576d-36c4-4b23-87f2-516a2faecd98_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/071_1747c76b-c8e2-4e11-ad36-f570fe515827_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/072_dab9d69b-58fd-44c5-8f9b-d15d03e10901_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/073_d77af515-8ac3-4e05-be18-de8684f0a0c9_2048x2048@2x.JPG?v=1571438593",         







            "https://www.njs-export.com/cdn/shop/products/074_b5620edb-8378-4c96-b10e-373c2a984996_2048x2048@2x.JPG?v=1571438593",        







            "https://www.njs-export.com/cdn/shop/products/075_097017ea-e6ab-43f5-acfc-4f2af3014bb5_2048x2048@2x.JPG?v=1571438593"     



        







        ], 







        specs: [







            "Color/Blue with rainbow flake", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/51.5cm c-t", "Top tube/53.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/77.5cm" , "Model Year/2013",







            "This njs track frame has a few chipped paint spots but is otherwise still in great condition."







        ],

        







    },





    { 







        id: 53, 







        name: "GEORAMA // Green-Red Fade 2008 // 50.5cm", 







        price: 699.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_5279_2048x2048@2x.JPG?v=1571438637", 







            "https://www.njs-export.com/cdn/shop/products/IMG_5281_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5282_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5283_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5284_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5285_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5286_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5287_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5288_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5289_2048x2048@2x.JPG?v=1571438637",         







            "https://www.njs-export.com/cdn/shop/products/IMG_5290_2048x2048@2x.JPG?v=1571438637",        







            "https://www.njs-export.com/cdn/shop/products/IMG_5291_2048x2048@2x.JPG?v=1571438637",        







            "https://www.njs-export.com/cdn/shop/products/IMG_5292_2048x2048@2x.JPG?v=1571438637",







            "https://www.njs-export.com/cdn/shop/products/IMG_5294_2048x2048@2x.JPG?v=1571438637",        







            "https://www.njs-export.com/cdn/shop/products/IMG_5295_2048x2048@2x.JPG?v=1571438637"

        







        ], 







        specs: [







            "Color//Green Red Fade", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/50.5cm c-t ", "Top tube/50cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/77.5cm" , "Model Year/2008",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in good used condition!!!"







        ],

        







    },



     { 







        id: 54, 







        name: "GEORAMA // ruby pink + purple metallic two tone // 53.5cm", 







        price: 699.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/017_dc4d4947-b388-482f-b058-a47ef0df7c84_2048x2048@2x.JPG?v=1571438613", 







            "https://www.njs-export.com/cdn/shop/products/018_c00b98c4-0d1f-42a8-9dfd-dc86add97670_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/019_99cdd9ff-4b30-4458-9861-cb53179d346d_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/020_21210f6d-c0bd-498e-ab2d-fdacccbac29b_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/021_7bbe16fc-8050-484d-b35a-aa08a3796863_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/022_da45c569-8e96-4e08-bb1b-0b46d24dc708_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/023_d105d617-5aae-4ece-92d9-a73bcb8a4fc6_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/024_833541a0-a2c7-4d32-8d95-5461cb56b08b_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/025_087e9d9b-56a3-40c6-a571-b3a6b95828a2_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/026_b3b9c837-5310-4173-ab66-b131470079d8_2048x2048@2x.JPG?v=1571438613",         







            "https://www.njs-export.com/cdn/shop/products/027_0fbbc54c-4cf2-4dc8-961a-8a5b9cbb66d1_2048x2048@2x.JPG?v=1571438613",        







            "https://www.njs-export.com/cdn/shop/products/028_87058966-a8c9-4cd7-b3d6-6f1b74c66308_2048x2048@2x.JPG?v=1571438613",        







            "https://www.njs-export.com/cdn/shop/products/029_38839c24-3803-48c4-a372-d5dc94a255bf_2048x2048@2x.JPG?v=1571438613",







            "https://www.njs-export.com/cdn/shop/products/030_126bce37-8108-466e-a47a-e09e90f8c776_2048x2048@2x.JPG?v=1571438613",        







            "https://www.njs-export.com/cdn/shop/products/032_94924ebf-7209-42d6-a577-c2a4e530dca0_2048x2048@2x.JPG?v=1571438613"

        







        ], 







        specs: [







            "Color/ Ruby Pink/Purple Metallic Two Tone", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/53.5cm c-t", "Top tube/55cm c-c", "Rear/110mm", "Seatpost diameter/27.0cm", "Standover/80cm" , "Model Year/1999",







            "Condition/This NJS Keirin track frame has some small chipped paint spots and a few rust spots(almost none) but is otherwise still in clean condition!!"







        ],

        







    },



    { 







        id: 55, 







        name: "GEORAMA Columbus Max Fork // Red // 50.5cm", 







        price: 750.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_0749_2048x2048@2x.jpg?v=1634364492", 







            "https://www.njs-export.com/cdn/shop/products/IMG_0750_c9e9de34-1f29-481f-852f-ca028d3821df_2048x2048@2x.jpg?v=1634364492",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0751_47c12aa2-ef0b-4720-9689-a021e38e8528_2048x2048@2x.jpg?v=1634364493",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0752_f6d86ab3-4b30-4ad4-af5e-1bbe95de5604_2048x2048@2x.jpg?v=1634364493",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0753_fb536e90-70bc-4be9-befa-cb6a74c9593b_2048x2048@2x.jpg?v=1634364491",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0754_93496b12-3cb9-42d0-8c5c-301f0a4280aa_2048x2048@2x.jpg?v=1634364491",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0755_7301339f-02c0-426a-aa28-c5a24184bbe4_2048x2048@2x.jpg?v=1634364491",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0756_760fd486-c3f3-4dad-8c32-de4cbaf7ec51_2048x2048@2x.jpg?v=1634364490",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0757_9cdf745f-5f68-4856-86f7-6adced29c99e_2048x2048@2x.jpg?v=1634364491",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0758_697aaf51-08a6-4792-a6a8-7a5ff90a7168_2048x2048@2x.jpg?v=1634364493",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0759_8f81f244-5798-456e-bdf3-7a4856b4c2dd_2048x2048@2x.jpg?v=1634364491",        







            "https://www.njs-export.com/cdn/shop/products/IMG_0760_d87e04de-2cd3-4c02-a0d0-6840eb60c18e_2048x2048@2x.jpg?v=1634364490",        







            "https://www.njs-export.com/cdn/shop/products/IMG_0761_79f9c714-b621-43d5-9619-ce34fc24e571_2048x2048@2x.jpg?v=1634364492",







            "https://www.njs-export.com/cdn/shop/products/IMG_0762_889d1973-4712-47d4-835c-ccb70660ba64_2048x2048@2x.jpg?v=1634364492",        







            "https://www.njs-export.com/cdn/shop/products/IMG_0764_473043f4-6856-4219-8d6a-d4feec26756a_2048x2048@2x.jpg?v=1634364549"

        







        ], 







        specs: [







            "Color/Red", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/50.5cm c-t", "Top tube/52,5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/76cm" , "Model Year/2014",







            "This njs track frame has some small chipped paint spots but is otherwise still in clean condition!"







        ],

        







    },





    { 







        id: 56, 







        name: "Georama Columbus Max Fork // Black with Super Blue Flake // 51.5cm", 







        price: 899.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_6922_2048x2048@2x.JPG?v=1571438638", 







            "https://www.njs-export.com/cdn/shop/products/IMG_6923_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6924_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6925_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6926_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6927_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6928_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6929_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6930_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6931_2048x2048@2x.JPG?v=1571438638",         







            "https://www.njs-export.com/cdn/shop/products/IMG_6932_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6933_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6936_2048x2048@2x.JPG?v=1571438638",







            "https://www.njs-export.com/cdn/shop/products/IMG_6934_2048x2048@2x.JPG?v=1571438638",        







            "https://www.njs-export.com/cdn/shop/products/IMG_6937_2048x2048@2x.JPG?v=1571438638"

        







        ], 







        specs: [







            "﻿Color/ Black with blue flake", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/51.5cm c-t", "Top tube/54.5cm c-c", "Rear/110mm", "Seatpost diameter/27.2mm", "Standover/78.5cm" , "Model Year/2014",







            "Condition/This NJS Keirin track frame has some small chipped paint spots,but is otherwise still in great condition!!"







        ],

        







    },





    { 







        id: 57, 







        name: "GIRO // Black // 51.5cm", 







        price: 870.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_2752_740x.jpg?v=1571544966", 







            "https://www.njs-export.com/cdn/shop/products/IMG_2753_740x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2754_740x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2755_740x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2756_2048x2048@2x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2757_c0a1c5ae-5e00-4338-9aad-1cc77a716952_2048x2048@2x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2758_7e7dd7a6-3721-4c7e-b2b3-24d28df4195b_2048x2048@2x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2759_14e5d786-fb04-40c3-9154-20320a8216cc_2048x2048@2x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2760_c0431b2b-e4ff-492a-90ba-8fbd1bf7ada6_2048x2048@2x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2761_dd7adcfc-7c82-4da0-9611-6d5ebdeea303_2048x2048@2x.jpg?v=1571544966",         







            "https://www.njs-export.com/cdn/shop/products/IMG_2762_fd3e1106-d389-4189-810e-3eefac429ef4_2048x2048@2x.jpg?v=1571544966",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2763_5d06fbf8-cd1f-424c-874d-c37a468ce17c_2048x2048@2x.jpg?v=1571544966",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2764_0870c685-13e1-4073-84ca-22977ba60d91_2048x2048@2x.jpg?v=1571544966",







            "https://www.njs-export.com/cdn/shop/products/IMG_2765_60c7b8fb-9535-4a2e-92e2-7e096c76ce97_2048x2048@2x.jpg?v=1571544966",        







            "https://www.njs-export.com/cdn/shop/products/IMG_2767_770873ae-d3f2-4932-a9cc-b5a60ab4f3df_2048x2048@2x.jpg?v=1571544966"

        







        ], 







        specs: [







            "Color/Black", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/51.5cm c-t", "Top tube/51.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/77.5cm" , "Model Year/2015",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in great condition!"







        ],

        







    },





    { 







        id: 58, 







        name: "Giro // Black White Fade with Fine Silver Flake // 53.5cm", 







        price: 699.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_0561_0e6b5fc8-ee50-410e-8267-cc0be9f126e3_740x.jpg?v=1761262252", 







            "https://www.njs-export.com/cdn/shop/files/IMG_0562_43589ffc-c99c-4da2-b401-f600ab0a5587_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0563_241960c0-83bc-47ae-b818-34e7c9c019cd_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0564_c07ee320-bb3a-4671-9d67-a0c345eab52b_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0565_4fdd6b02-94f5-470d-bab0-4213de137915_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0566_b35a7f79-8211-4af7-b25c-fc3411527bf1_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0567_b06083ed-6b69-4eb5-9779-e6787049b2fa_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0568_03208db0-e8a3-493a-8815-3b3c0d47c840_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0569_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0570_2048x2048@2x.jpg?v=1761262252",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0571_2048x2048@2x.jpg?v=1761262253",        







            "https://www.njs-export.com/cdn/shop/files/IMG_0572_2048x2048@2x.jpg?v=1761262252",        







            "https://www.njs-export.com/cdn/shop/files/IMG_0573_2048x2048@2x.jpg?v=1761262252",







            "https://www.njs-export.com/cdn/shop/files/IMG_0574_8c6b8a90-f2ca-47ea-8d58-f2ad8a000ff8_2048x2048@2x.jpg?v=1761262252",        







            "https://www.njs-export.com/cdn/shop/files/IMG_0576_ba9b58be-e572-47ab-918a-54ebd83c0a98_2048x2048@2x.jpg?v=1761262253"

        







        ], 







        specs: [







            "Color/ Black White Fade with Fine Silver Flake", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/53.5cm c-t", "Top tube/54.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/79cm" , "Model Year/2017",







            "Condition/This NJS Keirin track frame has some small chipped paints but is otherwise still in good used condition!! No dents!!"







        ],

        







    },



    { 







        id: 59, 







        name: "GIRO Columbus Max Fork // Maziora with Rainbow Flake // 52.5cm", 







        price: 799.99,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_0632_2048x2048@2x.jpg?v=1667705548", 







            "https://www.njs-export.com/cdn/shop/products/IMG_0633_2048x2048@2x.jpg?v=1667705547",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0634_2048x2048@2x.jpg?v=1667705546",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0635_2048x2048@2x.jpg?v=1667705546",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0636_2048x2048@2x.jpg?v=1667705548",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0637_2048x2048@2x.jpg?v=1667705549",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0638_2048x2048@2x.jpg?v=1667705549",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0639_2048x2048@2x.jpg?v=1667705545",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0640_7ed05a9d-18c1-4ccc-a31d-01ac78629f57_2048x2048@2x.jpg?v=1667705547",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0641_87868227-e6d3-45ac-8a7e-b96170e0bacc_2048x2048@2x.jpg?v=1667705547",         







            "https://www.njs-export.com/cdn/shop/products/IMG_0642_c26ff7fa-a9ed-4532-907a-e23038538142_2048x2048@2x.jpg?v=1667705548",        







            "https://www.njs-export.com/cdn/shop/products/IMG_0643_88314598-3832-4508-ae1c-b5e80779cf52_2048x2048@2x.jpg?v=1667705545",        







            "https://www.njs-export.com/cdn/shop/products/IMG_0644_b609c51d-d906-4e92-9258-170271ec362f_2048x2048@2x.jpg?v=1667705549",







            "https://www.njs-export.com/cdn/shop/products/IMG_0645_01fbca58-e202-4185-a88a-21d559899cb7_2048x2048@2x.jpg?v=1667705550",        







            "https://www.njs-export.com/cdn/shop/products/IMG_0647_c73f9023-f33d-4c22-bf0b-4b886cd08901_2048x2048@2x.jpg?v=1667705591"

        







        ], 







        specs: [







            "Color/Maziora", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/52.5cm c-t", "Top tube/54cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/81cm" , "Model Year/2013",







            "Condition/This Keirin track frame has some chipped paint spots but is otherwise still in clean condition!"







        ],

        







    },



    { 







        id: 60, 







        name: "GIRO Columbus Max Fork // Purple Metallic / Clear Black Fade with Silver Fine Flake // 46.5cm", 







        price: 799.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_9619_2048x2048@2x.jpg?v=1735528438", 







            "https://www.njs-export.com/cdn/shop/files/IMG_9620_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9621_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9622_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9623_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9624_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9625_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9626_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9627_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9628_2048x2048@2x.jpg?v=1735528438",         







            "https://www.njs-export.com/cdn/shop/files/IMG_9629_2048x2048@2x.jpg?v=1735528438",        







            "https://www.njs-export.com/cdn/shop/files/IMG_9630_2048x2048@2x.jpg?v=1735528438",        







            "https://www.njs-export.com/cdn/shop/files/IMG_9631_2048x2048@2x.jpg?v=1735528438",







            "https://www.njs-export.com/cdn/shop/files/IMG_9632_2048x2048@2x.jpg?v=1735528438",        







            "https://www.njs-export.com/cdn/shop/files/IMG_9635_2048x2048@2x.jpg?v=1735528438"

        







        ], 







        specs: [







            "Color/ Purple Metallic / Clear Black Fade with Silver Fine Flake", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/46.5cm c-t", "Top tube/54cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/74cm" , "Model Year/2020",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in great condition!! Slightly sloping toptube!"







        ],

        







    },



    { 







        id: 61, 







        name: "Rare!! Giro CrMo TT // Red Silver Marble with Rainbow Flake // 50.5cm Non NJS", 







        price: 1799.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_2024_b2ab77fb-3fe7-4598-a856-4d35706b33e5_2048x2048@2x.jpg?v=1764815994", 







            "https://www.njs-export.com/cdn/shop/files/IMG_2025_68c5d293-3dc6-44f1-80ad-d54db082ee40_2048x2048@2x.jpg?v=1764815994",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2026_40a134ff-9508-4e68-8181-95959263e4fc_2048x2048@2x.jpg?v=1764815994",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2027_22051fbb-b1b8-43c4-89b1-6b33865c3a8e_2048x2048@2x.jpg?v=1764815994",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2028_2422151c-13a7-4983-89bf-f69694e2685c_2048x2048@2x.jpg?v=1764815996",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2029_9339647c-39de-43b1-b2b8-12dbc08f3e6c_2048x2048@2x.jpg?v=1764815994",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2030_5712e6c6-b77d-4b69-82fe-a65f7837e5c8_2048x2048@2x.jpg?v=1764815994",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2031_f7f515ad-b3d2-4f7a-9c7b-f96c94b22b59_2048x2048@2x.jpg?v=1764815994",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2032_2ea10254-2367-451a-8090-9241af30ad5d_2048x2048@2x.jpg?v=1764815994",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2033_cce0517e-8aac-4a02-8a49-94f5f823390e_2048x2048@2x.jpg?v=1764815994",         







            "https://www.njs-export.com/cdn/shop/files/IMG_2034_2048x2048@2x.jpg?v=1764815995",        







            "https://www.njs-export.com/cdn/shop/files/IMG_2035_2048x2048@2x.jpg?v=1764815994",        







            "https://www.njs-export.com/cdn/shop/files/IMG_2036_2048x2048@2x.jpg?v=1764815994",







            "https://www.njs-export.com/cdn/shop/files/IMG_2037_2048x2048@2x.jpg?v=1764815994",        







            "https://www.njs-export.com/cdn/shop/files/IMG_2039_f4188fbc-2e17-46f4-9148-ba998b9ad6b3_2048x2048@2x.jpg?v=1764815994"

        







        ], 







        specs: [







            "Color/ Red Silver Marble with Rainbow Flake", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/50.5cm c-t", "Top tube/54cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/77cm" , "Model Year/1999",







            "Condition/This track frame has some small chipped paints but is otherwise still in great condition!! No dents!!"







        ],

        







    },



    { 







        id: 62, 







        name: "Giro // White // 56cm", 







        price: 979.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_4802_bcdccfbb-5cc0-483f-b7fc-d901f6d8fdf9_2048x2048@2x.jpg?v=1769994434", 







            "https://www.njs-export.com/cdn/shop/files/IMG_4803_7e95996e-8b63-4741-ae74-880cb437034e_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4804_416f9f52-6d96-4961-bae9-ee57afcad6d8_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4806_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4807_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4808_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4811_c39af899-8941-4554-b78e-fb9da19c7f00_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4812_4d7d9606-2871-4d0d-aea5-13bc6db48698_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4813_372f94e5-8b0f-4b74-b41d-24567657527f_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4814_0af625f2-4164-4f83-afce-565fd8d1e013_2048x2048@2x.jpg?v=1769994434",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4815_4789dff7-f2e4-490e-af8e-34788f0ca7db_2048x2048@2x.jpg?v=1769994434",        







            "https://www.njs-export.com/cdn/shop/files/IMG_4816_c12aed4f-1209-4e34-ad83-c7eb3eadee0e_2048x2048@2x.jpg?v=1769994434",        







            "https://www.njs-export.com/cdn/shop/files/IMG_4817_15145b84-ed45-441e-948f-1eff8e4c106c_2048x2048@2x.jpg?v=1769994434",







            "https://www.njs-export.com/cdn/shop/files/IMG_4818_54bd1543-5aeb-45aa-a34b-cbd9b815f233_2048x2048@2x.jpg?v=1769994434",        







            "https://www.njs-export.com/cdn/shop/files/IMG_4821_9c96aa62-e1db-4d5f-9081-785d71945309_2048x2048@2x.jpg?v=1769994434"

        







        ], 







        specs: [







            "Color/White", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/56cm c-t", "Top tube/55.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/82cm" , "Model Year/2025",







            "Condition/This NJS Keirin track frame has a few chipped paints but is otherwise still in great condition!! No dents!!"







        ],

        







    },



    { 







        id: 63, 







        name: "Grand Velo // Bridgestone // Grayish bronze // White Two Tone // Tange No.1 // 50.5cm", 







        price: 799.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_9806_2048x2048@2x.JPG?v=1571438657", 







            "https://www.njs-export.com/cdn/shop/products/IMG_9810_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9807_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9808_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9809_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9811_922a648f-92d3-4f8f-902c-7b7ba5ddec89_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9812_7e5bff90-ec88-4f96-8219-f81a684d056d_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9813_53154098-406e-401b-a8a0-30ae45173af1_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9814_523d73be-874a-4501-9e68-86d31e2292be_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9815_2048x2048@2x.JPG?v=1571438657",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9816_2048x2048@2x.JPG?v=1571438657",        







            "https://www.njs-export.com/cdn/shop/products/IMG_9817_2048x2048@2x.JPG?v=1571438657",        







            "https://www.njs-export.com/cdn/shop/products/IMG_9818_2048x2048@2x.JPG?v=1571438657",







            "https://www.njs-export.com/cdn/shop/products/IMG_9819_2048x2048@2x.JPG?v=1571438657",        







            "https://www.njs-export.com/cdn/shop/products/IMG_9821_2048x2048@2x.JPG?v=1571438657"

        







        ], 







        specs: [







            "Color/White & Grayish Bronze Two Tone", "Headset/Hatta Swan Super Deluxe", "BB/Shimano BB-7500", "Seat tube/50.5cm c-t", "Top tube/55cm c-c", "Rear/110mm", "Seatpost diameter/26.8cm", "Standover/76cm" , "Model Year/1982",







            "Condition/This NJS Keirin track frame has some small chipped paint spots and a few rust spots (almost none) but is otherwise still in good used condition!! "







        ],

        







    },



    { 







        id: 64, 







        name: "Hiko // White // 55.5cm", 







        price: 899.99,





        images: [







           "https://www.njs-export.com/cdn/shop/files/IMG_4882_04d51303-7507-4176-9c6d-9ad5be36bb8e_2048x2048@2x.jpg?v=1770082061", 







            "https://www.njs-export.com/cdn/shop/files/IMG_4883_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4884_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4885_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4886_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4887_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4888_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4889_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4890_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4891_2048x2048@2x.jpg?v=1770082061",         







            "https://www.njs-export.com/cdn/shop/files/IMG_4892_2048x2048@2x.jpg?v=1770082061",        







            "https://www.njs-export.com/cdn/shop/files/IMG_4893_b37185c2-8e43-430d-9960-929f0d4aff68_2048x2048@2x.jpg?v=1770082061",        







            "https://www.njs-export.com/cdn/shop/files/IMG_4894_7fd9c829-b262-4bbe-9026-e1114d64bacd_2048x2048@2x.jpg?v=1770082061",







            "https://www.njs-export.com/cdn/shop/files/IMG_4895_581873e8-9e37-4368-8895-068cc557f8c0_2048x2048@2x.jpg?v=1770082061",        







            "https://www.njs-export.com/cdn/shop/files/IMG_4897_2048x2048@2x.jpg?v=1770082115"

        







        ], 







        specs: [







            "Color/ White", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/55.5cm c-t", "Top tube/56.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/81.5cm" , "Model Year/2023",







            "Condition/This NJS Keirin track frame has a few chipped paint spots but is otherwise still in great condition!! No dents!!!"







        ],

        







    },



    { 







        id: 65, 







        name: "Kiyo Miyazawa // Black Blue White Tricolor // 52cm", 







        price: 650.00,





        images: [







           "https://www.njs-export.com/cdn/shop/products/IMG_9819_6cbcbab1-474b-4394-b1dc-00dfedcf2e43_2048x2048@2x.jpg?v=1666920451", 







            "https://www.njs-export.com/cdn/shop/products/IMG_9820_1285050d-e86e-4b9a-af3a-43dc0c14c464_2048x2048@2x.jpg?v=1666920450",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9821_dc4e44f6-757a-4ed2-9bc8-dc44c256b57a_2048x2048@2x.jpg?v=1666920450",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9822_2048x2048@2x.jpg?v=1666920451",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9823_2048x2048@2x.jpg?v=1666920452",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9824_2048x2048@2x.jpg?v=1666920452",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9825_2048x2048@2x.jpg?v=1666920452",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9826_5aae7328-4c3c-46ed-9c63-5a2fcdb4347f_2048x2048@2x.jpg?v=1666920451",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9827_62582a89-20dd-49b6-b0d2-ef7d11d4c251_2048x2048@2x.jpg?v=1666920450",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9828_8d2de868-04f3-4644-9961-abf681305710_2048x2048@2x.jpg?v=1666920450",         







            "https://www.njs-export.com/cdn/shop/products/IMG_9829_45295c9c-ea94-44f6-9aff-00f3e5492841_2048x2048@2x.jpg?v=1666920471",        







            "https://www.njs-export.com/cdn/shop/products/IMG_9830_4812ac43-49ed-4f17-9900-f5689f8dc280_2048x2048@2x.jpg?v=1666920471",        







            "https://www.njs-export.com/cdn/shop/products/IMG_9831_20437c0a-6467-44a7-87dc-7cff6a9bf767_2048x2048@2x.jpg?v=1666920471",







            "https://www.njs-export.com/cdn/shop/products/IMG_9832_7649383b-5860-4bd5-a8af-dc7ad44a74ec_2048x2048@2x.jpg?v=1666920471",        







            "https://www.njs-export.com/cdn/shop/products/IMG_9833_5ef9dd07-1583-45fd-8acf-7be7a0cb49c4_2048x2048@2x.jpg?v=1666920471"

        







        ], 







        specs: [







            "Color/Black Blue White Tricolor ", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/52cm c-t", "Top tube/52.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/78cm" , "Model Year/2008",







            "Condition/This NJS Keirin track frame has some small chipped paint spots otherwise still in clean condition!! No dents!"







        ],

        







    },



    { 







        id: 4, 







        name: "Umezawa NJS Frameset.", 







        price: 900.00, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0061_11e75751-33ff-4bdd-8593-72c65bfc6522_1024x1024.jpg?v=1486148384", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0432_9782c300-7d9e-4a14-b2a3-80507f19a0eb_1024x1024.jpg?v=1486148389",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0468_82f2e0e7-0ffe-4f10-9261-00c7386b0939_1024x1024.jpg?v=1486148393",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0476_148d723f-c37e-4dcc-adda-a7b750d98d07_1024x1024.jpg?v=1486148398",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0471_c7cf0953-1f0f-41ca-b5e9-b3a2e456c1ab_1024x1024.jpg?v=1486148402",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0483_d7faeaa6-b9ee-4d41-b376-71dc89b1b6ef_1024x1024.jpg?v=1486148408",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0486_b7c81c4b-c7c2-440d-8828-929d0eba8c1c_1024x1024.jpg?v=1486148413"







        ], 







        specs: [







            "Built specifically for Keirin racing, bearing the NJS stamp", 







            "Condition: Newly Restored", "C-C: 50cm", "C-T: 52cm", "Top Tube: 51cm", "Seatpost Diameter: 27.2mm.", "Color: Rare Color Shift 3 tone", "Frame, Fork & Headset",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 5, 







        name: "Georama Red/Rainbow Flake #1 (55cm)", 







        price: 860.00, 







        images: [







            "https://www.njs-export.com/cdn/shop/products/109_a909a39f-ebb8-4ab1-9535-34a4fc557bbd_2048x2048@2x.JPG?v=1571438576", 







            "https://www.njs-export.com/cdn/shop/products/110_60233985-634c-4a64-8d0a-9bdff42cf441_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/111_315000ec-ec55-4f97-8426-d2c05d3897ab_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/112_088d3e99-1921-4809-93d0-50a522ab09b7_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/113_8778e7bb-4457-4313-9628-a2477cc01929_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/114_357ef72a-6908-400e-bda7-d61cb7656c19_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/115_87f5cef9-9db9-4fb5-8085-08ce08b5c6c7_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/116_1ec41271-5c7a-44f4-87a8-31a1e9e6c1ec_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/117_2250b18e-3796-460c-b5e3-68d8d367bee6_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/118_da29eca8-927c-4981-93b5-205d97ed3ed1_2048x2048@2x.JPG?v=1571438576",         







            "https://www.njs-export.com/cdn/shop/products/119_a1159397-22f4-4df2-83ee-48956506e041_2048x2048@2x.JPG?v=1571438576",        







            "https://www.njs-export.com/cdn/shop/products/120_fcce24e4-a848-4e50-addd-05f57e286499_2048x2048@2x.JPG?v=1571438576"







        ], 







        specs: [







            "Color/Red with rainbow flake", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/55cm c-t", "Top tube/56cm c-c", "Rear/120mm", "Seatpost diameter/27.0cm", "Standover/80.5cm", "Model Year/2008",







            "Condition/This NJS Keirin track frame has a few paint chips but is otherwise still in great condition."







        ] 







    },







    { 







        id: 6, 







        name: "Vintage Ravanello TT // Blue Metallic 57.5cm / Shimano trackends / Mizuno Carbon Fork", 







        price: 1580.00, 







        images: [







            "https://www.njs-export.com/cdn/shop/products/IMG_4981_2e7803d0-1e60-4d58-bf80-8ce5073e95a3_2048x2048@2x.jpg?v=1676957295", 







            "https://www.njs-export.com/cdn/shop/products/IMG_4982_773cf2eb-e710-4345-983d-379af951cdc5_2048x2048@2x.jpg?v=1676957294",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4983_81e52533-05c2-4741-8fd6-c59e8ef1e1c5_2048x2048@2x.jpg?v=1676957296",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4984_4f7eb5a5-8c55-44e7-9546-49e5f9efe338_2048x2048@2x.jpg?v=1676957295",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4985_07e4d4f6-a7e4-43f9-bb4d-d58026623779_2048x2048@2x.jpg?v=1676957297",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4986_57ad4461-6f48-4f81-ad45-f2fcee9fe83d_2048x2048@2x.jpg?v=1676957294",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4987_0f95beed-46a6-49ae-bfbe-79e802574def_2048x2048@2x.jpg?v=1676957294",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4988_a835489c-5b5e-41b7-8390-67e02160eb3a_2048x2048@2x.jpg?v=1676957294",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4989_f614d823-60e4-46b1-9fae-053fc58ad8da_2048x2048@2x.jpg?v=1676957296",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4990_6ebf8e33-3ea0-4aca-90c6-bc2b58961b46_2048x2048@2x.jpg?v=1676957295",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4991_d27e1e30-c391-42dd-950b-55568fc94130_2048x2048@2x.jpg?v=1676957294",        







            "https://www.njs-export.com/cdn/shop/products/IMG_4992_fe3de38d-8799-48e0-acce-de78b137522c_2048x2048@2x.jpg?v=1676957295",        







            "https://www.njs-export.com/cdn/shop/products/IMG_4993_6e0eb66c-9855-4801-9c0f-a4b5ba05a26c_2048x2048@2x.jpg?v=1676957295",







            "https://www.njs-export.com/cdn/shop/products/IMG_4994_f44d5fdc-eabf-4761-96b9-abc83fb0526e_2048x2048@2x.jpg?v=1676957297",        







            "https://www.njs-export.com/cdn/shop/products/IMG_4995_2048x2048@2x.jpg?v=1676957296",







            "https://www.njs-export.com/cdn/shop/products/IMG_4996_2048x2048@2x.jpg?v=1676957297",







            "https://www.njs-export.com/cdn/shop/products/IMG_4997_2048x2048@2x.jpg?v=1676957294"







        ], 







        specs: [







            "Color/ Blue Metallic", "Headset/Tange", "BB/Shimano Dura Ace BB-7610 NJS", "Seat tube/57.5cm c-t", "Top tube/58.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/83cm", "Model Year/90's",







            "Condition/This track frame has some chipped paint spots but is otherwise still in clean condition! No dents!"







        ] 







    },







    { 







        id: 7, 







        name: "Cherubim // Grayish Light Blue // 57.5cm", 







        price: 1999.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/files/IMG_0230_2048x2048@2x.jpg?v=1710996406", 







            "https://www.njs-export.com/cdn/shop/files/IMG_0231_2048x2048@2x.jpg?v=1710996404",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0232_61583166-bf13-4cf2-aee2-436efee670e8_2048x2048@2x.jpg?v=1710996404",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0233_66c5b2a1-515d-4f9c-95b5-d687a960b119_2048x2048@2x.jpg?v=1710996406",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0234_2048x2048@2x.jpg?v=1710996404",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0235_2048x2048@2x.jpg?v=1710996406",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0237_2048x2048@2x.jpg?v=1710996405",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0238_2048x2048@2x.jpg?v=1710996405",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0239_2048x2048@2x.jpg?v=1710996405",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0240_2048x2048@2x.jpg?v=1710996407",         







            "https://www.njs-export.com/cdn/shop/files/IMG_0241_2048x2048@2x.jpg?v=1710996407",        







            "https://www.njs-export.com/cdn/shop/files/IMG_0242_2048x2048@2x.jpg?v=1710996407",        







            "https://www.njs-export.com/cdn/shop/files/IMG_0243_2048x2048@2x.jpg?v=1710996404",







            "https://www.njs-export.com/cdn/shop/files/IMG_0244_2048x2048@2x.jpg?v=1710996405",        







            "https://www.njs-export.com/cdn/shop/files/IMG_0245_2048x2048@2x.jpg?v=1710996407",







            "https://www.njs-export.com/cdn/shop/files/IMG_0246_2048x2048@2x.jpg?v=1710996405"







        ], 







        specs: [







            "Color/ Grayish Light Blue", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/57.5cm c-t", "Top tube/59.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/83.5cm", "Model Year/2022",







            "Condition/This NJS Keirin track frame has a few chipped paint spots but is otherwise still in near mint condition!! Very slightly sloping toptube!"







        ] 







    },







    { 







        id: 8, 







        name: "Makino // Black Metallic // 55.5cm", 







        price: 599.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/products/IMG_1868_663fd981-014a-4542-ae33-568db4f3f527_2048x2048@2x.jpg?v=1649655415", 







            "https://www.njs-export.com/cdn/shop/products/IMG_1869_7436f7ad-ce26-4d44-b296-c80bc5928c9a_2048x2048@2x.jpg?v=1649655415",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1870_fce95de7-dec9-4181-993c-bf465b617edf_2048x2048@2x.jpg?v=1649655416",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1872_99911416-32f4-4607-a3d0-4d1a624bbaf3_2048x2048@2x.jpg?v=1649655415",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1873_c7d069cf-3a7f-4e93-8f3f-37032ef3fec0_2048x2048@2x.jpg?v=1649655416",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1874_6762c6fc-322c-41c1-91ad-120c213fd0bc_2048x2048@2x.jpg?v=1649655415",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1875_271edd3d-14b7-4413-a4c3-3964a8777630_2048x2048@2x.jpg?v=1649655414",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1876_cebe581d-4583-406d-9fd4-8565259385f7_2048x2048@2x.jpg?v=1649655416",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1877_7bee2a05-5640-4a42-b72a-99dd2ff1154c_2048x2048@2x.jpg?v=1649655413",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1878_1a0b9a06-dc38-4bfb-b703-6962e9e5c1b7_2048x2048@2x.jpg?v=1649655413",         







            "https://www.njs-export.com/cdn/shop/products/IMG_1879_a7837ed6-6be2-4385-bf81-16540c9c97b8_2048x2048@2x.jpg?v=1649655413",        







            "https://www.njs-export.com/cdn/shop/products/IMG_1880_f150a68e-6c93-43c7-9429-f8fcfaf9f9f3_2048x2048@2x.jpg?v=1649655417",        







            "https://www.njs-export.com/cdn/shop/products/IMG_1881_322716e1-70ff-44b8-942a-9b112b831c60_2048x2048@2x.jpg?v=1649655416",







            "https://www.njs-export.com/cdn/shop/products/IMG_1882_fc7820a0-4416-4fcf-9365-ac6e01d74db7_2048x2048@2x.jpg?v=1649655416",        







            "https://www.njs-export.com/cdn/shop/products/IMG_1883_f9131143-6c3b-4e34-a8e2-e70178735dad_2048x2048@2x.jpg?v=1649655413"







        ], 







        specs: [







            "Color/Black Metallic", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/55.5cm c-t", "Top tube/54.5cm c-c", "Rear/110mm", "Seatpost diameter/27.2mm", "Standover/82cm", "Model Year/2019",







            "Condition/This NJS Keirin track frame has some chipped paint spots and a minor dent on the left side of the toptube but is otherwise still in good used condition!"







            ] 







    },







    { 







        id: 9, 







        name: "LEVANT Columbus Max Fork // Pinkish Silver // 54cm", 







        price: 799.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/products/IMG_3526_2048x2048@2x.jpg?v=1673413268", 







            "https://www.njs-export.com/cdn/shop/products/IMG_3527_2048x2048@2x.jpg?v=1673413268",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3528_2048x2048@2x.jpg?v=1673413269",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3529_3d8a0561-5f4e-4ebc-ae14-454680f75310_2048x2048@2x.jpg?v=1673413268",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3530_40a6efbb-8cf5-4f0c-926e-667cfceee652_2048x2048@2x.jpg?v=1673413270",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3531_d0c23bdc-48c4-4c7e-a42a-876c5dfcb56c_2048x2048@2x.jpg?v=1673413270",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3532_101cfa46-ff61-4cad-9100-a06da3547b8e_2048x2048@2x.jpg?v=1673413271",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3533_739eee19-8172-4500-be63-d25d98252d45_2048x2048@2x.jpg?v=1673413269",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3534_36fe14ff-b75f-47b6-870c-c7796a563586_2048x2048@2x.jpg?v=1673413270",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3535_1451c87a-ee18-45e8-8414-f8f65db675ee_2048x2048@2x.jpg?v=1673413268",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3536_fe3364ac-b598-450f-80db-d7682a113b54_2048x2048@2x.jpg?v=1673413271",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3537_51ea1cb0-ddfa-4d11-876f-50c4ae7a253b_2048x2048@2x.jpg?v=1673413271",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3538_613046bc-57d5-4703-b2f7-245281744770_2048x2048@2x.jpg?v=1673413269",







            "https://www.njs-export.com/cdn/shop/products/IMG_3539_269a7afb-ae4d-4f16-8de0-7e1966d7d3bf_2048x2048@2x.jpg?v=1673413272",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3540_eb1d8f01-0729-4bf5-aa16-9d069948575f_2048x2048@2x.jpg?v=1673413272",







            "https://www.njs-export.com/cdn/shop/products/IMG_3541_130a09d0-f842-4074-acae-c5157fe1df74_2048x2048@2x.jpg?v=1673413272"







        ], 







        specs: [







            "Color/ Pinkish Silver", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/54cm c-t", "Top tube/58cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/81cm", "Model Year/2021", 







            "Condition/This njs track frame has some small chipped paint spots but is otherwise still in great condition! Slightly sloping toptube!"







        ] 







    },







    { 







        id: 10, 







        name: "Makino // Red Metallic // 54cm", 







        price: 750.00, 







        images: [







            "https://www.njs-export.com/cdn/shop/files/IMG_5999_2048x2048@2x.jpg?v=1726550456", 







            "https://www.njs-export.com/cdn/shop/files/IMG_6000_2048x2048@2x.jpg?v=1726550456",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6001_2048x2048@2x.jpg?v=1726550456",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6002_2048x2048@2x.jpg?v=1726550457",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6003_2048x2048@2x.jpg?v=1726550457",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6004_2048x2048@2x.jpg?v=1726550456",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6005_2048x2048@2x.jpg?v=1726550456",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6006_2048x2048@2x.jpg?v=1726550456",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6007_2048x2048@2x.jpg?v=1726550457",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6008_2048x2048@2x.jpg?v=1726550456",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6009_2048x2048@2x.jpg?v=1726550457",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6014_2048x2048@2x.jpg?v=1726550457"







        ], 







        specs: [







            "Color/Red Metallic", "Headset/Shimano HP-7410", "BB/Shimano BB-7700", "Seat tube/54cm c-t", "Top tube/55cm c-c", "Rear/120mm", "Seatpost diameter/27.2cm", "Standover/79cm", "Model Year/2018",







            "This njs track frame has some small chipped paint spots but is otherwise still in clean!!"







        ] 







    },







    { 







        id: 11, 







        name: "Makino Columbus Max Fork // Red Metallic // 54cm /240924", 







        price: 699.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/files/IMG_6312_2048x2048@2x.jpg?v=1727135870", 







            "https://www.njs-export.com/cdn/shop/files/IMG_6313_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6314_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6315_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6316_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6317_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6318_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6319_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6320_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6321_2048x2048@2x.jpg?v=1727135870",         







            "https://www.njs-export.com/cdn/shop/files/IMG_6322_2048x2048@2x.jpg?v=1727135870",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6323_2048x2048@2x.jpg?v=1727135870",        







            "https://www.njs-export.com/cdn/shop/files/IMG_6327_2048x2048@2x.jpg?v=1727135870"







        ], 







        specs: ["Color/ Chrome Candy Blue", "Condition/ Excellent"] 







    },







    { 







        id: 12, 







        name: "Makino Columbus Max Fork // Red Metallic / Silver Marble Finish // 53.5cm", 







        price: 899.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/products/IMG_3646_199909e8-357b-4d9a-8dd6-7283ff14e7b5_2048x2048@2x.jpg?v=1673762972", 







            "https://www.njs-export.com/cdn/shop/products/IMG_3647_675c5c4a-7c07-4b95-9481-a9a2f009ac01_2048x2048@2x.jpg?v=1673762971",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3648_06c417c5-3318-404c-a500-0c1e1c460aa8_2048x2048@2x.jpg?v=1673762972",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3649_946279eb-4ae9-44bf-aaea-5711f3909c25_2048x2048@2x.jpg?v=1673762974",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3651_62edf01d-b32a-4026-b575-9b82e83b0df6_2048x2048@2x.jpg?v=1673762972",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3652_f1cb05f0-31bd-4f48-8a99-c4aacce7660d_2048x2048@2x.jpg?v=1673762972",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3653_3cce7657-a621-4306-90af-380fb1bb3c11_2048x2048@2x.jpg?v=1673762973",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3654_2048x2048@2x.jpg?v=1673762973",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3655_2048x2048@2x.jpg?v=1673762974",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3657_f14abc6e-a0e8-4a42-a7e4-3122c9de80c6_2048x2048@2x.jpg?v=1673762973",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3658_faf3c4c5-ce3e-4e1d-83fb-8852ae3a9a07_2048x2048@2x.jpg?v=1673762975",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3659_2a1966ca-183b-44ac-9695-b5c91a2de920_2048x2048@2x.jpg?v=1673762975",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3661_0a542433-0aab-42b8-82c5-8bc3cedfe3ac_2048x2048@2x.jpg?v=1673762972"







        ], 







        specs: [







            "Color/Red Metallic / Silver Marble Finish", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/53.5cm c-t", "Top tube/55cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/77.5cm", "Model Year/2020",







            "This njs track frame has a few chipped paint spots but is otherwise still in great condition! "







        ] 







    },







    { 







        id: 13, 







        name: "Yamamoto Columbus Max Fork // Blue // 53cm", 







        price: 879.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/files/IMG_8325_28fae179-8c40-4ad2-909e-3f7f7b2e04bd_540x.jpg?v=1755231789", 







            "https://www.njs-export.com/cdn/shop/files/IMG_8326_540x.jpg?v=1755231789",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8327_2048x2048@2x.jpg?v=1755231789",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8328_2048x2048@2x.jpg?v=1755231789",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8330_2048x2048@2x.jpg?v=1755231790",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8333_2048x2048@2x.jpg?v=1755231790",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8334_2048x2048@2x.jpg?v=1755231790",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8335_2048x2048@2x.jpg?v=1755231790",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8336_2048x2048@2x.jpg?v=1755231789",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8337_663fc4e5-1fe3-4a33-89df-166a93254517_2048x2048@2x.jpg?v=1755231790",         







            "https://www.njs-export.com/cdn/shop/files/IMG_8339_212da7d1-aa8b-4f11-b58f-8a7c8d0ad787_2048x2048@2x.jpg?v=1755231790",        







            "https://www.njs-export.com/cdn/shop/files/IMG_8340_486baaea-6fdb-44c6-a178-714093453b58_2048x2048@2x.jpg?v=1755231789",        







            







        ], 







        specs: [







            "Color/ Blue", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/53cm c-t", "Top tube/55.5cm", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/79.5cm", "Model Year/2023",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in clean condition!! No dents!!!"







        ] 







    },







    { 







        id: 14, 







        name: "Super Rare! Look 496 Carbon Track Frame Japan National Team Athens Olympics Version // Black/Red // 52cm", 







        price: 2780, 







        images: [







            "https://www.njs-export.com/cdn/shop/files/IMG_1566_e8386752-3e25-418f-b054-0f95dffce4d4_2048x2048@2x.jpg?v=1693373306", 







            "https://www.njs-export.com/cdn/shop/files/IMG_1567_c6db87e6-3117-4b16-a99d-89c6d476ffb5_2048x2048@2x.jpg?v=1693373305",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1568_1d7aa49a-b090-49f5-b94d-5cf1edebad07_2048x2048@2x.jpg?v=1693373306",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1569_d2d7ee93-8e80-4be0-89b3-c9e8b84f3dbb_2048x2048@2x.jpg?v=1693373305",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1570_0e78da16-b9ce-450c-b82f-61693d858f01_2048x2048@2x.jpg?v=1693373305",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1571_7d2cbcd0-bf2f-4e7b-a95f-928badf3bb9f_2048x2048@2x.jpg?v=1693373307",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1572_59836391-de1c-4902-8e56-0580437372d0_2048x2048@2x.jpg?v=1693373305",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1573_d82ced8c-0bbb-4b3e-8ea9-a60b9bf7051b_2048x2048@2x.jpg?v=1693373306",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1574_41c14eac-c44b-4ec8-a3fd-b7b418c29d7b_2048x2048@2x.jpg?v=1693373307",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1576_2048x2048@2x.jpg?v=1693373307",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1577_2048x2048@2x.jpg?v=1693373305",        







            "https://www.njs-export.com/cdn/shop/files/IMG_1578_2048x2048@2x.jpg?v=1693373306",        







            "https://www.njs-export.com/cdn/shop/files/IMG_1581_1656f6c6-3c01-4922-8193-17a86c732376_2048x2048@2x.jpg?v=1693373306"







        ], 







        specs: [







            "Color/Black/Red", "Headset/Comes with Look Ergo Stem", "BB/Shimano BB-7700", "Seat tube/52cm c-t", "Top tube/ 53cm c-c approx", "Rear/120mm", "Seatpost diameter/ With an original carbon seatpost", "Standover/76.5cm", "Model Year/2004",







            "Condition/This track frame has some chipped paint spots but is otherwise good used condition!!"







        ] 







    },







    { 







        id: 15, 







        name: "PRESTO Columbus Max Fork // Red with rainbow flake // 53cm", 







        price: 799.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/products/IMG_4241_db2ee878-323e-43ca-936e-412160d364d0_2048x2048@2x.jpg?v=1674548499", 







            "https://www.njs-export.com/cdn/shop/products/IMG_4242_f48955d6-1450-4b67-ad7b-cef59abd14cb_2048x2048@2x.jpg?v=1674548503",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4243_71496773-529a-4a8d-a550-2d134a8315c3_2048x2048@2x.jpg?v=1674548501",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4244_d7a00383-500a-4537-b706-9cbd5babe000_2048x2048@2x.jpg?v=1674548500",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4245_47185abf-2117-4981-96d9-11cc0325b403_2048x2048@2x.jpg?v=1674548500",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4246_cb7fe370-a5af-4247-8171-685b68fc3a7a_2048x2048@2x.jpg?v=1674548501",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4247_39294137-0bab-481d-823a-c543deeac08e_2048x2048@2x.jpg?v=1674548501",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4248_dc078fbd-6576-4256-ae6c-5c868735c834_2048x2048@2x.jpg?v=1674548500",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4249_2048x2048@2x.jpg?v=1674548500",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4250_2048x2048@2x.jpg?v=1674548502",         







            "https://www.njs-export.com/cdn/shop/products/IMG_4251_2048x2048@2x.jpg?v=1674548499",        







            "https://www.njs-export.com/cdn/shop/products/IMG_4252_2048x2048@2x.jpg?v=1674548501",        







            "https://www.njs-export.com/cdn/shop/products/IMG_4253_2048x2048@2x.jpg?v=1674548502",







            "https://www.njs-export.com/cdn/shop/products/IMG_4256_2048x2048@2x.jpg?v=1674548501"







        ], 







        specs: [







            "Color/Red with rainbow flake", "Headset/Shimano HP-7410", "BB/Hatta R9400", "Seat tube/53cm c-t", "Top tube/55cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm" , "Standover/78.5cm", "Model Year/2021",







            "Condition/This NJS Keirin track frame has some small chipped paint spots but is otherwise still in clean condition."







        ] 







    },







    { 







        id: 16, 







        name: "Makino // Candy Black / Chrome Plated // 53cm", 







        price: 499.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/files/IMG_5613_2048x2048@2x.jpg?v=1771205009", 







            "https://www.njs-export.com/cdn/shop/files/IMG_5614_19b4018b-3e18-4bc2-8c84-be724fe77915_2048x2048@2x.jpg?v=1771205191",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5616_808f82c7-fdcd-4955-befc-0783693a3c77_2048x2048@2x.jpg?v=1771205191",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5617_0d7994cf-64a1-4b78-a675-2d1e97b55265_2048x2048@2x.jpg?v=1771205191",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5620_e6d82758-9da5-4fdb-be7c-1c598cf84d4f_2048x2048@2x.jpg?v=1771205191",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5621_d05d5ab1-4491-4110-b422-af561fe9fecc_2048x2048@2x.jpg?v=1771205191",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5623_2699af50-eb2c-405a-83bd-7bdac6c10678_2048x2048@2x.jpg?v=1771205191",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5628_b63f2624-c35b-49b6-ba47-ef95dfb52838_2048x2048@2x.jpg?v=1771205191",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5615_526d46e4-a402-4a9e-b040-f6334ab7b23c_2048x2048@2x.jpg?v=1771205192",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5618_7133f9d9-0ba3-417a-84bd-be614ddf70f5_2048x2048@2x.jpg?v=1771205192",         







            "https://www.njs-export.com/cdn/shop/files/IMG_5619_2048x2048@2x.jpg?v=1771205192",        







            "https://www.njs-export.com/cdn/shop/files/IMG_5622_e0f0d80d-6c9b-4d39-a247-1f1600488466_2048x2048@2x.jpg?v=1771205193",        







            "https://www.njs-export.com/cdn/shop/files/IMG_5624_bc001581-ed5c-47f7-a0bb-02007e2949c6_2048x2048@2x.jpg?v=1771205193",







            "https://www.njs-export.com/cdn/shop/files/IMG_5625_94b5cabf-50f8-4b89-b480-bba00be4ee4e_2048x2048@2x.jpg?v=1771205192",        







            "https://www.njs-export.com/cdn/shop/files/IMG_5629_80dc983d-8d66-44e4-b570-172751b60e55_2048x2048@2x.jpg?v=1771205192"







        ], 







        specs: [







            "Color/ Candy Black / Chrome Plated ", "Headset/ Shimano HP-7410", "BB/ Hatta R9400", "Seat tube/ 53cm c-t", "Top tube/ 53.5cm c-c", "Rear/110mm", "Seatpost diameter/ 27.2mm", "Standover/78.5cm", "Model Year/ 2005",







            "This njs track frame has some chipped paint spots, a few minor rust spots(⁠almost none⁠⁠)⁠ and minor dents on the both sides of the toptube but is otherwise still in good used condition!"







        ] 







    },







    { 







        id: 17, 







        name: "SAMSON // Red // 52.5cm", 







        price: 1179.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/files/IMG_1909_2048x2048@2x.jpg?v=1694057668", 







            "https://www.njs-export.com/cdn/shop/files/IMG_1910_2048x2048@2x.jpg?v=1694057668",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1911_2048x2048@2x.jpg?v=1694057670",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1912_2048x2048@2x.jpg?v=1694057668",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1913_2048x2048@2x.jpg?v=1694057671",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1914_2048x2048@2x.jpg?v=1694057669",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1915_f53b1336-d3a5-45ce-b1ef-81af453431fd_2048x2048@2x.jpg?v=1694057669",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1916_222942d8-b1bf-4b65-9b6a-98ed24a2ad13_2048x2048@2x.jpg?v=1694057670",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1917_758cd52e-01ef-4039-b0eb-b0acda7c09d2_2048x2048@2x.jpg?v=1694057668",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1918_a5c2938d-0376-482f-b6e9-822ec4b2010d_2048x2048@2x.jpg?v=1694057669",         







            "https://www.njs-export.com/cdn/shop/files/IMG_1919_2048x2048@2x.jpg?v=1694057668",        







            "https://www.njs-export.com/cdn/shop/files/IMG_1920_bef4cd42-8b39-4025-8a90-6bc4259c0994_2048x2048@2x.jpg?v=1694057668",        







            "https://www.njs-export.com/cdn/shop/files/IMG_1921_53e24167-2730-4225-a508-5a2eb637170f_2048x2048@2x.jpg?v=1694057670",







            "https://www.njs-export.com/cdn/shop/files/IMG_1922_159286fa-7aa7-4f5b-9090-078a7759b7dd_2048x2048@2x.jpg?v=1694057669",        







            "https://www.njs-export.com/cdn/shop/files/IMG_1923_28d2e46e-d9da-4e24-9955-871e6fb94392_2048x2048@2x.jpg?v=1694057670",







            "https://www.njs-export.com/cdn/shop/files/IMG_1924_6401c341-0e02-4cb3-8604-f11ffe0a8b68_2048x2048@2x.jpg?v=1694057671"







        ], 







        specs: [







            "Color/Red", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/52.5cm c-t", "Top tube/53.5cm c-c", "Rear/120mm", "Seatpost diameter/27.2mm", "Standover/77.5cm", "Model Year/2003",







            "Condition/This NJS Keirin track frame has some chipped paint spots but is otherwise still in clean condition! No dents!"







        ] 







    },







    { 







        id: 18, 







        name: "SAMSON Illusion // Yellow with rainbow flake // 50cm", 







        price: 699.99, 







        images: [







            "https://www.njs-export.com/cdn/shop/products/IMG_3753_cdbbfe5b-e69b-42cb-8b29-198aceaf5815_2048x2048@2x.jpg?v=1674018746", 







            "https://www.njs-export.com/cdn/shop/products/IMG_3754_474e0ae2-f239-4d8b-9f9e-1ffbc65cc17b_2048x2048@2x.jpg?v=1674018749",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3755_2048x2048@2x.jpg?v=1674018749",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3756_2048x2048@2x.jpg?v=1674018748",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3757_e96d7176-2fda-406d-94dd-7900472fab0a_2048x2048@2x.jpg?v=1674018748",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3758_604afc62-30a2-42f5-929b-317272ef7038_2048x2048@2x.jpg?v=1674018750",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3759_2048x2048@2x.jpg?v=1674018747",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3760_2048x2048@2x.jpg?v=1674018749",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3761_2048x2048@2x.jpg?v=1674018747",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3762_2048x2048@2x.jpg?v=1674018747",         







            "https://www.njs-export.com/cdn/shop/products/IMG_3763_bd9cf0e3-31aa-4b2c-a605-0caf8d93407a_2048x2048@2x.jpg?v=1674018750",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3764_f43aeca8-a029-48ec-912e-8d88981a7472_2048x2048@2x.jpg?v=1674018747",        







            "https://www.njs-export.com/cdn/shop/products/IMG_3765_531efd54-d781-4b6b-8c0a-69d171f86a04_2048x2048@2x.jpg?v=1674018748",







            "https://www.njs-export.com/cdn/shop/products/IMG_3768_a7d72ec6-58bb-4bef-9520-42e637d21161_2048x2048@2x.jpg?v=1674018747"







        ], 







        specs: [







            "Color/Yellow with rainbow flake", "Headset/Hatta Swan Super Deluxe", "BB/Hatta R9400", "Seat tube/50cm c-t", "Top tube/55.5cm c-c", "Rear/110mm", "Seatpost diameter/27.2mm", "Standover/77cm", "Model Year/2003",







            "Condition/This NJS Keirin track frame has some small chipped paint spots and a few minor rust spots (almost none) but is otherwise still in good used condition! "







        ] 







    },







    { 







        id: 19, 







        name: "IRIBE (NJS) Frameset", 







        price: 880.00, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/Iribe_1024x1024.jpg?v=1486201524", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0350_1024x1024.jpg?v=1486201524",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0352_1024x1024.jpg?v=1486201524",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0356_1024x1024.jpg?v=1486201524",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0360_6b9b32df-794b-4e54-9e1e-fae99b38d0b4_1024x1024.jpg?v=1486201524",         







        ], 







        specs: [







            "Built specifically for Keirin racing, bearing the NJS stamp.",







            "Condition: Minor paint chipped", "C-C: 53cm", "C-T: 54.5cm", "Top Tube: 55cm", "Seatpost Diameter: 27.2mm", "Color: Pink with Silver Flakes", "Weight: 2.5kg", "Frame, Fork & Headset.",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 20, 







        name: "1984 Cinelli Laser Team Issue Pista Frameset", 







        price: 12000, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0074_1024x1024.jpg?v=1473442333", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0076_1024x1024.jpg?v=1473442333",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0078_1024x1024.jpg?v=1473442333",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0081_66ae4141-0200-4f38-a700-a1e2901f01f7_1024x1024.jpg?v=1473442333",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0082_1024x1024.jpg?v=1473442333",         







        ], 







        specs: [







            "PLEASE NOTE THAT THERE IS NO PRICE TAG TO THIS ITEM. WE'LL CONSIDER ANY REASONABLE OFFERS. DO EMAIL US FOR MORE INFO AND YOUR OFFERS.",







            "This exquisite 1984 Cinelli Laser Pista is one of the 300 custom made Lasers ever produced. Designed by Antonio Colombo, engineered by Paolo Erzegovesi for legendary track cyclists such as Lothar Thoms and Hans-Henrik Oersted and made by hand by Andrea Pesenti. The Laser embodies a synergistic integration of design and engineering into a work of art. Built with Columbus SLX tubing and compliment with a rare special Cinelli aero-bladed Airfork which make this frameset even special among many other Cinelli Lasers. This is a national team issue bike . Its a genuine bike with Bb no. L12 . It was proven by Cinelli Headquaters .",







            "Condition: Minor Paint chips", "Seat Tube: 57cm", "Top Tube: 57cm", "Seatpost Diameter: 27.2mm", "Color: Cinelli Blue",







        ] 







    },







    { 







        id: 21, 







        name: "Colnago Master Piu Lo Pro Frameset", 







        price: 2150, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_1080_1024x1024.jpg?v=1479206396", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_1047_large.jpg?v=1479206396",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_1035_1024x1024.jpg?v=1479206396",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_1084_large.jpg?v=1479206396",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_1090_large.jpg?v=1479206396",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_1093_large.jpg?v=1479206396",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_1097_1024x1024.jpg?v=1479206396"







        ], 







        specs: [







            "In 1983, Colnago Ernesto introduced the Oval CX with an oval-shaped top tube to add stiffness. He then experimented with various crimped-tube frames which became production models as their top of the range frames, beginning with the Master. Later Master-Light, Master Olympic and Master Piu extended the range.",







            "Ernesto Colnago is synonymous with tradition. Colnago has been making frames for over 50 years: Probably the most famous and revered frames in the world. Most races in the world- almost without exception- have been won at one time or another on a Colnago. Colnago has made frames for all the great riders: Merckx, LeMond, Moser, Museeuw, Argentin, Saroni, Rominger, Bartoli, Dekker, Tonkov, Steels. The list goes on and on. Talk to any cyclist, they'll tell you, 'There is something about a Colnago…' If you ride a bike you have to own a Colnago some day.",







            "Condition: Mint", "C-C: 53cm", "C-T: 55cm", "Top Tube: 56.5cm", "Seatpost Diameter: 27.2mm", "Color: Chrome Polished", "Frame, Fork & Headset",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 22, 







        name: "Cannondale 92 Track Frameset.", 







        price: 2500, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0363_e3847a01-8812-40cb-b341-1f2b77c03342_1024x1024.jpg?v=1652010463", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0397_a3652434-774d-4d46-823e-1961e2b7b053_1024x1024.jpg?v=1652010463",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0396_10dcbfda-19e5-4ea4-9fee-fb4b9095227c_1024x1024.jpg?v=1652010464",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0447_6512915e-1202-47f5-8ae8-313dc5df37de_1024x1024.jpg?v=1652010463",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0444_debac97c-afbf-4354-8143-acd48e2fcb9b_1024x1024.jpg?v=1652010464"







        ], 







        specs: [







            "This Cannondale Track is incredibly stiff, exquisitely nimble and weighs only at 1.45kg. The frame feature flex-resistant, oversized aluminium tubings with a super beefy two-inch downtube that channels pedaling energy directly to the rear wheel. The cantilever rear triangle fight flex joining chainstay and seatstay forward of the dropouts for a lighter, more efficient configuration. Altogether with an aggresive head angle with a short wheelbase that combine to deliver a more precise handling.",







            "Condition: Restored", "Size: 54", "Seatpost Diameter: 27.2mm", "Color: Blue", "Frame, Fork and headset",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 23, 







        name: "Samson Columbus Squadra Corse Track Frameset.", 







        price: 1250, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0207_0257a7f9-b06d-4f62-b709-d1499aaa7a4f_1024x1024.jpg?v=1622298352", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0211_1024x1024.jpg?v=1622298410",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0209_1024x1024.jpg?v=1622298410",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0251_large.jpg?v=1622298352",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0252_b87127d0-42db-44ce-8b05-797358a59e44_1024x1024.jpg?v=1622298352"







        ], 







        specs: [







            "Tetsuro Harada of Samson Bicycles Japan has over 40 years as a frame parts manufacturer and as a frame builder. He learnt the frame-making in the shop in Fukuoka, and became independent in 1978.",







            "He visited the tubing maker Columbus Co. of Italy directly. Curiosity to the material of the frame is vigorous, and his attainments are also deep.",







            "He keeps originally producing small articles of the frame, and having a large influence on the frame builder of Japan.",







            "Since 1982, Harada-san collaboration with Richard Sachs with Samson parts on more than 1200 Richard Sachs frames till today.",







            "Samson Illusion one of its top line by Harada-san. This particular one is specially build with Columbus Squadra Corse.",







            "Condition: Newly Restored", "C-C: 50cm", "C-T: 52cm", "Top Tube: 52cm", "Seatpost Diameter: 27.2", "Color: Turquoise with Flakes", "Frame, Fork & Headset",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 24, 







        name: "Panasonic Order System Aero Track Frameset.", 







        price: 1450, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0196_fbb24f88-55cf-4daf-9fcf-cbb7424b10b6_1024x1024.jpg?v=1622296381", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0236_057aca3a-59cc-4482-a5ed-ae710b88951a_1024x1024.jpg?v=1622296381",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0235_f07c1e66-02a9-4a72-b9cc-a9149f874eff_large.jpg?v=1622296382",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0263_37df755e-d7af-4f65-a53b-e7b997112316_1024x1024.jpg?v=1622296382",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0264_2d8123da-fa1c-4a6f-a057-7d857569474c_1024x1024.jpg?v=1622296382"         







        ], 







        specs: [







            "Mr Matsushita would not abide by low quality in Panasonic bicycles no matter the profit margins. Since 1960s, The Japanese Racing Team adopt Panasonic built for all it's World Champion competition and Olympics.",







            "1970s, They branched out to Panasonic Company in US.",







            "Here in our store, we're fortunate to have secure this beautiful Panasonic Order System build with Aero downtube altogether with Intricate little webbed lugs.",







            "Condition: Newly Restored", "C-C: 50.5cm", "C-T: 52.5cm", "Top Tube: 52.5cm", "Seatpost Diameter: 27.2", "Color: White & Pink", "Frame, Fork, & Headset.",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 25, 







        name: "Ravanello Kein (NJS) Track Frameset", 







        price: 1450, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0279_833e6e52-f23b-4e34-9d9b-949c57fa2df1_1024x1024.jpg?v=1622298013", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0325_419c2d1d-e99c-4e9d-80ce-9246dcb4eff5_1024x1024.jpg?v=1622298013",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0324_71f1f0b4-5da7-446b-aa33-b11e9fc2fb85_large.jpg?v=1622298013",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0339_1024x1024.jpg?v=1622298013",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0340_69052820-5c56-412c-9eee-5f3300ee27a5_1024x1024.jpg?v=1622298013"        







        ], 







        specs: [







            "In 1980, the winner of the Moscow Olympics Japan National Team Player Selection Tournament drove Ravanello to the spotlight. In 1994 he was appointed as a sports coach for the strengthening staff of the Japanese Olympic Committee. In 2000, he coached at the Sydney Paralympics and helped win a gold medal in a visually impaired tandem.",







            " His team, Ravanello, is said to be one of the leading club teams in Japan, and has won the Tour de Hokkaido three times. He even works as a coach, coach and mechanic on the team. In recent years, the emphasis has been on training young players such as U17, Jr, and U23. We also carry out cycling for good health.",







            "Ravanello is a full-order bicycle frame that is manufactured one by one according to the customer. Also, As the catchphrase of Running Ravanello, they are very particular about the feeling of riding and always make frames based on actual rides experience, such as lightness of stepping and cornering performance. I'm sure your values for your bike will change.",







            "Condition: Newly Restored", "C-C: 52cm", "C-T: 54cm", "Top Tube: 54cm", "Seatpost Diameter: 27.2", "Color: Metallic Blue", "Frame, Fork, & Headset.",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 26, 







        name: "3Rensho Katana Keirin (NJS) Frameset.", 







        price: 1500, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0369_1024x1024.jpg?v=1652004462", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0379_0de63962-cec9-4eaa-9996-a6e4ec1ef9ac_1024x1024.jpg?v=1652004463",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0389_33bb5e63-4d93-4488-aecb-b41a95601ab6_1024x1024.jpg?v=1652004462",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0459_e832d502-9db3-4e8c-8c33-68a166f787d8_1024x1024.jpg?v=1652004462",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0460_78929ee2-11b4-486e-b344-a331c3f38e24_1024x1024.jpg?v=1652004462"







        ], 







        specs: [







            "Mr Yoshi Konno began his building career by unbrazing Cinellis acquired after",







            "the 1964 Tokyo Olympics. His accomplished collegiate cycling career brought him initial notice in the cycling community. He remained a formidable cyclist through middle age, completing a quick double century on his 40th birthday.",







            "His famous customers include Koichi Nakano (most of whose frames were Nagasawas), Dave Grylls (Pan Am gold medal), Gibby Hatton, Dave Harrington, Bob Mionske (4th at Seoul Olympics, 12th at Barcelona Olympics, US National Road Champion), Dan Casebeer (US Hour record) and Greg Meeker.",







            "Their build start on Cyclone, Katana, Modeulo.. Then all the Special & Custom & Team Issues. Irregardless, they are all the Finest of the Finest!",







            "Condition: Newly Restored", "Seat Tube: 52cm (c-c)", "53.5 (c-t)", "Top Tube: 53.5cm", "Seatpost Diameter: 27.2mm", "Color: Black Pearl", "Weight: 2.45kg", "Frame, Fork & Headset",







            "Listed Price includes International Shipping, Paypal fee & Tax.",







        ] 







    },







    { 







        id: 27, 







        name: "Nagasawa Special Nervex Keirin (NJS) Frameset.", 







        price: 1500, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0365_1024x1024.jpg?v=1652007118", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0383_43ac6254-6248-4958-bcc3-aedf9fe2e2fd_1024x1024.jpg?v=1652007118",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0384_e77bac71-0ac6-49bd-b294-fa51226b4b23_1024x1024.jpg?v=1652007118",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0452_ff21fa86-db3b-4af2-93a1-1ffabd069feb_1024x1024.jpg?v=1652007118",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0453_e69cf052-5ed1-4d98-b0c2-d1a9e5ecfdca_1024x1024.jpg?v=1652007119",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0455_6dbafdc1-0dd7-4464-a7b0-bde6bbe9da61_1024x1024.jpg?v=1652007118",         







        ], 







        specs: [







            "There are many legends coloring Nagasawa’s career. After graduating from college, he went to Italy in 1970. Being a trainee at Pogliaghi, then spent the next six years at De Rosa learning from him.",







            "In 1976, Nagasawa met with Koichi Nakano, who had just graduated from Keirin School a year before. In ’77, these two started working together, which their combined efforts created a cycling legend; 10 consecutive world Championship sprint titles.",







            "Condition: Newly restored ", "C-C: 52.5cm", "C-T: 54cm", "Top Tube: 54.5cm", "Seatpost Diameter: 27.2mm", "Color: Nakano Red", "Frame, Fork & Headset",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 28, 







        name: "Kalavinka Super Exhibition Columbus Tubings (NJS) Frameset", 







        price: 1100, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/IMG_3177-2_1024x1024.jpg?v=1451374404", 







            "https://kuromoribikeco.com/cdn/shop/products/IMG_3193_1024x1024.jpg?v=1451374408",         







            "https://kuromoribikeco.com/cdn/shop/products/IMG_3191_large.jpg?v=1451374410",         







            "https://kuromoribikeco.com/cdn/shop/products/IMG_3181_1024x1024.jpg?v=1451374413"







        ], 







        specs: [







            "Kalavinka frames are starting to be worth big bucks and highly sought after Worldwide, built by the famous Tanabe San in Tokyo, Japan. Particularly this Kalavinka, they are specially made up of columbus tubing.",







            "Condition: Some paint chip", "Seat Tube: 53cm", "Top Tube: 53cm", "Seatpost Diameter: 27.2mm", "Color: Green", "Weight: 2.6kg", "Frame, Fork & Headset.",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    },







    { 







        id: 29, 







        name: "Makino Columbus Genius Keirin (NJS) Frameset", 







        price: 1000, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_2812_1024x1024.jpg?v=1446568915", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_2818_1024x1024.jpg?v=1446568926",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0460_1024x1024.jpg?v=1446845016",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0464_1024x1024.jpg?v=1446845026",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0465_1024x1024.jpg?v=1446845038"         







        ], 







        specs: [







            "Chief frame builder at 3rensho, Masahiko Makino started his own brand called MAKINO and has worked on many frames for the world’s top cyclists. Makino’s got a reputation for producing more elaborate, original lugs that fit elegantly into the frame. During the Atlanta Olympic Games, a Japanese keirin racer won a gold in the 1000m TT on a 3Rensho, built by Makino himself.",







            "This frameset itself is built with the high reputable Columbus Genius tubings.",







            "Condition: Some paint chip & rust", "Seat Tube: 53cm", "Top Tube: 53cm", "Seatpost Diameter: 27.2mm", "Color: Silver with Flakes", "Weight: 2.4kg", "Tubing: Columbus Genius", "Frame, Fork & Headset.",







            "Listed Price includes International Shipping, Paypal fee & Tax." 







        ] 







    },







    { 







        id: 30, 







        name: "Umezawa Keirin (NJS) Frameset", 







        price: 750, 







        images: [







            "https://kuromoribikeco.com/cdn/shop/products/DSC_2826_1024x1024.jpg?v=1446569823", 







            "https://kuromoribikeco.com/cdn/shop/products/DSC_2830_large.jpg?v=1446569827",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0403_1024x1024.jpg?v=1446846574",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0406_1024x1024.jpg?v=1446846587",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0417_1024x1024.jpg?v=1446846607",         







            "https://kuromoribikeco.com/cdn/shop/products/DSC_0420_1024x1024.jpg?v=1446846616",         







        ], 







        specs: [







            "Built specifically for Keirin racing, bearing the NJS stamp",







            "Condition: Used", "Seat Tube: 52cm", "Top Tube: 51cm", "Seatpost Diameter: 27.2mm", "Color: Red", "Weight: 2.7kg", "Frame, Fork & Headset.",







            "Listed Price includes International Shipping, Paypal fee & Tax."







        ] 







    }







];







const bottomBracketsData = [



    { id: 101, name: "Hatta R9400 Bottom Bracket Right Side Fixed Cup NJS (25022409)", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2142_540x.jpg?v=1740360337"], specs: ["Brand: Hatta", "Condition: Used"] },



    { id: 102, name: "NOS Campagnolo NJS Bottom Bracket 68mm-111mm English (26022805)", price: 399.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6161_540x.jpg?v=1772243767"], specs: ["Brand: Campagnolo", "Size: 68mm-111mm", "Condition: NOS"] },



    { id: 103, name: "Shimano BB-7700 NJS Bottom Bracket 68mm-109.5mm (26022406)", price: 79.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6132_d9a2f9d8-85d1-4762-8879-2471ae3d4f3e_540x.jpg?v=1771912338"], specs: ["Brand: Shimano", "Size: 68mm-109.5mm", "Condition: Used"] },



    { id: 104, name: "Shimano BB-7710 NJS Bottom Bracket 68mm-109.5mm (26011014)", price: 77.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6136_540x.jpg?v=1771912453"], specs: ["Brand: Shimano", "Size: 68mm-109.5mm", "Condition: Excellent"] },



    { id: 105, name: "Shimano BB-7700 NJS Bottom Bracket 68mm-109.5mm (26022408)", price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6140_740x.jpg?v=1771912577", "https://www.njs-export.com/cdn/shop/files/IMG_6141_740x.jpg?v=1771912577", "https://www.njs-export.com/cdn/shop/files/IMG_6142_740x.jpg?v=1771912577", "https://www.njs-export.com/cdn/shop/files/IMG_6143_740x.jpg?v=1771912577"], specs: ["Brand: Shimano", "Size: 68mm-109.5mm", "Condition: Excellent"] },



    { id: 106, name: "Shimano BB-7710 NJS Bottom Bracket 68mm-109.5mm (26011014)", price: 77.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3722_6ba59335-f912-459d-88b8-244a5f40f4da_740x.jpg?v=1768019420", "https://www.njs-export.com/cdn/shop/files/IMG_3723_75d262cb-808f-484e-92e1-8712d0f75c38_740x.jpg?v=1768019420", "https://www.njs-export.com/cdn/shop/files/IMG_3724_eb9a22a1-0243-40ee-87ee-7bc5ec96d573_740x.jpg?v=1768019420", "https://www.njs-export.com/cdn/shop/files/IMG_3725_b39e6ad9-6f41-4d24-9b09-721f94cfd028_740x.jpg?v=1768019420"], specs: ["Brand: Shimano", "Size: 68mm-109.5mm", "Condition: Excellent"] },



    { id: 107, name: "Shimano BB-7710 NJS Bottom Bracket 68mm-109.5mm (26022409)", price: 59.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6144_740x.jpg?v=1771912661", "https://www.njs-export.com/cdn/shop/files/IMG_6145_740x.jpg?v=1771912661", "https://www.njs-export.com/cdn/shop/files/IMG_6146_740x.jpg?v=1771912661", "https://www.njs-export.com/cdn/shop/files/IMG_6147_740x.jpg?v=1771912661"], specs: ["Brand: Shimano", "Size: 68mm-109.5mm", "Condition: Excellent"] },



    { id: 108, name: "Shimano Dura-Ace BB-7400 Bottom Bracket Left Side Fixed Cup NJS (24102101)", price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4045_740x.jpg?v=1729473643", "https://www.njs-export.com/cdn/shop/files/IMG_4055_740x.jpg?v=1729473768"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 109, name: "Shimano Dura-Ace BB-7400 Bottom Bracket Left Side Fixed Cup NJS (25022405)", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2134_740x.jpg?v=1740359973"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 110, name: "Shimano Dura-Ace BB-7400 Bottom Bracket Left Side Fixed Cup NJS (25022406)", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2136_740x.jpg?v=1740360047", "https://www.njs-export.com/cdn/shop/files/IMG_2137_740x.jpg?v=1740360047"], specs: ["Brand: Shimano", "Condition: Used"] },

    

    { id: 111, name: "Shimano Dura-Ace BB-7400 Bottom Bracket Left Side Fixed Cup Non NJS (25022208)", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2067_740x.jpg?v=1740193993", "https://www.njs-export.com/cdn/shop/files/IMG_2068_740x.jpg?v=1740193993"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 112, name: "Shimano Dura-Ace BB-7500 Bottom Bracket Left Side Fixed Cup (25022407)", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2138_740x.jpg?v=1740360153", "https://www.njs-export.com/cdn/shop/files/IMG_2139_740x.jpg?v=1740360153"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 113, name: "Shimano Dura-Ace BB-7500 Bottom Bracket Left Side Fixed Cup NJS (22100605)", price: 27.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_8696_c0488f31-5db6-4227-92db-ea7d6ba1c538_740x.jpg?v=1665018464", "https://www.njs-export.com/cdn/shop/products/IMG_8697_5c7fae10-e41d-4964-aaa2-5f8f0645852c_740x.jpg?v=1665018464"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 114, name: "Shimano Dura-Ace BB-7500 Bottom Bracket Left Side Fixed Cup NJS + Lockring (25022203)", price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2058_740x.jpg?v=1740193358", "https://www.njs-export.com/cdn/shop/files/IMG_2059_740x.jpg?v=1740193358"], specs: ["Brand: Shimano", "Condition: Excellent"] },



    { id: 115, name: "Shimano Dura-Ace BB-7500 Bottom Bracket Right Side Fixed Cup NJS (22100606)", price: 27.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_8698_3a077034-cd81-41f6-9801-7b90cb6f7680_740x.jpg?v=1665018650", "https://www.njs-export.com/cdn/shop/products/IMG_8700_442824c3-4f75-48fc-a3fd-9074d4d57d3f_740x.jpg?v=1665018649"], specs: ["Brand: Shimano", "Condition: Excellent"] },



    { id: 116, name: "Shimano Dura-Ace BB-7500 Bottom Bracket Right Side Fixed Cup NJS (25022209)", price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2069_740x.jpg?v=1740194061", "https://www.njs-export.com/cdn/shop/files/IMG_2070_740x.jpg?v=1740194060"], specs: ["Brand: Shimano", "Condition: Excellent"] },



    { id: 117, name: "Sugino 75 Bottom Bracket Left Side Fixed Cup NJS (25022408)", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2140_740x.jpg?v=1740360221", "https://www.njs-export.com/cdn/shop/files/IMG_2141_740x.jpg?v=1740360222"], specs: ["Brand: Sugino", "Condition: Excellent"] },



    { id: 118, name: "Sugino 75 Super LAP NJS Bottom Bracket 68mm-109mm ISO English (26022308)", price: 137.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6041_740x.jpg?v=1771807122", "https://www.njs-export.com/cdn/shop/files/IMG_6042_740x.jpg?v=1771807121"], specs: ["Brand: Sugino", "Condition: Used"], isSoldOut: true },



    { id: 119, name: "Vintage Shimano Dura Ace BB-7400 Bottom Bracket Spindle 70-113mm (24062205)", price: 39.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2848_740x.jpg?v=1719030048", "https://www.njs-export.com/cdn/shop/files/IMG_2849_740x.jpg?v=1719030048"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 120, name: "Vintage Sugino Bottom Bracket Left Side Fixed Cup (22101312)", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_8990_740x.jpg?v=1665636810", "https://www.njs-export.com/cdn/shop/products/IMG_8991_740x.jpg?v=1665636810"], specs: ["Brand: Sugino", "Condition: Used"] }, 



    { id: 121, name: "Vintage Sugino Bottom Bracket Left Side Fixed Cup NJS (25022204)", price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2060_740x.jpg?v=1740193537", "https://www.njs-export.com/cdn/shop/files/IMG_2071_740x.jpg?v=1740193636"], specs: ["Brand: Sugino", "Condition: Used"] },  



    { id: 122, name: "Vintage Sugino Bottom Bracket Right Side Fixed Cup VIA (25022206)", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2063_740x.jpg?v=1740193826", "https://www.njs-export.com/cdn/shop/files/IMG_2064_740x.jpg?v=1740193825"], specs: ["Brand: Sugino", "Condition: Used"] }



];







const chainringsData = [



    { id: 201, name: 'Campagnolo 1/8" 144BCD NJS Chainring 51T (26022809)', price: 129.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6166_e27d076a-2f77-4326-8c97-e95d7a40d73d_540x.jpg?v=1772244070"], specs: ["Brand: Campagnolo", "Size: 51T"], isSoldOut: true },



    { id: 202, name: 'Never Used Shimano FC-7710 1/8" 144BCD NJS Chainring 51T (26020909)', price: 117.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5241_540x.jpg?v=1770600894"], specs: ["Brand: Shimano", "Size: 51T", "Condition: Never Used"] },



    { id: 203, name: 'Never Used Shimano FC-7710 1/8" 144BCD NJS Chainring 52T (25070205)', price: 117.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7129_540x.jpg?v=1751428629"], specs: ["Brand: Shimano", "Size: 52T", "Condition: Never Used"] },



    { id: 204, name: 'Never Used Shimano FC-7710 1/8" 144BCD NJS Chainring 53T (24091013)', price: 119.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5664_808c1bf4-7e91-4dd9-b873-bf7cfef5b7e0_540x.jpg?v=1725941607"], specs: ["Brand: Shimano", "Size: 53T", "Condition: Never Used"] },



    { id: 205, name: 'Never Used Shimano FC-7710 1/8" 144BCD NJS Chainring 54T (24122905)', price: 129.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9544_62c47d90-b5e0-4cff-941d-995b5f329b5e_740x.jpg?v=1735444051", "https://www.njs-export.com/cdn/shop/files/IMG_9545_5e9667a1-9867-40ff-968d-d9721f0ddb30_740x.jpg?v=1735444051"], specs: ["Brand: Shimano", "Condition: Never Used"] },



    { id: 206, name: 'Never Used Shimano FC-7710 1/8" 144BCD NJS Chainring 54T (25012215)', price: 99.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0578_740x.jpg?v=1737518910", "https://www.njs-export.com/cdn/shop/files/IMG_0579_740x.jpg?v=1737518910"], specs: ["Brand: Shimano", "Condition: Never Used"] },



    { id: 207, name: 'Never Used Shimano FC-7710 1/8" 144BCD NJS Chainring 55T (25031024)', price: 129.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2738_9c9f8219-96c8-4718-9ee8-2a1675e1f78a_740x.jpg?v=1741581138", "https://www.njs-export.com/cdn/shop/files/IMG_2739_dfb642bf-59d2-475e-9580-b94b5f202f40_740x.jpg?v=1741581138"], specs: ["Brand: Shimano", "Condition: Never Used"] },



    { id: 208, name: 'Never Used Stone 1/8" 110BCD Chainring 60T (23122402)', price: 79.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6020_65b0207e-76a8-467f-9728-b437c1ff9817_740x.jpg?v=1703375652"], specs: ["Brand: Stone", "Condition: Never Used"] },



    { id: 209, name: 'Never Used Stone 1/8" 130BCD Chainring 60T (25080304)', price: 77.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7899_740x.jpg?v=1754183783"], specs: ["Brand: Stone", "Condition: Never Used"] },



    { id: 210, name: 'Never Used Sugino 75 1/8" 144BCD NJS Chainring 49T (26013103)', price: 169.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4717_f9723f89-50b0-4088-b887-c12bea8e224b_740x.jpg?v=1769833748"], specs: ["Brand: Sugino", "Condition: Never Used"] },



    { id: 211, name: 'Never Used Sugino Aero Mighty 144BCD 1/8" NJS Chainring 42T (24100807)', price: 179.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6930_740x.jpg?v=1728351673"], specs: ["Brand: Sugino", "Condition: Never Used"] },



    { id: 212, name: 'Never Used Sugino Aero Mighty 144BCD 1/8" NJS Chainring 45T (24100806)', price: 149.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6929_740x.jpg?v=1728351613"], specs: ["Brand: Sugino", "Size: 53T", "Condition: Never Used"] },



    { id: 213, name: 'Never Used Sugino Mighty Competition 1/8" 151BCD Chainring 44T NJS (23082301)', price: 119.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1315_740x.jpg?v=1692761838"], specs: ["Brand: Sugino", "Condition: Never Used"] },



    { id: 214, name: 'NOS Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 46T Stamped NJS', price: 89.99, images: ["https://www.njs-export.com/cdn/shop/products/048_6c58fb51-a437-46b0-9831-a7e00f9e00b9_740x.JPG?v=1571438585"], specs: ["Brand: Shimano", "Condition: Never Used"] },



    { id: 215, name: 'NOS Shimano Dura Ace FC-7600 1/8" 144BCD NJS Chainring 45T (25070102)', price: 159.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7065_740x.jpg?v=1751347264"], specs: ["Brand: Shimano", "Condition: Never Used"] },



    { id: 216, name: 'Rare! Stratos 1/8" 144BCD Duralumin Chainring 56T (25033005)', price: 149.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3684_4fcb389b-f2fb-4d46-959f-26c2b30dc636_740x.jpg?v=1743307632", "https://www.njs-export.com/cdn/shop/files/IMG_3685_648f29b3-d0ab-4125-94b4-8f64883166d7_740x.jpg?v=1743307632"], specs: ["Brand: Stratos ", "Condition: Never Used"] },



    { id: 217, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 46T Stamped NJS (22092201)', price: 59.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7893_bf66180b-635a-4676-9a03-0989ec2d5985_740x.jpg?v=1663808103", "https://www.njs-export.com/cdn/shop/products/IMG_7894_4893cc27-f6e0-438a-965e-dccf0e459541_740x.jpg?v=1663808103"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 218, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 46T Stamped NJS (22092202)', price: 59.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7895_0666721d-f5e5-4799-98e1-af2565442b43_740x.jpg?v=1663808176", "https://www.njs-export.com/cdn/shop/products/IMG_7896_5de34144-9bd4-4ce9-ab7d-e9253b216633_740x.jpg?v=1663808176"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 219, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 46T Stamped NJS (23091005)', price: 57.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1933_8828a0b9-c186-4093-8369-eb5ef6b58011_740x.jpg?v=1694314965", "https://www.njs-export.com/cdn/shop/files/IMG_1934_c1afc764-f4bf-40a7-9aec-b2b73f89e193_740x.jpg?v=1694314965"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 220, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 46T Stamped NJS (23091006)', price: 49.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1935_deb8d253-545a-440e-a5d3-33d240a5e8d1_740x.jpg?v=1694315020", "https://www.njs-export.com/cdn/shop/files/IMG_1936_61ff427d-eece-429a-945b-7a646a224b38_740x.jpg?v=1694315020"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 221, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 47T Stamped NJS (22062404)', price: 59.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_4699_224df637-fa6c-47b3-ad45-5aa83186cbfa_740x.jpg?v=1656043900", "https://www.njs-export.com/cdn/shop/products/IMG_4700_62f21ec6-6912-4739-aa47-c5eada66bf75_740x.jpg?v=1656043900"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 222, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 47T Stamped NJS (22062411)', price: 49.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_4701_740x.jpg?v=1656044062", "https://www.njs-export.com/cdn/shop/products/IMG_4702_740x.jpg?v=1656044062"], specs: ["Brand: Shimano", "Condition: Never Used"] },



    { id: 223, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 47T Stamped NJS (22092205)', price: 59.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7902_2dc8bb24-073d-4388-a658-00e63fb6d182_740x.jpg?v=1663808462", "https://www.njs-export.com/cdn/shop/products/IMG_7903_c4a3dcc2-26bc-4ec9-b785-36b8871c027b_740x.jpg?v=1663808462"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 224, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 47T Stamped NJS (23061611)', price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_8734_6cdf6b8c-4f72-4ebc-ae60-88afcfa0b578_740x.jpg?v=1686879309", "https://www.njs-export.com/cdn/shop/files/IMG_8735_05f79074-72b5-41ed-930e-8f2f1b248d04_740x.jpg?v=1686879309"], specs: ["Brand: Shimano", "Condition: Used"] },



    { id: 225, name: 'Shimano Dura Ace 7500 EX 151BCD 1/8" Chainring 50T Stamped NJS (22111202)', price: 59.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_1037_740x.jpg?v=1668232953", "https://www.njs-export.com/cdn/shop/products/IMG_1038_740x.jpg?v=1668232953"], specs: ["Brand: Shimano", "Condition: Used"] },



];







const chainsData = [



    { id: 301, name: 'Daido D.I.D NJS Silver Chain 1/8" 106links #3', price: 14.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6869_e2614a71-ac9a-4db1-9ccd-4961354486dc_740x.jpg?v=1759362773"], specs: ["Brand: Daido D.I.D", "Size: 1/8\"", "Condition: Used"] },



    { id: 302, name: 'Daido D.I.D NJS Silver Chain 1/8" 106links #5', price: 14.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6869_70fb4a61-e53c-44bd-bdb5-8df5833215e9_740x.jpg?v=1750556485"], specs: ["Brand: Daido D.I.D", "Size: 1/8\"", "Condition: Used"] },



    { id: 303, name: 'Daido D.I.D NJS Silver Chain 1/8" 106links #7', price: 14.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6875_c23c3320-13c2-4326-952c-46a2e76ae6e5_740x.jpg?v=1750556536"], specs: ["Brand: Daido D.I.D", "Size: 1/8\"", "Condition: Used"] },



    { id: 304, name: 'HKK Vertex NJS Blue Chain 1/8" 106links #1', price: 9.80, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6883_967a2751-8d56-46ac-9d80-f2cc2d40d902_740x.jpg?v=1759362291"], specs: ["Brand: HKK", "Size: 1/8\""], isSoldOut: true },



    { id: 305, name: 'HKK Vertex NJS Blue Chain 1/8" 106links #2', price: 9.80, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6885_a2c3c23c-59de-44df-b8a1-da235d9f5fbe_740x.jpg?v=1759362337"], specs: ["Brand: HKK", "Size: 1/8\""], isSoldOut: true },



    { id: 306, name: 'HKK Vertex NJS Blue Chain 1/8" 106links #3', price: 9.80, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6887_2048x2048.jpg?v=1759362370"], specs: ["Brand: HKK", "Size: 1/8\""] },



    { id: 307, name: 'HKK Vertex NJS Blue Chain 1/8" 106links #4', price: 9.80, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6889_7c9545ba-f01c-46ac-bc1a-18fd4693f57f_740x.jpg?v=1759362401"], specs: ["Brand: HKK", "Size: 1/8\""] },



    { id: 308, name: 'HKK Vertex NJS Blue Chain 1/8" 106links #5', price: 9.80, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6891_5508c9fc-44c6-41a4-be0c-2ab65f18031c_740x.jpg?v=1759362435"], specs: ["Brand: HKK", "Size: 1/8\""] },



    { id: 309, name: 'HKK Vertex NJS Blue Chain 1/8" 106links #7', price: 9.80, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6895_865a9522-1bfc-4bef-ba38-9d2ff9b6515e_740x.jpg?v=1759362501", "https://www.njs-export.com/cdn/shop/files/IMG_6896_4b680156-1701-4689-bb95-0a9cba34d377_740x.jpg?v=1759362501"], specs: ["Brand: HKK", "Size: 1/8\""], isSoldOut: true },



    { id: 310, name: 'HKK Vertex NJS Silver Chain 1/8" 106links #10', price: 16.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6915_740x.jpg?v=1750556118", "https://www.njs-export.com/cdn/shop/files/IMG_6916_740x.jpg?v=1750556118"], specs: ["Brand: HKK", "Size: 1/8\""], isSoldOut: true },



    { id: 311, name: 'HKK Vertex NJS Silver Chain 1/8" 106links #5', price: 16.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6903_740x.jpg?v=1750555916", "https://www.njs-export.com/cdn/shop/files/IMG_6904_740x.jpg?v=1750555916"], specs: ["Brand: HKK", "Size: 1/8\""], isSoldOut: true },



    { id: 312, name: 'HKK Vertex NJS Silver Chain 1/8" 106links #7', price: 16.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6909_740x.jpg?v=1750555992", "https://www.njs-export.com/cdn/shop/files/IMG_6910_740x.jpg?v=1750555992"], specs: ["Brand: HKK", "Size: 1/8\""] },



    { id: 313, name: 'IZUMI 1/8" Chain Half Link', price: 4.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3860_3ccbbedb-3a99-4d16-827b-b3db97f9aa81_740x.jpg?v=1768108913"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 314, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #11', price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4532_a590c490-33c3-4a93-97cf-5cd50d958104_740x.jpg?v=1769225412", "https://www.njs-export.com/cdn/shop/files/IMG_4533_5a5396bc-df01-4bc6-b7ed-8b6d60168ec2_740x.jpg?v=1769225412"], specs: ["Brand: IZUMI", "Size: 1/8\""], isSoldOut: true},



    { id: 315, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #13', price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4536_c2a57048-7cbf-4725-aaed-e034d86e6169_740x.jpg?v=1769225637", "https://www.njs-export.com/cdn/shop/files/IMG_4537_de851456-44a8-4b85-90e5-23e31eae8613_740x.jpg?v=1769225637"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 316, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #14', price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4538_927f9308-96a5-4e07-bd46-d98ef4549957_740x.jpg?v=1769225705", "https://www.njs-export.com/cdn/shop/files/IMG_4539_adde8cbc-b73e-4957-9f2b-04cbb91a6cf3_740x.jpg?v=1769225705"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 317, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #17', price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4545_dbb41ced-d507-4989-afb3-a333e5a34936_740x.jpg?v=1769226149", "https://www.njs-export.com/cdn/shop/files/IMG_4546_0934a220-ea79-43b5-9b2e-aeaf4fe06e54_740x.jpg?v=1769226148"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 318, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #18', price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4547_99521607-f714-413f-b0c0-b351f36b7c8a_740x.jpg?v=1769226199", "https://www.njs-export.com/cdn/shop/files/IMG_4548_625892ba-7395-4d98-8d0e-5c074276a659_740x.jpg?v=1769226199"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 319, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #19', price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4549_c5b85a0a-9fde-42e8-aa25-99ceb8983837_740x.jpg?v=1769226280", "https://www.njs-export.com/cdn/shop/files/IMG_4550_790424ba-3e71-45d6-9c6b-69f2eaac7350_740x.jpg?v=1769226280"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 320, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #2', price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9863_740x.jpg?v=1759366323", "https://www.njs-export.com/cdn/shop/files/IMG_9864_740x.jpg?v=1759366322"], specs: ["Brand: IZUMI", "Size: 1/8\""], isSoldOut: true },



    { id: 321, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #20', price: 34.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4551_0cc9de6b-2d2a-4d39-8a22-1c7aac54359d_740x.jpg?v=1769226805", "https://www.njs-export.com/cdn/shop/files/IMG_4552_a5ecdc24-fa7e-4e04-9120-a91231807be7_740x.jpg?v=1769226806"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 322, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #21', price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4553_36a654b5-0610-4b8d-9b49-03820d450d01_740x.jpg?v=1769226876", "https://www.njs-export.com/cdn/shop/files/IMG_4554_c5332021-33bc-4301-986a-3aa69824e6b0_740x.jpg?v=1769226873"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 323, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #22', price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4555_050e6b1b-1c00-4119-bec3-d7fcbca749a5_740x.jpg?v=1769226957", "https://www.njs-export.com/cdn/shop/files/IMG_4556_ef0a1a07-0ba9-49ec-a943-7350e484d426_740x.jpg?v=1769226957"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



    { id: 324, name: 'Izumi V Super Toughness NJS Chain 1/8" 106links #23', price: 34.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4557_d3039415-abb5-47f2-8ffc-3f3e9679fe11_740x.jpg?v=1769227008", "https://www.njs-export.com/cdn/shop/files/IMG_4558_740x.jpg?v=1769227008"], specs: ["Brand: IZUMI", "Size: 1/8\""], isSoldOut: true },



    { id: 325, name: 'Izumi 改 KAI Super Toughness NJS Chain 1/8" 106links #1', price: 37.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3861_f9d8dfcd-6f9e-464d-93dd-75e7a1ce77e8_740x.jpg?v=1768108523", "https://www.njs-export.com/cdn/shop/files/IMG_3862_16f369fb-1d0d-4b19-885a-85e2ac0146c2_740x.jpg?v=1768108524"], specs: ["Brand: IZUMI", "Size: 1/8\""] },



];







const clipsStrapsData = [



    { id: 401, name: 'Campagnolo NJS Toe Clips M-size (26030422)', price: 39.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6480_128e4469-1fb8-4594-a7cf-cae0f7d081d8_740x.jpg?v=1772600399"], specs: ["Brand: Campagnolo", "Size: M"], isSoldOut: true },



    { id: 402, name: 'Campagnolo Toe Clips AA S-size NJS (24052404)', price: 76.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2103_740x.jpg?v=1716525310"], specs: ["Brand: Campagnolo", "Size: S"] },



    { id: 403, name: 'Campagnolo Toe Clips AA S-size NJS (24080801)', price: 67.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4114_740x.jpg?v=1723002484"], specs: ["Brand: Campagnolo", "Size: S"] },



    { id: 404, name: 'Campagnolo Toe Clips Steel S-size NJS (24081228)', price: 39.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4367_1decf278-0924-470b-a2a9-1c6d48ed8c44_740x.jpg?v=1723433719"], specs: ["Brand: Campagnolo", "Material: Steel"] },



    { id: 405, name: 'Kashimax Super Sprint NJS Approved Toe Straps (25111724)', price: 12.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1457_3ab3071c-0ebf-47bc-b8ba-c2ff6ff6cf54_740x.jpg?v=1763352363"], specs: ["Brand: Kashimax", "Type: Toe Straps"], isSoldOut: true },



    { id: 406, name: 'MKS AA Toe Clips L-size NJS (26030418)', price: 7.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6477_473d0456-0a4e-4b21-9f8b-8f61a6b3d9cd_740x.jpg?v=1772594044"], specs: ["Brand: MKS", "Size: L"] },



    { id: 407, name: 'MKS AA Toe Clips M-size NJS (26010204)', price: 5.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3165_5bd8f03f-7711-4220-a48a-b85879e8a100_740x.jpg?v=1767332247"], specs: ["Brand: MKS", "Size: M"] },



    { id: 408, name: 'MKS AA Toe Clips M-size NJS (26012004)', price: 7.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4434_740x.jpg?v=1768886575"], specs: ["Brand: MKS", "Size: M"], isSoldOut: true },



    { id: 409, name: 'MKS AA Toe Clips M-size NJS (26030904)', price: 7.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6877_740x.jpg?v=1773022967", "https://www.njs-export.com/cdn/shop/files/IMG_6879_dbc09371-645c-4ee5-9f9f-b2f5b372a0ad_740x.jpg?v=1773022967"], specs: ["Brand: MKS", "Size: M"], isSoldOut: true },



    { id: 410, name: 'MKS Fit-α Sports NJS Approved Toe Straps (25122006)', price: 14.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2657_8c0c9447-ad1d-4ace-ba36-c99a48b7e28c_740x.jpg?v=1766205596", "https://www.njs-export.com/cdn/shop/files/IMG_2658_740x.jpg?v=1766205596"], specs: ["Brand: MKS", "Size: M"], isSoldOut: true },



    { id: 411, name: 'MKS Fit-α Sports NJS Approved Toe Straps (26011623)', price: 13.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4139_740x.jpg?v=1768542714", "https://www.njs-export.com/cdn/shop/files/IMG_4140_740x.jpg?v=1768542714"], specs: ["Brand: MKS", "Size: M"], isSoldOut: true },



    { id: 412, name: 'MKS Fit-α Sports NJS Approved Toe Straps (26011624)', price: 11.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4141_740x.jpg?v=1768542791", "https://www.njs-export.com/cdn/shop/files/IMG_4142_740x.jpg?v=1768542791"], specs: ["Brand: MKS", "Size: M"], isSoldOut: true },



    { id: 413, name: 'MKS Fit-α Sports NJS Approved Toe Straps (26011626)', price: 13.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4145_740x.jpg?v=1768542908", "https://www.njs-export.com/cdn/shop/files/IMG_4146_740x.jpg?v=1768542908"], specs: ["Brand: MKS", "Size: M"], isSoldOut: true },



    { id: 414, name: 'MKS Steel Toe Clips L-size NJS (26022402)', price: 7.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6113_13d1386a-82a7-4d45-9d48-1bbc3403fade_740x.jpg?v=1771911544", "https://www.njs-export.com/cdn/shop/files/IMG_6114_0815c4f8-de88-4cb7-9f90-b7326073d4bd_740x.jpg?v=1771911544"], specs: ["Brand: MKS", "Size: M"], isSoldOut: true },



    { id: 415, name: 'MKS Steel Toe Clips L-size NJS (26030417)', price: 7.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6475_fc9cf73f-cd9a-40d4-bf64-38c3a54f2e03_740x.jpg?v=1772593986", "https://www.njs-export.com/cdn/shop/files/IMG_6476_c547ce5f-fee7-409a-bdf6-861745e6e107_740x.jpg?v=1772593986"], specs: ["Brand: MKS", "Size: M"], isSoldOut: true },



    { id: 416, name: 'Never Used Toshi NJS Approved Toe Strap Not PAIR (26012005)', price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4436_740x.jpg?v=1768886775", "https://www.njs-export.com/cdn/shop/files/IMG_4437_740x.jpg?v=1768886776"], specs: ["Brand: Toshi", "Size: M"], isSoldOut: true },



];







const cranksData = [



    { id: 501, name: 'Never Used Shimano Dura Ace FC-7600 Non Drive Side Crank Arm NJS 167.5mm', price: 129.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6562_740x.jpg?v=1750039615"], specs: ["Brand: Shimano", "Size: 167.5mm", "Condition: Never Used"] },



    { id: 502, name: 'PowerCranks 170mm 110BCD (24092201)', price: 399.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6166_740x.jpg?v=1726978354"], specs: ["Brand: PowerCranks", "Size: 170mm", "Condition: Used"] },



    { id: 503, name: 'Rotor ALDHU 167.5mm Cranks (26012803)', price: 199.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4611_740x.jpg?v=1769560428"], specs: ["Brand: Rotor", "Size: 167.5mm", "Condition: Used"] },



    { id: 504, name: 'Shimano Dura Ace FC-7500 151BCD 165mm NJS Crank Set (26022815)', price: 329.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6181_740x.jpg?v=1772249270"], specs: ["Brand: Shimano", "Size: 165mm", "Condition: Good"] },



    { id: 505, name: 'Shimano Dura Ace FC-7600 144BCD 165mm NJS (26032202)', price: 159.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7429_740x.jpg?v=1774156846"], specs: ["Brand: Shimano", "Size: 165mm", "Condition: Used"], isSoldOut: true },



    { id: 506, name: 'Shimano Dura Ace FC-7600 144BCD 167.5mm NJS (25110214)', price: 249.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0768_740x.jpg?v=1762054014"], specs: ["Brand: Shimano", "Size: 167.5mm", "Condition: Used"], isSoldOut: true },



    { id: 507, name: 'Shimano Dura Ace FC-7600 144BCD 167.5mm NJS (25123003)', price: 189.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2946_bc076a4c-0621-450c-8783-ee4c0b5844cd_740x.jpg?v=1767058080"], specs: ["Brand: Shimano", "Size: 167.5mm", "Condition: Used"], isSoldOut: true },



    { id: 508, name: 'Shimano Dura Ace FC-7600 144BCD 167.5mm NJS (26010804)', price: 239.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3566_473f1db3-08b7-4716-8877-180053139807_740x.jpg?v=1767851332"], specs: ["Brand: Shimano", "Size: 167.5mm", "Condition: Used"], isSoldOut: true }



];







const cogsData = [



    { id: 601, name: 'Never Used Shimano Dura Ace 14T 1/8" NJS Cog (26012802)', price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4610_740x.jpg?v=1769560329"], specs: ["Brand: Shimano", "Size: 14T", "Condition: Never Used"], isSoldOut: true },



    { id: 602, name: 'Never Used Sugino Gigas 12t 1/8" NJS Cog + Sugino Gigas Stepped Lockring', price: 97.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3571_4b7f5299-fbe0-4b01-a53f-6e6f8b22862f_740x.jpg?v=1767851735"], specs: ["Brand: Sugino", "Size: 12T", "Condition: Never Used"] },



    { id: 603, name: 'Never Used Suntour 13t 1/8" NJS Track Cog (25050509)', price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5264_f4d2d122-b1ac-4740-989b-e7ad74d2f7a8_740x.jpg?v=1746413882"], specs: ["Brand: Suntour", "Size: 13T", "Condition: Never Used"] },



    { id: 604, name: 'NOS AC RACING 888 16T 3/32" Freewheel Sprocket (26020902)', price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5218_4062bd21-f7e7-4d41-880e-6b835dd8e786_740x.jpg?v=1770599446"], specs: ["Brand: AC Racing", "Size: 16T", "Condition: NOS"] },



    { id: 605, name: 'NOS Vintage Shimano Dura Ace 13T 1/8" NJS Cog Duralumin (24041502)', price: 79.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1222_740x.jpg?v=1713144544"], specs: ["Brand: Shimano", "Size: 13T", "Condition: NOS"] },



    { id: 606, name: 'Shimano Dura Ace 14T 1/8" NJS Cog (25052703)', price: 7.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0851_2177db66-90ea-48c7-b3ac-984ff889ba57_740x.jpg?v=1748317661"], specs: ["Brand: Shimano", "Size: 14T", "Condition: Used"] },



    { id: 607, name: 'Shimano Dura Ace 14T 1/8" NJS Cog (25052705)', price: 8.39, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0853_93fc2b46-1abc-40e3-8b95-6eab02af0103_740x.jpg?v=1748317802"], specs: ["Brand: Shimano", "Size: 14T", "Condition: Used"] },



    { id: 608, name: 'Shimano Dura Ace 14T 1/8" NJS Cog (25072308)', price: 7.69, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7436_760a3def-0bdf-4ebf-a7ef-ef0e9b2edb7d_740x.jpg?v=1753245997"], specs: ["Brand: Shimano", "Size: 14T", "Condition: Used"] }



];







const forksData = [



    { id: 701, name: 'Bridgestone 1-1/8" NJS Carbon Front Fork 167mm', price: 149.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9251_9e553ea3-bc59-40c3-a69f-b70e17ffdc04_740x.jpg?v=1757732298"], specs: ["Brand: Bridgestone", "Type: Carbon"] },



    { id: 702, name: 'Bridgestone 144mm/9mm slot Columbus MAX Fork', price: 168.00, images: ["https://www.njs-export.com/cdn/shop/products/056_4e1befc9-9660-4c60-9fcd-6b692327b435_740x.JPG?v=1571438604"], specs: ["Brand: Bridgestone", "Tubing: Columbus MAX"] },



    { id: 703, name: 'Bridgestone Columbus Max Front Fork 142mm Steering Column Length', price: 147.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9389_5a334d56-1c9b-4dce-9e9c-7af461d3def7_740x.jpg?v=1708228382"], specs: ["Brand: Bridgestone", "Type: Columbus Max"] },



    { id: 704, name: 'Bridgestone Fork 141mm/9mm', price: 97.99, images: ["https://www.njs-export.com/cdn/shop/products/077_1257bac6-51dc-496a-a371-0408279a8de3_740x.jpg?v=1571438581"], specs: ["Brand: Bridgestone"] },



    { id: 705, name: 'Bridgestone Front Fork 132mm/8mm slot', price: 76.50, images: ["https://www.njs-export.com/cdn/shop/products/125_2_740x.JPG?v=1571438588"], specs: ["Brand: Bridgestone"] },



    { id: 706, name: 'Bridgestone Front Fork 135mm Steering Column Length /9mm Axle Slot', price: 85.00, images: ["https://www.njs-export.com/cdn/shop/products/IMG_3901_d527142b-fcaa-4297-9087-e674412176ae_740x.jpg?v=1615019158"], specs: ["Brand: Bridgestone"] },



    { id: 707, name: 'Bridgestone Front Fork 136mm Steering Column Length /9mm Axle Slot', price: 85.00, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2942_740x.jpg?v=1719365502"], specs: ["Brand: Bridgestone"] },



    { id: 708, name: 'Bridgestone Front Fork 144mm steering Column 9mm Slot', price: 85.00, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6670_740x.jpg?v=1750209551"], specs: ["Brand: Bridgestone"] }



];







// --- BỔ SUNG: DỮ LIỆU SẢN PHẨM HANDLEBARS, HANDLEBAR & STEM SETS, HEADSETS, HUBS, PEDALS ---







const handlebarsData = [



    { id: 801, name: "3T Forma SL Anatomic Non NJS Handlebar 26mm / 42cm (26021802)", price: 67.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5700_740x.jpg?v=1771392342", "https://www.njs-export.com/cdn/shop/files/IMG_5701_740x.jpg?v=1771392342", "https://www.njs-export.com/cdn/shop/files/IMG_5702_740x.jpg?v=1771392342", "https://www.njs-export.com/cdn/shop/files/IMG_5703_740x.jpg?v=1771392342", "https://www.njs-export.com/cdn/shop/files/IMG_5704_740x.jpg?v=1771392342", "https://www.njs-export.com/cdn/shop/files/IMG_5705_740x.jpg?v=1771392342"], specs: ["Brand: 3T", "Size: 42cm"] },



    { id: 802, name: "B123 360mm AA NJS Handlebar (25090604)", price: 37.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_8970_871c7d2f-6cfa-4d2c-bb8f-e1545cdd51b6_740x.jpg?v=1757139930", "https://www.njs-export.com/cdn/shop/files/IMG_8971_efe5fd22-7420-4073-a0da-41053be67cd7_740x.jpg?v=1757139930", "https://www.njs-export.com/cdn/shop/files/IMG_8972_2a71b6b6-cabd-41e0-9f5a-de7912fc7009_740x.jpg?v=1757139930", "https://www.njs-export.com/cdn/shop/files/IMG_8973_45f8e72b-ca07-4372-a429-c3bb5e88d06e_740x.jpg?v=1757139930"], specs: ["Brand: Nitto", "Size: 360mm"] },



    { id: 803, name: "B123 Steel Customized to Bullhorn Bar 300mm c-c (22082407)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7216_7c2acf35-d804-4f47-ac7e-aff9dc356c03_740x.jpg?v=1661314555", "https://www.njs-export.com/cdn/shop/products/IMG_7217_e017e8aa-485a-4b16-b558-678c5476bab2_740x.jpg?v=1661314554"], specs: ["Brand: Nitto", "Size: 300mm"] },



    { id: 804, name: "B123 Steel Customized to Bullhorn Bar 300mm c-c (22082411)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7220_710510e5-17c9-4e4b-8cc3-1ce20f18eae9_740x.jpg?v=1661315041", "https://www.njs-export.com/cdn/shop/products/IMG_7221_96216b55-e7e1-4d2b-86f3-2b3490aebc9a_740x.jpg?v=1661315040"], specs: ["Brand: Nitto", "Size: 300mm"] },



    { id: 805, name: "B123 Steel Customized to Bullhorn Bar 305mm c-c (22082417)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7232_03f5276d-d678-4559-a651-219c8898cee8_740x.jpg?v=1661315645", "https://www.njs-export.com/cdn/shop/products/IMG_7233_a627fed1-5031-4311-9fa1-95d409f87bc1_740x.jpg?v=1661315645"], specs: ["Brand: Nitto", "Size: 305mm"] },



    { id: 806, name: "B123 Steel Customized to Bullhorn Bar 325mm c-c (22082404)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7210_c95da4e6-677e-4f22-8f67-b4aadf1b0889_740x.jpg?v=1661314098", "https://www.njs-export.com/cdn/shop/products/IMG_7211_52b30ffe-c0ab-4287-a071-044626fdbfc5_740x.jpg?v=1661314100"], specs: ["Brand: Nitto", "Size: 325mm"] },



    { id: 807, name: "B123 Steel Customized to Bullhorn Bar 325mm c-c (22082414)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7226_fe32c72a-3821-4a82-92b6-3bc3e966ff50_740x.jpg?v=1661315326", "https://www.njs-export.com/cdn/shop/products/IMG_7227_0db9a17a-fd10-48ef-baf4-ec287810f0eb_740x.jpg?v=1661315327"], specs: ["Brand: Nitto", "Size: 325mm"] },



    { id: 808, name: "B123 Steel Customized to Bullhorn Bar 325mm c-c (22082415)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_7228_7040e107-c8ce-421f-bb0c-9cc5eaf064d1_740x.jpg?v=1661315448", "https://www.njs-export.com/cdn/shop/products/IMG_7229_503cd1ea-ddd3-43fb-847a-57caeaf15dbd_740x.jpg?v=1661315449"], specs: ["Brand: Nitto", "Size: 325mm"] }



];







const handlebarStemSetsData = [



    { id: 901, name: "B123 340mm CrMo NJS Handlebar, Nitto Jaguar, 90mm/58 degree Steel NJS Stem", price: 109.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1546_67214ea0-15b1-4cf5-a835-2c43a6f72042_740x.jpg?v=1763519223", "https://www.njs-export.com/cdn/shop/files/IMG_1547_2cac77c4-b183-4098-ab55-0bbdd64f0fd3_740x.jpg?v=1763519223", "https://www.njs-export.com/cdn/shop/files/IMG_1548_648543a6-39b5-4253-91c5-16fb9c97fa44_740x.jpg?v=1763519223", "https://www.njs-export.com/cdn/shop/files/IMG_1549_740x.jpg?v=1763519223"], specs: ["Brand: Nitto", "Size: 340mm / 90mm"] },



    { id: 902, name: "B123 340mm CrMo NJS Handlebar, Nitto Jaguar, 95mm/58degree Steel NJS Stem", price: 107.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5393_3d22c11c-8ca3-41ad-bbf9-9b793e2dedf6_740x.jpg?v=1770873773", "https://www.njs-export.com/cdn/shop/files/IMG_5394_449c0b8c-d54a-40c6-879a-688c7515be55_740x.jpg?v=1770873773", "https://www.njs-export.com/cdn/shop/files/IMG_5395_e9e530d4-55ae-46b9-8b83-5a4cb9993369_740x.jpg?v=1770873773", "https://www.njs-export.com/cdn/shop/files/IMG_5396_e92d4830-37f9-4fae-b8d3-d80dba065d6d_740x.jpg?v=1770873773"], specs: ["Brand: Nitto", "Size: 340mm / 95mm"] },



    { id: 903, name: "B123 350mm CrMo NJS Handlebar, Nitto Jaguar, 100mm/58 degree Steel NJS Stem", price: 97.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1566_6b3999e3-c443-41cd-9402-c780ecdc78d8_740x.jpg?v=1763519929", "https://www.njs-export.com/cdn/shop/files/IMG_1567_c585b938-a45f-4dc4-bfc4-35ff05e820f8_740x.jpg?v=1763519929", "https://www.njs-export.com/cdn/shop/files/IMG_1568_6dc91b3a-b387-46a5-a361-70aa925eabb9_740x.jpg?v=1763519929", "https://www.njs-export.com/cdn/shop/files/IMG_1569_569f7506-eedd-4047-ae4d-2cc637446085_740x.jpg?v=1763519929"], specs: ["Brand: Nitto", "Size: 350mm / 100mm"] },



    { id: 904, name: "B123 350mm CrMo NJS Handlebar, Nitto Jaguar, 100mm/58 degree Steel NJS Stem", price: 97.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1570_0c4c1cd5-3210-4de9-86e3-06f1aa6b1523_740x.jpg?v=1763520173", "https://www.njs-export.com/cdn/shop/files/IMG_1571_740x.jpg?v=1763520173", "https://www.njs-export.com/cdn/shop/files/IMG_1572_740x.jpg?v=1763520173", "https://www.njs-export.com/cdn/shop/files/IMG_1573_740x.jpg?v=1763520174"], specs: ["Brand: Nitto", "Size: 350mm / 100mm"] },



    { id: 905, name: "B123 350mm CrMo NJS Handlebar, Nitto Jaguar, 105mm/58 degree Steel NJS Stem", price: 97.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1574_740x.jpg?v=1763520393", "https://www.njs-export.com/cdn/shop/files/IMG_1575_5834c964-56d3-4285-899c-e4fd06026adf_740x.jpg?v=1763520393", "https://www.njs-export.com/cdn/shop/files/IMG_1576_16542a12-7bbf-4bff-9723-7f87295454eb_740x.jpg?v=1763520393", "https://www.njs-export.com/cdn/shop/files/IMG_1577_fad2a25d-7613-4d66-a170-b7363da0b638_740x.jpg?v=1763520393"], specs: ["Brand: Nitto", "Size: 350mm / 105mm"] },



    { id: 906, name: "B123 360mm AA NJS Handlebar, Nitto Jaguar 110mm/58 degree AA NJS Stem", price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5851_f5c68df1-1ec3-42fb-ac36-15f97cb3d9b7_740x.jpg?v=1771546277", "https://www.njs-export.com/cdn/shop/files/IMG_5852_9912428d-a621-4eb2-af36-64ef06ca5cab_740x.jpg?v=1771546278", "https://www.njs-export.com/cdn/shop/files/IMG_5853_1291b15e-3996-401b-9995-4baf5048efd5_740x.jpg?v=1771546278", "https://www.njs-export.com/cdn/shop/files/IMG_5854_b69a8692-bd90-4eab-907f-e1e292601590_740x.jpg?v=1771546278", "https://www.njs-export.com/cdn/shop/files/IMG_5855_8e14cf85-8809-4514-979c-65eb96cca4f2_740x.jpg?v=1771546278", "https://www.njs-export.com/cdn/shop/files/IMG_5856_04e3c316-fcbf-47cf-8871-0d7cb6ee6fd9_740x.jpg?v=1771546278"], specs: ["Brand: Nitto", "Size: 360mm / 110mm"] },



    { id: 907, name: "B123 360mm AA NJS Handlebar, Nitto Jaguar 110mm/58 degree AA NJS Stem", price: 67.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5881_9443d218-b240-4856-9bc0-7a5310b0d313_740x.jpg?v=1771547094", "https://www.njs-export.com/cdn/shop/files/IMG_5882_5e900716-777d-4fe8-8023-9883b82eca86_740x.jpg?v=1771547094", "https://www.njs-export.com/cdn/shop/files/IMG_5883_12498251-ddbb-447e-bb31-c85761bdb067_740x.jpg?v=1771547095", "https://www.njs-export.com/cdn/shop/files/IMG_5884_ff76cf42-3f40-444f-844a-a1f21452a45f_740x.jpg?v=1771547094", "https://www.njs-export.com/cdn/shop/files/IMG_5885_1634e268-676b-4c45-a1af-0e4b2e913fe5_740x.jpg?v=1771547095", "https://www.njs-export.com/cdn/shop/files/IMG_5886_dc056299-5f20-4e7f-8138-9939ba30c690_740x.jpg?v=1771547094"], specs: ["Brand: Nitto", "Size: 360mm / 110mm"] },



    { id: 908, name: "B123 360mm AA NJS Handlebar, Nitto Jaguar 120mm/58 degree AA NJS Stem", price: 89.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3257_8f685f0f-4a96-47cb-93f2-f6d3f6735939_740x.jpg?v=1698115409", "https://www.njs-export.com/cdn/shop/files/IMG_3258_740x.jpg?v=1698115409", "https://www.njs-export.com/cdn/shop/files/IMG_3259_740x.jpg?v=1698115408", "https://www.njs-export.com/cdn/shop/files/IMG_3260_740x.jpg?v=1698115409"], specs: ["Brand: Nitto", "Size: 360mm / 120mm"] }



];







const headsetsData = [



    { id: 1001, name: "Hatta Swan Super Deluxe NJS Headset (25010207)", price: 79.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9724_740x.jpg?v=1735794012", "https://www.njs-export.com/cdn/shop/files/IMG_9725_740x.jpg?v=1735794012"], specs: ["Brand: Hatta"] },



    { id: 1002, name: "Hatta Swan Super Deluxe NJS Headset (25042605)", price: 76.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4897_1ab78a69-77fa-4771-a8ae-f6189b45c636_740x.jpg?v=1745631150", "https://www.njs-export.com/cdn/shop/files/IMG_4898_32104539-111d-48ce-bb52-0bf00cb0a225_740x.jpg?v=1745631149"], specs: ["Brand: Hatta"] },



    { id: 1003, name: "Hatta Swan Super Deluxe NJS Headset Upper Head Tube Race (23082101)", price: 16.20, images: ["https://www.njs-export.com/cdn/shop/products/029_6fc22c48-e289-494f-be54-cdd9b60e7315_740x.jpg?v=1571438579", "https://www.njs-export.com/cdn/shop/products/028_08315d8f-ccc0-4cd4-9306-6396261efc99_740x.jpg?v=1571438579"], specs: ["Brand: Hatta"] },



    { id: 1004, name: "Hatta Swan Super Deluxe NJS Headset with Original Box (26030806)", price: 89.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6830_36b12f47-bb25-480c-ac06-dd72cfa186c7_740x.jpg?v=1772942325", "https://www.njs-export.com/cdn/shop/files/IMG_6831_83896ae6-0189-4d47-b245-8aeeaca097cf_740x.jpg?v=1772942325", "https://www.njs-export.com/cdn/shop/files/IMG_6832_a327e5c7-2786-4a74-aa82-a4697822c1da_740x.jpg?v=1772942325"], specs: ["Brand: Hatta", "Condition: With Box"], isSoldOut: true }



];







const hubsData = [



    { id: 1101, name: "Campagnolo 32H Front Hub 9mm Axle Quick Release Non NJS (24102604)", price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7402_4bbeb46a-4f5c-4a62-adda-00f6cb305bf7_740x.jpg?v=1729913768", "https://www.njs-export.com/cdn/shop/files/IMG_7403_d16cff55-bbc4-49b3-be4e-c2c9bff030eb_740x.jpg?v=1729913768", "https://www.njs-export.com/cdn/shop/files/IMG_7404_c2cf6699-f00d-4ef2-a9de-7f2e49592575_740x.jpg?v=1729913768", "https://www.njs-export.com/cdn/shop/files/IMG_7405_148ec637-331f-42fc-8714-fe286c0fbe72_740x.jpg?v=1729913768", "https://www.njs-export.com/cdn/shop/files/IMG_7406_0144abec-cd8a-4cbb-88d2-35217c1db728_740x.jpg?v=1729913769", "https://www.njs-export.com/cdn/shop/files/IMG_7407_cb016b38-d05a-48e2-96e4-b1e9c21bff8e_740x.jpg?v=1729913768"], specs: ["Brand: Campagnolo"] },



    { id: 1102, name: "Campagnolo NJS Rear Hub Cone (25080301)", price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7889_740x.jpg?v=1754183058", "https://www.njs-export.com/cdn/shop/files/IMG_7890_740x.jpg?v=1754183058", "https://www.njs-export.com/cdn/shop/files/IMG_7890_740x.jpg?v=1754183058", "https://www.njs-export.com/cdn/shop/files/IMG_7892_740x.jpg?v=1754183058"], specs: ["Brand: Campagnolo"] },



    { id: 1103, name: "Campagnolo Record 32H Front Hub 9mm Axle Non NJS (22112106)", price: 79.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_1373_e5c63a16-c075-4e18-a7c6-f72fce3ea92b_740x.jpg?v=1669007794", "https://www.njs-export.com/cdn/shop/products/IMG_1374_740x.jpg?v=1669007794", "https://www.njs-export.com/cdn/shop/products/IMG_1375_740x.jpg?v=1669007794", "https://www.njs-export.com/cdn/shop/products/IMG_1376_740x.jpg?v=1669007794"], specs: ["Brand: Campagnolo"] },



    { id: 1104, name: "Campagnolo Record 36H Hub set Non NJS 120mm (26022826)", price: 299.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6233_216b270e-32d9-47da-b8d5-5426e5243f0a_740x.jpg?v=1772255529", "https://www.njs-export.com/cdn/shop/files/IMG_6234_4acc04f2-dc33-44eb-b2e9-8a18311545f2_740x.jpg?v=1772255529", "https://www.njs-export.com/cdn/shop/files/IMG_6235_ec08ba3e-8867-4879-90af-f6b552b0447c_740x.jpg?v=1772255530", "https://www.njs-export.com/cdn/shop/files/IMG_6236_589301a5-4e49-4324-b1c4-37b27a337b2a_740x.jpg?v=1772255529", "https://www.njs-export.com/cdn/shop/files/IMG_6237_740x.jpg?v=1772255529", "https://www.njs-export.com/cdn/shop/files/IMG_6238_8ec4821d-31ca-4e60-a03f-c92000b76e78_740x.jpg?v=1772255529"], specs: ["Brand: Campagnolo", "Size: 120mm"] },



    { id: 1105, name: "Gran Compe 32H Rear Hub 120mm Non NJS (22052611)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_3449_740x.jpg?v=1653542160", "https://www.njs-export.com/cdn/shop/products/IMG_3450_740x.jpg?v=1653542159", "https://www.njs-export.com/cdn/shop/products/IMG_3451_740x.jpg?v=1653542160", "https://www.njs-export.com/cdn/shop/products/IMG_3452_8bb79d21-6c83-4aa8-89c7-beefdfb5be72_740x.jpg?v=1653542159"], specs: ["Brand: Gran Compe", "Size: 120mm"] },



    { id: 1106, name: "Gran Compe Pro 36H Front Hub 9mm Axle NJS (22092844)", price: 89.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_8310_740x.jpg?v=1664343078", "https://www.njs-export.com/cdn/shop/products/IMG_8311_740x.jpg?v=1664343077", "https://www.njs-export.com/cdn/shop/products/IMG_8312_740x.jpg?v=1664343077", "https://www.njs-export.com/cdn/shop/products/IMG_8313_740x.jpg?v=1664343077"], specs: ["Brand: Gran Compe"] },



    { id: 1107, name: "Gran Compe Pro 36H Front Hub 9mm Axle NJS (23010701)", price: 89.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_3273_496fd3fb-4c06-499b-b649-3fb8581061ff_740x.jpg?v=1673069063", "https://www.njs-export.com/cdn/shop/products/IMG_3274_6fbeab15-46e0-42ac-a382-2350064ff314_740x.jpg?v=1673069064", "https://www.njs-export.com/cdn/shop/products/IMG_3275_15f8f644-d4aa-479f-9377-675dd2d73964_740x.jpg?v=1673069064", "https://www.njs-export.com/cdn/shop/products/IMG_3276_46e64c84-da27-4a64-b378-0320651d630b_740x.jpg?v=1673069064"], specs: ["Brand: Gran Compe"] },



    { id: 1108, name: "Gran Compe Pro 36H Front Hub 9mm Axle NJS (26012807)", price: 119.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4619_740x.jpg?v=1769561085", "https://www.njs-export.com/cdn/shop/files/IMG_4620_740x.jpg?v=1769561086", "https://www.njs-export.com/cdn/shop/files/IMG_4621_740x.jpg?v=1769561085", "https://www.njs-export.com/cdn/shop/files/IMG_4622_740x.jpg?v=1769561085"], specs: ["Brand: Gran Compe"], isSoldOut: true }



];







const pedalsData = [



    { id: 1201, name: "Campagnolo C-record NJS Pedal Set (21092603)", price: 499.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_9805_dea92c76-507e-4030-a48a-d3c05d671ef5_740x.jpg?v=1632624389", "https://www.njs-export.com/cdn/shop/products/IMG_9806_34e7c968-99c5-4be1-902c-1fa0b01f0a38_740x.jpg?v=1632624388", "https://www.njs-export.com/cdn/shop/products/IMG_9807_75dc3295-df50-4fb8-b822-9f7ec984e5e5_740x.jpg?v=1632624388", "https://www.njs-export.com/cdn/shop/products/IMG_9808_120c9d4d-2506-48f9-9154-eacd9f9aa8d7_740x.jpg?v=1632624388", "https://www.njs-export.com/cdn/shop/products/IMG_9809_485e62ac-6b46-47d0-ab24-4637f0133f7d_740x.jpg?v=1632624388", "https://www.njs-export.com/cdn/shop/products/IMG_9810_0f009fec-6707-4506-a76e-ac649c2a87f7_740x.jpg?v=1632624388"], specs: ["Brand: Campagnolo"] },



    { id: 1202, name: "Campagnolo C-record NJS Pedal Set (22040915)", price: 430.00, images: ["https://www.njs-export.com/cdn/shop/products/IMG_1581_740x.jpg?v=1649484058", "https://www.njs-export.com/cdn/shop/products/IMG_1582_740x.jpg?v=1649484057", "https://www.njs-export.com/cdn/shop/products/IMG_1583_740x.jpg?v=1649484057", "https://www.njs-export.com/cdn/shop/products/IMG_1584_740x.jpg?v=1649484057", "https://www.njs-export.com/cdn/shop/products/IMG_1585_740x.jpg?v=1649484057"], specs: ["Brand: Campagnolo"] },



    { id: 1203, name: "Campagnolo C-record NJS Pedal Set (25020109)", price: 279.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1195_740x.jpg?v=1738389876", "https://www.njs-export.com/cdn/shop/files/IMG_1196_eae0f395-8477-46f7-a8b4-41e6df177553_740x.jpg?v=1738389876", "https://www.njs-export.com/cdn/shop/files/IMG_1197_740x.jpg?v=1738389876", "https://www.njs-export.com/cdn/shop/files/IMG_1198_740x.jpg?v=1738389876"], specs: ["Brand: Campagnolo"] },



    { id: 1204, name: "Campagnolo NJS Pedal Set (24052406)", price: 179.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2108_740x.jpg?v=1716525790", "https://www.njs-export.com/cdn/shop/files/IMG_2109_e9d082ba-c927-4ad4-a3fa-2b4ae06241cd_740x.jpg?v=1716525789", "https://www.njs-export.com/cdn/shop/files/IMG_2110_740x.jpg?v=1716525790", "https://www.njs-export.com/cdn/shop/files/IMG_2111_740x.jpg?v=1716525790", "https://www.njs-export.com/cdn/shop/files/IMG_2112_740x.jpg?v=1716526495", "https://www.njs-export.com/cdn/shop/files/IMG_2113_740x.jpg?v=1716526494"], specs: ["Brand: Campagnolo"] },



    { id: 1205, name: "Campagnolo Record Pedal Set Non NJS (26030428)", price: 129.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6502_c38eec89-48aa-4256-bb07-cdb101622c3d_740x.jpg?v=1772601377", "https://www.njs-export.com/cdn/shop/files/IMG_6503_760b2a93-c3cd-40b0-b2c3-f1662f398294_740x.jpg?v=1772601377", "https://www.njs-export.com/cdn/shop/files/IMG_6504_49ba32a5-9f08-4521-85f4-f2a8d771e7bc_740x.jpg?v=1772601377", "https://www.njs-export.com/cdn/shop/files/IMG_6505_ea76b59c-5aae-4f8e-b910-c2faed22df8e_740x.jpg?v=1772601377"], specs: ["Brand: Campagnolo"] },



    { id: 1206, name: "Campagnolo Record Pedal Set Non NJS (26030429)", price: 119.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6506_740x.jpg?v=1772601518", "https://www.njs-export.com/cdn/shop/files/IMG_6507_740x.jpg?v=1772601517", "https://www.njs-export.com/cdn/shop/files/IMG_6508_9b2789cf-fd81-4775-904f-d6424563516f_740x.jpg?v=1772601518", "https://www.njs-export.com/cdn/shop/files/IMG_6509_740x.jpg?v=1772601518"], specs: ["Brand: Campagnolo"] },



    { id: 1207, name: "Campagnolo Record Pedal Set Non NJS (26032207)", price: 129.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7454_54c522f1-d1a5-4252-97bc-5cc364008a92_740x.jpg?v=1774157637", "https://www.njs-export.com/cdn/shop/files/IMG_7455_6b5fbc0f-4589-480a-b1bd-da5c3f4feb3d_740x.jpg?v=1774157637", "https://www.njs-export.com/cdn/shop/files/IMG_7456_08ec0cc8-0806-4273-a197-31672fc0138a_740x.jpg?v=1774157637", "https://www.njs-export.com/cdn/shop/files/IMG_7457_0377704b-49aa-435b-a8fd-09e5d314fb9f_740x.jpg?v=1774157637"], specs: ["Brand: Campagnolo"] },



    { id: 1208, name: "Campagnolo Super Record Pedal Set Non NJS (15080802)", price: 128.00, images: ["https://www.njs-export.com/cdn/shop/products/007_86698197-70f0-4165-a24d-83c9a9c27753_740x.JPG?v=1571438601", "https://www.njs-export.com/cdn/shop/products/008_f4b97bdc-b2d3-4e72-b9e2-cee5a7d77537_740x.JPG?v=1571438601", "https://www.njs-export.com/cdn/shop/products/009_0279df46-baa5-4a2e-9100-2ac36329335f_740x.JPG?v=1571438601", "https://www.njs-export.com/cdn/shop/products/010_ec20866d-f2a4-45e3-9996-84543f33de2f_740x.JPG?v=1571438601", "https://www.njs-export.com/cdn/shop/products/010_ec20866d-f2a4-45e3-9996-84543f33de2f_740x.JPG?v=1571438601"], specs: ["Brand: Campagnolo"] }



];







// --- DỮ LIỆU SẢN PHẨM MỚI: SADDLES, SEATPOSTS, STEMS, WHEELS ---



const saddlesData = [



    { id: 1301, name: "Ariake JaguarII Aero Unpadded 44mm Rail Saddle NJS Approved (24102608)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7418_bbea96de-162b-4a25-a3f3-2c814fb60f14_740x.jpg?v=1729914223", "https://www.njs-export.com/cdn/shop/files/IMG_7419_e1d709b4-c536-4844-8fcf-7436e14a3dd0_740x.jpg?v=1729914223", "https://www.njs-export.com/cdn/shop/files/IMG_7420_ad3c154c-5cc3-4e62-8b63-1e5261c20f49_740x.jpg?v=1729914223", "https://www.njs-export.com/cdn/shop/files/IMG_7421_f3a11acd-9e04-467c-a03d-635446a4a8f8_740x.jpg?v=1729914223", "https://www.njs-export.com/cdn/shop/files/IMG_7422_7e3de5dc-1e65-4c36-8a2f-288628e2e2c9_740x.jpg?v=1729914223"], specs: ["Brand: Ariake", "Size: 44mm Rail"] },



    { id: 1302, name: "Ariake JaguarII Aero Unpadded 44mm Rail Saddle NJS Approved (24102609)", price: 54.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7423_3a421980-c7ce-492c-9ae2-5040e0f3786c_740x.jpg?v=1729914302", "https://www.njs-export.com/cdn/shop/files/IMG_7424_94c618e4-e873-41a7-b07e-1870837311cb_740x.jpg?v=1729914302", "https://www.njs-export.com/cdn/shop/files/IMG_7425_90e0fd12-8012-402d-9d65-c65d00ebca6c_740x.jpg?v=1729914302", "https://www.njs-export.com/cdn/shop/files/IMG_7426_f4be2f05-f39d-4b21-98a0-869f7e7e2923_740x.jpg?v=1729914302", "https://www.njs-export.com/cdn/shop/files/IMG_7427_740x.jpg?v=1729914302"], specs: ["Brand: Ariake", "Size: 44mm Rail"] },



    { id: 1303, name: "Ariake JaguarII Unpadded 44mm Rail Saddle NJS Approved (23062602)", price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9133_a07420ec-8e11-4500-93c0-e19610abd587_740x.jpg?v=1687753149", "https://www.njs-export.com/cdn/shop/files/IMG_9134_3b35f306-d3ac-4b02-8089-80ec7874528e_740x.jpg?v=1687753148", "https://www.njs-export.com/cdn/shop/files/IMG_9136_b2cef4c8-89a4-4849-a140-cef740123248_740x.jpg?v=1687753148", "https://www.njs-export.com/cdn/shop/files/IMG_9137_2362820f-90d7-461c-97ec-ebac8388cda4_740x.jpg?v=1687753149"], specs: ["Brand: Ariake", "Size: 44mm Rail"] },



    { id: 1304, name: "Ariake JaguarII Unpadded 44mm Rail Saddle NJS Approved (23070302)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9302_122d6be7-110c-441c-bb79-70779ad5678f_740x.jpg?v=1688347949", "https://www.njs-export.com/cdn/shop/files/IMG_9303_b6932607-e9da-4a13-b00c-c52cedc4be4c_740x.jpg?v=1688347950", "https://www.njs-export.com/cdn/shop/files/IMG_9304_b8039d69-8733-4810-99a5-e2e37854cd3c_740x.jpg?v=1688347950", "https://www.njs-export.com/cdn/shop/files/IMG_9305_782fcd78-05e9-40a1-b5a4-64a99feb4b69_740x.jpg?v=1688347949", "https://www.njs-export.com/cdn/shop/files/IMG_9306_d331cc81-ed92-4827-a34b-f181173cb1d2_740x.jpg?v=1688347950"], specs: ["Brand: Ariake", "Size: 44mm Rail"] },



    { id: 1305, name: "Ariake JaguarII Unpadded 44mm Rail Saddle NJS Approved (24101608)", price: 17.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3963_740x.jpg?v=1729047014", "https://www.njs-export.com/cdn/shop/files/IMG_3964_740x.jpg?v=1729047014", "https://www.njs-export.com/cdn/shop/files/IMG_3965_740x.jpg?v=1729047014", "https://www.njs-export.com/cdn/shop/files/IMG_3966_02ab4f3d-36e2-44a5-bed7-a48c3d2efb8f_740x.jpg?v=1729047014", "https://www.njs-export.com/cdn/shop/files/IMG_3967_ef58cedf-4e6a-45df-996f-49eab791bd9c_740x.jpg?v=1729047014"], specs: ["Brand: Ariake", "Size: 44mm Rail"] },



    { id: 1306, name: "Ariake Pist 100 Unpadded 44mm Rail Saddle NJS Approved (24120609)", price: 37.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4532_740x.jpg?v=1733457518", "https://www.njs-export.com/cdn/shop/files/IMG_4530_740x.jpg?v=1733457518", "https://www.njs-export.com/cdn/shop/files/IMG_4531_740x.jpg?v=1733457518", "https://www.njs-export.com/cdn/shop/files/IMG_4533_740x.jpg?v=1733457518", "https://www.njs-export.com/cdn/shop/files/IMG_4534_740x.jpg?v=1733457518"], specs: ["Brand: Ariake", "Size: 44mm Rail"] },



    { id: 1307, name: "Cornago 44mm Rail PADDED Saddle Non NJS (24111711)", price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4237_fe56aec0-1550-4024-ace0-b01aff93e4cf_740x.jpg?v=1731849250", "https://www.njs-export.com/cdn/shop/files/IMG_4238_55e39a84-7174-4ba8-9911-aa74c6740ca7_740x.jpg?v=1731849250", "https://www.njs-export.com/cdn/shop/files/IMG_4239_0911b9a3-4e58-4233-9897-9d9c63acc982_740x.jpg?v=1731849250", "https://www.njs-export.com/cdn/shop/files/IMG_4240_97ccf0bc-fd97-4e9b-aa5c-26a62aa50d35_740x.jpg?v=1731849250", "https://www.njs-export.com/cdn/shop/files/IMG_4241_e75fe751-9560-472f-9859-04753a4717ef_740x.jpg?v=1731849250"], specs: ["Brand: Cornago", "Size: 44mm Rail"] },



    { id: 1308, name: "Fujita Seamless Y.F.C PISTA NJS Saddle 44mm (23051521)", price: 57.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7480_740x.jpg?v=1684130782", "https://www.njs-export.com/cdn/shop/files/IMG_7481_4b1c379a-3195-4c89-991d-58dbe21e9c06_740x.jpg?v=1684130782", "https://www.njs-export.com/cdn/shop/files/IMG_7482_740x.jpg?v=1684130783", "https://www.njs-export.com/cdn/shop/files/IMG_7483_0598311a-6a8f-40c7-a858-aefb67856b5b_740x.jpg?v=1684130782", "https://www.njs-export.com/cdn/shop/files/IMG_7484_e5f3c2da-464c-4cf8-a087-6ac7db31c6a6_740x.jpg?v=1684130783"], specs: ["Brand: Fujita", "Size: 44mm Rail"] }



];







const seatpostsData = [



    { id: 1401, name: "Campagnolo NJS Seatpost 26.8/44mm (23022502)", price: 199.99, images: ["https://www.njs-export.com/cdn/shop/products/IMG_5059_82a7aa15-9a44-417f-bf32-e4a5dd36759e_740x.jpg?v=1677296531", "https://www.njs-export.com/cdn/shop/products/IMG_5060_d45ff256-f742-4041-bac4-dad963eeb8dc_740x.jpg?v=1677296530", "https://www.njs-export.com/cdn/shop/products/IMG_5061_c559f958-cbdc-4275-b3f0-28cc34226632_740x.jpg?v=1677296530"], specs: ["Brand: Campagnolo", "Size: 26.8mm"] },



    { id: 1402, name: "Never Used Nitto SP72 NJS Seatpost 27.2/44mm (26022807)", price: 129.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6165_740x.jpg?v=1772243913"], specs: ["Brand: Nitto", "Size: 27.2mm"], isSoldOut: true },



    { id: 1403, name: "Nitto Jaguar NJ SP72 NJS Seatpost 27.0mm/30mm 210mm Long (24100616)", price: 74.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6883_a716c0fd-33da-4f82-8fd8-815838281b6e_740x.jpg?v=1728185198", "https://www.njs-export.com/cdn/shop/files/IMG_6884_c8212af0-fbcf-4a0c-a35c-5a4a7fe59c6b_740x.jpg?v=1728185198", "https://www.njs-export.com/cdn/shop/files/IMG_6885_1e12ffbb-3217-4233-be91-2dbafbd36580_740x.jpg?v=1728185198"], specs: ["Brand: Nitto", "Size: 27.0mm"] },



    { id: 1404, name: "Nitto Jaguar NJ SP72 NJS Seatpost 27.0mm/30mm 210mm Long (24112408)", price: 59.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_8340_740x.jpg?v=1732416041", "https://www.njs-export.com/cdn/shop/files/IMG_8341_740x.jpg?v=1732416041", "https://www.njs-export.com/cdn/shop/files/IMG_8342_740x.jpg?v=1732416041"], specs: ["Brand: Nitto", "Size: 27.0mm"] },



    { id: 1405, name: "Nitto Jaguar NJ SP72 NJS Seatpost 27.0mm/30mm 210mm Long (25020513)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1525_740x.jpg?v=1738720994", "https://www.njs-export.com/cdn/shop/files/IMG_1528_740x.jpg?v=1738720994", "https://www.njs-export.com/cdn/shop/files/IMG_1529_740x.jpg?v=1738720995"], specs: ["Brand: Nitto", "Size: 27.0mm"] },



    { id: 1406, name: "Nitto Jaguar NJ SP72 NJS Seatpost 27.0mm/30mm 210mm Long (25020514)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_1530_740x.jpg?v=1738721052", "https://www.njs-export.com/cdn/shop/files/IMG_1531_740x.jpg?v=1738721052", "https://www.njs-export.com/cdn/shop/files/IMG_1532_740x.jpg?v=1738721052"], specs: ["Brand: Nitto", "Size: 27.0mm"] },



    { id: 1407, name: "Nitto Jaguar NJ SP72 NJS Seatpost 27.0mm/30mm 210mm Long (26011906)", price: 64.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4369_bfa0cb5a-9548-411e-9003-be98ed7825f3_740x.jpg?v=1768796841", "https://www.njs-export.com/cdn/shop/files/IMG_4370_0e4259a7-67a6-47b9-aa59-f536aef3b7b1_740x.jpg?v=1768796841", "https://www.njs-export.com/cdn/shop/files/IMG_4371_621d3de6-1b69-42d5-943a-627e27aa3166_740x.jpg?v=1768796841"], specs: ["Brand: Nitto", "Size: 27.0mm"], isSoldOut: true },



    { id: 1408, name: "Nitto Jaguar NJ SP72 NJS Seatpost 27.0mm/30mm 210mm Long (26021005)", price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5313_f454abad-db1d-431d-bb24-037332360057_740x.jpg?v=1770697689", "https://www.njs-export.com/cdn/shop/files/IMG_5314_740x.jpg?v=1770697689", "https://www.njs-export.com/cdn/shop/files/IMG_5315_740x.jpg?v=1770697689"], specs: ["Brand: Nitto", "Size: 27.0mm"] }



];







const stemsData = [



    { id: 1501, name: '3T APTO STEALTH 130mm Ahead Stem + Quill Stem Converter 25.4mm (24092802)', price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6537_740x.jpg?v=1727497344", "https://www.njs-export.com/cdn/shop/files/IMG_6538_740x.jpg?v=1727497345", "https://www.njs-export.com/cdn/shop/files/IMG_6539_740x.jpg?v=1727497344", "https://www.njs-export.com/cdn/shop/files/IMG_6540_740x.jpg?v=1727497344", "https://www.njs-export.com/cdn/shop/files/IMG_6541_740x.jpg?v=1727497344"], specs: ["Brand: 3T", "Size: 130mm"] },



    { id: 1502, name: 'Girl\'s keirin Nitto NJ-89 1 1/8" 60mm 25.4mm Ahead Stem NJS (25032205)', price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3398_08961fe5-d243-4867-8d1a-e707b282a423_740x.jpg?v=1742615506", "https://www.njs-export.com/cdn/shop/files/IMG_3399_e344ba10-8e38-4c91-871b-0adaff855117_740x.jpg?v=1742615506", "https://www.njs-export.com/cdn/shop/files/IMG_3400_49e1f5ca-ae44-43ef-b0a2-6508b291e481_740x.jpg?v=1742615506", "https://www.njs-export.com/cdn/shop/files/IMG_3401_c43dbc4f-1613-4aa2-a470-7cdd8b92bd51_740x.jpg?v=1742615506", "https://www.njs-export.com/cdn/shop/files/IMG_3402_c27b8cf2-7ed8-44e7-8454-2f94c23e295e_740x.jpg?v=1742615506", "https://www.njs-export.com/cdn/shop/files/IMG_3403_794bb08f-7054-47be-97fe-4d9a172e6bae_740x.jpg?v=1742615506"], specs: ["Brand: Nitto", "Size: 60mm"] },



    { id: 1503, name: 'Look Ergostem Adjustable Ahead Stem 1 1/8" 26.0mm Bar Clamp (25123011)', price: 199.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2969_ebae4898-1d69-4b14-aad3-deb6a598cbde_740x.jpg?v=1767064593", "https://www.njs-export.com/cdn/shop/files/IMG_2970_b0f3a1a4-05ff-41e6-b4d7-bef76467c802_740x.jpg?v=1767064593", "https://www.njs-export.com/cdn/shop/files/IMG_2971_2a525743-1682-45d5-9d07-b3bcc98521c0_740x.jpg?v=1767064593", "https://www.njs-export.com/cdn/shop/files/IMG_2972_148988bb-0f00-42c2-a82e-ccdddbeb7abe_740x.jpg?v=1767064594", "https://www.njs-export.com/cdn/shop/files/IMG_2973_e61e4104-7da9-45ac-a126-406f8fe2ca12_740x.jpg?v=1767064594", "https://www.njs-export.com/cdn/shop/files/IMG_2974_c77ac8be-8a23-4a4c-9dfb-bb144cee4a3b_740x.jpg?v=1767064593", "https://www.njs-export.com/cdn/shop/files/IMG_2975_b06fa58e-545a-42bd-9a2e-0a0cb24df04f_740x.jpg?v=1767064593", "https://www.njs-export.com/cdn/shop/files/IMG_2976_b9e594ca-b6c8-4066-b1a4-d253a5fe97a0_740x.jpg?v=1767064594", "https://www.njs-export.com/cdn/shop/files/IMG_2977_c0d646c3-fbe4-46e6-8f46-ac0b613efec3_740x.jpg?v=1767064593"], specs: ["Brand: Look", "Size: Adjustable"] },



    { id: 1504, name: 'Nitto Jaguar 100mm 58Degree NJS Approved AA Stem (25052304)', price: 43.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5618_2ae1bde8-7eb9-40c6-a86a-84f5fced118d_740x.jpg?v=1747964925", "https://www.njs-export.com/cdn/shop/files/IMG_5620_740x.jpg?v=1747964925", "https://www.njs-export.com/cdn/shop/files/IMG_5621_740x.jpg?v=1747964925", "https://www.njs-export.com/cdn/shop/files/IMG_5622_740x.jpg?v=1747964925", "https://www.njs-export.com/cdn/shop/files/IMG_5623_740x.jpg?v=1747964925", "https://www.njs-export.com/cdn/shop/files/IMG_5624_740x.jpg?v=1747964925"], specs: ["Brand: Nitto", "Size: 100mm"], isSoldOut: true },



    { id: 1505, name: 'Nitto Jaguar 100mm 58Degree NJS Approved AA Stem (25052803)', price: 34.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5796_740x.jpg?v=1748402784", "https://www.njs-export.com/cdn/shop/files/IMG_5797_740x.jpg?v=1748402784", "https://www.njs-export.com/cdn/shop/files/IMG_5798_d483abf5-8b9a-415a-8bbe-35891055289d_740x.jpg?v=1748402803", "https://www.njs-export.com/cdn/shop/files/IMG_5799_1250066b-530a-4e2d-bb15-073e711aa4e5_740x.jpg?v=1748402803", "https://www.njs-export.com/cdn/shop/files/IMG_5800_fde1da86-107d-4abe-89b5-80c034e543d0_740x.jpg?v=1748402803", "https://www.njs-export.com/cdn/shop/files/IMG_5801_ed6e9ad2-4fc4-41a2-bd94-42b9f3d8675c_740x.jpg?v=1748402803"], specs: ["Brand: Nitto", "Size: 100mm"] },



    { id: 1506, name: 'Nitto Jaguar 100mm 58Degree NJS Approved AA Stem (26030608)', price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6685_554025c7-d196-4fb1-a890-5f7dc1217d86_740x.jpg?v=1772766242", "https://www.njs-export.com/cdn/shop/files/IMG_6686_9f36ea7b-12dc-45a3-bcd4-7f7293f37061_740x.jpg?v=1772766242", "https://www.njs-export.com/cdn/shop/files/IMG_6687_57f30ef7-0e6c-48dd-a124-1cf1281db189_740x.jpg?v=1772766242", "https://www.njs-export.com/cdn/shop/files/IMG_6688_740x.jpg?v=1772766242", "https://www.njs-export.com/cdn/shop/files/IMG_6689_740x.jpg?v=1772766242", "https://www.njs-export.com/cdn/shop/files/IMG_6690_4cb365f4-87b8-4ac7-bcd9-d092f0baa9e6_740x.jpg?v=1772766242"], specs: ["Brand: Nitto", "Size: 100mm"] },



    { id: 1507, name: 'Nitto Jaguar 100mm 58Degree NJS Approved AA Stem Gun-metal (24011901)', price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7852_b0cc1ab7-70f3-40d7-8bd1-80196045f11e_740x.jpg?v=1705625024", "https://www.njs-export.com/cdn/shop/files/IMG_7853_29727653-f78f-4d0c-973c-b7f3346e7738_740x.jpg?v=1705625024", "https://www.njs-export.com/cdn/shop/files/IMG_7854_78fdb0ed-3534-44c7-87c6-089df31613f7_740x.jpg?v=1705625023", "https://www.njs-export.com/cdn/shop/files/IMG_7855_5277117d-c0a8-409e-bab4-fe5335853617_740x.jpg?v=1705625023", "https://www.njs-export.com/cdn/shop/files/IMG_7856_91a0cc23-4789-4114-b309-ce6c36cee323_740x.jpg?v=1705625024"], specs: ["Brand: Nitto", "Size: 100mm"] },



    { id: 1508, name: 'Nitto Jaguar 100mm 58Degree NJS Approved Steel Stem (25022702)', price: 49.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2226_740x.jpg?v=1740617559", "https://www.njs-export.com/cdn/shop/files/IMG_2227_740x.jpg?v=1740617558", "https://www.njs-export.com/cdn/shop/files/IMG_2228_740x.jpg?v=1740617558", "https://www.njs-export.com/cdn/shop/files/IMG_2229_740x.jpg?v=1740617558", "https://www.njs-export.com/cdn/shop/files/IMG_2230_a45dd78a-06e2-46d5-ac22-a37f646e7597_740x.jpg?v=1740617558"], specs: ["Brand: Nitto", "Size: 100mm"] }



];







const wheelsData = [



    { id: 1601, name: 'ALEXRIMS 700c 32H Rim, Unknown 100mm/9mm Front Hub, IRC Tire Clincher (24011203)', price: 99.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7482_7e006ade-22b9-496d-a186-b1a49e02b81c_740x.jpg?v=1705029513", "https://www.njs-export.com/cdn/shop/files/IMG_7483_740x.jpg?v=1705029513", "https://www.njs-export.com/cdn/shop/files/IMG_7484_740x.jpg?v=1705029513", "https://www.njs-export.com/cdn/shop/files/IMG_7485_16b48354-f011-4667-8153-99b36d6a320a_740x.jpg?v=1705029513", "https://www.njs-export.com/cdn/shop/files/IMG_7486_7ce20c05-c83d-449e-812c-98c2e5835538_740x.jpg?v=1705029512", "https://www.njs-export.com/cdn/shop/files/IMG_7487_05fa1f5c-e371-4265-baf8-d7a2c9159dd2_740x.jpg?v=1705029512"], specs: ["Brand: ALEXRIMS", "Size: 700c"] },



    { id: 1602, name: 'Ambrosio Montreal 700c 36H Tubular rim, Sansin Pro Training 100mm/9mm Front Hub Quick Release (24120103)', price: 129.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4435_782c861d-504a-441c-81b9-19a38331edf9_740x.jpg?v=1733017014", "https://www.njs-export.com/cdn/shop/files/IMG_4436_23c32431-970e-4c2f-888a-3669213e9054_740x.jpg?v=1733017015", "https://www.njs-export.com/cdn/shop/files/IMG_4437_5c77a4bb-efbf-4b61-9260-8df9e30f09f7_740x.jpg?v=1733017015", "https://www.njs-export.com/cdn/shop/files/IMG_4438_a0a25f6d-60a3-495e-be19-7b225687aa7a_740x.jpg?v=1733017015", "https://www.njs-export.com/cdn/shop/files/IMG_4439_cf1586cf-6b76-4594-a270-1f42e0d5d075_740x.jpg?v=1733017015", "https://www.njs-export.com/cdn/shop/files/IMG_4440_163c148c-3ad0-4f31-8d6a-2b43993595f4_740x.jpg?v=1733017014"], specs: ["Brand: Ambrosio", "Size: 700c"] },



    { id: 1603, name: 'Ambrosio Montreal 700c Tubular rim, Sansin Pro Training 100mm/9mm Front Hub Quick Release (23111508)', price: 99.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3940_740x.jpg?v=1700029762", "https://www.njs-export.com/cdn/shop/files/IMG_3941_740x.jpg?v=1700029762", "https://www.njs-export.com/cdn/shop/files/IMG_3942_740x.jpg?v=1700029762", "https://www.njs-export.com/cdn/shop/files/IMG_3943_740x.jpg?v=1700029762", "https://www.njs-export.com/cdn/shop/files/IMG_3944_740x.jpg?v=1700029763", "https://www.njs-export.com/cdn/shop/files/IMG_3945_740x.jpg?v=1700029762"], specs: ["Brand: Ambrosio", "Size: 700c"] },



    { id: 1604, name: 'Ambrosio Montreal 700c Tubular Rim, Suntour Superbe Pro NJS 100mm/8mm Front Hub (23111501)', price: 149.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3890_740x.jpg?v=1700027494", "https://www.njs-export.com/cdn/shop/files/IMG_3891_740x.jpg?v=1700027494", "https://www.njs-export.com/cdn/shop/files/IMG_3892_740x.jpg?v=1700027494", "https://www.njs-export.com/cdn/shop/files/IMG_3893_740x.jpg?v=1700027494", "https://www.njs-export.com/cdn/shop/files/IMG_3894_740x.jpg?v=1700027494", "https://www.njs-export.com/cdn/shop/files/IMG_3895_f8f74bb7-8e52-44a7-9f19-074e73431d23_740x.jpg?v=1700027494"], specs: ["Brand: Ambrosio", "Size: 700c"] },



    { id: 1605, name: 'Ambrossio Evolution Clincher 36H 700c Rim, Yoshigai Gran Compe Rear Hub 120mm, Continental Tire (25032608)', price: 179.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3544_740x.jpg?v=1742959832", "https://www.njs-export.com/cdn/shop/files/IMG_3545_4ed0dd3f-febc-46c3-9ef6-b65c3fed138b_740x.jpg?v=1742959831", "https://www.njs-export.com/cdn/shop/files/IMG_3546_11b3e51a-f14a-4ba7-bf19-b087ac9fbf56_740x.jpg?v=1742959832", "https://www.njs-export.com/cdn/shop/files/IMG_3547_85e148a7-38fb-4097-8a36-2a9a7e32a696_740x.jpg?v=1742959831", "https://www.njs-export.com/cdn/shop/files/IMG_3548_50518111-a7b1-4950-bbe2-cf0e05d03029_740x.jpg?v=1742959832", "https://www.njs-export.com/cdn/shop/files/IMG_3549_54cee428-4d93-465c-b7a4-22e68b049a33_740x.jpg?v=1742959832"], specs: ["Brand: Ambrosio", "Size: 700c"] },



    { id: 1606, name: 'Araya Aero 4 700c 36H Tubular Rim, Shimano Dura Ace HB-7600 100mm/8mm NJS Front Hub (25042303)', price: 179.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4811_740x.jpg?v=1745371306", "https://www.njs-export.com/cdn/shop/files/IMG_4812_740x.jpg?v=1745371306", "https://www.njs-export.com/cdn/shop/files/IMG_4813_740x.jpg?v=1745371306", "https://www.njs-export.com/cdn/shop/files/IMG_4814_740x.jpg?v=1745371306", "https://www.njs-export.com/cdn/shop/files/IMG_4815_740x.jpg?v=1745371306", "https://www.njs-export.com/cdn/shop/files/IMG_4816_740x.jpg?v=1745371306"], specs: ["Brand: Araya", "Size: 700c"] },



    { id: 1607, name: 'Araya Gold World Champion 16B NJS 700c Tubular NJS Rims, Campagnolo Record NJS hubs 36H 120mm (2602821)', price: 979.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6195_d0fdb30f-98de-495d-98a1-ed344072197a_740x.jpg?v=1772254431", "https://www.njs-export.com/cdn/shop/files/IMG_6196_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6197_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6198_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6199_4a1ab432-97f7-4405-a64c-0cbc7f25e095_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6199_4a1ab432-97f7-4405-a64c-0cbc7f25e095_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6200_cc877824-d07c-4ed7-a347-348c31a0a22f_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6201_a9386b53-8a3d-4d30-b86b-4333e37a6559_740x.jpg?v=1772254447", "https://www.njs-export.com/cdn/shop/files/IMG_6202_8f53bcc9-14b7-4b63-a33d-b71406913403_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6203_2fadad65-0384-4efe-a9d2-dcb523a951df_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6206_5be33c73-e935-4207-85d3-339561aa3c6c_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6207_eb90616d-098d-49fc-95d8-99555fd8f3f0_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6208_21fa9c12-4257-42a0-bdab-ca618babe2b7_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6209_2aaabe56-ff7b-4bba-9a15-244b18f7ba0d_740x.jpg?v=1772254430", "https://www.njs-export.com/cdn/shop/files/IMG_6210_3430fc4c-9376-4966-90fc-ae7cfe2bd117_740x.jpg?v=1772254431", "https://www.njs-export.com/cdn/shop/files/IMG_6211_f4022b0d-e89f-44bb-90b2-c279cfd923f4_740x.jpg?v=1772254430"], specs: ["Brand: Araya", "Size: 700c"] },



    { id: 1608, name: 'Araya Gold World Champion 16B NJS 700c Tubular NJS Rims, Suntour Superbe Pro NJS Hubs 36H 120mm (26032501)', price: 299.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7483_18a34262-9ffe-41eb-bb61-af430fd7bc3e_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7484_b491a443-0013-4cd4-8480-3d73140e22c7_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7485_86c13fc3-b7b6-41d2-adac-6b8eded8f165_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7485_86c13fc3-b7b6-41d2-adac-6b8eded8f165_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7486_08d1b74b-a5f3-4917-a57d-a191faeb49bf_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7487_f5a1dc06-ab7a-43d1-b390-660107d616cd_740x.jpg?v=1774406612", "https://www.njs-export.com/cdn/shop/files/IMG_7488_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7489_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7490_740x.jpg?v=1774406612", "https://www.njs-export.com/cdn/shop/files/IMG_7491_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7492_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7493_41caa6b0-d5ad-4231-8d39-b8e5f813cfba_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7494_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7495_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7496_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7498_fc6bb739-804b-4b6e-98d3-7bddd2d5c504_740x.jpg?v=1774406611", "https://www.njs-export.com/cdn/shop/files/IMG_7499_e31525c7-870f-434d-9505-22aca5428bd7_740x.jpg?v=1774406611"], specs: ["Brand: Araya", "Size: 700c"] }



];



// --- BỔ SUNG: DỮ LIỆU SẢN PHẨM ORIGINAL PRODUCTS ---



const originalProductsData = [



    { id: 1701, name: "Brand New NJS EXPORT Original Sticker", price: 2.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0863_740x.jpg?v=1712315286"], specs: ["Type: Accessory"] },



    { id: 1702, name: "Brand New NJS EXPORT Original Waterproof Sticker", price: 4.99, images: ["https://www.njs-export.com/cdn/shop/files/njs_sticker_740x.jpg?v=1712278953", "https://www.njs-export.com/cdn/shop/files/njs_sticker_2br_740x.jpg?v=1693456122", "https://www.njs-export.com/cdn/shop/files/njs_sticker_2gs_740x.jpg?v=1693456122", "https://www.njs-export.com/cdn/shop/files/njs_sticker_blue_740x.jpg?v=1693456122", "https://www.njs-export.com/cdn/shop/files/njs_sticker_gold_740x.jpg?v=1693456122", "https://www.njs-export.com/cdn/shop/files/njs_sticker_red_740x.jpg?v=1693456122", "https://www.njs-export.com/cdn/shop/files/njs_sticker_silver_740x.jpg?v=1693456122", "https://www.njs-export.com/cdn/shop/files/IMG_1470_665ace4d-b10a-4643-8813-aff9cf45b138_740x.jpg?v=1693456122"], specs: ["Type: Accessory"] },



    { id: 1703, name: "Brand New NJS EXPORT Original T-Shirt", price: 38.00, images: ["https://www.njs-export.com/cdn/shop/products/t-shirt01_740x.jpg?v=1712279098", "https://www.njs-export.com/cdn/shop/products/t-shirt02_740x.jpg?v=1652601056", "https://www.njs-export.com/cdn/shop/products/t-shirt03_740x.jpg?v=1652601056", "https://www.njs-export.com/cdn/shop/products/t-shirt04_740x.jpg?v=1652601056"], specs: ["Type: Apparel"] },



    { id: 1704, name: "Brand New NJS EXPORT Original Coin Case", price: 12.79, images: ["https://www.njs-export.com/cdn/shop/products/coincase_01_1000x1000_98747018-e32d-4238-abf2-837acec10122_740x.jpg?v=1712279010", "https://www.njs-export.com/cdn/shop/products/coincase_02_1000x1000_dca2eb7d-a2fb-4bd0-9ffd-fd80444ed246_740x.jpg?v=1676543940"], specs: ["Type: Accessory"] }



];







// --- DỮ LIỆU SẢN PHẨM MỚI (MISC CATEGORIES) ---



const bricABracData = [



    { id: 1801, name: "90's Vintage MINOURA Wheel Truing Stand (26011002)", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3679_6497a9b4-e948-4f0a-a432-7be39913f2d7_740x.jpg?v=1768013659", "https://www.njs-export.com/cdn/shop/files/IMG_3680_740x.jpg?v=1768013659", "https://www.njs-export.com/cdn/shop/files/IMG_3681_740x.jpg?v=1768013659", "https://www.njs-export.com/cdn/shop/files/IMG_3682_740x.jpg?v=1768013659"], specs: ["Brand: Minoura"] },



    { id: 1802, name: "A history of Mr Nakano x Mr Nagasawa in the newspaper /260312", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_7020_b45810fd-5b82-4186-9fd7-0a87ce6cc427_740x.jpg?v=1773274867", "https://www.njs-export.com/cdn/shop/files/IMG_7021_19c346ab-e627-4650-8751-bd6146f58973_740x.jpg?v=1773274868", "https://www.njs-export.com/cdn/shop/files/IMG_7022_e83b711f-80e9-4247-93b2-84832d279b99_740x.jpg?v=1773274867"], specs: ["Type: Memorabilia"] },



    { id: 1803, name: "AAA Authentic Keirin Body Armor Protector Japanese M Size (American S) /241105", price: 38.00, images: ["https://www.njs-export.com/cdn/shop/files/IMG_8012_740x.jpg?v=1730783648", "https://www.njs-export.com/cdn/shop/files/IMG_8013_740x.jpg?v=1730783648"], specs: ["Type: Protector", "Size: M (Japan)"] },



    { id: 1804, name: "AGU Short Sleeve Jersey /Japanese XL Size (American L)", price: 38.00, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5331_aef9c333-d5fb-493a-b766-e9d4860eb11b_740x.jpg?v=1725411024", "https://www.njs-export.com/cdn/shop/files/IMG_5332_c2910a75-321e-412c-ae5d-e8700aff1ea0_740x.jpg?v=1725411024", "https://www.njs-export.com/cdn/shop/files/IMG_5333_4a337449-6072-46f3-986e-a2b5eb254866_740x.jpg?v=1725411024"], specs: ["Brand: AGU", "Size: XL (Japan)"] },



    { id: 1805, name: "Arai NJS Approved Keirin Track Helmet M-size 57cm-58cm (24123101)", price: 79.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9636_740x.jpg?v=1735604736", "https://www.njs-export.com/cdn/shop/files/IMG_9637_740x.jpg?v=1735604735", "https://www.njs-export.com/cdn/shop/files/IMG_9638_740x.jpg?v=1735604735", "https://www.njs-export.com/cdn/shop/files/IMG_9639_740x.jpg?v=1735604735", "https://www.njs-export.com/cdn/shop/files/IMG_9640_740x.jpg?v=1735604736"], specs: ["Brand: Arai", "Size: M"] },



    { id: 1806, name: "Arai NJS Approved Keirin Track Helmet M-size 57cm-58cm /2501202", price: 79.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0399_208b63e9-44df-4391-b32d-14c6e507c5e3_740x.jpg?v=1737342382", "https://www.njs-export.com/cdn/shop/files/IMG_0400_4a4030d7-82e4-4427-837f-84bd78380666_740x.jpg?v=1737342382", "https://www.njs-export.com/cdn/shop/files/IMG_0401_2d1b6321-6f54-4d1c-861d-683c9296598c_740x.jpg?v=1737342382", "https://www.njs-export.com/cdn/shop/files/IMG_0402_bec7fe8b-982e-49c1-93ba-cc2489d1885c_740x.jpg?v=1737342382", "https://www.njs-export.com/cdn/shop/files/IMG_0403_c69371f1-b242-4551-9962-41ffa0130966_740x.jpg?v=1737342382"], specs: ["Brand: Arai", "Size: M"] },



    { id: 1807, name: "Arai NJS Approved Keirin Track Helmet M-size 57cm-58cm /2501202", price: 79.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0404_825a9dc7-eed7-475e-ac21-ddb44af9646c_740x.jpg?v=1737342476", "https://www.njs-export.com/cdn/shop/files/IMG_0405_1078ef83-0159-4189-a4cd-a002fd94efcf_740x.jpg?v=1737342476", "https://www.njs-export.com/cdn/shop/files/IMG_0406_a8dee11e-d76e-4962-a4fd-b058bf10512b_740x.jpg?v=1737342476", "https://www.njs-export.com/cdn/shop/files/IMG_0407_e9abbefa-713e-42d6-8b2b-189270e871ee_740x.jpg?v=1737342476", "https://www.njs-export.com/cdn/shop/files/IMG_0408_64cb1ed5-eb83-47c1-8de5-1ba3bd7f14a3_740x.jpg?v=1737342476"], specs: ["Brand: Arai", "Size: M"] },



    { id: 1808, name: "Arai NJS Approved Keirin Track Helmet M-size 57cm-58cm /2501202", price: 89.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0409_6df13dbf-23da-41f2-8026-7acf61365f22_740x.jpg?v=1737342607", "https://www.njs-export.com/cdn/shop/files/IMG_0410_511bf950-0905-4d35-8c1b-3de73254d84c_740x.jpg?v=1737342607", "https://www.njs-export.com/cdn/shop/files/IMG_0411_3558e2b1-ea06-4d8c-8a04-97c43bf15fb2_740x.jpg?v=1737342607", "https://www.njs-export.com/cdn/shop/files/IMG_0412_9fd0be8b-b2fb-49b6-8396-767f5cf67806_740x.jpg?v=1737342607", "https://www.njs-export.com/cdn/shop/files/IMG_0413_5b4758ad-db59-4437-9ea9-677dada637bc_740x.jpg?v=1737342607"], specs: ["Brand: Arai", "Size: M"] }



];







const gearData = [



    { id: 1901, name: "3rensho San Rensho Chainring Case Bag /241212", price: 49.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_8564_740x.jpg?v=1733979342", "https://www.njs-export.com/cdn/shop/files/IMG_8565_740x.jpg?v=1733979342", "https://www.njs-export.com/cdn/shop/files/IMG_8566_740x.jpg?v=1733979342", "https://www.njs-export.com/cdn/shop/files/IMG_8567_740x.jpg?v=1733979342"], specs: ["Brand: 3Rensho"] },



    { id: 1902, name: "AS Professional Whee Rim Cover Bag PAIR (25041106)", price: 37.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4258_06c189bc-d240-46b0-8c1f-dfcca1ad5c68_740x.jpg?v=1744346293"], specs: ["Brand: AS Professional"], isSoldOut: true },



    { id: 1903, name: "AS Professional Wheel Rim Cover PAIR /26011003", price: 19.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3694_bdd584e5-5d27-42b3-b343-2956833b9824_740x.jpg?v=1768013923", "https://www.njs-export.com/cdn/shop/files/IMG_3695_5788a69c-5c48-403b-b4ee-b36e4c4a0cfd_740x.jpg?v=1768013923"], specs: ["Brand: AS Professional"] },



    { id: 1904, name: "HARP Saddle Cover Protector (25042605)", price: 7.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4891_a86eb7c2-b463-41bd-943f-1b47f51086a1_740x.jpg?v=1745630988", "https://www.njs-export.com/cdn/shop/files/IMG_4892_f03875f2-1ee5-4932-9b0d-e3795c07a81a_740x.jpg?v=1745630988"], specs: ["Brand: HARP"] },



    { id: 1905, name: "Kyoto Mukomachi Keirin x Shinzaburo Hanpu Collaboration Bag /260217", price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_5641_97061b7f-757b-476a-bad4-33fddcff17a6_740x.jpg?v=1771301072", "https://www.njs-export.com/cdn/shop/files/IMG_5642_5bc5ff2b-03f9-477e-9b41-31b4843078f2_740x.jpg?v=1771301075", "https://www.njs-export.com/cdn/shop/files/IMG_5643_00bfd4a4-74c0-4da5-ae7c-d5295ad86057_740x.jpg?v=1771301072", "https://www.njs-export.com/cdn/shop/files/IMG_5644_f3918d77-4c7c-4e4a-8643-9e39bcaa11d0_740x.jpg?v=1771301072"], specs: ["Type: Bag"], isSoldOut: true },



    { id: 1906, name: "Madalist Club Helmet Cover Protector (26011006)", price: 39.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3705_740x.jpg?v=1768014168", "https://www.njs-export.com/cdn/shop/files/IMG_3707_40ee144a-fd64-4bf4-b8a6-d2ccf8041358_740x.jpg?v=1768014169", "https://www.njs-export.com/cdn/shop/files/IMG_3708_0718bfa7-92bc-4a9c-a437-0b23fe037ad4_740x.jpg?v=1768014169"], specs: ["Brand: Medalist Club"] },



    { id: 1907, name: "Medalist Club Chainring Case Bag", price: 39.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9806_f63d638f-3f8c-4a07-a45a-1fe22f779d00_740x.jpg?v=1710133562", "https://www.njs-export.com/cdn/shop/files/IMG_9807_ecd9d993-182e-45ea-b0b0-ecae2afd9dbb_740x.jpg?v=1710133562", "https://www.njs-export.com/cdn/shop/files/IMG_9808_51ddeb6e-1be0-494c-83a8-6134125623cc_740x.jpg?v=1710133561", "https://www.njs-export.com/cdn/shop/files/IMG_9809_be93e721-75d5-4deb-8e6b-35cfcb96cc8e_740x.jpg?v=1710133561"], specs: ["Brand: Medalist Club"] },



    { id: 1908, name: "Medalist Club Chainring Case Bag /25031005", price: 39.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2710_689de546-4421-47d6-ac23-620d2e7c52fd_740x.jpg?v=1741569073", "https://www.njs-export.com/cdn/shop/files/IMG_2711_740x.jpg?v=1741569073", "https://www.njs-export.com/cdn/shop/files/IMG_2712_740x.jpg?v=1741569073", "https://www.njs-export.com/cdn/shop/files/IMG_2713_740x.jpg?v=1741569073"], specs: ["Brand: Medalist Club"], isSoldOut: true }



];







const gripsData = [



    { id: 2001, name: "Never Used Champ Yoshida Keirin Grips (26030408)", price: 17.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_6422_aaec38f1-81ab-430b-80a0-bb00246c4fe0_740x.jpg?v=1772587666"], specs: ["Condition: Never Used"] }



];







const toolsData = [



    { id: 2101, name: "3rensho San Rensho Multiple Tool Wrench (251216)", price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2576_740x.jpg?v=1765860461", "https://www.njs-export.com/cdn/shop/files/IMG_2577_740x.jpg?v=1765860460"], specs: ["Brand: 3Rensho"], isSoldOut: true },



    { id: 2102, name: "Vintage Sugino Bottom Bracket Pin Spanner (26012007)", price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4447_efca5f8b-377c-43df-8ab4-9b9a4ca161a9_740x.jpg?v=1768887299", "https://www.njs-export.com/cdn/shop/files/IMG_4448_0a305e6e-993e-4fec-aed2-2c2f7ba6f518_740x.jpg?v=1768887296"], specs: ["Brand: Sugino"] },



    { id: 2103, name: "Park Tool Bottom Bracket Wrench BBT-4 (26012006)", price: 14.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_4438_740x.jpg?v=1768887234", "https://www.njs-export.com/cdn/shop/files/IMG_4439_740x.jpg?v=1768887234"], specs: ["Brand: Park Tool"] },



    { id: 2104, name: "Suntour Chain Cutter (2601091)", price: 27.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_3670_740x.jpg?v=1767938120", "https://www.njs-export.com/cdn/shop/files/IMG_3671_740x.jpg?v=1767938120"], specs: ["Brand: Suntour"] },



    { id: 2105, name: "Sugino Wheel Nut Wrench (25121607)", price: 29.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_2590_740x.jpg?v=1765860794", "https://www.njs-export.com/cdn/shop/files/IMG_2591_740x.jpg?v=1765860794"], specs: ["Brand: Sugino"] },



    { id: 2106, name: "Vintage Shimano Headset/Bottom Bracket/Hub Spanner Tool Wrench Complete Set(25100701)", price: 149.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_0019_eb75d219-41ff-457c-9d2f-a3e7bfa2b5e9_740x.jpg?v=1759797418", "https://www.njs-export.com/cdn/shop/files/IMG_0020_b147e867-cee7-4345-81f4-8bc3ed9bfea5_740x.jpg?v=1759797421"], specs: ["Brand: Shimano"] },



    { id: 2107, name: "Vintage Shimano Dura Ace Chain Whip Cog Remover 1/8\" (25100513)", price: 69.99, images: ["https://www.njs-export.com/cdn/shop/files/IMG_9927_74716bc6-f267-4917-a7fc-55b2d4a33f0e_740x.jpg?v=1759629364", "https://www.njs-export.com/cdn/shop/files/IMG_9928_994520b5-9e7c-49d7-a1f5-4796898d0d7e_740x.jpg?v=1759629363", "https://www.njs-export.com/cdn/shop/files/IMG_9929_3a6d067d-84bb-4538-a19c-7fc47b6582cb_740x.jpg?v=1759629364"], specs: ["Brand: Shimano"] },



    { id: 2108, name: "NOS Vintage Shimano Headset Wrenches 32mm Bottom Bracket Pin Spanner Tools (25090301)", price: 110.00, images: ["https://www.njs-export.com/cdn/shop/files/IMG_8861_740x.jpg?v=1756879449", "https://www.njs-export.com/cdn/shop/files/IMG_8862_740x.jpg?v=1756879449", "https://www.njs-export.com/cdn/shop/files/IMG_8863_740x.jpg?v=1756879449"], specs: ["Brand: Shimano", "Condition: NOS"] }



];



// Combine all products for routing/sharing

const allProductsData = [

    ...framesData, ...bottomBracketsData, ...chainringsData, ...chainsData, ...clipsStrapsData, 

    ...cranksData, ...cogsData, ...forksData, ...handlebarsData, ...handlebarStemSetsData, 

    ...headsetsData, ...hubsData, ...pedalsData, ...saddlesData, ...seatpostsData, ...stemsData, 

    ...wheelsData, ...originalProductsData, ...bricABracData, ...gearData, ...gripsData, ...toolsData

];



// ==========================================

// CÁC COMPONENT CHUNG

// ==========================================



const TopBar = ({ cartItemCount, onOpenCart, onOpenLogin, searchQuery, setSearchQuery, onSearch }) => (

    <div className="top-bar-wrapper">

        <div className="top-bar-content">

            <div className="search-wrapper">

                <input 

                    type="text" 

                    placeholder="Search" 

                    value={searchQuery}

                    onChange={(e) => setSearchQuery(e.target.value)}

                    onKeyDown={(e) => { if(e.key === 'Enter') onSearch(searchQuery); }}

                />

            </div>

            <div className="top-bar-right">

                <span>

                    <span onClick={onOpenLogin} className="login-link" style={{ cursor: 'pointer' }}>Log in or Create account</span>

                    <span onClick={onOpenCart} className="login-link" style={{ cursor: 'pointer', marginLeft: '5px' }}>| 🛒Cart ({cartItemCount})</span>

                </span>

                <select className="currency-selector">

                    <option value="USD">USD</option>

                    <option value="VND">VND</option>

                </select>

            </div>

        </div>

    </div>

);



const Header = ({ setPage, searchQuery, setSearchQuery, onSearch }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (menuName) => setOpenSubmenu(openSubmenu === menuName ? null : menuName);



    const handleNavigate = (pageName, e) => {

        if(e) e.preventDefault();

        setPage(pageName);

        setIsMobileMenuOpen(false);

    };



    const formatPageSlug = (name) => name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');



    return (

        <header>

            <div className="mobile-header-tools">

                <div className="header-left">

                    <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

                        <span className="hamburger">{isMobileMenuOpen ? "✕" : "☰"}</span> <span className="menu-text">Menu</span>

                    </button>

                </div>

                <div className="header-center"><a href="#" onClick={(e) => handleNavigate('home', e)} className="logo-mobile">NJS EXPORT</a></div>

                <div className="header-right"><span className="search-mobile">🔍</span> <a href="#cart" className="cart-mobile">🛒 <span className="cart-text">Cart</span></a></div>

            </div>

            

            <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>

                <ul>

                    <li><a href="#" onClick={(e) => handleNavigate('frames', e)}>FRAMES</a></li>

                    <li className={`nav-item-mobile ${openSubmenu === 'parts' ? 'open' : ''}`}>

                        <div className="menu-title" onClick={() => toggleSubmenu('parts')}>PARTS <span className="toggle-icon">{openSubmenu === 'parts' ? '−' : '+'}</span></div>

                        <ul className="submenu-mobile" style={{ display: openSubmenu === 'parts' ? 'block' : 'none' }}>

                            {partsList.map((item, index) => <li key={index}><a href="#" onClick={(e) => handleNavigate(formatPageSlug(item), e)}>{item}</a></li>)}

                        </ul>

                    </li>

                    <li className={`nav-item-mobile ${openSubmenu === 'misc' ? 'open' : ''}`}>

                        <div className="menu-title" onClick={() => toggleSubmenu('misc')}>MISC. <span className="toggle-icon">{openSubmenu === 'misc' ? '−' : '+'}</span></div>

                        <ul className="submenu-mobile" style={{ display: openSubmenu === 'misc' ? 'block' : 'none' }}>

                            {miscList.map((item, index) => <li key={index}><a href="#" onClick={(e) => handleNavigate(formatPageSlug(item), e)}>{item}</a></li>)}

                        </ul>

                    </li>

                    <li><a href="#" onClick={(e) => handleNavigate('original-products', e)}>ORIGINAL PRODUCTS</a></li>

                    <li className="search-bar-item">

                        <input 

                            type="text" placeholder="Search" 

                            value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}

                            onKeyDown={(e) => { if(e.key === 'Enter') { onSearch(searchQuery); setIsMobileMenuOpen(false); } }}

                        />

                    </li>

                </ul>

            </nav>



            <div className="desktop-only">

                <a href="#" onClick={(e) => handleNavigate('home', e)} className="logo-link-main">

                    <h1 className="logo">NJS EXPORT</h1><div className="subtitle">STRAIGHT FROM THE KEIRIN CIRCUIT</div>

                </a>

                <nav>

                    <ul className="nav-links">

                        <li className="nav-item"><a href="#" onClick={(e) => handleNavigate('frames', e)}>Frames</a></li>

                        <li className="nav-item">

                            <a href="#!">Parts ⌵</a>

                            <ul className="dropdown-menu">

                                {partsList.map((item, index) => <li key={index}><a href="#" onClick={(e) => handleNavigate(formatPageSlug(item), e)}>{item}</a></li>)}

                            </ul>

                        </li>

                        <li className="nav-item">

                            <a href="#!">Misc. ⌵</a>

                            <ul className="dropdown-menu">

                                {miscList.map((item, index) => <li key={index}><a href="#" onClick={(e) => handleNavigate(formatPageSlug(item), e)}>{item}</a></li>)}

                            </ul>

                        </li>

                        <li className="nav-item"><a href="#" onClick={(e) => handleNavigate('original-products', e)}>Original Products</a></li>

                    </ul>

                </nav>

            </div>

        </header>

    );

};



// ==========================================

// MAIN APP COMPONENT

// ==========================================



function App() {

    const [currentPage, setCurrentPage] = useState('home');

    const [previousPage, setPreviousPage] = useState('home'); 

    const [previousPageTitle, setPreviousPageTitle] = useState('Home'); 

    const [selectedProduct, setSelectedProduct] = useState(null);



    const [searchQuery, setSearchQuery] = useState('');

    const [submittedQuery, setSubmittedQuery] = useState('');



    const [isMailingModalOpen, setIsMailingModalOpen] = useState(false);

    const [isMailingButtonHidden, setIsMailingButtonHidden] = useState(false);

    const [isCartOpen, setIsCartOpen] = useState(false); 

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); 

    const [isShopLoginOpen, setIsShopLoginOpen] = useState(false);   

    const [isChatOpen, setIsChatOpen] = useState(false);

    

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    const [cart, setCart] = useState([]); 



    // Bộ lọc chung cho các trang danh sách

    const [brandFilter, setBrandFilter] = useState("All");

    const [sizeFilter, setSizeFilter] = useState("All");

    const [sortFilter, setSortFilter] = useState("Alphabetically, A-Z");



    // State cho nút Copy Link

    const [copySuccess, setCopySuccess] = useState(false);



    // Xóa bộ lọc khi chuyển trang để không bị lỗi không hiện sản phẩm

    useEffect(() => {

        setBrandFilter("All");

        setSizeFilter("All");

        setSortFilter("Alphabetically, A-Z");

    }, [currentPage]);



    // --- XỬ LÝ URL ROUTING ĐỂ CÓ LINK CHIA SẺ ---

    useEffect(() => {

        const handlePopState = () => {

            const params = new URLSearchParams(window.location.search);

            const page = params.get('page') || 'home';

            const id = params.get('id');



            if (page === 'product' && id) {

                const prod = allProductsData.find(p => p.id === parseInt(id));

                if (prod) {

                    setSelectedProduct(prod);

                    setCurrentPage('product');

                    return;

                }

            }

            setCurrentPage(page);

        };



        window.addEventListener('popstate', handlePopState);

        handlePopState(); // Chạy lần đầu khi load web



        return () => window.removeEventListener('popstate', handlePopState);

    }, []);



    // Khi State thay đổi (User bấm chuyển trang trên menu), cập nhật URL trên trình duyệt

    useEffect(() => {

        const params = new URLSearchParams(window.location.search);

        const currentUrlPage = params.get('page') || 'home';

        const currentUrlId = params.get('id');



        const isProductMatch = currentPage === 'product' && selectedProduct && currentUrlId == selectedProduct.id;

        const isPageMatch = currentUrlPage === currentPage;



        if (!isPageMatch || (currentPage === 'product' && !isProductMatch)) {

            let newUrl = window.location.pathname + `?page=${currentPage}`;

            if (currentPage === 'product' && selectedProduct) {

                newUrl += `&id=${selectedProduct.id}`;

            }

            window.history.pushState({ page: currentPage }, '', newUrl);

        }

    }, [currentPage, selectedProduct]);



    // Copy link function

    const handleCopyLink = () => {

        navigator.clipboard.writeText(window.location.href);

        setCopySuccess(true);

        setTimeout(() => setCopySuccess(false), 2000); // Ẩn chữ sau 2 giây

    };



    const addToCart = (product) => {

        if(product.isSoldOut) return; 

        setCart(prevCart => {

            const existingItem = prevCart.find(item => item.id === product.id);

            if (existingItem) {

                return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);

            } else {

                return [...prevCart, { ...product, image: product.images[0], quantity: 1 }];

            }

        });

        setIsCartOpen(true); 

    };



    const updateQuantity = (id, newQuantity) => {

        if(newQuantity < 1) return;

        setCart(cart.map(item => item.id === id ? { ...item, quantity: parseInt(newQuantity) } : item));

    };



    const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    const calculateTotal = () => {

        let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        return `$${total.toFixed(2)}`;

    };



    const handleOverlayClick = (e) => {

        if (e.target.className === 'mailing-overlay') setIsMailingModalOpen(false);

        if (e.target.className === 'cart-overlay') setIsCartOpen(false);

        if (e.target.className === 'login-overlay') { setIsLoginModalOpen(false); setIsShopLoginOpen(false); }

    };



    const viewProductDetail = (product, pageTitle, e) => {

        if (e) e.preventDefault();

        setPreviousPage(currentPage); 

        setPreviousPageTitle(pageTitle);

        setSelectedProduct(product);

        setCurrentPage('product');

        window.scrollTo(0, 0);

    };



    const openLightbox = (index) => { setCurrentImageIndex(index); setIsLightboxOpen(true); };

    const closeLightbox = () => setIsLightboxOpen(false);

    

    const nextImage = (e) => {

        e.stopPropagation();

        if (selectedProduct && selectedProduct.images) {

            setCurrentImageIndex((prev) => (prev === selectedProduct.images.length - 1 ? 0 : prev + 1));

        }

    };

    

    const prevImage = (e) => {

        e.stopPropagation();

        if (selectedProduct && selectedProduct.images) {

            setCurrentImageIndex((prev) => (prev === 0 ? selectedProduct.images.length - 1 : prev - 1));

        }

    };



    const handleSearch = (query) => {

        if (query.trim() === '') return;

        setSubmittedQuery(query);

        setPreviousPage(currentPage); 

        setPreviousPageTitle("Back to previous page");

        setCurrentPage('search');

    };



    // Tạo danh sách Brand và Size chỉ dành riêng cho Dữ Liệu đang hiển thị

    const getAvailableOptions = (dataArray, key) => {

        let options = new Set();

        dataArray.forEach(product => {

            if (key === "brand") {

                brandsList.forEach(b => {

                    if (b !== "All" && product.name.toLowerCase().includes(b.toLowerCase())) options.add(b);

                });

            } else if (key === "size") {

                sizeList.forEach(s => {

                    if (s !== "All" && ((product.specs && product.specs.some(spec => spec.includes(s))) || product.name.includes(s))) {

                        options.add(s);

                    }

                });

            }

        });

        return ["All", ...Array.from(options).sort()];

    };



    const getFilteredAndSortedData = (dataArray) => {

        return dataArray.filter(product => {

            if (brandFilter !== "All" && !product.name.toLowerCase().includes(brandFilter.toLowerCase())) return false;

            if (sizeFilter !== "All") {

                const hasSize = (product.specs && product.specs.some(spec => spec.includes(sizeFilter))) || product.name.includes(sizeFilter);

                if (!hasSize) return false;

            }

            return true;

        }).sort((a, b) => {

            switch (sortFilter) {

                case "Alphabetically, A-Z": return a.name.localeCompare(b.name);

                case "Alphabetically, Z-A": return b.name.localeCompare(a.name);

                case "Price, low to high": return a.price - b.price;

                case "Price, high to low": return b.price - a.price;

                case "Date, new to old": return b.id - a.id; 

                case "Date, old to new": return a.id - b.id;

                default: return 0;

            }

        });

    };



    const renderProductGrid = (dataArray, pageTitle) => {

        const processedData = getFilteredAndSortedData(dataArray);



        // Lấy danh sách Filter linh động chỉ có trong mảng dữ liệu này

        const availableBrands = getAvailableOptions(dataArray, "brand");

        const availableSizes = getAvailableOptions(dataArray, "size");



        let sizeLabel = "Size / Spec";

        if (pageTitle === "Handlebars") sizeLabel = "Width C-C";

        if (pageTitle === "Handlebar & Stem sets") sizeLabel = "Stem Size";

        if (pageTitle === "Seatposts") sizeLabel = "Diameter";

        if (pageTitle === "Saddles") sizeLabel = "Rail Width";

        if (pageTitle === "Wheels") sizeLabel = "Single/Set";



        let brandLabel = "Brand/Model";

        if (pageTitle === "Frames") brandLabel = "Brand";

        if (pageTitle === "Clips and Straps") brandLabel = "Item";

        

        const hideBrandFilter = ["Original Products", "Grips", "Tools"].includes(pageTitle);

        const hideSizeFilter = ["Original Products", "Bric-a-brac", "Gear", "Grips", "Tools"].includes(pageTitle);



        return (

            <div className="frames-page">

                <div className="breadcrumb">

                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a> › {pageTitle}

                </div>

                <div className="frames-header">

                    <h2>{pageTitle}</h2>

                    <div className="filters">

                        {!hideBrandFilter && (

                            <label>{brandLabel} 

                                <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>

                                    {availableBrands.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}

                                </select>

                            </label>

                        )}

                        {!hideSizeFilter && (

                            <label>{sizeLabel} 

                                <select value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}>

                                    {availableSizes.map((size, index) => <option key={index} value={size}>{size}</option>)}

                                </select>

                            </label>

                        )}

                        <label>Sort by 

                            <select value={sortFilter} onChange={(e) => setSortFilter(e.target.value)}>

                                {sortList.map((sort, index) => <option key={index} value={sort}>{sort}</option>)}

                            </select>

                        </label>

                    </div>

                </div>

                <div className="product-grid">

                    {processedData.length === 0 ? (

                        <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#666', marginTop: '20px' }}>No products match your filters.</p>

                    ) : (

                        processedData.map(product => (

                            <div className="product-card" key={product.id}>

                                <div className="product-img-wrapper" onClick={(e) => viewProductDetail(product, pageTitle, e)} style={{cursor: 'pointer'}}>

                                    <img src={product.images[0]} alt={product.name} />

                                    {product.isSoldOut && <div className="sold-out-badge">SOLD OUT</div>}

                                </div>

                                <p className="product-name" onClick={(e) => viewProductDetail(product, pageTitle, e)} style={{cursor: 'pointer'}}>{product.name}</p>

                                <p className="product-price">${product.price.toFixed(2)}</p>

                            </div>

                        ))

                    )}

                </div>

            </div>

        );

    };



    const validCategorySlugs = [

        'frames', 'bottom-brackets', 'chainrings', 'chains', 'clips-straps', 'cranks', 'cogs', 'forks', 'handlebars', 'handlebar-stem-sets', 'headsets', 'hubs', 'pedals', 'saddles', 'seatposts', 'stems', 'wheels', 'original-products', 'bric-a-brac', 'gear', 'grips', 'tools'

    ];

    

    const allMenuSlugs = [...partsList, ...miscList].map(p => p.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-'));

    const isPlaceholderCategory = allMenuSlugs.includes(currentPage) && !validCategorySlugs.includes(currentPage);



    return (

        <div>

            <TopBar 

                cartItemCount={cartItemCount} onOpenCart={() => setIsCartOpen(true)} onOpenLogin={() => setIsLoginModalOpen(true)} 

                searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch}

            />

            

            <div className="main-container animate-fade-in" key={currentPage + submittedQuery}>

                <Header setPage={setCurrentPage} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />

                

                {currentPage === 'home' && (

                    <div className="home-page">

                        <div className="promo">

                            <p><strong>NJS Approved Track Frames and Parts Straight from the Keirin Circuit!!</strong></p>

                            <p className="special">Special Offer till 31st March 2026 in Japan Time</p>

                            <p className="discount">Buy 3 or more, Get 20% Off</p>

                            <p>UPDATE // Some Parts // March 23rd 2026</p>

                        </div>

                        

                        <img src="/NJS-EXPORT/9022a705161ff42b7879d88f1fd6d0e8_50248ab4-16c2-4d2a-9b1d-2f3ec5b7b565.webp" alt="Keirin Circuit" className="hero-img" />

                        

                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/YTSave.com_YouTube_FixedGear-Nightmare-18-Descent-Without-B_Media_d6f7MPkPwIk_001_1080p (1).mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>

                                  

                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/clipsave.net-1774880015643.mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>



                           <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/attachment (51).mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>





                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/b8c6a665178ee26f.mp4" type="video/mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>



                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/attachment (10).mp4" type="video/mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>



                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/attachment (52).mp4" type="video/mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>



                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/attachment (53).mp4" type="video/mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>



                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/eaed40d47e9b5996 (1).mp4" type="video/mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>



                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/Colnago Master Pista Fixed Gear Bike Build (1).mp4" type="video/mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>



                        <div className="video-section">

                            <div className="video-feng-shui-frame">

                                <video width="100%" controls autoPlay muted loop className="bike-video">

                                    <source src="/NJS-EXPORT/Change SAMSON NJS Fork Aero to MAX.mp4" type="video/mp4" />

                                    Trình duyệt của bạn không hỗ trợ phát video.

                                </video>

                            </div>

                        </div>



                    </div>

                )}



                {/* GỌI GIAO DIỆN CÁC TRANG DANH MỤC */}

                {currentPage === 'frames' && renderProductGrid(framesData, "Frames")}

                {currentPage === 'bottom-brackets' && renderProductGrid(bottomBracketsData, "Bottom Brackets")}

                {currentPage === 'chainrings' && renderProductGrid(chainringsData, "Chainrings")}

                {currentPage === 'chains' && renderProductGrid(chainsData, "Chains")}

                {currentPage === 'clips-straps' && renderProductGrid(clipsStrapsData, "Clips and Straps")}

                {currentPage === 'cranks' && renderProductGrid(cranksData, "Cranks")}

                {currentPage === 'cogs' && renderProductGrid(cogsData, "Cogs")}

                {currentPage === 'forks' && renderProductGrid(forksData, "Forks")}

                {currentPage === 'handlebars' && renderProductGrid(handlebarsData, "Handlebars")}

                {currentPage === 'handlebar-stem-sets' && renderProductGrid(handlebarStemSetsData, "Handlebar & Stem Sets")}

                {currentPage === 'headsets' && renderProductGrid(headsetsData, "Headsets")}

                {currentPage === 'hubs' && renderProductGrid(hubsData, "Hubs")}

                {currentPage === 'pedals' && renderProductGrid(pedalsData, "Pedals")}

                {currentPage === 'saddles' && renderProductGrid(saddlesData, "Saddles")}

                {currentPage === 'seatposts' && renderProductGrid(seatpostsData, "Seatposts")}

                {currentPage === 'stems' && renderProductGrid(stemsData, "Stems")}

                {currentPage === 'wheels' && renderProductGrid(wheelsData, "Wheels")}

                {currentPage === 'original-products' && renderProductGrid(originalProductsData, "Original Products")}

                {currentPage === 'bric-a-brac' && renderProductGrid(bricABracData, "Bric-a-brac")}

                {currentPage === 'gear' && renderProductGrid(gearData, "Gear")}

                {currentPage === 'grips' && renderProductGrid(gripsData, "Grips")}

                {currentPage === 'tools' && renderProductGrid(toolsData, "Tools")}

                

                {isPlaceholderCategory && (

                    <div className="frames-page" style={{textAlign: 'center', padding: '100px 0'}}>

                        <h2 style={{textTransform: 'capitalize'}}>{currentPage.replace(/-/g, ' ')}</h2>

                        <p style={{color: '#666', marginTop: '20px'}}>This category is being updated with new products. Please check back soon!</p>

                    </div>

                )}



                {currentPage === 'search' && (

                    <div className="search-page">

                        <h2 className="search-page-title">Your search for "{submittedQuery}" revealed the following:</h2>

                        <div className="search-page-input-wrapper">

                            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => { if(e.key === 'Enter') handleSearch(searchQuery); }} />

                            <button onClick={() => handleSearch(searchQuery)}>🔍</button>

                        </div>

                        <div className="search-results-list">

                            {allProductsData.filter(p => p.name.toLowerCase().includes(submittedQuery.toLowerCase())).map(product => (

                                <div className="search-result-item" key={product.id}>

                                    <img src={product.images[0]} alt={product.name} onClick={(e) => viewProductDetail(product, "Search Results", e)} style={{cursor: 'pointer'}} />

                                    <div className="search-result-info">

                                        <h3 onClick={(e) => viewProductDetail(product, "Search Results", e)} style={{cursor: 'pointer'}}>{product.name}</h3>

                                        <p className="search-result-price">${product.price.toFixed(2)}</p>

                                        <p className="search-result-desc">{product.specs && product.specs.join(" ")}</p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                )}



                 {/* --- TRANG TERMS VÀ SHIPPING --- */}



                {currentPage === 'terms' && (



                    <div className="page-content-container animate-slide-up">



                        <h2>Terms and Policy</h2>



                        <p><strong>ALL FRAMES AND PARTS ARE IN USED OR GOOD USED CONDITION UNLESS OTHERWISE MENTIONED.</strong> Please refer to pictures for representations about wear and tear.</p>



                        <p><strong>REFUNDS / EXCHANGES / RETURNS.</strong> We offer NO REFUNDS unless the frame(s) or part(s) sold were not as described or are unsuitable for use. If an item purchased from us is not as described or is unsuitable for use, you have TEN DAYS (10) from when you receive the items to inspect them and notify us so that we can arrange a return or exchange. Please keep all packaging until you have inspected the items. In the rare event of damage via shipping, no returns, refunds or exchanges may be arranged unless a damage report is filed with your local postal office.</p>



                        <p><strong>NO WARRANTIES - ALL FRAMES AND PARTS SOLD ARE SOLD AS IS.</strong> Because most of the frames and parts we sell are used, ALL FRAMES AND PARTS ARE SOLD AS IS. We offer NO WARRANTIES, express or implied, on any frame or part we sell and are not liable if any of them fail.</p>



                        <p><strong>COLOR/FINISH NOTE & DISCLAIMER.</strong> We try our best to display the colors and finishes of items sold at our store. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>



                        <p><strong>SIZE NOTE & DISCLAIMER.</strong> Because almost all the frames we sell were custom ordered, some sizes or angles are not typical because every builder has a slightly different measurement. While we list sizes by seat tube, seat tube size is not the only measurement that should be taken into consideration. We can't guarantee any frame will fit you and it is up to you to look at frame measurements and decide whether a particular frame is right for you. If you need help with sizing, feel free to e-mail us.</p>



                        <p><strong>RIGHT TO CANCEL ORDER.</strong> We reserve the right to cancel your order for any reason, including but not limited to: shipping miscalculations, wrong price listings, or items out of stock.</p>



                        <p><strong>CORRECT SHIPPING/BILLING ADDRESS.</strong> It is your responsibility to make sure you have provided us with the correct shipping address and we are not liable for any costs incurred if the address provided was not correct.</p>



                        <p><strong>OUR CONTENT.</strong> None of the content from this website may be used without our permission.</p>



                        <p><strong>PRIVACY POLICY.</strong> We do not handle your billing at all. All billing information is handled through Paypal. For more information, you may read Paypal's User Agreement and Privacy Policy. The only information we do collect is your e-mail address and shipping information, and we do not share it with anybody.</p>



                        <p><strong>CUSTOMS TAXES NOTE.</strong> Please look into local import laws as we are NOT responsible for any import taxes/handling fees imposed by your local government.</p>



                    </div>



                )}







                {currentPage === 'shipping' && (



                    <div className="page-content-container animate-slide-up">



                        <h2>Shipping Information</h2>



                        <p><strong>WHERE IS NJS EXPORT?</strong> We are based in Kanagawa, Japan and are mail-order only.</p>



                        <p><strong>HOW DO WE SHIP?</strong> All shipping is done via EMS from Japan Postal, with your local government postal service delivering or Fedex (It depends on situations)</p>



                        <p><strong>DO WE SEND A TRACKING NUMBER?</strong> Yes.</p>



                        <p><strong>DOES SHIPPING INCLUDE INSURANCE?</strong> Yes.</p>



                        <p><strong>ARE THERE CUSTOMS TAXES?</strong> Yes, perhaps there may be in your country. It depends on your local policies.... <strong>*PLEASE BE AWARE THERE MAY BE LOCAL CUSTOMS TAXES WHERE YOU ARE.</strong></p>



                        <p><strong>DO WE SHIP TO YOUR COUNTRY?</strong> We ship worldwide to most countries. If you get an error message saying we do not have shipping rates for your country, please e-mail us at keirinman@njs-export.com.</p>



                        <p><strong>HOW LONG DOES SHIPPING TAKE?</strong> Shipping usually takes about a week, but could take longer depending on customs in your country.</p>



                        <p><strong>IF YOU ARE IN JAPAN, CAN YOU BUY FROM OUR STORE?</strong> We are mail-order only, but for local buyers, we can sometimes arrange a meeting in Shibuya to show product. Please e-mail us at Keirinman@NJS-Export.com if you are interested.</p>



                        <p><strong>HOW MUCH IS SHIPPING?</strong> Shipping depends on what you order (mostly by weight), and where you are. We calculate shipping when you place your order, but if you would like to estimate shipping, please use the charts below or use the shipping cost quote calculator on the checkout page.</p>



                        <p style={{fontStyle: 'italic'}}>WE CAN ONLY SHIP ONE FRAME <u>OR</u> WHEELSET PER ORDER. If you order more than one frame or wheelset (or combination of the two) in the same order, we will ask for an additional shipping charge after or we reserve the right to cancel your order. If you have more than one frame or wheelset per order, please e-mail us for a shipping quote.</p>



                        



                        <p><strong>SHIPPING RATES WORLDWIDE by shipping weight***</strong></p>



                        <table className="info-table">



                            <thead>



                                <tr><th>SHIPPING WEIGHT up to..</th><th>US/AUS/CAN</th><th>UK/EUROPE</th><th>ASIA (not Japan)</th><th>SOUTH AMERICA</th></tr>



                            </thead>



                            <tbody>



                                <tr><td>500g</td><td>$29</td><td>$27</td><td>$20</td><td>$29</td></tr>



                                <tr><td>1000g</td><td>$34</td><td>$33</td><td>$25</td><td>$42</td></tr>



                                <tr><td>1500g</td><td>$36</td><td>$42</td><td>$30</td><td>$60</td></tr>



                                <tr><td>2000g</td><td>$45</td><td>$52</td><td>$34</td><td>$77</td></tr>



                                <tr><td>3000g</td><td>$60</td><td>$69</td><td>$45</td><td>$82</td></tr>



                                <tr><td>4000g</td><td>$96</td><td>$97</td><td>$56</td><td>$155</td></tr>



                                <tr><td>5000g</td><td>$111</td><td>$125</td><td>$67</td><td>$198</td></tr>



                                <tr><td>6000g</td><td>$147</td><td>$142</td><td>$78</td><td>$221</td></tr>



                                <tr><td>7000g</td><td>$165</td><td>$167</td><td>$87</td><td>$235</td></tr>



                                <tr><td>8000g</td><td>$180</td><td>$182</td><td>$96</td><td>$258</td></tr>



                            </tbody>



                        </table>







                        <p><strong>TYPICAL SHIPPING WEIGHT OF ITEMS (including packing)</strong></p>



                        <table className="info-table">



                            <tbody>



                                <tr><td>Bottom Bracket</td><td>300g</td></tr>



                                <tr><td>Chain</td><td>400g</td></tr>



                                <tr><td>Chainring</td><td>150g</td></tr>



                                <tr><td>Clips</td><td>100g</td></tr>



                                <tr><td>Cog</td><td>50g</td></tr>



                                <tr><td>Crankset</td><td>700g</td></tr>



                                <tr><td>Fork</td><td>900g</td></tr>



                                <tr><td>Frame*</td><td>6000g</td></tr>



                                <tr><td>Handlebars Steel</td><td>700g</td></tr>



                                <tr><td>Handlebars Aluminum</td><td>350g</td></tr>



                                <tr><td>Helmet</td><td>550g</td></tr>



                                <tr><td>Hubs (set)</td><td>600g</td></tr>



                                <tr><td>Hub (single)</td><td>300g</td></tr>



                                <tr><td>Wheels</td><td>3500g</td></tr>



                            </tbody>



                        </table>



                        <p>*certain items, i.e. frames and wheels have higher "shipping weights" because of their size, not because of their actual weight. We can often ship additional parts with a frame at no extra shipping cost with a frame or wheels.</p>



                    </div>



                )}



                {/* --- TRANG CHI TIẾT SẢN PHẨM --- */}

                {currentPage === 'product' && selectedProduct && (

                    <div className="product-details-page">

                        <div className="breadcrumb">

                            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}>Home</a> ›&nbsp;

                            {previousPage !== 'home' && (

                                <span key="prev-page">

                                    <a href="#" onClick={(e) => { e.preventDefault(); window.history.back(); }}>{previousPageTitle}</a> ›&nbsp;

                                </span>

                            )}

                            <span style={{ color: '#888' }}>{selectedProduct.name}</span>

                        </div>



                        <div className="product-details-container">

                            <div className="product-images">

                                {selectedProduct.images.map((imgUrl, index) => (

                                    <img 

                                        key={index} src={imgUrl} 

                                        alt={`${selectedProduct.name} - view ${index + 1}`} 

                                        onClick={() => openLightbox(index)}

                                        style={{ cursor: 'zoom-in' }}

                                    />

                                ))}

                            </div>



                            <div className="product-info animate-slide-up">

                                <h1>{selectedProduct.name}</h1>

                                <p className="price-detail">${selectedProduct.price.toFixed(2)}</p>

                                

                                <button 

                                    className="btn-add-to-cart-large" 

                                    onClick={() => addToCart(selectedProduct)}

                                    style={{ backgroundColor: selectedProduct.isSoldOut ? '#ccc' : '#4a008e', cursor: selectedProduct.isSoldOut ? 'not-allowed' : 'pointer' }}

                                >

                                    {selectedProduct.isSoldOut ? 'SOLD OUT' : 'Add to Cart'}

                                </button>



                                <div className="product-specs">

                                    {selectedProduct.specs && selectedProduct.specs.map((spec, index) => (

                                        <p key={index}>{spec}</p>

                                    ))}

                                </div>

                                

                                {/* NÚT SHARE / COPY LINK BỔ SUNG Ở ĐÂY */}

                                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #eee' }}>

                                    <p style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>Share this product</p>

                                    <div style={{ display: 'flex', gap: '10px' }}>

                                        <input 

                                            type="text" 

                                            readOnly 

                                            value={window.location.href} 

                                            style={{ flex: 1, padding: '10px', fontSize: '13px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#f9f9f9', color: '#555', outline: 'none' }}

                                        />

                                        <button 

                                            onClick={handleCopyLink}

                                            style={{ backgroundColor: '#222', color: 'white', border: 'none', padding: '0 20px', borderRadius: '4px', cursor: 'pointer', fontSize: '13px', fontWeight: 'bold', transition: '0.2s' }}

                                            onMouseOver={(e) => e.target.style.backgroundColor = '#444'}

                                            onMouseOut={(e) => e.target.style.backgroundColor = '#222'}

                                        >

                                            {copySuccess ? 'Copied!' : 'Copy Link'}

                                        </button>

                                    </div>

                                </div>



                            </div>

                        </div>

                    </div>

                )}



                <div className="cyan-line"></div>



                <footer>

                    <div className="email-us">EMAIL US: KEIRINMAN@NJS-EXPORT.COM</div>

                    <ul className="footer-links">

                        <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('terms'); window.scrollTo(0,0); }}>Terms and Policy</a></li>

                        <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('shipping'); window.scrollTo(0,0); }}>Shipping Info</a></li>

                        <li><a href="https://keirin-showcase.tumblr.com/" target="_blank" rel="noopener noreferrer">Buyer Builds</a></li>

                        <li><a href="https://www.ebay.com/str/kagetsuen" target="_blank" rel="noopener noreferrer">eBay Store</a></li>

                    </ul>

                    <div className="footer-bottom">

                        <div>Copyright © 2026, NJS EXPORT.</div>

                        <div className="payment-icons">

                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" style={{height: '20px', filter: 'grayscale(0.5)'}} />

                            <img src="/NJS-EXPORT/visa.png" alt="Visa" style={{height: '20px', filter: 'grayscale(0.5)', marginLeft: '10px'}} />

                        </div>

                    </div>

                </footer>

            </div>



            {/* --- CÁC MODAL --- */}

            

            {!isMailingButtonHidden && (

                <div className="mailing-trigger-container">

                    <button className="mailing-trigger-btn animate-pop-in" onClick={() => setIsMailingModalOpen(true)}>Join our mailing list!</button>

                    <button className="mailing-trigger-close" onClick={() => setIsMailingButtonHidden(true)}>×</button>

                </div>

            )}



            {isMailingModalOpen && (

                <div className="mailing-overlay" onClick={handleOverlayClick}>

                    <div className="mailing-form-card animate-pop-in">

                        <button className="mailing-close-btn" onClick={() => setIsMailingModalOpen(false)}>×</button>

                        <h2 className="mailing-title">20% off everything!</h2>

                        <p className="mailing-subtitle">Complete the form to sign up.</p>

                        <form className="mailing-form" onSubmit={(e) => e.preventDefault()}>

                            <div className="input-group"><label>First name</label><input type="text" /></div>

                            <div className="input-group"><label>Last name</label><input type="text" /></div>

                            <div className="input-group"><label>Email</label><input type="email" required /></div>

                            <button type="submit" className="mailing-submit-btn">Submit</button>

                        </form>

                        <p className="mailing-terms">By signing up, you agree to receive marketing emails and new arrivals.</p>

                    </div>

                </div>

            )}



            {isLoginModalOpen && (

                <div className="login-overlay" onClick={handleOverlayClick}>

                    <div className="login-card animate-pop-in">

                        <button className="login-close" onClick={() => setIsLoginModalOpen(false)}>×</button>

                        <div className="login-header-text">NJS EXPORT</div>

                        <div className="login-content-box">

                            <h2 className="login-title">Sign in</h2>

                            <p className="login-subtitle">Sign in or create an account</p>

                            <button className="btn-shop-login" onClick={() => { setIsLoginModalOpen(false); setIsShopLoginOpen(true); }}>Continue with shop</button>

                            <div className="login-divider"><span>or</span></div>

                            <input type="email" placeholder="Email" className="login-email-input" />

                            <button className="btn-continue-login">Continue</button>

                        </div>

                    </div>

                </div>

            )}



            {isShopLoginOpen && (

                <div className="login-overlay" onClick={handleOverlayClick}>

                    <div className="shop-login-card animate-pop-in">

                        <button className="login-close" onClick={() => setIsShopLoginOpen(false)}>×</button>

                        <h2 className="shop-login-title">Sign in to Shop</h2>

                        <input type="email" placeholder="Enter your email" className="shop-email-input" />

                        <button className="btn-shop-continue">Continue</button>

                    </div>

                </div>

            )}



            {isCartOpen && (

                <div className="cart-overlay" onClick={handleOverlayClick}>

                    <div className="cart-modal-wide animate-slide-right">

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>

                            <h2 style={{ fontSize: '28px', color: '#333' }}>Your Cart</h2>

                            <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', color: '#666' }}>×</button>

                        </div>

                        

                        {cart.length === 0 ? (

                            <p style={{ textAlign: 'center', color: '#666', padding: '40px 0' }}>Your cart is currently empty.</p>

                        ) : (

                            <div className="cart-content">

                                <div className="cart-table-header">

                                    <div className="col-product"></div>

                                    <div className="col-price">Price</div>

                                    <div className="col-qty">Quantity</div>

                                    <div className="col-total">Total</div>

                                </div>



                                {cart.map((item) => (

                                    <div className="cart-item-row" key={item.id}>

                                        <div className="col-product item-info">

                                            <img src={item.image} alt={item.name} />

                                            <div>

                                                <p className="item-name">{item.name}</p>

                                                <button className="item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>

                                            </div>

                                        </div>

                                        <div className="col-price">${item.price.toFixed(2)}</div>

                                        <div className="col-qty">

                                            <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.id, e.target.value)} />

                                        </div>

                                        <div className="col-total">${(item.price * item.quantity).toFixed(2)}</div>

                                    </div>

                                ))}



                                <div className="cart-footer">

                                    <div className="cart-note"><a href="#!">Add a note to your order</a></div>

                                    <div className="cart-summary">

                                        <div className="subtotal"><span>Subtotal</span><span className="subtotal-price">{calculateTotal()}</span></div>

                                        <p className="tax-note">Shipping, taxes, and discounts will be calculated at checkout.</p>

                                        <div className="cart-actions">

                                            <button className="btn-outline" onClick={() => setIsCartOpen(false)}>Continue shopping</button>

                                            <button className="btn-outline">Update Cart</button>

                                            <button className="btn-checkout">Check Out</button>

                                        </div>

                                        <button className="btn-paypal"><i>Pay</i><i>Pal</i></button>

                                    </div>

                                </div>

                            </div>

                        )}

                    </div>

                </div>

            )}



            {isLightboxOpen && selectedProduct && (

                <div className="lightbox-overlay" onClick={closeLightbox}>

                    <button className="lightbox-close" onClick={closeLightbox}>×</button>

                    <button className="lightbox-prev" onClick={prevImage}>&#10094;</button>

                    <img 

                        src={selectedProduct.images[currentImageIndex]} 

                        alt={`Phóng to - ảnh ${currentImageIndex + 1}`} 

                        className="lightbox-img animate-pop-in" 

                        onClick={(e) => e.stopPropagation()} 

                    />

                    <button className="lightbox-next" onClick={nextImage}>&#10095;</button>

                </div>

            )}



            <div className="chat-container">

                {isChatOpen && (

                    <div className="chat-window animate-pop-in">

                        <div className="chat-header">

                            <h3>Chat with us</h3>

                            <p>👋 Hi, message us with any questions. We're happy to help!</p>

                        </div>

                        <div className="chat-body-wrapper">

                            <div className="chat-input-wrapper">

                                <input type="text" placeholder="Write message" className="chat-input" />

                                <button className="chat-send-btn">➤</button>

                            </div>

                            <div className="chat-body">

                                <p className="instant-answers-title">Instant answers</p>

                                <button className="track-order-btn">Track my order</button>

                            </div>

                        </div>

                    </div>

                )}

                <div className={`chat-button-toggle ${isChatOpen ? 'chat-open' : ''}`} onClick={() => setIsChatOpen(!isChatOpen)}>

                    {isChatOpen ? <span style={{ fontSize: '28px' }}>×</span> : <div className="chat-btn-content">💬 Chat</div>}

                </div>

            </div>

        </div>

    );

}



export default App;