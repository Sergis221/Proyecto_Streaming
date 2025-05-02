-- CreateTable
CREATE TABLE "Contenido" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "productor" TEXT NOT NULL,

    CONSTRAINT "Contenido_pkey" PRIMARY KEY ("id")
);
