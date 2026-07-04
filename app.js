// هافانا گرل - منطق العمل وإدارة السلة واللغة
// Havana Grill - Core Application Logic

// القاموس اللغوي للترجمات
const translations = {
    ar: {
        app_title: "هافانا گرل",
        city_badge: "بيجي",
        live_status: "مفتوح الآن - يستقبل طلباتكم",
        promo_badge: "عرض خاص بمناسبة الإطلاق",
        promo_title: "هافانا في قلب بيجي.. نكهة لا تُنسى!",
        promo_desc: "اطلب وجبتك المفضلة الآن واستمتع بخدمة التوصيل السريع إلى باب بيتك.",
        filter_title: "تصفح أقسام المنيو",
        search_placeholder: "ابحث عن وجبتك المفضلة...",
        cart_label: "الحساب الإجمالي",
        btn_checkout: "مراجعة وتأكيد الطلب",
        checkout_title: "🛍️ مراجعة وتأكيد طلبك",
        checkout_summary: "📌 سلتك الحالية:",
        lbl_name: "الاسم الكامل",
        lbl_phone: "رقم الموبايل",
        lbl_address: "العنوان بالتفصيل",
        lbl_notes: "ملاحظات إضافية (اختياري)",
        placeholder_name: "اكتب اسمك الثلاثي",
        placeholder_phone: "077XXXXXXXX",
        placeholder_address: "مثال: بيجي - الحي العسكري - قرب مسجد الهدى",
        placeholder_notes: "بدون بصل، كثر كاتشب، الخ...",
        summary_subtotal: "مجموع الوجبات:",
        summary_delivery: "خدمة التوصيل لبيجي:",
        summary_total: "المجموع الكلي للحساب:",
        btn_modify_order: "تعديل الطلب",
        btn_generate_receipt: "عرض الفاتورة وتأكيدها",
        btn_close: "إغلاق",
        btn_add_to_cart: "إضافة للسلة",
        receipt_modal_title: "🧾 فاتورة طلبك البصرية",
        rec_lbl_name: "الزبون:",
        rec_lbl_phone: "الهاتف:",
        rec_lbl_address: "العنوان:",
        rec_lbl_notes: "ملاحظات:",
        th_item: "الوجبة",
        th_qty: "العدد",
        th_price: "السعر",
        rec_lbl_subtotal: "مجموع المواد:",
        rec_lbl_delivery: "خدمة التوصيل:",
        rec_lbl_grandtotal: "المجموع النهائي:",
        rec_txt_thanks: "❤️ شكراً لاختياركم هافانا گرل بيجي - بالعافية مقدماً ❤️",
        btn_confirm_whatsapp: "تأكيد وإرسال للواتساب",
        btn_print: "تحميل / طباعة الفاتورة",
        iqd: "د.ع",
        delivery_val: "2,000 د.ع",
        alert_fill: "يرجى ملء كافة الحقول المطلوبة (الاسم، الهاتف، العنوان) لتأكيد الطلب!",
        alert_empty_cart: "سلتك فارغة حالياً! يرجى إضافة بعض الوجبات اللذيذة أولاً.",
        calories: "سعرة",
        mins: "دقيقة",
        extra: "إضافي",
        tag_all: "الكل",
        tag_popular: "الأكثر طلباً",
        tag_spicy: "حار سبايسي",
        tag_value: "وجبات توفير",
        detail_title: "تفاصيل الوجبة",
        details_calories: "السعرات الحارة:",
        details_prep: "وقت التحضير:"
    },
    en: {
        app_title: "Havana Grill",
        city_badge: "Baiji",
        live_status: "Open now - taking your orders",
        promo_badge: "Launch Promotion Special",
        promo_title: "Havana in the heart of Baiji.. Unforgettable taste!",
        promo_desc: "Order your favorite meal now and enjoy rapid home delivery to your doorstep.",
        filter_title: "Browse Menu Categories",
        search_placeholder: "Search for your favorite food...",
        cart_label: "Total Account",
        btn_checkout: "Review & Confirm Order",
        checkout_title: "🛍️ Review & Confirm Order",
        checkout_summary: "📌 Your Current Cart:",
        lbl_name: "Full Name",
        lbl_phone: "Mobile Number",
        lbl_address: "Detailed Address",
        lbl_notes: "Additional Notes (Optional)",
        placeholder_name: "Write your full name",
        placeholder_phone: "077XXXXXXXX",
        placeholder_address: "e.g. Baiji - Military District - Near Al-Huda Mosque",
        placeholder_notes: "No onions, extra ketchup, etc...",
        summary_subtotal: "Items Subtotal:",
        summary_delivery: "Delivery Service to Baiji:",
        summary_total: "Grand Total:",
        btn_modify_order: "Modify Order",
        btn_generate_receipt: "View & Confirm Receipt",
        btn_close: "Close",
        btn_add_to_cart: "Add to Cart",
        receipt_modal_title: "🧾 Your Visual Receipt",
        rec_lbl_name: "Customer:",
        rec_lbl_phone: "Phone:",
        rec_lbl_address: "Address:",
        rec_lbl_notes: "Notes:",
        th_item: "Meal",
        th_qty: "Qty",
        th_price: "Price",
        rec_lbl_subtotal: "Items Subtotal:",
        rec_lbl_delivery: "Delivery Fee:",
        rec_lbl_grandtotal: "Grand Total:",
        rec_txt_thanks: "❤️ Thanks for choosing Havana Grill Baiji - Enjoy your meal! ❤️",
        btn_confirm_whatsapp: "Confirm & Send to WhatsApp",
        btn_print: "Download / Print Receipt",
        iqd: "IQD",
        delivery_val: "2,000 IQD",
        alert_fill: "Please fill all required fields (Name, Phone, Address) to confirm your order!",
        alert_empty_cart: "Your cart is currently empty! Please add some delicious meals first.",
        calories: "kcal",
        mins: "mins",
        extra: "Extra",
        tag_all: "All",
        tag_popular: "Popular",
        tag_spicy: "Spicy",
        tag_value: "Deals",
        detail_title: "Meal Details",
        details_calories: "Calories:",
        details_prep: "Prep Time:"
    }
};

