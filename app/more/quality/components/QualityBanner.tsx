import {
  Box,
  Container,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function QualityBanner() {
  return (
    <Box
      style={{
        position: "relative",
        height: 280,
        overflow: "hidden",
        backgroundColor: "#F4FBF7",
      }}
    >
      {/* Right image */}
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/quality/quality_banner.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          backgroundSize: "46% auto",
        }}
      />

      {/* Green overlay */}
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
            style={{ letterSpacing: 2 }}
          >
            QUALITY
          </Text>

          <Title
            order={1}
            style={{
              fontSize: 45,
              lineHeight: 1.05,
              fontWeight: 800,
            }}
          >
            Attention to {" "}
            <Text
              component="span"
              inherit
              c="#00C46A"
            >
              Detail
            </Text>
          </Title>
        </Stack>
      </Container>
    </Box>
  );
}