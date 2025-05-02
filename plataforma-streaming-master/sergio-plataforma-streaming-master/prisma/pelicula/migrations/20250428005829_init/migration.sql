-- CreateTable
CREATE TABLE "Pelicula" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "duracion" INTEGER NOT NULL,
    "presupuesto" DOUBLE PRECISION NOT NULL,
    "fechaEstreno" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pelicula_pkey" PRIMARY KEY ("id")
);
