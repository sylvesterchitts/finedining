/* =========================================================
   FINE DINING CHEFS ACADEMY — EDITABLE CONTENT
   Update prices, menus and contact details here.
   Sources: Menu Catalogue, Lunch Pack Menu, Snack Price List
   (current) and Company Profile 2024 (story, courses, awards).
   ========================================================= */
const SITE = {
  name: "Fine Dining Chefs Academy",
  whatsapp: "263782035321",            // wa.me number, no + or spaces
  phones: [
    { label: "+263 78 203 5321", tel: "+263782035321", note: "Calls & WhatsApp" },
    { label: "+263 77 264 6626", tel: "+263772646626", note: "Calls" }
  ],
  email: "admin@fdcazimbabwe.org",
  web: "https://fdcazimbabwe.org/",
  address: "19 Droitwich Ave, Mt Pleasant, Harare, Zimbabwe",
  maps: "https://www.google.com/maps/search/?api=1&query=19+Droitwich+Ave+Mount+Pleasant+Harare+Zimbabwe",
  facebook: "https://www.facebook.com/finediningchefsacademy/",
  instagram: "https://www.instagram.com/finediningchefsacademy/"
};

const CURRENCY = "$";
const MIN_GUESTS = 10;

/* Catering packages — Menu Catalogue */
const PACKAGES = [
  { id: "classic", name: "Classic", price: 20, for: "Casual lunches & daytime events",
    incl: ["1 starch", "1 protein, 100g", "1 salad"],
    slots: { starch: 1, protein: 1, salad: 1 } },
  { id: "deluxe", name: "Deluxe", price: 30, for: "Corporate events & team catering",
    incl: ["2 starches", "2 proteins, 100g each", "1 salad"],
    slots: { starch: 2, protein: 2, salad: 1 } },
  { id: "premium", name: "Premium", price: 45, for: "Weddings & private dining", popular: true,
    incl: ["2 starches", "2 proteins, 150g each", "1 vegetable", "2 salads", "1 dessert"],
    slots: { starch: 2, protein: 2, veg: 1, salad: 2, dessert: 1 } },
  { id: "executive", name: "Executive", price: 50, for: "Formal occasions & full celebrations",
    incl: ["Starter course", "2 starches", "2 proteins, 150g each", "1 vegetable", "2 salads", "1 dessert"],
    slots: { starch: 2, protein: 2, veg: 1, salad: 2, dessert: 1 }, starter: true }
];
const SLOT_LABEL = { starch: "Starch", protein: "Protein", veg: "Vegetable", salad: "Salad", dessert: "Dessert" };
const SLOT_PLURAL = { starch: "Starches", protein: "Proteins", veg: "Vegetables", salad: "Salads", dessert: "Desserts" };
const SLOT_ORDER = ["starch", "protein", "veg", "salad", "dessert"];

