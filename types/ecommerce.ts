export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  tax: number;
  shipping: number;
  discount?: number;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId?: string;
  items: CartItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  updatedAt: string;
  customer: CustomerInfo;
  shipping: ShippingInfo;
  payment: PaymentInfo;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface ShippingInfo {
  method: "standard" | "express" | "overnight";
  carrier: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
  cost: number;
}

export interface PaymentInfo {
  method: "credit_card" | "paypal" | "bank_transfer";
  status: "pending" | "completed" | "failed";
  transactionId?: string;
  amount: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  stock: number;
  category: string;
  images: string[];
  rating: number;
  reviews: number;
  sku: string;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
}

export interface Coupon {
  code: string;
  discount: number; // percentage or fixed amount
  type: "percentage" | "fixed";
  minAmount?: number;
  maxUses?: number;
  expiresAt: string;
  active: boolean;
}

// Calculate cart totals
export function calculateCartTotal(cart: Cart): {
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
} {
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const shipping = cart.shipping || 0;
  const discount = cart.discount || 0;
  const total = subtotal + tax + shipping - discount;

  return {
    subtotal,
    tax,
    shipping,
    discount,
    total,
  };
}

// Apply coupon discount
export function applyCoupon(cart: Cart, coupon: Coupon): number {
  if (!coupon.active) return 0;

  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (coupon.minAmount && subtotal < coupon.minAmount) return 0;

  if (coupon.type === "percentage") {
    return (subtotal * coupon.discount) / 100;
  } else {
    return coupon.discount;
  }
}

// Format price
export function formatPrice(price: number, currency: string = "EUR"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price);
}

// Calculate shipping cost
export function calculateShipping(
  method: "standard" | "express" | "overnight",
  weight?: number
): number {
  const baseRates = {
    standard: 5,
    express: 15,
    overnight: 30,
  };

  const weightSurcharge = weight ? Math.ceil(weight / 10) * 2 : 0;
  return baseRates[method] + weightSurcharge;
}

// Validate customer info
export function validateCustomerInfo(info: CustomerInfo): boolean {
  return (
    info.name.length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email) &&
    info.phone.length > 0 &&
    info.address.length > 0 &&
    info.city.length > 0 &&
    info.postalCode.length > 0 &&
    info.country.length > 0
  );
}

// Generate order confirmation
export function generateOrderConfirmation(order: Order): string {
  const shippingCost = typeof order.shipping === 'object' ? order.shipping.cost : 0;
  return `
    Order Confirmation #${order.id}
    
    Customer: ${order.customer.name}
    Email: ${order.customer.email}
    
    Items:
    ${order.items
      .map((item) => `- ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`)
      .join("\n")}
    
    Subtotal: ${formatPrice(order.total - shippingCost)}
    Shipping: ${formatPrice(shippingCost)}
    Total: ${formatPrice(order.total)}
    
    Status: ${order.status}
    Created: ${new Date(order.createdAt).toLocaleDateString()}
  `;
}