// حالة التطبيق (State)
let currentLanguage = localStorage.getItem('havana_lang') || 'ar';
let cart = JSON.parse(localStorage.getItem('havana_cart')) || [];
let activeCategoryId = 'all';
let activeTag = 'all';
let searchQuery = '';
let selectedItemForDetails = null;

// تشغيل التطبيق عند التحميل
window.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLanguage);
    renderCategoryTabs();
    renderMenu();
    updateCartBarState();
    loadCustomerInfo();
});

// حفظ واسترجاع بيانات العميل
function saveCustomerInfo() {
    const customer = {
        name: document.getElementById('customer-name').value.trim(),
        phone: document.getElementById('customer-phone').value.trim(),
        address: document.getElementById('customer-address').value.trim(),
        notes: document.getElementById('customer-notes').value.trim()
    };
    localStorage.setItem('havana_customer', JSON.stringify(customer));
}

function loadCustomerInfo() {
    const customer = JSON.parse(localStorage.getItem('havana_customer'));
    if (customer) {
        document.getElementById('customer-name').value = customer.name || '';
        document.getElementById('customer-phone').value = customer.phone || '';
        document.getElementById('customer-address').value = customer.address || '';
        document.getElementById('customer-notes').value = customer.notes || '';
    }
}

// تبديل اللغة وتطبيق التغييرات
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('havana_lang', currentLanguage);
    applyLanguage(currentLanguage);
    renderCategoryTabs();
    renderMenu();
    updateCartBarState();
}

