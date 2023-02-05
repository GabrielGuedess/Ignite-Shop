import { GetStaticProps } from 'next';

import Stripe from 'stripe';

import { Home, HomeProps } from 'templates/Home';

import { stripe } from 'lib/stripe';

export default function Index(props: HomeProps) {
  return <Home {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
