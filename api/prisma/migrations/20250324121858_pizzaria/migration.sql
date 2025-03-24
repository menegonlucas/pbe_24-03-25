-- CreateTable
CREATE TABLE `Clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `logradouro` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clientes_cpf_key`(`cpf`),
    UNIQUE INDEX `Clientes_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pizzas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `valor` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `hora` DATETIME(3) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `clienteId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedidos` ADD CONSTRAINT `Pedidos_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
