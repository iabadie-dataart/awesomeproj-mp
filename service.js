import ENV from 'react-native-config';

export const getPreferenceId = async () => {
  const response = await fetch(
    `https://api.mercadopago.com/checkout/preferences?access_token=${ENV.MP_ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            title: 'Dummy Item',
            description: 'Multicolor Item',
            quantity: 1,
            currency_id: 'MX',
            unit_price: 10.0,
          },
        ],
        payer: {
          email: 'payer@email.com',
        },
      }),
    },
  );
  const preference = await response.json();

  console.log(preference.id);
  return preference.id;
};
