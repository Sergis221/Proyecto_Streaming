-- CreateTable
CREATE TABLE "Serie" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "temporadas" INTEGER NOT NULL,
    "episodios" INTEGER NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Serie_pkey" PRIMARY KEY ("id")
);