function applyLanguage(lang) {
    const isRtl = lang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // تبديل كتابة زر التبديل
    document.getElementById('btn-lang-toggle').innerText = lang === 'ar' ? 'EN' : 'العربية';

    // ترجمة النصوص الثابتة بالصفحة الرئيسية
    const dict = translations[lang];
    document.getElementById('txt-app-title').innerHTML = `${dict.app_title} <span class="city-badge" id="txt-city-badge">${dict.city_badge}</span>`;
    document.getElementById('txt-live-status').innerText = dict.live_status;
    document.getElementById('txt-promo-badge').innerText = dict.promo_badge;
    document.getElementById('txt-promo-title').innerText = dict.promo_title;
    document.getElementById('txt-promo-desc').innerText = dict.promo_desc;
    document.getElementById('search-input').placeholder = dict.search_placeholder;
    document.getElementById('txt-filter-title').innerText = dict.filter_title;
    document.getElementById('txt-cart-label').innerText = dict.cart_label;
    document.getElementById('txt-btn-checkout').innerText = dict.btn_checkout;

    // فلاتر التاغات الثابتة
    document.querySelector('[data-key="tag-all"]').innerText = dict.tag_all;
    document.querySelector('[data-key="tag-popular"]').innerText = dict.tag_popular;
    document.querySelector('[data-key="tag-spicy"]').innerText = dict.tag_spicy;
    document.querySelector('[data-key="tag-value"]').innerText = dict.tag_value;

    // ترجمات شاشات التفاصيل والدفع والفاتورة
    document.getElementById('details-modal-title').innerText = dict.detail_title;
    document.getElementById('txt-btn-close-details').innerText = dict.btn_close;
    
    document.getElementById('txt-checkout-title').innerText = dict.checkout_title;
    document.getElementById('txt-checkout-summary-title').innerText = dict.checkout_summary;
    document.getElementById('lbl-name').innerText = dict.lbl_name;
    document.getElementById('lbl-phone').innerText = dict.lbl_phone;
    document.getElementById('lbl-address').innerText = dict.lbl_address;
    document.getElementById('lbl-notes').innerText = dict.lbl_notes;
    document.getElementById('customer-name').placeholder = dict.placeholder_name;
    document.getElementById('customer-phone').placeholder = dict.placeholder_phone;
    document.getElementById('customer-address').placeholder = dict.placeholder_address;
    document.getElementById('customer-notes').placeholder = dict.placeholder_notes;

    document.getElementById('txt-summary-subtotal').innerText = dict.summary_subtotal;
    document.getElementById('txt-summary-delivery').innerText = dict.summary_delivery;
    document.getElementById('checkout-delivery').innerText = dict.delivery_val;
    document.getElementById('txt-summary-total').innerText = dict.summary_total;
    document.getElementById('txt-btn-modify-order').innerText = dict.btn_modify_order;
    document.getElementById('txt-btn-generate-receipt').innerText = dict.btn_generate_receipt;

    document.getElementById('txt-receipt-modal-title').innerText = dict.receipt_modal_title;
    document.getElementById('rec-lbl-name').innerText = dict.rec_lbl_name;
    document.getElementById('rec-lbl-phone').innerText = dict.rec_lbl_phone;
    document.getElementById('rec-lbl-address').innerText = dict.rec_lbl_address;
    document.getElementById('rec-lbl-notes').innerText = dict.rec_lbl_notes;
    document.getElementById('th-item').innerText = dict.th_item;
    document.getElementById('th-qty').innerText = dict.th_qty;
    document.getElementById('th-price').innerText = dict.th_price;
    document.getElementById('rec-lbl-subtotal').innerText = dict.rec_lbl_subtotal;
    document.getElementById('rec-lbl-delivery').innerText = dict.rec_lbl_delivery;
    document.getElementById('receipt-delivery').innerText = dict.delivery_val;
    document.getElementById('rec-lbl-grandtotal').innerText = dict.rec_lbl_grandtotal;
    document.getElementById('rec-txt-thanks').innerText = dict.rec_txt_thanks;
    document.getElementById('txt-btn-confirm-whatsapp').innerText = dict.btn_confirm_whatsapp;
    document.getElementById('txt-btn-print').innerText = dict.btn_print;

    // تحديث أيقونة سهم المراجعة بناء على اتجاه القراءة
    const checkoutArrow = document.getElementById('checkout-arrow');
    if (isRtl) {
        checkoutArrow.className = "fa-solid fa-arrow-left";
    } else {
        checkoutArrow.className = "fa-solid fa-arrow-right";
    }

    // تحديث تاغات التصفية النشطة
    updateTagFilterUI();
}

// بناء تبويبات الأقسام ديناميكياً
function renderCategoryTabs() {
    const tabsWrapper = document.getElementById('category-tabs');
    tabsWrapper.innerHTML = '';

    categories.forEach(cat => {
        const name = currentLanguage === 'ar' ? cat.name_ar : cat.name_en;
        const button = document.createElement('button');
        button.className = `category-tab ${activeCategoryId === cat.id ? 'active' : ''}`;
        button.innerText = name;
        button.onclick = () => {
            activeCategoryId = cat.id;
            document.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            renderMenu();
        };
        tabsWrapper.appendChild(button);
    });
}

// معالجة البحث
function handleSearch(query) {
    searchQuery = query.toLowerCase().trim();
    renderMenu();
}

// تصفية التاغات
function filterByTag(tag) {
    activeTag = tag;
    updateTagFilterUI();
    renderMenu();
}

