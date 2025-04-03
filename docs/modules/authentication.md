# Authentication Module

## Google OAuth Integration
![Auth Flow](../screenshots/auth-flow.png)

Key implementation in `filmfolio-backend/src/config/passport.js`:
```javascript
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    scope: ['profile', 'email']
  },
  async (accessToken, refreshToken, profile, done) => {
    // User creation/verification logic
    let user = await prisma.user.findUnique({
      where: { googleId: profile.id }
    });
    // ... handle user data
}));
```

Frontend implementation in `components/GoogleButton.tsx`:
```typescript
const GoogleButton = ({ className = '' }) => {
  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };
  // ... render button
};
```
