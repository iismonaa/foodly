/* =================================================
   FOODLY — REALISTIC PHOTO DATABASE & JS LOGIC
   ================================================= */

const allProducts = [
    { 
        id: 1, cat: "burgers", tag: "New", 
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Cheesy Beef Burger", ru: "Чиззи Биф Бургер", en: "Cheesy Beef Burger" }, 
        desc: { uz: "Mol go'shti, ikki karra cheddar pishlog'i, maxsus sous", ru: "Говядина, двойной чеддер, фирменный соус", en: "Beef patty, double cheddar, signature sauce" }, 
        price: 42000, rating: 4.9, time: "15 min", stock: true 
    },
    { 
        id: 2, cat: "burgers", tag: "Best Seller", 
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Foodly Double BBQ", ru: "Фудли Дабл Барбекю", en: "Foodly Double BBQ" }, 
        desc: { uz: "Ikki qavat mol go'shti, qarsildoq piyoz va barbekyu sousi", ru: "Двойная говядина, хрустящий лук и соус барбекю", en: "Double beef, crispy onions and BBQ sauce" }, 
        price: 54000, rating: 4.9, time: "18 min", stock: true 
    },
    { 
        id: 3, cat: "burgers", tag: "", 
        img: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Crispy Chicken Burger", ru: "Криспи Чикен Бургер", en: "Crispy Chicken Burger" }, 
        desc: { uz: "Qarsildoq tovuq filesi, aysberg va sarimsoqli sous", ru: "Хрустящее куриное филе, айсберг и чесночный соус", en: "Crispy chicken fillet, iceberg and garlic sauce" }, 
        price: 36000, rating: 4.7, time: "12 min", stock: true 
    },
    { 
        id: 4, cat: "burgers", tag: "Spicy", 
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Jalapeno Fire Burger", ru: "Халапеньо Файр Бургер", en: "Jalapeno Fire Burger" }, 
        desc: { uz: "Achchiq jalapeno qalampiri, mol go'shti va olovli sous", ru: "Острый перец халапеньо, говядина и огненный соус", en: "Spicy jalapeno peppers, beef and fiery sauce" }, 
        price: 46000, rating: 4.8, time: "15 min", stock: true 
    },
    { 
        id: 5, cat: "lavash", tag: "Best Seller", 
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Tandir Mol Go'shtli Lavash", ru: "Тандыр Лаваш с Говядиной", en: "Tandoor Beef Lavash" }, 
        desc: { uz: "Tandirda qizarib pishgan mol go'shtli pishloqli lavash", ru: "Запеченный в тандыре сырный лаваш с говядиной", en: "Tandoor-baked cheesy beef lavash" }, 
        price: 38000, rating: 4.9, time: "12 min", stock: true 
    },
    { 
        id: 6, cat: "lavash", tag: "", 
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Tovuqli Klassik Lavash", ru: "Куриный Классический Лаваш", en: "Classic Chicken Lavash" }, 
        desc: { uz: "Yumshoq tovuq go'shti, yangi bodring, pomidor va oq sous", ru: "Нежная курица, свежие огурцы, томаты и белый соус", en: "Tender chicken, fresh cucumber, tomato and white sauce" }, 
        price: 33000, rating: 4.7, time: "10 min", stock: true 
    },
    { 
        id: 7, cat: "lavash", tag: "New", 
        img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Club Sandwich XL", ru: "Клаб Сэндвич XL", en: "Club Sandwich XL" }, 
        desc: { uz: "Qovurilgan tost noni, tovuq, pishloq va kartoshka fri", ru: "Поджаренный тост, курица, сыр и картофель фри", en: "Toasted bread, chicken, cheese and french fries" }, 
        price: 39000, rating: 4.8, time: "14 min", stock: true 
    },
    { 
        id: 8, cat: "pizza", tag: "New", 
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Pepperoni Supreme (33 sm)", ru: "Пепперони Суприм (33 см)", en: "Pepperoni Supreme (33 cm)" }, 
        desc: { uz: "Dudlangan pepperoni kolbasasi va cho'ziluvchan mozzarella", ru: "Копченая пепперони и тянущаяся моцарелла", en: "Smoked pepperoni and stretchy mozzarella" }, 
        price: 78000, rating: 5.0, time: "22 min", stock: true 
    },
    { 
        id: 9, cat: "pizza", tag: "Best Seller", 
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80",
        name: { uz: "To'rt Pishloqli Pizza", ru: "Пицца Четыре Сыра", en: "Four Cheese Pizza" }, 
        desc: { uz: "Mozzarella, cheddar, parmezan va dorblu pishloqlari", ru: "Сыры моцарелла, чеддер, пармезан и дорблю", en: "Mozzarella, cheddar, parmesan and dorblu cheeses" }, 
        price: 82000, rating: 4.9, time: "20 min", stock: true 
    },
    { 
        id: 10, cat: "pizza", tag: "", 
        img: "https://images.unsplash.com/photo-1595750849642-e1d15c0e1814?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Go'shtli Mix Pizza", ru: "Мясной Микс Пицца", en: "Meat Mix Pizza" }, 
        desc: { uz: "Mol go'shti, tovuq filesi, qo'ziqorin va zaytun", ru: "Говядина, куриное филе, грибы и маслины", en: "Beef, chicken fillet, mushrooms and olives" }, 
        price: 89000, rating: 4.8, time: "25 min", stock: false 
    },
    { 
        id: 11, cat: "chicken", tag: "New", 
        img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Crispy Wings Box (9 dona)", ru: "Криспи Крылышки (9 шт)", en: "Crispy Wings Box (9 pcs)" }, 
        desc: { uz: "Maxsus ziravorlarda qovurilgan qarsildoq tovuq qanotlari", ru: "Хрустящие куриные крылышки в фирменных специях", en: "Crispy chicken wings fried in signature spices" }, 
        price: 44000, rating: 4.8, time: "15 min", stock: true 
    },
    { 
        id: 12, cat: "chicken", tag: "", 
        img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Tovuqli Stripslar (7 dona)", ru: "Куриные Стрипсы (7 шт)", en: "Chicken Strips (7 pcs)" }, 
        desc: { uz: "100% tovuq ko'krak go'shtidan tayyorlangan stripslar", ru: "Стрипсы из 100% куриного филе", en: "Strips made from 100% chicken breast" }, 
        price: 37000, rating: 4.7, time: "12 min", stock: true 
    },
    { 
        id: 13, cat: "sides", tag: "Best Seller", 
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Kartoshka Fri (Katta)", ru: "Картофель Фри (Большой)", en: "French Fries (Large)" }, 
        desc: { uz: "Oltinrang qarsildoq kartoshka fri va ketchup sousi", ru: "Золотистый хрустящий картофель фри и кетчуп", en: "Golden crispy french fries with ketchup" }, 
        price: 18000, rating: 4.8, time: "8 min", stock: true 
    },
    { 
        id: 14, cat: "sides", tag: "", 
        img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Pishloqli Tayog'chalar", ru: "Сырные Палочки", en: "Mozzarella Sticks" }, 
        desc: { uz: "Ichida erigan mozzarella pishlog'i bor qarsildoq tayoqchalar", ru: "Хрустящие палочки с расплавленной моцареллой", en: "Crispy sticks with melted mozzarella inside" }, 
        price: 26000, rating: 4.9, time: "10 min", stock: true 
    },
    { 
        id: 15, cat: "sides", tag: "", 
        img: "https://images.unsplash.com/photo-1619096252214-ef06dd45aa8f?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Sarimsoqli Non", ru: "Чесночный Хлеб", en: "Garlic Breadsticks" }, 
        desc: { uz: "Sarimsoq yog'i va ko'katlar bilan pishirilgan issiq non", ru: "Теплый хлеб с чесночным маслом и зеленью", en: "Warm bread baked with garlic butter and herbs" }, 
        price: 16000, rating: 4.6, time: "8 min", stock: true 
    },
    { 
        id: 16, cat: "desserts", tag: "New", 
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Qulupnayli Donut", ru: "Клубничный Донат", en: "Strawberry Glazed Donut" }, 
        desc: { uz: "Yumshoq ponchik ustida qulupnayli glazur va bezaklar", ru: "Нежный пончик с клубничной глазурью", en: "Soft donut topped with strawberry glaze" }, 
        price: 15000, rating: 4.9, time: "5 min", stock: true 
    },
    { 
        id: 17, cat: "desserts", tag: "Best Seller", 
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Shokoladli Brauni Tort", ru: "Шоколадный Брауни", en: "Chocolate Fudge Brownie" }, 
        desc: { uz: "Issiq Belçika shokoladli yumshoq brauni bo'lagi", ru: "Теплый кусочек брауни с бельгийским шоколадом", en: "Warm piece of Belgian chocolate brownie" }, 
        price: 24000, rating: 5.0, time: "5 min", stock: true 
    },
    { 
        id: 18, cat: "desserts", tag: "", 
        img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Karamelli Cheesecake", ru: "Карамельный Чизкейк", en: "Caramel Cheesecake" }, 
        desc: { uz: "Nyu-York klassik chizkeyki tuzlangan karamel bilan", ru: "Классический чизкейк Нью-Йорк с соленой карамелью", en: "Classic New York cheesecake with salted caramel" }, 
        price: 28000, rating: 4.9, time: "5 min", stock: true 
    },
    { 
        id: 19, cat: "desserts", tag: "", 
        img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Vanilli Muzqaymoq", ru: "Ванильное Мороженое", en: "Vanilla Ice Cream Cup" }, 
        desc: { uz: "Tabiiy qaymoq va vanildan tayyorlangan salqin desert", ru: "Прохладный десерт из натуральных сливок и ванили", en: "Cool dessert made from natural cream and vanilla" }, 
        price: 16000, rating: 4.8, time: "5 min", stock: true 
    },
    { 
        id: 20, cat: "drinks", tag: "New", 
        img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Cold Brew Muzli Kofe", ru: "Айс Кофе Колд Брю", en: "Cold Brew Iced Coffee" }, 
        desc: { uz: "Muz bo'laklari va sut bilan tayyorlangan tetiklantiruvchi kofe", ru: "Освежающий кофе со льдом и молоком", en: "Refreshing coffee with ice cubes and milk" }, 
        price: 22000, rating: 4.9, time: "5 min", stock: true 
    },
    { 
        id: 21, cat: "drinks", tag: "Best Seller", 
        img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Mango Lassi Smuzi", ru: "Манго Ласси Смузи", en: "Mango Lassi Smoothie" }, 
        desc: { uz: "Tabiiy pishgan mango va yogurtli salqin ichimlik", ru: "Прохладный напиток из спелого манго и йогурта", en: "Cool drink made with ripe mango and yogurt" }, 
        price: 25000, rating: 5.0, time: "5 min", stock: true 
    },
    { 
        id: 22, cat: "drinks", tag: "", 
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Mojito Laym & Yalpiz", ru: "Мохито Лайм и Мята", en: "Lime & Mint Mojito" }, 
        desc: { uz: "Yangi laym sharbati, yalpiz barglari va muzdek gazli suv", ru: "Свежий сок лайма, листья мяты и ледяная газировка", en: "Fresh lime juice, mint leaves and iced sparkling water" }, 
        price: 20000, rating: 4.8, time: "5 min", stock: true 
    },
    { 
        id: 23, cat: "drinks", tag: "", 
        img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Shokoladli Milkshake", ru: "Шоколадный Милкшейк", en: "Chocolate Milkshake" }, 
        desc: { uz: "Muzqaymoq, sut va quyuq shokoladli kokteyl", ru: "Коктейль из мороженого, молока и густого шоколада", en: "Milkshake with ice cream, milk and rich chocolate" }, 
        price: 24000, rating: 4.9, time: "6 min", stock: true 
    },
    { 
        id: 24, cat: "drinks", tag: "", 
        img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
        name: { uz: "Coca-Cola 0.5L", ru: "Кока-Кола 0.5Л", en: "Coca-Cola 0.5L" }, 
        desc: { uz: "Muzdek gazlangan klassik ichimlik", ru: "Ледяной классический газированный напиток", en: "Ice-classic carbonated drink" }, 
        price: 10000, rating: 4.9, time: "2 min", stock: true 
    }
];

const categoriesList = [
    { id: "burgers", icon: "🍔", name: { uz: "Burgerlar", ru: "Бургеры", en: "Burgers" } },
    { id: "lavash", icon: "🌯", name: { uz: "Lavash", ru: "Лаваш", en: "Lavash" } },
    { id: "pizza", icon: "🍕", name: { uz: "Pizza", ru: "Пицца", en: "Pizza" } },
    { id: "chicken", icon: "🍗", name: { uz: "Tovuq", ru: "Курица", en: "Chicken" } },
    { id: "sides", icon: "🍟", name: { uz: "Garnirlar", ru: "Гарниры", en: "Sides" } },
    { id: "desserts", icon: "🍩", name: { uz: "Shirinliklar", ru: "Десерты", en: "Desserts" } },
    { id: "drinks", icon: "🥤", name: { uz: "Ichimliklar", ru: "Напитки", en: "Drinks" } }
];

const i18n = {
    uz: {
        intro_text: "Olovli lazzat dunyosi yaratilmoqda...",
        nav_home: "Bosh sahifa", nav_cat: "Kategoriyalar", nav_menu: "To'liq Menyu", nav_promo: "Aksiya", nav_about: "Afzalliklar", nav_reviews: "Fikrlar",
        btn_order_now: "Buyurtma berish", btn_explore: "Menyuni ko'rish",
        hero_pill: "30 daqiqada tezkor yetkazib berish",
        hero_title: "Ishtahangiz, <br><span>tez yetkaziladi.</span>",
        hero_desc: "Yangi tayyorlangan burgerlar, qaynoq pizzalar, lavashlar, shirinliklar va muzdek ichimliklar to'g'ridan-to'g'ri eshigingizgacha.",
        hero_customers: "15,000+ mamnun mijozlar",
        cat_section_title: "Mashhur Kategoriyalar", cat_section_sub: "Sevimli taomlaringizni bir zumda toping",
        new_title: "Yangi Taomlar", new_sub: "Oshpazlarimizning eng so'nggi yangiliklari",
        best_title: "Eng Ko'p Sotilganlar", best_sub: "Mijozlarimiz eng ko'p tanlaydigan taomlar",
        view_all: "Barchasini ko'rish",
        promo_title: "Maxsus Taklif!", promo_desc: "Bugun barcha Double Burger va Combo setlarga 30% gacha chegirma!", off_text: "Chegirma",
        full_menu_title: "To'liq Restoran Menyusi", full_menu_sub: "Issiq ovqatlar, burgerlar, pizzalar, shirinliklar va muzdek ichimliklar",
        search_ph: "Taom, shirinlik yoki ichimlik qidiring...",
        cat_all: "Barchasi (24)", cat_burgers: "Burgerlar", cat_lavash: "Lavash & Doner", cat_pizza: "Pizzalar", cat_chicken: "Tovuq & Snacks", cat_sides: "Garnirlar", cat_desserts: "Shirinliklar", cat_drinks: "Ichimliklar",
        why_title: "Nima Uchun Foodly?", why_sub: "Sifat, tezlik va unutilmas ta'm kafolati",
        f1_title: "Tezkor Yetkazib Berish", f1_desc: "Issiq taomlaringiz 30 daqiqa ichida eshigingizda bo'ladi.",
        f2_title: "Yangi Ingredientlar", f2_desc: "Har kuni tongda keltiriladigan 100% halol va tabiiy mahsulotlar.",
        f3_title: "Tajribali Oshpazlar", f3_desc: "Maxsus mualliflik retseptlari asosida tayyorlanadigan taomlar.",
        f4_title: "24/7 Qo'llab-quvvatlash", f4_desc: "Kechayu kunduz buyurtmalarni qabul qilish va xizmat ko'rsatish.",
        rev_title: "Mijozlarimiz Nima Deydi?", rev_sub: "Minglab mamnun mijozlarning haqiqiy fikrlari",
        footer_desc: "Mazali fast-food, shirinliklar va salqin ichimliklar olami. Tez, sifatli va hamyonbop.",
        footer_menu: "Menyu", footer_contact: "Aloqa",
        cart_title: "Sizning Savatchangiz", cart_total: "Jami summa:", btn_checkout: "Buyurtmani rasmiylashtirish",
        checkout_title: "Buyurtma Ma'lumotlari", lbl_name: "Ismingiz", lbl_phone: "Telefon raqamingiz", lbl_addr: "Yetkazib berish manzili", lbl_pay: "To'lov usuli", btn_confirm: "Buyurtmani tasdiqlash",
        ok_title: "Buyurtmangiz qabul qilindi!", ok_sub: "Oshpazlarimiz taomlarni tayyorlashni boshlashdi.", btn_done: "Ajoyib!",
        sold_out: "Tugagan", items_count: "ta taom", added_toast: "Savatchaga qo'shildi!"
    },
    ru: {
        intro_text: "Создается мир огненного вкуса...",
        nav_home: "Главная", nav_cat: "Категории", nav_menu: "Всё Меню", nav_promo: "Акция", nav_about: "Преимущества", nav_reviews: "Отзывы",
        btn_order_now: "Заказать сейчас", btn_explore: "Смотреть меню",
        hero_pill: "Быстрая доставка за 30 минут",
        hero_title: "Ваши желания, <br><span>доставлены быстро.</span>",
        hero_desc: "Свежие бургеры, горячая пицца, лаваш, нежные десерты и прохладные напитки прямо к вашей двери.",
        hero_customers: "15,000+ довольных клиентов",
        cat_section_title: "Популярные Категории", cat_section_sub: "Найдите любимые блюда за секунду",
        new_title: "Новинки Меню", new_sub: "Самые свежие блюда от наших шеф-поваров",
        best_title: "Хиты Продаж", best_sub: "Блюда, которые выбирают чаще всего",
        view_all: "Смотреть все",
        promo_title: "Специальное Предложение!", promo_desc: "Сегодня скидка до 30% на все двойные бургеры и комбо наборы!", off_text: "Скидка",
        full_menu_title: "Полное Меню Ресторана", full_menu_sub: "Горячие блюда, бургеры, пицца, десерты и напитки",
        search_ph: "Поиск блюда, десерта или напитка...",
        cat_all: "Все (24)", cat_burgers: "Бургеры", cat_lavash: "Лаваш и Донер", cat_pizza: "Пицца", cat_chicken: "Курица и Снеки", cat_sides: "Гарниры", cat_desserts: "Десерты", cat_drinks: "Напитки",
        why_title: "Почему Выбирают Foodly?", why_sub: "Гарантия качества, скорости и незабываемого вкуса",
        f1_title: "Быстрая Доставка", f1_desc: "Ваши горячие блюда будут у двери в течение 30 минут.",
        f2_title: "Свежие Ингредиенты", f2_desc: "100% халяль и натуральные продукты каждое утро.",
        f3_title: "Опытные Повара", f3_desc: "Блюда, приготовленные по авторским рецептам.",
        f4_title: "Поддержка 24/7", f4_desc: "Прием заказов и обслуживание круглосуточно.",
        rev_title: "Что Говорят Клиенты?", rev_sub: "Реальные отзывы тысяч довольных гостей",
        footer_desc: "Мир вкусного фастфуда, десертов и прохладительных напитков.",
        footer_menu: "Меню", footer_contact: "Контакты",
        cart_title: "Ваша Корзина", cart_total: "Итого:", btn_checkout: "Оформить заказ",
        checkout_title: "Детали Заказа", lbl_name: "Ваше имя", lbl_phone: "Номер телефона", lbl_addr: "Адрес доставки", lbl_pay: "Способ оплаты", btn_confirm: "Подтвердить заказ",
        ok_title: "Ваш заказ принят!", ok_sub: "Наши повара уже начали готовить ваши блюда.", btn_done: "Отлично!",
        sold_out: "Закончилось", items_count: "блюд", added_toast: "Добавлено в корзину!"
    },
    en: {
        intro_text: "Creating the world of fiery taste...",
        nav_home: "Home", nav_cat: "Categories", nav_menu: "Full Menu", nav_promo: "Offer", nav_about: "Why Us", nav_reviews: "Reviews",
        btn_order_now: "Order Now", btn_explore: "Explore Menu",
        hero_pill: "Fast delivery within 30 minutes",
        hero_title: "Cravings, <br><span>delivered fast.</span>",
        hero_desc: "Fresh burgers, hot pizzas, lavash wraps, sweet desserts, and chilled drinks straight to your door.",
        hero_customers: "15,000+ Happy Customers",
        cat_section_title: "Featured Categories", cat_section_sub: "Find your favorite dishes instantly",
        new_title: "New Arrivals", new_sub: "Taste the latest creations from our chefs",
        best_title: "Best Sellers", best_sub: "Most loved dishes by our customers",
        view_all: "View All",
        promo_title: "Special Offer!", promo_desc: "Get up to 30% off on all Double Burgers and Combo Sets today!", off_text: "Off",
        full_menu_title: "Full Restaurant Menu", full_menu_sub: "Main dishes, burgers, pizzas, desserts, and refreshing drinks",
        search_ph: "Search for food, dessert or drink...",
        cat_all: "All (24)", cat_burgers: "Burgers", cat_lavash: "Lavash & Wraps", cat_pizza: "Pizzas", cat_chicken: "Chicken & Snacks", cat_sides: "Sides", cat_desserts: "Desserts", cat_drinks: "Drinks",
        why_title: "Why Choose Foodly?", why_sub: "Guaranteed quality, speed, and unforgettable taste",
        f1_title: "Lightning Fast", f1_desc: "Your hot meals arrive at your doorstep within 30 minutes.",
        f2_title: "Fresh & Halal", f2_desc: "100% halal and fresh ingredients delivered every morning.",
        f3_title: "Master Chefs", f3_desc: "Dishes crafted with our signature culinary recipes.",
        f4_title: "24/7 Support", f4_desc: "Round-the-clock ordering and customer care.",
        rev_title: "What Our Customers Say", rev_sub: "Real feedback from thousands of happy guests",
        footer_desc: "The world of delicious fast food, desserts, and chilled drinks.",
        footer_menu: "Menu", footer_contact: "Contact",
        cart_title: "Your Cart", cart_total: "Total:", btn_checkout: "Proceed to Checkout",
        checkout_title: "Order Details", lbl_name: "Your Name", lbl_phone: "Phone Number", lbl_addr: "Delivery Address", lbl_pay: "Payment Method", btn_confirm: "Confirm Order",
        ok_title: "Order Confirmed!", ok_sub: "Our chefs have started preparing your meal.", btn_done: "Awesome!",
        sold_out: "Sold Out", items_count: "items", added_toast: "Added to cart!"
    }
};

