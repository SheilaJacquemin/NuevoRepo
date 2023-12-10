const mercadopago = require('mercadopago');
const Order = require('../model/order');
const OrderHasProducts = require('../model/order_has_conductor');

mercadopago.configure({
    sandbox: true,
    access_token: 'TEST-4636253862192345-101214-bee6fb92078df016c66a43080eb723ca-749376662'
});

module.exports = {
    async createPayment(req, res) {
        try {
            const payment = req.body;
            console.log('PAYMENT: ', payment);

            const payment_data = {
                token: payment.token,
                issuer_id: payment.issuer_id,
                payment_method_id: payment.payment_method_id,
                transaction_amount: payment.transaction_amount,
                installments: parseInt(payment.installments),
                payer: {
                    email: payment.payer.email,
                    identification: {
                        type: payment.payer.identification.type,
                        number: payment.payer.identification.number
                    },
                },
            }

            console.log('Preparando para enviar datos a MercadoPago con el siguiente payload:', payment_data);

            const data = await mercadopago.payment.create(payment_data);
            if (!data || !data.response) {
                return res.status(500).json({
                    success: false,
                    message: 'No se pudo obtener una respuesta válida de MercadoPago.'
                });
            }


            console.log('Respuesta de MercadoPago:', data.response);

            const order = payment.order;
            


            console.log('Creando orden en la base de datos...');

            const orderId = await new Promise((resolve, reject) => {
                Order.create(order, (err, id) => {
                    if (err) reject(err);
                    else resolve(id);
                });
            });

            if (!orderId) {
                return res.status(500).json({
                    success: false,
                    message: 'Error al crear la orden en la base de datos.'
                });
            }
          

            console.log('Orden creada con el ID:', orderId);
            
            console.log('Agregando conductores a la orden...');

            for (const conductor of order.conductors) {
                await new Promise((resolve, reject) => {
                    OrderHasProducts.create(orderId, conductor.id, conductor.quantity, (err, id) => {
                        if (err) reject(err);
                        else resolve(id);
                    });
                });
            }

            console.log('Todos los conductores han sido agregados a la orden.');
            
            return res.status(201).json({
                success: true,
                message: 'La orden se ha creado correctamente',
                data: data.response
            });

        } catch (err) {
            console.error('Error en el proceso:', err);
            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor',
                error: err.message
            });
        }
    }
}
