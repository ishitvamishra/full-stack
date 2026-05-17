// ============================================================
// OBJECT LITERAL — Na class, na constructor function
// Seedha ek object banaya, koi blueprint nahi
// Yeh ek ACTUAL object hai, sirf ek — singleton
// ============================================================

const User = {
    _email: 'h@hc.com',       // actual storage
    _password: "abc",          // actual storage

    // ----------------------------------------------------------
    // GETTER — same kaam, teesra tarika
    // Class mein: get email(){}  ← same syntax tha
    // Constructor mein: Object.defineProperty ← alag syntax tha
    // Yahan: directly object ke andar get/set likh do
    // Teeno ka result ek hi hai
    // ----------------------------------------------------------
    get email(){
        return this._email.toUpperCase() // "h@hc.com" → "H@HC.COM"
    },
    set email(value){
        this._email = value
    }
}


// ============================================================
// Object.create(User) — SABSE IMPORTANT LINE
//
// Yeh `new` jaisa NAHI hai
// Yeh kya karta hai:
//   → Ek NAYA KHALI object banata hai  {}
//   → Us naye object ka __proto__ (prototype) = User set kar deta hai
//   → Bas, kuch aur nahi
//
// Matlab `tea` khud ke paas kuch nahi hai
// Lekin jab bhi koi property access karo,
// JS "prototype chain" mein upar User mein dhundta hai
// ============================================================

const tea = Object.create(User)


// ============================================================
// console.log(tea.email) — Kya hoga?
//
// Step 1: JS ne `tea.email` dhundha → tea ke paas khud kuch nahi
// Step 2: Prototype chain mein gaya → User mein `email` getter mila
// Step 3: Getter chala: return this._email.toUpperCase()
//
// ⚠️ Yahan `this` kya hai?
//   `this` = woh object jisne call kiya = `tea`
//   tea._email dhundha → tea ke paas nahi
//   Prototype chain → User._email = 'h@hc.com' mila
//
// → OUTPUT: "H@HC.COM"
// ============================================================

console.log(tea.email);


// ============================================================
// MEMORY MEIN ACTUAL PICTURE:
//
//   tea = {}   ← bilkul khali object
//      |
//      | __proto__ (prototype chain)
//      |
//   User = {
//      _email: 'h@hc.com',
//      _password: 'abc',
//      email: [Getter/Setter]
//   }
//
//   tea.email    → tea mein nahi → User mein getter mila → chala
//   tea._email   → tea mein nahi → User._email = 'h@hc.com'
// ============================================================


// ============================================================
// TEEN TARIKE — EK COMPARISON (Revision ke liye)
//
//  1. CLASS (ES6)                    2. CONSTRUCTOR FN (ES5)
//  ──────────────────────────        ───────────────────────────────
//  class User {                      function User(e, p){
//    get email(){ ... }                Object.defineProperty(
//    set email(v){ ... }                 this, 'email', {
//  }                                      get(){ ... },
//  new User("a","b")                      set(v){ ... }
//                                       })
//                                    }
//                                    new User("a","b")
//
//  3. OBJECT LITERAL (Yeh wala)
//  ──────────────────────────────
//  const User = {
//    get email(){ ... },
//    set email(v){ ... }
//  }
//  Object.create(User)   ← new nahi, sirf prototype connect karo
//
//  FARK:
//  - Class/Constructor → har baar NAYA object banta hai apni values ke saath
//  - Object.create     → naya KHALI object banta hai, values upar se milti hain
// ============================================================


// ============================================================
// BONUS — Agar tea ki apni email set karo toh?
//
//   tea.email = "tea@tea.com"
//   → setter chala (User ka getter/setter tea inherit karta hai)
//   → this._email = "tea@tea.com"
//   → this = tea, toh tea._email = "tea@tea.com" set ho jaayega
//   → AB tea ka apna _email ho gaya, User wala shadow ho gaya
//
//   tea._email   → "tea@tea.com"  (tea ka apna)
//   User._email  → "h@hc.com"    (unchanged)
// ============================================================