// ============================================================
// FUNCTION-BASED CONSTRUCTOR (Old School / ES5 way)
// Class keyword se PEHLE JavaScript mein aise objects banate the
// `new` keyword ke saath call karne par yeh ek User object banata hai
// ============================================================

function User(email, password) {

    // ----------------------------------------------------------
    // DIRECT STORAGE — seedha property mein daal do
    //
    // Yahan hum directly `this._email` mein store kar rahe hain
    // (Class wale example mein setter ke through jaata tha,
    //  yahan constructor mein hum khud underscore wali
    //  property set kar rahe hain)
    //
    // ⚠️ Yeh line getter/setter ko BYPASS karti hai —
    // kyunki getter/setter abhi define hi nahi hue is point par
    // lekin _email naam alag hai toh koi conflict nahi
    // ----------------------------------------------------------
    this._email = email;       // raw value store: "chai@chai.com"
    this._password = password; // raw value store: "chai"


    // ----------------------------------------------------------
    // Object.defineProperty — Getter/Setter define karne ka
    //                          PURANA aur LOW-LEVEL tarika
    //
    // Syntax:
    //   Object.defineProperty(object, 'propertyName', descriptor)
    //
    //   - object      → kis object par property banana hai (this = naya user object)
    //   - 'email'     → property ka naam jo bahar dikhega
    //   - descriptor  → ek object jisme get/set/value/writable etc. define hote hain
    //
    // Class wala `get email(){}` internally yahi karta hai —
    // bas syntax alag hai, kaam ek jaisa
    // ----------------------------------------------------------
    Object.defineProperty(this, 'email', {

        // GET — jab bhi `chai.email` read ho, yeh function chalega
        get: function() {
            return this._email.toUpperCase(); // "chai@chai.com" → "CHAI@CHAI.COM"
        },

        // SET — jab bhi `chai.email = "kuch"` ho, yeh function chalega
        set: function(value) {
            this._email = value; // naya value _email mein store karo
        }

    }); // ← semicolon — yeh ek function call hai, statement nahi


    // ----------------------------------------------------------
    // Same cheez password ke liye
    // ----------------------------------------------------------
    Object.defineProperty(this, 'password', {

        get: function() {
            return this._password.toUpperCase(); // "chai" → "CHAI"
        },

        set: function(value) {
            this._password = value;
        }

    });

}


// ============================================================
// OBJECT BANAO
// ============================================================

const chai = new User("chai@chai.com", "chai");

// `new` ke saath call karne par behind the scene yeh hota hai:
//
// Step 1: Ek naya EMPTY object banta hai {}
// Step 2: `this` us naye object ko point karta hai
// Step 3: Constructor ka saara code chalta hai:
//         → this._email    = "chai@chai.com"  (direct store)
//         → this._password = "chai"           (direct store)
//         → email property define hoti hai Object.defineProperty se
//         → password property define hoti hai Object.defineProperty se
// Step 4: Woh naya object automatically RETURN ho jaata hai
//         (class wala bhi yehi karta hai internally)


// ============================================================
// VALUE PADHNA
// ============================================================

console.log(chai.email);
// `chai.email` read ho raha hai
// → Object.defineProperty ka GET function chala
// → return this._email.toUpperCase()
// → return "chai@chai.com".toUpperCase()
// → OUTPUT: "CHAI@CHAI.COM"


// ============================================================
// CLASS vs Object.defineProperty — FARK KYA HAI?
//
//  CLASS wala (Modern - ES6+):         DEFINEPROPERTY wala (Old - ES5):
//  ─────────────────────────────────   ──────────────────────────────────
//  get email() { ... }                 Object.defineProperty(this,'email',{
//  set email(v) { ... }                  get: function(){ ... },
//                                        set: function(v){ ... }
//                                      })
//
//  Dono ka KAAM BILKUL EK JAISA hai
//  Class syntax = Object.defineProperty ka hi SHORTHAND/SUGAR hai
//
//  Object.defineProperty mein EXTRA POWERS bhi milti hain:
//  - enumerable: false  → for..in loop mein dikhega ya nahi
//  - writable: false    → value change hone dega ya nahi
//  - configurable: false→ property delete/redefine hone degi ya nahi
//  (Class wale getter/setter mein yeh options nahi milte directly)
//
// ============================================================

// ============================================================
// MEMORY MEIN STRUCTURE (chai object kaisa dikhta hai):
//
//   chai = {
//     _email: "chai@chai.com",      ← actual storage (direct)
//     _password: "chai",            ← actual storage (direct)
//     email: [Getter/Setter],       ← virtual property (defineProperty se)
//     password: [Getter/Setter]     ← virtual property (defineProperty se)
//   }
//
//   chai.email     → Getter chalta hai → CHAI@CHAI.COM
//   chai._email    → Direct access    → chai@chai.com  (original)
// ============================================================