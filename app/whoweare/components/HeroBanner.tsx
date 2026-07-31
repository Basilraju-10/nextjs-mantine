import {
  Box,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function HeroBanner() {
  return (
    <Box
      style={{
        height: 280,
        backgroundImage: "url('/images/about_banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container size="lg">
        <Stack gap={4} maw={600}>
          <Text
            tt="uppercase"
            fw={700}
            size="sm"
            style={{
              letterSpacing: 2,
            }}
          >
            ABOUT US
          </Text>

          <Title
            order={1}
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Passion for{" "}
            <Text
              component="span"
              inherit
              c="#00B060"
            >
              Excellence
            </Text>
          </Title>
        </Stack>
      </Container>
    </Box>
  );
}