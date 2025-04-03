# Equipment Marketplace Module

## Equipment Listing
![Marketplace](../screenshots/marketplace.png)

Backend model (`prisma/schema.prisma`):
```prisma
model Equipment {
  id          String   @id @default(cuid())
  name        String
  category    String
  location    String
  description String
  price       String
  image       String
  createdAt   DateTime @default(now())
  updatedAt   DateTime
}
```

Frontend implementation in `app/marketplace/page.tsx`:
```typescript
export default function Marketplace() {
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [equipmentData, setEquipmentData] = useState<EquipmentItem[]>([]);

  // Equipment filtering logic
  const filterEquipment = (category: string) => {
    return selectedCategories.size === 0 || selectedCategories.has(category);
  };
  // ... rest of the implementation
}
```
