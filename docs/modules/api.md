# API Integration

## Backend Routes
Key API endpoints implemented in Express.js:

1. Authentication Routes (`routes/authRoutes.js`):
```javascript
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  // ... handle authentication
);
```

2. Equipment Routes (`routes/equipmentRoutes.js`):
```javascript
router.get('/', async (req, res) => {
  const equipment = await prisma.equipment.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      // ... other fields
    }
  });
  // ... handle response
});
```

3. People Routes (`routes/people.js`):
```javascript
router.get('/', async (req, res) => {
  const people = await People.findAll();
  // ... handle response
});
```
