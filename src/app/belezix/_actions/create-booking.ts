"use server";

import { revalidatePath } from "next/cache";

interface CreateBookingParams {
  serviceId: string;
  date: Date;
}

export const createBooking = async (params: CreateBookingParams) => {
  //   const user = await getServerSession(authOptions);
  //   if (!user) {
  //     throw new Error("Usuário não autenticado");
  //   }
  //   await db.booking.create({
  //     data: { ...params, userId: (user.user as any).id },
  //   });
  revalidatePath("/barbershops/[id]");
  revalidatePath("/bookings");
};
