const mongoose = require('mongoose');
const Product = require('../models/products');


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.DB_URL, {});
};

const seedProducts = [
    {
        name: 'Zucchini',
        price: 2.50,
        details: {
            description: "Summer squash that grows from a vine-like plant that resembles a bush.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018282/GB/Food/Produce/Zucchini_vurv5b.jpg'
    },
    {
        name: 'Sweet Onion',
        price: 1.50,
        details: {
            description: "A variety of onion that is not pungent. Their mildness is attributable to their low sulfur content.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Sweet_Onion_bvvcwe.jpg'
    },
    {
        name: 'Tomato',
        price: 2.00,
        details: {
            description: "The tomato is an edible berry of the plant Solanum lycopersicum.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Tomato_wdmugq.jpg'
    },
    {
        name: 'Strawberries',
        price: 5.99,
        details: {
            description: "A strawberry is both a low-growing, flowering plant and also the name of the fruit it produces.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Strawberries_oigtgs.jpg'
    },
    {
        name: 'American Salad',
        price: 4.99,
        details: {
            description: "Iceberg lettuce, romaine lettuce, carrots, red cabbage and radishes make up this mix.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Salad_American_bgstrd.jpg'
    },
    {
        name: 'Red Bell Pepper',
        price: 2.00,
        details: {
            description: "Red bell peppers are one of the common colors of mature bell peppers. They're blocky to bell-shaped.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Red_Pepper_l4fsaz.jpg'
    },
    {
        name: 'Raspberries',
        price: 3.00,
        details: {
            description: "A bramble fruit of the genus Rubus (family Rosaceae). Raspberries are an economically significant crop.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Raspberries_cwuwxz.jpg'
    },
    {
        name: 'Pear',
        price: 0.99,
        details: {
            description: "Produce Broccoli",
            category: 'A sweet, juicy fruit that is narrow near its stalk and wider and rounded at the bottom.'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Pear_azqc03.jpg'
    },
    {
        name: 'Parsley',
        price: 2.00,
        details: {
            description: "An aromatic plant with an erect growth habit and possesses branched, hollow stems and flat or curled leaves.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Parsley_u0gfhz.jpg'
    },
    {
        name: 'Peaches',
        price: 1.12,
        details: {
            description: "A soft, round, slightly furry fruit with sweet yellow flesh and pinky-orange skin.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Peaches_cbvgdp.jpg'
    },
    {
        name: 'Lime',
        price: 0.99,
        details: {
            description: "Sour, round and bright green citrus fruits. They are high in vitamin C.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Lime_iuzfbt.jpg'
    },
    {
        name: 'Orange Bell Pepper',
        price: 1.50,
        details: {
            description: "One of the common colors of mature bell peppers. They're blocky with three to four lobes and have a crisp, sweet flavor.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018281/GB/Food/Produce/Orange_Pepper_miuybq.jpg'
    },
    {
        name: 'Lemon',
        price: 0.89,
        details: {
            description: "Round, slightly elongated fruit. It has a strong and resistant skin with an intense yelow color upon ripeness.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Lemon_ngiicf.jpg'
    },
    {
        name: 'Honeycrisp Apple',
        price: 1.87,
        details: {
            description: "A medium to large sized apple, averaging 7 to 10 centimeters in diameter.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Honeycrisp_Apple_jdfb80.jpg'
    },
    {
        name: 'Green Bell Pepper',
        price: 1.50,
        details: {
            description: "Immature fruit of the bell pepper plant. They have a grassy, slightly bitter flavor.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Green_Pepper_xrdhuq.jpg'
    },
    {
        name: 'Green Onion',
        price: 1.99,
        details: {
            description: "Small to medium and size and grow in clusters of elongated straight leaves and narrow, slender bases.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Green_Onion_ckw9bz.jpg'
    },
    {
        name: 'Golden Delcious Apple',
        price: 1.25,
        details: {
            description: "A large, yellowish-green skinned clutivar and very sweet to the taste.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Golden_Delicious_dd3gaq.jpg'
    },
    {
        name: 'Ginger Root',
        price: 2.87,
        details: {
            description: "Fresh ginger is typically light brown on the outside and pale yellow on the inside.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Ginger_Root_b6w291.jpg'
    },
    {
        name: 'Garlic',
        price: 0.87,
        details: {
            description: "The garlic plant can either have a short, woody central stem or a softer psedostem made of overlapping leaf sheaths.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Garlic_wqxxbq.jpg'
    },
    {
        name: 'Eggplant',
        price: 2.99,
        details: {
            description: "Typically used as a vegetable in cooking, it is a berry by botanical definition.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Eggplant_pq3drt.jpg'
    },
    {
        name: 'Cucumber',
        price: 1.00,
        details: {
            description: "Regular cucumbers have a mild, light sweet flavor due to their high water content.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Cucumber_vsujq1.jpg'
    },
    {
        name: 'Celery',
        price: 1.40,
        details: {
            description: "These may be eaten raw in salads or alone, fried, boiled or with sauces.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018280/GB/Food/Produce/Celery_rkywgn.jpg'
    },
    {
        name: 'Carrots',
        price: 3.00,
        details: {
            description: "Root vegetable, often orange in color. The most commonly eaten part is the taproot, but greens can be eaten as well.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Produce/Carrots_fo3eco.jpg'
    },
    {
        name: 'Cantaloupe',
        price: 4.90,
        details: {
            description: "Edible member of the gourd family. It is always the saddest part of a fruit bowl.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Produce/Cantaloupe_rbqy4a.jpg'
    },
    {
        name: 'Broccoli',
        price: 4.99,
        details: {
            description: "Broccoli is a very nutritious vegetable. It is high in vitamin C, A, riboflavin, calcium and iron.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Produce/Broccoli_ecuyfu.jpg'
    },
    {
        name: 'Bok Choy',
        price: 7.98,
        details: {
            description: "Also called white Chinese cabbage. All parts, stems and leaves, are eaten.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Produce/Bok_Choy_hkejro.jpg'
    },
    {
        name: 'Banana',
        price: 0.15,
        details: {
            description: "Yellow fruit with a thick skin and a soft sweet flesh.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Produce/Banana_ddfrwb.jpg'
    },
    {
        name: 'Baby Spinach',
        price: 5.99,
        details: {
            description: "It's just young spinach. The smaller leaves are more tender and have a sweeter flavor.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Produce/Baby_Spinach_xaovx8.jpg'
    },
    {
        name: 'Avocado',
        price: 2.00,
        details: {
            description: "Bright green fruit with a large pit and dark leathery skin. They are also known as alligator pears.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Produce/Avocado_zybwy5.jpg'
    },
    {
        name: 'Asparagus',
        price: 3.49,
        details: {
            description: "Is a green vegetable that's easily recognizable for its long, pointy spears, which are commonly grilled.",
            category: 'produce'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Produce/Asparagus_gl82jc.jpg'
    },
    {
        name: 'Strawberry Yogurt',
        price: 3.59,
        details: {
            description: "No artificial flavors. Per 2/3 Cup Serving: 150 calories. Gluten free. Vitamins A & D.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Dairy/Yogurt_u1helr.jpg'
    },
    {
        name: 'Whole Milk',
        price: 4.90,
        details: {
            description: "Vitamin D. Grade A. Homogenized. Pasteurized. Milk from cows not treated with rBST/rBGH.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Dairy/Whole_Milk_voxcnh.jpg'
    },
    {
        name: 'Chocolate Pudding, Sugar Free',
        price: 1.25,
        details: {
            description: "Delivers a great taste with reduced calories. Perfect for putting into a lunchbox.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Dairy/Sugar_Free_Chocolate_oe2lqp.jpg'
    },
    {
        name: 'String Cheese',
        price: 4.79,
        details: {
            description: "The perfect snack for everyone. It answers your cravings with a delicious mild, milky flavor of Mozzarella.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018279/GB/Food/Dairy/StringCheese_u7ubju.jpg'
    },
    {
        name: 'Spread Butter',
        price: 4.99,
        details: {
            description: "Good source of vitamin D and clacium.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/SpreadButter_y6aoev.jpg'
    },
    {
        name: 'Sour Cream',
        price: 2.99,
        details: {
            description: "Traditional creamy flavor. Our quality gauranteed!",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/Sour_Cream_uuw8oc.jpg'
    },
    {
        name: 'Sour Cream Tube',
        price: 2.99,
        details: {
            description: "Pure and Naturall. Grade A. Pasteurized. Same great taste with just a squeeze.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/Sour_Cream_Tube_gkfzzy.jpg'
    },
    {
        name: 'Rice Pudding',
        price: 3.49,
        details: {
            description: "Gluten free. Made with simple, wholesome ingredients. Delicious pudding!",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/RicePudding_xe1aaq.jpg'
    },
    {
        name: 'Milk 2% Small',
        price: 2.50,
        details: {
            description: "Vitamin D. Grade A. Homogenized. Pasteurized. Milk from cows not treated with rBST/rBGH.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/Small2Milk_aezkto.jpg'
    },
    {
        name: 'Shredded Sharp Cheddar',
        price: 2.39,
        details: {
            description: "2 cups. Aged over 6 months. Excellent source of calcium",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/Sharp_Cheddar_npr2ff.jpg'
    },
    {
        name: 'Pepper Jack Sticks',
        price: 4.79,
        details: {
            description: "Rich with flavor. A natural source of calcium with 5 grams of protein per serving.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/PepperString_egdlyf.jpg'
    },
    {
        name: 'Canned whip cream',
        price: 3.39,
        details: {
            description: "Ultra-pasteurized. Sweetened. No artifical flavors or sweeteners.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/ReddiWip_ihm50w.jpg'
    },
    {
        name: 'Irish Butter',
        price: 4.49,
        details: {
            description: "Milk from Irish grass-fed cows. No growth hormones. Delicious!",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/IrishButter_esexbg.jpg'
    },
    {
        name: 'Parmesan Cheese',
        price: 4.29,
        details: {
            description: "This cheese features a rich taste that is a great addition to your next pizza or pasta recipe.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/Parm_Cheese_l59qzx.jpg'
    },
    {
        name: 'Heavy Cream Large',
        price: 8.19,
        details: {
            description: "Heavy whipping cream that can be used to make all sorts of recipes, in a large size.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/Heavy_Cream_f4v9oj.jpg'
    },
    {
        name: 'Heavy Cream Small',
        price: 5.29,
        details: {
            description: "Heavy whipping cream that can be used to make all sorts of recipes, in a smaller size.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/Heavy_Cream2_m89ewu.jpg'
    },
    {
        name: 'Vanilla Greek Yogurt',
        price: 5.69,
        details: {
            description: "Live cultures. Billions of probiotics. A portion of profits for a better world.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018278/GB/Food/Dairy/GreekYogurt3_bouuui.jpg'
    },
    {
        name: 'Strawberry Greek Yogurt',
        price: 1.00,
        details: {
            description: "Live cultures. Billions of probiotics. A portion of profits for a better world.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/GreekYogurt_jtdb3u.jpg'
    },
    {
        name: 'Plain Greek Yogurt',
        price: 5.69,
        details: {
            description: "Live cultures. Billions of probiotics. A portion of profits for a better world.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/GreekYogurt2_nkvh1x.jpg'
    },
    {
        name: 'Cream Cheese Generic',
        price: 2.19,
        details: {
            description: "100 calories per serving. 100% satisfaction or double your money back!",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/creamcheese_hsifcq.jpg'
    },
    {
        name: 'Cream Cheese Branded',
        price: 4.99,
        details: {
            description: "Made with fresh milk and cream. Can make a delicious cheesecake. Two pack!",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/creamcheese2_ej6lma.jpg'
    },
    {
        name: 'Cottage Cheese',
        price: 4.49,
        details: {
            description: "13 g protein. 4% milkfat Pasteurized. Grade A.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/Cottage_Cheese_ydjpsz.jpg'
    },
    {
        name: 'Colby-Jack Sticks',
        price: 4.79,
        details: {
            description: "Natural cheese snack sticks are richly flavored thanks to a combination of these two smooth cheese flavors.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/ColbyString_goqku8.jpg'
    },
    {
        name: 'Whip Cream',
        price: 2.00,
        details: {
            description: 'Yields about 3 cups. Makes smoothies delicious. Layers in desserts',
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/CoolWhip_trl9wj.jpg'
    },
    {
        name: 'French Vanilla Creamer',
        price: 7.29,
        details: {
            description: "This is a lactose free, gluten-free, cholesterol-free and non dairy creamer.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/Coffee_Mate_n5rdeh.jpg'
    },
    {
        name: 'Hazlenut Creamer',
        price: 7.29,
        details: {
            description: "This is a lactose free, gluten-free, cholesterol-free and non dairy creamer.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/CoffeeMate2_vuzvla.jpg'
    },
    {
        name: 'Chocolate Milk',
        price: 5.29,
        details: {
            description: "Vitamin D. No high fructose corn syrup. Milk from cows not treated with growth hormones.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/chocolatemilk_zyrqdc.jpg'
    },
    {
        name: 'Butter Salted',
        price: 4.89,
        details: {
            description: "Salted butter. It doesn't get more simple than that.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/buttersalted_k3rj5m.jpg'
    },
    {
        name: 'American Cheese',
        price: 7.49,
        details: {
            description: "American cheese slices are creamy, rich and full of flavor.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018277/GB/Food/Dairy/AmericanCheese_pygx0r.jpg'
    },
    {
        name: '2% Milk',
        price: 4.53,
        details: {
            description: "37% less fat than regular milk. Vitamins A and D. Grade A.",
            category: 'dairy'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Dairy/2milk_p6onpz.jpg'
    },
    //  stopped here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {
        name: 'Walnut Apple Pie',
        price: 6.99,
        details: {
            description: "Apple Walnut pie. Half a pie. Delicious!",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/WalnutApplePie_ruzwwe.jpg'
    },
    {
        name: 'Cherry Turnovers',
        price: 4.99,
        details: {
            description: "Turnovers, Cherry, 4 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/TurnoversCherry_x3xbho.jpg'
    },
    {
        name: 'Sourdough',
        price: 4.69,
        details: {
            description: "Fresh sourdough bread, 1 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/Sourdough_rfmpqg.jpg'
    },
    {
        name: 'Rainbow Cake',
        price: 4.99,
        details: {
            description: "Rainbow cake, single slice.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/rainbowcake_jspden.jpg'
    },
    {
        name: 'Pumpkin Pie',
        price: 6.99,
        details: {
            description: "Pumpkin Pie, made fresh. Whole Pie!",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/PumpkinPie_bl5kx0.jpg'
    },
    {
        name: 'Pumpkin Muffins',
        price: 5.99,
        details: {
            description: "Pumpkin flavored muffins. 4 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/PumpkinMuffin_n6k7mx.jpg'
    },
    {
        name: 'Pistachio Muffins',
        price: 5.99,
        details: {
            description: "Pistachio flavored muffins. 4 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/PistachioMuffin_cjijvr.jpg'
    },
    {
        name: 'Mini Strudel',
        price: 2.99,
        details: {
            description: "Mini apple flavored strudels. Mini. 8 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/MiniStrudel_o8btgb.jpg'
    },
    {
        name: 'Mini Italian Bread',
        price: 2.00,
        details: {
            description: "Mini Italian bread, 1 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/MiniItalianBread_jqllwe.jpg'
    },
    {
        name: 'Long Johns',
        price: 3.27,
        details: {
            description: "Bakery chocolate iced Long John donuts, 3 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/LongJohn_duv5wg.jpg'
    },
    {
        name: 'Italian Bread',
        price: 2.99,
        details: {
            description: "Fresh, authentic Italin Bread, 1 count",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/ItalianBread_mhevob.jpg'
    },
    {
        name: 'Danish Coffee Cake',
        price: 4.49,
        details: {
            description: "Cheese Danish coffee cake, 1 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018276/GB/Food/Bakery/DanishCoffeCake_nstlo3.jpg'
    },
    {
        name: 'French Bread',
        price: 3.99,
        details: {
            description: "Fresh country French bread, 1 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018275/GB/Food/Bakery/FrenchBread_bmlydd.jpg'
    },
    {
        name: 'Glazed Donuts',
        price: 9.99,
        details: {
            description: "1 package of fresh glazed donuts.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018275/GB/Food/Bakery/GlazedDonuts_gemz6v.jpg'
    },
    {
        name: 'Cupcakes Almond',
        price: 5.49,
        details: {
            description: "White Almond cupcakes, 6 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018275/GB/Food/Bakery/Cupcake_qrma5m.jpg'
    },
    {
        name: 'Danish Rolls',
        price: 3.99,
        details: {
            description: "Fresh Apple Danish rolls, 2 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018275/GB/Food/Bakery/DanishRolls_awgxfp.jpg'
    },
    {
        name: 'Country Boule',
        price: 4.49,
        details: {
            description: "4 count",
            category: 'Fresh Country Boule, 1 count'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018275/GB/Food/Bakery/Country_Boule_ne7kei.jpg'
    },
    {
        name: 'Coloful Donuts',
        price: 5.88,
        details: {
            description: "Beautifully decorated donuts, 6 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018275/GB/Food/Bakery/ColorDonut_x6gmx1.jpg'
    },
    {
        name: 'Chocolate Muffin',
        price: 5.99,
        details: {
            description: "Dutch Chocolate, 4 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018275/GB/Food/Bakery/CocolateMuffin_ezjpdx.jpg'
    },
    {
        name: 'Ciabatta',
        price: 4.49,
        details: {
            description: "Bakery fresh Ciabatta, 1 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/Ciabatta_uawgnl.jpg'
    },
    {
        name: 'Chocolate Chip Muffins',
        price: 5.99,
        details: {
            description: "Bakery fresh Chocolate Chip Muffins, 4 count",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/ChocolateChipMuffin_tntc5f.jpg'
    },
    {
        name: 'Boston Cream Cupcakes',
        price: 7.49,
        details: {
            description: "Bakery fresh Boston Cream Cupcakes, 6 count",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/CocoCupcake_rwt7sx.jpg'
    },
    {
        name: 'Cinnamon Rolls',
        price: 5.99,
        details: {
            description: "Bakery fresh pastry rolls, Cinnamon Rolls, White Iced",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/Cinnamon_Rolls_wjvmkv.jpg'
    },
    {
        name: 'Cherry Danish',
        price: 3.99,
        details: {
            description: "Bakery fresh Cherry Danish Rolls, 2 count",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/CherryDanish_ygkzbc.jpg'
    },
    {
        name: 'Bismark Donut',
        price: 4.00,
        details: {
            description: "Bakery fresh Bismark Donuts, 2 count",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/BismarkDonut_zofmod.jpg'
    },
    {
        name: 'Cherry Pie',
        price: 6.99,
        details: {
            description: "Bakery fresh Cherry Pie, half pie.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/CherryPie_wex81n.jpg'
    },
    {
        name: 'Blueberry Muffins',
        price: 5.99,
        details: {
            description: "Bakery fresh Blueberry Muffins, 4 count",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/BlueberryMuffin_yoliet.jpg'
    },
    {
        name: 'Almond Cupcakes',
        price: 7.49,
        details: {
            description: "Bakery fresh cupcakes, Toasted Almond, 6 count",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/AlmondCupcake_srqbgl.jpg'
    },
    {
        name: 'Asiago',
        price: 4.99,
        details: {
            description: "Bakery fresh Three Cheese Asiago Bread, 1 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/Asiago_vkvsr4.jpg'
    },
    {
        name: 'Baguette',
        price: 2.99,
        details: {
            description: "Freshly baked Baguette, 1 count.",
            category: 'bakery'
        },
        image: 'https://res.cloudinary.com/dpkwd6qri/image/upload/v1668018274/GB/Food/Bakery/Baguette_lbndhs.jpg'
    },

]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })