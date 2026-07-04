// قاعدة بيانات منيو هافانا گرل - بيجي
// Havana Grill Restaurant Menu Database - Baiji

const categories = [
    { id: 'all', name_ar: '⭐ الكل', name_en: '⭐ All' },
    { id: 'burger', name_ar: '🍔 البرگر', name_en: '🍔 Burgers' },
    { id: 'rizo', name_ar: '🍛 الريزو', name_en: '🍛 Rizo' },
    { id: 'pizza', name_ar: '🍕 البيتزا', name_en: '🍕 Pizza' },
    { id: 'zinger', name_ar: '🍗 الكرسبي والزنجر', name_en: '🍗 Crispy & Zinger' },
    { id: 'sides', name_ar: '🍟 المقبلات والمشروبات', name_en: '🍟 Sides & Drinks' }
];

const menuItems = [
    {
        id: 1,
        category: 'burger',
        name_ar: 'برگر كلاسك (عادي)',
        name_en: 'Classic Burger (Single)',
        desc_ar: 'لحم بقري مشوي، جبن تشيدر، خيار مخلل، طماطم مع صوص كلاسك المميز خبز هافانا الخاص',
        desc_en: 'Grilled beef patty, cheddar cheese, pickles, fresh tomato with classic signature Havana sauce in our artisan bun',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
        tags: ['popular'],
        prep_time: 15,
        calories: 520,
        options: [
            {
                title_ar: 'إضافات مجانية',
                title_en: 'Free Add-ons',
                type: 'checkbox',
                items: [
                    { name_ar: 'بدون بصل', name_en: 'No Onion', price: 0 },
                    { name_ar: 'بدون مخلل', name_en: 'No Pickles', price: 0 },
                    { name_ar: 'زيادة خس', name_en: 'Extra Lettuce', price: 0 }
                ]
            },
            {
                title_ar: 'إضافات مدفوعة',
                title_en: 'Paid Extras',
                type: 'checkbox',
                items: [
                    { name_ar: 'جبن تشيدر إضافي', name_en: 'Extra Cheddar Cheese', price: 1000 },
                    { name_ar: 'شريحة لحم إضافية', name_en: 'Extra Beef Patty', price: 2000 },
                    { name_ar: 'صوص باربيكيو', name_en: 'Barbecue Sauce', price: 500 }
                ]
            }
        ]
    },
    {
        id: 2,
        category: 'burger',
        name_ar: 'برگر كلاسك (وجبة)',
        name_en: 'Classic Burger Meal',
        desc_ar: 'برگر كلاسك اللذيذ مع البطاطس المقرمشة المتبلة، مقبلات مشكلة ومشروب بارد من اختيارك',
        desc_en: 'Classic Burger served with crispy seasoned French fries, mixed appetizers, and a cold soft drink of your choice',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80',
        tags: ['popular', 'value'],
        prep_time: 18,
        calories: 840,
        options: [
            {
                title_ar: 'اختر المشروب',
                title_en: 'Choose Drink',
                type: 'radio',
                required: true,
                items: [
                    { name_ar: 'بيبسي', name_en: 'Pepsi', price: 0, default: true },
                    { name_ar: 'ميرندا برتقال', name_en: 'Mirinda Orange', price: 0 },
                    { name_ar: 'سفن أب', name_en: 'Seven Up', price: 0 },
                    { name_ar: 'ماء معدني', name_en: 'Water', price: 0 }
                ]
            },
            {
                title_ar: 'نوع البطاطا',
                title_en: 'Fries Style',
                type: 'radio',
                required: true,
                items: [
                    { name_ar: 'بطاطا كلاسيك مقرمشة', name_en: 'Classic Crispy Fries', price: 0, default: true },
                    { name_ar: 'بطاطا متبلة حارة', name_en: 'Spicy Seasoned Fries', price: 500 }
                ]
            }
        ]
    },
    {
        id: 3,
        category: 'burger',
        name_ar: 'برگر لاند (عادي)',
        name_en: 'Burger Land (Single)',
        desc_ar: 'لحم بقري دبل مشوي، جبن تشيدر، طماطم، خس، صوص هافانا الخاص مع لمسة صوص سبايسي حار',
        desc_en: 'Double grilled beef patties, cheddar cheese, fresh tomato, lettuce, Havana signature sauce with a touch of spicy sauce',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
        tags: ['spicy', 'chef_special'],
        prep_time: 15,
        calories: 710,
        options: [
            {
                title_ar: 'مستوى الحرارة',
                title_en: 'Spicy Level',
                type: 'radio',
                required: true,
                items: [
                    { name_ar: 'حار متوسط', name_en: 'Medium Spicy', price: 0, default: true },
                    { name_ar: 'حار جداً 🌶️🌶️', name_en: 'Very Spicy 🌶️🌶️', price: 0 },
                    { name_ar: 'عادي (غير حار)', name_en: 'Regular (Not Spicy)', price: 0 }
                ]
            }
        ]
    },
    {
        id: 4,
        category: 'burger',
        name_ar: 'برگر لاند (وجبة)',
        name_en: 'Burger Land Meal',
        desc_ar: 'برجر لاند الدبل الفخم مع البطاطا المقلية الذهبية، مقبلات هافانا الفاخرة وبيبسي مثلج',
        desc_en: 'The legendary double Burger Land served with golden French fries, Havana luxury appetizers, and an ice-cold Pepsi',
        price: 7000,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
        tags: ['spicy', 'value'],
        prep_time: 20,
        calories: 1050,
        options: [
            {
                title_ar: 'اختر المشروب',
                title_en: 'Choose Drink',
                type: 'radio',
                required: true,
                items: [
                    { name_ar: 'بيبسي', name_en: 'Pepsi', price: 0, default: true },
                    { name_ar: 'ميرندا برتقال', name_en: 'Mirinda Orange', price: 0 },
                    { name_ar: 'سفن أب', name_en: 'Seven Up', price: 0 }
                ]
            }
        ]
    },
    {
        id: 5,
        category: 'rizo',
        name_ar: 'ريزو هافانا المميز',
        name_en: 'Havana Signature Rizo',
        desc_ar: 'أرز ريزو هافانا المطهو بالتوابل السرية الغنية، يعلوه قطع دجاج كرسبي مقرمشة مغطاة بصوص الزنجر اللذيذ',
        desc_en: 'Signature Havana Rizo rice cooked with rich secret spices, topped with crispy chicken tenders and drizzled with delicious Zinger sauce',
        price: 4000,
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80',
        tags: ['popular', 'best_seller'],
        prep_time: 12,
        calories: 680,
        options: [
            {
                title_ar: 'إضافات الريزو',
                title_en: 'Rizo Add-ons',
                type: 'checkbox',
                items: [
                    { name_ar: 'زيادة صوص الزنجر', name_en: 'Extra Zinger Sauce', price: 500 },
                    { name_ar: 'زيادة قطع الدجاج', name_en: 'Extra Chicken Tenders', price: 1500 }
                ]
            }
        ]
    },
    {
        id: 6,
        category: 'rizo',
        name_ar: 'ريزو بالجبن والداينمت',
        name_en: 'Dynamite Cheese Rizo',
        desc_ar: 'أرز ريزو هافانا بالتوابل مع قطع الكرسبي المقرمشة، غارق بجبنة الموزاريلا السائحة وصوص الداينمت الحار المثير',
        desc_en: 'Spicy seasoned Havana Rizo rice with crispy tenders, loaded with melted mozzarella cheese and dynamic spicy dynamite sauce',
        price: 4000,
        image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80',
        tags: ['spicy', 'chef_special'],
        prep_time: 12,
        calories: 790,
        options: [
            {
                title_ar: 'مستوى حرارة صوص الداينمت',
                title_en: 'Dynamite Sauce Heat',
                type: 'radio',
                required: true,
                items: [
                    { name_ar: 'حار ناري 🌶️🌶️', name_en: 'Firesome Hot 🌶️🌶️', price: 0, default: true },
                    { name_ar: 'حرارة معتدلة 🌶️', name_en: 'Mild Hot 🌶️', price: 0 }
                ]
            }
        ]
    },
    {
        id: 7,
        category: 'pizza',
        name_ar: 'بيتزا لحم بقري',
        name_en: 'Beef Pizza',
        desc_ar: 'عجينة هافانا الإيطالية الهشة، مغطاة بصلصة الطماطم الغنية، شرائح اللحم البقري المتبل، فطر، فلفل أخضر، زيتون، وجبنة موزاريلا فاخرة وفيرة',
        desc_en: 'Crispy and fluffy Italian-style dough, rich pizza sauce, seasoned beef slices, mushrooms, green peppers, olives, and premium loaded mozzarella cheese',
        price: 8000,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
        tags: ['popular'],
        prep_time: 20,
        calories: 920,
        options: [
            {
                title_ar: 'اختر الحجم',
                title_en: 'Choose Size',
                type: 'radio',
                required: true,
                items: [
                    { name_ar: 'وسط (٢٨ سم)', name_en: 'Medium (28cm)', price: 0, default: true },
                    { name_ar: 'كبير (٣٥ سم)', name_en: 'Large (35cm)', price: 3000 }
                ]
            },
            {
                title_ar: 'إضافات البيتزا',
                title_en: 'Pizza Extras',
                type: 'checkbox',
                items: [
                    { name_ar: 'أطراف محشية بالجبن', name_en: 'Cheese Stuffed Crust', price: 2000 },
                    { name_ar: 'موزاريلا إضافية', name_en: 'Extra Mozzarella', price: 1500 },
                    { name_ar: 'فطر إضافي', name_en: 'Extra Mushrooms', price: 1000 }
                ]
            }
        ]
    },
    {
        id: 8,
        category: 'pizza',
        name_ar: 'بيتزا دجاج رانش',
        name_en: 'Chicken Ranch Pizza',
        desc_ar: 'بيتزا هافانا الشهيرة بقطع الدجاج المتبل، الفلفل الحلو، الفطر، وصوص الرانش المثير مع الموزاريلا الفاخرة',
        desc_en: 'Havana style pizza topped with grilled seasoned chicken, bell peppers, mushrooms, mozzarella cheese, and rich creamy Ranch sauce',
        price: 7000,
        image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=600&q=80',
        tags: ['popular', 'best_seller'],
        prep_time: 20,
        calories: 890,
        options: [
            {
                title_ar: 'اختر الحجم',
                title_en: 'Choose Size',
                type: 'radio',
                required: true,
                items: [
                    { name_ar: 'وسط (٢٨ سم)', name_en: 'Medium (28cm)', price: 0, default: true },
                    { name_ar: 'كبير (٣٥ سم)', name_en: 'Large (35cm)', price: 3000 }
                ]
            }
        ]
    },
    {
        id: 9,
        category: 'zinger',
        name_ar: 'زنجر دجاج كلاسك (عادي)',
        name_en: 'Classic Chicken Zinger (Single)',
        desc_ar: 'صدر دجاج كرسبي مقرمش حار ومتبل بالخلطة السرية، خس طازج، مايونيز، جبنة تشيدر في صمون هافانا الطازج',
        desc_en: 'Crispy, spicy chicken breast seasoned with secret spices, fresh lettuce, mayonnaise, and cheddar cheese in our fresh long bun',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80',
        tags: ['spicy'],
        prep_time: 15,
        calories: 580,
        options: [
            {
                title_ar: 'إضافات الساندويش',
                title_en: 'Sandwich Add-ons',
                type: 'checkbox',
                items: [
                    { name_ar: 'زيادة جبنة', name_en: 'Extra Cheese', price: 1000 },
                    { name_ar: 'إضافة صوص تركي حار', name_en: 'Add Turkish Spicy Sauce', price: 500 }
                ]
            }
        ]
    },
    {
        id: 10,
        category: 'zinger',
        name_ar: 'زنجر دجاج كلاسك (وجبة)',
        name_en: 'Classic Chicken Zinger Meal',
        desc_ar: 'ساندويش الزنجر الحار مع البطاطا المقلية المتبلة المقرمشة، المقبلات اللذيذة وبطل بيبسي بارد ومنعش',
        desc_en: 'Spicy Zinger sandwich served with seasoned crispy French fries, delicious cold appetizers, and a refreshing bottle of Pepsi',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80',
        tags: ['spicy', 'value'],
        prep_time: 18,
        calories: 900,
        options: [
            {
                title_ar: 'اختر المشروب',
                title_en: 'Choose Drink',
                type: 'radio',
                required: true,
                items: [
                    { name_ar: 'بيبسي', name_en: 'Pepsi', price: 0, default: true },
                    { name_ar: 'ميرندا برتقال', name_en: 'Mirinda Orange', price: 0 },
                    { name_ar: 'سفن أب', name_en: 'Seven Up', price: 0 }
                ]
            }
        ]
    },
    {
        id: 11,
        category: 'sides',
        name_ar: 'أجنحة باربيكيو (٦ قطع)',
        name_en: 'BBQ Wings (6 Pcs)',
        desc_ar: 'أجنحة دجاج مقرمشة مشوية ببطء ومغمورة بصلصة الباربيكيو الغنية والمدخنة الحلوة مع ثومية هافانا الخاصة',
        desc_en: 'Crispy chicken wings slowly grilled and tossed in rich, smoky sweet BBQ sauce, served with Havana special garlic dip',
        price: 5000,
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80',
        tags: [],
        prep_time: 12,
        calories: 460,
        options: []
    },
    {
        id: 12,
        category: 'sides',
        name_ar: 'مقبلات موزاريلّا فرايز',
        name_en: 'Mozzarella Fries',
        desc_ar: 'أصابع بطاطس ذهبية مقرمشة مغطاة بطبقة غنية من جبنة الموزاريلا المذابة والصلصات الخاصة بالبهارات الإيطالية',
        desc_en: 'Golden crispy French fries topped with a generous layer of melted mozzarella cheese, special sauces, and Italian herbs',
        price: 4000,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
        tags: ['popular'],
        prep_time: 10,
        calories: 590,
        options: []
    },
    {
        id: 13,
        category: 'sides',
        name_ar: 'بيبسي بارد قوطية',
        name_en: 'Pepsi Can (Cold)',
        desc_ar: 'مشروب بيبسي غازي بارد ومثلج لترطيب وجبتك الفاخرة',
        desc_en: 'Ice-cold carbonated Pepsi can to perfectly refresh your premium meal',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80',
        tags: [],
        prep_time: 2,
        calories: 150,
        options: []
    }
];

// تصدير البيانات للاستخدام في ملف app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories, menuItems };
}
