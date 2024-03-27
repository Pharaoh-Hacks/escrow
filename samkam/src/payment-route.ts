import { z } from 'zod';

import { TRPCError } from '@trpc/server';
import { getPayloadClient } from './get-payload';
//import escrow from 'escrow'; // Assuming you have installed and configured the escrow module
import { privateProcedure, router } from './trpc/trpc';

export const paymentRouter = router({
  createSession: privateProcedure
    .input(z.object({ productIds: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      let { productIds } = input;

      if (productIds.length === 0) {
        throw new TRPCError({ code: 'BAD_REQUEST' });
      }

      const payload = await getPayloadClient();

      const { docs: products } = await payload.find({
        collection: 'products',
        where: {
          id: {
            in: productIds,
          },
        },
      });

      const filteredProducts = products.filter((prod) =>
        Boolean(prod.priceId)
      );

      const order = await payload.create({
        collection: 'orders',
        data: {
          _isPaid: false,
          products: filteredProducts.map((prod) => prod.id),
            user: user.id,
          amount: 0,
        },
      });

      // Create an escrow transaction
      //.createTransaction(order.amount, 'Seller', user.id);

      return { orderId: order.id };
    }),

  pollOrderStatus: privateProcedure
    .input(z.object({ orderId: z.string() }))
    .query(async ({ input }) => {
      const { orderId } = input;

      const payload = await getPayloadClient();

      const { docs: orders } = await payload.find({
        collection: 'orders',
        where: {
          id: {
            equals: orderId,
          },
        },
      });

      if (!orders.length) {
        throw new TRPCError({ code: 'NOT_FOUND' });
      }

      const [order] = orders;

      // Retrieve order status from the escrow service
      //const isPaid = escrow.isTransactionPaid(orderId);

      return { success: true };
    }),
});