let lang = localStorage.getItem("foodly_lang") || "uz";
let theme = localStorage.getItem("foodly_theme") || "dark";
let cart = JSON.parse(localStorage.getItem("foodly_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("foodly_favs")) || [];
let currentCat = "all";
let searchQuery = "";

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const intro = document.getElementById("intro-screen");
        intro.style.opacity = "0";
        setTimeout(() => intro.style.display = "none", 800);
    }, 1600);

    document.getElementById("lang-select").value = lang;
    applyTheme(theme);
    applyLanguage(lang);
    updateCartUI();
    bindEvents();
});

function applyLanguage(newLang) {
    lang = newLang;
    localStorage.setItem("foodly_lang", lang);

    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
    });

    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        if (i18n[lang][key]) el.placeholder = i18n[lang][key];
    });

    renderCategories();
    renderSectionProducts("new-arrivals-grid", allProducts.filter(p => p.tag === "New").slice(0, 4));
    renderSectionProducts("best-sellers-grid", allProducts.filter(p => p.tag === "Best Seller").slice(0, 4));
    renderFullMenu();
    updateCartUI();
}

function applyTheme(newTheme) {
    theme = newTheme;
    localStorage.setItem("foodly_theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    document.getElementById("theme-icon").textContent = theme === "dark" ? "☀️" : "🌙";
}

function renderCategories() {
    const grid = document.getElementById("cat-cards-grid");
    grid.innerHTML = "";
    categoriesList.forEach(c => {
        const count = allProducts.filter(p => p.cat === c.id).length;
        const div = document.createElement("div");
        div.className = "cat-card";
        div.innerHTML = `
            <div class="cat-icon-circle">${c.icon}</div>
            <h4>${c.name[lang]}</h4>
            <span>${count} ${i18n[lang].items_count}</span>
        `;
        div.onclick = () => {
            currentCat = c.id;
            document.querySelectorAll(".tab-btn").forEach(b => {
                b.classList.toggle("active", b.dataset.cat === c.id);
            });
            renderFullMenu();
            document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
        };
        grid.appendChild(div);
    });
}

function createProductCard(p) {
    const isFav = favorites.includes(p.id);
    const card = document.createElement("div");
    card.className = "food-card";

    let badgeHTML = `<span></span>`;
    if (!p.stock) {
        badgeHTML = `<span class="tag-badge out">${i18n[lang].sold_out}</span>`;
    } else if (p.tag) {
        const cls = p.tag === "Best Seller" ? "sale" : "";
        badgeHTML = `<span class="tag-badge ${cls}">${p.tag}</span>`;
    }

    card.innerHTML = `
        <div class="card-top-badges">
            ${badgeHTML}
            <button class="fav-btn ${isFav ? "liked" : ""}" onclick="toggleFav(${p.id})">${isFav ? "❤️" : "🤍"}</button>
        </div>
        <div class="food-img-container">
            <img src="${p.img}" alt="${p.name[lang]}" class="food-real-img" loading="lazy">
        </div>
        <div class="food-content-box">
            <h3 class="food-title">${p.name[lang]}</h3>
            <p class="food-desc">${p.desc[lang]}</p>
            <div class="food-meta">
                <span>⭐ ${p.rating}</span>
                <span>🕒 ${p.time}</span>
            </div>
            <div class="food-bottom">
                <span class="food-price">${p.price.toLocaleString()} so'm</span>
                <button class="plus-cart-btn" onclick="addToCart(${p.id})" ${!p.stock ? "disabled" : ""}>+</button>
            </div>
        </div>
    `;
    return card;
}

function renderSectionProducts(containerId, list) {
    const el = document.getElementById(containerId);
    el.innerHTML = "";
    list.forEach(p => el.appendChild(createProductCard(p)));
}

function renderFullMenu() {
    const grid = document.getElementById("full-menu-grid");
    grid.innerHTML = "";

    const filtered = allProducts.filter(p => {
        const matchCat = currentCat === "all" || p.cat === currentCat;
        const matchSearch = p.name[lang].toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.desc[lang].toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:50px; font-size:1.1rem;">Taom topilmadi</p>`;
        return;
    }

    filtered.forEach(p => grid.appendChild(createProductCard(p)));
}

function toggleFav(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(f => f !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem("foodly_favs", JSON.stringify(favorites));
    renderSectionProducts("new-arrivals-grid", allProducts.filter(p => p.tag === "New").slice(0, 4));
    renderSectionProducts("best-sellers-grid", allProducts.filter(p => p.tag === "Best Seller").slice(0, 4));
    renderFullMenu();
}

function addToCart(id) {
    const prod = allProducts.find(p => p.id === id);
    if (!prod || !prod.stock) return;

    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: prod.id, qty: 1 });
    }
    saveCart();
    showToast(i18n[lang].added_toast);
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    saveCart();
}

