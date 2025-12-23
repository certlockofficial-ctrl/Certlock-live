import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";

export async function isBillingRequired(companyId: string) {
  if (process.env.BILLING_ENABLED !== "true") return false;
  const company = await prisma.company.findUnique({ where: { id: companyId } });
  return !company || company.subscriptionStatus !== "active";
}

export async function assertActiveSubscription(companyId: string) {
  if (process.env.BILLING_ENABLED !== "true") return;
  const company = await prisma.company.findUnique({ where: { id: companyId } });
  if (!company || company.subscriptionStatus !== "active") {
    throw new Error("SUBSCRIPTION_REQUIRED");
  }
}

export async function syncSeatQuantity(companyId: string) {
  if (process.env.BILLING_ENABLED !== "true") return;

  const company = await prisma.company.findUnique({ where: { id: companyId } });
  if (!company?.stripeSubscriptionId) return;

  const employeeCount = await prisma.employee.count({ where: { companyId } });
  const desired = Math.max(employeeCount, 1);

  const subscription = await stripe.subscriptions.retrieve(company.stripeSubscriptionId);
  const seatPrice = process.env.STRIPE_PRICE_PER_SEAT!;
  const seatItem = subscription.items.data.find((i) => i.price.id === seatPrice);
  if (!seatItem) return;

  if ((seatItem.quantity ?? 0) !== desired) {
    await stripe.subscriptionItems.update(seatItem.id, { quantity: desired });
  }

  await prisma.company.update({ where: { id: companyId }, data: { seatLimit: desired } });
}
