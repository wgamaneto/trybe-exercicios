const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

const customerInfo = (order) => {
    const delivery = order.order.delivery.deliveryPerson;
    const customerName = order.name;
    const customerNumber = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;

    console.log(`Ola ${delivery}, entrega para: ${customerName}, Telefone: ${customerNumber}, ${street}, N.${number}, APT.${apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
    const novoNome = order.name = 'Luiz Silva';
    const novoValor = order.payment.total = '50';
    const pizzas = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;

    console.log(`Ola ${novoNome}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é ${novoValor}`);

}

orderModifier(order);