/* Menu discovery tabs */
const MENU = [
  { id: "proteins", label: "Proteins", img: "beef", alt: "Sliced pepper steak with peppers, roast vegetables and garlic rice",
    intro: "From slow-braised centrepieces to bright grilled plates.",
    groups: [
      { name: "Beef", slot: "protein", items: ["Beef Bulgogi", "Crying Tiger Beef", "French Onion Pot Roast", "Sizzling Pepper Steak", "Beef Vindaloo", "Keema Curry"] },
      { name: "Chicken & pork", slot: "protein", items: ["Coq au Vin", "Churu Chicken Amarillo", "Chicken Bhuna", "Mongolian Chicken", "Pineapple Teriyaki Chicken", "Portuguese Roast Chicken", "Chicken Satay", "Char Siu Pork", "Sticky Honey Garlic Ribs", "Lemongrass Pork Chop", "Pork Tenderloin, Dijon Sauce", "Sweet & Sour Pork"] },
      { name: "Fish", slot: "protein", items: ["Mediterranean Baked Fish", "Creamy Garlic Butter Fish", "Fish in Tomato or Pepper Sauce", "Lemon-Herb Butter Fish", "Coconut Lime Curry Fish"] }
    ] },
  { id: "starches", label: "Starches", img: "r-couscous", alt: "A plated couscous timbale with vegetables and herb oil",
    intro: "Global grains and potato dishes that anchor your chosen protein.",
    groups: [
      { name: "Rice & grains", slot: "starch", items: ["Spanakorizo, Greek Spinach Rice", "Thai Inspired Rice", "Tropical Island Coconut Rice", "Pepper Rice", "Garlic Butter or Cilantro Rice", "XO Fried Rice"] },
      { name: "Pasta & stuffed", slot: "starch", items: ["Caramelised Onion Pasta, Chilli Oil", "Turkish Inspired Pasta", "Garlic-Butter Orzo, Mushroom & Spinach", "Loaded Veggie White Lasagne", "Spicy Penne Arrabbiata", "Stuffed Veg: Eggplant, Butternut, Zucchini"] },
      { name: "Potato", slot: "starch", items: ["Harissa Glazed Potatoes", "Dukkah Potatoes", "Chaat Masala Potatoes", "Greek Roast with Lemon & Feta", "Moroccan Potato Tagine", "Aloo Palak, Spinach & Potato"] }
    ] },
  { id: "harvest", label: "Harvest & vegan", img: "vegan", alt: "Roasted vegetable and couscous bowl with chickpea salad",
    intro: "Produce-led dishes that hold the centre of the table. Vegan options are available across all packages on request.",
    groups: [
      { name: "Salads & bowls", slot: "salad", items: ["Grilled Fajita Bowl", "Roasted Veg & Couscous Bowl", "Charred Sweet Potato & Onion Harissa", "Mediterranean Chickpea & Herb", "Fruit Slaw", "Mexican Street Corn Salad", "Italian Pasta Salad"] },
      { name: "Vegetables", slot: "veg", items: ["Roasted Mediterranean Vegetables", "Hibachi-Style Grilled Vegetables", "Asian-Style Vegetable Stir Fry", "Rustic Ratatouille", "African-Style Chakalaka Relish"] },
      { name: "Vegan mains", slot: "protein", hint: "fills a protein slot", items: ["Butter Mushroom", "Grilled Tofu", "Crispy Sweet & Sour Eggplant", "Crispy Roasted Cauliflower", "Orange Maple Glazed Brussels Sprouts"] }
    ] },
  { id: "desserts", label: "Desserts", img: "desserts", alt: "Strawberry, blueberry and Oreo cheesecake shooters",
    intro: "The finish, made with the same care as everything before it.",
    groups: [
      { name: "Plated & sliced", slot: "dessert", items: ["Millionaire's Shortbread", "Italian Rainbow Cake", "Moist Carrot Cake, Cream Cheese Frosting", "Crostata di Frutta"] },
      { name: "Chilled & shooters", slot: "dessert", items: ["Oreo Icebox Cake", "Cheesecake Shooter, Strawberry", "Cheesecake Shooter, Oreo", "Cheesecake Shooter, Blueberry", "Fresh Fruit & Honey Yogurt Parfait"] }
    ] },
  { id: "snacks", label: "Snack platters", img: "r-platter", alt: "A platter of pastries and tomato bruschetta at an outdoor event",
    intro: "Priced per dozen, ready to eat, as tray takeaway. Serve ware and servers can be arranged for an extra fee.",
    priced: true, unit: "/dozen",
    groups: [
      { name: "Sandwiches, wraps & bites", items: [["Bacon & Mayo Sandwich", 18], ["Ham & Cheese Sandwich", 15], ["Mini Chicken Wraps", 25], ["Burrito Bites", 18], ["Cheese & Ham Pinwheels", 18], ["Mini Tacos", 25], ["Beef or Chicken Quesadillas", 25], ["Bread Tapas", 25], ["Feta & Tomato Bruschetta", 18]] },
      { name: "Pastries & pies", items: [["Beef or Chicken Samosa", 15], ["Spring Rolls", 15], ["Sausage Rolls", 20], ["Mini Pies", 25], ["Half Moon", 15], ["Quiche Lorraine", 25], ["Cheese Pastries", 65], ["Chicken Vol-au-Vents", 18], ["Mini Chicken Mushroom Pizza", 20]] },
      { name: "From the grill & fryer", items: [["BBQ Chicken Drumsticks", 32], ["Buffalo Wings", 32], ["Chicken Tenders", 20], ["Mongolian Meatballs", 18], ["Mini Beef Sliders", 25], ["Garlic Butter Steak Kebabs", 32], ["Smoked Pork Ribs", 38], ["Bacon Wrapped Pineapple", 25], ["Seafood Tempura (Fritto Misto)", 38], ["Fish Fingers", 20]] },
      { name: "Bakes & sweets", items: [["Assorted Cake Slices", 25], ["Blueberry Muffins", 18], ["Red Velvet Muffins", 18], ["Savoury Muffins", 18], ["Bran Muffins", 18], ["Braided Cinnamon Rolls", 25], ["Rainbow Swiss Roll Slices", 19], ["Fruit Tartlets", 25], ["Profiteroles", 12], ["Chocolate Eclairs", 19], ["Berry Trifle Cups", 32], ["Scones with Jam & Cream", 18]] },
      { name: "Platters", items: [["Bread Basket (Variety)", 25], ["Crudités Platter", 18], ["Seasonal Fruit Platter", 25], ["Cheese Platter", 60]] }
    ] },
  { id: "drinks", label: "Beverages", img: "beverages", alt: "Cappuccino, strawberry smoothie and a mojito mocktail",
    intro: "A full drinks service to complement every occasion.",
    priced: true,
    groups: [
      { name: "Hot beverages", items: [["Cappuccino", 3], ["Mochaccino", 3], ["Latte", 2], ["Chai", 2], ["Hot Chocolate", 2], ["Americano", 2]] },
      { name: "Cold beverages", sizes: "Medium $3, Large $5", items: ["Frappé: Chocolate or Caramel", "Milkshake", "Coffee Shake", "Iced Chai, Iced Mocha or Iced Latte", "Smoothie: Blueberry, Strawberry or Banana"] },
      { name: "Mocktails", sizes: "Small $2, Medium $3, Large $4", items: ["Mojito: Classic, Strawberry or Blueberry", "Daiquiri: Strawberry or Blueberry"] },
      { name: "Cocktails", sizes: "Medium $5, Large $7", items: ["Basil Smash G&T", "Blue Moscow", "Classic Mojito", "Old Fashioned"] }
    ] }
];

