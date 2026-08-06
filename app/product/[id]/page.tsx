import { notFound } from "next/navigation";

import {
  Anchor,
  Badge,
  Breadcrumbs,
  Button,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import Layout from "@/components/Layout";
import { getProduct } from "@/lib/api";
import Footer from "@/app/whoweare/components/Footer";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <Layout>
      <Container size="xl" py="xl">

        {/* Breadcrumbs */}
        <Breadcrumbs mb="lg">
          <Anchor
            href="/"
            c="dimmed"
          >
            Home
          </Anchor>

          <Anchor
            href="/catalog"
            c="dimmed"
          >
            Catalog
          </Anchor>

          <Text
            c="bold"
            fw={500}
          >
            Product
          </Text>
        </Breadcrumbs>


        <Paper
          p="xl"
          radius="md"
          withBorder
          shadow="xs"
        >

          <Grid>

            {/* Product Image */}
            <GridCol span={{ base: 12, md: 5 }}>
              <Image
                src={product.image}
                alt={product.title}
                h={420}
                fit="contain"
              />
            </GridCol>


            {/* Product Details */}
            <GridCol span={{ base: 12, md: 7 }}>
              <Stack>

                <Group>
                  <Badge color="green">
                    IN STOCK
                  </Badge>

                  <Badge variant="light">
                    AR
                  </Badge>
                </Group>


                <Title order={2}>
                  {product.title}
                </Title>


                <Text c="dimmed">
                  {product.category}
                </Text>


                <Divider />


                <Title c="green">
                  ${product.price}
                </Title>


                <Text>
                  {product.description}
                </Text>


                <Divider />


                <Group>

                  <Button color="green">
                    Add To Cart
                  </Button>


                  <Button
                    component="a"
                    href="/catalog"
                    variant="outline"
                    color="green"
                  >
                    Back
                  </Button>

                </Group>

              </Stack>
            </GridCol>

          </Grid>

        </Paper>

      </Container>

      <Footer />
    </Layout>
  );
}