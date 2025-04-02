-- Add userId field to Equipment table if table exists
DO $$ 
BEGIN
    -- First check if the table exists
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'Equipment') THEN
        -- Add column if it doesn't exist
        IF NOT EXISTS (SELECT FROM information_schema.columns 
                      WHERE table_name = 'Equipment' AND column_name = 'userId') THEN
            ALTER TABLE "Equipment" ADD COLUMN "userId" TEXT NOT NULL;
            ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_userId_fkey" 
            FOREIGN KEY ("userId") REFERENCES "User"("id");
        END IF;
    END IF;
END $$;
