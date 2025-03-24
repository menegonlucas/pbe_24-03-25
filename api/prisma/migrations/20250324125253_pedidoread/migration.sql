-- CreateTable
CREATE TABLE `PedidoPizzas` (
    `pedidoId` INTEGER NOT NULL,
    `pizzaId` INTEGER NOT NULL,

    PRIMARY KEY (`pedidoId`, `pizzaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PedidoPizzas` ADD CONSTRAINT `PedidoPizzas_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedidos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PedidoPizzas` ADD CONSTRAINT `PedidoPizzas_pizzaId_fkey` FOREIGN KEY (`pizzaId`) REFERENCES `Pizzas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