const SOUP = {
  price: 5,
  soups: ["Crème of Curried Butternut", "Roasted Red Pepper & Tomato", "Mexican Sweet Potato", "Courgette, Potato & Cheddar", "Creamy Mushroom"],
  sides: ["Garlic bread sticks", "Sourdough", "Panini", "Crispy fried roti", "Herbed croutons", "Compound butters"]
};

const SPIT = [
  { name: "Whole pork", weight: "35kg", serves: "Serves approx. 60–80 guests",
    body: "A whole pig slow-roasted over live coals until the skin crackles and the meat falls from the bone. Made for big gatherings and festive occasions.",
    incl: ["Whole pork, 35kg", "House spice rub & marinade", "Full spit rig & charcoal", "Dedicated pit master", "Transport to & from venue", "Carving & service at the spit"] },
  { name: "Whole lamb", weight: "30kg", serves: "Serves approx. 50–65 guests",
    body: "A whole lamb marinated in aromatic herbs and slow-turned to a golden finish. Tender, fragrant and a showpiece at any event.",
    incl: ["Whole lamb, 30kg", "Herb & garlic marinade", "Full spit rig & charcoal", "Dedicated pit master", "Transport to & from venue", "Carving & service at the spit"] }
];

/* Lunch Pack Menu */
const LUNCH = {
  packPrice: 5,
  packs: [
    { id: "chicken", name: "Roast chicken & rice", sub: "Plain rice, roasted chicken, mixed vegetables or slaw salad" },
    { id: "sadza", name: "Sadza & beef stew", sub: "Sadza, beef stew, leafy greens" },
    { id: "penne", name: "Penne arrabbiata & meatballs", sub: "Penne arrabbiata, meatballs, mixed vegetables" },
    { id: "pork", name: "Pork chop & potato roast", sub: "Potato roast, pork chop, garden salad" },
    { id: "jollof", name: "Jollof rice & grilled fish", sub: "Jollof rice, grilled fish, salad" }
  ],
  extras: [ { id: "burger", name: "Burger", price: 2 }, { id: "fries", name: "Fries", price: 1 } ]
};

