# JWT Authentication in Node.js with Express

A working reference implementation of the JWT authentication checklist: register/login with hashed passwords, access + refresh tokens stored as httpOnly cookies, protected routes, token refresh, and logout with server-side refresh token revocation.

## 1. What is a JWT?

A JSON Web Token has three base64url-encoded parts separated by dots: `header.payload.signature`.

- **Header** — algorithm and token type (e.g. `HS256`, `JWT`).
- **Payload** — claims, e.g. `{ id, username, iat, exp }`. Not encrypted, just encoded — never put secrets in it.
- **Signature** — `HMACSHA256(base64(header) + "." + base64(payload), secret)`. Lets the server verify the token wasn't tampered with.

Used here for **authentication** (proving who the user is on each request) via a short-lived access token, and **authorization** (gating access to protected routes) via the `authenticateToken` middleware.

## 2-3. Setup

```bash
npm install
cp .env.example .env   # already populated with dev secrets for this exercise
npm run dev             # or: npm start
```

Dependencies: `express`, `jsonwebtoken`, `bcrypt`, `body-parser`, `cookie-parser`, `dotenv`.

## Project layout

```
app.js                     Express app, middleware wiring, route mounting
routes/auth.js             /auth/register, /auth/login, /auth/refresh, /auth/logout
routes/protected.js        /api/profile, /api/verify (require a valid access token)
middleware/authenticateToken.js   verifies the access token cookie
data/users.js              in-memory user "table"
data/refreshTokens.js       in-memory set of currently-valid refresh tokens
utils/tokens.js             access/refresh token generation + secrets
```

## 4-5. Registration, login, and JWT generation

`POST /auth/register` and `POST /auth/login` both validate input, hash/compare passwords with bcrypt, then issue an access token (1h expiry) and a refresh token (7d expiry) signed with separate secrets from `.env`.

```bash
curl -i -c cookies.txt -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"ada","password":"lovelace123"}'

curl -i -c cookies.txt -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"ada","password":"lovelace123"}'
```

## 6-7. Middleware and protected routes

`middleware/authenticateToken.js` reads the `accessToken` cookie, verifies it, and attaches the decoded payload to `req.user`. Missing token → `401`; invalid/expired token → `403`.

```bash
# Uses the cookie jar saved above
curl -i -b cookies.txt http://localhost:3000/api/profile
curl -i -b cookies.txt http://localhost:3000/api/verify   # dedicated auth-check route
```

## 8. Cookies and logout

Both tokens are set as `httpOnly` cookies (`res.cookie(...)`) so client-side JS can't read them. `POST /auth/logout` clears both cookies and removes the refresh token from the server-side valid-token set.

```bash
curl -i -b cookies.txt -c cookies.txt -X POST http://localhost:3000/auth/logout
```

## 9. Token refresh

`POST /auth/refresh` reads the `refreshToken` cookie, checks it's still in the server-side valid set (so a logged-out token is rejected even if it hasn't expired), verifies its signature, and issues a fresh access token.

```bash
curl -i -b cookies.txt -c cookies.txt -X POST http://localhost:3000/auth/refresh
```

## Suggested follow-up exercises

These extend the app but aren't implemented here — good next steps:

- Enforce username/password format rules on registration.
- Add a `PATCH /api/profile` route for authenticated users to update their info.
- Swap the in-memory `users`/`refreshTokens` stores for a real database.
- Add email confirmation with a unique verification token.
- Add rate limiting (e.g. `express-rate-limit`) on `/auth/login` and `/auth/refresh`.
