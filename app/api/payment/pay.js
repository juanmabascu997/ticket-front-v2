import mercadopago from 'mercadopago';

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { selectedCategory } = req.body;

    try {
      const preference = {
        items: [
          {
            title: 'Inscripción a Evento',
            unit_price: selectedCategory.price,
            quantity: 1,
          },
        ],
        back_urls: {
          success: 'http://localhost:3000/success',
          failure: 'http://localhost:3000/failure',
          pending: 'http://localhost:3000/pending',
        },
        auto_return: 'approved',
      };

      const response = await mercadopago.preferences.create(preference);
      res.status(200).json({ init_point: response.body.init_point });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la preferencia de pago' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
