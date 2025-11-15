// ==========================================
// Авто создаются только если их нет в LS
// ==========================================

function saveIfEmpty(key, data) {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

// ================= BMW =================
saveIfEmpty("catalog_bmw", [
    { brand:"BMW", model:"2 Series", variant:"230i", price:2500000, power:184, zero:6.9, drive:"RWD", yearStart:2016, img:"assets/car/bmw/2series.png" },
    { brand:"BMW", model:"3 Series", variant:"320i", price:2700000, power:184, zero:7.1, drive:"RWD", yearStart:2017, img:"assets/car/bmw/3series.png" },
    { brand:"BMW", model:"4 Series", variant:"430i", price:3100000, power:249, zero:6.0, drive:"RWD", yearStart:2017, img:"assets/car/bmw/4series.png" },
    { brand:"BMW", model:"5 Series", variant:"530i", price:3600000, power:249, zero:6.4, drive:"RWD", yearStart:2017, img:"assets/car/bmw/5series.png" },
    { brand:"BMW", model:"X3", variant:"xDrive30i", price:3900000, power:249, zero:6.6, drive:"AWD", yearStart:2018, img:"assets/car/bmw/x3.png" },
    { brand:"BMW", model:"X5", variant:"xDrive40i", price:6200000, power:340, zero:5.5, drive:"AWD", yearStart:2019, img:"assets/car/bmw/x5.png" },
    { brand:"BMW", model:"X6", variant:"xDrive40i", price:6600000, power:340, zero:5.7, drive:"AWD", yearStart:2020, img:"assets/car/bmw/x6.png" },
    { brand:"BMW", model:"X7", variant:"xDrive40i", price:8200000, power:340, zero:6.0, drive:"AWD", yearStart:2020, img:"assets/car/bmw/x7.png" },
    
    { brand:"BMW", model:"M2", variant:"G87", price:6500000, power:460, zero:4.1, drive:"RWD", yearStart:2023, img:"assets/car/bmw/m2.png" },
    { brand:"BMW", model:"M3", variant:"G80", price:7800000, power:510, zero:3.4, drive:"AWD", yearStart:2021, img:"assets/car/bmw/m3.png" },
    { brand:"BMW", model:"M4", variant:"G82", price:8200000, power:510, zero:3.5, drive:"AWD", yearStart:2021, img:"assets/car/bmw/m4.png" },
    { brand:"BMW", model:"M5", variant:"F90", price:9200000, power:600, zero:3.3, drive:"AWD", yearStart:2018, img:"assets/car/bmw/m5.png" },

    { brand:"BMW", model:"X5M", variant:"Competition", price:12500000, power:625, zero:3.8, drive:"AWD", yearStart:2020, img:"assets/car/bmw/x5m.png" },
    { brand:"BMW", model:"X6M", variant:"Competition", price:13000000, power:625, zero:3.8, drive:"AWD", yearStart:2020, img:"assets/car/bmw/x6m.png" },
    { brand:"BMW", model:"XM", variant:"Hybrid", price:15500000, power:653, zero:4.3, drive:"AWD", yearStart:2023, img:"assets/car/bmw/xm.png" }
]);

// ================= MERCEDES =================
saveIfEmpty("catalog_mercedes", [
    { brand:"Mercedes", model:"A-Class", variant:"A200", price:2500000, power:163, zero:8.2, drive:"FWD", yearStart:2019, img:"assets/car/mercedes/a_class.png" },
    { brand:"Mercedes", model:"C-Class", variant:"C200", price:3200000, power:204, zero:7.1, drive:"RWD", yearStart:2022, img:"assets/car/mercedes/c_class.png" },
    { brand:"Mercedes", model:"E-Class", variant:"E200", price:3900000, power:197, zero:7.5, drive:"RWD", yearStart:2020, img:"assets/car/mercedes/e_class.png" },
    { brand:"Mercedes", model:"S-Class", variant:"S450", price:11500000, power:367, zero:5.1, drive:"AWD", yearStart:2021, img:"assets/car/mercedes/s_class.png" },
    { brand:"Mercedes", model:"G-Class", variant:"G63 AMG", price:21000000, power:585, zero:4.5, drive:"AWD", yearStart:2019, img:"assets/car/mercedes/g63.png" },
    { brand:"Mercedes", model:"GLC", variant:"300 4Matic", price:4500000, power:258, zero:6.2, drive:"AWD", yearStart:2020, img:"assets/car/mercedes/glc.png" }
]);

// ================= AUDI =================
saveIfEmpty("catalog_audi", [
    { brand:"Audi", model:"A3", variant:"35 TFSI", price:2400000, power:150, zero:8.1, drive:"FWD", yearStart:2020, img:"assets/car/audi/a3.png" },
    { brand:"Audi", model:"A5", variant:"40 TFSI", price:3300000, power:190, zero:7.3, drive:"AWD", yearStart:2019, img:"assets/car/audi/a5.png" },
    { brand:"Audi", model:"RS5", variant:"Sportback", price:8000000, power:450, zero:3.9, drive:"AWD", yearStart:2021, img:"assets/car/audi/rs5.png" },
    { brand:"Audi", model:"Q5", variant:"45 TFSI", price:4700000, power:249, zero:6.3, drive:"AWD", yearStart:2020, img:"assets/car/audi/q5.png" },
    { brand:"Audi", model:"Q7", variant:"45 TDI", price:7200000, power:249, zero:7.1, drive:"AWD", yearStart:2020, img:"assets/car/audi/q7.png" },
    { brand:"Audi", model:"Q8", variant:"55 TFSI", price:9500000, power:340, zero:5.9, drive:"AWD", yearStart:2020, img:"assets/car/audi/q8.png" }
]);