function saveCart() {
    localStorage.setItem("foodly_cart", JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const list = document.getElementById("cart-items-list");
    const badge = document.getElementById("cart-badge");
    const totalEl = document.getElementById("cart-total-sum");

    list.innerHTML = "";
    let totalQty = 0;
    let totalSum = 0;

    if (cart.length === 0) {
        list.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:60px; font-size:1.05rem;">Savatchangiz bo'sh 🛒</p>`;
    } else {
        cart.forEach(item => {
            const p = allProducts.find(x => x.id === item.id);
            if (!p) return;
            totalQty += item.qty;
            totalSum += p.price * item.qty;

            const row = document.createElement("div");
            row.className = "cart-row";
            row.innerHTML = `
                <img src="${p.img}" alt="${p.name[lang]}" class="cart-row-img">
                <div class="cart-row-info">
                    <h5>${p.name[lang]}</h5>
                    <span>${(p.price * item.qty).toLocaleString()} so'm</span>
                </div>
                <div class="qty-box">
                    <button onclick="changeQty(${p.id}, -1)">-</button>
                    <strong>${item.qty}</strong>
                    <button onclick="changeQty(${p.id}, 1)">+</button>
                </div>
            `;
            list.appendChild(row);
        });
    }

    badge.textContent = totalQty;
    totalEl.textContent = totalSum.toLocaleString() + " so'm";
}

function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2200);
}