/* Courses — Company Profile 2024. Durations shown as a guide; fees deliberately omitted. */
const COURSES = [
  { group: "Professional qualifications", items: [
    { title: "Certificate in Introduction to the Hospitality Industry", tag: "Level 1", dur: "12 months", type: "Professional chef training",
      body: "Your foundation in professional kitchens: hygiene, technique, teamwork and how hospitality really runs." },
    { title: "Diploma in Food Preparation & Culinary Arts", tag: "Level 2", dur: "6 months", type: "Professional chef training",
      body: "Hands-on culinary arts for working kitchens, building speed, precision and confidence across the full menu." },
    { title: "Diploma in Food Preparation & Culinary Arts: Patisserie", tag: "Level 2", dur: "6 months", type: "Patisserie",
      body: "Pastry, desserts and baking with the discipline that patisserie demands, from laminated doughs to plated sweets." },
    { title: "HEXCO certificate", tag: "National", type: "Professional chef training",
      body: "A Higher Education Examinations Council certificate, offered at the academy since 2022." }
  ] },
  { group: "Short courses & hobby cooking", items: [
    { title: "In-house certificate", dur: "3 months", type: "Short course or masterclass",
      body: "The academy's own three-month certificate, ideal for a focused start." },
    { title: "Short course", dur: "12 weeks", type: "Short course or masterclass",
      body: "Six weeks of pastry, then six weeks of food preparation. Real technique for keen home cooks." },
    { title: "Day masterclasses", dur: "1 day", type: "Short course or masterclass",
      body: "One unforgettable day in the kitchen, built around your occasion.",
      chips: ["Birthday", "Bridal", "House helps", "Corporate team building", "Valentine's", "Parent & child", "Kids"] }
  ] },
  { group: "Assessment", items: [
    { title: "Trade test reps", type: "Trade test",
      body: "Experienced assessors evaluate your culinary skills and give practical feedback, whether you are a working chef seeking official recognition or an aspiring cook proving your ability." }
  ] }
];

