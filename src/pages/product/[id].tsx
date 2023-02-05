import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Stripe from 'stripe';

import { Product as ProductTemplate, ProductProps } from 'templates/Product';

import { stripe } from 'lib/stripe';

export default function Product(props: ProductProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>loading...</p>;
  }

  return <ProductTemplate {...props} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  const product = await stripe.products.retrieve(params!.id, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      describe: product.description,
      defaultPriceId: price.id,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    },
    revalidate: 60 * 60 * 1,
  };
};
