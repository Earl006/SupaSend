import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function seed() {
    try {
        console.log('Seeding database...');

        // Generate Users
        const users = await Promise.all(
            Array.from({ length: 20 }).map(async () => {
                const password = faker.internet.password();
                const salt = bcrypt.genSaltSync(10);
                const hashedPassword = bcrypt.hashSync(password, salt);

                return prisma.user.create({
                    data: {
                        name: faker.person.fullName(),
                        email: faker.internet.email(),
                        password: hashedPassword,
                        salt: salt,
                        phoneNumber: faker.phone.number(),
                        role: faker.helpers.arrayElement(['ADMIN', 'BUSINESS', 'CUSTOMER', 'SHIPPER']),
                        avatarUrl: faker.image.avatar(),
                    },
                });
            })
        );

        // Generate Admins
        const admins = await Promise.all(
            users
                .filter(user => user.role === 'ADMIN')
                .map(user =>
                    prisma.admin.create({
                        data: {
                            userId: user.id,
                            level: faker.number.int({ min: 1, max: 5 }),
                        },
                    })
                )
        );

        // Generate Businesses
        const businesses = await Promise.all(
            users
                .filter(user => user.role === 'BUSINESS')
                .map(user =>
                    prisma.business.create({
                        data: {
                            ownerId: user.id,
                            name: faker.company.name(),
                            description: faker.company.catchPhrase(),
                            rating: faker.number.float({ min: 0, max: 5, fractionDigits: 1 }),
                        },
                    })
                )
        );

        // Generate Customers
        const customers = await Promise.all(
            users
                .filter(user => user.role === 'CUSTOMER')
                .map(user =>
                    prisma.customer.create({
                        data: {
                            userId: user.id,
                        },
                    })
                )
        );

        // Generate Zones
        const zones = await Promise.all(
            Array.from({ length: 5 }).map(() => {
                return prisma.zone.create({
                    data: {
                        name: faker.location.city(),
                    },
                });
            })
        );

        // Generate Shippers
        const shippers = await Promise.all(
            users
                .filter(user => user.role === 'SHIPPER')
                .map(user =>
                    prisma.shipper.create({
                        data: {
                            userId: user.id,
                            zoneId: faker.helpers.arrayElement(zones).id,
                        },
                    })
                )
        );

        // Generate Categories
        const categories = await Promise.all(
            Array.from({ length: 10 }).map(() =>
                prisma.category.create({
                    data: {
                        name: faker.commerce.department(),
                        imageUrl: faker.image.urlLoremFlickr({ category: 'business' }),
                    },
                })
            )
        );

        // Generate Products
        const products = await Promise.all(
            businesses.flatMap(business =>
                Array.from({ length: 10 }).map(() =>
                    prisma.product.create({
                        data: {
                            name: faker.commerce.productName(),
                            description: faker.commerce.productDescription(),
                            price: faker.number.float({ min: 1, max: 1000, fractionDigits: 2 }),
                            stockQuantity: faker.number.int({ min: 1, max: 500 }),
                            categoryId: faker.helpers.arrayElement(categories).id,
                            businessId: business.id,
                            imageUrl: faker.image.urlLoremFlickr({ category: 'products' }),
                        },
                    })
                )
            )
        );

        // Generate Carts
        const carts = await Promise.all(
            customers.map(async (customer) => {
                return prisma.cart.create({
                    data: {
                        customerId: customer.id,
                        total: faker.number.float({ min: 0, max: 1000, fractionDigits: 2 }),
                    },
                });
            })
        );

        // Generate CartItems
        const cartItems = await Promise.all(
            Array.from({ length: 50 }).map(() => {
                return prisma.cartItem.create({
                    data: {
                        cartId: faker.helpers.arrayElement(carts).id,
                        productId: faker.helpers.arrayElement(products).id,
                        quantity: faker.number.int({ min: 1, max: 10 }),
                        subtotal: faker.number.float({ min: 10, max: 500, fractionDigits: 2 }),
                    },
                });
            })
        );

        // Generate Orders
        const orders = await Promise.all(
            customers.map(async (customer) => {
                return prisma.order.create({
                    data: {
                        customerId: customer.id,
                        totalPrice: faker.number.float({ min: 50, max: 2000, fractionDigits: 2 }),
                        status: faker.helpers.arrayElement([
                            'PENDING',
                            'PROCESSING',
                            'PARTIALLY_FULFILLED',
                            'COMPLETED',
                            'CANCELED',
                            'REFUNDED',
                        ]),
                        isPaidInFull: faker.datatype.boolean(),
                    },
                });
            })
        );

        // Generate OrderItems
        const orderItems = await Promise.all(
            Array.from({ length: 50 }).map(() => {
                return prisma.orderItem.create({
                    data: {
                        orderId: faker.helpers.arrayElement(orders).id,
                        productId: faker.helpers.arrayElement(products).id,
                        businessId: faker.helpers.arrayElement(businesses).id,
                        quantity: faker.number.int({ min: 1, max: 10 }),
                        subtotal: faker.number.float({ min: 10, max: 500, fractionDigits: 2 }),
                    },
                });
            })
        );

        // Generate BusinessOrders
        const businessOrders = await Promise.all(
            Array.from({ length: 30 }).map(() => {
                return prisma.businessOrder.create({
                    data: {
                        orderId: faker.helpers.arrayElement(orders).id,
                        businessId: faker.helpers.arrayElement(businesses).id,
                        subtotal: faker.number.float({ min: 50, max: 1000, fractionDigits: 2 }),
                        status: faker.helpers.arrayElement([
                            'PENDING',
                            'PROCESSING',
                            'READY_FOR_PICKUP',
                            'SHIPPED',
                            'DELIVERED',
                            'PARTIALLY_FULFILLED',
                            'CANCELED',
                            'REFUNDED',
                        ]),
                    },
                });
            })
        );

        // Generate PaymentMethods
        const paymentMethods = await Promise.all(
            ['MPesa', 'Bank Transfer', 'PayPal', 'Credit Card'].map((method) => {
                return prisma.paymentMethod.create({
                    data: {
                        name: method,
                        isActive: faker.datatype.boolean(),
                    },
                });
            })
        );

        // Generate Payments
        const payments = await Promise.all(
            Array.from({ length: 20 }).map(() => {
                return prisma.payment.create({
                    data: {
                        orderId: faker.helpers.arrayElement(orders).id,
                        paymentMethodId: faker.helpers.arrayElement(paymentMethods).id,
                        reference: faker.string.uuid(),
                        amount: faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
                        status: faker.helpers.arrayElement([
                            'PENDING',
                            'PROCESSING',
                            'PARTIALLY_PAID',
                            'COMPLETED',
                            'FAILED',
                            'REFUNDED',
                            'CANCELED',
                        ]),
                        isInstallment: faker.datatype.boolean(),
                    },
                });
            })
        );

        // Generate Wallets
        const wallets = await Promise.all(
            users.map(async (user) => {
                return prisma.wallet.create({
                    data: {
                        userId: user.id,
                        balance: faker.number.float({ min: 0, max: 5000, fractionDigits: 2 }),
                        isActive: faker.datatype.boolean(),
                    },
                });
            })
        );

        // Generate Transactions
        const transactions = await Promise.all(
            Array.from({ length: 30 }).map(() => {
                return prisma.transaction.create({
                    data: {
                        walletId: faker.helpers.arrayElement(wallets).id,
                        type: faker.helpers.arrayElement([
                            'DEPOSIT',
                            'WITHDRAWAL',
                            'PAYMENT',
                            'REFUND',
                            'TRANSFER',
                        ]),
                        reference: faker.string.uuid(),
                        amount: faker.number.float({ min: 10, max: 1000, fractionDigits: 2 }),
                        status: faker.helpers.arrayElement([
                            'PENDING',
                            'COMPLETED',
                            'FAILED',
                            'CANCELED',
                            'REVERSED',
                        ]),
                    },
                });
            })
        );

        // Generate Deliveries
        const deliveries = await Promise.all(
            Array.from({ length: 20 }).map(async () => {
                return prisma.delivery.create({
                    data: {
                        orderId: faker.helpers.arrayElement(orders).id,
                        shipperId: faker.helpers.arrayElement(shippers).id,
                        status: faker.helpers.arrayElement([
                            'PENDING',
                            'IN_TRANSIT',
                            'OUT_FOR_DELIVERY',
                            'DELIVERED',
                            'FAILED',
                            'RETURNED',
                            'CANCELED',
                        ]),
                        assignedAt: faker.date.past(),
                        completedAt: faker.datatype.boolean() ? faker.date.recent() : null,
                    },
                });
            })
        );

        // Generate Addresses
        const addresses = await Promise.all(
            Array.from({ length: 20 }).map(() => {
                return prisma.address.create({
                    data: {
                        userId: faker.helpers.arrayElement(users).id,
                        zoneId: faker.helpers.arrayElement(zones).id,
                        buildingName: faker.string.alpha(10),
                        streetName: faker.location.streetAddress(),
                        latitude: faker.location.latitude(),
                        longitude: faker.location.longitude(),
                        isPrimary: faker.datatype.boolean(),
                    },
                });
            })
        );

        // Generate Reviews
        const reviews = await Promise.all(
            Array.from({ length: 20 }).map(() => {
                return prisma.review.create({
                    data: {
                        customerId: faker.helpers.arrayElement(customers).id,
                        businessId: faker.helpers.arrayElement(businesses).id,
                        rating: faker.number.float({ min: 1, max: 5, fractionDigits: 1 }),
                        comment: faker.lorem.sentence(),
                    },
                });
            })
        );

        // Generate PasswordResetTokens
        const passwordResetTokens = await Promise.all(
            Array.from({ length: 10 }).map(() => {
                const expiresAt = faker.date.future();
                return prisma.passwordResetToken.create({
                    data: {
                        userId: faker.helpers.arrayElement(users).id,
                        code: faker.string.uuid(),
                        isValid: true,
                        expiresAt: expiresAt,
                    },
                });
            })
        );

        console.log('Database seeding completed successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