function bindEvents() {
    document.getElementById("lang-select").addEventListener("change", e => applyLanguage(e.target.value));

    document.getElementById("theme-btn").addEventListener("click", () => {
        applyTheme(theme === "light" ? "dark" : "light");
    });

    const drawer = document.getElementById("cart-drawer");
    const overlay = document.getElementById("overlay");
    const checkoutModal = document.getElementById("checkout-modal");
    const successModal = document.getElementById("success-modal");

    document.getElementById("cart-open-btn").addEventListener("click", () => {
        drawer.classList.add("open");
        overlay.classList.add("open");
    });

    document.getElementById("cart-close-btn").addEventListener("click", () => {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
    });

    overlay.addEventListener("click", () => {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        checkoutModal.classList.remove("open");
        successModal.classList.remove("open");
    });

    document.getElementById("mobile-menu-btn").addEventListener("click", () => {
        document.getElementById("nav-links").classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(a => {
        a.addEventListener("click", () => document.getElementById("nav-links").classList.remove("active"));
    });

    document.getElementById("filter-tabs").addEventListener("click", e => {
        if (e.target.classList.contains("tab-btn")) {
            document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentCat = e.target.dataset.cat;
            renderFullMenu();
        }
    });

    document.getElementById("menu-search").addEventListener("input", e => {
        searchQuery = e.target.value;
        renderFullMenu();
    });

    document.getElementById("open-checkout-btn").addEventListener("click", () => {
        if (cart.length === 0) return showToast("Savatchangiz bo'sh!");
        drawer.classList.remove("open");
        checkoutModal.classList.add("open");
    });

    document.getElementById("modal-close-btn").addEventListener("click", () => {
        checkoutModal.classList.remove("open");
        overlay.classList.remove("open");
    });

    document.getElementById("checkout-form").addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("cust-name").value;
        const phone = document.getElementById("cust-phone").value;
        const addr = document.getElementById("cust-addr").value;
        const pay = document.getElementById("cust-pay").value;

        const sum = cart.reduce((acc, item) => {
            const p = allProducts.find(x => x.id === item.id);
            return acc + (p ? p.price * item.qty : 0);
        }, 0);

        const orderId = Math.floor(10000 + Math.random() * 90000);
        document.getElementById("receipt-box").innerHTML = `
            <p><strong>Buyurtma raqami:</strong> #${orderId}</p>
            <p><strong>Mijoz:</strong> ${name}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>Manzil:</strong> ${addr}</p>
            <p><strong>To'lov:</strong> ${pay}</p>
            <p><strong>Jami to'lov:</strong> ${sum.toLocaleString()} so'm</p>
        `;

        checkoutModal.classList.remove("open");
        successModal.classList.add("open");
        cart = [];
        saveCart();
        e.target.reset();
    });

    document.getElementById("ok-close-btn").addEventListener("click", () => {
        successModal.classList.remove("open");
        overlay.classList.remove("open");
    });
}