function updateTagFilterUI() {
    document.querySelectorAll('.tag-filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`tag-${activeTag}`);
    if (activeBtn) activeBtn.classList.add('active');
}

// عرض المنيو بالوجبات الفلترة
function renderMenu() {
    const container = document.getElementById('menu-items-container');
    container.innerHTML = '';

    const dict = translations[currentLanguage];

    // فلترة المنتجات
    const filteredItems = menuItems.filter(item => {
        // فلترة القسم
        const matchCategory = activeCategoryId === 'all' || item.category === activeCategoryId;
        // فلترة التاغ
        const matchTag = activeTag === 'all' || item.tags.includes(activeTag);
        // فلترة البحث
        const name = (currentLanguage === 'ar' ? item.name_ar : item.name_en).toLowerCase();
        const desc = (currentLanguage === 'ar' ? item.desc_ar : item.desc_en).toLowerCase();
        const matchSearch = name.includes(searchQuery) || desc.includes(searchQuery);

        return matchCategory && matchTag && matchSearch;
    });

    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: var(--text-gray); font-size: 0.85rem;">
                <i class="fa-solid fa-cookie-bite" style="font-size: 2.5rem; margin-bottom: 1rem; color: #333;"></i>
                <p>${currentLanguage === 'ar' ? 'لا توجد وجبات تطابق بحثك حالياً.' : 'No meals match your search.'}</p>
            </div>
        `;
        return;
    }

    filteredItems.forEach(item => {
        const name = currentLanguage === 'ar' ? item.name_ar : item.name_en;
        const desc = currentLanguage === 'ar' ? item.desc_ar : item.desc_en;
        const formattedPrice = item.price.toLocaleString() + ' ' + dict.iqd;

        // حساب الكمية الكلية المضافة من هذه الوجبة في السلة (بمختلف تخصيصاتها)
        const quantity = cart.reduce((total, cartItem) => {
            return cartItem.itemId === item.id ? total + cartItem.qty : total;
        }, 0);

        const card = document.createElement('div');
        card.className = 'meal-card';
        card.onclick = (e) => {
            // منع فتح المودل عند الضغط على أزرار الزيادة أو النقصان
            if (e.target.closest('.cart-controls') || e.target.closest('.btn-add-simple')) {
                return;
            }
            openMealDetails(item.id);
        };

        // إنشاء كود التاغات داخل الكارد
        let tagsHtml = '';
        item.tags.forEach(t => {
            let label = '';
            if (t === 'popular') label = dict.tag_popular;
            if (t === 'spicy') label = dict.tag_spicy;
            if (t === 'value') label = dict.tag_value;
            tagsHtml += `<span class="meal-tag-pill tag-${t}">${label}</span>`;
        });

        card.innerHTML = `
            <div class="meal-image-container">
                <img src="${item.image}" alt="${name}" class="meal-image" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80'">
                ${quantity > 0 ? `<span class="meal-badge-count">${quantity}</span>` : ''}
            </div>
            
            <div class="meal-info">
                <div class="meal-header">
                    <h4 class="meal-name">${name}</h4>
                </div>
                <p class="meal-desc">${desc}</p>
                
                <div class="meal-meta-row">
                    <span class="meal-meta-item"><i class="fa-solid fa-clock"></i> ${item.prep_time} ${dict.mins}</span>
                    <span class="meal-meta-item"><i class="fa-solid fa-bolt"></i> ${item.calories} ${dict.calories}</span>
                    ${tagsHtml}
                </div>
                
                <div class="meal-action-row">
                    <span class="meal-price">${formattedPrice}</span>
                    
                    <div class="cart-controls-wrapper">
                        ${quantity === 0 ? `
                            <button class="btn-add-simple" onclick="handleAddSimpleClick(${item.id})">
                                <i class="fa-solid fa-plus"></i> ${currentLanguage === 'ar' ? 'إضافة' : 'Add'}
                            </button>
                        ` : `
                            <div class="cart-controls">
                                <button class="btn-qty btn-qty-minus" onclick="changeQuantitySimple(${item.id}, -1)">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <span class="qty-val">${quantity}</span>
                                <button class="btn-qty btn-qty-plus" onclick="handleAddSimpleClick(${item.id})">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// عند النقر على زر إضافة وجبة بسيطة (سواء كانت خياراتها مطلوبة أو لا)
function handleAddSimpleClick(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    // إذا كانت الوجبة تحتوي على خيارات للتخصيص، نفتح المودل فوراً ليختار
    if (item.options && item.options.length > 0) {
        openMealDetails(itemId);
    } else {
        // إذا لم يكن لها خيارات، نضيفها مباشرة للسلة بشكل افتراضي
        addToCart(itemId, 1, [], '');
    }
}

// تغيير الكمية البسيطة (لتقليل الوجبات المضافة أو زيادتها المباشرة)
function changeQuantitySimple(itemId, amount) {
    if (amount > 0) {
        handleAddSimpleClick(itemId);
    } else {
        // تقليل الكمية: نزيل آخر نسخة مضافة من هذا الصنف في السلة
        const index = [...cart].reverse().findIndex(item => item.itemId === itemId);
        if (index !== -1) {
            const actualIndex = cart.length - 1 - index;
            cart[actualIndex].qty += amount;
            if (cart[actualIndex].qty <= 0) {
                cart.splice(actualIndex, 1);
            }
            saveCartToStorage();
            renderMenu();
            updateCartBarState();
        }
    }
}

// حفظ السلة وتحديث الواجهة
function saveCartToStorage() {
    localStorage.setItem('havana_cart', JSON.stringify(cart));
}

// إضافة وجبة مع تفاصيل التخصيص الكاملة إلى السلة
function addToCart(itemId, qty, selectedOptions, notes) {
    // التحقق من وجود وجبة مطابقة تماماً بنفس التخصيصات والملاحظات لزيادة الكمية
    const existingIndex = cart.findIndex(cartItem => {
        return cartItem.itemId === itemId && 
               JSON.stringify(cartItem.selectedOptions) === JSON.stringify(selectedOptions) && 
               cartItem.notes === notes;
    });

    if (existingIndex !== -1) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({
            itemId,
            qty,
            selectedOptions,
            notes
        });
    }

    saveCartToStorage();
    renderMenu();
    updateCartBarState();
}

// تحديث حالة شريط السلة بالأسفل
function updateCartBarState() {
    const cartBar = document.getElementById('cart-bar');
    const badge = document.getElementById('cart-badge-count');
    const priceText = document.getElementById('cart-total-price');

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = calculateCartTotal();

    const dict = translations[currentLanguage];

    if (totalQty > 0) {
        badge.innerText = totalQty;
        priceText.innerText = totalPrice.toLocaleString() + ' ' + dict.iqd;
        cartBar.classList.add('show');
    } else {
        cartBar.classList.remove('show');
    }
}

// حساب المجموع الفرعي للسلة
function calculateCartTotal() {
    return cart.reduce((sum, cartItem) => {
        const item = menuItems.find(i => i.id === cartItem.itemId);
        if (!item) return sum;

        // السعر الأساسي للوجبة
        let itemPrice = item.price;

        // إضافة سعر الخيارات المختارة
        cartItem.selectedOptions.forEach(opt => {
            itemPrice += opt.price;
        });

        return sum + (itemPrice * cartItem.qty);
    }, 0);
}

// فتح وإغلاق النوافذ المنبثقة (Modals)
function openModal(modalId) {
    document.getElementById(modalId).classList.add('show');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

function closeModalOnOverlay(e, modalId) {
    if (e.target.id === modalId) {
        closeModal(modalId);
    }
}

// فتح مودل تفاصيل الوجبة وتوليد محتواه
function openMealDetails(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    selectedItemForDetails = item;
    const body = document.getElementById('details-modal-body');
    body.innerHTML = '';

    const dict = translations[currentLanguage];
    const name = currentLanguage === 'ar' ? item.name_ar : item.name_en;
    const desc = currentLanguage === 'ar' ? item.desc_ar : item.desc_en;

    // توليد خيارات الوجبة
    let optionsHtml = '';
    if (item.options && item.options.length > 0) {
        item.options.forEach((group, groupIdx) => {
            const groupTitle = currentLanguage === 'ar' ? group.title_ar : group.title_en;
            const isRequired = group.required;

            optionsHtml += `
                <div class="option-group" data-group-id="${groupIdx}">
                    <div class="option-group-title">
                        <span>${groupTitle}</span>
                        ${isRequired ? `<span class="option-required-badge">${currentLanguage === 'ar' ? 'مطلوب' : 'Required'}</span>` : ''}
                    </div>
            `;

            group.items.forEach((opt, optIdx) => {
                const optName = currentLanguage === 'ar' ? opt.name_ar : opt.name_en;
                const optPrice = opt.price > 0 ? `+ ${opt.price.toLocaleString()} ${dict.iqd}` : '';
                const inputType = group.type === 'radio' ? 'radio' : 'checkbox';
                const inputName = `opt-group-${groupIdx}`;
                const inputId = `opt-${groupIdx}-${optIdx}`;
                const checkedAttr = opt.default ? 'checked' : '';

                optionsHtml += `
                    <label class="option-item" for="${inputId}">
                        <div class="option-item-left">
                            <input type="${inputType}" id="${inputId}" name="${inputName}" class="custom-input" data-name-ar="${opt.name_ar}" data-name-en="${opt.name_en}" data-price="${opt.price}" ${checkedAttr}>
                            <span>${optName}</span>
                        </div>
                        ${opt.price > 0 ? `<span class="option-item-price">${optPrice}</span>` : ''}
                    </label>
                `;
            });

            optionsHtml += `</div>`;
        });
    }

    // توليد حقل ملاحظات إضافية وتحديد الكمية بالمودل
    const finalDetailsHtml = `
        <div class="details-image-hero">
            <img src="${item.image}" alt="${name}" onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80'">
        </div>
        
        <div class="details-title-row">
            <h2 class="details-name">${name}</h2>
            <span class="details-price">${item.price.toLocaleString()} ${dict.iqd}</span>
        </div>
        
        <p class="details-desc">${desc}</p>
        
        <div class="details-meta">
            <span class="meal-meta-item"><i class="fa-solid fa-clock"></i> ${dict.details_prep} ${item.prep_time} ${dict.mins}</span>
            <span class="meal-meta-item"><i class="fa-solid fa-bolt"></i> ${dict.details_calories} ${item.calories} ${dict.calories}</span>
        </div>
        
        ${optionsHtml}
        
        <!-- حقل الملاحظات الخاصة بالوجبة -->
        <div class="checkout-form-group">
            <label class="checkout-label">${currentLanguage === 'ar' ? 'ملاحظات وتخصيص خاص بالوجبة:' : 'Special instructions for this meal:'}</label>
            <input type="text" id="details-item-notes" class="checkout-input" placeholder="${currentLanguage === 'ar' ? 'بدون شطة، كثر كاتشب، الخ...' : 'No spicy, extra ketchup, etc...'}">
        </div>

        <!-- أزرار تحديد الكمية داخل المودل -->
        <div class="option-group" style="display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 1rem;">
            <span class="checkout-label" style="margin: 0; font-size: 0.75rem;">${currentLanguage === 'ar' ? 'تحديد الكمية:' : 'Select Quantity:'}</span>
            <div class="cart-controls">
                <button class="btn-qty btn-qty-minus" onclick="changeDetailsQty(-1)">
                    <i class="fa-solid fa-minus"></i>
                </button>
                <span class="qty-val" id="details-qty-val">1</span>
                <button class="btn-qty btn-qty-plus" onclick="changeDetailsQty(1)">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    `;

    body.innerHTML = finalDetailsHtml;
    document.getElementById('btn-add-from-details').innerText = `${dict.btn_add_to_cart}`;
    openModal('meal-details-modal');
}

// تغيير الكمية داخل مودل التفاصيل
function changeDetailsQty(amount) {
    const qtySpan = document.getElementById('details-qty-val');
    let currentQty = parseInt(qtySpan.innerText);
    currentQty += amount;
    if (currentQty < 1) currentQty = 1;
    qtySpan.innerText = currentQty;
}

// إضافة الوجبة الحالية من مودل التفاصيل إلى السلة
function addCurrentItemFromDetails() {
    if (!selectedItemForDetails) return;

    const qty = parseInt(document.getElementById('details-qty-val').innerText);
    const notes = document.getElementById('details-item-notes').value.trim();
    const selectedOptions = [];

    // جمع الخيارات المختارة
    const optionGroups = document.querySelectorAll('.option-group[data-group-id]');
    let allRequiredChecked = true;

    optionGroups.forEach(group => {
        const groupIdx = group.getAttribute('data-group-id');
        const originalGroup = selectedItemForDetails.options[groupIdx];
        const checkedInputs = group.querySelectorAll('input:checked');

        if (originalGroup.required && checkedInputs.length === 0) {
            allRequiredChecked = false;
            group.style.borderColor = 'var(--primary-red)';
            group.style.background = 'rgba(201, 29, 29, 0.03)';
        } else {
            group.style.borderColor = 'var(--border-dark)';
            group.style.background = 'rgba(255, 255, 255, 0.01)';
        }

        checkedInputs.forEach(input => {
            selectedOptions.push({
                name_ar: input.getAttribute('data-name-ar'),
                name_en: input.getAttribute('data-name-en'),
                price: parseInt(input.getAttribute('data-price'))
            });
        });
    });

    if (!allRequiredChecked) {
        const dict = translations[currentLanguage];
        alert(currentLanguage === 'ar' ? 'يرجى تحديد الخيارات الإجبارية أولاً!' : 'Please check required options first!');
        return;
    }

    addToCart(selectedItemForDetails.id, qty, selectedOptions, notes);
    closeModal('meal-details-modal');
}

// فتح مودل تأكيد ومراجعة الطلب
function openCheckoutModal() {
    if (cart.length === 0) {
        alert(translations[currentLanguage].alert_empty_cart);
        return;
    }

    const dict = translations[currentLanguage];
    const itemsContainer = document.getElementById('checkout-cart-items');
    itemsContainer.innerHTML = '';

    cart.forEach((cartItem, idx) => {
        const item = menuItems.find(i => i.id === cartItem.itemId);
        if (!item) return;

        const name = currentLanguage === 'ar' ? item.name_ar : item.name_en;
        
        // حساب سعر خيارات هذه الوجبة
        let optionsText = '';
        let optionsPrice = 0;
        if (cartItem.selectedOptions.length > 0) {
            const optNames = cartItem.selectedOptions.map(o => {
                optionsPrice += o.price;
                const optName = currentLanguage === 'ar' ? o.name_ar : o.name_en;
                return optName + (o.price > 0 ? ` (+${o.price.toLocaleString()})` : '');
            });
            optionsText = `<div style="font-size: 0.6rem; color: var(--text-gray); margin-top: 0.15rem;">* ${optNames.join(', ')}</div>`;
        }

        const totalPriceOfInstance = (item.price + optionsPrice) * cartItem.qty;

        const row = document.createElement('div');
        row.className = 'checkout-cart-item';
        row.innerHTML = `
            <div>
                <span class="checkout-item-name">${name}</span>
                <span class="checkout-item-qty">x${cartItem.qty}</span>
                ${optionsText}
                ${cartItem.notes ? `<div style="font-size: 0.6rem; color: var(--accent-gold); margin-top: 0.1rem;">📝 ${cartItem.notes}</div>` : ''}
            </div>
            
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-weight: 700;">${totalPriceOfInstance.toLocaleString()} ${dict.iqd}</span>
                <button class="btn-qty" style="color: var(--primary-red); width: 20px; height: 20px;" onclick="removeCartItemIndex(${idx})">
                    <i class="fa-solid fa-trash text-[10px]"></i>
                </button>
            </div>
        `;
        itemsContainer.appendChild(row);
    });

    const subtotal = calculateCartTotal();
    const delivery = 2000;
    const grandTotal = subtotal + delivery;

    document.getElementById('checkout-subtotal').innerText = subtotal.toLocaleString() + ' ' + dict.iqd;
    document.getElementById('checkout-grand-total').innerText = grandTotal.toLocaleString() + ' ' + dict.iqd;

    openModal('checkout-modal');
}

// حذف عنصر كامل من السلة بناء على فهرسه
function removeCartItemIndex(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    renderMenu();
    updateCartBarState();
    
    if (cart.length === 0) {
        closeModal('checkout-modal');
    } else {
        openCheckoutModal(); // إعادة تحميل نافذة الدفع لتحديث القائمة والأسعار
    }
}

// مراجعة الفاتورة البصرية النهائية قبل التوجيه للواتساب
function proceedToReceipt() {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const notes = document.getElementById('customer-notes').value.trim();

    if (!name || !phone || !address) {
        alert(translations[currentLanguage].alert_fill);
        return;
    }

    // حفظ بيانات العميل تلقائياً
    saveCustomerInfo();

    const dict = translations[currentLanguage];

    // ملء بيانات العميل في الفاتورة البصرية
    document.getElementById('receipt-client-name').innerText = name;
    document.getElementById('receipt-client-phone').innerText = phone;
    document.getElementById('receipt-client-address').innerText = address;
    
    const notesWrapper = document.getElementById('receipt-client-notes-wrapper');
    if (notes) {
        notesWrapper.style.display = 'flex';
        document.getElementById('receipt-client-notes').innerText = notes;
    } else {
        notesWrapper.style.display = 'none';
    }

    // كتابة تاريخ الفاتورة
    const now = new Date();
    const formattedDateTime = now.toLocaleDateString(currentLanguage === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
    document.getElementById('receipt-date-time').innerText = (currentLanguage === 'ar' ? 'التاريخ والوقت: ' : 'Date/Time: ') + formattedDateTime;

    // بناء قائمة وجبات الفاتورة
    const tableBody = document.getElementById('receipt-table-body');
    tableBody.innerHTML = '';

    cart.forEach(cartItem => {
        const item = menuItems.find(i => i.id === cartItem.itemId);
        if (!item) return;

        const name = currentLanguage === 'ar' ? item.name_ar : item.name_en;
        let optString = '';
        let optionsPrice = 0;
        
        if (cartItem.selectedOptions.length > 0) {
            optionsPrice = cartItem.selectedOptions.reduce((sum, o) => sum + o.price, 0);
            const optNames = cartItem.selectedOptions.map(o => currentLanguage === 'ar' ? o.name_ar : o.name_en);
            optString = `<div style="font-size: 0.55rem; color: #555; margin-top: 0.1rem;">* ${optNames.join(', ')}</div>`;
        }

        const unitTotal = item.price + optionsPrice;
        const total = unitTotal * cartItem.qty;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <div style="font-weight: 700; color: #000;">${name}</div>
                ${optString}
                ${cartItem.notes ? `<div style="font-size: 0.55rem; color: var(--primary-red); font-style: italic;">📝 ${cartItem.notes}</div>` : ''}
            </td>
            <td style="text-align: center; font-weight: 700; color: #000;">${cartItem.qty}</td>
            <td style="text-align: left; font-weight: 700; color: #000;">${total.toLocaleString()} ${dict.iqd}</td>
        `;
        tableBody.appendChild(tr);
    });

    const subtotal = calculateCartTotal();
    const delivery = 2000;
    const grandTotal = subtotal + delivery;

    document.getElementById('receipt-subtotal').innerText = subtotal.toLocaleString() + ' ' + dict.iqd;
    document.getElementById('receipt-grandtotal').innerText = grandTotal.toLocaleString() + ' ' + dict.iqd;

    // إغلاق مودل الدفع وفتح مودل الفاتورة النهائية
    closeModal('checkout-modal');
    openModal('receipt-modal');
}

