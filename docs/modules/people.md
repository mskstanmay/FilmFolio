# People Module

## Talent Directory
![People Directory](../screenshots/people.png)

Backend model (`prisma/schema.prisma`):
```prisma
model People {
  id          String   @id @default(uuid())
  name        String
  location    String
  description String
  role        String
  image       String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

Frontend implementation in `app/people/page.tsx`:
```typescript
export default function People() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [profiles, setProfiles] = useState([]);

  // Category filtering logic
  const filterProfiles = (role: string) => {
    return selectedCategories.size === 0 || selectedCategories.has(role);
  };
  // ... rest of the implementation
}
```
