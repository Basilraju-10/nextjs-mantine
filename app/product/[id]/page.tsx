import { notFound } from "next/navigation";

import {
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
  Anchor,
} from "@mantine/core";

import Layout from "@/components/Layout";
import { getProduct } from "@/lib/api";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <Layout>
      <Container size="xl" py="xl">
        <Breadcrumbs mb="lg">
          <Anchor href="/">
            Home
          </Anchor>

          <Anchor href="/">
            Catalog
          </Anchor>

          <Text c="green">Product</Text>
        </Breadcrumbs>

        <Paper
          p="xl"
          radius="md"
          withBorder
          shadow="xs"
        >
          <Grid>
            <GridCol span={{ base: 12, md: 5 }}>
              <Image
                src={product.image}
                alt={product.title}
                h={420}
                fit="contain"
              />
            </GridCol>

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
                    href="/"
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
    </Layout>
  );
}