// طباعة الفاتورة البصرية (تفتح خيارات الطباعة الرسمية للمتصفح)
function printReceipt() {
    window.print();
}

// توليد وإرسال الرسالة إلى الواتساب
function submitOrderToWhatsApp() {
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const address = document.getElementById('customer-address').value.trim();
    const notes = document.getElementById('customer-notes').value.trim();

    const dict = translations[currentLanguage];
    const restaurantNumber = "9647770022544"; // رقم هافانا گرل بيجي الرسمي

    // صياغة تفاصيل الوجبات
    let itemsString = '';
    let subtotal = 0;
    let counter = 1;

    cart.forEach(cartItem => {
        const item = menuItems.find(i => i.id === cartItem.itemId);
        if (!item) return;

        const name = currentLanguage === 'ar' ? item.name_ar : item.name_en;
        let optionsPrice = 0;
        let optDetails = [];

        if (cartItem.selectedOptions.length > 0) {
            cartItem.selectedOptions.forEach(o => {
                optionsPrice += o.price;
                const optName = currentLanguage === 'ar' ? o.name_ar : o.name_en;
                optDetails.push(optName + (o.price > 0 ? ` (+${o.price.toLocaleString()} ${dict.iqd})` : ''));
            });
        }

        const unitTotal = item.price + optionsPrice;
        const total = unitTotal * cartItem.qty;
        subtotal += total;

        itemsString += `  ${counter}. ${name} (x${cartItem.qty}) 👈 ${total.toLocaleString()} ${dict.iqd}\n`;
        if (optDetails.length > 0) {
            itemsString += `     * ${currentLanguage === 'ar' ? 'الإضافات' : 'Extras'}: [ ${optDetails.join(' | ')} ]\n`;
        }
        if (cartItem.notes) {
            itemsString += `     * ${currentLanguage === 'ar' ? 'ملاحظة الوجبة' : 'Meal Note'}: ${cartItem.notes}\n`;
        }
        itemsString += `\n`;
        counter++;
    });

    const deliveryFee = 2000;
    const grandTotal = subtotal + deliveryFee;

    // صياغة الرسالة النهائية حسب اللغة المحددة
    let textMessage = '';
    if (currentLanguage === 'ar') {
        textMessage = 
`🛍️ *طلب مأكولات جديد من الموقع الإلكتروني*
==========================

👤 *اسم الزبون:* ${name}
📞 *رقم الهاتف:* ${phone}
📍 *العنوان بالتفصيل:* ${address}
${notes ? `📝 *ملاحظات إضافية:* ${notes}\n` : ''}
--------------------------
🛒 *تفاصيل الوجبات والطلبات:*
${itemsString}
--------------------------
💵 *مجموع الحساب:* ${subtotal.toLocaleString()} د.ع
🛵 *خدمة التوصيل لبيجي:* ${deliveryFee.toLocaleString()} د.ع
💰 *المجموع الكلي:* *${grandTotal.toLocaleString()} د.ع*

==========================
🛵 يرجى تأكيد الطلب من طرفكم ومباشرة التجهيز. شكراً لكم!`;
    } else {
        textMessage = 
`🛍️ *New Food Order from Web Menu*
==========================

👤 *Customer Name:* ${name}
📞 *Phone Number:* ${phone}
📍 *Detailed Address:* ${address}
${notes ? `📝 *Special Instructions:* ${notes}\n` : ''}
--------------------------
🛒 *Order Items Details:*
${itemsString}
--------------------------
💵 *Subtotal:* ${subtotal.toLocaleString()} IQD
🛵 *Delivery to Baiji:* ${deliveryFee.toLocaleString()} IQD
💰 *Grand Total:* *${grandTotal.toLocaleString()} IQD*

==========================
🛵 Please confirm this order and start preparation. Thank you!`;
    }

    // تشفير وتوليد رابط الواتساب الموجه
    const whatsappURL = `https://wa.me/${restaurantNumber}?text=${encodeURIComponent(textMessage)}`;
    
    // فتح الرابط في نافذة جديدة
    window.open(whatsappURL, '_blank');

    // إغلاق مودل الفاتورة وتصفير السلة
    closeModal('receipt-modal');
    cart = [];
    saveCartToStorage();
    renderMenu();
    updateCartBarState();
}
