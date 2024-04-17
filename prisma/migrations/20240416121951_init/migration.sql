-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Watches" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "water_resistance" INTEGER NOT NULL,
    "dial" TEXT NOT NULL,
    "bracelet" TEXT NOT NULL,
    "functions" TEXT NOT NULL,
    "jewels" INTEGER NOT NULL,
    "mechanism" TEXT NOT NULL,
    "power_reserve" INTEGER NOT NULL,
    "diameter" INTEGER NOT NULL,
    "no_of_parts" INTEGER NOT NULL,
    "hz" INTEGER NOT NULL,
    "vph" BIGINT NOT NULL,
    "thickness" INTEGER NOT NULL,

    CONSTRAINT "Watches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "watchId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Watches_name_key" ON "Watches"("name");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_watchId_fkey" FOREIGN KEY ("watchId") REFERENCES "Watches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
