import {
  Box,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";

interface PageBannerProps {
  image: string;
  label: string;
  title: string;
  highlight: string;
}

export default function PageBanner({
  image,
  label,
  title,
  highlight,
}: PageBannerProps) {
  return (
    <Box
      style={{
        position: "relative",
        height: 280,
        overflow: "hidden",
        backgroundColor: "#F4FBF7",
      }}
    >
      {/* Background Image */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${image}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "46% auto",
        }}
      />

      {/* Green Overlay */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(239,250,245,.95) 0%, rgba(239,250,245,.75) 45%, rgba(239,250,245,.55) 70%, rgba(239,250,245,.35) 100%)",
        }}
      />

      {/* Text */}
      <Container
        size="lg"
        h="100%"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack gap={8}>
          <Text
            tt="uppercase"
            fw={700}
            size="sm"
            style={{
              letterSpacing: 2,
            }}
          >
            {label}
          </Text>

          <Title
            order={1}
            style={{
              fontSize: 45,
              lineHeight: 1.05,
              fontWeight: 800,
            }}
          >
            {title}{" "}
            <Text
              component="span"
              inherit
              c="#00C46A"
            >
              {highlight}
            </Text>
          </Title>
        </Stack>
      </Container>
    </Box>
  );
}