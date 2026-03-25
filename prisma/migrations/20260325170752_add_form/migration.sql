-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "willCome" TEXT NOT NULL,
    "preferencesDrinks" TEXT[],
    "preferencesDrinksCustom" TEXT NOT NULL,
    "musicPreferences" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Form_userId_key" ON "Form"("userId");

-- AddForeignKey
ALTER TABLE "Form" ADD CONSTRAINT "Form_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
