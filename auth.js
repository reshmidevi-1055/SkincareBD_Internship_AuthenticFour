// Login and Registration logic for login.html and register.html.
// DEMO ONLY: accounts are saved in the browser (localStorage), not on a server.

const USERS_KEY = "skincarebd-users";   // list of registered accounts
const SESSION_KEY = "skincarebd-user";  // the person who is logged in now

const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; } };
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const $ = id => document.getElementById(id);

// Show (or clear) a red error text under one input
function fieldError(input, text) {
  const label = input.closest("label");
  let el = label.querySelector(".err");
  if (!el) { el = document.createElement("small"); el.className = "err"; label.appendChild(el); }
  el.textContent = text;
  input.classList.toggle("invalid", Boolean(text));
}

// checks = [[input, "error text or empty string"], ...]. Returns true when there is no error.
function validate(checks) {
  let ok = true;
  checks.forEach(([input, text]) => { fieldError(input, text); if (text) ok = false; });
  return ok;
}

function finish(message, user) {
  write(SESSION_KEY, { name: user.name, email: user.email });
  const box = $("formMsg");
  box.textContent = message;
  box.className = "form-msg ok";
  setTimeout(() => { window.location.href = "index.html"; }, 1200); // go back to the store
}

// "Show password" checkbox
$("showPass").addEventListener("change", e => {
  document.querySelectorAll("input[type=password], input[data-pw]").forEach(i => {
    i.type = e.target.checked ? "text" : "password";
    i.dataset.pw = "1";
  });
});

// ---------- Registration ----------
const registerForm = $("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = $("regName"), email = $("regEmail"), phone = $("regPhone"), pass = $("regPass"), pass2 = $("regPass2");
    const emailValue = email.value.trim().toLowerCase();
    const users = read(USERS_KEY, []);
    const ok = validate([
      [name, name.value.trim().length < 2 ? "Please enter your full name." : ""],
      [email, !isEmail(emailValue) ? "Please enter a valid email address." : users.some(u => u.email === emailValue) ? "This email is already registered. Please login." : ""],
      [phone, phone.value.trim() && !/^01\d{9}$/.test(phone.value.trim()) ? "Phone must be 11 digits, like 01712345678." : ""],
      [pass, pass.value.length < 6 ? "Password must be at least 6 characters." : ""],
      [pass2, pass2.value !== pass.value ? "Passwords do not match." : ""]
    ]);
    if (!ok) return;
    const user = { name: name.value.trim(), email: emailValue, phone: phone.value.trim(), password: pass.value };
    users.push(user);
    write(USERS_KEY, users);
    finish("Account created! Taking you to the store...", user);
  });
}

// ---------- Login ----------
const loginForm = $("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = $("loginEmail"), pass = $("loginPass");
    const emailValue = email.value.trim().toLowerCase();
    const ok = validate([
      [email, !isEmail(emailValue) ? "Please enter a valid email address." : ""],
      [pass, !pass.value ? "Please enter your password." : ""]
    ]);
    if (!ok) return;
    const user = read(USERS_KEY, []).find(u => u.email === emailValue && u.password === pass.value);
    if (!user) {
      const box = $("formMsg");
      box.textContent = "Wrong email or password. New here? Create an account first.";
      box.className = "form-msg";
      return;
    }
    finish("Login successful! Taking you to the store...", user);
  });
}
