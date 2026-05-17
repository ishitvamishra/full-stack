// ============================================================
// CLASS: User
// Ek blueprint hai — isse hum User objects banayenge
// ============================================================

class User {

    // ----------------------------------------------------------
    // CONSTRUCTOR
    // Jab bhi `new User(email, password)` likhte hain,
    // yeh function SABSE PEHLE execute hota hai.
    // Parameters seedha getter/setter ke through jaate hain —
    // directly this._email ya this._password mein NAHI jaate!
    // ----------------------------------------------------------
    constructor(email, password) {
        this.email = email;       // ← yeh SET email() setter ko call karta hai
        this.password = password; // ← yeh SET password() setter ko call karta hai
    }

    // ----------------------------------------------------------
    // GETTER: email
    // Jab bhi koi `user.email` READ kare (bina brackets ke),
    // yeh function automatically trigger hota hai.
    //
    // Behind the scene:
    // - Real value `this._email` mein store hai (underscore wala)
    // - Getter usse transform karke return karta hai
    // - Yahan .toUpperCase() laga ke CAPITALS mein return kar raha hai
    // ----------------------------------------------------------
    get email() {
        return this._email.toUpperCase(); // "h@hitesh.ai" → "H@HITESH.AI"
    }

    // ----------------------------------------------------------
    // SETTER: email
    // Jab bhi koi `user.email = "kuch"` likhke VALUE ASSIGN kare,
    // yeh function automatically trigger hota hai.
    //
    // Behind the scene:
    // - `value` mein woh naya value aata hai jo assign kiya
    // - Hum use `this._email` mein store karte hain
    //
    // ⚠️ IMPORTANT — Naam ka chakkar:
    // Agar getter/setter ka naam "email" hai,
    // toh internal storage ke liye ALAG naam chahiye — "_email"
    // Agar hum `this.email = value` likhte setter ke andar,
    // toh woh DOBARA setter ko call karega → infinite loop → CRASH 💥
    // Isliye underscore convention use karte hain: `this._email`
    // ----------------------------------------------------------
    set email(value) {
        this._email = value; // actual value yahan store hoti hai
    }

    // ----------------------------------------------------------
    // GETTER: password
    // Jab bhi `user.password` read ho, yeh chalega.
    //
    // Yahan ek interesting cheez ho rahi hai:
    // Password ke end mein "hitesh" string jod ke return kar raha hai.
    // Matlab original value "abc" thi,
    // lekin getter return karega → "abchitesh"
    //
    // Real world mein yahan hashing/encryption hoti hai.
    // ----------------------------------------------------------
    get password() {
        return `${this._password}hitesh`; // "abc" → "abchitesh"
    }

    // ----------------------------------------------------------
    // SETTER: password
    // Jab bhi `user.password = "kuch"` ho, yeh chalega.
    // Value seedha `this._password` mein store ho jaati hai.
    // Same underscore rule yahan bhi apply hoti hai.
    // ----------------------------------------------------------
    set password(value) {
        this._password = value; // actual value yahan store hoti hai
    }
}

// ============================================================
// OBJECT CREATION
// ============================================================

const hitesh = new User("h@hitesh.ai", "abc");
// Step 1: constructor chala
// Step 2: `this.email = "h@hitesh.ai"` → SET email("h@hitesh.ai") setter chala
//         → this._email = "h@hitesh.ai"  (store ho gaya)
// Step 3: `this.password = "abc"` → SET password("abc") setter chala
//         → this._password = "abc"  (store ho gaya)

// ============================================================
// READING THE VALUE
// ============================================================

console.log(hitesh.email);
// `hitesh.email` read ho raha hai → GET email() getter chala
// → return this._email.toUpperCase()
// → return "h@hitesh.ai".toUpperCase()
// → OUTPUT: "H@HITESH.AI"

// ============================================================
// VISUAL FLOW (yaad karne ke liye):
//
//   WRITE karo  →  setter chalta hai  →  _variable mein store
//   READ karo   →  getter chalta hai  →  _variable se leke return
//
//   user.email = "abc"   → set email(value)  → this._email = "abc"
//   user.email           → get email()       → return this._email.toUpperCase()
//
// ============================================================