/* Company Profile 2024 */
const HISTORY = [
  { date: "1 January 2013", title: "Catering begins", body: "Event catering starts, trading as Mano's Kitchen." },
  { date: "3 October 2019", title: "The academy is registered", body: "Fine Dining Chefs Academy is formally registered." },
  { date: "5 October 2020", title: "First classes", body: "The school opens its doors with in-house certification." },
  { date: "9 January 2022", title: "HEXCO qualification", body: "A national HEXCO certificate is introduced." },
  { date: "3 July 2022", title: "City & Guilds", body: "City & Guilds certificate and diploma qualifications are introduced." }
];
const VALUES = ["Lead to inspire", "Deliverance & professionalism", "Respect & integrity", "Teamwork", "Passion & dedication", "Confidentiality", "Transparency"];
const AFFILIATES = ["City & Guilds Approved Centre", "Higher Education Examinations Council (HEXCO)", "Zimbabwe Chefs Association", "Hospitality Association of Zimbabwe", "Marketers Association of Zimbabwe", "Megafest Business Forum"];
const BRANDS = ["ZINWA", "Cresta Lodge Harare & Sango Conference Centre", "Marketers Association of Zimbabwe", "MAC Corporate Gifts & Clothing", "New Life", "Airtec Security", "Garsu Pasaulis", "Gill, Godlonton & Gerrans"];
const AWARDS = [
  { yr: "2023", org: "Megafest Business Awards, Women's Awards", title: "Outstanding Woman in Business" },
  { yr: "2023", org: "Entrepreneurs Network of Zimbabwe, National Iconic Entrepreneurs Awards", title: "Top Entrepreneur of the Year: Education & Learning" },
  { yr: "2023", org: "Hospitality Association of Zimbabwe Awards", title: "David Geddes Award" },
  { yr: "2022", org: "Megafest Northern Region Awards", title: "Business Woman of the Year" },
  { yr: "2022", org: "Megafest Women's Business Awards", title: "Outstanding Woman Entrepreneur of the Year, Diamond winner" },
  { yr: "2022", org: "Entrepreneurs Network of Zimbabwe, National Iconic Entrepreneur Awards", title: "Top 5 Women Entrepreneurs" },
  { yr: "2022", org: "Megafest", title: "Businesswoman of the Year" },
  { yr: "2022", org: "Zimbabwe CEO's Network", title: "Outstanding Leader Par Excellence, Tracy Maoneke" },
  { yr: "2021", org: "Megafest Business Awards, Women's Awards", title: "Young & Promising Woman of the Year, Silver winner, Tracy Maoneke" }
];

const ENQUIRY_TYPES = ["Professional chef training", "Patisserie", "Short course or masterclass", "Trade test", "Corporate team building", "Event catering", "Spit roast", "Snack platters", "Corporate lunch packs", "Something else"];
const EVENT_TYPES = ["Corporate team building", "Event catering", "Spit roast", "Snack platters", "Corporate lunch packs"];
const TYPE_KEYS = { training: "Professional chef training", patisserie: "Patisserie", masterclass: "Short course or masterclass", trade: "Trade test", team: "Corporate team building", catering: "Event catering", spit: "Spit roast", snacks: "Snack platters", lunch: "Corporate lunch packs" };

const TICKER = ["Coq au Vin", "Crying Tiger Beef", "Sadza & beef stew", "Harissa Glazed Potatoes", "Coconut Lime Curry Fish", "Crostata di Frutta", "Sticky Honey Garlic Ribs", "Spanakorizo", "Chicken Satay", "African-Style Chakalaka", "Cheesecake Shooters", "Moroccan Potato Tagine", "Whole lamb on the spit"];

const GALLERY = [
  { img: "r-volauvent", alt: "Golden vol-au-vents filled with braised beef", cap: "Vol-au-vents, ready for service" },
  { img: "r-class", alt: "Students in green aprons baking together in the academy kitchen", cap: "A class in the academy kitchen" },
  { img: "r-canapes", alt: "Cucumber rounds topped with creamy fish salad", cap: "Cucumber canapés" },
  { img: "r-garden-guests", alt: "A server in academy uniform attending to guests at an outdoor dinner", cap: "Garden service" },
  { img: "r-couscous", alt: "Couscous timbale topped with avocado, corn and orange, with herb oil", cap: "A plated couscous timbale" },
  { img: "r-bruschetta", alt: "Close-up of feta and tomato bruschetta", cap: "Feta & tomato bruschetta" },
  { img: "r-chef-plating", alt: "A chef in whites plating a dish at the pass", cap: "Plating at the pass" },
  { img: "r-plated-chicken", alt: "Chicken roulade on rice with vegetables at a set table", cap: "Mains at a private dinner" },
  { img: "r-parfait", alt: "Yogurt parfait jars with granola and fruit, labelled Fine Dining", cap: "Parfait jars for a corporate order" },
  { img: "r-bags", alt: "Hessian gift bags printed with the Fine Dining logo", cap: "The little details" }
];
